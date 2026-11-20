---
title: "Yapay zeka ile işe alım: önyargı riski ve yasal sınırlar"
description: "Aday tarama araçları nasıl önyargı üretebilir? Amazon örneği, New York City'nin LL 144 yasası, AB Yapay Zeka Yasası, KVKK ve İş Kanunu'ndaki eşit davranma ilkesi ve aday şeffaflığı."
date: 2026-11-20
summary:
  - "Aday tarama araçları geçmiş verilerdeki önyargıyı öğrenip büyütebilir; Amazon'un bıraktığı deneysel araç bunun bilinen bir örneğidir."
  - "New York City'deki LL 144 önyargı denetimi ve aday bildirimi ister; AB Yapay Zeka Yasası işe alım sistemlerini yüksek riskli sayar."
  - "Türkiye'de KVKK ve İş Kanunu'ndaki eşit davranma ilkesi birlikte düşünülmeli; adayı bilgilendirmek ve insan denetimi bırakmak temel önlemlerdir."
level: Orta
topic: İş ve kariyer
terms: [yapay-zeka-onyargisi, makine-ogrenmesi, egitim-verisi, aciklanabilir-yapay-zeka, yapay-zeka]
sector: insan-kaynaklari
faq:
  - q: "Yapay zeka aday taramada tek başına karar verebilir mi?"
    a: "Hukuken ve etik olarak riskli bir yaklaşımdır. Aracı ön eleme ve sıralama için destek olarak kullanıp nihai kararı insanın vermesi, hem önyargıyı yakalamayı hem de itirazları yanıtlamayı kolaylaştırır."
  - q: "Türkiye'de aday tarama aracı kullanırken hangi mevzuata bakmalıyım?"
    a: "Aday verilerinin işlenmesi için KVKK, ayrımcılık ve eşit davranma konusunda ise İş Kanunu'nun 5. maddesi akla gelen başlıca düzenlemelerdir. Somut uygulamanız için bir hukukçuya danışmanız gerekir."
  - q: "Satıcı 'önyargısız' diyorsa yeterli mi?"
    a: "Hayır. Satıcının iddiasını bağımsız denetim, test sonuçları ve kendi aday havuzunuzdaki çıktıların izlenmesiyle desteklemeniz gerekir. Sorumluluk çoğu zaman aracı kullanan işverende kalır."
sources:
  - title: "MIT Technology Review: Amazon ditched AI recruitment software because it was biased against women"
    url: "https://www.technologyreview.com/2018/10/10/139858/amazon-ditched-ai-recruitment-software-because-it-was-biased-against-women/"
  - title: "Incident Database: Amazon's Experimental Hiring Tool Allegedly Displayed Gender Bias in Candidate Rankings"
    url: "https://incidentdatabase.ai/cite/37/"
  - title: "DCWP AEDT FAQ"
    url: "https://www.nyc.gov/assets/dca/downloads/pdf/about/DCWP-AEDT-FAQ.pdf"
  - title: "New York Eyalet Denetçisi: Enforcement of Local Law 144"
    url: "https://www.osc.ny.gov/state-agencies/audits/2025/12/02/enforcement-local-law-144-automated-employment-decision-tools"
  - title: "ActuIA: HR Tools and Artificial Intelligence: Europe Delays High-Risk Obligations to December 2027"
    url: "https://www.actuia.com/en/news/hr-tools-and-artificial-intelligence-europe-delays-high-risk-obligations-to-december-2027/"
  - title: "Holland & Knight: Federal Court Allows Collective Action Lawsuit Over Alleged AI Hiring Bias"
    url: "https://www.hklaw.com/en/insights/publications/2025/05/federal-court-allows-collective-action-lawsuit-over-alleged"
  - title: "Cott Group: İşe Alım Süreçlerinde Yapay Zekâ ve Kişisel Verilerin Korunması"
    url: "https://www.cottgroup.com/tr/blog/kvkk-gdpr/item/ise-alim-sureclerinde-yapay-zeka-ve-kisisel-verilerin-korunmasi"
  - title: "Kolay İK: İşverenin eşit davranma ilkesi nedir?"
    url: "https://kolayik.com/blog/isverenin-esit-davranma-ilkesi-nedir-ihlali-durumunda-ne-yapilmalidir"
---

Özgeçmişleri okuyan, adayları puanlayan ve mülakata çağrılacakları sıralayan yazılımlar işe alım ekiplerine zaman kazandırır. Aynı araçlar, geçmişteki kararların izlerini taşıyıp ayrımcılığı sessizce otomatikleştirebilir. Bu rehber, önyargının nasıl ortaya çıktığını, ABD ve AB'deki düzenlemelerin ne istediğini ve Türkiye'de nelere dikkat etmeniz gerektiğini özetler. Hukuki görüş değildir; somut bir uygulama için uzman desteği alın.

## Aday tarama araçları ne yapar, risk nerede başlar

Bu araçların çoğu bir makine öğrenmesi modeline dayanır. Model, şirketin geçmiş işe alım kararlarından veya özgeçmiş örneklerinden örüntü öğrenir ve yeni adaylara bu örüntüye benzerlik oranında puan verir. Risk tam burada başlar: eğitim verisi (geçmiş kararlar) belirli gruplara karşı dengesizse, model bu dengesizliği 'başarı ölçütü' sanıp tekrarlar. Üstelik bu durum çoğu zaman adayın cinsiyeti gibi bir alan hiç girilmeden de ortaya çıkabilir; çünkü başka bilgiler dolaylı gösterge işlevi görebilir.

Bu nedenle araç seçerken sorulacak ilk soru 'ne kadar hızlı?' değil, 'hangi veriyle ve nasıl ölçülerek eğitildi?' olmalıdır. Konuya genel bakış için [insan kaynaklarında yapay zeka](/rehber/insan-kaynaklarinda-yapay-zeka/) rehberine de göz atabilirsiniz.

## Amazon örneği: bırakılan işe alım aracı

En bilinen vakalardan biri Amazon'un deneysel işe alım aracıdır. [MIT Technology Review](https://www.technologyreview.com/2018/10/10/139858/amazon-ditched-ai-recruitment-software-because-it-was-biased-against-women/) haberine göre şirket, kadınlara karşı önyargılı çıktığı için bu yapay zeka işe alım yazılımını bıraktı. Yapay zeka olaylarını derleyen [Incident Database](https://incidentdatabase.ai/cite/37/) kaydı da aracın aday sıralamalarında cinsiyet önyargısı gösterdiğinin iddia edildiğini belirtiyor.

Bu örnekten çıkan ders, tek bir şirketin başına gelen bir aksaklıktan öte bir ilkedir: aracın yüzeysel olarak 'tarafsız' görünmesi, sonuçlarının tarafsız olduğu anlamına gelmez. Sonuçları düzenli ölçmeden aracı güvenilir saymayın.

## Satıcı da sorumluluk alanına girebilir: Workday davası

Araç sağlayıcısının hukuki sorumluluğu da tartışılıyor. [Holland & Knight](https://www.hklaw.com/en/insights/publications/2025/05/federal-court-allows-collective-action-lawsuit-over-alleged) yazısına göre ABD'de bir federal mahkeme, iddia edilen yapay zeka kaynaklı işe alım önyargısı nedeniyle açılan bir davanın toplu dava (collective action) olarak ilerlemesine izin verdi. Dava henüz bir sonuca bağlanmadı; yine de işverenlerin 'aracı satıcı geliştirdi' diyerek sorumluluktan kurtulamayabileceğini düşündürüyor.

## New York City: LL 144 neleri şart koşuyor

New York City'nin Yerel Yasası 144 (LL 144), işe alım ve terfi kararlarında kullanılan otomatik karar araçlarını düzenler. Yasanın iki temel ayağı önyargı denetimi ve bildirimdir: araçların önyargı açısından denetlenmesi ve adayların bilgilendirilmesi gerekir. Uygulama ayrıntıları için şehrin ilgili dairesinin [DCWP sıkça sorulan sorular](https://www.nyc.gov/assets/dca/downloads/pdf/about/DCWP-AEDT-FAQ.pdf) belgesine bakın.

Uygulamanın nasıl denetlendiği de gündemde. New York Eyalet Denetçisi'nin ofisi, yasanın [uygulanmasına ilişkin bir denetim](https://www.osc.ny.gov/state-agencies/audits/2025/12/02/enforcement-local-law-144-automated-employment-decision-tools) yayımladı. Hukuk bürosu DLA Piper ise bu tür bir denetimin işverenler açısından artan risk anlamına gelebileceğini yazdı. New York'ta aday alıyorsanız yasanın güncel metnini ve yönergeleri doğrudan kontrol edin.

## AB Yapay Zeka Yasası: işe alım yüksek riskli sayılıyor

AB Yapay Zeka Yasası, işe alım ve çalışan yönetimi gibi alanlarda kullanılan sistemleri yüksek riskli grupta ele alıyor. Bu, risk yönetimi, insan gözetimi ve belgeleme gibi ek yükümlülükler anlamına gelir. Takvim konusunda ise gelişmeler hızlı: [ActuIA](https://www.actuia.com/en/news/hr-tools-and-artificial-intelligence-europe-delays-high-risk-obligations-to-december-2027/) haberi, insan kaynakları araçlarına yönelik yüksek riskli yükümlülüklerin Aralık 2027'ye ertelendiğini aktarıyor. Erteleme düzenlemesinin ayrıntıları kaynaklara göre değişebildiği için kesin yürürlük tarihlerini resmi metinden teyit edin.

AB pazarındaki adaylara hizmet veren veya AB'li şirketlerle çalışan Türkiye merkezli firmalar için ayrıntılar [AB Yapay Zeka Yasası ve Türkiye](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/) rehberinde yer alıyor.

## Türkiye'de KVKK ve eşit davranma ilkesi

Türkiye'de işe alımda yapay zeka kullanımı iki hukuk alanının kesişiminde durur. Birincisi kişisel verilerin korunmasıdır. [Cott Group'un yazısı](https://www.cottgroup.com/tr/blog/kvkk-gdpr/item/ise-alim-sureclerinde-yapay-zeka-ve-kisisel-verilerin-korunmasi), işe alım süreçlerinde yapay zeka kullanımının KVKK açısından doğurduğu sorumlulukları ele alıyor. Profilleme ve otomatik karar alma konusu ise [KVKK'nın 11. maddesi](https://bumerangdata.com/blog/yapay-zeka-ile-profilleme-ve-otomatik-karar-alma-kvkk-madde-11) çerçevesinde tartışılıyor. Aday verisini bir yapay zeka aracına yüklemeden önce [kişisel verileri koruma](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/) rehberindeki temel önlemleri uygulayın.

İkincisi ayrımcılık yasağıdır. İş Kanunu'nun 5. maddesi işverenin eşit davranma borcunu düzenler; bu ilkeyi anlatan [Kolay İK](https://kolayik.com/blog/isverenin-esit-davranma-ilkesi-nedir-ihlali-durumunda-ne-yapilmalidir) yazısı, ihlal halinde ne yapılması gerektiğini de açıklıyor. Bu ilkenin aday aşamasında ne ölçüde işleyeceği gibi ayrıntılı sorular için bir iş hukuku avukatına danışın.

## Adaylara şeffaflık ve pratik kontrol listesi

New York'taki bildirim şartı, şeffaflığın artık hukuki bir beklenti haline geldiğini gösteriyor. Hangi hukuk alanına tabi olursanız olun şu adımlar savunulabilir bir başlangıçtır:

- **Aracı belgeleyin:** Hangi aşamada, hangi veriyle ve hangi amaçla kullanıldığını yazılı hale getirin; şirket içi kuralları [şirket içi yapay zeka politikası](/rehber/sirket-ici-yapay-zeka-politikasi/) rehberiyle uyumlu tutun.
- **Adayı bilgilendirin:** Süreçte otomatik bir aracın kullanıldığını ve hangi verilerin işlendiğini açıkça söyleyin.
- **İnsan denetimi bırakın:** Elenen adaylardan örnek alıp elle inceleyin; aracın çıktısını tek başına karar saymayın.
- **Sonuçları ölçün:** Gruplar arasındaki sonuç farklarını düzenli izleyin ve satıcıdan test ve denetim bilgisi isteyin.
- **İtiraz yolu açın:** Aday, kararın nasıl çıktığını sorabilmeli ve düzeltme isteyebilmelidir.

Aday tarafında da bu araçların kullanıldığını bilmek işe yarar; özgeçmişinizi hazırlarken [yapay zeka ile CV hazırlama](/rehber/yapay-zeka-ile-cv-hazirlama/) rehberi faydalı olabilir.

## Sınırlar

Bu yazı yalnızca genel bir çerçeve sunar. Bir aracın önyargısız olduğunu kanıtlamak zordur; denetim yöntemleri ve mevzuat hızla değişiyor. Karar vermeden önce güncel mevzuatı resmi kaynaklardan doğrulayın ve hukuk danışmanınızla çalışın.
