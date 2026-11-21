/**
 * Araç logoları: her aracın kendi sitesindeki uygulama simgesini (apple-touch-icon / en büyük favicon) indirir,
 * 96x96 WebP'ye çevirip public/logo/arac/<slug>.webp olarak kaydeder ve data/arac-logolari.json'a yazar.
 * Site simgesine ulaşılamazsa Google'ın favicon hizmeti denenir. Logolar marka sahiplerine aittir;
 * araçları tanıtmak (betimleyici kullanım) amacıyla gösterilir.
 * Kullanım: node scripts/tool-logos.mjs [--force] [--only=slug1,slug2]
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { TOOLS } from '../src/lib/tools.js';
import { BRANDS } from '../src/lib/brands.js';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
// --set=brands: haberlerdeki şirket logo kartları (src/lib/brands.js), varsayılan: araç rehberi
const SET = (process.argv.find((a) => a.startsWith('--set=')) || '--set=tools').slice(6);
const DIR = path.join(ROOT, SET === 'brands' ? 'public/logo/marka' : 'public/logo/arac');
const MAP = path.join(ROOT, SET === 'brands' ? 'data/marka-logolari.json' : 'data/arac-logolari.json');
const SIZE = SET === 'brands' ? 192 : 96;
// Şirketlerin ana sayfaları (simge buradan alınır)
const BRAND_HOME = { openai: 'https://openai.com', anthropic: 'https://www.anthropic.com', claude: 'https://claude.ai', google: 'https://www.google.com', gemini: 'https://gemini.google.com',
  deepmind: 'https://deepmind.google', meta: 'https://www.meta.com', nvidia: 'https://www.nvidia.com', microsoft: 'https://www.microsoft.com', apple: 'https://www.apple.com',
  amazon: 'https://www.amazon.com', samsung: 'https://www.samsung.com', huggingface: 'https://huggingface.co', mistral: 'https://mistral.ai', deepseek: 'https://www.deepseek.com',
  alibaba: 'https://www.alibabagroup.com', xai: 'https://x.ai', x: 'https://x.com', perplexity: 'https://www.perplexity.ai', github: 'https://github.com', intel: 'https://www.intel.com',
  amd: 'https://www.amd.com', tesla: 'https://www.tesla.com', qualcomm: 'https://www.qualcomm.com', arm: 'https://www.arm.com', tsmc: 'https://www.tsmc.com', ibm: 'https://www.ibm.com',
  oracle: 'https://www.oracle.com', salesforce: 'https://www.salesforce.com', adobe: 'https://www.adobe.com', baidu: 'https://www.baidu.com', bytedance: 'https://www.bytedance.com',
  huawei: 'https://www.huawei.com', xiaomi: 'https://www.mi.com', naver: 'https://www.naver.com', lg: 'https://www.lg.com', reddit: 'https://www.reddit.com', cursor: 'https://cursor.com',
  ollama: 'https://ollama.com', cloudflare: 'https://www.cloudflare.com', databricks: 'https://www.databricks.com', snowflake: 'https://www.snowflake.com', palantir: 'https://www.palantir.com' };
const FORCE = process.argv.includes('--force');
const ONLY = (process.argv.find((a) => a.startsWith('--only=')) || '').slice(7).split(',').filter(Boolean);
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
// Ürün sayfası şirket sitesinin alt sayfasıysa simgeyi ürünün kendi alan adından al
const HOME = { 'claude-code': 'https://claude.ai', codex: 'https://chatgpt.com', comet: 'https://www.perplexity.ai', 'google-flow': 'https://labs.google/fx/tools/flow',
  'microsoft-copilot': 'https://copilot.microsoft.com', 'github-copilot': 'https://github.com/features/copilot', 'google-translate': 'https://translate.google.com' };

fs.mkdirSync(DIR, { recursive: true });
const map = fs.existsSync(MAP) ? JSON.parse(fs.readFileSync(MAP, 'utf8')) : {};

async function get(url, ms = 12000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { signal: ctrl.signal, redirect: 'follow', headers: { 'user-agent': UA, accept: '*/*' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res;
  } finally { clearTimeout(t); }
}

function iconLinks(html, base) {
  const out = [];
  for (const m of html.matchAll(/<link\b[^>]*>/gi)) {
    const tag = m[0];
    const rel = (tag.match(/rel=["']([^"']+)["']/i) || [])[1]?.toLowerCase() || '';
    if (!/icon/.test(rel) || /mask-icon/.test(rel)) continue;
    const href = (tag.match(/href=["']([^"']+)["']/i) || [])[1];
    if (!href || href.startsWith('data:')) continue;
    const sizes = (tag.match(/sizes=["']([^"']+)["']/i) || [])[1] || '';
    const size = Math.max(0, ...sizes.split(/\s+/).map((s) => Number(s.split('x')[0]) || 0));
    const score = (rel.includes('apple-touch') ? 1000 : 0) + (size || (/\.svg/i.test(href) ? 500 : 32));
    try { out.push({ url: new URL(href.replace(/&amp;/g, '&'), base).href, score }); } catch {}
  }
  return out.sort((a, b) => b.score - a.score);
}

async function toWebp(buf) {
  const img = sharp(buf, { density: 300 });
  const meta = await img.metadata();
  if ((meta.width || 0) < (SET === 'brands' ? 64 : 32) && meta.format !== 'svg') throw new Error(`çok küçük (${meta.width}px)`);
  return img.resize(SIZE, SIZE, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).webp({ quality: 90 }).toBuffer();
}

async function fetchIcon(t) {
  const home = HOME[t.slug] || t.url;
  const tries = [];
  try {
    const res = await get(home);
    const html = await res.text();
    tries.push(...iconLinks(html, res.url).map((x) => x.url));
    tries.push(new URL('/apple-touch-icon.png', res.url).href);
  } catch (e) { console.log(`  ${t.slug}: sayfa alınamadı (${e.message})`); }
  const host = new URL(home).hostname;
  tries.push(`https://www.google.com/s2/favicons?domain=${host}&sz=128`);
  for (const u of [...new Set(tries)]) {
    try {
      const buf = Buffer.from(await (await get(u)).arrayBuffer());
      const out = await toWebp(buf);
      return { out, from: u };
    } catch (e) { console.log(`  ${t.slug}: ${u} → ${e.message}`); }
  }
  return null;
}

let changed = 0;
const ITEMS = SET === 'brands' ? Object.keys(BRANDS).map((slug) => ({ slug, url: BRAND_HOME[slug] })).filter((x) => x.url) : TOOLS;
for (const t of ITEMS) {
  if (ONLY.length && !ONLY.includes(t.slug)) continue;
  const file = path.join(DIR, `${t.slug}.webp`);
  if (!FORCE && map[t.slug] && fs.existsSync(file)) continue;
  const r = await fetchIcon(t);
  if (!r) { console.log(`✗ ${t.slug}: logo bulunamadı`); continue; }
  fs.writeFileSync(file, r.out);
  map[t.slug] = { from: r.from, fetched: new Date().toISOString().slice(0, 10) };
  changed++;
  console.log(`✓ ${t.slug} ← ${r.from}`);
}
fs.writeFileSync(MAP, JSON.stringify(Object.fromEntries(Object.entries(map).sort()), null, 2) + '\n');
console.log(`${changed} logo güncellendi; toplam ${Object.keys(map).length}/${ITEMS.length}`);
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed ? 1 : 0}\n`);
