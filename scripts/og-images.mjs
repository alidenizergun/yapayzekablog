// Paylaşım görselleri (1200x630 PNG) ve apple-touch-icon üretir.
// Yeni şirket (src/lib/brands.js) veya illüstrasyon eklenince yeniden çalıştırın:
//   npm i -D playwright @fontsource/schibsted-grotesk @fontsource/inter
//   node scripts/og-images.mjs . node_modules/@fontsource
// (Haber hattı listede olmayan şirketi kullanmaz; o yüzden günlük çalışmada gerekmez.)
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT || 'playwright');
import fs from 'node:fs';
import path from 'node:path';
const [repo, fontDir] = process.argv.slice(2);
const { BRANDS } = await import(path.join(repo, 'src/lib/brands.js'));
const { IMAGES } = await import(path.join(repo, 'src/lib/site.js'));
const font = (fam, file, w) => `@font-face{font-family:'${fam}';font-weight:${w};src:url(data:font/woff2;base64,${fs.readFileSync(path.join(fontDir, file)).toString('base64')}) format('woff2');}`;
const F = `${fontDir}`;
const css = ['latin', 'latin-ext'].flatMap((sub) => [
  font('S', `schibsted-grotesk/files/schibsted-grotesk-${sub}-800-normal.woff2`, 800),
  font('S', `schibsted-grotesk/files/schibsted-grotesk-${sub}-700-normal.woff2`, 700),
]).join('') + `*{margin:0;box-sizing:border-box}body{width:1200px;height:630px;overflow:hidden;font-family:S}
.mark{position:absolute;left:56px;bottom:44px;display:flex;align-items:center;gap:12px;font:800 34px/1 S;letter-spacing:-.04em}
.mark svg{width:38px;height:38px}`;
const logo = `<svg viewBox="0 0 34 34"><circle cx="17" cy="17" r="15" fill="#CF2E13"/><path d="M11 13 L23 13 L17 23 Z" fill="none" stroke="#FFFFFF" stroke-width="1.6"/><circle cx="11" cy="13" r="3" fill="#FFFFFF"/><circle cx="23" cy="13" r="3" fill="#FFFFFF"/><circle cx="17" cy="23" r="3" fill="#FFFFFF"/></svg>`;
const out = path.join(repo, 'public/og');
fs.mkdirSync(path.join(out, 'marka'), { recursive: true });
fs.mkdirSync(path.join(out, 'gorsel'), { recursive: true });
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
const shot = async (html, file) => { await p.setContent(`<style>${css}</style>${html}`); await p.evaluate(() => document.fonts.ready); await p.screenshot({ path: file, type: 'png' }); };
// site
await shot(`<div style="position:absolute;inset:0;background:#141414;color:#fff;padding:72px 64px">
  <div style="display:flex;align-items:center;gap:22px;font:800 112px/1 S;letter-spacing:-.05em">${logo.replace('<svg', '<svg style="width:112px;height:112px"')}nöron</div>
  <div style="margin-top:56px;font:700 58px/1.12 S;letter-spacing:-.02em;max-width:960px">Yapay zeka dünyasından haberler.<br>Türkçe, hızlı ve kaynaklı.</div>
  <div style="position:absolute;left:64px;bottom:56px;right:64px;height:6px;background:#CF2E13"></div></div>`, path.join(out, 'site.png'));
// markalar
for (const [slug, br] of Object.entries(BRANDS)) {
  const icon = br.path ? `<svg viewBox="0 0 24 24" style="height:190px;width:auto;fill:${br.fg}"><path d="${br.path}"/></svg>` : '';
  await shot(`<div style="position:absolute;inset:0;background:${br.bg};color:${br.fg};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:36px;padding-bottom:40px">
    ${icon}<div style="font:800 ${br.path ? 64 : 120}px/1 S;letter-spacing:-.03em">${br.name}</div></div>
    <div class="mark" style="color:${br.fg}">${logo}nöron</div>`, path.join(out, 'marka', `${slug}.png`));
}
// illüstrasyonlar
for (const key of Object.keys(IMAGES)) {
  const svg = fs.readFileSync(path.join(repo, 'public/img', `${key}.svg`), 'utf8');
  await shot(`<div style="position:absolute;inset:0;overflow:hidden">${svg.replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" style="width:1200px;height:630px" ')}</div>
    <div class="mark" style="background:#fff;color:#141414;padding:12px 18px 12px 14px;border-radius:999px;left:44px;bottom:36px">${logo}nöron</div>`, path.join(out, 'gorsel', `${key}.png`));
}
// apple-touch-icon
await p.setViewportSize({ width: 180, height: 180 });
await p.setContent(`<style>*{margin:0}body{width:180px;height:180px;background:#CF2E13;display:flex;align-items:center;justify-content:center}</style><svg viewBox="4 4 26 26" style="width:132px;height:132px"><path d="M11 13 L23 13 L17 23 Z" fill="none" stroke="#FFFFFF" stroke-width="1.6"/><circle cx="11" cy="13" r="3" fill="#FFFFFF"/><circle cx="23" cy="13" r="3" fill="#FFFFFF"/><circle cx="17" cy="23" r="3" fill="#FFFFFF"/></svg>`);
await p.screenshot({ path: path.join(repo, 'public/apple-touch-icon.png') });
await b.close();
console.log('ok', Object.keys(BRANDS).length, 'marka,', Object.keys(IMAGES).length, 'görsel');
