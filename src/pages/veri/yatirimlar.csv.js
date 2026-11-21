import { DEALS } from '../../lib/deals.js';
import { getNews, newsUrl } from '../../lib/news.js';
import { toCsv, csvResponse } from '../../lib/csv.js';
import { SITE } from '../../lib/site.js';

export async function GET() {
  const fromNews = (await getNews()).filter((n) => n.data.deal).map((n) => {
    const d = n.data.deal;
    return [n.data.date.toISOString().slice(0, 10), d.type, d.company, d.counterparty, d.amountUsdM, d.amount, null, d.round, d.investors, d.country, `https://www.${SITE.domain}${newsUrl(n)}`, 'YZ Gündemi'];
  });
  const archive = DEALS.map((x) => [x.dateApprox ? x.date.slice(0, 7) : x.date, x.type, x.company, x.counterparty, x.usdM, x.orig?.tr, x.valUsdM, x.round, x.investors, x.country, x.url, x.src]);
  const rows = [...fromNews, ...archive].sort((a, b) => String(b[0]).localeCompare(String(a[0])));
  return csvResponse(toCsv(['tarih', 'tur', 'sirket', 'karsi_taraf', 'tutar_milyon_usd', 'tutar_metin', 'degerleme_milyon_usd', 'tur_adi', 'yatirimcilar', 'ulke', 'kaynak_url', 'kaynak'], rows));
}
