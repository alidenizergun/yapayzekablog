// Sözlük ↔ haber dizini: her haberde hangi terimlerin geçtiği bir kez hesaplanır ve derleme boyunca saklanır.
// 500+ terim × yüzlerce haber için terim sayfalarının her birinde yeniden aramak derlemeyi çok yavaşlatırdı.
import { GLOSSARY } from './glossary.js';
import { find } from '../../scripts/glossary-integration.mjs';

let cache = null;
/** news: getNews() çıktısı. Döner: { bySlug: Map<slug, haberId[]>, byNews: Map<haberId, Set<slug>> } */
export function glossaryIndex(news) {
  const key = news.map((n) => n.id).join('|');
  if (cache?.key === key) return cache;
  const bySlug = new Map(GLOSSARY.map((g) => [g.slug, []]));
  const byNews = new Map();
  for (const n of news) {
    const head = `${n.data.title} ${n.data.spot} ${n.body}`;
    const inBody = new Set();
    for (const g of GLOSSARY) {
      if (find(head, g)) bySlug.get(g.slug).push(n.id);
    }
    for (const g of GLOSSARY) if (find(n.body ?? '', g)) inBody.add(g.slug);
    byNews.set(n.id, inBody);
  }
  cache = { key, bySlug, byNews };
  return cache;
}
