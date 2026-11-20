// Bu dosya scripts/generate-glossary.mjs tarafından üretilir (kaynak liste: data/sozluk-terimler.txt).
// Elle düzeltme yapılabilir; betik yalnızca dosyada olmayan terimleri ekler.
export const EXTRA = [
 {
  "slug": "dar-yapay-zeka",
  "term": "Dar yapay zeka",
  "en": "narrow AI",
  "match": [
   "dar yapay zeka",
   "narrow aı"
  ],
  "cat": "Temel kavramlar",
  "def": "Yalnızca belirli bir görevi ya da sınırlı bir görev kümesini yerine getirmek üzere tasarlanmış yapay zeka türü. Bugün kullanılan yapay zeka sistemlerinin hemen hepsi bu gruba girer.",
  "how": "Dar yapay zeka sistemi, tek bir işe ait veriyle eğitilir ya da o işe göre hazırlanmış kurallarla çalışır. Yüz tanıma modeli yalnızca görüntülerdeki yüzleri ayırt etmeyi öğrenir; satranç programı yalnızca satranç oynar. Sistem eğitildiği alanın dışına çıkınca başarısı genellikle hızla düşer, çünkü bir alandaki becerisini başka bir alana kendiliğinden aktaracak genel bir kavrayışı yoktur. \"Dar\" olması zayıf olduğu anlamına gelmez; kendi alanında insanı geride bırakan çok sayıda sistem vardır.",
  "why": "Haberlerde \"yapay zeka\" denildiğinde çoğu zaman aslında dar yapay zekadan söz edilir. Bu ayrımı bilmek, bugünkü sistemlerin gücünü ve sınırlarını gerçekçi okumaya yardım eder. Ayrıca genel yapay zeka ve süper zeka tartışmalarındaki iddiaları değerlendirirken bir karşılaştırma noktası sunar.",
  "example": "Bir e-posta hizmetinin spam filtresi yalnızca gelen iletileri sınıflandırır; aynı sistem çeviri yapamaz, satranç da oynayamaz.",
  "faq": [
   [
    "Dar yapay zeka ile genel yapay zeka arasındaki fark ne?",
    "Dar yapay zeka belirli bir iş için tasarlanır ve o işin dışında işe yaramaz. Genel yapay zeka ise insan gibi çok çeşitli görevleri öğrenip birinden diğerine aktarabilen, henüz var olmayan bir sistemi anlatır."
   ],
   [
    "ChatGPT gibi sohbet robotları dar yapay zeka mı?",
    "Bu konuda görüş ayrılığı var. Pek çok kaynak bunları hâlâ dar yapay zeka sayar; çünkü temelde dili işlemek için eğitilmişlerdir. Geniş görev yelpazesi nedeniyle bazı araştırmacılar ise bunları genel yapay zekaya doğru bir adım olarak görür."
   ]
  ]
 },
 {
  "slug": "yapay-super-zeka",
  "term": "Yapay süper zeka (ASI)",
  "en": "artificial superintelligence",
  "match": [
   "yapay süper zeka",
   "süper zeka",
   "superintelligence"
  ],
  "cat": "Temel kavramlar",
  "def": "İnsan zekasını bilimsel yaratıcılık ve genel akıl yürütme dahil hemen her alanda belirgin biçimde aşacağı varsayılan, kuramsal bir yapay zeka düzeyi. Bugün böyle bir sistem yok.",
  "how": "Yapay süper zeka henüz bir hayal ürünü olduğundan nasıl çalışacağı da kesin değil; tartışma genellikle genel yapay zekadan sonraki bir aşama üzerinden yürür. Öne sürülen senaryolardan biri şöyle: insan düzeyine ulaşan bir sistem kendi tasarımını iyileştirir, iyileşen sistem bunu daha da hızlı yapar ve ilerleme kısa sürede insanın ötesine geçer. Başka araştırmacılar bu hızlı sıçramayı olası bulmaz; ilerlemenin yavaş, kademeli ya da donanım, veri ve enerji sınırlarına takılan bir süreç olacağını savunur.",
  "why": "Süper zeka, yapay zeka güvenliği ve hizalama tartışmalarının merkezinde duruyor. Bir kesim bu olasılığı ciddi bir uzun vadeli risk sayıp bugünden önlem alınmasını ister; bir kesim ise bu konunun, yanlılık ve işgücü etkileri gibi bugünkü sorunlardan dikkati uzaklaştırdığını düşünür. Haberlerdeki iddiaları okurken bu ayrımı bilmek yardımcı olur.",
  "example": "En iyi insan bilim insanlarından çok daha başarılı biçimde yeni ilaç tasarlayan, fizik problemlerini çözen ve bir şirketi yöneten tek bir sistem ASI sayılırdı; ancak böyle bir sistem şimdilik bilimkurgunun alanında.",
  "faq": [
   [
    "Yapay süper zeka ile genel yapay zeka (AGI) arasındaki fark ne?",
    "Genel yapay zeka, insan düzeyinde geniş bir görev yelpazesini yapabilen sistemi anlatır. Süper zeka ise bu düzeyi de aşan, insanın çok üstünde bir sistemi ifade eder."
   ],
   [
    "Yapay süper zeka ne zaman gerçekleşecek?",
    "Bunu kimse bilmiyor. Uzmanların tahminleri onlarca yıldan \"hiçbir zaman\"a kadar değişiyor; bu yüzden kesin takvim veren iddialara temkinli yaklaşmak gerekir."
   ]
  ]
 },
 {
  "slug": "sembolik-yapay-zeka",
  "term": "Sembolik yapay zeka",
  "en": "symbolic AI",
  "match": [
   "sembolik yapay zeka",
   "symbolic aı"
  ],
  "cat": "Temel kavramlar",
  "def": "Zekayı, insanın okuyabildiği simgeler ve mantık kuralları üzerinden işlem yaparak kurmayı hedefleyen yaklaşım. Veriden öğrenmek yerine açıkça yazılmış bilgi ve kurallara dayanır.",
  "how": "Bilgi, \"bütün kuşların kanadı vardır\" ve \"serçe bir kuştur\" gibi olgu ve kurallar olarak elle yazılır. Bir çıkarım mekanizması bu önermeleri birleştirerek yeni sonuçlara, örneğin \"serçenin kanadı vardır\" sonucuna ulaşır. Karar süreci adım adım izlenebildiği için sistemin neden o yanıtı verdiği açıklanabilir. Zayıf yanı ise gerçek dünyanın belirsizliği ve istisnalarıdır: her durumu kural olarak yazmak çok zahmetlidir ve sistem öngörülmemiş durumlarda kolayca şaşırır.",
  "why": "Yapay zeka araştırmalarında 1950'lerden 1980'lere dek bu yaklaşım ağırlıklı olarak öne çıktı; bugünkü öğrenme tabanlı sistemler ona bir tepki olarak da okunabilir. Sinir ağlarının öne çıktığı günümüzde bile bazı araştırmacılar, mantığın açıklanabilirlik ve güvenilirlik sağlaması nedeniyle iki yaklaşımı birleştirmeye, yani nörosembolik sistemlere yöneliyor.",
  "example": "Başvuruları \"yaş şu sınırın altındaysa ve gelir şu tutarı aşıyorsa onayla\" gibi elle yazılmış kurallarla değerlendiren bir kredi yazılımı, sembolik yaklaşımın sade bir örneğidir.",
  "faq": [
   [
    "Sembolik yapay zeka ile makine öğrenmesi arasındaki fark ne?",
    "Sembolik yaklaşımda bilgiyi insanlar kural olarak yazar. Makine öğrenmesinde ise model, kuralları örneklerden kendisi çıkarır."
   ],
   [
    "Sembolik yapay zeka artık kullanılmıyor mu?",
    "Kullanılıyor. Kural tabanlı karar sistemleri, planlama ve doğrulama yazılımları gibi birçok alanda sürüyor; üstelik bu fikirleri öğrenme tabanlı modellerle birleştirme çabaları da var."
   ]
  ]
 },
 {
  "slug": "uzman-sistem",
  "term": "Uzman sistem",
  "en": "expert system",
  "match": [
   "uzman sistem",
   "expert system"
  ],
  "cat": "Temel kavramlar",
  "def": "Belirli bir alandaki uzmanın bilgisini kurallar biçiminde saklayıp o alanda soruları yanıtlayan ya da karar önerisi sunan bilgisayar programı. 1970'lerde ve 1980'lerde yaygınlaştı.",
  "how": "Uzman sistem üç ana parçadan oluşur: kuralların tutulduğu bilgi tabanı, bu kuralları birleştirerek sonuca varan çıkarım motoru ve kullanıcıyla konuşan arayüz. Bilgi mühendisleri uzmanla görüşüp \"eğer şu belirti varsa, şu olasılık artar\" türünden kurallar yazar. Kullanıcı soruları yanıtladıkça motor uygun kuralları zincirleme çalıştırır ve bir öneri üretir. Çoğu zaman hangi kurallarla o sonuca vardığını da gösterebilir.",
  "why": "Uzman sistemler yapay zekanın ilk ciddi ticari uygulamaları oldu ve 1980'lerde şirketlerin bu alana büyük yatırım yapmasını sağladı. Ancak kuralları güncel tutmanın zorluğu ve öngörülmemiş durumlardaki kırılganlık, beklentilerin karşılanmamasına ve ardından yapay zeka kışına katkıda bulundu. Bugünkü kural tabanlı karar yazılımlarının atası sayılabilirler.",
  "example": "1970'lerde Stanford Üniversitesi'nde geliştirilen MYCIN, kan enfeksiyonlarında hangi antibiyotiğin önerileceğini bir kurallar kümesiyle belirlemeye çalışan ünlü bir araştırma prototipiydi.",
  "faq": [
   [
    "Uzman sistem ile makine öğrenmesi arasındaki fark ne?",
    "Uzman sistemde kuralları insanlar yazar; makine öğrenmesinde model örneklerden kendisi öğrenir. Bu yüzden uzman sistemlerin kararları izlenebilir ama bunları güncel tutmak zahmetlidir."
   ],
   [
    "Uzman sistemler hâlâ kullanılıyor mu?",
    "Bu adla az anılsa da kural tabanlı karar destek ve otomasyon yazılımları pek çok kurumda kullanılmaya devam ediyor."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-kisi",
  "term": "Yapay zeka kışı",
  "en": "AI winter",
  "match": [
   "yapay zeka kışı",
   "aı winter"
  ],
  "cat": "Temel kavramlar",
  "def": "Abartılı beklentilerin karşılanamaması sonucu yapay zekaya duyulan ilginin, yatırımın ve araştırma desteğinin belirgin biçimde düştüğü durgunluk dönemleri. Terim, alanın tarihindeki iniş çıkış döngüsünü anlatır.",
  "how": "Döngü benzer biçimde ilerler: yeni bir yöntem büyük vaatler getirir, kaynak akar, ancak sonuçlar beklentinin gerisinde kalınca hayal kırıklığı başlar ve fonlar kesilir. Tarihte iki büyük kış anılır: kabaca 1970'lerdeki dönem ile 1980'lerin sonundan 1990'ların başına uzanan dönem. İkincisinde uzman sistem pazarının ve özel donanım piyasasının çökmesi etkili oldu. Kış boyunca araştırma tamamen durmadı; birçok fikir daha sessiz bir ortamda gelişmeyi sürdürdü.",
  "why": "Terim, bugünkü yapay zeka yatırım coşkusu konuşulurken sık anılıyor. Bir görüşe göre abartılı beklentiler yeni bir düşüşe yol açabilir; diğer görüşe göre bugünkü sistemler çok sayıda kişi tarafından fiilen kullanıldığı için durum farklı. Tarih kesin bir öngörü sunmasa da beklenti yönetimi konusunda iyi bir hatırlatıcıdır.",
  "example": "1980'lerde uzman sistem satan şirketler ve Lisp makineleri gibi özel yapay zeka bilgisayarları üreten firmalar, daha ucuz genel amaçlı bilgisayarlar yükselince müşteri kaybetti ve pazar daraldı.",
  "faq": [
   [
    "Kaç tane yapay zeka kışı yaşandı?",
    "Genellikle iki büyük kıştan söz edilir: 1970'lerdeki ve 1980'lerin sonundaki dönem. Tarihçiler bunların tam sınırları konusunda aynı fikirde değildir; daha küçük gerilemelerden de bahsedilir."
   ],
   [
    "Yeni bir yapay zeka kışı gelir mi?",
    "Kimse kesin söyleyemez. Bazı yorumcular abartılı beklentilerin yeniden hayal kırıklığı yaratabileceğini düşünür; bazıları ise bugünkü teknolojinin gerçek kullanımı sayesinde eski dönemlere benzemeyeceğini savunur."
   ]
  ]
 },
 {
  "slug": "algoritma",
  "term": "Algoritma",
  "en": "algorithm",
  "match": [],
  "cat": "Temel kavramlar",
  "def": "Bir problemi çözmek ya da bir işi yapmak için izlenen, adımları açıkça tanımlanmış yöntem. Bilgisayar bağlamında girdiyi sonlu sayıda adımla çıktıya dönüştüren talimatlar dizisi.",
  "how": "Algoritmayı bir yemek tarifine benzetmek mümkün: malzemeler girdi, sıralı adımlar işlem, ortaya çıkan yemek çıktıdır. Aynı problemi çözen birden çok algoritma olabilir; bunlar hız ve bellek kullanımı bakımından birbirinden ayrılır. Yapay zekada öğrenme algoritması, modelin iç ayarlarını veriye bakarak adım adım düzeltir. Eğitim bittiğinde elde edilen şey modeldir; algoritma ise o modeli üreten yöntemdir.",
  "why": "Haberlerde \"algoritma\" sözcüğü çoğu zaman öneri sistemleri ya da yapay zeka modelleri için gevşek biçimde kullanılıyor. Algoritmanın ne yaptığını, kimin tasarladığını ve hangi veriyle çalıştığını sormak; şeffaflık, yanlılık ve hesap verebilirlik tartışmalarının temelini oluşturur.",
  "example": "Bir harita uygulamasının iki nokta arasında en uygun rotayı bulması ya da bir listeyi küçükten büyüğe sıralayan adımlar, günlük hayattan algoritma örnekleridir.",
  "faq": [
   [
    "Algoritma ile yapay zeka modeli arasındaki fark ne?",
    "Algoritma, bir işin nasıl yapılacağını anlatan adımlardır. Yapay zeka modeli ise bir öğrenme algoritmasının veriyle eğitilmesi sonucu ortaya çıkan, tahmin yapan yapıdır."
   ],
   [
    "Her algoritma yapay zeka mıdır?",
    "Hayır. Sıralama ya da toplama gibi basit algoritmalar yapay zeka sayılmaz. Yapay zeka, algoritmaların yalnızca bir bölümünü kapsar."
   ]
  ]
 },
 {
  "slug": "denetimsiz-ogrenme",
  "term": "Denetimsiz öğrenme",
  "en": "unsupervised learning",
  "match": [
   "denetimsiz öğrenme",
   "unsupervised learning"
  ],
  "cat": "Temel kavramlar",
  "def": "Modelin, kendisine doğru yanıtlar verilmeden, etiketsiz veri içindeki örüntüleri ve grupları kendi başına keşfetmeye çalıştığı makine öğrenmesi yaklaşımı. Örneklerin ne olduğunu söyleyen etiketler yoktur.",
  "how": "Veride \"bu kedi, bu köpek\" gibi etiketler bulunmaz; algoritma yalnızca örneklerin birbirine benzerliğine bakar. En yaygın görevler kümeleme (benzer örnekleri gruplama), boyut indirgeme (veriyi daha az değişkenle özetleme) ve sıra dışı örnekleri bulmadır. Kaç grup aranacağı gibi seçimleri çoğunlukla insan yapar, ortaya çıkan grupların ne anlama geldiğini de insan yorumlar. Büyük dil modellerinin ön eğitiminde kullanılan \"kendi kendine denetimli öğrenme\" ilişkili ama ayrı bir kavramdır.",
  "why": "Dünyadaki verinin büyük bölümü etiketsizdir ve etiketlemek pahalı, zaman alıcı bir iştir. Denetimsiz yöntemler bu veriden müşteri segmentasyonu, sahtekârlık ya da arıza tespiti gibi işlerde değer üretmeyi sağlar. Öte yandan \"doğru yanıt\" olmadığı için sonuçların kalitesini ölçmek zordur.",
  "example": "Bir e-ticaret sitesi, müşterileri alışveriş alışkanlıklarına göre kümelere ayırır; grupların adını sonradan pazarlama ekibi koyar.",
  "faq": [
   [
    "Denetimli ve denetimsiz öğrenme arasındaki fark nedir?",
    "Denetimli öğrenmede model, doğru yanıtı bilinen etiketli örneklerle eğitilir. Denetimsizde etiket yoktur; model verinin yapısını kendi başına bulmaya çalışır."
   ],
   [
    "Kendi kendine denetimli öğrenme denetimsiz öğrenme midir?",
    "Tam olarak değil. Kendi kendine denetimli öğrenmede etiketler verinin kendisinden üretilir; örneğin cümledeki bir sonraki sözcüğü tahmin etmek gibi. Bu yüzden genellikle ayrı bir kategori olarak ele alınır."
   ]
  ]
 },
 {
  "slug": "yari-denetimli-ogrenme",
  "term": "Yarı denetimli öğrenme",
  "en": "semi-supervised learning",
  "match": [
   "yarı denetimli öğrenme",
   "semi-supervised learning"
  ],
  "cat": "Temel kavramlar",
  "def": "Az sayıda etiketli örneği çok sayıda etiketsiz veriyle birlikte kullanarak model eğiten makine öğrenmesi yaklaşımı. Denetimli ve denetimsiz öğrenme arasında bir orta yol sunar.",
  "how": "Süreç, küçük bir etiketli kümeyle eğitilen ilk bir modelle başlar. Ardından etiketsiz verinin yapısı devreye girer: benzer örneklerin aynı etikete sahip olma eğilimi gibi varsayımlardan yararlanılır. Yaygın yöntemlerden birinde model etiketsiz örnekler için tahmin yürütür, güvendiği tahminleri geçici etiket sayar ve kendini bu genişleyen veriyle yeniden eğitir. Böylece pahalı etiketleme işinin büyük bölümü atlanmış olur.",
  "why": "Etiket üretmek çoğu zaman uzman emeği gerektirir; örneğin tıbbi görüntüleri yalnızca doktorlar doğru etiketleyebilir. Yarı denetimli öğrenme bu maliyeti düşürmeyi vaat eder. Yine de model kendi hatalı tahminlerini etiket sayarsa yanlışlar pekişebilir, bu yüzden dikkatli doğrulama gerekir.",
  "example": "Bir hastane, radyologlara yalnızca birkaç yüz röntgeni etiketlettirip binlerce etiketsiz röntgeni de eğitime katarak daha iyi bir model elde etmeyi deneyebilir.",
  "faq": [
   [
    "Yarı denetimli öğrenme ile denetimsiz öğrenme arasındaki fark ne?",
    "Yarı denetimlide az da olsa etiketli örnek vardır ve model hedefi onlardan öğrenir. Denetimsizde hiç etiket yoktur."
   ],
   [
    "Yarı denetimli öğrenme her zaman daha iyi sonuç verir mi?",
    "Hayır. Etiketsiz verinin etiketli veriyle benzer özellikler taşıması gibi varsayımlar tutmazsa sonuç kötüleşebilir; bu yüzden yöntem her problemde yararlı olmaz."
   ]
  ]
 },
 {
  "slug": "oz-denetimli-ogrenme",
  "term": "Öz denetimli öğrenme",
  "en": "self-supervised learning",
  "match": [
   "öz denetimli öğrenme",
   "self-supervised learning"
  ],
  "cat": "Temel kavramlar",
  "def": "Modelin, etiketlenmemiş verinin kendi içinden ürettiği görevlerle öğrenmesini sağlayan yöntem; insan eliyle etiket hazırlamaya gerek kalmadan veriden anlamlı örüntüler çıkarılır.",
  "how": "Veriden bir parça gizlenir, model gizlenen kısmı tahmin etmeye çalışır. Metinde bir sonraki kelimeyi ya da cümlenin ortasından silinmiş kelimeyi bulmak buna örnektir; görüntülerde kapatılan bir bölgeyi tamamlamak da benzer iş görür. Doğru yanıt verinin kendisinde bulunduğundan etiketi insan yazmaz. Model bu görevi milyarlarca kez çözerken dilin ya da görüntünün yapısını içselleştirir. Sonrasında bu bilgi, daha küçük etiketli veri kümeleriyle belirli işler için uyarlanabilir.",
  "why": "Etiketli veri pahalıdır ve yavaş üretilir; internetteki metin, görüntü ve ses ise çok büyük miktarda etiketsiz biçimde bulunur. Öz denetimli öğrenme bu birikimi kullanılabilir hale getirdi ve büyük dil modellerinin ön eğitiminin temelini oluşturdu. Haberlerde 'ön eğitim' denildiğinde çoğu zaman bu yöntem kastedilir.",
  "example": "Bir dil modeli, 'Bugün hava çok ...' gibi yarım bırakılmış cümlelerin devamını tahmin ederek eğitilir; doğru yanıt metnin kendisinden gelir.",
  "faq": [
   [
    "Öz denetimli öğrenme ile denetimsiz öğrenme aynı şey mi?",
    "Tam olarak değil. Denetimsiz öğrenme genellikle kümeleme gibi veride yapı arar; öz denetimli öğrenme ise veriden yapay bir tahmin görevi üretip gerçek bir hedefle eğitim yapar. Bu yüzden bazen denetimsiz öğrenmenin özel bir türü sayılır."
   ],
   [
    "Bu yöntem büyük dil modellerinde neden kullanılıyor?",
    "Çünkü internet ölçeğindeki metin etiketlenmeden kullanılabilir. Sıradaki kelimeyi tahmin etme görevi, dilbilgisi ve dünya bilgisi gibi pek çok şeyi öğretir."
   ]
  ]
 },
 {
  "slug": "transfer-ogrenme",
  "term": "Transfer öğrenme",
  "en": "transfer learning",
  "match": [
   "transfer öğrenme",
   "transfer learning"
  ],
  "cat": "Temel kavramlar",
  "def": "Bir görev için eğitilmiş modelin edindiği bilginin, ilgili başka bir görevde yeniden kullanılması; böylece yeni işe sıfırdan başlamak yerine hazır bir birikimden yola çıkılır.",
  "how": "Önce bir model geniş bir veriyle eğitilir, örneğin milyonlarca görüntüyle nesne tanımayı öğrenir. Sonra bu modelin ağırlıkları yeni bir göreve başlangıç noktası olarak alınır. Ya yalnızca son katmanlar yeni veriyle eğitilir ya da modelin tamamı küçük adımlarla ince ayara tabi tutulur. Alt katmanlar kenar, doku ya da dil kalıbı gibi genel özellikleri zaten bildiğinden yeni görev için az veri yeter. Piyano çalmayı bilen birinin orgu daha çabuk öğrenmesi buna iyi bir benzetmedir.",
  "why": "Birçok kurumun büyük bir model eğitmeye yetecek veriye ya da hesaplama gücüne erişimi yok. Transfer öğrenme, hazır modellerin az veriyle ve düşük maliyetle özel işlere uyarlanmasına izin verir. Günümüzde ön eğitimli modellerin ince ayarla kullanılması bu yaklaşımın doğrudan sonucudur.",
  "example": "Bir hastane, genel görüntü veri kümeleriyle eğitilmiş bir modeli yalnızca birkaç bin röntgen görüntüsüyle uyarlayarak akciğer filmlerinde anormallik arayan bir sistem kurabilir.",
  "faq": [
   [
    "Transfer öğrenme ile ince ayar arasındaki fark ne?",
    "İnce ayar, transfer öğrenmenin yaygın bir yoludur: ön eğitimli modelin ağırlıkları yeni veriyle güncellenir. Transfer öğrenme ise daha geniş bir kavramdır ve bilginin başka bir göreve aktarılmasının her biçimini kapsar."
   ],
   [
    "Transfer öğrenme her zaman işe yarar mı?",
    "Hayır. Kaynak ve hedef görev birbirinden çok farklıysa aktarılan bilgi yarar sağlamayabilir, hatta sonucu kötüleştirebilir."
   ]
  ]
 },
 {
  "slug": "surekli-ogrenme",
  "term": "Sürekli öğrenme",
  "en": "continual learning",
  "match": [
   "sürekli öğrenme",
   "continual learning"
  ],
  "cat": "Temel kavramlar",
  "def": "Modelin yeni verileri ve görevleri zaman içinde art arda öğrenirken önceki bilgisini kaybetmemesini hedefleyen yaklaşım; insanın yaşam boyu öğrenmesine benzer bir işleyiş amaçlanır.",
  "how": "Klasik bir model bir kez eğitilir ve sabitlenir. Yeni veriyle eğitmeye devam edilirse model eskiyi hızla unutabilir; buna 'feci unutma' (catastrophic forgetting) denir. Sürekli öğrenme yöntemleri bunu önlemeye çalışır: eski görevlerden küçük örnek kümeleri saklayıp tekrar oynatmak, önemli ağırlıkların değişimini sınırlamak ya da her görev için ağın ayrı bir bölümünü ayırmak bunlardandır. Amaç, yeni bilgiyi eklerken eskiyi korumaktır.",
  "why": "Gerçek dünya durağan değildir; kullanıcı alışkanlıkları, dil ve dolandırıcılık yöntemleri sürekli değişir. Modeli her seferinde baştan eğitmek ise pahalıdır. Sürekli öğrenme bu maliyeti azaltabilir, ancak unutma sorunu açık bir araştırma alanıdır ve büyük modeller çoğunlukla yeniden eğitim ya da ince ayarla güncellenir.",
  "example": "Sahte e-posta filtresi, ortaya çıkan yeni oltalama yöntemlerini öğrenirken eski yöntemleri tanıma becerisini kaybetmemelidir.",
  "faq": [
   [
    "Sürekli öğrenme ile çevrimiçi öğrenme aynı şey mi?",
    "Yakın ama aynı değil. Çevrimiçi öğrenme, verinin akış halinde gelip modelin sürekli güncellenmesini anlatır. Sürekli öğrenme ise özellikle yeni görevler gelirken eski bilginin korunmasına odaklanır."
   ],
   [
    "Feci unutma nedir?",
    "Bir sinir ağının yeni bir göreve göre ağırlıklarını güncellerken eski görevde işe yarayan ayarları bozması ve o görevdeki başarısının düşmesidir."
   ]
  ]
 },
 {
  "slug": "meta-ogrenme",
  "term": "Meta öğrenme",
  "en": "meta-learning",
  "match": [
   "meta öğrenme",
   "meta-learning"
  ],
  "cat": "Temel kavramlar",
  "def": "Modelin tek bir görevi değil öğrenmenin kendisini öğrenmesi; yeni bir görevle karşılaştığında çok az örnekle hızla uyum sağlayabilecek biçimde eğitilmesi. Kısaca 'öğrenmeyi öğrenme' denir.",
  "how": "Eğitim, tek bir büyük görev yerine çok sayıda küçük görevden oluşur. Her görevde modele birkaç örnek gösterilir, ardından aynı görevden gelen yeni örneklerde sınanır. Sonuçtaki hata, hem görevi çözmeyi hem de hızlı uyum yeteneğini geliştirecek biçimde modelin başlangıç ayarlarına geri yansıtılır. Böylece model, yeni bir görevde birkaç adımda iyi sonuç verecek bir başlangıç noktası ya da öğrenme stratejisi edinir. Çok sayıda dil öğrenmiş birinin yeni bir dilin kalıplarını daha çabuk kavraması buna benzer.",
  "why": "Etiketli verinin az olduğu alanlarda, örneğin nadir hastalıklarda ya da az konuşulan dillerde, modelin birkaç örnekle öğrenebilmesi büyük avantajdır. Meta öğrenme, az örnekle öğrenme (few-shot learning) araştırmalarının temel yaklaşımlarından biridir. Büyük dil modellerinin bağlam içinde öğrenmesi de bu bakışla tartışılır.",
  "example": "Bir görüntü sınıflandırıcı, eğitimde yüzlerce benzer küçük görevle alıştırma yaptığı için, her türden yalnızca beş fotoğraf verilen daha önce görmediği kuş türlerini ayırt etmeyi becerebilir.",
  "faq": [
   [
    "Meta öğrenme ile transfer öğrenme arasındaki fark ne?",
    "Transfer öğrenmede hazır bir modelin bilgisi yeni göreve aktarılır. Meta öğrenmede ise model baştan itibaren yeni görevlere hızlı uyum sağlamak üzere, çok sayıda görev üzerinde eğitilir."
   ],
   [
    "Meta öğrenmenin az örnekle öğrenmeyle ilişkisi nedir?",
    "Az örnekle öğrenme hedefi tanımlar: birkaç örnekle öğrenmek. Meta öğrenme bu hedefe ulaşmak için kullanılan başlıca yöntemlerden biridir."
   ]
  ]
 },
 {
  "slug": "federe-ogrenme",
  "term": "Federe öğrenme",
  "en": "federated learning",
  "match": [
   "federe öğrenme",
   "federated learning"
  ],
  "cat": "Temel kavramlar",
  "def": "Verileri merkezde toplamadan, cihazlarda ya da kurumlarda yerel olarak üretilen model güncellemelerini birleştirerek ortak bir model geliştirme yöntemi.",
  "how": "Merkezdeki sunucu, ortak modelin bir kopyasını telefonlara ya da hastane gibi kurumlara gönderir. Her katılımcı modeli kendi verisiyle kısa süre eğitir; ham veri cihazdan çıkmaz. Sunucuya yalnızca model güncellemeleri, yani ağırlık değişimleri geri döner. Sunucu gelen güncellemeleri birleştirir, çoğu zaman ortalamasını alır ve yeni sürümü yeniden dağıtır. Bu döngü birçok kez tekrarlanır. Gizliliği güçlendirmek için yöntem sıklıkla diferansiyel gizlilik ya da şifreleme teknikleriyle desteklenir.",
  "why": "Sağlık, bankacılık ve mobil cihazlarda veri hem hassas hem kişiseldir; KVKK gibi düzenlemeler de verinin dolaşımını sınırlar. Federe öğrenme, veriyi paylaşmadan ortak öğrenmeye imkân tanıyarak gizlilik kaygısını azaltır. Yine de güncellemelerden bilgi sızabileceği için tek başına tam koruma sayılmaz.",
  "example": "Telefon klavyesinin kelime önerilerini, kullanıcıların yazdıklarını sunucuya göndermeden her telefonda yerel olarak eğitip güncellemeleri birleştirmek tipik bir uygulamadır.",
  "faq": [
   [
    "Federe öğrenme veriyi tamamen güvenli kılar mı?",
    "Hayır. Ham veri paylaşılmaz ama model güncellemelerinden bazı bilgiler çıkarılabilir. Bu yüzden şifreleme ve diferansiyel gizlilik gibi ek önlemler kullanılır."
   ],
   [
    "Federe öğrenmenin merkezi eğitimden farkı nedir?",
    "Merkezi eğitimde tüm veri tek yerde toplanır. Federe öğrenmede veri olduğu yerde kalır, merkeze yalnızca model güncellemeleri gider."
   ]
  ]
 },
 {
  "slug": "aktif-ogrenme",
  "term": "Aktif öğrenme",
  "en": "active learning",
  "match": [
   "aktif öğrenme",
   "active learning"
  ],
  "cat": "Temel kavramlar",
  "def": "Modelin, etiketlenmesi en çok işe yarayacak örnekleri kendisinin seçip bir insandan etiket istediği yöntem; böylece daha az etiketle yüksek başarıya ulaşılmaya çalışılır.",
  "how": "Süreç küçük bir etiketli veriyle başlar ve model ilk kez eğitilir. Ardından model etiketsiz örnekleri tarar ve hakkında en kararsız kaldıklarını işaretler; örneğin iki sınıf arasında karar veremediği örnekleri. Bu seçilmiş örnekler bir uzmana gönderilir, etiketler gelir ve model yeniden eğitilir. Döngü, başarı yeterli olana ya da etiketleme bütçesi bitene kadar sürer. Rastgele örnekleri etiketlemeye göre çoğunlukla daha verimlidir.",
  "why": "Etiketleme, özellikle tıp ya da hukuk gibi uzmanlık isteyen alanlarda zaman ve para yutar. Aktif öğrenme, sınırlı bütçeyle en çok bilgi veren örneklere odaklanarak bu maliyeti düşürür. Yapay zeka projelerinde veri hazırlığı çoğu zaman en pahalı kalem olduğu için bu yaklaşım pratik değer taşır.",
  "example": "Bir radyoloji ekibi, modelin en emin olamadığı birkaç yüz tomografiyi seçip uzmana gösterir; tüm arşivi etiketletmek yerine uzman emeği yalnızca bunlara harcanır.",
  "faq": [
   [
    "Aktif öğrenme ile pekiştirmeli öğrenme aynı şey mi?",
    "Hayır. Burada 'aktif' sözcüğü, modelin hangi veriyi etiketleteceğini seçmesini anlatır. Pekiştirmeli öğrenmede ise ajan, ödül ve cezalarla ortamda deneyerek öğrenir."
   ],
   [
    "Etiketlenecek örnekler nasıl seçilir?",
    "Genellikle modelin en kararsız kaldığı, birbirinden farklı ve öğrenmeye en çok katkı yapacağı düşünülen örnekler seçilir. Seçim ölçütü yönteme göre değişir."
   ]
  ]
 },
 {
  "slug": "temel-model",
  "term": "Temel model",
  "en": "foundation model",
  "match": [
   "temel model",
   "foundation model"
  ],
  "cat": "Temel kavramlar",
  "def": "Çok geniş ve çeşitli verilerle büyük ölçekte eğitilen, ardından sohbet, çeviri, kod yazma ya da görüntü anlama gibi pek çok farklı işe uyarlanabilen genel amaçlı yapay zeka modeli.",
  "how": "Temel model önce internet ölçeğinde metin, görüntü, ses ya da kod gibi verilerle, çoğunlukla öz denetimli öğrenmeyle ön eğitilir. Bu aşama çok büyük hesaplama gücü gerektirir ve modele genel bir dil ve dünya bilgisi kazandırır. Ortaya çıkan model belirli bir işe özgü değildir; ince ayar, istem yazma ya da ek eğitimle farklı uygulamaların altyapısı olur. Bir kez eğitilen model birçok ürüne dayanak olduğu için 'temel' diye adlandırılır.",
  "why": "Haberlerde geçen büyük dil modellerinin çoğu temel modeldir. Tek bir modelin birçok ürünün altyapısı olması maliyeti düşürür, ama hataların ve önyargıların da bu ürünlerin hepsine taşınması riskini doğurur. Düzenleme tartışmalarında bu modeller ayrı bir başlık olarak ele alınır.",
  "example": "Bir şirket, aynı dil modelini müşteri hizmetleri sohbet robotu, sözleşme özetleyici ve kod asistanı olmak üzere üç ayrı ürünün altında kullanabilir.",
  "faq": [
   [
    "Temel model ile büyük dil modeli aynı şey mi?",
    "Her büyük dil modeli bir temel model sayılabilir, ama her temel model dil modeli değildir; görüntü, ses ya da birden fazla veri türüyle çalışan temel modeller de vardır."
   ],
   [
    "Temel model ile öncü model arasındaki fark nedir?",
    "Temel model, genel amaçlı ve uyarlanabilir olmasıyla tanımlanır. Öncü model ise o dönemde yeteneklerin en ucundaki modelleri anlatır; öncü modeller genellikle aynı zamanda temel modeldir."
   ]
  ]
 },
 {
  "slug": "oncu-model",
  "term": "Öncü model (frontier model)",
  "en": "frontier model",
  "match": [
   "öncü model",
   "frontier model",
   "sınır model"
  ],
  "cat": "Temel kavramlar",
  "def": "Yapay zeka yeteneklerinin o andaki sınırında yer alan en gelişmiş genel amaçlı modeller; güçlü yeteneklerinin yanında henüz tam anlaşılmamış riskler taşıyabildikleri için ayrıca izlenirler.",
  "how": "Öncü model kesin bir teknik eşiğe bağlı değildir; zamanla kayan bir ölçüttür. Genellikle çok büyük hesaplama gücü, geniş veri ve pahalı eğitim gerektiren modeller için kullanılır. Bu modeller çoğunlukla bir şirketin ya da laboratuvarın en yetenekli çalışmasıdır. Yayımlanmadan önce güvenlik testlerinden, örneğin siber saldırı ya da biyolojik risk senaryolarında kötüye kullanım denemelerinden geçirilmeleri istenir. Bazı şirketler ve kamu kurumları bu değerlendirmeler için gönüllü taahhütler ya da çerçeveler yayımlamıştır.",
  "why": "Düzenleyiciler ve şirketler en güçlü modellerin getirebileceği riskleri ayrı ele alıyor; güvenlik değerlendirmeleri ve politika tartışmaları bu kategori etrafında şekilleniyor. Hangi modelin öncü sayılacağı ise tartışmalıdır: bazıları sıkı denetim ister, bazıları aşırı düzenlemenin yeniliği ve küçük oyuncuları zorlayacağını savunur.",
  "example": "Büyük yapay zeka laboratuvarlarının çıkardığı en yetenekli sohbet ve akıl yürütme modelleri öncü model olarak anılır; birkaç yıl sonra bugünün öncü modeli sıradan sayılabilir.",
  "faq": [
   [
    "Hangi model öncü sayılır?",
    "Tek bir resmî ölçüt yok. Ölçüt zamanla değişir ve kurumlar farklı tanımlar kullanır; çoğunlukla eğitimde kullanılan hesaplama miktarı ya da yetenek düzeyi esas alınır."
   ],
   [
    "Öncü modeller neden ayrıca izlenir?",
    "Yetenekleri arttıkça kötüye kullanım ve beklenmedik davranış riskleri de büyüyebilir. Bu yüzden yayımlanmadan önce özel güvenlik testleri uygulanması gündeme geliyor."
   ]
  ]
 }
];
