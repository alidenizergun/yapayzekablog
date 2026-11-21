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
const dbg = (...a) => { if (process.env.PHOTO_DEBUG) console.log('[foto]', ...a); };

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
    for (const m of fs.readFileSync(path.join(contentDir, f), 'utf8').matchAll(/^photo2?:\n\s+id:\s*"?([^"\n]+)"?/gm)) ids.add(m[1].trim());
  }
  return ids;
}

// Hiçbir sorgu sonuç vermezse son çare: genel yapay zeka ve teknoloji fotoğrafları
const GENERIC_QUERIES = ['artificial intelligence technology', 'technology abstract', 'computer screen code'];

/**
 * Sorguya uygun, daha önce kullanılmamış yatay bir fotoğraf bulur.
 * queries: tek sorgu ya da öncelik sırasıyla sorgu listesi. İlk (habere özel) sorguda fotoğraf açıklaması sorgudaki
 * kelimelerden en az birini içermelidir; sonraki (kategori ve genel) sorgularda en iyi eşleşen aday kabul edilir.
 * Böylece fotoğraf bulunamayıp illüstrasyona düşme çok azalır.
 * @returns {Promise<null | {id, url, alt, author, authorUrl, link}>}
 */
async function unsplashFind(queries, used, opts = {}) {
  const { key = process.env.UNSPLASH_ACCESS_KEY, generic = true } = opts;
  if (!key) return null;
  const list = [...new Set([...(Array.isArray(queries) ? queries : [queries]), ...(generic ? GENERIC_QUERIES : [])].filter(Boolean).map((q) => q.trim()))];
  const text = (p) => `${p.alt_description || ''} ${p.description || ''} ${(p.tags || []).map((t) => t.title).join(' ')}`.toLowerCase();
  for (const [qi, query] of list.entries()) {
    const q = new URLSearchParams({ query, orientation: 'landscape', per_page: '15', content_filter: 'high' });
    const r = await uget(key, `${API}/search/photos?${q}`);
    // Adaylar: kullanılmamış ve yüzü öne çıkan portre olmayan fotoğraflar (haberde adı geçen gerçek bir kişi sanılmasın)
    const candidates = (r.results || []).filter((p) => !used.has(p.id) && !/\b(portrait|selfie|face|headshot|woman|man|girl|boy|person)\b/i.test(text(p)));
    const words = query.toLowerCase().split(/\s+/).filter((w) => w.length > 2).map((w) => w.replace(/s$/, ''));
    const score = (p) => { const t = text(p); return words.filter((w) => t.includes(w)).length; };
    let pick = null; let best = qi === 0 ? 0 : -1;
    if (opts.judge && opts.context) {
      // İçerik uyumu: model, adayların açıklamalarından haberle en uyumlu olanı seçer (yoksa sonraki sorgu)
      const top = candidates.slice(0, 10);
      const k = await opts.judge(opts.context, top.map((p) => ({ text: text(p) })));
      pick = k >= 0 ? top[k] : null;
      dbg('unsplash', JSON.stringify(query), 'aday', top.length, 'seçim', k, k >= 0 ? text(top[k]).slice(0, 80) : '');
    } else for (const p of candidates) { const sc = score(p); if (sc > best) { best = sc; pick = p; } }
    if (!pick) continue;
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
  return null;
}

// ---------------------------------------------------------------- Pexels (yedek kaynak)
// https://www.pexels.com/api/ — saatte 200, ayda 20.000 istek. Fotoğrafçı ve Pexels adı bağlantısıyla belirtilir.
// Unsplash anahtarı yoksa, istek sınırı dolduysa ya da uygun fotoğraf bulunamazsa kullanılır.
const PEXELS_API = 'https://api.pexels.com/v1';
let unsplashBlocked = false;
let pexelsBlocked = false;
async function pexelsFind(queries, used, opts = {}) {
  const { key = process.env.PEXELS_API_KEY, generic = true } = opts;
  if (!key) return null;
  const list = [...new Set([...(Array.isArray(queries) ? queries : [queries]), ...(generic ? GENERIC_QUERIES : [])].filter(Boolean).map((q) => q.trim()))];
  for (const [qi, query] of list.entries()) {
    const q = new URLSearchParams({ query, orientation: 'landscape', per_page: '20' });
    const res = await fetch(`${PEXELS_API}/search?${q}`, { headers: { Authorization: key } });
    if (res.status === 429) throw new Error('Pexels istek sınırı (429)');
    if (!res.ok) throw new Error(`Pexels hatası ${res.status}`);
    const r = await res.json();
    const text = (p) => `${p.alt || ''}`.toLowerCase();
    const candidates = (r.photos || []).filter((p) => !used.has(`pexels-${p.id}`) && !/\b(portrait|selfie|face|headshot|woman|man|girl|boy|person)\b/i.test(text(p)));
    const words = query.toLowerCase().split(/\s+/).filter((w) => w.length > 2).map((w) => w.replace(/s$/, ''));
    const score = (p) => words.filter((w) => text(p).includes(w)).length;
    let pick = null; let best = qi === 0 ? 0 : -1;
    if (opts.judge && opts.context) {
      const top = candidates.slice(0, 10);
      const k = await opts.judge(opts.context, top.map((p) => ({ text: text(p) })));
      pick = k >= 0 ? top[k] : null;
      dbg('pexels', JSON.stringify(query), 'aday', top.length, 'seçim', k, k >= 0 ? text(top[k]).slice(0, 80) : '');
    } else for (const p of candidates) { const sc = score(p); if (sc > best) { best = sc; pick = p; } }
    if (!pick) continue;
    const id = `pexels-${pick.id}`;
    used.add(id);
    return {
      id,
      url: pick.src.original,
      alt: (pick.alt || '').slice(0, 200),
      author: pick.photographer || 'Pexels',
      authorUrl: pick.photographer_url || 'https://www.pexels.com',
      link: pick.url || 'https://www.pexels.com',
      source: 'pexels',
    };
  }
  return null;
}

// ---------------------------------------------------------------- Pixabay (üçüncü kaynak)
// https://pixabay.com/api/docs/ — dakikada 100 istek. Pixabay görsellerin kendi adreslerinden kalıcı gösterilmesine
// izin vermez: fotoğraf indirilir, WebP olarak 3 boyutta public/foto/ klasörüne kaydedilir ve siteden sunulur.
export const LOCAL_WIDTHS = [480, 800, 1280];
async function pixabayFind(queries, used, opts = {}) {
  const { key = process.env.PIXABAY_API_KEY, generic = true, root = '.' } = opts;
  if (!key) return null;
  const list = [...new Set([...(Array.isArray(queries) ? queries : [queries]), ...(generic ? GENERIC_QUERIES : [])].filter(Boolean).map((q) => q.trim()))];
  for (const [qi, query] of list.entries()) {
    const q = new URLSearchParams({ key, q: query.slice(0, 100), image_type: 'photo', orientation: 'horizontal', safesearch: 'true', per_page: '30', min_width: '1200', lang: 'en' });
    const res = await fetch(`https://pixabay.com/api/?${q}`);
    if (res.status === 429) throw new Error('Pixabay istek sınırı (429)');
    if (!res.ok) throw new Error(`Pixabay hatası ${res.status}`);
    const r = await res.json();
    const text = (p) => `${p.tags || ''}`.toLowerCase();
    const candidates = (r.hits || []).filter((p) => !used.has(`pixabay-${p.id}`) && p.largeImageURL && !/\b(portrait|selfie|face|headshot|woman|man|girl|boy|person|people|model)\b/i.test(text(p)));
    const words = query.toLowerCase().split(/\s+/).filter((w) => w.length > 2).map((w) => w.replace(/s$/, ''));
    const score = (p) => words.filter((w) => text(p).includes(w)).length;
    let pick = null; let best = qi === 0 ? 0 : -1;
    if (opts.judge && opts.context) {
      const top = candidates.slice(0, 10);
      const k = await opts.judge(opts.context, top.map((p) => ({ text: text(p) })));
      pick = k >= 0 ? top[k] : null;
      dbg('pixabay', JSON.stringify(query), 'aday', top.length, 'seçim', k, k >= 0 ? text(top[k]).slice(0, 80) : '');
    } else for (const p of candidates) { const sc = score(p); if (sc > best) { best = sc; pick = p; } }
    if (!pick) continue;
    // İndir ve 3 boyutta WebP olarak kaydet (16:9'a yakın kırpma yok; sayfada object-fit: cover ile yerleşir)
    const img = await fetch(pick.largeImageURL);
    if (!img.ok) continue;
    const buf = Buffer.from(await img.arrayBuffer());
    const { default: sharp } = await import('sharp');
    const name = `px-${pick.id}`;
    const dir = path.join(root, 'public/foto');
    fs.mkdirSync(dir, { recursive: true });
    for (const w of LOCAL_WIDTHS) await sharp(buf).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 72 }).toFile(path.join(dir, `${name}-${w}.webp`));
    const id = `pixabay-${pick.id}`;
    used.add(id);
    return {
      id,
      url: `/foto/${name}`,
      // Pixabay açıklama yerine etiket verir: yinelenmeyen ilk 5 etiket
      alt: [...new Set(`${pick.tags || ''}`.split(',').map((t) => t.trim()).filter(Boolean))].slice(0, 5).join(', '),
      author: pick.user || 'Pixabay',
      authorUrl: pick.user && pick.user_id ? `https://pixabay.com/users/${pick.user}-${pick.user_id}/` : 'https://pixabay.com/',
      link: pick.pageURL || 'https://pixabay.com/',
      source: 'pixabay',
    };
  }
  return null;
}

/**
 * Habere uygun, daha önce kullanılmamış yatay bir fotoğraf bulur: önce Unsplash, olmazsa Pexels, o da olmazsa Pixabay.
 * queries: öncelik sırasıyla sorgular (habere özel → kategori); sonunda genel teknoloji sorguları denenir.
 */
export async function findPhoto(queries, used, opts = {}) {
  if (!unsplashBlocked) {
    try {
      const p = await unsplashFind(queries, used, opts);
      if (p) return p;
    } catch (err) {
      if (!/istek sınırı/.test(err.message) || !(process.env.PEXELS_API_KEY || process.env.PIXABAY_API_KEY)) throw err;
      unsplashBlocked = true; // bu çalışmada Unsplash'e bir daha sorulmaz
    }
  }
  if (!pexelsBlocked) {
    try {
      const p = await pexelsFind(queries, used, opts);
      if (p) return p;
    } catch (err) {
      if (!process.env.PIXABAY_API_KEY) throw err;
      pexelsBlocked = true;
    }
  }
  return pixabayFind(queries, used, opts);
}
export function photoDebugState() {
  return { unsplashBlocked, pexelsBlocked, keys: { unsplash: !!process.env.UNSPLASH_ACCESS_KEY, pexels: !!process.env.PEXELS_API_KEY, pixabay: !!process.env.PIXABAY_API_KEY } };
}

const yamlStr = (s) => JSON.stringify(String(s ?? '').trim());

/** Fotoğraf bilgisini Markdown ön bilgisine (frontmatter) yazılacak satırlara çevirir */
export function photoYaml(photo, field = 'photo') {
  return [
    `${field}:`,
    `  id: ${yamlStr(photo.id)}`,
    `  url: ${yamlStr(photo.url)}`,
    `  alt: ${yamlStr(photo.alt)}`,
    `  author: ${yamlStr(photo.author)}`,
    `  authorUrl: ${yamlStr(photo.authorUrl)}`,
    `  link: ${yamlStr(photo.link)}`,
    ...(photo.source ? [`  source: ${yamlStr(photo.source)}`] : []),
  ];
}

/** Haber dosyasındaki fotoğrafı (photo ya da photo2) yenisiyle değiştirir */
export function replacePhotoInFile(file, photo, field = 'photo') {
  const s = fs.readFileSync(file, 'utf8');
  const re = new RegExp(`^${field}:\\n(?:  .*\\n)+`, 'm');
  const block = photoYaml(photo, field).join('\n') + '\n';
  if (re.test(s)) { fs.writeFileSync(file, s.replace(re, block)); return true; }
  return addPhotoToFile(file, photo, field);
}

/** Var olan bir haber dosyasına fotoğraf ekler ("sources:" satırının önüne) */
export function addPhotoToFile(file, photo, field = 'photo') {
  const s = fs.readFileSync(file, 'utf8');
  if (new RegExp(`^${field}:`, 'm').test(s)) return false;
  const i = s.indexOf('\nsources:');
  if (i < 0) return false;
  fs.writeFileSync(file, s.slice(0, i) + '\n' + photoYaml(photo, field).join('\n') + s.slice(i));
  return true;
}

/**
 * Kategori fotoğraf havuzu (data/foto-havuzu.json): fotoğrafı olmayan ya da fotoğrafı sayfada zaten kullanılmış
 * haberlerde illüstrasyon yerine gösterilen gerçek fotoğraflar. Her kategoride en az POOL_MIN fotoğraf tutulur.
 */
export const POOL_FILE = 'data/foto-havuzu.json';
const POOL_MIN = 6;
const POOL_QUERIES = {
  modeller: ['artificial intelligence neural network', 'computer code screen', 'data center server'],
  ajanlar: ['robot hand laptop', 'automation workflow', 'laptop typing'],
  araclar: ['software developer laptop', 'smartphone app screen', 'computer desk workspace'],
  'girisim-yatirim': ['startup office team', 'stock market chart', 'business meeting'],
  regulasyon: ['government building', 'law books justice', 'parliament'],
  arastirma: ['research laboratory', 'scientist computer', 'microscope lab'],
  platformlar: ['smartphone apps', 'social media phone', 'search engine laptop'],
  pazarlama: ['marketing team meeting', 'advertising billboard', 'analytics dashboard'],
  donanim: ['computer chip semiconductor', 'circuit board', 'server rack'],
  guvenlik: ['cyber security', 'padlock computer', 'server room'],
  turkiye: ['istanbul skyline', 'ankara city', 'istanbul bosphorus'],
  genel: ['artificial intelligence technology', 'technology abstract', 'futuristic computer'],
};
export function readPool(root = '.') {
  try { return JSON.parse(fs.readFileSync(path.join(root, POOL_FILE), 'utf8')); } catch { return {}; }
}
/** Havuzdaki eksikleri tamamlar; en fazla `limit` fotoğraf ekler. Eklenen sayıyı döndürür. */
export async function fillPool(used, { root = '.', limit = 12 } = {}) {
  if (!process.env.UNSPLASH_ACCESS_KEY && !process.env.PEXELS_API_KEY && !process.env.PIXABAY_API_KEY) return 0;
  const pool = readPool(root);
  for (const list of Object.values(pool)) for (const p of list) used.add(p.id);
  let added = 0;
  outer: for (const [cat, queries] of Object.entries(POOL_QUERIES)) {
    pool[cat] ??= [];
    let qi = 0;
    while (pool[cat].length < POOL_MIN) {
      if (added >= limit) break outer;
      const q = queries[qi % queries.length]; qi++;
      const photo = await findPhoto([q], used, { generic: false });
      if (photo) { pool[cat].push(photo); added++; }
      if (qi >= queries.length * 3) break;
    }
  }
  if (added) fs.writeFileSync(path.join(root, POOL_FILE), JSON.stringify(pool, null, 1) + '\n');
  return added;
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
