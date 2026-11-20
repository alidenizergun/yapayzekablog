// Kategori RSS akışları: /kategori/<bölüm>/rss.xml (yalnızca o bölümün son 30 haberi)
import rss from '@astrojs/rss';
import { SITE, CATEGORIES } from '../../../lib/site.js';
import { getNews, newsUrl, catName, ogImageFor } from '../../../lib/news.js';

const xmlAttr = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
export function getStaticPaths() {
  return CATEGORIES.map((c) => ({ params: { slug: c.slug }, props: { cat: c } }));
}
export async function GET(context) {
  const { cat } = context.props;
  const news = (await getNews()).filter((n) => n.data.category === cat.slug).slice(0, 30);
  const self = new URL(`kategori/${cat.slug}/rss.xml`, context.site).href;
  return rss({
    title: `${cat.name} · ${SITE.name}`,
    description: `${SITE.name}: ${cat.name} alanındaki yapay zeka haberleri`,
    site: context.site,
    xmlns: { atom: 'http://www.w3.org/2005/Atom', media: 'http://search.yahoo.com/mrss/' },
    customData: `<language>tr-tr</language><atom:link href="${xmlAttr(self)}" rel="self" type="application/rss+xml"/>`,
    items: news.map((n) => ({
      title: n.data.title, description: n.data.spot, pubDate: n.data.date, link: newsUrl(n),
      categories: [catName(n.data.category), ...n.data.tags], author: 'YZ Gündemi Editör Masası',
      customData: `<media:content url="${xmlAttr(new URL(ogImageFor(n), context.site).href)}" medium="image" width="1200" height="630"/>`,
    })),
  });
}
