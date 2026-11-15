import rss from '@astrojs/rss';
import { SITE } from '../lib/site.js';

const xmlAttr = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
import { getNews, newsUrl, catName, ogImageFor } from '../lib/news.js';

export async function GET(context) {
  const news = (await getNews()).slice(0, 50);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    xmlns: { atom: 'http://www.w3.org/2005/Atom', media: 'http://search.yahoo.com/mrss/' },
    customData: `<language>tr-tr</language><atom:link href="${xmlAttr(new URL('rss.xml', context.site).href)}" rel="self" type="application/rss+xml"/>`,
    items: news.map((n) => ({
      title: n.data.title,
      description: n.data.spot,
      pubDate: n.data.date,
      link: newsUrl(n),
      categories: [catName(n.data.category), ...n.data.tags],
      author: 'YZ Gündemi Editör Masası',
      customData: `<media:content url="${xmlAttr(new URL(ogImageFor(n), context.site).href)}" medium="image" width="1200" height="630"/>`,
    })),
  });
}
