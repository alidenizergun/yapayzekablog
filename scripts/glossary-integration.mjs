// Derleme sonrası: haber metinlerinde (div.prose) sözlükteki bir terim ilk geçtiği yerde /sozluk/<terim>/ sayfasına bağlanır.
// - Her terim bir haberde en fazla bir kez, bir haberde en fazla 6 terim bağlanır
// - Başlık, mevcut link ve kod içindeki metne dokunulmaz
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GLOSSARY } from '../src/lib/glossary.js';
import { TOOLS } from '../src/lib/tools.js';

const MAX_PER_PAGE = 6;
// Küçük harfe çevirirken ı/i ayrımı kaldırılır ("AI" ve "ai", "İ" ve "I" aynı eşleşsin); uzunluk korunur
const lower = (s) => s.toLocaleLowerCase('tr').replace(/ı/g, 'i');
const isLetter = (ch) => !!ch && /\p{L}|\p{N}/u.test(ch);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** Metinde terimin ilk geçtiği yer: [başlangıç, bitiş] */
let lastText = null, lastLow = '';
export function find(text, entry) {
  // Aynı metin art arda yüzlerce terimle aranır; küçük harfe çevrilmiş hâli saklanır
  const low = text === lastText ? lastLow : (lastLow = lower(text), lastText = text, lastLow);
  let best = null;
  for (const m of entry.match) {
    const exact = m.startsWith('=');
    const stem = lower(exact ? m.slice(1) : m);
    let i = low.indexOf(stem);
    while (i !== -1) {
      const before = low[i - 1];
      let end = i + stem.length;
      if (!exact) while (isLetter(low[end])) end++;
      const ok = !isLetter(before) && (!exact || !isLetter(low[end]))
        && !(entry.not || []).some((n) => low.startsWith(lower(n), i))
        && !(entry.skipIf || []).some((ph) => low.slice(Math.max(0, i - 40), end + 40).includes(lower(ph)));
      if (ok && low.length === text.length) { if (!best || i < best[0]) best = [i, end]; break; }
      i = low.indexOf(stem, i + 1);
    }
  }
  return best;
}

export function linkGlossary(html, base = '') {
  const start = html.indexOf('<div class="prose">');
  if (start === -1) return { html, n: 0 };
  const end = html.indexOf('</div>', start);
  const region = html.slice(start, end);
  const parts = region.split(/(<[^>]+>)/);
  const used = new Set();
  let skip = 0, n = 0;
  for (let k = 0; k < parts.length; k++) {
    const p = parts[k];
    if (p.startsWith('<')) {
      if (/^<(a|h[1-6]|code|pre)\b/i.test(p)) skip++;
      else if (/^<\/(a|h[1-6]|code|pre)>/i.test(p)) skip = Math.max(0, skip - 1);
      continue;
    }
    if (skip || !p.trim() || n >= MAX_PER_PAGE) continue;
    let text = p;
    // Bu metin parçasında henüz bağlanmamış terimleri, metindeki sırasına göre bağla
    // Daha önce bağlanmış terimler de yer tutar: "büyük dil modeli" ikinci kez geçtiğinde içindeki daha kısa bir terim bağlanmaz
    const hits = GLOSSARY.map((g) => ({ g, at: find(text, g) })).filter((h) => h.at)
      .sort((a, b) => a.at[0] - b.at[0] || b.at[1] - a.at[1]); // aynı yerde başlayanlardan uzun olan (örn. "istem enjeksiyonu" > "istem")
    let out = '', cursor = 0;
    for (const { g, at } of hits) {
      if (n >= MAX_PER_PAGE || at[0] < cursor) continue;
      if (used.has(g.slug)) { out += text.slice(cursor, at[1]); cursor = at[1]; continue; }
      const word = text.slice(at[0], at[1]);
      const short = g.def.length > 140 ? g.def.slice(0, 137).replace(/\s+\S*$/, '') + '…' : g.def;
      out += text.slice(cursor, at[0]) + `<a class="gloss" href="${base}/sozluk/${g.slug}/" title="${esc(short)}">${word}</a>`;
      cursor = at[1];
      used.add(g.slug);
      n++;
    }
    parts[k] = out + text.slice(cursor);
  }
  return { html: html.slice(0, start) + parts.join('') + html.slice(end), n };
}

// Araç adları: haber ve rehber metninde bir aracın ilk geçtiği yer /arac/<slug>/ sayfasına bağlanır (sayfa başına en fazla 3).
const MAX_TOOLS = 3;
const TOOL_RES = TOOLS.map((t) => ({ t, re: new RegExp(t.match ? t.match.source : t.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), t.match?.flags?.replace('g', '') || '') }));
export function linkTools(html, base = '') {
  const start = html.indexOf('<div class="prose">');
  if (start === -1) return { html, n: 0 };
  const end = html.indexOf('</div>', start);
  const parts = html.slice(start, end).split(/(<[^>]+>)/);
  const used = new Set();
  let skip = 0, n = 0;
  for (let k = 0; k < parts.length && n < MAX_TOOLS; k++) {
    const p = parts[k];
    if (p.startsWith('<')) {
      if (/^<(a|h[1-6]|code|pre)\b/i.test(p)) skip++;
      else if (/^<\/(a|h[1-6]|code|pre)>/i.test(p)) skip = Math.max(0, skip - 1);
      continue;
    }
    if (skip || !p.trim()) continue;
    const hits = TOOL_RES.filter(({ t }) => !used.has(t.slug)).map(({ t, re }) => {
      const m = re.exec(p);
      if (!m || isLetter(p[m.index - 1]) || isLetter(p[m.index + m[0].length])) return null;
      return { t, at: [m.index, m.index + m[0].length] };
    }).filter(Boolean).sort((a, b) => a.at[0] - b.at[0] || b.at[1] - a.at[1]);
    let out = '', cursor = 0;
    for (const { t, at } of hits) {
      if (n >= MAX_TOOLS || at[0] < cursor) continue;
      out += p.slice(cursor, at[0]) + `<a class="tool-link" href="${base}/arac/${t.slug}/">${p.slice(at[0], at[1])}</a>`;
      cursor = at[1]; used.add(t.slug); n++;
    }
    parts[k] = out + p.slice(cursor);
  }
  return { html: html.slice(0, start) + parts.join('') + html.slice(end), n };
}

export default function glossaryLinks() {
  return {
    name: 'glossary-links',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
        let pages = 0, links = 0, toolLinks = 0;
        // Haberler ve rehberler
        const files = ['haber', 'rehber'].flatMap((d) => {
          const hdir = path.join(root, d);
          return fs.existsSync(hdir) ? fs.readdirSync(hdir).map((slug) => path.join(hdir, slug, 'index.html')) : [];
        });
        for (const f of files) {
          if (!fs.existsSync(f)) continue;
          const r = linkGlossary(fs.readFileSync(f, 'utf8'), base);
          const t = linkTools(r.html, base);
          if (r.n || t.n) { fs.writeFileSync(f, t.html); pages++; links += r.n; toolLinks += t.n; }
        }
        logger.info(`sözlük bağlantıları: ${links}, araç bağlantıları: ${toolLinks} (${pages} sayfa)`);
      },
    },
  };
}
