---
title: "Fabrikalarda enerji verimliliği ve yapay zeka: tahmin, tasarruf, destekler ve ISO 50001"
description: "Yapay zeka fabrikada enerji tüketimini nasıl tahmin eder ve optimize eder? Kaynaklı tasarruf oranları, Türkiye'deki hibe destekleri, ISO 50001 ve veri toplamaya başlama adımları."
date: 2026-11-20
summary:
  - "Yapay zeka enerji tüketimini tahmin edip anormal sapmaları erken yakalayabilir, ancak bağımsız doğrulanmış tek bir tasarruf oranı yoktur."
  - "Türkiye'de EKA, VAP ve KOSGEB gibi programlar enerji verimliliği yatırımlarına hibe veya destek sunuyor; şartlar resmi duyurularla teyit edilmelidir."
  - "Başlamak için mevcut elektrik tüketim verileri ve ISO 50001'in referans (baseline) mantığı yeterli bir başlangıç noktasıdır."
level: Orta
topic: Teknik
terms: [makine-ogrenmesi, yapay-zeka, egitim-verisi, aciklanabilir-yapay-zeka]
sector: sanayi
faq:
  - q: "Yapay zeka bir fabrikanın enerji tüketimini ne kadar azaltır?"
    a: "Bağımsız olarak doğrulanmış tek bir oran yok. Uluslararası Enerji Ajansı (IEA) enerji yoğun sektörlerde enerji maliyetlerinde 3-10 yüzde puanı, enerji talebinde ise yaklaşık yüzde 2-6 ek tasarruf olasılığından söz ediyor; gerçek sonuç tesise göre değişir."
  - q: "Yapay zeka projesine başlamak için yeni sensör almak şart mı?"
    a: "Şart değil. Almanya'daki bir imalat şirketi vaka çalışmasında mevcut geçmiş elektrik tüketim verileriyle bir tahmin ve anomali tespiti uygulaması kurulabildi; sensör yatırımı daha sonra ayrıntı gerektiğinde düşünülebilir."
  - q: "ISO 50001 zorunlu mu?"
    a: "Yönetmelik kapsamındaki bazı endüstriyel işletmeler için ISO 50001 kurulumu ve belgelendirmesi yasal yükümlülük olarak tanımlanıyor. Yükümlülükler tüketim eşiklerine göre ayrı ayrı doğduğundan kendi tesisinizin durumunu mevzuat metninden veya bir uzmandan kontrol edin."
sources:
  - title: "IEA: Key Questions on Energy and AI, Executive summary"
    url: "https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary"
  - title: "IEA: Energy and AI (PDF)"
    url: "https://iea.blob.core.windows.net/assets/de9dea13-b07d-42c5-a398-d1b3ae17d866/EnergyandAI.pdf"
  - title: "ScienceDirect: Integrating AI into energy management, German manufacturing company case study"
    url: "https://www.sciencedirect.com/science/article/pii/S2666546825001089"
  - title: "Faclon: AI-enabled Energy Demand Forecasting & Tariff Optimization"
    url: "https://www.faclon.com/case-study/ai-enabled-energy-demand-forecasting-tariff-optimization-94-4-prediction-accuracy-447k-annual-savings-major-cement-manufacturer"
  - title: "Anadolu Ajansı: Enerji verimliliği ve karbon azaltımına yeni hibe desteği geliyor"
    url: "https://www.aa.com.tr/tr/ekonomi/enerji-verimliligi-ve-karbon-azaltimina-yeni-hibe-destegi-geliyor/3979586"
  - title: "Apsis Danışmanlık: KOSGEB Yeşil Sanayi Destek Programı 2026"
    url: "https://www.apsisdanismanlik.com/blog/kosgeb-yesil-sanayi-destek-programi-2026/"
  - title: "5627 Sayılı Enerji Verimliliği Kanunu kimleri kapsar"
    url: "https://halilbakirci.av.tr/5627-enerji-verimliligi-kanunu-kimleri-kapsar-2026/"
  - title: "Algorithms: Intelligent Computational Modeling of ISO 50001 Energy Performance Indicators"
    url: "https://doi.org/10.3390/a19070533"
---

Fabrikalarda enerji faturası hem ölçülmesi hem de düşürülmesi istenen bir maliyet kalemi. Yapay zeka bu alanda üç işe yarıyor: tüketimi önceden tahmin etmek, normal dışı davranışı erken yakalamak ve üretim parametrelerini enerji açısından ayarlamak. Bu rehber, kaynaklarda görülen tasarruf rakamlarını abartmadan aktarıyor, Türkiye'deki destekleri ve ISO 50001'i özetliyor, veri toplamaya nasıl başlayabileceğinizi anlatıyor. Teşvik şartları ve yasal yükümlülükler için son sözü her zaman resmi duyuru ve mevzuat metni söyler.

## Yapay zeka enerji yönetiminde ne yapar

Enerji tarafında yapay zekanın en yaygın kullanımı, geçmiş tüketim verilerinden [makine öğrenmesi](/sektor/sanayi/) modelleriyle gelecekteki tüketimi tahmin etmektir. Almanya'daki bir imalat şirketini inceleyen [akademik vaka çalışmasında](https://www.sciencedirect.com/science/article/pii/S2666546825001089) bir tahmin modeli ile anomali tespiti modeli birleştiriliyor. Amaç pik yükleri azaltmak. Tahmin modeli öngörülen tüketimi gerçek zamanlı ölçümlerle karşılaştırıyor ve bir erken uyarı sistemi gibi çalışıyor. Çalışmada somut bir tasarruf yüzdesi verilmiyor; yani bu örnek yöntemin nasıl kurulduğunu gösteriyor, getirisini değil.

İkinci kullanım, üretim sürecinin kendisini enerji açısından optimize etmektir. Burada tahmin yetmez, makinelerin ve proses ayarlarının da kontrol edilebilmesi gerekir. Arıza öngörüsüyle birleşen senaryolar için [kestirimci bakım](/rehber/kestirimci-bakim-nedir/) rehberine, fiziksel tesisin sanal modelle izlenmesi için dijital ikiz rehberine bakabilirsiniz.

## Kaynaklı tasarruf rakamları ne söylüyor

Rakamlar kullanılan ölçüte göre değişiyor; bu yüzden karşılaştırırken neyin ölçüldüğüne dikkat edin.

- IEA'nın [Key Questions on Energy and AI özetinde](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) yapay zeka destekli üretim süreci optimizasyonunun enerji yoğun sektörlerde enerji maliyetlerini 3 ila 10 yüzde puanı azaltabileceği belirtiliyor. Bu, enerji maliyeti için bir ölçüt.
- IEA'nın 2025 tarihli [Energy and AI raporunda](https://iea.blob.core.windows.net/assets/de9dea13-b07d-42c5-a398-d1b3ae17d866/EnergyandAI.pdf) dijital ve otomatik kontrolün yaygın olduğu enerji yoğun sektörlerde yapay zekanın enerji talebinde yaklaşık yüzde 2-6 ek tasarruf sağlayabileceği yazıyor. Bu da enerji talebi için bir ölçüt.
- Bir [sistematik inceleme](https://doi.org/10.3390/a19070533), ISO 50001 bağlamında yapay zeka tekniklerinin yüzde 37-40'a varan tasarruf raporladığını aktarıyor. Bu üst sınır birçok farklı çalışmadan derlenmiş bir aralık; tek bir fabrika için beklenti olarak okumayın.

Yani yüzde 3-10 yüzde puanı ile yüzde 2-6 aynı şey değil, yüzde 37-40 ise derlemenin en uç sonucu. Bağımsız olarak doğrulanmış tek bir "yapay zeka fabrikada şu kadar tasarruf sağlar" oranı yok.

## Satıcı vaka çalışmalarını nasıl okumalı

Satıcıların yayımladığı vakalar genellikle çok daha çarpıcı rakamlar içeriyor. Örneğin Faclon Labs'ın bir çimento üreticisi için yayımladığı [vaka çalışmasında](https://www.faclon.com/case-study/ai-enabled-energy-demand-forecasting-tariff-optimization-94-4-prediction-accuracy-447k-annual-savings-major-cement-manufacturer) tahmin doğruluğunun manuel yöntemdeki yüzde 72,2'den yüzde 94,4'e çıktığı ve yıllık 447 bin dolar tasarruf sağlandığı iddia ediliyor. Kaynak satıcının kendisi olduğu için bu rakamların bağımsız bir doğrulaması yok. Bu tür bir örneği bir olasılık olarak değerlendirin, hedef olarak değil. Tedarikçilerle görüşürken benzer ölçekte, aynı sektörde ve ölçüm yöntemi açıklanmış referanslar isteyin.

## Veri toplamaya nereden başlanır

Almanya vaka çalışmasının dikkat çeken yanı, uygulamanın [mevcut geçmiş elektrik tüketim verileriyle](https://www.sciencedirect.com/science/article/pii/S2666546825001089) yapılabilmesi. Bu, yeni sensör yatırımı yapmadan bir başlangıç noktası olabileceğini gösteriyor. Pratik bir sıra şöyle olabilir:

1. **Mevcut veriyi toplayın.** Elektrik faturalarınızı, sayaç kayıtlarını ve varsa enerji izleme sistemi çıktılarını tek yerde birleştirin. Zaman damgalarının tutarlı olduğunu kontrol edin.
2. **Üretim verisiyle eşleştirin.** Tüketimi vardiya, ürün tipi ve üretim miktarı gibi bağlamla ilişkilendirmezseniz, tüketimdeki artışın nedenini ayırt etmek zorlaşır.
3. **Referansı belirleyin.** Normal tüketimin ne olduğunu tanımlamadan sapmayı ölçemezsiniz. ISO 50001'in baseline ve enerji performans göstergesi (EnPI) mantığı bunun için hazır bir çerçeve sunuyor.
4. **Küçük bir pilot seçin.** Tek bir hat veya tek bir büyük tüketici üzerinde tahmin ve anomali tespiti deneyin; sonucu önce kendi verinizle ölçün.
5. **Gerekirse ölçümü sıklaştırın.** Bir [satıcı blogu](https://buberka.com/blog/surdurulebilir-uretim-enerji-izleme-ile-yesil-donusum), enerji izleme sistemlerinin IoT sensörleriyle topladığı verileri yapay zekayla işleyerek optimizasyon önerileri çıkardığını anlatıyor. Bu yöntem genel bilgi olarak geçerli, ancak kaynağın ticari bir yazı olduğunu aklınızda tutun.

Bütçesi sınırlı işletmeler için [KOBİ sanayiciler için yapay zeka](/rehber/kobi-sanayiciler-icin-yapay-zeka/) rehberi de faydalı olabilir.

## ISO 50001 ve yapay zeka birlikte nasıl çalışır

ISO 50001, enerji yönetim sistemi standardıdır. Yukarıda anılan [sistematik inceleme](https://doi.org/10.3390/a19070533) algoritmaların dinamik referans oluşturmayı, anormal tüketimin erken tespitini ve sürekli optimizasyonu güçlendirebileceğini belirtiyor. Aynı inceleme veri kalitesi, model yorumlanabilirliği ve standardizasyon sorunlarının sürdüğünü de söylüyor. Başka bir deyişle yapay zeka standardın yerine geçmiyor; standardın istediği ölçme, izleme ve iyileştirme döngüsünü besliyor.

Türkiye'de yasal çerçeve de önemli. Bir [hukuk bürosu yazısına](https://halilbakirci.av.tr/5627-enerji-verimliligi-kanunu-kimleri-kapsar-2026/) göre yönetmeliğin 8/2 maddesi kapsamındaki endüstriyel işletmeler için TS EN ISO 50001 Enerji Yönetim Sistemi kurulup belgelendirilmesi yasal yükümlülük. Aynı yazı enerji yöneticisi, bildirim, etüt ve ISO 50001 yükümlülüklerinin tüketim eşiklerine göre ayrı ayrı doğduğunu belirtiyor. Tesisinizin hangi yükümlülüğün kapsamında olduğunu mevzuat metninden veya bir enerji yönetimi uzmanından teyit edin.

## Türkiye'de enerji verimliliği destekleri

Yapay zeka projeniz bir enerji verimliliği yatırımı olarak tanımlanabiliyorsa, aşağıdaki destekler gündeme gelebilir. Tutarlar ve şartlar değişebildiği için başvurudan önce resmi duyuruyu okuyun.

- **EKA Destek Programı:** Enerji ve Tabii Kaynaklar Bakanlığı Haziran 2026'da programı başlattı. [Anadolu Ajansı'na göre](https://www.aa.com.tr/tr/ekonomi/enerji-verimliligi-ve-karbon-azaltimina-yeni-hibe-destegi-geliyor/3979586) sanayi tesisleri, ticari binalar ve hizmet işletmeleri enerji yoğunluğunu, spesifik enerji tüketimini veya karbon yoğunluğunu azaltırsa enerji faturalarının yüzde 30'una kadar nakdi hibe alabiliyor. Sanayide ilk 10 tesis ve hizmet/ticari binalarda ilk 10 işletme olmak üzere toplam 20 işletmeye hibe verilmesi planlanıyor. Kaynaklar üst limiti farklı biçimlerde yazdığı için tutarı resmi duyurudan kontrol edin.
- **VAP (Verimlilik Artırıcı Proje) Destek Programı:** Aynı haberde program, enerji verimliliği yatırımlarının yüzde 30'una kadar, 27.092.663 TL üst limitle hibe sağlıyor.
- **KOSGEB Yeşil Sanayi Destek Programı:** Bir [danışmanlık sitesine göre](https://www.apsisdanismanlik.com/blog/kosgeb-yesil-sanayi-destek-programi-2026/) program Dünya Bankası kredisiyle yürütülüyor ve imalatçı KOBİ'lere yüzde 70 oranında, faizsiz ve geri ödemeli destek sunuyor. Proje başına üst limit 7 milyon TL, asgari proje bütçesi 1 milyon TL, süre 12 ay. Resmi KOSGEB sayfasından doğrulayın.

Kendi sektörünüzdeki daha geniş tabloyu [Türkiye'de sanayide yapay zeka](/rehber/turkiyede-sanayide-yapay-zeka/) rehberinde bulabilirsiniz.

## Riskler ve sınırlar

- **Kanıt kalitesi düşük olabilir.** En yüksek rakamlar satıcı ve blog kaynaklarından geliyor; bağımsız doğrulama sınırlı.
- **Veri kalitesi belirleyicidir.** Eksik, hatalı veya tutarsız ölçümle eğitilen bir model yanlış alarm üretir ya da gerçek sapmayı kaçırır.
- **Yorumlanabilirlik gerekir.** Bir uyarının neden verildiğini operatörler anlamazsa öneriler uygulanmaz. Model yorumlanabilirliği, ISO 50001 incelemesinde de açık sorun olarak geçiyor.
- **Ölçüt karışıklığı yaşanabilir.** Enerji maliyeti, enerji talebi ve bina kapsamlı sonuçlar birbirine karıştırılmamalı. Örneğin Schneider Electric araştırmasındaki rakamlar fabrika değil bina için.
- **Teşvik şartları değişebilir.** Asgari proje bedeli, asgari tasarruf ve başvuru dönemleri resmi duyuruyla teyit edilmeden planlanmamalı.

## Kısa bir yol haritası

Önce verinizi toplayın ve referansınızı belirleyin. Sonra tek bir hatta küçük bir pilot kurun ve sonucu kendi ölçümünüzle doğrulayın. Pilot işe yararsa, destek programlarının şartlarını resmi kaynaklardan okuyup projeyi bir enerji yönetim sistemi içine yerleştirin. Hukuki yükümlülükler ve hibe şartları için bir enerji verimliliği danışmanı veya mali müşavirle çalışmak, hatalı başvuru riskini azaltır.
