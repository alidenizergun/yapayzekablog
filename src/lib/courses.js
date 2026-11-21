// Yapay zeka eğitimleri (/yapay-zeka-egitimleri/). Kurallar araçlar rehberiyle aynı:
// - Fiyat ve erişim bilgisi yalnızca kaynağıyla ve kontrol tarihiyle yazılır; emin olunmayan bilgi yazılmaz.
// - price: 'ucretsiz' (tamamı ücretsiz) · 'kismen' (ücretsiz içerik + ücretli seçenek) · 'ucretli'
// - lang: eğitimin dili ('tr' | 'en'); cert: tamamlayınca belge/rozet veriliyor mu (true | false | null = doğrulanmadı)
// - level: 'Başlangıç' | 'Orta' | 'İleri'. Sıralama editoryaldir; ödeme karşılığı yer verilmez.

export const COURSES_CHECKED = '2026-11-21';

const src = (label, url, checked = COURSES_CHECKED) => ({ label, url, checked });

export const COURSE_LEVELS = ['Başlangıç', 'Orta', 'İleri'];

export const COURSES = [
  // ------------------------------------------------------------ ücretsiz · Türkçe
  { id: 'btk-akademi', name: 'BTK Akademi yapay zeka eğitimleri', provider: 'Bilgi Teknolojileri ve İletişim Kurumu', url: 'https://www.btkakademi.gov.tr',
    price: 'ucretsiz', lang: 'tr', level: 'Başlangıç', cert: true, format: 'Çevrim içi, kendi hızınızda',
    desc: "Devletin ücretsiz eğitim platformu. Makine öğrenmesinin temellerinden büyük dil modelleri, bilgisayarlı görü ve yapay zeka ajanı geliştirmeye; Gemini, Claude ve Perplexity gibi araçların kullanımına kadar çok sayıda Türkçe yapay zeka eğitimi sunar.",
    who: 'Türkçe ve sertifikalı bir başlangıç arayan herkes', source: src('Mynet Finans (Bakan Uraloğlu açıklaması)', 'https://finans.mynet.com/haber/detay/ekonomi/btk-akademi-den-18-yeni-yapay-zeka-egitimi-bakan-uraloglu-tamamen-ucretsiz/529587/') },
  { id: 'herkes-icin-yapay-zeka', name: 'Herkes için Yapay Zeka', provider: 'Google Türkiye ve Sanayi ve Teknoloji Bakanlığı', url: 'https://grow.google/intl/tr/ai-for-all/',
    price: 'ucretsiz', lang: 'tr', level: 'Başlangıç', cert: null, format: 'Video dersler ve öğrenme yolları',
    desc: "Öğrenciler, küçük işletmeler, geliştiriciler ve yöneticiler için ayrı ayrı hazırlanmış Türkçe yapay zeka okuryazarlığı içerikleri. YouTube'daki video serileri, rehberli öğrenme yolları ve 11-14 yaş için oyunlaştırılmış görevler içerir.",
    who: 'Yapay zekaya sıfırdan başlayanlar, öğretmenler ve işletme sahipleri', source: src('Grow with Google Türkiye', 'https://grow.google/intl/tr/ai-for-all/') },
  { id: 'yapay-zeka-teknoloji-akademisi', name: 'Yapay Zeka ve Teknoloji Akademisi', provider: 'Google Türkiye, T3 Girişim Merkezi ve Girişimcilik Vakfı', url: 'https://yapayzekaveteknolojiakademisi.com',
    price: 'ucretsiz', lang: 'tr', level: 'Orta', cert: true, format: 'Başvurulu, çevrim içi program',
    desc: "18-29 yaş arası üniversite öğrencileri ve mezunları için yapay zeka uygulamaları, veri bilimi ve oyun geliştirme programı. Teknik eğitimlerin yanında girişimcilik eğitimleri, hackathonlar, mentorluk ve Coursera sertifikaları sunar.",
    who: '18-29 yaş arası üniversite öğrencileri ve yeni mezunlar', source: src('Grow with Google Türkiye', 'https://grow.google/intl/tr/google-ai-tech-academy/') },
  { id: 'gelecegi-yazanlar', name: 'Turkcell Geleceği Yazanlar', provider: 'Turkcell', url: 'https://gelecegiyazanlar.turkcell.com.tr',
    price: 'ucretsiz', lang: 'tr', level: 'Orta', cert: null, format: 'Çevrim içi eğitimler ve başvurulu bootcamp',
    desc: "Turkcell'in ücretsiz teknoloji eğitim platformu. Yapay zeka ve veri bilimi bootcamp'i Python, makine öğrenmesi ve üretken yapay zekayı 10 haftada işliyor; başvurular yılda bir kez alınıyor.",
    who: 'Yapay zeka alanında kariyer hedefleyen öğrenciler ve mezunlar', source: src('Bilim Şenliği (Turkcell Bootcamp 2026 duyurusu)', 'https://www.bilimsenligi.com/turkcell-bootcamp-2026-basvuru-yapay-zeka-ve-oyun.html') },

  // ------------------------------------------------------------ ücretsiz · İngilizce
  { id: 'claude-academy', name: 'Claude Academy', provider: 'Anthropic', url: 'https://academy.claude.com',
    price: 'ucretsiz', lang: 'en', level: 'Başlangıç', cert: true, format: 'Çevrim içi, kendi hızınızda',
    desc: "Anthropic'in 28 ücretsiz kursu: Claude 101 ve yapay zeka okuryazarlığından (AI Fluency) Claude Code, Model Context Protocol ve Claude API ile uygulama geliştirmeye kadar. Kursu bitirince doğrulanabilir rozet verilir.",
    who: 'Claude kullanıcıları ve Claude ile geliştirme yapmak isteyenler', source: src('Sand Labs (Claude Academy rehberi)', 'https://sandlabs.com.au/blog/claude-academy', '2026-10-31') },
  { id: 'openai-academy', name: 'OpenAI Academy', provider: 'OpenAI', url: 'https://academy.openai.com',
    price: 'ucretsiz', lang: 'en', level: 'Başlangıç', cert: true, format: 'Çevrim içi, kendi hızınızda',
    desc: "OpenAI'ın ücretsiz kursları: işte yapay zeka kullanımı (AI Foundations), ajanlar ve iş akışları, Codex ile kodlama, RAG ve yapay zeka uygulaması geliştirme, yöneticiler ve eğitimciler için ayrı programlar. Başlamak için ChatGPT hesabı yeterli.",
    who: 'ChatGPT kullanıcıları, yöneticiler, eğitimciler ve geliştiriciler', source: src('OpenAI yardım merkezi', 'https://help.openai.com/en/articles/20001270-openai-academy-courses') },
  { id: 'elements-of-ai', name: 'Elements of AI', provider: 'Helsinki Üniversitesi ve MinnaLearn', url: 'https://www.elementsofai.com',
    price: 'ucretsiz', lang: 'en', level: 'Başlangıç', cert: null, format: 'Çevrim içi, kendi hızınızda',
    desc: "Yapay zekanın ne olduğunu, neyi yapıp neyi yapamayacağını matematik ya da kodlama bilgisi gerektirmeden anlatan, dünyada en çok bilinen giriş kurslarından biri. Birçok Avrupa dilinde sunuluyor.",
    who: 'Teknik geçmişi olmayan, temeli sağlam kurmak isteyenler', source: src('Wikipedia: Elements of AI', 'https://en.wikipedia.org/wiki/Elements_of_AI') },
  { id: 'microsoft-learn', name: 'Microsoft Learn yapay zeka eğitimleri', provider: 'Microsoft', url: 'https://learn.microsoft.com/training/browse/?terms=ai',
    price: 'ucretsiz', lang: 'en', level: 'Başlangıç', cert: null, format: 'Çevrim içi modüller',
    desc: "Copilot kullanımı, üretken yapay zekanın temelleri ve Azure üzerinde yapay zeka çözümleri geliştirme için ücretsiz modüller ve öğrenme yolları. Ücretli Microsoft sertifika sınavlarına hazırlık içerikleri de buradadır.",
    who: 'Microsoft 365 ve Azure kullanan çalışanlar ve geliştiriciler', source: src('Microsoft Learn', 'https://learn.microsoft.com/training/') },
  { id: 'deeplearning-ai', name: 'DeepLearning.AI kısa kurslar', provider: 'DeepLearning.AI (Andrew Ng)', url: 'https://www.deeplearning.ai/courses/',
    price: 'kismen', lang: 'en', level: 'Orta', cert: null, format: '1-2 saatlik video kurslar',
    desc: "Andrew Ng'nin kurduğu DeepLearning.AI'ın, OpenAI, Anthropic, Google ve Hugging Face gibi şirketlerle hazırladığı 100'ü aşkın kısa kurs: istem yazma, RAG, ajanlar, ince ayar ve daha fazlası. Ücretli üyelik seçeneği de var.",
    who: 'Güncel yapay zeka tekniklerini kısa sürede öğrenmek isteyen geliştiriciler', source: src('DeepLearning.AI kurs kataloğu', 'https://www.deeplearning.ai/courses/') },
  { id: 'hugging-face', name: 'Hugging Face kursları', provider: 'Hugging Face', url: 'https://huggingface.co/learn',
    price: 'ucretsiz', lang: 'en', level: 'İleri', cert: null, format: 'Çevrim içi, açık kaynak ders notları',
    desc: "Büyük dil modelleri (LLM Course), yapay zeka ajanları (Agents Course), difüzyon modelleri, bilgisayarlı görü, ses ve robotik üzerine açık kaynak kurslar. Kod örnekleriyle uygulamalı ilerler.",
    who: 'Python bilen, açık kaynak modellerle çalışmak isteyen geliştiriciler', source: src('Hugging Face Learn', 'https://huggingface.co/learn') },
  { id: 'fast-ai', name: 'Practical Deep Learning for Coders', provider: 'fast.ai', url: 'https://course.fast.ai',
    price: 'ucretsiz', lang: 'en', level: 'İleri', cert: false, format: 'Video dersler ve not defterleri',
    desc: "Derin öğrenmeyi önce uygulayarak, sonra teorisiyle öğreten, yazılımcılar arasında çok sevilen ücretsiz kurs. Görüntü sınıflandırmadan dil modellerine kadar gerçek projelerle ilerler.",
    who: 'Biraz Python bilen ve derin öğrenmeye girmek isteyen yazılımcılar', source: src('fast.ai', 'https://course.fast.ai') },
  { id: 'kaggle-learn', name: 'Kaggle Learn', provider: 'Kaggle (Google)', url: 'https://www.kaggle.com/learn',
    price: 'ucretsiz', lang: 'en', level: 'Orta', cert: true, format: 'Tarayıcıda kısa, uygulamalı dersler',
    desc: "Python, makine öğrenmesine giriş, derin öğrenme ve bilgisayarlı görü gibi konularda birkaç saatlik kısa kurslar. Kodu kurulum gerektirmeden tarayıcıda yazarsınız; her kursun sonunda tamamlama belgesi alınır.",
    who: 'Veri bilimi ve makine öğrenmesine pratikle başlamak isteyenler', source: src('Kaggle Learn', 'https://www.kaggle.com/learn') },

  // ------------------------------------------------------------ ücretli
  { id: 'google-ai-essentials', name: 'Google AI Essentials', provider: 'Google (Coursera)', url: 'https://www.coursera.org/learn/google-ai-essentials',
    price: 'ucretli', lang: 'en', level: 'Başlangıç', cert: true, format: 'Kendi hızınızda, yaklaşık 10 saat', usd: 49, priceNote: 'ABD\'de aylık 49 $ (7 gün ücretsiz deneme); fiyat ülkeye göre değişiyor. Maddi destek başvurusu yapılabiliyor; Coursera Plus\'a dahil.',
    desc: "Google'ın iş hayatında yapay zekayı kullanmayı öğreten giriş programı: istem yazma, verimlilik için yapay zeka araçları ve sorumlu kullanım. Bitirince Google sertifikası verilir.",
    who: 'Yapay zekayı işinde kullanmak isteyen, teknik olmayan çalışanlar', source: src('Coursera kurs sayfası', 'https://www.coursera.org/learn/google-ai-essentials') },
  { id: 'coursera-plus', name: 'Coursera Plus (yapay zeka programları)', provider: 'Coursera', url: 'https://www.coursera.org/courseraplus',
    price: 'ucretli', lang: 'en', level: 'Başlangıç', cert: true, format: 'Abonelik; üniversite ve şirket programları', usd: 59, priceNote: 'Aylık 59 $ (7 gün deneme) veya yıllık 399 $; Kasım 2026 kampanyasında yıllık 239 $.',
    desc: "Tek abonelikle Google, IBM, DeepLearning.AI ve üniversitelerin binlerce kursu ve sertifika programı. Andrew Ng'nin AI For Everyone ve Machine Learning Specialization gibi en bilinen yapay zeka programları da buradadır.",
    who: 'Birden fazla sertifika programını sırayla tamamlamayı düşünenler', source: src('Coursera Plus sayfası', 'https://www.coursera.org/courseraplus') },
  { id: 'datacamp', name: 'DataCamp', provider: 'DataCamp', url: 'https://www.datacamp.com/category/artificial-intelligence',
    price: 'kismen', lang: 'en', level: 'Orta', cert: true, format: 'Tarayıcıda etkileşimli dersler', priceNote: 'Her kursun ilk bölümü ücretsiz; tüm kurslar, projeler ve sertifikalar Premium abonelikle.',
    desc: "Yapay zeka okuryazarlığından ChatGPT ve LLM uygulamalarına, Python ile makine öğrenmesine kadar tarayıcıda kod yazarak ilerlenen etkileşimli kurslar ve kariyer yolları. Arayüzün bir kısmı Türkçe.",
    who: 'Veri ve yapay zeka becerisini adım adım, pratikle kazanmak isteyenler', source: src('DataCamp fiyatlandırma', 'https://www.datacamp.com/pricing') },
  { id: 'udemy', name: 'Udemy yapay zeka kursları', provider: 'Udemy', url: 'https://www.udemy.com/tr/konusu/yapay-zeka/',
    price: 'ucretli', lang: 'tr', level: 'Başlangıç', cert: true, format: 'Kurs başına satın alınan video kurslar', priceNote: 'Kurs başına ücretli; fiyatlar eğitmene göre değişiyor ve sık sık indirime giriyor.',
    desc: "Türkçe dahil binlerce yapay zeka kursu: ChatGPT ile verimlilik, Midjourney ile görsel üretme, Python ile makine öğrenmesi. Kalite eğitmenden eğitmene değiştiği için puanlara, yorumlara ve güncellenme tarihine bakın.",
    who: 'Belirli bir aracı Türkçe ve video ile öğrenmek isteyenler', source: src('Udemy Türkçe yapay zeka kategorisi', 'https://www.udemy.com/tr/konusu/yapay-zeka/') },
];

export const courseById = (id) => COURSES.find((c) => c.id === id);
export const PRICE_LABEL = { ucretsiz: 'Ücretsiz', kismen: 'Ücretsiz + ücretli seçenek', ucretli: 'Ücretli' };
