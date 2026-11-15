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

/**
 * Aynı bölümde gösterilen haberler için varyant seçer: aynı çizim aynı bölümde
 * iki kez görünmesin (çizim sayısı yetmezse en azından art arda gelmesin).
 * @returns {Map<string, number>} haber kimliği -> varyant
 */
export function spreadImages(entries) {
  const used = new Set();
  const out = new Map();
  let prev = null;
  for (const e of entries) {
    const key = e.data.image;
    const base = variantOf(e);
    let v = base;
    for (let i = 0; i < IMAGE_VARIANTS; i++) {
      const cand = (base + i) % IMAGE_VARIANTS;
      if (!used.has(`${key}:${cand}`)) { v = cand; break; }
    }
    if (prev === `${key}:${v}`) v = (v + 1) % IMAGE_VARIANTS;
    used.add(`${key}:${v}`);
    prev = `${key}:${v}`;
    out.set(e.id, v);
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
