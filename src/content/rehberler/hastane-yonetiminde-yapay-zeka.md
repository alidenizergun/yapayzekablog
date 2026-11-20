---
title: "Hastane yönetiminde yapay zeka: randevu, kapasite ve verimlilik rehberi"
description: "Hastane yönetiminde yapay zeka randevu ve gelmeme tahmininde, yatak ve ameliyathane planlamada nasıl kullanılıyor? Kaynaklı örnekler, ölçülen sonuçlar, riskler ve başlangıç adımları."
date: 2026-11-20
summary:
  - "Gelmeme tahmini ve ameliyathane planlama, hastane yönetiminde yapay zekanın en çok denenen alanları arasında."
  - "Ölçülen sonuçlar var ama sınırlı: biri yüzde 8,5 azalma, biri aylık 369 saat kazanç bildiriyor; bir pilot ise fazla rezervasyonun arttığını gösteriyor."
  - "Küçük bir pilotla başlayın, kendi verinizle sonucu ölçün ve satıcıların yayımladığı rakamlara şüpheyle yaklaşın."
level: Orta
topic: İş ve kariyer
terms: [makine-ogrenmesi, yapay-zeka, egitim-verisi, aciklanabilir-yapay-zeka]
sector: saglik
faq:
  - q: "Hastanede gelmeme tahmini nasıl çalışır?"
    a: "Model, geçmiş gelmeme öyküsü, randevu zamanlaması ve onay durumu gibi verilerden her randevu için bir risk skoru üretir. Hastane bu skora göre hatırlatma yapar ya da randevuyu yeniden planlar."
  - q: "Yapay zeka randevu gelmemelerini ne kadar azaltıyor?"
    a: "Sonuç hastaneye ve uygulamaya göre değişiyor. Yeni Cersey'de 14 lokasyonlu bir çocuk hastanesinde ilk üç ayda kurum genelinde yüzde 8,5 azalma ölçüldü; başka bir pilotta ise fazla rezervasyon arttı."
  - q: "Küçük bir hastane ya da klinik nereden başlamalı?"
    a: "Tek bir sorunu seçin, mevcut gelmeme oranınızı ölçün ve modeli kısa bir pilotla deneyin. Sonucu uygulamadan önceki dönemle karşılaştırın, hasta verisi için gizlilik ve KVKK sorumlusunu baştan sürece katın."
sources:
  - title: "SAS Voices: Turning patient no-show predictions into action"
    url: "https://blogs.sas.com/content/sascom/2026/08/06/turning-patient-no-show-predictions-into-action/"
  - title: "arXiv: Predicting Patient No-Shows in Community Health Clinics"
    url: "https://arxiv.org/pdf/2310.17506"
  - title: "PMC: Managing Dental Appointment No-Shows: A Systematic Review of Machine Learning Applications"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13400385/"
  - title: "Frontiers in Medicine (2026)"
    url: "https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2026.1767258/full"
  - title: "Egeli Gazete: MHRS'de randevuyu yapay zeka mı verecek?"
    url: "https://www.egeligazete.com/haber/mhrs-de-randevuyu-yapay-zeka-mi-verecek-mhrs-nin-yaraticisi-anlatiyor/185760"
---

Hastane yönetiminde yapay zeka, çoğu zaman doktorun karşısındaki ekranda değil, arka plandaki işlerde çalışır: hangi hasta randevuya gelmeyecek, yarın hangi yataklar boşalacak, ameliyathane süresi nasıl daha iyi paylaştırılacak. Bu rehber, bu alanlarda ne işe yaradığını, hastanelerden hangi sonuçların bildirildiğini ve hangi risklerle karşılaşabileceğinizi anlatıyor. Kanıt düzeyi her alanda aynı değil. Ölçülmüş sonuçlar sınırlı, birçok rakam da ürün satan şirketlerden geliyor. Türkiye'deki hastanelerden ölçülmüş bir randevu veya kapasite sonucu aktaramıyoruz. Bu metin tıbbi tavsiye içermez; yalnızca yönetim süreçlerini ele alır.

## Hangi işlerde kullanılıyor

Hastane yönetiminde yapay zekanın öne çıkan kullanım alanları dört başlıkta toplanıyor:

- **Randevu ve gelmeme tahmini:** Hangi randevunun boş kalma riskinin yüksek olduğunu skorlamak.
- **Yatak ve ameliyathane planlama:** Kesintileri ve boşalacak kapasiteyi önceden tahmin edip planı buna göre düzenlemek.
- **Faturalama ve kodlama:** Klinik kayıtlardan fatura kodu önerisi üretmek ve hataları işaretlemek.
- **Tedarik:** Tüketim verisinden stok ihtiyacını öngörmek.

Bunların ortak noktası, makine öğrenmesi (machine learning) modellerinin geçmiş veriden örüntü öğrenmesi ve çıkan tahminin bir iş akışına bağlanmasıdır. Tahmin tek başına bir şey değiştirmez; değişikliği, tahmine göre alınan aksiyon yaratır.

## Randevu ve gelmeme tahmini nasıl çalışır

Gelmeme tahmininde model, her randevu için bir risk skoru üretir. Diş hekimliğindeki makine öğrenmesi uygulamalarını inceleyen [sistematik bir derleme](https://pmc.ncbi.nlm.nih.gov/articles/PMC13400385/), en önemli belirleyiciler olarak SMS onay durumunu, geçmiş gelmeme öyküsünü ve randevu zamanlamasını öne çıkarıyor. Randevu alma ile randevu günü arasındaki süre uzadıkça gelmeme riski de artıyor.

Aynı derlemede aktarılan tek bir modelin doğruluğu 0,76, F1 skoru ise 0,41. F1, modelin gelmeyecek hastaları ne kadar iyi yakaladığını gösteren bir ölçüdür. Bu fark önemli: yüksek doğruluk, gelmeme gibi nispeten az görülen bir olayda modelin işe yaradığı anlamına gelmeyebilir. Bir model seçerken yalnızca doğruluğa değil, gelmeyecek hastaları ne kadar yakaladığına da bakın.

## Hastanelerden ölçülen sonuçlar

Yeni Cersey'de 14 lokasyonlu Children's Specialized Hospital, Pinnacle Solutions ile gelmeme riski skorlama modelini randevu iş akışına yerleştirdi. SAS'ın [blog yazısına](https://blogs.sas.com/content/sascom/2026/08/06/turning-patient-no-show-predictions-into-action/) göre ilk üç ayda kurum genelinde gelmemelerde yüzde 8,5 azalma ölçüldü. Yazıda bir klinik için yüzde 63'lük düşüş de bildiriliyor; ancak bu, yazıdaki tek klinik örneği ve birincil veriyle doğrulanmış değil. Kaynağın bir yazılım satıcısı olduğunu da akılda tutun.

Olumsuz bir örnek de var. St. Thomas'taki bir pilot uygulamayı inceleyen [akademik ön çalışmada](https://arxiv.org/pdf/2310.17506), algoritma sonrasında günlük fazla rezervasyon sayısı 1-2'den 4,5'e, ardından 10'un üzerine çıktı. Yazarlar, eğilimlerin uygulamadan önce de artmakta olduğunu belirtiyor ve etkiyi netleştirmek için daha fazla veriye ihtiyaç olduğunu söylüyor. Yani modelin neden olduğu etki ile zaten süren bir eğilimi ayırmak kolay değil.

Pratik sonuç şu: tek bir rakama bakıp karar vermeyin. Kurumunuzda uygulamadan önceki dönemi ölçün, uygulama sonrasıyla karşılaştırın.

## Yatak ve ameliyathane planlama

Ameliyathane planlamada fikir, kesintileri önceden tahmin edip boşta kalacak süreyi başka işe ayırmaktır. Frontiers'taki [akademik bir derlemede](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2026.1767258/full) aktarıldığına göre Banner Health, Qventus platformuyla ameliyathane planlaması yaptı. Kesintilerin önceden tahmin edilmesi ve sürelerin otomatik yeniden dağıtılmasıyla her ay 369 saat ameliyathane blok süresi kazanıldığı bildiriliyor. Bu rakam kurum veya şirket beyanına dayanıyor; bağımsız bir ölçüm olarak okumayın.

Yatak planlamada da mantık benzer: taburculuk ve yeni yatış tahminlerini birlikte görüp kapasiteyi önceden yönetmek. Burada başarı, tahminin kalitesinden çok taburculuk, temizlik ve transfer gibi adımların tahmine göre hareket edebilmesine bağlıdır. Tahmin eder ama süreci değiştiremezseniz kazanç sınırlı kalır.

## Faturalama, kodlama ve tedarik

Faturalama ve kodlamada yapay zeka, klinik notlardan kod önerisi çıkarır ve ret riski taşıyan kayıtları işaretler. Tedarikte ise geçmiş tüketimden stok ihtiyacını tahmin eder. Bu iki alanda satıcıların yayımladığı verimlilik ve tasarruf rakamlarını, birincil veriyle ya da hastanenin kendi ölçümüyle desteklenmedikçe kesin kabul etmeyin.

Bu alanlarda başlarken şunlara dikkat edin:

- Öneriyi otomatik uygulamak yerine önce insan denetimine bağlayın.
- Hata türlerini kaydedin: yanlış kod, atlanan işlem, gereksiz stok.
- Başlangıç ölçütünüzü belirleyin, örneğin ret oranı veya stok tükenme sayısı; pilot sonunda aynı ölçütle karşılaştırın.

## Türkiye'de durum

Türkiye'de Merkezi Hekim Randevu Sistemi (MHRS) üzerinden yapay zeka tartışılıyor. MHRS'nin yaratıcısı Süleyman Sevinç, [Egeli Gazete'deki röportajında](https://www.egeligazete.com/haber/mhrs-de-randevuyu-yapay-zeka-mi-verecek-mhrs-nin-yaraticisi-anlatiyor/185760) yapay zekanın gelmeme riskini hesaplayabileceğini söyledi; ancak bu konuyla ilgili çalışmalarının olmadığını da belirtti. Yani fikir var, ölçülmüş bir uygulama sonucu aktaramıyoruz. Genel tabloyu [Türkiye'de sağlıkta yapay zeka](/rehber/turkiyede-saglikta-yapay-zeka/) rehberinde bulabilirsiniz.

## Uygulama zorlukları ve riskler

**Fazla rezervasyon.** St. Thomas örneğinde görüldüğü gibi, gelmeme tahminine göre fazla randevu vermek, herkes gelince bekleme süresini ve personel yükünü artırabilir. Fazla rezervasyon için üst sınır koyun.

**Veri kalitesi.** Model, geçmiş verideki eksikleri ve alışkanlıkları öğrenir. Randevu kayıtlarınız tutarsızsa tahmin de tutarsız olur. Burada eğitim verisinin temsil gücü belirleyicidir.

**Adil olmayan sonuçlar.** Risk skoru yüksek çıkan hastalara hizmet vermeyi azaltmak etik ve itibar sorunu yaratır. Skoru hizmeti kısıtlamak için değil, hatırlatma ve erişim desteği için kullanın.

**Gizlilik.** Randevu ve kayıt verileri kişisel sağlık verisidir. Bir dış sağlayıcıyla çalışmadan önce verinin nerede işlendiğini ve kimlerin eriştiğini netleştirin; ayrıntı için [sağlık verisi ve gizlilik](/rehber/saglik-verisi-ve-yapay-zeka-gizlilik/) ile [KVKK ve yapay zeka araçları](/rehber/kvkk-ve-yapay-zeka-araclari/) rehberlerine bakın.

**Açıklanabilirlik.** Çalışanlar bir skorun neden yüksek çıktığını göremiyorsa ona güvenmez. Skoru etkileyen etkenleri gösteren yöntemleri tercih edin.

## Nasıl başlanır

1. **Tek bir sorun seçin.** Örneğin belirli bir poliklinikte gelmeme ya da ameliyathane boş kalma süresi.
2. **Mevcut durumu ölçün.** Uygulamadan önceki oran ve süreleri kaydedin.
3. **Tahmini bir aksiyona bağlayın.** Hatırlatma, arama veya yeniden planlama gibi.
4. **Kısa bir pilot yapın.** Sonuçları kendi verinizle karşılaştırın, eğilimleri ayırmaya çalışın.
5. **Yan etkileri izleyin.** Fazla rezervasyon, bekleme süresi ve hasta şikâyetleri.
6. **Gizlilik ve hukuk birimini baştan dahil edin.**

Bu alanda daha geniş bir çerçeve için [sağlıkta yapay zeka](/sektor/saglik/) sayfasına ve [bugün neler yapılıyor](/rehber/saglikta-yapay-zeka-bugun-neler-yapiliyor/) rehberine göz atabilirsiniz. Genel kural basit: yapay zeka hastane yönetiminde bir ölçüm ve planlama aracıdır; yararını, kendi hastanenizde ölçerek görürsünüz.
