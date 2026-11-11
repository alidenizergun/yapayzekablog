#!/usr/bin/env node
/**
 * Nöron haber üretim hattı
 *
 * 1) Araştırma: Claude, web aramasıyla son saatlerdeki yapay zeka gelişmelerini bulur.
 * 2) Yazım:     Claude, bulunan gelişmeleri yayın kurallarına göre Türkçe haber olarak
 *               yazar (JSON şemasıyla, yapılandırılmış çıktı).
 * 3) Doğrulama: Her haberin kaynağı, araştırma adımında GERÇEKTEN görülen adreslerden
 *               olmalı. Kaynağı doğrulanamayan, tekrar eden veya kuralları ihlal eden
 *               haberler atılır.
 * 4) Kayıt:     Geçen haberler src/content/haberler/ altına Markdown olarak yazılır.
 *
 * Kullanım:
 *   ANTHROPIC_API_KEY=... node scripts/generate-news.mjs
 *   node scripts/generate-news.mjs --dry-run      # API çağırmadan örnek veriyle dener
 *
 * Ortam değişkenleri (hepsi isteğe bağlı, ANTHROPIC_API_KEY hariç):
 *   NEWS_MODEL        varsayılan: claude-sonnet-5-5
 *   MAX_ARTICLES      bir çalışmada en fazla kaç haber (varsayılan 10)
 *   LOOKBACK_HOURS    kaç saat geriye bakılsın (varsayılan 15)
 *   MAX_SEARCHES      bir çalışmada en fazla kaç web araması (varsayılan 20)
 *   REQUIRE_REVIEW    "true" ise haberler taslak (draft) olarak kaydedilir, siteye çıkmaz
 *   X_BEARER_TOKEN    tanımlıysa X'teki takip listesi (scripts/x-accounts.json) de taranır
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATEGORIES, IMAGES } from '../src/lib/site.js';
import { fetchXPosts, formatPostsForPrompt } from './x-feed.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_DIR = path.join(ROOT, 'src/content/haberler');
const GUIDELINES = fs.readFileSync(path.join(ROOT, 'scripts/editorial-guidelines.md'), 'utf8');

const DRY = process.argv.includes('--dry-run');
const MODEL = process.env.NEWS_MODEL || 'claude-sonnet-5-5';
const MAX_ARTICLES = Number(process.env.MAX_ARTICLES || 10);
const LOOKBACK_HOURS = Number(process.env.LOOKBACK_HOURS || 15);
const MAX_SEARCHES = Number(process.env.MAX_SEARCHES || 20);
const REQUIRE_REVIEW = /^(1|true|yes|evet)$/i.test(process.env.REQUIRE_REVIEW || '');

const log = (...a) => console.log('[haber]', ...a);

// ---------------------------------------------------------------- yardımcılar

function normalizeUrl(u) {
  try {
    const x = new URL(u);
    x.hash = '';
    for (const k of [...x.searchParams.keys()]) if (/^(utm_|ref$|fbclid|gclid)/i.test(k)) x.searchParams.delete(k);
    return (x.hostname.replace(/^www\./, '') + x.pathname.replace(/\/+$/, '') + (x.search || '')).toLowerCase();
  } catch {
    return null;
  }
}

const TR_MAP = { ç: 'c', ğ: 'g', ı: 'i', İ: 'i', ö: 'o', ş: 's', ü: 'u', Ç: 'c', Ğ: 'g', Ö: 'o', Ş: 's', Ü: 'u' };
function slugify(s) {
  return s
    .replace(/[çğıİöşüÇĞÖŞÜ]/g, (c) => TR_MAP[c])
    .toLowerCase()
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .split('-').slice(0, 9).join('-')
    .slice(0, 80);
}

const STOP = new Set('ve ile bir bu da de için olarak yeni yapay zeka ai the a of to in for on and'.split(' '));
const words = (s) => new Set(slugify(s).split('-').filter((w) => w.length > 2 && !STOP.has(w)));
function similarity(a, b) {
  const A = words(a), B = words(b);
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  return inter / Math.min(A.size, B.size);
}

function istanbulIso(d = new Date()) {
  // Europe/Istanbul sabit UTC+03:00
  const t = new Date(d.getTime() + 3 * 3600e3);
  return t.toISOString().replace(/\.\d{3}Z$/, '+03:00');
}

function loadExisting() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md')).map((f) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, f), 'utf8');
    const fm = raw.split(/^---$/m)[1] || '';
    const title = (fm.match(/^title:\s*(.+)$/m)?.[1] || '').replace(/^["']|["']$/g, '').replace(/\\"/g, '"');
    const date = new Date(fm.match(/^date:\s*(.+)$/m)?.[1]?.trim() || 0);
    const urls = [...fm.matchAll(/url:\s*"?([^"\n]+)"?/g)].map((m) => m[1].trim());
    return { file: f, slug: f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''), title, date, urls };
  });
}

const yamlStr = (s) => JSON.stringify(String(s ?? '').trim());

function toMarkdown(a, dateIso) {
  const lines = [
    '---',
    `title: ${yamlStr(a.title)}`,
    `spot: ${yamlStr(a.spot)}`,
    `category: ${a.category}`,
    `tags: [${a.tags.map(yamlStr).join(', ')}]`,
    `date: ${dateIso}`,
    `image: ${a.image}`,
  ];
  if (a.featured) lines.push('featured: true');
  if (REQUIRE_REVIEW) lines.push('draft: true');
  if (a.why_it_matters) lines.push(`whyItMatters: ${yamlStr(a.why_it_matters)}`);
  lines.push('sources:');
  for (const s of a.sources) {
    lines.push(`  - title: ${yamlStr(s.title)}`, `    url: ${yamlStr(s.url)}`);
    if (s.publisher) lines.push(`    publisher: ${yamlStr(s.publisher)}`);
  }
  lines.push('---', '', a.body_markdown.trim(), '');
  return lines.join('\n');
}

// ---------------------------------------------------------------- Claude çağrıları

async function client() {
  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  if (!process.env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY tanımlı değil.');
  return new Anthropic({ maxRetries: 4, timeout: 10 * 60 * 1000 });
}

/** Araştırma adımı: web araması yapar, bulunan gelişmeleri ve görülen tüm adresleri döndürür. */
async function research(anthropic, existing, xPosts = []) {
  const recent = existing
    .filter((e) => e.date.valueOf() > Date.now() - 7 * 86400e3)
    .sort((a, b) => b.date - a.date)
    .slice(0, 80);
  const covered = recent.map((e) => `- ${e.title}${e.urls[0] ? ` (${e.urls[0]})` : ''}`).join('\n') || '- (henüz yok)';
  const now = istanbulIso();

  const system = `Sen Nöron adlı Türkçe yapay zeka haber sitesinin araştırma editörüsün. Görevin, haber olmaya değer YENİ gelişmeleri web aramasıyla bulmak ve her biri için doğrulanmış bilgi notu çıkarmak.\n\n${GUIDELINES}`;
  const user = `Şu an: ${now} (İstanbul).

Son ${LOOKBACK_HOURS} saat içinde yayınlanmış, yapay zeka alanındaki en önemli gelişmeleri bul. En fazla ${MAX_ARTICLES + 2} aday çıkar; önem sırasına koy.

Arama önerileri: büyük yapay zeka şirketlerinin son duyuruları, "AI" + bugünün tarihi, yapay zeka yatırım/satın alma haberleri, yapay zeka regülasyonu, Türkiye yapay zeka haberleri. Mümkün olduğunda birincil kaynağı (resmi blog, duyuru, makale) da bul.

Aşağıdaki haberler son 7 günde zaten yayınlandı. Bunları ve bunların yeni bilgi içermeyen tekrarlarını ATLA:
${covered}
${xPosts.length ? `
X'TEKİ TAKİP LİSTESİNDEN YENİ GÖNDERİLER (resmi X API'den alındı; adresleri gerçektir):
${formatPostsForPrompt(xPosts)}

Bu gönderilerden haber değeri taşıyanları (lansman, resmi duyuru, önemli açıklama, yeni araştırma) aday olarak değerlendir. Kişisel görüş, şaka, tanıtım ve sohbet niteliğindeki gönderileri ele. Seçtiğin gönderinin adresini kaynaklara ekle ve mümkünse web aramasıyla resmi blog veya güvenilir bir haber kaynağından doğrula. Bir kişinin gönderisi tek başına olgu değildir: notta "X, şunu söyledi/duyurdu" diye belirt.
` : ''}
Her aday için şu biçimde not yaz:
### <kısa başlık>
- Ne oldu: <olgular; kim, ne, ne zaman, rakamlar>
- Yayın tarihi: <kaynaktaki tarih>
- Neden önemli: <1 cümle>
- Kaynaklar: <aramada GERÇEKTEN gördüğün sayfaların tam adresleri, her biri ayrı satırda>

Kurallar: Yalnızca arama sonuçlarında gördüğün bilgileri yaz. Tarihi ${LOOKBACK_HOURS} saatten eskiyse veya belirsizse adayı ele. Yeterince önemli yeni gelişme yoksa daha az aday yaz; hiç yoksa yalnızca "YENİ GELİŞME YOK" yaz.`;

  const messages = [{ role: 'user', content: user }];
  const seen = new Map(); // normalizeUrl -> { url, title }
  // X API'den gelen gönderi adresleri gerçek olduğu için izinli kaynaklara eklenir
  for (const p of xPosts) seen.set(normalizeUrl(p.url), { url: p.url, title: `@${p.username} X gönderisi` });
  let text = '';
  let searches = 0;

  for (let i = 0; i < 6; i++) {
    const res = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 24000,
      system,
      messages,
      tools: [{ type: 'web_search_20250305', name: 'web_search', max_uses: MAX_SEARCHES }],
    });
    searches += res.usage?.server_tool_use?.web_search_requests ?? 0;
    for (const block of res.content) {
      if (block.type === 'web_search_tool_result' && Array.isArray(block.content)) {
        for (const r of block.content) {
          const k = normalizeUrl(r.url);
          if (k && !seen.has(k)) seen.set(k, { url: r.url, title: r.title, pageAge: r.page_age });
        }
      }
      if (block.type === 'text') {
        text += block.text;
        for (const c of block.citations ?? []) {
          const k = normalizeUrl(c.url);
          if (k && !seen.has(k)) seen.set(k, { url: c.url, title: c.title });
        }
      }
    }
    if (res.stop_reason === 'pause_turn') {
      messages.push({ role: 'assistant', content: res.content });
      continue;
    }
    break;
  }
  log(`araştırma: ${searches} arama, ${seen.size} farklı kaynak görüldü`);
  return { notes: text.trim(), seen, searches };
}

const ARTICLE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['articles'],
  properties: {
    articles: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['title', 'spot', 'category', 'tags', 'image', 'body_markdown', 'why_it_matters', 'featured', 'sources'],
        properties: {
          title: { type: 'string', description: 'Haber başlığı, 60-100 karakter' },
          spot: { type: 'string', description: 'Spot metni, 1-2 cümle, 140-280 karakter' },
          category: { type: 'string', enum: CATEGORIES.map((c) => c.slug) },
          tags: { type: 'array', items: { type: 'string', description: 'Boşluksuz etiket, örn. OpenAI, YapayZekaAjanları' } },
          image: { type: 'string', enum: Object.keys(IMAGES), description: 'Konuya en uygun illüstrasyon' },
          body_markdown: { type: 'string', description: 'Haber gövdesi, Markdown, 3-6 paragraf, başlık tekrarı yok' },
          why_it_matters: { type: 'string', description: '"Bu ne anlama geliyor?" kutusu, 1-2 cümle' },
          featured: { type: 'boolean' },
          sources: {
            type: 'array',
            items: {
              type: 'object',
              additionalProperties: false,
              required: ['title', 'url', 'publisher'],
              properties: {
                title: { type: 'string' },
                url: { type: 'string', description: 'Yalnızca izin verilen kaynak listesindeki adreslerden biri' },
                publisher: { type: 'string', description: 'Yayıncı adı, örn. OpenAI, TechCrunch, Webrazzi' },
              },
            },
          },
        },
      },
    },
  },
};

/** Yazım adımı: notları yayın kurallarına uygun Türkçe haberlere çevirir. */
async function write(anthropic, notes, seen) {
  const allowed = [...seen.values()].map((s) => `- ${s.url}${s.title ? ` — ${s.title}` : ''}`).join('\n');
  const imageList = Object.entries(IMAGES).map(([k, v]) => `${k}: ${v}`).join('; ');
  const res = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 32000,
    system: `Sen Nöron adlı Türkçe yapay zeka haber sitesinin haber editörüsün.\n\n${GUIDELINES}`,
    messages: [{
      role: 'user',
      content: `Aşağıdaki araştırma notlarından en fazla ${MAX_ARTICLES} haber yaz. Notlarda olmayan hiçbir bilgiyi ekleme.

KAYNAK KURALI: "sources" alanına YALNIZCA aşağıdaki izinli adres listesindeki adresleri, birebir aynı yazarak koy. Her habere en az bir, en fazla dört kaynak ekle. Listede olmayan adres kullanan haber yayınlanmaz.

Görseller (image alanı için anahtar: açıklama): ${imageList}
Kategoriler: ${CATEGORIES.map((c) => `${c.slug} (${c.name})`).join(', ')}

Notlarda "YENİ GELİŞME YOK" yazıyorsa veya yazılabilecek haber yoksa boş bir "articles" listesi döndür.

İZİNLİ KAYNAK ADRESLERİ:
${allowed || '(yok)'}

ARAŞTIRMA NOTLARI:
${notes}`,
    }],
    output_config: { format: { type: 'json_schema', schema: ARTICLE_SCHEMA } },
  });
  if (res.stop_reason === 'refusal' || res.stop_reason === 'max_tokens') {
    throw new Error(`Yazım adımı tamamlanamadı (stop_reason: ${res.stop_reason}).`);
  }
  const txt = res.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
  return JSON.parse(txt).articles ?? [];
}

// ---------------------------------------------------------------- doğrulama

function validate(articles, seen, existing) {
  const ok = [];
  const rejected = [];
  const existingUrls = new Set(existing.flatMap((e) => e.urls.map(normalizeUrl)).filter(Boolean));
  const recent = existing.filter((e) => e.date.valueOf() > Date.now() - 7 * 86400e3);
  let featuredUsed = false;

  for (const a of articles) {
    const reasons = [];
    const title = (a.title || '').trim();
    const sources = (a.sources || [])
      .map((s) => {
        const hit = seen.get(normalizeUrl(s.url));
        return hit ? { title: (s.title || hit.title || '').trim() || hit.url, url: hit.url, publisher: (s.publisher || '').trim() || undefined } : null;
      })
      .filter(Boolean)
      .filter((s, i, arr) => arr.findIndex((x) => normalizeUrl(x.url) === normalizeUrl(s.url)) === i)
      .slice(0, 4);

    if (title.length < 20 || title.length > 140) reasons.push('başlık uzunluğu');
    if ((a.spot || '').length < 60 || (a.spot || '').length > 320) reasons.push('spot uzunluğu');
    if ((a.body_markdown || '').split(/\s+/).length < 60) reasons.push('gövde çok kısa');
    if (!CATEGORIES.some((c) => c.slug === a.category)) reasons.push('kategori');
    if (!IMAGES[a.image]) reasons.push('görsel');
    if (sources.length === 0) reasons.push('doğrulanmış kaynak yok');
    if (sources.length && sources.every((s) => existingUrls.has(normalizeUrl(s.url)))) reasons.push('kaynak daha önce kullanılmış');
    const dup = [...recent, ...ok.map((o) => ({ title: o.title }))].find((e) => similarity(e.title, title) >= 0.6);
    if (dup) reasons.push(`benzer haber var: "${dup.title}"`);

    if (reasons.length) { rejected.push({ title, reasons }); continue; }

    const featured = Boolean(a.featured) && !featuredUsed;
    if (featured) featuredUsed = true;
    ok.push({
      ...a,
      title,
      featured,
      tags: [...new Set((a.tags || []).map((t) => String(t).replace(/[#\s]+/g, '')).filter(Boolean))].slice(0, 6),
      sources,
    });
  }
  return { ok, rejected };
}

// ---------------------------------------------------------------- ana akış

function dryRunData() {
  const seen = new Map();
  const add = (url, title) => seen.set(normalizeUrl(url), { url, title });
  add('https://example.com/ai/yeni-model-duyurusu', 'Örnek şirket yeni modelini duyurdu');
  add('https://example.org/news/ai-model', 'Örnek haber sitesi: yeni model');
  const body = 'Örnek Şirket, yeni yapay zeka modelini bugün duyurdu. Bu metin, üretim hattının uçtan uca çalıştığını görmek için kullanılan deneme içeriğidir ve gerçek bir haber değildir. '.repeat(4);
  return {
    seen,
    articles: [
      {
        title: 'DENEME: Örnek Şirket yeni yapay zeka modelini kullanıma sundu',
        spot: 'Bu bir deneme haberidir. Üretim hattının kaynak doğrulama, tekrar kontrolü ve dosya yazma adımlarını test etmek için oluşturuldu.',
        category: 'modeller', tags: ['Deneme', 'Modeller'], image: 'modeller', body_markdown: body,
        why_it_matters: 'Deneme içeriğidir.', featured: false,
        sources: [
          { title: 'Örnek duyuru', url: 'https://example.com/ai/yeni-model-duyurusu?utm_source=x', publisher: 'Örnek Şirket' },
          { title: 'Uydurma kaynak', url: 'https://uydurma.example.net/yok', publisher: 'Yok' },
        ],
      },
      {
        title: 'DENEME: Kaynaksız haber elenmeli',
        spot: 'Bu deneme haberinin kaynağı izinli listede olmadığı için doğrulama adımında elenmesi gerekir; yayınlanmamalıdır.',
        category: 'modeller', tags: ['Deneme'], image: 'modeller', body_markdown: body,
        why_it_matters: '', featured: false,
        sources: [{ title: 'Uydurma', url: 'https://uydurma.example.net/yok-2', publisher: 'Yok' }],
      },
    ],
  };
}

let xNote = 'X takibi kapalı';

async function main() {
  const existing = loadExisting();
  log(`model: ${MODEL} · mevcut haber: ${existing.length} · en fazla ${MAX_ARTICLES} yeni haber · ${REQUIRE_REVIEW ? 'editör onayı AÇIK (taslak)' : 'otomatik yayın'}`);

  let articles, seen, searches = 0;
  if (DRY) {
    ({ articles, seen } = dryRunData());
    log('deneme modu: API çağrılmıyor');
  } else {
    const anthropic = await client();
    let xPosts = [];
    try {
      const x = await fetchXPosts({ root: ROOT, lookbackHours: LOOKBACK_HOURS, log: (m) => log(m) });
      xPosts = x.posts;
      xNote = x.note;
    } catch (err) {
      xNote = `X takibi bu çalışmada atlandı: ${err.message}`;
    }
    log(xNote);
    const r = await research(anthropic, existing, xPosts);
    seen = r.seen;
    searches = r.searches;
    if (!r.notes || /YENİ GELİŞME YOK/i.test(r.notes) && r.notes.length < 200) {
      log('yeni gelişme bulunamadı, çıkılıyor.');
      return summary([], [], searches);
    }
    articles = await write(anthropic, r.notes, seen);
  }

  const { ok, rejected } = validate(articles, seen, existing);
  for (const r of rejected) log(`ELENDİ: ${r.title} → ${r.reasons.join(', ')}`);

  const written = [];
  const now = new Date();
  ok.forEach((a, i) => {
    const date = new Date(now.getTime() - i * 60e3); // aynı çalışmadaki haberler dakikalarla sıralanır
    const iso = istanbulIso(date);
    let slug = slugify(a.title) || `haber-${Date.now()}`;
    const taken = new Set(existing.map((e) => e.slug).concat(written.map((w) => w.slug)));
    while (taken.has(slug)) slug += '-2';
    const file = `${iso.slice(0, 10)}-${slug}.md`;
    const out = path.join(CONTENT_DIR, DRY ? `_deneme-${file}` : file);
    if (DRY) {
      log(`(deneme) yazılacaktı: ${file}\n${toMarkdown(a, iso)}`);
    } else {
      fs.writeFileSync(out, toMarkdown(a, iso));
    }
    written.push({ slug, title: a.title, sources: a.sources.length });
    log(`YAZILDI: ${a.title} (${a.sources.length} kaynak)`);
  });
  summary(written, rejected, searches);
}

function summary(written, rejected, searches) {
  const md = [
    `## Nöron haber güncellemesi`,
    `- Yeni haber: **${written.length}**${REQUIRE_REVIEW ? ' (taslak, editör onayı bekliyor)' : ''}`,
    `- Elenen: ${rejected.length}`,
    `- Web araması: ${searches}`,
    `- ${xNote}`,
    ...written.map((w) => `  - ✅ ${w.title} (${w.sources} kaynak)`),
    ...rejected.map((r) => `  - ❌ ${r.title} — ${r.reasons.join(', ')}`),
  ].join('\n');
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + '\n');
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `count=${written.length}\n`);
}

main().catch((err) => {
  console.error('[haber] HATA:', err?.message || err);
  process.exit(1);
});
