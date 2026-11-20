// Marka kartlarının renkleri (logo rengi açık ve koyu temada). Satır içi style özniteliği yerine sınıf kullanılır;
// böylece içerik güvenlik politikası (CSP) style-src için 'unsafe-inline' gerektirmez.
import { BRANDS } from '../lib/brands.js';

export function GET() {
  const safe = (c) => (/^#[0-9a-f]{3,8}$/i.test(c) ? c : 'currentColor');
  const css = Object.entries(BRANDS).map(([slug, b]) => `.b-${slug}{--bl:${safe(b.onLight)};--bd:${safe(b.onDark)}}`).join('\n');
  return new Response(css + '\n', { headers: { 'Content-Type': 'text/css; charset=utf-8' } });
}
