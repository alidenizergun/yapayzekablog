// İki dilli site: Türkçe (kök) ve İngilizce (/en/). Adres eşlemesi, arayüz metinleri ve içerik yerelleştirmesi.
// Sayfalar Türkçe adresle düşünür; u('/haber/x/') İngilizce sayfada otomatik olarak '/en/news/<ingilizce-ad>/' olur.
import { getCollection } from 'astro:content';
import { GLOSSARY } from '../lib/glossary.js';
import { TASKS } from '../lib/tools.js';
import { tagSlug } from '../lib/slug.js';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const strMods = import.meta.glob('./en/strings.json', { eager: true });
const STR = Object.values(strMods)[0]?.default ?? {};

export const LANGS = ['tr', 'en'];
export const langOf = (u) => (String(u?.pathname ?? u).slice(BASE.length).startsWith('/en/') || String(u?.pathname ?? u).slice(BASE.length) === '/en' ? 'en' : 'tr');
export const LOCALE = { tr: 'tr-TR', en: 'en-US' };
export const OG_LOCALE = { tr: 'tr_TR', en: 'en_US' };

// ---------------------------------------------------------------- adres eşlemesi
// Türkçe ilk parça -> İngilizce ilk parça. Listede olmayan bölümlerin (etiket) İngilizcesi yoktur.
export const SEG = {
  haber: 'news', kategori: 'category', sozluk: 'glossary', rehber: 'guides', arac: 'tools', 'arac-secici': 'tool-finder',
  'en-iyi': 'best', karsilastir: 'compare', 'ucretsiz-yapay-zeka-araclari': 'free-ai-tools', 'en-iyi-yapay-zeka-uygulamalari': 'best-ai-apps',
  'yeni-araclar': 'new-ai-tools', 'modeller-karsilastirma': 'ai-model-pricing', akis: 'latest', haftalik: 'weekly', gelisme: 'stories',
  yatirimlar: 'funding-tracker', etkinlikler: 'events', 'turkiye-yapay-zeka': 'ai-in-turkey', 'yerli-yapay-zeka': 'turkish-ai-models',
  hakkimizda: 'about', gizlilik: 'privacy', 'hata-bildir': 'report-error', ara: 'search', sayfa: 'page', konu: 'topic', konular: 'topics',
  'rss.xml': 'rss.xml',
};
export const CAT_EN = { modeller: 'models', ajanlar: 'agents', araclar: 'tools', 'girisim-yatirim': 'startups-funding', regulasyon: 'regulation',
  arastirma: 'research', platformlar: 'platforms', pazarlama: 'marketing', donanim: 'hardware', guvenlik: 'security', turkiye: 'turkey' };
const GL_OVERRIDE = { gpu: 'gpu', api: 'api', 'tpu-npu': 'tpu-and-npu', hbm: 'hbm', rag: 'rag', mcp: 'mcp' };
export const GL_EN = Object.fromEntries(GLOSSARY.map((g) => [g.slug, GL_OVERRIDE[g.slug] || tagSlug(g.en.replace(/\(.*?\)/g, ''))]));
export const TASK_EN = { sohbet: 'ai-chatbots', 'cv-hazirlama': 'resume-writing', 'gorsel-olusturma': 'image-generation', 'video-olusturma': 'video-generation',
  'muzik-yapma': 'music-generation', seslendirme: 'voice-generation', 'logo-tasarim': 'logo-design', 'sunum-hazirlama': 'presentations',
  'kod-yazma': 'coding', ceviri: 'translation', 'ozet-cikarma': 'summarization', 'toplanti-notu': 'meeting-notes', 'yapay-zeka-dedektoru': 'ai-detectors' };

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

const SLUG_MAPS = (m) => ({
  haber: m.news, rehber: m.guides, haftalik: m.digests,
  kategori: new Map(Object.entries(CAT_EN)), sozluk: new Map(Object.entries(GL_EN)), 'en-iyi': new Map(Object.entries(TASK_EN)),
});
const invert = (map) => new Map([...map].map(([k, v]) => [v, k]));

/** Türkçe yol -> İngilizce yol (karşılığı yoksa null). Yol BASE içermez. */
export function toEn(trPath, m) {
  const [p, hash = ''] = trPath.split('#');
  const segs = p.split('/').filter(Boolean);
  if (!segs.length) return '/en/' + (hash ? `#${hash}` : '');
  const s0 = SEG[segs[0]];
  if (!s0) return null;
  const out = [s0];
  if (segs[1] !== undefined) {
    const sm = SLUG_MAPS(m)[segs[0]];
    if (sm) { const v = sm.get(segs[1]); if (!v) return null; out.push(v); } else out.push(segs[1]);
  }
  out.push(...segs.slice(2));
  const tail = p.endsWith('/') || !/\.\w+$/.test(p) ? '/' : '';
  return `/en/${out.join('/')}${tail}`.replace(/\/{2,}/g, '/') + (hash ? `#${hash}` : '');
}
/** İngilizce yol -> Türkçe yol */
export function toTr(enPath, m) {
  const [p, hash = ''] = enPath.split('#');
  const segs = p.split('/').filter(Boolean).slice(1);
  if (!segs.length) return '/' + (hash ? `#${hash}` : '');
  const rev = invert(new Map(Object.entries(SEG)));
  const s0 = rev.get(segs[0]);
  if (!s0) return null;
  const out = [s0];
  if (segs[1] !== undefined) {
    const sm = SLUG_MAPS(m)[s0];
    if (sm) { const v = invert(sm).get(segs[1]); if (!v) return null; out.push(v); } else out.push(segs[1]);
  }
  out.push(...segs.slice(2));
  const tail = !/\.\w+$/.test(p) ? '/' : '';
  return `/${out.join('/')}${tail}`.replace(/\/{2,}/g, '/') + (hash ? `#${hash}` : '');
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
  if (lang !== 'en') return entry;
  const en = m.newsByRef.get(entry.id.replace(/\.md$/, ''));
  if (!en) return null;
  const e = en.data;
  const d = entry.data;
  return {
    ...entry, en, body: en.body,
    data: { ...d, title: e.title, spot: e.spot, whyItMatters: e.whyItMatters, turkeyAngle: e.turkeyAngle, keyPoints: e.keyPoints,
      whatsNext: e.whatsNext, byNumbers: e.byNumbers, newTool: d.newTool ? { ...d.newTool, what: e.newToolWhat || d.newTool.what } : undefined,
      photo: d.photo ? { ...d.photo, alt: e.photoAlt || d.photo.alt } : undefined },
  };
}
export const locNewsList = (list, lang, m) => (lang === 'en' ? list.map((n) => locNews(n, lang, m)).filter(Boolean) : list);

export function locGuide(entry, lang, m) {
  if (lang !== 'en') return entry;
  const en = m.guidesByRef.get(entry.id);
  if (!en) return null;
  const e = en.data;
  return { ...entry, en, body: en.body, data: { ...entry.data, title: e.title, description: e.description, summary: e.summary, faq: e.faq ?? [] } };
}
export function locDigest(entry, lang, m) {
  if (lang !== 'en') return entry;
  const en = m.digestsByRef.get(entry.id);
  if (!en) return null;
  const e = en.data;
  return { ...entry, en, body: en.body, data: { ...entry.data, title: e.title, spot: e.spot, items: e.items } };
}
