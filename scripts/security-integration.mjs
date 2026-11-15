// Derleme sonrası güvenlik başlıkları (GitHub Pages sunucu başlığı ayarlatmadığı için <meta> ile):
// - Content-Security-Policy: yalnızca kendi dosyalarımız + sayfadaki satır içi betiklerin SHA-256 özetleri çalışır.
//   Haber metnine bir şekilde betik sızsa bile tarayıcı çalıştırmaz.
// - Görseller: kendi sunucumuz + images.unsplash.com. Formlar: kendi sitemiz + tanımlıysa bülten/hata formu servisi.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { SITE } from '../src/lib/site.js';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}
const origin = (u) => { try { return u ? new URL(u).origin : ''; } catch { return ''; } };

export default function securityHeaders() {
  return {
    name: 'security-headers',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const forms = [process.env.PUBLIC_NEWSLETTER_ACTION, process.env.PUBLIC_REPORT_FORM_ACTION].map(origin).filter(Boolean);
        // Google Analytics (yalnızca izin verilince yüklenir) için gereken adresler
        const ga = SITE.analytics?.ga4 ? {
          script: 'https://www.googletagmanager.com',
          connect: 'https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com',
          img: 'https://*.google-analytics.com https://www.googletagmanager.com',
        } : { script: '', connect: '', img: '' };
        let pages = 0;
        for (const file of walk(root)) {
          let html = fs.readFileSync(file, 'utf8');
          const hashes = new Set();
          // Çalıştırılabilir satır içi betikler (ld+json veri bloğu hariç)
          html.replace(/<script(?![^>]*\bsrc=)(?![^>]*type="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/gi, (m, code) => {
            hashes.add(`'sha256-${crypto.createHash('sha256').update(code, 'utf8').digest('base64')}'`);
            return m;
          });
          const csp = [
            "default-src 'self'",
            `script-src 'self' ${ga.script} ${[...hashes].join(' ')}`.replace(/\s+/g, ' ').trim(),
            "style-src 'self' 'unsafe-inline'",
            `img-src 'self' https://images.unsplash.com data: ${ga.img}`.trim(),
            "font-src 'self'",
            `connect-src 'self' ${ga.connect} ${forms.join(' ')}`.replace(/\s+/g, ' ').trim(),
            `form-action 'self' https://github.com ${forms.join(' ')}`.trim(),
            "object-src 'none'",
            "base-uri 'self'",
            "frame-src 'none'",
            'upgrade-insecure-requests',
          ].join('; ');
          html = html.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/i, '');
          html = html.replace(/(<meta charset="utf-8">)/i, `$1<meta http-equiv="Content-Security-Policy" content="${csp}">`);
          fs.writeFileSync(file, html);
          pages++;
        }
        logger.info(`CSP eklendi: ${pages} sayfa`);
      },
    },
  };
}
