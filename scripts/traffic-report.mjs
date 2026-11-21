// Haftalık trafik raporu: Google Search Console + Google Analytics 4.
// 1) Geçen haftanın rakamlarını bir önceki haftayla karşılaştıran Markdown rapor yazar (iş akışı bunu GitHub konusu olarak açar).
// 2) Okurların en çok ilgilendiği konuları data/okur-ilgisi.json'a kaydeder; haber araştırması bunu eşit önemdeki adaylar arasında öncelik için kullanır.
//
// Gerekenler (GitHub'da):
//   sır       GOOGLE_SA_KEY     Google Cloud hizmet hesabının JSON anahtarı (tamamı)
//   değişken  GA4_PROPERTY_ID   GA4 mülk kimliği (yalnızca rakam, ör. 512345678)
//   değişken  GSC_SITE_URL      Search Console mülkü: "sc-domain:yzgundemi.com" ya da "https://yzgundemi.com/"
// Hizmet hesabı GA4'te "Görüntüleyen", Search Console'da "Kısıtlı" kullanıcı olarak eklenmelidir. Bağımlılık yoktur (node:crypto + fetch).
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { CATEGORIES } from '../src/lib/site.js';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT_MD = process.env.REPORT_FILE || path.join(ROOT, 'trafik-raporu.md');
const INTEREST_FILE = path.join(ROOT, 'data/okur-ilgisi.json');
const log = (...a) => console.log('[trafik]', ...a);

const rawKey = process.env.GOOGLE_SA_KEY;
const GA4 = (process.env.GA4_PROPERTY_ID || '').replace(/^properties\//, '').trim();
const GSC = (process.env.GSC_SITE_URL || '').trim();
if (!rawKey || (!GA4 && !GSC)) {
  log('GOOGLE_SA_KEY ve GA4_PROPERTY_ID / GSC_SITE_URL tanımlı değil; rapor atlandı.');
  process.exit(0);
}

// ------------------------------------------------------------ Google erişim belirteci (hizmet hesabı, RS256 JWT)
async function accessToken() {
  const key = JSON.parse(rawKey);
  const b64 = (o) => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600,
  })}`;
  const sig = crypto.createSign('RSA-SHA256').update(unsigned).sign(key.private_key).toString('base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${sig}` }),
  });
  const j = await res.json();
  if (!res.ok) throw new Error(`Google yetkilendirme hatası: ${j.error_description || j.error || res.status}`);
  return j.access_token;
}

const token = await accessToken();
async function post(url, body) {
  const res = await fetch(url, { method: 'POST', headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify(body) });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${new URL(url).host} ${res.status}: ${j.error?.message || 'bilinmeyen hata'}`);
  return j;
}

// ------------------------------------------------------------ yardımcılar
const ymd = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => new Date(Date.now() - n * 86400e3);
const nf = (n) => Math.round(n).toLocaleString('tr-TR');
const pct = (a, b) => (b ? `${a >= b ? '+' : ''}${Math.round(((a - b) / b) * 100)}%` : '–');
const md = (s) => String(s).replace(/\|/g, '\\|').replace(/\n/g, ' ');

// Haber adresi -> başlık ve kategori
const newsMeta = new Map();
for (const dir of ['haberler', 'haberler-en']) {
  const base = path.join(ROOT, 'src/content', dir);
  if (!fs.existsSync(base)) continue;
  for (const f of fs.readdirSync(base).filter((x) => x.endsWith('.md'))) {
    const m = fs.readFileSync(path.join(base, f), 'utf8').match(/^---\n([\s\S]*?)\n---/);
    if (!m) continue;
    const d = parse(m[1]);
    const trSlug = f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
    if (dir === 'haberler') newsMeta.set(`/haber/${trSlug}/`, { title: d.title, category: d.category, tags: d.tags || [] });
    else if (d.slug) newsMeta.set(`/en/news/${d.slug}/`, { title: d.title, ref: `/haber/${trSlug}/` });
  }
}
const metaOf = (p) => { const m = newsMeta.get(p); return m?.ref ? { ...newsMeta.get(m.ref), title: m.title } : m; };

const report = [];
const interest = { updated: new Date().toISOString(), topNews: [], topCategories: [], topQueries: [] };

// ------------------------------------------------------------ GA4
if (GA4) {
  try {
    const url = `https://analyticsdata.googleapis.com/v1beta/properties/${GA4}:runReport`;
    const ranges = [{ startDate: '7daysAgo', endDate: 'yesterday', name: 'bu' }, { startDate: '14daysAgo', endDate: '8daysAgo', name: 'once' }];
    const totals = await post(url, { dateRanges: ranges, metrics: [{ name: 'activeUsers' }, { name: 'sessions' }, { name: 'screenPageViews' }] });
    const val = (rangeName, i) => Number(totals.rows?.find((r) => r.dimensionValues?.[0]?.value === rangeName)?.metricValues?.[i]?.value ?? totals.rows?.[rangeName === 'bu' ? 0 : 1]?.metricValues?.[i]?.value ?? 0);
    const [u, s, v] = [0, 1, 2].map((i) => val('bu', i));
    const [u0, s0, v0] = [0, 1, 2].map((i) => val('once', i));
    report.push('## Ziyaret (Google Analytics, son 7 gün)', '',
      '| | Bu hafta | Önceki hafta | Değişim |', '|---|---:|---:|---:|',
      `| Kullanıcı | ${nf(u)} | ${nf(u0)} | ${pct(u, u0)} |`,
      `| Oturum | ${nf(s)} | ${nf(s0)} | ${pct(s, s0)} |`,
      `| Sayfa görüntüleme | ${nf(v)} | ${nf(v0)} | ${pct(v, v0)} |`, '');

    const pages = await post(url, {
      dateRanges: [ranges[0]], dimensions: [{ name: 'pagePath' }], metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }], limit: 200,
    });
    const rows = (pages.rows || []).map((r) => ({ path: r.dimensionValues[0].value.replace(/[?#].*$/, ''), views: Number(r.metricValues[0].value), users: Number(r.metricValues[1].value) }));
    const news = rows.filter((r) => metaOf(r.path));
    report.push('### En çok okunan haberler', '', '| Haber | Görüntüleme | Kullanıcı |', '|---|---:|---:|',
      ...news.slice(0, 10).map((r) => `| [${md(metaOf(r.path).title)}](https://www.yzgundemi.com${r.path}) | ${nf(r.views)} | ${nf(r.users)} |`), '');
    const others = rows.filter((r) => !metaOf(r.path)).slice(0, 8);
    if (others.length) report.push('### En çok açılan diğer sayfalar', '', ...others.map((r) => `- \`${md(r.path)}\`: ${nf(r.views)}`), '');

    const cats = new Map();
    const catName = (s) => CATEGORIES.find((c) => c.slug === s)?.name ?? s;
    for (const r of news) { const c = catName(metaOf(r.path).category); if (c) cats.set(c, (cats.get(c) || 0) + r.views); }
    interest.topCategories = [...cats].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([category, views]) => ({ category, views }));
    interest.topNews = news.slice(0, 10).map((r) => ({ title: metaOf(r.path).title, category: metaOf(r.path).category, views: r.views }));
    if (interest.topCategories.length) report.push('### Kategoriler (haber görüntülemesi)', '', ...interest.topCategories.map((c) => `- ${c.category}: ${nf(c.views)}`), '');
    const en = rows.filter((r) => r.path.startsWith('/en/')).reduce((a, r) => a + r.views, 0);
    report.push(`İngilizce baskı: ${nf(en)} görüntüleme (toplam görüntülemenin %${v ? Math.round((en / v) * 100) : 0} kadarı).`, '');

    const ch = await post(url, { dateRanges: [ranges[0]], dimensions: [{ name: 'sessionDefaultChannelGroup' }], metrics: [{ name: 'sessions' }], orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 8 });
    if (ch.rows?.length) report.push('### Trafik kaynakları (oturum)', '', ...ch.rows.map((r) => `- ${r.dimensionValues[0].value}: ${nf(r.metricValues[0].value)}`), '');
  } catch (e) {
    report.push('## Google Analytics', '', `Veri alınamadı: ${e.message}`, '');
    log('GA4:', e.message);
  }
}

// ------------------------------------------------------------ Search Console (veriler 2-3 gün gecikir)
if (GSC) {
  try {
    const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC)}/searchAnalytics/query`;
    const end = daysAgo(3), start = daysAgo(9), end0 = daysAgo(10), start0 = daysAgo(16);
    const tot = async (s, e) => (await post(url, { startDate: ymd(s), endDate: ymd(e) })).rows?.[0] ?? { clicks: 0, impressions: 0, ctr: 0, position: 0 };
    const [a, b] = await Promise.all([tot(start, end), tot(start0, end0)]);
    report.push(`## Google araması (Search Console, ${ymd(start)} – ${ymd(end)})`, '',
      '| | Bu hafta | Önceki hafta | Değişim |', '|---|---:|---:|---:|',
      `| Tıklama | ${nf(a.clicks)} | ${nf(b.clicks)} | ${pct(a.clicks, b.clicks)} |`,
      `| Gösterim | ${nf(a.impressions)} | ${nf(b.impressions)} | ${pct(a.impressions, b.impressions)} |`,
      `| Ortalama sıra | ${a.position ? a.position.toFixed(1) : '–'} | ${b.position ? b.position.toFixed(1) : '–'} | |`, '');
    const q = await post(url, { startDate: ymd(start), endDate: ymd(end), dimensions: ['query'], rowLimit: 25 });
    const qs = (q.rows || []).map((r) => ({ query: r.keys[0], clicks: r.clicks, impressions: r.impressions, position: Math.round(r.position * 10) / 10 }));
    interest.topQueries = qs.slice(0, 15);
    if (qs.length) report.push('### En çok gösterim alan aramalar', '', '| Arama | Tıklama | Gösterim | Sıra |', '|---|---:|---:|---:|',
      ...[...qs].sort((x, y) => y.impressions - x.impressions).slice(0, 15).map((r) => `| ${md(r.query)} | ${nf(r.clicks)} | ${nf(r.impressions)} | ${r.position} |`), '');
    // Fırsat: çok gösterim, düşük tıklama, ilk iki sayfada
    const opp = qs.filter((r) => r.impressions >= 20 && r.position <= 20 && r.clicks / r.impressions < 0.02).slice(0, 8);
    if (opp.length) report.push('### Fırsatlar (gösteriliyor ama tıklanmıyor)', '', ...opp.map((r) => `- "${md(r.query)}": ${nf(r.impressions)} gösterim, sıra ${r.position}`), '');
    const p = await post(url, { startDate: ymd(start), endDate: ymd(end), dimensions: ['page'], rowLimit: 10 });
    if (p.rows?.length) report.push('### Aramadan en çok tıklanan sayfalar', '', ...p.rows.map((r) => {
      const pth = new URL(r.keys[0]).pathname; const m = metaOf(pth);
      return `- [${md(m?.title || pth)}](${r.keys[0]}): ${nf(r.clicks)} tıklama, ${nf(r.impressions)} gösterim`;
    }), '');
  } catch (e) {
    report.push('## Search Console', '', `Veri alınamadı: ${e.message}`, '');
    log('GSC:', e.message);
  }
}

const head = `Haftalık trafik raporu · ${new Date().toLocaleDateString('tr-TR', { timeZone: 'Europe/Istanbul', day: 'numeric', month: 'long', year: 'numeric' })}`;
fs.writeFileSync(OUT_MD, `${report.join('\n')}\n\n_Okur ilgisi verisi \`data/okur-ilgisi.json\` dosyasına kaydedildi; haber araştırması eşit önemdeki adaylar arasında bu konulara öncelik verir._\n`);
if (interest.topNews.length || interest.topQueries.length) {
  fs.mkdirSync(path.dirname(INTEREST_FILE), { recursive: true });
  fs.writeFileSync(INTEREST_FILE, JSON.stringify(interest, null, 2) + '\n');
}
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `title=${head}\n`);
log('rapor yazıldı:', OUT_MD);
