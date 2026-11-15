// Haftalık özet: geçen haftanın (pazartesi-pazar, İstanbul) haberlerinden "Yapay zekada bu hafta" sayfası yazar.
// Her pazartesi .github/workflows/weekly.yml çalıştırır. Web araması yapmaz; YALNIZCA sitedeki haberlere dayanır.
// Güvenlik ve doğruluk: özetteki her rakam ilgili haberlerde geçmeli, her madde gerçek bir habere bağlanmalı;
// tutmazsa özet yazılmaz (ertesi hafta yeniden denenir). Kullanım: node scripts/weekly-digest.mjs [--dry-run]

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NEWS_DIR = path.join(ROOT, 'src/content/haberler');
const OUT_DIR = path.join(ROOT, 'src/content/ozetler');
const DRY = process.argv.includes('--dry-run');
const MODEL = process.env.NEWS_MODEL || 'claude-sonnet-5-5';
const MAX_ITEMS = Number(process.env.DIGEST_ITEMS || 7);
const log = (...a) => console.log('[haftalık]', ...a);

const IST = 3 * 3600e3;
const ymd = (d) => new Date(d.valueOf() + IST).toISOString().slice(0, 10);
const MONTHS = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const TR = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' };
const slugify = (s) => s.toLocaleLowerCase('tr').replace(/[çğıöşü]/g, (c) => TR[c]).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const yamlStr = (s) => JSON.stringify(String(s ?? '').trim());

/** Geçen haftanın pazartesi 00:00 - pazar 23:59 (İstanbul) aralığı */
function lastWeek(now = new Date()) {
  const local = new Date(now.valueOf() + IST);
  const dow = (local.getUTCDay() + 6) % 7; // 0 = pazartesi
  const thisMonday = Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate() - dow) - IST;
  return { start: new Date(thisMonday - 7 * 86400e3), end: new Date(thisMonday - 1) };
}

function parse(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const [, fm = '', body = ''] = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/) || [];
  const get = (k) => { const m = fm.match(new RegExp(`^${k}:\\s*(.*)$`, 'm')); if (!m) return ''; try { return JSON.parse(m[1]); } catch { return m[1].trim(); } };
  return {
    slug: path.basename(file, '.md').replace(/^\d{4}-\d{2}-\d{2}-/, ''),
    title: get('title'), spot: get('spot'), why: get('whyItMatters'), date: new Date(get('date')),
    popularity: Number(get('popularity')) || (get('featured') === 'true' ? 80 : 50), draft: get('draft') === 'true', body: body.trim(),
  };
}

const numbers = (s) => (String(s).match(/\d+(?:[.,]\d+)*/g) || []);

const SCHEMA = {
  type: 'object', additionalProperties: false, required: ['title', 'spot', 'intro', 'items'],
  properties: {
    title: { type: 'string', description: '"Yapay zekada bu hafta: ..." ile başlayan, haftanın en önemli 1-2 gelişmesini anan başlık, en fazla 110 karakter' },
    spot: { type: 'string', description: '1-2 cümle, 140-280 karakter' },
    intro: { type: 'string', description: 'Haftanın genel görünümü: 2 kısa paragraf (Markdown, başlık yok). Gelişmeler arasındaki bağı kurar.' },
    items: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['slug', 'summary'],
      properties: { slug: { type: 'string' }, summary: { type: 'string', description: '2 cümle, en fazla 300 karakter' } } } },
  },
};

async function main() {
  const { start, end } = lastWeek();
  const week = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((f) => parse(path.join(NEWS_DIR, f)))
    .filter((n) => !n.draft && n.date >= start && n.date <= end)
    .sort((a, b) => b.popularity - a.popularity);
  const s = new Date(start.valueOf() + IST), e = new Date(end.valueOf() + IST);
  const range = s.getUTCMonth() === e.getUTCMonth()
    ? `${s.getUTCDate()}-${e.getUTCDate()} ${MONTHS[e.getUTCMonth()]} ${e.getUTCFullYear()}`
    : `${s.getUTCDate()} ${MONTHS[s.getUTCMonth()]} - ${e.getUTCDate()} ${MONTHS[e.getUTCMonth()]} ${e.getUTCFullYear()}`;
  const outFile = path.join(OUT_DIR, `${slugify(range)}.md`);
  log(`hafta: ${range} · ${week.length} haber`);
  if (fs.existsSync(outFile)) { log('bu haftanın özeti zaten var.'); return; }
  if (week.length < 3) { log('özet için yeterli haber yok (en az 3).'); return; }

  const pool = week.slice(0, Math.max(MAX_ITEMS + 5, 12));
  const input = pool.map((n) => ({ slug: n.slug, popularity: n.popularity, title: n.title, spot: n.spot, why: n.why, body: n.body.slice(0, 2500) }));
  if (DRY) { log('(deneme) Claude çağrılmadı; aday haberler:', pool.map((n) => n.slug).join(', ')); return; }

  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  const anthropic = new Anthropic({ maxRetries: 4, timeout: 10 * 60 * 1000 });
  const guidelines = fs.readFileSync(path.join(ROOT, 'scripts/editorial-guidelines.md'), 'utf8');
  const res = await anthropic.messages.create({
    model: MODEL, max_tokens: 8000,
    system: `Sen YZ Gündemi'nin kıdemli Türkçe yayın editörüsün. Her pazartesi geçen haftanın yapay zeka gündemini özetliyorsun.\n\n${guidelines}`,
    messages: [{ role: 'user', content: `${range} haftası için "Yapay zekada bu hafta" özetini yaz.

Kurallar:
- Aşağıdaki haberlerden okur için en önemli ${MAX_ITEMS} gelişmeyi seç (popularity değeri yol göstericidir). Aynı olayın devamı olan haberleri tek maddede birleştir; bir madde tek bir slug'a bağlanır.
- YALNIZCA bu haberlerde yazan bilgileri kullan. Yeni bilgi, rakam, tarih veya yorum ekleme. Rakamları haberdeki yazımıyla aynen kullan.
- Maddeler önem sırasına göre olsun. "slug" alanına haberin slug'ını birebir yaz.
- Doğrulanmamış iddiaları haberde olduğu gibi iddia olarak aktar.

HABERLER (JSON):
${JSON.stringify(input, null, 1)}` }],
    output_config: { format: { type: 'json_schema', schema: SCHEMA } },
  });
  if (res.stop_reason !== 'end_turn') throw new Error(`özet tamamlanamadı (${res.stop_reason})`);
  const out = JSON.parse(res.content.filter((b) => b.type === 'text').map((b) => b.text).join(''));

  // Doğrulama
  const bySlug = new Map(pool.map((n) => [n.slug, n]));
  const items = [];
  for (const it of out.items) {
    const n = bySlug.get(it.slug);
    if (!n || items.some((x) => x.slug === it.slug)) continue;
    const src = [n.title, n.spot, n.why, n.body].join(' ');
    const bad = numbers(it.summary).filter((x) => !src.includes(x));
    if (bad.length) { log(`madde elendi (haberde olmayan rakam ${bad.join(', ')}): ${it.slug}`); continue; }
    items.push({ slug: it.slug, summary: it.summary.replace(/<[^>]*>/g, '').trim().slice(0, 400) });
  }
  const allText = pool.map((n) => [n.title, n.spot, n.why, n.body].join(' ')).join(' ') + ' ' + range;
  const strayNums = numbers(`${out.title} ${out.spot} ${out.intro}`).filter((x) => !allText.includes(x));
  if (items.length < 3) throw new Error('doğrulamadan geçen madde sayısı 3\'ten az; özet yazılmadı');
  if (strayNums.length) throw new Error(`başlık/giriş metninde haberlerde olmayan rakam: ${strayNums.join(', ')}; özet yazılmadı`);
  const intro = out.intro.replace(/<[^>]*>/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').trim();

  const md = ['---', `title: ${yamlStr(out.title)}`, `spot: ${yamlStr(out.spot)}`, `weekStart: ${ymd(start)}`, `weekEnd: ${ymd(end)}`,
    `date: ${new Date(Date.now() + IST).toISOString().slice(0, 19)}+03:00`, 'items:',
    ...items.flatMap((it) => [`  - slug: ${it.slug}`, `    summary: ${yamlStr(it.summary)}`]), '---', '', intro, ''].join('\n');
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(outFile, md);
  log(`YAZILDI: ${path.basename(outFile)} · ${items.length} madde`);
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, 'changed=1\n');
}

main().catch((err) => { console.error('[haftalık] HATA:', err?.message || err); process.exit(1); });
