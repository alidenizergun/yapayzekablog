---
title: "Kestirimci bakım: yapay zeka arızaları önceden nasıl tahmin ediyor?"
description: "Kestirimci bakımda yapay zeka titreşim ve sıcaklık verisinden arıza sinyallerini nasıl yakalıyor? Bakım türleri, kaynaklı tasarruf rakamları, sınırlar ve KOBİ'ler için başlangıç adımları."
date: 2026-11-20
summary:
  - "Kestirimci bakım, işi takvime göre değil makinenin titreşim, sıcaklık ve akım gibi verilerle ölçülen gerçek durumuna göre planlar."
  - "Yapay zeka makinenin normal çalışma profilini öğrenir ve bu profilden sapmaları erken uyarı olarak işaretler; ancak model zamanla bozulabilir ve yanlış alarm üretebilir."
  - "Rakamlar kaynağa göre değişiyor: ABD Enerji Bakanlığı verileri yalnızca önleyici bakıma göre yüzde 8 ila 12 tasarruf öngörüyor, satıcı iddiaları daha yüksek."
level: Orta
topic: Teknik
terms: [yapay-zeka, makine-ogrenmesi, egitim-verisi]
sector: sanayi
faq:
  - q: "Kestirimci bakım önleyici bakımın yerini tamamen alır mı?"
    a: "Hayır. Yasal muayeneler ve garanti kapsamındaki işler takvimini korur; kestirimci veri ağırlıklı olarak yatak değişimi ya da bobin temizliği gibi isteğe bağlı işlerin zamanlamasını değiştirir."
  - q: "Kestirimci bakım için hangi sensörler gerekir?"
    a: "Bu, arıza türüne bağlıdır. Titreşim için ivmeölçerler yaygın kullanılır; sıcaklık ve akım çekişi de sık izlenen göstergelerdir. Satın almadan önce hedef arızanın frekansının sensörün ölçüm aralığında kalıp kalmadığını kontrol edin."
  - q: "Yapay zeka her arızayı önceden tahmin edebilir mi?"
    a: "Hayır. Bir akademik çalışmada sistem ani aşırı ısınmayı yakalarken, yanlış kalibrasyondan kaynaklanan süregelen sıcaklık artışını kaçırdı. Model zamanla da bozulabileceği için sürekli izlenmelidir."
sources:
  - title: "Milvian: What Is Predictive Maintenance?"
    url: "https://milvian.ai/insights/glossary/predictive-maintenance"
  - title: "AOPL: Predictive Maintenance with AI: Sensors, Data and ROI"
    url: "https://aopl.tech/blog/predictive-maintenance-with-ai-sensors-data-and-roi"
  - title: "PNNL: O&M Best Practice Issue Discussion: Maintenance Approaches"
    url: "https://www.pnnl.gov/projects/om-best-practices/maintenance-approaches"
  - title: "arXiv: Multi-Fault Diagnosis Of Industrial Rotating Machines Using Data-Driven Approach"
    url: "https://arxiv.org/pdf/2206.14153"
  - title: "Tredence: AI Anomaly Detection for Machine Health: A CTO's Guide"
    url: "https://www.tredence.com/blog/ai-anomaly-detection"
  - title: "PMC: Tamper Detection in Industrial Sensors: An Approach Based on Anomaly Detection"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10650466/"
  - title: "arXiv: A Benchmark of Causal vs. Correlation AI for Predictive Maintenance"
    url: "https://arxiv.org/pdf/2512.01149"
  - title: "PMC: Maintenance Costs and Advanced Maintenance Techniques in Manufacturing Machinery"
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9890517/"
---

Fabrikada bir pompanın yatağı bozulduğunda hat durur, yedek parça aranır ve plansız duruşun faturası gelir. Kestirimci bakım bu sürprizi azaltmayı hedefler: makineden gelen sensör verisini izler, bozulmanın başlangıcını fark eder ve müdahaleyi arıza çıkmadan yapmanıza imkân tanır. Yapay zeka bu iş akışında verideki örüntüleri öğrenen bölümü üstlenir. Bu rehber nasıl çalıştığını, nelere güvenebileceğinizi ve küçük bir işletmenin nereden başlayabileceğini anlatıyor. Konunun daha geniş tanımı için [kestirimci bakım nedir](/rehber/kestirimci-bakim-nedir/) rehberine de bakabilirsiniz.

## Üç bakım yaklaşımı arasındaki fark

**Reaktif bakım**, arıza çıktıktan sonra müdahale etmektir. **Önleyici bakım**, parçaları belirli aralıklarla, yani takvime göre kontrol eder veya değiştirir. **Kestirimci bakım** ise işi takvime değil, ekipmanın gerçek durumuna göre planlar. [Milvian'ın sözlüğüne](https://milvian.ai/insights/glossary/predictive-maintenance) göre titreşim, sıcaklık ya da akım çekişi gibi durum verilerindeki eğilimlere bakılır ve onarım arıza olmadan yapılır. [AOPL'ın aktardığı](https://aopl.tech/blog/predictive-maintenance-with-ai-sensors-data-and-roi) ABD Enerji Bakanlığı (DOE) tanımı da aynı yönde: ölçümlerle bozulmanın başlangıcı tespit edilir ve sorun ciddileşmeden nedenleri giderilir.

Günlük pratikte çoğu tesis hâlâ geride bir tabloyla çalışıyor. Aynı kaynağın DOE'ye atfen verdiği bilgiye göre ABD'deki tipik tesislerde bakım kaynaklarının yaklaşık yüzde 55'inden fazlası reaktif işlere, yüzde 31'i önleyici işlere, yüzde 12'si kestirimci işlere gidiyor.

## Kestirimci bakım takvimi tamamen ortadan kaldırmaz

Kestirimci bakım, zamana dayalı önleyici bakımın yerini tamamen almaz. [Milvian](https://milvian.ai/insights/glossary/predictive-maintenance) yasal muayenelerin ve garanti işlerinin takvimlerini koruduğunu belirtiyor. Kestirimci veri ağırlıklı olarak yatak değişimi ya da bobin temizliği gibi isteğe bağlı işlerin zamanını değiştiriyor. Yani amaç, "her şeyi izleyip bakım ekibini kaldırmak" değil; hangi işin ne zaman yapılacağına daha iyi karar vermek.

## Sensörler ne ölçer, hangisini seçmelisiniz

Sensör seçimi arıza türüne bağlı. Bir [derleme makalesine](https://arxiv.org/pdf/2206.14153) göre dengesizlik, yatak hasarı, pompalarda kavitasyon, artan titreşim, mekanik parçalarda sıcaklık artışı ve yağlama kaybı tipik uyarı sinyalleridir. Titreşim ölçümü için ivmeölçerler yaygın kullanılıyor. Yatak veya fan kanadı gibi belirli parçaların arızasını yakalamak için ise frekans alanında analiz (FFT) gerekiyor.

Aynı makaleden pratik bir uyarı: sensör satın almadan önce, yakalamak istediğiniz arıza frekanslarının sensörün frekans aralığında kalıp kalmadığını kontrol edin. Aralık dışında kalan bir arıza, ne kadar gelişmiş bir model kullanırsanız kullanın verinin içinde görünmez.

## Yapay zeka anomaliyi nasıl yakalıyor

Temel fikir şu: makine öğrenmesi modeli, makinenin normal çalışırken ürettiği titreşim, sıcaklık ve akım çekişi gibi değerlerden bir "ideal durum" profili çıkarır; bu profilden sapma görüldüğünde uyarı verir. Bu anlatım [ProManage'in](https://promanage.com/tr/yapay-zeka-destekli-kestirimci-bakim-arizalar-olusmadan-durdurmak-mumkun-mu/) satıcı sayfasında geçiyor, dolayısıyla pazarlama dilinden arındırılmış bir tanım olarak okuyun. Modelin öğrendiği veri, yani eğitim verisi, makinenin sağlıklı çalışma dönemlerini yansıtmalı.

Geleneksel FFT analizinin kaymaları yakalayabildiğini, yapay zekanın ise farklı yük, hız ve sıcaklıklarda normal titreşim spektrumunu öğrenerek bunu bir adım ileri taşıdığını [Tredence](https://www.tredence.com/blog/ai-anomaly-detection) anlatıyor. Bunun pratik karşılığı şu: sabit bir eşik değeri her çalışma koşulunda aynı anlama gelmez, öğrenen bir model ise koşula göre "normal"in ne olduğunu ayırt edebilir.

## Sınırlar: model kayması, kaçan arızalar ve yanlış alarm

İlk sınır, modelin zamanla bozulması. Yataklar gevşer, sıcaklık tabanları kayar, üretim koşulları değişir. Tredence bu kademeli değişimi kavram kayması (concept drift) olarak adlandırıyor ve modellerin zamanla bozulmasının başlıca nedenlerinden biri olarak gösteriyor. Model bir kez kurulup bırakılacak bir yazılım değil; izlenmesi ve güncellenmesi gerekiyor.

İkinci sınır, sistemin kaçırdığı durumlar. [PMC'de yayımlanan](https://pmc.ncbi.nlm.nih.gov/articles/PMC10650466/) bir endüstriyel sensör çalışmasında, soğutma sistemi arızasını simüle eden aşırı ısınma ve titreşimdeki ani artış başarıyla tespit edildi. Süregelen sıcaklık yükselmesi ise sonradan yanlış kalibrasyona bağlandı ve algoritma bunu yakalayamadı. Çalışma arıza tahmininden çok sensör sahteciliği ve anomali tespitine odaklanıyor; yine de yavaş ve sürekli kaymaların zor yakalandığını gösteren bir örnek.

Üçüncü konu yanlış alarm. Hakemli yayın olmayan bir [ön baskı çalışmasında](https://arxiv.org/pdf/2512.01149) CNC makineleri için kaçırılan arıza 25.000 dolar, yanlış alarm 500 dolar olarak alınmış; plansız duruş ile önleyici bakım arasındaki maliyet oranı ise 20:1 ile 100:1 arasında değişiyor. Bu asimetri, alarm eşiğini nasıl ayarlayacağınızı etkiler: pahalı bir arızayı kaçırmak, ucuz bir yanlış alarmdan çok daha maliyetli olabilir. Ancak çok fazla yanlış alarm da bakım ekibinin sisteme güvenini düşürür.

## Tasarruf rakamları: neye ne kadar güvenebilirsiniz

Rakamların kaynağı büyük fark yaratıyor. Kamu ve akademik kaynaklar daha temkinli, satıcı sayfaları daha iddialı.

- **DOE'nin O&M rehberi:** [PNNL'in aktardığına](https://www.pnnl.gov/projects/om-best-practices/maintenance-approaches) göre iyi işleyen bir kestirimci bakım programı, yalnızca önleyici bakım yapan bir programa göre yüzde 8 ila 12 tasarruf sağlayabilir. Reaktif bakıma aşırı bağımlı tesislerde tasarruf fırsatı yüzde 30-40'ı aşabilir.
- **Akademik anket:** [Bir imalat anketinde](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9890517/) kestirimci bakıma daha çok dayanan grup yüzde 52,7 daha az plansız duruş ve yüzde 78,5 daha az hata yaşadı. Aynı çalışmada kestirimci ağırlıklı grupta plansız duruş, önleyici ağırlıklı gruba göre yüzde 18,5 daha az bulundu. Bu anket verisi; nedensellik kesin değil.
- **Sektör anketleri:** [Milvian](https://milvian.ai/insights/glossary/predictive-maintenance), DOE'ye atıfla kestirimci bakım programlarında bakım maliyetinde yüzde 25-30, arıza sayısında yüzde 70-75 ve duruşta yüzde 35-45 azalma bildirildiğini aktarıyor. Bu ikincil bir kaynak.

Sonuç olarak, tasarruf büyük ölçüde işletmenizin başlangıç noktasına bağlı. Zaten iyi bir önleyici bakım düzeniniz varsa kestirimci bakımdan beklenen ek kazanç tek haneli veya düşük çift haneli yüzdelerle ifade ediliyor. Çoğu işi arıza sonrası yapıyorsanız fırsat çok daha büyük olabilir. Tek bir vaka çalışmasındaki dramatik oranı kendi tesisinize doğrudan uyarlamayın.

## KOBİ'ler için başlangıç adımları

Küçük bir işletmede her makineyi sensörle donatmak gerçekçi olmayabilir. Notlardaki bilgilerle çıkarabileceğiniz makul bir sıra şöyle:

1. **Kritik ekipmanı seçin.** Duruşunun üretimi en çok aksattığı, arızası pahalı olan birkaç makineyle başlayın.
2. **Arıza türünü belirleyin.** Yatak hasarı mı, aşırı ısınma mı, pompada kavitasyon mu? Arıza türü hangi sensörün gerektiğini belirler.
3. **Sensörün aralığını kontrol edin.** Yakalamak istediğiniz arıza frekanslarının sensörün frekans aralığında kalıp kalmadığına bakın.
4. **Normal çalışma verisi toplayın.** Model, makinenin sağlıklı profilini bu veriden öğrenir; farklı yük ve hız koşullarını da kapsayın.
5. **Alarm eşiğini maliyete göre ayarlayın.** Kaçırılan arıza ile yanlış alarmın size maliyetini karşılaştırın.
6. **Takvimli işleri bırakmayın.** Yasal muayeneleri ve garanti işlerini sürdürün.
7. **Modeli düzenli kontrol edin.** Kayma ve koşul değişimleri nedeniyle sonuçları sahadaki bakım kayıtlarıyla karşılaştırın.

Küçük işletmeler için genel bir çerçeve arıyorsanız [küçük işletmeler için yapay zeka](/rehber/kucuk-isletmeler-icin-yapay-zeka/) rehberi iyi bir başlangıç olabilir. Üretim hattındaki diğer kullanım alanları için [üretimde yapay zeka](/rehber/uretimde-yapay-zeka/) ve Türkiye bağlamı için [Türkiye'de sanayide yapay zeka](/rehber/turkiyede-sanayide-yapay-zeka/) sayfalarına göz atın.

Son olarak, tedarikçi tekliflerini okurken bu rehberdeki ayrımı aklınızda tutun: vaat edilen tasarruf oranının kamu kaynaklarındaki aralıklarla uyuşup uyuşmadığını, modelin nasıl güncelleneceğini ve yanlış alarmların nasıl yönetileceğini sorun.
