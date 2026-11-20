---
title: "Giyilebilir cihazlar ve yapay zeka: akıllı saatler sağlığı nasıl izliyor?"
description: "Akıllı saat ve yüzüklerdeki FDA onaylı özellikler (hipertansiyon bildirimi, uyku apnesi), ritim bozukluğu tespitinin doğruluğu, yanlış alarmlar ve sağlık verilerinin gizliliği."
date: 2026-11-20
summary:
  - "Apple ve Samsung'un bazı sağlık özellikleri FDA'dan onay aldı, ancak bunlar tanı koymaz, yalnızca kullanıcıyı uyarır."
  - "Akıllı saatler ritim bozukluğunu genel olarak güvenilir yakalıyor, ama algoritmalar arasında fark var ve düşük riskli kişilerde yanlış alarm artabiliyor."
  - "Tüketici saatlerinin verisi ABD'de büyük ölçüde HIPAA dışında kalıyor; Türkiye'de sağlık verisi KVKK'da özel nitelikli sayılıyor."
level: Başlangıç
topic: Temel kullanım
terms: [yapay-zeka, makine-ogrenmesi, egitim-verisi]
sector: saglik
faq:
  - q: "Apple Watch'un hipertansiyon bildirimi tansiyonumu ölçüyor mu?"
    a: "Hayır. Özellik bir tansiyon değeri göstermiyor, yalnızca tansiyon yüksekliğine işaret eden bir örüntü görürse bildirim veriyor. Kesin ölçüm ve değerlendirme için hekiminize başvurun."
  - q: "Akıllı saatim ritim bozukluğu uyarısı verdiyse hastalığım var demek mi?"
    a: "Hayır, uyarı tanı değildir. Uyarı ile doğrulama ayrı şeylerdir; bildirimi hekiminize gösterip değerlendirme yaptırmak gerekir."
  - q: "Akıllı saat verilerim yasal olarak korunuyor mu?"
    a: "ABD'de tüketici saatlerinin verisi büyük ölçüde HIPAA kapsamı dışında kalıyor. Türkiye'de ise kişisel sağlık verisi KVKK kapsamında özel nitelikli kişisel veri sayılıyor."
sources:
  - title: "HLTH: Apple Receives FDA Nod For Hypertension Notification Feature"
    url: "https://hlth.com/insights/news/apple-receives-fda-nod-for-hypertension-notification-feature-2025-09-16"
  - title: "Wareable: Apple Watch hypertension feature gets FDA clearance"
    url: "https://www.wareable.com/apple/apple-watch-hypertension-notifications-feature-fda-approved"
  - title: "Samsung: Sleep apnea feature on Galaxy Watch cleared by US FDA"
    url: "https://news.samsung.com/global/samsungs-sleep-apnea-feature-on-galaxy-watch-first-of-its-kind-cleared-by-us-fda"
  - title: "Engadget: Samsung's Galaxy Ring gets FDA approval for advanced sleep apnea detection"
    url: "https://www.engadget.com/2305182/samsung-galaxy-ring-gets-fda-approval-for-advanced-sleep-apnea-detection/"
  - title: "PMC: Accuracy of Smartwatches in the Detection of Atrial Fibrillation (meta-analiz)"
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12713314/"
  - title: "PMC: Smartwatch Accuracy for Atrial Fibrillation: Do Not Confuse Alert and Confirmation"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13221851/"
  - title: "Reason: The feds are investing in wearable health trackers"
    url: "https://reason.com/2026/03/19/the-feds-are-investing-in-wearable-health-trackers-that-could-put-your-private-data-at-risk/"
  - title: "KVKK: Kişisel Verilerin Korunması Kanunu hakkında sıkça sorulan sorular"
    url: "https://kvkk.gov.tr/SharedFolderServer/CMSFiles/c148901d-cd7f-43ff-ae9a-978fb78fb43c.pdf"
---

Akıllı saatler ve akıllı yüzükler artık yalnızca adım saymıyor; kalp ritmi, uyku ve tansiyon gibi alanlarda bildirim üreten, yapay zeka destekli algoritmalar taşıyor. Bu özelliklerin bir kısmı ABD'de FDA'dan onay veya izin aldı. Bu rehber, hangi özelliklerin onaylı olduğunu, doğruluğun ve yanlış alarmın sınırlarını ve verilerinizin nasıl korunduğunu anlatıyor. Metin tıbbi tavsiye içermez; bir bildirimle ilgili karar vermeden önce hekiminize danışın. Genel çerçeve için [Sağlıkta yapay zeka](/sektor/saglik/) sayfasına da bakabilirsiniz.

## Akıllı saatler sağlığı nasıl izliyor?

Bu cihazlar bileğe ya da parmağa yerleştirilmiş sensörlerden sürekli veri topluyor. Algoritma, bu veride kalıp bir örüntü arıyor ve bulursa sizi bilgilendiriyor. Algoritmalar, makine öğrenmesiyle çalışıyor: önce çok sayıda katılımcının verisiyle eğitiliyor, sonra klinik çalışmalarla sınanıyor. Örneğin Apple, hipertansiyon özelliği için 100.000'den fazla katılımcılı çalışmalardan veri kullandığını, performansı ise 2.000'den fazla katılımcılı klinik çalışmayla doğruladığını söylüyor ([HLTH](https://hlth.com/insights/news/apple-receives-fda-nod-for-hypertension-notification-feature-2025-09-16)).

Burada önemli bir ayrım var: Bu özellikler tarama ve farkındalık aracı. Bir bildirim, kesin bir tanı anlamına gelmiyor.

## Hipertansiyon bildirimi: tansiyon değeri vermiyor

Apple'ın hipertansiyon bildirimi Eylül 2025'te FDA onayı aldı. Algoritma 30 günlük optik kalp sensörü verisini inceliyor; tansiyon yüksekliğine işaret eden bir örüntü görürse kullanıcıyı bilgilendiriyor. Özellik Series 9, 10, 11 ve Ultra 2/3 modellerinde, watchOS 26 ile geliyor. Apple, özelliğin tüm hipertansiyon vakalarını yakalamayacağını da belirtiyor. Şirket, ilk yıl içinde bir milyondan fazla kişiyi olası teşhis edilmemiş yüksek tansiyon konusunda uyarmayı bekliyor ([HLTH](https://hlth.com/insights/news/apple-receives-fda-nod-for-hypertension-notification-feature-2025-09-16)).

Özelliğin tansiyon değeri göstermediğini bilmek gerekiyor; yalnızca bir bildirim veriyor ([Wareable](https://www.wareable.com/apple/apple-watch-hypertension-notifications-feature-fda-approved)). Yani bu bir tansiyon aleti yerine geçmiyor. Bildirim gelirse sonraki adımı hekiminiz belirler.

## Uyku apnesi: saatten yüzüğe

Samsung'un Galaxy Watch'taki uyku apnesi özelliği, FDA'dan 6 Şubat 2024 tarihli De Novo kararıyla onay aldı. Özellik 22 yaş üstü, daha önce tanı almamış kişilerde orta ve ağır obstrüktif uyku apnesi belirtilerini tespit etmeyi hedefliyor ve iki gece izleme yapıyor ([Samsung](https://news.samsung.com/global/samsungs-sleep-apnea-feature-on-galaxy-watch-first-of-its-kind-cleared-by-us-fda)).

Samsung'un yükseltilmiş uyku apnesi özelliği de FDA onayı aldı; şirket bunun Galaxy Ring için ilk FDA onaylı akıllı yüzük özelliği olduğunu duyurdu. Özellik, en az iki gece beş saat uyku ve on günlük bir pencere istiyor. Sonuç hafif, ara sıra veya sık uyku apnesi olarak veriliyor. Samsung, tanının yalnızca hekim tarafından konulabileceğini vurguluyor ([Engadget](https://www.engadget.com/2305182/samsung-galaxy-ring-gets-fda-approval-for-advanced-sleep-apnea-detection/)).

Özelliğin çalışması için gereken uyku süresi ve gün sayısı, cihazı takarak uyumanız gerektiği anlamına geliyor. Yüzüğü veya saati düzenli takmıyorsanız sonuç da çıkmayabilir.

## Ritim bozukluğu tespitinin doğruluğu

Atriyal fibrilasyon (AF) tespiti, akıllı saatlerin en çok incelenen alanlarından biri. 26 çalışmayı ve 17.349 hastayı kapsayan, JACC: Advances'ta 2025'te yayımlanan sistematik derleme ve meta-analiz, cihaz algoritmaları arasında farklılık olduğunu, ancak genel olarak güvenilir bir tespit yapıldığını bildiriyor ([PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12713314/)).

Ama güvenilir tespit, her uyarının doğru olduğu anlamına gelmiyor. JACC: Advances'taki bir editöre mektupta, uyarı ile doğrulamanın birbirine karıştırılmaması gerektiği vurgulanıyor. Yazarlara göre tespit ve tanı birleştirildiğinde akıllı saat taramasının güvenilirliği olduğundan fazla görünüyor. Mektupta, AF'nin yaygın olmadığı durumlarda (örneğin ameliyat sonrası) pozitif öngörü değerinin düştüğü ve gereksiz uyarı üretildiği de belirtiliyor ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC13221851/)). Basit anlatımla: hastalığın az görüldüğü bir grupta, doğru çalışan bir algoritma bile doğru uyarıdan çok yanlış uyarı verebilir.

## Yanlış alarm ve ölçüm hatası

İki tür hata var. Birincisi yanlış pozitif: ritminiz normal olduğu halde uyarı gelmesi. Bu, gereksiz kaygıya ve ek kontrole yol açabilir. İkincisi kaçırma: algoritmanın aradığı örüntüye uymayan bir durumun fark edilmemesi. Apple da hipertansiyon özelliğinin tüm vakaları yakalamayacağını açıkça söylüyor ([HLTH](https://hlth.com/insights/news/apple-receives-fda-nod-for-hypertension-notification-feature-2025-09-16)).

Bu yüzden pratik kural şu: Bildirim geldiğinde paniğe kapılmayın, ama görmezden de gelmeyin. Bildirimin tarihini ve ekran görüntüsünü saklayıp hekiminize gösterin. Bildirim gelmemesi de sağlığınızın iyi olduğunun kanıtı sayılmaz; belirtileriniz varsa hekime başvurmak için saatin uyarmasını beklemeyin. Benzer sınırlar sohbet botları için de geçerli; bunun için [sağlık sorularında yapay zeka kullanımı](/rehber/saglik-sorularinda-yapay-zeka-kullanimi/) rehberine göz atabilirsiniz.

## Verileriniz kime ait? Gizlilik ve KVKK

Nabız, uyku ve ritim verisi çok kişisel bilgi. ABD'de tüketici akıllı saatlerinin verisi büyük ölçüde HIPAA kapsamı dışında kalıyor; HIPAA, verinin hekim-hasta ilişkisi içinde üretilmesi durumunda devreye giriyor ([Reason](https://reason.com/2026/03/19/the-feds-are-investing-in-wearable-health-trackers-that-could-put-your-private-data-at-risk/), analiz yazısı). Bu boşluğu kapatmaya yönelik yasa önerileri ABD'de gündemde olsa da güncel durumları için güncel kaynaklara bakmak gerekir.

Türkiye'de çerçeve farklı. KVKK kapsamında kişisel sağlık verisi özel nitelikli kişisel veri sayılıyor. Bu veriler kural olarak işlenemiyor; işlenebilmesi için Kanun'un 6. maddesinde sayılan şartların sağlanması gerekiyor ([KVKK](https://kvkk.gov.tr/SharedFolderServer/CMSFiles/c148901d-cd7f-43ff-ae9a-978fb78fb43c.pdf)). Hangi kurumun hangi şartla işlediğini görmek için üreticinin aydınlatma metnini okumak yararlı. Daha geniş bir bakış için [sağlık verisi ve yapay zeka gizliliği](/rehber/saglik-verisi-ve-yapay-zeka-gizlilik/) ile [kişisel verileri koruma](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/) rehberleri var.

## Nasıl başlanır, nelere dikkat edilir?

- **Amacınızı belirleyin.** Uyku düzeninizi mi, ritminizi mi izlemek istiyorsunuz? Özellikler cihaz ve modele göre değişiyor.
- **Onayın kapsamına bakın.** FDA onayı ABD'deki bir süreç. Özelliğin sizin ülkenizde ve cihazınızda sunulup sunulmadığını üreticiden öğrenin. Özelliklerin hedef kitlesi de sınırlı; örneğin Samsung'un uyku apnesi özelliği 22 yaş üstü, daha önce tanı almamış kişilere yönelik.
- **Veri paylaşım ayarlarını gözden geçirin.** Hangi uygulamaların sağlık verinize eriştiğini ve verinin nereye aktarıldığını düzenli kontrol edin.
- **Bildirimi tanı gibi okumayın.** Uyarıyı hekime götürün, kendi kendinize tedavi veya ilaç kararı vermeyin.
- **Kaygıyı izleyin.** Yanlış AF uyarılarının, uyarı alanlarda iyi oluş algısını düşürdüğü bir çalışma da var; bildirimler sizi sürekli huzursuz ediyorsa bunu hekiminizle konuşun.

Türkiye'deki gelişmeleri görmek için [Türkiye'de sağlıkta yapay zeka](/rehber/turkiyede-saglikta-yapay-zeka/) rehberi de yardımcı olabilir.

## Sonuç: yardımcı bir sinyal, tanı değil

Onaylı özellikler, kalp ritmi, tansiyon yüksekliği ve uyku apnesi gibi konularda erken bir işaret verebilir. Ancak doğruluk, bildirimin hangi grupta ve hangi koşulda üretildiğine bağlı; uyarı ile doğrulama aynı şey değil. Saatinizi bir hekimin yerine değil, hekimle konuşacağınız bir veri kaynağı olarak görmek en sağlıklı yaklaşım.
