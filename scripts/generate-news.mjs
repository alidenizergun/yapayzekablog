#!/usr/bin/env node
/**
 * YZ Gündemi haber üretim hattı
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
import { BRANDS, BRAND_SLUGS } from '../src/lib/brands.js';
import { findPhoto, usedPhotoIds, photoYaml, addPhotoToFile, CATEGORY_QUERIES } from './photos.mjs';
import { fetchXPosts, formatPostsForPrompt } from './x-feed.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_DIR = path.join(ROOT, 'src/content/haberler');
const GUIDELINES = fs.readFileSync(path.join(ROOT, 'scripts/editorial-guidelines.md'), 'utf8');

const DRY = process.argv.includes('--dry-run');
const MODEL = process.env.NEWS_MODEL || 'claude-sonnet-5-5';
const MAX_ARTICLES = Number(process.env.MAX_ARTICLES || 10);
const LOOKBACK_HOURS = Number(process.env.LOOKBACK_HOURS || 15);
// Hafta sonu (İstanbul saatiyle Cumartesi/Pazar) gelişme az olduğu için arama sayısı yarıya iner.
// WEEKEND_SEARCHES ile değiştirilebilir.
const IST_DAY = new Date(Date.now() + 3 * 3600e3).getUTCDay(); // 0 = Pazar, 6 = Cumartesi
const IS_WEEKEND = IST_DAY === 0 || IST_DAY === 6;
const WEEKDAY_SEARCHES = Number(process.env.MAX_SEARCHES || 20);
const MAX_SEARCHES = IS_WEEKEND
  ? Number(process.env.WEEKEND_SEARCHES || Math.max(5, Math.round(WEEKDAY_SEARCHES / 2)))
  : WEEKDAY_SEARCHES;

// ---------------------------------------------------------------- maliyet takibi
// Fiyatlar: https://platform.claude.com/docs/en/about-claude/pricing (dolar / milyon token)
// Fiyat değişirse burayı güncelleyin.
const PRICES = {
  'claude-sonnet-5-5': { in: 2, out: 10, cacheWrite: 2.5, cacheRead: 0.1 },
  'claude-opus-5-5': { in: 4, out: 20, cacheWrite: 5, cacheRead: 0.2 },
  'claude-haiku-5-5': { in: 0.1, out: 0.5, cacheWrite: 0.125, cacheRead: 0.01, longIn: 0.5, longOut: 2.5, longCacheWrite: 0.625, longCacheRead: 0.05, longAbove: 100000 },
};
const SEARCH_PRICE = 10 / 1000; // arama başına dolar
const X_POST_PRICE = 0.005; // okunan X gönderisi başına yaklaşık dolar
const usage = { requests: 0, input: 0, output: 0, cacheWrite: 0, cacheRead: 0, tokenCost: 0, priced: true };

function track(res) {
  const u = res?.usage;
  if (!u) return;
  const input = u.input_tokens ?? 0;
  const output = u.output_tokens ?? 0;
  const cacheWrite = u.cache_creation_input_tokens ?? 0;
  const cacheRead = u.cache_read_input_tokens ?? 0;
  usage.requests++;
  usage.input += input;
  usage.output += output;
  usage.cacheWrite += cacheWrite;
  usage.cacheRead += cacheRead;
  const p = PRICES[MODEL];
  if (!p) { usage.priced = false; return; }
  const long = p.longAbove && input + cacheWrite + cacheRead > p.longAbove;
  usage.tokenCost += (
    input * (long ? p.longIn : p.in) +
    output * (long ? p.longOut : p.out) +
    cacheWrite * (long ? p.longCacheWrite : p.cacheWrite) +
    cacheRead * (long ? p.longCacheRead : p.cacheRead)
  ) / 1e6;
}

let xPostCount = 0;
function costReport(searches) {
  const searchCost = searches * SEARCH_PRICE;
  const xCost = xPostCount * X_POST_PRICE;
  const claude = usage.tokenCost + searchCost;
  return { searchCost, xCost, claude, total: claude + xCost };
}
const usd = (n) => `$${n.toFixed(2)}`;
const tok = (n) => (n >= 1000 ? `${Math.round(n / 1000).toLocaleString('tr-TR')} bin` : String(n));
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
  if (a.popularity) lines.push(`popularity: ${a.popularity}`);
  if (REQUIRE_REVIEW) lines.push('draft: true');
  if (a.brand) lines.push(`brand: ${a.brand}`);
  if (a.image_query) lines.push(`imageQuery: ${yamlStr(a.image_query)}`);
  if (a.photo) lines.push(...photoYaml(a.photo));
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

  const system = `Sen YZ Gündemi adlı Türkçe yapay zeka haber sitesinin araştırma editörüsün. Görevin, haber olmaya değer YENİ gelişmeleri web aramasıyla bulmak ve her biri için doğrulanmış bilgi notu çıkarmak.\n\n${GUIDELINES}`;
  const user = `Şu an: ${now} (İstanbul).

Son ${LOOKBACK_HOURS} saat içinde yayınlanmış, yapay zeka alanındaki en önemli gelişmeleri bul. En fazla ${MAX_ARTICLES + 2} aday çıkar; önem sırasına koy.

Arama önerileri: büyük yapay zeka şirketlerinin son duyuruları, "AI" + bugünün tarihi, yapay zeka yatırım/satın alma haberleri, yapay zeka regülasyonu, Türkiye yapay zeka haberleri. Mümkün olduğunda birincil kaynağı (resmi blog, duyuru, makale) da bul.
TÜRKİYE: Aramalarının en az ikisini Türkçe yap ve Türkiye'deki yapay zeka gelişmelerine ayır (ör. "yapay zeka girişimi yatırım aldı", "yapay zeka Türkiye duyurdu", kamu kurumlarının yapay zeka duyuruları, Türk şirketlerinin yapay zeka ürünleri). Önemli bir Türkiye gelişmesi varsa adaylara mutlaka ekle ve kategorisini "turkiye" yap.

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
    track(res);
    searches += res.usage?.server_tool_use?.web_search_requests ?? 0;
    lastSearches = searches;
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
        required: ['title', 'spot', 'category', 'tags', 'image', 'brand', 'image_query', 'body_markdown', 'why_it_matters', 'featured', 'popularity', 'tweet', 'sources'],
        properties: {
          title: { type: 'string', description: 'Haber başlığı, 60-100 karakter' },
          spot: { type: 'string', description: 'Spot metni, 1-2 cümle, 140-280 karakter' },
          category: { type: 'string', enum: CATEGORIES.map((c) => c.slug) },
          tags: { type: 'array', items: { type: 'string', description: 'Boşluksuz etiket, örn. OpenAI, YapayZekaAjanları' } },
          image: { type: 'string', enum: Object.keys(IMAGES), description: 'Konuya en uygun illüstrasyon (yedek görsel)' },
          brand: { type: 'string', enum: ['', ...BRAND_SLUGS], description: 'Haberin ANA konusu tek bir şirketse o şirket; değilse boş' },
          image_query: { type: 'string', description: 'Unsplash fotoğraf araması için 2-4 kelimelik İngilizce sorgu; somut bir nesne veya mekan (ör. "data center servers"). Kişi adı, şirket adı, logo yok.' },
          body_markdown: { type: 'string', description: 'Haber gövdesi, Markdown, 3-6 paragraf, başlık tekrarı yok' },
          why_it_matters: { type: 'string', description: '"Bu ne anlama geliyor?" kutusu, 1-2 cümle' },
          featured: { type: 'boolean' },
          popularity: { type: 'integer', description: 'Okunma potansiyeli, 1-100 (yayın kurallarındaki ölçüye göre)' },
          tweet: { type: 'string', description: 'X paylaşım metni, en fazla 220 karakter, link yazma (otomatik eklenir)' },
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
    system: `Sen YZ Gündemi adlı Türkçe yapay zeka haber sitesinin haber editörüsün.\n\n${GUIDELINES}`,
    messages: [{
      role: 'user',
      content: `Aşağıdaki araştırma notlarından en fazla ${MAX_ARTICLES} haber yaz. Notlarda olmayan hiçbir bilgiyi ekleme.

KAYNAK KURALI: "sources" alanına YALNIZCA aşağıdaki izinli adres listesindeki adresleri, birebir aynı yazarak koy. Her habere en az bir, en fazla dört kaynak ekle. Listede olmayan adres kullanan haber yayınlanmaz.

Görseller (image alanı için anahtar: açıklama): ${imageList}
Şirketler (brand alanı; haber tek bir şirketin duyurusu veya o şirketle ilgiliyse): ${Object.entries(BRANDS).map(([k, b]) => `${k} (${b.name})`).join(', ')}
image_query: Haberi temsil edecek gerçek bir fotoğraf için İngilizce, somut bir sahne yaz (ör. "semiconductor wafer factory", "stock exchange trading floor"). Kişi adı, yüz, logo veya marka adı yazma.
Kategoriler: ${CATEGORIES.map((c) => `${c.slug} (${c.name})`).join(', ')}

Notlarda "YENİ GELİŞME YOK" yazıyorsa veya yazılabilecek haber yoksa boş bir "articles" listesi döndür.

İZİNLİ KAYNAK ADRESLERİ:
${allowed || '(yok)'}

ARAŞTIRMA NOTLARI:
${notes}`,
    }],
    output_config: { format: { type: 'json_schema', schema: ARTICLE_SCHEMA } },
  });
  track(res);
  if (res.stop_reason === 'refusal' || res.stop_reason === 'max_tokens') {
    throw new Error(`Yazım adımı tamamlanamadı (stop_reason: ${res.stop_reason}).`);
  }
  const txt = res.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
  return JSON.parse(txt).articles ?? [];
}

// ---------------------------------------------------------------- doğrulama

/** Güvenlik: haber metninden HTML'i ve kaynak listesinde olmayan linkleri temizler.
 *  Web sayfalarına gizlenmiş talimatlar (prompt injection) metne zararlı kod veya link sokmaya çalışabilir. */
function sanitizeBody(md, sourceUrls) {
  const allowed = new Set(sourceUrls);
  return String(md || '')
    .replace(/<\/?[a-z][a-z0-9-]*(\s[^>]*)?>/gi, '') // HTML etiketleri
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1') // görsel gömme yok
    .replace(/\[([^\]]+)\]\(\s*<?([^)\s>]+)>?[^)]*\)/g, (m, text, url) => (allowed.has(url) ? `[${text}](${url})` : text))
    .replace(/(javascript|vbscript|data):/gi, '')
    .trim();
}
const cleanTweet = (t) => String(t || '').replace(/https?:\/\/\S+/g, '').replace(/@(\w)/g, '$1').replace(/\s+/g, ' ').trim().slice(0, 240);

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
      body_markdown: sanitizeBody(a.body_markdown, sources.map((x) => x.url)),
      tweet: cleanTweet(a.tweet),
      title: title.replace(/<[^>]*>/g, ''),
      spot: String(a.spot || '').replace(/<[^>]*>/g, '').trim(),
      why_it_matters: String(a.why_it_matters || '').replace(/<[^>]*>/g, '').trim(),
      popularity: Math.min(100, Math.max(1, Math.round(Number(a.popularity) || 50))),
      tags: [...new Set((a.tags || []).map((t) => String(t).replace(/[#\s]+/g, '')).filter(Boolean))].slice(0, 6),
      sources,
      brand: BRANDS[a.brand] ? a.brand : '',
      image_query: String(a.image_query || '').replace(/[^\p{L}\p{N} -]/gu, ' ').replace(/\s+/g, ' ').trim().slice(0, 60),
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
  // Yalnızca fotoğraf doldurma: Claude çağrılmaz, ücret yalnızca Unsplash (ücretsiz)
  if (/^(1|true)$/i.test(process.env.PHOTOS_ONLY || '')) {
    log('yalnızca fotoğraf doldurma modu');
    await backfillPhotos();
    log(`fotoğraf eklenen eski haber: ${photoNote.backfilled}${photoNote.error ? ' (hata: ' + photoNote.error + ')' : ''}`);
    return summary([], [], 0);
  }
  log(`model: ${MODEL} · mevcut haber: ${existing.length} · en fazla ${MAX_ARTICLES} yeni haber · en fazla ${MAX_SEARCHES} arama${IS_WEEKEND ? ' (hafta sonu)' : ''} · ${REQUIRE_REVIEW ? 'editör onayı AÇIK (taslak)' : 'otomatik yayın'}`);

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
      xPostCount = x.posts.length;
      xNote = x.note;
    } catch (err) {
      xNote = `X takibi bu çalışmada atlandı: ${err.message}`;
    }
    log(xNote);
    const r = await research(anthropic, existing, xPosts);
    seen = r.seen;
    searches = r.searches;
    if (!r.notes || /YENİ GELİŞME YOK/i.test(r.notes) && r.notes.length < 200) {
      log('yeni gelişme bulunamadı.');
      await backfillPhotos();
      return summary([], [], searches);
    }
    articles = await write(anthropic, r.notes, seen);
  }

  const { ok, rejected } = validate(articles, seen, existing);
  for (const r of rejected) log(`ELENDİ: ${r.title} → ${r.reasons.join(', ')}`);

  // Yeni haberlere Unsplash fotoğrafı bul (anahtar yoksa atlanır)
  const usedPhotos = usedPhotoIds(CONTENT_DIR);
  for (const a of ok) {
    try {
      a.photo = await findPhoto(a.image_query || CATEGORY_QUERIES[a.category], usedPhotos);
      if (a.photo) photoNote.added++;
    } catch (err) { photoNote.error = err.message; break; }
  }

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
    xQueue.push({ slug, title: a.title, text: String(a.tweet || '').trim(), importance: a.popularity, featured: Boolean(a.featured), date: iso });
    log(`YAZILDI: ${a.title} (${a.sources.length} kaynak${a.brand ? ', logo: ' + a.brand : ''}${a.photo ? ', fotoğraf: ' + a.photo.author : ''})`);
  });
  if (!DRY && !REQUIRE_REVIEW && xQueue.length) {
    // X paylaşım kuyruğu: yayından sonra scripts/x-post.mjs en önemlilerini paylaşır
    const qFile = path.join(ROOT, 'data/x-kuyruk.json');
    let q = [];
    try { q = JSON.parse(fs.readFileSync(qFile, 'utf8')); } catch {}
    fs.mkdirSync(path.dirname(qFile), { recursive: true });
    fs.writeFileSync(qFile, JSON.stringify([...q, ...xQueue], null, 2) + '\n');
  }
  await backfillPhotos();
  summary(written, rejected, searches);
}
const xQueue = [];

// ---------------------------------------------------------------- fotoğraf doldurma
const photoNote = { added: 0, backfilled: 0, error: '' };
const BACKFILL_LIMIT = Number(process.env.PHOTO_BACKFILL || 15);

/** Fotoğrafı olmayan eski haberlere fotoğraf ekler (her çalışmada en fazla BACKFILL_LIMIT haber) */
async function backfillPhotos() {
  if (DRY || !process.env.UNSPLASH_ACCESS_KEY || photoNote.error) return;
  const used = usedPhotoIds(CONTENT_DIR);
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md')).sort().reverse();
  for (const f of files) {
    if (photoNote.backfilled >= BACKFILL_LIMIT) break;
    const file = path.join(CONTENT_DIR, f);
    const raw = fs.readFileSync(file, 'utf8');
    const fm = raw.split(/^---$/m)[1] || '';
    if (/^photo:/m.test(fm)) continue;
    const query = (fm.match(/^imageQuery:\s*"?([^"\n]+)"?/m)?.[1] || CATEGORY_QUERIES[fm.match(/^category:\s*(\S+)/m)?.[1]] || '').trim();
    try {
      const photo = await findPhoto(query, used);
      if (photo && addPhotoToFile(file, photo)) photoNote.backfilled++;
    } catch (err) { photoNote.error = err.message; break; }
  }
}

function costLines(searches, articleCount) {
  const c = costReport(searches);
  const per = articleCount ? ` · haber başına ${usd(c.total / articleCount)}` : '';
  return {
    c,
    log: `maliyet: ${tok(usage.input + usage.cacheWrite + usage.cacheRead)} giriş + ${tok(usage.output)} çıkış token (${usage.requests} istek) · `
      + `Claude ${usage.priced ? usd(c.claude) : 'fiyat bilinmiyor'} (token ${usd(usage.tokenCost)} + arama ${usd(c.searchCost)}) · `
      + `X ~${usd(c.xCost)} · toplam ~${usd(c.total)}${per}`,
    md: [
      `### Maliyet`,
      `| Kalem | Miktar | Tutar |`,
      `|---|---|---|`,
      `| Claude giriş token | ${usage.input.toLocaleString('tr-TR')} (+ önbellek ${(usage.cacheWrite + usage.cacheRead).toLocaleString('tr-TR')}) | ${usage.priced ? usd(usage.tokenCost) : '?'} (giriş + çıkış) |`,
      `| Claude çıkış token | ${usage.output.toLocaleString('tr-TR')} | |`,
      `| Web araması | ${searches} | ${usd(c.searchCost)} |`,
      `| X gönderisi (tahmini) | ${xPostCount} | ~${usd(c.xCost)} |`,
      `| **Toplam** | ${articleCount} haber | **~${usd(c.total)}**${articleCount ? ` (haber başına ${usd(c.total / articleCount)})` : ''} |`,
    ].join('\n'),
  };
}

/** Her çalışma data/maliyet.csv dosyasına bir satır ekler; aylık toplamı buradan görebilirsiniz. */
function appendCostCsv(searches, articleCount, status) {
  if (DRY) return;
  const c = costReport(searches);
  const file = path.join(ROOT, 'data/maliyet.csv');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, 'tarih,model,durum,haber,arama,x_gonderi,giris_token,cikis_token,claude_usd,x_usd,toplam_usd\n');
  }
  const row = [
    istanbulIso(), MODEL, status, articleCount, searches, xPostCount,
    usage.input + usage.cacheWrite + usage.cacheRead, usage.output,
    c.claude.toFixed(4), c.xCost.toFixed(4), c.total.toFixed(4),
  ].join(',');
  fs.appendFileSync(file, row + '\n');
}

let lastSearches = 0;
function summary(written, rejected, searches) {
  lastSearches = searches;
  const cost = costLines(searches, written.length);
  log(cost.log);
  appendCostCsv(searches, written.length, 'tamam');
  const md = [
    `## YZ Gündemi haber güncellemesi`,
    `- Yeni haber: **${written.length}**${REQUIRE_REVIEW ? ' (taslak, editör onayı bekliyor)' : ''}`,
    `- Elenen: ${rejected.length}`,
    `- Web araması: ${searches}${IS_WEEKEND ? ' (hafta sonu sınırı: ' + MAX_SEARCHES + ')' : ''}`,
    `- ${xNote}`,
    `- Unsplash: ${process.env.UNSPLASH_ACCESS_KEY ? `${photoNote.added} yeni habere, ${photoNote.backfilled} eski habere fotoğraf eklendi${photoNote.error ? ' (hata: ' + photoNote.error + ')' : ''}` : 'kapalı (UNSPLASH_ACCESS_KEY yok)'}`,
    ...written.map((w) => `  - ✅ ${w.title} (${w.sources} kaynak)`),
    ...rejected.map((r) => `  - ❌ ${r.title} — ${r.reasons.join(', ')}`),
    '',
    cost.md,
  ].join('\n');
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + '\n');
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `count=${written.length}\nchanged=${written.length + photoNote.backfilled}\n`);
}

main().catch((err) => {
  console.error('[haber] HATA:', err?.message || err);
  // Hata olsa da o ana kadarki harcama görünsün
  if (usage.requests) log(costLines(lastSearches, 0).log);
  process.exit(1);
});
