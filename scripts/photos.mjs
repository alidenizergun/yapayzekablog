/**
 * Unsplash fotoğrafları — https://unsplash.com/developers
 *
 * Unsplash API kurallarına uyulur:
 * - Fotoğraflar images.unsplash.com adresinden doğrudan gösterilir (indirip kopyalanmaz).
 * - Fotoğrafçının adı ve Unsplash, bağlantılarıyla birlikte belirtilir (site bunu yapar).
 * - Bir fotoğraf kullanıldığında Unsplash'in "download" adresine bildirim gönderilir.
 *
 * UNSPLASH_ACCESS_KEY tanımlı değilse sessizce atlanır; site illüstrasyon/logo ile çalışır.
 */
import fs from 'node:fs';
import path from 'node:path';

const API = 'https://api.unsplash.com';

async function uget(key, url) {
  const res = await fetch(url, { headers: { Authorization: `Client-ID ${key}`, 'Accept-Version': 'v1' } });
  if (res.status === 403 || res.status === 429) throw new Error(`Unsplash istek sınırı (${res.status})`);
  if (!res.ok) throw new Error(`Unsplash hatası ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}

/** Daha önce kullanılmış fotoğraf kimlikleri (aynı fotoğraf iki habere konmasın) */
export function usedPhotoIds(contentDir) {
  const ids = new Set();
  for (const f of fs.readdirSync(contentDir)) {
    if (!f.endsWith('.md')) continue;
    const m = fs.readFileSync(path.join(contentDir, f), 'utf8').match(/^photo:\n\s+id:\s*"?([^"\n]+)"?/m);
    if (m) ids.add(m[1].trim());
  }
  return ids;
}

/**
 * Sorguya uygun, daha önce kullanılmamış yatay bir fotoğraf bulur.
 * @returns {Promise<null | {id, url, alt, author, authorUrl, link}>}
 */
export async function findPhoto(query, used, { key = process.env.UNSPLASH_ACCESS_KEY } = {}) {
  if (!key || !query) return null;
  const q = new URLSearchParams({ query, orientation: 'landscape', per_page: '15', content_filter: 'high' });
  const r = await uget(key, `${API}/search/photos?${q}`);
  // Adaylar: kullanılmamış ve yüzü öne çıkan portre olmayan fotoğraflar
  // (haberde adı geçen gerçek bir kişi sanılmasın)
  const text = (p) => `${p.alt_description || ''} ${p.description || ''} ${(p.tags || []).map((t) => t.title).join(' ')}`.toLowerCase();
  const candidates = (r.results || []).filter((p) => !used.has(p.id) && !/\b(portrait|selfie|face|headshot)\b/i.test(text(p)));
  // Fotoğraf açıklaması sorgudaki kelimelerden en çoğunu içeren fotoğrafı seç;
  // hiçbiri tek kelimeyle bile eşleşmiyorsa fotoğraf kullanma (logo/illüstrasyon gösterilir)
  const words = query.toLowerCase().split(/\s+/).filter((w) => w.length > 2).map((w) => w.replace(/s$/, ''));
  const score = (p) => { const t = text(p); return words.filter((w) => t.includes(w)).length; };
  let pick = null; let best = 0;
  for (const p of candidates) { const s = score(p); if (s > best) { best = s; pick = p; } }
  if (!pick) return null;
  used.add(pick.id);
  // Kullanım bildirimi (Unsplash kuralı); başarısız olursa fotoğrafı yine kullan
  try { await uget(key, pick.links.download_location); } catch {}
  return {
    id: pick.id,
    url: pick.urls.raw,
    alt: (pick.alt_description || '').slice(0, 200),
    author: pick.user?.name || pick.user?.username || 'Unsplash',
    authorUrl: pick.user?.links?.html || 'https://unsplash.com',
    link: pick.links?.html || 'https://unsplash.com',
  };
}

const yamlStr = (s) => JSON.stringify(String(s ?? '').trim());

/** Fotoğraf bilgisini Markdown ön bilgisine (frontmatter) yazılacak satırlara çevirir */
export function photoYaml(photo) {
  return [
    'photo:',
    `  id: ${yamlStr(photo.id)}`,
    `  url: ${yamlStr(photo.url)}`,
    `  alt: ${yamlStr(photo.alt)}`,
    `  author: ${yamlStr(photo.author)}`,
    `  authorUrl: ${yamlStr(photo.authorUrl)}`,
    `  link: ${yamlStr(photo.link)}`,
  ];
}

/** Var olan bir haber dosyasına fotoğraf ekler ("sources:" satırının önüne) */
export function addPhotoToFile(file, photo) {
  const s = fs.readFileSync(file, 'utf8');
  if (/^photo:/m.test(s)) return false;
  const i = s.indexOf('\nsources:');
  if (i < 0) return false;
  fs.writeFileSync(file, s.slice(0, i) + '\n' + photoYaml(photo).join('\n') + s.slice(i));
  return true;
}

/** Kategoriye göre yedek arama sorgusu (haberde imageQuery yoksa) */
export const CATEGORY_QUERIES = {
  modeller: 'computer code screen',
  ajanlar: 'laptop automation workflow',
  araclar: 'software developer laptop',
  'girisim-yatirim': 'startup office team',
  regulasyon: 'government building law',
  arastirma: 'research laboratory computer',
  platformlar: 'smartphone apps',
  pazarlama: 'marketing team meeting',
  donanim: 'computer chip semiconductor',
  guvenlik: 'cyber security server',
  turkiye: 'istanbul skyline',
};
