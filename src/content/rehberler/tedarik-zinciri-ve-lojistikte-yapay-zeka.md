---
title: "Tedarik zinciri ve lojistikte yapay zeka: ne işe yarar, nereden başlanır"
description: "Talep tahmini, rota optimizasyonu, depo otomasyonu ve tedarikçi riski izlemede yapay zekanın kaynakla doğrulanmış örnekleri, sınırları ve KOBİ'ler için pratik başlangıç adımları."
date: 2026-11-20
summary:
  - "Yapay zeka tedarik zincirinde tahmin, rota, depo ve tedarikçi riski alanlarında kullanılıyor; en iyi belgelenen örnek UPS'in ORION sistemi."
  - "Blog ve derleme sitelerindeki yüksek yüzde rakamları çoğunlukla birincil kaynağa dayanmıyor; kendi verinizle küçük bir pilotta ölçmek daha güvenilir."
  - "KOBİ'ler için en mantıklı yol, tek bir sorunu seçip başarı ölçütünü baştan tanımlamak ve devlet desteklerini güncel koşullarıyla kontrol etmek."
level: Orta
topic: İş ve kariyer
terms: [yapay-zeka, makine-ogrenmesi, yapay-zeka-ajani]
sector: sanayi
faq:
  - q: "Küçük bir işletme tedarik zincirinde yapay zekaya nereden başlamalı?"
    a: "Önce en çok zaman veya para kaybettiren tek bir sorunu (örneğin stok tahmini ya da rota planı) seçin ve başarı ölçütünü yazın. Ardından elinizdeki verinin temizliğini kontrol edip küçük bir pilotla başlayın."
  - q: "UPS'in ORION sistemindeki gibi sonuçlar bir KOBİ'de beklenebilir mi?"
    a: "Beklememek daha sağlıklı. Bir derlemeye göre ORION yaklaşık on yıllık geliştirme ve 1 milyar doları aşan yatırımla kuruldu; KOBİ ölçeğinde hazır araçlarla kazanımlar çok daha mütevazı olur."
  - q: "Blog yazılarındaki \"yüzde 30 daha doğru tahmin\" gibi rakamlara güvenilir mi?"
    a: "Birincil araştırmaya dayanmıyorlarsa tek başına karar dayanağı yapmayın. Bu tür rakamları kendi verinizle yapacağınız bir pilotta sınayın."
sources:
  - title: "Inbound Logistics: AI in Supply Chain Management, 2026 Outlook"
    url: "https://www.inboundlogistics.com/articles/ai-in-supply-chain-management-how-useful-will-it-be-in-2026/"
  - title: "Coradvance: How AI Is Transforming US Supply Chain Forecasting"
    url: "https://www.coradvancesolutions.com/blog/ai-transforming-us-supply-chain-forecasting-2026"
  - title: "AI for Supply Chain: UPS cuts 100 million miles annually and saves $300-400M with ORION"
    url: "https://aiforsupplychain.org/case-studies/ups-cuts-100-million-miles-annually-and-saves-300-400m-with-orion-ai-route-optimization"
  - title: "CNBC: Amazon unveils latest warehouse robot as tech giants continue AI layoffs"
    url: "https://www.cnbc.com/2026/06/05/amazon-robot-proteus-warehouse-ai-layoffs.html"
  - title: "Logistics Business: AI Robotics & Automation Showcased at MODEX 2026"
    url: "https://logisticsbusiness.com/materials-handling/automation-systems-shuttles/ai-robotics-automation-showcased-at-modex-2026/"
  - title: "Business Wire: interos.ai 2026 Predictions Report"
    url: "https://www.businesswire.com/news/home/20260121425844/en/interos.ai-2026-Predictions-Report-Finds-Supply-Chains-Are-the-Front-Line-of-a-New-Era-of-Global-Risk"
  - title: "Pikselbayt: Yapay zeka projesi için TÜBİTAK ve KOSGEB destekleri"
    url: "https://pikselbayt.com/blog/yapay-zeka-destek-programlari/"
  - title: "Müşavirler Kulübü: Sanayi Bakanlığı 2026 Yapay Zekâ Destekli Temiz Teknolojiler Teşvik Rehberi"
    url: "https://musavirlerkulubu.com.tr/makale/sanayi-bakanligi-2026-yapay-zeka-destekli-temiz-teknolojiler-tesvik-rehberi"
---

Tedarik zinciri ve lojistik, yapay zekanın hem en somut hem de en çok abartılan kullanım alanlarından biri. Ürünün ne kadar satacağını tahmin etmek, teslimat rotalarını kurmak, deponun içindeki işi hızlandırmak ve tedarikçilerdeki sorunları erkenden görmek bu alanın dört ana başlığı. Bu rehber, her birinin ne işe yaradığını, kaynakla doğrulanabilen uygulamaları, riskleri ve KOBİ'ler için makul bir başlangıç yolunu anlatıyor. Sanayide genel tablo için [Türkiye'de sanayide yapay zeka](/rehber/turkiyede-sanayide-yapay-zeka/) rehberine de göz atabilirsiniz.

## Dört kullanım alanı, tek ortak gereksinim

Bu alanların hepsi [makine öğrenmesi](/sozluk/makine-ogrenmesi/) yöntemlerine dayanır ve hepsinin yakıtı veridir. Talep tahmini geçmiş satışları ve dış sinyalleri okur, rota optimizasyonu adres, trafik ve zaman penceresi gibi kısıtları birlikte çözer, depo sistemleri stok ve sipariş akışını yönetir, tedarikçi izleme ise haber, finansal ve ilişki verilerini tarar. Verisi dağınık, eksik veya güvenilmez bir işletmede hiçbiri iyi çalışmaz. Bu yüzden asıl iş çoğu zaman algoritmayı seçmek değil, veriyi toparlamaktır.

## Talep tahmini: beklenti ile sonuç arasındaki fark

Talep tahmini, fazla stok ile boş raf arasındaki dengeyi kurmaya yardım eder. Perakende tarafındaki örnekler için [e-ticarette fiyatlama ve talep tahmini](/rehber/e-ticarette-fiyatlama-ve-talep-tahmini/) rehberine bakabilirsiniz. Ancak bu alanda beklentileri yönetmek gerekiyor. [Inbound Logistics'in 2026 değerlendirmesi](https://www.inboundlogistics.com/articles/ai-in-supply-chain-management-how-useful-will-it-be-in-2026/), talep tahmininin "erken aşamada" kaldığını ve 2025'te beklentilerin sonuçların gerisinde kaldığını yazıyor.

Bir başka derleme sayfası ([Coradvance](https://www.coradvancesolutions.com/blog/ai-transforming-us-supply-chain-forecasting-2026)), yönetim liderlerinin yüzde 55'inin yapay zekadan elde ettikleri getiriden emin olmadığını belirtiyor. Sayfa bunun gerekçesi olarak birçok şirketin başarının ne olduğunu tanımlamadan tahmin araçlarını devreye almasını öne sürüyor. Ders açık: araca geçmeden önce "hangi hata oranı, hangi maliyet düşüşü bizim için başarı?" sorusunu yanıtlayın.

İnternette tahmin doğruluğuna dair çok yüksek yüzdeler dolaşıyor. Bunların birçoğu blog ve derleme sitelerinde geçiyor ve atıf yapılan araştırmaların özgün metinlerine ulaşmak zor. Bu rakamları hedef olarak değil, en fazla bir ipucu olarak okuyun.

## Rota optimizasyonu: UPS ORION örneği

Rota optimizasyonunda en çok belgelenen vaka, kargo şirketi UPS'in ORION sistemi. [AI for Supply Chain'deki vaka çalışması](https://aiforsupplychain.org/case-studies/ups-cuts-100-million-miles-annually-and-saves-300-400m-with-orion-ai-route-optimization), UPS'in yatırımcı sunumuna atfen yıllık 300-400 milyon dolar tasarruf ve yaklaşık 100 milyon mil azalma bildiriyor. Aynı sayfaya göre sistem yaklaşık on yıllık bir geliştirme süreci ve 1 milyar doları aşan yatırımla kurulmuş, dış bir sağlayıcıya dayanmıyor.

Bu örnekten iki sonuç çıkar. Birincisi, rota optimizasyonunun gerçek ve ölçülebilir kazanç getirebileceği. İkincisi, bu kazancın dev bir filo, uzun bir geliştirme süreci ve büyük bir yatırımla geldiği. ORION için internette farklı dönemlere ve farklı tutarlara ait rakamlar dolaşıyor; bir rakamı alıntılarken hangi döneme ait olduğunu ve kaynağın kim olduğunu mutlaka kontrol edin. Daha küçük bir filoda hazır rota planlama yazılımlarıyla elde edeceğiniz kazanç çok daha mütevazı olacaktır ve bunu kendi teslimat verinizle ölçmeniz gerekir.

## Depo otomasyonu: robotlar ve yazılım

Depo tarafında hareket en görünür yer burası. [CNBC'nin haberine göre](https://www.cnbc.com/2026/06/05/amazon-robot-proteus-warehouse-ai-layoffs.html) Amazon, Haziran 2026'da doğal dille komut verilebilen yeni nesil Proteus robotunu tanıttı; orijinal Proteus ABD'de 25 fulfillment (sipariş karşılama) merkezinde kullanılıyor. Yazılım tarafında ise Ocado Intelligent Automation, bulut tabanlı yapay zeka yazılımı Ocado IQ'yu MODEX 2026 fuarında tanıttı ve sistemin 2026 sonuna kadar kullanılabilir olacağını açıkladı ([Logistics Business](https://logisticsbusiness.com/materials-handling/automation-systems-shuttles/ai-robotics-automation-showcased-at-modex-2026/)).

Bu örneklerin ortak noktası ölçek: yüzlerce çalışanın olduğu, siparişlerin yüksek hacimle aktığı depolar. Robot yatırımı sabit maliyet getirir ve depo düzenini değiştirmeyi gerektirebilir. Daha küçük bir depoda ilk adım genellikle robot değil, stok konumlarının doğru kaydı, toplama sırasının planlanması ve sayım hatalarının azaltılması olur. Fabrika içindeki robot uygulamaları için [fabrikalarda robotlar ve yapay zeka](/rehber/fabrikalarda-robotlar-ve-yapay-zeka/) rehberi de ilginizi çekebilir.

## Tedarikçi riski izleme

Tedarikçi riski izleme, ana tedarikçinizin arkasındaki alt tedarikçileri de görmeyi hedefler. [Interos'un 2026 tahminleri raporu](https://www.businesswire.com/news/home/20260121425844/en/interos.ai-2026-Predictions-Report-Finds-Supply-Chains-Are-the-Front-Line-of-a-New-Era-of-Global-Risk), 250 milyondan fazla şirket ve 11 milyar tedarikçi ilişkisini içeren bir bilgi grafiğine dayanıyor. Rapor jeopolitik gerilim, yapay zeka altyapısındaki darboğazlar ve nadir toprak kısıtları gibi riskleri sıralıyor. Aynı duyuruya göre şirket, büyük şirketlere ve kamu kurumlarına alt tedarikçi riskini ve finansal etkisini ölçen iQ platformunu sundu. Bunlar şirketin kendi açıklamaları; bağımsız bir doğrulama içermiyor.

Bu alandaki araçların tespit doğruluğu ve zaman kazancı konusundaki iddiaları çoğunlukla yazılım satıcılarından ve derleme sayfalarından geliyor. Bir ürünü değerlendirirken kendi tedarikçi listenizle geriye dönük bir deneme isteyin: geçmişte yaşadığınız bir aksamayı sistem önceden işaretleyebilir miydi? Bu soru, her sunumdaki oranlardan daha çok şey söyler.

## KOBİ'ler için başlangıç ve destekler

Küçük bir işletme için makul bir sıra şöyle olabilir:

1. **Tek bir sorun seçin.** Örneğin sık biten bir ürün grubu, yüksek yakıt maliyeti ya da geç gelen bir tedarikçi.
2. **Başarı ölçütünü yazın.** Hata oranı, teslimat süresi veya stok devir hızı gibi ölçülebilir bir hedef koyun.
3. **Veriyi hazırlayın.** Satış, sipariş ve teslimat kayıtlarının tutarlı olduğundan emin olun.
4. **Küçük bir pilot yapın.** Önce tek bir depoda, tek bir rotada veya tek bir ürün ailesinde deneyin; sonuçları mevcut yönteminizle karşılaştırın.
5. **Karar yetkisini insanda tutun.** Sistem öneri üretsin, siparişi veya rotayı onaylayan kişi sizin ekibinizden biri olsun.

Bütçe kısıtlıysa destekleri araştırın, ancak koşulları resmi kaynaktan teyit edin. Bir [teknik rehber](https://pikselbayt.com/blog/yapay-zeka-destek-programlari/), KOBİ'ler için TÜBİTAK 1507, 1707 ve 1711 ile KOSGEB KOBİ Dijital Dönüşüm Destek Programı'nı karşılaştırıyor. Aynı rehberde yalnızca imalat KOBİ'lerinin dijital dönüşüm için KOSGEB programına bakması gerektiği belirtiliyor; 1711 çağrısı için ise bir yapay zeka KOBİ'si ile bir üniversite laboratuvarından oluşan konsorsiyum aranıyor. Bunlar bir blogun aktardığı bilgiler; güncel yönergeye bakmadan başvuru planı yapmayın.

Müşavirler Kulübü'nün [makalesine](https://musavirlerkulubu.com.tr/makale/sanayi-bakanligi-2026-yapay-zeka-destekli-temiz-teknolojiler-tesvik-rehberi) göre Sanayi Bakanlığı, 17 Kasım 2026'da "Yapay Zekâ Destekli Temiz Teknolojiler" teşvik programını açıkladı. Programın "Akıllı Tedarik Zinciri" başlığı altında lojistikte emisyon azaltıcı yapay zeka çözümleri yer alıyor. Makale, yazılım ve yapay zeka lisanslarında KOBİ'ler için yüzde 90 destek oranı ve tahmini 5 milyon TL üst limit yazıyor. Bu bir meslek kuruluşu makalesi olduğundan oranı ve üst limiti resmi metinden doğrulamak gerekir. KOBİ ölçeğinde genel çerçeve için [KOBİ sanayiciler için yapay zeka](/rehber/kobi-sanayiciler-icin-yapay-zeka/) rehberine bakın.

Yerel tedarikçi seçerken, satıcının size gösterdiği müşteri referansının tek başına kanıt sayılmadığını unutmayın. Mümkünse referans verilen şirketle doğrudan konuşun.

## Riskler ve sınırlar

- **Veri kalitesi.** Hatalı kayıtlarla eğitilmiş bir model, hatalı tahminleri güvenle üretir.
- **Belirsiz başarı tanımı.** Yukarıda geçen derlemenin işaret ettiği gibi, hedefi tanımlanmamış bir proje getirisini kanıtlayamaz.
- **Yüksek ilk yatırım.** UPS örneğinde olduğu gibi, büyük kazanımların arkasında uzun süreli ve pahalı bir hazırlık var.
- **Üçüncü taraf rakamlar.** Pazar büyüklüğü ve doğruluk yüzdeleri sunan sayfaların çoğu satış amaçlıdır. Tek bir derlemeye dayanan rakamla karar vermeyin.
- **Kişisel veri.** Sürücü konumu, çalışan performansı veya müşteri adresi gibi veriler kişisel veri içerebilir. Kullanacağınız aracın veriyi nasıl işlediğini [KVKK ve yapay zeka araçları](/rehber/kvkk-ve-yapay-zeka-araclari/) rehberi üzerinden değerlendirin ve gerekirse bir hukuk uzmanına danışın.

Tedarik zincirinde yapay zeka sihirli bir çözüm değil; iyi tanımlanmış bir soruya uygulanırsa işe yarayan bir araç. Küçük başlayın, ölçün, sonuçları kendi verinizle doğrulayın ve ancak ondan sonra büyütün.
