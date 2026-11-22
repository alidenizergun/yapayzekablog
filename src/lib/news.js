import fs from 'node:fs';
import path from 'node:path';
import { getCollection } from 'astro:content';
import { SITE, categoryBySlug } from './site.js';
import { entitiesOf } from './entities.js';
import { BRANDS } from './brands.js';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path = '/') => `${BASE}${path.startsWith('/') ? path : '/' + path}`;

export const slugOf = (entry) => entry.id.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
export const newsUrl = (entry) => url(`/haber/${slugOf(entry)}/`);
export const catUrl = (slug) => url(`/kategori/${slug}/`);
// Her illüstrasyonun 3 varyantı var: anahtar.svg, anahtar-2.svg, anahtar-3.svg
export const IMAGE_VARIANTS = 3;

const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
/** Bir haberin kendi varyantı: haber adresine göre sabit */
export const variantOf = (entry) => hash(slugOf(entry)) % IMAGE_VARIANTS;

// ---------------------------------------------------------------- haber görselleri
// Öncelik: şirket logo kartı (brand) > Unsplash fotoğrafı (photo) > illüstrasyon (image)

const UTM = 'utm_source=yzgundemi&utm_medium=referral';
export const withUtm = (u) => `${u}${u.includes('?') ? '&' : '?'}${UTM}`;
export const photoSrc = (photo, w, h) => {
  const q = photo.url.includes('?') ? '&' : '?';
  const quality = w > 400 ? 55 : 65;
  // Pixabay: indirilen fotoğraf sitenin kendi sunucusunda üç boyutta (480/800/1280 px WebP)
  if (photo.source === 'pixabay') return url(`${photo.url}-${[480, 800, 1280].find((x) => x >= w) ?? 1280}.webp`);
  // Pexels: görsel sunucusu imgix benzeri parametreler alır
  if (photo.source === 'pexels') return `${photo.url}${q}auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;
  return `${photo.url}${q}w=${w}&h=${h}&fit=crop&crop=entropy&auto=format&q=${quality}`;
};
/** Fotoğraf kaynağının adı ve ana sayfası (künye satırları için) */
export const photoSource = (photo) => (photo?.source === 'pexels' ? { name: 'Pexels', url: 'https://www.pexels.com/' }
  : photo?.source === 'pixabay' ? { name: 'Pixabay', url: 'https://pixabay.com/' } : { name: 'Unsplash', url: 'https://unsplash.com/' });

/** Duyarlı görsel: telefonda kartlar tam genişlikte; tarayıcı ekrana uygun boyutu seçer (küçük resimlerde yalnızca 1x/2x) */
export function photoSet(photo, w, h) {
  if (w <= 160) return { src: photoSrc(photo, w, h), srcset: `${photoSrc(photo, w, h)} 1x, ${photoSrc(photo, w * 2, h * 2)} 2x` };
  if (photo.source === 'pixabay') return {
    src: photoSrc(photo, w, h),
    srcset: [480, 800, 1280].map((x) => `${url(`${photo.url}-${x}.webp`)} ${x}w`).join(', '),
    sizes: `(max-width: 760px) calc(100vw - 32px), ${w}px`,
  };
  // İnce basamaklar: telefonlar (360-430 px, 2-3x yoğunluk) gereğinden büyük dosya indirmesin
  const steps = [...new Set([360, 420, 480, 560, 640, 720, 800, w, 960, 1120, 1280, w * 2].filter((x) => x <= w * 2))].sort((a, b) => a - b);
  return {
    src: photoSrc(photo, w, h),
    srcset: steps.map((x) => `${photoSrc(photo, x, Math.round((x * h) / w))} ${x}w`).join(', '),
    sizes: `(max-width: 760px) calc(100vw - 32px), ${w}px`,
  };
}

/**
 * Bir haberin kendi (bağlamsız) görseli.
 * Büyük görsellerde (manşet, haber sayfası) fotoğraf önce gelir; küçüklerde logo.
 */
export function defaultVisual(entry, large = false) {
  const d = entry.data;
  if (large && d.photo) return { kind: 'photo' };
  if (d.brand) return { kind: 'brand' };
  if (d.photo) return { kind: 'photo' };
  if (d.photo2) return { kind: 'photo', n: 2 };
  const other = otherBrands(entry)[0];
  if (other) return { kind: 'brand', b: other };
  const pool = poolPhotos(d.category)[variantOf(entry) % Math.max(1, poolPhotos(d.category).length)];
  if (pool) return { kind: 'photo', pool };
  return { kind: 'none' };
}

// Kategori fotoğraf havuzu (data/foto-havuzu.json, haber hattı Unsplash'ten doldurur): fotoğrafı olmayan ya da
// fotoğrafı sayfada zaten kullanılmış haberler için yedek gerçek fotoğraf. İllüstrasyon hiçbir yerde kullanılmaz.
let POOL = null;
export function poolPhotos(category) {
  if (!POOL) {
    try { POOL = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/foto-havuzu.json'), 'utf8')); } catch { POOL = {}; }
  }
  return [...(POOL[category] ?? []), ...(POOL.genel ?? [])];
}

/** Haberde adı geçen, logosu olan diğer şirketler (illüstrasyon yerine logo kartı için yedek) */
/** Haberin illüstrasyon dışında bir görseli var mı (fotoğraf, logo veya haberde geçen bir şirketin logosu) */
export const hasRealVisual = (entry) => Boolean(entry.data.photo || entry.data.photo2 || entry.data.brand || otherBrands(entry).length);
/** Haberin kendine ait görseli (havuz fotoğrafı sayılmaz) */

export function otherBrands(entry) {
  return entitiesOf(entry).map((e) => e.brand).filter((b) => b && b !== entry.data.brand && BRANDS[b]);
}

/** Sosyal medya paylaşım görseli: 1200x630 PNG/JPG (SVG'yi sosyal ağlar göstermez) */
// Markalı haber kartı (scripts/news-cards.mjs, yayın sırasında üretilir); yoksa fotoğraf, logo veya illüstrasyon
export function cardFor(entry) {
  const p = entry.en?.data?.slug ? `/og/news/${entry.en.data.slug}.jpg` : `/og/haber/${slugOf(entry)}.jpg`;
  return fs.existsSync(path.join(process.cwd(), 'public', p)) ? url(p) : null;
}
export function ogImageFor(entry) {
  const card = cardFor(entry);
  if (card) return card;
  const d = entry.data;
  if (d.photo) return photoSrc(d.photo, 1200, 630);
  if (d.brand) return url(`/og/marka/${d.brand}.png`);
  return url('/og/site.png');
}

/**
 * Aynı bölümde gösterilen haberler için görsel seçer; aynı logo, fotoğraf veya çizim
 * bir bölümde iki kez görünmesin. Logosu zaten kullanılmış bir şirket haberinde
 * fotoğraf varsa fotoğraf gösterilir.
 * @returns {Map<string, {kind: 'brand'|'photo'|'none', n?: number, b?: string, pool?: object}>}
 */
const tagOf = (d, o) => o.kind === 'brand' ? `b:${o.b ?? d.brand}` : o.kind === 'photo' ? `p:${(o.pool ?? (o.n === 2 ? d.photo2 : d.photo)).id}` : 'none';
export function spreadVisuals(entries, { largeFirst = false } = {}) {
  const used = new Set();
  const out = new Map();
  for (const [i, e] of entries.entries()) {
    const d = e.data;
    let choice = null;
    // largeFirst: listenin ilk öğesi büyük gösterilir (manşet) -> fotoğraf önce
    const photoFirst = largeFirst && i === 0;
    // Sıra: (manşette fotoğraf) → logo → fotoğraf → ikinci fotoğraf → haberde geçen başka şirketin logosu → kategori havuzundan fotoğraf
    const opts = [];
    if (photoFirst && d.photo) opts.push({ kind: 'photo' });
    if (d.brand) opts.push({ kind: 'brand' });
    if (d.photo) opts.push({ kind: 'photo' });
    if (d.photo2) opts.push({ kind: 'photo', n: 2 });
    for (const b of otherBrands(e)) opts.push({ kind: 'brand', b });
    for (const p of poolPhotos(d.category)) opts.push({ kind: 'photo', pool: p });
    // İllüstrasyon yok: önce bu sayfada kullanılmamış bir seçenek; hepsi kullanıldıysa haberin kendi görseli
    // (fotoğraf/logo) tekrar edilir; hiç görsel yoksa görselsiz kart (yalnızca metin)
    choice = opts.find((o) => !used.has(tagOf(d, o))) ?? opts[0] ?? { kind: 'none' };
    const tag = tagOf(d, choice);
    used.add(tag);
    out.set(e.id, choice);
  }
  return out;
}
export const catName = (slug) => categoryBySlug(slug)?.name ?? slug;

export async function getNews() {
  const all = await getCollection('haberler', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(d, withTime = true, locale = SITE.locale) {
  return new Intl.DateTimeFormat(locale, {
    timeZone: SITE.timeZone,
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...(withTime ? { hour: '2-digit', minute: '2-digit' } : {}),
  }).format(d);
}

export function readingMinutes(text = '') {
  return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 200));
}

export function hostOf(u) {
  try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; }
}

// ---------------------------------------------------------------- etiketler
import { tagSlug } from './slug.js';
export { tagSlug };
export const tagUrl = (t) => url(`/etiket/${tagSlug(t)}/`);

/** Etiket -> haberler (aynı etiketin farklı yazımları tek sayfada toplanır) */
export async function getTags() {
  const map = new Map();
  for (const n of await getNews()) {
    for (const t of n.data.tags) {
      const slug = tagSlug(t);
      if (!slug) continue;
      if (!map.has(slug)) map.set(slug, { slug, name: t, items: [] });
      const e = map.get(slug);
      if (!e.items.includes(n)) e.items.push(n);
    }
  }
  return map;
}

/** Ana sayfanın ana akışında gösterilen haber sayısı (manşet 1 + yan 3 + öne çıkan 3 + liste 8); sayfalama buradan sonra başlar */
export const HOME_MAIN = 15;

// Okunma potansiyeli: puanı olmayan eski haberlerde manşet işaretliyse 80, değilse 50
export const popularityOf = (n) => n.data.popularity ?? (n.data.featured ? 80 : 50);

/** Haber hattının bir turda yayımladığı haberler birer dakika arayla tarihlenir; aradaki boşluk
 *  bu süreyi aşmayan ardışık haberler aynı tur sayılır. */
const BATCH_GAP_MS = 15 * 60e3;

/** Manşet: her zaman EN SON GELEN haber grubundan (son tur) biri.
 *  Yeni haber geldiğinde manşet o turun haberlerinden birine geçer; eski bir haber manşette kalmaz.
 *  Grup içinden fotoğrafı ya da logosu olanlar adaydır (manşette illüstrasyon yok); aralarından
 *  okunma potansiyeli (1-100) en yüksek olan seçilir, eşitlikte daha yeni olan.
 *  Grubun hiçbirinde gerçek görsel yoksa yine grubun en yüksek puanlısı seçilir
 *  (haber hattı her yeni habere fotoğraf bulmaya çalıştığı için bu çok nadirdir). */
export function pickLead(news) {
  const sorted = [...news].sort((a, b) => b.data.date - a.data.date);
  if (!sorted.length) return undefined;
  const batch = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1].data.date - sorted[i].data.date > BATCH_GAP_MS) break;
    batch.push(sorted[i]);
  }
  const pool = batch.filter(hasRealVisual).length ? batch.filter(hasRealVisual) : batch;
  // pool en yeniden eskiye sıralı: eşit puanda ilk (daha yeni) haber kalır
  return pool.reduce((best, n) => (popularityOf(n) > popularityOf(best) ? n : best));
}

/** Haftalık özetler (en yeni önce) */
export async function getDigests() {
  const all = await getCollection('ozetler', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
export const digestUrl = (entry) => url(`/haftalik/${entry.id.replace(/\.md$/, '')}/`);
/** "9-15 Kasım 2026" biçiminde hafta aralığı */
export function weekRange(start, end, lang = 'tr') {
  const f = (d, o) => new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'tr-TR', { timeZone: 'Europe/Istanbul', ...o }).format(d);
  const sameMonth = f(start, { month: 'long' }) === f(end, { month: 'long' });
  if (lang === 'en') return sameMonth
    ? `${f(start, { month: 'long', day: 'numeric' })}-${f(end, { day: 'numeric' })}, ${f(end, { year: 'numeric' })}`
    : `${f(start, { month: 'long', day: 'numeric' })} - ${f(end, { month: 'long', day: 'numeric', year: 'numeric' })}`;
  return sameMonth
    ? `${f(start, { day: 'numeric' })}-${f(end, { day: 'numeric', month: 'long', year: 'numeric' })}`
    : `${f(start, { day: 'numeric', month: 'long' })} - ${f(end, { day: 'numeric', month: 'long', year: 'numeric' })}`;
}
