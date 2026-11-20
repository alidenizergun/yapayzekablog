---
title: "Dijital ikiz nedir? Fabrikalarda nasıl kullanılıyor, ne kadar maliyetli?"
description: "Dijital ikizin tanımı, simülasyon ve yapay zekayla ilişkisi, Nvidia Omniverse ve Siemens platformları, BMW ile Ford Otosan örnekleri, maliyet ve altyapı gereksinimleri."
date: 2026-11-20
summary:
  - "Dijital ikiz, fiziksel bir makinenin, sürecin ya da fabrikanın sensör verisiyle beslenen sanal temsilidir."
  - "BMW 30'dan fazla tesisinde sanal fabrika kullanıyor ve planlama maliyetlerinde yüzde 30'a kadar düşüş öngörüyor."
  - "Kurumsal ölçekli kurulumlar için 5-15 milyon dolarlık başlangıç yatırımı tahmin ediliyor; pilot projeyle başlamak riski azaltır."
level: Orta
topic: Teknik
terms: [yapay-zeka, makine-ogrenmesi, gpu, bilgisayarli-goru, sentetik-veri]
sector: sanayi
faq:
  - q: "Dijital ikiz ile simülasyon aynı şey mi?"
    a: "Hayır. Simülasyon bir durumu sanal ortamda denemektir; dijital ikiz ise sensör verisiyle gerçek varlığa bağlı kalan ve onu temsil eden bir sanal modeldir. İkizler simülasyon yapabilir, ama her simülasyon bir ikiz değildir."
  - q: "Dijital ikiz kurmak için yapay zeka şart mı?"
    a: "Zorunlu değil, ancak bakım tahmini gibi işlevlerde makine öğrenmesi devreye giriyor. Akademik kaynaklar dijital ikizi sensör verisi, makine öğrenmesi, bulut ve nesnelerin interneti ile oluşturulan yapay zeka tabanlı bir temsil olarak tanımlıyor."
  - q: "Küçük bir işletme dijital ikizle başlayabilir mi?"
    a: "Bir araştırma raporu, KOBİ'ler için IoT altyapısı, bulut, veri analitiği ve siber güvenlik yatırımlarının engel oluşturduğunu belirtiyor. Bu nedenle tek bir makine ya da hatla sınırlı bir pilot daha gerçekçi bir başlangıçtır."
sources:
  - title: "Dr. Atilla Yardımcı: Yapay Zeka Temel Bilgiler, Kavramlar, Yöntemler"
    url: "https://osbuk.org/lib/dokuman/27730d3b-e494-11ef-a1d3-0050568cba34.pdf"
  - title: "Siemens: Industrial AI innovations at CES 2026"
    url: "https://news.siemens.com/en-us/siemens-unveils-technologies-to-accelerate-the-industrial-ai-revolution-at-ces-2026/"
  - title: "Nvidia: Into the Omniverse, GTC 2026 virtual worlds and physical AI"
    url: "https://blogs.nvidia.com/blog/gtc-2026-virtual-worlds-physical-ai/"
  - title: "BMW Group: BMW Group Scales Virtual Factory"
    url: "https://www.visit-bmwgroup.com/en/bmw-group-scales-virtual-factory/"
  - title: "Nvidia: BMW Group Develop Custom Application on Omniverse"
    url: "https://www.nvidia.com/en-us/case-studies/bmw-group-develop/"
  - title: "Anadolu Ajansı: Ford Otosan Yeniköy Fabrikası Global Lighthouse Network listesine girdi"
    url: "https://www.aa.com.tr/tr/isdunyasi/holding/ford-otosan-yenikoy-fabrikasi-global-lighthouse-network-listesine-girdi/700070"
  - title: "IMARC Group: Digital Twin Market"
    url: "https://www.imarcgroup.com/digital-twin-market"
  - title: "Precision Business Insights: Digital Twin Market"
    url: "https://www.precisionbusinessinsights.com/market-reports/digital-twin-market"
---

Dijital ikiz, bir makinenin, üretim hattının ya da fabrikanın sanal kopyasını gerçek verilerle güncel tutma fikrine dayanıyor. Sanayide sık duyulan bir terim olsa da neye yaradığı ve ne kadar yatırım istediği çoğu zaman net anlatılmıyor. Bu rehber tanımı, yapay zekayla ilişkisini, Nvidia ve Siemens gibi platformları, BMW ile Ford Otosan örneklerini ve maliyet sorusunu ele alıyor. Türkçe haberlerde "dijital ikiz" bazen kişilerin görüntü ve sesinden üretilen yapay zeka kopyaları için de kullanılıyor; burada yalnızca üretim ve fabrika bağlamı anlatılıyor.

## Dijital ikiz nedir?

Bir akademik ders kitabı dijital ikizi, fiziksel bir varlığın, sürecin ya da sistemin davranışını, özelliklerini ve performansını kopyalayan yapay zeka tabanlı sanal temsil olarak tanımlıyor. Bu temsil, sensör verisi ile makine öğrenmesi, bulut ve nesnelerin interneti teknolojileri kullanılarak oluşturuluyor ([Dr. Atilla Yardımcı, Yapay Zeka ders kitabı](https://osbuk.org/lib/dokuman/27730d3b-e494-11ef-a1d3-0050568cba34.pdf)).

Aynı kaynağa göre dijital ikizin ilk örneklerinden biri, bakımın ne zaman gerekeceğini tahmin etmek için kullanılan bir üretim makinesinin sanal temsiliydi. Bu kullanım bugün de en yaygın başlangıç noktalarından biri; ayrıntılar için [kestirimci bakım rehberimize](/rehber/kestirimci-bakim-nedir/) bakabilirsiniz.

Kısacası dijital ikiz, tek seferlik bir çizim ya da 3D model değil; gerçek makineden gelen veriyle beslenen ve onunla birlikte "yaşayan" bir modeldir.

## Simülasyon ve yapay zeka nasıl birleşiyor?

Simülasyon, bir değişikliğin sonucunu fiziksel dünyada denemeden sanal ortamda görmenizi sağlar. Dijital ikiz bu simülasyonu gerçek verilere bağlar: model sahadaki durumu yansıttığı için denemeler varsayımlara değil, fabrikanın güncel haline dayanır. Yapay zeka ise bu verilerden örüntü çıkarır; örneğin bir makinenin ne zaman arıza vereceğini tahmin etmeye çalışır.

Siemens, CES 2026'da tanıttığı Digital Twin Composer'ı kendi dijital ikiz teknolojisini, Nvidia Omniverse kütüphanelerini ve gerçek zamanlı mühendislik verisini bir araya getiren yazılım olarak anlatıyor. Şirket, PepsiCo'nun ABD'deki bazı üretim ve depo tesislerinde yükseltmeleri bu yazılımla simüle ettiğini ve erken sonuçların "ölçülebilir kazanımlar" gösterdiğini söylüyor; ancak somut bir rakam paylaşılmıyor. Siemens ayrıca Nvidia ile birlikte Almanya'daki Erlangen elektronik fabrikasını yapay zeka destekli, değişen koşullara uyum sağlayabilen üretim sahalarının ilk örneği olarak planladığını açıkladı ([Siemens](https://news.siemens.com/en-us/siemens-unveils-technologies-to-accelerate-the-industrial-ai-revolution-at-ces-2026/)).

## Platformlar: Nvidia Omniverse ve Siemens

Nvidia'nın GTC 2026 açıklamalarında fabrika ve lojistik için ayrı bir "Mega Omniverse Blueprint" yer alıyor. Amaç, robot filolarını ve yapay zeka ajanlarını sahaya yeni bir robot koymadan önce fiziksel olarak doğru bir fabrika ikizinde test etmek. Aynı açıklamaya göre ABB Robotics, FANUC, KUKA ve Yaskawa, toplam 2 milyonu aşan kurulu robot tabanıyla üretim hatlarını dijital ikizlerde doğrulamak için Omniverse ve Isaac simülasyon çerçevelerini kullanıyor ([Nvidia](https://blogs.nvidia.com/blog/gtc-2026-virtual-worlds-physical-ai/)). Robot tarafını ayrıca [fabrikalarda robotlar ve yapay zeka](/rehber/fabrikalarda-robotlar-ve-yapay-zeka/) rehberinde bulabilirsiniz.

Siemens ise mühendislik ve üretim yazılımlarıyla fabrikaların hâlihazırda tanıdığı bir tedarikçi. Siemens'in Digital Twin Composer'ı bu tabanı Omniverse ile birleştiriyor. Yani ikisi rakip olmaktan çok, bazı projelerde birlikte çalışan katmanlar.

Platform seçerken şu soruları sorun:

- Mevcut tasarım, planlama ve otomasyon yazılımlarınızla veri alışverişi yapabiliyor mu?
- Fabrikadaki makinelerden veri toplamak için ek donanım gerekiyor mu?
- Modeli kurduktan sonra bakımını ve güncellemesini kim yapacak?

## Otomotivden örnekler: BMW ve Ford Otosan

**BMW.** BMW Group, Virtual Factory adlı dijital ikiz sistemini 30'dan fazla üretim tesisine yaydı. Şirket, üretim planlama maliyetlerinde yüzde 30'a kadar düşüş öngörüyor; bu bir öngörü, gerçekleşmiş ve bağımsız olarak doğrulanmış bir sonuç değil. Sistem yapı verilerini, ekipmanı, lojistiği ve araç verilerini birleştiriyor. BMW'ye göre eskiden haftalar süren gerçek dünya değişiklikleri sanal ortamda simüle edilebiliyor. Yeni bir araç modeli hatta girmeden önce 3D taramalar ve yapı verileriyle aracın hat içindeki hareketi sanal olarak denenip çarpışma kontrolü yapılıyor. Şirket 2027'ye kadar küresel üretim ağına 40'tan fazla yeni veya güncellenmiş aracı entegre etmeyi planlıyor ([BMW Group](https://www.visit-bmwgroup.com/en/bmw-group-scales-virtual-factory/)). Sanal fabrika Nvidia Omniverse üzerine kurulu; FactoryExplorer adlı platformda planlamacılar fabrika yerleşimini ve lojistik süreçlerini dijital ikizde tasarlıyor ([Nvidia vaka çalışması](https://www.nvidia.com/en-us/case-studies/bmw-group-develop/)).

**Ford Otosan.** Türkiye'den en çok anılan örnek, Ford Otosan'ın Yeniköy Fabrikası. Fabrika, Dünya Ekonomik Forumu'nun Global Lighthouse Network listesine girdi. Ford Otosan'a göre dijital ikiz teknolojisiyle üretim tesisinde verimlilik yüzde 70, toplam ekipman etkinliği yüzde 13 arttı. Şirket, tek bir üretim hattında 4.000'den fazla araç varyasyonunu yapay zeka destekli optimizasyonla yönettiğini ve dijital ikiz ile yapay zekaya yönelik 60'tan fazla çözüm geliştirdiğini açıkladı ([Anadolu Ajansı](https://www.aa.com.tr/tr/isdunyasi/holding/ford-otosan-yenikoy-fabrikasi-global-lighthouse-network-listesine-girdi/700070)). Bu rakamların hangi dönemi ve hangi başlangıç noktasını kapsadığı açıklanmadı; bağımsız bir doğrulama da yok. Rakamları şirket beyanı olarak okumak doğru olur. Türkiye'deki diğer uygulamalar için [Türkiye'de sanayide yapay zeka](/rehber/turkiyede-sanayide-yapay-zeka/) rehberine göz atabilirsiniz.

## Maliyet ve gereken altyapı

Tek bir "fabrika maliyeti" vermek mümkün değil; kapsam, tesis büyüklüğü ve entegrasyon derinliği fiyatı belirliyor. Araştırma şirketi IMARC, kurumsal ölçekli dijital ikiz kurulumlarının genellikle 5-15 milyon dolar başlangıç yatırımı gerektirdiğini yazıyor ([IMARC](https://www.imarcgroup.com/digital-twin-market)). Bu, belirli bir projeye ait değil, genel bir pazar tahmini; küçük bir pilotun maliyeti çok daha düşük, tam bir fabrika uygulamasınınki çok daha yüksek olabilir.

Altyapı tarafında genel çerçeve şöyle:

- **Veri toplama:** Makinelerden veri alacak sensörler ve bağlantı katmanı.
- **Veri altyapısı:** Verinin depolandığı, işlendiği bulut ya da yerel sistemler.
- **Modelleme ve simülasyon yazılımı:** Fabrikanın sanal modelini kuran ve çalıştıran platform.
- **Yapay zeka modülleri:** Bakım tahmini, kalite kontrolü gibi analizleri yapan katman. Gerçekçi görselleştirme ve yoğun simülasyon yüksek hesaplama gücü (GPU) isteyebilir.
- **Uzmanlık:** Entegrasyonu ve veri hazırlığını yürütecek mühendisler.

Precision Business Insights'ın raporu, KOBİ'ler için IoT altyapısı, bulut, veri analitiği ve siber güvenlik yatırımlarının başlıca engeller arasında olduğunu belirtiyor ([Precision Business Insights](https://www.precisionbusinessinsights.com/market-reports/digital-twin-market)). Ölçeğiniz küçükse [KOBİ sanayiciler için yapay zeka](/rehber/kobi-sanayiciler-icin-yapay-zeka/) rehberi daha uygun bir başlangıç sunabilir.

## Nasıl başlanır?

1. **Tek bir sorun seçin.** "Fabrikanın ikizini kuralım" yerine, "şu makinenin plansız duruşlarını azaltalım" ya da "şu hattaki yerleşim değişikliğini önce sanalda deneyelim" gibi ölçülebilir bir hedef belirleyin.
2. **Veriyi kontrol edin.** Hangi makinelerden hangi sıklıkta veri aldığınızı, verinin temiz ve tutarlı olup olmadığını inceleyin. Model, besleyen veri kadar iyidir.
3. **Küçük bir pilot yapın.** Tek makine ya da tek hatla başlayın, sonucu mevcut yöntemle karşılaştırın.
4. **Başarı ölçütünü baştan yazın.** Duruş süresi, planlama süresi ya da hurda oranı gibi bir ölçüt belirleyin.
5. **Genişletmeye pilotun sonucuyla karar verin.** Üretimdeki genel yapay zeka uygulamaları için [üretimde yapay zeka](/rehber/uretimde-yapay-zeka/) rehberi de yardımcı olur.

## Riskler ve sınırlar

- **Rakamlar çoğunlukla şirket beyanı.** BMW'nin yüzde 30'luk tasarruf öngörüsü de Ford Otosan'ın verimlilik artışları da şirketlerin kendi açıklamaları. Kendi tesisinizde aynı sonuca ulaşacağınız garanti değil.
- **Modelin güncel kalması gerekir.** Fabrikada bir makine değiştiğinde ya da hat yeniden düzenlendiğinde ikizin de güncellenmesi gerekir; aksi halde yanlış sonuç üretir.
- **Entegrasyon zordur.** Farklı üreticilerin makineleri ve yazılımları arasında veri akışı kurmak, projenin en çok emek isteyen kısmı olabilir.
- **Siber güvenlik yükü artar.** Makinelerin buluta ve ağa bağlanması saldırı yüzeyini genişletir.
- **Hazır bir çözüm değildir.** Fuar tanıtımlarındaki akışlar, sizin hattınızdaki sonucu göstermez. Tedarikçilerden somut müşteri örnekleri ve pilot koşulları isteyin.

Bu rehber genel bilgi amaçlıdır. Yatırım kararı vermeden önce kendi süreçlerinizi tanıyan mühendislik ve bilgi teknolojileri ekipleriyle çalışın, mümkünse birden fazla tedarikçiden teklif alın.
