---
title: "Tıbbi görüntülemede yapay zeka: radyoloji ve patolojide neler değişiyor?"
description: "Mamografi, akciğer grafisi, inme tespiti ve dijital patolojide yapay zeka neyi iyileştiriyor? MASAI çalışmasının rakamları, radyologların rolü, onay süreçleri ve sınırlar."
date: 2026-11-20
summary:
  - "İsveç'teki MASAI çalışmasında yapay zeka destekli mamografi taraması, aralık kanserlerini yüzde 12 azalttı."
  - "Mutlak fark küçüktür ve güven aralığı 0'ı kapsar; sonuçlar bu sınırla birlikte okunmalıdır."
  - "Yapay zeka radyolog ve patoloğun yerini almıyor; okuma sürecinde destek ve önceliklendirme aracı olarak kullanılıyor."
level: Orta
topic: Teknik
terms: [bilgisayarli-goru, derin-ogrenme, aciklanabilir-yapay-zeka]
sector: saglik
faq:
  - q: "Yapay zeka mamografide radyologun yerini alıyor mu?"
    a: "Hayır. MASAI çalışmasında yapay zeka, standart çift okumanın yerine geçen bir hekim değil, tarama sürecini destekleyen bir araç olarak test edildi. Kararı yine hekim verir."
  - q: "MASAI çalışmasında \"yüzde 12 azalma\" ne anlama geliyor?"
    a: "Yapay zeka destekli grupta aralık kanserleri standart çift okumaya göre yüzde 12 daha az görüldü. Ancak mutlak fark binde 0,21 ve güven aralığı 0'ı kapsıyor; bu nedenle sonuç dikkatle yorumlanmalı."
  - q: "Bir hastane yapay zeka görüntüleme yazılımını nasıl değerlendirmeli?"
    a: "Yazılımın yasal onay durumuna, hangi görüntü türü ve hasta grubunda doğrulandığına bakılmalı, ardından kendi hasta verinizde sessiz bir pilot yapılmalıdır. Karar süreci hekimlerle birlikte yürütülmelidir."
sources:
  - title: "Cancer (Wiley): MASAI trial results support larger scale use of AI-supported mammography"
    url: "https://acsjournals.onlinelibrary.wiley.com/doi/10.1002/cncr.70440"
  - title: "AJMC: AI-Supported Mammography Caught More Cancers During Screening"
    url: "https://www.ajmc.com/view/ai-supported-mammography-caught-more-cancers-during-screening"
  - title: "The ASCO Post: Interval Cancer Rate With AI-Supported Mammography Screening"
    url: "https://ascopost.com/news/february-2026/interval-cancer-rate-with-ai-supported-mammography-screening/"
  - title: "DAIC: Qure.ai's Chest X-Ray Reporting Tool Receives Additional FDA Clearances"
    url: "https://www.dicardiology.com/content/qureais-chest-x-ray-reporting-tool-receives-additional-fda-clearances"
  - title: "PubMed: AI assisted detection of large vessel occlusion on non-contrast CT"
    url: "https://pubmed.ncbi.nlm.nih.gov/42173676/"
  - title: "ITN: FDA Clears AI Digital Pathology Tool in Breast Cancer"
    url: "https://www.itnonline.com/content/fda-clears-ai-digital-pathology-tool-breast-cancer"
  - title: "HaberGo: Yapay Zeka ile Tıbbi Cihaz Sohbeti: SaMD, FDA ve TİTCK Düzenlemeleri"
    url: "https://www.habergo.com.tr/haber/yapay-zeka-artik-tibbi-cihazlarla-konusuyor-saglikta-sohbet-arayuzu-donusumu-nasil-yonetiliyor"
---

Radyoloji ve patoloji, yapay zekanın sağlıkta en çok denendiği iki alan. Nedeni basit: ikisi de büyük ölçüde görüntü okumaya dayanıyor ve görüntüleri analiz eden derin öğrenme (deep learning) modelleri bu iş için uygun. Yine de "yapay zeka kanseri buluyor" gibi başlıklar, çalışmaların asıl sonuçlarını ve sınırlarını gizleyebiliyor. Bu rehber, mamografi, akciğer grafisi, inme tespiti ve dijital patolojide neler bilindiğini, hekimin rolünü ve onay süreçlerini dengeli biçimde ele alıyor. Genel bir çerçeve için [Sağlıkta yapay zeka: bugün neler yapılıyor?](/rehber/saglikta-yapay-zeka-bugun-neler-yapiliyor/) rehberine de bakabilirsiniz.

## Görüntülemede yapay zeka ne yapıyor?

Bu sistemler genellikle üç işlev üstlenir: görüntüde şüpheli bölgeyi işaretlemek, vakaları aciliyet sırasına koymak ve hekime ikinci bir göz olarak eşlik etmek. Tanıyı koyan sistem değil, hekimin okumasını destekleyen bir katman olarak konumlanırlar. Bu ayrım, hem klinik kullanımda hem de onay süreçlerinde belirleyici.

## Mamografi: MASAI çalışması ne gösterdi?

En çok tartışılan örnek, İsveç'te yürütülen MASAI çalışması. Lancet'te yayımlanan çalışmada yapay zeka destekli tarama, standart çift okumaya göre aralık kanserlerini yüzde 12 azalttı. Aralık kanseri, iki tarama arasında ortaya çıkan ve taramada yakalanamayan kanser demek. Aynı çalışmada invaziv aralık kanserlerinde azalma yüzde 16, T2 ve üzeri aralık kanserlerinde yüzde 21 olarak bildirildi. Bu bulgular [Cancer dergisindeki değerlendirmede](https://acsjournals.onlinelibrary.wiley.com/doi/10.1002/cncr.70440) ve [AJMC'nin haberinde](https://www.ajmc.com/view/ai-supported-mammography-caught-more-cancers-during-screening) yer alıyor.

Birincil sonuç, yapay zeka destekli taramanın standarttan kötü olmadığını göstermek, yani en az eşdeğerlik (non-inferiority) olarak tasarlanmıştı. Başka bir deyişle çalışma, "yapay zeka daha iyi" demek için değil, "yapay zeka destekli süreç en az standart kadar güvenli" demek için kurgulandı.

## Rakamları nasıl okumalı?

Başlıklarda öne çıkan yüzde 12'lik azalma, mutlak rakamlarla birlikte okunmalı. [ASCO Post'a göre](https://ascopost.com/news/february-2026/interval-cancer-rate-with-ai-supported-mammography-screening/) aralık kanseri oranındaki mutlak fark binde 0,21. Yüzde 95 güven aralığı ise -0,28 ile 0,70 arasında; yani aralık 0'ı da kapsıyor. Bu, etkinin istatistiksel olarak kesin biçimde ortaya konduğu anlamına gelmiyor.

Bu rakamlar çalışmanın değerini azaltmıyor, ama beklentiyi ayarlıyor: sonuç, yapay zeka destekli taramanın makul ve güvenli bir seçenek olabileceğine işaret ediyor; her ülkede ve her hasta grubunda aynı sonucu garanti etmiyor. Çalışmanın uygulandığı ortam, kullanılan yazılım ve tarama programının yapısı sonuçları etkileyebilir. Bir rakamı kendi kurumunuza taşımadan önce bu koşulları kontrol edin.

## Akciğer grafisi ve inme: bildirim ve önceliklendirme

Akciğer grafisinde yapay zeka araçları, görüntüdeki olası bulguları işaretleyip raporlamaya yardımcı oluyor. ABD'de bu alandaki ürünlerin düzenleyici onay aldığı haberlere yansıdı; örneğin [Qure.ai'nin akciğer grafisi raporlama aracı için ek FDA onayları](https://www.dicardiology.com/content/qureais-chest-x-ray-reporting-tool-receives-additional-fda-clearances) bildirildi. Onay almış olmak, aracın her kurumda aynı performansı vereceği anlamına gelmez; yerel doğrulama yine gerekir.

İnme tespitinde ise yapay zeka, beyin BT görüntülerinde büyük damar tıkanıklığı gibi acil durumları işaretleyerek ekibi hızlıca uyarmayı hedefliyor. Konuda çok merkezli doğrulama ve okuyucu çalışmaları yapılıyor; örneğin [kontrastsız BT'de büyük damar tıkanıklığının yapay zekayla tespitini](https://pubmed.ncbi.nlm.nih.gov/42173676/) inceleyen çok uluslu bir çalışma var. Bu tür araçlarda zaman kritik olduğu için asıl değer, kesin tanıdan çok önceliklendirme ve ekibe hızlı bildirimdir. Yanlış alarm ve atlanan vaka riski ise bu sistemlerde de geçerli.

## Dijital patoloji

Dijital patolojide cam lam taranarak yüksek çözünürlüklü görüntüye dönüştürülür ve yapay zeka bu görüntüler üzerinde çalışır. Yazılımlar şüpheli alanları göstermek veya ölçüm yapmak için kullanılabilir. Meme kanseri alanında [FDA'nın yapay zeka destekli bir dijital patoloji aracını onayladığı](https://www.itnonline.com/content/fda-clears-ai-digital-pathology-tool-breast-cancer) bildirildi. Patolojide de ilke aynı: araç, patoloğun incelemesini destekler; raporu ve sorumluluğu patolog üstlenir.

## Radyologların ve patologların rolü

Bu çalışmaların ortak mesajı, hekimin devre dışı kalmadığı. MASAI'de de yapay zeka, okuma sürecine entegre bir destek olarak kullanıldı. Hekimin görevi sistemin çıktısını sorgulamak, klinik bağlamla birleştirmek ve nihai kararı vermek. Yapay zeka çıktısına gereğinden fazla güvenmek (otomasyon yanlılığı) ve aracın hiç görmediği hasta gruplarında beklenenden kötü çalışması, izlenmesi gereken riskler. Modelin bir sonuca nasıl vardığını anlamaya yardım eden [açıklanabilir yapay zeka](/sektor/saglik/) yaklaşımları bu yüzden önem taşıyor.

## Onay süreçleri

Görüntüleme yazılımları çoğu zaman tıbbi cihaz sayılır. Yapay zekanın tıbbi cihazlarla ilişkisini ve ABD'de FDA ile Türkiye'de TİTCK düzenlemelerini ele alan [bir değerlendirme](https://www.habergo.com.tr/haber/yapay-zeka-artik-tibbi-cihazlarla-konusuyor-saglikta-sohbet-arayuzu-donusumu-nasil-yonetiliyor) bu çerçeveyi özetliyor. Pratikte bir ürünün onayı, belirli bir kullanım amacı ve görüntü türü için geçerlidir. Bir aracın başka bir bulgu ya da hasta grubunda kullanılması aynı onaya dayanmaz. Türkiye'deki durum için [Türkiye'de sağlıkta yapay zeka](/rehber/turkiyede-saglikta-yapay-zeka/) rehberine göz atabilirsiniz.

## Kurumlar ve hastalar için pratik noktalar

Bir sağlık kurumuysanız şunları kontrol edin:

- Ürünün kullanım amacı ve yasal onay durumu nedir?
- Hangi popülasyonda, hangi cihazlarla doğrulandı?
- Kendi verinizde, hekim kararını etkilemeden bir pilot yapılabilir mi?
- Yanlış alarm ve kaçırılan vakalar nasıl izlenecek?

Hastaysanız, görüntülemenizde yapay zeka kullanılıp kullanılmadığını hekiminize sorabilirsiniz. Bir yapay zeka sohbet botuna görüntü yükleyerek tanı koymaya çalışmak ise bu rehberde anlatılan klinik araçlarla aynı şey değildir; bu konuda [sağlık sorularında yapay zeka kullanımı](/rehber/saglik-sorularinda-yapay-zeka-kullanimi/) rehberini okuyun. Bu yazı tıbbi tavsiye değildir; belirti veya tarama sonuçlarınız için bir hekime başvurun.
