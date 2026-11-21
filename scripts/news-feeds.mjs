/**
 * Haber akışları (RSS/Atom) — ücretsiz, doğrudan okunan hızlı kaynaklar.
 *
 * scripts/news-feeds.json içindeki akışlar paralel çekilir, son LOOKBACK saatteki
 * başlıklar alınır ve araştırma modeline aday listesi olarak verilir. Bağımlılık yok;
 * basit ve hataya dayanıklı bir ayrıştırıcı kullanılır. Çekilemeyen akış atlanır.
 */
import fs from 'node:fs';
import path from 'node:path';

const AI_RE = /\b(ai|a\.i\.|artificial intelligence|llms?|gpt[-\w.]*|chatgpt|openai|anthropic|claude|gemini|deepmind|copilot|grok|xai|llama|mistral|deepseek|qwen|nvidia|gpus?|machine learning|neural|chatbots?|agents?|agentic|generative|diffusion|perplexity|hugging ?face|robot\w*|superintelligence|agi)\b/i;

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', hellip: '…', mdash: '—', ndash: '–', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“' };
function decode(s) {
  return String(s || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => ENT[n.toLowerCase()] ?? m);
}
const stripTags = (s) => decode(s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const tag = (block, name) => {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i'));
  return m ? m[1] : '';
};

/** RSS 2.0 ve Atom için öğe listesi: { title, url, date, summary, raw } */
export function parseFeed(xml) {
  const items = [];
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || xml.match(/<entry[\s>][\s\S]*?<\/entry>/gi) || [];
  for (const b of blocks) {
    const title = stripTags(tag(b, 'title'));
    let url = decode(tag(b, 'link')).trim();
    if (!/^https?:\/\//.test(url)) {
      const links = [...b.matchAll(/<link\b([^>]*)\/?>/gi)].map((m) => m[1]);
      const alt = links.find((a) => !/rel=["'](?!alternate)/i.test(a)) || links[0] || '';
      url = decode((alt.match(/href=["']([^"']+)["']/i) || [])[1] || '');
    }
    if (!/^https?:\/\//.test(url)) url = decode(tag(b, 'guid')).trim();
    const dateStr = stripTags(tag(b, 'pubDate') || tag(b, 'published') || tag(b, 'updated') || tag(b, 'dc:date'));
    const date = dateStr ? new Date(dateStr) : null;
    const rawSummary = tag(b, 'description') || tag(b, 'summary') || tag(b, 'content');
    if (!title || !/^https?:\/\//.test(url)) continue;
    items.push({ title, url, date: date && !isNaN(date) ? date : null, summary: stripTags(rawSummary).slice(0, 220), raw: decode(rawSummary) });
  }
  return items;
}

// Paylaşım/izleme parametrelerini (hediye bağlantısı, erişim anahtarı vb.) atar
const DROP_PARAM = /^(utm_|smid$|unlocked_article_code$|accesstoken$|sharetoken$|gift|ref$|fbclid$|gclid$|src$)/i;
function cleanUrl(u) {
  if (!u) return u;
  try {
    const x = new URL(u);
    for (const k of [...x.searchParams.keys()]) if (DROP_PARAM.test(k)) x.searchParams.delete(k);
    x.hash = '';
    return x.toString();
  } catch {
    return u;
  }
}

async function fetchText(url, timeoutMs = 12000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { 'user-agent': 'YZGundemiBot/1.0 (+https://www.yzgundemi.com)', accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml;q=0.9, */*;q=0.5' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(t);
  }
}

/**
 * Akışları çeker. `known` normalize edilmiş, daha önce kullanılmış adresler kümesidir.
 * Döner: { items: [{ source, title, url, origin?, date, summary, discovery }], note }
 */
export async function fetchFeeds({ root, lookbackHours = 26, known = new Set(), normalize = (u) => u, max = 60, log = () => {} }) {
  const cfg = JSON.parse(fs.readFileSync(path.join(root, 'scripts/news-feeds.json'), 'utf8'));
  const since = Date.now() - lookbackHours * 3600e3;
  const ok = [];
  const failed = [];
  const lists = await Promise.all(
    cfg.akislar.map(async (f) => {
      try {
        const xml = await fetchText(f.url);
        const parsed = parseFeed(xml);
        ok.push(f.ad);
        return parsed
          .filter((i) => !i.date || i.date.valueOf() >= since)
          .filter((i) => !i.date || i.date.valueOf() <= Date.now() + 3600e3)
          .filter((i) => !f.filtre || AI_RE.test(`${i.title} ${i.summary}`))
          .map((i) => {
            const item = { source: f.ad, title: i.title, url: i.url, date: i.date, summary: i.summary, discovery: f.tur === 'kesif' };
            if (item.discovery) {
              // Derleyicinin işaret ettiği asıl haber adresi (Techmeme açıklamasındaki ilk dış bağlantı)
              const hrefs = [...i.raw.matchAll(/href=["'](https?:\/\/[^"']+)["']/gi)].map((m) => m[1]);
              const host = new URL(f.url).hostname.replace(/^www\./, '');
              item.origin = cleanUrl(hrefs.find((h) => !h.includes(host)));
            }
            return item;
          });
      } catch (err) {
        failed.push(`${f.ad} (${err.name === 'AbortError' ? 'zaman aşımı' : err.message})`);
        return [];
      }
    }),
  );
  const seen = new Set();
  const items = lists
    .flat()
    .filter((i) => {
      const k = normalize(i.origin || i.url);
      if (!k || seen.has(k) || known.has(k) || known.has(normalize(i.url))) return false;
      seen.add(k);
      return true;
    })
    .sort((a, b) => (b.date?.valueOf() ?? 0) - (a.date?.valueOf() ?? 0))
    .slice(0, max);
  const note = `Haber akışları: ${items.length} yeni başlık, ${ok.length}/${cfg.akislar.length} akış okundu${failed.length ? ` (okunamayan: ${failed.join(', ')})` : ''}`;
  log(note);
  return { items, note };
}

/** Araştırma istemine eklenecek kısa liste */
export function formatFeedsForPrompt(items) {
  return items
    .map((i) => {
      const when = i.date ? i.date.toISOString().slice(0, 16).replace('T', ' ') + ' UTC' : 'tarih yok';
      const link = i.discovery ? (i.origin ? `${i.origin} (derleyici: ${i.source})` : `${i.url} (YALNIZCA İPUCU, kaynak değil)`) : i.url;
      return `- [${i.source}] ${i.title} — ${when}\n  ${link}${i.summary ? `\n  Özet: ${i.summary}` : ''}`;
    })
    .join('\n');
}

// Doğrudan çalıştırıldığında akışları test eder: node scripts/news-feeds.mjs
if (import.meta.url === `file://${process.argv[1]}`) {
  const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
  const r = await fetchFeeds({ root, lookbackHours: Number(process.env.LOOKBACK_HOURS || 26), log: console.log });
  const by = {};
  for (const i of r.items) by[i.source] = (by[i.source] || 0) + 1;
  console.log(by);
  console.log(formatFeedsForPrompt(r.items.slice(0, 15)));
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## Haber akışı testi\n- ${r.note}\n${Object.entries(by).map(([k, v]) => `- ${k}: ${v}`).join('\n')}\n`);
}
