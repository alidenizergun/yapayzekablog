// İş kollarında yapay zeka (/sektor/). Her sektörün bir merkez sayfası ve 5 rehberi var.
// Rehberler src/content/rehberler/ altında "sector" alanıyla durur; scripts/generate-guides.mjs aşağıdaki
// konu listesinden (topics) eksik olanları web araştırmasıyla yazar.
// topics: slug (rehber adresi), title (çalışma başlığı; yazar netleştirebilir), brief (yazara kapsam notu)

export const SECTORS = [
  {
    slug: 'hukuk', name: 'Hukuk', title: 'Hukukta yapay zeka', en: { name: 'Law', title: 'AI in law' },
    intro: { tr: 'Avukatlar, hukuk büroları ve şirket hukuk birimleri yapay zekayı araştırma, sözleşme incelemesi ve belge hazırlığında kullanıyor. Bu bölümde hangi işlerde işe yaradığını, meslek kurallarını ve uydurma içtihat gibi riskleri anlatıyoruz.', en: 'Lawyers, law firms and in-house legal teams use AI for research, contract review and drafting. This section covers where it helps, the professional rules and risks such as fabricated case law.' },
    tools: ['chatgpt', 'claude', 'notebooklm', 'deepl'],
    newsRe: /hukuk|avukat|yargı|mahkeme|dava|telif|regülasyon|yasa|AI Act|KVKK|baro|legal|lawsuit|court/i,
    topics: [
      { slug: 'avukatlar-icin-yapay-zeka', title: 'Avukatlar için yapay zeka: hangi işlerde kullanılır, nerede dikkat edilmeli?', brief: 'Hukuk bürolarında araştırma, dilekçe ve sözleşme taslağı, belge özetleme, müvekkil iletişimi gibi kullanım alanları; Harvey, CoCounsel gibi hukuka özel araçlar ve genel asistanlar; gizlilik, avukatlık meslek kuralları ve sorumluluk.' },
      { slug: 'hukukta-yapay-zeka-uydurma-ictihat-riski', title: 'Hukuki araştırmada yapay zeka ve uydurma içtihat riski', brief: 'Mahkemelere yapay zekanın uydurduğu kararlarla sunulan dilekçeler (ABD ve diğer ülkelerden gerçek, kaynaklı örnekler), mahkemelerin verdiği yaptırımlar ve bundan korunmak için doğrulama adımları.' },
      { slug: 'sozlesme-incelemesinde-yapay-zeka', title: 'Sözleşme incelemesinde yapay zeka: nasıl kullanılır, sınırları ne?', brief: 'Sözleşme özetleme, risk maddesi tespiti, karşılaştırma ve taslak hazırlama; adım adım kullanım; gizli belgeleri yüklerken dikkat edilecekler; insan kontrolünün yeri.' },
      { slug: 'turkiyede-hukukta-yapay-zeka', title: "Türkiye'de yargıda ve hukuk mesleğinde yapay zeka", brief: "Türkiye'de Adalet Bakanlığı, UYAP ve yargıda yapay zeka çalışmaları, barolar ve Türkiye Barolar Birliği'nin yaklaşımı, KVKK açısından avukatların dikkat etmesi gerekenler. Yalnızca kaynakla doğrulanabilen bilgileri kullan." },
      { slug: 'ab-yapay-zeka-yasasi-ve-turkiye', title: 'AB Yapay Zeka Yasası ve Türkiye: şirketler neye hazırlanmalı?', brief: "AB Yapay Zeka Yasası'nın risk sınıfları, yürürlük takvimi ve yükümlülükleri; AB'ye ürün veya hizmet sunan Türk şirketlerini nasıl etkilediği; Türkiye'deki yapay zeka düzenleme çalışmaları (TBMM'deki teklifler vb.)." },
    ],
  },
  {
    slug: 'pazarlama', name: 'Pazarlama', title: 'Pazarlamada yapay zeka', en: { name: 'Marketing', title: 'AI in marketing' },
    intro: { tr: 'Pazarlama ekipleri yapay zekayı içerik üretiminden reklam yönetimine, müşteri analizinden kişiselleştirmeye kadar her aşamada kullanıyor. Bu bölümde pratik kullanım yollarını, platformların yapay zeka araçlarını ve yapay zeka aramalarının markalara etkisini anlatıyoruz.', en: 'Marketing teams use AI at every stage, from content creation and ad management to customer analysis and personalization. This section covers practical uses, the AI tools inside ad platforms and how AI search is changing brand visibility.' },
    tools: ['chatgpt', 'canva', 'midjourney', 'capcut', 'heygen', 'gamma'],
    newsRe: /pazarlama|reklam|marka|kampanya|sosyal medya|influencer|SEO|marketing|advertis|Meta Ads|Google Ads|Performance Max/i,
    topics: [
      { slug: 'pazarlamada-yapay-zeka-kullanim-alanlari', title: 'Pazarlamada yapay zeka: ekiplerin en çok kullandığı işler', brief: 'İçerik ve metin üretimi, görsel ve video, reklam metni varyasyonları, müşteri araştırması, raporlama, e-posta kişiselleştirme; her biri için örnek akış ve araç; araştırmaların (McKinsey, HubSpot, Salesforce vb.) pazarlamada yapay zeka kullanımına dair bulguları.' },
      { slug: 'yapay-zeka-ile-icerik-uretimi-ve-marka-sesi', title: 'Yapay zeka ile içerik üretimi: marka sesi ve özgünlük nasıl korunur?', brief: 'Marka sesi rehberi hazırlama, istem kütüphanesi, insan editörlüğü, telif ve özgünlük riskleri, Google’ın yapay zeka içeriği hakkındaki resmi tutumu, yapay zeka içeriğini etiketleme.' },
      { slug: 'reklam-platformlarinda-yapay-zeka', title: 'Reklam platformlarında yapay zeka: Performance Max ve Advantage+ nasıl çalışır?', brief: "Google Ads Performance Max ve yapay zeka özellikleri, Meta Advantage+ kampanyaları, TikTok'un otomasyon araçları; nasıl çalıştıkları, ne zaman işe yaradıkları, kontrolü kaybetmemek için ipuçları. Yalnızca platformların resmi belgeleriyle doğrulanan bilgiler." },
      { slug: 'yapay-zeka-aramalari-ve-markalar-geo', title: 'Yapay zeka aramaları markaları nasıl etkiliyor? GEO’ya giriş', brief: 'Google Yapay Zeka Özetleri (AI Overviews) ve AI Mode, ChatGPT arama, Perplexity; tıklama oranlarına etkisi üzerine araştırmalar; markaların yapay zeka yanıtlarında görünür olması için yapılabilecekler (GEO/AEO).' },
      { slug: 'yapay-zeka-ile-kisisellestirme-ve-kvkk', title: 'Yapay zeka ile müşteri segmentasyonu ve kişiselleştirme: KVKK sınırları', brief: 'Müşteri verisiyle segmentasyon, kişiselleştirilmiş öneri ve e-posta; Türkiye’de KVKK, açık rıza ve ticari ileti (İYS) kuralları; müşteri verisini yapay zeka araçlarına yüklerken dikkat edilecekler.' },
    ],
  },
  {
    slug: 'saglik', name: 'Sağlık', title: 'Sağlıkta yapay zeka', en: { name: 'Healthcare', title: 'AI in healthcare' },
    intro: { tr: 'Yapay zeka tıbbi görüntülemeden ilaç keşfine, hastane operasyonlarından hasta iletişimine kadar sağlığın birçok alanına giriyor. Bu bölümde bugün gerçekten kullanılan uygulamaları, hastaların dikkat etmesi gerekenleri ve Türkiye’deki durumu anlatıyoruz. Bu içerikler tıbbi tavsiye değildir.', en: 'AI is entering many areas of healthcare, from medical imaging and drug discovery to hospital operations and patient communication. This section covers applications in real use today, what patients should watch for and the situation in Turkey. This content is not medical advice.' },
    tools: ['chatgpt', 'claude', 'gemini', 'notebooklm'],
    newsRe: /sağlık|hastane|tıp|tıbbi|hasta|doktor|hekim|ilaç|teşhis|radyoloji|kanser|FDA|health|medical|clinical|drug/i,
    topics: [
      { slug: 'saglikta-yapay-zeka-bugun-neler-yapiliyor', title: 'Sağlıkta yapay zeka: bugün gerçekten neler yapılıyor?', brief: 'Teşhis desteği, tıbbi görüntüleme, klinik not tutma (ambient scribe), hastane operasyonları, ilaç keşfi; her biri için onaylı veya yaygın kullanılan örnekler; FDA onaylı yapay zeka cihaz sayısı gibi doğrulanmış rakamlar; sınırlar.' },
      { slug: 'saglik-sorularinda-yapay-zeka-kullanimi', title: 'Sağlık sorularında yapay zeka sohbet botlarını güvenle kullanmak', brief: 'Hastalar ve yakınları için: tahlil sonucu ve terim açıklatma, doktora soru listesi hazırlama gibi faydalı kullanımlar; teşhis ve tedavi kararı için kullanmamanın nedenleri; araştırmaların yanlış bilgi oranlarına dair bulguları; sağlık verisini paylaşırken gizlilik. Tıbbi tavsiye verme.' },
      { slug: 'tibbi-goruntulemede-yapay-zeka', title: 'Tıbbi görüntülemede yapay zeka: radyoloji ve patolojide neler değişiyor?', brief: 'Mamografi taraması, akciğer grafisi, inme tespiti, dijital patoloji; büyük klinik çalışmaların (ör. İsveç MASAI mamografi çalışması) sonuçları; radyologların rolü; onay süreçleri.' },
      { slug: 'turkiyede-saglikta-yapay-zeka', title: "Türkiye'de sağlıkta yapay zeka: uygulamalar ve düzenlemeler", brief: "Sağlık Bakanlığı'nın yapay zeka çalışmaları, e-Nabız ve sağlık verisi, Türkiye'de hastanelerdeki örnekler, yerli girişimler, sağlık verisinin KVKK'daki özel nitelikli veri statüsü. Yalnızca kaynakla doğrulanabilen bilgileri kullan." },
      { slug: 'ilac-kesfinde-yapay-zeka', title: 'İlaç keşfinde yapay zeka: AlphaFold’dan klinik denemelere', brief: 'Protein yapısı tahmini (AlphaFold, Nobel ödülü), Isomorphic Labs ve diğer şirketler, yapay zekayla keşfedilip klinik denemeye giren ilaçlar, gerçekçi beklentiler ve süreler.' },
    ],
  },
  {
    slug: 'finans', name: 'Finans', title: 'Finansta yapay zeka', en: { name: 'Finance', title: 'AI in finance' },
    intro: { tr: 'Bankalar, sigorta şirketleri ve yatırım kuruluşları yapay zekayı müşteri hizmetlerinden risk analizine, dolandırıcılık tespitinden raporlamaya kadar yaygın biçimde kullanıyor. Bu bölümde sektördeki uygulamaları, bireysel yatırımcıların dikkat etmesi gerekenleri ve düzenlemeleri anlatıyoruz. Bu içerikler yatırım tavsiyesi değildir.', en: 'Banks, insurers and investment firms use AI widely, from customer service and risk analysis to fraud detection and reporting. This section covers industry applications, what individual investors should watch for and the rules. This content is not investment advice.' },
    tools: ['chatgpt', 'claude', 'microsoft-copilot', 'perplexity'],
    newsRe: /banka|finans|sigorta|kredi|ödeme|fintek|borsa|yatırımcı|BDDK|SPK|bank|fintech|insurance|payment|trading/i,
    topics: [
      { slug: 'bankacilikta-yapay-zeka', title: 'Bankacılıkta yapay zeka: müşteri hizmetinden kredi kararlarına', brief: 'Sanal asistanlar, dolandırıcılık tespiti, kredi skorlama, uyum (KYC/AML), kod ve operasyon verimliliği; büyük bankaların (JPMorgan, Morgan Stanley vb.) açıkladığı somut uygulamalar; Türk bankalarının kaynakla doğrulanan yapay zeka asistanları ve uygulamaları.' },
      { slug: 'yatirim-yaparken-yapay-zeka-kullanmak', title: 'Yatırım yaparken yapay zeka kullanmak: neler yapılabilir, riskler neler?', brief: 'Şirket raporu ve bilanço özetleme, haber takibi, kavram öğrenme gibi faydalı kullanımlar; "yapay zeka hisse önerisi" iddialarının riskleri, sahte yapay zeka yatırım platformları ve SPK uyarıları; yatırım tavsiyesi verme.' },
      { slug: 'finans-ekipleri-icin-yapay-zeka', title: 'Muhasebe ve finans ekipleri için yapay zeka', brief: 'Raporlama, mutabakat, bütçe ve tahmin, fatura işleme, Excel ve veri analizi; araştırmaların (Gartner, Deloitte vb.) finans fonksiyonunda yapay zeka benimsemesine dair bulguları; denetim izi ve doğruluk kontrolü.' },
      { slug: 'yapay-zeka-ile-finansal-dolandiricilik', title: 'Yapay zeka ve finansal dolandırıcılık: bankalar nasıl korunuyor?', brief: 'Ses klonlama ve deepfake ile yapılan gerçek dolandırıcılık vakaları (ör. Arup), bankaların yapay zekayla dolandırıcılık tespiti, şirketlerin ödeme onay süreçleri için alınabilecek önlemler. Bireysel korunma için sitedeki /rehber/yapay-zeka-dolandiriciliklarindan-korunma/ rehberine bağlantı ver.' },
      { slug: 'finans-sektorunde-yapay-zeka-duzenlemeleri', title: "Finans sektöründe yapay zeka düzenlemeleri: Türkiye ve dünya", brief: "Türkiye'de BDDK, SPK, TCMB ve KVKK'nın yapay zekayla ilgili düzenleme ve açıklamaları; AB Yapay Zeka Yasası'nda kredi skorlamanın yüksek riskli sayılması; ABD ve İngiltere düzenleyicilerinin yaklaşımı. Yalnızca kaynakla doğrulanabilen bilgileri kullan." },
    ],
  },
  {
    slug: 'egitim', name: 'Eğitim', title: 'Eğitimde yapay zeka', en: { name: 'Education', title: 'AI in education' },
    intro: { tr: 'Yapay zeka sınıfa, ödeve ve sınava girdi. Bu bölümde öğretmenlerin, velilerin ve okulların yapay zekayı nasıl kullanabileceğini, Türkiye ve dünyadaki kuralları ve araştırmaların öğrenmeye etkisi hakkında söylediklerini anlatıyoruz.', en: 'AI has entered classrooms, homework and exams. This section covers how teachers, parents and schools can use AI, the rules in Turkey and around the world, and what research says about its effect on learning.' },
    tools: ['chatgpt', 'gemini', 'notebooklm', 'claude'],
    newsRe: /eğitim|okul|öğretmen|öğrenci|üniversite|MEB|YÖK|sınav|ödev|education|school|student|teacher|university/i,
    topics: [
      { slug: 'ogretmenler-icin-yapay-zeka', title: 'Öğretmenler için yapay zeka: ders hazırlığı, ölçme ve sınırlar', brief: 'Ders planı, etkinlik ve soru hazırlama, farklılaştırılmış materyal, geri bildirim taslağı; öğretmenlerin kullandığı araçlar (ChatGPT for Teachers, Gemini for Education, MagicSchool vb. kaynakla doğrulananlar); öğrenci verisini korumak; yapay zekanın yapmaması gerekenler.' },
      { slug: 'okullarda-yapay-zeka-politikasi', title: "Okullarda yapay zeka politikası: MEB'in yaklaşımı ve dünyadan örnekler", brief: "MEB'in yapay zeka ile ilgili yönergeleri ve politika belgeleri, YÖK'ün yükseköğretim için etik rehberi, UNESCO rehberi, farklı ülkelerin okul politikaları; bir okulun kendi yapay zeka kurallarını nasıl hazırlayabileceği." },
      { slug: 'veliler-icin-yapay-zeka-rehberi', title: 'Velilere rehber: çocuklar yapay zekayı nasıl güvenle kullanmalı?', brief: 'Yapay zeka araçlarının yaş sınırları (resmi kullanım koşullarından), ebeveyn denetimleri (ör. ChatGPT ebeveyn kontrolleri), ödevde yardım ile kopya arasındaki fark, sohbet botlarıyla duygusal bağ riskleri, ailede konuşulacak kurallar.' },
      { slug: 'universitelerde-yapay-zeka-ve-akademik-durustluk', title: 'Üniversitelerde yapay zeka: akademik dürüstlük ve yeni kurallar', brief: "Üniversitelerin yapay zeka politikaları, tespit araçlarının güvenilirliği ve yanlış alarm sorunu (araştırmalara dayanarak), ödev ve sınav tasarımındaki değişiklikler, YÖK'ün etik rehberi, öğrencilerin kaynak gösterme yolları." },
      { slug: 'yapay-zeka-ile-kisisellestirilmis-ogrenme', title: 'Yapay zeka ile kişiselleştirilmiş öğrenme: araştırmalar ne diyor?', brief: 'Yapay zeka öğretmen asistanları (Khanmigo vb.), randomize kontrollü çalışmaların öğrenme çıktılarına dair bulguları (ör. Nijerya Dünya Bankası çalışması, Harvard fizik çalışması, "öğrenmeyi zayıflatma" riskini gösteren çalışmalar), iyi kullanım ilkeleri.' },
    ],
  },
  {
    slug: 'e-ticaret', name: 'E-ticaret', title: 'E-ticarette yapay zeka', en: { name: 'E-commerce', title: 'AI in e-commerce' },
    intro: { tr: 'E-ticaret yapay zekanın en hızlı yayıldığı alanlardan biri: ürün açıklamasından görsele, müşteri hizmetinden fiyatlamaya kadar. Bu bölümde satıcıların ve markaların kullanabileceği araçları ve yapay zeka asistanlarının alışverişi nasıl değiştirdiğini anlatıyoruz.', en: 'E-commerce is one of the fastest-growing areas for AI, from product descriptions and images to customer service and pricing. This section covers tools sellers and brands can use and how AI assistants are changing shopping.' },
    tools: ['chatgpt', 'canva', 'capcut', 'adobe-firefly'],
    newsRe: /e-ticaret|alışveriş|perakende|pazaryeri|Trendyol|Hepsiburada|Amazon|Shopify|mağaza|e-commerce|retail|shopping|checkout/i,
    topics: [
      { slug: 'e-ticarette-yapay-zeka-kullanim-alanlari', title: 'E-ticarette yapay zeka: satıcılar nerede kullanabilir?', brief: 'Ürün başlığı ve açıklaması, ürün görseli, müşteri sorularına yanıt, yorum analizi, reklam ve kampanya, iade ve destek süreçleri; KOBİ ölçeğinde pratik akış; araştırmaların e-ticarette yapay zeka benimsemesine dair bulguları.' },
      { slug: 'pazaryeri-saticilari-icin-yapay-zeka', title: 'Pazaryeri satıcıları için yapay zeka araçları', brief: "Trendyol, Hepsiburada, Amazon ve Shopify'ın satıcılara sunduğu yapay zeka araçları (yalnızca resmi duyurularla doğrulananlar), pazaryeri kurallarına uygun içerik, sahte yorum ve yanıltıcı görsel yasakları." },
      { slug: 'yapay-zeka-ile-urun-fotografi', title: 'Yapay zeka ile ürün fotoğrafı ve video: nasıl yapılır, nelere dikkat edilir?', brief: 'Arka plan değiştirme, mankenli görsel, ürün videosu; kullanılan araçlar; ürünü olduğundan farklı göstermenin tüketici hukuku ve pazaryeri kuralları açısından riskleri; telif ve model hakları.' },
      { slug: 'ajanli-alisveris-yapay-zeka-asistanlari', title: 'Ajanlı alışveriş: yapay zeka asistanları alışverişi nasıl değiştiriyor?', brief: "ChatGPT'de alışveriş ve Instant Checkout, Google'ın yapay zeka alışveriş özellikleri, Perplexity alışveriş, ajan ödeme protokolleri (OpenAI-Stripe ACP, Google AP2 vb.); markaların ve satıcıların hazırlanması gerekenler. Yalnızca resmi duyurularla doğrulananlar." },
      { slug: 'e-ticarette-fiyatlama-ve-talep-tahmini', title: 'E-ticarette yapay zeka ile fiyatlama, talep tahmini ve stok yönetimi', brief: 'Dinamik fiyatlama, talep tahmini, stok optimizasyonu; büyük perakendecilerin açıkladığı örnekler; küçük satıcılar için erişilebilir yöntemler; fiyat algoritmalarının rekabet hukuku riskleri.' },
    ],
  },
  {
    slug: 'insan-kaynaklari', name: 'İnsan kaynakları', title: 'İnsan kaynaklarında yapay zeka', en: { name: 'HR', title: 'AI in HR' },
    intro: { tr: 'İşe alımdan eğitime, çalışan deneyiminden iş gücü planlamasına kadar insan kaynakları yapay zekayla değişiyor. Bu bölümde İK ekiplerinin araçlarını, önyargı ve gizlilik risklerini, şirket içi yapay zeka politikalarını ve iş gücüne etkisini anlatıyoruz.', en: 'From hiring and training to employee experience and workforce planning, HR is changing with AI. This section covers HR tools, bias and privacy risks, internal AI policies and the impact on the workforce.' },
    tools: ['chatgpt', 'claude', 'microsoft-copilot', 'kickresume'],
    newsRe: /işe alım|istihdam|çalışan|iş gücü|işten çıkar|insan kaynakları|meslek|beceri|hiring|layoff|workforce|jobs|employee/i,
    topics: [
      { slug: 'insan-kaynaklarinda-yapay-zeka', title: "İK'da yapay zeka: işe alımdan çalışan deneyimine", brief: 'İlan yazma, aday tarama, mülakat planlama, eğitim içeriği, çalışan soruları için asistan, performans ve geri bildirim; araştırmaların (SHRM, LinkedIn vb.) İK’da yapay zeka kullanımına dair bulguları.' },
      { slug: 'yapay-zeka-ile-ise-alim-ve-onyargi', title: 'Yapay zeka ile işe alım: önyargı riski ve yasal sınırlar', brief: "Aday tarama araçları, Amazon'un bıraktığı işe alım aracı gibi gerçek önyargı örnekleri, New York City yerel yasası (LL 144), AB Yapay Zeka Yasası'nda işe alımın yüksek riskli sayılması, Türkiye'de KVKK ve eşit davranma ilkesi, adaylara şeffaflık." },
      { slug: 'sirket-ici-yapay-zeka-politikasi', title: 'Şirket içi yapay zeka politikası nasıl hazırlanır?', brief: 'Hangi araçlara izin verilir, hangi veriler paylaşılamaz, onay ve sorumluluk, gizli bilgi sızıntısı örnekleri (ör. Samsung olayı), eğitim, örnek politika maddeleri; kurumsal planların veri güvenceleri.' },
      { slug: 'yapay-zeka-ve-is-gucu-meslekler-nasil-degisiyor', title: 'Yapay zeka ve iş gücü: hangi meslekler nasıl değişiyor?', brief: 'Dünya Ekonomik Forumu Future of Jobs, IMF, ILO, OECD, Anthropic Economic Index, Stanford gibi kaynakların bulguları; hangi işlerin etkilendiği, yeni beceriler; Türkiye’ye dair veriler varsa. Abartılı iddialardan kaçın, rakamları kaynağıyla ver.' },
      { slug: 'calisanlara-yapay-zeka-egitimi', title: 'Çalışanlara yapay zeka eğitimi: şirketler ekiplerini nasıl hazırlıyor?', brief: 'Yapay zeka okuryazarlığı programları, AB Yapay Zeka Yasası’nın yapay zeka okuryazarlığı yükümlülüğü (Madde 4), şirket örnekleri, ücretsiz eğitim kaynakları (Google, Microsoft, Anthropic, OpenAI Academy vb.), eğitimin etkisini ölçme.' },
    ],
  },
  {
    slug: 'sanayi', name: 'Sanayi', title: 'Sanayide yapay zeka', en: { name: 'Manufacturing', title: 'AI in manufacturing' },
    intro: { tr: 'Fabrikalarda yapay zeka kalite kontrolden kestirimci bakıma, enerji verimliliğinden robotlara kadar yayılıyor. Bu bölümde üretimde yapay zekanın somut uygulamalarını, nereden başlanacağını ve Türkiye’deki destekleri anlatıyoruz.', en: 'In factories, AI is spreading from quality control and predictive maintenance to energy efficiency and robotics. This section covers concrete applications in manufacturing, where to start and support programs in Turkey.' },
    tools: ['chatgpt', 'claude', 'microsoft-copilot'],
    newsRe: /sanayi|fabrika|üretim|robot|otomotiv|endüstri|tedarik zinciri|imalat|manufactur|factory|industrial|robotics|humanoid/i,
    topics: [
      { slug: 'uretimde-yapay-zeka', title: 'Üretimde yapay zeka: kalite kontrol, bakım ve verimlilik', brief: 'Görüntü işleme ile kalite kontrol, kestirimci bakım, enerji optimizasyonu, planlama, dijital ikiz; Dünya Ekonomik Forumu Global Lighthouse Network örnekleri; nereden başlanmalı.' },
      { slug: 'kestirimci-bakim-nedir', title: 'Kestirimci bakım: yapay zeka arızaları nasıl önceden tahmin ediyor?', brief: 'Sensör verisi, titreşim ve sıcaklık analizi, anomali tespiti; reaktif, önleyici ve kestirimci bakım farkı; kaynakla doğrulanmış tasarruf rakamları ve vaka örnekleri; KOBİ’ler için başlangıç adımları.' },
      { slug: 'goruntu-isleme-ile-kalite-kontrol', title: 'Görüntü işleme ile kalite kontrol: nasıl çalışır, nereden başlanır?', brief: 'Kamera ve model ile hata tespiti, veri toplama ve etiketleme, kurulum maliyeti ve süresi, hazır platformlar, başarı ölçütleri; gerçek fabrika örnekleri.' },
      { slug: 'turkiyede-sanayide-yapay-zeka', title: "Türkiye'de sanayide yapay zeka: destekler ve örnekler", brief: "Sanayi ve Teknoloji Bakanlığı'nın dijital dönüşüm destekleri (ör. Sanayide Dijital Dönüşüm programları, KOSGEB, TÜBİTAK destekleri), Ulusal Yapay Zeka Stratejisi'nin sanayi hedefleri, Türk sanayi şirketlerinden kaynakla doğrulanmış örnekler." },
      { slug: 'fabrikalarda-robotlar-ve-yapay-zeka', title: 'Endüstriyel ve insansı robotlar: fabrikalarda yapay zekanın yeni dalgası', brief: 'Uluslararası Robotik Federasyonu (IFR) verileri, Türkiye’nin robot yoğunluğu, insansı robotların fabrika denemeleri (Figure-BMW, Agility, Tesla Optimus vb. kaynakla doğrulananlar), gerçekçi beklentiler.' },
    ],
  },
];

// İngilizce adres parçaları (/en/industries/<slug>/)
export const SECTOR_EN = { hukuk: 'law', pazarlama: 'marketing', saglik: 'healthcare', finans: 'finance', egitim: 'education', 'e-ticaret': 'e-commerce', 'insan-kaynaklari': 'hr', sanayi: 'manufacturing' };

export const sectorBySlug = (slug) => SECTORS.find((s) => s.slug === slug);
export const SECTOR_SLUGS = SECTORS.map((s) => s.slug);
