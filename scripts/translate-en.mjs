// İngilizce sürüm için çeviri betiği (elle çalıştırılır: .github/workflows/translate.yml).
// Eksik olanları çevirir, var olanlara dokunmaz (veri metinlerinde Türkçe kaynak değiştiyse yeniden çevirir):
//   - Veri metinleri (sözlük, araçlar, Türkiye, etkinlikler…) -> src/i18n/en/strings.json
//   - Haberler   -> src/content/haberler-en/<aynı dosya adı>.md
//   - Rehberler  -> src/content/rehberler-en/<aynı dosya adı>.md
//   - Haftalık özetler -> src/content/ozetler-en/<aynı dosya adı>.md
// Kullanım: node scripts/translate-en.mjs [--only=strings,news,guides,digests] [--limit=N] [--dry-run]
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { sourceStrings } from '../src/i18n/sources.js';
import { titleSlug } from '../src/lib/slug.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MODEL = process.env.TRANSLATE_MODEL || process.env.NEWS_MODEL || 'claude-sonnet-5-5';
const args = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, '').split('=')).map(([k, v]) => [k, v ?? true]));
const ONLY = args.only ? String(args.only).split(',') : ['strings', 'news', 'guides', 'digests'];
const LIMIT = Number(args.limit || 1e9);
const DRY = Boolean(args['dry-run']);
const log = (...a) => console.log('[çeviri]', ...a);
const hash = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 10);
const yamlStr = (s) => JSON.stringify(String(s ?? '').trim());
let usage = { in: 0, out: 0 };

const STYLE = `You are the English-language editor of YZ Gündemi, a Turkish AI news site, translating its Turkish content into English for an international audience.
Rules:
- Write natural, concise, professional US English in a newsroom register (Reuters/Axios style). Translate meaning, not word by word.
- Never add, remove or change facts. Keep every number, date, amount, name and claim; keep attributions ("according to Bloomberg") and hedges ("reportedly", "alleged").
- Convert number formatting to English: 12,9 -> 12.9; 1.188 -> 1,188; "yüzde 13" -> "13%"; "1,4 trilyon dolar" -> "$1.4 trillion"; "70-78 dolar" -> "$70-78". Keep Turkish lira as "TL" or "lira".
- Dates: "16 Kasım 2026" -> "November 16, 2026"; weekdays in English.
- Keep product, company, model and person names exactly. Keep Turkish institution names with an English gloss on first mention when helpful (e.g. "KVKK (Turkey's Personal Data Protection Authority)").
- Terminology: istem=prompt; açık ağırlıklı model=open-weight model; büyük dil modeli=large language model; yapay zeka ajanı=AI agent; çıkarım=inference; bağlam penceresi=context window; halüsinasyon=hallucination; regülasyon=regulation; halka arz=IPO.
- Markdown: keep the same structure (headings, lists, bold, links). Keep link URLs unchanged.
- Content written for Turkish readers (e.g. "Türkiye açısından", KVKK advice) stays relevant: translate it faithfully; it is part of the site's Turkey focus.
- Do not translate text inside code blocks.`;

let anthropic;
async function ask(prompt, schema, maxTokens = 16000) {
  if (!anthropic) {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    anthropic = new Anthropic({ maxRetries: 4, timeout: 10 * 60 * 1000 });
  }
  const res = await anthropic.messages.create({
    model: MODEL, max_tokens: maxTokens, system: STYLE,
    messages: [{ role: 'user', content: prompt }],
    output_config: { format: { type: 'json_schema', schema } },
  });
  usage.in += res.usage?.input_tokens || 0; usage.out += res.usage?.output_tokens || 0;
  if (res.stop_reason !== 'end_turn') throw new Error(`yanıt tamamlanamadı (${res.stop_reason})`);
  return JSON.parse(res.content.filter((b) => b.type === 'text').map((b) => b.text).join(''));
}

// Rakam kontrolü: Türkçe metindeki her rakam (ayraçlar atılarak) İngilizce metinde de geçmeli
const digits = (s) => (String(s).match(/\d[\d.,]*/g) || []).map((x) => x.replace(/[.,]/g, '')).filter((x) => x.length);
function numbersKept(tr, en) {
  const e = new Set(digits(en));
  const all = digits(en).join(' ');
  return digits(tr).filter((n) => !e.has(n) && !all.includes(n));
}

function parseMd(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const [, fm = '', body = ''] = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/) || [];
  return { fm, body: body.trim() };
}
const fmGet = (fm, k) => { const m = fm.match(new RegExp(`^${k}:\\s*(.*)$`, 'm')); if (!m) return ''; try { return JSON.parse(m[1]); } catch { return m[1].trim(); } };
const fmList = (fm, k) => { const m = fm.match(new RegExp(`^${k}:\\n((?:  - .*\\n?)+)`, 'm')); return m ? m[1].split('\n').filter(Boolean).map((l) => { const v = l.replace(/^  - /, ''); try { return JSON.parse(v); } catch { return v; } }) : []; };
const fmObjList = (fm, k, fields) => {
  const m = fm.match(new RegExp(`^${k}:\\n((?:  [- ] .*\\n?)+)`, 'm'));
  if (!m) return [];
  const out = []; let cur = null;
  for (const line of m[1].split('\n').filter(Boolean)) {
    const mm = line.match(/^  (-| ) {1,3}(\w+):\s*(.*)$/);
    if (!mm) continue;
    if (mm[1] === '-') { cur = {}; out.push(cur); }
    let v = mm[3]; try { v = JSON.parse(v); } catch {}
    if (fields.includes(mm[2])) cur[mm[2]] = v;
  }
  return out;
};
const uniqueSlug = (base, used) => { let s = base || 'article', i = 2; while (used.has(s)) s = `${base}-${i++}`; used.add(s); return s; };
const existingSlugs = (dir) => new Set(fs.existsSync(dir) ? fs.readdirSync(dir).map((f) => fmGet(parseMd(path.join(dir, f)).fm, 'slug')).filter(Boolean) : []);

// ------------------------------------------------------------ veri metinleri
async function translateStrings() {
  const file = path.join(ROOT, 'src/i18n/en/strings.json');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const store = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {};
  const src = sourceStrings();
  const todo = Object.entries(src).filter(([k, v]) => store[k]?.h !== hash(v));
  log(`veri metinleri: ${Object.keys(src).length} anahtar, çevrilecek ${todo.length}`);
  if (DRY || !todo.length) return;
  const SCHEMA = { type: 'object', additionalProperties: false, required: ['items'], properties: { items: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['key', 'en'], properties: { key: { type: 'string' }, en: { type: 'string' } } } } } };
  for (let i = 0; i < todo.length; i += 60) {
    const batch = todo.slice(i, i + 60);
    const out = await ask(`Translate each Turkish string into English. These are short texts from the site's reference pages (AI glossary, AI tools directory, Turkey AI ecosystem, events). Keys show the context: "gl." glossary, "tool." AI tool profile, "task." "best AI tools for X" page, "cmp." tool comparison, "cat." news section, "yerli." Turkish AI models, "policy." Turkish AI policy timeline. For "gl.*.term", give the standard English term (e.g. "Büyük dil modeli (LLM)" -> "Large language model (LLM)"). For "task.*.short", 1-3 words. Return every key exactly once.\n\n${JSON.stringify(Object.fromEntries(batch), null, 1)}`, SCHEMA);
    const got = new Map(out.items.map((x) => [x.key, x.en]));
    for (const [k, v] of batch) {
      const en = got.get(k);
      if (!en) { log(`eksik: ${k}`); continue; }
      const lost = numbersKept(v, en);
      if (lost.length) log(`uyarı (rakam): ${k} → ${lost.join(', ')}`);
      store[k] = { h: hash(v), en: en.trim() };
    }
    fs.writeFileSync(file, JSON.stringify(Object.fromEntries(Object.entries(store).sort()), null, 1) + '\n');
    log(`  ${Math.min(i + 60, todo.length)}/${todo.length}`);
  }
}

// ------------------------------------------------------------ haberler
const NEWS_SCHEMA = { type: 'object', additionalProperties: false,
  required: ['title', 'spot', 'why_it_matters', 'turkey_angle', 'key_points', 'whats_next', 'by_numbers', 'new_tool_what', 'photo_alt', 'body_markdown'],
  properties: {
    title: { type: 'string' }, spot: { type: 'string' }, why_it_matters: { type: 'string' }, turkey_angle: { type: 'string' },
    key_points: { type: 'array', items: { type: 'string' } }, whats_next: { type: 'string' },
    by_numbers: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['value', 'label'], properties: { value: { type: 'string' }, label: { type: 'string' } } } },
    new_tool_what: { type: 'string' }, photo_alt: { type: 'string' }, body_markdown: { type: 'string' } } };

async function translateNews() {
  const srcDir = path.join(ROOT, 'src/content/haberler'), outDir = path.join(ROOT, 'src/content/haberler-en');
  fs.mkdirSync(outDir, { recursive: true });
  const used = existingSlugs(outDir);
  const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.md') && !f.startsWith('_') && !fs.existsSync(path.join(outDir, f))).sort().reverse().slice(0, LIMIT);
  log(`haberler: çevrilecek ${files.length}`);
  for (const f of files) {
    const { fm, body } = parseMd(path.join(srcDir, f));
    if (fmGet(fm, 'draft') === 'true') continue;
    const tr = { title: fmGet(fm, 'title'), spot: fmGet(fm, 'spot'), why_it_matters: fmGet(fm, 'whyItMatters'), turkey_angle: fmGet(fm, 'turkeyAngle'),
      key_points: fmList(fm, 'keyPoints'), whats_next: fmGet(fm, 'whatsNext'), by_numbers: fmObjList(fm, 'byNumbers', ['value', 'label']),
      new_tool_what: (fm.match(/^newTool:\n(?:  .*\n)*?  what:\s*(.*)$/m) || [])[1]?.replace(/^"|"$/g, '') || '', photo_alt: (fm.match(/^  alt:\s*(.*)$/m) || [])[1]?.replace(/^"|"$/g, '') || '', body_markdown: body };
    if (DRY) { log('(deneme)', f); continue; }
    try {
      const en = await ask(`Translate this Turkish news article (JSON fields) into English. Empty fields stay empty. Keep the headline under 110 characters. photo_alt is an English image description; if it is already English, keep it.\n\n${JSON.stringify(tr, null, 1)}`, NEWS_SCHEMA);
      const lost = numbersKept(`${tr.title} ${tr.spot} ${tr.body_markdown}`, `${en.title} ${en.spot} ${en.body_markdown}`);
      if (lost.length) log(`uyarı (rakam) ${f}: ${lost.join(', ')}`);
      const slug = uniqueSlug(titleSlug(en.title), used);
      const lines = ['---', `ref: ${yamlStr(f.replace(/\.md$/, ''))}`, `slug: ${yamlStr(slug)}`, `title: ${yamlStr(en.title)}`, `spot: ${yamlStr(en.spot)}`];
      if (en.why_it_matters) lines.push(`whyItMatters: ${yamlStr(en.why_it_matters)}`);
      if (en.turkey_angle) lines.push(`turkeyAngle: ${yamlStr(en.turkey_angle)}`);
      if (en.key_points?.length) lines.push('keyPoints:', ...en.key_points.map((k) => `  - ${yamlStr(k)}`));
      if (en.whats_next) lines.push(`whatsNext: ${yamlStr(en.whats_next)}`);
      if (en.by_numbers?.length) lines.push('byNumbers:', ...en.by_numbers.flatMap((b) => [`  - value: ${yamlStr(b.value)}`, `    label: ${yamlStr(b.label)}`]));
      if (en.new_tool_what) lines.push(`newToolWhat: ${yamlStr(en.new_tool_what)}`);
      if (en.photo_alt) lines.push(`photoAlt: ${yamlStr(en.photo_alt)}`);
      lines.push('---', '', en.body_markdown.trim(), '');
      fs.writeFileSync(path.join(outDir, f), lines.join('\n'));
      log(`YAZILDI ${f} → ${slug}`);
    } catch (err) { log(`HATA ${f}: ${err.message}`); }
  }
}

// ------------------------------------------------------------ rehberler
const GUIDE_SCHEMA = { type: 'object', additionalProperties: false, required: ['title', 'description', 'summary', 'faq', 'body_markdown'],
  properties: { title: { type: 'string' }, description: { type: 'string' }, summary: { type: 'array', items: { type: 'string' } },
    faq: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['q', 'a'], properties: { q: { type: 'string' }, a: { type: 'string' } } } },
    body_markdown: { type: 'string' } } };

async function translateGuides() {
  const srcDir = path.join(ROOT, 'src/content/rehberler'), outDir = path.join(ROOT, 'src/content/rehberler-en');
  fs.mkdirSync(outDir, { recursive: true });
  const used = existingSlugs(outDir);
  const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.md') && !fs.existsSync(path.join(outDir, f))).slice(0, LIMIT);
  log(`rehberler: çevrilecek ${files.length}`);
  for (const f of files) {
    const { fm, body } = parseMd(path.join(srcDir, f));
    const tr = { title: fmGet(fm, 'title'), description: fmGet(fm, 'description'), summary: fmList(fm, 'summary'), faq: fmObjList(fm, 'faq', ['q', 'a']), body_markdown: body };
    if (DRY) { log('(deneme)', f); continue; }
    try {
      const en = await ask(`Translate this Turkish how-to guide (JSON fields) into English. The title should match what English speakers search for (e.g. "How to write a good AI prompt: a 7-step guide"). Keep "## 1. ..." numbered step headings numbered. Description 60-300 characters.\n\n${JSON.stringify(tr, null, 1)}`, GUIDE_SCHEMA);
      const slug = uniqueSlug(titleSlug(en.title.split(/[:?]/)[0], 9), used);
      const lines = ['---', `ref: ${yamlStr(f.replace(/\.md$/, ''))}`, `slug: ${yamlStr(slug)}`, `title: ${yamlStr(en.title)}`, `description: ${yamlStr(en.description)}`,
        'summary:', ...en.summary.map((s) => `  - ${yamlStr(s)}`)];
      if (en.faq?.length) lines.push('faq:', ...en.faq.flatMap((x) => [`  - q: ${yamlStr(x.q)}`, `    a: ${yamlStr(x.a)}`]));
      lines.push('---', '', en.body_markdown.trim(), '');
      fs.writeFileSync(path.join(outDir, f), lines.join('\n'));
      log(`YAZILDI ${f} → ${slug}`);
    } catch (err) { log(`HATA ${f}: ${err.message}`); }
  }
}

// ------------------------------------------------------------ haftalık özetler
async function translateDigests() {
  const srcDir = path.join(ROOT, 'src/content/ozetler'), outDir = path.join(ROOT, 'src/content/ozetler-en');
  fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.md') && !fs.existsSync(path.join(outDir, f))).slice(0, LIMIT);
  log(`haftalık özetler: çevrilecek ${files.length}`);
  const SCHEMA = { type: 'object', additionalProperties: false, required: ['title', 'spot', 'summaries', 'intro_markdown'],
    properties: { title: { type: 'string' }, spot: { type: 'string' }, summaries: { type: 'array', items: { type: 'string' } }, intro_markdown: { type: 'string' } } };
  for (const f of files) {
    const { fm, body } = parseMd(path.join(srcDir, f));
    const items = fmObjList(fm, 'items', ['slug', 'summary']);
    const tr = { title: fmGet(fm, 'title'), spot: fmGet(fm, 'spot'), summaries: items.map((i) => i.summary), intro_markdown: body };
    if (DRY) { log('(deneme)', f); continue; }
    try {
      const en = await ask(`Translate this Turkish weekly AI news digest into English. Title starts with "This week in AI:". Return summaries in the same order and count (${items.length}).\n\n${JSON.stringify(tr, null, 1)}`, SCHEMA);
      if (en.summaries.length !== items.length) throw new Error('madde sayısı tutmuyor');
      const ws = fmGet(fm, 'weekStart'), we = fmGet(fm, 'weekEnd');
      const lines = ['---', `ref: ${yamlStr(f.replace(/\.md$/, ''))}`, `slug: ${yamlStr(`week-${ws}`)}`, `title: ${yamlStr(en.title)}`, `spot: ${yamlStr(en.spot)}`,
        'items:', ...items.flatMap((it, i) => [`  - slug: ${it.slug}`, `    summary: ${yamlStr(en.summaries[i])}`]), '---', '', en.intro_markdown.trim(), ''];
      fs.writeFileSync(path.join(outDir, f), lines.join('\n'));
      log(`YAZILDI ${f} (${ws} - ${we})`);
    } catch (err) { log(`HATA ${f}: ${err.message}`); }
  }
}

async function main() {
  if (ONLY.includes('strings')) await translateStrings();
  if (ONLY.includes('guides')) await translateGuides();
  if (ONLY.includes('digests')) await translateDigests();
  if (ONLY.includes('news')) await translateNews();
  // Sonnet fiyatı (model tablosu): girdi 2 $, çıktı 10 $ / milyon token
  const cost = (usage.in * 2 + usage.out * 10) / 1e6;
  log(`token: girdi ${usage.in}, çıktı ${usage.out} · tahmini maliyet ~${cost.toFixed(2)} $`);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## İngilizce çeviri\n- Token: girdi ${usage.in}, çıktı ${usage.out}\n- Tahmini maliyet: ~${cost.toFixed(2)} $\n`);
}
main().catch((err) => { console.error('[çeviri] HATA:', err?.message || err); process.exit(1); });
