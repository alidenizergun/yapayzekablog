// Marka kartı renklerini src/styles/marka-renkleri.css dosyasına yazar (derlemeden önce çalışır).
// Ayrı bir istek yerine ana stil dosyasına gömülür; satır içi style da gerekmez (CSP style-src 'self').
import fs from 'node:fs';
import { BRANDS } from '../src/lib/brands.js';
const safe = (c) => (/^#[0-9a-f]{3,8}$/i.test(c) ? c : 'currentColor');
const css = '/* Otomatik üretilir: scripts/brand-css.mjs */\n' + Object.entries(BRANDS).map(([slug, b]) => `.b-${slug}{--bl:${safe(b.onLight)};--bd:${safe(b.onDark)}}`).join('\n') + '\n';
fs.writeFileSync(new URL('../src/styles/marka-renkleri.css', import.meta.url), css);
