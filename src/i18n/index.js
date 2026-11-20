// İki dilli site: Türkçe (kök) ve İngilizce (/en/). Adres eşlemesi, arayüz metinleri ve içerik yerelleştirmesi.
// Sayfalar Türkçe adresle düşünür; u('/haber/x/') İngilizce sayfada otomatik olarak '/en/news/<ingilizce-ad>/' olur.
import { getCollection } from 'astro:content';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const strMods = import.meta.glob('./en/strings.json', { eager: true });
const STR = Object.values(strMods)[0]?.default ?? {};

export const LANGS = ['tr', 'en'];
export const langOf = (u) => (String(u?.pathname ?? u).slice(BASE.length).startsWith('/en/') || String(u?.pathname ?? u).slice(BASE.length) === '/en' ? 'en' : 'tr');
export const LOCALE = { tr: 'tr-TR', en: 'en-US' };
export const OG_LOCALE = { tr: 'tr_TR', en: 'en_US' };

import { SEG, CAT_EN, GL_EN, TASK_EN, toEn, toTr } from './paths.js';
export { SEG, CAT_EN, GL_EN, TASK_EN, toEn, toTr };

const trSlugOf = (id) => id.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
let mapsP;
/** İngilizce içerik eşlemeleri (bir kez yüklenir) */
export function maps() {
  mapsP ??= (async () => {
    const safe = async (c) => { try { return await getCollection(c); } catch { return []; } };
    const [news, guides, digests] = await Promise.all([safe('haberlerEn'), safe('rehberlerEn'), safe('ozetlerEn')]);
    const byRef = (list) => new Map(list.map((e) => [e.data.ref, e]));
    return {
      newsByRef: byRef(news), guidesByRef: byRef(guides), digestsByRef: byRef(digests),
      news: new Map(news.map((e) => [trSlugOf(e.data.ref), e.data.slug])),
      guides: new Map(guides.map((e) => [e.data.ref, e.data.slug])),
      digests: new Map(digests.map((e) => [e.data.ref, e.data.slug])),
    };
  })();
  return mapsP;
}

// ---------------------------------------------------------------- arayüz ve veri metinleri
/** Veri metni: İngilizce çevirisi varsa o, yoksa Türkçe */
export const s = (lang, key, tr) => (lang === 'en' ? STR[key]?.en ?? tr : tr);
export const hasStr = (key) => Boolean(STR[key]?.en);

/** Sayfa bağlamı: dil, metin seçici, yerelleştirilmiş adres üretici */
export async function i18n(Astro) {
  const lang = langOf(Astro.url);
  const m = await maps();
  const T = (tr, en) => (lang === 'en' ? en : tr);
  /** Türkçe yolu bu dilin adresine çevirir (İngilizce karşılığı yoksa İngilizce ana sayfa) */
  const u = (trPath) => `${BASE}${lang === 'en' ? (toEn(trPath, m) ?? '/en/') : trPath}`;
  const stripBase = (p) => (BASE && p.startsWith(BASE) ? p.slice(BASE.length) : p) || '/';
  const here = stripBase(Astro.url.pathname);
  const trHere = lang === 'en' ? toTr(here, m) : here;
  const alternates = { tr: trHere, en: trHere ? toEn(trHere, m) : null };
  return { lang, T, u, m, alternates, locale: LOCALE[lang], S: (key, tr) => s(lang, key, tr) };
}

// ---------------------------------------------------------------- içerik yerelleştirmesi
/** Türkçe haber girdisini İngilizce alanlarla birleştirir; çevirisi yoksa null */
export function locNews(entry, lang, m) {
  if (lang !== 'en' || entry.en) return entry;
  const en = m.newsByRef.get(entry.id.replace(/\.md$/, ''));
  if (!en) return null;
  const e = en.data;
  const d = entry.data;
  return {
    ...entry, en, body: en.body,
    data: { ...d, title: e.title, spot: e.spot, whyItMatters: e.whyItMatters, turkeyAngle: e.turkeyAngle, keyPoints: e.keyPoints,
      whatsNext: e.whatsNext, byNumbers: e.byNumbers, newTool: d.newTool ? { ...d.newTool, what: e.newToolWhat || d.newTool.what } : undefined,
      photo: d.photo ? { ...d.photo, alt: e.photoAlt || d.photo.alt } : undefined,
      deal: d.deal ? { ...d.deal, type: DEAL_TYPE_EN[d.deal.type] ?? d.deal.type, country: COUNTRY_EN[d.deal.country] ?? d.deal.country, counterparty: e.dealCounterparty ?? d.deal.counterparty, amount: e.dealAmount ?? d.deal.amount } : undefined },
  };
}
export const locNewsList = (list, lang, m) => (lang === 'en' ? list.map((n) => locNews(n, lang, m)).filter(Boolean) : list);

export function locGuide(entry, lang, m) {
  if (lang !== 'en' || entry.en) return entry;
  const en = m.guidesByRef.get(entry.id);
  if (!en) return null;
  const e = en.data;
  return { ...entry, en, body: en.body, data: { ...entry.data, title: e.title, description: e.description, summary: e.summary, faq: e.faq ?? [] } };
}
export function locDigest(entry, lang, m) {
  if (lang !== 'en' || entry.en) return entry;
  const en = m.digestsByRef.get(entry.id);
  if (!en) return null;
  const e = en.data;
  return { ...entry, en, body: en.body, data: { ...entry.data, title: e.title, spot: e.spot, items: e.items } };
}

// ---------------------------------------------------------------- veri yerelleştirmesi
export const GL_CAT_EN = { 'Temel kavramlar': 'Core concepts', 'Modeller ve eğitim': 'Models and training', 'Kullanım ve araçlar': 'Using AI', 'Donanım ve altyapı': 'Hardware and infrastructure', 'Güvenlik ve etik': 'Safety and ethics', 'Veri ve değerlendirme': 'Data and evaluation', 'Matematiksel temeller': 'Math foundations', 'Görüntü, ses ve robotik': 'Vision, audio and robotics', 'Hukuk, iş ve politika': 'Law, business and policy' };
/** Sözlük terimi: { term, def, how, why, example, faq, catName } */
export function locTerm(t, long, lang) {
  const k = (f) => `gl.${t.slug}.${f}`;
  return {
    ...t,
    term: s(lang, k('term'), t.term), def: s(lang, k('def'), t.def),
    how: long && s(lang, k('how'), long.how), why: long && s(lang, k('why'), long.why), example: long && s(lang, k('example'), long.example),
    faq: (long?.faq ?? []).map(([q, a], i) => [s(lang, `${k('faq')}.${i}.q`, q), s(lang, `${k('faq')}.${i}.a`, a)]),
    catName: lang === 'en' ? GL_CAT_EN[t.cat] ?? t.cat : t.cat,
  };
}
/** Araç: açıklama ve listeler */
export function locTool(t, lang) {
  if (lang !== 'en') return t;
  const k = (f) => `tool.${t.slug}.${f}`;
  return {
    ...t, desc: s(lang, k('desc'), t.desc), priceNote: t.priceNote && s(lang, k('priceNote'), t.priceNote),
    good: t.good.map((x, i) => s(lang, `${k('good')}.${i}`, x)), notFor: t.notFor.map((x, i) => s(lang, `${k('notFor')}.${i}`, x)),
    price: t.price ? { ...t.price, plans: t.price.plans.map(([n, v, note], i) => [n, v, note && s(lang, `${k('plan')}.${i}.note`, note)]) } : t.price,
  };
}
export function locTask(k, lang) {
  if (lang !== 'en') return k;
  const key = (f) => `task.${k.slug}.${f}`;
  return { ...k, title: s(lang, key('title'), k.title), short: s(lang, key('short'), k.short), intro: s(lang, key('intro'), k.intro), q: s(lang, key('q'), k.q),
    picks: k.picks.map(([sl, note]) => [sl, s(lang, `${key('pick')}.${sl}`, note)]) };
}
export const FREE_LABEL_EN = { var: 'Free plan available', deneme: 'Free trial or credits', yok: 'No free plan' };

// Rehber konu grupları ve seviyeler
export const TOPIC_EN = { 'Temel kullanım': 'Getting started', 'Yazı ve içerik': 'Writing and content', 'İş ve kariyer': 'Work and careers', 'Eğitim ve öğrenme': 'Education and learning', 'Güvenlik ve gizlilik': 'Safety and privacy', 'Teknik': 'Technical' };
export const LEVEL_EN = { 'Başlangıç': 'Beginner', 'Orta': 'Intermediate', 'İleri': 'Advanced' };

// Araç sayfaları yardımcıları
import { catName as toolCatTr, freeLabel as FREE_TR, trDate } from '../lib/tools.js';
import { fmtUsd, fmtTry } from '../lib/fx.js';
export const toolCat = (slug, lang) => s(lang, `toolcat.${slug}`, toolCatTr(slug));
export const freeL = (f, lang) => (lang === 'en' ? FREE_LABEL_EN[f] : FREE_TR[f]);
export const dateL = (iso, lang) => (lang === 'en' ? new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }) : trDate(iso));
export const usdL = (n, lang) => (lang === 'en' ? `$${Number.isInteger(n) ? n : n.toFixed(2)}` : fmtUsd(n));
export const tryL = (n, fx, lang) => (lang === 'en' ? (fx ? `≈ TRY ${Math.round(n * fx.rate).toLocaleString('en-US')}` : '') : fmtTry(n, fx));
export function priceShortL(t, lang) {
  const f = t.free ? freeL(t.free, lang) : '';
  if (lang !== 'en') { const p = t.price?.from ? `${Number.isInteger(t.price.from) ? t.price.from : t.price.from.toLocaleString('tr-TR')} $/ay'dan` : ''; return [f, p].filter(Boolean).join(' · ') || 'Fiyat: resmi sayfada'; }
  const p = t.price?.from ? `from ${usdL(t.price.from, 'en')}/mo` : '';
  return [f, p].filter(Boolean).join(' · ') || 'Price: see official site';
}

export const DEAL_TYPE_EN = { 'Yatırım': 'Funding round', 'Yatırım turu': 'Funding round', 'Satın alma': 'Acquisition', 'Birleşme': 'Merger', 'Halka arz': 'IPO', 'Anlaşma': 'Deal', 'Tesis yatırımı': 'Facility investment', 'Ortaklık': 'Partnership' };
export const COUNTRY_EN = { 'ABD': 'US', 'Güney Kore': 'South Korea', 'Çin': 'China', 'Japonya': 'Japan', 'Almanya': 'Germany', 'Fransa': 'France', 'İngiltere': 'UK', 'Birleşik Krallık': 'UK', 'Türkiye': 'Turkey', 'Hindistan': 'India', 'Kanada': 'Canada', 'İsrail': 'Israel', 'Tayvan': 'Taiwan', 'Singapur': 'Singapore', 'BAE': 'UAE', 'Suudi Arabistan': 'Saudi Arabia', 'Hollanda': 'Netherlands', 'İsveç': 'Sweden', 'İsviçre': 'Switzerland', 'İspanya': 'Spain', 'İtalya': 'Italy', 'Avustralya': 'Australia', 'Brezilya': 'Brazil' };

export const SITE_DESC_EN = 'Fast, sourced coverage of AI news from Turkey and around the world, translated from the Turkish edition of YZ Gündemi.';
