---
title: "Yapay zeka ile pazar araştırması: sentetik kullanıcılar gerçek tüketicinin yerini tutuyor mu?"
description: "Sentetik kullanıcı ve persona yaklaşımı, Pew ve NIM karşılaştırmaları ışığında nerede işe yarıyor, nerede yanıltıyor? Anket, yorum analizi ve sosyal dinleme için pratik bir yol haritası."
date: 2026-11-20
summary:
  - "Pew'in testinde yapay zeka ikizlerinin yanıtları, gerçek katılımcılardan ortalama 12 puan farklı çıktı; NIM'de marka seçimlerinde eşleşme ortalama yüzde 79 oldu."
  - "Sentetik yanıtlar olumlu tutumları abartıyor ve çeşitlilikten yoksun kalıyor; bu yüzden fiyat ve satın alma kararlarında gerçek veri gerekiyor."
  - "Açık uçlu yorumları kodlamak gibi metin analizi işleri daha olgun bir kullanım alanı, ama insan denetimi şart."
level: Orta
topic: İş ve kariyer
terms: [sentetik-veri, uretken-yapay-zeka, buyuk-dil-modeli, halusinasyon, yapay-zeka-onyargisi]
sector: pazarlama
faq:
  - q: "Sentetik kullanıcılar gerçek anket katılımcılarının yerini alabilir mi?"
    a: "Mevcut kanıtlar buna işaret etmiyor. Pew, yapay zeka ile yapılan anketlerin titiz insan anketlerinin yerini tutmadığı sonucuna varıyor; sentetik yanıtlar ancak ön test ve fikir üretme gibi düşük riskli işlerde destek olarak makul görülüyor."
  - q: "Açık uçlu anket yanıtlarını yapay zeka ile analiz etmek güvenilir mi?"
    a: "Sınıflandırmada yüksek doğruluk bildiren çalışmalar var, ancak uzun, belirsiz yanıtlarda ve nadir kategorilerde doğruluk düşüyor. Çıktıyı bir insanın örneklemle kontrol etmesi gerekir."
  - q: "Sentetik persona araçlarını Türkçe araştırmada kullanabilir miyim?"
    a: "Denemek mümkün, ancak Pew ve NIM çalışmaları ABD ve Almanya örneklemlerine dayanıyor. Türkiye örneklemi ve Türkçe yanıtlar üzerinde bağımsız bir karşılaştırma bulunmadığı için sonuçları gerçek veriyle sınamanız gerekir."
sources:
  - title: "Pew Research Center: Can AI Stand In for Human Survey-Takers?"
    url: "https://www.pewresearch.org/wp-content/uploads/sites/20/2026/09/pl_2026.09.30_silicon-samples_report.pdf"
  - title: "Pew Research Center: How AI survey respondents express certainty and factual knowledge"
    url: "https://www.pewresearch.org/data-labs/2026/09/30/how-synthetic-respondents-express-certainty-and-factual-knowledge/"
  - title: "AI Weekly: Pew Finds AI Survey Stand-Ins Miss Humans by 12 Points"
    url: "https://aiweekly.co/alerts/pew-finds-ai-survey-stand-ins-miss-humans-by-12-points"
  - title: "NIM: Leaving Insight to Digital Twins?"
    url: "https://www.nim.org/en/publications/detail/leaving-insight-to-digital-twins"
  - title: "MediaCat: Markalar sentetik tüketici verileri ve yapay zekâ ikizlerini nasıl kullanıyor?"
    url: "https://mediacat.com/markalar-sentetik-tuketici-verileri-ve-yapay-zeka-ikizlerini-nasil-kullaniyor/"
  - title: "Chris Soria: LLM'lerle açık uçlu anket verisi kategorizasyonu"
    url: "https://christophersoria.com/talks/2026-05-13-talk-14"
  - title: "PubMed Central: LLM'ler ile küresel sağlık anketlerinde açık metin analizi"
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12406778/"
  - title: "Pulselake: Can AI personas replace survey panels?"
    url: "https://www.pulselake.co/blog/can-ai-personas-replace-survey-panels-what-research-means-for-buyers"
---

Pazar araştırmasında yeni bir vaat dolaşıyor: Gerçek katılımcı aramak yerine yapay zekaya "tüketici gibi" yanıt verdirmek. Hızlı ve ucuz görünen bu yaklaşım, sentetik kullanıcı veya sentetik yanıtlayıcı adıyla ticari ürünlere dönüşüyor. Peki bağımsız karşılaştırmalar ne söylüyor? Bu rehber, sentetik yanıtların gerçek tüketici verisiyle nasıl örtüştüğünü, anket ve yorum analizinde yapay zekanın nerede daha sağlam durduğunu ve nasıl temkinli başlanacağını anlatıyor. Genel çerçeve için [yapay zeka ile pazar araştırması](/rehber/yapay-zeka-ile-pazar-arastirmasi/) rehberine de bakabilirsiniz.

## Sentetik kullanıcı ne demek?

Sentetik kullanıcı, bir büyük dil modeline belirli bir kişi profili (persona) tanımlatıp ona anket sorusu veya görüşme sorusu yönelterek elde edilen yapay yanıtlayıcıdır. Kimi araçlar kurgusal profiller üretir, kimileri gerçek bir panelden yola çıkıp o kişilerin "dijital ikizlerini" kurar. Bu fark önemli: ikizin dayandığı gerçek veri ne kadar zenginse, sonuç da o ölçüde sınanabilir olur. Yine de her iki durumda da yanıtı üreten şey bir model; gerçek bir tüketicinin deneyimi veya niyeti değil.

## Pew testi: ikizler insanlardan ne kadar farklı?

Bugüne kadarki en sıkı karşılaştırmalardan biri Pew Research Center'dan geldi. Pew, kendi panelindeki gerçek kişilerin her biri için bir yapay zeka ikizi oluşturdu ve bu ikizlerin, gerçek katılımcının karşılaştığı anket programlamasını birebir yaşayarak bazı anket dalgalarını yeniden yanıtlamasını sağladı ([Pew Research Center raporu](https://www.pewresearch.org/wp-content/uploads/sites/20/2026/09/pl_2026.09.30_silicon-samples_report.pdf)). İkincil bir kaynak, yaklaşık 300 soruda ikizlerin yanıtlarının insanlardan ortalama 12 puan farklı olduğunu aktarıyor ([AI Weekly](https://aiweekly.co/alerts/pew-finds-ai-survey-stand-ins-miss-humans-by-12-points)). Bu rakamı ana raporda doğrudan göremedik; o yüzden yön gösterici bir bilgi olarak okuyun.

Pew'in kesinlik analizi ilginç bir ayrıntı veriyor: Sentetik yanıtlayıcılar olgusal soruların büyük çoğunluğunu doğru yanıtladı, doğruluk yaklaşık yüzde 80 oldu. Ancak insanlar "bilmiyorum" seçeneğini yüzde 16 oranında işaretlerken, sentetik yanıtlayıcılarda bu oran yüzde 4'te kaldı ([Pew Research Center](https://www.pewresearch.org/data-labs/2026/09/30/how-synthetic-respondents-express-certainty-and-factual-knowledge/)). Yani model, bilmediği yerde de kendinden emin yanıt vermeye eğilimli. Pew'in genel sonucu, yapay zeka ile yapılan anketlerin bu aşamada titiz insan anketlerinin yerini tutmadığı yönünde.

## NIM bulguları: marka seçiminde eşleşme var, ama çeşitlilik yok

Nuremberg Institute for Market Decisions'ın (NIM) 2026 çalışması pazarlamaya daha yakın bir soru soruyor. Marka seçiminde sentetik katılımcılar, gerçek katılımcıların seçimleriyle ortalama yüzde 79 oranında eşleşti. Aynı çalışma iki sorunun altını çiziyor: Sentetik veri olumlu tutumları sistematik olarak abartıyor, özellikle bilinen markalarda; ayrıca yanıtlar arasında gerçek katılımcılardan daha az çeşitlilik var. Yedi puanlık ölçekte ortalama sapma 1,2 puan ([NIM](https://www.nim.org/en/publications/detail/leaving-insight-to-digital-twins)).

Bunun pratik anlamı şu: Ortalama bir eğilimi kabaca yakalayan bir araç, segmentler arasındaki ince farkları ya da marka sağlığı ölçümünü doğru vermeyebilir. Olumlu tutumu şişiren bir veri, kampanya öncesi "herkes bu fikri seviyor" yanılsaması yaratabilir. Satıcı rehberlerinde dolaşan çok yüksek korelasyon rakamlarının ise bağımsız çalışma olarak doğrulanmış olduğunu söyleyemeyiz; bu iddiaları kendi verinizle sınamadan kabul etmeyin.

## Sektörden uyarılar

Türkçe bir haberde aktarıldığına göre, İngiltere merkezli Pazar Araştırmaları Derneği'nin (MRS) konferansında sentetik tüketicilere soru sormanın, odak gruplarına ve nitel araştırmaya sürekli dönme ihtiyacını azalttığı vurgulandı. Aynı haberde Unilever'in yapay zekanın kültürel nüansları anlamakta yetersiz kaldığını, yüzeysel işaretleri yanlış yorumlayıp uydurma bilgi üretebildiğini söylediği yazıyor. Sky'ın kampanya içgörüleri başkanı da ilk yanıtla yetinilmemesini, soruların kriter ve bağlam değiştirilerek tekrar sorulmasını öneriyor ([MediaCat](https://mediacat.com/markalar-sentetik-tuketici-verileri-ve-yapay-zeka-ikizlerini-nasil-kullaniyor/)). Bu, [halüsinasyon](/rehber/yapay-zeka-ile-pazar-arastirmasi/) riskine karşı basit ama etkili bir kontrol: aynı soruyu farklı biçimlerde sorup yanıtların tutarlı olup olmadığına bakın.

## Açık uçlu yanıt, yorum ve sosyal dinleme

Sentetik yanıtlayıcılar tartışmalıysa, mevcut gerçek verinin analizi daha sağlam bir zemin sunuyor. Burada yapay zeka veri üretmiyor, elinizdeki yanıtları sınıflandırıyor.

Bir araştırmacının sunumunda sekiz büyük dil modeli, 3.208 yanıt üzerinde insan uzlaşısına karşı yüzde 82-97 doğruluk gösterdi. Ancak modellerin kendi aralarındaki tutarlılık (Krippendorff alfa) 0,58-0,59'da kaldı; insanlarda bu değer 0,77'ydi. Doğruluk, uzun ve belirsiz yanıtlarda ve nadir kategorilerde düştü ([Chris Soria](https://christophersoria.com/talks/2026-05-13-talk-14)). Bu bir konuşma sayfası; hakemli yayın olmadığını akılda tutun. Küresel sağlık anketlerinde yapılan bir başka çalışma ise yalnızca 20-100 örnekle büyük dil modellerinin serbest metin yanıtlarını yüksek doğrulukla kategorize edebildiğini gösterdi ([PubMed Central](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12406778/)). İkisinin ortak mesajı, küçük bir elle kodlanmış örneğin iyi bir başlangıç ve kontrol noktası olduğu.

Sosyal medya yorumlarını saniyeler içinde kategorize edip duygu analizine sokan araçlar da var; ancak bu iddia araç satıcılarının tanıtımlarına dayanıyor ve bağımsız doğrulama yok. Türkçe duygu analizinin doğruluğuna ilişkin bağımsız bir çalışma da bulamadık. Bu yüzden Türkçe yorumlarda araç çıktısını rastgele seçtiğiniz yüzlerce yorumda elle kontrol edin. Sahte veya manipüle edilmiş yorumları ayıklamak için [sahte yorum ve yapay zeka](/rehber/sahte-yorum-ve-yapay-zeka/) rehberi işinize yarar. Rakip analizi için de aynı ilke geçerli: yapay zekayı toplanmış rakip verisini özetlemek ve gruplamak için kullanın, rakip hakkında "bilgi üretmesini" beklemeyin.

## Nasıl başlanır?

Sentetik yanıtlar için düşük riskli kullanım alanları şunlar: anket ön testi (soru kalıbı, eksik seçenek ve yönlendirme hataları) ve görüşme rehberi hazırlamak. Fiyatlandırma ve ödeme istekliliği ölçümlerinde ise gerçek panel öneriliyor. Bu öneriler bir anket platformunun blogunda yer alıyor, yani satıcı bakışı taşıyor ([Pulselake](https://www.pulselake.co/blog/can-ai-personas-replace-survey-panels-what-research-means-for-buyers)); yine de Pew ve NIM bulgularıyla uyumlu.

Pratik bir sıra izleyebilirsiniz:

- **Önce kendi verinize bakın.** Elinizdeki açık uçlu yanıtları ve müşteri yorumlarını yapay zekayla kodlayın; 50-100 yanıtı elle kodlayıp sonuçla karşılaştırın. Tablo çalışmalarında [Excel ve veri analizi](/rehber/yapay-zeka-ile-excel-ve-veri-analizi/) rehberi yardımcı olur.
- **Sentetik yanıtı hipotez üretmek için kullanın.** Çıkan fikirleri "bulgu" değil, gerçek katılımcılarla sınanacak sorular olarak not edin.
- **Aynı soruyu birkaç kez ve farklı çerçevelerle sorun.** Yanıt değişiyorsa güveniniz de azalmalı.
- **Karar yüksek riskliyse gerçek veriye dönün.** Fiyat, ürün lansmanı veya bütçe ayrımı gibi kararlarda sentetik yanıt tek başına dayanak olmamalı.

## Sınırlar ve riskler

Bulguları toparlarsak sınırlar şöyle: Olumlu tutumlar abartılıyor, çeşitlilik düşüyor, "bilmiyorum" yerine kendinden emin yanıt geliyor ve kültürel nüans kaçabiliyor. Üstelik Pew ve NIM çalışmaları ABD ve Almanya örneklemlerine dayanıyor; Türkiye örneklemi ve Türkçe yanıtlar üzerinde bağımsız bir karşılaştırma bulamadık. Türkiye'de sentetik panel kullanan bir şirket veya bu uygulamaya özgü bir düzenleme de doğrulayamadık. Hangi verinin bir araca gönderilebileceği konusunda [yapay zeka ile kişiselleştirme ve KVKK](/rehber/yapay-zeka-ile-kisisellestirme-ve-kvkk/) rehberine göz atın.

Temkinli bir tutum için ek bir işaret var: Qualtrics'in sözü olarak bir blogda aktarılana göre sentetik veri insan araştırmasını destekliyor, yerini almıyor. Bu ifade birincil kaynaktan doğrulanmadı, ama bulguların yönüyle örtüşüyor. Sentetik yanıtlayıcıyı bir hız ve ilham aracı olarak görün; ölçüm yapan, karar dayanağı olan şey hâlâ gerçek insanlardan toplanan veri. Pazarlama ekibinde yapay zeka kullanımının geniş çerçevesi için [Pazarlamada yapay zeka](/sektor/pazarlama/) sayfasına bakabilirsiniz.
