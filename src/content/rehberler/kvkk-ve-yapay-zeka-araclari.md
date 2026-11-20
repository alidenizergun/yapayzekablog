---
title: "Yapay zeka araçlarında kişisel veri: KVKK açısından nelere dikkat edilmeli?"
description: "KVKK'nın üretken yapay zeka rehberi, yurt dışına veri aktarımı kuralları, çalışanların araçlara veri girme riski ve kurumsal planlarda sorulacak sorular, kısa bir kontrol listesiyle."
date: 2026-11-20
summary:
  - "KVKK'nın Kasım 2025 tarihli rehberine göre üretken yapay zekada girdi, eğitim ve çıktı aşamalarında kişisel veri işlenebiliyor."
  - "Türkiye dışında barındırılan bir yapay zeka sistemini kullanmak, rehberin yorumuna göre yurt dışına veri aktarımı sayılıyor."
  - "Yasak tek başına yetmiyor; politika, onaylı araç listesi ve eğitim birlikte kurulmalı."
level: Orta
topic: Güvenlik ve gizlilik
terms: [uretken-yapay-zeka, istem, egitim-verisi, sohbet-botu]
sector: hukuk
faq:
  - q: "ChatGPT gibi bir araca müşteri bilgisi yazmak KVKK'ya aykırı mı?"
    a: "Tek başına yasak değil, ama müşteri verisi için aydınlatma, m.5 kapsamında bir işleme şartı ve yurt dışı aktarım dayanağı birlikte aranmalı. Bunlardan biri eksikse veri girilmemeli; somut durum için bir hukukçuya danışın."
  - q: "Kurumsal plan almak KVKK uyumunu otomatik sağlar mı?"
    a: "Hayır. Kurumsal plan veri güvenceleri sunabilir, ancak veri sorumlusu olarak sorumluluk şirketinizde kalır; sözleşme koşullarını, aktarım dayanağını ve çalışan kullanımını ayrıca yönetmeniz gerekir."
  - q: "Çalışanlarım yasağa rağmen araç kullanıyorsa ne yapmalıyım?"
    a: "Kurumun yayımladığı iş yeri dokümanı, kurumsal bir kullanım politikası, erişimin kurallarla yönetilmesi ve farkındalık eğitimi öneriyor. Hangi aracın hangi koşulda kullanılabileceğini açıkça yazın."
sources:
  - title: "SRP Legal: Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi (24.11.2025)"
    url: "https://www.srp-legal.com/tr/uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi-24-11-2025-tarihinde-kisisel-verileri-koruma-kurumunun-internet-sitesinde-yayimlanmistir/"
  - title: "Legal 500: Kişisel verilerin korunması hukukunda güncel gelişmeler"
    url: "https://www.legal500.com/intelligence/turkey/privacy/ki%C5%9Fisel-verilerin-korunmas%C4%B1-hukukunda-g%C3%BCncel-geli%C5%9Fmeler"
  - title: "Lexology: KVKK'dan yapay zeka alanında kişisel verilerin korunmasına yönelik tavsiyeler"
    url: "https://www.lexology.com/library/detail.aspx?g=6dbf3e00-0500-420d-9b69-41fb99b5f984"
  - title: "ABK Hukuk: KVKK yurt dışı veri aktarımı 2026 (7499 sayılı Kanun)"
    url: "https://abk.av.tr/kvkk-yurt-disi-veri-aktarimi-2026/"
  - title: "Halil Bakırcı Hukuk: KVKK arızi yurt dışı veri aktarımı (m.9/6)"
    url: "https://halilbakirci.av.tr/kvkk-yurt-disina-veri-aktarimi-arizi-haller-madde-9-6-2026/"
  - title: "Erdem & Erdem: İş yerlerinde üretken yapay zekâ araçlarının kullanımı duyurusu"
    url: "https://www.erdem-erdem.av.tr/bilgi-bankasi/is-yerlerinde-uretken-yapay-zeka-araclarinin-kullanimi-baslikli-kisisel-verileri-koruma-kurumu-duyurusu-yayimlandi"
  - title: "KVIA: 79% of workers have entered sensitive info like logins into AI"
    url: "https://kvia.com/stacker-cybersecurity-privacy/2026/09/23/79-of-workers-have-entered-sensitive-info-like-logins-into-ai/"
  - title: "Zamana: Yapay zeka kullanım politikası şablonu (KVKK)"
    url: "https://zamana.com.tr/wiki/temeller/sirket-ici-politika/"
---

Bir müşteri şikâyetini özetletmek, bir özgeçmişi değerlendirmek ya da bir sözleşme taslağını düzelttirmek için yapay zeka aracına metin yapıştırdığınızda, o metinde kişisel veri varsa KVKK devreye girer. Bu rehber, Kişisel Verileri Koruma Kurumu'nun (KVKK) üretken yapay zeka metinlerini, yurt dışına aktarım kurallarını ve şirketlerin pratikte neleri kontrol etmesi gerektiğini özetliyor. Hukuki görüş değildir; somut durumunuz için bir hukukçuya danışın.

## KVKK'nın üretken yapay zeka rehberi ne söylüyor?

KVKK, 24 Kasım 2025'te Kurum'un internet sitesinde [15 Soruda Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi](https://www.srp-legal.com/tr/uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi-24-11-2025-tarihinde-kisisel-verileri-koruma-kurumunun-internet-sitesinde-yayimlanmistir/)ni yayımladı. Rehber, üretken yapay zeka sisteminin eğitim verisi, istem (prompt) ve çıktı gibi her aşamasında kişisel veri işlenebileceğini belirtiyor; dolayısıyla sistemin yaşam döngüsünün tamamının KVKK yükümlülüklerine uygun olması gerekiyor ([Legal 500](https://www.legal500.com/intelligence/turkey/privacy/ki%C5%9Fisel-verilerin-korunmas%C4%B1-hukukunda-g%C3%BCncel-geli%C5%9Fmeler)).

Bu şu anlama geliyor: Sorun yalnızca modelin neyle eğitildiği değil. Sizin istemde yazdığınız bilgi de, modelin verdiği yanıtta gerçek bir kişiye ait bilgi çıkması da veri işleme kapsamında değerlendirilebilir.

## Hangi hukuki dayanak gerekir?

Rehbere göre üretken yapay zekada kişisel veri işlenmesi, KVKK'nın 5. maddesindeki (genel veriler) veya 6. maddesindeki (özel nitelikli veriler) şartlardan birine dayanmalı. Özel nitelikli veriler için sözleşmenin ifası ve meşru menfaat dayanak sayılmıyor ([SRP Legal](https://www.srp-legal.com/tr/uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi-24-11-2025-tarihinde-kisisel-verileri-koruma-kurumunun-internet-sitesinde-yayimlanmistir/)). Sağlık verisi gibi kategorileri araca girmeden önce iki kez düşünmek bu yüzden gerekiyor.

KVKK'nın daha önce yayımladığı Yapay Zekâ Alanında Kişisel Verilerin Korunmasına Dair Tavsiyeler metni de şunları öneriyor: yüksek risk varsa mahremiyet etki değerlendirmesi yapmak, sonuca kişisel veri işlemeden ulaşılabiliyorsa veriyi anonim hale getirmek, veri sorumlusu ve veri işleyen rollerini proje başında belirlemek ve bireylere itiraz hakkı tanımak ([Lexology](https://www.lexology.com/library/detail.aspx?g=6dbf3e00-0500-420d-9b69-41fb99b5f984)). Ayrıca KVKK'nın 18.02.2026 tarihli 2026/347 sayılı İlke Kararı, aydınlatma metni ile açık rıza metninin ayrı ayrı düzenlenmesi gerektiğini vurguluyor ([Halil Bakırcı Hukuk](https://halilbakirci.av.tr/kvkk-yurt-disina-veri-aktarimi-arizi-haller-madde-9-6-2026/)).

Rehbere göre kamuya açık verilerin yapay zeka eğitiminde serbestçe kullanılabileceği de varsayılmamalı ([Legal 500](https://www.legal500.com/intelligence/turkey/privacy/ki%C5%9Fisel-verilerin-korunmas%C4%B1-hukukunda-g%C3%BCncel-geli%C5%9Fmeler)).

## Yurt dışına veri aktarımı: neden önemli?

Çoğu popüler yapay zeka aracı Türkiye dışındaki sunucularda çalışıyor. Rehbere göre Türkiye dışında barındırılan yapay zeka sistemlerinin kullanımı yurt dışına veri aktarımı sayılıyor ([Legal 500](https://www.legal500.com/intelligence/turkey/privacy/ki%C5%9Fisel-verilerin-korunmas%C4%B1-hukukunda-g%C3%BCncel-geli%C5%9Fmeler)). Yani kişisel veri içeren bir istemi yurt dışındaki bir hizmete göndermek, KVKK'nın 9. maddesindeki rejime tabi olabilir.

12 Mart 2024'te yayımlanan 7499 sayılı Kanun bu rejimi değiştirdi. [Yeni düzenlemede](https://abk.av.tr/kvkk-yurt-disi-veri-aktarimi-2026/) aktarım için üç basamak var: yeterlilik kararı, uygun güvenceler (standart sözleşme ve bağlayıcı şirket kuralları) ve arızi haller. Açık rıza artık her aktarım için tek yol değil. Standart sözleşme formları Kurum tarafından 10 Temmuz 2024'te yayımlandı.

Arızi aktarım (m.9/6) yalnızca düzenli ve sürekli olmayan, istisnai durumlar için uygulanabiliyor ([Halil Bakırcı Hukuk](https://halilbakirci.av.tr/kvkk-yurt-disina-veri-aktarimi-arizi-haller-madde-9-6-2026/)). Her gün kullandığınız bir yapay zeka aracı için bu istisnaya yaslanmak sağlam bir plan olmayabilir. Yurt dışındaki bir sağlayıcının veriye uzaktan erişmesinin de aktarım sayılıp sayılmayacağı konusunda bazı hukuk yorumları var; bu noktada resmi metne ve hukuk danışmanınıza bakın.

## Çalışanların araçlara veri girmesi: gölge yapay zeka

KVKK'nın İş Yerlerinde Üretken Yapay Zekâ Araçlarının Kullanımı başlıklı dokümanında gölge yapay zeka, çalışanların kurumun bilgisi, onayı veya kontrolü dışında üretken yapay zeka araçlarını iş süreçlerinde kullanması olarak tanımlanıyor. Doküman kurumsal bir kullanım politikası oluşturmayı, araçlara erişimi kurallarla yönetmeyi ve çalışanlara farkındalık eğitimi vermeyi öneriyor ([Erdem & Erdem](https://www.erdem-erdem.av.tr/bilgi-bankasi/is-yerlerinde-uretken-yapay-zeka-araclarinin-kullanimi-baslikli-kisisel-verileri-koruma-kurumu-duyurusu-yayimlandi)).

Örneğin bir çalışanın müşteri şikâyetini kişisel hesabıyla ChatGPT'ye kopyalaması da bu kapsamda değerlendirilebiliyor. Veri sorumlusu sıfatıyla sorumluluk kuruluşta olduğu için, bu durumda kurumun denetim ve politika yükümlülüğü ağırlaşıyor. Çalışanın kendi başına yaptığı savunması işinize yaramayabilir.

## Rakamlar ne gösteriyor?

Türkiye'ye özgü bir çalışan anketine ulaşamadık; eldeki veriler yurt dışından. Zapier için Centiment'in 13–21 Mayıs 2026'da yaptığı ankete, en az 500 çalışanı olan şirketlerden 1.005 ABD'li çalışan katıldı. [Bu ankete göre](https://kvia.com/stacker-cybersecurity-privacy/2026/09/23/79-of-workers-have-entered-sensitive-info-like-logins-into-ai/) çalışanların yüzde 89'u yapay zekaya şirket verisi girmiş, yüzde 79'u ise İK verisi, giriş bilgisi, API anahtarı veya müşteri ya da çalışan kişisel verisi gibi hassas bilgi paylaşmış. Yüzde 36'sı neyin paylaşılabileceğinden tam emin değil, yüzde 50'si ise işyerinin yapay zeka kısıtlarını yok saydığını söylüyor.

Bu sonuçları Türkiye'ye birebir taşımak doğru olmaz. Yine de belirsizlik ve kuralları atlama eğiliminin, iyi yazılmış bir politikayla ve eğitimle azaltılabilecek bir sorun olduğunu gösteriyor.

## Kurumsal planlarda hangi güvencelere bakmalı?

Kurumsal ya da iş planları genellikle bireysel hesaplardan farklı veri koşulları sunar; ancak bu koşullar sağlayıcıdan sağlayıcıya ve plandan plana değişir. Genel bir kabul yerine sözleşmeyi ve sağlayıcının güncel belgelerini okuyun. Şu soruların yanıtını yazılı alın:

- Girdileriniz ve çıktılarınız model eğitiminde kullanılıyor mu, bu hesap düzeyinde kapatılabiliyor mu?
- Veriler ne kadar süre saklanıyor, silme talebi nasıl işliyor?
- Veriler hangi ülkelerde işleniyor ve hangi alt hizmet sağlayıcılar kullanılıyor?
- Sağlayıcı veri işleyen olarak mı çalışıyor; bu rol sözleşmede yazılı mı?
- Yönetici kontrolleri, erişim yönetimi ve kayıt tutma sunuluyor mu?
- Yurt dışı aktarım için hangi mekanizma (örneğin standart sözleşme) kullanılabilir?

Bir kurumsal plan almak aktarım dayanağı ve aydınlatma gibi yükümlülüklerinizi ortadan kaldırmaz; bunlar veri sorumlusu olarak sizde kalır. Şirketinizin genel çerçevesini kurmak için [şirket içi yapay zeka politikası](/rehber/sirket-ici-yapay-zeka-politikasi/) rehberine bakabilirsiniz.

## Şirketler için kontrol listesi

1. **Envanter çıkarın.** Hangi bölümler hangi araçları kullanıyor, hangi veri türleri giriyor? Gölge kullanımı da dahil edin.
2. **Onaylı araç listesi hazırlayın.** Hangi aracın hangi koşullarda kullanılabileceğini açıkça yazın.
3. **Üç koşulu birlikte arayın.** Bir hukuk bürosunun [politika şablonu](https://zamana.com.tr/wiki/temeller/sirket-ici-politika/) müşteri verisi için aydınlatma metni, m.5 işleme şartı ve m.9 yurt dışı aktarım dayanağının birlikte aranmasını öneriyor. Üçü de yoksa onaylı araca bile veri girilmemeli.
4. **Özel nitelikli verileri ayırın.** Sağlık gibi kategorilerde sözleşme ve meşru menfaat dayanak olmuyor; mümkünse anonimleştirin. Sağlık tarafı için [sağlık verisi ve yapay zeka gizliliği](/rehber/saglik-verisi-ve-yapay-zeka-gizlilik/) rehberine göz atın.
5. **Etki değerlendirmesi yapın.** Yüksek risk varsa mahremiyet etki değerlendirmesi, sorumluluk rollerinin proje başında belirlenmesi önerisini izleyin.
6. **Aydınlatma ve rıza metinlerini ayırın.** Yeni bir işleme amacı ortaya çıktığında metinleri güncelleyin.
7. **Eğitim verin.** Çalışanlara neyin girilmeyeceğini örneklerle anlatın; [çalışanlara yapay zeka eğitimi](/rehber/calisanlara-yapay-zeka-egitimi/) rehberi başlangıç için yararlı olabilir.
8. **Sözleşmeleri gözden geçirin.** Sağlayıcıyla veri işleme, saklama, silme ve alt sağlayıcı maddelerini netleştirin.

## Sınırlar ve dikkat edilecekler

Bu konuda yazılanların bir kısmı hukuk bürolarının özetlerine dayanıyor; resmi metinle karşılaştırmadan karar vermeyin. Özellikle KVKK'nın iş yeri dokümanının yayım tarihi kaynaklarda farklı geçiyor, resmi tarihi kurumun sitesinden kontrol edin. KVKK'nın bu alandaki yaklaşımı ve yurt dışı aktarım düzenlemeleri güncellenebilir.

Gündelik kullanıcı olarak daha somut adımlar için [yapay zeka kullanırken kişisel verileri koruma](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/) rehberine, daha geniş çerçeve için [KVKK ve yapay zeka araçları](/rehber/kvkk-ve-yapay-zeka-araclari/) sayfasına göz atabilirsiniz. En güvenli başlangıç; neyi, hangi araca, hangi dayanakla girdiğinizi yazılı olarak bilmek.
