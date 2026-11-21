/**
 * Türkiye'de yapay zeka sohbet asistanlarının kullanım payları (Statcounter Global Stats).
 *
 * Statcounter'ın "AI Chatbot Market Share" verisinin aylık CSV çıktısını çeker ve
 * data/yz-kullanim-tr.json dosyasına yazar. Veri CC BY-SA 3.0 lisanslıdır; sayfada kaynak gösterilir.
 * Ağ hatasında mevcut dosyaya dokunmaz. Kullanım: node scripts/usage-share.mjs [--months=12]
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT = path.join(ROOT, 'data/yz-kullanim-tr.json');
const MONTHS = Number((process.argv.find((a) => a.startsWith('--months=')) || '').split('=')[1] || 13);

const ym = (d) => `${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
const dash = (s) => `${s.slice(0, 4)}-${s.slice(4)}`;

function range() {
  const now = new Date();
  const last = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1)); // tamamlanmış son ay
  const first = new Date(Date.UTC(last.getUTCFullYear(), last.getUTCMonth() - (MONTHS - 1), 1));
  return [ym(first), ym(last)];
}

function csvUrl(from, to) {
  const q = new URLSearchParams({
    device_hidden: 'desktop+mobile+tablet+console', statType_hidden: 'ai_chatbot', region_hidden: 'TR', granularity: 'monthly',
    statType: 'AI Chatbot', region: 'Turkey', fromInt: from, toInt: to, fromMonthYear: dash(from), toMonthYear: dash(to), csv: '1',
  });
  return `https://gs.statcounter.com/chart.php?${q.toString().replace(/%2B/g, '+')}`;
}

/** "Date","ChatGPT","Gemini",... satırlarını { month, shares } listesine çevirir */
export function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  const cells = (l) => l.match(/("([^"]|"")*"|[^,]+)/g)?.map((c) => c.replace(/^"|"$/g, '').replace(/""/g, '"').trim()) ?? [];
  const head = cells(lines[0]);
  return lines.slice(1).map((l) => {
    const c = cells(l);
    const shares = {};
    head.slice(1).forEach((h, i) => { const v = Number(c[i + 1]); if (Number.isFinite(v)) shares[h] = v; });
    return { month: c[0].slice(0, 7), shares };
  }).filter((r) => /^\d{4}-\d{2}$/.test(r.month) && Object.keys(r.shares).length);
}

async function main() {
  const [from, to] = range();
  const url = csvUrl(from, to);
  const res = await fetch(url, { headers: { 'user-agent': 'YZGundemiBot/1.0 (+https://www.yzgundemi.com)' } });
  if (!res.ok) throw new Error(`Statcounter HTTP ${res.status}`);
  const text = await res.text();
  const months = parseCsv(text);
  if (months.length < 2) throw new Error(`beklenmedik yanıt: ${text.slice(0, 200)}`);
  const data = {
    source: 'Statcounter Global Stats — AI Chatbot Market Share, Türkiye (masaüstü + mobil + tablet)',
    sourceUrl: 'https://gs.statcounter.com/ai-chatbot-market-share/all/turkey',
    license: 'CC BY-SA 3.0',
    fetched: new Date().toISOString().slice(0, 10),
    months,
  };
  const prev = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  const next = JSON.stringify(data, null, 2) + '\n';
  // Yalnızca veri değiştiyse yaz (tarih alanı tek başına değişiklik sayılmaz)
  const strip = (s) => s.replace(/"fetched": "[^"]*",?/, '');
  if (strip(prev) === strip(next)) { console.log('kullanım payları: değişiklik yok'); return; }
  fs.writeFileSync(OUT, next);
  const last = months.at(-1);
  console.log(`kullanım payları: ${months.length} ay yazıldı; son ay ${last.month}:`, last.shares);
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, 'changed=1\n');
}

if (import.meta.url === `file://${process.argv[1]}`) main().catch((e) => { console.error('kullanım payları alınamadı:', e.message); process.exit(1); });
