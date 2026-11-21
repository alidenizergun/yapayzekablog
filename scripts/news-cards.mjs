// Markalı haber kartları (1200x630 PNG): başlık, kategori, tarih ve YZ Gündemi logosu.
// Paylaşım görseli (og:image), X/LinkedIn/WhatsApp önizlemesi ve haber yapılandırılmış verisi için kullanılır.
// Türkçe haber: public/og/haber/<slug>.jpg · İngilizce: public/og/news/<en-slug>.jpg
// Kartlar depoya eklenmez: yayın iş akışında önbellekten geri yüklenir, yalnızca yeni haberlerinki üretilir.
// Yalnızca kartı olmayan haberler üretilir; tümünü yeniden üretmek için --force.
// Kullanım: node scripts/news-cards.mjs [--force] [--limit=N]
// Tarayıcı: playwright-core + sistemdeki Chrome (GitHub Actions'ta hazır) ya da PLAYWRIGHT=playwright.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const LIMIT = Number((args.find((a) => a.startsWith('--limit=')) || '').split('=')[1] || 0);
const log = (...a) => console.log('[kart]', ...a);

const { CATEGORIES } = await import(path.join(ROOT, 'src/lib/site.js'));
const { BRANDS } = await import(path.join(ROOT, 'src/lib/brands.js'));
const strings = (() => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, 'src/i18n/en/strings.json'), 'utf8')); } catch { return {}; } })();
const catTr = (s) => CATEGORIES.find((c) => c.slug === s)?.name ?? s;
const catEn = (s) => strings[`cat.${s}.name`]?.en ?? catTr(s);

const fm = (file) => {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  return m ? parse(m[1]) : null;
};
const MONTHS_TR = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const fmtDate = (d, en) => {
  const t = new Date(new Date(d).toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
  return en ? `${MONTHS_EN[t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}` : `${t.getDate()} ${MONTHS_TR[t.getMonth()]} ${t.getFullYear()}`;
};

// İş listesi
const jobs = [];
const trDir = path.join(ROOT, 'src/content/haberler');
const enDir = path.join(ROOT, 'src/content/haberler-en');
for (const f of fs.readdirSync(trDir).filter((x) => x.endsWith('.md')).sort().reverse()) {
  const d = fm(path.join(trDir, f));
  if (!d || d.draft) continue;
  const slug = f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
  jobs.push({ out: path.join(ROOT, 'public/og/haber', `${slug}.jpg`), title: d.title, cat: catTr(d.category), date: fmtDate(d.date, false), d, en: false });
  const ef = path.join(enDir, f);
  if (fs.existsSync(ef)) {
    const e = fm(ef);
    if (e?.slug) jobs.push({ out: path.join(ROOT, 'public/og/news', `${e.slug}.jpg`), title: e.title, cat: catEn(d.category), date: fmtDate(d.date, true), d, en: true });
  }
}
let todo = jobs.filter((j) => FORCE || !fs.existsSync(j.out));
if (LIMIT) todo = todo.slice(0, LIMIT);
if (!todo.length) { log('yeni kart yok'); process.exit(0); }

// Yazı tipleri (sitedekilerle aynı değişken yazı tipleri: src/fonts)
const fontDir = path.join(ROOT, 'src/fonts');
const LAT = 'U+0000-00FF,U+0131,U+0152-0153,U+2000-206F,U+20AC,U+2122,U+2212', TRR = 'U+011E-011F,U+0130,U+015E-015F,U+20BA';
const font = (fam, file, range) => `@font-face{font-family:'${fam}';font-weight:100 900;src:url(data:font/woff2;base64,${fs.readFileSync(path.join(fontDir, file)).toString('base64')}) format('woff2');unicode-range:${range};}`;
const css = [
  font('S', 'schibsted-latin-wght.woff2', LAT), font('S', 'schibsted-tr-wght.woff2', TRR),
  font('I', 'inter-latin-wght.woff2', LAT), font('I', 'inter-tr-wght.woff2', TRR),
].join('') + `*{margin:0;box-sizing:border-box}body{width:1200px;height:630px;overflow:hidden;font-family:S;background:#141414}`;

// Logo (sitedeki rozet ve yazı ile aynı oranlar)
const wm = (px, main = '#fff', sub = '#FF7A62') => `<span style="display:inline-flex;align-items:stretch;gap:${px * .28}px;line-height:1;white-space:nowrap">
  <span style="display:inline-flex;align-items:center;justify-content:center;padding:${px * .02}px ${px * .2}px 0;border-radius:${px * .16}px;background:#CF2E13;color:#fff;font:800 ${px * 1.02}px/1 S;letter-spacing:-.04em">YZ</span>
  <span style="display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:${px * .12}px">
    <span style="font:700 ${px * .38}px/1 I;letter-spacing:.293em;margin-right:-.293em;color:${sub}">YAPAY ZEKA</span>
    <span style="font:800 ${px * .82}px/.86 S;letter-spacing:-.03em;color:${main}">Gündemi</span></span></span>`;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Arka plan: fotoğraf > şirket rengi + logo > koyu düz zemin
function background(d) {
  const brand = d.brand && BRANDS[d.brand];
  const brandBg = brand
    ? `<div style="position:absolute;inset:0;background:${brand.bg}"></div>${brand.path ? `<svg viewBox="0 0 24 24" style="position:absolute;right:-60px;top:-40px;height:560px;width:auto;fill:${brand.fg};opacity:.16"><path d="${brand.path}"/></svg>` : ''}`
    : '';
  // İllüstrasyon yok: şirket rengi/logosu yoksa koyu düz zemin
  const fallback = brandBg || '<div style="position:absolute;inset:0;background:#161616"></div>';
  let src = '';
  if (d.photo?.url) {
    const q = d.photo.url.includes('?') ? '&' : '?';
    if (d.photo.source === 'pixabay') {
      // Kart sayfası boş bir sayfada çizilir; yerel dosya data: adresi olarak gömülür
      const f = path.join(ROOT, 'public', `${d.photo.url}-1280.webp`);
      if (fs.existsSync(f)) src = `data:image/webp;base64,${fs.readFileSync(f).toString('base64')}`;
    } else if (d.photo.source === 'pexels') src = `${d.photo.url}${q}auto=compress&cs=tinysrgb&fit=crop&w=1200&h=630`;
    else src = `${d.photo.url}${q}w=1200&h=630&fit=crop&crop=entropy&q=80&fm=jpg`;
  }
  const photo = src ? `<img data-photo src="${esc(src)}" style="position:absolute;inset:0;width:1200px;height:630px;object-fit:cover">` : '';
  return { fallback, photo };
}

const card = (j) => {
  const { fallback, photo } = background(j.d);
  const len = j.title.length;
  const size = len > 110 ? 50 : len > 85 ? 56 : len > 60 ? 62 : 70;
  return `<div style="position:absolute;inset:0">${fallback}${photo}</div>
  <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,10,10,.35) 0%,rgba(10,10,10,.15) 30%,rgba(10,10,10,.82) 62%,rgba(10,10,10,.94) 100%)"></div>
  <div style="position:absolute;left:0;top:0;bottom:0;width:12px;background:#CF2E13"></div>
  <div style="position:absolute;left:64px;top:52px;display:flex;align-items:center;gap:14px">
    <span style="background:#CF2E13;color:#fff;font:700 22px/1 I;letter-spacing:.08em;text-transform:uppercase;padding:10px 16px 9px;border-radius:999px">${esc(j.cat)}</span>
  </div>
  <div style="position:absolute;left:64px;right:72px;bottom:120px;color:#fff;font:800 ${size}px/1.08 S;letter-spacing:-.02em;text-wrap:balance;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;text-shadow:0 2px 24px rgba(0,0,0,.35)">${esc(j.title)}</div>
  <div style="position:absolute;left:64px;right:72px;bottom:44px;display:flex;align-items:center;justify-content:space-between">
    ${wm(40)}
    <span style="color:#E8E8E8;font:600 24px/1 I">${esc(j.date)} · yzgundemi.com</span>
  </div>`;
};

let pw;
try { pw = require(process.env.PLAYWRIGHT || 'playwright-core'); } catch { pw = require('playwright'); }
const launchOpts = process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {};
let browser;
try { browser = await pw.chromium.launch({ channel: process.env.CHROME_CHANNEL || undefined, ...launchOpts }); }
catch { browser = await pw.chromium.launch({ channel: 'chrome' }); }
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
// Süre sınırı: ilk çalışmada yüzlerce kart olabilir; kalanlar sonraki yayında üretilir
const DEADLINE = Date.now() + Number(process.env.CARD_BUDGET_MIN || 12) * 60e3;
let ok = 0, fallbackCount = 0;
for (const j of todo) {
  if (Date.now() > DEADLINE) { log(`süre doldu; ${todo.length - ok} kart sonraki yayına kaldı`); break; }
  try {
    await page.setContent(`<!doctype html><html lang="${j.en ? 'en' : 'tr'}"><meta charset="utf-8"><style>${css}</style>${card(j)}`, { waitUntil: 'load', timeout: 20000 }).catch(() => {});
    await page.evaluate(() => document.fonts.ready);
    // Fotoğraf yüklenemezse (ağ, eski adres) şirket rengi veya illüstrasyon görünür
    const photoOk = await page.evaluate(() => { const i = document.querySelector('img[data-photo]'); if (!i) return null; if (!(i.complete && i.naturalWidth > 0)) { i.remove(); return false; } return true; });
    if (photoOk === false) fallbackCount++;
    fs.mkdirSync(path.dirname(j.out), { recursive: true });
    await page.screenshot({ path: j.out, type: 'jpeg', quality: 85 });
    ok++;
  } catch (err) {
    log(`HATA ${path.basename(j.out)}: ${err.message}`);
  }
}
await browser.close();
log(`${ok} kart üretildi${fallbackCount ? ` (${fallbackCount} tanesinde fotoğraf yüklenemedi, yedek arka plan kullanıldı)` : ''}`);
