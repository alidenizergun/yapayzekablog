// Türkiye masası (/turkiye-yapay-zeka/ ve /yerli-yapay-zeka/). Her kayıt kaynağa bağlıdır; kaynakta olmayan bilgi yazılmaz.
// Durum: 'acik' (herkes kullanabilir) · 'sinirli' (indirilebilir model, demo veya kurumsal) · 'kapali' (henüz genel kullanıma açık değil)

export const TR_CHECKED = '2026-11-16';

export const YERLI_MODELS = [
  { slug: 'evren', name: 'EVREN', dev: 'Savunma Sanayii Başkanlığı', status: 'acik', access: 'Web platformu',
    about: "Veri etiketleme, model eğitimi, görüntü ve büyük dil modeli çıkarımını bir arada sunan uçtan uca yapay zeka platformu. Kullanım kredi sistemiyle işliyor; veri etiketleme gibi katkılarla kredi kazanılabiliyor.",
    url: 'https://evren.ssyz.org.tr', sources: [['EVREN resmi sitesi', 'https://evren.ssyz.org.tr'], ['EVREN kredi sistemi', 'https://evren.ssyz.org.tr/pricing']] },
  { slug: 'kumru', name: 'Kumru', dev: 'VNGRS', status: 'acik', access: 'kumru.ai üzerinden sohbet; küçük sürüm (Kumru-2B) indirilebilir',
    about: "Türkçe için geliştirilen 7,4 milyar parametreli dil modeli. Ekim 2025'te tanıtıldı; 2 milyar parametreli küçük sürümü Hugging Face'te açık kaynak olarak yayımlandı.",
    url: 'https://kumru.ai', sources: [['Webrazzi', 'https://webrazzi.com/2025/10/10/vngrs-den-7-4-milyar-parametreli-turkce-llm-kumru/'], ['Kumru-2B (Hugging Face)', 'https://huggingface.co/vngrs/Kumru-2B']] },
  { slug: 'trendyol-llm', name: 'Trendyol LLM', dev: 'Trendyol', status: 'sinirli', access: "Model Hugging Face'ten indirilip kendi donanımında çalıştırılıyor",
    about: "Trendyol-LLM-8B-T1, Qwen3-8B tabanlı ve Trendyol'un Türkçe e-ticaret verileriyle ince ayar yapılmış 8 milyar parametreli model. Apache 2.0 lisansıyla ticari kullanıma açık.",
    url: 'https://huggingface.co/Trendyol/Trendyol-LLM-8B-T1', sources: [['Hugging Face model kartı', 'https://huggingface.co/Trendyol/Trendyol-LLM-8B-T1']] },
  { slug: 'cosmos', name: 'COSMOS Türkçe modelleri', dev: 'Yıldız Teknik Üniversitesi COSMOS', status: 'sinirli', access: "Modeller Hugging Face'ten indirilebiliyor",
    about: "YTÜ Bilgisayar Mühendisliği COSMOS araştırma grubunun Türkçe modelleri. Turkish-Gemma-9b-T1, Türkçede matematik, mantık ve adım adım akıl yürütme için uyarlanmış; Gemma lisansıyla sunuluyor.",
    url: 'https://huggingface.co/ytu-ce-cosmos/Turkish-Gemma-9b-T1', sources: [['Hugging Face model kartı', 'https://huggingface.co/ytu-ce-cosmos/Turkish-Gemma-9b-T1']] },
  { slug: 'turkcell-llm', name: 'Turkcell LLM', dev: 'Turkcell', status: 'sinirli', access: "Model Hugging Face'ten indirilebiliyor",
    about: "Mistral 7B tabanlı Türkçe dil modeli Turkcell-LLM-7b-v1. Apache 2.0 lisansıyla yayımlandı.",
    url: 'https://huggingface.co/TURKCELL/Turkcell-LLM-7b-v1', sources: [['Hugging Face model kartı', 'https://huggingface.co/TURKCELL/Turkcell-LLM-7b-v1']] },
  { slug: 'havelsan-main', name: 'HAVELSAN MAIN', dev: 'HAVELSAN', status: 'sinirli', access: 'Kurumlara yönelik; kurumun kendi sunucusunda veya kapalı ağda çalışıyor',
    about: "Kurumsal yapay zeka platformu. 9 milyar parametreli Türkçe büyük dil modelinin yanında açık kaynak istihbarat, görüntü ve ses modelleri içeriyor; kurumların kendi verileriyle eğitilebiliyor.",
    url: 'https://www.havelsan.com/tr/urunler/main-kurumsal-yapay-zeka-platformu', sources: [['HAVELSAN ürün sayfası', 'https://www.havelsan.com/tr/urunler/main-kurumsal-yapay-zeka-platformu']] },
  { slug: 't3-ai', name: 'T3 AI', dev: 'T3 Vakfı', status: 'sinirli', access: 'Resmi sayfada model indirme veya API bilgisi yok',
    about: "T3 Vakfı öncülüğünde, Türkçeyi yapay zekada güçlü biçimde temsil etmeyi hedefleyen açık kaynaklı büyük dil modeli projesi. Resmi sayfada model sürümü ve erişim bilgisi yer almıyor.",
    url: 'https://t3vakfi.org/tr/projelerimiz/t3-ai', sources: [['T3 Vakfı proje sayfası', 'https://t3vakfi.org/tr/projelerimiz/t3-ai']] },
  { slug: 'bilge', name: 'BİLGE', dev: 'TÜBİTAK BİLGEM', status: 'kapali', access: 'Henüz genel kullanıma açık değil',
    about: "Türkçenin yapısı ve kültürel bağlamı temel alınarak geliştirilen, 1 milyar ile 122 milyar parametre arasında modellerden oluşan büyük dil modeli ailesi. Resmi sitesine göre henüz genel kullanıma açılmadı.",
    url: 'https://bilge.gov.tr', sources: [['BİLGE resmi sitesi', 'https://bilge.gov.tr']] },
];
export const STATUS_LABEL = { acik: 'Kullanılabilir', sinirli: 'Sınırlı erişim', kapali: 'Henüz açık değil' };

/** Düzenleme ve kamu politikası zaman çizelgesi (eskiden yeniye) */
export const TR_POLICY = [
  { date: '2021-09', title: 'KVKK, yapay zeka alanında kişisel verilerin korunmasına dair tavsiyeler yayımladı', note: 'Bağlayıcı değil.', src: ['regulations.ai', 'https://regulations.ai/regulations/turkey-summary'] },
  { date: '2024-05', title: 'YÖK, üretken yapay zeka etik rehberini yayımladı', src: ['regulations.ai', 'https://regulations.ai/regulations/turkey-summary'] },
  { date: '2024-06', title: "Yapay Zeka Kanun Teklifi TBMM'ye sunuldu (Esas No. 2/2234)", note: 'İncelemede.', src: ['regulations.ai', 'https://regulations.ai/regulations/turkey-summary'] },
  { date: '2024-07', title: 'Ulusal Yapay Zeka Stratejisi 2024-2025 Eylem Planı yayımlandı', src: ['regulations.ai', 'https://regulations.ai/regulations/turkey-summary'] },
  { date: '2024-10', title: 'TBMM Yapay Zeka Araştırma Komisyonu kuruldu', note: '22 üyeli Meclis araştırma komisyonu (Karar No. 1426).', src: ['regulations.ai', 'https://regulations.ai/regulations/turkey-summary'] },
  { date: '2024-11', title: 'KVKK, sohbet robotlarına ilişkin açıklama notu yayımladı', src: ['regulations.ai', 'https://regulations.ai/regulations/turkey-summary'] },
  { date: '2025-06', title: 'MEB, Eğitimde Yapay Zeka Politika Belgesi ve Eylem Planı (2025-2029) yayımladı', src: ['regulations.ai', 'https://regulations.ai/regulations/turkey-summary'] },
  { date: '2025-11', title: "\"Bazı Kanunlarda Yapay Zekaya İlişkin Değişiklik\" teklifi TBMM'ye sunuldu (Esas No. 2/3358)", note: 'İncelemede.', src: ['regulations.ai', 'https://regulations.ai/regulations/turkey-summary'] },
  { date: '2025-11-24', title: 'KVKK, "Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi (15 Soruda)" yayımladı', src: ['KVKK', 'https://www.kvkk.gov.tr/Icerik/8547/uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi-15-soruda'] },
  { date: '2026-08-18', title: 'Türkiye Yapay Zeka Eylem Planı (2026-2030) yürürlüğe girdi', note: "Cumhurbaşkanlığı genelgesi (2026/9) ile; koordinasyon Sanayi ve Teknoloji Bakanlığı'nda.", src: ['CNBC-e', 'https://www.cnbce.com/haberler/resmi-gazetede-yayimlandi-turkiye-yapay-zeka-eylem-plani-yururluge-kondu-h35261'] },
  { date: '2026-08-28', title: 'Cumhurbaşkanı başkanlığında Ulusal Yapay Zekâ Kurulu oluşturulacağı açıklandı', note: 'Eylem planının en üst karar ve koordinasyon organı olacak; Ulusal Yapay Zekâ Etik Kurulu\'nun bir yıl içinde kurulması hedefleniyor.', src: ['Milliyet', 'https://www.milliyet.com.tr/7649739'] },
];

/** Ekosistem rakamları (tanımları farklı olduğu için kaynaklar arasında sayılar farklıdır) */
export const TR_STATS = [
  { value: '504', label: "TRAI Girişim Haritası'ndaki yapay zeka girişimi (Ekim 2026)", src: ['ForInvest / TRAI', 'https://www.foreks.com/haber/detay/6ad08073422c786f3f7a3798/FRKS/tr/trai-sineml-trai-girisim-haritasi-nda-500-esiginin-asilmasi-turkiye-nin-yapay-zeka-alanindaki-girisimcilik-birikiminin-geldigi-noktayi-gosteriyor-15-10-26/'] },
  { value: '1.188', label: 'Aktif yapay zeka girişimi (Türk Yapay Zekâ Ekosistemi ve Global Etki Raporu, Şubat 2026)', src: ['Webrazzi', 'https://webrazzi.com/2026/02/05/turk-yapay-zeka-ekosistemi-ve-global-etki-raporundan-one-cikanlar/'] },
  { value: '180', label: '2024-2025 döneminde erken aşama yatırım alan yapay zeka girişimi (aynı rapor)', src: ['Webrazzi', 'https://webrazzi.com/2026/02/05/turk-yapay-zeka-ekosistemi-ve-global-etki-raporundan-one-cikanlar/'] },
];

/** Türk kurucuların 2026'daki öne çıkan yatırım turları */
export const TR_ROUNDS = [
  { name: 'Forithmus', where: 'Zürih', what: 'Tıbbi görüntüleme için veri altyapıları ve temel modeller', round: 'Ön tohum', amount: '4 milyon dolar', investors: 'Point Nine, e2vc', date: '2026-03-23', src: ['egirişim', 'https://egirisim.com/2026/03/23/turk-girisimcilerin-zurihte-kurdugu-forithmus-4-milyon-dolar-yatirim-aldi/'] },
  { name: 'Talp', where: 'ABD', what: 'Hedef kitlenin ürün ve reklamlara tepkisini yapay zeka personalarıyla simüle eden platform', round: 'Tohum öncesi', amount: '20 milyon dolar değerleme', investors: 'Formus Capital, Sunshine Lake Ventures, Aito Capital, a16z Scout Fund', date: '2026-07-02', src: ['egirişim', 'https://egirisim.com/2026/07/02/turk-girisimcilerin-abdde-kurdugu-talp-20-milyon-dolar-degerleme-uzerinden-yatirim-aldi/'] },
  { name: '5U AI', where: 'Münih', what: 'Lojistik şirketleri için teklif, rezervasyon ve takip işlerini yürüten yapay zeka "çalışanları"', round: 'Ön tohum', amount: '3,2 milyon dolar', investors: 'Emerge Capital (lider)', date: '2026-07-28', src: ['egirişim', 'https://egirisim.com/2026/07/28/turk-girisimcilerin-munihte-kurdugu-5u-ai-3-2-milyon-dolar-yatirim-aldi/'] },
];
