---
title: "Yapay zeka ile kişiselleştirilmiş ürün önerileri nasıl çalışır?"
description: "Öneri sistemlerinin mantığı, büyük perakendecilerin rakamlarına neden temkinli bakılmalı, küçük satıcıların hazır araçları, KVKK ve açık rıza, yanlılık riskleri."
date: 2026-11-20
summary:
  - "Öneri sistemleri geçmiş etkileşimlerden ve ürün özelliklerinden öğrenir; işbirlikçi, içerik tabanlı ve hibrit yöntemler öne çıkar."
  - "Büyük perakendecilere ait etki rakamlarının çoğu ikincil kaynaklardan geliyor; kendi mağazanızdaki test sonuçları daha güvenilirdir."
  - "Profilleme ve çerez kullanımında açık rıza, aydınlatma ve itiraz hakkı gündeme gelir; popülerlik yanlılığı da ayrıca izlenmelidir."
level: Orta
topic: İş ve kariyer
terms: [makine-ogrenmesi, yapay-zeka-onyargisi, pekistirmeli-ogrenme, yapay-zeka]
sector: e-ticaret
faq:
  - q: "Küçük bir mağaza öneri sistemi için nereden başlamalı?"
    a: "Shopify'ın kendi blogu, önce sık ziyaret edilen bir ürün sayfasına ilgili ürün önerisi eklemenizi, ardından tıklama ve satın almaları izlemenizi öneriyor. Yerleşik özelliklerle başlayıp sonuç görürseniz ücretli uygulamaya geçmek daha mantıklıdır."
  - q: "Kişiselleştirilmiş öneriler için her zaman açık rıza gerekir mi?"
    a: "Bir hukuk sitesine göre pazarlama amaçlı profilleme çoğu durumda açık rızaya dayanıyor ve çerez kullanıyorsanız ayrıca çerez rızası gerekiyor. Kesin değerlendirme için KVKK metnine ve bir hukuk uzmanına başvurun."
  - q: "Öneri motoru neden hep aynı popüler ürünleri gösterir?"
    a: "Akademik çalışmalara göre algoritmalar az sayıda popüler ürünü sık önerebiliyor ve önerilere verilen tepkiler sisteme geri girdikçe bu eğilim güçleniyor. Bu yüzden öneri çeşitliliğini düzenli izlemek gerekir."
sources:
  - title: "Shopify: AI Recommendation Systems"
    url: "https://www.shopify.com/blog/ai-recommendation-system"
  - title: "Real Python: Build a Recommendation Engine With Collaborative Filtering"
    url: "https://realpython.com/build-recommendation-engine-collaborative-filtering/"
  - title: "Ecosire: Yapay Zeka, 2026'da E-ticaret Operasyonlarını Nasıl Dönüştürüyor?"
    url: "https://ecosire.com/tr/blog/ai-transforming-ecommerce-operations-2026"
  - title: "Konsorsiyum Legal: Profilleme Nedir?"
    url: "https://konsorsiyumlegal.com/kavramlar/profilleme/"
  - title: "Nesil Teknoloji: KVKK ve Yapay Zeka, Otomatik Karar Alma ve Profilleme"
    url: "https://www.nesilteknoloji.com/yapay-zeka-profilleme-ve-kvkk/"
  - title: "Bilişim ve Hukuk: Yapay Zekâ Kullanırken KVKK Uyumu"
    url: "https://www.bilisimvehukuk.net/icerik/yapay-zeka-kullanirken-kvkk-uyumu-nasil-saglanir"
  - title: "arXiv: Feedback Loop and Bias Amplification in Recommender Systems"
    url: "https://arxiv.org/abs/2007.13019"
  - title: "ACM: Bias and Debias in Recommender System"
    url: "https://dl.acm.org/doi/10.1145/3564284"
---

Bir mağazada ürün sayfasının altında "bunlar da ilginizi çekebilir" bölümünü görmüşsünüzdür. Bu bölümün arkasında genellikle bir makine öğrenmesi modeli çalışır: geçmiş davranışlardan örüntü çıkarır ve her ziyaretçiye hangi ürünün gösterileceğine karar vermeye çalışır. Bu rehber, mantığın nasıl işlediğini, küçük bir satıcı olarak nereden başlayabileceğinizi ve KVKK ile yanlılık açısından nelere dikkat etmeniz gerektiğini anlatıyor. Genel bağlam için [e-ticarette yapay zeka kullanım alanları](/rehber/e-ticarette-yapay-zeka-kullanim-alanlari/) rehberine de göz atabilirsiniz.

## Öneri sistemi ne yapar?

Öneri sisteminin işi, çok sayıda ürün arasından bir kişinin ilgisini çekme ihtimali yüksek olanları öne çıkarmaktır. Girdi olarak tıklamalar, satın almalar, sepete eklenenler ve ürünün kendi nitelikleri kullanılır. Çıktı ise ürün sayfası, sepet, ödeme ekranı ya da e-posta gibi noktalarda gösterilen kısa bir listedir. Sistemin kalitesi büyük ölçüde elinizdeki verinin miktarına ve temizliğine bağlıdır; yeni bir mağazada veri azdır ve sonuçlar da daha zayıf olur.

## Temel yöntemler

En bilinen yaklaşım **işbirlikçi filtrelemedir**. Sistem, geçmiş kullanıcı-ürün etkileşimlerine bakarak benzer beğenilere sahip kişilerin sevdiği ürünleri önerir. [Real Python'ın anlatımına göre](https://realpython.com/build-recommendation-engine-collaborative-filtering/) benzer kullanıcıları bulan yöntem kullanıcı tabanlı, benzer ürünleri bulan yöntem ürün tabanlı (item-based) olarak adlandırılıyor.

**İçerik tabanlı filtreleme** ise ürünün özelliklerine bakar. Diğer müşterilerin davranışına bağlı olmadığı için müşterisi az olan mağazalarda işe yarayabilir. [Shopify'ın örneğinde](https://www.shopify.com/blog/ai-recommendation-system) bir çay mağazası, müşterinin sevdiği çayın aroma profiline ve kafein seviyesine göre benzer karışımlar önerebiliyor.

Pratikte bu yöntemler çoğunlukla birlikte kullanılır. [Bir Türkçe kaynak](https://ecosire.com/tr/blog/ai-transforming-ecommerce-operations-2026), işbirlikçi, içerik tabanlı ve hibrit modellerin birlikte kullanıldığını, önerilerin ürün sayfası, sepet ve e-posta gibi yerlerde gösterildiğini belirtiyor.

Bu sistemlerin bilinen bir zayıflığı **soğuk başlangıç sorunudur**: yeni bir kullanıcı ya da yeni bir ürün için geçmiş veri olmadığından öneri üretmek zorlaşır. Yeni açtığınız mağazada önerilerin ilk haftalarda isabetsiz kalması bu yüzdendir.

## Büyük perakendecilerin rakamlarına temkinli yaklaşın

İnternette "öneriler satışların yüzde kaçını getiriyor" tarzında çok sayıda rakam dolaşıyor. Amazon, H&M gibi markalar için verilen oranlar ve kişiselleştirmenin gelire katkısına dair McKinsey'ye atfedilen aralıklar sık sık tekrarlanıyor. Ancak bu rakamların çoğu şirketlerin kendi açıklamalarından değil, ikincil blog ve pazarlama sitelerinden geliyor; aynı iddia için farklı kaynaklar farklı aralıklar veriyor. Bu nedenle bu rehberde bu oranları sonuç olarak sunmuyoruz.

Sizin için daha anlamlı olan, kendi mağazanızda ölçeceğiniz sonuçlardır: öneri bloğunun tıklanma oranı, önerilen ürünlerin sepete eklenmesi ve ortalama sepet tutarı. Büyük markaların rakamlarını hedef değil, ancak genel bir yön göstergesi olarak okuyun.

## Küçük satıcılar için hazır araçlar

Öneri sistemi kurmak için kendi modelinizi eğitmeniz gerekmez. Shopify, satın alma geçmişi, ürün açıklamaları ve ilgili koleksiyonlara göre otomatik öneri üretiyor. [Shopify'ın anlatımına göre](https://www.shopify.com/blog/ai-recommendation-system) küçük bir mağaza için makul ilk adım, sık ziyaret edilen bir ürün sayfasına ilgili ürün önerisi eklemek ve ardından tıklama ile satın almaları takip etmek. Ücretsiz Search & Discovery uygulamasında her ürün için elle en fazla 10 tamamlayıcı ve 10 ilgili ürün seçmek de mümkün.

Bu yerleşik özelliklerin bir sınırı var: öneriler çoğu zaman tüm ziyaretçilere aynı görünebiliyor. Yani tam kişiselleştirme yerine iyi bir başlangıç noktası olarak düşünün. Nosto, Rebuy, LimeSpot, Klaviyo gibi ücretli uygulamalar çeşitli listelerde geçiyor; ancak güncel fiyatlarını ve Türkiye'de kullanılıp kullanılamadıklarını uygulamaların kendi sitelerinden kontrol etmeniz gerekir. Yerel platformlardan IdeaSoft ve ikas'ın yapay zeka özellikleri de [Türkçe kaynaklarda](https://ecosire.com/tr/blog/ai-transforming-ecommerce-operations-2026) tartışılıyor; kapsam ve fiyat için platformların resmi sayfalarına bakın.

Küçük işletmeler için genel çerçeveyi [küçük işletmeler için yapay zeka](/rehber/kucuk-isletmeler-icin-yapay-zeka/) rehberinde, pazaryerinde satış yapıyorsanız [pazaryeri satıcıları için yapay zeka](/rehber/pazaryeri-saticilari-icin-yapay-zeka/) rehberinde bulabilirsiniz.

## Kişisel veri ve açık rıza

Kişiselleştirilmiş öneri, kişiler hakkında veri toplamak ve bu veriyle profil çıkarmak anlamına gelir. Bu noktada KVKK devreye girer. Aşağıdaki bilgiler hukuk büroları ve danışmanlık sitelerine dayanıyor; kvkk.gov.tr ya da Resmi Gazete gibi birincil metinlerle karşılaştırmadan uygulamayın. Bu bir hukuki görüş değildir.

- **Profilleme ve açık rıza:** [Bir hukuk sitesine göre](https://konsorsiyumlegal.com/kavramlar/profilleme/) pazarlama amaçlı profilleme çoğu durumda başka bir işleme şartına dayanamadığından açık rızaya dayanıyor. Davranışa dayalı kişiselleştirilmiş reklamda da genellikle açık rıza gerekiyor.
- **Çerez rızası:** Aynı kaynağa göre çerez ve takip teknolojileri kullanıyorsanız çerez rızasını ayrıca almanız gerekiyor.
- **Rızanın hizmete bağlanması:** [Başka bir kaynak](https://www.nesilteknoloji.com/yapay-zeka-profilleme-ve-kvkk/), hizmetle ilgisiz bir profilleme rızasının şart koşulmasının KVKK'ya aykırı sayıldığını belirtiyor. Yani "öneri istemiyorum" diyen müşteriyi alışverişten alıkoymamalısınız.
- **İtiraz hakkı:** Aynı kaynak, yalnızca otomatik sistemlerle kişi aleyhine sonuç doğuran durumlarda kişinin itiraz edebildiğini yazıyor. Ürün önerisi çoğu zaman bu kapsamda olmasa da, fiyat ya da erişim kararı veren sistemlerde madde ve kapsamı mutlaka birincil metinden kontrol edin.
- **Aydınlatma metni:** [Bir kaynağa göre](https://www.bilisimvehukuk.net/icerik/yapay-zeka-kullanirken-kvkk-uyumu-nasil-saglanir) aydınlatma metninde yapay zekaya aktarılan veri türleri, amaç ve hizmet sağlayıcı açıkça yazılmalı. Öneri aracınız harici bir uygulamaysa onu da belirtin.

Hangi veriyi neden topladığınızı yazılı hale getirmek, hem müşteri güveni hem de uyum açısından işe yarar. Ayrıntılar için [yapay zeka ile kişiselleştirme ve KVKK](/rehber/yapay-zeka-ile-kisisellestirme-ve-kvkk/) ile [KVKK ve yapay zeka araçları](/rehber/kvkk-ve-yapay-zeka-araclari/) rehberlerine bakın; somut durumunuz için bir hukukçuya danışın.

## Öneri motorlarında yanlılık riski

Öneri sistemleri tarafsız görünse de kendi ürettikleri veriyle beslenir. Mansoury ve ekibinin [akademik çalışmasında](https://arxiv.org/abs/2007.13019) algoritmaların çoğu zaman az sayıda popüler ürünü sık önerdiği, diğer ürünlerin gözden kaçtığı belirtiliyor. Önerilere verilen tepkiler sisteme geri girdikçe bu yanlılık güçleniyor. Aynı çalışmada, geri besleme döngüsünün azınlık grubundaki kullanıcılar için daha güçlü olduğu bulunmuş.

Bir [derlemede](https://dl.acm.org/doi/10.1145/3564284) bu durum "kazananın daha da kazanması" (Matthew etkisi) olarak anlatılıyor: popüler ürünler daha da popülerleşirken popüler olmayanlar geri planda kalıyor. Aynı derleme, döngüyü kırmak için rastgele veri toplama veya pekiştirmeli öğrenme gibi yöntemleri öneriyor.

Satıcı için pratik anlamı şudur: küçük markanızın yeni ya da niş ürünleri, öneri blokları yüzünden hiç görünmez hale gelebilir. Düzenli olarak hangi ürünlerin önerildiğine bakın; öneri listesinde çeşitlilik yoksa elle seçtiğiniz ürünlere de yer verin. Yanlılığın genel çerçevesi için [yapay zeka onyargısı](/sozluk/yapay-zeka-onyargisi/) terimine göz atabilirsiniz.

## Nereden başlamalı?

1. **Hedef koyun.** Ortalama sepet tutarını mı, ürün sayfasından sepete geçişi mi artırmak istiyorsunuz? Tek bir ölçüt seçin.
2. **Yerleşik özellikle başlayın.** Platformunuzun hazır öneri özelliğini açın, bir ürün sayfasında deneyin.
3. **Ölçün ve karşılaştırın.** Önerinin olduğu ve olmadığı sayfaları belli bir süre karşılaştırın; sonuçlar iyiyse ücretli uygulamaya geçin.
4. **Rızayı ve aydınlatmayı hazırlayın.** Çerez bildirimi, aydınlatma metni ve açık rıza akışınızı öneri aracını devreye almadan önce gözden geçirin.
5. **Çeşitliliği izleyin.** Önerilerin hep aynı birkaç ürüne yığılıp yığılmadığını aylık olarak kontrol edin.

Öneri sistemi sihirli bir satış aracı değildir; doğru veriyle, ölçülebilir bir hedefle ve izinli veri kullanımıyla çalıştığında faydalı bir yardımcıdır.
