import { getCollection } from 'astro:content';
import { SITE, categoryBySlug } from './site.js';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path = '/') => `${BASE}${path.startsWith('/') ? path : '/' + path}`;

export const slugOf = (entry) => entry.id.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
export const newsUrl = (entry) => url(`/haber/${slugOf(entry)}/`);
export const catUrl = (slug) => url(`/kategori/${slug}/`);
// Her illüstrasyonun 3 varyantı var: anahtar.svg, anahtar-2.svg, anahtar-3.svg
export const IMAGE_VARIANTS = 3;
export const imgUrl = (key, v = 0) => url(`/img/${key}${v ? `-${v + 1}` : ''}.svg`);

const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
/** Bir haberin kendi varyantı: haber adresine göre sabit */
export const variantOf = (entry) => hash(slugOf(entry)) % IMAGE_VARIANTS;
export const imageFor = (entry, v) => imgUrl(entry.data.image, v ?? variantOf(entry));

// ---------------------------------------------------------------- haber görselleri
// Öncelik: şirket logo kartı (brand) > Unsplash fotoğrafı (photo) > illüstrasyon (image)

const UTM = 'utm_source=yzgundemi&utm_medium=referral';
export const withUtm = (u) => `${u}${u.includes('?') ? '&' : '?'}${UTM}`;
export const photoSrc = (photo, w, h) =>
  `${photo.url}${photo.url.includes('?') ? '&' : '?'}w=${w}&h=${h}&fit=crop&crop=entropy&auto=format&q=70`;

/**
 * Bir haberin kendi (bağlamsız) görseli.
 * Büyük görsellerde (manşet, haber sayfası) fotoğraf önce gelir; küçüklerde logo.
 */
export function defaultVisual(entry, large = false) {
  const d = entry.data;
  if (large && d.photo) return { kind: 'photo' };
  if (d.brand) return { kind: 'brand' };
  if (d.photo) return { kind: 'photo' };
  return { kind: 'illus', v: variantOf(entry) };
}

/** Sosyal medya paylaşım görseli: 1200x630 PNG/JPG (SVG'yi sosyal ağlar göstermez) */
export function ogImageFor(entry) {
  const d = entry.data;
  if (d.photo) return photoSrc(d.photo, 1200, 630);
  if (d.brand) return url(`/og/marka/${d.brand}.png`);
  return url(`/og/gorsel/${d.image}.png`);
}

/**
 * Aynı bölümde gösterilen haberler için görsel seçer; aynı logo, fotoğraf veya çizim
 * bir bölümde iki kez görünmesin. Logosu zaten kullanılmış bir şirket haberinde
 * fotoğraf varsa fotoğraf gösterilir.
 * @returns {Map<string, {kind: 'brand'|'photo'|'illus', v?: number}>}
 */
export function spreadVisuals(entries, { largeFirst = false } = {}) {
  const used = new Set();
  const out = new Map();
  let prev = null;
  for (const [i, e] of entries.entries()) {
    const d = e.data;
    let choice = null;
    // largeFirst: listenin ilk öğesi büyük gösterilir (manşet) -> fotoğraf önce
    const photoFirst = largeFirst && i === 0;
    if (photoFirst && d.photo && !used.has(`p:${d.photo.id}`)) choice = { kind: 'photo' };
    else if (d.brand && !used.has(`b:${d.brand}`)) choice = { kind: 'brand' };
    else if (d.photo && !used.has(`p:${d.photo.id}`)) choice = { kind: 'photo' };
    if (!choice) {
      const key = d.image;
      const base = variantOf(e);
      let v = base;
      for (let i = 0; i < IMAGE_VARIANTS; i++) {
        const cand = (base + i) % IMAGE_VARIANTS;
        if (!used.has(`i:${key}:${cand}`)) { v = cand; break; }
      }
      if (prev === `i:${key}:${v}`) v = (v + 1) % IMAGE_VARIANTS;
      choice = { kind: 'illus', v };
    }
    const tag = choice.kind === 'brand' ? `b:${d.brand}` : choice.kind === 'photo' ? `p:${d.photo.id}` : `i:${d.image}:${choice.v}`;
    used.add(tag);
    prev = tag;
    out.set(e.id, choice);
  }
  return out;
}
export const catName = (slug) => categoryBySlug(slug)?.name ?? slug;

export async function getNews() {
  const all = await getCollection('haberler', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(d, withTime = true) {
  return new Intl.DateTimeFormat(SITE.locale, {
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
const TR = { ç: 'c', ğ: 'g', ı: 'i', İ: 'i', ö: 'o', ş: 's', ü: 'u', Ç: 'c', Ğ: 'g', Ö: 'o', Ş: 's', Ü: 'u' };
export const tagSlug = (t) =>
  String(t).replace(/[çğıİöşüÇĞÖŞÜ]/g, (c) => TR[c]).toLowerCase()
    .normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
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

/** Manşet: son 36 saatin en çok okunma potansiyeli olan haberi.
 *  Her saat 0,5 puan düşer; böylece büyük bir haber bir sonraki güncellemede de manşette kalır,
 *  ama ertesi gün daha yeni bir gelişmeye yer açar. Son 36 saatte haber yoksa en yeni haber. */
export function pickLead(news, now = Date.now()) {
  const pool = news.filter((n) => now - n.data.date.valueOf() < 36 * 3600e3);
  if (!pool.length) return news[0];
  const score = (n) => popularityOf(n) - ((now - n.data.date.valueOf()) / 3600e3) * 0.5;
  return pool.reduce((best, n) => (score(n) > score(best) ? n : best));
}

/** Haftalık özetler (en yeni önce) */
export async function getDigests() {
  const all = await getCollection('ozetler', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
export const digestUrl = (entry) => url(`/haftalik/${entry.id.replace(/\.md$/, '')}/`);
/** "9-15 Kasım 2026" biçiminde hafta aralığı */
export function weekRange(start, end) {
  const f = (d, o) => new Intl.DateTimeFormat('tr-TR', { timeZone: 'Europe/Istanbul', ...o }).format(d);
  const sameMonth = f(start, { month: 'long' }) === f(end, { month: 'long' });
  return sameMonth
    ? `${f(start, { day: 'numeric' })}-${f(end, { day: 'numeric', month: 'long', year: 'numeric' })}`
    : `${f(start, { day: 'numeric', month: 'long' })} - ${f(end, { day: 'numeric', month: 'long', year: 'numeric' })}`;
}
