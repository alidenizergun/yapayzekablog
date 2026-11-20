---
title: "Öğretmenler için yapay zeka: ders hazırlığı, ölçme ve sınırlar"
description: "Öğretmenler yapay zekayı ders planı, soru hazırlama, farklılaştırılmış materyal ve geri bildirim taslağında nasıl kullanabilir? Araçlar, öğrenci verisini koruma ve yapay zekanın sınırları."
date: 2026-11-20
summary:
  - "Yapay zeka ders planı, etkinlik, soru ve geri bildirim için taslak üretmede işe yarıyor, ama her çıktıyı öğretmenin kontrol etmesi gerekiyor."
  - "ChatGPT for Teachers yalnızca ABD'deki doğrulanmış K-12 eğitimcilerine açık; Gemini ve MagicSchool için de kullanım koşullarını resmi sayfalardan kontrol etmek gerekiyor."
  - "Öğrenci adı, notu ve ödevi gibi kişisel veriler genel amaçlı araçlara girilmemeli; not verme ve disiplin gibi kararlar öğretmende kalmalı."
level: Başlangıç
topic: Eğitim ve öğrenme
terms: [uretken-yapay-zeka, halusinasyon, istem, yapay-zeka-onyargisi, sohbet-botu]
sector: egitim
faq:
  - q: "Türkiye'deki öğretmenler ChatGPT for Teachers planını kullanabilir mi?"
    a: "Hayır. OpenAI'ın yardım sayfasına göre plan, ABD'deki akredite K-12 okul ve ilçelerinde çalışan doğrulanmış eğitimcilere yönelik. Türkiye'deki öğretmenler bu planı kullanamıyor."
  - q: "Öğrenci adlarını ve ödevlerini yapay zeka araçlarına yazabilir miyim?"
    a: "Genel amaçlı araçlara öğrenci adı, numarası, notu ve ödevi gibi kişisel verileri girmeyin. Geri bildirim için ölçüt ve şablon üretin, öğrenciye özel kısmı kendiniz yazın."
  - q: "Yapay zeka ödevleri notlandırabilir mi?"
    a: "Taslak geri bildirim için yardımcı olabilir, ama notlandırma kararı öğretmende kalmalı. TPT'nin 2026 anketine dayanan habere göre eğitimcilerin yalnızca yüzde 4'ü yapay zekayı notlandırma için kullanıyor."
sources:
  - title: "OpenAI Yardım Merkezi: ChatGPT for Teachers"
    url: "https://help.openai.com/en/articles/12844995-chatgpt-for-teachers"
  - title: "CNBC: OpenAI rolls out 'ChatGPT for Teachers' for K-12 educators and districts"
    url: "https://www.cnbc.com/2025/11/19/openai-chatgpt-for-teachers-k-12-educators.html"
  - title: "Google: Transform teaching and learning with updates to Gemini and Google Classroom"
    url: "https://blog.google/products-and-platforms/products/education/bett-2026-gemini-classroom-updates/"
  - title: "MagicSchool AI FAQ"
    url: "https://www.magicschool.ai/faq"
  - title: "MEB: Eğitimde yapay zekâ uygulamaları etik kılavuzu yayımlandı"
    url: "https://www.meb.gov.tr/egitimde-yapay-zeka-uygulamalari-etik-kilavuzu-yayimlandi/haber/39496/tr"
  - title: "NTV: MEB'den yapay zeka destekli yeni EBA"
    url: "https://www.ntv.com.tr/egitim/mebden-yapay-zeka-destekli-yeni-eba-1748366"
  - title: "Gallup: Teachers Using AI Say It Frees Up Time for What Matters Most"
    url: "https://news.gallup.com/poll/715364/teachers-using-say-frees-time-matters-mostost.aspx"
  - title: "THE Journal: 80% of Teachers Are Using AI Tools in the Classroom"
    url: "https://thejournal.com/articles/2026/04/22/80-of-teachers-are-using-ai-tools-in-the-classroom.aspx"
---

Ders hazırlığı, soru yazımı ve geri bildirim öğretmenlerin en çok zaman harcadığı işler arasında. Yapay zeka bu işlerde hızlı bir ilk taslak sunabiliyor; ancak taslağın doğruluğundan, öğrenci verisinin korunmasından ve son kararlardan öğretmen sorumlu kalıyor. Bu rehber hangi işlerde yardım alabileceğinizi, hangi araçların öne çıktığını, nasıl başlayabileceğinizi ve nerede durmanız gerektiğini anlatıyor.

## Beklentinizi gerçekçi tutun

Kullanım hızla yaygınlaşıyor, ama kazanç herkes için aynı değil. Gallup'un ABD'de 1.952 K-12 (anaokulundan 12. sınıfa) eğitimcisiyle yaptığı ankete göre eğitimcilerin yüzde 59'u 2025-2026 eğitim yılında yapay zeka araçlarını kullandı. Kullananların yüzde 64'ü bunun işin en önemli kısımlarına zaman açtığını söyledi; yüzde 7'si ise yapay zekanın zamanını aldığını, yüzde 29'u bir fark görmediğini belirtti ([Gallup](https://news.gallup.com/poll/715364/teachers-using-say-frees-time-matters-mostost.aspx)). Zaman tasarrufu öğretmenlerin kendi beyanına dayanıyor.

TPT'nin 11.500 eğitimciyle yaptığı 2026 anketine dayanan habere göre katılımcıların yüzde 80'i üretken yapay zeka kullanıyor. Kullanımın büyük kısmı eğitim materyali (yüzde 44) ve fikir üretme (yüzde 20) için; notlandırma için kullananların oranı yüzde 4. Öğretmenlerin yüzde 93'ü yapay zekanın kendi hazırladıkları materyalin yerini tutamayacağını söylüyor ([THE Journal](https://thejournal.com/articles/2026/04/22/80-of-teachers-are-using-ai-tools-in-the-classroom.aspx)). Yani yaygın kullanım, taslak üretme ve fikir bulma ağırlıklı.

## Ders planı, etkinlik ve soru hazırlama

Yapay zekanın en güvenli kullanımı, sizin çerçevenizi verdiğiniz taslak işleridir. İstemi (prompt) ne kadar net yazarsanız çıktı o kadar işe yarar; ayrıntılar için [iyi istem nasıl yazılır](/rehber/iyi-istem-nasil-yazilir/) rehberine bakabilirsiniz. İstemde şunlara yer verin:

- Sınıf düzeyi ve ders süresi
- Hedef kazanım ya da konu
- Elinizdeki materyal ve ortam (akıllı tahta var mı, bireysel mi grup çalışması mı)
- İstediğiniz çıktı biçimi (tablo, adım adım plan, kısa etkinlik)

Soru hazırlarken aynı sohbette cevap anahtarını da isteyin ve her soruyu kendiniz çözerek doğrulayın. Dil modelleri uydurma bilgi (halüsinasyon) üretebilir; yanlış bir cevap anahtarı sınıfta size pahalıya mal olur. Etkinlik önerilerinde de gerçekçilik kontrolü yapın: süre yeter mi, malzeme sınıfınızda var mı, öğrenci düzeyine uygun mu?

## Farklılaştırılmış materyal ve geri bildirim taslağı

Aynı metni daha sade bir dille yeniden yazdırmak, ek alıştırma sorusu çoğaltmak ya da ileri düzey öğrenciler için zorlayıcı bir görev önermek yapay zekanın iyi olduğu işlerdir. MagicSchool'un SSS sayfası, öğretmenlerin platformu plan, değerlendirme, farklılaştırma ve iletişim için kullandığını belirtiyor ([MagicSchool SSS](https://www.magicschool.ai/faq)). Yine de farklılaştırılmış materyali öğrencilerinizi tanıyan sizin gözden geçirmeniz gerekir; çıktı bir öğrenciyi etiketliyor ya da düzeyini yanlış varsayıyor olabilir.

Geri bildirimde işi ikiye bölün:

1. **Genel kısım:** Değerlendirme ölçütü, yaygın hataların listesi ve cümle şablonları için yapay zekadan yardım alın.
2. **Kişisel kısım:** Öğrenciye özel yorumu kendiniz yazın.

Bu bölünme hem geri bildirimin samimiyetini korur hem de öğrenci ödevini bir araca yüklemenizi gerektirmez. Taslağı olduğu gibi göndermeyin; ton, doğruluk ve öğrencinin durumuna uygunluk açısından okuyun.

## Öğretmenlerin kullandığı araçlar

**ChatGPT for Teachers.** OpenAI'ın yardım sayfasına göre plan, ABD'deki akredite K-12 okul ve ilçelerinde çalışan doğrulanmış öğretmen, personel ve yöneticilere yönelik ve 2028 Haziran'ına kadar ücretsiz. Aynı sayfa fiyatın ileride değişebileceğini de belirtiyor ([OpenAI Yardım Merkezi](https://help.openai.com/en/articles/12844995-chatgpt-for-teachers)). Türkiye'deki öğretmenler bu planı kullanamıyor. Genel [ChatGPT](/arac/chatgpt/) sürümlerinin koşulları ise ayrı.

**Gemini ve Google Classroom.** Google, Bett 2026 duyurusunda öğretmenlerin Gemini'yi Classroom içinde ödev taslağı hazırlamak ve öğrenci ilerlemesini özetlemek için kullanabildiğini açıkladı ([Google Blog](https://blog.google/products-and-platforms/products/education/bett-2026-gemini-classroom-updates/)). [Gemini](/arac/gemini/) özelliklerinin hangi sürümde, hangi ülkede ve hangi hesap türünde açık olduğu değişebiliyor; okulunuzun Google Workspace yöneticisine ve Google'ın güncel sayfalarına bakın.

**MagicSchool AI.** K-12 öğretmenlerine yönelik bir platform. SSS sayfasına göre öğretmenin yerini almak için değil destek olmak için tasarlanmış ve öğretmenin içeriği öğrencilerle paylaşmadan önce gözden geçirmesi bekleniyor ([MagicSchool SSS](https://www.magicschool.ai/faq)). Kullanmadan önce güncel plan koşullarını ve hizmetin ülkenizde sunulup sunulmadığını resmi sayfadan kontrol edin.

**Yeni EBA.** Milli Eğitim Bakanlığı'nın EBA platformu yapay zeka desteğiyle yenilendi. Bakan Yusuf Tekin'in tanıtımına göre amaç, öğretmenlerin derse hazırlık ve ders işleme süreçlerini kolaylaştırmak (28 Ekim 2026 tarihli haber) ([NTV](https://www.ntv.com.tr/egitim/mebden-yapay-zeka-destekli-yeni-eba-1748366)). Okulunuzda resmi bir kanal kullanmak istiyorsanız önce buraya bakabilirsiniz.

## Öğrenci verisini koruyun

En sık yapılan hata, ödev ya da not listesini olduğu gibi bir sohbet botuna yapıştırmaktır. Genel kural: öğrenci adı, numarası, notu, fotoğrafı ve ödevi gibi kimliği belirleyen bilgileri genel amaçlı araçlara girmeyin. Gerekirse örnekleri kurgusal hale getirin ya da kimliği çıkarın. Ayrıntılar için [kişisel verileri koruma](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/) rehberine bakın.

Öğretmenlere özel planlar bu açıdan fark yaratabiliyor. OpenAI, ChatGPT for Teachers'ta paylaşılan bilgilerin model eğitiminde kullanılmayacağını ve öğrenci verisinin korunacağını söyledi ([CNBC](https://www.cnbc.com/2025/11/19/openai-chatgpt-for-teachers-k-12-educators.html)). Bu güvence o plana ait; bireysel ücretsiz hesaplarda veri saklama ve aktarım koşullarını kendiniz kontrol etmelisiniz.

Türkiye'de ayrıca MEB'in kurallarına dikkat etmek gerekiyor. MEB'in resmi duyurusuna göre eğitim kurumlarındaki yapay zeka uygulamaları için Etik Beyan Formu, 2 Şubat 2026 itibarıyla YAZEK üzerinden online dolduruluyor ([MEB](https://www.meb.gov.tr/egitimde-yapay-zeka-uygulamalari-etik-kilavuzu-yayimlandi/haber/39496/tr)). Hangi kullanımların beyan gerektirdiği konusunda internette farklı yorumlar dolaşıyor; kılavuzun tam metnine ve okul yönetiminize başvurun. Kurum düzeyinde bir çerçeve için [okullarda yapay zeka politikası](/rehber/okullarda-yapay-zeka-politikasi/) rehberi de yardımcı olabilir.

## Yapay zekanın yapmaması gerekenler

- **Nihai not kararı vermemeli.** Notlandırma öğretmenin mesleki yargısına dayanır. Anketlerde de kullanımın bu alanda düşük kaldığı görülüyor (TPT anketinde yüzde 4).
- **Öğrenciler hakkında hassas karar vermemeli.** Disiplin, yönlendirme ya da bir öğrencinin ihtiyaçlarına dair değerlendirmeleri bir modele bırakmayın. Modeller önyargı taşıyabilir.
- **Doğrulanmamış bilgiyi sınıfa taşımamalı.** Tarih, alıntı, formül ve kaynak gibi her olgusal ifadeyi kontrol edin.
- **Öğretmenin yerini almamalı.** MagicSchool'un SSS sayfası da aracı bir destek olarak tanımlıyor ve içeriğin öğretmen tarafından gözden geçirilmesini istiyor.
- **Gizli olması gereken veriyi işlememeli.** Öğrenci ve veli bilgilerini genel araçlara girmeyin.

## Nasıl başlamalı

Küçük ve düşük riskli bir işle başlayın: bir ders planı taslağı, bir okuma metninin sadeleştirilmiş sürümü ya da on soruluk bir alıştırma. Çıktıyı sınıfa götürmeden önce kendiniz kontrol edin ve neyi düzelttiğinizi not alın. Bir süre sonra hangi işlerde gerçekten zaman kazandığınızı görürsünüz; Gallup anketinde de kullananların bir kısmı fark görmediğini söylüyor, bu yüzden kendi ölçümünüz önemli.

Son olarak okulunuzda bir yapay zeka politikası olup olmadığını sorun. Hangi araçların kabul edildiği, öğrenci verisinin nasıl korunacağı ve MEB beyan süreci netleşmişse hem siz hem öğrencileriniz daha güvende olur.
