// Tek kaynak: kategoriler, görseller ve site ayarları.
// Haber üretim betiği (scripts/generate-news.mjs) da bu dosyayı kullanır.

export const SITE = {
  name: 'YZ Gündemi',
  domain: 'yzgundemi.com',
  title: 'YZ Gündemi · Türkçe Yapay Zeka Haberleri',
  description: 'Yapay zeka dünyasındaki gelişmeleri Türkçe, kaynaklı ve hızlı aktaran haber sitesi.',
  locale: 'tr-TR',
  timeZone: 'Europe/Istanbul',
  updatesPerDay: 1,
  // Sosyal hesaplar: kullanıcı adı yazılırsa alt bilgide "Takip et" altında görünür (boşsa gizli)
  social: { x: '', instagram: '', linkedin: '' },
  // Google Analytics 4 ölçüm kimliği. Yalnızca ziyaretçi çerez bandında izin verirse yüklenir (KVKK). Boş bırakılırsa kapalı.
  analytics: { ga4: 'G-N6Q0G7X4GB' },
};

export const CATEGORIES = [
  { slug: 'modeller', name: 'Modeller', images: ['modeller', 'gemini'], intro: 'Yapay zeka model haberleri: ChatGPT, Claude, Gemini, DeepSeek ve açık ağırlıklı modellerin yeni sürümleri, fiyat değişiklikleri ve test sonuçları.', links: [{ href: '/modeller-karsilastirma/', label: 'Model karşılaştırma tablosu' }, { href: '/rehber/hangi-yapay-zeka-modelini-secmeliyim/', label: 'Hangi modeli seçmeli?' }] },
  { slug: 'ajanlar', name: 'Ajanlar', images: ['kod', 'odul'], intro: "Yapay zeka ajanları haberleri: kullanıcı adına web'de gezinen, alışveriş yapan, kod yazan ve iş akışlarını yürüten otonom sistemlerdeki gelişmeler.", links: [{ href: '/sozluk/yapay-zeka-ajani/', label: 'Yapay zeka ajanı nedir?' }] },
  { slug: 'araclar', name: 'Araçlar', images: ['kod'], intro: 'Yapay zeka araçları haberleri: sohbet asistanları, kodlama araçları, görsel ve video üreticileri ve günlük işlerde kullanılan yeni özellikler.', links: [{ href: '/rehber/', label: 'Kullanım rehberleri' }] },
  { slug: 'girisim-yatirim', name: 'Girişim & Yatırım', images: ['girisim', 'altyapi'], intro: 'Yapay zeka girişimleri ve yatırımları: yatırım turları, satın almalar, halka arzlar ve büyük anlaşmalar.', links: [{ href: '/yatirimlar/', label: 'Yatırım takipçisi' }] },
  { slug: 'regulasyon', name: 'Regülasyon', images: ['regulasyon'], intro: "Yapay zeka regülasyonu haberleri: AB Yapay Zeka Yasası, ABD ve Türkiye'deki düzenlemeler, telif davaları ve veri koruma kararları.", links: [{ href: '/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/', label: 'Kişisel verileri koruma rehberi' }] },
  { slug: 'arastirma', name: 'Araştırma', images: ['benchmark'], intro: 'Yapay zeka araştırmaları: yeni makaleler, benchmark sonuçları, bilimsel buluşlar ve laboratuvarlardan gelen bulgular.', links: [{ href: '/sozluk/benchmark/', label: 'Benchmark nedir?' }] },
  { slug: 'platformlar', name: 'Platformlar', images: ['rss', 'arama'], intro: 'Platform haberleri: arama motorları, sosyal medya ve büyük teknoloji platformlarının yapay zeka hamleleri.', links: [] },
  { slug: 'pazarlama', name: 'Pazarlama', images: ['pazarlama', 'arama'], intro: 'Yapay zeka ve pazarlama: reklam, içerik üretimi, arama motoru görünürlüğü ve markaların yapay zeka kullanımındaki gelişmeler.', links: [{ href: '/rehber/iyi-istem-nasil-yazilir/', label: 'İyi istem nasıl yazılır?' }] },
  { slug: 'donanim', name: 'Donanım', images: ['gozluk', 'altyapi'], intro: "Yapay zeka donanımı haberleri: GPU'lar, yapay zeka çipleri, bellek, veri merkezleri ve yapay zeka destekli cihazlar.", links: [{ href: '/sozluk/gpu/', label: 'GPU nedir?' }, { href: '/sozluk/veri-merkezi/', label: 'Veri merkezi nedir?' }] },
  { slug: 'guvenlik', name: 'Güvenlik', images: ['guvenlik'], intro: 'Yapay zeka güvenliği haberleri: siber saldırılarda yapay zeka kullanımı, model güvenlik açıkları, kırmızı takım çalışmaları ve güvenlik araştırmaları.', links: [{ href: '/sozluk/kirmizi-takim/', label: 'Kırmızı takım nedir?' }] },
  { slug: 'turkiye', name: 'Türkiye', images: ['girisim'], intro: "Türkiye'de yapay zeka: yerli girişimler, kamu politikaları, yatırımlar, etkinlikler ve Türkçe yapay zeka çalışmaları.", links: [{ href: '/turkiye-yapay-zeka/', label: 'Türkiye masası' }, { href: '/yerli-yapay-zeka/', label: 'Yerli modeller' }, { href: '/etkinlikler/', label: 'Etkinlik takvimi' }] },
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
