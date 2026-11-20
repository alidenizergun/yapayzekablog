---
title: "Yapay zeka ile müşteri segmentasyonu ve kişiselleştirme: KVKK sınırları"
description: "Müşteri verisiyle segmentasyon, kişiselleştirilmiş öneri ve e-posta yaparken KVKK, açık rıza ve İYS kuralları nerede devreye giriyor? Verinin yapay zeka araçlarına yüklenmesi için pratik bir yol haritası."
date: 2026-11-20
summary:
  - "KVKK Kurulu'nun 2026/347 sayılı kararına göre açık rıza ile aydınlatma yükümlülüğü ayrı işlemlerdir ve iç içe yürütülemez."
  - "İYS'de onayı olmayan alıcılara ticari elektronik ileti gönderilemez; yapay zeka bu kuralı değiştirmez."
  - "Müşteri verisini yapay zeka aracına yüklemeden önce kimlik bilgilerini çıkarın, yurt dışı aktarım ihtimalini ve sağlayıcının veriyi nasıl kullandığını kontrol edin."
level: Orta
topic: Güvenlik ve gizlilik
terms: [yapay-zeka, uretken-yapay-zeka, egitim-verisi, istem]
sector: pazarlama
faq:
  - q: "Yapay zeka ile segmentasyon yapmak için her zaman açık rıza gerekir mi?"
    a: "Bu, verinin türüne ve işleme amacına göre değişir; hukuki dayanağı baştan bir uzmanla belirlemelisiniz. KVKK Kurulu'nun 2026/347 sayılı kararı, açık rıza alınacaksa bunun aydınlatmadan ayrı ve anlaşılır biçimde alınması gerektiğini söylüyor."
  - q: "İYS'de onayı olmayan müşteriye yapay zeka ile hazırlanmış e-posta gönderebilir miyim?"
    a: "Ticari elektronik ileti niteliğindeyse hayır; İYS'de onayı bulunmayan alıcılara ileti gönderilemiyor. Metni yapay zekanın yazmış olması bu kuralı değiştirmiyor."
  - q: "Müşteri listesini ChatGPT gibi bir araca yükleyebilir miyim?"
    a: "Ad-soyad, kimlik gibi doğrudan tanımlayıcı verileri ve hassas bilgileri üretken yapay zeka araçlarıyla paylaşmamanız öneriliyor. Gerekirse veriyi anonimleştirin ya da maskeleyin ve sağlayıcı yurt dışındaysa KVKK m.9'u değerlendirin."
sources:
  - title: "KVKK: Kurul'un 18.02.2026 tarihli 2026/347 sayılı ilke kararı"
    url: "https://www.kvkk.gov.tr/SharedFolderServer/CMSFiles/MTY5Y2UzNzI5ZDQzODc.pdf"
  - title: "İleti Yönetim Sistemi: Yönetmelikte değişiklik"
    url: "https://iys.org.tr/iys/yonetmelik-degisiklik"
  - title: "Bener Hukuk Bürosu: Ticari elektronik ileti yönetmelik değişikliği bülteni"
    url: "https://bener.com/tr/ticari-iletisim-ve-ticari-elektronik-iletiler-hakkinda-yonetmelikte-degisiklik-yapilmasina-dair-yonetmelike-iliskin-bulten/"
  - title: "Zumbul Hukuk: Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi (15 Soruda)"
    url: "https://www.zumbul.av.tr/tr/duyurular/uretken-yapay-zeka-rehberi-kvkk-yayinlanmistir"
  - title: "İmer Hukuk: Üretken Yapay Zekâ ve KVKK Rehberi (15 Soruda)"
    url: "https://imer.av.tr/kvkk-araclari/uretken-yapay-zeka-kisisel-veri-rehberi"
  - title: "Lexology: KVKK Yapay Zekâ Alanında Kişisel Verilerin Korunmasına Dair Tavsiyeleri Yayımladı"
    url: "https://www.lexology.com/library/detail.aspx?g=2b9131e5-f1a2-4ffc-857b-38fae0f0fdf7"
  - title: "Deloitte Digital: How AI is reshaping personalization and the customer journey"
    url: "https://www.deloittedigital.com/us/en/insights/research/personalizing-growth.html"
  - title: "ContentGrip: 2026 CX trends: AI, trust, and loyalty"
    url: "https://www.contentgrip.com/ai-cx-loyalty-2026-trends/"
---

Müşteri verisi üzerinde çalışan yapay zeka, kimin neye ilgi duyduğunu gruplamayı ve herkese farklı öneri, kampanya ya da e-posta göstermeyi kolaylaştırıyor. Ancak Türkiye'de bu işin iki katmanlı bir hukuki çerçevesi var: kişisel verinin nasıl işlendiğini belirleyen KVKK ve ticari elektronik iletilerin nasıl gönderileceğini düzenleyen İYS kuralları. Bu rehber, segmentasyon ve kişiselleştirmeye nasıl başlayabileceğinizi, hangi sınırlara dikkat etmeniz gerektiğini ve müşteri verisini yapay zeka araçlarına yüklerken nelere bakacağınızı özetliyor. Hukuki görüş değildir; uygulamaya geçmeden önce veri koruma uzmanınıza danışın.

## Segmentasyon ve kişiselleştirme ne işe yarar

Segmentasyon, müşterileri davranış, satın alma geçmişi ya da ilgi alanı gibi ölçütlere göre gruplamak; kişiselleştirme ise bu gruplara ya da tek tek kişilere uygun öneri ve mesaj sunmaktır. Yapay zeka burada klasik demografik kuralların ötesine geçip daha ince gruplar bulabiliyor. Bu savı öne süren bir akademik çalışma [ResearchGate](https://www.researchgate.net/publication/415809124_AI-Based_Customer_Segmentation_and_Personalized_Marketing_Analytics) üzerinde yayımlanmış; ancak hakem denetiminden geçip geçmediği belli değil, bu yüzden bulguyu temkinli okuyun.

Tüketici tarafında tablo karışık. [Deloitte Digital'in 2026 araştırmasına](https://www.deloittedigital.com/us/en/insights/research/personalizing-growth.html) göre tüketicilerin yüzde 52'si kişiselleştirme yapan markalardan daha çok satın alma eğiliminde. Aynı raporda markalar deneyimlerin yüzde 62'sini kişiselleştirdiklerini düşünürken, tüketiciler bunun yüzde 44 olduğunu söylüyor. Yani markaların algısı ile müşterinin algısı arasında bir fark var. Qualtrics raporunun [özetine](https://www.contentgrip.com/ai-cx-loyalty-2026-trends/) göre tüketicilerin yüzde 64'ü kişiselleştirilmiş deneyimleri tercih ediyor, ama yalnızca yüzde 39'u faydanın gizlilik bedelinden büyük olduğunu düşünüyor. Bu anketler ABD ve başka ülkelerdeki örneklemlere ait; Türkiye'deki tüketicilere özgü bir ölçüm bulunmuyor.

Kısacası kişiselleştirme talep görüyor, ama güven olmadan işlemiyor. Genel kullanım alanları için [pazarlamada yapay zeka kullanım alanları](/rehber/pazarlamada-yapay-zeka-kullanim-alanlari/) rehberine de bakabilirsiniz.

## KVKK açısından başlangıç noktası: veri ve hukuki dayanak

Segmentasyon girdisi olan her veri, kişiyi belirliyorsa ya da belirlenebilir kılıyorsa kişisel veridir. Bu nedenle ilk soru "hangi modeli kullanacağım" değil, "hangi veriyi, hangi amaçla, hangi hukuki dayanakla işleyeceğim" olmalı.

KVKK Kurulu'nun 18.02.2026 tarihli ve 2026/347 sayılı [ilke kararı](https://www.kvkk.gov.tr/SharedFolderServer/CMSFiles/MTY5Y2UzNzI5ZDQzODc.pdf) bu açıdan önemli. Karar, açık rıza ile aydınlatma yükümlülüğünün hukuki niteliklerinin farklı olduğunu, bu ikisinin iç içe uygulanamayacağını belirtiyor ve 24.03.2026 tarihli Resmî Gazete'de yayımlandı. Veri minimizasyonu ile ikincil kullanımda rızanın açık ve anlaşılır olması da kararda yer alıyor. Pratikte bunun anlamı şu: gizlilik metninin içine gömülmüş "kabul ediyorum" kutusu, açık rıza yerine geçmez.

İkincil kullanım, segmentasyon projelerinde sık karşılaşılan bir tuzak. Müşteriden sipariş teslimi için alınan adres ya da satın alma geçmişini, sonradan başka bir amaçla model beslemek için kullanacaksanız bu amacın baştan ve anlaşılır biçimde bildirilmesi gerekir. Her durumda hangi dayanağa güveneceğinizi hukuk danışmanınızla netleştirin.

Çıktı tarafını da unutmayın. KVKK'nın üretken yapay zeka rehberini özetleyen [bir kaynağa](https://imer.av.tr/kvkk-araclari/uretken-yapay-zeka-kisisel-veri-rehberi) göre model kişisel veriyi hedeflemese bile çıktıda kişisel veri üretilebilir ve bu, işlemeyi ortadan kaldırmaz. Yani modelin ürettiği "bu müşteri şu ürünle ilgilenir" gibi çıkarımlar da yönetmeniz gereken veri sayılabilir. Daha geniş bir çerçeve için [yapay zeka ile kişiselleştirme ve KVKK](/rehber/yapay-zeka-ile-kisisellestirme-ve-kvkk/) rehberine göz atın.

## E-posta ve SMS: İYS kuralları yapay zekadan bağımsız işler

Kişiselleştirilmiş e-posta kampanyası hazırladığınızda segmentasyonun ötesinde ikinci bir filtre devreye girer: alıcının ticari elektronik ileti onayı. [İYS'nin yönetmelik değişikliği sayfasına](https://iys.org.tr/iys/yonetmelik-degisiklik) göre ticari elektronik ileti göndermek isteyen gerçek ve tüzel kişilerin İYS'ye kaydolması zorunlu hale geldi ve İYS'de onayı bulunmayan alıcılara ileti gönderilemiyor. Aracı hizmet sağlayıcılar da hizmet sağlayıcının talimatıyla ileti göndermeden önce İYS'de onay olup olmadığını kontrol etmek zorunda.

Onayı İYS dışında topluyorsanız süre önemli. Bir hukuk bürosu [bülteninde](https://bener.com/tr/ticari-iletisim-ve-ticari-elektronik-iletiler-hakkinda-yonetmelikte-degisiklik-yapilmasina-dair-yonetmelike-iliskin-bulten/) İYS dışında alınan onayların üç iş günü içinde İYS'ye kaydedilmesi gerektiğini, kaydedilmeyenlerin geçersiz sayıldığını aktarıyor. Bu ikincil bir kaynak; süreyi uygulamadan önce güncel mevzuattan doğrulayın.

Pratik sonuç: yapay zekanın "bu müşteri kampanyaya yatkın" demesi, o müşteriye ileti gönderme hakkı vermez. Segment listenizi dışa aktarmadan önce İYS onay durumuyla eşleştirin. Metin üretimi için araç kullanıyorsanız [yapay zeka ile e-posta yazma](/rehber/yapay-zeka-ile-e-posta-yazma/) rehberi işinize yarar; ama gönderim izni ayrı bir konudur.

## Müşteri verisini yapay zeka araçlarına yüklerken

Segment analizi için bir müşteri tablosunu sohbet aracına yapıştırmak en riskli adımlardan biri. KVKK'nın üretken yapay zeka rehberini özetleyen [bir kaynağa](https://www.zumbul.av.tr/tr/duyurular/uretken-yapay-zeka-rehberi-kvkk-yayinlanmistir) göre doğrudan tanımlayıcı verilerin (ad-soyad, kimlik gibi) ve hassas bilgilerin üretken yapay zeka araçlarıyla paylaşılmaması öneriliyor. Yurt dışında yerleşik sağlayıcılar kullanılıyorsa aktarımın KVKK m.9 kapsamında değerlendirilmesi gerekiyor.

KVKK'nın yapay zeka tavsiyelerini anlatan [Lexology özeti](https://www.lexology.com/library/detail.aspx?g=2b9131e5-f1a2-4ffc-857b-38fae0f0fdf7) de iki ilkeyi öne çıkarıyor: sonuca kişisel veri işlemeden ulaşılabiliyorsa veriyi anonimleştirerek işlemek ve veri sorumlusu ile veri işleyen rollerini proje başında belirlemek. Veri minimizasyonu da aynı çerçevede yer alıyor.

Bunları günlük işe şöyle çevirebilirsiniz:

- Aracın görevi için gereken sütunları seçin; geri kalanını çıkarın.
- Ad, telefon, e-posta ve kimlik numarasını kaldırın ya da rastgele kodlarla değiştirin.
- Aracı kurumsal sözleşmeyle mi yoksa bireysel hesapla mı kullandığınızı netleştirin; sağlayıcının veriyi model geliştirmede kullanıp kullanmadığını sözleşme ve ayarlardan kontrol edin.
- Sağlayıcı yurt dışındaysa aktarımı m.9 açısından hukuk danışmanınıza sorun.
- Hangi verinin hangi araca girebileceğini yazılı bir kurala bağlayın.

Son madde için [şirket içi yapay zeka politikası](/rehber/sirket-ici-yapay-zeka-politikasi/) rehberi, bireysel önlemler için [yapay zeka kullanırken kişisel verileri koruma](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/) rehberi başlangıç sağlar.

## Nasıl başlanır: küçük, kontrollü bir pilot

Tüm müşteri tabanıyla başlamak yerine dar bir pilot kurmak hem riski hem maliyeti düşürür.

1. **Amacı yazın.** "Tekrar satın alma oranını artırmak için ürün önerisi" gibi tek cümlelik bir amaç belirleyin. Amaç, hangi verinin gerekli olduğunu da belirler.
2. **Veriyi envanterleyin.** Hangi alanlar var, hangi amaçla toplanmış, rıza ya da onay durumu ne? Eski bir amaçla toplanmış veriyi yeni bir amaç için kullanacaksanız ikincil kullanım sorusunu yanıtlayın.
3. **Anonimleştirin veya takma adlandırın.** Analiz için kimlik bilgisine gerek yoksa çıkarın.
4. **Aracı seçin.** Kurumsal koşulları, veri saklama ve eğitim politikasını ve sunucu konumunu inceleyin.
5. **Küçük bir segmentle deneyin.** Sonuçları insan gözüyle gözden geçirin; model çıktısını otomatik olarak kampanyaya dönüştürmeyin.
6. **Gönderimden önce İYS'yi kontrol edin.** Segmenti iletişim kanalına aktarmadan önce onay eşleştirmesini yapın.
7. **Kayıt tutun.** Hangi veriyle, hangi araçla, hangi amaçla çalıştığınızı belgeleyin.

## Riskler ve sınırlar

Birkaç noktayı baştan kabul etmekte fayda var. Birincisi, kişiselleştirmenin etkisi her yerde aynı değil: yukarıdaki anket rakamları Türkiye için değil, başka pazarlar için geçerli. Türkiye'de aynı sonucu alacağınızı varsaymayın; kendi A/B testlerinizle ölçün.

İkincisi, algı sorunu var. Deloitte verisine göre markalar ile müşteriler kişiselleştirmenin ne kadar yapıldığı konusunda aynı fikirde değil. [Qualtrics özetine](https://www.contentgrip.com/ai-cx-loyalty-2026-trends/) göre ise tüketicilerin yüzde 53'ü yapay zekayla ilgili en büyük kaygısı olarak kişisel verinin kötüye kullanılmasını gösteriyor. Fazla isabetli bir öneri, yanlış hazırlanmış bir gizlilik iletişimiyle birleşince güveni zedeleyebilir.

Üçüncüsü, hukuki çerçeve hareketli. KVKK, yapay zeka konusunda tavsiye ve rehber yayımlamaya, kararlar almaya devam ediyor; yurt dışı aktarım ve ticari ileti gibi alanlarda yeni düzenlemeleri izlemek gerekiyor. İkincil kaynaklardaki idari para cezası tutarları ile süreleri uygulamadan önce resmi metinlerden teyit edin.

Son olarak, bu rehber hukuki görüş değildir. Rıza metinleri, aydınlatma, yurt dışı aktarım ve İYS süreçleri için kendi durumunuza göre bir hukuk ya da veri koruma uzmanına danışın.
