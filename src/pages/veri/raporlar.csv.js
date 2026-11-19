import { reportsSorted } from '../../lib/reports.js';
import { toCsv, csvResponse } from '../../lib/csv.js';

export async function GET() {
  const rows = reportsSorted().map((r) => [r.date, r.publisher, r.title, r.titleTr, r.topics, r.summary.tr, r.findings.map((f) => `${f.value}: ${f.tr}`), r.url]);
  return csvResponse(toCsv(['tarih', 'yayinci', 'baslik', 'baslik_tr', 'konular', 'ozet', 'one_cikan_bulgular', 'url'], rows));
}
