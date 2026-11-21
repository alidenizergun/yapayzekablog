import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import nofollowExternalLinks from './scripts/nofollow-integration.mjs';
import seoPostBuild from './scripts/seo-integration.mjs';
import securityHeaders from './scripts/security-integration.mjs';
import contentGuard from './scripts/content-guard.mjs';
import glossaryLinks from './scripts/glossary-integration.mjs';
import i18nLinks from './scripts/i18n-integration.mjs';

// Sitenin kendi domaini; repo değişkeni SITE_URL verilirse o kullanılır.
const DEFAULT_SITE = 'https://www.yzgundemi.com';
// Asıl adres www'lu: yzgundemi.com → www.yzgundemi.com yönlendirir. Değişken eski (www'suz) adresi verse bile www kullanılır.
const site = (process.env.SITE_URL || DEFAULT_SITE).replace('://yzgundemi.com', '://www.yzgundemi.com');
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/hata-bildir') }), contentGuard(), glossaryLinks(), nofollowExternalLinks(), seoPostBuild(), i18nLinks({ site, base }), securityHeaders()],
  build: { format: 'directory', inlineStylesheets: 'always' }, // CSS sayfaya gömülür (oluşturmayı engelleyen istek yok); CSP'de <style> özetle izinli
});
