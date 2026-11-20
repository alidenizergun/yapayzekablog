---
title: "Sağlıkta yapay zeka: bugün gerçekten neler yapılıyor?"
description: "Teşhis desteği, tıbbi görüntüleme, klinik not tutma, hastane operasyonları ve ilaç keşfinde yapay zekanın bugünkü durumu; FDA listesindeki rakamlar ve kullanımın sınırları."
date: 2026-11-20
summary:
  - "FDA'nın yapay zeka destekli cihaz listesi 29 Haziran 2026 itibarıyla 1.614 kayıt içeriyor; ancak toplam sayı kaynaklar arasında farklılaşıyor."
  - "Yapay zekanın sağlıktaki en yerleşik kullanımı, yoğun biçimde görüntüleme ve teşhis desteği alanında görülüyor."
  - "Klinik not tutma, hastane operasyonları ve ilaç keşfinde araçlar mevcut ama kanıtlar çalışmadan çalışmaya değişiyor ve insan denetimi şart."
level: Orta
topic: Temel kullanım
terms: [yapay-zeka, makine-ogrenmesi, bilgisayarli-goru, buyuk-dil-modeli, halusinasyon]
sector: saglik
faq:
  - q: "FDA'nın onayladığı yapay zeka tıbbi cihaz sayısı kaç?"
    a: "FDA'nın yapay zeka destekli cihaz listesinde, kararları 29 Haziran 2026'ya kadar uzanan 1.614 kayıt bulunuyor. Bu toplam birkaç ikincil kaynakta tutarlı, ancak başka kaynaklar farklı bir toplam veriyor; güncel sayı için FDA sayfasına bakın."
  - q: "Yapay zeka doktorun yerini alabilir mi?"
    a: "Bugünkü kullanım doktorun yerini almıyor, ona destek oluyor: görüntüde dikkat çekilecek bölgeleri işaretlemek, notu taslak hâline getirmek gibi. Son karar ve sorumluluk klinisyende kalıyor."
  - q: "Sağlık sorularımı sohbet botuna sorabilir miyim?"
    a: "Genel bilgi edinmek için kullanabilirsiniz, ancak çıktı teşhis veya tedavi önerisi yerine geçmez ve uydurma bilgi içerebilir. Şikâyetiniz varsa bir hekime başvurun."
sources:
  - title: "FDA: Artificial Intelligence-Enabled Medical Devices"
    url: "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices?aff_id=1314"
  - title: "IntuitionLabs: FDA-Approved AI Medical Devices List"
    url: "https://intuitionlabs.ai/articles/fda-approved-ai-medical-devices-list"
  - title: "Sequenex: FDA AI medical device authorizations analysis"
    url: "https://sequenex.com/fda-ai-medical-device-authorizations-analysis/"
  - title: "Pinggy: AI Medical Imaging in 2026"
    url: "https://pinggy.io/blog/ai_medical_imaging_diagnostics_2026/"
  - title: "Arca: FDA's AI-Enabled Device List Is Mostly Radiology 510(k)s"
    url: "https://www.arca.inc/blog/fda-ai-enabled-medical-devices-list"
  - title: "Mass General Brigham: AI Scribes Linked to Modest Reductions in EHR Documentation Time"
    url: "https://www.massgeneralbrigham.org/en/about/newsroom/press-releases/ai-scribes-linked-to-modest-reductions-in-ehr-documentation-time"
  - title: "STAT: Large AI scribe study finds modest time savings, inconsistent use"
    url: "https://www.statnews.com/2026/04/01/ai-ambient-scribes-modest-time-savings-clinical-documentation/"
  - title: "Bio-Pharma AI 2026 raporu: State of Bio-Pharma AI"
    url: "https://bioai-agents.com/en/blog/state-of-biopharma-ai-2026-report/"
---

Yapay zeka sağlıkta bir gelecek vaadinden çok, belirli alanlarda zaten kullanılan bir araç kümesi. Ama bu alanların olgunluğu birbirinden çok farklı: görüntüleme ve teşhis desteğinde düzenleyici kayıtlarla ölçülebilen bir geçmiş var, ilaç keşfinde ise sonuçlar hâlâ klinik denemelerde bekleniyor. Bu rehber, beş ana alanda bugün ne yapıldığını, rakamların ne kadar sağlam olduğunu ve sınırların nerede başladığını özetliyor. Tıbbi tavsiye içermez; kişisel sağlık kararlarınız için bir hekime danışın.

## FDA listesi ne söylüyor?

Amerika Birleşik Devletleri'nde yapay zeka destekli tıbbi cihazların resmî kaydı, ilaç ve cihaz düzenleyicisi FDA'nın [yapay zeka destekli cihazlar sayfasında](https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices?aff_id=1314) tutuluyor. İkincil kaynaklara göre bu listede kararları 29 Haziran 2026'ya kadar uzanan 1.614 kayıt var; rakamı [IntuitionLabs'ın derlemesinde](https://intuitionlabs.ai/articles/fda-approved-ai-medical-devices-list) görebilirsiniz. Toplam sayıyı FDA sayfasında doğrudan doğrulayamadığımız için bunu yaklaşık bir büyüklük olarak okumak daha doğru.

Yıllara göre dağılım için [Sequenex'in analizi](https://sequenex.com/fda-ai-medical-device-authorizations-analysis/) 2025'te 335 kayıt, 2026'nın ilk yarısında 181 kayıt gösteriyor. Rakamlar kaynaklar arasında tam örtüşmüyor: [bir başka blog](https://pinggy.io/blog/ai_medical_imaging_diagnostics_2026/) 2025 için 295 ve toplam için 1.451 rakamını kullanıyor. Bu yüzden bir haberde veya sunumda tek bir sayıyı alıntılayacaksanız tarihini ve kaynağını mutlaka belirtin.

İki noktaya dikkat edin. Birincisi, listedeki bir kayıt cihazın FDA'dan izin aldığı anlamına gelir; klinik sonuçları iyileştirdiğini kanıtlamaz. İkincisi, kayıtların önemli bölümü görüntüleme kaynaklı; [Arca'nın değerlendirmesi](https://www.arca.inc/blog/fda-ai-enabled-medical-devices-list) listenin ağırlıklı olarak radyoloji alanından oluştuğunu söylüyor.

## Teşhis desteği ve tıbbi görüntüleme

Bilgisayarlı görü (computer vision) yöntemleriyle çalışan yazılımlar, röntgen, BT ve MR gibi görüntülerde şüpheli bölgeleri işaretleyebiliyor, ölçüm yapabiliyor ve radyoloğun inceleme sırasını belirlemeye yardım edebiliyor. Bu alan, FDA kayıtlarında da en çok temsil edilen alan. Ayrıntılar için [tıbbi görüntülemede yapay zeka](/rehber/tibbi-goruntulemede-yapay-zeka/) rehberine bakabilirsiniz.

Bu araçların pratikteki rolü genellikle "ikinci göz" olmak. Yazılım bir bulguyu işaretler, karar radyoloğa aittir. Tek bir cihazın başarısı da her hastanede aynı olmaz: farklı cihazlar, farklı hasta grupları ve farklı görüntü kalitesi sonucu değiştirebilir. Bir aracı kullanmaya başlamadan önce hangi görüntü türü ve hangi hasta grubu için izin aldığını kontrol edin.

## Klinik not tutma (ambient scribe)

Ambient scribe, hekim ile hasta arasındaki görüşmeyi dinleyip konuşmadan klinik not taslağı çıkaran, büyük dil modeline dayalı bir araç türü. Amaç, hekimin muayene sonrası belge yazma yükünü azaltmak. Taslak hekime sunulur; hekim düzeltir ve onaylar.

Zaman kazancına dair sonuçlar çalışmadan çalışmaya değişiyor. [Mass General Brigham'ın duyurusu](https://www.massgeneralbrigham.org/en/about/newsroom/press-releases/ai-scribes-linked-to-modest-reductions-in-ehr-documentation-time) kayıt süresinde ılımlı bir azalmadan söz ediyor; [STAT'ın haberi](https://www.statnews.com/2026/04/01/ai-ambient-scribes-modest-time-savings-clinical-documentation/) de büyük bir çalışmada zaman tasarrufunun ılımlı, kullanımın ise tutarsız olduğunu aktarıyor. Yani araç işe yarayabiliyor, ama her hekimde aynı ölçüde değil.

Riskler açık: büyük dil modelleri uydurma bilgi (halüsinasyon) üretebilir ve konuşulmayan bir şeyi nota yazabilir. Bu nedenle her notun hekim tarafından okunması gerekir. Görüşmenin kaydedilmesi ayrıca hasta onayı ve kişisel veri güvenliği meselesidir; bu konuda [kişisel verileri koruma rehberimize](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/) göz atın.

## Hastane operasyonları

Hastane yönetiminde yapay zeka daha az görünür ama gündelik: randevu ve yatak planlaması, yoğun bakım takibi, belgeleme ve karar destek süreçleri. Türkiye'den bir örnek olarak [Yeni Journal'ın haberi](https://www.yenijournal.com/saglik-bakanliginda-yeni-donem-yogun-bakimlar-yapay-zeka-ile-takip-edilecek), Sağlık Bakanlığı'nda yoğun bakımların yapay zeka ile takip edilmesine yönelik yeni bir dönemi duyuruyor. Türkiye'deki tabloyu daha geniş görmek için [Türkiye'de sağlıkta yapay zeka](/rehber/turkiyede-saglikta-yapay-zeka/) rehberimize bakabilirsiniz.

Bu alanda başlamak isteyen bir kurum için pratik sıra şöyle: önce ölçülebilir tek bir sorun seçin (örneğin bekleme süresi), mevcut veri kalitesini kontrol edin, küçük bir pilot yapın ve sonucu başlangıç değeriyle karşılaştırın. Operasyonel araçlar tanı koymadığı için düzenleme yükü daha hafif olabilir, ama hasta verisi içerdiği sürece gizlilik yükümlülükleri aynen geçerlidir.

## İlaç keşfi

Yapay zeka ilaç keşfinde hedef molekül belirleme, aday bileşik tasarlama ve deneme planlamasında kullanılıyor. Ayrıntılı bakış için [ilaç keşfinde yapay zeka](/rehber/ilac-kesfinde-yapay-zeka/) rehberimize göz atın. Burada beklentiyi dengelemek önemli: [Bio-Pharma AI 2026 raporu](https://bioai-agents.com/en/blog/state-of-biopharma-ai-2026-report/), yapay zeka destekli çok sayıda varlığın insan denemelerinde olduğunu, ancak başlığında yapay zekayla keşfedilmiş hiçbir ilacın henüz onay almadığını belirtiyor. Sektör raporlarındaki rakamların bir kısmı derleme ve pazarlama niteliğinde olduğundan, hızlanma iddialarını klinik onay verisiyle karıştırmayın.

## Sınırlar ve dikkat edilecekler

- **Düzenleyici izin, kanıt değildir.** Bir cihazın listede olması, sizin hastanenizde aynı performansı vereceğini göstermez.
- **İnsan denetimi şart.** Görüntüleme işaretlemesi de not taslağı da hekimin gözünden geçmelidir.
- **Veri ve önyargı.** Modeller eğitildikleri hasta gruplarında iyi çalışır; farklı bir nüfusta performans düşebilir.
- **Gizlilik.** Hasta verisini genel amaçlı bir sohbet botuna yapıştırmayın; kurumunuzun onayladığı araçları kullanın.
- **Rakamlara temkinli yaklaşın.** FDA listesindeki toplam bile kaynaklara göre değişiyor; tek bir blog rakamına dayanmayın.

Bireysel kullanıcıysanız genel sohbet botlarını bilgi edinmek için kullanabilirsiniz; nasıl yaklaşmanız gerektiği için [sağlık sorularında yapay zeka kullanımı](/rehber/saglik-sorularinda-yapay-zeka-kullanimi/) rehberini okuyun. Belirtileriniz için ise yapay zekanın yanıtı hekim muayenesinin yerini tutmaz.
