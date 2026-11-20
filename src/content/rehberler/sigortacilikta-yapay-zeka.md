---
title: "Sigortacılıkta yapay zeka: hasar, fiyatlama ve müşteri hizmetleri rehberi"
description: "Sigortacılıkta yapay zeka hasar fotoğraflarında, sahtekârlık tespitinde, fiyatlamada ve müşteri hizmetlerinde nasıl kullanılıyor; ayrımcılık riski ve düzenleyici yaklaşımlar neler, kaynaklarıyla anlatıldı."
date: 2026-11-20
summary:
  - "Fotoğrafla hasar değerlendirme hızlanıyor, ancak yapay zekayla değiştirilmiş fotoğraflar sigortacılar için ciddi bir sahtekârlık riski haline geldi."
  - "Fiyatlamada vekil değişkenler üzerinden ayrımcılık riski var; ABD'de NAIC bülteni sigortacıyı kullandığı yapay zeka modellerinden sorumlu tutuyor."
  - "Sohbet robotları müşteri hizmetlerinde işe yarıyor, ancak rakamların çoğu satıcı kaynaklı; kendi verinizle küçük bir pilotla başlamak daha güvenli."
level: Orta
topic: İş ve kariyer
terms: [bilgisayarli-goru, deepfake, yapay-zeka-onyargisi, sohbet-botu, aciklanabilir-yapay-zeka]
sector: finans
faq:
  - q: "Yapay zeka hasar dosyasını tek başına karara bağlayabilir mi?"
    a: "Teknik olarak mümkün olsa da pratikte basit ve net dosyalarla sınırlı tutmak daha güvenli; karmaşık, yaralanmalı veya hukuki süreçli dosyalarda insan eksperi devrede kalmalı. ABD'deki NAIC bülteni, yapay zeka kararı yalnızca destekliyorsa bile hasar süreçlerini kapsamına alıyor."
  - q: "Sigorta fiyatlamasında yapay zeka ayrımcılık yapabilir mi?"
    a: "Evet, model doğrudan hassas bir değişken kullanmasa bile vekil değişkenler üzerinden dolaylı ayrımcılık ortaya çıkabilir. Bu yüzden ABD'de bazı eyaletler ve düzenleyiciler ayrımcılık testi ve yönetişim çerçevesi talep ediyor."
  - q: "Hasar fotoğrafını kırpmak veya parlaklığını artırmak sorun çıkarır mı?"
    a: "Sahtekârlık tespit sistemleri bu tür basit düzenlemeleri de şüpheli işaretleyebiliyor. En güvenlisi fotoğrafı düzenlemeden, orijinal haliyle göndermek ve gerekirse sigorta şirketinizle iletişime geçmek."
sources:
  - title: "Appraisal Engine: Insurance Claim Photo Evidence Is Under New Scrutiny"
    url: "https://appraisalengine.com/company/insurance-claim-photo-evidence/"
  - title: "Ventavid: AI Insurance Fraud Statistics 2026"
    url: "https://www.ventavid.com/blog/ai-insurance-fraud-statistics-2026"
  - title: "Anadolu Ajansı: Yapay zeka sigorta sektöründe sahte hasar taleplerini tespit ediyor"
    url: "https://www.aa.com.tr/tr/bilim-teknoloji/yapay-zeka-sigorta-sektorunde-sahte-hasar-taleplerini-tespit-ediyor/3302350"
  - title: "Haber7: Sigortada yapay zeka vurgunu"
    url: "https://ekonomi.haber7.com/ekonomi/haber/3666835-sigortada-yapay-zeka-vurgunu-15-saniyede-milyonluk-hasar-uretiyorlar"
  - title: "Katılım Analiz: Bereket Sigorta'dan hasar yönetiminde yapay zeka destekli yeni dönem"
    url: "https://katilimanaliz.com/2026/08/17/bereket-sigortadan-hasar-yonetiminde-yapay-zeka-destekli-yeni-donem/"
  - title: "Insurance Business: AI in the boardroom"
    url: "https://www.insurancebusinessmag.com/us/news/technology/ai-in-the-boardroom-governance-that-protects-without-paralysing-584168.aspx"
  - title: "Water Street Company: What the NAIC Model Bulletin Means for Insurance AI"
    url: "https://www.waterstreetcompany.com/what-the-naic-model-bulletin-means-for-insurance-ai/"
  - title: "Perspective: AI in Insurance Customer Service in 2026"
    url: "https://getperspective.ai/blog/ai-insurance-customer-service-2026-state-of-conversational-carriers"
---

Sigorta, yapay zekanın en çok veriyle beslenen ve en çok tartışılan uygulama alanlarından biri: hasar fotoğrafları, poliçe kayıtları ve müşteri yazışmaları hem fırsat hem risk üretiyor. Bu rehber, sigortacılıkta yapay zekanın dört ana kullanım alanını (hasar, sahtekârlık, fiyatlama, müşteri hizmetleri) kaynaklarıyla ele alıyor; hangi işe yaradığını, nereden başlanabileceğini ve nerede dikkat edilmesi gerektiğini anlatıyor. Çoğu rakam sektör araştırmalarından ve satıcı yayınlarından geliyor, bu nedenle kendi kararlarınızda mutlaka birincil kaynakla ve uzmanla doğrulayın. Metin hukuki veya yatırım görüşü değildir. Genel finans bağlamı için [Finansta yapay zeka](/sektor/finans/) sayfasına da göz atabilirsiniz.

## Fotoğrafla hasar değerlendirme

Genel mantık şöyle: müşteri hasarın fotoğrafını veya videosunu yükler, bilgisayarlı görü (computer vision) modeli hasarlı bölgeleri belirler ve onarım maliyeti için ön bir tahmin üretir. Uzman (eksper) bu tahmini onaylar ya da düzeltir. Amaç, basit dosyalarda bekleme süresini kısaltmak.

Türkiye'den bir örnek: Anadolu Ajansı'nın Ağustos 2024 tarihli haberinde Türkiye Sigorta Bilgi Teknolojileri Genel Müdür Yardımcısı Çiğdem Kılıç, yapay zekanın hasar taleplerinin doğruluğunu hızla analiz edebildiğini ve bunun her yıl milyarlarca dolarlık tasarruf anlamına geldiğini söyledi ([Anadolu Ajansı](https://www.aa.com.tr/tr/bilim-teknoloji/yapay-zeka-sigorta-sektorunde-sahte-hasar-taleplerini-tespit-ediyor/3302350)). Haber 2024 tarihli olduğundan güncel bir rakam olarak okunmamalı.

Pratik bir kural: tam otomatik karar yalnızca düşük karmaşıklıktaki dosyalarda (örneğin net sorumluluklu, basit hasarlar) denenmeli. Yaralanma, uyuşmazlık ve hukuki süreç içeren dosyalarda insan değerlendirmesini devrede tutmak daha güvenli.

## Değiştirilmiş fotoğraf sorunu

Aynı teknoloji sahtekârlığı da kolaylaştırıyor. Verisk'in Mart 2026 tarihli araştırmasına göre tüketicilerin yüzde 36'sı bir hasar fotoğrafını değiştirmeyi düşünebileceğini söylüyor; sigortacıların yüzde 98'i yapay zeka düzenleme araçlarının dijital sahtekârlığı artırdığını belirtiyor. Sigortacıların yalnızca yüzde 32'si derin sahteliği (deepfake) yüksek güvenle tespit edebildiğini söylüyor ([Appraisal Engine](https://appraisalengine.com/company/insurance-claim-photo-evidence/)). Görsel manipülasyonu daha yakından anlamak için [deepfake nasıl anlaşılır](/rehber/deepfake-nasil-anlasilir/) rehberine bakabilirsiniz.

Bu işin bir yan etkisi de var: tespit sistemleri, dürüst müşterilerin fotoğrafı kırpmasını veya parlaklığını artırmasını da şüpheli işaretleyebiliyor (aynı kaynak). Yani yanlış pozitif riski gerçek. Müşteri olarak fotoğrafı düzenlemeden göndermek, sigortacı olarak ise itiraz ve ikinci inceleme yolunu açık tutmak mantıklı.

Türkiye'de Haber7'de yer alan bir haberde, FraudFlow adlı şirketin analizlerinde yapay zekayla manipüle edilmiş görseller içeren 39 şüpheli hasar dosyasının bulunduğu, bu dosyaların toplam tutarının yaklaşık 6,5 milyon TL olduğu ve sahte cam hasarı fotoğraflarının öne çıktığı aktarılıyor ([Haber7](https://ekonomi.haber7.com/ekonomi/haber/3666835-sigortada-yapay-zeka-vurgunu-15-saniyede-milyonluk-hasar-uretiyorlar)). Haberin tarihi sayfada görülmediği için güncel bir tablo olarak değil, örnek olarak okuyun.

## Sahtekârlık tespiti

Sahtekârlık tespiti iki yönlü bir yarış: saldırganlar da yapay zeka kullanıyor. Verisk verilerini aktaran bir derlemeye göre sigortacıların yüzde 66'sı dijital medya sahtekârlığının sık veya çok sık fark edilmeden kaldığını düşünüyor. Aynı derlemede sigortacıların yüzde 65'i üçüncü taraf yapay zeka tespit araçlarını, yüzde 50'si içte geliştirilen araçları kullandığını, yüzde 44'ü ise hâlâ manuel incelemeye güvendiğini belirtiyor ([Ventavid](https://www.ventavid.com/blog/ai-insurance-fraud-statistics-2026)). Bunlar ikincil bir derlemeden alınan rakamlar.

Türkiye'den somut bir adım: Bereket Sigorta, Ağustos 2026'da kurum içinde geliştirdiği yapay zeka destekli bir medya takip sisteminin kaza haberlerini taradığını, bunları poliçe ve hasar kayıtlarıyla eşleştirdiğini ve olası suistimali hasar dosyası açılmadan işaretlediğini duyurdu ([Katılım Analiz](https://katilimanaliz.com/2026/08/17/bereket-sigortadan-hasar-yonetiminde-yapay-zeka-destekli-yeni-donem/)).

Satıcıların sunduğu yüksek hassasiyet ve düşük yanlış pozitif oranlarını, bağımsız bir doğrulama görmediyseniz yalnızca pazarlama iddiası olarak değerlendirin. Şüpheli işaretlenen dosyanın otomatik reddedilmediğinden, bir insan incelemesine gittiğinden emin olun. Finansal dolandırıcılığın bankacılık ve bireysel tarafı için [yapay zeka ile finansal dolandırıcılık](/rehber/yapay-zeka-ile-finansal-dolandiricilik/) rehberi de faydalı olabilir.

## Risk fiyatlama ve ayrımcılık riski

Fiyatlamada yapay zeka, daha çok değişkeni birlikte değerlendirerek risk tahmini yapıyor. Sorun, modelin doğrudan kullanmadığı hassas özelliklerin vekil değişkenler (proxy) üzerinden sonuca sızabilmesi. Hukuk akademisyeni Daniel Schwarcz, Iowa Law Review'de yayımlanmış araştırmasına dayanarak vekil değişkenler üzerinden ayrımcılığın düzenleyiciler için denetlemesi zor olduğunu ve fiyatlamada makine öğrenimi kullanımını sınırlamanın bir seçenek olabileceğini savunuyor ([Insurance Business](https://www.insurancebusinessmag.com/us/news/technology/ai-in-the-boardroom-governance-that-protects-without-paralysing-584168.aspx)). Önyargının nasıl oluştuğunu [kredi skorlamada yapay zeka](/rehber/kredi-skorlamada-yapay-zeka/) rehberinde benzer bir çerçevede de bulabilirsiniz.

Düzenleyici tarafta tablo karışık. Aynı kaynağa göre Colorado 2021'de ayrımcılık testi zorunluluğu getirdi, ancak 2026 ortası itibarıyla hiçbir sigorta hattı için test düzenlemesi yürürlükte değil. Başka kaynaklar uygulama tarihlerini farklı aktarıyor; bu nedenle Colorado'daki güncel durumu resmi metinden kontrol etmek gerekir.

Türkiye'de sigorta fiyatlamasında yapay zekayla ilgili özel bir düzenleme konusunda kesin bir şey söylemek mümkün değil. Kişisel verilerin işlenmesi bakımından genel çerçeve için [KVKK ve yapay zeka araçları](/rehber/kvkk-ve-yapay-zeka-araclari/) rehberine, kendi durumunuz için ise sigorta şirketinizin uyum birimine veya bir hukuk uzmanına başvurun.

## Düzenleyici yaklaşım: NAIC bülteni

ABD'de sigorta düzenleyicilerinin ortak çatı kuruluşu NAIC, "Use of Artificial Intelligence Systems by Insurers" başlıklı model bülteni 4 Aralık 2023'te kabul etti. Bülten yazılı bir yapay zeka sistemleri programı, yönetişim, risk kontrolü, üçüncü taraf denetimi ve belgelendirme istiyor. Sigortacı, yapay zeka aracını satın almış olsa bile sorumlu kalıyor ([Water Street Company](https://www.waterstreetcompany.com/what-the-naic-model-bulletin-means-for-insurance-ai/)).

Birçok eyalet bülteni benimsediğini duyurdu; ancak benimseyen yargı alanı sayısı kaynaklara göre değişiyor. Güncel listeyi NAIC'in kendi haritasından doğrulayın. AB'deki yaklaşım için [AB Yapay Zeka Yasası ve Türkiye](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/) rehberine bakabilirsiniz; yüksek riskli yükümlülüklerin takvimi konusunda kaynaklar net değil, resmi metni kontrol edin.

## Müşteri hizmetleri ve poliçe işlemleri

Sohbet robotları (chatbot) poliçe sorguları, ilk hasar bildirimi ve sık sorulan sorularda kullanılıyor. Bir satıcı blogunda aktarılan örneklere göre Lemonade'in yapay zeka asistanı AI Jim hasarların yaklaşık yüzde 40'ını konuşma yoluyla anında işliyor; USAA, Eva asistanıyla üyelere kendi kendine işlem imkânı sunuyor; State Farm ise müşteriye doğrudan bot vermek yerine temsilcilere yapay zeka destekli bilgi asistanı veriyor ([Perspective](https://getperspective.ai/blog/ai-insurance-customer-service-2026-state-of-conversational-carriers)). Kaynak bir yazılım satıcısı olduğu için bu rakamları şirketlerin kendi duyurularıyla karşılaştırmadan referans almayın.

İki farklı model dikkat çekiyor: botu müşteriye doğrudan açmak ya da yapay zekayı yalnızca çalışanın aracı olarak kullanmak. İkincisi, yanlış cevabın müşteriye ulaşma riskini azaltıyor. Türkiye'de müşteri hizmetlerinde yapay zeka kullanımına dair burada paylaşacak, doğrulanmış bir örnek bulunmuyor.

## Nasıl başlanır

- **Dar bir süreç seçin.** Örneğin düşük tutarlı, basit hasarlar veya sık sorulan poliçe soruları ile başlayın.
- **İnsan denetimini tasarlayın.** Reddedilen veya şüpheli işaretlenen her dosya için itiraz ve insan incelemesi yolu olsun.
- **Kayıt tutun.** Hangi model, hangi veriyle, hangi kararı destekledi; NAIC yaklaşımındaki belgelendirme beklentisi bu yönde.
- **Ayrımcılığı test edin.** Fiyatlama modellerinde sonuçları gruplar arasında karşılaştırın ve [açıklanabilir yapay zeka](/rehber/finans-sektorunde-yapay-zeka-duzenlemeleri/) ilkelerini gözetin.
- **Satıcı iddialarını sorgulayın.** Doğruluk ve tasarruf oranlarını kendi verinizle küçük bir pilotta ölçün.

## Sınırlar ve dikkat edilecekler

Yapay zeka sigortacılıkta hız ve tutarlılık sağlayabilir, ancak üç sınır belirgin: sahte içerik üretimi aynı hızla ilerliyor, fiyatlamada dolaylı ayrımcılık denetlemesi zor ve müşteriye dönük otomasyon yanlış cevapta sorumluluğu ortadan kaldırmıyor. Kendi poliçeniz veya hasar dosyanızla ilgili bir uyuşmazlıkta yapay zeka raporuna dayalı karara itiraz etmek istiyorsanız, sigorta şirketinden gerekçe isteyin ve gerekirse bir hukuk uzmanına danışın.
