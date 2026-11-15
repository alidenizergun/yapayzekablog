/**
 * Derleme sonunda bütün HTML sayfalarını tarar ve siteden dışarıya giden her linke
 * rel="nofollow" ekler (yeni sekmede açılanlara ayrıca "noopener").
 * Şablonlardaki, haber metinlerindeki (Markdown) ve ileride eklenecek bütün linkleri kapsar.
 * Sitenin kendi adresine giden linklere dokunmaz.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

export function addNofollow(html, siteHost) {
  let changed = 0;
  const out = html.replace(/<a\b[^>]*>/gi, (tag) => {
    const href = tag.match(/\shref\s*=\s*(?:"([^"]*)"|'([^']*)')/i);
    if (!href) return tag;
    const url = (href[1] ?? href[2] ?? '').trim();
    if (!/^https?:\/\//i.test(url)) return tag; // göreli, #, mailto vb. iç linkler
    let host;
    try { host = new URL(url.replace(/&amp;/g, '&')).hostname.replace(/^www\./, ''); } catch { return tag; }
    if (host === siteHost) return tag;
    const rel = tag.match(/\srel\s*=\s*(?:"([^"]*)"|'([^']*)')/i);
    const vals = new Set((rel ? rel[1] ?? rel[2] ?? '' : '').split(/\s+/).filter(Boolean));
    const before = vals.size;
    vals.add('nofollow');
    if (/\starget\s*=\s*["']?_blank/i.test(tag)) vals.add('noopener');
    if (vals.size === before) return tag;
    changed++;
    const relAttr = ` rel="${[...vals].join(' ')}"`;
    return rel ? tag.replace(rel[0], relAttr) : tag.replace(/^<a\b/i, `<a${relAttr}`);
  });
  return { html: out, changed };
}

export default function nofollowExternalLinks() {
  let siteHost = '';
  return {
    name: 'nofollow-external-links',
    hooks: {
      'astro:config:done': ({ config }) => {
        try { siteHost = new URL(config.site).hostname.replace(/^www\./, ''); } catch {}
      },
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let files = 0, links = 0;
        for (const f of walk(root)) {
          const src = fs.readFileSync(f, 'utf8');
          const { html, changed } = addNofollow(src, siteHost);
          if (changed) { fs.writeFileSync(f, html); files++; links += changed; }
        }
        logger.info(`dış linklere nofollow eklendi: ${links} link, ${files} sayfa`);
      },
    },
  };
}
