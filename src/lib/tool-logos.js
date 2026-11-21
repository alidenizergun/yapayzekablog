// Araç logoları: scripts/tool-logos.mjs'in indirdiği simgeler (public/logo/arac/<slug>.webp).
// Logosu olmayan araçta kartlar baş harfe döner. Yalnızca derleme sırasında (Node) çalışır.
import fs from 'node:fs';
import path from 'node:path';

let cached;
function load() {
  if (cached) return cached;
  try { cached = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/arac-logolari.json'), 'utf8')); } catch { cached = {}; }
  return cached;
}
/** Logo varsa site köküne göre yol ("/logo/arac/x.webp"), yoksa null */
export const toolLogo = (slug) => (load()[slug] && fs.existsSync(path.join(process.cwd(), 'public/logo/arac', `${slug}.webp`)) ? `/logo/arac/${slug}.webp` : null);
