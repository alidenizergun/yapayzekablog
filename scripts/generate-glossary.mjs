// Sözlük genişletme: data/sozluk-terimler.txt listesindeki, henüz yazılmamış terimlerin
// kısa tanımını, "nasıl çalışır / neden önemli / örnek" açıklamalarını, iki sık sorulan soruyu
// ve İngilizce karşılıklarını yazım modeliyle (Batch API, yarı fiyat) üretir.
// Çıktı: src/lib/glossary-extra.js (Türkçe) ve src/i18n/en/strings.json içindeki gl.<slug>.* anahtarları (İngilizce).
// Kullanım: node scripts/generate-glossary.mjs [--limit=N] [--dry-run]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

const hash = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 10);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LIST = path.join(ROOT, 'data/sozluk-terimler.txt');
const OUT = path.join(ROOT, 'src/lib/glossary-extra.js');
const STRINGS = path.join(ROOT, 'src/i18n/en/strings.json');
const { tagSlug } = await import(path.join(ROOT, 'src/lib/slug.js'));

const args = process.argv.slice(2);
const arg = (k) => (args.find((a) => a.startsWith(`--${k}=`)) || '').split('=')[1];
const LIMIT = Number(arg('limit') || process.env.GLOSSARY_LIMIT || 0);
const DRY = args.includes('--dry-run');
const MODEL = process.env.GLOSSARY_MODEL || 'claude-sonnet-5-5';
const PER_REQUEST = Number(process.env.GLOSSARY_PER_REQUEST || 5);
const BATCH_WAIT_MIN = Number(process.env.BATCH_WAIT_MIN || 50);
const log = (...a) => console.log('[sözlük]', ...a);

export const CAT_CODES = {
  T: 'Temel kavramlar', M: 'Modeller ve eğitim', K: 'Kullanım ve araçlar', D: 'Donanım ve altyapı', G: 'Güvenlik ve etik',
  V: 'Veri ve değerlendirme', I: 'Matematiksel temeller', S: 'Görüntü, ses ve robotik', P: 'Hukuk, iş ve politika',
};
const lower = (s) => s.toLocaleLowerCase('tr');

/** Otomatik eşleşme ifadeleri: Türkçe terim (parantez dışı), parantez içindeki kısaltma veya İngilizce karşılık */
function autoMatch(term, en) {
  const out = new Set();
  const base = term.replace(/\s*\(.*?\)\s*/g, ' ').trim();
  const paren = (term.match(/\((.*?)\)/) || [])[1];
  const add = (p) => {
    p = lower(p.trim());
    if (!p) return;
    if (!p.includes(' ') && p.length < 5) out.add(`=${p}`); else out.add(p);
  };
  add(base);
  if (paren) {
    if (/^[A-Z0-9][A-Za-z0-9-]{1,7}$/.test(paren) && /[A-Z]{2}/.test(paren)) out.add(`=${lower(paren)}`);
    else if (paren.length >= 6 && !/\s(ve|ile)\s/.test(paren)) add(paren);
  }
  if (/[\s-]/.test(en) && en.length >= 8 && !/[,()]/.test(en)) add(en);
  return [...out];
}

export function parseList() {
  return fs.readFileSync(LIST, 'utf8').split('\n').filter((l) => l.trim() && !l.startsWith('#')).map((l) => {
    const [c, term, en, m] = l.split('|').map((x) => x?.trim());
    const slug = tagSlug(term.replace(/\s*\(.*?\)/g, ''));
    const match = m === '-' ? [] : m ? m.split(',').map((x) => lower(x.trim())).filter(Boolean) : autoMatch(term, en);
    return { slug, term, en, match, cat: CAT_CODES[c] };
  });
}

// ------------------------------------------------------------ maliyet
const PRICES = { 'claude-sonnet-5-5': { in: 2, out: 10 }, 'claude-opus-5-5': { in: 4, out: 20 }, 'claude-haiku-5-5': { in: 0.1, out: 0.5 } };
let cost = 0;
function track(msg, batch) {
  const u = msg?.usage; const p = PRICES[MODEL]; if (!u || !p) return;
  const inp = (u.input_tokens ?? 0) + (u.cache_creation_input_tokens ?? 0) * 1.25 + (u.cache_read_input_tokens ?? 0) * 0.1;
  cost += (batch ? 0.5 : 1) * (inp * p.in + (u.output_tokens ?? 0) * p.out) / 1e6;
}

const FAQ = { type: 'array', items: { type: 'object', additionalProperties: false, required: ['q', 'a'], properties: { q: { type: 'string' }, a: { type: 'string' } } } };
const LANG = (tr) => ({
  type: 'object', additionalProperties: false, required: ['term', 'def', 'how', 'why', 'example', 'faq'],
  properties: {
    term: { type: 'string', description: tr ? 'Terim, listede verildiği biçimiyle' : 'Standard English term; keep an abbreviation in parentheses if the Turkish has one, e.g. "Recurrent neural network (RNN)"' },
    def: { type: 'string', description: tr ? 'Kısa tanım: 1-2 cümle, 18-45 kelime' : 'Short definition, 1-2 sentences' },
    how: { type: 'string', description: tr ? 'Nasıl çalışır: 3-5 cümle, 55-110 kelime' : 'How it works' },
    why: { type: 'string', description: tr ? 'Neden önemli: 2-4 cümle, 35-80 kelime' : 'Why it matters' },
    example: { type: 'string', description: tr ? 'Somut, gündelik veya sektörden bir örnek: 1-2 cümle' : 'Concrete example' },
    faq: { ...FAQ, description: tr ? 'Tam 2 soru-yanıt; okurun gerçekten arayacağı sorular (ör. "X ile Y farkı ne?"), yanıt 1-3 cümle' : 'Exactly 2 Q&A, same as Turkish' },
  },
});
const SCHEMA = {
  type: 'object', additionalProperties: false, required: ['terms'],
  properties: { terms: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['slug', 'tr', 'en'], properties: { slug: { type: 'string' }, tr: LANG(true), en: LANG(false) } } } },
};

const SYSTEM = `Sen YZ Gündemi adlı Türkçe yapay zeka haber sitesinin sözlük editörüsün. Sözlük, haberlerde geçen terimleri meraklı ama uzman olmayan okura sade Türkçeyle anlatır; her terimin İngilizce sitesi için de aynı içeriği yazarsın.

YAZIM KURALLARI
- Türkçe metin baştan Türkçe yazılmış gibi okunmalı; çeviri kokan kalıplar yok. TDK yazımı; "yapay zeka" şapkasız. Ondalık ayracı virgül. Yüzde yazıyla ("yüzde 20").
- Yerleşik Türkçe karşılığı olan terim Türkçe yazılır; gerekiyorsa ilk geçtiği yerde parantez içinde İngilizcesi verilir. Ürün ve şirket adları özgün yazılır (Nvidia, OpenAI, Anthropic, Google DeepMind, Meta).
- Okura "siz" diye hitap etme; ansiklopedik ama sıcak, sade bir dil kullan. Ünlem, abartı ve "devrim" gibi klişeler yok.
- Tanım (def) kendi başına anlaşılır olmalı ve terimin adını tekrarlayarak başlamamalı ("X, ... dir" yerine doğrudan açıklama da olur). İlk cümle terimin ne olduğunu söyler.
- "how" mekanizmayı somut anlatır; formül kullanma, gerekirse benzetme yap. "why" bu kavramın yapay zeka haberlerinde, iş dünyasında veya günlük hayatta neden önemli olduğunu söyler.
- "example" somut bir örnek verir: bilinen bir ürün, model, kurum veya gündelik bir durum. Emin olmadığın ürün özelliği, sürüm adı, rakam, tarih veya fiyat yazma.

DOĞRULUK KURALLARI (zorunlu)
- Yalnızca yerleşik ve kalıcı bilgiler. Zamanla değişen ayrıntılar (güncel fiyatlar, benchmark puanları, kimin önde olduğu, en yeni model adları, şirket değerlemeleri) yazılmaz.
- Tarih, kurum ve yasa bilgisi yalnızca kesin biliniyorsa yazılır (ör. AB Yapay Zeka Yasası 2024'te kabul edildi). Emin değilsen genel ifade kullan.
- Hukuki konularda hukuki görüş verme, mevzuatı genel çerçevesiyle anlat. Tartışmalı konularda tarafları dengeli aktar.
- Bir terimin birden fazla anlamı varsa yapay zeka bağlamındaki anlamını anlat.

İNGİLİZCE ALAN ("en")
- Türkçedeki içeriğin aynısını doğal, sade İngilizceyle yaz (çeviri gibi değil). "term" alanında yerleşik İngilizce terimi kullan.
- Türkiye'ye özgü bir terimse (KVKK gibi) İngilizce okura kısaca bağlam ver.`;

function params(batch) {
  const list = batch.map((t) => `- slug: ${t.slug} | terim: ${t.term} | İngilizcesi: ${t.en} | konu grubu: ${t.cat}`).join('\n');
  return {
    model: MODEL, max_tokens: 32000,
    system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: `Şu ${batch.length} sözlük maddesini yaz. Her terimi verilen slug ile, listedeki sırayla döndür; "tr.term" alanına terimi listede yazıldığı gibi koy.\n\n${list}` }],
    output_config: { format: { type: 'json_schema', schema: SCHEMA } },
  };
}

const words = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length;
function validate(x) {
  const e = [];
  for (const lang of ['tr', 'en']) {
    const v = x[lang];
    if (!v) { e.push(`${lang} yok`); continue; }
    if (words(v.def) < 8 || words(v.def) > 70) e.push(`${lang}.def ${words(v.def)} kelime`);
    if (words(v.how) < 25) e.push(`${lang}.how kısa`);
    if (words(v.why) < 15) e.push(`${lang}.why kısa`);
    if (words(v.example) < 6) e.push(`${lang}.example kısa`);
    if (!Array.isArray(v.faq) || v.faq.length < 1) e.push(`${lang}.faq`);
  }
  return e;
}
const fixTr = (s) => String(s).replace(/zekâ/g, 'zeka').replace(/Zekâ/g, 'Zeka').replace(/[“”]/g, '"').replace(/[‘’]/g, "'").trim();

async function main() {
  const all = parseList();
  // Tekrar ve çakışma denetimi
  const { GLOSSARY } = await import(path.join(ROOT, 'src/lib/glossary.js'));
  const base = new Set(GLOSSARY.filter((g) => !g.extra).map((g) => g.slug));
  const dup = all.filter((t, i) => base.has(t.slug) || all.findIndex((y) => y.slug === t.slug) !== i);
  if (dup.length) throw new Error(`Yinelenen slug: ${dup.map((t) => t.slug).join(', ')}`);

  const { EXTRA } = await import(path.join(ROOT, 'src/lib/glossary-extra.js')).catch(() => ({ EXTRA: [] }));
  const done = new Map(EXTRA.map((t) => [t.slug, t]));
  let todo = all.filter((t) => !done.has(t.slug));
  if (LIMIT) todo = todo.slice(0, LIMIT);
  log(`listede ${all.length}, yazılmış ${done.size}, yazılacak ${todo.length}`);
  if (DRY || !todo.length) { todo.slice(0, 40).forEach((t) => log(`- ${t.slug} [${t.match.join(', ') || 'bağlantı yok'}]`)); setOutput(0); return; }

  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  if (!process.env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY tanımlı değil.');
  const anthropic = new Anthropic({ maxRetries: 4, timeout: 15 * 60 * 1000 });

  const groups = [];
  for (let i = 0; i < todo.length; i += PER_REQUEST) groups.push(todo.slice(i, i + PER_REQUEST));
  const results = new Map();
  const b = await anthropic.messages.batches.create({ requests: groups.map((g, i) => ({ custom_id: `g${i}`, params: params(g) })) });
  log(`Batch API: ${b.id} (${groups.length} istek, ${todo.length} terim), en fazla ${BATCH_WAIT_MIN} dk beklenecek`);
  const until = Date.now() + BATCH_WAIT_MIN * 60e3;
  let st = b;
  while (st.processing_status !== 'ended' && Date.now() < until) { await new Promise((r) => setTimeout(r, 20e3)); st = await anthropic.messages.batches.retrieve(b.id); }
  if (st.processing_status !== 'ended') { log('Batch süre sınırını aştı; iptal ediliyor (biten terimler yine kaydedilir)'); await anthropic.messages.batches.cancel(b.id).catch(() => {}); }
  for await (const item of await anthropic.messages.batches.results(b.id).catch(() => [])) {
    if (item.result?.type !== 'succeeded') { log(`${item.custom_id}: ${item.result?.type}`); continue; }
    const msg = item.result.message; track(msg, true);
    const text = msg.content.find((c) => c.type === 'text')?.text;
    try { for (const x of JSON.parse(text).terms) results.set(x.slug, x); } catch (e) { log(`${item.custom_id}: JSON okunamadı (${msg.stop_reason})`); }
  }

  const strings = JSON.parse(fs.readFileSync(STRINGS, 'utf8'));
  let ok = 0;
  for (const t of todo) {
    const x = results.get(t.slug);
    if (!x) { log(`yanıt yok: ${t.slug}`); continue; }
    const errs = validate(x);
    if (errs.length) { log(`ELENDİ ${t.slug}: ${errs.join(', ')}`); continue; }
    const tr = x.tr, en = x.en;
    const faq = (tr.faq || []).slice(0, 2).map((f) => [fixTr(f.q), fixTr(f.a)]);
    done.set(t.slug, { slug: t.slug, term: t.term, en: t.en, match: t.match, cat: t.cat, def: fixTr(tr.def), how: fixTr(tr.how), why: fixTr(tr.why), example: fixTr(tr.example), faq });
    const k = (f) => `gl.${t.slug}.${f}`;
    // strings.json biçimi: { h: Türkçe kaynağın özeti, en: çeviri } (translate-en.mjs ile aynı; özet tutmazsa yeniden çevrilir)
    const e = done.get(t.slug);
    const put = (key, trText, enText) => { strings[key] = { h: hash(trText), en: String(enText).trim() }; };
    put(k('term'), e.term, en.term); put(k('def'), e.def, en.def); put(k('how'), e.how, en.how); put(k('why'), e.why, en.why); put(k('example'), e.example, en.example);
    (en.faq || []).slice(0, faq.length).forEach((f, i) => { put(`${k('faq')}.${i}.q`, faq[i][0], f.q); put(`${k('faq')}.${i}.a`, faq[i][1], f.a); });
    ok++;
  }
  // Liste sırasıyla kaydet
  const order = new Map(all.map((t, i) => [t.slug, i]));
  const extra = [...done.values()].filter((t) => order.has(t.slug)).sort((a, b) => order.get(a.slug) - order.get(b.slug));
  fs.writeFileSync(OUT, `// Bu dosya scripts/generate-glossary.mjs tarafından üretilir (kaynak liste: data/sozluk-terimler.txt).\n// Elle düzeltme yapılabilir; betik yalnızca dosyada olmayan terimleri ekler.\nexport const EXTRA = ${JSON.stringify(extra, null, 1)};\n`);
  fs.writeFileSync(STRINGS, JSON.stringify(Object.fromEntries(Object.entries(strings).sort()), null, 1) + '\n');
  log(`yazıldı: ${ok}/${todo.length} · toplam ek terim ${extra.length} · maliyet ~$${cost.toFixed(2)}`);
  setOutput(ok);
}
function setOutput(n) { if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `count=${n}\n`); }

if (process.argv[1] === fileURLToPath(import.meta.url)) await main();
