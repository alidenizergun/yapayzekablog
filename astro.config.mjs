import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import nofollowExternalLinks from './scripts/nofollow-integration.mjs';

// Site adresi:
// - Kendi domaininiz varsa repo değişkeni olarak SITE_URL verin (örn. https://alanadiniz.com).
// - SITE_URL verilmezse GitHub Pages adresi otomatik kullanılır:
//   https://KULLANICI.github.io/REPO-ADI
const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');
const site = process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'https://example.com');
const base = process.env.BASE_PATH || (process.env.SITE_URL || !repo ? '/' : `/${repo}`);

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap(), nofollowExternalLinks()],
  build: { format: 'directory' },
});
