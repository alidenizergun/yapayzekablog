---
title: "İK ekipleri için yapay zeka asistanları: çalışan soruları, iç iletişim ve gizlilik"
description: "İzin, yan hak ve politika sorularını yanıtlayan yapay zeka asistanları ile duyuru metinlerinin nasıl kullanılacağı, Workday ve SAP SuccessFactors örnekleri, KVKK ve AB düzenlemesi açısından dikkat edilecekler."
date: 2026-11-20
summary:
  - "Asistanlar tekrar eden izin, yan hak ve politika sorularını kurum belgelerine dayanarak yanıtlayabilir, ancak karmaşık ve hassas konularda insana devretmelidir."
  - "Workday ve SAP SuccessFactors gibi İK yazılımları asistanı kendi veri ve yetki yapısıyla sunuyor; Türkçe desteği ve fiyat gibi ayrıntıları satıcıdan doğrulamak gerekir."
  - "Çalışan verisi söz konusu olduğunda KVKK, veri paylaşımı ve AB Yapay Zeka Yasası'ndaki bilgilendirme yükümlülükleri ilk sorulacak konulardır."
level: Orta
topic: İş ve kariyer
terms: [sohbet-botu, rag, halusinasyon, yapay-zeka-ajani, istem]
sector: insan-kaynaklari
faq:
  - q: "İK asistanı çalışanların izin ve yan hak sorularını tek başına yanıtlayabilir mi?"
    a: "Güncel ve doğru kurum belgelerine bağlandığında sık sorulan sorularda yardımcı olabilir. Karmaşık, hassas veya istisnai durumları İK uzmanına yönlendirmesi ve yanıtların düzenli kontrol edilmesi gerekir."
  - q: "Çalışan verisini genel bir sohbet botuna yazmak sorun olur mu?"
    a: "KVKK'nın uygulandığı kişisel veri içeren istemlerde risk doğar. Çalışan bilgisini anonimleştirmeden girmemek ve önce kurumsal bir yapay zeka politikası belirlemek daha güvenli bir başlangıçtır."
  - q: "Workday veya SAP SuccessFactors kullanıyorsak asistan hazır mı geliyor?"
    a: "Her iki satıcı da yapay zeka ajanları duyurdu, ancak kullanılabilirlik, dil desteği ve fiyat sürüme ve sözleşmeye göre değişiyor. Kendi kurulumunuz için satıcınızdan yazılı teyit isteyin."
sources:
  - title: "Workday: Rising 2026 ürün duyuruları"
    url: "https://blog.workday.com/en-us/rising-product-announcements.html"
  - title: "Workday: Autopilot ajanları"
    url: "https://investor.workday.com/news-and-events/press-releases/news-details/2026/Workday-Launches-Autopilot-Agents-That-Get-Real-Work-Done-Across-HR-Finance-and-IT/default.aspx"
  - title: "SAP: SuccessFactors yenilikleri (SAP Connect)"
    url: "https://news.sap.com/2025/10/sap-connect-new-sap-successfactors-innovations/"
  - title: "Google Workspace: İK için yapay zeka"
    url: "https://workspace.google.com/intl/tr/solutions/ai/hr"
  - title: "DLA Piper: Digital AI Omnibus ve yüksek riskli yapay zeka yükümlülükleri"
    url: "https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/2026/The-Digital-AI-Omnibus-Proposed-deferral-of-high-risk-AI-obligations-under-the-AI-Act"
  - title: "Crowell: AB'de yapay zeka ve insan kaynakları, 2026 hukuki genel bakış"
    url: "https://www.crowell.com/en/insights/client-alerts/artificial-intelligence-and-human-resources-in-the-eu-a-2026-legal-overview"
  - title: "Culture Amp: 2026 AI in HR araştırması"
    url: "https://www.cultureamp.com/company/announcements/2026-ai-in-hr-study-reveals-ai-transformation-gap"
  - title: "Av. Muhammet Aksan: KVKK bakımından işyerlerinde yapay zeka denklemi"
    url: "https://istanbulticaretgazetesi.com/yazarlar/av-muhammet-aksan/kvkk-bakimindan-isyerlerinde-yapay-zeka-denklemi"
---

İK ekiplerinin gündeminde tekrar eden sorular önemli bir yer tutar: kalan izin gün sayısı, yan hakların kapsamı, bir politikanın nasıl uygulandığı. Yapay zeka asistanları bu soruları 7/24 yanıtlamayı ve İK'nın zamanını daha nitelikli işlere ayırmayı vaat ediyor. Bu rehber, asistanların ne işe yaradığını, iç duyuru metinlerinde nasıl kullanılabileceğini, Workday ve SAP SuccessFactors'ta nelerin duyurulduğunu ve gizlilik açısından nelere dikkat etmeniz gerektiğini anlatıyor.

## Asistan hangi soruları yanıtlar?

Çalışan sorularına yönelik bir asistan, özünde kurumunuzun belgelerine bağlanmış bir sohbet botudur (sohbet robotu). İzin yönetmeliği, yan hak listesi, harcırah politikası ve işe başlama rehberi gibi belgelerden alıntı yaparak yanıt üretir. Bu yaklaşım, yanıtların belgelere dayandırıldığı için uydurma bilgi (halüsinasyon) riskini azaltır, ancak sıfırlamaz.

İki tür soruyu birbirinden ayırmak işe yarar:

- **Bilgi soruları:** "Yıllık izin hakkım kaç gün?" gibi, belgede açıkça yazan konular. Burada otomasyon genellikle sorunsuz çalışır.
- **Duruma özel sorular:** Hastalık, doğum, performans, disiplin ya da ücret gibi kişisel ve hassas konular. Bunları İK uzmanına devretmek gerekir.

İşin diğer yarısı eylemdir. Workday'in Sana arayüzünde çalışanlar [düz dille soru sorabiliyor ve işlemleri aynı arayüzden tamamlayabiliyor; bu işlemler kullanıcının yetki sınırları içinde kalıyor](https://blog.workday.com/en-us/rising-product-announcements.html). Yani asistan yalnızca bilgi vermekle kalmıyor, belirli adımları da yürütebiliyor.

## İç iletişim ve duyuru metinleri

Asistanın ikinci kullanım alanı İK'nın kendi yazı işleridir: politika güncellemesi duyurusu, yeni yan hak bilgilendirmesi, yönetmelik değişikliğinin özeti. Google'ın Türkçe İK sayfasında [Gemini'nin iç politikalara dair daha etkili mesajlar hazırlamada kullanılabileceği](https://workspace.google.com/intl/tr/solutions/ai/hr) belirtiliyor. Genel bir sohbet aracıyla da benzer bir taslak alabilirsiniz.

Bu işte en çok işe yarayan yöntem şudur: Taslağı yapay zekaya yazdırın, ama içeriği siz doğrulayın. İstemde hedef kitleyi, tonu, bilgi içeriğini ve uzunluğu açıkça belirtin; gerçek politika metnini kaynak olarak verin. Tarih, gün sayısı, tutar ve onay süreçleri gibi bilgileri çıktıda tek tek kontrol edin. E-posta taslağı hazırlama konusunda ayrıntılar için [yapay zeka ile e-posta yazma rehberine](/rehber/yapay-zeka-ile-e-posta-yazma/) bakabilirsiniz.

Hassas duyurularda (yeniden yapılanma, ücret, disiplin gibi) metni yalnızca bir yazım yardımcısı olarak kullanın. Çalışan adı, maaş ya da özlük bilgisi gibi kişisel verileri istem içine koymayın.

## İK yazılımlarındaki yapay zeka özellikleri

Sıfırdan bir asistan kurmak yerine, kullandığınız İK yazılımının sunduğu özelliklerle başlamak çoğu ekip için daha mantıklıdır. Aşağıdakiler resmi satıcı duyurularında yer alan bilgilerdir.

**Workday.** Şirket, 13 Ekim 2026'da Rising 2026 etkinliğinde işe alım, bordro, muhasebe ve uyumluluk süreçlerini yürüten [autopilot ajanlarını tanıttı](https://investor.workday.com/news-and-events/press-releases/news-details/2026/Workday-Launches-Autopilot-Agents-That-Get-Real-Work-Done-Across-HR-Finance-and-IT/default.aspx). Müşteriler hangi görevlerin otomatik çalışacağını ve ajanların ne kadar ileri gidebileceğini kendileri belirleyebiliyor. Workday ayrıca Talent Acquisition Agent'ı erken erişim aşamasındaki [ilk "agentic autopilot" olarak tanıttı](https://blog.workday.com/en-us/rising-product-announcements.html). Yani bazı özellikler henüz tam kullanıma açılmış değil.

**SAP SuccessFactors.** SAP, İK odaklı ilk Joule ajanı olan Performance and Goals Agent'ın Kasım 2025'te genel kullanıma açılacağını duyurdu. Aynı duyuruda [Joule'un 11 dilde kullanılabildiği belirtiliyor](https://news.sap.com/2025/10/sap-connect-new-sap-successfactors-innovations/); ancak bu kaynakta Türkçe desteği yer almıyor. Türkçe soru-cevap planlıyorsanız bunu satıcıdan ayrıca sorun. Çalışan sorularına yönelik diğer ajanların kullanılabilirliği ve fiyatı için de resmi SAP kaynağından güncel bilgi almanız gerekir.

İki satıcıda da ortak nokta, asistanın İK sisteminin içindeki veriye ve yetki yapısına bağlanmasıdır. Bu, genel amaçlı bir sohbet botuna kıyasla hem doğruluk hem veri kontrolü açısından avantaj olabilir. Yine de ürün sayfasındaki vaadi, kendi kurulumunuzda deneyerek doğrulayın.

## Nasıl başlanır?

Küçük ve ölçülebilir bir adımla başlamak, büyük bir dönüşüm planından daha güvenlidir.

1. **Soruları sınıflandırın.** İK kutusuna ve çağrılara gelen son birkaç ayın sorularını konulara ayırın. En sık tekrar edenleri ve belgesi net olanları seçin.
2. **Belgeleri temizleyin.** Çelişen ya da eski politika metinleri asistanın yanıtlarına da yansır. Tek ve güncel bir kaynak belirleyin.
3. **Sınır çizin.** Asistanın yanıtlamayacağı konuları (disiplin, ücret pazarlığı, sağlık bilgisi gibi) ve insana devir kuralını yazın.
4. **Küçük bir grupla deneyin.** Bir departman ya da bir ofisle pilot yapın; yanıtların doğruluğunu İK uzmanlarıyla örneklem yoluyla kontrol edin.
5. **Çalışanları bilgilendirin.** Asistanın bir yapay zeka olduğunu, neyi yapabildiğini ve gerektiğinde bir insana nasıl ulaşılacağını açıkça yazın.

Kurumsal çerçeve için [şirket içi yapay zeka politikası rehberine](/rehber/sirket-ici-yapay-zeka-politikasi/) göz atabilirsiniz.

## Gizlilik ve KVKK

Çalışan soruları çoğu zaman kişisel veri içerir: izin bilgisi, maaş, sağlık raporu. Bu nedenle gizlilik, asistan projesinin başında ele alınması gereken konudur.

Kişisel Verileri Koruma Kurumu'nun iş yerlerinde üretken yapay zeka araçlarının kullanımına ilişkin dokümanının, bir hukuk yazarına göre [çalışanların bu araçlarda kişisel veri paylaşmasının yarattığı riske dikkat çektiği ve yasaklamak yerine yönlendirmeyi önerdiği](https://istanbulticaretgazetesi.com/yazarlar/av-muhammet-aksan/kvkk-bakimindan-isyerlerinde-yapay-zeka-denklemi) belirtiliyor. Bu da pratikte şu anlama geliyor: Çalışanlara "yapay zeka kullanmayın" demek yerine, hangi verinin hangi araca girebileceğini net kurallarla tarif etmek daha gerçekçi.

Başlangıç için şunları kontrol edin:

- Asistan hangi çalışan verisine erişiyor ve bu erişim gerekli mi (veri minimizasyonu)?
- Veriyi işleyen yazılım sağlayıcısıyla sözleşmeniz ve veri aktarım koşullarınız net mi?
- Çalışanlara, verilerinin bu amaçla işlendiği bilgisi verildi mi?
- Genel amaçlı bir araca kimlik ya da özlük bilgisi girmemek için anonimleştirme kuralı var mı?

Türkiye'de İK yapay zeka asistanlarını doğrudan düzenleyen özel bir mevzuat için güvenilir bir kaynak bulamadık; mevcut çerçeve KVKK ve iş hukuku üzerinden ilerliyor. Ayrıntı için [KVKK ve yapay zeka araçları rehberimize](/rehber/kvkk-ve-yapay-zeka-araclari/) bakın; kesin değerlendirme için hukuk danışmanınıza başvurun.

## AB Yapay Zeka Yasası açısından

AB'de faaliyet gösteriyor ya da AB'deki çalışanlarınız varsa, AI Act'i de hesaba katmalısınız. Yasada [işe alım, performans değerlendirme ve çalışan yönetimi için kullanılan yapay zeka sistemleri yüksek riskli sınıfta yer alıyor](https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/2026/The-Digital-AI-Omnibus-Proposed-deferral-of-high-risk-AI-obligations-under-the-AI-Act). Bir hukuk bürosunun değerlendirmesine göre [işverenler yüksek riskli bir sistemi devreye almadan önce çalışanlarını ve temsilcilerini bilgilendirmek zorunda](https://www.crowell.com/en/insights/client-alerts/artificial-intelligence-and-human-resources-in-the-eu-a-2026-legal-overview) ve bu yükümlülük erteleme tartışmalarından bağımsız olarak geçerli kabul ediliyor.

Yüksek riskli yükümlülüklerin takvimi ise kaynaklar arasında farklılık gösteriyor ve ertelemeye ilişkin tartışma sürüyor. Bu yüzden güncel tarihi resmi metinden ve hukuk danışmanınızdan teyit edin. Genel çerçeve için [AB Yapay Zeka Yasası ve Türkiye rehberine](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/) bakabilirsiniz. İşe alım tarafındaki önyargı riski ayrı bir konudur; onu [işe alımda yapay zeka ve önyargı rehberinde](/rehber/yapay-zeka-ile-ise-alim-ve-onyargi/) ele aldık.

## Sınırlar ve beklentiler

Yapay zeka asistanları İK'nın yerini almıyor; çalışanların da buna henüz tam güveni yok. Culture Amp'ın 22 Temmuz 2026 tarihli araştırmasında İK profesyonellerinin [yüzde 77'si yapay zekaya inandığını, ancak yalnızca yüzde 24'ü yapay zekanın bağımsız hareket etmesine rahat olduğunu](https://www.cultureamp.com/company/announcements/2026-ai-in-hr-study-reveals-ai-transformation-gap) söylüyor. Aynı araştırmada ajan tipi yapay zekaya rahat olduğunu söyleyen bireysel katkıcıların oranı yüzde 16, üst düzey İK liderlerinin oranı ise yüzde 37. Araştırma Mayıs 2026'da yapılmış.

Bu farklar, uygulamada şu sonuçlara işaret ediyor:

- Yönetim ile çalışanlar arasında beklenti ve güven farkı olabilir; çalışanların görüşünü pilot sırasında alın.
- Otomasyonun kapsamını kademeli artırın. Workday'in müşterilere ajanların ne kadar ileri gidebileceğini belirleme imkânı vermesi de aynı mantığa dayanıyor.
- Kritik sonuçları (ücret, işe alım, işten çıkarma) otomatik bırakmayın; insan onayı koyun.
- Satıcı vaatlerini kendi verinizle test edin. Satıcı duyurularındaki bazı rakam ve iddialar bağımsız doğrulama olmadan geçerli sayılmamalı.

Özetle: Önce tekrarlayan ve düşük riskli soruları otomatikleştirin, gizlilik kurallarını baştan yazın, yanıtları düzenli denetleyin ve her zaman insana ulaşma yolunu açık tutun.
