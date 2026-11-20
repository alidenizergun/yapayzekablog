---
title: "Yapay zeka ve finansal dolandırıcılık: bankalar ve şirketler nasıl korunuyor?"
description: "Ses klonlama ve deepfake dolandırıcılıkları, Arup vakası, FBI verileri, bankaların yapay zekayla tespit çalışmaları ve şirketlerin ödeme onay süreçlerinde alabileceği önlemler."
date: 2026-11-20
summary:
  - "Arup vakasında çalışan, sahte video görüşmeye güvenip 15 transferle yaklaşık 25 milyon dolar gönderdi."
  - "Bankalar sahte sesi tek bir araçla değil, ses biyometrisi, davranış sinyalleri ve işlem bağlamını birleştirerek yakalamaya çalışıyor."
  - "Şirketler için en etkili önlem, ödeme onayını görüntü ve sesten bağımsız, ikinci bir kanala bağlamak."
level: Orta
topic: Güvenlik ve gizlilik
terms: [deepfake, yapay-zeka, uretken-yapay-zeka, makine-ogrenmesi]
sector: finans
faq:
  - q: "Video görüşmede gördüğüm kişinin sahte olup olmadığını anlayabilir miyim?"
    a: "Her zaman anlayamazsınız; Arup vakasında toplantıdaki diğer katılımcıların hepsi yapay zeka ile üretilmişti. Bu yüzden ödeme gibi kritik işlemlerde görüntüye değil, bağımsız ikinci bir doğrulama kanalına güvenin."
  - q: "Bankalar sesimi klonlayan dolandırıcıları durdurabiliyor mu?"
    a: "Bankalar gerçek zamanlı tespit araçlarını değerlendiriyor, ancak ABA analizine göre bu tehdit birçok kurumda hâlâ yeni ortaya çıkan bir risk olarak görülüyor. Tespit tek başına yeterli sayılmıyor, başka sinyallerle birlikte kullanılıyor."
  - q: "Şirketim için en basit ilk önlem nedir?"
    a: "Yüksek tutarlı veya olağandışı ödeme taleplerini, talebin geldiği kanaldan bağımsız ve önceden kayıtlı bir numaradan geri arayarak doğrulamak ve bunu yazılı bir kurala bağlamak."
sources:
  - title: "Neural Defend: Arup $25M Deepfake Video Call Scam"
    url: "https://neuraldefend.com/insights/verified-cases/arup-deepfake-video-call-case"
  - title: "Axlio: The Arup deepfake scam"
    url: "https://www.axlio.com/insights/arup-deepfake-scam/"
  - title: "PPC Land: AI-linked fraud costs Americans $893 million, FBI reports for 2025"
    url: "https://ppc.land/ai-linked-fraud-costs-americans-893-million-fbi-reports-for-2025/"
  - title: "AI Nexus Daily: FBI 2025 IC3 report"
    url: "https://www.ainexusdaily.com/article/fbi-2025-ic3-report-ai-cybercrime-losses"
  - title: "ABA Banking Journal: The voice fraud threat to banking"
    url: "https://bankingjournal.aba.com/2026/08/the-voice-fraud-threat-to-banking/"
  - title: "Banking News AI: AI in Fraud Detection in Banking"
    url: "https://www.bankingnewsai.com/ai-fraud-detection"
  - title: "Matellio: Deepfake Detection for Banking"
    url: "https://www.matellio.com/blog/deepfake-detection-for-banking/"
  - title: "Adaptive Security: Business Email Compromise Payment Verification"
    url: "https://www.adaptivesecurity.com/blog/business-email-compromise-payment-verification"
---

Birkaç saniyelik bir ses kaydı veya birkaç fotoğraf, bir kişinin sesini ve görüntüsünü inandırıcı biçimde taklit etmeye yetebiliyor. Bu da finansal dolandırıcılığın en eski yöntemini, yani güvenilen birinin kimliğine bürünmeyi, çok daha ikna edici hâle getiriyor. Bu rehberde gerçek bir vakayı (Arup), resmi kayıtlardaki genel tabloyu, bankaların tespit yaklaşımını ve şirketlerin ödeme onay süreçlerinde alabileceği önlemleri sırasıyla ele alıyoruz. Bireysel korunma için ayrıca [yapay zeka dolandırıcılıklarından korunma](/rehber/yapay-zeka-dolandiriciliklarindan-korunma/) rehberine bakabilirsiniz.

## Arup vakası: toplantıdaki herkes sahteydi

Olay Ocak 2024'te mühendislik şirketi Arup'ın Hong Kong ofisinde yaşandı. Bir finans çalışanı, İngiltere'deki finans direktörü (CFO) adına gelen gizli bir işlem talebinin ardından video konferansa katıldı. [Neural Defend'in derlemesine göre](https://neuraldefend.com/insights/verified-cases/arup-deepfake-video-call-case) toplantıdaki diğer katılımcıların hepsi yapay zeka ile üretilmiş sahte görüntüydü. Çalışan 15 ayrı transferle yaklaşık 25 milyon dolar (200 milyon Hong Kong doları) gönderdi. Tutar kaynaklarda küçük farklarla yazılıyor; bazı kaynaklar 25,6 milyon dolar diyor.

Hong Kong polisi olayı Şubat 2024'te açıkladı, Arup ise mağdur olduğunu Mayıs 2024'te doğruladı. Vakanın en öğretici yanı, [Axlio'nun da vurguladığı gibi](https://www.axlio.com/insights/arup-deepfake-scam/), çalışanın olağandışı bir e-postadan şüphelenip video görüşme talep etmesi, ama görüşmenin kendisinin de sahte çıkmasıdır. Yani doğrulama kanalı da ele geçirilmişti. Olay 2024'e ait olsa da bu mantık bugün de geçerli.

## Resmi rakamlarla genel tablo

Abd'de FBI, 2025 yılı İnternet Suç Raporu'nda yapay zekayı ilk kez ayrı bir kategori olarak izledi. [PPC Land'in aktardığı verilere göre](https://ppc.land/ai-linked-fraud-costs-americans-893-million-fbi-reports-for-2025/) rapor toplam 1.008.597 şikâyet ve 20,877 milyar dolar kayıp içeriyor. Bunların 22.364'ü yapay zeka ile ilişkilendirildi ve bu şikâyetlerdeki kayıp 893.346.472 dolar oldu. Yatırım dolandırıcılığında yapay zeka kaynaklı kayıp 632 milyon doların üzerinde; toplam yatırım dolandırıcılığı kaybı ise 8,6 milyar dolar. Ayrıca [bir haber sitesinin aktardığına göre](https://www.ainexusdaily.com/article/fbi-2025-ic3-report-ai-cybercrime-losses) deepfake'li iş görüşmeleri nedeniyle 13 milyon dolar kayıp bildirildi.

Bu rakamları okurken bir sınırı akılda tutun: Veriler yalnızca mağdurun yapay zekanın kullanıldığını fark edip bildirdiği vakaları kapsıyor. Gerçek tablonun daha yüksek olması bekleniyor.

## Bankalar sahte sesi nasıl yakalamaya çalışıyor

Ses, bankacılıkta uzun süredir hem müşteri doğrulamasında hem de çağrı merkezlerinde kullanılan bir kanal. Üretken yapay zeka bu güveni zayıflattı. [Banking News AI'ın](https://www.bankingnewsai.com/ai-fraud-detection) aktardığına göre ABD'deki 120 büyük bankanın 2024 ve 2025 yıllık 10-K raporları üzerine yapılan bir incelemede, üretken yapay zekanın özellikle ses tanıma ve kimlik doğrulamada dolandırıcılığı tespit etmeyi zorlaştırdığı belirtiliyor.

Karşı hamle tek bir araçtan oluşmuyor. [ABA Banking Journal'ın Ağustos 2026 tarihli analizine göre](https://bankingjournal.aba.com/2026/08/the-voice-fraud-threat-to-banking/) bankalar, gerçek zamanlı çalışarak üretilmiş sesi insan sesinden ayırmaya yönelik araçları değerlendiriyor. Aynı analiz, derin sahte ses dolandırıcılığının birçok kurum için hâlâ yeni ortaya çıkan bir tehdit olarak görüldüğünü de yazıyor. Yani sektör bu alanda henüz oturmuş bir standarda sahip değil.

Katmanlı yaklaşım öne çıkıyor. [Matellio'nun yazısında](https://www.matellio.com/blog/deepfake-detection-for-banking/) anlatıldığı gibi sahte ses tespiti; ses biyometrisi, arayan numara, davranış sinyalleri ve işlem bağlamıyla birlikte kullanılıyor. Örneğin sesi ikna edici olan bir arayanın, müşterinin alışılmış davranışına uymayan bir transfer istemesi başlı başına bir uyarı işareti sayılabiliyor. Makine öğrenmesi modelleri bu tür örüntü farklarını çok sayıda işlem arasında hızla işaretlemek için kullanılıyor; ancak son kararda çoğu zaman bir insan veya ek bir doğrulama adımı devrede kalıyor. Bankacılıktaki daha geniş uygulamalar için [bankacılıkta yapay zeka](/rehber/bankacilikta-yapay-zeka/) rehberine göz atabilirsiniz.

## Tespitin sınırları

Sahte ses ve görüntü tespit araçları kusursuz değil. Üretim yöntemleri hızla değiştiği için bugün işe yarayan bir dedektörün yarın aynı başarıyı göstermesi garanti edilemez. Araç satıcılarının yazıları da çoğunlukla kendi ürünlerini öne çıkarır; bu nedenle başarı oranı iddialarına temkinli yaklaşmak gerekir. Bu rehberde bu tür oranları bilerek kullanmadık.

Bir diğer sınır, Arup vakasında görüldüğü gibi, saldırının teknik tespitten önce insan sürecini hedeflemesidir. Çalışan baskı altında, gizlilik talebiyle ve tanıdığı yüzlerle karşılaştığında, teknik bir uyarı olmasa bile süreç kurallarının ona yol göstermesi gerekir. Sahte medyanın ipuçları için [deepfake nasıl anlaşılır](/rehber/deepfake-nasil-anlasilir/) rehberi yararlı olabilir, ama ödeme kararını ipuçlarına bırakmamak daha güvenli.

## Şirketler için ödeme onay önlemleri

Ödeme sahtekârlığına karşı en güvenilir savunma, kimlik doğrulamasını görüntü ve sesten ayırmaktır. Aşağıdaki öneriler genel iyi uygulamalardır; kurumunuzun risk yapısına göre uyarlayın. [Adaptive Security'nin ödeme doğrulama yazısı](https://www.adaptivesecurity.com/blog/business-email-compromise-payment-verification) da geri arama ve kontrol listesi gibi yöntemleri öne çıkarıyor.

- **Bağımsız geri arama:** Talebin geldiği e-posta, mesaj veya video bağlantısı yerine, rehberde veya sistemde önceden kayıtlı numaradan talep sahibini arayın. Arayanın verdiği numaraya güvenmeyin.
- **Çift onay:** Belirli bir tutarın üzerindeki veya ilk kez yapılacak ödemeler için iki ayrı yetkilinin onayını zorunlu kılın. Tek kişinin ikna edilmesi yetmesin.
- **Acele ve gizlilik bayrağı:** Acil, gizli veya olağan sürecin dışına çıkmayı isteyen talepleri otomatik olarak ek doğrulamaya yönlendirin. Dolandırıcılığın ortak özelliği genellikle baskıdır.
- **Hesap değişikliği kontrolü:** Tedarikçi veya alıcı hesap bilgisi değişikliklerini, ödeme talebinden ayrı bir kanalda ve kayıtlı iletişim bilgisiyle doğrulayın.
- **Video görüşme tek başına kanıt değil:** Toplantıda yüzünü gördüğünüz kişinin talimatını, yazılı ve yetkili bir onay zinciri olmadan yeterli saymayın.
- **Eğitim ve tatbikat:** Finans ekibine sahte ses ve görüntü örnekleri gösterin; yönetici kimliğine bürünme senaryolarını kısa tatbikatlarla deneyin. Çalışanın şüphelendiğinde süreci durdurabilmesi ve bunun için cezalandırılmayacağını bilmesi önemlidir.

Bu önlemlerin hiçbiri yapay zeka gerektirmiyor. Maliyetleri düşük, ama disiplin istiyorlar. Finans ekiplerinin yapay zekayı güvenle kullanması için [finans ekipleri için yapay zeka](/rehber/finans-ekipleri-icin-yapay-zeka/) rehberi de bir başlangıç noktası olabilir.

## Nereden başlamalı

İlk adım olarak mevcut ödeme akışınızı çıkarın ve her adımda kimin, hangi kanaldan, neye dayanarak onay verdiğini yazın. Eğer onay yalnızca bir e-posta, telefon veya görüntülü görüşmeye dayanıyorsa, o nokta Arup vakasındaki açığa benzer bir riski taşıyor demektir. Ardından yukarıdaki geri arama ve çift onay kurallarını yazılı hâle getirin ve yöneticilerin de bu kurallara tabi olduğunu açıkça duyurun. Kuralın yönetici talebine karşı işlemesi, bu saldırıların asıl hedefini ortadan kaldırır.

Bireysel olarak aynı mantığı uygulamak mümkün: tanıdığınız birinden acil para isteyen bir ses veya görüntü gelirse, kapatıp o kişiyi bilinen numarasından arayın. Ayrıntılar için [yapay zeka dolandırıcılıklarından korunma](/rehber/yapay-zeka-dolandiriciliklarindan-korunma/) rehberine bakın. Bu yazı hukuki veya yatırım tavsiyesi değildir; kurumsal süreç tasarımında bilgi güvenliği ve hukuk uzmanlarınıza danışın.
