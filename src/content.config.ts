import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES, IMAGES } from './lib/site.js';
import { BRAND_SLUGS } from './lib/brands.js';

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
        url: z.string().url(),
        alt: z.string().optional(),
        author: z.string(),
        authorUrl: z.string().url(),
        link: z.string().url(),
      })
      .optional(),
    whyItMatters: z.string().optional(),
    sources: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
          publisher: z.string().optional(),
        }),
      )
      .min(1, 'Her haberde en az bir kaynak olmalı'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    author: z.string().default('YZ Gündemi Editör Masası'),
    generated: z.boolean().default(true),
  }),
});

export const collections = { haberler };
