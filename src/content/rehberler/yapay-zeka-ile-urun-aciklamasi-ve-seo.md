---
title: "Yapay zeka ile ürün açıklaması ve kategori sayfası SEO'su: Google ve pazaryeri kuralları"
description: "Ürün başlığı ve açıklamasını yapay zekayla yazarken Google'ın içerik ilkeleri, Merchant Center'daki etiketleme şartı, tekrar eden içerik riski, yapılandırılmış veri ve Trendyol kuralları."
date: 2026-11-20
summary:
  - "Google yapay zeka içeriğini yasaklamıyor; sorun, sıralamayı manipüle etmek için üretilen faydasız ve özgün olmayan içeriktir."
  - "Merchant Center'da yapay zekayla yazılan başlıklar title yerine structured_title ile gönderilmeli ve yapay zeka kaynağı etiketlenmeli."
  - "Tedarikçi metni ya da aynı kalıba dayanan şablon açıklamalar görünürlüğü zayıflatabilir; pazaryerinde ise tek içerik kuralı ayrıca önem taşır."
level: Orta
topic: Yazı ve içerik
terms: [uretken-yapay-zeka, istem, halusinasyon, istem-muhendisligi, buyuk-dil-modeli]
sector: e-ticaret
faq:
  - q: "Google yapay zekayla yazılmış ürün açıklamalarını cezalandırır mı?"
    a: "Google'ın resmi blog yazısına göre içeriğin nasıl üretildiğinden çok amacı ve faydası önemli; sıralamayı manipüle etmeye yönelik otomatik üretim spam sayılıyor. Faydalı, özgün ve güvenilir içerik hedeflemek gerekiyor."
  - q: "Yapay zekayla yazdığım ürün başlığını Merchant Center'a nasıl göndermeliyim?"
    a: "Merchant Center yardım sayfasına göre yapay zekayla üretilen başlıklar title yerine structured_title özniteliğiyle gönderilmeli ve digital_source_type alt özniteliğine trained_algorithmic_media değeri verilmeli."
  - q: "Üreticinin verdiği hazır açıklamayı kullanmak sorun olur mu?"
    a: "İkincil kaynaklara göre bu bir ceza sebebi olmasa da aynı metnin çok sayıda mağazada bulunması görünürlük kaybına yol açabilir. Pazaryerlerinde ise ürün için tek içerik ilkesi ve platformun kendi kuralları geçerli."
sources:
  - title: "Google Search Central: Google Search's guidance about AI-generated content"
    url: "https://developers.google.com/search/blog/2023/02/google-search-and-ai-content"
  - title: "Google Merchant Center Yardım: AI-generated content"
    url: "https://support.google.com/merchants/answer/14743464?hl=en"
  - title: "Google Merchant Center Yardım: Title [title] and structured title [structured_title]"
    url: "https://support.google.com/merchants/answer/6324415?hl=en"
  - title: "Merchant API: StructuredTitle"
    url: "https://developers.google.com/merchant/api/reference/rpc/google.shopping.merchant.products.v1/Types/StructuredTitle"
  - title: "Google Merchant Center Yardım: Set up structured data for Merchant Center"
    url: "https://support.google.com/merchants/answer/7331077?hl=en"
  - title: "Google Merchant Center Yardım: About structured data markup for Merchant Center"
    url: "https://support.google.com/merchants/answer/6069143"
  - title: "Trendyol Akademi: Ürün Listeleme Kuralları"
    url: "https://akademi.trendyol.com/satici-bilgi-merkezi/detay/242"
  - title: "Trendyol Akademi: Kalite Standartları"
    url: "https://akademi.trendyol.com/satici-bilgi-merkezi/detay/204"
---

Ürün başlığı ve açıklaması yazmak, e-ticaret ekiplerinin yapay zekaya en kolay devrettiği işlerden biri. Binlerce ürünü olan mağazalarda bu mantıklı; ancak aynı kolaylık, birbirine benzeyen, ürünü gerçekten anlatmayan sayfalar üretme riskini de getiriyor. Bu rehberde Google'ın ürün içeriği ve yapay zeka içeriği hakkında söylediklerini, tekrar eden içerik riskini, yapılandırılmış veriyi ve Trendyol'un resmi kurallarını sade bir akışla ele alıyoruz. Genel kullanım alanları için [e-ticarette yapay zeka kullanım alanları](/rehber/e-ticarette-yapay-zeka-kullanim-alanlari/) rehberine de bakabilirsiniz.

## Yapay zekayla başlık ve açıklama yazmaya nereden başlanır

İyi sonuç, modele boş bir sayfa vermekle değil, ona doğru ve eksiksiz ürün verisi vermekle başlar. Marka, model, malzeme, ölçü, kullanım amacı ve varsa garanti bilgisini ürün tablosundan alıp isteme ekleyin. Modelin eksik bilgiyi kendi kendine tamamlamasına izin verirseniz uydurma bilgi (halüsinasyon) riski doğar: var olmayan bir özellik ya da sertifika, hem müşteri güvenini hem de pazaryeri uyumunu zedeler. İstem yazımı için [iyi istem nasıl yazılır](/rehber/iyi-istem-nasil-yazilir/) rehberi işinize yarar.

Çıktıyı yayımlamadan önce şu kontrolleri yapın: Her özellik ürün verinizle örtüşüyor mu, marka sesine uygun mu, aynı kalıp yüzlerce üründe tekrarlanıyor mu? Türkçe metinler için bir yazılım şirketi blogu, ChatGPT'nin Trendyol için uygun açıklamalar üretebildiğini ancak biçimlendirme ve SEO için elle düzeltme gerektiğini yazıyor; bu değerlendirme satıcı tarafından yayımlandığı için tek başına kesin bir ölçüt sayılmamalı. Yine de pratik sonuç aynı: taslağı yapay zeka yazsın, son kararı bir insan versin. Marka dilini korumak için [yapay zeka ile içerik üretimi ve marka sesi](/rehber/yapay-zeka-ile-icerik-uretimi-ve-marka-sesi/) rehberini inceleyebilirsiniz.

## Google yapay zeka içeriğine nasıl bakıyor

[Google Search Central blog yazısına](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content) göre yapay zeka dahil otomasyonla içerik üretmek, esas amacı sıralamayı manipüle etmekse spam politikalarının ihlali sayılıyor. Aynı yazı, yapay zekanın içeriğe ayrıca bir avantaj sağlamadığını da belirtiyor. Yani ölçüt aracın kendisi değil; içeriğin faydalı, özgün ve E-E-A-T (deneyim, uzmanlık, otorite, güvenilirlik) ölçütlerini karşılaması.

Ürün sayfası için bunun anlamı şu: Açıklamanın okura ürünü seçmesine yardım etmesi gerekiyor. Hazır kalıplarla, yalnızca anahtar kelime dolduran metinler bu ölçüte uymaz. Google'ın ürün açıklamasına özgü, yapay zekaya dair ayrı bir rehberi bulunmuyor; elimizdeki çerçeve genel içerik ilkeleri ve Merchant Center'daki alan tanımlarından oluşuyor. Bu ilkeleri kategori sayfalarına da uygulamak makul bir yaklaşım: Kategori için tek seferde yüzlerce ince, birbirine benzeyen metin üretmek yerine, az sayıda ama alıcıya gerçekten yol gösteren metin yazmak daha sağlıklı. Bu, bizim yorumumuzdur; Google kategori sayfaları için ayrı bir yapay zeka kuralı yayımlamış değil. Arama ortamındaki değişimler için [yapay zeka çağında SEO](/rehber/yapay-zeka-caginda-seo/) rehberine bakabilirsiniz.

## Merchant Center'da yapay zeka başlığı etiketleme

Google alışveriş listelerinde başlık kullanıyorsanız burada net bir kural var. [Merchant Center yardım sayfasına](https://support.google.com/merchants/answer/14743464?hl=en) göre yapay zekayla üretilen başlıklar için structured_title özniteliği kullanılmalı ve digital_source_type alt özniteliğine trained_algorithmic_media değeri verilmeli. [Başlık özniteliğini anlatan sayfa](https://support.google.com/merchants/answer/6324415?hl=en) da yapay zekayla üretilen tüm başlıkların title yerine structured_title ile gönderilmesi gerektiğini belirtiyor. Merchant API dokümanında structured title alanı için [en fazla 150 karakter](https://developers.google.com/merchant/api/reference/rpc/google.shopping.merchant.products.v1/Types/StructuredTitle) sınırı veriliyor.

Bazı ikincil kaynaklar, hem title hem structured_title gönderildiğinde yalnızca title'ın kullanılabileceğini ve yapay zeka başlıklarının sessizce devre dışı kalabileceğini yazıyor. Bu davranış resmi sayfada açıkça anlatılmıyor; bu yüzden feed'inizi kurduktan sonra Merchant Center'daki ürün görünümünden hangi başlığın kullanıldığını kontrol edin.

Bir başka kural da tutarlılık: Feed'deki başlık, sayfadaki içerikle birebir aynı olmak zorunda değil ama aynı ürünü anlatmalı. Yapay zekanın başlığı pazarlama diliyle şişirip ürünle bağını koparmasına izin vermeyin.

## Tekrar eden içerik riski

Tekrar eden içerik konusunda kaynaklar biraz farklı tonlarda konuşuyor. Bunlardan biri, tedarikçi açıklamasının yeniden kullanılmasının ceza getirmediğini ama görünürlük kaybı yaratabileceğini, aynı açıklama çok sayıda mağazada olduğunda Google'ın bunlardan birini seçeceğini yazıyor. [SEO.digital rehberi](https://seo.digital/guides/duplicate-product-descriptions-seo-fix-rank-higher/) aynı ürünün birden fazla adreste göründüğü durumlar için canonical (tercih edilen adres) etiketi öneriyor. Bu bir ikincil kaynak; Google'ın eski bir açıklamasına dayanan başka bir aktarım da tekrar eden içeriğin olumsuz bir sinyal olmadığını, ama benzersiz açıklamaların benzer ürünleri ayırmaya yardımcı olduğunu söylüyor.

Yapay zeka burada çifte kenarlı bir araç. Bir yandan her ürün için farklı metin üretmenizi kolaylaştırıyor; öte yandan aynı istem şablonuyla çıkan metinler, sözcükleri farklı olsa da aynı kalıba oturabiliyor. Bir ikincil kaynak, bu tür "teknik olarak benzersiz ama aynı kalıpta" metinlerin risk taşıdığını söylüyor; bu Google'ın resmi açıklaması değil, kaynağın yorumu. Pratik önlem olarak istemi ürün özelliklerine bağlayın, her ürünün gerçek farkını öne çıkarın ve çıktılardan rastgele örnek alıp birbirine benzerliğini kontrol edin. Mevcut tekrarları bulmak için Search Console'daki "Duplicate, Google chose different canonical" ve "Duplicate without user-selected canonical" raporlarını kullanabilirsiniz.

## Yapılandırılmış veri: açıklamayla tutarlı olmalı

Yapay zekayla yazdığınız açıklamadaki bilgiler, sayfanın yapılandırılmış verisiyle uyuşmalı. [Merchant Center yardım sayfasına](https://support.google.com/merchants/answer/6069143) göre yapılandırılmış veri, müşteriye gösterilen değerlerle eşleşmeli; ürün sayfasındaki yanlış veri ihlal sayılıyor. Teknik tarafta da iki önemli not var: [Merchant Center'ın yapılandırılmış veri kurulumu sayfasına](https://support.google.com/merchants/answer/7331077?hl=en) göre veri HTML'de bulunmalı, JavaScript ile sonradan üretilmemeli; ürün sayfasında hem Product nesnesi hem de iç içe Offer nesnesi yer almalı.

Pratikte şu hatalar sık görülür: Yapay zeka açıklamada rengi ya da ölçüyü değiştirirken işaretleme eski değerde kalır, ya da kampanya fiyatı sayfada güncellenirken yapılandırılmış veri güncellenmez. Bir ikincil kaynak da sayfa, yapılandırılmış veri ve feed'in senkron tutulmasını öneriyor. Yapay zeka aramasında görünürlük için özel bir şema gerekmediği ise Semrush'un aktardığı Google rehberinden çıkıyor; yani yeni bir işaretleme aramak yerine mevcut ürün verisini doğru tutmak öncelikli.

## Pazaryeri içerik kuralları

Pazaryerinde oyunun kuralları sizin sitenizdekinden farklı. [Trendyol Akademi'ye](https://akademi.trendyol.com/satici-bilgi-merkezi/detay/242) göre ürün içerikleri ürünün özelliklerinden ve kullanım detaylarından oluşur; müşterinin ürünün içeriğini ve kullanımını görebileceği bilgiler yer almalı. Elektronik ürünlerde garanti koşulları ve kurulum hizmeti bilgileri de ürün içeriğinde bulunmalı. Aynı sayfa görsellerde minimum 600x800 ölçüsünü veriyor.

En kritik kural [Trendyol'un kalite standartlarında](https://akademi.trendyol.com/satici-bilgi-merkezi/detay/204): Buy Box modelinde bir ürün için tek bir içerik oluşturulması esas. Aynı ürün için birden fazla içerik açmak, barkoda farklı bir ürün girmek ve diğer satıcıların ticaretini olumsuz etkileyen değişiklikler ihlal sayılıyor. Bu yüzden her satıcının aynı ürün için ayrı bir yapay zeka açıklaması üretmesi pazaryerinde risk taşır; yeni içerik açmak yerine mevcut ürün kartının doğruluğuna katkı vermek daha güvenli. Pazaryeri özelinde ayrıntı için [pazaryeri satıcıları için yapay zeka](/rehber/pazaryeri-saticilari-icin-yapay-zeka/) rehberine bakın.

Başlık uzunluğu ve görsel ölçüleri konusunda ikincil kaynaklar birbirini tutmuyor. Bazıları API entegrasyonunda ürün adı için 100 karakter sınırı yazarken, panel için farklı bir aralık veriyor; emoji, link ya da kargo ve kampanya vaadinin açıklamaya konmaması gerektiğini de yine ikincil kaynaklar söylüyor. Güncel sınırları satıcı panelinden ve resmi Akademi sayfalarından teyit edin, yapay zeka çıktısını bu sınırlara göre kısaltın. Hepsiburada ve Amazon için de aynı yöntemi izleyin: resmi satıcı yardım sayfalarına bakın, ikincil kaynaklardaki tarihli kuralları kesin bilgi gibi kullanmayın.

## Kısa bir uygulama akışı

1. Ürün verisini düzenleyin: özellikler, ölçüler, garanti ve kullanım bilgisi tek tabloda olsun.
2. İstemi bu veriye bağlayın ve modelden yalnızca verilen bilgileri kullanmasını isteyin.
3. İnsan kontrolü yapın: Her iddiayı ürün verisiyle karşılaştırın, tekrarlayan kalıpları ayıklayın.
4. Kanala göre uyarlayın: Kendi sitenizde faydalı ve özgün metin, pazaryerinde platform kurallarına uygun tek içerik.
5. Merchant Center kullanıyorsanız yapay zeka başlıklarını structured_title ile ve doğru etiketle gönderin.
6. Yapılandırılmış veri, sayfa ve feed'i fiyat ve stok değişikliklerinde birlikte güncelleyin.
7. Search Console'da tekrar eden sayfa raporlarını düzenli izleyin.

Bu akışın hız kazandırdığı yer taslak aşaması; doğruluk, özgünlük ve platform uyumu hâlâ sizin sorumluluğunuzda. Türkiye'de yapay zeka kullanım oranlarına dair rakamlar ikincil kaynaklarda dolaşıyor, ancak resmi bülten görülmediği için burada rakamlara dayanmıyoruz; kendi sayfalarınızın performansını ölçmek en güvenilir yöntem.
