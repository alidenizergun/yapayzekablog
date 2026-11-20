---
title: "Hekimler için yapay zeka: klinik not tutma ve belgeleme araçlarına pratik bakış"
description: "Muayene konuşmasını dinleyip not taslağı çıkaran ambient scribe araçları ne kadar zaman kazandırıyor? Çalışma bulguları, hasta onamı, hata riski ve hekimin sorumluluğu üzerine dengeli bir rehber."
date: 2026-11-20
summary:
  - "Ambient scribe araçları belgeleme süresini azaltabiliyor, ancak kazanç kurumdan kuruma ve ölçüm yöntemine göre değişiyor."
  - "Aracın ürettiği not yalnızca bir taslaktır; içeriği denetlemek ve imzalamak hekimin işidir."
  - "Başlamadan önce hasta bilgilendirmesini, veri gizliliğini ve kurum politikasını netleştirmek gerekir."
level: Orta
topic: İş ve kariyer
terms: [yapay-zeka, uretken-yapay-zeka, halusinasyon, buyuk-dil-modeli]
sector: saglik
faq:
  - q: "Ambient scribe aracı notu tamamen kendisi mi yazıyor?"
    a: "Hayır, araç muayene konuşmasından bir taslak hazırlar. Taslağı okuyup düzeltmek ve onaylamak hekimin sorumluluğunda kalır."
  - q: "Bu araçlar her hekimin belgeleme süresini kısaltıyor mu?"
    a: "Çalışmalarda süre azalması bildiriliyor, ancak bazı çalışmalarda istatistiksel olarak anlamlı bir üretkenlik kazancı görülmedi. Sonuçlar kuruma ve kullanıcıya göre değişiyor."
  - q: "Hastanın kaydın yapıldığından haberdar olması gerekir mi?"
    a: "Pratikte hastayı bilgilendirmek temel bir adımdır. Hangi biçimde ve hangi yazılı belgeyle yapılacağı için kurumunuzun hukuk ve KVKK birimine danışın."
sources:
  - title: "AHA: 6 Health Systems Enhancing Care Delivery with Ambient AI Scribes"
    url: "https://www.aha.org/aha-center-health-innovation-market-scan/2026-04-14-6-health-systems-enhancing-care-delivery-ambient-ai-scribes"
  - title: "JMIR Medical Informatics: Impact of an Ambient AI Scribe Among Clinicians and Patients"
    url: "https://medinform.jmir.org/2026/1/e85580"
  - title: "PubMed: Medical Scribe and Ambient AI Impact on Emergency Physician Documentation Burden"
    url: "https://pubmed.ncbi.nlm.nih.gov/42283666/"
  - title: "npj Digital Medicine: Barriers and opportunities of scaling ambient AI scribes"
    url: "https://www.nature.com/articles/s41746-026-02554-0"
  - title: "Medimagazin: Yapay zeka ile not almak doktorların evrak süresini azaltıyor"
    url: "https://medimagazin.com.tr/hekim/calisma-yapay-zeka-not-alma-araci-doktorlarin-evrak-isine-harcanan-sureyi-buyuk-olcude-azaltiyor-118462"
---

Muayene sırasında ekrana bakıp yazmak yerine hastayla konuşmaya odaklanmak, hekimlerin uzun süredir istediği bir şey. Muayene konuşmasını dinleyip not taslağı çıkaran "ambient scribe" (ortam dinleyen yazıcı) araçları bu beklentiye cevap vermeye çalışıyor. Bu rehber, araçların ne yaptığını, çalışmaların ne gösterdiğini ve başlamadan önce nelere bakmanız gerektiğini özetliyor. Metin tıbbi, hukuki ya da mevzuata ilişkin bir görüş değildir; onam, gizlilik ve sorumluluk konularında kurumunuzun ilgili birimlerine danışın.

## Ambient scribe nasıl çalışır

Bu araçlar, hekim ile hasta arasındaki konuşmayı dinler ve [üretken yapay zeka](/sektor/saglik/) teknolojisiyle bir klinik not taslağı hazırlar. Hekim taslağı okur, düzeltir ve kayda aktarır. Yani araç belgeleme yükünü hafifletmeyi amaçlar; klinik muhakemenin ya da notun sahipliğinin yerini almaz. Taslağın kalitesi konuşmanın netliğine, ortam gürültüsüne ve aracın kurumunuzun not şablonlarına uyumuna bağlı olarak değişebilir.

## Zaman kazancı konusunda çalışmalar ne diyor

Bulgular genel olarak olumlu yönde, ama büyüklükleri farklı:

- Beş akademik merkezde yapılan ve JAMA'da yayımlanan çalışmaya göre, [AHA'nın özetinde](https://www.aha.org/aha-center-health-innovation-market-scan/2026-04-14-6-health-systems-enhancing-care-delivery-ambient-ai-scribes) kayıt (EHR) süresi 13,4 dakika, belgeleme süresi 16,0 dakika azaldı. Ambient scribe kullanımı, klinisyen başına haftada 0,49 ek ziyaretle de ilişkilendirildi.
- Aynı AHA özetinde Cleveland Clinic'in Ambience aracıyla günde 14 dakika, Cooper University Healthcare'in Dragon Copilot ile hasta başına 4,15 dakika tasarruf ettiği aktarılıyor. Intermountain'da 10 ve üzeri görüşme yapan kullanıcılarda not süresi yüzde 27 azaldı (Nisan 2024-Aralık 2025).
- Singapur Genel Hastanesi'nde kurum içi bir araçla yapılan gerçek dünya çalışmasında, deneyimli kullanıcılarda belgeleme süresinde [mütevazı bir azalma ve hasta katılımında iyileşme](https://medinform.jmir.org/2026/1/e85580) görüldü; hastaların kabulü yüksekti.
- İsveçli Tandem Health'in açıkladığı analizde, yaklaşık 1.300 klinisyenin ürettiği 375 binden fazla not incelendi. Araç 11 Avrupa pazarında kullanılıyor ve not süresi 6,69 dakikadan 4,71 dakikaya düştü. Bu veriyi [Medimagazin](https://medimagazin.com.tr/hekim/calisma-yapay-zeka-not-alma-araci-doktorlarin-evrak-isine-harcanan-sureyi-buyuk-olcude-azaltiyor-118462) aktarıyor; analiz ürünü geliştiren şirkete ait olduğu için sonuçları bağımsız bir çalışma gibi okumamak gerekir.

## Sonuçlar neden birbirinden farklı

Her çalışma aynı tabloyu çizmiyor. [Acil servis çalışmasında](https://pubmed.ncbi.nlm.nih.gov/42283666/) ambient AI da insan not tutucular da hekimlerin belgeleme süresini azalttı; klinik verimlilik iki grup arasında farklılık göstermedi. Yani acil serviste araç, insan scribe kadar işe yaradı, ama ondan daha verimli olduğu gösterilmedi.

Intermountain Health'in eşleştirilmiş kohort çalışmasında ise istatistiksel olarak anlamlı bir üretkenlik kazancı bildirilmedi. Yazarlar, [sonuçların kurumdan kuruma değiştiğini](https://www.nature.com/articles/s41746-026-02554-0) ve standart bir ölçüm protokolünün bulunmadığını vurguluyor. Bu nedenle "şu kadar dakika kazandırır" gibi tek bir rakamı kendi poliklinik ya da servisiniz için varsaymayın. Çalışmalar farklı ölçüm yöntemleri, farklı uzmanlık alanları ve farklı araçlar kullanıyor.

## Tükenmişlik ve hasta deneyimi

Belgeleme yükünün azalması, tükenmişlikle mücadele açısından cazip bir hedef. Yine de belgeleme süresindeki düşüş ile tükenmişlikteki düşüş aynı şey değil; biri zaman ölçümü, diğeri hekimin kendi bildirdiği bir durum. Dolayısıyla süre kazancını doğrudan iyi oluşla eşitlemek yerine her ikisini ayrı ayrı takip etmek daha sağlıklı.

Hasta tarafında Singapur'daki çalışma umut verici: hasta katılımı arttı ve kabul yüksekti. Haftalık 0,49 ek ziyaret bulgusu ise kazanılan zamanın ek hasta görmeye dönüşebildiğini gösteriyor. Kurumunuzda kazanılan zamanın nasıl kullanılacağını, yani daha fazla hasta mı yoksa daha az mesai mi anlamına geleceğini baştan konuşmanız faydalı olur.

## Hasta onamı ve gizlilik

Araç konuşmanın tamamını dinlediği için kayıt, saklama ve işleme soruları öne çıkar. Başlamadan önce şu soruların yanıtını net olarak bilin:

- Ses kaydı tutuluyor mu, tutuluyorsa ne kadar süreyle ve nerede saklanıyor?
- Veriler hangi ülkede işleniyor ve hizmet sağlayıcı bu verilerle başka amaçlarla model eğitebiliyor mu?
- Hasta, kaydın yapıldığını önceden öğreniyor mu ve reddetme seçeneği var mı?
- Kurumunuzun aydınlatma metni ve sözleşmeleri bu kullanımı kapsıyor mu?

Bu soruların hukuki cevapları kuruma ve mevzuata göre değişir; kendi kararınızı vermeden önce kurumunuzun hukuk ve KVKK sorumlusuna danışın. Ayrıntılar için [sağlık verisi ve yapay zeka gizlilik rehberine](/rehber/saglik-verisi-ve-yapay-zeka-gizlilik/) ve [KVKK ve yapay zeka araçları rehberine](/rehber/kvkk-ve-yapay-zeka-araclari/) bakabilirsiniz. Hastaya muayeneden önce kısaca anlatmak, sorusu olursa yanıtlamak ve isteyen hastanın kayıt dışı kalabilmesini sağlamak pratikte güveni korur.

## Hata riski ve hekimin sorumluluğu

Büyük dil modelleri uydurma bilgi üretebilir; buna [halüsinasyon](/sektor/saglik/) denir. Taslakta konuşulmayan bir bulgunun yer alması, bir ilacın dozunun yanlış yazılması, bir yakınmanın atlanması ya da belirsiz bir ifadenin kesin bir tanıya dönüşmesi mümkün senaryolardır. Bu tür hatalar ilk bakışta fark edilmeyebilir, çünkü taslak genellikle akıcı ve ikna edici görünür.

Pratikte şunları alışkanlık haline getirin:

- Notu imzalamadan önce her bölümü okuyun; özellikle ilaç, doz, alerji, öykü ve plan bölümlerine dikkat edin.
- Konuşmada geçmeyen bir şey varsa silin, eksik bir şey varsa ekleyin.
- Belirsiz ifadelerin ve "olası" gibi kayıtların taslakta doğru yansıdığından emin olun.
- Hata gördüğünüzde kurumunuzdaki geri bildirim kanalını kullanın.

Notu onaylayan sizsiniz; bu yüzden taslağın hatalarının sorumluluk dağılımı konusunda sözleşme ve kurum politikası okunmadan kararlı olmayın. Bu konuda hukuki görüş için kurumunuzun hukuk birimine başvurun.

## Nasıl başlanır

Küçük ve ölçülebilir bir pilotla başlamak, tek seferde yaygınlaştırmaktan daha güvenli. Önce bir iki gönüllü hekimle deneme yapın, başlamadan önceki belgeleme süresini ölçün ve aynı ölçümü pilot sonunda tekrarlayın. Çalışmalar standart bir ölçüm yöntemi olmadığını gösterdiği için kendi kıyas noktanızı oluşturmanız önem taşıyor.

Aracı seçerken veri saklama, kayıt silme, erişim yetkileri ve kurumunuzun kayıt sistemine entegrasyon gibi başlıklara bakın. Hekimlerin geri bildirimini düzenli toplayın: taslakların hangi bölümlerde sık düzeltme gerektirdiğini görmek hem güvenliği hem verimliliği artırır. Türkiye'deki sağlık uygulamalarının genel çerçevesi için [Türkiye'de sağlıkta yapay zeka rehberine](/rehber/turkiyede-saglikta-yapay-zeka/) göz atabilirsiniz. Toplantı ve görüşme kayıtlarının genel mantığı için [toplantı notu ve transkript rehberi](/rehber/yapay-zeka-ile-toplanti-notu-ve-transkript/) da faydalı bir başlangıç olabilir.

## Sınırlar ve beklentiler

Ambient scribe araçları belgelemeye yardımcı olur; klinik karar vermez ve not sorumluluğunu devralmaz. Elde edilen zaman kazancı uzmanlık alanına, kuruma ve kullanım sıklığına göre değişiyor; bazı çalışmalarda ise anlamlı bir üretkenlik farkı görülmedi. Bu yüzden beklentinizi kendi iş akışınızdan elde edeceğiniz ölçümlere göre belirleyin. Önce hastanın bilgilendirilmesi ve verinin güvenliği, sonra zaman kazancı gelir.
