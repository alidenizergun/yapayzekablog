// Derleme sırasında TCMB'nin günlük kurundan USD/TRY döviz satış kurunu alır (araç fiyatlarının yaklaşık TL karşılığı için).
// Ağ yoksa veya yanıt beklenmedikse null döner; sayfalar o zaman yalnızca dolar fiyatı gösterir.
let cached;
export async function usdTry() {
  if (cached !== undefined) return cached;
  cached = null;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 6000);
    const res = await fetch('https://www.tcmb.gov.tr/kurlar/today.xml', { signal: ctrl.signal });
    clearTimeout(timer);
    if (res.ok) {
      const xml = await res.text();
      const date = (xml.match(/Tarih="([\d.]+)"/) || [])[1];
      const block = (xml.match(/<Currency[^>]*Kod="USD"[\s\S]*?<\/Currency>/) || [])[0] || '';
      const rate = Number((block.match(/<ForexSelling>([\d.]+)<\/ForexSelling>/) || [])[1]);
      if (rate > 1 && rate < 1000) cached = { rate, date: date || '' };
    }
  } catch {}
  return cached;
}

const usdFmt = (n) => (Number.isInteger(n) ? String(n) : n.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
export const fmtUsd = (n) => `${usdFmt(n)} $`;
export const fmtTry = (n, fx) => (fx ? `≈ ${Math.round(n * fx.rate).toLocaleString('tr-TR')} TL` : '');
