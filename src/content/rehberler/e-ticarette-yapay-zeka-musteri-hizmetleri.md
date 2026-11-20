---
title: "E-ticarette yapay zeka ile müşteri hizmetleri: sohbet botu nasıl kurulur?"
description: "Sipariş takibi, iade ve ürün soruları için yapay zeka asistanı kurarken nelere dikkat etmelisiniz? Hazır çözümler, insana devretme, Air Canada kararı ve izlenecek metrikler."
date: 2026-11-20
summary:
  - "Sohbet botu sipariş, iade ve ürün sorularında işe yarar; ancak yanlış yanıttan işletme sorumlu tutulabilir."
  - "Gartner araştırmasında müşterilerin yüzde 87'si, üretken yapay zeka kullanan şirketlerden insana ulaşma seçeneği bekliyor."
  - "Containment tek başına yeterli değildir; çözüm, memnuniyet ve yeniden başvuru birlikte izlenmelidir."
level: Orta
topic: İş ve kariyer
terms: [sohbet-botu, halusinasyon, yapay-zeka-ajani, uretken-yapay-zeka]
sector: e-ticaret
faq:
  - q: "E-ticaret sitesine yapay zeka sohbet botu nasıl eklenir?"
    a: "Önce en sık gelen soruları belirleyin, botun yanıt vereceği tek ve güncel bir bilgi kaynağı hazırlayın, ardından hazır bir platformla sınırlı bir kapsamda yayına alın. Devretme kuralını ve izleme metriklerini baştan tanımlayın."
  - q: "Sohbet botunun yanlış bilgisinden şirket sorumlu olur mu?"
    a: "Kanada'daki Air Canada kararında tribunal, şirketi botun verdiği yanlış bilgiden sorumlu tuttu. Türkiye için bir hukuk bürosu da işletmenin botun beyanlarından sorumlu olduğunu yazıyor; bu bir mahkeme kararı değil, yorumdur."
  - q: "Hangi metrikler izlenmeli?"
    a: "Containment, doğrulanmış çözüm, yeniden başvuru, yapay zeka ve insan temsilci memnuniyeti ile devretme sonrası memnuniyet birlikte izlenmelidir. Containment tanımı satıcıdan satıcıya değiştiği için kendi tanımınızı yazılı hale getirin."
sources:
  - title: "American Bar Association: BC Tribunal Confirms Companies Remain Liable for Information Provided by AI Chatbot"
    url: "https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/"
  - title: "The Hill: Air Canada must pay refund promised by AI chatbot, tribunal rules"
    url: "https://thehill.com/business/4476307-air-canada-must-pay-refund-promised-by-ai-chatbot-tribunal-rules/"
  - title: "AOL: Air Canada must pay refund promised by AI chatbot, tribunal rules"
    url: "https://www.aol.com/air-canada-must-pay-refund-040527166.html"
  - title: "Gartner: 87% of customers say companies using GenAI for customer service must provide access to a human agent"
    url: "https://www.gartner.com/en/newsroom/press-releases/2026-08-04-gartner-survey-finds-87-percent-of-customers-say-companies-using-genai-for-customer-service-must-provide-access-to-a-human-agent0"
  - title: "Baker Botts: EU AI Act Article 50 Transparency Obligations Go Live"
    url: "https://www.bakerbotts.com/thought-leadership/publications/2026/september/eu-ai-act-article-50-transparency-obligations-go-live"
  - title: "Bolak Hukuk Bürosu: Yapay Zeka Hukuku"
    url: "https://www.aycabolak.av.tr/yapay-zeka-hukuku/"
  - title: "Shopify Türkiye: E-Ticaret için En İyi Yapay Zekâ Araçları"
    url: "https://www.shopify.com/tr/blog/e-ticaret-icin-en-iyi-yapay-zeka-araclari"
  - title: "Ask AI: What is Containment Rate?"
    url: "https://myaskai.com/blog/what-is-containment-rate"
---

E-ticarette müşteri mesajlarının önemli bir bölümü tekrar eden sorulardan oluşur: kargom nerede, iade nasıl yapılır, bu ürün işime yarar mı? Yapay zeka destekli sohbet botları bu soruları yanıtlayarak ekibin yükünü hafifletebilir. Öte yandan bot yanlış bilgi verdiğinde sorumluluk işletmeye döner. Bu rehber, kapsamı nasıl çizeceğinizi, hazır çözümleri, insana devretmeyi, riskleri ve ölçüm yöntemlerini adım adım ele alıyor. Alanın genel resmi için [e-ticarette yapay zeka kullanım alanları](/rehber/e-ticarette-yapay-zeka-kullanim-alanlari/) rehberine de bakabilirsiniz.

## Bot hangi işleri üstlenmeli?

Sipariş takibi, iade ve ürün soruları en doğal üç başlıktır; ama üçü aynı risk düzeyinde değildir. İade koşulları ve kargo süreleri gibi sabit bilgiler en güvenli alandır. Ürün soruları katalog bilgisine bağlıdır, dolayısıyla ürün verinizin güncel olması gerekir. Sipariş durumu gibi kişiye özel işlemlerde ise botun sipariş sisteminize bağlı olup olmadığını ve neyi yapıp neyi yapamayacağını baştan netleştirmelisiniz. Bu bir öneridir; kaynaklarda standart bir kural olarak geçmez.

Müşteri tarafında tablo karışık. Gartner'ın Şubat-Mart 2026'da 3.566 B2B ve B2C müşteriyle yaptığı araştırmaya göre, müşteriler yapay zekayı hizmet sorunlarını çözmek için daha rahat kullanıyor; fakat yapay zeka insana ulaşmayı engellediğinde tepki gösteriyor ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-08-04-gartner-survey-finds-87-percent-of-customers-say-companies-using-genai-for-customer-service-must-provide-access-to-a-human-agent0)). Yani botu bir engel değil, ilk yardım katmanı olarak kurgulamak gerekiyor.

## Hazır çözüm mü, özel kurulum mu?

Küçük ve orta ölçekli bir mağaza için en makul başlangıç genellikle hazır araçtır. Örneğin Shopify Inbox, Shopify yöneticisine entegre, ücretsiz bir canlı sohbet aracı ve basit bir sık sorulan sorular botu için başlangıç noktası olarak anılıyor ([Shopify Türkiye](https://www.shopify.com/tr/blog/e-ticaret-icin-en-iyi-yapay-zeka-araclari)). Pazaryerinde satış yapıyorsanız [pazaryeri satıcıları için yapay zeka](/rehber/pazaryeri-saticilari-icin-yapay-zeka/) rehberi de işinize yarar.

Bir platform seçerken şunları satıcıdan yazılı olarak teyit edin: Türkçe desteği, fiyat, sipariş sisteminize bağlanıp bağlanmadığı ve insana devretme seçeneği. Bu bilgilerin Türkiye için resmî ve bağımsız bir kaynakta toplanmış hâlini bulamadık; satıcı sayfalarındaki başarı oranı iddialarını da kendi verinizle sınamadan kabul etmeyin.

## Kurulum adımları

1. **Soruları ayrıştırın.** Son dönem müşteri mesajlarını konulara (kargo, iade, ürün, ödeme) bölün; botu en sık gelen birkaç konuyla başlatın.
2. **Tek bir güncel bilgi kaynağı hazırlayın.** İade politikası, kargo süreleri ve ürün bilgileri tek yerde dursun; bot yalnızca bu kaynaktan yanıt versin. Botun talimatlarını yazarken [iyi istem nasıl yazılır](/rehber/iyi-istem-nasil-yazilir/) rehberindeki ilkeler işe yarar.
3. **Sınırları yazın.** Bot bilmediği konuda tahmin yürütmesin, indirim, istisna veya tazminat vaadinde bulunmasın; bu tür taleplerde ekibe yönlendirsin.
4. **Devretme kuralını tanımlayın.** Hangi durumda insana geçileceğini baştan belirleyin (aşağıda).
5. **Gerçek sorularla test edin.** İstisnalı, kızgın veya belirsiz mesajları da deneyin; botun politikanızla çelişen yanıtlar üretip üretmediğine bakın.
6. **Sınırlı kapsamda yayına alın.** Önce tek bir konu veya sayfada açın, konuşma kayıtlarını düzenli okuyun, sonra genişletin.

## Yanlış bilgi riski: Air Canada kararı

Sohbet botlarının uydurma bilgi üretme eğilimi (halüsinasyon) kâğıt üstünde bir teknik sorun gibi görünür; gerçekte hukuki bir sorumluluğa dönüşebilir. Kanada'daki British Columbia Civil Resolution Tribunal, 14 Şubat 2024 tarihli kararında (2024 BCCRT 149) Air Canada'yı, yapay zeka sohbet botunun tüketiciye verdiği yanlış bilgiden sorumlu tuttu ve tazminata hükmetti ([American Bar Association](https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/)).

Olayda yolcu Jake Moffatt, Kasım 2022'de yas nedeniyle indirimli bilet olup olmadığını havayolunun yapay zeka destekli sohbet botuna sormuştu. Şirketin gerçek politikası ise indirimin uçuştan önce onaylanmasını şart koşuyordu ([AOL](https://www.aol.com/air-canada-must-pay-refund-040527166.html)). Air Canada, botun "ayrı bir hukuki varlık" olduğunu savundu; tribunal bu savunmayı reddetti. Tribunal'a göre bot, şirket web sitesinin bir parçasıydı ve bilginin statik bir sayfadan mı yoksa sohbet botundan mı geldiği fark etmiyordu ([The Hill](https://thehill.com/business/4476307-air-canada-must-pay-refund-promised-by-ai-chatbot-tribunal-rules/)).

Tutar konusunda kaynaklar arasında fark var; The Hill yolcuya vaat edilen 483 dolarlık iadeden söz ediyor. Rakamları aktarırken para biriminin Kanada doları olduğuna ve kaynak farkına dikkat edin. Dersi ise tutardan bağımsız okuyabilirsiniz: botun yanıtı, sitenizdeki bir sayfa kadar sizi bağlayabilir.

## İnsan temsilciye devretme

Gartner araştırmasında müşterilerin yüzde 87'si, müşteri hizmetlerinde üretken yapay zeka kullanan şirketlerin bir insan temsilciye ulaşma seçeneği sunması gerektiğini söylüyor ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-08-04-gartner-survey-finds-87-percent-of-customers-say-companies-using-genai-for-customer-service-must-provide-access-to-a-human-agent0)). Bu yüzden devretmeyi bir arıza değil, tasarımın parçası sayın. Pratik öneriler şunlar:

- Müşteri insan istediğinde botu ikna etmeye çalıştırmayın; tek adımda devredin.
- Ödeme itirazı, hasarlı ürün, şikâyet veya hukuki tehdit gibi hassas konuları doğrudan ekibe yönlendirin.
- Bot iki kez aynı soruya yanıt veremediğinde devretsin.
- Konuşma geçmişini temsilciye aktarın; müşteri aynı şeyi yeniden anlatmak zorunda kalmasın.
- Mesai dışında devretme mümkün değilse bunu açıkça yazın ve dönüş süresini belirtin.

Devretmenin kalitesini ayrıca izleyin: devretme başarısı, devretme sonrası memnuniyet ve tekrar iletişim oranı gibi ölçütler bir derleme yazıda öneriliyor; bunların sektör standardı olduğuna dair bir kaynak bulamadık, o yüzden kendi ihtiyacınıza göre uyarlayın.

## Hukuki çerçeve: Türkiye ve AB

Türkiye'de bir hukuk bürosunun yazısına göre, mevcut hukuka göre işletme kullandığı botun beyanlarından kendisi sorumludur ve "bu yanıtı yapay zeka verdi" savunması kural olarak sorumluluğu ortadan kaldırmaz. Aynı yazı, tüketiciye sunulan yapay zeka destekli hizmet ayıplıysa 6502 sayılı Tüketicinin Korunması Hakkında Kanun'daki seçimlik hakların kullanılabileceğini belirtiyor ([Bolak Hukuk Bürosu](https://www.aycabolak.av.tr/yapay-zeka-hukuku/)). Bu, bir avukatlık bürosunun yorumudur; mahkeme kararı değildir ve hukuki görüş yerine geçmez. Kişisel veri tarafı için [yapay zeka ile kişiselleştirme ve KVKK](/rehber/yapay-zeka-ile-kisisellestirme-ve-kvkk/) rehberine bakın; somut bir durumda avukata danışın.

AB'ye satış yapıyorsanız Yapay Zeka Yasası'nın 50. maddesi de önemli. Şeffaflık yükümlülükleri 2 Ağustos 2026'da uygulanabilir hâle geldi. Kullanıcıyla doğrudan etkileşen sohbet botu ve sesli asistan gibi sistemler, kullanıcıya bir yapay zeka sistemiyle konuştuğunu bildirecek şekilde tasarlanmalı; durum bağlamdan açıkça anlaşılıyorsa bu gerekmez. Madde, AB pazarına sunulan sistemler ve çıktısı AB içinde kullanılan, AB dışında yerleşik sağlayıcı ve kullanıcılar için de geçerli ([Baker Botts](https://www.bakerbotts.com/thought-leadership/publications/2026/september/eu-ai-act-article-50-transparency-obligations-go-live)). Bir Türk şirketinin bu kapsama girip girmediği özel durumuna bağlıdır; ayrıntı için [AB Yapay Zeka Yasası ve Türkiye](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/) rehberine bakabilirsiniz. Müşteriye botla konuştuğunu söylemek, AB dışında da iyi bir uygulamadır.

## Ölçülmesi gereken metrikler

En çok kullanılan ölçü containment: botun insana devretmeden kapattığı konuşmaların oranı. Ancak tanım tek değil. Bir rehbere göre containment, sorunun çözülüp çözülmediğine bakmadan, botun insana aktarmadan yönettiği konuşmaların yüzdesidir. Gorgias ise botun yanıt verip 72 saat boyunca hiçbir temsilcinin müdahale etmediği konuşmaları sayıyor; aynı kaynak, tanımın satıcıdan satıcıya değiştiğini gösteriyor ([Ask AI](https://myaskai.com/blog/what-is-containment-rate), satıcı blogu). Müşteri vazgeçip gittiği için de containment yüksek görünebilir; bu yüzden tek başına yanıltıcıdır.

Birkaç derleme kaynakta ortak öneri, birkaç ölçüyü birlikte izlemek: containment, sorunun gerçekten çözüldüğünü doğrulayan çözüm oranı, aynı konuda yeniden başvuru oranı, yapay zeka ve insan görüşmelerinin memnuniyet puanının (CSAT) ayrı ayrı izlenmesi ve çözülen sorun başına maliyet. Blog ve satıcı yazılarındaki "şu orandan düşükse alarm" türü eşikleri doğrulanmış değerler olarak almayın. Önce kendi ilk birkaç haftalık verinizi toplayın, sonra hedef koyun. Ayrıca düzenli olarak rastgele konuşmaları okuyarak botun yanlış bilgi verip vermediğini elle kontrol edin.

Kısacası bot, sınırları net çizilmiş, güncel bir bilgi kaynağına bağlı, insana kolay devreden ve çıktısı ölçülen bir araç olarak kurulduğunda işe yarar.
