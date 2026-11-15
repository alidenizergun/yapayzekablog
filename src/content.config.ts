import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES, IMAGES } from './lib/site.js';
import { BRAND_SLUGS } from './lib/brands.js';

// Güvenlik: yalnızca http(s) adresleri (javascript:, data: vb. reddedilir); fotoğraflar yalnızca Unsplash'ten
const httpUrl = z.string().url().refine((u) => /^https?:\/\//i.test(u), 'Yalnızca http(s) adresi');
const unsplashUrl = (hosts: RegExp) => z.string().url().refine((u) => { try { return hosts.test(new URL(u).hostname); } catch { return false; } }, 'Yalnızca Unsplash adresi');

const categorySlugs = CATEGORIES.map((c) => c.slug) as [string, ...string[]];
const imageKeys = Object.keys(IMAGES) as [string, ...string[]];

// Her haberde en az bir kaynak ZORUNLU: kaynaksız haber derlemeyi bozar ve yayınlanmaz.
const haberler = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/haberler' }),
  schema: z.object({
    title: z.string().min(10).max(140),
    spot: z.string().min(40).max(320),
    category: z.enum(categorySlugs),
    tags: z.array(z.string()).max(6).default([]),
    date: z.coerce.date(),
    image: z.enum(imageKeys),
    // Haberin ana konusu olan şirket: logo kartı gösterilir (src/lib/brands.js)
    brand: z.enum(BRAND_SLUGS as [string, ...string[]]).optional(),
    // Unsplash'te fotoğraf aramak için İngilizce anahtar kelimeler
    imageQuery: z.string().optional(),
    // Unsplash fotoğrafı (haber hattı doldurur)
    photo: z
      .object({
        id: z.string(),
        url: unsplashUrl(/^images\.unsplash\.com$/),
        alt: z.string().optional(),
        author: z.string(),
        authorUrl: unsplashUrl(/^(www\.)?unsplash\.com$/),
        link: unsplashUrl(/^(www\.)?unsplash\.com$/),
      })
      .optional(),
    whyItMatters: z.string().optional(),
    // "Türkiye açısından" notu: yalnızca kaynaklarda somut bir Türkiye bağlantısı varsa (boşsa gösterilmez)
    turkeyAngle: z.string().optional(),
    sources: z
      .array(
        z.object({
          title: z.string(),
          url: httpUrl,
          publisher: z.string().optional(),
        }),
      )
      .min(1, 'Her haberde en az bir kaynak olmalı'),
    featured: z.boolean().default(false),
    // Okunma potansiyeli (1-100): ana sayfa manşeti ve X paylaşımı buna göre seçilir
    popularity: z.number().int().min(1).max(100).optional(),
    draft: z.boolean().default(false),
    author: z.string().default('YZ Gündemi Editör Masası'),
    generated: z.boolean().default(true),
  }),
});

export const collections = { haberler };
