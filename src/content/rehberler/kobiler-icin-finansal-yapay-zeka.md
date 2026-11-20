---
title: "KOBİ'ler için yapay zeka ile nakit akışı, fatura ve muhasebe rehberi"
description: "KOBİ'lerde fatura okuma, nakit akışı tahmini, tahsilat takibi ve muhasebe yazılımlarındaki yapay zeka özellikleri; mali müşavirle çalışma ve veri güvenliği için pratik bir yol haritası."
date: 2026-11-20
summary:
  - "Yapay zeka fatura okuma, işlem sınıflandırma ve nakit tahmininde zaman kazandırır ama çıktıların insan onayından geçmesi gerekir."
  - "Tahmin araçları yeterli geçmiş veri ister; satıcı sayfalarındaki başarı rakamları bağımsız olarak doğrulanmış değildir."
  - "Kişisel veri içeren belgeleri araçlara vermeden önce KVKK'nın üretken yapay zeka rehberini ve mali müşavirinizin görüşünü esas alın."
level: Orta
topic: İş ve kariyer
terms: [yapay-zeka, makine-ogrenmesi, halusinasyon]
sector: finans
faq:
  - q: "Yapay zeka mali müşavirin yerini alır mı?"
    a: "Bu rehberde incelenen araçlar karar vermiyor; sınıflandırma ve eşleştirme önerisi sunuyor, onay insanda kalıyor. Hangi kaydın nasıl işleneceğine dair kararları mali müşavirinizle birlikte verin."
  - q: "Nakit akışı tahmini için ne kadar geçmiş veriye ihtiyaç var?"
    a: "Bir kaynağa göre tahmin araçları için en az bir yıllık müşteri faturası geçmişi yaygın asgari kabul ediliyor; Microsoft üç yıllık geçmişi öneriyor. Veriniz bundan kısaysa tahminlere temkinli yaklaşın."
  - q: "Fatura verisini yapay zeka aracına yüklemek KVKK açısından sorun olur mu?"
    a: "Belge kişisel veri içeriyorsa evet, risk doğar. KVKK rehberi doğrudan tanımlayıcı verilerin ve hassas bilgilerin araçlara girilmemesini öneriyor; mümkünse bu alanları çıkarıp yükleyin."
sources:
  - title: "Paraşüt: 2026 Yılında e-Arşiv ve e-Fatura Zorunluluğu"
    url: "https://www.parasut.com/blog/e-fatura-ve-e-arsiv-zorunlulugu"
  - title: "Cari Plus: Yapay zeka destekli fatura okuma ve veri girişi otomasyonu"
    url: "https://cariplus.com.tr/icerik/cari-plus-ile-yapay-zeka-destekli-fatura-okuma-ve-veri-girisi-otomasyonu-kobiler-icin-zamandan-tasarruf-ve-hata-azaltma-rehberi"
  - title: "Dualentry: Best AI Accounting Software 2026"
    url: "https://www.dualentry.com/blog/best-ai-accounting-software"
  - title: "Fiscus AI"
    url: "https://fiscusai.org/"
  - title: "Bluevine: 39% of SMBs Have Less Than a Month of Cash Reserve"
    url: "https://www.bluevine.com/blog/cash-flow-management-survey"
  - title: "Aleph: AI cash flow forecasting tools"
    url: "https://www.getaleph.com/answers/ai-cash-flow-forecasting-tools"
  - title: "Nakdin"
    url: "https://www.nakdin.com/"
  - title: "Zumbul Hukuk: KVKK Üretken Yapay Zekâ Rehberi duyurusu"
    url: "https://www.zumbul.av.tr/tr/duyurular/uretken-yapay-zeka-rehberi-kvkk-yayinlanmistir"
---

Küçük bir işletmede nakit akışı, fatura takibi ve muhasebe kayıtları çoğunlukla aynı birkaç kişinin üzerinde toplanır. Yapay zeka bu işlerin bir kısmını hızlandırabilir: belgeleri okuyabilir, banka hareketlerini eşleştirmeye yardım edebilir, ödeme gecikmelerine dair uyarı üretebilir. Ancak bu yazıdaki bilgilerin önemli bir bölümü yazılım firmalarının kendi sayfalarına dayanıyor; bu yüzden vaatlerle doğrulanmış sonuçları ayırmaya çalıştık. Daha geniş bir çerçeve için [KOBİ'ler için finansal yapay zeka](/rehber/kobiler-icin-finansal-yapay-zeka/) rehberine de bakabilirsiniz.

## Önce e-belge zorunluluklarını netleştirin

Yapay zekadan önce işletmenizin hangi belge düzeninde olduğu belli olmalı, çünkü otomasyon bu düzenin üzerine kurulur. Paraşüt'ün anlatımına göre brüt satış hasılatı [3 milyon TL ve üzeri olan işletmeler e-fatura uygulamasına geçmek zorunda](https://www.parasut.com/blog/e-fatura-ve-e-arsiv-zorunlulugu); geçiş için 2025 cirosuna bakılıyor ve tarih 1 Temmuz 2026. Aynı kaynak, e-fatura mükellefi olmayan alıcılara yönelik parasal sınırın genel kural olarak kaldırıldığını da belirtiyor.

Kaynaklar arasında tutarsızlıklar var. Eşiğin hangi hesap döneminden beri geçerli olduğu ve basit usul mükellefleri için kâğıt fatura istisnasının sınırı sayfalar arasında farklı yazılıyor. Bu yüzden eşiğinizi ve tarihinizi blog yazılarından değil, Gelir İdaresi Başkanlığı'nın tebliğ metninden ve mali müşavirinizden teyit edin.

## Fatura okuma ve muhasebe yazılımlarındaki özellikler

Fatura okuma, KOBİ'ler için en somut kullanım alanı. Cari Plus, fatura ve e-arşiv belgelerini OCR (görüntüden metin okuma) ve yapay zeka ile okuyup muhasebe yazılımına aktardığını [anlatıyor](https://cariplus.com.tr/icerik/cari-plus-ile-yapay-zeka-destekli-fatura-okuma-ve-veri-girisi-otomasyonu-kobiler-icin-zamandan-tasarruf-ve-hata-azaltma-rehberi); ancak bu bir satıcı beyanı ve bağımsız bir ölçüm sunulmuyor. Yurtdışındaki popüler yazılımlarda benzer özellikler daha ayrıntılı anlatılıyor. Dualentry'nin derlemesine göre QuickBooks Online'da [makine öğrenmesi işlemleri otomatik kategorilere ayırıyor ve anormal kayıtları işaretliyor](https://www.dualentry.com/blog/best-ai-accounting-software).

Türkiye'de e-fatura ile çalışan bir ürün olan Fiscus AI ise [banka hareketleri için eşleştirme ve sınıflandırma önerileri ile risk sinyalleri ürettiğini](https://fiscusai.org/) ve kararların insan onayına dayandığını yazıyor. Burada dikkat edilecek nokta, bu araçların sonuç vermekten çok öneri sunması. Hangi özelliklerin Türkiye'deki sürümde, Türkçe belgelerle ve yerel mevzuata uygun çalıştığını deneme sürümünde kendi belgelerinizle sınayın.

Kendi örnek belgelerinizle sınarken şunlara bakın:

- Tutar, tarih, vergi numarası ve KDV alanları doğru okunuyor mu?
- Aynı fatura ikinci kez yüklendiğinde sistem uyarıyor mu?
- Hatalı bir kaydı düzelttiğinizde düzeltme izlenebiliyor mu?

## Nakit akışı tahmini: veri ve beklenti

Nakit akışı tahmini, işletmelerin ilgisinin yüksek olduğu bir alan. Bluevine'in 774 ABD'li işletme sahibiyle yaptığı ankette [işletmelerin yüzde 39'unun bir aydan az nakit tamponu var](https://www.bluevine.com/blog/cash-flow-management-survey); yüzde 67,9'u nakit akışı yönetimi için yapay zeka araçlarına ilgi duyduğunu, yüzde 13'ü karşı çıktığını söylüyor. Bunlar ABD verileri; Türkiye'deki KOBİ'ler için karşılığı olduğunu söyleyemeyiz.

Tahminin kalitesi büyük ölçüde veriye bağlı. Aleph'in derlemesine göre [tahmin araçları için en az bir yıllık müşteri faturası geçmişi yaygın asgari sayılıyor](https://www.getaleph.com/answers/ai-cash-flow-forecasting-tools); Microsoft ise üç yıllık geçmişi öneriyor. Aynı kaynak, bazı küçük işletme uygulamalarının tahmini fatura vadesi yerine müşterinin gerçekte ne zaman ödeme yaptığına bakarak çalıştığını belirtiyor. Bu fark önemli: vadesi 30 gün olan bir faturayı 55. günde ödeyen müşteri, tahmini ciddi biçimde kaydırır.

Türkiye'de Nakdin, [fatura, satış, gider ve ödeme verilerinden 12 aylık nakit tahmini yaptığını ve nakit açığı için uyarı verdiğini](https://www.nakdin.com/) anlatıyor. Bu ürün sayfasındaki bir anlatım; doğruluk oranı için bağımsız bir doğrulama yok. Tahminleri bir karar aracı değil, ikinci bir göz olarak kullanın. Veriniz kısaysa ya da düzensizse sonuçlara daha da temkinli yaklaşın. Tablolarla kendi analizinizi yapmak isterseniz [Excel ve veri analizi rehberi](/rehber/yapay-zeka-ile-excel-ve-veri-analizi/) bir başlangıç olabilir.

## Tahsilat takibi

Tahsilat tarafında yapay zekanın katkısı dolaylı. E-fatura verisi düzenli ve dijital olduğunda cari hesap ve tahsilat takibi kolaylaşıyor; hangi müşterinin ne kadar geciktirdiğini görmek, yapay zekadan bağımsız olarak da işe yarıyor. Müşteri bazında gecikme alışkanlığını izlemek, nakit tahminini de güçlendiren girdilerden biri.

Bu alanda Türkiye için tahsilat süreleri ya da gecikme oranlarına dair resmi veya bağımsız bir veriye ulaşamadık; bu nedenle ortalama bir gecikme süresi iddiasında bulunmuyoruz. Otomatik hatırlatma gönderen araçlar kullanacaksanız metinleri ve gönderim sıklığını önceden kendiniz belirleyin; müşteri ilişkisi sizin sorumluluğunuzda.

## Mali müşavirle çalışma

Otomasyon, mali müşavirle iş bölümünü değiştirir ama ortadan kaldırmaz. Önerileri insanın onayladığı model, incelediğimiz kaynaklarda ortak bir ilke olarak öne çıkıyor; Fiscus AI de kararların insan onayına dayandığını belirtiyor. Pratikte bunun anlamı şu: yazılım kaydı hazırlar, müşavir kritik noktaları denetler.

Müşavirinizle şu başlıkları konuşun:

- Hangi belge türlerinde otomatik sınıflandırmaya güvenilecek, hangilerinde elle kontrol yapılacak?
- Hatalı kategori düzeltmeleri kim tarafından, hangi sıklıkla yapılacak?
- Beyanname ve vergi kararlarında yazılım önerisi nasıl değerlendirilecek?

Meslek kuruluşlarının yapay zeka kullanımına dair resmi bir rehberine ulaşamadığımız için bu iş bölümünü yazılı bir iç kurala bağlamanız yararlı olur. [Şirket içi yapay zeka politikası](/rehber/sirket-ici-yapay-zeka-politikasi/) rehberi bu çerçeveyi kurmanıza yardımcı olabilir.

## Veri güvenliği ve KVKK

Fatura ve fişler ad, adres, kimlik ya da vergi numarası gibi bilgiler içerebilir. Kişisel Verileri Koruma Kurumu (KVKK) 24 Kasım 2025'te "15 Soruda Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi"ni yayımladı. Rehberi aktaran bir hukuk bürosu duyurusuna göre [ad-soyad ve kimlik gibi doğrudan tanımlayıcı verilerin ve finans dahil hassas bilgilerin yapay zeka araçlarına girilmemesi öneriliyor](https://www.zumbul.av.tr/tr/duyurular/uretken-yapay-zeka-rehberi-kvkk-yayinlanmistir).

Uygulamada bu, belgeyi bir araca yüklemeden önce gereksiz kişisel alanları çıkarmak ve işletmenizin hangi aracı hangi veriyle kullanacağını önceden belirlemek demek. Müşteri verisiyle çalışan her araç için sözleşme ve veri işleme koşullarını okuyun; emin değilseniz uzmana danışın. Ayrıntılar için [KVKK ve yapay zeka araçları](/rehber/kvkk-ve-yapay-zeka-araclari/) rehberine göz atın.

## Küçük başlayın, ölçün

Tüm süreci tek seferde dönüştürmek yerine tek bir işle başlayın: örneğin aylık gider faturalarının okunması. Önce kendi geçmiş belgelerinizle deneyin, hata türlerini not edin, sonra müşavirinizle birlikte sonuçları karşılaştırın. Hata oranı kabul edilebilir düzeye inmeden kapsamı genişletmeyin.

Satıcı sayfalarındaki zaman tasarrufu ve doğruluk iddialarını tek başına ölçüt almayın; kendi belge hacminizde harcadığınız süreyi önce ve sonra ölçmek daha güvenilir bir karşılaştırma verir. Finans ekiplerinin daha geniş kullanım alanları için [finans ekipleri için yapay zeka](/rehber/finans-ekipleri-icin-yapay-zeka/) yazımızı da okuyabilirsiniz. Bu yazı yatırım, vergi veya hukuki tavsiye değildir; vergi ve beyan konularında yetkili bir mali müşavire danışın.
