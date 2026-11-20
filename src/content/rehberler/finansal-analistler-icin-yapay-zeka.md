---
title: "Finansal analistler için yapay zeka: rapor analizi, Excel ve doğruluk kontrolü"
description: "Bilanço ve kazanç çağrısı analizinde, Excel modellemesinde ve veri platformlarında yapay zekadan nasıl yararlanılır? Halüsinasyon ve hesaplama hatası riskine karşı pratik bir kontrol yöntemi."
date: 2026-11-20
summary:
  - "Yapay zeka rapor okuma ve özetleme işini hızlandırır; ancak KAP gibi birincil kaynağın yerini tutmaz."
  - "Araştırmalar sayısal hesaplamalarda ve ince ayarlı modellerde ciddi halüsinasyon riski gösteriyor."
  - "En güvenli yöntem, modelin her rakamını kaynak belgeyle ve kendi Excel formülünüzle yeniden doğrulamaktır."
level: Orta
topic: İş ve kariyer
terms: [halusinasyon, buyuk-dil-modeli, ince-ayar, mcp, benchmark]
sector: finans
faq:
  - q: "Yapay zeka bilanço analizinde analistin yerini alır mı?"
    a: "Hayır, pratikte yardımcı araç olarak işe yarıyor. Rakamların kaynağı, hesabın doğruluğu ve yorumun sorumluluğu analistte kalıyor."
  - q: "Kazanç çağrısı özetlerine güvenebilir miyim?"
    a: "Özeti hızlı bir ilk okuma olarak kullanabilirsiniz; ancak alıntıları ve rakamları transkriptten veya bildirimden kontrol etmeden raporunuza almayın."
  - q: "Model hesapları kendi başına doğru yapıyor mu?"
    a: "Güvenilir değil. Araştırmalar çok değişkenli hesaplamalarda doğruluğun ciddi biçimde düştüğünü ve modellerin kendi hatalarını iyi yakalayamadığını gösteriyor."
sources:
  - title: "Borsacoo: PAPIL yapay zeka finansal raporları ve analizi"
    url: "https://borsacoo.com/firma/PAPIL"
  - title: "AlphaSense: Top AI Tools for Earnings Analysis"
    url: "https://www.alpha-sense.com/resources/product-articles/ai-tools-earnings-analysis/"
  - title: "ScienceDirect: When financial fine-tuning fails"
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0925231226024094"
  - title: "FactSet: MCP sunucusu duyurusu"
    url: "https://investor.factset.com/news-releases/news-release-details/factset-meets-demand-ai-ready-data-first-announce-mcp-sans"
  - title: "FactSet ürün blogu: Gemini Enterprise entegrasyonu"
    url: "https://www.factset.com/product-blog/launches/factsets-ai-ready-mcp-accelerates-ai-transformation-with-gemini-enterprise-for-financial-services"
  - title: "arXiv: FAITH"
    url: "https://arxiv.org/pdf/2508.05201"
  - title: "arXiv: FinVerBench"
    url: "https://arxiv.org/pdf/2605.29586"
---

Finansal analistin gününün büyük kısmı okumakla geçer: bilançolar, faaliyet raporları, dipnotlar, kazanç çağrısı transkriptleri. Yapay zeka araçları bu okuma yükünü azaltmayı vaat ediyor. Ancak finansta küçük bir sayısal hata bile karara ve uyuma yansıyabilir; bu yüzden asıl soru aracın neler yapabildiği kadar, çıktısını nasıl doğrulayacağınızdır. Bu rehber bilanço analizi, kazanç çağrısı özetleme, Excel ve veri platformları için pratik bir çerçeve sunuyor. Yatırım tavsiyesi içermez.

## Yapay zekayı nereye koymalısınız

Büyük dil modellerini (LLM) iki ayrı iş için düşünmek faydalı olur: okuma ve hesaplama. Uzun bir metni toparlamak, bölümleri karşılaştırmak, sorulara başlangıç noktası üretmek okuma tarafıdır. Oran hesaplamak, dönemler arası değişim bulmak, tablodan doğru satırı çekmek hesaplama tarafıdır. Aşağıda göreceğiniz gibi riskler ikinci grupta yoğunlaşıyor. Bu yüzden yapay zekayı ilk taslağı hazırlayan bir yardımcı, kendi modelinizi ve sonuçlarınızı ise doğrulama aşaması olarak ele alın.

## Bilanço ve faaliyet raporu analizi

Türkiye'de KAP bildirimlerinden otomatik özet ve puan üreten ticari siteler var. Bunlar nakit, borç ve kârlılık durumunu etiketlerle gösterip iki dönemi karşılaştırıyor. Hızlı tarama için kullanışlıdır; ancak birincil kaynak değildir, doğrulama için KAP'ın kendi bildirimi esas alınmalıdır.

Risk somut biçimde görülebiliyor. Bu tür bir sitede yer alan [PAPIL sayfasında](https://borsacoo.com/firma/PAPIL) brüt kâr/zarar 2026/3 döneminde 1.315.536 TL, 2026/6 döneminde ise -21.123.347 TL görünüyor; buna rağmen değişim sütununda yüzde 0 yazıyor. Böyle bir tutarsızlık, otomatik özetlerde tablo okumasının hatalı çıkabildiğini gösteriyor.

Uzun raporlarda şu akışı deneyin:

- Raporu bölüm bölüm verin ve her bölüm için ilgili sayfa numarasını isteyin.
- Modelden rakamla birlikte ilgili tablo veya dipnot referansını yazmasını isteyin.
- Referansı kendiniz açıp kontrol edin; bulamadığınız rakamı kullanmayın.

Uzun belgelerle çalışırken [PDF ve uzun belge özetleme rehberimiz](/rehber/yapay-zeka-ile-pdf-ve-uzun-belge-ozetleme/) pratik istem örnekleri içeriyor.

## Kazanç çağrısı özetleme

Kazanç çağrıları özetleme araçlarının en yaygın kullanım alanlarından biri. Örneğin AlphaSense'in [ürün sayfasına göre](https://www.alpha-sense.com/resources/product-articles/ai-tools-earnings-analysis/) her kazanç transkriptinde yapay zeka tarafından üretilen bir Smart Summary bulunuyor. Bu, satıcının kendi anlatımıdır ve burada bağımsız bir test sonucu olarak sunulmuyor.

Özetleme için özel olarak ince ayar yapılan modellerde de dikkatli olmak gerekiyor. [Bir akademik çalışma](https://www.sciencedirect.com/science/article/abs/pii/S0925231226024094), finansal özetleme için ince ayar yapılan modellerde temel modelin yüzde 5,4 düzeyindeki açık halüsinasyon oranının, FT-A adlı ince ayarlı modelde yüzde 82,5'e çıktığını bildiriyor. Makalenin özet ve bulgular bölümlerinde diğer ince ayarlı modele ait rakamlar birbirini tutmadığı için onları burada kullanmıyoruz. Çıkarılacak ders net: finans alanına özel eğitilmiş olmak, doğruluk garantisi anlamına gelmiyor.

Özeti kullanırken şunları yapın:

- Yönetimin verdiği rakamsal öngörüleri (büyüme, marj, yatırım harcaması) özetten değil transkriptten alın.
- Tırnak içinde verilen her ifadeyi transkriptte arayıp doğrulayın.
- Özetin tonla ilgili yorumlarını (temkinli, iyimser) kendi okumanızla karşılaştırın.

## Excel ve modelleme

Modelleme tarafında yapay zeka en çok formül yazma, veri temizleme, bir hesabın mantığını açıklama ve model denetimi için işe yarar. Burada altın kural, hesabın Excel'de görünür kalmasıdır: yapay zekadan formül ve yapı önerisi alın, ama sonucu hücrelerde izlenebilir formüllerle kurun. Sohbet penceresinde üretilmiş bir sayıyı doğrudan modele yapıştırmak, denetim izini yok eder.

İş akışı için öneriler:

- Modelden yalnızca formül ve açıklama isteyin; sonucu kendi verinizde çalıştırın.
- Varsayımları (büyüme, iskonto oranı, vergi) ayrı bir sayfada tutun ve yapay zekanın bunları sessizce değiştirmediğinden emin olun.
- Toplamları, bilanço denkliğini ve işaret hatalarını basit kontrol formülleriyle sınayın.
- Araç ve plan fiyatları ile Excel içi özelliklerin kapsamı sık değişiyor; kullanmadan önce üreticinin resmi sayfasından kontrol edin.

Excel'de yapay zeka kullanımına dair ayrıntılı örnekler için [Excel ve veri analizi rehberimize](/rehber/yapay-zeka-ile-excel-ve-veri-analizi/) bakabilirsiniz.

## Finansal veri platformlarının yapay zeka özellikleri

Veri sağlayıcılar yapay zekayı kendi platformlarına taşıyor. FactSet, 30 Mart 2026'da FactSet AI for Banking'in alfa lansmanını duyurdu. Basın metnine göre çözüm FactSet Workstation üzerinden, Microsoft Office entegrasyonuyla ve sanal özel bulut ya da tek kiracılı kurulum olarak sunuluyor. Özellik seçili müşterilere alfa aşamasında açıldı ve 2026 boyunca daha geniş yayılım planlanıyor. Aynı duyuruda FactSet'in Finster AI'a yatırım yaptığı belirtiliyor; tutar açıklanmamış.

Veri erişimi tarafında FactSet, 2025'te üretim sınıfı bir model bağlam protokolü (MCP) sunucusu duyurduğunu [bildiriyor](https://investor.factset.com/news-releases/news-release-details/factset-meets-demand-ai-ready-data-first-announce-mcp-sans). Bu sunucu, yapay zeka sistemlerinin verilere doğrudan erişmesini sağlıyor. Şirketin bu konudaki öncülük iddiası kendi ifadesidir. [Ürün blogunda](https://www.factset.com/product-blog/launches/factsets-ai-ready-mcp-accelerates-ai-transformation-with-gemini-enterprise-for-financial-services) ise verilerin Google Cloud'un Gemini Enterprise for Financial Services ortamına yerel olarak entegre edildiği yazılıyor.

Platform seçerken pratik sorular sorun: Kaynak veriye tek tıkla dönebiliyor muyum? Çıktıda rakamın kaynağı gösteriliyor mu? Verilerim hangi ortamda işleniyor? Türkiye'deki kullanım koşulları, Türkçe destek ve fiyat konularını satıcıdan yazılı olarak öğrenmeniz gerekir.

## Doğruluk kontrolü ve hesaplama hataları

Araştırmalar riskin boyutunu gösteriyor. FAITH adlı çalışma, finansal tablo verisinden doğru çıkarım ve hesaplamanın önemini vurguluyor; küçük sayısal hataların bile karar almayı ve uyumu bozabileceğini söylüyor. Aynı [makale](https://arxiv.org/pdf/2508.05201), karmaşık finansal akıl yürütmede yüzde 10-20 düzeyindeki halüsinasyon oranlarının ölçeklendiğinde büyük etki yaratabileceğini belirtiyor.

Başka bir [arXiv makalesi](https://arxiv.org/pdf/2605.29586) önceki bulguları özetlerken, FAITH'e atıfla en iyi modellerin basit aramalarda yüzde 95,6 doğrulukla çalıştığını, çok değişkenli hesaplamalarda ise doğruluğun neredeyse yüzde 0'a düştüğünü aktarıyor. Bu, makalenin kendi deneyi değil, aktarılan bir bulgu. Aynı makaleye göre modeller kendi akıl yürütme hatalarını da güvenilir biçimde tespit edemiyor; yani modele cevabını kontrol ettirmek yeterli bir güvence sayılmaz.

Model seçimi için bir referans noktası: [FinTrust benchmark'ına](https://arxiv.org/pdf/2510.15232) göre GPT-4.1 mini en çok kendinden emin olan model, ama halüsinasyon oranı da daha yüksek. GPT-4.1, GPT-4.1 mini ve o4-mini ise sayısal doğrulukta öne çıkıyor. Kendinden emin bir üslup doğruluk anlamına gelmediği için, tonu değil kaynağı ölçüt alın.

## Kontrol listesi: nasıl başlamalı

Küçük ve düşük riskli bir işle başlayın: tek bir şirketin geçmiş dönem raporlarından özet tablo çıkarmak gibi. Sonra şu adımları standart hale getirin:

1. **Kaynağı sabitleyin.** Modele yalnızca KAP bildirimi, faaliyet raporu veya transkript gibi belgeleri verin ve yanıtın bu belgelerle sınırlı kalmasını isteyin.
2. **Rakam başına referans isteyin.** Sayfa, tablo ve satır bilgisi olmayan rakamı kullanmayın.
3. **Hesabı ayırın.** Oran ve değişim hesaplarını Excel formülüyle yeniden yapın; modelin hesabını yalnızca karşılaştırma için kullanın.
4. **Tutarlılık testi yapın.** Toplamlar, işaretler, birimler (bin TL, milyon TL) ve dönem etiketleri üzerinde hızlı bir kontrol yapın.
5. **Kaydı tutun.** Hangi istemle, hangi araçla, hangi belgeden çıktı aldığınızı not edin.

Kurum içinde kullanıyorsanız [şirket içi yapay zeka politikası rehberimizdeki](/rehber/sirket-ici-yapay-zeka-politikasi/) maddeleri ve müşteri ya da şirket verisini hangi araca yüklediğinizi gözden geçirin. Sektörün düzenleyici çerçevesi için [finans sektöründe yapay zeka düzenlemeleri rehberine](/rehber/finans-sektorunde-yapay-zeka-duzenlemeleri/) bakabilirsiniz.

## Sınırlar ve sorumluluk

Yapay zeka çıktıları analiz yerine geçmez, yatırım tavsiyesi de değildir. Bir rapora imza atan sizsiniz; model hatası sorumluluğu ortadan kaldırmaz. Yatırım kararlarında araçların rolüne ilişkin ayrıntı için [yatırım yaparken yapay zeka kullanmak](/rehber/yatirim-yaparken-yapay-zeka-kullanmak/) yazımıza göz atın; yatırım ve lisans konularında yetkili bir uzmana danışın. Pratik özet: yapay zeka okumayı hızlandırır, doğrulama ise sizde kalır.
