// Düzeltmeler günlüğü (/duzeltmeler/). Yayınlanmış bir haberde anlamı değiştiren bir hata düzeltildiğinde buraya eklenir;
// haberin sonunda da "Düzeltme" notu olarak görünür. Yazım hatası gibi anlamı değiştirmeyen düzeltmeler kaydedilmez.
// Alanlar: slug (haber adresi, tarihsiz), date (YYYY-AA-GG), tr ve en (ne düzeltildi, tek cümle).
// Örnek:
// { slug: 'openai-yeni-model', date: '2026-11-20', tr: 'Modelin bağlam penceresi 1 milyon değil 400 bin token olarak düzeltildi.', en: 'The model’s context window was corrected to 400,000 tokens, not 1 million.' },
export const CORRECTIONS = [];

export const correctionsFor = (slug) => CORRECTIONS.filter((c) => c.slug === slug).sort((a, b) => a.date.localeCompare(b.date));
