---
title: "İş sağlığı ve güvenliğinde yapay zeka: kamera, kaza tahmini ve giyilebilir sensörler"
description: "İş sağlığı ve güvenliğinde yapay zeka neleri yapabiliyor? Kamerayla KKD tespiti, kaza tahmini ve giyilebilir sensörlerin sınırlarını, KVKK ve çalışan mahremiyeti risklerini kaynaklarla anlatıyoruz."
date: 2026-11-20
summary:
  - "Kamera, kaza tahmini ve giyilebilir sensör çözümleri iş güvenliğini destekleyebilir ancak kaza azaltımına dair bağımsız kanıt sınırlıdır."
  - "Kamera doğruluğu yerleşime, aydınlatmaya ve çözünürlüğe bağlıdır; satıcı vaatleri pilot uygulamada sınanmalıdır."
  - "Çalışanı izleme amacı taşıyan kamera kullanımı KVKK açısından risklidir; amaç güvenlikle sınırlı olmalı ve şeffaf anlatılmalıdır."
level: Orta
topic: Teknik
terms: [bilgisayarli-goru, makine-ogrenmesi, yapay-zeka]
sector: sanayi
faq:
  - q: "Yapay zeka kamerası iş kazalarını gerçekten azaltıyor mu?"
    a: "Elimizdeki kaynaklarda bunu bağımsız ve hakem denetiminden geçmiş biçimde gösteren bir çalışma yok; sonuç iddiaları çoğunlukla satıcı içeriğine dayanıyor. Bu yüzden kendi sahanızda sınırlı bir pilotla ölçmek en güvenli yoldur."
  - q: "İşyerinde güvenlik amacıyla yapay zeka kamerası kullanmak KVKK'ya aykırı mı?"
    a: "Bir avukatlık yazısına göre KVKK'nın duyurusu işyerinde kamerayı tamamen yasaklamıyor, ancak performans ve verimlilik izlemeyi meşru amaç saymıyor. Uygulamaya geçmeden önce resmi metni okuyun ve hukuk danışmanınıza danışın."
  - q: "Kaza tahmin modelleri için ne kadar veri gerekir?"
    a: "Kaynaklarda kesin bir eşik verilmiyor; ancak bir fabrika çalışması, ramak kala bildirimlerinin azlığının tahmin başarısını sınırladığını açıkça yazıyor. Düzenli ve kaliteli olay kaydı tutmak, modelden önce atılacak ilk adımdır."
sources:
  - title: "Spot AI: Otomatik KKD tespiti rehberi"
    url: "https://www.spot.ai/blog/automated-ppe-detection-construction-safety-director-guide"
  - title: "Enlaps: Automated AI PPE Detection for Construction Sites"
    url: "https://enlaps.io/blog/post/automatic-ppe-detection-construction-site"
  - title: "PR Newswire: Sitemetric AI kamera duyurusu"
    url: "https://www.prnewswire.com/news-releases/sitemetric-launches-the-most-advanced-ai-camera-for-construction--built-to-know-the-worksite-302786116.html"
  - title: "Movita: Büyük-orta ölçekli fabrika çözümleri"
    url: "https://movita.com.tr/cozumler/grup/fabrika-cozumleri"
  - title: "ScienceDirect: AI-Powered Safety, Transforming Occupational Risk Management"
    url: "https://www.sciencedirect.com/science/article/pii/S1877050926011294"
  - title: "BritSafe: AI-powered wearables in workplace health and safety"
    url: "https://www.britsafe.org/safety-management/2025/ai-powered-wearables-transforming-workplace-health-and-safety"
  - title: "Satın Alma Dergisi: İşveren çalışanını kamerayla izleyebilir mi?"
    url: "https://satinalmadergisi.com/isveren-calisanini-kamerayla-izleyebilir-mi/"
  - title: "CDT: EU AI Act Brief, AI at work"
    url: "https://cdt.org/insights/eu-ai-act-brief-pt-4-ai-at-work/"
---

İş sağlığı ve güvenliği (İSG) alanında yapay zeka üç ana yerde karşımıza çıkıyor: kamera görüntüsünden koruyucu ekipman ve tehlikeli alan tespiti, geçmiş verilerden kaza veya risk tahmini ve çalışanın üzerindeki sensörlerden gelen verinin analizi. Üçü de insan denetiminin yerine geçmez; saha gözlemini, eğitimi ve risk değerlendirmesini destekleyen araçlar olarak düşünmek gerekir. Bu rehber, kaynaklarda görülen uygulamaları, sınırlarını ve çalışan mahremiyeti tarafını pratik bir sırayla ele alıyor. Kaynakların büyük bölümü satıcı sayfası veya akademik özet olduğu için, rakamlı sonuçları bağımsız doğrulama olarak okumayın.

## Kamerayla KKD ve tehlikeli alan tespiti

Kişisel koruyucu donanım (KKD) tespiti, kameradan gelen görüntüde baret, yelek, eldiven, gözlük veya emniyet kemeri gibi ekipmanın takılı olup olmadığını bilgisayarlı görü ile denetler. Bir tehlikeli alana girişin ya da düşmenin işaretlenmesi de aynı mantıkla yapılabiliyor. Örneğin Sitemetric, 1 Haziran 2026 tarihli basın bülteninde [KKD, düşme, bölge ihlali ve rozet tespiti yapan bir yapay zeka kamerası](https://www.prnewswire.com/news-releases/sitemetric-launches-the-most-advanced-ai-camera-for-construction--built-to-know-the-worksite-302786116.html) duyurdu. Bu, şirketin kendi açıklaması; performans verisi içermiyor.

Bu sistemlerin başarısı kamera ve ortam koşullarına bağlı. Bir satıcı rehberi, doğruluğun [kamera yerleşimine, aydınlatmaya ve bakış açısına bağlı olduğunu, bu yüzden hiçbir satıcının kusursuz tespit vaat edemeyeceğini](https://www.spot.ai/blog/automated-ppe-detection-construction-safety-director-guide) yazıyor. Enlaps'in teknik rehberi ise uzun mesafede güvenilir KKD tespiti için [en az 12 megapiksel çözünürlük gerektiğini](https://enlaps.io/blog/post/automatic-ppe-detection-construction-site) belirtiyor; sabah, akşamüstü ve gölgeli alanlar gibi düşük ışıkta özel algoritma ya da yapay aydınlatma öneriyor. Bu bir üretici rehberi, ancak pratik bir uyarı olarak değerli: tedarikçiye yalnızca model adını değil, sahanızdaki kamera mesafesini ve ışık koşullarını sorun.

Görüntü işlemenin üretim hattındaki başka bir kullanımı için [görüntü işleme ile kalite kontrol](/rehber/goruntu-isleme-ile-kalite-kontrol/) rehberine bakabilirsiniz.

## Kaza tahmini: ramak kala verisinin önemi

Kaza tahmininin amacı, bir şey olmadan önce riskin yüksek olduğu yeri, vardiyayı ya da koşulu belirlemek. Bunun için genellikle olay kayıtları, ramak kala bildirimleri ve işyeri bilgileri makine öğrenmesi modellerine verilir.

Bu alanda dikkat çekici bir fabrika çalışması var. Bosch Braga'da geliştirilen sistem, [olay açıklamalarını sınıflandırıyor, anomali tespiti yapıyor ve günlük kaza olasılığı skoru üretiyor](https://www.sciencedirect.com/science/article/pii/S1877050926011294). Makale, sistemin bir veri setiyle doğrulandığını ve verimlilik ile veri kalitesinde kazanç sağladığını belirtiyor. Ancak yazarlar, ramak kala bildirimlerinin azlığı nedeniyle tahmin performansının sınırlı kaldığını da açıkça yazıyor.

Bu çekince pratik bir ders içeriyor: model ne kadar gelişmiş olursa olsun, düzenli ve ayrıntılı olay kaydı yoksa güvenilir tahmin üretmesi zor. Bir kaza tahmin projesine başlamadan önce ramak kala bildirim kültürünü ve kayıt kalitesini güçlendirmek daha anlamlı bir ilk adım olabilir. Yüzde 81 gibi çarpıcı kaza düşüşü iddiaları dolaşıyor; ancak bunların yöntemi ve veri seti açıklanmadığı için burada rakam olarak kullanmıyoruz.

## Giyilebilir sensörler: umut var, kanıt sınırlı

Giyilebilir cihazlar hareket, duruş, bel ve sırt yüklenmesi ya da fizyolojik göstergeler gibi verileri toplayıp yapay zekayla yorumluyor. Hedef, ergonomik riskleri veya yorgunluğu erken fark etmek.

BritSafe'in 2025 tarihli yazısı bu konuda sınırlı ama somut bir örnek veriyor: bel ve sırt yüklenmesini izleyen bir giyilebilir cihazın iki haftalık denemesinde [katılımcılar daha az yorgunluk bildirdi, yaralanma kaydedilmedi ve hastalık izni sıfırlandı](https://www.britsafe.org/safety-management/2025/ai-powered-wearables-transforming-workplace-health-and-safety). Aynı yazıda, anekdot bilginin tek başına karar dayanağı olmadığı da belirtiliyor. Örneklem çok küçük ve deneme süresi kısa olduğu için bu sonuçlar genellenemez.

Kısacası giyilebilir sensörler, iyi tasarlanmış bir pilotla denenmeye değer; kaza sayısında azalma vaadini ise temkinle karşılayın. Ayrıca sensör verisinin yorumlanması belirsizlik taşıyabilir, örneğin stres göstergeleri kişiye ve duruma göre değişir. Bu tür veri sağlıkla ilgili sayılabileceği için mahremiyet tarafı daha da hassastır. Konuya genel bakış için [giyilebilir cihazlar ve yapay zeka](/rehber/giyilebilir-cihazlar-ve-yapay-zeka/) rehberini okuyabilirsiniz.

## Çalışan mahremiyeti ve KVKK

İş güvenliği için kurulan bir kamera sistemi, kolayca bir çalışan izleme sistemine dönüşebilir. Bu fark hukuken de önemli. Satın Alma Dergisi'nde yayımlanan bir yazıya göre KVKK'nın 8 Haziran 2026 tarihli duyurusunda [işyerinde kamera kullanımı tamamen yasak değil, ancak çalışanın performansını izlemek, verimliliği ölçmek veya denetlemek amacıyla yapılan kamera takibi meşru amaç sayılmıyor](https://satinalmadergisi.com/isveren-calisanini-kamerayla-izleyebilir-mi/). Bu aktarım ikincil bir kaynaktan geldiği için uygulamaya geçmeden önce KVKK'nın resmi metnini kontrol edin ve hukuk danışmanınızla görüşün.

Bu çerçevede pratik ilkeler şöyle sıralanabilir:

- Amacı baştan yazılı olarak güvenlikle sınırlayın; verimlilik veya performans ölçümü gibi ikinci bir amaç eklemeyin.
- Çalışanları hangi verinin neden işlendiğine dair açıkça bilgilendirin.
- Gerekmiyorsa kişiyi tanımlamayın; tespiti ekipman eksikliği veya bölge ihlali düzeyinde, kişi kimliğinden bağımsız tutmayı deneyin.
- Kayıtların kimde, ne kadar süreyle saklanacağını belirleyin.

AB tarafında da benzer bir hassasiyet var. İşyerinde duygu tanıma yasağı, AI Act'in 5(1)(f) maddesine dayanarak 2 Şubat 2025'ten beri yürürlükte; [yalnızca tıbbi ve güvenlik nedenleri istisna](https://cdt.org/insights/eu-ai-act-brief-pt-4-ai-at-work/) sayılıyor. Yani yorgunluk ya da stres gibi duygusal durumu çıkaran sistemlerde hukuki çerçeveyi ayrıca incelemek gerekir. Daha geniş bağlam için [AB Yapay Zeka Yasası ve Türkiye](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/) rehberine, çalışan izleme konusunda [çalışan izleme ve yapay zeka](/rehber/calisan-izleme-ve-yapay-zeka/) yazısına göz atın.

## Türkiye'de durum

Türkiye'de fabrika ve şantiyeler için KKD denetimi sunan yerli firmalar var. Movita, Nemesis Elektronik, CX Teknoloji ve SE-OPS gibi şirketler bu alanda çözüm tanıtıyor; örneğin [Movita'nın fabrika çözümleri sayfası](https://movita.com.tr/cozumler/grup/fabrika-cozumleri) bu kategoriye girer. Ancak bu sayfalarda ölçülmüş sonuç veya bağımsız bir vaka paylaşılmıyor, yalnızca ürün tanıtımı yer alıyor. Dolayısıyla Türkiye'deki bir işletmede bu çözümlerin kaza oranına etkisi şimdilik kanıtlanmış değil. Sektörün genel tablosu için [Türkiye'de sanayide yapay zeka](/rehber/turkiyede-sanayide-yapay-zeka/) rehberine bakabilirsiniz.

## Nasıl başlanır

Önce sorunu tanımlayın: en sık görülen ramak kala olayı nedir, hangi alanda KKD ihlali artıyor, hangi görev ergonomik riske yol açıyor? Teknolojiyi bu sorunun çözümü olarak seçin, tersini yapmayın.

1. **Küçük bir pilot kurun.** Tek bir alan veya hat seçin, kamera yerleşimini ve aydınlatmayı gerçek koşullarda deneyin.
2. **Başarı ölçütünü önceden belirleyin.** Yanlış alarm oranını, kaçırılan ihlalleri ve sahadaki kullanım kolaylığını ölçün; satıcının verdiği rakama güvenmeyin.
3. **İSG uzmanını ve çalışan temsilcilerini sürece katın.** Sistemin amacını ve sınırlarını birlikte netleştirin.
4. **Hukuki çerçeveyi önceden netleştirin.** KVKK yükümlülüklerini ve veri saklama kurallarını uygulamadan önce hukuk danışmanıyla gözden geçirin.
5. **Alarmları ceza için değil, önlem için kullanın.** Çalışanın tepkisi, sistemin kabul görmesini belirler.

## Riskler ve sınırlar

Yanlış alarm ve kaçırılan tespit her sistemde olur; kamera tabanlı çözümlerde ışık, mesafe ve açı bu oranı doğrudan etkiler. Alarmlara aşırı güvenmek, sahadaki insan gözlemini zayıflatabilir. Kaza tahmin modelleri veri kalitesine bağımlıdır; az sayıda ramak kala kaydı güvenilir tahmini engelleyebilir. Giyilebilir sensörlerde ise saha doğrulaması sınırlı ve verinin yorumu belirsiz kalabiliyor. En önemli risk de hukuki: güvenlik için toplanan veri çalışan izlemeye kayarsa hem KVKK hem çalışan güveni açısından sorun doğar. Bu nedenle bu teknolojileri tek başına çözüm değil, risk değerlendirmesinin bir girdisi olarak konumlandırın. Bu yazı hukuki veya mesleki İSG görüşü değildir; kararlarınızda yetkin bir İSG uzmanı ve hukuk danışmanıyla çalışın.
