// Şirket logo kartları için gerçek logolar: scripts/tool-logos.mjs --set=brands ile şirketlerin kendi
// sitelerinden indirilen simgeler (public/logo/marka/<anahtar>.webp). Yoksa Simple Icons çizimine döner.
import fs from 'node:fs';
import path from 'node:path';

let cached;
const load = () => { if (!cached) { try { cached = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/marka-logolari.json'), 'utf8')); } catch { cached = {}; } } return cached; };
/** "/logo/marka/x.webp" ya da null */
export const brandLogo = (key) => (key && load()[key] && fs.existsSync(path.join(process.cwd(), 'public/logo/marka', `${key}.webp`)) ? `/logo/marka/${key}.webp` : null);
