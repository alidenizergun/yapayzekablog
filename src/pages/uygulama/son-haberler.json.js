// iOS uygulaması için son haberler akışı: uygulama arka planda bu dosyaya bakar, yeni haber varsa bildirim gösterir.
// Yalnızca sitede zaten herkese açık olan bilgiler (başlık, özet, adres, tarih, kategori) yer alır.
import { getNews, newsUrl, slugOf, catName } from '../../lib/news.js';

export async function GET(context) {
  const items = (await getNews()).slice(0, 40).map((n) => ({
    id: slugOf(n),
    title: n.data.title,
    spot: n.data.spot || '',
    category: catName(n.data.category),
    url: new URL(newsUrl(n), context.site).href,
    date: n.data.date.toISOString(),
  }));
  return new Response(JSON.stringify({ version: 1, items }), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
