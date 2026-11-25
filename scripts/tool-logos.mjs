/**
 * Şirket logoları (--set=brands), API ücreti yok:
 *   1. Açık lisanslı renkli vektör set (svg-logos, CC0; npm @iconify-json/logos): varsa her zaman bu kullanılır, 512 px üretilir
 *   2. Yoksa şirketin sitesindeki en yüksek çözünürlüklü simge (web manifest, apple-touch-icon…); en az 256 px,
 *      boş/beyaz görünen ya da başka bir şeyin simgesi olduğu bilinen görseller elenir
 *   3. O da yoksa kartta sitenin kendi vektör çizimi (src/lib/brands.js > path) ya da şirket adı gösterilir
 * Yeni şirket src/lib/brands.js'e eklenince Logolar iş akışı kendiliğinden çalışır ve yalnızca eksik logoyu üretir.
 *
 * Araç logoları: her aracın kendi sitesindeki uygulama simgesini (apple-touch-icon / en büyük favicon) indirir,
 * 96x96 WebP'ye çevirip public/logo/arac/<slug>.webp olarak kaydeder ve data/arac-logolari.json'a yazar.
 * Site simgesine ulaşılamazsa Google'ın favicon hizmeti denenir. Logolar marka sahiplerine aittir;
 * araçları tanıtmak (betimleyici kullanım) amacıyla gösterilir.
 * Kullanım: node scripts/tool-logos.mjs [--force] [--only=slug1,slug2]
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { createRequire } from 'node:module';
import { TOOLS } from '../src/lib/tools.js';
import { BRANDS } from '../src/lib/brands.js';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
// --set=brands: haberlerdeki şirket logo kartları (src/lib/brands.js), varsayılan: araç rehberi
const SET = (process.argv.find((a) => a.startsWith('--set=')) || '--set=tools').slice(6);
const DIR = path.join(ROOT, SET === 'brands' ? 'public/logo/marka' : 'public/logo/arac');
const MAP = path.join(ROOT, SET === 'brands' ? 'data/marka-logolari.json' : 'data/arac-logolari.json');
// Şirket kartlarında logo büyük gösterilir (manşette ~300 px, 2x ekranda ~600 px): 512 px saklanır
const SIZE = SET === 'brands' ? 512 : 96;
// Şirket logosu en az bu genişlikte bir kaynaktan gelmeli; yoksa kartta keskin vektör çizim (Simple Icons) kullanılır
const BRAND_MIN = 256;
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

async function toWebp(buf, min = SET === 'brands' ? BRAND_MIN : 32) {
  const img = sharp(buf, { density: 300 });
  const meta = await img.metadata();
  if ((meta.width || 0) < min && meta.format !== 'svg') throw new Error(`çok küçük (${meta.width}px)`);
  // Kaynak hedeften küçükse büyütülmez (bulanıklaşmasın); kart CSS ile ölçekler
  const size = meta.format === 'svg' ? SIZE : Math.min(SIZE, meta.width || SIZE, meta.height || SIZE);
  return img.resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).webp({ quality: 92 }).toBuffer();
}

/** Web uygulama bildirimindeki (manifest) simgeler: genellikle 512 px */
async function manifestIcons(html, base) {
  const href = (html.match(/<link\b[^>]*rel=["']manifest["'][^>]*>/i)?.[0].match(/href=["']([^"']+)["']/i) || [])[1];
  if (!href) return [];
  try {
    const murl = new URL(href.replace(/&amp;/g, '&'), base).href;
    const m = await (await get(murl)).json();
    return (m.icons || []).map((i) => ({ url: new URL(i.src, murl).href, size: Math.max(0, ...String(i.sizes || '').split(/\s+/).map((x) => Number(x.split('x')[0]) || 0)) }))
      .sort((a, b) => b.size - a.size).map((x) => x.url);
  } catch { return []; }
}

async function fetchIcon(t) {
  const home = HOME[t.slug] || t.url;
  const tries = [];
  try {
    const res = await get(home);
    const html = await res.text();
    if (SET === 'brands') tries.push(...await manifestIcons(html, res.url));
    tries.push(...iconLinks(html, res.url).map((x) => x.url));
    tries.push(new URL('/apple-touch-icon.png', res.url).href);
  } catch (e) { console.log(`  ${t.slug}: sayfa alınamadı (${e.message})`); }
  const host = new URL(home).hostname;
  tries.push(`https://www.google.com/s2/favicons?domain=${host.replace(/^www\./, '')}&sz=256`);
  if (SET !== 'brands') tries.push(`https://www.google.com/s2/favicons?domain=${host}&sz=128`, `https://icons.duckduckgo.com/ip3/${host}.ico`, `https://${host}/favicon.ico`);
  // Şirket logoları: adaylardan çözünürlüğü en yüksek olan seçilir; araç simgeleri: ilk uygun aday
  let best = null;
  for (const u of [...new Set(tries)]) {
    if (SET === 'brands' && BAD_ICON.test(u)) { console.log(`  ${t.slug}: ${u} → bilinen yanlış simge, atlandı`); continue; }
    try {
      const buf = Buffer.from(await (await get(u)).arrayBuffer());
      const meta = await sharp(buf, { density: 300 }).metadata();
      if (SET === 'brands' && !(await visibleEnough(buf))) throw new Error('beyaz kartta görünmüyor');
      // Vektör çizimi olmayan şirketlerde (OpenAI, Microsoft…) daha küçük logo da kabul edilir; yoksa kartta yalnızca ad görünür
      const out = await toWebp(buf, SET === 'brands' ? (BRANDS[t.slug]?.path ? BRAND_MIN : 96) : 32);
      const px = meta.format === 'svg' ? 1e6 : (meta.width || 0);
      if (SET !== 'brands') return { out, from: u };
      // Google favicon hizmeti istenen boyutu her zaman veremez: gerçek boyut tekrar kontrol edilir
      if (!best || px > best.px) best = { out, from: u, px };
      if (px >= SIZE) break;
    } catch (e) { console.log(`  ${t.slug}: ${u} → ${e.message}`); }
  }
  return best;
}

// ---- 1. Açık lisanslı vektör set (svg-logos, CC0) ----
const SVG = createRequire(import.meta.url)('@iconify-json/logos/icons.json');
// Adı şirket kısaltmasından farklı olanlar; diğerleri için '<slug>-icon' ve '<slug>' sırayla denenir
const SVG_NAME = { gemini: 'google-gemini-icon', mistral: 'mistral-ai-icon', deepmind: null, qualcomm: 'qualcomm', ibm: 'ibm', oracle: 'oracle', tsmc: 'tsmc',
  // Sitedeki vektör çizimi zaten aynı olanlar ya da sette eski sürümü bulunanlar: sitedeki çizim kullanılır
  anthropic: null, nvidia: null, apple: null, samsung: null, intel: null, amd: null, deepseek: null, reddit: null, snowflake: null, ollama: null, arm: null,
  // Kendi sitesindeki 512 px simgesi daha güncel olanlar
  claude: null, github: null, cursor: null, x: null };
// Kare simgeler kartın %64'ünü, yazı logoları (geniş) %78'ini kaplar
async function fromSvgSet(slug) {
  const names = slug in SVG_NAME ? [SVG_NAME[slug]] : [`${slug}-icon`, slug];
  for (const name of names) {
    const ic = name && SVG.icons[name];
    if (!ic) continue;
    const w = ic.width || SVG.width || 256, h = ic.height || SVG.height || 256;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${ic.left || 0} ${ic.top || 0} ${w} ${h}">${ic.body}</svg>`;
    const box = Math.round(SIZE * (w / h > 1.6 ? 0.78 : 0.64));
    const inner = await sharp(Buffer.from(svg), { density: Math.ceil((72 * box) / Math.min(w, h)) * 2 })
      .resize(box, box, { fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    const m = await sharp(inner).metadata();
    const out = await sharp({ create: { width: SIZE, height: SIZE, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite([{ input: inner, left: Math.round((SIZE - m.width) / 2), top: Math.round((SIZE - m.height) / 2) }]).webp({ quality: 92 }).toBuffer();
    return { out, from: `svg-logos (CC0) logos:${name}` };
  }
  return null;
}

// ---- 2. Site simgesi için kalite denetimi ----
// Bilinen yanlış simgeler (ör. sitenin kendi logosu yerine React'in varsayılan simgesi): adres kalıbıyla elenir
const BAD_ICON = /\/logo512\.png|\/logo192\.png|react|vite\.svg|next\.svg/i;
/** Görsel beyaz kartın üzerinde neredeyse görünmüyorsa (beyaz/şeffaf logo) reddedilir */
async function visibleEnough(buf) {
  const { data, info } = await sharp(buf).resize(64, 64, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .flatten({ background: '#ffffff' }).raw().toBuffer({ resolveWithObject: true });
  let ink = 0;
  for (let i = 0; i < data.length; i += info.channels) if (255 * 3 - (data[i] + data[i + 1] + data[i + 2]) > 60) ink++;
  return ink / (info.width * info.height) > 0.03;
}

let changed = 0;
const ITEMS = SET === 'brands' ? Object.keys(BRANDS).map((slug) => ({ slug, url: BRAND_HOME[slug] })).filter((x) => x.url) : TOOLS;
for (const t of ITEMS) {
  if (ONLY.length && !ONLY.includes(t.slug)) continue;
  const file = path.join(DIR, `${t.slug}.webp`);
  if (!FORCE && map[t.slug] && fs.existsSync(file)) continue;
  const r = (SET === 'brands' && (await fromSvgSet(t.slug))) || (await fetchIcon(t));
  if (!r) {
    // Yeterince büyük logo yok: eski (küçük) logo kaldırılır, kartta vektör çizim kullanılır
    if (SET === 'brands' && FORCE && (map[t.slug] || fs.existsSync(file))) {
      if (fs.existsSync(file)) fs.unlinkSync(file);
      delete map[t.slug];
      changed++;
      console.log(`– ${t.slug}: ${BRAND_MIN} px üstü logo yok; vektör çizim kullanılacak`);
    } else console.log(`✗ ${t.slug}: logo bulunamadı`);
    continue;
  }
  fs.writeFileSync(file, r.out);
  map[t.slug] = { from: r.from, fetched: new Date().toISOString().slice(0, 10) };
  changed++;
  console.log(`✓ ${t.slug} ← ${r.from}`);
}
fs.writeFileSync(MAP, JSON.stringify(Object.fromEntries(Object.entries(map).sort()), null, 2) + '\n');
console.log(`${changed} logo güncellendi; toplam ${Object.keys(map).length}/${ITEMS.length}`);
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed ? 1 : 0}\n`);
