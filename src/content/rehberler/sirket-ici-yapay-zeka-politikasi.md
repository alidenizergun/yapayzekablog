---
title: "Şirket içi yapay zeka politikası nasıl hazırlanır: araçlar, veriler, sorumluluk"
description: "Şirket içi yapay zeka politikası hazırlarken hangi araçlara izin verileceğini, hangi verilerin paylaşılamayacağını, onay ve sorumluluğu, Samsung örneğini ve örnek maddeleri anlatan pratik rehber."
date: 2026-11-20
summary:
  - "Politika; onaylı araç listesi, yasaklı veri sınıfları ve net bir sorumluluk dağılımı üzerine kurulur."
  - "Samsung örneği, kurallar konmadan açılan araçların gizli bilgi sızıntısına yol açabildiğini gösteriyor."
  - "Kurumsal planlar eğitim kullanımını varsayılan olarak kapatabilir, ancak bu, verinin tamamen güvende olduğu anlamına gelmez."
level: Orta
topic: İş ve kariyer
terms: [yapay-zeka, uretken-yapay-zeka, istem, sohbet-botu, egitim-verisi]
sector: insan-kaynaklari
faq:
  - q: "Yapay zeka politikası kaç sayfa olmalı?"
    a: "Uzunluk değil, uygulanabilirlik önemli. Onaylı araçlar, yasaklı veriler, onay süreci ve olay bildirimini kapsayan kısa ve anlaşılır bir metin, uzun bir belgeden daha çok işe yarar."
  - q: "Kurumsal plan kullanıyorsak çalışanlar her şeyi yapıştırabilir mi?"
    a: "Hayır. Eğitim kullanımının kapalı olması verinin sağlayıcının sunucularında saklanmadığı anlamına gelmez; yasaklı veri sınıfları kurumsal planda da geçerlidir."
  - q: "Politikayı kim hazırlamalı?"
    a: "İK, bilgi güvenliği ve hukuk birlikte çalışmalı; işe alım ve çalışan verisi gibi konularda İK'nın, kişisel veri konusunda hukuk veya KVKK sorumlusunun görüşü gerekir. Bu rehber hukuki görüş yerine geçmez."
sources:
  - title: "CSHub: Samsung employees allegedly leak proprietary information via ChatGPT"
    url: "https://www.cshub.com/data/news/iotw-samsung-employees-allegedly-leak-proprietary-information-via-chatgpt"
  - title: "TechRadar: Samsung workers leaked company secrets by using ChatGPT"
    url: "https://www.techradar.com/news/samsung-workers-leaked-company-secrets-by-using-chatgpt"
  - title: "OpenAI: Enterprise privacy"
    url: "https://openai.com/enterprise-privacy/"
  - title: "Matters.ai: Shadow AI data breach cost"
    url: "https://www.matters.ai/article/shadow-ai-data-breach-cost"
  - title: "Sheltron: Yapay zeka KVKK uyumu kontrol listesi"
    url: "https://sheltron.com.tr/blog/yapay-zeka-kvkk-uyumu-kontrol-listesi/"
  - title: "Zamana: Yapay zeka kullanım politikası şablonu"
    url: "https://zamana.com.tr/wiki/temeller/sirket-ici-politika/"
  - title: "Pega Hukuk: İş yerinde üretken yapay zeka, KVKK ve ticari sır"
    url: "https://pegahukuk.com/is-yerinde-uretken-yapay-zeka-kvkk-ticari-sir/"
  - title: "Bilişim ve Hukuk: Yapay zeka kullanırken KVKK uyumu"
    url: "https://www.bilisimvehukuk.net/icerik/yapay-zeka-kullanirken-kvkk-uyumu-nasil-saglanir"
---

Çalışanlar yapay zeka araçlarını çoğu zaman şirket bir karar vermeden kullanmaya başlıyor. Politika yoksa her çalışan kendi sınırını çiziyor; bu da gizli bilgilerin farkında olmadan dış servislere gitmesi anlamına gelebiliyor. Bu rehber, İK ve yönetim ekiplerinin sade bir şirket içi yapay zeka politikasını nasıl kurabileceğini adım adım anlatıyor. Metin hukuki görüş değildir; kişisel veri ve sözleşme konularında hukuk müşavirinizle çalışın.

## Politikaya neden ihtiyaç var

Boşluk yalnızca kurallarda değil, kurallardan haberdar olmakta da yaşanıyor. IBM'in 2025 Veri İhlali Maliyeti Raporu'nu aktaran bir derlemeye göre, gölge yapay zeka (yönetimin bilgisi dışında kullanılan araçlar) kaynaklı ihlallerin ortalama maliyeti 4,63 milyon dolar; genel ortalama ise 4,44 milyon dolar. Aradaki fark yaklaşık 670 bin dolar ([Matters.ai](https://www.matters.ai/article/shadow-ai-data-breach-cost)). Aynı kaynağa göre bu tür ihlallerde müşteri kişisel verisi yüzde 65 oranında etkileniyor. Bu rakamlar birincil rapordan değil, ikincil bir kaynaktan aktarıldığı için eğilimi gösteren bir gösterge olarak okuyun.

Politikanın amacı yapay zekayı yasaklamak değil; hangi işte, hangi araçla, hangi veriyle çalışılabileceğini belirlemek. Genel kullanım becerileri için [ChatGPT nasıl kullanılır](/rehber/chatgpt-nasil-kullanilir/) rehberine de bakabilirsiniz.

## Hangi araçlara izin verilir

En pratik başlangıç, onaylı araç listesidir. Bir politika şablonunda bu madde şöyle kurulur: iş amacıyla yalnızca listedeki yapay zeka araçları kullanılır ([Zamana şablonu](https://zamana.com.tr/wiki/temeller/sirket-ici-politika/)). Listeyi hazırlarken şunlara bakın:

- Aracın hangi plan altında kullanılacağı (kişisel hesap mı, kurumsal plan mı)
- Verinin eğitimde kullanılıp kullanılmadığı ve saklama süresi
- Verinin hangi ülkedeki sunuculara gittiği
- Yönetici kontrolleri ve erişim yönetimi

Bu listeyi bir kez yapıp bırakmayın; yeni araç talepleri için de bir başvuru yolu tanımlayın. Aksi hâlde çalışanlar listeyi atlayıp kendi hesaplarını kullanır. Model seçiminde işinize yarayabilecek karşılaştırmalar için [hangi yapay zeka modelini seçmeliyim](/rehber/hangi-yapay-zeka-modelini-secmeliyim/) yazısına göz atın.

## Hangi veriler paylaşılamaz

Politikanın en somut bölümü yasaklı veri sınıflarıdır. Şablon örneklerinde özel nitelikli kişisel veri, kaynak kodu sırları, kimlik bilgileri ve müşteri sözleşmeleri onay olmadan yüklenemeyecek veriler arasında sayılıyor. KVKK m.6 kapsamındaki özel nitelikli veriler (sağlık, biyometrik veri, sendika üyeliği gibi) yapay zeka araçlarına girilmemeli ([Bilişim ve Hukuk](https://www.bilisimvehukuk.net/icerik/yapay-zeka-kullanirken-kvkk-uyumu-nasil-saglanir)).

İK tarafı için pratik bir kural da önerilebilir: çalışan verisinde yalnızca sınırlı ve anonimleştirilmiş girdi kullanılır, ham çalışan verisi girilmez. Bu, bir şablon önerisidir; yasal bir zorunluluk olarak değil, iyi uygulama olarak ele alın ([Zamana şablonu](https://zamana.com.tr/wiki/temeller/sirket-ici-politika/)).

Kişisel veri boyutunda şu noktalar öne çıkıyor ([Sheltron](https://sheltron.com.tr/blog/yapay-zeka-kvkk-uyumu-kontrol-listesi/)):

- Aynı sonuca kişisel veri işlemeden ulaşılabiliyorsa anonim veriyle çalışılmalı.
- İstemde (prompt) veya çıktıda kişisel veri varsa KVKK uygulanır.
- Yurt dışındaki bir sağlayıcıya düzenli veri akışı varsa KVKK m.9 kapsamında uygun güvence gerekir.

Ayrıntılı bir başlangıç için [yapay zeka kullanırken kişisel verileri koruma](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/) rehberi var.

## Onay ve sorumluluk

Politika, kimin neye karar verdiğini açıkça yazmalı. Şu dağılım iyi bir başlangıç olabilir:

- **Yönetim:** Politikayı onaylar ve kaynak ayırır.
- **Bilgi güvenliği:** Araçları değerlendirir ve onaylı listeyi yönetir.
- **Hukuk veya KVKK sorumlusu:** Kişisel veri ve sözleşme boyutunu inceler.
- **İK:** Eğitimi, çalışan iletişimini ve disiplin süreçlerini yürütür.
- **Yöneticiler:** Ekiplerindeki kullanımın politikaya uygunluğunu izler.

Bir de insan gözetimi ilkesi koyun: yapay zekanın ürettiği çıktıdan, onu kullanan çalışan sorumludur. Özellikle işe alım, performans değerlendirme gibi kararlarda aracın çıktısı tek başına karar yerine geçmemeli. Bu alandaki riskler için [yapay zeka ile işe alım ve önyargı](/rehber/yapay-zeka-ile-ise-alim-ve-onyargi/) rehberini inceleyin.

## Samsung örneğinden çıkan dersler

Samsung'un yarı iletken biriminde, ChatGPT kullanımına izin verildikten yaklaşık 20 gün sonra üç ayrı olayda çalışanlar gizli bilgileri araca yapıştırdı. Bunlar arasında kaynak kodu, bir toplantının metne dönüştürülmüş kaydı ve bir test sırası vardı. Şirket her üç olayda da disiplin soruşturması açtı ([CSHub](https://www.cshub.com/data/news/iotw-samsung-employees-allegedly-leak-proprietary-information-via-chatgpt)). Kaynaklar, tetikleyicinin tek bir mühendis mi yoksa birkaç kişi mi olduğu gibi ayrıntılarda farklılaşıyor; üç olay sayısı ise ortak kabul görüyor.

Şirketin sonraki adımları da öğretici: Samsung istemleri 1024 bayt ile sınırladı ve kendi iç yapay zekasını geliştirmeye başladı ([TechRadar](https://www.techradar.com/news/samsung-workers-leaked-company-secrets-by-using-chatgpt)). Buradan çıkan ders, aracı kurallar ve eğitim olmadan açmanın risk yarattığı ve verinin bir kez dışarı çıktıktan sonra kontrolünüzden çıkabildiğidir. Sızıntıyı engelleyen şey sonradan getirilen kısıtlar değil, baştan konan kurallar olur.

## Kurumsal planların veri güvenceleri

Kurumsal planlar riski azaltır ama sıfırlamaz. OpenAI'ın kurumsal gizlilik sayfasına göre ChatGPT Business, Enterprise, Edu ve API verileri, kurum açıkça onay vermedikçe varsayılan olarak model eğitiminde kullanılmıyor. Kurum veri saklama süresini de kendisi belirleyebiliyor ([OpenAI](https://openai.com/enterprise-privacy/)). Aynı sayfada bir ayrıntı daha var: iş verileri otomatik sınıflandırma ve güvenlik araçlarından geçirilebiliyor, insan incelemesi ise hizmete göre değişiyor.

Bu nedenle sağlayıcı seçerken şunları sorun:

- Eğitim kullanımı varsayılan olarak kapalı mı, kim açabilir?
- Saklama süresi ve silme süreci nedir?
- Güvenlik veya kötüye kullanım incelemesi için verilere kim erişebilir?
- Kişisel hesaplarda ayarlar farklı olabilir; çalışanların iş verisini kişisel hesapta işlemesi ayrıca engellenmeli mi?

Her sağlayıcının planı ve ayarı farklıdır; politika yazmadan önce ilgili sağlayıcının kendi gizlilik sayfasını ve sözleşme şartlarını okuyun.

## Eğitim ve olay yönetimi

Politika yalnızca e-postayla duyurulursa çalışanlar tarafından okunmayabilir. Kısa bir eğitimde gerçek örneklere yer verin: neyin yapıştırılmaması gerektiği, nasıl iyi istem yazılacağı, çıktının nasıl doğrulanacağı. Çalışan eğitimi için [çalışanlara yapay zeka eğitimi](/rehber/calisanlara-yapay-zeka-egitimi/) yazısı ayrıntı veriyor.

Bir de hata yapıldığında ne olacağını önceden belirleyin. Bir veri yanlışlıkla yapay zeka aracına yüklendiğinde önce verinin ne olduğu, hangi hesap ve araçla, ne zaman ve kimlerle paylaşıldığı ile sağlayıcının saklama politikası belirlenmeli. Olay kişisel veri ihlali oluşturuyorsa KVKK ve Kurul'a bildirim yükümlülükleri risk düzeyine göre değerlendirilir ([Pega Hukuk](https://pegahukuk.com/is-yerinde-uretken-yapay-zeka-kvkk-ticari-sir/)). Çalışanın hatayı cezalandırılma korkusu olmadan bildirebilmesi, sızıntının büyümesini önler.

## Örnek politika maddeleri

Aşağıdaki maddeler şablon kaynaklarından uyarlanmış taslak örneklerdir; kendi hukuk danışmanınızla uyarlayın:

1. **Onaylı araçlar:** İş amacıyla yalnızca şirketin onayladığı yapay zeka araçları kullanılır.
2. **Yasaklı veriler:** Özel nitelikli kişisel veri, kaynak kodu sırları, kimlik bilgileri ve müşteri sözleşmeleri onaysız yüklenemez.
3. **Çalışan verisi:** İK süreçlerinde yalnızca sınırlı ve anonimleştirilmiş girdi kullanılır.
4. **Sorumluluk:** Çıktının doğruluğundan ve kullanımından, aracı kullanan çalışan sorumludur; önemli kararlar insan gözetiminde alınır.
5. **Olay bildirimi:** Yanlışlıkla paylaşılan veri gecikmeden bilgi güvenliği ekibine bildirilir.
6. **Gözden geçirme:** Politika düzenli aralıklarla ve yeni araç veya mevzuat değişikliklerinde güncellenir.

AB'de işe alım ve çalışan yönetimi gibi alanlarda ek yükümlülükler gündemde; AB'de çalışan veya AB'ye aday değerlendiren şirketler için [AB Yapay Zeka Yasası ve Türkiye](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/) rehberine bakın. Kuralları bir kez yazıp bırakmayın: önce küçük bir ekiple deneyin, geri bildirim toplayın, sonra tüm şirkete yayın.
