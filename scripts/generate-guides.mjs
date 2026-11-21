// İş kolu rehberleri: src/lib/sectors.js'teki konu listesinden henüz yazılmamış rehberleri üretir.
// 1) Araştırma: ucuz model + web araması, her konu için doğrulanmış notlar ve gerçek kaynak adresleri
// 2) Yazım: yazım modeli (Batch API, yarı fiyat) notlardan rehberi yapılandırılmış biçimde yazar
// 3) Denetim: kaynaklar yalnızca aramada görülen adreslerden, uzunluk ve alan kuralları; geçmeyen rehber yazılmaz
// Kullanım: node scripts/generate-guides.mjs [--sector=hukuk,pazarlama] [--limit=N] [--dry-run]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'src/content/rehberler');
const GUIDELINES = fs.readFileSync(path.join(ROOT, 'scripts/editorial-guidelines.md'), 'utf8');
const { SECTORS } = await import(path.join(ROOT, 'src/lib/sectors.js'));
const { TOOLS } = await import(path.join(ROOT, 'src/lib/tools.js'));
const { GLOSSARY } = await import(path.join(ROOT, 'src/lib/glossary.js'));

const args = process.argv.slice(2);
const arg = (k) => (args.find((a) => a.startsWith(`--${k}=`)) || '').split('=')[1];
const ONLY = (arg('sector') || process.env.SECTORS || '').split(',').map((s) => s.trim()).filter(Boolean);
const LIMIT = Number(arg('limit') || process.env.GUIDE_LIMIT || 0);
const DRY = args.includes('--dry-run');
const MODEL = process.env.GUIDE_MODEL || 'claude-sonnet-5-5';
const RESEARCH_MODEL = process.env.RESEARCH_MODEL || 'claude-haiku-5-5';
const SEARCHES = Number(process.env.GUIDE_SEARCHES || 6);
const CONCURRENCY = Number(process.env.GUIDE_CONCURRENCY || 4);
const BATCH_WAIT_MIN = Number(process.env.BATCH_WAIT_MIN || 40);
const TOPIC_ENUM = ['Temel kullanım', 'Yazı ve içerik', 'İş ve kariyer', 'Eğitim ve öğrenme', 'Güvenlik ve gizlilik', 'Teknik'];
const log = (...a) => console.log('[rehber]', ...a);

// ------------------------------------------------------------ maliyet
const PRICES = { 'claude-sonnet-5-5': { in: 2, out: 10 }, 'claude-haiku-5-5': { in: 0.1, out: 0.5, longIn: 0.5, longOut: 2.5, longAbove: 100000 }, 'claude-opus-5-5': { in: 4, out: 20 } };
let tokenCost = 0, searches = 0;
function track(res, model, batch = false) {
  const u = res?.usage; const p = PRICES[model]; if (!u || !p) return;
  const inp = (u.input_tokens ?? 0) + (u.cache_creation_input_tokens ?? 0) + (u.cache_read_input_tokens ?? 0);
  const long = p.longAbove && inp > p.longAbove;
  tokenCost += (batch ? 0.5 : 1) * (inp * (long ? p.longIn : p.in) + (u.output_tokens ?? 0) * (long ? p.longOut : p.out)) / 1e6;
}

// ------------------------------------------------------------ yardımcılar
function normalizeUrl(u) {
  try { const x = new URL(u); x.hash = ''; for (const k of [...x.searchParams.keys()]) if (/^utm_|^ref$|^fbclid$|^gclid$/i.test(k)) x.searchParams.delete(k); return x.href.replace(/\/$/, ''); }
  catch { return null; }
}
const WEAK = /(substack\.com|beehiiv\.com|medium\.com|ghost\.io|linkedin\.com\/pulse|reddit\.com|quora\.com|news\.ycombinator\.com|\/newsletter\/|aggregat)/i;
const yamlStr = (s) => JSON.stringify(String(s ?? '').trim());
const words = (s) => String(s).split(/\s+/).filter(Boolean).length;
const istDate = () => new Date(Date.now() + 3 * 3600e3).toISOString().slice(0, 10);

// Site içi bağlantı listesi (yazar yalnızca bunlara bağlantı verebilir)
const existingGuides = fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));
const plannedGuides = SECTORS.flatMap((s) => s.topics.map((t) => t.slug));
const INTERNAL = new Map([
  ...[...new Set([...existingGuides, ...plannedGuides])].map((g) => [`/rehber/${g}/`, 'rehber']),
  ...TOOLS.map((t) => [`/arac/${t.slug}/`, `araç: ${t.name}`]),
  ...SECTORS.map((s) => [`/sektor/${s.slug}/`, s.title]),
  ...GLOSSARY.map((g) => [`/sozluk/${g.slug}/`, `sözlük: ${g.term}`]),
  ['/yatirimlar/', 'yatırım takipçisi'], ['/raporlar/', 'yapay zeka raporları'], ['/turkiye-yapay-zeka/', "Türkiye'de yapay zeka"],
  ['/modeller-karsilastirma/', 'model API fiyatları'], ['/en-iyi-yapay-zeka-uygulamalari/', 'en iyi yapay zeka uygulamaları (işe göre)'], ['/karsilastir/', 'karşılaştırmalar'],
]);
function sanitizeBody(md, allowedExternal) {
  return String(md || '')
    .replace(/<\/?[a-z][a-z0-9-]*(\s[^>]*)?>/gi, '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\(\s*<?([^)\s>]+)>?[^)]*\)/g, (m, text, url) => {
      const n = normalizeUrl(url);
      if (url.startsWith('/') && INTERNAL.has(url.replace(/[?#].*$/, ''))) return `[${text}](${url})`;
      return n && allowedExternal.has(n) ? `[${text}](${url})` : text;
    })
    .replace(/(javascript|vbscript|data):/gi, '')
    .replace(/^#\s.*$/m, '') // gövdede H1 olmaz
    .trim();
}

async function client() {
  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  if (!process.env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY tanımlı değil.');
  return new Anthropic({ maxRetries: 4, timeout: 10 * 60 * 1000 });
}

// ------------------------------------------------------------ 1) araştırma
async function research(anthropic, sector, topic) {
  const seen = new Map();
  const system = `Sen YZ Gündemi adlı Türkçe yapay zeka sitesinin araştırma editörüsün. Bir rehber yazısı için web aramasıyla doğrulanmış bilgi topluyorsun.\n\n${GUIDELINES}`;
  const user = `Bugün: ${istDate()}. Konu: "${topic.title}" (bölüm: ${sector.title}).
Kapsam: ${topic.brief}

En fazla ${SEARCHES} arama yap. Okura pratik ve doğru bilgi verecek olgular topla: güncel (2025-2026) gelişmeler, resmi kurum ve şirket kaynakları, araştırma ve raporların rakamları, Türkiye'ye özgü bilgiler. Türkiye ile ilgili bilgiler için Türkçe arama yap.
Kapsamda örnek, vaka, kurum veya düzenleme adı geçiyorsa bunları özellikle ara ve somut ayrıntıları (tarih, rakam, karar) not et.
Öncelikli kaynaklar: resmi kurum ve şirket sayfaları, mevzuat, akademik çalışmalar, tanınmış haber kuruluşları. Bülten, derleme sitesi, Substack/Medium yazısı ve forumları kaynak sayma.

Notları maddeler halinde yaz. Her maddenin sonunda dayandığı sayfanın tam adresini parantez içinde ver. Yalnızca aramada GERÇEKTEN gördüğün bilgileri yaz; bulamadığın konuyu "doğrulanamadı" diye belirt, tahmin yürütme.`;
  const messages = [{ role: 'user', content: user }];
  let text = '';
  let stop = '';
  for (let i = 0; i < 6; i++) {
    const res = await anthropic.messages.create({ model: RESEARCH_MODEL, max_tokens: 10000, system, messages, tools: [{ type: 'web_search_20250305', name: 'web_search', max_uses: SEARCHES }] });
    track(res, RESEARCH_MODEL);
    searches += res.usage?.server_tool_use?.web_search_requests ?? 0;
    for (const b of res.content) {
      if (b.type === 'web_search_tool_result' && Array.isArray(b.content)) for (const r of b.content) { const k = normalizeUrl(r.url); if (k && !seen.has(k)) seen.set(k, { url: r.url, title: r.title }); }
      if (b.type === 'text') { text += b.text; for (const c of b.citations ?? []) { const k = normalizeUrl(c.url); if (k && !seen.has(k)) seen.set(k, { url: c.url, title: c.title }); } }
    }
    stop = res.stop_reason;
    if (res.stop_reason === 'pause_turn') { messages.push({ role: 'assistant', content: res.content }); continue; }
    // Aramalar token sınırını doldurup not yazılmadıysa: yeni arama yapmadan notları yazmasını iste
    if (res.stop_reason === 'max_tokens' && !text.trim() && seen.size) {
      messages.push({ role: 'assistant', content: res.content.filter((b) => b.type !== 'text' || b.text.trim()) });
      messages.push({ role: 'user', content: 'Yeni arama yapma. Şimdiye kadar bulduklarını kurallara uygun notlar halinde yaz; her maddenin sonunda kaynak adresini ver.' });
      continue;
    }
    break;
  }
  return { notes: text.trim(), seen, stop };
}

// ------------------------------------------------------------ 2) yazım
const SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['title', 'description', 'summary', 'level', 'topic', 'terms', 'faq', 'body_markdown', 'sources'],
  properties: {
    title: { type: 'string', description: 'Başlık, 40-110 karakter, cümle düzeni (yalnızca ilk kelime ve özel adlar büyük harf)' },
    description: { type: 'string', description: 'Arama sonucu açıklaması, 120-260 karakter' },
    summary: { type: 'array', items: { type: 'string' }, description: '"Kısaca" kutusu: 3 madde, her biri tek cümle' },
    level: { type: 'string', enum: ['Başlangıç', 'Orta', 'İleri'] },
    topic: { type: 'string', enum: TOPIC_ENUM },
    terms: { type: 'array', items: { type: 'string' }, description: 'Yalnızca verilen sözlük listesinden 2-5 ilgili terim slug\'ı' },
    faq: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['q', 'a'], properties: { q: { type: 'string' }, a: { type: 'string', description: '1-3 cümle' } } }, description: '3 soru-cevap; okurun gerçekten arayacağı sorular' },
    body_markdown: { type: 'string', description: 'Rehber gövdesi, Markdown: giriş paragrafı + 5-8 adet ## ara başlıklı bölüm; 900-1500 kelime; başlık (H1) yok' },
    sources: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['title', 'url'], properties: { title: { type: 'string', description: 'Kaynağın kısa adı, ör. "Avrupa Komisyonu: AI Act"' }, url: { type: 'string', description: 'Yalnızca izinli adres listesinden, birebir' } } }, description: '3-8 kaynak; metindeki bilgilerin dayandığı sayfalar' },
  },
};
function writeParams(sector, topic, notes, seen) {
  const allowed = [...seen.values()].filter((s) => !WEAK.test(s.url)).map((s) => `- ${s.url}${s.title ? ` — ${s.title}` : ''}`).join('\n');
  const internal = [...INTERNAL].filter(([p]) => !p.startsWith('/sozluk/')).map(([p, n]) => `${p} (${n})`).join(', ');
  const glossary = GLOSSARY.map((g) => g.slug).join(', ');
  return {
    model: MODEL, max_tokens: 16000,
    system: `Sen YZ Gündemi adlı Türkçe yapay zeka sitesinin rehber editörüsün. Okurlar o sektörde çalışan profesyoneller ve meraklılar.\n\n${GUIDELINES}`,
    messages: [{ role: 'user', content: `"${sector.title}" bölümü için şu rehberi yaz: ${topic.title}
Kapsam: ${topic.brief}

KURALLAR
- Yalnızca araştırma notlarındaki bilgileri kullan; notlarda olmayan rakam, tarih, kurum adı, dava, ürün veya özellik ekleme. Notlarda "doğrulanamadı" denen konuyu yazma ya da genel ifadeyle geç.
- Pratik ve dengeli yaz: ne işe yarar, nasıl başlanır, riskler ve sınırlar. Abartılı vaatler, pazarlama dili ve "devrim" gibi klişeler yok.
- Rakam ve iddiaları metinde kaynağıyla birlikte ver: ilgili cümlede kaynağa Markdown bağlantısı ekle ([kurum adı](adres)); bağlantı adresi izinli listeden olmalı.
- Uygun yerlerde site içi sayfalara bağlantı ver (en fazla 5): ${internal}
- Sağlık konularında tıbbi tavsiye, finans konularında yatırım tavsiyesi, hukuk konularında hukuki görüş verme; gerektiğinde uzmana yönlendir.
- Ara başlıklar cümle düzeninde, kısa ve açıklayıcı. Gövdede başlık (H1) tekrarı yok. Okura "siz" diye hitap et (ör. "deneyin", "kontrol edin") ve metin boyunca tutarlı ol.
- Yazdıktan sonra metni "Türkçe editoryal kurallar"a göre son kez oku ve düzelt.
- "sources" alanına YALNIZCA aşağıdaki izinli adreslerden, metinde kullandıklarını birebir koy (3-8 adet).
- "terms" için yalnızca şu sözlük slug'larından seç: ${glossary}

İZİNLİ KAYNAK ADRESLERİ:
${allowed || '(yok)'}

ARAŞTIRMA NOTLARI:
${notes}` }],
    output_config: { format: { type: 'json_schema', schema: SCHEMA } },
  };
}

async function writeAll(anthropic, jobs) {
  const out = new Map();
  try {
    const b = await anthropic.messages.batches.create({ requests: jobs.map((j) => ({ custom_id: j.topic.slug, params: writeParams(j.sector, j.topic, j.notes, j.seen) })) });
    log(`Batch API: ${b.id} (${jobs.length} rehber), en fazla ${BATCH_WAIT_MIN} dk beklenecek`);
    const until = Date.now() + BATCH_WAIT_MIN * 60e3;
    let st = b;
    while (st.processing_status !== 'ended' && Date.now() < until) { await new Promise((r) => setTimeout(r, 20e3)); st = await anthropic.messages.batches.retrieve(b.id); }
    if (st.processing_status === 'ended') {
      for await (const item of await anthropic.messages.batches.results(b.id)) {
        if (item.result?.type === 'succeeded') { track(item.result.message, MODEL, true); out.set(item.custom_id, item.result.message); }
        else log(`Batch sonucu ${item.custom_id}: ${item.result?.type}`);
      }
    } else { log('Batch süre sınırını aştı; iptal ediliyor'); await anthropic.messages.batches.cancel(b.id).catch(() => {}); }
  } catch (e) { log(`Batch API kullanılamadı: ${e.message}`); }
  for (const j of jobs.filter((x) => !out.has(x.topic.slug))) {
    log(`Doğrudan istek: ${j.topic.slug}`);
    const res = await anthropic.messages.create(writeParams(j.sector, j.topic, j.notes, j.seen));
    track(res, MODEL); out.set(j.topic.slug, res);
  }
  return out;
}

// ------------------------------------------------------------ 3) denetim ve kayıt
function validate(g, seen, glossarySlugs) {
  const errs = [];
  if (!g.title || g.title.length < 20 || g.title.length > 140) errs.push('başlık uzunluğu');
  if (!g.description || g.description.length < 60 || g.description.length > 320) errs.push('açıklama uzunluğu');
  if (!Array.isArray(g.summary) || g.summary.length < 2) errs.push('özet');
  const w = words(g.body_markdown);
  if (w < 600 || w > 2600) errs.push(`gövde ${w} kelime`);
  const srcs = (g.sources || []).filter((s) => { const k = normalizeUrl(s.url); return k && seen.has(k) && !WEAK.test(s.url); });
  if (srcs.length < 2) errs.push(`geçerli kaynak ${srcs.length}`);
  return { errs, sources: srcs.slice(0, 8).map((s) => ({ title: s.title.slice(0, 120), url: seen.get(normalizeUrl(s.url)).url })), terms: (g.terms || []).filter((t) => glossarySlugs.has(t)).slice(0, 5) };
}
function toMarkdown(g, sector, slug, v, allowedExternal) {
  const body = sanitizeBody(g.body_markdown, allowedExternal);
  return `---
title: ${yamlStr(g.title)}
description: ${yamlStr(g.description.slice(0, 320))}
date: ${istDate()}
summary:
${g.summary.slice(0, 5).map((s) => `  - ${yamlStr(s)}`).join('\n')}
level: ${g.level}
topic: ${TOPIC_ENUM.includes(g.topic) ? g.topic : 'İş ve kariyer'}
terms: [${v.terms.join(', ')}]
sector: ${sector.slug}
faq:
${(g.faq || []).slice(0, 5).map((f) => `  - q: ${yamlStr(f.q)}\n    a: ${yamlStr(f.a)}`).join('\n') || '  []'}
sources:
${v.sources.map((s) => `  - title: ${yamlStr(s.title)}\n    url: ${yamlStr(s.url)}`).join('\n')}
---

${body}
`;
}

async function pool(items, n, fn) {
  const out = []; let i = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k]).catch((e) => ({ error: e })); } }));
  return out;
}

async function main() {
  let todo = SECTORS.filter((s) => !ONLY.length || ONLY.includes(s.slug))
    .flatMap((sector) => sector.topics.map((topic) => ({ sector, topic })))
    .filter((j) => !fs.existsSync(path.join(OUT_DIR, `${j.topic.slug}.md`)));
  if (LIMIT) todo = todo.slice(0, LIMIT);
  log(`yazılacak rehber: ${todo.length}`);
  if (!todo.length || DRY) { todo.forEach((j) => log(`- ${j.sector.slug}/${j.topic.slug}`)); return; }

  const anthropic = await client();
  const researched = await pool(todo, CONCURRENCY, async (j) => {
    const r = await research(anthropic, j.sector, j.topic);
    log(`araştırıldı: ${j.topic.slug} (${r.seen.size} adres, not ${r.notes.length} karakter, ${r.stop})`);
    return { ...j, ...r };
  });
  const ok = researched.filter((j) => !j.error && j.notes && j.seen.size >= 2);
  researched.filter((j) => !j.error && !ok.includes(j)).forEach((j) => log(`araştırma yetersiz: ${j.topic.slug} (not ${j.notes?.length ?? 0} karakter, ${j.seen?.size ?? 0} adres, son durum ${j.stop})`));
  researched.filter((j) => j.error).forEach((j) => log(`araştırma hatası: ${j.error.message}`));

  const written = await writeAll(anthropic, ok);
  const glossarySlugs = new Set(GLOSSARY.map((g) => g.slug));
  let saved = 0; const rejected = [];
  for (const j of ok) {
    const res = written.get(j.topic.slug);
    if (!res || res.stop_reason === 'refusal' || res.stop_reason === 'max_tokens') { rejected.push(`${j.topic.slug}: yazım tamamlanmadı`); continue; }
    let g; try { g = JSON.parse(res.content.filter((b) => b.type === 'text').map((b) => b.text).join('')); } catch { rejected.push(`${j.topic.slug}: JSON`); continue; }
    const v = validate(g, j.seen, glossarySlugs);
    if (v.errs.length) { rejected.push(`${j.topic.slug}: ${v.errs.join(', ')}`); continue; }
    const allowedExternal = new Set([...j.seen.keys()].filter((k) => !WEAK.test(k)));
    fs.writeFileSync(path.join(OUT_DIR, `${j.topic.slug}.md`), toMarkdown(g, j.sector, j.topic.slug, v, allowedExternal));
    saved++; log(`YAZILDI: ${j.sector.slug}/${j.topic.slug} (${words(g.body_markdown)} kelime, ${v.sources.length} kaynak)`);
  }
  rejected.forEach((r) => log(`ELENDİ: ${r}`));
  // Yazılamayan rehberlere verilmiş site içi bağlantıları düz metne çevir (kırık bağlantı kalmasın)
  for (const f of fs.readdirSync(OUT_DIR).filter((x) => x.endsWith('.md'))) {
    const file = path.join(OUT_DIR, f); const md = fs.readFileSync(file, 'utf8');
    const fixed = md.replace(/\[([^\]]+)\]\(\/rehber\/([a-z0-9-]+)\/\)/g, (m, t, slug) => (fs.existsSync(path.join(OUT_DIR, `${slug}.md`)) ? m : t));
    if (fixed !== md) { fs.writeFileSync(file, fixed); log(`kırık rehber bağlantısı temizlendi: ${f}`); }
  }
  const total = tokenCost + searches * 0.01;
  log(`maliyet: $${total.toFixed(2)} (token $${tokenCost.toFixed(2)}, ${searches} arama $${(searches * 0.01).toFixed(2)}) · ${saved} rehber`);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `### İş kolu rehberleri\n\n- Yazılan: ${saved}\n- Elenen: ${rejected.length}\n${rejected.map((r) => `  - ${r}`).join('\n')}\n- Maliyet: $${total.toFixed(2)}\n`);
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `count=${saved}\n`);
}

main().catch((e) => { console.error(e); process.exit(1); });
