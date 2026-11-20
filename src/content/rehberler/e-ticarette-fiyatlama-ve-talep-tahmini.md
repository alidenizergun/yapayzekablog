---
title: "E-ticarette yapay zeka ile fiyatlama, talep tahmini ve stok yönetimi rehberi"
description: "Dinamik fiyatlama, talep tahmini ve stok optimizasyonunun ne işe yaradığını, küçük satıcıların nasıl başlayabileceğini ve fiyat algoritmalarının rekabet hukuku risklerini ele alan pratik bir rehber."
date: 2026-11-20
summary:
  - "Fiyatlama, talep tahmini ve stok kararları aynı veriyi kullanır; veri düzgün değilse hangi araç seçilirse seçilsin sonuç zayıf kalır."
  - "Küçük satıcılar için en mantıklı başlangıç, mevcut satış verisini tablo üzerinde analiz edip küçük bir ürün grubunda pilot yapmaktır."
  - "Fiyat algoritmaları ABD'de ve Türkiye'de rekabet otoritelerinin gündeminde; aynı yazılımı rakiplerle paylaşmak ve kişisel veriyle fiyat belirlemek ayrı riskler taşıyor."
level: Orta
topic: İş ve kariyer
terms: [makine-ogrenmesi, denetimli-ogrenme, egitim-verisi, yapay-zeka]
sector: e-ticaret
faq:
  - q: "Küçük bir e-ticaret mağazası dinamik fiyatlamayla başlamalı mı?"
    a: "Önce talep tahmini ve stok takibini oturtmak daha güvenli bir başlangıçtır. Dinamik fiyatlamaya geçerseniz küçük bir ürün grubunda, alt ve üst fiyat sınırı koyarak deneyin."
  - q: "Rakiplerle aynı fiyatlama yazılımını kullanmak hukuken sorun olur mu?"
    a: "ABD'deki bazı davalarda bu durum rekabet hukuku açısından incelendi; Üçüncü Daire 29 Temmuz 2026'da böyle bir davanın reddini bozdu. Türkiye'deki durumunuz için bir rekabet hukuku avukatına danışın."
  - q: "Yapay zeka fiyat ve stok önerisini doğrudan uygulamak doğru mu?"
    a: "Başlangıçta önerileri insan onayından geçirmek daha sağlıklıdır. Öneriyi uygulamadan önce geçmiş verinizle ve marj sınırlarınızla karşılaştırın."
sources:
  - title: "Skadden: New York Algorithmic Pricing Law Enacted"
    url: "https://www.skadden.com/insights/publications/2026/01/new-york-algorithmic-pricing-law"
  - title: "Orrick: Algorithmic Pricing Under Scrutiny: What You Need to Know"
    url: "https://www.orrick.com/en/Insights/2026/06/Algorithmic-Pricing-Under-Scrutiny-What-You-Need-to-Know"
  - title: "Jones Walker: Algorithmic Pricing Risk: Business Implications From California's New Law and Beyond"
    url: "https://www.joneswalker.com/en/insights/blogs/ai-law-blog/algorithmic-pricing-risk-business-implications-from-californias-new-law-and-bey.html"
  - title: "Paul Weiss: The Antitrust Landscape for Algorithmic Pricing: Key Decisions and Takeaways"
    url: "https://www.paulweiss.com/insights/client-memos/the-antitrust-landscape-for-algorithmic-pricing-key-decisions-and-takeaways"
  - title: "Anadolu Ajansı: Rekabet Kurumu, algoritmalar kullanılarak yapılan rekabet ihlallerini yapay zeka ile belirleyecek"
    url: "https://www.aa.com.tr/tr/ekonomi/rekabet-kurumu-algoritmalar-kullanilarak-yapilan-rekabet-ihlallerini-yapay-zeka-ile-belirleyecek/3623865"
  - title: "Ekonomim: Rekabet Kurumu, 2026'da dijital ekosistemi yakından izleyecek"
    url: "https://www.ekonomim.com/sehirler/rekabet-kurumu-2026da-dijital-ekosistemi-yakindan-izleyecek-haberi-863079"
  - title: "Oğuz Kara Avukatlık: Şirketlerde Yapay Zekâ Kullanım Politikası"
    url: "https://www.oguzkara.av.tr/post/sirketlerde-yapay-zeka-kullanim-politikasi"
---

Fiyat belirlemek, ne kadar stok tutacağınızı seçmek ve gelecek haftaki satışı tahmin etmek e-ticaretin en çok emek isteyen üç işidir. Yapay zeka bu işlerde makine öğrenmesi (machine learning) yöntemleriyle geçmiş satış verisinden örüntü çıkarıp öneri üretir. Ancak bu öneriler her işletmede aynı ölçüde işe yaramaz ve fiyat tarafında hukuki sınırlar vardır. Bu rehber üç alanı, küçük satıcıların erişebileceği yöntemleri ve rekabet hukuku risklerini pratik bir sırayla anlatıyor.

## Üç iş, tek veri temeli

Fiyatlama, talep tahmini ve stok yönetimi birbirine bağlıdır. Fiyatı değiştirdiğinizde talep değişir, talep değişince stok ihtiyacı da değişir. Bu yüzden üçü de aynı temele dayanır: temiz ve düzenli satış verisi.

Başlamadan önce şunları kontrol edin:

- Ürün bazında günlük veya haftalık satış adetleri tutuluyor mu?
- Kampanya, indirim ve stoksuz kalınan günler kayıtlarda işaretli mi?
- İade ve iptaller ayrı izleniyor mu?

Stoksuz kalınan günlerde satış sıfır görünür; bu, talebin olmadığı anlamına gelmez. Bunu işaretlemezseniz model talebi olduğundan düşük öğrenir. Verinizin nasıl düzenleneceği konusunda [yapay zeka ile Excel ve veri analizi](/rehber/yapay-zeka-ile-excel-ve-veri-analizi/) rehberi yardımcı olabilir.

## Dinamik fiyatlama: ne yapar, sınırı nerede

Dinamik fiyatlama, fiyatı talep, stok durumu, rakip fiyatları ve zaman gibi sinyallere göre otomatik ya da yarı otomatik ayarlamak demektir. Yapay zeka burada "hangi fiyatta ne kadar satarım" sorusuna geçmiş verilerden tahmin üretir.

Sınırlar da açıktır:

- Model yalnızca gördüğü veriden öğrenir; yeni ürünlerde ya da ani pazar değişimlerinde zayıf kalabilir.
- Marj tabanını siz belirlemezseniz sistem satışı artırmak için kârı eritecek bir fiyat önerebilir.
- Müşteri aynı ürünün fiyatının sık değiştiğini fark ederse güven zedelenebilir.

Bu nedenle alt ve üst fiyat sınırı koyun, değişiklik sıklığını sınırlayın ve ilk aşamada öneriyi uygulamadan önce kendiniz onaylayın.

## Talep tahmini ve stok optimizasyonu

Talep tahmini, belirli bir dönemde hangi üründen kaç adet satacağınızı öngörme işidir. Mevsimsellik, kampanya takvimi ve geçmiş satış trendi en temel girdilerdir. Stok optimizasyonu ise bu tahmini sipariş zamanı ve miktarına çevirir: ne zaman, ne kadar sipariş vermelisiniz ki hem raf boş kalmasın hem de depo gereksiz yere dolmasın.

İki hatanın maliyeti farklıdır. Az stok kaçan satış demektir, fazla stok ise bağlanmış para ve indirimle eritilen ürün. Hangi hatanın sizin için daha pahalı olduğunu ürün grubu bazında düşünün; hızlı tükenen ve tedarik süresi uzun ürünlerde güvenlik stoğu, modası geçen ürünlerde düşük stok mantıklı olabilir.

Tahmini tek bir sayı olarak değil, bir aralık olarak okumak daha sağlıklıdır. Modelin kaç haftalık geçmişe dayandığını ve hangi ürünlerde sık yanıldığını izleyin.

## Büyük perakendecilerin örnekleri ve rakamlara yaklaşım

Büyük perakendeciler bu alanda kendi veri bilimi ekipleriyle çalışır; milyonlarca ürün ve çok sayıda mağaza için tahmin üretirler. Küçük bir satıcının bu altyapıyı birebir kopyalaması gerekmez ve çoğu zaman mümkün de değildir.

Satıcı bloglarında ve danışmanlık yazılarında "şu kadar gelir artışı" ya da "şu kadar stok azalması" gibi vaatler sık geçer. Bunlar çoğunlukla çözümü satan ya da uygulayan tarafın kendi ölçümüdür; asıl raporu görmeden bu rakamları hedef kabul etmeyin. Kendi başarı ölçütünüzü pilot çalışmayla belirleyin: tahmin hatası, stoksuz kalınan gün sayısı ve marj gibi.

## Küçük satıcılar için erişilebilir başlangıç

Büyük bir sisteme yatırım yapmadan da başlayabilirsiniz:

1. **Veriyi tabloya dökün.** Pazaryeri ve mağaza panelinden son dönem satışlarını ürün bazında dışa aktarın.
2. **Basit bir tahminle başlayın.** Hareketli ortalama ve mevsim farkı gibi sade yöntemler, çoğu zaman karmaşık modelle başlamaktan daha anlaşılırdır. Genel amaçlı bir yapay zeka asistanından tablo üzerinde bu analizi yapmasını isteyebilirsiniz; sonuçları örnek ürünlerle elle kontrol edin.
3. **Küçük bir ürün grubunda pilot yapın.** Tüm kataloğu değil, en çok satan birkaç ürünü seçin.
4. **Sonucu ölçün.** Öneriye uyduğunuz ve uymadığınız ürünleri karşılaştırın.
5. **Önerilerde son kararı verin.** Fiyat ve sipariş miktarını otomatiğe bağlamadan önce önerilerin tutarlılığını birkaç dönem izleyin.

Pazaryerinde satış yapıyorsanız pazaryeri satıcıları için yapay zeka ve [küçük işletmeler için yapay zeka](/rehber/kucuk-isletmeler-icin-yapay-zeka/) rehberlerine de göz atın. Daha geniş bir tabloya ise e-ticarette yapay zeka kullanım alanları sayfasından ulaşabilirsiniz.

## Fiyat algoritmalarının rekabet hukuku riskleri

Fiyatı algoritmaya bırakmak hukuki sorumluluğu ortadan kaldırmaz. ABD'de 2026'da bu alanda birkaç gelişme yaşandı. Aşağıdaki bilgiler hukuki görüş değildir; kendi durumunuz için bir avukata danışın.

**Ortak yazılım ve anlaşma iddiaları.** Üçüncü Daire, 29 Temmuz 2026'da Cornish-Adebiyi / Caesars Entertainment davasında, aynı fiyatlama yazılımını kullanan Atlantic City otellerine yönelik rekabet davasını reddeden alt mahkeme kararını [bozdu](https://www.paulweiss.com/insights/client-memos/the-antitrust-landscape-for-algorithmic-pricing-key-decisions-and-takeaways). Dokuzuncu Daire de bir temyiz kararında, rakiplerin aynı yazılımı kullanıp önerilerini izlemeyi kabul etmesinin yatay anlaşma sayılabileceğini [belirtti](https://www.joneswalker.com/en/insights/blogs/ai-law-blog/algorithmic-pricing-risk-business-implications-from-californias-new-law-and-bey.html). Mayıs 2026'da bir ABD Adalet Bakanlığı yetkilisi de rakiplerin hassas fiyat verilerinin ortak bir algoritmada kullanılacağını bilerek katılmasının suç kapsamına girebileceğini [söyledi](https://www.paulweiss.com/insights/client-memos/the-antitrust-landscape-for-algorithmic-pricing-key-decisions-and-takeaways).

**Yeni yasalar.** Kaliforniya'da AB 325, 1 Ocak 2026'da yürürlüğe girdi; anlaşmalı fiyatlamada "ortak fiyatlama algoritmalarının" kullanılmasını ve dağıtılmasını yasaklıyor, yazılım sağlayıcıları için de doğrudan sorumluluk [getiriyor](https://www.joneswalker.com/en/insights/blogs/ai-law-blog/algorithmic-pricing-risk-business-implications-from-californias-new-law-and-bey.html). New York'ta kişisel veriyle fiyat belirleyen algoritmaları kullanan şirketlerin bunu açıklamasını zorunlu kılan yasa yine 1 Ocak 2026'da yürürlüğe girdi; ihlal başına 1.000 dolara kadar ceza ve ilk ihlalde düzeltme fırsatı [öngörüyor](https://www.skadden.com/insights/publications/2026/01/new-york-algorithmic-pricing-law). Maryland'de büyük market zincirleri ve üçüncü taraf teslimat hizmetleri için dinamik fiyatlamayı ve kişisel veriyle daha yüksek fiyat belirlemeyi yasaklayan düzenleme 1 Ekim 2026'da yürürlüğe [giriyor](https://www.orrick.com/en/Insights/2026/06/Algorithmic-Pricing-Under-Scrutiny-What-You-Need-to-Know). Federal Ticaret Komisyonu (FTC) da değişken ve kişiselleştirilmiş fiyatlamanın açıklanmasına yönelik bir ön duyuru yayımladı.

Çıkarılacak pratik ders şudur: rakiplerle ortak bir fiyat havuzu oluşturan ya da onların hassas verisini besleyen sistemlerden uzak durun, müşteri verisine dayalı kişiselleştirilmiş fiyatlamada ise şeffaflığı ve kişisel verilerin korunması kurallarını ayrıca değerlendirin. Bunun için yapay zeka ile kişiselleştirme ve KVKK rehberi başlangıç noktası olabilir.

## Türkiye'de Rekabet Kurumu'nun yaklaşımı

Rekabet Kurumu Başkanı Birol Küle, şirketlerin fiyatları algoritmalarla belirlediğini ve fiyat sabitlemesi gibi ihlallerin algoritmalarla otomatik gerçekleşebildiğini [söyledi](https://www.aa.com.tr/tr/ekonomi/rekabet-kurumu-algoritmalar-kullanilarak-yapilan-rekabet-ihlallerini-yapay-zeka-ile-belirleyecek/3623865). Kurum, bu ihlalleri yapay zeka kullanarak tespit edecek bir karşı denetim sistemi planladığını da açıkladı. Küle ayrıca öğrenen algoritmaların insan müdahalesi olmadan fiyat koordinasyonu, yani "algoritmik danışıklılık" riski doğurabildiğini belirtti; kurum 2026'da dijital ekosistemi yakından [izleyeceğini](https://www.ekonomim.com/sehirler/rekabet-kurumu-2026da-dijital-ekosistemi-yakindan-izleyecek-haberi-863079) bildirdi.

Bir hukuk bürosunun aktardığına göre Rekabet Kurulu'nun 03.10.2024 tarihli, 24-40/950-409 sayılı kararında bir e-pazaryerinin satıcılara sunduğu otomatik fiyatlandırma mekanizması incelendi ve karar, algoritmaların gizli anlaşmayı kolaylaştırabileceği endişesini [dile getiriyor](https://www.oguzkara.av.tr/post/sirketlerde-yapay-zeka-kullanim-politikasi). Karar metnini resmi kaynaktan kontrol etmek en doğrusudur. Pazaryerinin sunduğu otomatik fiyat araçlarını kullanıyorsanız, bu araçların nasıl çalıştığını ve rakiplerin de aynı aracı kullanıp kullanmadığını bilmeniz iyi bir başlangıç olur.

## Uygulamaya geçmeden önce kontrol listesi

- Veriniz temiz mi ve stoksuz günler işaretli mi?
- Fiyat için alt ve üst sınır tanımladınız mı?
- Rakip verisini yalnızca herkese açık kaynaklardan mı alıyorsunuz?
- Kullandığınız yazılımın rakiplerle ortak fiyat önerisi üretip üretmediğini sağlayıcıdan sordunuz mu?
- Müşteri verisini fiyatlamada kullanıyorsanız aydınlatma ve açıklama yükümlülüklerini gözden geçirdiniz mi?
- Önerileri ne zaman ve kim onaylıyor?

Bu soruların birkaçına cevabınız yoksa otomasyonu bir sonraki adıma bırakın. Hukuki sorular için bir rekabet hukuku avukatına danışın.
