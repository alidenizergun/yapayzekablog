import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL: sitenin yayınlanacağı adres, örn. https://noron.com.tr
// GitHub Actions'ta repo değişkeni (Settings › Variables) olarak tanımlanır.
const site = process.env.SITE_URL || 'https://example.com';

export default defineConfig({
  site,
  // Özel domain kullanmıyorsanız ve site https://kullanici.github.io/repo-adi altında
  // yayınlanacaksa BASE_PATH=/repo-adi verin.
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
