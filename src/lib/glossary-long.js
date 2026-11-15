// Sözlük terim sayfaları (/sozluk/<terim>/) için ayrıntılı açıklamalar.
// how: nasıl çalışır · why: neden önemli · example: somut bir örnek. Kısa tanım src/lib/glossary.js içindedir.

export const LONG = {
  'acik-agirlikli-model': {
    how: "Bir dil modeli eğitildikten sonra öğrendiği her şey milyarlarca sayıdan (ağırlıktan) oluşan dosyalarda saklanır. Açık ağırlıklı modelde bu dosyalar herkese açık olarak yayımlanır; isteyen indirip kendi donanımında çalıştırabilir, ince ayar yapabilir. Modelin hangi veriyle ve nasıl eğitildiği ise çoğu zaman paylaşılmaz.",
    why: "Şirketler verilerini dışarı göndermeden modeli kendi sunucularında çalıştırabilir, maliyeti kontrol edebilir ve modeli kendi alanına uyarlayabilir. Kapalı modellere bağımlılığı azalttığı için yapay zeka rekabetinde önemli bir denge unsurudur.",
    example: "Meta'nın Llama, Mistral'ın ve DeepSeek'in birçok modeli açık ağırlıklı olarak yayımlanır.",
  },
  'acik-kaynak': {
    how: "Açık kaynak yazılımın kaynak kodu herkese açık bir depoda yayımlanır; lisansı, kodun nasıl kullanılabileceğini, değiştirilebileceğini ve dağıtılabileceğini belirler. Yapay zekada \"açık kaynak model\" ifadesi bazen yalnızca ağırlıkları açık modeller için de kullanılır; tam anlamıyla açık kaynak bir model, eğitim kodunu ve mümkünse verisini de paylaşır.",
    why: "Açık kaynak araçlar, yapay zekanın küçük şirketler, üniversiteler ve bireysel geliştiriciler tarafından da geliştirilebilmesini sağlar. Hataların ve güvenlik açıklarının daha çok göz tarafından incelenmesine de imkân tanır.",
    example: "Modelleri bilgisayarda çalıştırmaya yarayan llama.cpp ve model paylaşım platformu Hugging Face'teki kütüphaneler açık kaynaktır.",
  },
  'agi': {
    how: "Bugünkü yapay zeka sistemleri belirli görevlerde insan düzeyine ulaşabiliyor, ama yeni bir alana uyum sağlama, uzun vadeli planlama ve deneyimden sürekli öğrenme gibi yeteneklerde hâlâ sınırlı. Yapay genel zeka, bu yeteneklerin tamamını insan düzeyinde gösterebilen bir sistemi anlatır. Kesin ve herkesin kabul ettiği bir tanımı yoktur.",
    why: "OpenAI, Google DeepMind ve Anthropic gibi şirketler AGI'yi açıkça hedef olarak koyuyor. Ne zaman ulaşılacağı, ekonomik etkileri ve güvenlik riskleri; yatırım kararlarını ve düzenleme tartışmalarını doğrudan etkiliyor.",
    example: "Şirket yöneticilerinin \"AGI birkaç yıl içinde gelecek\" ya da \"henüz çok uzağız\" gibi açıklamaları sık sık haber olur.",
  },
  'akil-yurutme-modeli': {
    how: "Akıl yürütme modeli, nihai yanıtı yazmadan önce kendi içinde bir \"düşünme\" aşamasından geçer: problemi parçalara ayırır, ara adımları dener ve hatalarını düzeltir. Bu düşünme süreci de token harcadığı için yanıt daha geç gelir ve daha pahalıya mal olur. Birçok modelde düşünme miktarı ayarlanabilir.",
    why: "Matematik, programlama, bilimsel analiz ve çok adımlı ajan görevlerinde doğruluğu belirgin biçimde artırır. Basit sorularda ise gereksiz maliyet yaratabilir; bu yüzden işin türüne göre model seçmek önemlidir.",
    example: "Bir model \"düşük, orta, yüksek\" düşünme seviyeleri sunuyorsa, yüksek seviye daha uzun düşünüp zor sorularda daha iyi sonuç verir.",
  },
  'api': {
    how: "API, bir uygulamanın başka bir hizmete belirli kurallarla istek göndermesini ve yanıt almasını sağlar. Yapay zeka şirketleri modellerini API üzerinden sunar: geliştirici, istemini ve ayarlarını gönderir; model yanıtı geri döndürür. Ücret genellikle kullanılan token sayısına göre hesaplanır.",
    why: "Şirketlerin kendi modellerini eğitmeden, mevcut güçlü modelleri ürünlerine eklemesini sağlar. Müşteri hizmetleri botlarından belge analizine kadar çoğu yapay zeka uygulaması arka planda bir API kullanır.",
    example: "Bir e-ticaret sitesi, ürün açıklamalarını otomatik yazmak için bir dil modelinin API'sini kullanabilir.",
  },
  'baglam-penceresi': {
    how: "Dil modeli bir yanıt üretirken konuşmanın tamamını, eklenen belgeleri ve kendi talimatlarını aynı anda \"okur\". Bu toplam miktarın bir üst sınırı vardır; buna bağlam penceresi denir ve token cinsinden ölçülür. Sınır aşılırsa en eski kısımlar dikkate alınmaz ya da özetlenir.",
    why: "Uzun sözleşmeleri, kitapları veya büyük kod tabanlarını tek seferde analiz edebilmek için geniş bağlam penceresi gerekir. Ancak çok uzun bağlam hem maliyeti artırır hem de modelin bazı ayrıntıları gözden kaçırmasına yol açabilir.",
    example: "Bir milyon token'lık bağlam penceresi, yaklaşık birkaç kalın kitap uzunluğundaki metni tek seferde işleyebilir.",
  },
  'benchmark': {
    how: "Benchmark, modellere aynı soru ve görev setinin verildiği, yanıtların otomatik ya da insanlar tarafından puanlandığı standart bir testtir. Kodlama, matematik, genel bilgi, ajan görevleri gibi farklı alanlar için farklı benchmark'lar vardır. Sonuçlar genellikle yüzde ya da puan olarak verilir.",
    why: "Modelleri karşılaştırmanın en yaygın yolu olsa da sınırlıdır: modeller test sorularını eğitimde görmüş olabilir, testler gerçek işi tam yansıtmayabilir. Bu yüzden şirketlerin kendi açıkladığı sonuçlar bağımsız ölçümlerle birlikte okunmalıdır.",
    example: "Bir şirketin yeni modelinin bir kodlama testinde \"yüzde 57\" aldığını duyurması tipik bir benchmark haberidir.",
  },
  'buyuk-dil-modeli': {
    how: "Büyük dil modeli, internetteki ve kitaplardaki devasa miktarda metin üzerinde \"sıradaki kelimeyi tahmin etme\" görevine göre eğitilir. Bu süreçte dilin yapısını, bilgiyi ve akıl yürütme kalıplarını öğrenir. Ardından insan geri bildirimiyle ince ayar yapılarak soru yanıtlayan, talimat izleyen bir asistana dönüştürülür.",
    why: "Sohbet asistanları, çeviri, özetleme, kod yazma ve arama gibi pek çok ürünün temelini oluşturur. Hangi şirketin daha iyi model geliştirdiği, yapay zeka rekabetinin merkezindeki sorudur.",
    example: "ChatGPT'nin arkasında GPT modelleri, Claude'un arkasında Claude modelleri, Gemini uygulamasının arkasında Gemini modelleri vardır.",
  },
  'cihaz-ustu-yapay-zeka': {
    how: "Cihaz üstü yapay zekada model, internete bağlanmadan doğrudan telefonun, bilgisayarın veya aracın içindeki çipte çalışır. Bunun için daha küçük ve verimli modeller ile yapay zeka işlemlerine özel çipler (NPU) kullanılır.",
    why: "Veriler cihazdan çıkmadığı için gizlilik açısından avantajlıdır; internet bağlantısı gerektirmez ve yanıtlar daha hızlı gelir. Telefon ve bilgisayar üreticileri bu yüzden kendi yapay zeka çiplerine yatırım yapıyor.",
    example: "Telefonda fotoğraflardaki nesneleri tanıma veya internet olmadan çalışan sesli asistan özellikleri cihaz üstü yapay zekaya örnektir.",
  },
  'cikarim': {
    how: "Model eğitimi tamamlandıktan sonra her kullanıcı sorusu, modelin bir kez daha çalıştırılmasını gerektirir; buna çıkarım denir. Çıkarım sırasında model, girdiyi işleyip yanıtı token token üretir. Bu işlem veri merkezlerindeki GPU'larda veya cihazların kendi çiplerinde yapılır.",
    why: "Bir model bir kez eğitilir ama milyonlarca kullanıcıya hizmet verir; bu yüzden yapay zeka şirketlerinin işletme maliyetinin ve enerji tüketiminin büyük kısmı çıkarımdan gelir. Ajanlar gibi uzun süre çalışan sistemler çıkarım talebini daha da artırıyor.",
    example: "Veri merkezi yatırımlarındaki artışın önemli bir nedeni, ajan tabanlı uygulamaların yarattığı yoğun çıkarım talebidir.",
  },
  'cok-modlu': {
    how: "Çok modlu modeller metin, görsel, ses ve video gibi farklı veri türlerini ortak bir \"anlam alanında\" temsil edecek şekilde eğitilir. Böylece bir fotoğrafı açıklayabilir, bir grafiği yorumlayabilir, sesli bir soruyu anlayıp yanıtlayabilir veya metinden görsel üretebilirler.",
    why: "Gerçek dünyadaki bilgi yalnızca metinden oluşmaz. Belgeleri tarama, ekran görüntüsünden hata bulma, sesli asistanlar ve robotik gibi uygulamalar çok modlu yeteneklere dayanır.",
    example: "Bir faturanın fotoğrafını yükleyip içindeki tutarları tabloya dökmesini istemek çok modlu bir kullanımdır.",
  },
  'damitma': {
    how: "Damıtmada büyük ve güçlü bir model \"öğretmen\", küçük bir model \"öğrenci\" olur. Öğrenci model, öğretmenin çok sayıda soruya verdiği yanıtlarla eğitilir ve onun davranışını taklit etmeyi öğrenir. Sonuçta daha az donanımla çalışan, ama öğretmenine yakın performans gösteren bir model elde edilir.",
    why: "Damıtma, ucuz ve hızlı modellerin yaygınlaşmasını sağlar. Aynı zamanda tartışmalıdır: bir şirketin modelinin, rakibinin modelinden izinsiz damıtılması kullanım koşulları ve fikri mülkiyet açısından sorun yaratabilir.",
    example: "Bir şirketin \"flash\" veya \"mini\" adlı küçük modelleri çoğu zaman kendi büyük modellerinden damıtılır.",
  },
  'dunya-modeli': {
    how: "Dünya modelleri video, görüntü ve sensör verilerinden nesnelerin nasıl hareket ettiğini, fizik kurallarını ve mekânın yapısını öğrenir. Bu bilgiyle yeni üç boyutlu ortamlar üretebilir ya da bir eylemin sonucunda dünyanın nasıl değişeceğini öngörebilir.",
    why: "Robotların gerçek dünyada güvenli hareket etmeyi öğrenmesi, otonom araçların eğitimi, oyun ve film üretimi için önemlidir. Dil modellerinden sonraki büyük adım olarak görülüyor.",
    example: "Bir metin veya fotoğraftan içinde gezinilebilen bir üç boyutlu sahne oluşturmak dünya modellerinin yaptığı işlerdendir.",
  },
  'egitim': {
    how: "Model eğitiminde model, devasa bir veri seti üzerinde tekrar tekrar çalıştırılır; her adımda yaptığı tahminin hatası ölçülür ve parametreleri bu hatayı azaltacak şekilde güncellenir. Büyük modellerin eğitimi binlerce GPU'nun haftalarca, hatta aylarca birlikte çalışmasını gerektirir. Ardından ince ayar ve güvenlik eğitimi gibi ek aşamalar gelir.",
    why: "Eğitim, en güçlü modelleri geliştirmenin en pahalı aşamasıdır ve yalnızca büyük sermayeye ve veri merkezine erişimi olan birkaç şirket tarafından yapılabilir. Çip ve enerji talebinin önemli bir kısmı buradan gelir.",
    example: "Yeni bir öncü modelin eğitim maliyetinin yüz milyonlarca dolara ulaştığı tahmin ediliyor.",
  },
  'gpu': {
    how: "GPU, binlerce küçük işlem birimini aynı anda çalıştırarak paralel hesap yapmak için tasarlanmış bir işlemcidir. Yapay zeka modellerinin eğitimi ve çalıştırılması, aynı anda yapılan çok sayıda matris çarpımına dayandığı için GPU'lar bu iş için ideal hale gelmiştir. Veri merkezi GPU'ları, yüksek bant genişlikli bellekle (HBM) birlikte çalışır.",
    why: "GPU arzı, yapay zeka şirketlerinin ne kadar hızlı büyüyebileceğini belirleyen en önemli kısıtlardan biri. Bu yüzden GPU satışları, ihracat kısıtlamaları ve yeni çip duyuruları yapay zeka gündeminin merkezinde yer alıyor.",
    example: "Nvidia'nın veri merkezi GPU'ları, dünyadaki yapay zeka sunucularının büyük kısmında kullanılıyor.",
  },
  'halusinasyon': {
    how: "Dil modelleri, öğrendikleri kalıplara göre en olası görünen metni üretir; bir bilgiyi doğrulamak için bir veri tabanına bakmazlar. Bilmedikleri ya da az gördükleri konularda, kulağa doğru gelen ama gerçekte olmayan isimler, tarihler, kaynaklar veya rakamlar üretebilirler.",
    why: "Hukuk, sağlık, finans ve gazetecilik gibi alanlarda uydurma bilgi ciddi zarara yol açabilir. Şirketler bu oranı düşürmek için modelleri web aramasına bağlıyor, kaynak gösterme özellikleri ekliyor ve uydurma oranını benchmark'larla ölçüyor.",
    example: "Bir modelin var olmayan bir mahkeme kararını kaynak olarak göstermesi tipik bir halüsinasyondur.",
  },
  'hbm': {
    how: "HBM, bellek yongalarının üst üste dikey olarak istiflenip işlemcinin hemen yanına yerleştirildiği bir bellek türüdür. Bu yapı sayesinde veri, sıradan belleklere göre çok daha hızlı aktarılır. Üretimi gelişmiş paketleme teknolojileri gerektirdiği için az sayıda şirket tarafından yapılabilir.",
    why: "Yapay zeka çiplerinin performansı, ne kadar hızlı veri alabildiklerine bağlı. HBM tedariki bu yüzden yapay zeka sunucularında önemli bir darboğaz; Samsung, SK hynix ve Micron gibi üreticilerin yatırımları yakından izleniyor.",
    example: "Yeni bir yapay zeka çipinin duyurusunda kaç gigabayt HBM bellek taşıdığı en çok vurgulanan özelliklerden biridir.",
  },
  'hizalama': {
    how: "Hizalama çalışmaları, modelin kullanıcının gerçekte ne istediğini anlamasını, zararlı taleplere yardım etmemesini ve dürüst davranmasını hedefler. Bunun için insan geri bildirimiyle eğitim, model davranışını yöneten ilkeler ve modelin iç işleyişini anlamaya yönelik araştırmalar kullanılır.",
    why: "Modeller güçlendikçe ve kendi başına iş yapan ajanlara dönüştükçe, beklenmedik veya zararlı davranışların etkisi de büyüyor. Hizalama, yapay zeka güvenliği tartışmasının merkezinde yer alıyor.",
    example: "Bir modelin tehlikeli bir kimyasalın tarifini istemesi durumunda yardımı reddetmesi, hizalama çalışmalarının sonucudur.",
  },
  'ince-ayar': {
    how: "İnce ayarda hazır, genel amaçlı bir model alınır ve belirli bir göreve ya da alana ait daha küçük bir veri setiyle bir süre daha eğitilir. Böylece model, o alanın terimlerini, üslubunu veya formatını daha iyi öğrenir. Sıfırdan eğitime göre çok daha az veri ve maliyet gerektirir.",
    why: "Şirketlerin genel modelleri kendi müşteri yazışmalarına, sektör jargonuna veya marka diline uyarlamasını sağlar. Ancak çoğu ihtiyaç için iyi yazılmış istemler veya RAG yeterli olabilir; ince ayar daha çok özel ve tekrar eden görevlerde tercih edilir.",
    example: "Bir bankanın, modeli kendi ürün dokümanlarıyla ince ayara alarak müşteri sorularına daha tutarlı yanıt vermesini sağlaması.",
  },
  'istem': {
    how: "İstem, modele ne yapmasını istediğinizi anlatan metindir: soru, talimat, örnekler, bağlam ve beklenen çıktı biçimi bir arada verilebilir. Model, istemdeki bilgiye ve ifadeye göre yanıtını şekillendirir; aynı soru farklı biçimlerde sorulduğunda farklı kalitede yanıtlar alınabilir.",
    why: "İyi yazılmış bir istem, aynı modelden çok daha doğru, kullanılabilir ve tutarlı sonuç almayı sağlar. Bu yüzden istem yazma, yapay zekayla çalışan herkesin işine yarayan temel bir beceri haline geldi.",
    example: "\"Bunu özetle\" yerine \"Bu raporu yöneticiler için 5 maddede, rakamları koruyarak özetle\" yazmak daha iyi bir istemdir.",
  },
  'kirmizi-takim': {
    how: "Kırmızı takım çalışmalarında uzmanlar, bir sisteme saldırgan gözüyle yaklaşır ve onu kurallarını çiğnemeye, zararlı içerik üretmeye veya yanlış davranmaya zorlamaya çalışır. Bulunan zayıflıklar raporlanır ve sistem yayımlanmadan önce düzeltilir. Yapay zeka şirketleri bunu yeni modelleri piyasaya sürmeden önce yapar.",
    why: "Güvenlik açıklarının kötü niyetli kişilerden önce bulunmasını sağlar. Siber güvenlikte uzun süredir kullanılan bu yöntem, yapay zeka güvenliğinin de standart bir parçası haline geldi; bazı ülkelerde düzenlemelerle zorunlu tutulması tartışılıyor.",
    example: "Bir modelin, rol yapma oyunu bahanesiyle yasaklı bilgileri vermeye ikna edilip edilemediğini test etmek bir kırmızı takım çalışmasıdır.",
  },
  'parametre': {
    how: "Bir sinir ağı, birbirine bağlı yapay \"nöronlardan\" oluşur ve bu bağlantıların güçleri sayılarla ifade edilir; bu sayılara parametre denir. Eğitim sırasında parametreler, modelin tahminleri doğru olacak şekilde ayarlanır. Modelin bildiği her şey bu sayıların içinde saklıdır.",
    why: "Parametre sayısı modelin büyüklüğünü ve genellikle kapasitesini gösterir; ama tek başına kaliteyi belirlemez. Eğitim verisinin kalitesi ve eğitim yöntemi de en az parametre sayısı kadar önemlidir. Büyük modeller daha fazla donanım ve enerji gerektirir.",
    example: "\"70 milyar parametreli model\" ifadesi, modelin 70 milyar ayarlanabilir sayıdan oluştuğunu anlatır.",
  },
  'rag': {
    how: "RAG'da kullanıcı bir soru sorduğunda sistem önce bir belge arşivinde, veri tabanında veya webde soruyla ilgili parçaları bulur. Bulunan bu metinler, soruyla birlikte modele verilir ve modelden yanıtını bu bilgilere dayandırması istenir. Böylece model, eğitiminde görmediği güncel veya özel bilgileri de kullanabilir.",
    why: "Şirketlerin kendi belgeleriyle çalışan asistanlar kurmasının en yaygın yoludur. Modeli yeniden eğitmeye gerek kalmaz, bilgi güncellenebilir ve yanıtlarda kaynak gösterilebilir; bu da uydurma bilgiyi azaltır.",
    example: "Bir şirketin iç politikalarını soran çalışana, ilgili yönetmelik maddesini bulup ona dayanarak yanıt veren asistan RAG kullanır.",
  },
  'sizma-testi': {
    how: "Sızma testinde güvenlik uzmanları, sistemin sahibinin izniyle bir web sitesine, uygulamaya veya ağa gerçek bir saldırgan gibi saldırır. Amaç, kötü niyetli kişilerden önce açıkları bulup raporlamaktır. Testler belirli bir kapsamda ve kurallar çerçevesinde yapılır.",
    why: "Yapay zeka ajanları artık sızma testlerinin bir kısmını otomatik yapabiliyor; bu da güvenlik testlerini hızlandırıp ucuzlatıyor. Aynı yetenekler kötü niyetle de kullanılabileceği için bu alan yakından izleniyor.",
    example: "Bir şirketin web uygulamasındaki giriş formunun kötüye kullanılıp kullanılamayacağını izinli olarak denemek bir sızma testidir.",
  },
  'token': {
    how: "Dil modelleri metni doğrudan harf veya kelime olarak değil, token adı verilen parçalar halinde işler. Sık kullanılan kelimeler tek bir token olabilirken, nadir kelimeler birkaç parçaya bölünür. Türkçe gibi eklemeli dillerde bir kelime çoğu zaman birden fazla token tutar.",
    why: "API fiyatları, bağlam penceresi ve modelin hızı token ile ölçülür. Aynı içeriğin Türkçesi İngilizcesinden daha fazla token tutabildiği için Türkçe kullanım biraz daha pahalıya gelebilir.",
    example: "Bir API'nin \"milyon girdi token'ı için 1,50 dolar\" fiyatı, modele gönderilen her milyon token'lık metin için ödenen ücreti gösterir.",
  },
  'veri-merkezi': {
    how: "Veri merkezleri, binlerce sunucuyu, depolama sistemlerini ve bunları birbirine bağlayan ağ ekipmanını barındıran tesislerdir. Yapay zeka veri merkezleri, çok sayıda GPU'yu bir arada çalıştırmak için çok yüksek elektrik gücüne ve gelişmiş soğutma sistemlerine ihtiyaç duyar. Kapasiteleri genellikle megavat (MW) cinsinden ifade edilir.",
    why: "Yapay zeka modellerinin eğitimi ve kullanımı veri merkezlerinde gerçekleştiği için bu tesislere yapılan yatırımlar rekor seviyelere ulaştı. Enerji tüketimi, su kullanımı ve hangi ülkede kurulacakları da önemli politika tartışmalarına konu oluyor.",
    example: "Bir şirketin \"200 MW kapasiteli yapay zeka veri merkezi\" kurduğunu duyurması tipik bir altyapı haberidir.",
  },
  'yapay-zeka-ajani': {
    how: "Yapay zeka ajanı, bir dil modelini araçlarla birleştirir: web'de arama yapabilir, dosya okuyabilir, form doldurabilir, kod çalıştırabilir veya başka uygulamaları kullanabilir. Kendisine verilen hedefi adımlara böler, her adımın sonucuna bakarak bir sonrakine karar verir ve iş bitene kadar devam eder.",
    why: "Yapay zekayı yalnızca soru yanıtlayan bir asistandan, kullanıcı adına iş yapan bir çalışma arkadaşına dönüştürüyor. Alışveriş, randevu alma, yazılım geliştirme ve müşteri hizmetleri gibi alanlarda hızla yaygınlaşıyor; güvenlik ve sorumluluk soruları da beraberinde geliyor.",
    example: "Kullanıcı adına restoran arayıp rezervasyon yapan ya da onay alarak online alışveriş tamamlayan sistemler yapay zeka ajanıdır.",
  },
};
