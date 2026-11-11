import rss from '@astrojs/rss';
import { SITE } from '../lib/site.js';
import { getNews, newsUrl, catName } from '../lib/news.js';

export async function GET(context) {
  const news = (await getNews()).slice(0, 50);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    customData: '<language>tr-tr</language>',
    items: news.map((n) => ({
      title: n.data.title,
      description: n.data.spot,
      pubDate: n.data.date,
      link: newsUrl(n),
      categories: [catName(n.data.category), ...n.data.tags],
    })),
  });
}
