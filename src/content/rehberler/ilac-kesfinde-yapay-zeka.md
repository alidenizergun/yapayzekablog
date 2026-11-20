---
title: "İlaç keşfinde yapay zeka: AlphaFold'dan klinik denemelere kadar ne değişti?"
description: "AlphaFold'un Nobel ödüllü protein yapısı tahmininden Isomorphic Labs'ın yatırımına ve yapay zekayla bulunan ilaç adaylarının klinik denemelerine; gerçekçi beklentiler ve süreler."
date: 2026-11-20
summary:
  - "AlphaFold protein yapısı tahmininde 2024 Nobel Kimya Ödülü'nü aldı, ancak yapı tahmini ilaç geliştirmenin yalnızca ilk adımlarından biri."
  - "Isomorphic Labs Kasım 2026'da 5 milyar dolarlık yatırım aldı; şirketin hiçbir adayı henüz insanlarda test edilmedi."
  - "Yapay zekayla bulunan ilaçlar klinik denemelere girmeye başladı, ancak onay için hâlâ uzun ve belirsiz bir yol var."
level: Orta
topic: Teknik
terms: [yapay-zeka, derin-ogrenme, makine-ogrenmesi]
sector: saglik
faq:
  - q: "AlphaFold ilaç buldu mu?"
    a: "Hayır. AlphaFold proteinlerin üç boyutlu yapısını tahmin eden bir araç; ilaç adayı bulmak, tasarlamak, test etmek ve onaylatmak için başka birçok aşama gerekiyor."
  - q: "Yapay zekayla tasarlanan bir ilaç şu an hastalara verilebilir mi?"
    a: "Onaylanmış bir ilaç olarak hayır; bu ilaçlar klinik deneme aşamasında. Bir denemeye katılmayı düşünen hasta bunu mutlaka kendi doktoruyla görüşmeli."
  - q: "Yapay zeka ilaç geliştirme süresini ne kadar kısaltıyor?"
    a: "Net bir rakam vermek için erken; şirketlerin hedefleri zaman zaman ertelendi ve kesin sonuçlar klinik denemelerde görülecek. Hızlanmayı abartan iddialara temkinli yaklaşın."
sources:
  - title: "NobelPrize.org: The Nobel Prize in Chemistry 2024 basın açıklaması"
    url: "https://www.nobelprize.org/prizes/chemistry/2024/press-release/"
  - title: "bioRxiv: AlphaFold Database expands to proteome-scale quaternary structures"
    url: "https://www.biorxiv.org/content/10.64898/2026.03.27.714458v1"
  - title: "Phys.org: Toward experiment-guided AlphaFold"
    url: "https://phys.org/news/2026-06-alphafold-ai-tool-conformation-limitation.html"
  - title: "Wikipedia: Isomorphic Labs"
    url: "https://en.wikipedia.org/wiki/Isomorphic_Labs"
  - title: "CASRAI: Isomorphic Labs $5B Series C"
    url: "https://casrai.org/news/isomorphic-labs-5-billion-series-c-ai-drug-design-2026"
  - title: "Dealroom: Isomorphic Labs raises $5B"
    url: "https://dealroom.co/news/173568-isomorphic-labs-raises-5b-to-push-ai-designed-drugs-toward-trials/"
  - title: "BioPharmaTrend: The $2.7B Question"
    url: "https://www.biopharmatrend.com/business-intelligence/the-27b-question-how-do-we-know-if-isomorphics-ai-works/"
  - title: "Noah R. Flynn: Rentosertib hedef keşfi vaka çalışması"
    url: "https://noahrflynn.com/blog/2026/knowledge-graphs-drug-target-discovery-rentosertib/"
---

İlaç geliştirme, bir hastalığın biyolojisini anlamaktan bir molekülün insanlarda test edilmesine kadar uzanan uzun bir süreç. Yapay zeka bu zincirin farklı halkalarında kullanılıyor. Bu rehber, protein yapısı tahmininde Nobel Ödülü'ne uzanan AlphaFold hikâyesini, Isomorphic Labs gibi şirketlerin bugün nerede durduğunu, yapay zekayla bulunan ilaçların klinik deneme durumunu ve işin gerçekçi sınırlarını özetliyor. Burada anlatılanlar tıbbi tavsiye değildir; tedavi kararları için doktorunuza başvurun.

## AlphaFold ne yaptı?

Proteinler, vücutta pek çok işi yapan moleküller; işlevleri büyük ölçüde üç boyutlu şekillerine bağlı. Bir proteinin şeklini amino asit dizisinden tahmin etmek onlarca yıldır çözülemeyen bir sorundu. Nobel Komitesi'nin [basın açıklamasına](https://www.nobelprize.org/prizes/chemistry/2024/press-release/) göre Demis Hassabis ve John Jumper, 2020'de sundukları AlphaFold2 ile bu sorunu çözdü.

2024 Nobel Kimya Ödülü, protein yapısı tahmini için Hassabis ve Jumper'a, hesaplamalı protein tasarımı için de David Baker'a verildi. Komitenin açıklamasına göre ödül 11 milyon İsveç kronu; yarısı Baker'a, diğer yarısı Hassabis ve Jumper'a gitti.

AlphaFold, derin öğrenme (deep learning) yöntemlerine dayanıyor. Bu yöntem, verilerden kalıpları öğrenen çok katmanlı yapay sinir ağlarını kullanıyor. Araştırmacılar için asıl değer, deneysel yapı çözümünü beklemeden bir proteinin olası şeklini görebilmek.

## Veritabanı büyüyor, sınırlar sürüyor

AlphaFold tahminleri, herkesin erişebildiği AlphaFold Protein Structure Database'te tutuluyor. Veritabanı yalnızca tek tek proteinlerle sınırlı kalmıyor, proteinlerin bir arada oluşturduğu komplekslere de genişliyor. Henüz hakemli dergide yayımlanmamış bir [ön baskı makalesine](https://www.biorxiv.org/content/10.64898/2026.03.27.714458v1) göre, Mart 2026 güncellemesinde yaklaşık 1,8 milyon yüksek güvenilirlikli protein kompleksi tahmini eklendi. Ön baskılar henüz hakem değerlendirmesinden geçmediği için bu rakamı kesin sonuç gibi değil, bildirilen bir bulgu olarak okuyun.

Bununla birlikte yöntemin sınırları var. Nature Biotechnology'de 2026'da yayımlanan bir çalışmayı aktaran [Phys.org haberine](https://phys.org/news/2026-06-alphafold-ai-tool-conformation-limitation.html) göre AlphaFold3 bazı durumlarda protein dimer yüzeyini tamamen yanlış tahmin ediyor. Aynı habere göre proteinler tek bir yapıda değil, hareketli topluluklar hâlinde bulunuyor. Yani tahmin edilen şekil, canlı hücredeki davranışın tamamını anlatmayabilir. İlaç tasarımında bu fark önemli, çünkü bir molekülün hedef proteine nasıl bağlandığı tam da bu ayrıntıya bağlı.

## Isomorphic Labs: büyük yatırım, henüz klinik deneme yok

Google DeepMind kökenli Isomorphic Labs, [Wikipedia'daki bilgilere](https://en.wikipedia.org/wiki/Isomorphic_Labs) göre 2021'de kuruldu ve Nisan 2025'te ilk dış yatırım turunda 600 milyon dolar topladı. Şirket Kasım 2026'da 5 milyar dolarlık C serisi yatırım aldığını duyurdu; [CASRAI'nin aktardığına](https://casrai.org/news/isomorphic-labs-5-billion-series-c-ai-drug-design-2026) göre Hassabis 20'den fazla programın sürdüğünü söyledi.

Yatırımın büyüklüğü, klinik aşamaya geçildiği anlamına gelmiyor. [Dealroom'un aktardığına](https://dealroom.co/news/173568-isomorphic-labs-raises-5b-to-push-ai-designed-drugs-toward-trials/) göre Eli Lilly, Novartis ve Johnson & Johnson ile ortaklıkları olan şirketin hiçbir adayı henüz insanlarda test edilmedi. Hassabis Ocak 2026'da Davos'ta ilk klinik denemelerin 2025 sonu yerine 2026 sonunda başlamasını beklediğini söylemişti. Dealroom'a göre ise Bloomberg'e verdiği bilgide güncel bir hedef vermedi; şirket düzenleyici başvurularında 'yolunda' olduğunu belirtip daha fazla açıklamayı 2027'ye bıraktı.

[BioPharmaTrend'in analizine](https://www.biopharmatrend.com/business-intelligence/the-27b-question-how-do-we-know-if-isomorphics-ai-works/) göre Eylül 2026 itibarıyla şirketin klinik deneme başvurusu (IND) dosyası veya bir deneme başlangıcı açıkladığı doğrulanamadı; şirket preklinik çalışmanın yolunda olduğunu söylüyor. Bazı ikincil sitelerde bu aşamayı çoktan geçtiği izlenimi veren ifadeler görebilirsiniz. Böyle iddiaları şirketin kendi duyurularıyla ve düzenleyici kayıtlarla karşılaştırın.

## Yapay zekayla bulunan ilaçlar klinik denemede

Yapay zeka yalnızca protein yapısı tahmininde değil, hedef bulma ve molekül tasarımında da kullanılıyor. Sık verilen örnek, Insilico Medicine'ın idiyopatik pulmoner fibroz (IPF) için geliştirdiği TNIK inhibitörü rentosertib. Bir [blog analizine](https://noahrflynn.com/blog/2026/knowledge-graphs-drug-target-discovery-rentosertib/) göre hem hedef hem molekül yapay zekayla bulundu ve ilaç, 'uçtan uca yapay zekayla keşfedilen' ilaç olarak anılıyor. Burada kaynak birincil bir makale değil, bir blog yazısı; bu nedenle ayrıntılar için klinik çalışmanın kendisine bakmak gerekir.

Aynı kaynağa göre Faz 2a sonuçları Haziran 2025'te Nature Medicine'de yayımlandı ve çalışmada 71 hasta yer aldı. Bu, yapay zekayla bulunan bir ilacın insan verisiyle hakemli bir dergiye ulaşabildiğini gösteriyor. Ancak Faz 2a, ilacın onaylandığı anlamına gelmez; etkinliği ve güvenliği daha büyük ve uzun çalışmalarda sınanmak zorunda.

## Gerçekçi beklentiler ve süreler

İlaç geliştirmede 'ilk hedefi bulmak' ile 'hastaya ulaşan ilaç elde etmek' arasında uzun bir mesafe var. Bunu üç noktada özetleyebiliriz:

- **Yapı tahmini ilacın kendisi değildir.** AlphaFold hedefi anlamayı kolaylaştırır; molekülün güvenli ve etkili olması deneylerle gösterilmek zorundadır.
- **Takvimler kayabilir.** Isomorphic'in ilk klinik deneme beklentisi 2025 sonundan 2026 sonuna ertelendi ve şirket sonrasında yeni bir hedef vermedi. Büyük yatırım bu belirsizliği ortadan kaldırmıyor.
- **İlk klinik sinyal, kesin başarı değildir.** Rentosertib örneğinde olduğu gibi Faz 2a sonuçları umut verici bir adımdır; ilacın piyasaya çıkması için daha geniş ve uzun çalışmalara ihtiyaç vardır.

Bu nedenle 'ilaç keşfi yıllardan aylara iniyor' gibi cümlelerde, hangi aşamadan söz edildiğini sorun. Hedef bulma veya aday tasarımı hızlanabilir; klinik denemelerin süresi ve onay süreci ise farklı bir konudur.

## Haberleri okurken nelere bakmalı

- **Kaynağın türüne bakın.** Şirket duyurusu, hakemli makale, ön baskı ve derleme siteleri aynı ağırlıkta değildir. Rakamların çoğu ikincil kaynaklardan dolaşıma giriyor.
- **Aşamayı doğru okuyun.** Preklinik çalışma, IND başvurusu, Faz 1, Faz 2 ve onay birbirinden çok farklı eşiklerdir.
- **'Yapay zekayla keşfedildi' ifadesinin kapsamını sorun.** Yalnızca hedef mi bulundu, molekül mü tasarlandı, yoksa bunların hepsi mi?
- **Şirketin kendi iddiasını bağımsız kaynakla karşılaştırın.** Doğrulanamayan bilgiler için 'iddia ediliyor' gibi ifadeler beklemek sağlıklı bir refleks.

Uzun makale ve raporları taramak için [uzun belge özetleme rehberimizdeki](/rehber/yapay-zeka-ile-pdf-ve-uzun-belge-ozetleme/) yöntemlerden yararlanabilirsiniz; ancak özetlenen rakamları orijinal metinde mutlaka kontrol edin.

## Nereden devam etmeli

Sağlıkta yapay zekanın daha geniş resmi için [Sağlıkta yapay zeka: bugün neler yapılıyor](/rehber/saglikta-yapay-zeka-bugun-neler-yapiliyor/) rehberine, görüntüleme tarafı için [tıbbi görüntülemede yapay zeka](/rehber/tibbi-goruntulemede-yapay-zeka/) rehberine bakabilirsiniz. Kendi sağlık sorularınızda yapay zeka asistanlarının sınırlarını anlamak için [sağlık sorularında yapay zeka kullanımı](/rehber/saglik-sorularinda-yapay-zeka-kullanimi/) yazısı yararlı olur. Türkiye'deki tabloya [Türkiye'de sağlıkta yapay zeka](/rehber/turkiyede-saglikta-yapay-zeka/) rehberinden ve diğer güncel haberlere [sağlık sektörü sayfamızdan](/sektor/saglik/) ulaşabilirsiniz.
