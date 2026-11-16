// Derleme sonrası iki dil düzeltmeleri:
// 1) İngilizce sayfalarda (dist/en/) kalan Türkçe iç bağlantıları İngilizce karşılıklarına çevirir
//    (sayfalar Türkçe yol üretir; karşılığı olmayan sayfalara giden bağlantılar Türkçe kalır).
//    hreflang taşıyan bağlantılara (dil değiştirici, alternatif) dokunulmaz. JSON-LD içindeki site adresleri de çevrilir.
// 2) Site haritasına her sayfanın dil karşılığını (xhtml:link hreflang) ekler.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { toEn, toTr } from '../src/i18n/paths.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC_EN = [[/fiyatlandırma/g, 'pricing'], [/fiyat sayfası arşivi/g, 'pricing page archive'], [/fiyat sayfası/g, 'pricing page'], [/model kartı/g, 'model card'],
  [/ürün sayfası/g, 'product page'], [/proje sayfası/g, 'project page'], [/resmi sitesi/g, 'official site'], [/resmi duyurusu/g, 'official announcement'], [/basın bülteni/g, 'press release'], [/duyurusu/g, 'announcement']];
const trSlugOf = (id) => id.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
function readMaps() {
  const read = (dir) => {
    const d = path.join(ROOT, 'src/content', dir);
    if (!fs.existsSync(d)) return [];
    return fs.readdirSync(d).filter((f) => f.endsWith('.md')).map((f) => {
      const fm = fs.readFileSync(path.join(d, f), 'utf8').split('\n---')[0];
      const g = (k) => { const m = fm.match(new RegExp(`^${k}:\\s*(.*)$`, 'm')); if (!m) return ''; try { return JSON.parse(m[1]); } catch { return m[1].trim(); } };
      return { ref: g('ref'), slug: g('slug') };
    }).filter((x) => x.ref && x.slug);
  };
  return {
    news: new Map(read('haberler-en').map((x) => [trSlugOf(x.ref), x.slug])),
    guides: new Map(read('rehberler-en').map((x) => [x.ref, x.slug])),
    digests: new Map(read('ozetler-en').map((x) => [x.ref, x.slug])),
  };
}
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.html') ? [path.join(d, e.name)] : []));
const SKIP = /^\/(?:_astro|img|og|pagefind|fonts|favicon|icon-|apple-touch|logo\.png|site\.webmanifest|sitemap|news-sitemap|llms\.txt|robots\.txt|en\/|en$)/;

export default function i18nLinks({ site, base = '/' } = {}) {
  const BASE = base.replace(/\/$/, '');
  const origin = new URL(site).origin;
  return {
    name: 'i18n-links',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const m = readMaps();
        const enDir = path.join(root, 'en');
        let changed = 0;
        const map = (p) => {
          let q = BASE && p.startsWith(BASE) ? p.slice(BASE.length) || '/' : p;
          if (SKIP.test(q)) return null;
          const [pathPart, query = ''] = q.split('?');
          const en = toEn(pathPart, m);
          return en ? `${BASE}${en}${query ? `?${query}` : ''}` : null;
        };
        if (fs.existsSync(enDir)) {
          for (const f of walk(enDir)) {
            let html = fs.readFileSync(f, 'utf8');
            const before = html;
            html = html.replace(/<(a|link|form)\b[^>]*>/g, (tag) => {
              if (/\shreflang=/.test(tag) || /rel="(?:canonical|alternate|icon|manifest|apple-touch-icon|sitemap|preconnect)"/.test(tag) && !/type="application\/rss/.test(tag)) return tag;
              return tag.replace(/(\s(?:href|action)=")(\/[^"]*)"/, (mm, pre, href) => { const n = map(href); if (n) { changed++; return `${pre}${n}"`; } return mm; });
            });
            html = html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g, (mm, a, json, c) =>
              a + json.replace(new RegExp(`${origin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(/[^"\\s]*)`, 'g'), (u, p) => { const n = map(p); return n ? origin + n : u; }) + c);
            // Kaynak etiketlerindeki kalıp Türkçe ifadeler (ör. "Claude fiyatlandırma") bağlantı metninde çevrilir
            html = html.replace(/(<a [^>]*>)([^<]*)(<\/a>)/g, (mm, a, t, c) => a + SRC_EN.reduce((x, [re, en]) => x.replace(re, en), t) + c);
            if (html !== before) fs.writeFileSync(f, html);
          }
        }
        // Site haritası: dil karşılıkları
        let alts = 0;
        for (const f of fs.readdirSync(root).filter((x) => /^sitemap-\d+\.xml$/.test(x))) {
          const file = path.join(root, f);
          let xml = fs.readFileSync(file, 'utf8');
          const locs = new Set([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((x) => new URL(x[1]).pathname));
          xml = xml.replace(/<url><loc>(.*?)<\/loc>/g, (mm, loc) => {
            const p = new URL(loc).pathname;
            const rel = BASE && p.startsWith(BASE) ? p.slice(BASE.length) || '/' : p;
            const isEn = rel.startsWith('/en/') || rel === '/en';
            const tr = isEn ? toTr(rel, m) : rel;
            const en = tr ? toEn(tr, m) : null;
            if (!tr || !en || !locs.has(`${BASE}${tr}`) || !locs.has(`${BASE}${en}`)) return mm;
            alts++;
            return `${mm}<xhtml:link rel="alternate" hreflang="tr" href="${origin}${BASE}${tr}"/><xhtml:link rel="alternate" hreflang="en" href="${origin}${BASE}${en}"/><xhtml:link rel="alternate" hreflang="x-default" href="${origin}${BASE}${tr}"/>`;
          });
          if (!xml.includes('xmlns:xhtml')) xml = xml.replace('<urlset ', '<urlset xmlns:xhtml="http://www.w3.org/1999/xhtml" ');
          fs.writeFileSync(file, xml);
        }
        logger.info(`İngilizce sayfalarda ${changed} bağlantı çevrildi; site haritasına ${alts} dil karşılığı eklendi`);
      },
    },
  };
}
