import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import nofollowExternalLinks from './scripts/nofollow-integration.mjs';
import seoPostBuild from './scripts/seo-integration.mjs';
import securityHeaders from './scripts/security-integration.mjs';
import contentGuard from './scripts/content-guard.mjs';

// Sitenin kendi domaini; repo değişkeni SITE_URL verilirse o kullanılır.
const DEFAULT_SITE = 'https://yzgundemi.com';
const site = process.env.SITE_URL || DEFAULT_SITE;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/hata-bildir') }), contentGuard(), nofollowExternalLinks(), seoPostBuild(), securityHeaders()],
  build: { format: 'directory' },
});
