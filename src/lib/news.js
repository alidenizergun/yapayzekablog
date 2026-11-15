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

const UTM = 'utm_source=noron&utm_medium=referral';
export const withUtm = (u) => `${u}${u.includes('?') ? '&' : '?'}${UTM}`;
export const photoSrc = (photo, w, h) =>
  `${photo.url}${photo.url.includes('?') ? '&' : '?'}w=${w}&h=${h}&fit=crop&crop=entropy&auto=format&q=70`;

/** Bir haberin kendi (bağlamsız) görseli: haber sayfasında kullanılır */
export function defaultVisual(entry) {
  const d = entry.data;
  if (d.brand) return { kind: 'brand' };
  if (d.photo) return { kind: 'photo' };
  return { kind: 'illus', v: variantOf(entry) };
}

/** Sosyal medya paylaşım görseli (raster olmalı: fotoğraf varsa o, yoksa illüstrasyon) */
export const ogImageFor = (entry) => (entry.data.photo ? photoSrc(entry.data.photo, 1200, 630) : imageFor(entry));

/**
 * Aynı bölümde gösterilen haberler için görsel seçer; aynı logo, fotoğraf veya çizim
 * bir bölümde iki kez görünmesin. Logosu zaten kullanılmış bir şirket haberinde
 * fotoğraf varsa fotoğraf gösterilir.
 * @returns {Map<string, {kind: 'brand'|'photo'|'illus', v?: number}>}
 */
export function spreadVisuals(entries) {
  const used = new Set();
  const out = new Map();
  let prev = null;
  for (const e of entries) {
    const d = e.data;
    let choice = null;
    if (d.brand && !used.has(`b:${d.brand}`)) choice = { kind: 'brand' };
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
