---
title: "Ajanlı alışveriş: yapay zeka asistanları alışverişi nasıl değiştiriyor?"
description: "ChatGPT'de alışveriş ve Instant Checkout, Google AI Mode'daki ödeme akışı ve ACP protokolü: ajanlı alışverişte neler doğrulandı, satıcılar neye hazırlanmalı, riskler neler?"
date: 2026-11-20
summary:
  - "OpenAI Eylül 2025'te ChatGPT içinde satın almayı başlattı, Mart 2026'da odağı ürün keşfine kaydırıp satıcılara kendi ödeme deneyimini kullanma izni verdi."
  - "ACP, OpenAI ve Stripe'ın Eylül 2025'te yayımladığı açık standart; spesifikasyon GitHub'da beta aşamasında."
  - "Satıcılar için en somut hazırlık, güncel ürün akışı ve promosyon verisini paylaşmak ve ödeme altyapısını protokollere uyumlu tutmak."
level: Orta
topic: İş ve kariyer
terms: [yapay-zeka-ajani, sohbet-botu, api, uretken-yapay-zeka]
sector: e-ticaret
faq:
  - q: "ChatGPT'de alışverişi ChatGPT içinde tamamlayabilir miyim?"
    a: "OpenAI, Eylül 2025'te ABD'deki kullanıcılar için ChatGPT içinde doğrudan satın almayı başlattı. Mart 2026'da ise odağını ürün keşfine çevirdi ve satıcıların kendi ödeme deneyimlerini kullanmasına izin verdi."
  - q: "Agentic Commerce Protocol (ACP) nedir?"
    a: "ACP, alıcıları, yapay zeka ajanlarını ve işletmeleri satın alma sürecinde buluşturmayı amaçlayan açık bir standart. OpenAI ve Stripe tarafından 29 Eylül 2025'te yayımlandı; spesifikasyon GitHub'da beta aşamasında."
  - q: "Küçük bir satıcı olarak neden başlamalıyım?"
    a: "Önce ürün verinizi doğru ve güncel tutun; asistanların ürün keşfi bu veriye dayanıyor. Ödeme altyapınızın bu protokolleri destekleyip desteklemediğini ödeme sağlayıcınızdan öğrenin."
sources:
  - title: "OpenAI: Buy it in ChatGPT: Instant Checkout and the Agentic Commerce Protocol"
    url: "https://openai.com/index/buy-it-in-chatgpt/"
  - title: "Stripe: Stripe powers Instant Checkout in ChatGPT and releases Agentic Commerce Protocol codeveloped with OpenAI"
    url: "https://stripe.com/newsroom/news/stripe-openai-instant-checkout"
  - title: "GitHub: Agentic Commerce Protocol"
    url: "https://github.com/agentic-commerce-protocol/agentic-commerce-protocol"
  - title: "Agentic Commerce Protocol (resmi site)"
    url: "https://www.agenticcommerce.dev/"
  - title: "Google: Shopping on Google: AI Mode and virtual try-on updates from I/O 2025"
    url: "https://blog.google/products-and-platforms/products/shopping/google-shopping-ai-mode-virtual-try-on-update/"
  - title: "CNBC: OpenAI revamps shopping experience in ChatGPT after struggling with Instant Checkout offering"
    url: "https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html"
  - title: "CNBC: OpenAI's first crack at online shopping stumbled. It's preparing for the next wave"
    url: "https://www.cnbc.com/2026/03/20/open-ai-agentic-shopping-etsy-shopify-walmart-amazon.html"
  - title: "Search Engine Land: OpenAI's big ChatGPT Instant Checkout plan just changed"
    url: "https://searchengineland.com/chatgpt-instant-checkout-plan-change-471033"
---

Ajanlı alışveriş, bir yapay zeka asistanının sizin adınıza ürün araştırması yapması, seçenekleri karşılaştırması ve bazı durumlarda satın alma adımına kadar eşlik etmesi anlamına geliyor. Konu hızlı değişiyor: ChatGPT'de ödeme deneyimi bir yıl dolmadan yön değiştirdi. Bu rehber yalnızca resmi sayfalarla ve güvenilir haber kaynaklarıyla desteklenen bilgileri aktarıyor. Perplexity alışverişi ve Google'ın AP2 protokolü gibi başlıklar için burada ayrıntıya girilmiyor.

## Ajanlı alışveriş neyi değiştiriyor?

Geleneksel e-ticarette ürün arar, sekmeler arasında karşılaştırma yapar, sonra bir mağazada ödeme yaparsınız. Asistan tabanlı alışverişte bu adımların büyük kısmı tek bir sohbette toplanıyor: ihtiyacınızı yazarsınız, asistan seçenekleri sıralar. Burada tartışmalı olan nokta, son adımın, yani ödemenin nerede yapılacağı. Aşağıdaki bölümlerde görüleceği gibi bu konuda sektör henüz oturmuş bir model bulamadı.

## ChatGPT'de alışveriş: Instant Checkout ile başlangıç

[OpenAI](https://openai.com/index/buy-it-in-chatgpt/), Eylül 2025'te ChatGPT içinde doğrudan satın almayı ABD'de Plus, Pro ve ücretsiz kullanıcılara açtı. Başlangıçta yalnızca tek ürünlük siparişler destekleniyordu ve ödeme Agentic Commerce Protocol (ACP) üzerinden yapılıyordu.

Sıralama konusunda dikkatli okumak gerekiyor. OpenAI'nin aynı sayfasında Instant Checkout'lu ürünlerin tercih edilmediği söyleniyor; ancak aynı ürünü satan satıcılar arasında Instant Checkout'un etkin olup olmadığı da sıralamada değerlendiriliyor. Yani özelliği açmak sıralamada tamamen nötr olmayabilir. Satıcıysanız bu ayrıntıyı kendi kararınızda hesaba katın.

## Mart 2026: odak ürün keşfine kayıyor

Tablo bir süre sonra değişti. [CNBC'nin aktardığına göre](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html) OpenAI, Instant Checkout'un yeterli esneklik sunmadığını belirterek satıcıların kendi ödeme deneyimlerini kullanmasına izin verdi ve odağını ürün keşfine çevirdi. Aynı habere göre satıcılar ürün akışlarını ve promosyonlarını paylaşabiliyor; Target, Sephora ve Nordstrom bu yeni keşif deneyimini destekliyor, Walmart ise ChatGPT içinde uygulama sunduğunu açıkladı.

Neden böyle oldu? The Information'a dayanan [habere göre](https://searchengineland.com/chatgpt-instant-checkout-plan-change-471033) OpenAI, kullanıcıların ChatGPT'de ürün araştırdığını ama satın almayı orada tamamlamadığını gördü; yerleşik ödemeyi de yalnızca az sayıda satıcı kullanıyordu. [Fast Company](https://www.fastcompany.com/91533534/shop-til-you-bot-google-openai-and-the-race-to-build-agentic-commerce), Shopify'ın milyonlarca satıcısı arasından Instant Checkout'a geçenlerin 30'dan az olduğunu aktarıyor. Bu rakam resmi bir veri değil, gazetecilik aktarımı; yine de benimsemenin sınırlı kaldığını gösteriyor.

CNBC ayrıca OpenAI'nin satıcılarla [ChatGPT içinde kendi uygulamalarını oluşturmaya yöneldiğini](https://www.cnbc.com/2026/03/20/open-ai-agentic-shopping-etsy-shopify-walmart-amazon.html) bildirdi. Bir sözcüye göre uygulama, alışverişin görünümü ve hissi üzerinde markaya daha fazla kontrol verecek. Pratikte bu, ChatGPT'nin vitrin, markanın ise satış ve müşteri deneyiminin sahibi olduğu bir düzene işaret ediyor.

## Google: AI Mode ve agentic checkout

Google, Mayıs 2025'teki I/O etkinliğinde [AI Mode'daki yeni alışveriş deneyimini ve agentic checkout'u](https://blog.google/products-and-platforms/products/shopping/google-shopping-ai-mode-virtual-try-on-update/) duyurdu. Google'ın anlatımına göre sepet satıcının sitesinde oluşturuluyor ve ödeme Google Pay ile tamamlanıyor. Özellik, ABD'deki ürün listelemeleri için önümüzdeki aylarda yaygınlaşacaktı.

Bu akış ChatGPT'nin ilk modelinden bir noktada ayrılıyor: satın alma satıcının kendi sitesindeki sepete bağlı kalıyor. Duyurular ABD'yi kapsıyor. Türkiye'de kullanılabilirlik için kendi hesabınızda deneyerek kontrol etmeniz gerekir.

## ACP ve ajan ödeme protokolleri

Ajanın ödemeyi güvenle yapabilmesi için ortak bir dile ihtiyaç var. [Stripe'a göre](https://stripe.com/newsroom/news/stripe-openai-instant-checkout) ACP, OpenAI ve Stripe tarafından 29 Eylül 2025'te yayımlandı ve açık standart olarak tanımlanıyor. Spesifikasyon [GitHub'da](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol) OpenAI ve Stripe tarafından sürdürülüyor ve beta aşamasında olduğu belirtiliyor.

Stripe, ACP için ilk uyumlu uygulama olduğunu ve ödemenin paylaşılan ödeme belirteçleriyle (Shared Payment Tokens) yapıldığını söylüyor. Satıcı işlemi Stripe üzerinden yürütebiliyor ya da başka bir ödeme kuruluşuyla çalışırken Stripe'ın dolandırıcılık risk puanlarını kullanabiliyor. [ACP'nin resmi sitesine göre](https://www.agenticcommerce.dev/) protokol belirli bir ödeme kuruluşuna bağlı değil.

Bu bilgiler, protokolün hâlâ gelişmekte olduğunu da gösteriyor: beta aşamasındaki bir spesifikasyon üzerine uzun vadeli yatırım yapmadan önce güncel sürümü takip etmek akıllıca olur.

## Markalar ve satıcılar neye hazırlanmalı?

Doğrulanmış bilgilerden çıkan somut hazırlıklar şunlar:

- **Ürün verisini düzenli tutun.** OpenAI'nin açıklamasına göre satıcılar ürün akışlarını ve promosyonlarını paylaşabiliyor. Fiyat, stok, görsel ve açıklama alanlarının tutarlı olması keşif deneyiminin temel girdisi. Genel çerçeve için e-ticarette yapay zeka kullanım alanları rehberine bakabilirsiniz.
- **Ödeme altyapınızı sorgulayın.** Ödeme sağlayıcınızın ACP gibi protokolleri destekleyip desteklemediğini öğrenin. Stripe kullanmıyorsanız bile protokol belirli bir ödeme kuruluşuyla sınırlı değil.
- **Kendi ödeme deneyiminizi koruyun.** Mart 2026 değişikliği, satın almanın satıcının sitesinde ya da uygulamasında tamamlanabileceğini gösteriyor. Dönüşüm hunisini yalnızca asistanın içine bırakmak yerine kendi sitenizi güçlü tutun.
- **Asistanlarda görünürlüğü izleyin.** Yapay zeka yanıtlarında markanızın nasıl anıldığını [yapay zeka aramaları ve markalar](/rehber/yapay-zeka-aramalari-ve-markalar-geo/) rehberindeki yaklaşımla takip edebilirsiniz.
- **Pazaryerinde satıyorsanız** akış ve katalog hazırlığını pazaryeri üzerinden yürüteceğiniz için pazaryeri satıcıları için yapay zeka rehberi işinize yarar.

Komisyon ve ücret koşullarını da yazılı olarak netleştirin; bu konuda dolaşan rakamları resmi bir kaynak teyit etmiyor.

## Riskler ve sınırlar

Birkaç noktada temkinli olmak gerekiyor:

- **Model hızla değişiyor.** ChatGPT'deki yerleşik ödeme yaklaşımı kısa sürede yeniden kurgulandı. Bugün kurduğunuz entegrasyonun yarın aynı biçimde kalacağının garantisi yok.
- **Rakamlar tahmine dayalı olabilir.** Pew'a atfedilen ve ChatGPT sorgularının yaklaşık yüzde 2'sinin, yani günde yaklaşık 50 milyon sorgunun alışverişle ilgili olduğunu söyleyen veri [Fast Company'de](https://www.fastcompany.com/91533534/shop-til-you-bot-google-openai-and-the-race-to-build-agentic-commerce) aktarılıyor; Pew'un kendi raporu bu çalışmada görülmedi. Rakamı yön göstermek için kullanın, yatırım gerekçesi yapmayın.
- **Sıralama şeffaflığı sınırlı.** Instant Checkout'un sıralamaya etkisi konusunda resmi metindeki ifade tam netlik sunmuyor.
- **Bölge farkı.** Duyurulan özelliklerin kapsamı ABD odaklı.

Alıcı olarak da, bir asistanın size önerdiği ürünün fiyatını, satıcıyı ve iade koşullarını ödeme öncesinde kendiniz doğrulayın. Ajanlara yetki verirken [yapay zeka ajanlarını güvenle kullanma](/rehber/yapay-zeka-ajanlarini-guvenle-kullanma/) rehberindeki ilkeleri uygulayın.

## Nasıl başlarsınız?

Alıcıysanız [ChatGPT](/arac/chatgpt/) ya da Google'ın alışveriş özelliklerinde bir ürün araştırmasını deneyin; ama ödemeyi satıcının sayfasında kontrol ederek tamamlayın. Satıcıysanız üç adımla başlayın: ürün akışınızı güncel hale getirin, ödeme sağlayıcınızla protokol desteğini konuşun ve satışların büyük kısmını kendi kanalınızda tutacak bir plan yapın. Küçük bir ekipseniz önce ürün verisi kalitesine zaman ayırın; protokol entegrasyonu bunun üzerine gelir.
