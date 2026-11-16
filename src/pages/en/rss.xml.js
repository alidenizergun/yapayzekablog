// İngilizce RSS: yalnızca çevirisi olan haberler
import rss from '@astrojs/rss';
import { getNews, slugOf, catName, ogImageFor } from '../../lib/news.js';
import { maps, locNewsList, toEn, s, SITE_DESC_EN } from '../../i18n/index.js';

const xmlAttr = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export async function GET(context) {
  const m = await maps();
  const news = locNewsList(await getNews(), 'en', m).slice(0, 50);
  return rss({
    title: 'YZ Gündemi: AI news',
    description: SITE_DESC_EN,
    site: new URL('en/', context.site).href,
    xmlns: { atom: 'http://www.w3.org/2005/Atom', media: 'http://search.yahoo.com/mrss/' },
    customData: `<language>en-us</language><atom:link href="${xmlAttr(new URL('en/rss.xml', context.site).href)}" rel="self" type="application/rss+xml"/>`,
    items: news.map((n) => ({
      title: n.data.title,
      description: n.data.spot,
      pubDate: n.data.date,
      link: toEn(`/haber/${slugOf(n)}/`, m),
      categories: [s('en', `cat.${n.data.category}.name`, catName(n.data.category))],
      author: 'YZ Gündemi',
      customData: `<media:content url="${xmlAttr(new URL(ogImageFor(n), context.site).href)}" medium="image" width="1200" height="630"/>`,
    })),
  });
}
