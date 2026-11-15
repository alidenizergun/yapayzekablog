// Derleme sonrası site haritası düzeltmeleri:
// - "noindex" sayfaları (az haberli etiketler, boş kategoriler, hata bildir, 404) site haritasından çıkarılır
// - Haber sayfalarına <lastmod> eklenir (article:modified_time meta etiketinden)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default function seoPostBuild() {
  return {
    name: 'seo-postbuild',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const files = fs.readdirSync(root).filter((f) => /^sitemap-\d+\.xml$/.test(f));
        let removed = 0, dated = 0;
        for (const f of files) {
          const file = path.join(root, f);
          const xml = fs.readFileSync(file, 'utf8');
          const out = xml.replace(/<url><loc>(.*?)<\/loc>(.*?)<\/url>/g, (m, loc) => {
            const p = new URL(loc).pathname;
            const html = path.join(root, decodeURIComponent(p), 'index.html');
            if (!fs.existsSync(html)) return m;
            const page = fs.readFileSync(html, 'utf8');
            if (/<meta name="robots" content="noindex/.test(page)) { removed++; return ''; }
            const mod = page.match(/<meta property="article:modified_time" content="([^"]+)"/);
            if (mod) { dated++; return `<url><loc>${loc}</loc><lastmod>${mod[1]}</lastmod></url>`; }
            return m;
          });
          fs.writeFileSync(file, out);
        }
        logger.info(`site haritası: ${removed} noindex sayfa çıkarıldı, ${dated} habere lastmod eklendi`);
      },
    },
  };
}
