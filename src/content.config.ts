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
    keyPoints: z.array(z.string().max(200)).max(3).optional(), // "Kısaca" kutusu
    // Gelişen hikâye (src/lib/stories.js): bu haber süren bir konunun devamıysa hikâyenin slug'ı
    story: z.string().optional(),
    // Yatırım/satın alma takipçisi (/yatirimlar/): haber bir anlaşmayı duyuruyorsa
    deal: z.object({
      type: z.enum(['Yatırım turu', 'Satın alma', 'Halka arz', 'Anlaşma', 'Tesis yatırımı']),
      company: z.string(),                       // yatırımı alan / satın alan / halka arz olan şirket
      counterparty: z.string().optional(),        // satın alınan şirket, müşteri vb.
      amount: z.string().optional(),              // kaynaktaki yazımıyla tutar
      amountUsdM: z.number().optional(),          // sıralama için milyon dolar karşılığı (kaynakta varsa)
      round: z.string().optional(),               // tur adı (Seri B vb.)
      investors: z.array(z.string()).optional(),
      country: z.string().optional(),
    }).optional(),
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

// Haftalık özet: geçen haftanın öne çıkan haberleri (scripts/weekly-digest.mjs her pazartesi yazar)
const ozetler = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ozetler' }),
  schema: z.object({
    title: z.string().min(10).max(140),
    spot: z.string().min(40).max(320),
    weekStart: z.coerce.date(),
    weekEnd: z.coerce.date(),
    date: z.coerce.date(),
    items: z.array(z.object({ slug: z.string(), summary: z.string().min(20).max(400) })).min(3).max(10),
    draft: z.boolean().default(false),
  }),
});

// Rehberler: her zaman okunan "nasıl yapılır" içerikleri (/rehber/)
const rehberler = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rehberler' }),
  schema: z.object({
    title: z.string().min(10).max(140),
    description: z.string().min(60).max(320),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    summary: z.array(z.string()).min(2).max(6),   // "Kısaca" kutusu
    level: z.enum(['Başlangıç', 'Orta', 'İleri']).default('Başlangıç'),
    terms: z.array(z.string()).default([]),       // ilgili sözlük terimleri (slug)
    draft: z.boolean().default(false),
  }),
});

export const collections = { haberler, ozetler, rehberler };
