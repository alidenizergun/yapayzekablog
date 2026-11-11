// Tek kaynak: kategoriler, görseller ve site ayarları.
// Haber üretim betiği (scripts/generate-news.mjs) da bu dosyayı kullanır.

export const SITE = {
  name: 'nöron',
  title: 'Nöron Yapay Zeka Haberleri',
  description: 'Yapay zeka dünyasındaki gelişmeleri Türkçe, kaynaklı ve hızlı aktaran haber sitesi.',
  locale: 'tr-TR',
  timeZone: 'Europe/Istanbul',
  updatesPerDay: 6,
};

export const CATEGORIES = [
  { slug: 'modeller', name: 'Modeller', images: ['modeller', 'gemini'] },
  { slug: 'ajanlar', name: 'Ajanlar', images: ['kod', 'odul'] },
  { slug: 'araclar', name: 'Araçlar', images: ['kod'] },
  { slug: 'girisim-yatirim', name: 'Girişim & Yatırım', images: ['girisim', 'altyapi'] },
  { slug: 'regulasyon', name: 'Regülasyon', images: ['regulasyon'] },
  { slug: 'arastirma', name: 'Araştırma', images: ['benchmark'] },
  { slug: 'platformlar', name: 'Platformlar', images: ['rss', 'arama'] },
  { slug: 'pazarlama', name: 'Pazarlama', images: ['pazarlama', 'arama'] },
  { slug: 'donanim', name: 'Donanım', images: ['gozluk', 'altyapi'] },
  { slug: 'guvenlik', name: 'Güvenlik', images: ['guvenlik'] },
  { slug: 'turkiye', name: 'Türkiye', images: ['girisim'] },
];

// Menüde görünecek kategoriler (sırayla)
export const NAV = ['modeller', 'ajanlar', 'araclar', 'girisim-yatirim', 'regulasyon', 'arastirma', 'turkiye', 'pazarlama'];

export const IMAGES = {
  arama: 'Sohbet balonu ve büyüteç illüstrasyonu',
  gemini: 'Yıldız takımyıldızı illüstrasyonu',
  benchmark: 'Çubuk grafik illüstrasyonu',
  kod: 'Kod editörü ve imleç illüstrasyonu',
  rss: 'Üstü çizili RSS simgesi illüstrasyonu',
  modeller: 'Yapay sinir ağı illüstrasyonu',
  gozluk: 'Akıllı gözlük illüstrasyonu',
  guvenlik: 'Kilitli kalkan illüstrasyonu',
  regulasyon: 'Adalet terazisi illüstrasyonu',
  pazarlama: 'Megafon illüstrasyonu',
  altyapi: 'Sunucu kabinleri illüstrasyonu',
  girisim: 'Roket illüstrasyonu',
  odul: 'Kupa illüstrasyonu',
};

export const categoryBySlug = (slug) => CATEGORIES.find((c) => c.slug === slug);
