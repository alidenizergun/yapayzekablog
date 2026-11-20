---
title: "Yapay zeka ile kişiselleştirilmiş öğrenme: araştırmalar ne diyor?"
description: "Nijerya, Harvard ve Türkiye'deki lise deneyleri ile Khanmigo örneği üzerinden yapay zeka öğretmen asistanlarının öğrenmeye etkisi: ne zaman işe yarıyor, ne zaman zarar verebiliyor."
date: 2026-11-20
summary:
  - "Kontrollü deneylerde yapılandırılmış ve öğretmen destekli yapay zeka öğretici kullanımı öğrenme kazanımı sağladı."
  - "Kısıtsız bir sohbet botu ise uygulama sırasında notu artırsa da yapay zeka çekilince lise öğrencilerinin başarısı düştü."
  - "Sonuçlar tek ders, tek okul ya da kısa program gibi sınırlı koşullara bağlı; iyi tasarım ve öğretmen rehberliği belirleyici."
level: Orta
topic: Eğitim ve öğrenme
terms: [uretken-yapay-zeka, sohbet-botu, buyuk-dil-modeli, istem]
sector: egitim
faq:
  - q: "Yapay zeka öğretici, sınıftaki öğretmenin yerini alabilir mi?"
    a: "Araştırma notlarındaki çalışmalar bunu göstermiyor. Nijerya'daki programda öğretmenler sürecin içindeydi; Harvard çalışması ise tek ders ve iki kısa konuyla sınırlı."
  - q: "ChatGPT gibi genel bir sohbet botu öğrenmeye zarar verir mi?"
    a: "Türkiye'deki lise deneyinde kısıtlamasız bir ChatGPT benzeri arayüz, uygulama sırasında performansı artırdı ama yapay zeka kaldırılınca sınavda sonuç kontrol grubundan kötüydü. Cevap vermek yerine ipucu veren bir yapı bu kaybı önledi."
  - q: "Yapay zeka öğrenme aracını öğrenci kendi başına kullanırsa yeterli olur mu?"
    a: "Khanmigo üzerine Chalkbeat'in haberi, öğrencilerin aracı seçenek olarak sunulduğunda nadiren kullandığını gösteriyor. Araç sunmak tek başına yetmiyor; kullanımı sınıf içinde yapılandırmak gerekiyor."
sources:
  - title: "Dünya Bankası: Nijerya yeniden üretilebilirlik paketi (From Chalkboards to Chatbots)"
    url: "https://reproducibility.worldbank.org/catalog/419"
  - title: "Dünya Bankası: Addressing the learning crisis with generative AI"
    url: "https://blogs.worldbank.org/en/developmenttalk/addressing-the-learning-crisis-with-generative-ai--lessons-from-"
  - title: "AI Tutoring in Nigeria: World Bank RCT Summary (2025)"
    url: "https://research.askpoppy.ai/papers/de-simone-2025-chalkboards-to-chatbots-nigeria/"
  - title: "Mjengo Hub: Harvard study finds AI tutor beats in-class physics teaching"
    url: "https://mjengohub.co.ke/articles/news/harvard-study-finds-ai-tutor-beats-in-class-physics-teaching"
  - title: "Bokern: Harvard study finds AI tutor can speed up physics learning"
    url: "https://en.bokern.co/harvard-study-finds-ai-tutor-can-speed-up-physics-learning/"
  - title: "PNAS: Generative AI without guardrails can harm learning"
    url: "https://www.pnas.org/doi/10.1073/pnas.2422633122"
  - title: "Knowledge at Wharton: Without Guardrails, Generative AI Can Harm Education"
    url: "https://knowledge.wharton.upenn.edu/article/without-guardrails-generative-ai-can-harm-education/"
  - title: "Chalkbeat: Students rarely engaged with Khanmigo, study finds"
    url: "https://www.chalkbeat.org/2026/08/25/ai-tutoring-students-khanmigo-khan-academy-engagement-study/"
---

Yapay zeka öğretmen asistanları, her öğrenciye kendi hızında ilerleyen, sorularına anında yanıt veren bir yardımcı vaadiyle tanıtılıyor. Peki bu vaat kontrollü deneylerde ne kadar karşılık buluyor? Bu rehberde Nijerya, Harvard ve Türkiye'de yürütülen randomize kontrollü çalışmaların bulgularına, Khanmigo örneğine ve bu bulgulardan çıkan pratik ilkelere bakıyoruz. Genel çerçeve için [yapay zeka ile kişiselleştirilmiş öğrenme](/rehber/yapay-zeka-ile-kisisellestirilmis-ogrenme/) rehberini de okuyabilirsiniz.

## Yapay zeka öğretmen asistanı ne yapar?

Burada konuştuğumuz araçlar, büyük dil modeline (LLM) dayanan sohbet tabanlı öğreticilerdir. Öğrencinin sorusuna göre açıklama yapar, ipucu verir, alıştırma önerir. Önemli ayrım şu: bazıları doğrudan cevap verecek şekilde çalışır, bazıları ise cevabı vermemek üzere yönlendirilir. Aşağıdaki çalışmalar, bu tasarım farkının sonuçları neredeyse tek başına belirleyebildiğini gösteriyor.

## Nijerya: Dünya Bankası'nın altı haftalık deneyi

Dünya Bankası, Nijerya'da GPT-4 tabanlı bir sanal öğretmeni test eden randomize kontrollü deneyin sonuçlarını Mayıs 2025'te Policy Research Working Paper 11125 olarak yayımladı. Deney 6 hafta sürdü; [çalışma özetine göre](https://research.askpoppy.ai/papers/de-simone-2025-chalkboards-to-chatbots-nigeria/) İngilizce, dijital ve yapay zeka becerilerinde anlamlı gelişme görüldü. Program, Benin City'deki dokuz devlet okulunda öğretmen rehberliğinde 12 oturum olarak yürüdü ve son değerlendirmeye öğrencilerin yaklaşık yüzde 57'si katıldı.

[Dünya Bankası'nın yeniden üretilebilirlik paketine](https://reproducibility.worldbank.org/catalog/419) göre karma değerlendirmede etki 0,31 standart sapma oldu. En büyük etki kız öğrencilerde ve başlangıçta akademik performansı yüksek olanlarda görüldü.

Bu sonucu yorumlarken Dünya Bankası'nın kendi uyarısını akılda tutmak gerekiyor: [etki, yapılandırılmış program, öğretmen desteği ve iyi tasarlanmış komutlar dahil tüm paketin sonucu](https://blogs.worldbank.org/en/developmenttalk/addressing-the-learning-crisis-with-generative-ai--lessons-from-). Yani yalnızca bir yapay zeka modelinin etkisi ölçülmedi. Ayrıca program cihaz erişimi ve internet bağlantısı gerektirdiği için [maliyeti tam olarak fiyatlanmış değil](https://research.askpoppy.ai/papers/de-simone-2025-chalkboards-to-chatbots-nigeria/).

## Harvard fizik çalışması: ipucu veren öğretici

Scientific Reports'ta Haziran 2025'te yayımlanan çalışmaya, Harvard'da giriş seviyesi bir fizik dersine (Physical Sciences 2) kayıtlı [194 lisans öğrencisi](https://mjengohub.co.ke/articles/news/harvard-study-finds-ai-tutor-beats-in-class-physics-teaching) katıldı. Tasarım çapraz (crossover) düzendeydi: [her öğrenci bir konuyu sınıfta aktif öğrenmeyle, diğerini evde yapay zeka öğreticiyle çalıştı; sıra kura ile belirlendi](https://en.bokern.co/harvard-study-finds-ai-tutor-can-speed-up-physics-learning/). Kullanılan araç GPT-4 tabanlı "PS2 Pal" idi ve doğrudan cevap vermemesi için talimat almıştı.

Son test medyanı yapay zeka grubunda 4,5, sınıf grubunda 3,5 oldu; ön test medyanı 2,75 idi. Yani [medyan kazanım yapay zeka grubunda yaklaşık iki kat](https://research.askpoppy.ai/papers/kestin-2025-ai-tutoring-outperforms-active-learning/) çıktı.

Bulgunun sınırı net: sonuçlar tek ders, tek kurum ve iki kısa konuyla sınırlı. Yazarlar ayrıca bu sonucun [genel sohbet robotlarına aynen aktarılamayacağını](https://mjengohub.co.ke/articles/news/harvard-study-finds-ai-tutor-beats-in-class-physics-teaching) vurguluyor. Başarının bir kısmı, aracın cevap vermek yerine öğrenciyi düşündürecek şekilde tasarlanmasından gelmiş olabilir.

## Kısıtsız kullanım öğrenmeyi zayıflatabilir

Öbür uçta Türkiye'de yürütülen bir lise deneyi var. [PNAS'ta yayımlanan çalışma](https://www.pnas.org/doi/10.1073/pnas.2422633122), büyük bir lisede 2023-2024 güz döneminde yaklaşık bin öğrenciyi kapsadı; yazarlar arasında Türk araştırmacı Özge Kabakcı da var. Denemede iki kol vardı: standart ChatGPT benzeri arayüz (GPT Base) ve öğretici kısıtlamalı arayüz (GPT Tutor).

Bulgular şöyle özetlenebilir:

- Uygulama sırasında GPT Base grubu kontrol grubuna göre yüzde 48 daha iyi performans gösterdi. Yapay zeka erişimi kaldırılıp sınav yapıldığında ise [yüzde 17 daha kötü sonuç](https://knowledge.wharton.upenn.edu/article/without-guardrails-generative-ai-can-harm-education/) aldı.
- GPT Tutor grubu uygulamada daha yüksek performans gösterdi, ancak sınavda kontrol grubundan istatistiksel olarak farklı değildi. Yani ipucu veren yapı öğrenme kaybını önledi, fakat öğrenmeyi artırmadı.

Çalışmanın başlığı da bu sonucu özetliyor: [korkuluksuz üretken yapay zeka öğrenmeye zarar verebilir](https://www.pnas.org/doi/10.1073/pnas.2422633122). Bu deney de tek okulda, tek derste ve iki araçla yapıldı; sonuçları her yaş grubuna ve derse genellemek doğru olmaz.

## Khanmigo örneği: araç sunmak yetmiyor

Khan Academy'nin yapay zeka öğreticisi Khanmigo, öğretmen asistanı kategorisinin en bilinen örneklerinden. Chalkbeat'in Ağustos 2026 tarihli haberine göre ise orta okul öğrencileri Khanmigo'yu seçenek olarak sunulduğunda [nadiren kullandı](https://www.chalkbeat.org/2026/08/25/ai-tutoring-students-khanmigo-khan-academy-engagement-study/). Kullanım, öğrencilerin Khan Academy'de çalıştığı günlerin yaklaşık üçte birinde görüldü. Öğrenciler sık sık konu dışı mesajlar yazdı ya da doğru cevabı zorla aldırmaya çalıştı.

Aynı haberde, Khan Academy'de görülen kazanımların yapay zekadan değil platformun geneli kaynaklı olabileceği yorumu da yer alıyor. Bu, bir aracın ismen "yapay zeka destekli" olmasının, kazanımın nereden geldiğini kanıtlamadığını hatırlatıyor.

## Araştırmalardan çıkan iyi kullanım ilkeleri

Bu çalışmalar farklı ülkelerde ve farklı yaş gruplarında yapıldı, ama ortak bir desen var. Şunları öneriyoruz:

1. **Cevabı değil düşünme sürecini isteyin.** Harvard'daki araç doğrudan cevap vermeyecek şekilde yönlendirilmişti; Türkiye'deki deneyde ipucu veren yapı öğrenme kaybını önledi. Genel bir sohbet botu kullanıyorsanız ona önce çözümü vermemesini, adım adım soru sormasını söyleyin. Bunun için [iyi istem nasıl yazılır](/rehber/iyi-istem-nasil-yazilir/) rehberi işinize yarar.
2. **Öğretmeni sürecin dışına koymayın.** Nijerya'daki program öğretmen rehberliğinde, yapılandırılmış oturumlarla yürüdü. Öğretmenler için pratik öneriler öğretmenler için yapay zeka rehberinde.
3. **Yapay zekasız deneyin.** Türkiye'deki deneyde fark, yapay zeka çekildiğinde ortaya çıktı. Öğrenip öğrenmediğinizi anlamanın yolu, aracı kapatıp soruları kendiniz çözmeyi denemektir.
4. **Kullanımı tasarlayın.** Chalkbeat'in haberi, aracı sunmanın kullanımı garanti etmediğini gösteriyor. Belirli bir ders saatinde, belirli bir görevle kullanım, "istediğiniz zaman kullanın" yaklaşımından daha mantıklı görünüyor.
5. **Çıktıyı kontrol edin.** Yapay zeka hata yapabilir; öğrenciler bir çözümü öğrenmeden kopyalarsa hatayı da kopyalar.

Öğrenci tarafındaki pratik adımlar için [öğrenciler için yapay zeka](/rehber/ogrenciler-icin-yapay-zeka/) rehberine, bölümün genel gelişmeleri için ise [eğitimde yapay zeka](/sektor/egitim/) sayfasına bakabilirsiniz.

## Sınırlar ve dikkat edilecekler

Bu bulgulardan kesin hükümler çıkarmak için henüz erken. Harvard çalışması tek ders ve iki kısa konuyla, Türkiye'deki lise çalışması tek okul ve iki araçla sınırlı. Nijerya sonuçları ise yapılandırılmış bir programın tamamını ölçüyor; cihaz ve internet erişimi gerektiriyor ve maliyeti tam fiyatlanmış değil. Ayrıca farklı kaynaklar aynı çalışmanın alt sonuçlarını biraz farklı rakamlarla aktarabiliyor; mümkünse makalenin kendisine bakmak en doğrusu.

Özetle araştırmalar "yapay zeka öğrenmeyi artırır" ya da "zarar verir" demiyor. Nasıl tasarlandığına, kimin rehberlik ettiğine ve öğrencinin aracı neyle kullandığına bağlı olarak her iki sonuç da görülebiliyor. Başlamak için küçük bir adım yeterli: tek bir konuda, cevap vermeyen bir öğretici yapılandırın, çalışmanın sonunda yapay zekasız bir mini sınavla ölçün ve sonucu karşılaştırın.
