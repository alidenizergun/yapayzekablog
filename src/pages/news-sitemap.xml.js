// Google News site haritası: yalnızca son 48 saatte yayınlanan haberler (Google News kuralı).
import { SITE } from '../lib/site.js';
import { getNews, newsUrl } from '../lib/news.js';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export async function GET(context) {
  const cutoff = Date.now() - 48 * 3600e3;
  const items = (await getNews()).filter((n) => n.data.date.valueOf() > cutoff).slice(0, 1000);
  const urls = items.map((n) => `<url><loc>${esc(new URL(newsUrl(n), context.site).href)}</loc><news:news><news:publication><news:name>${esc(SITE.name)}</news:name><news:language>tr</news:language></news:publication><news:publication_date>${n.data.date.toISOString()}</news:publication_date><news:title>${esc(n.data.title)}</news:title></news:news></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">${urls}</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
