---
title: "Görüntü işleme ile kalite kontrol: nasıl çalışır, nereden başlanır?"
description: "Kamera ve derin öğrenme modeliyle hata tespiti nasıl çalışır? Veri toplama ve etiketleme, hazır platform ile özel geliştirme seçimi, başarı ölçütleri ve küçük bir pilotla başlama adımları."
date: 2026-11-20
summary:
  - "Sistem, hat üzerindeki kameradan aldığı görüntüyü eğitilmiş bir modelle değerlendirip ürünü uygun ya da hatalı olarak ayırır."
  - "Başarı büyük ölçüde ışık ve kamera düzenine ile iyi etiketlenmiş, hatanın her türünü kapsayan örneklere bağlıdır."
  - "En güvenli başlangıç, tek bir hata türü ve tek bir istasyonla yapılan, ölçütleri baştan belirlenmiş küçük bir pilottur."
level: Orta
topic: Teknik
terms: [bilgisayarli-goru, derin-ogrenme, egitim-verisi, denetimli-ogrenme, makine-ogrenmesi]
sector: sanayi
faq:
  - q: "Görüntü işleme ile kalite kontrol için çok sayıda hatalı ürün görüntüsü gerekir mi?"
    a: "Hatalı örnekler genellikle az bulunduğu için veri toplamak en zor adımlardan biridir. Başlangıçta sağlam ürün görüntülerini ve ellerindeki hata örneklerini toplayın, hata türlerini listeleyin ve tedarikçinizle hangi yöntemin gerektiğini konuşun."
  - q: "Hazır platform mu, özel geliştirme mi tercih edilmeli?"
    a: "Ürününüz ve hatalarınız standart kalıplara uyuyorsa hazır platform hızlı başlangıç sağlayabilir; hatalar çok özgünse özel geliştirme gerekebilir. Karar vermeden önce aynı ürünle yapılmış bir deneme çalışması isteyin."
  - q: "Sistemin başarılı olup olmadığı nasıl anlaşılır?"
    a: "Kaçırılan hataya ve gereksiz yere reddedilen sağlam ürüne ayrı ayrı bakın; tek bir doğruluk oranı yanıltıcı olabilir. Ölçümü, insan kontrolcünün sonuçlarıyla aynı örnekler üzerinde karşılaştırarak yapın."
sources:
  - title: "Springer: A systematic review of deep learning based machine vision for quality control in industry 4.0"
    url: "https://link.springer.com/article/10.1007/s44245-026-00320-w"
  - title: "Roboflow: Cognex vs Keyence: Which Vision System to Buy in 2026"
    url: "https://roboflow.com/blog/cognex-vs-keyence"
  - title: "AGMIS: AI Quality Control Tools: Custom Build vs. Off-the-Shelf Platforms"
    url: "https://agmis.com/ai-quality-control-tools-custom-build-vs-off-the-shelf-platforms/"
---

Üretim hattında bir ürünün çizik, çatlak, eksik parça ya da yanlış montaj gibi kusurlarını gözle ayıklamak yorucudur ve kişiden kişiye değişebilir. Kamera ile yapay zeka modelini birleştiren görüntü işleme sistemleri bu işi otomatikleştirmeyi hedefler. Bu rehber sistemin temel mantığını, veri hazırlığını, seçenekleri ve ölçülmesi gereken noktaları anlatıyor. Üretimdeki yapay zeka uygulamalarının genel çerçevesi için [Üretimde yapay zeka](/rehber/uretimde-yapay-zeka/) rehberine de bakabilirsiniz.

## Temel fikir: kamera görüntüyü alır, model karar verir

Sistem üç parçadan oluşur: ürünün görüntüsünü alan kamera ve aydınlatma, görüntüyü değerlendiren model, kararı hatta ileten bir bağlantı. Model ürünü uygun, hatalı ya da incelenmesi gereken olarak sınıflandırır; sonuç bir ayırma mekanizmasını tetikleyebilir ya da operatöre uyarı olarak gider. Derin öğrenme tabanlı makine görüşü, çeşitli üretim ortamlarında kontrol ve karar akışlarını kolaylaştıran temel bir unsur olarak öne çıkıyor; bu çerçeve, 29 Temmuz 2026 tarihli [Springer'daki sistematik derlemede](https://link.springer.com/article/10.1007/s44245-026-00320-w) ele alınıyor.

## Kural tabanlı sistemle öğrenen sistem arasındaki fark

Geleneksel makine görüşünde mühendis, her kusur türü için kuralları elle tanımlar: şu bölgede şu parlaklık aralığının dışına çıkarsa hatalıdır gibi. Bu alanda hizmet veren firmaların anlatımına göre bu yaklaşımın zayıf yanı, her kusur tipi için ayrı kural yazılması gerekmesi ve ürün değiştiğinde sistemin bozulabilmesidir. Öğrenen sistemlerde ise kural yazmak yerine etiketlenmiş örnekler verilir ve model ayırt edici özellikleri bu örneklerden çıkarır. Bu, firma beyanı niteliğinde bir karşılaştırmadır; kendi ürününüzde hangi yaklaşımın daha iyi çalıştığını deneme ile görmeniz gerekir.

Basit, sabit ve net tanımlı kontrollerde (bir parçanın var olup olmadığı, bir etiketin yerinde olup olmadığı gibi) kural tabanlı yöntem yeterli olabilir. Yüzey dokusu değişken, kusurları tarif etmesi güç ürünlerde öğrenen sistemler daha çok anlam taşır.

## Kamera, ışık ve hat düzeni model kadar önemlidir

Bir modelin görmediği şeyi tanıması beklenemez. Kusurun kamerada net görünmesi için ışığın yönü, parlaması, ürünün konumu ve hat hızı birlikte düşünülmelidir. Aynı çizik, yanlış ışıkta tamamen kaybolabilir. Bu yüzden proje, model seçmeden önce şu sorularla başlamalıdır:

- Hangi kusuru yakalamak istiyoruz ve insan gözü bunu hangi koşulda görüyor?
- Ürün her seferinde aynı konumda ve aynı yüzeyiyle mi kameraya geliyor?
- Hat hızı, kameranın görüntü alıp sonucu üretmesi için yeterli zaman bırakıyor mu?
- Fabrikadaki ışık, toz, titreşim ve sıcaklık koşulları sabit mi?

Görüntü kalitesi düşükse veri ne kadar çok olursa olsun sonuç iyileşmez. Önce kamera düzenini sabitleyin, sonra veri toplayın.

## Veri toplama ve etiketleme

Öğrenen sistemlerde modelin kalitesini belirleyen şey eğitim verisidir (egitim verisi). Süreç genellikle şöyle ilerler:

1. **Toplama:** Gerçek hat koşullarında, farklı vardiya, parti ve ışık durumlarını kapsayan görüntüler toplanır.
2. **Etiketleme:** Kalite uzmanları görüntülerde kusurun türünü ve gerekirse yerini işaretler. Bu, denetimli öğrenmenin temelidir.
3. **Tutarlılık kontrolü:** İki uzman aynı görüntüye farklı etiket veriyorsa model de belirsiz öğrenir. Neyin hata sayılacağı yazılı bir kılavuzda netleştirilmelidir.
4. **Test ayrımı:** Görüntülerin bir kısmı eğitimde kullanılmaz; modelin daha önce görmediği örneklerde nasıl davrandığını ölçmek için ayrılır.

En sık karşılaşılan sorun, hatalı ürünün az bulunmasıdır. Sağlam örnekler bol, kusurlu örnekler azdır ve nadir hata türleri modelin kaçırdığı yerler olur. Bu durumda yalnızca sağlam ürünleri öğrenip sapmaları arayan yöntemler de kullanılabilir; ancak hangi yöntemin sizin durumunuza uyduğunu tedarikçiyle birlikte test ederek belirleyin. Etiketleme işi için kalite ekibinizin zamanını planlayın; bu emek çoğu zaman projenin gizli kalemidir.

## Hazır platform mu, özel geliştirme mi?

İki ana yol var. Hazır platformlar, kamera, yazılım ve arayüzü paket olarak sunar; kurulum genellikle daha hızlıdır ve eğitim ekibiniz için daha az yazılım bilgisi gerekir. Özel geliştirme ise yalnızca sizin ürününüz ve hatalarınız için model kurmayı içerir; esneklik sağlar ama daha fazla mühendislik ve bakım ister. Seçenekleri karşılaştıran okumalar için [Cognex ile Keyence'i ele alan Roboflow yazısına](https://roboflow.com/blog/cognex-vs-keyence) ve [özel geliştirme ile hazır platformları karşılaştıran AGMIS yazısına](https://agmis.com/ai-quality-control-tools-custom-build-vs-off-the-shelf-platforms/) göz atabilirsiniz. Bunlar satıcı veya sektör yayınlarıdır; karar için kendi ürününüzle yapılacak denemeyi esas alın.

Tedarikçi değerlendirirken şunları isteyin: benzer üründe yapılmış bir deneme, modelin yeni ürün ya da yeni hata türü eklenince nasıl güncellendiği, verinin nerede saklandığı ve mevcut hat otomasyonuyla nasıl bağlandığı.

## Maliyet ve süre konusunda gerçekçi beklenti

Maliyet ve kurulum süresi için burada tek bir rakam vermiyoruz. Bu değerler kamera sayısı, aydınlatma, hat hızı, entegrasyon ve etiketleme emeğine göre ciddi biçimde değişiyor ve yaygın rakamların çoğu satıcı tanıtımlarından geliyor. Bütçeyi şu kalemlere ayırarak teklif isteyin:

- Donanım: kamera, lens, aydınlatma, bilgisayar ve montaj düzeneği.
- Yazılım: lisans ya da özel geliştirme bedeli.
- Veri hazırlığı: toplama ve etiketleme için ayrılacak iç ekip zamanı.
- Entegrasyon: hat kontrolü ve fabrika sistemleriyle bağlantı.
- İşletme: modelin zamanla güncellenmesi ve bakımı.

Farklı tedarikçilerden aynı kapsam üzerinden teklif alın, kapsam farklıysa teklifleri karşılaştırmayın.

## Başarı nasıl ölçülür?

Tek bir doğruluk oranına bakmak yanıltıcıdır. Çok sağlam ürün içeren bir hatta her şeye uygun diyen bir sistem bile yüksek doğruluk gösterebilir. Bunun yerine iki hata türünü ayrı izleyin:

- **Kaçırılan hata:** Kusurlu ürünün geçmesi. Müşteriye ulaşan hatalı ürün demektir.
- **Yanlış alarm:** Sağlam ürünün reddedilmesi. Fire ve gereksiz yeniden kontrol demektir.

İkisi arasında bir denge vardır; eşiği sıkılaştırırsanız kaçırılan hata azalır, yanlış alarm artar. Hangi dengenin kabul edilebilir olduğuna kalite ve üretim ekibi birlikte karar vermelidir. Ölçümü, modelin hiç görmediği ve insan kontrolcünün de değerlendirdiği aynı örnekler üzerinde yapın; böylece karşılaştırma adil olur. Gerçek hat koşullarında da bir süre izleme yaparak sonuçların laboratuvar denemesindeki gibi kalıp kalmadığına bakın.

## Nereden başlanır: küçük pilot, net hedef

İlk adım için pratik bir yol:

1. Tek bir ürün, tek bir istasyon ve en çok maliyete yol açan bir ya da iki hata türü seçin.
2. Mevcut kontrol yönteminin kaçırma ve fire düzeyini kayda alın; karşılaştırma ölçütü bu olacak.
3. Kamera ve ışık düzenini sabitleyip gerçek hat görüntüsü toplayın.
4. Etiketleme kılavuzunu yazın ve kalite ekibinin tutarlı etiketlemesini sağlayın.
5. Pilotu başlamadan önce kabul ölçütlerini ve karar tarihini belirleyin.
6. Sonuçları operatörlerle paylaşın; sistemin kararlarına itiraz edebilecekleri bir geri bildirim yolu bırakın.

Sınırları da baştan bilmek gerekir: model eğitimde görmediği yeni bir hata türünü tanımayabilir, ürün ya da malzeme değişince yeniden eğitim gerekebilir ve sistem sürekli bakım ister. Görüntü işleme insan kalite uzmanının yerine geçmekten çok, tekrarlayan kontrolü hızlandıran ve kayıt tutan bir araç olarak düşünülmelidir. Kestirimci bakım gibi komşu uygulamalar için [Kestirimci bakım nedir?](/rehber/kestirimci-bakim-nedir/), Türkiye'deki tabloya dair genel bilgi için [Türkiye'de sanayide yapay zeka](/rehber/turkiyede-sanayide-yapay-zeka/) rehberine bakabilirsiniz. Robotlarla birleşen uygulamalar için [Fabrikalarda robotlar ve yapay zeka](/rehber/fabrikalarda-robotlar-ve-yapay-zeka/) yazısı, bölümün genel sayfası için ise [Sanayide yapay zeka](/sektor/sanayi/) sayfası yardımcı olur.
