// Saf adres eşlemesi (astro:content kullanmaz): site, derleme sonrası bağlantı çevirici ve site haritası birlikte kullanır.
import { GLOSSARY } from '../lib/glossary.js';
import { tagSlug } from '../lib/slug.js';

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

