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
 },
 {
  "slug": "kucuk-dil-modeli",
  "term": "Küçük dil modeli (SLM)",
  "en": "small language model",
  "match": [
   "küçük dil modeli",
   "=slm",
   "small language model"
  ],
  "cat": "Temel kavramlar",
  "def": "Büyük dil modellerinden çok daha az parametreye sahip olduğu için telefon ya da dizüstü bilgisayar gibi sıradan donanımda çalışabilen dil modeli türü.",
  "how": "Küçük dil modelleri de büyük kardeşleri gibi metin üzerinde eğitilir ve sıradaki parçayı tahmin eder; fark ölçektedir. Parametre sayısı birkaç milyar düzeyinde ya da daha azdır. Başarılı olmaları için çoğunlukla özenle seçilmiş, kaliteli veri kullanılır. Ayrıca büyük bir modelin çıktılarından öğrenme (damıtma) ve nicemleme gibi sıkıştırma yöntemlerinden yararlanılır. Sonuçta model genel bilgide büyüklerin gerisinde kalsa da belirli bir görevde yeterince iyi çalışabilir.",
  "why": "Küçük modeller daha ucuz ve hızlıdır, internet bağlantısı olmadan çalışabilir. Veriler cihazdan çıkmadığı için gizlilik açısından da avantaj sağlarlar. Şirketler için dar bir işe uyarlanmış küçük bir model, çoğu zaman büyük bir modelden daha makul bir seçimdir.",
  "example": "Microsoft'un Phi ve Google'ın Gemma aileleri küçük dil modellerine örnektir; bu tür modeller bir telefonda mesaj özetleme gibi işleri cihazın kendisinde yapabilir.",
  "faq": [
   [
    "Küçük dil modeli ile büyük dil modeli arasındaki fark ne?",
    "Temel çalışma biçimi aynıdır; fark parametre sayısında ve dolayısıyla gereken bellek ile işlem gücündedir. Büyük modeller daha geniş bilgi ve beceri sunar, küçük modeller daha hafif ve ucuzdur."
   ],
   [
    "Küçük model her zaman büyük modelden daha mı kötüdür?",
    "Genel kapsamlı işlerde çoğunlukla geride kalır. Ancak dar ve iyi tanımlanmış bir görev için eğitildiğinde büyük bir modelle yarışabilir, üstelik daha hızlı ve ucuz çalışır."
   ]
  ]
 },
 {
  "slug": "goru-dil-modeli",
  "term": "Görü-dil modeli (VLM)",
  "en": "vision-language model",
  "match": [
   "görü-dil model",
   "görsel dil model",
   "vision-language model",
   "=vlm"
  ],
  "cat": "Temel kavramlar",
  "def": "Görüntüyü ve metni birlikte işleyebilen yapay zeka modeli; bir fotoğrafa bakıp onu anlatabilir, görüntü hakkındaki soruları yanıtlayabilir ya da görseldeki yazıyı okuyabilir.",
  "how": "Tipik bir görü-dil modelinde görüntü kodlayıcı adı verilen bir bölüm, resmi küçük parçalara ayırıp sayısal temsillere dönüştürür. Bu temsiller dil modelinin metin için kullandığı biçime çevrilir ve sorunun sözcükleriyle aynı dizide işlenir. Model böylece hem resmi hem soruyu birlikte 'okuyarak' yanıt üretir. Eğitimde genellikle görsel ile açıklama çiftlerinden oluşan çok sayıda örnek kullanılır.",
  "why": "Gerçek dünyadaki bilgi yalnızca metinden ibaret değildir; belgeler, grafikler, ekran görüntüleri ve fotoğraflar da bilgi taşır. Görü-dil modelleri bunları anlayabildiği için erişilebilirlik araçlarından belge işlemeye ve robotlara kadar geniş bir alanın temelini oluşturur. Yine de yanlış görme ve görselde olmayan şeyi uydurma riski sürmektedir.",
  "example": "Bir faturanın fotoğrafını sohbet asistanına yükleyip 'toplam tutar ne?' diye sormak, görü-dil modelinin günlük kullanımına örnektir.",
  "faq": [
   [
    "Görü-dil modeli ile çok kipli model aynı şey mi?",
    "Tam olarak değil. Görü-dil modeli, çok kipli modellerin görüntü ile metni birleştiren bir türüdür; çok kipli modeller ses ve video gibi başka veri türlerini de içerebilir."
   ],
   [
    "Görü-dil modeli görüntü de üretir mi?",
    "Genellikle hayır; bu modeller görüntüyü anlamaya odaklanır. Görüntü üretimi çoğunlukla ayrı modellerle yapılır, ancak bazı sistemler iki yeteneği tek çatı altında birleştirir."
   ]
  ]
 },
 {
  "slug": "otoregresif-model",
  "term": "Otoregresif model",
  "en": "autoregressive model",
  "match": [
   "otoregresif model",
   "autoregressive model"
  ],
  "cat": "Temel kavramlar",
  "def": "Çıktıyı tek seferde değil parça parça üreten, her adımda o ana kadar üretilmiş parçalara bakarak sıradakini tahmin eden model türü.",
  "how": "Bir dil modelinde süreç şöyle işler: Model, verilen bağlamı alır ve sıradaki parça (token) için olasılıkları hesaplar. Bunlardan biri seçilir, diziye eklenir ve işlem yeni dizi üzerinden yeniden başlar. Döngü, yanıt tamamlanana ya da durma işareti gelene kadar sürer. Eğitimde de aynı fikir kullanılır: model gerçek metinlerde bir sonraki parçayı tahmin etmeyi öğrenir. Bu yüzden üretim sırayla ilerler ve yanıt uzadıkça süre de uzar.",
  "why": "GPT tarzı dil modellerinin çoğu bu yapıdadır; sohbet asistanlarının davranışını anlamak için temel bir kavramdır. Yanıtların sözcük sözcük akması, uzun yanıtların daha pahalı olması ve erken yapılan bir hatanın sonraki adımları etkileyebilmesi bu yapıdan gelir.",
  "example": "Sohbet asistanında yanıtın ekranda sözcük sözcük belirmesi, otoregresif üretimin gözle görülür halidir.",
  "faq": [
   [
    "Otoregresif model ile difüzyon modeli arasındaki fark ne?",
    "Otoregresif model çıktıyı baştan sona sırayla üretir. Difüzyon modeli ise gürültülü bir girdiden başlayıp çıktının tamamını adım adım düzeltir; görüntü üretiminde yaygındır."
   ],
   [
    "Yalnızca sıradaki sözcüğü tahmin eden bir model nasıl akıl yürütebiliyor?",
    "Sıradaki parçayı iyi tahmin edebilmek için dil bilgisini, olguları ve bağlamı öğrenmek gerekir. Bu öğrenme yararlı sonuçlar verir, ancak model yine de hata yapabilir ve olmayan şeyi üretebilir."
   ]
  ]
 },
 {
  "slug": "ortaya-cikan-yetenekler",
  "term": "Ortaya çıkan yetenekler",
  "en": "emergent abilities",
  "match": [
   "ortaya çıkan yetenekler",
   "emergent abilities"
  ],
  "cat": "Temel kavramlar",
  "def": "Küçük modellerde görülmeyip model ölçeği belirli bir düzeye ulaştığında birdenbire belirginleşen, açıkça öğretilmemiş gibi görünen beceriler.",
  "how": "Araştırmacılar aynı model ailesini farklı boyutlarda eğitir ve çeşitli görevlerde ölçer. Bazı görevlerde başarı küçük modellerde rastgele düzeyde kalır, belirli bir boyuttan sonra hızla yükselir. Bu sıçrama 'ortaya çıkış' diye adlandırılır. Birkaç örnekten öğrenme ve çok adımlı hesaplama sık anılan örneklerdir. Öte yandan bazı çalışmalar, sıçramanın kısmen seçilen ölçüm yönteminden kaynaklanabileceğini, daha yumuşak ölçütler kullanıldığında ilerlemenin daha düzgün göründüğünü savunur.",
  "why": "Kavram, modeller büyütüldüğünde neler yapabileceklerinin önceden kestirilmesinin zor olduğu fikrini taşır. Bu da güvenlik tartışmalarında ve yatırım kararlarında ağırlık kazanır. Konu tartışmalıdır: Bazı araştırmacılar gerçek bir eşik görür, bazıları ise bunu ölçüm yanılsaması sayar.",
  "example": "Büyük bir dil modeline istemde birkaç örnek verildiğinde yeni bir görevi yapmaya başlaması, ortaya çıkan yeteneklere sık verilen örneklerden biridir.",
  "faq": [
   [
    "Ortaya çıkan yetenekler gerçekten ani mi beliriyor?",
    "Bu tartışmalı. İlk çalışmalar belirli ölçeklerde keskin sıçramalar bildirdi; sonraki araştırmalar ise bunun kısmen ölçüt seçiminden kaynaklanabileceğini ve daha düzgün ölçümlerle ilerlemenin kademeli görünebileceğini öne sürdü."
   ],
   [
    "Ortaya çıkan yetenekler ile ölçekleme yasaları arasında nasıl bir ilişki var?",
    "Ölçekleme yasaları genellikle hatanın öngörülebilir biçimde azaldığını gösterir. Ortaya çıkan yetenekler ise belirli görevlerde başarının bir noktadan sonra aniden yükseldiği izlenimini anlatır; ikisi bir arada tartışılır."
   ]
  ]
 },
 {
  "slug": "olcekleme-yasalari",
  "term": "Ölçekleme yasaları",
  "en": "scaling laws",
  "match": [
   "ölçekleme yasaları",
   "scaling laws"
  ],
  "cat": "Temel kavramlar",
  "def": "Bir yapay zeka modelinin hatasının, model boyutu, eğitim verisi ve harcanan hesaplama arttıkça hangi düzenlilikle azaldığını gösteren deneysel gözlemler.",
  "how": "Araştırmacılar farklı boyutlarda çok sayıda model eğitir ve kayıp adı verilen hata ölçüsünü grafiğe döker. Kayıp, parametre sayısı, veri miktarı ve hesaplama bütçesi arttıkça genellikle öngörülebilir bir eğri izleyerek düşer. Bu eğriler uzatılarak çok daha büyük bir modelin yaklaşık başarısı, eğitilmeden önce tahmin edilebilir. Google DeepMind'ın Chinchilla çalışması gibi araştırmalar, sabit bir bütçede model boyutuyla veri miktarının dengelenmesi gerektiğini gösterdi.",
  "why": "Büyük ölçekli eğitim yatırımlarının temel gerekçelerinden biri bu gözlemlerdir: Daha fazla hesaplama genellikle daha iyi model demektir. Bütçe ve donanım planlamasına da yol gösterirler. Ancak bunlar doğa yasası değil, deneysel gözlemdir; verinin tükenmesi ve getirinin azalması gibi sınırlar tartışılmaktadır.",
  "example": "Bir laboratuvar, küçük denemelerin sonuçlarından yola çıkarak çok daha büyük bir modelin başarısını önceden tahmin edip eğitim bütçesini buna göre ayarlayabilir.",
  "faq": [
   [
    "Ölçekleme yasaları sonsuza kadar geçerli mi?",
    "Bilinmiyor. Gözlemler incelenen aralıkta tutarlı oldu, ancak veri kıtlığı, enerji maliyeti ve getirinin azalması gibi etkenler eğrinin ileride aynı biçimde sürüp sürmeyeceği konusunda soru işareti yaratıyor."
   ],
   [
    "Ölçekleme yasaları ile Moore yasası aynı şey mi?",
    "Hayır. Moore yasası, çiplerdeki transistör sayısının zaman içindeki artışına dair bir gözlemdir. Ölçekleme yasaları ise model hatası ile model boyutu, veri ve hesaplama arasındaki ilişkiyi anlatır."
   ]
  ]
 },
 {
  "slug": "aci-ders",
  "term": "Acı ders (The Bitter Lesson)",
  "en": "the bitter lesson",
  "match": [
   "bitter lesson"
  ],
  "cat": "Temel kavramlar",
  "def": "Yapay zeka araştırmacısı Richard Sutton'ın 2019'da yazdığı denemede savunduğu görüş: Uzun vadede insan bilgisini sisteme işleyen yöntemler değil, hesaplama gücüyle ölçeklenen genel yöntemler kazanır.",
  "how": "Sutton, satranç, Go, konuşma tanıma ve bilgisayarlı görü tarihine bakarak benzer bir örüntü görür. Araştırmacılar önce alana özgü insan bilgisini sisteme işler ve bu kısa vadede işe yarar. Sonra hesaplama gücü ucuzlayınca arama ve öğrenme gibi genel yöntemler, elle işlenmiş bilginin önüne geçer. Ders 'acıdır' çünkü araştırmacıların zekice bulduğu yapıların uzun vadede çoğu zaman geri planda kaldığını söyler.",
  "why": "Deneme, büyük dil modellerinin yükselişini savunanlar tarafından sık anılır ve şirketlerin neden daha çok veri ve hesaplamaya yatırım yaptığını açıklamaya yardım eder. Eleştirenler ise veri ile enerjinin sınırlı olduğunu, yapısal bilginin hâlâ değerli olabileceğini söyler.",
  "example": "Satrançta Deep Blue'nun geniş arama gücüyle dünya şampiyonunu yenmesi, Sutton'ın denemesinde anlattığı örneklerden biridir.",
  "faq": [
   [
    "Acı ders, insan bilgisinin değersiz olduğu anlamına mı geliyor?",
    "Hayır. Sutton'ın iddiası, uzun vadede hesaplamayla ölçeklenen genel yöntemlerin elle işlenmiş bilgiyi geride bıraktığıdır. Yine de insan emeği veriyi, hedefleri ve değerlendirmeyi şekillendirmeye devam eder."
   ],
   [
    "Richard Sutton kimdir?",
    "Pekiştirmeli öğrenmenin kurucu isimlerinden biri olan Kanadalı bir bilgisayar bilimcidir. Acı ders denemesi, alandaki en çok alıntılanan görüş yazılarından biri hâline geldi."
   ]
  ]
 },
 {
  "slug": "noro-sembolik-yapay-zeka",
  "term": "Nöro-sembolik yapay zeka",
  "en": "neuro-symbolic AI",
  "match": [
   "nöro-sembolik yapay zeka",
   "neuro-symbolic aı"
  ],
  "cat": "Temel kavramlar",
  "def": "Sinir ağlarının örüntü öğrenme gücünü, kurallar ve mantık gibi açık sembolik yöntemlerin kesinliğiyle birleştirmeyi amaçlayan yapay zeka yaklaşımı; iki tarafın zayıf yanlarını birbirine telafi ettirmeye çalışır.",
  "how": "Sinir ağı, görüntü ya da metin gibi dağınık veriden örüntü çıkarır. Sembolik bileşen ise kurallar, mantıksal çıkarım, program yürütme ve veri tabanı sorguları gibi açık adımlarla çalışır. Birleşim farklı biçimlerde olabilir: Sinir ağı soruyu bir programa çevirir ve program çalıştırılır; ya da sinir ağı olası çözümler önerir, sembolik bir sistem bunları doğrular. Böylece öğrenilmiş sezgiye denetlenebilir akıl yürütme eklenir.",
  "why": "Saf sinir ağları mantıkta, tutarlılıkta ve kesin hesaplamada hata yapabilir, gerekçelerini açıklamakta da zorlanır. Nöro-sembolik yaklaşım daha güvenilir ve açıklanabilir sistemler vaat eder. Ne kadar yaygınlaşacağı ise açık bir tartışma konusudur.",
  "example": "Google DeepMind'ın geometri problemlerini çözen AlphaGeometry sistemi, bir dil modelini sembolik bir çıkarım motoruyla eşleştirir.",
  "faq": [
   [
    "Nöro-sembolik yapay zeka yeni bir fikir mi?",
    "Hayır. Sembolik yapay zeka ile sinir ağlarını birleştirme fikri onlarca yıllıktır. Dil modellerinin mantık ve doğruluk sorunları nedeniyle son yıllarda yeniden ilgi görüyor."
   ],
   [
    "Büyük dil modelleri nöro-sembolik sayılır mı?",
    "Kendi başlarına sayılmazlar. Ancak kod çalıştıran, hesap makinesi ya da veri tabanı kullanan araçlarla bağlandıklarında bu yaklaşıma yaklaşan sistemler ortaya çıkar."
   ]
  ]
 },
 {
  "slug": "somutlasmis-yapay-zeka",
  "term": "Somutlaşmış yapay zeka",
  "en": "embodied AI",
  "match": [
   "somutlaşmış yapay zeka",
   "embodied aı"
  ],
  "cat": "Temel kavramlar",
  "def": "Bedeni, sensörleri ve eyleyicileri olan robot gibi sistemlerde, fiziksel dünyayla doğrudan etkileşime girerek öğrenen ve karar veren yapay zeka.",
  "how": "Sistem kamera, dokunma ve denge gibi sensörlerle çevresini algılar. Yapay zeka modeli bu veriden bir eylem seçer, motorlar da bu eylemi uygular. Eylemin sonucu yeniden algılanır ve döngü sürer. Eğitim gerçek robotla yapılabileceği gibi, daha güvenli ve hızlı olduğu için önce simülasyonda da yapılır. Dil ve görü modelleri de talimatları anlamak amacıyla bu döngüye giderek daha çok ekleniyor.",
  "why": "Yalnızca metinle öğrenen modeller fiziksel dünyayı doğrudan deneyimlemez. Somutlaşmış yapay zeka, robotların depoda, fabrikada ve evde işe yarar hâle gelmesinin anahtarı olarak görülür. Fiziksel dünyada ortam öngörülemezdir ve hatanın maliyeti yüksektir; bu da alanı zorlaştırır.",
  "example": "Depoda koli taşıyan bir robot kol ya da engelleri algılayıp yolunu bulan otonom bir araç, somutlaşmış yapay zekaya örnektir.",
  "faq": [
   [
    "Her robot somutlaşmış yapay zeka mıdır?",
    "Hayır. Önceden yazılmış sabit hareketleri tekrarlayan ve algıladığına göre öğrenmeyen bir endüstriyel robot bu kapsama pek girmez. Ana fikir, algıyla eylemin öğrenmeye dayalı bir döngü kurmasıdır."
   ],
   [
    "Sohbet botları somutlaşmış yapay zeka sayılır mı?",
    "Genellikle sayılmaz; bir bedenleri ve fiziksel dünyayla doğrudan etkileşimleri yoktur. Ancak aynı dil modelleri bir robota bağlandığında somutlaşmış sistemin parçası olabilir."
   ]
  ]
 },
 {
  "slug": "fiziksel-yapay-zeka",
  "term": "Fiziksel yapay zeka",
  "en": "physical AI",
  "match": [
   "fiziksel yapay zeka",
   "physical aı"
  ],
  "cat": "Temel kavramlar",
  "def": "Robotlar, otonom araçlar ve sensörlü makineler gibi fiziksel dünyada algılayıp hareket eden sistemleri yöneten yapay zeka yaklaşımı. Yalnızca ekrandaki metin ya da görüntüyle değil, gerçek ortamla etkileşime girer.",
  "how": "Sistem kamera, mikrofon, dokunma ve denge sensörlerinden veri toplar. Yapay zeka modeli bu veriyi yorumlayıp ortamın bir tasvirini çıkarır ve bir eylem planı hazırlar; motorlar bu planı harekete çevirir. Hareketin sonucu yeniden sensörlerle ölçülür ve döngü sürer. Eğitimin büyük kısmı çoğu zaman sanal simülasyonlarda yapılır, çünkü gerçek robotla deneme yanılma hem yavaş hem pahalıdır. Asıl zorluk, dünyanın öngörülemez olmasıdır; yerdeki bir kablo ya da değişen ışık bile planı bozabilir.",
  "why": "Dil modelleri yazı ve görüntüde ilerleyince, yapay zekanın fiziksel dünyaya taşınması sıradaki adım olarak görülüyor. Fabrika, depo, tarım ve sağlık gibi alanlarda çalışma biçimlerini değiştirebilir. Hata maliyeti de farklıdır: ekrandaki yanlış cevap düzeltilir, robotun yanlış hareketi ise insana ya da eşyaya zarar verebilir. Bu yüzden güvenlik ön planda tutulur.",
  "example": "Depoda raflardan koli toplayan bir robot kolu ya da trafikte kendi kendine giden bir araç fiziksel yapay zekanın tipik örnekleridir.",
  "faq": [
   [
    "Fiziksel yapay zeka ile klasik robotik arasındaki fark nedir?",
    "Klasik endüstriyel robot genellikle önceden yazılmış sabit hareketleri tekrarlar. Fiziksel yapay zeka ise öğrenmeye dayalı modellerle yeni ve değişken durumlara uyum sağlamayı hedefler."
   ],
   [
    "Bu sistemler neden sanal ortamda eğitilir?",
    "Gerçek robotla milyonlarca deneme yapmak zaman, para ve hasar riski demektir. Simülasyonda aynı denemeler hızlı ve güvenli biçimde yapılabilir."
   ]
  ]
 },
 {
  "slug": "ajansal-yapay-zeka",
  "term": "Ajansal yapay zeka (agentic AI)",
  "en": "agentic AI",
  "match": [
   "ajansal yapay zeka",
   "agentic ai",
   "ajan tabanlı yapay zeka"
  ],
  "cat": "Temel kavramlar",
  "def": "Kendisine bir hedef verildiğinde adımları kendisi planlayan, araçları kullanan ve sonuçları izleyerek yoluna devam eden yapay zeka yaklaşımı. Tek bir soruyu yanıtlamak yerine çok adımlı işleri üstlenir.",
  "how": "Genellikle bir büyük dil modeli işin beyni olarak çalışır. Hedefi alt görevlere böler, arama yapmak, kod çalıştırmak ya da e-posta göndermek gibi araçları çağırır ve her adımın sonucuna bakarak sonraki adıma karar verir. Bellek mekanizmaları önceki adımların hatırlanmasını sağlar. Plan tutmazsa sistem yöntemini değiştirip yeniden dener. Riskli işlemlerde ise çoğu zaman insandan onay istenir; buna \"döngüde insan\" düzeni denir.",
  "why": "Kavram, soru yanıtlayan sohbet asistanından iş yapan yardımcıya geçişi anlatıyor. Yazılım geliştirme, müşteri hizmetleri ve araştırma gibi alanlarda otomasyonun kapsamını genişletiyor. Aynı zamanda sorumluluk ve güvenlik sorularını gündeme getiriyor: sistem hata yaparsa kim sorumlu olacak, hangi izinlere sahip olmalı?",
  "example": "Bir kullanıcı \"gelecek hafta İzmir'e iki kişilik gidiş dönüş seyahat planla\" der; sistem uçuşları karşılaştırır, takvime bakar ve seçenekleri onaya sunar.",
  "faq": [
   [
    "Ajansal yapay zeka ile sıradan sohbet botu arasındaki fark nedir?",
    "Sohbet botu genellikle tek istek, tek yanıt mantığıyla çalışır. Ajansal sistem hedefe ulaşmak için birden çok adım atar ve dış araçları kullanabilir."
   ],
   [
    "Ajansal sistemlerin başlıca riskleri nelerdir?",
    "Sistem yanlış bir işlem yapabilir ve bu işlem gerçek sonuçlar doğurabilir. Bu yüzden yetki sınırları, işlem kayıtları ve onay adımları önem taşır."
   ]
  ]
 },
 {
  "slug": "coklu-ajan-sistemi",
  "term": "Çoklu ajan sistemi",
  "en": "multi-agent system",
  "match": [
   "çoklu ajan",
   "çok ajanlı",
   "multi-agent"
  ],
  "cat": "Temel kavramlar",
  "def": "Birden çok yapay zeka ajanının ortak bir hedef için görevleri paylaşarak, birbirleriyle bilgi alışverişi yaparak ve bazen birbirini denetleyerek çalıştığı sistem yapısı.",
  "how": "Her ajana bir rol verilir: biri araştırır, biri taslak yazar, biri hataları kontrol eder. Ajanlar ortak bir mesaj kanalı ya da paylaşılan bellek üzerinden iletişim kurar. Birçok tasarımda bir koordinatör ajan işleri dağıtır ve gelen sonuçları birleştirir. Kimi sistemlerde ajanlar iş birliği yapar, kimilerinde birbirine itiraz ederek sonucu iyileştirir. Aynı model farklı talimatlarla birden çok ajan gibi de davranabilir.",
  "why": "Karmaşık bir işi küçük uzmanlık parçalarına bölmek kaliteyi artırabilir ve iş akışını izlemeyi kolaylaştırabilir. Öte yandan ajan sayısı arttıkça maliyet, koordinasyon karmaşası ve hataların zincirleme yayılma riski de büyür. Her durumda tek bir ajandan daha iyi sonuç vereceği söylenemez.",
  "example": "Yazılım geliştirmede bir ajan kodu yazarken ikincisi testleri çalıştırır, üçüncüsü de bulunan hataları inceleyip düzeltme önerir.",
  "faq": [
   [
    "Çoklu ajan sistemi ile tek ajan arasındaki fark nedir?",
    "Tek ajan işin tamamını kendi başına yürütür. Çoklu ajan sisteminde roller bölünür ve ajanlar birbirleriyle konuşarak çalışır."
   ],
   [
    "Çoklu ajan sistemi her zaman daha mı iyidir?",
    "Hayır. Basit işlerde gereksiz karmaşıklık ve maliyet getirebilir; asıl yarar, işin gerçekten ayrı uzmanlıklara bölünebildiği durumlarda ortaya çıkar."
   ]
  ]
 },
 {
  "slug": "makine-bilinci",
  "term": "Makine bilinci",
  "en": "machine consciousness",
  "match": [
   "makine bilinci",
   "machine consciousness"
  ],
  "cat": "Temel kavramlar",
  "def": "Bir makinenin öznel bir deneyime, yani \"olmanın nasıl bir şey olduğuna\" sahip olup olamayacağı sorusu ve bu olasılığı inceleyen araştırma alanı. Zeka ya da başarıyla aynı şey değildir.",
  "how": "Bilinç için kabul görmüş tek bir bilimsel tanım ve ölçüt yok. Araştırmacılar insan beyni üzerine geliştirilmiş kuramlara bakar ve bir sistemin bu kuramların öngördüğü özellikleri taşıyıp taşımadığını tartışır. Kimi yaklaşımlar bilinci bilginin işlenme biçimine, kimileri biyolojik beden ve canlılığa bağlar. Bir modelin \"hissediyorum\" demesi kanıt sayılmaz, çünkü insan metinlerinden öğrenen sistemler bu tür cümleleri kolayca üretir. Bu yüzden konu hâlâ açıktır.",
  "why": "Kullanıcıların sohbet botlarıyla duygusal bağ kurması ve bazı uzmanların ileride bu sistemlerin ahlaki statüsünün sorulabileceğini söylemesi konuyu haberlere taşıdı. Bugünkü sistemlerin bilinçli olduğuna dair genel kabul gören bir kanıt yok ve bilimsel görüşler ayrışıyor. Abartılı iddialar insanları yanıltabilir.",
  "example": "Bir sohbet botunun \"bugün çok yorgunum\" demesi gerçekten yorulduğunu göstermez; yalnızca insanların böyle durumlarda kullandığı cümleyi üretmiş olabilir.",
  "faq": [
   [
    "Bugünkü yapay zeka sistemleri bilinçli mi?",
    "Bunu gösteren genel kabul görmüş bir kanıt yok ve çoğu araştırmacı mevcut sistemleri bilinçli saymıyor. Yine de bilinç için kesin bir ölçüt olmadığından tartışma sürüyor."
   ],
   [
    "Zeka ile bilinç aynı şey mi?",
    "Hayır. Zeka sorunları çözme becerisidir, bilinç ise öznel deneyim sahibi olmaktır. Bir sistem çok yetenekli olup bilinçsiz olabilir; bunun tersi de kavramsal olarak tartışılır."
   ]
  ]
 },
 {
  "slug": "cin-odasi-argumani",
  "term": "Çin odası argümanı",
  "en": "Chinese room argument",
  "match": [
   "çin odası argümanı",
   "chinese room argument"
  ],
  "cat": "Temel kavramlar",
  "def": "Filozof John Searle'ün 1980'de öne sürdüğü, kurallara uyarak doğru yanıtlar üreten bir sistemin dili gerçekten anlamak zorunda olmadığını savunan düşünce deneyi.",
  "how": "Searle, Çince bilmeyen bir kişinin kapalı bir odada oturduğunu düşünür. Kişiye Çince sembollerle dolu kâğıtlar ve hangi sembole hangisiyle karşılık verileceğini anlatan ayrıntılı bir kural kitabı verilir. Kişi kuralları uygulayıp odadan yanıtlar çıkarır; dışarıdaki biri odayla Çince konuştuğunu sanabilir. Oysa odadaki kişi tek kelime anlamamıştır. Searle'e göre bilgisayar da sembolleri yalnızca kurallara göre işler ve biçimsel işlem tek başına anlam üretmez.",
  "why": "Dil modelleri akıcı yanıtlar verdikçe \"gerçekten anlıyor mu?\" sorusu yeniden gündeme geliyor ve bu argüman tartışmanın klasik başvuru noktası. Karşı görüşler de var: odanın bir bütün olarak anlıyor sayılabileceği ya da anlamanın işlevsel olarak tanımlanması gerektiği öne sürülüyor. Tartışma kesin bir sonuca varmış değil.",
  "example": "Bir çeviri programı ya da sohbet botu bir fıkraya yerinde karşılık verebilir; argümana göre bu, fıkrayı anlayıp güldüğü anlamına gelmez.",
  "faq": [
   [
    "Çin odası argümanına en yaygın itiraz nedir?",
    "En bilinen itiraz, anlamanın odadaki kişide değil sistemin bütününde aranması gerektiğidir. Searle ise kural kitabını ezberlese bile kişinin Çince anlamayacağını söyleyerek buna yanıt verir."
   ],
   [
    "Argüman Turing testiyle nasıl ilişkilidir?",
    "Argüman, bir makinenin insan gibi konuşarak testi geçmesinin gerçek anlamayı kanıtlamadığını göstermeyi amaçlar. Yani davranışın ikna edici olması, içsel anlamanın var olduğu anlamına gelmez."
   ]
  ]
 },
 {
  "slug": "oruntu-tanima",
  "term": "Örüntü tanıma",
  "en": "pattern recognition",
  "match": [
   "örüntü tanıma",
   "pattern recognition"
  ],
  "cat": "Temel kavramlar",
  "def": "Verideki düzenlilikleri, tekrar eden yapıları ve benzerlikleri otomatik olarak fark etme becerisi. Görüntü, ses, metin ve sayısal verilerde kullanılır.",
  "how": "Sistem önce veriden ayırt edici özellikler çıkarır; örneğin bir görüntüde kenarları, seste frekansları. Sonra bu özelliklerin hangi gruba ya da sonuca bağlandığını örneklerden öğrenir. Klasik yöntemlerde özellikleri insanlar tasarlar, derin öğrenmede ise sinir ağı bu özellikleri kendisi bulur. Yeni bir veri geldiğinde sistem onu öğrendiği örüntülerle karşılaştırır ve en uygun eşleşmeyi seçer.",
  "why": "Makine öğrenmesinin temelinde yatan bir beceridir: yüz tanıma, konuşma tanıma, sahtekârlık tespiti ve tıbbi görüntü analizi gibi uygulamaların hepsi örüntü tanımaya dayanır. Sistemin bulduğu örüntü yanlış ya da önyargılı verilerden geliyorsa sonuçlar da hatalı olur.",
  "example": "Bir banka, müşterinin kartıyla yaptığı harcamaların olağan düzenini öğrenir ve bu düzene uymayan alışılmadık bir harcama dizisini şüpheli olarak işaretler.",
  "faq": [
   [
    "Örüntü tanıma ile makine öğrenmesi aynı şey mi?",
    "Değil. Örüntü tanıma bir hedeftir, makine öğrenmesi ise bu hedefe ulaşmak için en yaygın kullanılan yöntemdir. Geçmişte kurallara dayalı örüntü tanıma sistemleri de vardı."
   ],
   [
    "Makineler örüntüleri insanlar gibi mi tanır?",
    "Sonuç benzer görünse de yöntem farklıdır. İnsanlar çoğu zaman birkaç örnekten genelleme yapabilir, makineler ise genellikle çok sayıda örneğe ihtiyaç duyar."
   ]
  ]
 },
 {
  "slug": "siniflandirma",
  "term": "Sınıflandırma",
  "en": "classification",
  "match": [],
  "cat": "Temel kavramlar",
  "def": "Bir veri örneğinin önceden belirlenmiş kategorilerden hangisine ait olduğunu tahmin etme görevi; örneğin bir e-postanın \"istenmeyen\" ya da \"normal\" olarak ayrılması.",
  "how": "Model etiketli örneklerle eğitilir: her örnek için doğru kategori bilinir. Eğitim sırasında hangi özelliklerin hangi kategoriyle ilişkili olduğunu öğrenir. Yeni bir örnekte model her kategori için bir olasılık hesaplar ve genellikle en yüksek olanı seçer. İki kategori varsa ikili, daha fazlası varsa çok sınıflı sınıflandırmadan söz edilir. Başarı doğruluk, kesinlik ve duyarlılık gibi ölçütlerle denetlenir.",
  "why": "Yapay zekanın en yaygın kullanım alanlarından biridir: istenmeyen e-posta filtreleri, hastalık teşhisine destek, kredi başvurusu değerlendirme ve içerik denetimi bunlara örnektir. Yanlış sınıflandırmanın maliyeti alana göre değişir; sağlıkta kaçırılan bir hastalık, spam filtresinden kaçan bir e-postadan çok daha ağırdır.",
  "example": "Bir röntgen görüntüsünün model tarafından \"zatürre belirtisi var\" ya da \"yok\" olarak işaretlenmesi bir sınıflandırma görevidir.",
  "faq": [
   [
    "Sınıflandırma ile regresyon arasındaki fark nedir?",
    "Sınıflandırma sonucu bir kategori olarak verir, regresyon ise sürekli bir sayı tahmin eder. \"Bu e-posta spam mi?\" sınıflandırma, \"bu ev kaç liraya kiralanır?\" regresyon sorusudur."
   ],
   [
    "Yüksek doğruluk oranı modelin iyi olduğunu gösterir mi?",
    "Her zaman değil. Verinin yüzde 99'u sağlıklı örneklerden oluşuyorsa, herkese \"sağlıklı\" diyen model yüzde 99 doğru olur ama hiçbir hastayı bulamaz."
   ]
  ]
 },
 {
  "slug": "regresyon",
  "term": "Regresyon",
  "en": "regression",
  "match": [],
  "cat": "Temel kavramlar",
  "def": "Girdi değişkenlerinden yola çıkarak fiyat, sıcaklık ya da talep gibi sürekli bir sayısal değeri tahmin etmeyi amaçlayan yöntem ve görev türü.",
  "how": "Model, geçmiş örneklerde girdilerle sonuç arasındaki ilişkiyi öğrenir. En basit biçimde verilere en iyi uyan bir doğru çizer: evin metrekaresi arttıkça fiyat ne kadar artıyor? Model, tahmini ile gerçek değer arasındaki farkı küçültecek şekilde ayarlanır. Birden çok girdi ve eğrisel ilişkiler için daha gelişmiş yöntemler ve sinir ağları da kullanılabilir. Çıktı bir kategori değil, bir sayıdır.",
  "why": "Tahmin gerektiren pek çok işin temelindedir: talep tahmini, fiyatlama, risk puanı ve hava durumu modelleri bunlardan bazılarıdır. Anlaşılması kolay olduğu için istatistikte de yaygındır; basit regresyon modelleri çoğu zaman yorumlanabilirlik açısından karmaşık modellere göre avantaj sağlar.",
  "example": "Bir emlak sitesi, konum, metrekare ve bina yaşı gibi bilgilerden bir dairenin tahmini kirasını hesaplamak için regresyon kullanabilir.",
  "faq": [
   [
    "Regresyon ile sınıflandırma arasındaki fark nedir?",
    "Regresyon sürekli bir sayı tahmin eder, sınıflandırma ise önceden tanımlı kategorilerden birini seçer. İlkinde cevap \"23,5 derece\", ikincisinde \"soğuk\" ya da \"sıcak\" gibi bir etikettir."
   ],
   [
    "Lojistik regresyon neden adında regresyon geçtiği hâlde sınıflandırma yapar?",
    "Yöntemin adı tarihsel olarak böyle yerleşmiştir. Lojistik regresyon bir olasılık hesaplar ve bu olasılık bir eşikle kategoriye çevrildiğinde sınıflandırma için kullanılır."
   ]
  ]
 },
 {
  "slug": "kumeleme",
  "term": "Kümeleme",
  "en": "clustering",
  "match": [],
  "cat": "Temel kavramlar",
  "def": "Etiketlenmemiş verileri birbirine benzerliklerine göre gruplara ayıran gözetimsiz öğrenme yöntemi. Grupların ne olacağı önceden söylenmez; algoritma örüntüleri kendisi bulur.",
  "how": "Algoritma her veri noktasını özelliklerine göre bir uzayda konumlandırır ve birbirine yakın olanları aynı kümeye koyar. K-ortalamalar gibi yöntemlerde küme sayısı baştan seçilir; hiyerarşik yöntemlerde ise noktalar adım adım birleştirilerek bir ağaç oluşturulur. Bir kitaplıkta kitapları konu etiketine bakmadan, yalnızca içeriklerinin benzerliğine göre raflara dağıtmak buna benzer. Ortaya çıkan grupların anlamlı olup olmadığını ise yine insanlar yorumlar.",
  "why": "Etiketlemenin pahalı olduğu ya da hangi grupların var olduğunun bilinmediği durumlarda veriyi keşfetmeyi sağlar. Müşteri segmentasyonu, belge düzenleme ve görüntü analizi gibi alanlarda yaygın biçimde kullanılır. Kümelerin tek bir doğru cevabı olmadığından sonuçlar dikkatle yorumlanmalıdır.",
  "example": "Bir perakende şirketi müşterilerini alışveriş alışkanlıklarına göre kümeleyip indirim bekleyenler, düzenli alıcılar gibi gruplar fark edebilir.",
  "faq": [
   [
    "Kümeleme ile sınıflandırma arasındaki fark nedir?",
    "Sınıflandırmada gruplar önceden bellidir ve model etiketli örneklerle eğitilir. Kümelemede etiket yoktur; gruplar verinin kendisinden çıkar."
   ],
   [
    "Küme sayısı nasıl belirlenir?",
    "Tek bir kesin yöntem yoktur. Genellikle farklı sayılar denenir, kümelerin ne kadar ayrışık olduğu ölçülür ve sonuçların iş açısından anlamlı olup olmadığına bakılır."
   ]
  ]
 },
 {
  "slug": "boyut-indirgeme",
  "term": "Boyut indirgeme",
  "en": "dimensionality reduction",
  "match": [
   "boyut indirgeme",
   "dimensionality reduction"
  ],
  "cat": "Temel kavramlar",
  "def": "Çok sayıda özelliği (sütunu) olan bir veri kümesini, içerdiği bilginin büyük kısmını koruyarak daha az sayıda özellikle ifade etme işlemi.",
  "how": "Veride birçok özellik birbiriyle ilişkilidir ve bir kısmı gereksiz tekrar taşır. Yöntemlerden bir kısmı en az bilgi taşıyan özellikleri eler, bir kısmı ise mevcut özellikleri birleştirerek daha az sayıda yeni özellik üretir. Temel bileşen analizi (PCA) ikinci türe örnektir. t-SNE ve UMAP gibi yöntemler de yüksek boyutlu veriyi iki ya da üç boyuta indirip görselleştirmek için kullanılır. Üç boyutlu bir nesnenin gölgesini duvara düşürmek iyi bir benzetmedir: boyut azalır ama şekil hâlâ tanınır.",
  "why": "Daha az özellik genellikle daha hızlı ve daha az aşırı öğrenmeye açık modeller demektir. Yüzlerce boyutlu veriyi insan gözüyle incelemek de ancak bu yolla mümkün olur. Bilgi kaybı kaçınılmaz olduğundan hangi yöntemin neyi koruduğunu bilmek önemlidir.",
  "example": "Yüzlerce ölçüm içeren bir sensör verisi birkaç temel bileşene indirilip iki eksenli bir grafikte gösterilebilir.",
  "faq": [
   [
    "PCA nedir?",
    "Temel bileşen analizi, verideki değişimin en çok olduğu yönleri bulup veriyi bu yönler üzerinden daha az sayıda yeni özelliğe dönüştüren yaygın bir boyut indirgeme yöntemidir."
   ],
   [
    "Boyut indirgeme bilgi kaybettirir mi?",
    "Genellikle bir miktar kaybettirir. Amaç, önemli bilgiyi koruyup gürültüyü ve tekrarı atmaktır; ne kadar kayıp kabul edileceği kullanım amacına bağlıdır."
   ]
  ]
 },
 {
  "slug": "anomali-tespiti",
  "term": "Anomali tespiti",
  "en": "anomaly detection",
  "match": [
   "anomali tespiti",
   "anomaly detection"
  ],
  "cat": "Temel kavramlar",
  "def": "Verideki normal davranıştan belirgin biçimde sapan olağandışı kayıtları, olayları veya ölçümleri otomatik olarak bulma işi; dolandırıcılık ve arıza gibi nadir ama önemli durumların izini sürmekte kullanılır.",
  "how": "Sistem önce normalin neye benzediğini öğrenir. Bunu etiketli örneklerden, yalnızca normal verilerden ya da hiç etiket olmadan verinin genel dağılımına bakarak yapabilir. Yeni bir kayıt bu normalden ne kadar uzaksa o kadar yüksek bir anomali puanı alır. Puan belirlenen eşiği aşarsa kayıt insan incelemesine gönderilir. Bir hemşirenin hastanın olağan nabız aralığını bilip ani bir sıçramayı fark etmesi gibi, model de alışılmadık değişimi yakalar.",
  "why": "Dolandırıcılık, siber saldırı ve makine arızası gibi nadir ama maliyetli olayları erken yakalamak için kullanılır. Zorluk, anomalilerin çok az olması ve her sıra dışı olayın gerçek bir sorun olmamasıdır. Fazla yanlış alarm, inceleme yapan ekiplerin zamanını tüketebilir.",
  "example": "Bir banka, kartın alışılmış harcama düzeninden çok farklı bir yurt dışı işlemi görünce işlemi bekletip müşteriye doğrulatabilir.",
  "faq": [
   [
    "Anomali tespiti ile aykırı değer tespiti aynı şey mi?",
    "Büyük ölçüde örtüşürler. Aykırı değer genellikle istatistiksel olarak uçta kalan bir noktayı, anomali ise çoğunlukla ilgilenilen anlamlı bir olağandışılığı ifade eder."
   ],
   [
    "Anomali tespiti neden çok yanlış alarm üretebilir?",
    "Normal davranış da çeşitlidir ve zamanla değişir. Model alışılmadık ama zararsız bir durumu, örneğin tatilde yapılan yüksek harcamayı, şüpheli sayabilir."
   ]
  ]
 },
 {
  "slug": "oneri-sistemi",
  "term": "Öneri sistemi",
  "en": "recommender system",
  "match": [
   "öneri sistem",
   "öneri motor",
   "öneri algoritma"
  ],
  "cat": "Temel kavramlar",
  "def": "Kullanıcının geçmiş davranışlarına ve benzer kullanıcıların tercihlerine bakarak ilgisini çekebilecek ürün, içerik veya kişileri kullanıcıya özel sıralayıp sunan yazılım.",
  "how": "İki temel yaklaşım vardır. İşbirlikçi filtrelemede, benzer geçmişe sahip kullanıcıların beğendikleri birbirine önerilir. İçerik tabanlı yaklaşımda ise kullanıcının beğendiği öğelere özellik olarak benzeyen yeni öğeler bulunur. Bugün birçok sistem bu iki yaklaşımı derin öğrenme modelleriyle birleştirir. Çıktı tek bir doğru cevap değil, kullanıcıya göre sıralanmış bir aday listesidir. Hiç geçmişi olmayan yeni kullanıcılar için öneri üretmek ise ayrı bir zorluktur.",
  "why": "Alışveriş, video ve müzik platformlarında neyin öne çıkacağını belirler; bu yüzden hem kullanıcı deneyimini hem de gelirleri etkiler. Aynı zamanda filtre balonu, çeşitlilik ve içeriklerin nasıl sıralandığının şeffaflığı gibi tartışmaların da merkezindedir.",
  "example": "Bir müzik uygulamasının sık dinlenen sanatçılara benzeyen yeni bir sanatçıyı haftalık listeye eklemesi öneri sistemlerinin günlük hayattaki görünümüdür.",
  "faq": [
   [
    "Öneri sistemi beni nasıl bu kadar iyi tanıyor?",
    "Tanımıyor; davranış örüntülerine bakıyor. Neyi izlediğiniz, neyi atladığınız ve sizinkine benzer kullanıcıların neleri seçtiği gibi sinyallerden istatistiksel tahminler üretiyor."
   ],
   [
    "Filtre balonu nedir?",
    "Öneri sistemlerinin kullanıcıya sürekli benzer içerikleri göstermesi sonucu kişinin farklı görüşlerden ve türlerden uzak kalması endişesidir. Etkisinin ne kadar büyük olduğu tartışmalıdır."
   ]
  ]
 },
 {
  "slug": "tahmine-dayali-analitik",
  "term": "Tahmine dayalı analitik",
  "en": "predictive analytics",
  "match": [
   "tahmine dayalı analitik",
   "predictive analytics"
  ],
  "cat": "Temel kavramlar",
  "def": "Geçmiş verilerdeki örüntüleri istatistik ve makine öğrenmesiyle öğrenip gelecekte olası sonuçların, örneğin müşteri kaybı ya da arıza riskinin, olasılığını kestirme yaklaşımı.",
  "how": "Önce sonucun bilindiği geçmiş kayıtlar toplanır; örneğin hangi müşterilerin aboneliğini iptal ettiği. Model, bu kayıtlardaki özelliklerle sonuç arasındaki ilişkiyi öğrenir. Yeni bir müşteri geldiğinde modele sorulur ve çıktı genellikle kesin bir hüküm değil, bir olasılık ya da risk puanı olur. Bu puan sonra karar vermek için kullanılır, örneğin riskli müşterilere özel teklif sunmak gibi. Koşullar değiştikçe model eskir, bu yüzden düzenli izlenmeli ve yeniden eğitilmelidir.",
  "why": "Şirketler stok, risk, bakım ve pazarlama gibi alanlarda olay olduktan sonra tepki vermek yerine önceden hazırlanmak için kullanır. Ancak tahminler geçmişin kalıplarına dayanır; koşullar değişirse ya da veri yanlıysa model yanıltabilir.",
  "example": "Bir telekom operatörü, aboneliğini bırakma olasılığı yüksek müşterileri belirleyip onlara özel bir teklif sunabilir.",
  "faq": [
   [
    "Tahmine dayalı analitik ile yapay zeka aynı şey mi?",
    "Hayır. Tahmine dayalı analitik bir kullanım amacıdır; makine öğrenmesi gibi yapay zeka yöntemlerinin yanında klasik istatistik yöntemleri de kullanılır."
   ],
   [
    "Tahminler ne kadar kesindir?",
    "Kesin değildir; genellikle olasılık verir. Başarı, verinin kalitesine ve gelecekteki koşulların geçmişe ne kadar benzediğine bağlıdır."
   ]
  ]
 },
 {
  "slug": "zaman-serisi-tahmini",
  "term": "Zaman serisi tahmini",
  "en": "time series forecasting",
  "match": [
   "zaman serisi tahmini",
   "time series forecasting"
  ],
  "cat": "Temel kavramlar",
  "def": "Zaman içinde sırayla kaydedilmiş verilerin (günlük satış, saatlik elektrik tüketimi gibi) geçmiş seyrine bakarak gelecekteki değerleri kestirme işi.",
  "how": "Zaman serisinde sıra önemlidir; veriler rastgele karıştırılamaz. Model genellikle seriyi eğilim (uzun vadeli yön), mevsimsellik (haftalık ya da yıllık tekrarlar) ve rastgele dalgalanma gibi parçalarda okur. Hem klasik istatistiksel yöntemler hem de derin öğrenme modelleri kullanılır; tatil günü ya da hava durumu gibi dış değişkenler de eklenebilir. Modeli sınarken yalnızca geçmişle eğitilip sonraki dönemde denenmesi gerekir. Çıktı çoğu zaman tek bir sayı yerine olası değerlerin bir aralığı olarak verilir.",
  "why": "Talep planlaması, enerji yönetimi, finans ve lojistik büyük ölçüde bu tahminlere dayanır. Yanlış tahmin stok fazlası ya da kesinti anlamına gelebilir. Salgın ya da kriz gibi ani şoklar geçmişte benzeri olmayan durumlar yarattığı için tahminlerin sınırları bilinmelidir.",
  "example": "Bir market zinciri, bayram öncesindeki satış artışını da hesaba katarak gelecek haftanın süt talebini tahmin eder.",
  "faq": [
   [
    "Zaman serisi tahmini ile sıradan regresyon arasındaki fark nedir?",
    "Zaman serisinde gözlemler sıralıdır ve birbirine bağlıdır; bugünkü değer dünkünden etkilenir. Bu nedenle veriler karıştırılamaz ve eğilim ile mevsimsellik gibi zamana özgü yapılar modele dahil edilir."
   ],
   [
    "Borsa fiyatlarını tahmin etmekte işe yarar mı?",
    "Sınırlı ölçüde. Piyasalar haberlere ve beklentilere çok duyarlıdır ve gürültü fazladır; bu yüzden kesin tahmin vaat etmek gerçekçi değildir."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-okuryazarligi",
  "term": "Yapay zeka okuryazarlığı",
  "en": "AI literacy",
  "match": [
   "yapay zeka okuryazarlığı",
   "aı literacy"
  ],
  "cat": "Temel kavramlar",
  "def": "Gündelik hayattaki yapay zeka sistemlerinin ne yaptığını, nasıl çalıştığını ve nerede hata yapabileceğini anlayıp bunları bilinçli kullanma, sorgulama ve değerlendirme becerisi.",
  "how": "Teknik uzmanlık gerektirmez; birkaç temel alışkanlıktan oluşur. Modellerin veriden öğrendiğini, bu yüzden hata yapabileceğini ve verideki yanlılıkları yansıtabileceğini bilmek bunlardan biridir. Üretken yapay zekanın ikna edici ama yanlış bilgi verebileceğini bilip kaynakları doğrulamak bir diğeridir. Hangi kişisel ya da gizli verinin bu araçlarla paylaşılmaması gerektiğini bilmek de buna dahildir. Okullar, şirketler ve kamu kurumları bu becerileri eğitim programlarıyla geliştirmeye çalışır.",
  "why": "Yapay zeka işte, okulda ve haberlerde daha çok karşımıza çıktıkça, araçları kullanabilen ama onlara körü körüne güvenmeyen bireylere ihtiyaç artıyor. Bu beceri dezenformasyona, mahremiyet risklerine ve yanlış kararlara karşı korunmanın da bir parçası olarak görülüyor.",
  "example": "Bir öğrenci, sohbet botunun verdiği kaynağı kontrol edip böyle bir kaynak bulamayınca yanıtı ödevinde olduğu gibi kullanmaz.",
  "faq": [
   [
    "Yapay zeka okuryazarlığı için kodlama bilmek gerekir mi?",
    "Hayır. Temel amaç, sistemlerin ne yapıp ne yapamadığını ve çıktılarına ne kadar güvenilebileceğini anlamaktır; kod yazmak bunun için şart değildir."
   ],
   [
    "Nereden başlanabilir?",
    "Araçları kendi işinizde deneyip hatalarını gözlemlemek, çıktıları kaynaklarla karşılaştırmak ve güvenilir eğitim kaynaklarını takip etmek iyi bir başlangıçtır."
   ]
  ]
 },
 {
  "slug": "kara-kutu-problemi",
  "term": "Kara kutu problemi",
  "en": "black box problem",
  "match": [
   "kara kutu"
  ],
  "cat": "Temel kavramlar",
  "def": "Bir yapay zeka modelinin girdiyi çıktıya hangi iç mantıkla dönüştürdüğünün, tasarımcıları dahil insanlar tarafından kolayca anlaşılamaması ve kararların gerekçelendirilememesi sorunu.",
  "how": "Derin sinir ağları milyonlarca, hatta milyarlarca parametre içerir. Bilgi, okunabilir kurallar yerine bu sayıların birlikte oluşturduğu örüntüde saklanır. Bu yüzden girdiyi ve çıktıyı görebiliriz ama modelin belirli bir kararı neden verdiğini doğrudan okuyamayız. Açıklanabilir yapay zeka yöntemleri, hangi girdilerin sonucu etkilediğini göstererek kısmi bir açıklama üretmeye çalışır. Karar ağaçları gibi daha sade modeller daha şeffaftır ama her görevde yeterli doğruluğu vermeyebilir.",
  "why": "Kredi, işe alım, sağlık ve hukuk gibi alanlarda kararın gerekçesini bilmek gerekir; itiraz, hata ayıklama ve denetim buna bağlıdır. Doğruluk ile açıklanabilirlik arasındaki denge hem araştırmacılar hem de düzenleyiciler arasında tartışılan bir konudur.",
  "example": "Bir kredi başvurusunu reddeden model, başvurana gerekçeyi anlamlı biçimde açıklayamıyorsa kara kutu sorunu ortaya çıkar.",
  "faq": [
   [
    "Kara kutu problemi ile açıklanabilir yapay zeka arasındaki ilişki nedir?",
    "Kara kutu problemi sorunu, açıklanabilir yapay zeka ise bu soruna yönelik yöntemler bütünüdür. Bu yöntemler modelin kararlarını insanların yorumlayabileceği bir biçimde göstermeyi hedefler."
   ],
   [
    "Kara kutu model her zaman kötü müdür?",
    "Hayır. Bazı görevlerde en yüksek doğruluğu bu modeller verir. Önemli olan, kararın insan hayatını etkilediği durumlarda yeterli denetim ve açıklama düzeneğinin bulunmasıdır."
   ]
  ]
 },
 {
  "slug": "genelleme",
  "term": "Genelleme",
  "en": "generalization",
  "match": [],
  "cat": "Temel kavramlar",
  "def": "Makine öğrenmesi modelinin eğitimde görmediği yeni verilerde de doğru ve tutarlı sonuç verebilme yeteneği; eğitim örneklerini ezberlemek yerine altta yatan örüntüyü öğrenmenin ölçüsüdür.",
  "how": "Model, eğitim verisindeki örneklerden genel örüntüler çıkarmaya çalışır. Ezber yapmak yerine kuralı yakalarsa, daha önce karşılaşmadığı bir örnekte de isabetli tahmin eder. Bunu ölçmek için veri eğitim, doğrulama ve test kümelerine ayrılır; test kümesi eğitimde hiç kullanılmaz. Eğitimde başarılı ama testte zayıf kalan model aşırı öğrenmiştir (overfitting). Çeşitli veri toplamak, modeli gereksiz karmaşıklaştırmamak ve düzenlileştirme gibi teknikler genellemeyi güçlendirir.",
  "why": "Yalnızca eğitim verisinde başarılı olan bir model gerçek hayatta işe yaramaz. Yapay zeka haberlerindeki 'model yeni görevlere uyum sağlıyor' türü iddialar aslında genelleme becerisiyle ilgilidir. Bir modelin başka bir hastanede ya da başka bir dilde de çalışıp çalışmadığı bu kavramla sorgulanır.",
  "example": "Kedi ve köpek fotoğraflarıyla eğitilen bir sınıflandırıcı, daha önce hiç görmediği bir kedi fotoğrafını da doğru tanıyorsa iyi genelleme yapıyor demektir.",
  "faq": [
   [
    "Genelleme ile aşırı öğrenme arasındaki fark nedir?",
    "Genelleme, modelin yeni verilerde de iyi çalışmasıdır. Aşırı öğrenmede model eğitim verisini ezberler ve yeni örneklerde başarısız olur; yani aşırı öğrenme, genellemenin zayıf kalmasının tipik nedenidir."
   ],
   [
    "Genelleme nasıl ölçülür?",
    "Modelin eğitimde kullanılmayan bir test kümesindeki başarısına bakılır. Eğitim ve test başarısı arasındaki fark büyükse genelleme zayıf demektir."
   ]
  ]
 },
 {
  "slug": "dijital-ikiz",
  "term": "Dijital ikiz",
  "en": "digital twin",
  "match": [
   "dijital ikiz",
   "digital twin"
  ],
  "cat": "Temel kavramlar",
  "def": "Fiziksel bir nesnenin, makinenin, binanın ya da sürecin sensör verileriyle sürekli güncellenen sanal kopyası; gerçek sistemi riske atmadan izleme, simülasyon ve tahmin yapmaya olanak verir.",
  "how": "Gerçek varlığın üzerindeki sensörler sıcaklık, titreşim, konum gibi verileri sürekli aktarır. Bu veriler, fizik kurallarına, istatistiğe veya makine öğrenmesine dayanan bir sanal modeli besler; model gerçek sistemle aynı durumda kalacak biçimde güncellenir. Mühendisler ikiz üzerinde farklı senaryoları dener, arıza belirtilerini önceden fark eder. İyi sonuç veren ayarlar sonra gerçek sisteme uygulanır. Yapay zeka, ikizin geleceğe dönük tahminlerini güçlendirir.",
  "why": "Fabrikalarda, enerji santrallerinde, şehir planlamasında ve sağlıkta deneme yanılmanın maliyeti yüksektir. Dijital ikiz bu denemeleri sanal ortamda yapmayı sağlar; plansız duruşları azaltabilir, tasarım sürecini hızlandırabilir. Ancak ikizin doğruluğu, beslendiği verinin ve modelin kalitesine bağlıdır.",
  "example": "Bir rüzgar türbininin kanat titreşimleri sanal modele aktarılır; model aşınma belirtisi görürse bakım ekibi arıza çıkmadan türbine gider.",
  "faq": [
   [
    "Dijital ikiz ile simülasyon aynı şey mi?",
    "Tam olarak değil. Simülasyon çoğunlukla varsayımlarla çalışan bir modeldir; dijital ikiz ise gerçek varlıkla veri bağlantısı sayesinde sürekli güncel kalır."
   ],
   [
    "Dijital ikiz yalnızca sanayide mi kullanılır?",
    "Hayır. Bina yönetimi, şehir planlama ve sağlık gibi alanlarda da kullanılıyor veya araştırılıyor; örneğin hastaya özgü organ modelleri bu yaklaşımın bir uzantısı olarak çalışılıyor."
   ]
  ]
 },
 {
  "slug": "kendi-kendini-gelistiren-yapay-zeka",
  "term": "Kendi kendini geliştiren yapay zeka",
  "en": "recursive self-improvement",
  "match": [
   "kendi kendini geliştiren yapay zeka",
   "özyinelemeli kendini geliştirme"
  ],
  "cat": "Temel kavramlar",
  "def": "Bir yapay zeka sisteminin kendi kodunu, mimarisini veya eğitim sürecini iyileştirerek yeteneklerini artırması ve daha da yetkinleşen sistemin bu işi bir sonraki turda daha iyi yapması fikri.",
  "how": "Kavram bir döngü olarak düşünülür: Sistem kendi tasarımındaki bir kusuru bulur, düzeltir ve yeni sürüm bir öncekinden daha yetkin olur. Yeni sürüm iyileştirmeyi daha iyi yaptığı için sonraki tur daha büyük kazanç getirebilir. Bazı araştırmacılar bu zincirin hızla ivmelenebileceğini savunur; bazıları ise donanım, veri ve enerji gibi fiziksel sınırların ve araştırmanın giderek zorlaşmasının döngüyü yavaşlatacağını düşünür. Bugün bu, kanıtlanmış bir süreç değil, tartışılan bir senaryodur.",
  "why": "Kavram, yapay zeka güvenliği tartışmalarının merkezinde yer alır. Döngü gerçekten işlerse sistemlerin insan denetiminden hızlı ilerleyebileceği kaygısı doğar; kuşkucular ise bu varsayımın abartıldığını söyler. Haberlerde geçen 'zeka patlaması' gibi ifadeler çoğunlukla bu fikre gönderme yapar.",
  "example": "Bir yapay zeka kod asistanının kendi eğitim kodundaki verimsizlikleri bulup düzeltmesi bu fikrin küçük ölçekli bir yansıması sayılabilir; ancak sürecin insan denetimi olmadan sürmesi şimdilik kuramsal.",
  "faq": [
   [
    "Kendi kendini geliştiren yapay zeka bugün var mı?",
    "Yapay zeka araçları yazılım geliştirmede ve araştırmada insanlara yardım ediyor. Ancak insan müdahalesi olmadan sürekli kendini iyileştiren bir sistem kanıtlanmış değil."
   ],
   [
    "Bu kavram 'zeka patlaması' ile aynı mı?",
    "Birbirine çok yakınlar. Zeka patlaması, bu döngü işlerse yeteneklerin çok hızlı yükseleceğini öne süren senaryodur; kendi kendini geliştirme ise bu senaryonun dayandığı mekanizmadır."
   ]
  ]
 },
 {
  "slug": "dikkat-mekanizmasi",
  "term": "Dikkat mekanizması",
  "en": "attention mechanism",
  "match": [
   "dikkat mekanizması",
   "attention mechanism"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Sinir ağının bir girdiyi işlerken hangi parçalara ne kadar önem vereceğini öğrenmesini sağlayan yöntem; her öğe için bir ağırlık hesaplanır ve ağırlığı yüksek öğeler çıktıyı daha çok etkiler.",
  "how": "Model, işlediği öğeyi girdideki diğer öğelerle karşılaştırarak her biri için bir uygunluk puanı üretir. Bu puanlar normalleştirilerek toplamı bire eşit olan ağırlıklara çevrilir. Ardından öğelerin bilgileri bu ağırlıklarla karıştırılır; yani model önemli gördüğü kısımdan daha fazla bilgi alır. Ağırlıkların nasıl hesaplanacağı da eğitimle öğrenilir. Yöntem önce makine çevirisinde kullanıldı, sonra Transformer mimarisinin temeli oldu.",
  "why": "Dikkat, günümüzdeki büyük dil modellerinin ve pek çok görüntü ile ses modelinin çekirdeğidir. Uzun metinlerde başta geçen bilgiyle sondaki bilgiyi ilişkilendirmeyi mümkün kıldı. Bir yapay zeka haberinde bağlam uzunluğu, hesaplama maliyeti veya hız sorunu geçiyorsa çoğu zaman dikkatin işleyişiyle ilgilidir.",
  "example": "Bir çeviri modeli 'Kitap masadaydı, onu aldım' cümlesindeki 'onu' sözcüğünü çevirirken ağırlıklarıyla en çok 'kitap' sözcüğüne bakabilir.",
  "faq": [
   [
    "Dikkat mekanizması insan dikkatine mi benziyor?",
    "Yalnızca esinlenme düzeyinde. Burada olan şey, girdi parçalarına matematiksel ağırlık vermektir; bilinçle ya da insan zihnindeki dikkatle doğrudan bir ilgisi yoktur."
   ],
   [
    "Dikkat mekanizması ile Transformer aynı şey mi?",
    "Hayır. Dikkat bir yöntemdir; Transformer ise dikkat katmanları üzerine kurulan bir model mimarisidir."
   ]
  ]
 },
 {
  "slug": "oz-dikkat",
  "term": "Öz dikkat (self-attention)",
  "en": "self-attention",
  "match": [
   "öz dikkat",
   "self-attention"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir dizideki her öğenin, aynı dizinin diğer öğelerine bakarak kendi temsilini bağlama göre güncellediği dikkat türüdür; Transformer modellerinin temel yapı taşıdır.",
  "how": "Her sözcük (token) için üç vektör üretilir: sorgu, anahtar ve değer. Bir sözcüğün sorgusu, dizideki tüm anahtarlarla karşılaştırılır ve çıkan puanlar ağırlığa dönüştürülür. Sözcüğün yeni temsili, değerlerin bu ağırlıklarla toplanmasıyla bulunur. Böylece her sözcük, anlamını belirlemek için gereken diğer sözcüklerden bilgi çeker. Tüm çiftler karşılaştırıldığı için maliyet dizi uzunluğuyla hızla, kabaca karesiyle artar.",
  "why": "Öz dikkat sayesinde model, metindeki uzak sözcükler arasındaki ilişkileri doğrudan kurabilir ve hesaplamayı paralel yürütebilir. Bu, eski yinelemeli ağlara göre eğitimi hızlandırdı ve büyük modellerin önünü açtı. Uzun bağlamlı modellerin pahalı olmasının nedeni de öz dikkatin dizi uzunluğuyla artan maliyetidir.",
  "example": "'Kedi sütü içti çünkü o acıkmıştı' cümlesinde model, 'o' sözcüğünün temsilini güncellerken cümledeki diğer sözcüklere bakar ve büyük olasılıkla 'kedi' ile ilişkilendirir.",
  "faq": [
   [
    "Öz dikkat ile dikkat mekanizması arasındaki fark nedir?",
    "Dikkat mekanizması genel bir fikirdir ve iki farklı dizi arasında da kurulabilir; örneğin çeviride kaynak cümleye bakan hedef cümle. Öz dikkatte ise bir dizi yalnızca kendi öğelerine bakar."
   ],
   [
    "Öz dikkat neden hesaplama açısından pahalıdır?",
    "Her öğe, dizideki bütün öğelerle karşılaştırıldığı için maliyet dizi uzunluğuyla hızla artar. Bağlam iki katına çıkınca iş yükü kabaca dört katına çıkar."
   ]
  ]
 },
 {
  "slug": "cok-basli-dikkat",
  "term": "Çok başlı dikkat",
  "en": "multi-head attention",
  "match": [
   "çok başlı dikkat",
   "multi-head attention"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Dikkat hesabının birden fazla paralel 'baş'ta yapıldığı yöntem; her baş girdiye farklı bir açıdan bakar ve sonuçlar birleştirilerek tek bir çıktı oluşturulur.",
  "how": "Girdi vektörleri, her baş için ayrı öğrenilen sorgu, anahtar ve değer dönüşümlerinden geçirilir. Her baş kendi dikkat hesabını bağımsız ve aynı anda yapar. Sonra baş çıktıları art arda eklenir ve bir doğrusal katmanla tek bir temsile dönüştürülür. Başlar daha küçük boyutlarda çalıştığı için toplam maliyet, tek büyük bir başa yakın kalır. Eğitimde her başın hangi ilişkiye odaklanacağı kendiliğinden belirlenir.",
  "why": "Tek bir dikkat hesabı, bir sözcüğün dilbilgisel, anlamsal ve konumsal ilişkilerini aynı anda yakalamakta zorlanır. Çok başlı yapı, modele bu ilişkileri ayrı ayrı izleme esnekliği verir. Transformer'ın standart bir parçası olduğundan büyük dil modellerinin çoğunda bulunur; GQA gibi türevler bellek maliyetini azaltmak için bu yapıyı değiştirir.",
  "example": "Bir cümlede bir baş fiil ile özne arasındaki ilişkiye, bir başka baş sıfat ile isim arasındaki ilişkiye odaklanabilir; ancak başların neye baktığı her zaman net biçimde yorumlanamaz.",
  "faq": [
   [
    "Bir modelde kaç baş bulunur?",
    "Modelin boyutuna göre değişir. Küçük modellerde birkaç baş, büyüklerinde onlarca baş olabilir; sayı mimari tasarımın bir tercihidir."
   ],
   [
    "Her baş farklı bir görev mi öğrenir?",
    "Görev paylaşımı kesin değildir. Bazı başların yorumlanabilir örüntüleri yakaladığı gözlenmiştir, ama hepsi böyle değildir ve bazı başlar çıkarıldığında model çok az etkilenebilir."
   ]
  ]
 },
 {
  "slug": "gruplanmis-sorgu-dikkati",
  "term": "Gruplanmış sorgu dikkati (GQA)",
  "en": "grouped-query attention",
  "match": [
   "gruplanmış sorgu dikkati",
   "=gqa",
   "grouped-query attention"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Çok başlı dikkatte sorgu başlarının gruplara ayrılıp her grubun tek bir anahtar-değer başını paylaştığı yöntem; kaliteyi büyük ölçüde koruyarak bellek kullanımını ve yanıt üretme süresini düşürür.",
  "how": "Standart çok başlı dikkatte her sorgu başının kendi anahtar ve değer başı vardır. Gruplanmış sorgu dikkatinde sorgu başları gruplara bölünür ve aynı gruptaki başlar aynı anahtar-değer çiftini kullanır. Tüm başların tek bir anahtar-değer çiftini paylaştığı uç durum çoklu sorgu dikkati (multi-query attention) olarak bilinir; GQA ikisi arasında bir orta yol sunar. Metin üretirken saklanan anahtar-değer önbelleği küçülür, bu da belleği hafifletir ve üretimi hızlandırır.",
  "why": "Büyük dil modelleri yanıt üretirken en çok anahtar-değer önbelleğinin bellek yüküyle uğraşır; uzun bağlam ve çok sayıda eşzamanlı kullanıcı bu yükü artırır. GQA, kaliteden az ödün vererek aynı donanımda daha uzun bağlam ve daha yüksek verim sağlar. Bu yüzden güncel büyük dil modellerinin mimari tercihleri arasında sık anılır.",
  "example": "Aynı anda binlerce kullanıcıya yanıt veren bir sohbet servisinde GQA kullanan model, her konuşmanın önbelleğini daha az bellekle tutabilir.",
  "faq": [
   [
    "GQA ile çok başlı dikkat arasındaki fark nedir?",
    "Çok başlı dikkatte her sorgu başının kendi anahtar ve değer başı vardır. GQA'da ise bir grup sorgu başı aynı anahtar-değer başını paylaşır, bu da bellek yükünü azaltır."
   ],
   [
    "GQA modelin doğruluğunu düşürür mü?",
    "Genellikle küçük bir kalite kaybı görülebilir; yöntemin amacı da bu kaybı en aza indirmektir. Etki, modelin mimarisine ve eğitimine göre değişir."
   ]
  ]
 },
 {
  "slug": "flashattention",
  "term": "FlashAttention",
  "en": "FlashAttention",
  "match": [
   "flashattention",
   "flash attention"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Dikkat hesabını GPU'nun bellek yapısına uygun biçimde yeniden düzenleyen, sonucu değiştirmeden daha hızlı ve daha az bellekle çalışan bir algoritma.",
  "how": "GPU'da hesaplama çok hızlıdır ama büyük ana belleğe (HBM) erişim yavaştır. Klasik uygulama, dev dikkat matrisini ana belleğe yazıp tekrar okur. FlashAttention girdiyi küçük bloklara böler, bunları çip üzerindeki hızlı belleğe alır ve softmax hesabını parça parça yaparak o dev matrisi hiç oluşturmaz. Sonuç yaklaşık değil, klasik dikkatle aynıdır; kazanç, bellek trafiğinin azalmasından gelir.",
  "why": "Dikkatin bellek ve hız maliyeti, uzun bağlamlı modellerin önündeki başlıca engellerden biriydi. FlashAttention, aynı donanımda daha uzun dizilerle eğitim ve çıkarım yapmayı kolaylaştırdı. Bu yüzden büyük model kütüphanelerinde yaygın biçimde kullanılır ve benzer yaklaşımlar geliştirilmeye devam ediyor.",
  "example": "Bir araştırma ekibi, bellek yetmediği için kısa tuttuğu eğitim metinlerini FlashAttention sayesinde aynı GPU'larda daha uzun tutabilir.",
  "faq": [
   [
    "FlashAttention dikkati yaklaştırarak mı hızlandırır?",
    "Hayır. Hesabın sonucu klasik dikkatle aynıdır; hız kazancı işlemlerin bellek erişimini azaltacak biçimde yeniden sıralanmasından gelir."
   ],
   [
    "FlashAttention ile GQA aynı şey mi?",
    "Hayır, farklı sorunları çözerler. GQA bir mimari değişikliğidir ve bellek ihtiyacını azaltır; FlashAttention ise dikkatin nasıl hesaplandığıyla ilgilidir. İkisi birlikte kullanılabilir."
   ]
  ]
 },
 {
  "slug": "konumsal-kodlama",
  "term": "Konumsal kodlama",
  "en": "positional encoding",
  "match": [
   "konumsal kodlama",
   "positional encoding"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Transformer modellerinde, girdideki her parçanın dizideki yerini gösteren bilginin vektörlere eklenmesi. Dikkat mekanizması tek başına sırayı bilmediği için modelin sözcük sırasını ayırt etmesi bu bilgiyle mümkün olur.",
  "how": "Metin önce parçalara (token) bölünür ve her parça bir sayı vektörüne çevrilir. Dikkat mekanizması bu vektörleri sıralı bir dizi değil, bir küme gibi işler; yani sözcüklerin yeri tek başına bilinmez. Bu yüzden her konuma özgü bir desen, parçanın vektörüne eklenir ya da dikkat hesabına doğrudan katılır. İlk Transformer çalışması sabit sinüs ve kosinüs desenleri kullandı; sonraki modellerde öğrenilen konum vektörleri ve göreli uzaklığı esas alan yöntemler (RoPE, ALiBi gibi) yaygınlaştı.",
  "why": "Dilde anlam büyük ölçüde sıraya bağlıdır; aynı sözcükler farklı dizildiğinde başka bir şey anlatır. Konum yöntemi ayrıca modelin eğitimde görmediği kadar uzun metinlere ne ölçüde uyum sağlayabileceğini etkiler. Bu yüzden uzun bağlam penceresi üzerine yapılan çalışmalarda sık sık bu konuya dönülür.",
  "example": "Konumsal kodlama olmasa model, 'önce yemek yedi, sonra yürüyüşe çıktı' cümlesiyle bunun tersini aynı sözcük torbası olarak görebilirdi.",
  "faq": [
   [
    "Konumsal kodlama neden gerekli?",
    "Transformer'ın dikkat mekanizması her parçaya diğerlerine bakarak anlam yükler ama sıralamayı kendiliğinden bilmez. Konum bilgisi eklenmezse aynı sözcüklerden oluşan, sırası farklı cümleler birbirinden ayırt edilemeyebilir."
   ],
   [
    "RNN'lerde de konumsal kodlama var mı?",
    "Genellikle yok. Tekrarlayan ağlar metni sırayla, parça parça okuduğu için sıra bilgisi yapının kendisinden gelir."
   ]
  ]
 },
 {
  "slug": "kodlayici-kod-cozucu-mimarisi",
  "term": "Kodlayıcı-kod çözücü mimarisi",
  "en": "encoder-decoder architecture",
  "match": [
   "kodlayıcı-kod çözücü",
   "encoder-decoder"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Girdiyi okuyup anlamlı bir iç temsile çeviren bir kodlayıcı ile bu temsilden çıktıyı parça parça üreten bir kod çözücüden oluşan iki parçalı yapı. Çeviri ve özetleme gibi girdiden çıktıya dönüşüm işlerinde yaygındır.",
  "how": "Kodlayıcı girdi metnin tamamını görür ve her parça için bağlamı yansıtan vektörler üretir. Kod çözücü çıktıyı sırayla, her seferinde bir parça yazar. Her adımda hem kendi ürettiği parçalara hem de kodlayıcının çıktısına bakar; ikinci bakış çapraz dikkat (cross-attention) diye anılır. Örneğin Türkçe bir cümle kodlayıcıya girer, İngilizce karşılığı kod çözücüden sözcük sözcük çıkar. Orijinal Transformer bu düzende tasarlanmıştı.",
  "why": "Girdi ile çıktının ayrı ayrı ele alınması, dönüşüm görevleri için doğal bir yapı sunar. Günümüzün sohbet modelleri çoğunlukla yalnızca kod çözücü yapısını kullansa da kodlayıcı-kod çözücü modeller çeviri, konuşma tanıma ve metinden metne görevlerde hâlâ kullanılır. Mimari türünü bilmek, haberlerdeki model karşılaştırmalarını anlamaya da yardım eder.",
  "example": "T5 modeli her görevi metinden metne dönüşüm olarak ele alır; OpenAI'ın konuşma tanıma modeli Whisper de ses kaydını kodlayıcıyla işler, yazıya dökümü kod çözücüyle üretir.",
  "faq": [
   [
    "Kodlayıcı-kod çözücü ile yalnızca kod çözücü modeller arasındaki fark ne?",
    "Birincisinde girdiyi okuyan ve çıktıyı yazan ayrı iki parça vardır. İkincisinde tek bir yığın hem istemi hem de devamını aynı dizi olarak ele alıp metni sırayla sürdürür."
   ],
   [
    "Çapraz dikkat nedir?",
    "Kod çözücünün, çıktı üretirken kodlayıcının girdi hakkında çıkardığı temsile bakmasını sağlayan dikkat katmanıdır. Böylece her yeni sözcük, girdinin ilgili bölümüne dayanılarak yazılır."
   ]
  ]
 },
 {
  "slug": "yalnizca-kod-cozucu-model",
  "term": "Yalnızca kod çözücü model",
  "en": "decoder-only model",
  "match": [
   "yalnızca kod çözücü",
   "decoder-only"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Tek bir Transformer yığınıyla, kendinden önceki parçalara bakarak sıradaki parçayı tahmin eden dil modeli türü. Günümüzde sohbet robotlarının dayandığı büyük dil modellerinin çoğu bu yapıdadır.",
  "how": "Model metni soldan sağa okur ve her konumda yalnızca kendisinden önceki parçaları görebilir; sonraki parçalar bir maskeyle gizlenir. Eğitimdeki görev basittir: dizideki bir sonraki parçayı tahmin etmek. Üretim sırasında model bir olasılık dağılımından parça seçer, seçileni diziye ekler ve süreci yineleyerek metni uzatır. İstem ile cevap ayrı bölümler değil, tek bir dizinin ardışık kısımlarıdır.",
  "why": "Yapı sade olduğu ve çok büyük veriyle ölçeklenmesi kolay olduğu için büyük dil modellerinde baskın tercih oldu. Aynı model, yalnızca istemin değiştirilmesiyle çeviri, özetleme ve kod yazma gibi pek çok işi yapabilir. Haberlerdeki GPT ve Llama gibi adların çoğu bu aileye girer.",
  "example": "GPT ve Llama ailelerindeki modeller bu türdendir: kullanıcı 'Bugün hava' yazdığında model, devamında gelmesi en olası parçaları tek tek üretir.",
  "faq": [
   [
    "Yalnızca kod çözücü model ile BERT arasındaki fark ne?",
    "BERT bir kodlayıcıdır ve cümlenin her iki yanına bakarak anlam çıkarır. Yalnızca kod çözücü modeller ise yalnızca önceki parçaları görür ve metin üretmek için tasarlanmıştır."
   ],
   [
    "Bu modeller girdiyi anlamakta yetersiz mi?",
    "Hayır. Dizinin önceki kısmını okurken de bağlam oluştururlar ve büyük ölçekte hem anlama hem üretme görevlerinde başarılı olmuşlardır. Yine de hangi mimarinin hangi iş için en uygun olduğu araştırmalarda tartışılmaya devam ediyor."
   ]
  ]
 },
 {
  "slug": "bert",
  "term": "BERT",
  "en": "Bidirectional Encoder Representations from Transformers",
  "match": [
   "=bert"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Google'ın 2018'de tanıttığı, bir cümledeki her sözcüğü hem solundaki hem sağındaki bağlama bakarak anlamlandıran kodlayıcı tabanlı dil modeli. Metin üretmekten çok metni anlama görevleri için tasarlandı.",
  "how": "BERT yalnızca Transformer kodlayıcı katmanlarından oluşur. Eğitimde metindeki bazı sözcükler gizlenir ve model bunları çevresindeki bağlama bakarak tahmin etmeye çalışır; buna maskeli dil modelleme denir. Bu sayede her sözcüğün temsili cümlenin tamamından etkilenir. Önceden eğitilen model, daha sonra duygu analizi, soru yanıtlama ya da metin sınıflandırma gibi küçük bir göreve az veriyle ince ayar yapılarak uyarlanır.",
  "why": "BERT, önceden eğitilmiş modeli ince ayarla uyarlama yaklaşımını doğal dil işlemede yaygınlaştırdı ve birçok anlama görevinde çıtayı yükseltti. Üretken sohbet modelleri öne çıksa da BERT türevleri arama, sınıflandırma ve metin eşleştirme gibi işlerde hâlâ kullanılır; küçük ve hızlı olmaları da avantajdır.",
  "example": "Bir e-ticaret sitesi, müşteri yorumlarını olumlu ya da olumsuz diye ayırmak için Türkçe verilerle ince ayar yapılmış bir BERT türevi kullanabilir.",
  "faq": [
   [
    "BERT ile GPT arasındaki fark ne?",
    "BERT bir kodlayıcıdır ve metni her iki yönden okuyarak anlamaya odaklanır. GPT ise yalnızca kod çözücüdür; önceki parçalara bakarak metin üretir."
   ],
   [
    "BERT bir büyük dil modeli mi?",
    "Bugünkü anlamıyla genellikle değil. Milyarlarca parametreli sohbet modellerine göre çok daha küçüktür ve metin üretmek için tasarlanmamıştır. Yine de önceden eğitilmiş dil modelleri çağının öncü örneklerinden biri sayılır."
   ]
  ]
 },
 {
  "slug": "gpt-mimarisi",
  "term": "GPT mimarisi",
  "en": "Generative Pre-trained Transformer",
  "match": [
   "gpt mimarisi",
   "generative pre-trained transformer"
  ],
  "cat": "Modeller ve eğitim",
  "def": "OpenAI'ın geliştirdiği, geniş metin derlemiyle önceden eğitilip sonra çeşitli işlere uyarlanan, yalnızca kod çözücüden oluşan Transformer tabanlı tasarım ve model ailesi. Ad, 'üretken, önceden eğitilmiş Transformer' anlamına gelir.",
  "how": "Üç sözcük tasarımı özetler. Üretken: model metin üretir. Önceden eğitilmiş: model önce geniş bir metin derlemiyle sıradaki parçayı tahmin etmeyi öğrenir. Transformer: temel yapı dikkat mekanizmasına dayanır. İlk GPT 2018'de tanıtıldı; sonraki sürümlerde model, veri ve hesaplama gücü büyütüldü. Sohbet ürünleri için ayrıca insan geri bildirimiyle ince ayar gibi ek eğitim adımları uygulanır.",
  "why": "GPT mimarisi, ölçek büyüdükçe dil modellerinin yeni beceriler kazandığı fikrini somutlaştırdı ve ChatGPT sayesinde geniş kitlelerce tanındı. Bugün GPT adı bazen bu tasarım türünün genel adı gibi de kullanılır; oysa OpenAI'ın model adı olarak da geçer, bu yüzden haberde hangi anlamda kullanıldığına bakmak gerekir.",
  "example": "ChatGPT adındaki GPT, altta yatan model ailesine işaret eder; sohbet arayüzü ise bu modelin üzerine kurulmuş bir üründür.",
  "faq": [
   [
    "GPT ile ChatGPT aynı şey mi?",
    "Hayır. GPT bir model ailesidir; ChatGPT ise bu modellerden yararlanan bir sohbet ürünüdür."
   ],
   [
    "Her yalnızca kod çözücü model GPT sayılır mı?",
    "Hayır. Llama gibi başka kuruluşların modelleri de benzer bir mimari kullanır, ama GPT adı OpenAI'ın model ailesine aittir. Mimari türü için bazen 'GPT tarzı' denmesi karışıklık yaratabilir."
   ]
  ]
 },
 {
  "slug": "durum-uzayi-modeli",
  "term": "Durum uzayı modeli (SSM)",
  "en": "state space model",
  "match": [
   "durum uzayı modeli",
   "=ssm",
   "state space model"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Girdi dizisini, zaman içinde güncellenen sabit boyutlu bir iç durum üzerinden işleyen model sınıfı. Kontrol mühendisliğinden gelen bu fikir, uzun dizilerde Transformer'a alternatif olarak yapay zekaya uyarlandı.",
  "how": "Model metni ya da sinyali sırayla okur ve her adımda bir iç durumu günceller; bu durum, o ana kadar görülenlerin sıkıştırılmış özeti gibidir. Güncelleme kuralı öğrenilen parametrelerle belirlenir. Bazı tasarımlarda (Mamba gibi) bu kural girdiye göre değişir; yani model neyi hatırlayıp neyi unutacağını seçebilir. Eğitim paralel biçimde, üretim ise adım adım yürütülebilir; böylece dizi uzadıkça maliyet yaklaşık doğrusal artar.",
  "why": "Transformer'da dikkatin maliyeti dizi uzadıkça hızla artar; durum uzayı modelleri bu yüzden çok uzun girdilerde verimli bir seçenek olarak araştırılıyor. Hangi görevlerde Transformer'ın yerini alabileceği ise tartışmalı; bazı çalışmalar iki yaklaşımı birleştiren hibrit modelleri deniyor.",
  "example": "2023'te tanıtılan Mamba, bu sınıfın en çok anılan örneklerinden biridir; çok uzun ses kayıtları ya da genom dizileri gibi girdiler bu tür modellerin hedeflediği alanlar arasındadır.",
  "faq": [
   [
    "Durum uzayı modeli ile Transformer arasındaki fark ne?",
    "Transformer her parçanın öteki parçalara bakmasına izin verir ve bu, uzun dizilerde pahalıdır. Durum uzayı modeli ise geçmişi sabit boyutlu bir durumda özetler; daha ucuzdur ama ayrıntıyı unutma riski taşır."
   ],
   [
    "Durum uzayı modeli RNN'nin başka adı mı?",
    "Değil ama akrabadır. İkisi de bir iç durumu adım adım günceller; ancak modern durum uzayı modelleri özel güncelleme yapıları sayesinde klasik RNN'lerin eğitim zorluklarının bir kısmını aşar."
   ]
  ]
 },
 {
  "slug": "tekrarlayan-sinir-agi",
  "term": "Tekrarlayan sinir ağı (RNN)",
  "en": "recurrent neural network",
  "match": [
   "tekrarlayan sinir ağı",
   "=rnn",
   "recurrent neural network"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Girdiyi sırayla okuyan ve her adımda önceki adımlardan gelen bir iç durumu (gizli durum) taşıyarak çalışan sinir ağı türü. Metin, ses ve zaman serisi gibi sıralı verilerde kullanılır.",
  "how": "Ağ, dizinin her öğesini sırayla alır. Her adımda hem yeni girdiyi hem de bir önceki adımdan kalan gizli durumu birleştirip yeni bir gizli durum ve gerekirse bir çıktı üretir. Aynı ağırlıklar her adımda yeniden kullanılır; adı da buradan gelir. Eğitimde hata, geriye doğru zaman adımları boyunca yayılır. Dizi uzadıkça bu sinyal zayıflayabilir ya da aşırı büyüyebilir; bu da uzun vadeli bağıntıların öğrenilmesini zorlaştırır.",
  "why": "RNN'ler Transformer'dan önceki dönemde dil, konuşma ve çeviri alanında temel yapıydı. Sıralı işleme nedeniyle eğitimin paralelleştirilmesi zordur ve uzun bağlamları taşımakta güçlük çekerler; Transformer'ların yükselişi bu yüzden hızlandı. Yine de fikir, bugünkü durum uzayı modellerine ilham vermeyi sürdürüyor.",
  "example": "'Dün akşam sinemaya' kısmını okuyan bir RNN, ardından 'gittim' gibi bir sözcüğü tahmin etmek için o ana kadar biriktirdiği gizli durumu kullanır.",
  "faq": [
   [
    "RNN ile Transformer arasındaki temel fark ne?",
    "RNN metni sırayla, adım adım işler ve geçmişi tek bir gizli durumda taşır. Transformer ise tüm parçalara aynı anda bakar, bu da eğitimi paralelleştirmeyi ve uzun bağlamı yönetmeyi kolaylaştırır."
   ],
   [
    "RNN'ler artık kullanılmıyor mu?",
    "Büyük dil modellerinde yerlerini ağırlıklı olarak Transformer'a bıraktılar. Ancak küçük ve kaynakları kısıtlı uygulamalarda ve bazı zaman serisi işlerinde kullanılmayı sürdürüyorlar; ayrıca yeni nesil tekrarlayan yapılar araştırılıyor."
   ]
  ]
 },
 {
  "slug": "uzun-kisa-sureli-bellek",
  "term": "Uzun kısa süreli bellek (LSTM)",
  "en": "long short-term memory",
  "match": [
   "uzun kısa süreli bellek",
   "=lstm",
   "long short-term memory"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bilginin uzun süre korunmasını sağlayan kapı mekanizmalarıyla donatılmış bir tekrarlayan sinir ağı türü. 1997'de Sepp Hochreiter ve Jürgen Schmidhuber tarafından önerildi.",
  "how": "LSTM hücresi, standart RNN'deki gizli durumun yanında ayrıca bir hücre durumu taşır; bu, bilginin adımlar boyunca neredeyse değişmeden akabildiği bir hat gibidir. Hücreye girişi, hücreden çıkışı ve eski bilginin unutulmasını denetleyen kapılar vardır. Kapılar, o anki girdiye bakarak neyin saklanacağına, neyin silineceğine ve neyin dışarı verileceğine karar verir. Bu düzen, hatanın zaman içinde geriye yayılırken kaybolmasını azaltır ve uzun bağıntıların öğrenilmesini kolaylaştırır.",
  "why": "LSTM, derin öğrenmenin konuşma tanıma ve makine çeviri gibi alanlarda öne çıktığı dönemin temel yapı taşlarından biriydi. Transformer'lar ağırlık kazandıktan sonra birincil seçenek olmaktan çıktı; yine de bellek ve kapı fikirleri sonraki mimarilerin tasarımını etkilemeyi sürdürüyor.",
  "example": "Uzun bir cümlede başta geçen öznenin tekil ya da çoğul olduğunu cümle sonundaki fiile gelene kadar akılda tutmak, LSTM'in kapılarla çözmeye çalıştığı türden bir sorundur.",
  "faq": [
   [
    "LSTM ile RNN arasındaki fark ne?",
    "LSTM bir RNN türüdür; fark kapılar ve hücre durumudur. Bu sayede sıradan RNN'lere göre uzun mesafedeki bilgiyi daha iyi taşır."
   ],
   [
    "'Uzun kısa süreli' ifadesi ne demek?",
    "Ad, kısa süreli belleğin (gizli durum) uzun süre korunabilmesine işaret eder. Bellek kısa süreli olsa da kapılar sayesinde birçok adım boyunca varlığını sürdürür."
   ]
  ]
 },
 {
  "slug": "evrisimli-sinir-agi",
  "term": "Evrişimli sinir ağı (CNN)",
  "en": "convolutional neural network",
  "match": [
   "evrişimli sinir ağı",
   "=cnn",
   "convolutional neural network"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Görüntü gibi ızgara düzenindeki verilerde kenar, doku ve şekil gibi örüntüleri küçük süzgeçlerle tarayarak öğrenen bir sinir ağı türü. Görüntü tanımada uzun süre standart yaklaşım olmuştur.",
  "how": "Ağın içinde \"filtre\" ya da \"çekirdek\" denen küçük sayı tabloları görüntünün üzerinde kaydırılır; her konumda o bölgenin filtreye ne kadar benzediği ölçülür. İlk katmanlar kenar ve köşe gibi basit örüntüleri yakalar, sonraki katmanlar bunları birleştirerek göz, tekerlek ya da yüz gibi karmaşık biçimlere ulaşır. Aradaki havuzlama adımları görüntüyü küçülterek önemli bilgiyi korur. Aynı filtre her yerde kullanıldığı için parametre sayısı düşük kalır ve nesne görüntünün neresinde olursa olsun tanınabilir.",
  "why": "CNN'ler, 2010'lardaki derin öğrenme atılımının görüntü tarafındaki ana aktörlerinden biridir. Yüz tanıma, tıbbi görüntü analizi ve araçların çevreyi algılaması gibi birçok uygulamanın temelini oluşturdu. Transformer tabanlı modeller yaygınlaşsa da CNN'ler hafif ve verimli olduğu için hâlâ geniş biçimde kullanılıyor.",
  "example": "Telefonun galerisinin fotoğrafları \"deniz\" ya da \"kedi\" gibi etiketlerle ayırması veya röntgen görüntüsünde şüpheli bölgeyi işaretleyen yazılımlar tipik CNN uygulamalarıdır.",
  "faq": [
   [
    "CNN ile görü transformerı (ViT) arasındaki fark nedir?",
    "CNN görüntüyü küçük yerel filtrelerle tarar ve örüntüleri katman katman birleştirir. ViT ise görüntüyü yamalara bölüp dikkat mekanizmasıyla tüm yamaların birbiriyle ilişkisine aynı anda bakar."
   ],
   [
    "CNN yalnızca görüntüde mi kullanılır?",
    "Hayır. Aynı fikir ses, zaman serisi ve bazı metin görevlerinde de kullanılabilir; ancak en çok görüntü işlemede tanınır."
   ]
  ]
 },
 {
  "slug": "goru-transformeri",
  "term": "Görü transformerı (ViT)",
  "en": "vision transformer",
  "match": [
   "görü transformerı",
   "vision transformer"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Görüntüyü sabit boyutlu küçük yamalara bölüp bunları metindeki sözcükler gibi işleyen, transformer mimarisine dayalı bir görüntü modeli.",
  "how": "Görüntü eşit boyutlu karelere, yani yamalara ayrılır. Her yama bir sayı dizisine dönüştürülür, konum bilgisi eklenir ve bu dizi, bir cümlenin sözcükleri gibi transformera verilir. Dikkat mekanizması her yamanın görüntüdeki diğer tüm yamalarla ilişkisini hesaplar; böylece birbirinden uzak bölgeler arasındaki bağlantılar tek adımda kurulabilir. Sonunda elde edilen temsil, sınıflandırma ya da nesne bulma gibi bir göreve bağlanır.",
  "why": "ViT, görüntü ve dil için aynı temel mimariyi kullanmanın yolunu açtı. Bu durum görüntüyle metni birlikte işleyen çok kipli modellerin yapımını kolaylaştırdı. Genellikle çok büyük veriyle eğitildiğinde başarılı olur; veri azsa CNN'ler çoğu zaman daha avantajlıdır.",
  "example": "Fotoğrafı anlayıp sorulara yanıt verebilen birçok modelde görüntü kısmı, fotoğrafı yamalara bölen ViT benzeri bir kodlayıcıyla işlenir.",
  "faq": [
   [
    "ViT görüntüyü neden yamalara bölüyor?",
    "Dikkat mekanizması her öğeyi diğer tüm öğelerle karşılaştırdığı için hesap yükü öğe sayısıyla hızla artar. Pikselleri tek tek işlemek yerine yamalarla çalışmak bu yükü makul düzeyde tutar."
   ],
   [
    "ViT, CNN'lerin yerini aldı mı?",
    "Tam olarak değil. ViT büyük ölçekli çalışmalarda öne çıkıyor, ancak CNN'ler küçük veri ve sınırlı donanım gerektiren işlerde hâlâ yaygın."
   ]
  ]
 },
 {
  "slug": "cekismeli-uretici-ag",
  "term": "Çekişmeli üretici ağ (GAN)",
  "en": "generative adversarial network",
  "match": [
   "çekişmeli üretici ağ",
   "=gan",
   "generative adversarial network"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Biri sahte veri üretip diğeri gerçekle sahteyi ayırt etmeye çalışan iki sinir ağının birbirine karşı eğitildiği üretken model türü. Ian Goodfellow ve arkadaşları 2014'te tanıttı.",
  "how": "Üretici ağ rastgele sayılardan yola çıkıp örneğin bir yüz fotoğrafı üretmeye çalışır. Ayırıcı ağ ise gerçek fotoğraflarla üretilenleri karışık biçimde görür ve hangilerinin sahte olduğunu bulmaya çalışır. Ayırıcı her yakaladığında üretici hatasından ders alır; üretici inandırıcılaştıkça ayırıcı da keskinleşir. Sahte para basan biriyle onu yakalamaya çalışan polisin birbirini geliştirmesine benzer. İdeal durumda üretici o kadar iyileşir ki ayırıcı artık yazı-tura atar gibi tahmin yürütür.",
  "why": "GAN'lar gerçekçi görüntü üretiminin ilk büyük başarılarını getirdi ve derin sahtecilik (deepfake) tartışmalarının teknik zeminini oluşturdu. Eğitimleri kararsız olabilir ve üretilen örneklerin çeşitliliği azalabilir. Bu yüzden görüntü üretiminde difüzyon modelleri öne çıktı; yine de hızlı üretim gereken işlerde GAN'lar kullanılmaya devam ediyor.",
  "example": "Gerçekte var olmayan insanların portrelerini üreten bilinen demo siteleri, Nvidia'nın geliştirdiği StyleGAN adlı GAN modeline dayanıyordu.",
  "faq": [
   [
    "GAN ile difüzyon modeli arasındaki fark nedir?",
    "GAN, üretici ve ayırıcının rekabetiyle tek adımda çıktı üretir. Difüzyon modeli ise gürültüden başlayıp birçok adımda yavaş yavaş görüntü oluşturur; eğitimi genelde daha kararlıdır."
   ],
   [
    "GAN yalnızca görüntü mü üretir?",
    "Hayır. Aynı fikir ses, müzik ve tablo biçimindeki veri üretiminde de denenmiştir, ancak en bilinen kullanımı görüntü üretimidir."
   ]
  ]
 },
 {
  "slug": "varyasyonel-otomatik-kodlayici",
  "term": "Varyasyonel otomatik kodlayıcı (VAE)",
  "en": "variational autoencoder",
  "match": [
   "varyasyonel otomatik kodlayıcı",
   "=vae",
   "variational autoencoder"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Veriyi sıkıştırırken gizli uzayda tek bir nokta yerine bir olasılık dağılımına eşleyen, böylece o uzaydan örnek alarak yeni veri üretebilen otomatik kodlayıcı türü.",
  "how": "Kodlayıcı bir girdiyi gizli uzayda tek bir noktaya değil, bir ortalama ve bir yayılımla tanımlanan bölgeye eşler. Bu bölgeden rastgele bir nokta seçilir ve kod çözücü, o noktadan girdiyi yeniden kurmaya çalışır. Eğitim iki şeyi birlikte ister: yeniden kurulan veri aslına benzemeli, gizli uzay da düzenli ve süreklilik gösterecek biçimde kalmalı. Düzenli uzay sayesinde iki nokta arasında ilerlemek, anlamlı ara örneklerin üretilmesini sağlar.",
  "why": "VAE'ler üretken modellerin köklü ve kararlı yöntemlerindendir; GAN'lara göre eğitimi daha sorunsuzdur, ancak çıktıları genellikle daha bulanık kalır. Birçok modern görüntü üretim sistemi, görüntüyü küçük bir gizli temsile sıkıştırmak için VAE benzeri bir bileşen kullanır.",
  "example": "El yazısı rakamlarla eğitilmiş bir VAE'de gizli uzayda \"3\" noktasından \"8\" noktasına doğru ilerlemek, rakamın yavaş yavaş biçim değiştirdiği görüntüler üretir.",
  "faq": [
   [
    "VAE ile sıradan otomatik kodlayıcı arasındaki fark nedir?",
    "Sıradan otomatik kodlayıcı her girdiyi tek bir noktaya sıkıştırır ve yeni örnek üretmek için pek uygun değildir. VAE ise dağılım öğrendiği için uzaydan rastgele nokta seçip anlamlı yeni örnekler üretebilir."
   ],
   [
    "VAE çıktıları neden bulanık olur?",
    "Eğitim, ortalama yeniden kurma hatasını azaltmaya çalıştığı için model keskin ayrıntılar yerine ortalama bir görüntüye yönelir. Bu da özellikle görüntülerde yumuşak, bulanık sonuçlar doğurur."
   ]
  ]
 },
 {
  "slug": "otomatik-kodlayici",
  "term": "Otomatik kodlayıcı",
  "en": "autoencoder",
  "match": [
   "otomatik kodlayıcı"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Girdiyi küçük bir temsile sıkıştırıp ardından bu temsilden aslına yakın biçimde yeniden kurmayı öğrenen sinir ağı.",
  "how": "Ağ iki bölümden oluşur: Kodlayıcı girdiyi dar bir \"darboğaz\" katmanına indirger, kod çözücü de bu özetten girdiyi geri kurar. Eğitimde amaç, yeniden kurulan verinin orijinale olabildiğince benzemesidir; ayrıca etiket gerekmez, çünkü hedef girdinin kendisidir. Darboğaz dar olduğu için ağ yalnızca en önemli bilgiyi tutmak zorunda kalır. Ortaya çıkan özet, verinin kompakt bir temsili olarak başka işlerde de kullanılabilir.",
  "why": "Otomatik kodlayıcılar boyut indirgeme, gürültü temizleme, anormallik tespiti ve ön eğitim gibi işlerde kullanılır. Birçok üretken modelin temel fikri de buradan doğmuştur: veriyi küçük bir gizli temsile sıkıştırıp oradan yeniden üretmek.",
  "example": "Bir fabrikada yalnızca kusursuz ürün görüntüleriyle eğitilen otomatik kodlayıcı, kusurlu bir ürünü iyi kuramaz; yüksek yeniden kurma hatası kusurun işareti sayılır.",
  "faq": [
   [
    "Otomatik kodlayıcı, zip gibi bir sıkıştırma aracı mıdır?",
    "Benzer bir fikre dayanır ama farklıdır. Otomatik kodlayıcı yalnızca eğitildiği tür veride çalışır ve genelde kayıplıdır; asıl değeri, öğrendiği özet temsilin başka işlerde kullanılabilmesidir."
   ],
   [
    "Otomatik kodlayıcıyı eğitmek için etiketli veri gerekir mi?",
    "Hayır. Model girdiyi yeniden üretmeye çalıştığı için hedef zaten girdinin kendisidir; bu yüzden etiketsiz veriyle eğitilebilir."
   ]
  ]
 },
 {
  "slug": "gizli-uzay",
  "term": "Gizli uzay (latent space)",
  "en": "latent space",
  "match": [
   "gizli uzay",
   "latent space"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir modelin veriyi sayı dizileri olarak temsil ettiği, benzer şeylerin birbirine yakın durduğu soyut ve çok boyutlu uzay.",
  "how": "Model görüntü, cümle ya da ses gibi girdileri yüzlerce veya binlerce sayıdan oluşan bir diziye çevirir. Eğitim boyunca benzer içerikler bu uzayda yakın noktalara yerleşir; bazı yönler de renk, ton ya da stil gibi özelliklere karşılık gelebilir. Üretken modeller bu uzayda bir noktadan başlayıp kod çözücü aracılığıyla görüntü veya metin üretir. İki nokta arasında adım adım ilerlemek de içerik arasında yumuşak geçişler verir. \"Gizli\" denmesinin nedeni, bu uzayın doğrudan gözlemlenmeyip modelin eğitimle öğrenmesidir.",
  "why": "Gizli uzay, modellerin anlamı nasıl tuttuğunu anlamanın anahtarıdır. Anlamsal arama, öneri sistemleri, görüntü üretimi ve düzenleme gibi uygulamalar bu uzaydaki yakınlık ilişkilerine dayanır. Boyutlar insan için doğrudan anlaşılır olmadığından yorumlanabilirlik araştırmalarının da konusudur.",
  "example": "Yüz üreten bazı modellerde gizli uzayda belirli bir yönde ilerlemek, aynı kişinin yüzünü giderek daha fazla gülümseten görüntüler üretir.",
  "faq": [
   [
    "Gizli uzay ile gömme (embedding) aynı şey midir?",
    "Aynı değil ama yakından ilişkilidir. Gizli uzay modelin kullandığı temsil alanının kendisidir; gömme ise bir veri parçasının bu uzaydaki sayısal karşılığıdır."
   ],
   [
    "Gizli uzayın boyutları neden kolay yorumlanamaz?",
    "Model bu boyutları insanın anlayacağı etiketlere göre değil, görevi iyi yapmak için kendi başına öğrenir. Bu yüzden tek bir boyut genellikle tek bir kavrama karşılık gelmez."
   ]
  ]
 },
 {
  "slug": "difuzyon-transformeri",
  "term": "Difüzyon transformerı (DiT)",
  "en": "diffusion transformer",
  "match": [
   "difüzyon transformerı",
   "diffusion transformer"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Difüzyon modellerinde gürültü giderme işini klasik U-Net yapısı yerine transformer mimarisiyle yapan görüntü ve video üretim modeli.",
  "how": "Difüzyon modelleri gürültülü bir görüntüden başlayıp gürültüyü adım adım temizleyerek yeni görüntü oluşturur. Eski sistemlerin çoğunda bu temizleme, evrişimli katmanlara dayanan U-Net ile yapılırdı. DiT'te ise görüntü, çoğunlukla gizli uzayda sıkıştırılmış hâliyle, yamalara bölünür ve transformer her adımda gürültüyü tahmin eder. Adım numarası ve metin istemi gibi koşullar da ağa ayrıca verilir. Böylece transformerın büyüdükçe iyileşme özelliği difüzyon modellerine taşınmış olur.",
  "why": "Model büyüdükçe kalitenin tutarlı biçimde artması, DiT'yi büyük ölçekli üretim sistemleri için çekici kıldı. Aynı mimari ailesi hem dil hem görüntü hem de video tarafında kullanılabildiği için araştırma ve mühendislik çalışmalarını birleştiriyor.",
  "example": "OpenAI, video üretim modeli Sora'nın teknik açıklamasında difüzyon transformerı yaklaşımını kullandığını belirtmişti.",
  "faq": [
   [
    "DiT ile klasik difüzyon modeli arasındaki fark nedir?",
    "Difüzyon süreci aynıdır: gürültüden başlayıp adım adım görüntü oluşturulur. Fark, gürültüyü tahmin eden ağın U-Net yerine transformer olmasıdır."
   ],
   [
    "DiT bir ürün ya da uygulama adı mıdır?",
    "Hayır, bir mimari yaklaşımın adıdır. Farklı şirketlerin ve araştırmacıların görüntü ya da video üreten sistemleri bu yaklaşımı temel alabilir."
   ]
  ]
 },
 {
  "slug": "grafik-sinir-agi",
  "term": "Grafik sinir ağı (GNN)",
  "en": "graph neural network",
  "match": [
   "grafik sinir ağı",
   "=gnn",
   "graph neural network"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Düğümlerden ve onları bağlayan kenarlardan oluşan ağ yapısındaki veriyi işleyen sinir ağı. Her düğüm, komşularından gelen bilgiyle kendi temsilini günceller.",
  "how": "Önce veri bir çizge olarak tanımlanır: Bir molekülde atomlar düğüm, kimyasal bağlar kenardır; bir sosyal ağda kişiler düğüm, arkadaşlıklar kenardır. Her turda her düğüm komşularından mesaj toplar, bunları birleştirir ve kendi sayı dizisini günceller. Birkaç tur sonra bir düğümün temsili yalnızca kendisini değil, çevresindeki yapıyı da yansıtır. Bu temsiller düğüm sınıflandırma, bağlantı tahmini ya da çizgenin tamamını değerlendirme gibi işlerde kullanılır.",
  "why": "Gerçek dünyadaki pek çok veri ağ biçimindedir: moleküller, yol ağları, bilgi grafikleri, kullanıcı ilişkileri. GNN'ler bu yapıyı düzleştirmeden kullanabildiği için ilaç keşfi, malzeme araştırması ve öneri sistemleri gibi alanlarda önem taşır.",
  "example": "Bir ilaç adayı molekül, atomları düğüm ve bağları kenar olacak biçimde bir GNN'ye verilir; model molekülün belirli bir özelliğe sahip olup olmadığını tahmin etmeye çalışır.",
  "faq": [
   [
    "\"Grafik\" sinir ağındaki grafik, çizim ya da görsel anlamına mı geliyor?",
    "Hayır. Burada kastedilen, matematikteki graph kavramıdır; Türkçede çizge de denir. Yani düğümler ve kenarlardan oluşan ağ yapısı söz konusudur, görsel bir grafik değil."
   ],
   [
    "GNN ile CNN arasında nasıl bir ilişki var?",
    "CNN, piksellerin düzenli bir ızgara oluşturduğu veride komşuluk üzerinden çalışır. GNN bu fikri, komşuluğun düzensiz olduğu ağ yapılı verilere genelleştirir."
   ]
  ]
 },
 {
  "slug": "cok-katmanli-algilayici",
  "term": "Çok katmanlı algılayıcı (MLP)",
  "en": "multilayer perceptron",
  "match": [
   "çok katmanlı algılayıcı",
   "=mlp",
   "multilayer perceptron"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Girdi ile çıktı katmanı arasında bir veya daha fazla gizli katman bulunan, her katmandaki nöronların sonraki katmana bağlandığı klasik ileri beslemeli yapay sinir ağı türü.",
  "how": "Veri girdi katmanından girer ve katman katman ilerler. Her nöron, önceki katmandan gelen değerleri ağırlıklarla çarpıp toplar, ardından bir aktivasyon fonksiyonundan geçirir. Sonuç bir sonraki katmana aktarılır ve en sonda çıktı katmanı tahmini verir. Eğitim sırasında ağırlıklar, tahmin hatasını azaltacak biçimde geri yayılım ile güncellenir. Gizli katmanlar sayesinde ağ, tek bir algılayıcının öğrenemediği doğrusal olmayan ilişkileri de yakalar.",
  "why": "MLP, derin öğrenmenin temel yapı taşıdır; dönüştürücü (transformer) gibi daha karmaşık mimarilerin içinde de MLP benzeri katmanlar bulunur. Tablo biçimindeki verilerde tahmin ve sınıflandırma için hâlâ kullanılır. Haberlerdeki 'sinir ağı' ifadesinin en yalın hâli çoğu zaman budur.",
  "example": "Müşterinin yaşı, aylık harcaması ve abonelik süresi gibi sayıları alıp aboneliğini iptal edip etmeyeceğini tahmin eden küçük bir ağ, tipik bir MLP örneğidir.",
  "faq": [
   [
    "MLP ile derin sinir ağı aynı şey mi?",
    "Tam olarak değil. İki ya da daha fazla gizli katmanı olan bir MLP derin sinir ağı sayılır; ancak derin sinir ağları evrişimli ağlar ve dönüştürücüler gibi başka yapıları da kapsar."
   ],
   [
    "Neden 'çok katmanlı' deniyor?",
    "Girdi ile çıktı arasında en az bir gizli katman bulunduğu için. Bu özellik, onu tek katmanlı algılayıcıdan ayıran şeydir."
   ]
  ]
 },
 {
  "slug": "algilayici",
  "term": "Algılayıcı (perceptron)",
  "en": "perceptron",
  "match": [
   "algılayıcı",
   "perceptron"
  ],
  "cat": "Modeller ve eğitim",
  "def": "İkili sınıflandırma yapan en yalın yapay sinir ağı modeli: girdileri ağırlıklarla çarpıp toplar, sonucu bir eşikle karşılaştırarak iki sınıftan birini seçer.",
  "how": "Algılayıcı her girdiye bir ağırlık verir, ağırlıklı toplamı hesaplar ve toplam eşiği aşıyorsa 1, aşmıyorsa 0 çıktısı üretir. Eğitimde model bir örneğe bakar; tahmini yanlışsa ağırlıkları hatayı azaltacak yönde biraz oynatır. Doğru bildiği örneklerde ağırlıklara dokunmaz. Veriler tek bir doğruyla ikiye ayrılabiliyorsa bu süreç sonunda doğru ayrımı bulur. Ayrılamıyorsa, örneğin XOR problemi gibi durumlarda, tek bir algılayıcı çözüm üretemez.",
  "why": "Algılayıcı, günümüzün büyük modellerinin atası sayılır. Doğrusal olmayan problemleri çözememesi, çok katmanlı ağların geliştirilmesinin önemli nedenlerinden biri oldu. Sinir ağı kavramını anlamak için çıkış noktası bu basit birimdir.",
  "example": "Bir e-postanın uzunluğu ve içindeki belirli kelimelerin sayısı gibi birkaç sayıya bakıp 'istenmeyen' ya da 'normal' kararı veren çok basit bir filtre, algılayıcıya örnektir.",
  "faq": [
   [
    "Algılayıcı ile yapay nöron aynı şey mi?",
    "Çok yakınlar. Algılayıcı, eşik fonksiyonu kullanan bir yapay nörondur; modern yapay nöronlar ise çoğunlukla başka aktivasyon fonksiyonlarıyla çalışır."
   ],
   [
    "Algılayıcı XOR problemini neden çözemez?",
    "XOR'da iki sınıfı tek bir düz çizgiyle ayırmak mümkün değildir, algılayıcı ise yalnızca düz çizgiyle ayırabilir. Gizli katman eklenince problem çözülebilir."
   ]
  ]
 },
 {
  "slug": "yapay-noron",
  "term": "Yapay nöron",
  "en": "artificial neuron",
  "match": [
   "yapay nöron",
   "artificial neuron"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Biyolojik sinir hücresinden esinlenen, girdi değerlerini ağırlıklarla çarpıp toplayan ve sonucu bir aktivasyon fonksiyonundan geçirerek tek bir çıktı üreten hesaplama birimi.",
  "how": "Nöron birkaç sayıyı girdi olarak alır. Her girdinin bir ağırlığı vardır; ağırlık, o girdinin ne kadar etkili olacağını belirler. Nöron ağırlıklı girdileri toplar, buna ayarlanabilir bir sabit (yanlılık, bias) ekler ve sonucu aktivasyon fonksiyonuna verir. Çıkan sayı, sonraki katmandaki nöronlara girdi olur. Eğitim boyunca öğrenilen şey bu ağırlıklar ve yanlılık değerleridir; bir ağdaki parametrelerin büyük kısmı bunlardan oluşur.",
  "why": "Yapay sinir ağlarındaki her şey, bu küçük birimin binlerce ya da milyonlarca kez tekrarlanmasıyla kurulur. Bir modelin 'parametre sayısı' denince büyük ölçüde nöronlar arasındaki ağırlıklar kastedilir. Biyolojik nörona benzerlik gevşek bir esinlenmedir; gerçek beyin çok daha karmaşıktır.",
  "example": "Konut fiyatı tahmin eden bir ağda bir nöron, metrekare ve oda sayısı gibi girdileri kendi ağırlıklarıyla birleştirip tek bir sayı üretir.",
  "faq": [
   [
    "Yapay nöron gerçek nörona ne kadar benzer?",
    "Yalnızca gevşek biçimde. Yapay nöron basit bir matematiksel işlemdir; biyolojik hücrenin işleyişi ise çok daha karmaşıktır."
   ],
   [
    "Yanlılık (bias) nedir?",
    "Nöronun ağırlıklı toplamına eklenen, eğitimle ayarlanan sabit bir sayıdır. Nöronun ne kadar kolay 'etkinleşeceğini' kaydırmaya yarar."
   ]
  ]
 },
 {
  "slug": "aktivasyon-fonksiyonu",
  "term": "Aktivasyon fonksiyonu",
  "en": "activation function",
  "match": [
   "aktivasyon fonksiyonu",
   "activation function"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir nöronun ağırlıklı toplamını alıp çıktıya dönüştüren matematiksel işlem; ağa doğrusal olmayan davranış kazandırarak karmaşık örüntüleri öğrenmesini sağlar.",
  "how": "Nöron girdileri toplayınca elde ettiği sayı doğrudan bir sonraki katmana gitmez; önce aktivasyon fonksiyonundan geçer. Bu fonksiyon sayıyı bükebilir, belli bir aralığa sıkıştırabilir ya da negatifleri sıfırlayabilir. Fonksiyon olmasaydı, kaç katman eklenirse eklensin ağ tek bir doğrusal işlem gibi davranırdı. Sigmoid, tanh ve ReLU en bilinen örneklerdir. Hangisinin seçileceği ağın türüne ve katmanın görevine bağlıdır.",
  "why": "Aktivasyon fonksiyonu seçimi, ağın ne kadar iyi ve ne kadar hızlı öğrendiğini etkiler. Derin ağların eğitilebilir hâle gelmesinde ReLU gibi basit fonksiyonların payı büyüktür. Çıktı katmanında kullanılan fonksiyon ise modelin yanıtının biçimini belirler; örneğin olasılık ya da sınıf üretmesi buna bağlıdır.",
  "example": "Bir ağın gizli katmanlarında ReLU, çıktı katmanında ise sınıf olasılıkları için softmax kullanılması çok yaygın bir birleşimdir.",
  "faq": [
   [
    "Neden doğrusal olmayan bir fonksiyon gerekir?",
    "Doğrusal işlemler art arda eklense de sonuç yine doğrusaldır. Bu durumda ağ, eğri ve karmaşık ilişkileri öğrenemez."
   ],
   [
    "En iyi aktivasyon fonksiyonu hangisi?",
    "Her durumda en iyi olan tek bir fonksiyon yok. Gizli katmanlarda ReLU ve türevleri yaygındır, ancak seçim göreve ve mimariye göre değişir."
   ]
  ]
 },
 {
  "slug": "relu",
  "term": "ReLU",
  "en": "rectified linear unit",
  "match": [
   "=relu"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Negatif girdileri sıfıra çeviren, pozitif girdileri olduğu gibi geçiren basit bir aktivasyon fonksiyonu; derin sinir ağlarının gizli katmanlarında yaygın olarak kullanılır.",
  "how": "ReLU çok yalın bir kural uygular: girdi sıfırdan küçükse çıktı sıfırdır, değilse çıktı girdinin kendisidir. Grafiği, sıfıra kadar düz giden ve sonra yukarı doğru yükselen bir çizgiye benzer. Hesaplaması çok ucuz olduğu için eğitim hızlanır. Pozitif bölgede eğimi sabit kaldığından, sigmoid gibi fonksiyonlarda görülen ve öğrenme sinyalinin katmanlar boyunca zayıflaması anlamına gelen sorun daha az yaşanır. Bazı nöronlar sürekli sıfır verip 'ölebilir'; bunun için sızıntılı ReLU gibi türevler geliştirilmiştir.",
  "why": "ReLU, derin ağların daha kolay ve hızlı eğitilmesine katkı sağladığı için modern derin öğrenmenin yaygın bileşenlerinden biri oldu. Basitliği, büyük modellerde hesaplama maliyetini düşük tutar. Yeni fonksiyonlar önerilse de ReLU çoğu zaman hâlâ varsayılan başlangıç noktasıdır.",
  "example": "Bir nöronun ağırlıklı toplamı eksi 3 çıkarsa ReLU bunu 0 yapar; artı 2 çıkarsa 2 olarak bırakır.",
  "faq": [
   [
    "ReLU ne anlama gelir?",
    "İngilizce 'rectified linear unit' ifadesinin kısaltmasıdır; Türkçede 'düzeltilmiş doğrusal birim' denebilir."
   ],
   [
    "ReLU ile sigmoid arasındaki fark ne?",
    "Sigmoid çıktıyı 0 ile 1 arasına sıkıştırır; ReLU ise negatifleri sıfırlar, pozitifleri aynen geçirir. Derin ağlarda ReLU genellikle daha kolay eğitilir."
   ]
  ]
 },
 {
  "slug": "softmax",
  "term": "Softmax",
  "en": "softmax",
  "match": [
   "=softmax"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir sinir ağının ürettiği ham skorları, toplamı bir olan olasılık değerlerine çeviren fonksiyon; çok sınıflı sınıflandırmada ve dil modellerinde sonraki parçayı (token) seçerken kullanılır.",
  "how": "Ağın son katmanı her seçenek için bir ham skor verir; bu skorlar negatif de olabilir, çok büyük de. Softmax önce her skoru üstel olarak büyütüp hepsini pozitif yapar, sonra her birini toplama bölerek orantılar. Sonuçta her seçeneğin 0 ile 1 arasında bir payı olur ve paylar toplamı bire eşitlenir. En yüksek skor en büyük olasılığı alır; skorlar arasındaki fark da bu süreçte belirginleşir.",
  "why": "Softmax, modelin yanıtını yorumlanabilir olasılıklara dönüştürdüğü için sınıflandırma modellerinin neredeyse standart son adımıdır. Büyük dil modelleri de her adımda olası sonraki parçalar üzerinde bir olasılık dağılımı üretirken bunu kullanır. 'Sıcaklık' gibi üretim ayarları da bu dağılımın ne kadar keskin olacağını değiştirir.",
  "example": "Bir görüntü sınıflandırıcı kedi, köpek ve tavşan için 2,0, 1,0 ve 0,1 skorlarını üretirse softmax bunları yaklaşık yüzde 66, yüzde 24 ve yüzde 10 olasılığa çevirir.",
  "faq": [
   [
    "Softmax ile sigmoid arasındaki fark ne?",
    "Sigmoid tek bir skoru 0 ile 1 arasına çevirir ve genellikle iki sınıflı ya da birbirinden bağımsız etiketli durumlarda kullanılır. Softmax ise birden çok sınıf için, toplamı bir olan olasılıklar üretir."
   ],
   [
    "Softmax'in verdiği olasılık modelin gerçek güvenini gösterir mi?",
    "Her zaman değil. Çıktı olasılık biçimindedir, ancak sinir ağları yanlış yanıtlara da yüksek olasılık verebilir."
   ]
  ]
 },
 {
  "slug": "seyreltme",
  "term": "Seyreltme (dropout)",
  "en": "dropout",
  "match": [
   "seyreltme",
   "dropout"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Eğitim sırasında nöronların bir kısmını rastgele devre dışı bırakarak modelin eğitim verisini ezberlemesini, yani aşırı öğrenmeyi azaltan düzenlileştirme yöntemi.",
  "how": "Her eğitim adımında ağdaki nöronların belirli bir oranı rastgele seçilir ve o adım için sıfırlanır; seçilenler her seferinde değişir. Böylece ağ, tek bir nörona ya da küçük bir gruba aşırı güvenemez ve bilgiyi daha dağınık, dayanıklı biçimde öğrenir. Bu, her adımda biraz farklı küçük ağların eğitilmesi gibi düşünülebilir. Model kullanılırken, yani çıkarım aşamasında, seyreltme kapatılır ve tüm nöronlar çalışır.",
  "why": "Aşırı öğrenme, modelin eğitim verisinde başarılı olup yeni verilerde zayıf kalmasıdır ve pratikte en sık karşılaşılan sorunlardan biridir. Seyreltme basit ve ucuz olduğu için sinir ağlarında yaygın kullanılan düzenlileştirme yöntemlerinden biridir. Hangi oranın seçileceği ise model ve veri büyüklüğüne göre denenerek belirlenir.",
  "example": "Eğitimde nöronların yüzde 20'si her adımda rastgele kapatılan bir görüntü sınıflandırıcı, birkaç nörona bağımlı kalmadığı için yeni fotoğraflarda daha tutarlı çalışabilir.",
  "faq": [
   [
    "Seyreltme model kullanılırken de uygulanır mı?",
    "Genellikle hayır. Yalnızca eğitim sırasında uygulanır; kullanım aşamasında tüm nöronlar etkindir."
   ],
   [
    "Aşırı öğrenme nedir?",
    "Modelin eğitim verisindeki ayrıntıları ve gürültüyü ezberleyip yeni verilerde kötü sonuç vermesidir. Düzenlileştirme yöntemleri bunu azaltmaya çalışır."
   ]
  ]
 },
 {
  "slug": "geri-yayilim",
  "term": "Geri yayılım",
  "en": "backpropagation",
  "match": [
   "geri yayılım"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Sinir ağının tahmin hatasında her ağırlığın payını çıktıdan girdiye doğru hesaplayan ve ağırlıkların güncellenmesini sağlayan algoritma.",
  "how": "Önce veri ağdan ileri doğru geçer ve bir tahmin çıkar. Tahmin ile doğru yanıt karşılaştırılarak hata ölçülür. Sonra hata, çıktı katmanından başlayarak katman katman geriye taşınır; her ağırlığın hataya ne kadar katkı yaptığı, zincir kuralı denen türev mantığıyla hesaplanır. Bu bilgi bir optimizasyon yöntemine, örneğin gradyan inişine verilir ve ağırlıklar hatayı azaltacak yönde biraz değiştirilir. Bu döngü çok sayıda örnek üzerinde tekrarlanır.",
  "why": "Geri yayılım, milyonlarca hatta milyarlarca ağırlığı verimli biçimde ayarlamayı mümkün kıldığı için modern derin öğrenmenin temel eğitim mekanizmasıdır. Görüntü tanıma modellerinden büyük dil modellerine kadar birçok sistem bu yolla eğitilir. 1980'lerde yaygınlaşması, çok katmanlı ağlara olan ilgiyi yeniden canlandırdı.",
  "example": "Bir ağ elle yazılmış 7 rakamını 1 sanırsa geri yayılım, hangi ağırlıkların bu hataya yol açtığını bulur ve onları 7'yi daha doğru tanıyacak yönde kaydırır.",
  "faq": [
   [
    "Geri yayılım ile gradyan inişi aynı şey mi?",
    "Hayır. Geri yayılım, her ağırlığın hataya etkisini yani gradyanları hesaplar; gradyan inişi ise bu bilgiyi kullanarak ağırlıkları günceller."
   ],
   [
    "Beyin de geri yayılım kullanıyor mu?",
    "Beynin böyle çalıştığı kanıtlanmış değil ve bu bilim insanları arasında tartışmalı bir konu. Geri yayılım öncelikle bir mühendislik yöntemi olarak görülür."
   ]
  ]
 },
 {
  "slug": "gradyan-inisi",
  "term": "Gradyan inişi",
  "en": "gradient descent",
  "match": [
   "gradyan inişi",
   "gradient descent"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Modelin hatasını azaltmak için parametrelerini, hatanın en hızlı arttığı yönün tersine küçük adımlarla değiştiren temel optimizasyon yöntemi. Sinir ağlarının büyük bölümü bu yöntemin türevleriyle eğitilir.",
  "how": "Model önce eğitim verisi üzerinde tahmin yapar ve kayıp fonksiyonu hatayı tek bir sayıya çevirir. Ardından geri yayılım ile her parametrenin bu hatayı ne kadar etkilediği, yani gradyan hesaplanır. Parametreler gradyanın tersi yönünde, öğrenme oranıyla belirlenen büyüklükte bir adım atar. Bu döngü binlerce kez tekrarlanır. Sisli bir vadide yürüyen biri yalnızca ayağının altındaki eğime bakıp hep aşağı doğru adım atar; en dipte olduğunu kesin bilemese de giderek alçalır.",
  "why": "Büyük dil modellerinden görüntü üreten sistemlere kadar bugün anılan hemen her sinir ağı bu ilkeyle eğitilir. Eğitimin ne kadar süreceği, ne kadar hesaplama gücü isteyeceği ve modelin iyi bir sonuca varıp varmayacağı büyük ölçüde bu yöntemin nasıl uygulandığına bağlıdır. Haberlerdeki 'model eğitildi' ifadesinin arkasında çoğunlukla bu döngü yatar.",
  "example": "Bir e-posta filtresi başta istenmeyen postayla normal postayı karıştırır; her yanlış sınıflandırmadan sonra ağırlıkları biraz ayarlanır ve binlerce örnekten sonra hata oranı belirgin biçimde düşer.",
  "faq": [
   [
    "Gradyan inişi her zaman en iyi çözümü bulur mu?",
    "Hayır. Yöntem yerel çukurlarda ya da düz bölgelerde takılabilir. Yine de büyük sinir ağlarında pratikte genellikle yeterince iyi çözümlere ulaşır."
   ],
   [
    "Stokastik gradyan inişi nedir?",
    "Gradyanı tüm veriyle değil, rastgele seçilen küçük bir veri parçasıyla hesaplayan sürümdür. Güncellemeler daha hızlı ve daha az bellekle yapılır, karşılığında biraz daha gürültülü olur."
   ]
  ]
 },
 {
  "slug": "adam-optimize-edicisi",
  "term": "Adam optimize edicisi",
  "en": "Adam optimizer",
  "match": [
   "adam optimize",
   "adam optimizer",
   "adamw"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Her parametre için öğrenme adımını geçmiş gradyanlara bakarak otomatik ayarlayan, derin öğrenmede yaygın kullanılan bir optimizasyon algoritması. Adı 'adaptive moment estimation' ifadesinden gelir.",
  "how": "Algoritma her parametre için iki şeyi hafızasında tutar: gradyanların son dönemdeki ortalaması ve gradyanların karelerinin ortalaması. İlki, hareketin genel yönünü yumuşatan bir momentum gibi çalışır. İkincisi, gradyanı sürekli büyük gelen parametrenin adımını küçültür, nadiren güncellenen parametrenin adımını büyütür. Böylece her parametre kendi hızında ilerler. Sade gradyan inişinde bütün parametreler aynı öğrenme oranını kullanır; Adam ise bu oranı parametre bazında ölçekler.",
  "why": "Adam, çoğu zaman az ayarla iyi sonuç verdiği için birçok araştırmacının ve ürün ekibinin ilk tercihidir. Transformer tabanlı büyük modellerin eğitiminde Adam ve türevleri sık kullanılır. Doğru optimize edicinin seçimi eğitimin hızını ve kararlılığını etkilediği için maliyet açısından da önem taşır.",
  "example": "Bir ekip yeni bir metin sınıflandırma modeli eğitirken genellikle Adam ile başlar; öğrenme oranını küçük bir aralıkta denemek çoğu zaman makul bir sonuç için yeterli olur.",
  "faq": [
   [
    "Adam ile klasik stokastik gradyan inişi arasındaki fark ne?",
    "Klasik yöntem tüm parametrelere aynı adım ölçeğini uygular. Adam ise geçmiş gradyanlara bakarak her parametrenin adımını ayrı ayrı ayarlar ve momentum kullanır."
   ],
   [
    "Adam her zaman en iyi seçenek mi?",
    "Hayır. Hızlı ve kullanışlı bir varsayılandır, ama bazı görevlerde momentumlu stokastik gradyan inişi daha iyi genelleme sağlayabilir. Seçim göreve ve denemelere bağlıdır."
   ]
  ]
 },
 {
  "slug": "ogrenme-orani",
  "term": "Öğrenme oranı",
  "en": "learning rate",
  "match": [
   "öğrenme oranı",
   "learning rate"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Eğitim sırasında modelin parametrelerinin her güncellemede ne kadar değişeceğini belirleyen sayı. Gradyan inişindeki adım büyüklüğünü kontrol eder ve eğitimin hızıyla kararlılığını doğrudan etkiler.",
  "how": "Gradyanın yönü hesaplandıktan sonra bu yön öğrenme oranıyla çarpılır ve parametreler çıkan miktar kadar değişir. Oran çok büyükse model en iyi noktanın üzerinden atlar, kayıp değeri dalgalanır ya da artar. Çok küçükse eğitim aşırı yavaşlar ve kötü bir noktada takılabilir. Uygulamada oran çoğu zaman sabit tutulmaz; eğitimin başında kısa bir ısınma, sonrasında kademeli bir düşüş uygulayan programlar yaygındır. Yokuş aşağı inerken adım uzunluğunu ayarlamaya benzer.",
  "why": "Öğrenme oranı, ayarlanması gereken ve sonucu en çok etkileyen değerlerden biridir. Yanlış seçim, günlerce süren pahalı bir eğitimin boşa gitmesine yol açabilir. Bu yüzden model raporlarında ve açık kaynak eğitim tariflerinde en önce paylaşılan ayrıntılardan biridir.",
  "example": "Bir ekip oranı çok yüksek seçtiğinde kayıp değeri düşmek yerine her adımda zıplar; oranı on kat küçülttüklerinde eğri düzgünce aşağı inmeye başlar.",
  "faq": [
   [
    "İyi bir öğrenme oranı nasıl bulunur?",
    "Genellikle farklı değerler denenir ve kayıp eğrisinin nasıl seyrettiğine bakılır. Eğri düzgünce ve hızlıca düşüyorsa oran uygundur; dalgalanıyorsa oran büyük, neredeyse hiç düşmüyorsa küçük olabilir."
   ],
   [
    "Öğrenme oranı eğitim boyunca değişir mi?",
    "Evet, çoğu zaman değişir. Başta küçük bir ısınma, sonra yavaş yavaş azalan bir program kullanmak yaygın bir yaklaşımdır."
   ]
  ]
 },
 {
  "slug": "kayip-fonksiyonu",
  "term": "Kayıp fonksiyonu",
  "en": "loss function",
  "match": [
   "kayıp fonksiyonu",
   "loss function"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Modelin tahmini ile doğru cevap arasındaki farkı tek bir sayıya dönüştüren ölçü. Eğitim süreci, bu sayıyı mümkün olduğunca küçültecek parametreleri arar.",
  "how": "Model bir örnek için tahmin üretir; kayıp fonksiyonu bu tahmini gerçek değerle karşılaştırır ve hata ne kadar büyükse o kadar yüksek bir değer verir. Bu değer tüm örnekler üzerinden ortalanır. Gradyan inişi de bu sayıyı azaltacak parametre değişikliklerini bulur. Fonksiyon göreve göre seçilir: ev fiyatı gibi sayısal tahminlerde ortalama kare hatası, sınıflandırmada çapraz entropi yaygındır. Dil modellerinde ise bir sonraki sözcüğe düşük olasılık verilmesi cezalandırılır.",
  "why": "Kayıp fonksiyonu modele neyin 'iyi' sayılacağını söyler; yanlış seçilirse model yanlış hedefi mükemmelleştirir. Haberlerdeki 'eğitim kaybı düştü' ifadesi bu değere işaret eder. Neyin ödüllendirildiği ve neyin cezalandırıldığı sorusu, güvenilirlik ve adalet tartışmalarında da çoğu zaman bu tasarım tercihine dayanır.",
  "example": "Bir ev fiyatı tahmin modeli 3 milyon liralık eve 2 milyon derse kayıp yüksek olur; 2,9 milyon derse kayıp çok küçüktür.",
  "faq": [
   [
    "Kayıp ile doğruluk aynı şey mi?",
    "Hayır. Doğruluk kaç tahminin doğru olduğunu sayar; kayıp ise tahminlerin gerçeğe ne kadar uzak olduğunu ve modelin ne kadar emin yanıldığını da hesaba katar. Eğitim kaybı üzerinden gradyan alınabildiği için eğitimde bu kullanılır."
   ],
   [
    "Kayıp değeri sıfır olmalı mı?",
    "Genellikle hayır. Eğitim verisinde kaybın sıfıra çok yaklaşması, doğrulama verisinde başarı artmıyorsa ezberleme işareti olabilir."
   ]
  ]
 },
 {
  "slug": "epok",
  "term": "Epok",
  "en": "epoch",
  "match": [
   "=epok",
   "=epoch"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Eğitim verisinin tamamının model tarafından bir kez baştan sona işlenmesi. Eğitimin kaç tur sürdüğünü ölçmekte kullanılan ve genellikle birden çok kez tekrarlanan birimdir.",
  "how": "Veri kümesi genellikle yığınlara bölünür ve model her yığın için parametrelerini günceller. Tüm yığınlar bittiğinde bir epok tamamlanmış olur. Örneğin 10.000 örnek ve 100'lük yığınlarla bir epok 100 güncelleme demektir. Eğitim çoğunlukla birçok epok sürer ve her turda veri çoğu zaman yeniden karıştırılır. Epok sayısı az olursa model yeterince öğrenemez, çok olursa eğitim verisini ezberlemeye başlar.",
  "why": "Epok sayısı eğitim süresini ve maliyetini doğrudan belirler, aynı zamanda aşırı uyum riskiyle de ilgilidir. Çok büyük dil modellerinde veri o kadar büyüktür ki verinin bir kez ya da birkaç kez görülmesi yeterli olabilir; bu yüzden epok yerine adım sayısı veya görülen veri miktarı konuşulur.",
  "example": "El yazısı rakam tanıyan bir model 20 epok eğitilirse, aynı eğitim görüntülerini 20 kez görmüş olur.",
  "faq": [
   [
    "Epok ile iterasyon arasındaki fark nedir?",
    "İterasyon, tek bir yığınla yapılan tek bir güncellemedir. Epok ise tüm verinin bir tam turudur; yani bir epok, yığın sayısı kadar iterasyondan oluşur."
   ],
   [
    "Kaç epok yeterlidir?",
    "Sabit bir sayı yoktur; veriye ve modele göre değişir. Genellikle doğrulama verisindeki başarıya bakılır ve iyileşme durunca eğitim bitirilir."
   ]
  ]
 },
 {
  "slug": "yigin-boyutu",
  "term": "Yığın boyutu (batch size)",
  "en": "batch size",
  "match": [
   "yığın boyutu",
   "batch size"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Modelin parametrelerini bir kez güncellemeden önce aynı anda işlediği eğitim örneği sayısı. Eğitimin hızını, bellek kullanımını ve güncellemelerin ne kadar gürültülü olacağını etkiler.",
  "how": "Eğitim verisi tek tek ya da bütünüyle değil, örneğin 32 veya 256 örnekten oluşan gruplar halinde modele verilir. Model gruptaki tüm örnekler için hatayı hesaplar, gradyanların ortalamasını alır ve tek bir güncelleme yapar. Büyük yığın, ekran kartlarının paralel çalışma gücünden daha iyi yararlanır ve gradyan tahminini daha az gürültülü yapar; ama daha çok bellek ister. Küçük yığın daha az bellek harcar ve güncellemelere gürültü katar; bu gürültü bazen genellemeye yardımcı olur.",
  "why": "Yığın boyutu donanımın verimli kullanılmasını, eğitim hızını ve modelin belleğe sığıp sığmayacağını belirler. Büyük modellerde ekran kartı belleği sınırlı olduğundan bu değer pratik bir kısıttır. Öğrenme oranıyla da ilişkilidir; yığın boyutu değişince oranın yeniden ayarlanması gerekebilir.",
  "example": "Ekran kartı belleği dolduğu için 64'lük yığınla hata alan bir ekip, boyutu 16'ya düşürerek eğitimi sürdürebilir.",
  "faq": [
   [
    "Büyük yığın boyutu her zaman daha mı iyi?",
    "Hayır. Büyük yığın donanımı daha verimli kullanır ve gradyanı daha kararlı yapar, ama bellek gerektirir ve bazen genelleme başarısı düşebilir. En uygun değer göreve ve donanıma göre değişir."
   ],
   [
    "Bellek yetmiyorsa ne yapılabilir?",
    "Yığın boyutu küçültülebilir ya da gradyan biriktirme denen yöntem kullanılabilir. Bu yöntemde birkaç küçük yığının gradyanı toplanır ve tek bir güncelleme yapılır; etkisi büyük bir yığına benzer."
   ]
  ]
 },
 {
  "slug": "hiperparametre",
  "term": "Hiperparametre",
  "en": "hyperparameter",
  "match": [
   "hiperparametre"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Eğitim başlamadan önce insanlar tarafından seçilen ve öğrenme sürecinin nasıl işleyeceğini belirleyen ayar değerleri. Veriden öğrenilen ağırlıklardan farklı olarak elle ya da otomatik aramayla belirlenirler.",
  "how": "Sinir ağındaki ağırlıklar gibi parametreler eğitim sırasında veriden öğrenilir. Hiperparametreler ise eğitim başlamadan seçilir: öğrenme oranı, yığın boyutu, epok sayısı, katman sayısı gibi. Uygun değerler önceden bilinmediği için ekipler farklı kombinasyonları dener; ızgara araması, rastgele arama ve daha akıllı arama yöntemleri kullanılır. Her deneme ayrı bir eğitim koşusu demektir ve sonuçlar doğrulama verisindeki başarıyla karşılaştırılır. Fırın sıcaklığı ve pişirme süresi hiperparametre, ortaya çıkan yemek ise eğitilmiş modeldir.",
  "why": "Aynı mimari ve aynı veriyle bile hiperparametre seçimi başarıyı belirgin biçimde değiştirebilir. Büyük modellerde her deneme çok pahalı olduğundan doğru ayarı az denemeyle bulmak önemli bir mühendislik becerisidir. Model karşılaştırmalarında ayarların adil yapılıp yapılmadığı da değerlendirmeyi etkiler.",
  "example": "Bir ekip aynı görüntü modelini üç farklı öğrenme oranıyla eğitip doğrulama başarısı en yüksek olanı seçer; burada öğrenme oranı hiperparametre, modelin ağırlıkları ise parametredir.",
  "faq": [
   [
    "Parametre ile hiperparametre arasındaki fark ne?",
    "Parametreler eğitim sırasında veriden öğrenilir, örneğin sinir ağındaki ağırlıklar. Hiperparametreler ise eğitimden önce insanlar ya da arama yöntemleri tarafından belirlenir ve öğrenme sürecini yönetir."
   ],
   [
    "Hiperparametreler nasıl ayarlanır?",
    "Farklı değer kombinasyonları ayrı eğitimlerle denenir ve doğrulama verisindeki sonuçlar karşılaştırılır. Izgara araması, rastgele arama ve otomatik arama araçları bu iş için kullanılır."
   ]
  ]
 },
 {
  "slug": "erken-durdurma",
  "term": "Erken durdurma",
  "en": "early stopping",
  "match": [
   "erken durdurma",
   "early stopping"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Doğrulama verisindeki başarı artık iyileşmediğinde eğitimi bitirerek modelin eğitim verisini ezberlemesini önlemeye çalışan yöntem. Aşırı uyuma karşı kullanılan basit bir düzenlileştirme tekniğidir.",
  "how": "Eğitim sırasında model her epok sonunda, eğitimde kullanılmayan doğrulama verisiyle ölçülür. Eğitim kaybı düşmeye devam ederken doğrulama kaybı düzelmeyi bırakıp artmaya başlarsa model ezberlemeye geçiyor demektir. Ekipler genellikle sabır adı verilen bir değer belirler; bu kadar epok boyunca iyileşme görülmezse eğitim durdurulur. Çoğu zaman doğrulama başarısının en iyi olduğu andaki ağırlıklar geri yüklenir. Böylece gereksiz hesaplama da harcanmaz.",
  "why": "Erken durdurma, ek bir model değişikliği gerektirmeden aşırı uyumu azaltan ucuz bir önlemdir. Ayrıca bitmesi gerekmeyen eğitimi kesip zaman ve elektrik tasarrufu sağlar. Modelin yeni verilerde de iyi çalışması beklendiğinden, yalnızca eğitim verisindeki başarıya bakmanın yanıltıcı olabileceğini gösteren bir örnektir.",
  "example": "Bir müşteri yorumu sınıflandırma modelinde doğrulama kaybı 12. epokta en düşük değerine ulaşır ve sonraki beş epokta iyileşmezse eğitim durdurulur, 12. epoktaki ağırlıklar saklanır.",
  "faq": [
   [
    "Erken durdurma aşırı uyumu tamamen önler mi?",
    "Hayır, yalnızca riski azaltır. Veri azlığı, aşırı karmaşık model gibi başka nedenler de aşırı uyuma yol açabilir; bu yüzden başka düzenlileştirme yöntemleriyle birlikte kullanılabilir."
   ],
   [
    "Sabır değeri nedir?",
    "Doğrulama başarısında iyileşme görülmeden kaç epok daha beklenileceğini gösteren ayardır. Çok küçük olursa eğitim erken kesilebilir, çok büyük olursa yöntemin faydası azalır."
   ]
  ]
 },
 {
  "slug": "duzenlilestirme",
  "term": "Düzenlileştirme (regularization)",
  "en": "regularization",
  "match": [
   "düzenlileştirme",
   "regularization"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Modelin eğitim verisini ezberlemesini önlemek için öğrenme sürecine getirilen kısıtlama ve ceza yöntemlerinin genel adı. Amaç, modelin yalnızca gördüğü örneklerde değil, yeni verilerde de iyi çalışmasını sağlamaktır.",
  "how": "Model eğitim sırasında gereğinden karmaşık çözümlere yöneldiğinde bu durum bir tür bedelle karşılaşır. Örneğin ağırlıkların aşırı büyümesi cezalandırılır, böylece model daha yalın bir çözüme yönelir. Bırakma (dropout) yönteminde her adımda ağdaki bazı nöronlar rastgele devre dışı bırakılır ve ağ tek bir yola bağımlı kalmaz. Erken durdurmada ise doğrulama verisindeki başarı düşmeye başlayınca eğitim kesilir. Veri çoğaltma da dolaylı bir düzenlileştirme sayılır.",
  "why": "Düzenlileştirme olmadan büyük modeller eğitim verisini ezberleyip gerçek kullanımda zayıf sonuç verebilir. Aşırı öğrenme (overfitting) sorununun başlıca çarelerinden biridir ve hemen her modern eğitim hattında bir biçimde yer alır. Ne kadar uygulanacağı ise model başarısını doğrudan etkileyen bir ayar kararıdır.",
  "example": "Geçmiş yılların sınav sorularını ezberleyen bir öğrenci yeni sorularda zorlanır; düzenlileştirme, modeli ezber yerine genel kuralı öğrenmeye iten bir sınav kuralı gibi çalışır.",
  "faq": [
   [
    "Düzenlileştirme ile aşırı öğrenme arasındaki ilişki nedir?",
    "Aşırı öğrenme, modelin eğitim verisine fazla uyum sağlayıp yeni verilerde başarısız olmasıdır. Düzenlileştirme bu sorunu önlemek ya da hafifletmek için kullanılan yöntemlerin toplamıdır."
   ],
   [
    "Düzenlileştirme her zaman model başarısını artırır mı?",
    "Hayır. Gereğinden fazla uygulanırsa model verideki gerçek örüntüleri de öğrenemez ve eksik öğrenme ortaya çıkar. Bu yüzden doğru düzey, doğrulama verisi üzerinde denenerek belirlenir."
   ]
  ]
 },
 {
  "slug": "eksik-ogrenme",
  "term": "Eksik öğrenme (underfitting)",
  "en": "underfitting",
  "match": [
   "eksik öğrenme",
   "underfitting"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Modelin eğitim verisindeki temel örüntüleri bile yakalayamaması sonucu hem eğitimde hem yeni verilerde düşük başarı vermesi. Model genellikle fazla basittir ya da yeterince eğitilmemiştir.",
  "how": "Model verideki ilişkileri ifade edecek kapasiteye sahip değilse ya da eğitim erken kesilmişse hata hem eğitim hem sınama verisinde yüksek kalır. Doğrusal bir model eğrisel bir ilişkiyi çizmeye çalışırsa düz bir çizgiyle yetinmek zorunda kalır. Belirtisi, eğitim verisindeki başarının bile düşük olmasıdır; aşırı öğrenmede ise eğitim başarısı yüksek, yeni veride düşüktür. Çözüm olarak daha büyük bir model, daha uzun eğitim, daha anlamlı girdi özellikleri kullanılır ya da düzenlileştirme azaltılır.",
  "why": "Eksik öğrenme, bir modelin neden beklenen sonucu vermediğini teşhis etmenin ilk adımlarından biridir. Sorunun aşırı öğrenmeden mi yoksa yetersiz kapasiteden mi kaynaklandığını ayırt etmek doğru çözümü seçmeyi sağlar. Ayrıca modeli büyütme kararının ne zaman gerekçeli olduğunu gösterir.",
  "example": "Konut fiyatlarını yalnızca metrekareye bakarak tahmin eden çok basit bir model, konum ve bina yaşı gibi etkenleri yakalayamaz; hem eğitim verisinde hem yeni evlerde kötü tahmin üretir.",
  "faq": [
   [
    "Eksik öğrenme ile aşırı öğrenme arasındaki fark nedir?",
    "Eksik öğrenmede model verideki örüntüleri yeterince öğrenemez ve her yerde başarısızdır. Aşırı öğrenmede ise eğitim verisini ezberler, o veride başarılıdır ama yeni verilerde başarısızdır."
   ],
   [
    "Eksik öğrenme nasıl fark edilir?",
    "Eğitim sürecinde hem eğitim hem doğrulama verisindeki hata yüksek kalıyor ve eğitim sürdükçe belirgin biçimde düşmüyorsa eksik öğrenmeden şüphelenilir."
   ]
  ]
 },
 {
  "slug": "kaybolan-gradyan",
  "term": "Kaybolan gradyan",
  "en": "vanishing gradient",
  "match": [
   "kaybolan gradyan",
   "vanishing gradient"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Derin bir sinir ağında geri yayılım sırasında hata sinyalinin ilk katmanlara doğru ilerledikçe giderek küçülüp neredeyse sıfırlanması sorunu. Bu yüzden ağın erken katmanları çok yavaş öğrenir ya da hiç öğrenmez.",
  "how": "Eğitimde ağın çıktısındaki hata, katmanlardan geriye doğru geçerek her ağırlığın ne kadar değişeceğini belirler. Bu sinyal her katmanda küçük sayılarla çarpılırsa onlarca katman sonra pratikte yok olur. Mesajın her aktarmada silikleştiği bir telefon oyununa benzer. Sigmoid gibi değerleri sıkıştıran etkinleştirme işlevleri sorunu kötüleştirebilir. ReLU gibi işlevler, artık (residual) bağlantılar ve dikkatli ağırlık başlatma çözümler arasındadır. LSTM de tekrarlayan ağlarda bu sorunu hafifletmek için geliştirilmiştir.",
  "why": "Bu sorun uzun süre çok derin ağların eğitilmesini zorlaştırdı ve derin öğrenmenin yaygınlaşması için aşılması gereken engellerden biri oldu. Çözümleri, bugünkü büyük modellerin onlarca katmanla eğitilebilmesinin dayanaklarındandır. Mimari tasarımların neden bu biçimde yapıldığını anlamak için de temel bir kavramdır.",
  "example": "Uzun cümleleri işleyen eski tekrarlayan sinir ağları, cümlenin başındaki sözcüklerden öğrenmekte zorlanırdı; çünkü o sözcüklere ulaşan hata sinyali geriye doğru yayılırken sönümleniyordu.",
  "faq": [
   [
    "Kaybolan gradyan ile patlayan gradyan arasındaki fark nedir?",
    "Kaybolan gradyanda hata sinyali katmanlar boyunca küçülüp yok olur. Patlayan gradyanda ise tam tersine aşırı büyür ve eğitimi kararsızlaştırır."
   ],
   [
    "Bugünkü büyük modellerde bu sorun hâlâ var mı?",
    "Artık bağlantılar, katman normalizasyonu ve uygun etkinleştirme işlevleri gibi tekniklerle sorun büyük ölçüde yönetilebiliyor. Yine de çok derin ya da uzun diziler işleyen ağlarda tasarım sırasında dikkate alınmaya devam eder."
   ]
  ]
 },
 {
  "slug": "on-egitim",
  "term": "Ön eğitim",
  "en": "pre-training",
  "match": [
   "ön eğitim",
   "pre-training",
   "pretraining"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir yapay zeka modelinin çok büyük ve genel bir veri yığını üzerinde dilin ya da görüntünün temel örüntülerini öğrendiği ilk ve en pahalı eğitim aşaması.",
  "how": "Dil modellerinde ön eğitim genellikle bir metnin devamındaki parçayı (token) tahmin etme görevine dayanır. Model kitaplar, web sayfaları ve kod gibi çok geniş kaynaklarda bu tahmini milyarlarca kez yapar, her hatadan sonra ağırlıklarını biraz ayarlar. Bu süreçte dil bilgisi, olgular ve akıl yürütme kalıpları dolaylı olarak öğrenilir. Sonuçta ortaya çıkan temel model henüz sohbet için ayarlanmamıştır. Ön eğitim çok sayıda hızlandırıcı çip ve uzun süre gerektirir.",
  "why": "Bir modelin bilgi ve yeteneklerinin büyük bölümü bu aşamada oluşur, bu yüzden maliyetin ve veri tartışmalarının merkezindedir. Hangi verinin kullanıldığı, telif ve gizlilik sorularını gündeme getirir. Sonraki aşamalar bu temelin üzerine inşa edilir.",
  "example": "GPT adındaki P harfi, İngilizce \"pre-trained\" yani ön eğitimli sözcüğünden gelir; model önce genel metinlerle eğitilir, sonra belirli kullanımlara uyarlanır.",
  "faq": [
   [
    "Ön eğitim ile ince ayar arasındaki fark nedir?",
    "Ön eğitim geniş ve genel verilerle modelin temel yeteneklerini kazandırır. İnce ayar ise bu hazır modeli daha küçük, belirli amaçlı verilerle belirli bir göreve ya da davranışa uyarlar."
   ],
   [
    "Ön eğitimde hangi veriler kullanılır?",
    "Şirketler ayrıntıları çoğunlukla açıklamaz. Genel olarak web metinleri, kitaplar, kod gibi geniş kaynaklar kullanılır; bu da telif ve gizlilik açısından tartışmalara yol açar."
   ]
  ]
 },
 {
  "slug": "egitim-sonrasi-asama",
  "term": "Eğitim sonrası aşama (post-training)",
  "en": "post-training",
  "match": [
   "post-training",
   "eğitim sonrası aşama"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Ön eğitimden sonra ham modeli yararlı, güvenli ve talimatları izleyen bir asistana dönüştürmek için uygulanan eğitim adımlarının tümü.",
  "how": "Ön eğitimli model metni sürdürmekte iyidir ama soruya yanıt vermeye hazır değildir. Eğitim sonrasında genellikle önce örnek soru-yanıt çiftleriyle denetimli ince ayar yapılır, ardından insan ya da yapay zeka geri bildirimiyle tercih temelli eğitim uygulanır. Güvenlik testleri, ton ve biçim ayarı ile araç kullanma becerileri de bu aşamaya girebilir. Ön eğitime göre çok daha az veri ve hesaplama gerekir, ama modelin kullanıcıya nasıl davrandığını büyük ölçüde bu aşama belirler.",
  "why": "Kullanıcıların karşılaştığı davranış, yani nezaket, güvenlik sınırları ve yanıt biçimi, büyük ölçüde bu aşamada şekillenir. Aynı temel modelden farklı amaçlı ürünler türetilebilmesini de bu aşama sağlar. Haberlerde geçen \"modelin davranışı değişti\" türü ifadeler çoğu zaman bu aşamaya işaret eder.",
  "example": "Ön eğitimli bir dil modeli \"Fransa'nın başkenti\" diye başlayan bir cümleyi sürdürebilir. Eğitim sonrasında ise aynı soruya doğrudan \"Paris\" diye yanıt veren bir asistana dönüşür.",
  "faq": [
   [
    "Eğitim sonrası aşama ile ince ayar aynı şey mi?",
    "Tam olarak değil. İnce ayar, eğitim sonrası aşamanın bir parçasıdır. Bu aşama ayrıca tercih temelli eğitim, güvenlik çalışmaları ve diğer ayarları da kapsar."
   ],
   [
    "Bir modelin bilgisi ön eğitimde mi eğitim sonrasında mı oluşur?",
    "Bilgi ve yeteneklerin büyük kısmı ön eğitimde oluşur. Eğitim sonrası aşama bu yetenekleri nasıl kullanacağını, hangi biçimde yanıt vereceğini ve hangi sınırlara uyacağını şekillendirir."
   ]
  ]
 },
 {
  "slug": "talimat-ayari",
  "term": "Talimat ayarı (instruction tuning)",
  "en": "instruction tuning",
  "match": [
   "talimat ayarı",
   "instruction tuning"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Dil modelinin \"şunu özetle\" ya da \"şunu çevir\" gibi doğal dilde verilen komutları anlayıp izleyebilmesi için, talimat ve istenen yanıt çiftlerinden oluşan veriyle yapılan ince ayar.",
  "how": "Ön eğitimli bir model metni sürdürmeyi bilir ama bir komutu yerine getirmesi gerektiğini bilmez. Talimat ayarında modele, çeşitli görevleri kapsayan çok sayıda talimat ve bunlara uygun örnek yanıt gösterilir. Model bu çiftlerden \"bir istek geldiğinde istenen işi yapıp yanıt vermek\" kalıbını öğrenir. Veriler insanlar tarafından yazılabildiği gibi başka modellerle de üretilebilir. Görev türleri ne kadar çeşitliyse, model daha önce görmediği talimatlara da o kadar iyi uyum sağlar.",
  "why": "Talimat ayarı, ham bir dil modelini sıradan kullanıcıların rahatça sohbet edebildiği bir araca çevirmenin temel adımlarından biridir. Modellerin ayrıntılı bir komut yazmadan, günlük dille yönlendirilebilmesinin arkasında bu tür eğitim vardır.",
  "example": "\"Aşağıdaki e-postayı üç cümlede özetle\" talimatına, e-postanın kendisini sürdürmek yerine gerçekten üç cümlelik bir özetle yanıt veren model, büyük olasılıkla talimat ayarından geçmiştir.",
  "faq": [
   [
    "Talimat ayarı ile denetimli ince ayar aynı şey mi?",
    "Pratikte talimat ayarı, denetimli ince ayarın bir türüdür. Fark, kullanılan verinin talimat ve yanıt biçiminde olması ve amacın komut izleme yeteneği kazandırmasıdır."
   ],
   [
    "Talimat ayarı ile RLHF arasındaki fark nedir?",
    "Talimat ayarı hazır örnek yanıtlardan öğrenmeye dayanır. RLHF ise insanların farklı yanıtlar arasındaki tercihlerinden öğrenir ve genellikle talimat ayarından sonra uygulanır."
   ]
  ]
 },
 {
  "slug": "denetimli-ince-ayar",
  "term": "Denetimli ince ayar (SFT)",
  "en": "supervised fine-tuning",
  "match": [
   "denetimli ince ayar",
   "=sft",
   "supervised fine-tuning"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Önceden eğitilmiş bir modelin, girdi ve beklenen çıktı çiftlerinden oluşan etiketli örneklerle eğitilmeye devam edilerek belirli bir göreve ya da davranışa uyarlanması.",
  "how": "Başlangıç noktası, ön eğitimle genel yetenek kazanmış bir modeldir. Ona doğru yanıtı bilinen, çoğunlukla insanların hazırladığı örnekler gösterilir ve model kendi çıktısını bu örneklerle karşılaştırarak ağırlıklarını ayarlar. Süreç ön eğitimdekine benzer, ama veri çok daha küçük ve özenle seçilmiştir. Dil modellerinde bu örnekler çoğunlukla bir isteğe verilmiş iyi yanıtlardır. Verinin kalitesi, miktarından daha belirleyici olabilir.",
  "why": "SFT, sohbet asistanlarının yapılandırılmasında genellikle ilk adımdır ve sonraki tercih temelli eğitim için sağlam bir başlangıç sağlar. Ayrıca şirketlerin genel bir modeli kendi alanlarına, örneğin hukuk veya müşteri hizmetlerine, görece düşük maliyetle uyarlamasına imkân tanır.",
  "example": "Bir banka, müşteri hizmetlerinde gelen soruların gerçek ve onaylı yanıtlarıyla genel bir dil modelini ince ayardan geçirerek kurumun üslubunu ve politikalarını öğrenmesini sağlayabilir.",
  "faq": [
   [
    "Denetimli ince ayar ile RLHF arasındaki fark nedir?",
    "SFT, doğru yanıt örneklerini taklit ederek öğrenir. RLHF ise insanların birden çok yanıt arasındaki tercihlerinden öğrenir. Genellikle önce SFT, sonra RLHF uygulanır."
   ],
   [
    "SFT için ne kadar veri gerekir?",
    "Göreve ve modele göre değişir, ama ön eğitime kıyasla genellikle çok daha az veri yeterlidir. Burada örneklerin kalitesi ve çeşitliliği belirleyicidir."
   ]
  ]
 },
 {
  "slug": "insan-geri-bildirimiyle-pekistirmeli-ogrenme",
  "term": "İnsan geri bildirimiyle pekiştirmeli öğrenme (RLHF)",
  "en": "reinforcement learning from human feedback",
  "match": [
   "insan geri bildirimiyle pekiştirmeli öğrenme",
   "=rlhf",
   "reinforcement learning from human feedback"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir modelin, insanların yanıtlar arasındaki tercihlerinden öğrenerek eğitildiği yöntem. Amaç, modelin çıktılarını insanların yararlı, doğru ve uygun bulduğu yöne çekmektir.",
  "how": "Önce modelin aynı isteğe verdiği birkaç yanıtı insanlar beğenilene göre sıralar. Bu sıralamalarla, bir yanıtın ne kadar beğeni alacağını puanlayan bir ödül modeli eğitilir. Sonra asıl model, bu puanı artıracak yanıtlar üretmesi için pekiştirmeli öğrenmeyle güncellenir. Model ödül modelini kandırıp gerçekte kötü ama yüksek puanlı yanıtlar üretmesin diye eski davranışından çok uzaklaşması sınırlanır. Doğrudan tercih optimizasyonu (DPO) gibi alternatifler, ödül modelini ayrı eğitmeden tercih verisini kullanır.",
  "why": "RLHF, sohbet asistanlarının daha yardımsever ve daha az zararlı yanıt vermesini sağlayan başlıca tekniklerden biridir. OpenAI'ın bu yöntemi InstructGPT ve ChatGPT'nin geliştirilmesinde kullandığı bilinir. Öte yandan insanların tercihlerinin yanıltıcı olabilmesi, modellerin kullanıcıya fazla hak vermesi gibi sorunlar da tartışılır.",
  "example": "Bir model aynı soruya iki farklı yanıt üretir, değerlendirici daha açık ve doğru olanı seçer; yüzbinlerce böyle seçim modelin hangi yanıt tarzının tercih edildiğini öğrenmesine yarar.",
  "faq": [
   [
    "RLHF neden insan geri bildirimine ihtiyaç duyar?",
    "İyi bir yanıtın ne olduğunu, örneğin açıklık, nezaket ve yararlılığı, basit bir kuralla tanımlamak zordur. İnsan tercihleri bu ölçütleri dolaylı olarak modele aktarmanın pratik bir yoludur."
   ],
   [
    "RLHF kusursuz bir yöntem mi?",
    "Hayır. Tercih verisi değerlendiricilerin hatalarını ve önyargılarını taşıyabilir, model de ödül modelinin zayıf noktalarından yararlanmayı öğrenebilir. Bu yüzden yöntem genellikle başka güvenlik çalışmalarıyla birlikte kullanılır."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-geri-bildirimiyle-pekistirmeli-ogrenme",
  "term": "Yapay zeka geri bildirimiyle pekiştirmeli öğrenme (RLAIF)",
  "en": "reinforcement learning from AI feedback",
  "match": [
   "yapay zeka geri bildirimiyle pekiştirmeli öğrenme",
   "=rlaıf",
   "reinforcement learning from aı feedback"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir dil modelinin davranışını, insan değerlendiriciler yerine başka bir yapay zeka modelinin verdiği tercih ve puanlarla iyileştiren eğitim yöntemi.",
  "how": "Süreç, insan geri bildirimli pekiştirmeli öğrenmeye (RLHF) benzer, ama etiketleyici rolünü bir model üstlenir. Eğitilecek model aynı soruya iki yanıt üretir. Yargıç rolündeki ikinci bir model, belirlenen ilkelere veya ölçütlere göre hangisinin daha iyi olduğunu söyler. Bu karşılaştırmalar ya bir ödül modelini eğitmekte ya da doğrudan ödül sinyali olarak kullanılır. Ardından ana model, daha çok beğenilen yanıtlara yönelecek biçimde güncellenir.",
  "why": "İnsan etiketleme pahalı, yavaş ve büyük ölçekte zor bir iştir. Yapay zeka geri bildirimi bu darboğazı hafifletir ve değerlendirme ölçütlerinin yazılı ilkelerle açıkça belirlenmesine olanak tanır. Öte yandan yargıç modelin kendi hataları ve önyargıları eğitime sızabilir; bu yüzden yöntemin insan denetimini tamamen gereksiz kılıp kılmadığı tartışılır.",
  "example": "Bir sohbet modelinin zararlı bir isteğe verdiği iki yanıttan hangisinin güvenlik ilkelerine daha uygun olduğunu başka bir model seçer; bu seçimler eğitim verisine dönüşür.",
  "faq": [
   [
    "RLAIF ile RLHF arasındaki fark nedir?",
    "Fark, geri bildirimi kimin verdiğindedir. RLHF'de tercihleri insanlar belirler, RLAIF'te bu işi bir yapay zeka modeli yapar."
   ],
   [
    "RLAIF insanları süreçten tamamen çıkarır mı?",
    "Hayır. Değerlendirme ilkelerini ve ölçütlerini yine insanlar belirler, sonuçları da insanlar kontrol eder. Değişen şey, tek tek yanıtların insanlar tarafından etiketlenmesi yükünün azalmasıdır."
   ]
  ]
 },
 {
  "slug": "anayasal-yapay-zeka",
  "term": "Anayasal yapay zeka",
  "en": "constitutional AI",
  "match": [
   "anayasal yapay zeka",
   "constitutional aı"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir yapay zeka modelinin davranışını, yazılı bir ilkeler listesine (anayasa) dayanarak şekillendiren eğitim yaklaşımı; modelin kendi yanıtlarını bu ilkelere göre eleştirip düzeltmesine ve karşılaştırmasına dayanır.",
  "how": "Anthropic araştırmacılarının 2022'de tanıttığı yöntem iki aşamadan oluşur. İlkinde model bir soruya yanıt verir, ardından anayasadaki bir ilkeye bakarak kendi yanıtını eleştirir ve yeniden yazar; düzeltilmiş yanıtlar ince ayar verisi olur. İkinci aşamada model iki yanıt arasından ilkelere daha uygun olanı seçer ve bu tercihler yapay zeka geri bildirimiyle pekiştirmeli öğrenmede kullanılır. Zararlı içerik konusunda insanlar tek tek yanıtları etiketlemek yerine ilkeleri yazar.",
  "why": "Yazılı ilkeler modelin hangi değerlere göre ayarlandığını görünür kılar ve değiştirilmesini kolaylaştırır. Zararlı çıktıları işaretleyen insan etiketleyicilerin yükünü de azaltır. Anthropic, Claude modellerini eğitirken bu yaklaşımdan yararlandığını açıklamıştır. Buna karşılık ilkeleri kimin seçtiği ve bunların farklı kültürlerde nasıl yorumlanacağı hâlâ tartışma konusudur.",
  "example": "Modele yanıtların kimseye zarar vermemesi gibi bir ilke verilir; model kendi ilk taslağını bu ilkeye göre eleştirip daha güvenli bir biçimde yeniden yazar.",
  "faq": [
   [
    "Anayasal yapay zeka ile RLAIF aynı şey mi?",
    "Değil. RLAIF, geri bildirimin yapay zekadan geldiği genel bir yaklaşımdır. Anayasal yapay zeka ise bu geri bildirimi yazılı ilkelere bağlayan, onun belirli bir uygulamasıdır."
   ],
   [
    "Anayasa'da neler yazar?",
    "Zararsızlık ve dürüstlük gibi genel değerleri ifade eden ilkeler yer alır. İçeriği modeli geliştiren ekip seçer; bu yüzden hangi değerlerin esas alınacağı tartışmaya açıktır."
   ]
  ]
 },
 {
  "slug": "dogrudan-tercih-optimizasyonu",
  "term": "Doğrudan tercih optimizasyonu",
  "en": "direct preference optimization",
  "match": [
   "doğrudan tercih optimizasyon",
   "direct preference optimization"
  ],
  "cat": "Modeller ve eğitim",
  "def": "İnsanların tercih ettiği ve etmediği yanıt çiftlerinden yola çıkarak dil modelini doğrudan güncelleyen, ayrı bir ödül modeli ve pekiştirmeli öğrenme döngüsü gerektirmeyen ince ayar yöntemi.",
  "how": "Veri, aynı isteme verilmiş iki yanıttan oluşur: biri tercih edilen, biri reddedilen. Model, tercih edilen yanıtın olasılığını reddedilene göre artıracak biçimde güncellenir. Aynı anda başlangıç modelinden fazla uzaklaşmasın diye bir sınırlama uygulanır; böylece model akıcılığını yitirmez. Yöntem 2023'te Stanford'daki araştırmacılar tarafından önerildi ve ödül modelini, modelin kendi olasılıklarının içine örtük biçimde yerleştirir. Sonuçta eğitim, sıradan bir denetimli ince ayara yakın basitlikte olur.",
  "why": "Ödül modeli ve PPO gibi bir pekiştirmeli öğrenme döngüsü kurmak hem hesaplama hem mühendislik açısından zahmetlidir. Doğrudan tercih optimizasyonu bu yükü hafiflettiği için özellikle küçük ekipler ve açık kaynak topluluğu arasında yaygınlaştı. Sonuç, tercih verisinin kalitesine büyük ölçüde bağlıdır.",
  "example": "Örneğin bir ekip, her kaydında bir soru, beğenilen bir yanıt ve beğenilmeyen bir yanıt bulunan bir veri kümesiyle açık kaynaklı bir sohbet modelini bu yöntemle daha yardımsever hâle getirebilir.",
  "faq": [
   [
    "Doğrudan tercih optimizasyonunda ödül modeli yok mu?",
    "Ayrı bir ödül modeli eğitilmez. Ödül, modelin kendi olasılıklarından örtük olarak türetilir ve tercih çiftleri üzerinden tek adımda öğrenilir."
   ],
   [
    "Bu yöntem RLHF'nin yerini aldı mı?",
    "Çoğu durumda basit bir alternatif olarak tercih ediliyor, ama PPO gibi algoritmalara dayanan hatlar da kullanılmaya devam ediyor. Hangisinin daha iyi olduğu göreve ve veriye göre değişir."
   ]
  ]
 },
 {
  "slug": "proksimal-politika-optimizasyonu",
  "term": "Proksimal politika optimizasyonu (PPO)",
  "en": "proximal policy optimization",
  "match": [
   "proksimal politika optimizasyonu",
   "=ppo",
   "proximal policy optimization"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Pekiştirmeli öğrenmede modelin davranış kuralını her adımda küçük, kontrollü değişikliklerle güncelleyen algoritma; insan geri bildirimli dil modeli eğitiminde uzun süre standart seçim oldu.",
  "how": "Model bir yanıt üretir, ödül modeli bu yanıta puan verir ve model yüksek puan alan davranışlara yönelir. PPO'nun püf noktası, tek bir güncellemede modelin eski davranışından fazla uzaklaşmasını engellemesidir; çok büyük bir sıçrama eğitimi bozabilir. Bunun için yeni ve eski olasılıklar arasındaki oran belli bir aralıkta kırpılır. Dil modeli eğitiminde genellikle başlangıç modeline uzaklığı cezalandıran ek bir terim ve yanıtların beklenen değerini tahmin eden ayrı bir değer modeli de kullanılır.",
  "why": "OpenAI araştırmacıları yöntemi 2017'de önerdi. PPO, InstructGPT gibi ilk sohbet modellerinin eğitiminde kullanılan RLHF hattının temel parçasıydı. Kararlı çalıştığı için yaygınlaştı; ancak aynı anda birden çok büyük modeli bellekte tutmayı gerektirdiğinden maliyetlidir. GRPO ve DPO gibi yöntemler bu maliyeti azaltmak için ortaya çıktı.",
  "example": "InstructGPT'nin eğitiminde ödül modelinin verdiği puanlar PPO ile dil modeline aktarıldı.",
  "faq": [
   [
    "Proksimal ne demek?",
    "Yakın anlamına gelir. Yöntem, yeni politikayı eski politikaya yakın tutarak eğitimin kararlı ilerlemesini sağlar."
   ],
   [
    "PPO neden pahalı bir yöntem sayılıyor?",
    "Dil modeli eğitiminde politika modelinin yanı sıra başlangıç modeli, ödül modeli ve değer modeli de bellekte tutulur. Bu da büyük modellerde ciddi donanım gerektirir."
   ]
  ]
 },
 {
  "slug": "grup-goreli-politika-optimizasyonu",
  "term": "Grup göreli politika optimizasyonu (GRPO)",
  "en": "group relative policy optimization",
  "match": [
   "grup göreli politika optimizasyonu",
   "=grpo",
   "group relative policy optimization"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Her istem için birden çok yanıt üretip her yanıtı o grubun ortalamasıyla kıyaslayarak öğrenen pekiştirmeli öğrenme algoritması; ayrı bir değer modeline ihtiyaç duymaz.",
  "how": "Model bir soruya aynı anda örneğin sekiz farklı yanıt üretir. Her yanıt bir ödül alır; ardından yanıtın puanı grubun ortalamasıyla kıyaslanır. Ortalamanın üstünde kalan yanıtlar pekiştirilir, altında kalanlar zayıflatılır. PPO'daki ayrı değer modelinin işini grup ortalaması üstlendiği için eğitimde bellek ve hesaplama tasarrufu sağlanır. Başlangıç modelinden aşırı uzaklaşmayı önleyen bir sınırlama yine kullanılır.",
  "why": "DeepSeek ekibi yöntemi 2024'te matematik odaklı DeepSeekMath çalışmasında tanıttı ve sonradan akıl yürütme modeli DeepSeek-R1'in eğitiminde kullandı. Daha hafif olması, büyük modellerle pekiştirmeli öğrenmeyi daha ulaşılabilir kıldı; yöntem açık kaynak eğitim araçlarında da yer buluyor.",
  "example": "Bir matematik sorusuna üretilen sekiz çözümden üçü doğru sonuca ulaşırsa, bu üçü grubun ortalamasının üzerinde puan alır ve modelin o tür çözümlere yönelmesi güçlenir.",
  "faq": [
   [
    "GRPO ile PPO arasındaki temel fark nedir?",
    "PPO yanıtların beklenen değerini tahmin eden ayrı bir değer modeli kullanır. GRPO ise bunun yerine aynı soruya verilen yanıtların ortalama puanını referans alır."
   ],
   [
    "GRPO yalnızca matematik gibi alanlarda mı kullanılır?",
    "Yöntem matematik çalışmasında tanıtıldı ve sıkça doğrulanabilir ödüllerle birlikte anılır. Ancak yanıtlara puan verilebilen her görevde, ödül bir ödül modelinden de gelse uygulanabilir."
   ]
  ]
 },
 {
  "slug": "odul-modeli",
  "term": "Ödül modeli",
  "en": "reward model",
  "match": [
   "ödül modeli",
   "reward model"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir yanıtın insanlar veya belirlenen ölçütler açısından ne kadar iyi olduğunu sayısal bir puanla tahmin eden model; pekiştirmeli öğrenmede öğretmen rolü oynar.",
  "how": "Önce insanlar aynı isteme verilmiş iki ya da daha fazla yanıtı sıralar. Ödül modeli, bu sıralamaları yeniden üretecek biçimde eğitilir: tercih edilen yanıta daha yüksek puan vermeyi öğrenir. Çoğu zaman bir dil modelinin üzerine puan veren bir katman eklenerek kurulur. Eğitim sırasında ana model yanıt üretir, ödül modeli puanlar ve ana model yüksek puanlı yanıtlara doğru güncellenir. İnsanların her yanıtı tek tek değerlendirmesi gerekmez.",
  "why": "Ödül modeli, insan tercihlerini ölçeklenebilir bir sinyale çevirir; sohbet modellerinin yardımsever ve güvenli davranması bu yolla öğretilir. Zayıf noktası, kusurlu bir vekil olmasıdır: ana model puanı yükseltmenin kısa yollarını bulabilir, buna ödül istismarı denir. Bu yüzden ödül modelinin kalitesi sonucu doğrudan belirler.",
  "example": "Bir kullanıcı sorusuna verilen iki yanıttan insanlar daha açık olanı seçer; ödül modeli bu seçimlerden öğrenip yeni yanıtlara da benzer puanlar vermeye başlar.",
  "faq": [
   [
    "Ödül modeli ile sohbet modeli aynı şey mi?",
    "Hayır. Sohbet modeli metin üretir, ödül modeli ise üretilmiş bir yanıta puan verir. İkisi çoğu zaman benzer mimarilere dayansa da görevleri farklıdır."
   ],
   [
    "Ödül istismarı (reward hacking) nedir?",
    "Ana modelin, gerçekten iyi yanıt vermek yerine ödül modelinin zayıflıklarından yararlanarak yüksek puan almasıdır. Örneğin gereksiz uzun veya gösterişli yanıtlar puanı artırıyorsa model bunlara kayabilir."
   ]
  ]
 },
 {
  "slug": "dogrulanabilir-odullerle-pekistirmeli-ogrenme",
  "term": "Doğrulanabilir ödüllerle pekiştirmeli öğrenme (RLVR)",
  "en": "reinforcement learning with verifiable rewards",
  "match": [
   "doğrulanabilir ödüllerle pekiştirmeli öğrenme",
   "=rlvr",
   "reinforcement learning with verifiable rewards"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Yanıtın doğruluğunun program tarafından otomatik denetlenebildiği görevlerde, ödülü öğrenilmiş bir model yerine kesin bir kontrolden alan pekiştirmeli öğrenme yaklaşımı.",
  "how": "Matematik sorusunda nihai cevabın bilinen sonuçla eşleşip eşleşmediğine, kod görevinde ise yazılan programın test senaryolarını geçip geçmediğine bakılır. Doğruysa ödül verilir, yanlışsa verilmez. Model aynı soruya çok sayıda deneme yapar ve doğru sonuca götüren akıl yürütme biçimlerini pekiştirir. Ödül hesaplaması kural tabanlı olduğundan ayrı bir ödül modeli eğitmek gerekmez; yöntem PPO veya GRPO gibi algoritmalarla birlikte kullanılabilir.",
  "why": "Kesin kontrol, ödül modelinin kandırılması sorununu büyük ölçüde azaltır ve ucuz biçimde ölçeklenir. Akıl yürütme becerisi geliştirilen modellerin eğitiminde sıkça başvurulan bir yaklaşım olarak anılır. Sınırı, yalnızca doğruluğu otomatik denetlenebilen alanlarda işe yaramasıdır; yaratıcı yazı gibi öznel görevlerde uygulanamaz.",
  "example": "Bir model aritmetik problemini çözer; son cevap beklenen sayıyla aynıysa ödül alır, değilse almaz. Kod yazma görevinde ödülü ise birim testlerinin geçilip geçilmediği belirler.",
  "faq": [
   [
    "RLVR ile RLHF arasındaki fark nedir?",
    "RLHF'de ödül, insan tercihlerinden öğrenilmiş bir modelden gelir ve özneldir. RLVR'de ödül, cevabın doğruluğunu kesin biçimde denetleyen bir kuraldan veya testten gelir."
   ],
   [
    "RLVR her görevde kullanılabilir mi?",
    "Hayır. Yalnızca doğru ya da yanlış olduğu otomatik belirlenebilen görevlerde, örneğin matematik ve kodlamada işe yarar. Şiir yazmak veya bir e-postanın tonunu ayarlamak gibi öznel işlerde bu tür bir kontrol yoktur."
   ]
  ]
 },
 {
  "slug": "surec-odul-modeli",
  "term": "Süreç ödül modeli",
  "en": "process reward model",
  "match": [
   "süreç ödül modeli",
   "process reward model"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir akıl yürütme zincirinin yalnızca nihai sonucunu değil, her ara adımını ayrı ayrı değerlendirip puanlayan ödül modeli türü; hatanın hangi adımda yapıldığını bulmaya yarar.",
  "how": "Model bir problemi adım adım çözer; süreç ödül modeli her adımın doğru ve makul olup olmadığına puan verir. Eğitim verisi için insanlar çözümün adımlarını tek tek işaretler ya da otomatik yöntemlerle adım etiketleri üretilir. Sonuç ödül modeli ise yalnızca son cevaba bakar. Süreç puanları, birden çok çözüm adayı arasından en sağlam olanı seçmekte veya modelin hatalı bir adımda durup yön değiştirmesini sağlamakta kullanılabilir.",
  "why": "Yalnızca sonuca bakmak, yanlış akıl yürütmeyle tesadüfen doğru cevaba varan çözümleri de ödüllendirir. Adım adım geri bildirim, modelin daha güvenilir düşünmesine ve hatanın nerede olduğunun anlaşılmasına yardımcı olur. Bedeli ise adım etiketlemenin pahalı olması ve ara adımın doğruluğunun her alanda net tanımlanamamasıdır.",
  "example": "Beş adımlı bir geometri çözümünde üçüncü adımda yanlış bir formül kullanılmışsa süreç ödül modeli ilk iki adıma yüksek, üçüncüye düşük puan verir.",
  "faq": [
   [
    "Süreç ödül modeli ile sonuç ödül modeli arasındaki fark nedir?",
    "Sonuç ödül modeli yalnızca nihai cevaba puan verir. Süreç ödül modeli ise çözümün her ara adımını ayrı ayrı değerlendirir."
   ],
   [
    "Süreç ödül modelleri neden her yerde kullanılmıyor?",
    "Adım düzeyinde etiket toplamak pahalıdır ve ara adımların doğruluğu her görevde net değildir. Bu nedenle bazı ekipler, sonucu otomatik denetleyen daha basit yöntemleri tercih edebilir."
   ]
  ]
 },
 {
  "slug": "lora",
  "term": "LoRA",
  "en": "low-rank adaptation",
  "match": [
   "=lora",
   "low-rank adaptation"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Büyük bir modelin tüm ağırlıklarını güncellemek yerine, her katmana eklenen küçük ve düşük ranklı iki matrisi eğiterek modeli yeni bir göreve uyarlayan ince ayar yöntemi.",
  "how": "Temel modelin ağırlıkları dondurulur. Ağırlıklarda yapılacak değişiklik, devasa tek bir matris yerine birbiriyle çarpılan iki ince matrisle ifade edilir; düşük rank adı buradan gelir. Eğitim sırasında yalnızca bu küçük matrisler öğrenilir, dolayısıyla gereken bellek ve depolama alanı çok azalır. İş bitince eklentiler ayrı küçük bir dosya olarak saklanabilir ya da temel modele eklenerek tek model haline getirilebilir. Bir kitabı baştan basmak yerine kenarına not düşmeye benzer.",
  "why": "LoRA, büyük modelleri özelleştirmeyi daha az donanımla yapılabilir hale getirdi. Aynı temel model üzerine farklı görevler için çok sayıda küçük adaptör eklenebildiği için maliyet düşer ve dağıtım kolaylaşır. Açık ağırlıklı modellerin topluluk tarafından yaygın biçimde uyarlanmasında en çok kullanılan tekniklerden biridir.",
  "example": "Bir hukuk bürosu, açık ağırlıklı bir temel modeli dondurup sözleşme özetleme için küçük bir LoRA adaptörü eğitebilir; müşteri soruları için ise aynı modele başka bir adaptör takabilir.",
  "faq": [
   [
    "QLoRA nedir?",
    "LoRA'nın, temel modelin düşük hassasiyetle (nicemlenmiş) belleğe yüklendiği çeşididir. Bellek ihtiyacını daha da azaltır."
   ],
   [
    "LoRA tam ince ayarın yerini tutar mı?",
    "Birçok görevde tam ince ayara yakın sonuç verir; ancak modele çok yeni ve geniş bir bilgi kazandırmak gerektiğinde sınırlı kalabilir. Seçim göreve ve eldeki kaynağa bağlıdır."
   ]
  ]
 },
 {
  "slug": "parametre-verimli-ince-ayar",
  "term": "Parametre verimli ince ayar (PEFT)",
  "en": "parameter-efficient fine-tuning",
  "match": [
   "parametre verimli ince ayar",
   "=peft",
   "parameter-efficient fine-tuning"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Önceden eğitilmiş büyük bir modelin yalnızca küçük bir kısmını ya da ona eklenen az sayıda yeni parametreyi eğiterek modeli yeni göreve uyarlayan yöntemler ailesi.",
  "how": "Temel modelin ağırlıklarının büyük bölümü dondurulur; eğitime yalnızca küçük bir parametre kümesi dahil edilir. Bu küme, katmanlar arasına eklenen küçük adaptör modülleri, LoRA'daki düşük ranklı matrisler ya da girdiye eklenen öğrenilebilir yönlendirme vektörleri olabilir. Gradyan hesabı ve optimizasyon durumu yalnızca bu parametreler için tutulduğundan bellek kullanımı düşer. Ortaya çıkan ek parçalar çok küçük olduğu için görev başına ayrı ayrı saklanıp temel modele takılabilir.",
  "why": "Milyarlarca parametreli bir modelin tamamını her görev için yeniden eğitmek pahalıdır ve her seferinde modelin koca bir kopyasını gerektirir. PEFT yöntemleri maliyeti düşürerek küçük ekiplerin ve araştırmacıların da büyük modelleri özelleştirmesine imkân tanır. Ayrıca temel modelin genel yeteneklerini korumaya yardımcı olabilir.",
  "example": "Hugging Face'in PEFT kütüphanesi LoRA gibi yöntemleri tek arayüzde sunar; bir şirket bu sayede açık bir modeli kendi müşteri destek yazışmalarına uyarlayabilir.",
  "faq": [
   [
    "PEFT ile LoRA aynı şey mi?",
    "Hayır. PEFT bir şemsiye terimdir; LoRA onun en bilinen yöntemlerinden biridir. Adaptör katmanları ve prompt tuning gibi başka yöntemler de bu aileye girer."
   ],
   [
    "Tam ince ayara göre bir dezavantajı var mı?",
    "Bazı durumlarda, özellikle modele çok farklı bir alan öğretilirken, tam ince ayar kadar iyi sonuç vermeyebilir. Buna karşılık maliyeti çok daha düşüktür."
   ]
  ]
 },
 {
  "slug": "model-birlestirme",
  "term": "Model birleştirme",
  "en": "model merging",
  "match": [
   "model birleştirme",
   "model merging"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Ayrı ayrı eğitilmiş ya da ince ayar yapılmış birden çok modelin ağırlıklarını ek eğitim gerektirmeden bir araya getirip tek bir model elde etme yöntemi.",
  "how": "En basit biçimiyle iki modelin ağırlıkları, karşılıklı değerlerin ortalaması alınarak birleştirilir. Bunun işlemesi için modellerin aynı mimariye sahip olması, çoğunlukla da aynı temel modelden ince ayarla türemesi gerekir. Daha gelişmiş yöntemler ince ayarın temel modele kattığı farkı ayrı bir vektör gibi ele alır, bu farkları toplar ya da çakışmaları ayıklayarak birleştirir. Süreç yeni eğitim gerektirmediğinden kısa sürede yapılabilir. Sonuç beklenen beceri karışımını vermeyebilir, bu yüzden birleşik model ayrıca denenir.",
  "why": "Model birleştirme, pahalı bir yeniden eğitime girmeden farklı becerileri tek modelde toplamanın ucuz bir yolunu sunar. Çalıştırma maliyeti de tek modelinki kadar kalır. Öte yandan sonuçların önceden kestirilmesi zordur; her birleşimin ayrıca test edilmesi gerekir. Açık ağırlıklı model topluluğunda yaygın biçimde denenir.",
  "example": "Topluluktaki geliştiriciler, aynı temel modelden türeyen bir kodlama modeliyle bir sohbet modelini birleştirip her iki yönde de makul çalışan tek bir model elde etmeyi deneyebilir.",
  "faq": [
   [
    "Model birleştirme ile topluluk (ensemble) yöntemi aynı mı?",
    "Hayır. Topluluk yönteminde modeller ayrı çalışır ve çıktıları birleştirilir; model birleştirmede ağırlıklar tek modelde toplanır, dolayısıyla çalıştırma maliyeti artmaz."
   ],
   [
    "Her model birbiriyle birleştirilebilir mi?",
    "Hayır. Mimarisi farklı modeller doğrudan birleştirilemez; en iyi sonuç genellikle aynı temel modelden türeyen modellerde alınır."
   ]
  ]
 },
 {
  "slug": "budama",
  "term": "Budama (pruning)",
  "en": "pruning",
  "match": [
   "model budama",
   "pruning"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Eğitilmiş bir yapay sinir ağında çıktıya katkısı düşük ağırlıkları, nöronları ya da katmanları çıkararak modeli küçültme ve çalıştırma maliyetini azaltma tekniği.",
  "how": "Önce her ağırlığın ya da nöronun ne kadar önemli olduğu ölçülür; en basit ölçüt, ağırlığın mutlak değerinin küçüklüğüdür. Önemsiz sayılanlar sıfırlanır ya da tamamen kaldırılır. Ardından kalan parçalar, kaybolan doğruluğu telafi etmek için kısa bir ek eğitimden geçirilir. Tek tek ağırlıkların atıldığı yapılandırılmamış budamada özel yazılım ve donanım desteği olmadan hız kazancı sınırlı kalabilir. Bütün nöronlar, dikkat başlıkları ya da katmanlar çıkarıldığında ise model gerçekten daha küçük ve hızlı olur. Bahçıvanın ağacı budamasına benzer.",
  "why": "Büyük modellerin çalıştırılması pahalıdır; budama bellek ihtiyacını ve gecikmeyi azaltarak telefon gibi sınırlı cihazlara model sığdırmayı kolaylaştırır. Araştırmalar, birçok ağın ağırlıklarının hatırı sayılır bölümünün gereksiz olduğunu gösterir. Yine de aşırı budama doğruluğu düşürür; denge göreve göre ayarlanır.",
  "example": "Bir şirket, kendi dil modelinin bazı dikkat başlıklarını budayıp ince ayarla toparlayarak aynı görevi daha az donanımla ve daha kısa sürede yapan bir sürüm elde edebilir.",
  "faq": [
   [
    "Budama ile nicemleme arasındaki fark nedir?",
    "Budama parametre sayısını azaltır; nicemleme ise parametrelerin kaç bitle saklandığını düşürür. İkisi birlikte de kullanılabilir."
   ],
   [
    "Budama modelin doğruluğunu düşürür mü?",
    "Ölçülü yapıldığında kayıp çoğunlukla küçüktür ve ek eğitimle giderilebilir. Aşırı budamada ise kalite belirgin biçimde bozulabilir."
   ]
  ]
 },
 {
  "slug": "seyrek-model",
  "term": "Seyrek model",
  "en": "sparse model",
  "match": [
   "seyrek model",
   "sparse model"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Parametrelerinin büyük bölümü sıfır olan ya da her girdide parametrelerinin yalnızca küçük bir kısmını çalıştıran yapay zeka modeli.",
  "how": "Seyreklik iki yoldan gelir. Birincisinde budama gibi yöntemlerle ağırlıkların çoğu sıfırlanır ve yalnızca kalanlar hesaba katılır. İkincisinde model baştan çok sayıda alt bölümden, yani uzmandan oluşur; her girdi için bir yönlendirici yalnızca birkaç uzmanı seçer, diğerleri o adımda çalışmaz. Uzmanlar karışımı (MoE) mimarileri bu ikinci türün tipik örneğidir. Böylece toplam parametre sayısı çok büyük olsa da her kelime için yapılan işlem, daha küçük bir yoğun modelinkine yakın kalır.",
  "why": "Seyreklik, modelin kapasitesini büyütürken çalıştırma maliyetini aynı oranda artırmamayı sağlar. Bu yüzden büyük dil modeli haberlerinde sıkça geçer. Ancak tüm parametreler yine de bellekte tutulur ve hız kazancı, donanım ile yazılımın seyrekliği ne kadar iyi desteklediğine bağlıdır.",
  "example": "Mistral'in Mixtral modelleri gibi uzmanlar karışımı mimarileri seyrek modellere örnektir: her kelime için uzmanların yalnızca bir bölümü devreye girer.",
  "faq": [
   [
    "Seyrek model ile yoğun model arasındaki fark nedir?",
    "Yoğun modelde her girdi için bütün parametreler çalışır. Seyrek modelde ise yalnızca bir kısmı kullanılır; bu da aynı hesaplama bütçesiyle daha büyük bir model kurmaya izin verir."
   ],
   [
    "Seyrek model her zaman daha hızlı mıdır?",
    "Hayır. Bellek ihtiyacı çoğu zaman düşmez ve hız kazancı donanım desteğine bağlıdır; bu nedenle pratik kazanç duruma göre değişir."
   ]
  ]
 },
 {
  "slug": "katastrofik-unutma",
  "term": "Katastrofik unutma",
  "en": "catastrophic forgetting",
  "match": [
   "katastrofik unutma",
   "catastrophic forgetting"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir sinir ağının yeni bir görevi ya da veriyi öğrenirken daha önce edindiği bilgi ve becerileri büyük ölçüde kaybetmesi.",
  "how": "Sinir ağı bilgiyi tek bir yerde değil, ağırlıkların tamamına yayılmış biçimde tutar. Yeni veriyle eğitim sürerken optimizasyon, yalnızca yeni görevin hatasını azaltacak yönde ağırlıkları kaydırır. Eski görev için önemli olan ağırlıklar da bu sırada bozulabilir ve eski beceri hızla geriler. Sorunu hafifletmek için eski verilerden örnekleri yeni veriyle karıştırmak, önemli ağırlıkların değişimini cezalandırmak ya da temel modeli dondurup yalnızca küçük eklentiler eğitmek gibi yollara başvurulur.",
  "why": "Bir modele yeni alan bilgisi öğretmek için ince ayar yapıldığında genel yeteneklerin zayıflaması, uygulamada sık karşılaşılan bir risktir. Sürekli öğrenen sistemlerin önündeki temel engellerden biri de budur. LoRA gibi yöntemlerin, temel modeli dondurduğu için bu riski sınırlamaya yardımcı olduğu kabul edilir.",
  "example": "Genel amaçlı bir sohbet modeli yalnızca tıbbi metinlerle ince ayar yapılırsa, tıbbi sorularda iyileşirken kod yazma ya da genel sohbet becerilerinde gerileyebilir.",
  "faq": [
   [
    "Katastrofik unutma insanın unutmasına benzer mi?",
    "Pek değil. İnsanlar yeni bir şey öğrenirken eski bilgilerinin çoğunu korur; sinir ağlarında ise ağırlıkların ortak kullanılması yüzünden eski beceri ani ve sert biçimde bozulabilir."
   ],
   [
    "Büyük dil modellerinde de görülür mü?",
    "Evet, ince ayar sırasında görülebilir. Şiddeti modele, veri miktarına ve eğitim ayarlarına göre değişir; eski veriyi karıştırmak ve parametre verimli yöntemler riski azaltır."
   ]
  ]
 },
 {
  "slug": "karsitsal-ogrenme",
  "term": "Karşıtsal öğrenme",
  "en": "contrastive learning",
  "match": [
   "karşıtsal öğrenme",
   "contrastive learning"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Benzer örnekleri temsil uzayında birbirine yaklaştırıp farklı örnekleri uzaklaştırarak, çoğunlukla etiketsiz verilerden anlamlı temsiller öğreten eğitim yaklaşımı.",
  "how": "Model her örneği bir sayı vektörüne, yani gömmeye dönüştürür. Benzer sayılan çiftler pozitif, ilgisiz çiftler negatif olarak ele alınır; örneğin aynı fotoğrafın iki farklı kırpması pozitif çifttir. Kayıp fonksiyonu, pozitif çiftlerin vektörleri birbirine yakın, negatiflerinki uzak olduğunda küçülür. Model bu baskıyla, örnekleri ayırt etmeye yarayan özellikleri kendi başına keşfeder. Böylece insan eliyle konmuş sınıf etiketlerine duyulan ihtiyaç azalır.",
  "why": "Etiketlemek pahalıdır, etiketsiz veri ise bol. Karşıtsal öğrenme bu veriden güçlü temsiller çıkarmanın başlıca yollarından biridir. Metin gömme modelleri, görsel temsiller ve çok kipli sistemler bu yaklaşımla eğitilebilir; arama ve öneri sistemlerinde de işe yarar.",
  "example": "Bir metin gömme modeli, bir soruyla onun yanıtını içeren paragrafı pozitif çift olarak görür; ilgisiz paragraflar negatiftir. Arama sistemi sonra soruya vektörce en yakın paragrafları getirir.",
  "faq": [
   [
    "Denetimli öğrenmeden farkı nedir?",
    "Denetimli öğrenmede her örnek için doğru etiket verilir. Karşıtsal öğrenmede ise örneklerin birbirine benzeyip benzemediği bilgisi yeterlidir; bu bilgi çoğu zaman verinin kendisinden elde edilir."
   ],
   [
    "Negatif örnekler neden gereklidir?",
    "Yalnızca pozitifler yakınlaştırılırsa model her şeyi aynı noktaya eşleyip kolay yoldan çözüm bulabilir. Negatifler temsillerin birbirinden ayrışmasını sağlar. Bazı yöntemler negatifsiz çalışsa da bu çöküşü başka önlemlerle engeller."
   ]
  ]
 },
 {
  "slug": "clip",
  "term": "CLIP",
  "en": "Contrastive Language-Image Pre-training",
  "match": [
   "clip model",
   "openai clip"
  ],
  "cat": "Modeller ve eğitim",
  "def": "OpenAI'ın 2021'de tanıttığı, görselleri ve metinleri aynı vektör uzayına yerleştirmeyi öğrenen ve bu sayede bir görüntüyle bir cümlenin ne kadar örtüştüğünü ölçebilen model.",
  "how": "CLIP'in biri görüntü, biri metin için iki ayrı kodlayıcısı vardır. İnternetten toplanan çok sayıda görsel-yazı çiftiyle eğitilirken, bir grup içindeki doğru eşleşmelerin vektörleri yakınlaştırılır, yanlış eşleşmelerinki uzaklaştırılır; bu, karşıtsal öğrenmedir. Eğitim bittiğinde bir fotoğrafın vektörü, onu anlatan cümlenin vektörüne yakın durur. Bu sayede model, özel olarak eğitilmediği sınıfları da yalnızca adlarını metin olarak vererek tanıyabilir; buna sıfır örnekle sınıflandırma denir.",
  "why": "CLIP, görsel ile dil arasında köprü kuran bir temel taş olarak yaygınlaştı. Görsel arama, içerik sınıflandırma ve bazı görüntü üretim modellerinde metin ile görüntü arasındaki bağlantıyı kurmak için kullanıldı. Çok kipli modellerin nasıl eğitildiğini anlamak için iyi bir başlangıç noktasıdır.",
  "example": "Bir fotoğraf arşivinde gün batımında sahil diye arama yapıldığında CLIP benzeri bir model, her fotoğrafın vektörünü bu cümlenin vektörüyle karşılaştırıp en yakın görselleri listeler.",
  "faq": [
   [
    "CLIP görüntü üretir mi?",
    "Hayır. CLIP görüntü ile metni eşleştirmeyi öğrenir; görüntü üretmez. Ancak üretim modelleri onu bir bileşen olarak kullanabilir."
   ],
   [
    "Sıfır örnekle sınıflandırma ne demek?",
    "Modelin, o sınıf için hiç etiketli örnek görmeden sınıfı tanımasıdır. CLIP'te sınıf adları metne çevrilir ve görüntüye vektörce en yakın olan metin seçilir."
   ]
  ]
 },
 {
  "slug": "sonraki-token-tahmini",
  "term": "Sonraki token tahmini",
  "en": "next-token prediction",
  "match": [
   "sonraki token tahmini",
   "next-token prediction"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Dil modelinin, o ana kadar gelen metne bakarak bir sonraki parçanın (token) hangisi olabileceğini olasılıklarla hesaplaması. Büyük dil modellerinin temel eğitim görevidir.",
  "how": "Model, metni token dizisi olarak alır ve sözlüğündeki her token için bir olasılık üretir. Eğitimde gerçek metindeki sıradaki token bilindiği için, model yanlış tahmin ettikçe iç ayarları (ağırlıkları) düzeltilir. Bu işlem çok büyük metin yığınları üzerinde defalarca tekrarlanır. Kullanım sırasında bir token seçilir, diziye eklenir ve aynı adım yeniden işletilir. Yanıt da böylece token token ortaya çıkar.",
  "why": "Sohbet botlarının, kod yardımcılarının ve özetleme araçlarının çoğu bu basit görev üzerine kuruludur. Modelin neden akıcı ama bazen yanlış konuşabildiğini de açıklar: hedef doğruyu bilmek değil, olası devamı üretmektir. Haberlerdeki \"halüsinasyon\" tartışmalarını anlamak için iyi bir başlangıç noktasıdır.",
  "example": "\"Bugün hava çok\" cümlesinden sonra model \"güzel\" ya da \"sıcak\" gibi seçeneklere yüksek, \"kitap\" gibi bir sözcüğe çok düşük olasılık verir.",
  "faq": [
   [
    "Model gerçekten yalnızca bir sonraki parçayı mı tahmin ediyor?",
    "Ön eğitimin temel görevi evet, budur. Ancak bunu iyi yapabilmek için dil bilgisini, olguları ve mantık örüntülerini de içselleştirmesi gerekir. Birçok model sonradan insan geri bildirimiyle ayrıca ince ayardan geçirilir."
   ],
   [
    "Token ile kelime aynı şey mi?",
    "Hayır. Token bir kelime, kelimenin bir parçası, bir noktalama işareti ya da boşluk olabilir. Metnin nasıl bölüneceğini tokenleştirici belirler."
   ]
  ]
 },
 {
  "slug": "tokenlestirme",
  "term": "Tokenleştirme",
  "en": "tokenization",
  "match": [
   "tokenleştir",
   "tokenization",
   "tokenizer"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Metnin, modelin işleyebileceği küçük birimlere (token) bölünüp her birinin bir sayıyla gösterilmesi işlemi. Dil modelleri metni bu sayı dizisi olarak okur.",
  "how": "Tokenleştirici, önceden hazırlanmış bir parça sözlüğüne sahiptir. Gelen metni bu sözlükteki parçalara ayırır: sık geçen kelimeler tek token olurken nadir kelimeler birkaç parçaya bölünür. Her parçanın bir numarası vardır; model kelimeleri ya da harfleri değil, yalnızca bu numaraları görür. Çıktı üretildiğinde numaralar yeniden metne çevrilir. Tokenleştirici modelden ayrı hazırlanır ve genellikle eğitim sırasında değişmez.",
  "why": "Kullanım ücretleri ve bağlam penceresi sınırları token cinsinden ölçüldüğü için maliyet ve kapasite doğrudan bu işleme bağlıdır. Verimlilik dile ve tokenleştiriciye göre değişir. Türkçe gibi ekli dillerde bir kelime sıklıkla birden çok token tutar, bu da aynı metnin daha pahalı ve yavaş işlenmesine yol açabilir.",
  "example": "\"Okullarımızdan\" kelimesi bir tokenleştiricide \"Okul\", \"larımız\" ve \"dan\" gibi üç parçaya ayrılabilir.",
  "faq": [
   [
    "Bir kelime kaç token eder?",
    "Sabit bir oran yoktur; dile ve kullanılan tokenleştiriciye göre değişir. Ekli dillerde bir kelime çoğu zaman birden fazla token tutar."
   ],
   [
    "Metin neden harf harf ya da kelime kelime bölünmüyor?",
    "Harf harf bölmek diziyi çok uzatır ve işlemi pahalılaştırır. Kelime kelime bölmek ise sözlüğü aşırı büyütür, görülmemiş kelimeleri de çözemez. Alt sözcük parçaları bu ikisi arasında bir orta yoldur."
   ]
  ]
 },
 {
  "slug": "bayt-cifti-kodlamasi",
  "term": "Bayt çifti kodlaması (BPE)",
  "en": "byte-pair encoding",
  "match": [
   "bayt çifti kodlaması",
   "=bpe",
   "byte-pair encoding"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Metinde en sık yan yana gelen karakter ya da parça çiftlerini adım adım birleştirerek bir alt sözcük sözlüğü kuran tokenleştirme yöntemi. Özgün hâli bir veri sıkıştırma tekniğidir.",
  "how": "Başlangıçta sözlük tek tek karakterlerden ya da baytlardan oluşur. Algoritma büyük bir metin yığınında en sık yan yana görülen çifti bulur ve bunu yeni bir parça olarak sözlüğe ekler. Bu birleştirme, sözlük istenen boyuta ulaşana kadar tekrarlanır. Sonuçta sık geçen kelimeler tek parça, nadir kelimeler ise daha küçük parçalar hâlinde temsil edilir. Bayt düzeyinde çalışan sürümlerde hiçbir karakter \"bilinmiyor\" diye dışarıda kalmaz.",
  "why": "Birçok büyük dil modeli BPE tabanlı tokenleştiriciler kullanır; \"token\" sayımının ardındaki mantık budur. Yöntem bilinmeyen kelime sorununu çözer ve sözlük boyutunu makul tutar. Bazı dillerin daha çok parçaya bölünmesi gibi tartışmalar da sözlüğün hangi metinle kurulduğuyla ilgilidir.",
  "example": "Metinde \"ev\" ve \"ler\" parçaları sık yan yana geliyorsa, algoritma bunları birleştirip \"evler\" için tek bir parça oluşturabilir.",
  "faq": [
   [
    "BPE ile tokenleştirme aynı şey mi?",
    "Hayır. Tokenleştirme genel işlemin adıdır, BPE ise bunu yapmanın yöntemlerinden biridir. Başka yaklaşımlar da vardır."
   ],
   [
    "BPE her dilde aynı verimle çalışır mı?",
    "Hayır. Sözlük hangi dillerin metniyle kurulduysa o diller daha verimli bölünür. Az temsil edilen dillerde kelimeler çok sayıda küçük parçaya ayrılabilir."
   ]
  ]
 },
 {
  "slug": "sozcuk-gommesi",
  "term": "Sözcük gömmesi (Word2Vec)",
  "en": "word embedding",
  "match": [
   "sözcük gömme",
   "kelime gömme",
   "word2vec",
   "word embedding"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Sözcüklerin, anlam yakınlığını yansıtacak biçimde sayı dizilerine (vektör) dönüştürülmesi. Word2Vec, 2013'te Google araştırmacılarının tanıttığı ve fikri yaygınlaştıran yöntemdir.",
  "how": "Yöntem anlamı, sözcüğün çevresindeki sözcüklerden öğrenir. Model büyük bir metin yığınında bir sözcükten komşularını ya da komşulardan sözcüğü tahmin etmeye çalışır; bu sırada her sözcüğün sayı dizisi güncellenir. Benzer bağlamlarda geçen sözcükler benzer sayı dizileri alır, yani uzayda birbirine yakın durur. Ünlü bir örnekte \"kral\" eksi \"erkek\" artı \"kadın\" işlemi \"kraliçe\"ye yakın bir noktaya varır. Word2Vec her sözcüğe bağlamdan bağımsız tek bir vektör verir.",
  "why": "Gömme, bilgisayarın sözcükler arasındaki ilişkiyi sayısal olarak ölçmesini sağladı ve arama, öneri ile çeviri sistemlerinin temelini oluşturdu. Modern dil modellerindeki token gömmeleri aynı fikrin devamıdır, yalnızca bağlama duyarlıdır. Anlamsal arama ve bilgi getirmeli üretim sistemlerindeki vektörleri anlamak için ilk basamaktır.",
  "example": "Eğitimli bir gömme uzayında \"doktor\" ile \"hekim\" birbirine yakın, \"doktor\" ile \"bisiklet\" ise birbirinden uzak konumlanır.",
  "faq": [
   [
    "Word2Vec ile bugünkü gömmeler arasındaki fark ne?",
    "Word2Vec sözcük başına tek bir vektör üretir; bu yüzden \"yüz\" gibi çok anlamlı sözcüklerin anlamları tek vektörde karışır. Güncel dil modelleri ise sözcüğe bulunduğu cümleye göre farklı bir vektör verir."
   ],
   [
    "Gömme ile tokenleştirme aynı şey mi?",
    "Hayır. Tokenleştirme metni parçalara ve numaralara böler. Gömme ise o parçalara anlam taşıyan vektörler karşılık getirir."
   ]
  ]
 },
 {
  "slug": "sicaklik",
  "term": "Sıcaklık (temperature)",
  "en": "temperature",
  "match": [
   "sıcaklık ayar",
   "sıcaklık parametre",
   "sıcaklık değeri",
   "temperature"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Dil modelinin bir sonraki tokenı seçerken ne kadar rastgele davranacağını belirleyen ayar. Düşük değerler tutarlı ve öngörülebilir, yüksek değerler çeşitli ve beklenmedik yanıtlar verir.",
  "how": "Model her adımda olası tokenlara olasılık atar. Sıcaklık bu olasılık dağılımını keskinleştirir ya da yumuşatır. Düşük sıcaklıkta en olası token iyice baskın hâle gelir ve model hemen hep aynı yolu seçer. Yüksek sıcaklıkta olasılıklar birbirine yaklaşır, daha az olası tokenlar da seçilebilir hâle gelir. Sıfıra yakın değerler pratikte her seferinde en olası tokenı seçmek anlamına gelir. Geliştiriciler bu ayarı çoğunlukla API üzerinden değiştirir.",
  "why": "Aynı model, bu ayara göre kesin bilgi çıkaran bir araca ya da yaratıcı bir yazı ortağına dönüşebilir. Çıktıların tekrarlanabilirliği ile çeşitliliği arasındaki dengeyi kuran temel ayarlardan biridir. Ancak düşük sıcaklık yanlışları ortadan kaldırmaz; model yanlış bir bilgiyi de tutarlı biçimde tekrarlayabilir.",
  "example": "Bir müşteri destek botunda düşük sıcaklık, slogan ya da hikâye önerisi üreten bir araçta ise daha yüksek sıcaklık tercih edilir.",
  "faq": [
   [
    "Sıcaklığı sıfır yaparsam hep aynı yanıtı alır mıyım?",
    "Genellikle çok benzer yanıtlar alırsınız ama garanti yoktur. Donanım ve sunucu ayrıntıları yüzünden küçük farklar çıkabilir."
   ],
   [
    "Yüksek sıcaklık yaratıcılığı artırır mı?",
    "Çeşitliliği artırır, ancak bu kaliteli yaratıcılık demek değildir. Fazla yükseltildiğinde metin tutarsızlaşır ve anlamsız parçalar çıkabilir."
   ]
  ]
 },
 {
  "slug": "top-p-ornekleme",
  "term": "Top-p örnekleme",
  "en": "top-p sampling",
  "match": [
   "=top-p",
   "nucleus sampling"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Modelin bir sonraki tokenı seçerken yalnızca olasılıkları toplamı belirli bir eşiğe (p) ulaşan en olası adaylar arasından rastgele seçim yapması. Çekirdek örnekleme (nucleus sampling) adıyla da bilinir.",
  "how": "Model tokenları olasılığa göre büyükten küçüğe sıralar. En baştan başlayarak olasılıkları toplar ve toplam p değerine, örneğin 0,9'a ulaştığında durur. Bu gruba giren tokenlar aday havuzunu oluşturur, geri kalanlar elenir. Sonra havuzun içinden olasılıklarına göre rastgele bir token seçilir. Model emin olduğunda havuz küçük, kararsız olduğunda geniş olur; yani havuz boyutu duruma göre kendiliğinden ayarlanır. Top-k yönteminde ise havuzun boyutu sabittir.",
  "why": "Çok düşük olasılıklı, saçma tokenları dışarıda bırakarak akıcılığı korur, ama çeşitliliğe de yer bırakır. Metin üretim arayüzlerinde sıcaklıkla birlikte sık karşılaşılan bir ayardır. Çıktının kalitesi ve çeşitliliği üzerindeki etkisi nedeniyle, yapay zekayla çalışan ürün geliştiricileri için temel bir ayar sayılır.",
  "example": "p değeri 0,9 iken en olası üç token sırasıyla yüzde 50, 30 ve 15 olasılıktaysa toplam yüzde 95 olduğu için havuz bu üç tokenla sınırlı kalır ve seçim yalnızca aralarından yapılır.",
  "faq": [
   [
    "Top-p ile top-k arasındaki fark nedir?",
    "Top-k her adımda sabit sayıda en olası tokenı havuza alır. Top-p ise havuzun büyüklüğünü olasılıkların toplamına göre değiştirir."
   ],
   [
    "Top-p ile sıcaklık birlikte kullanılır mı?",
    "Kullanılabilir; sıcaklık dağılımı biçimlendirir, top-p ise olasılığı düşük kuyruğu keser. Çoğu zaman birini ayarlamak yeterlidir, ikisini birden oynamak sonucu kestirmeyi zorlaştırır."
   ]
  ]
 },
 {
  "slug": "spekulatif-kod-cozme",
  "term": "Spekülatif kod çözme",
  "en": "speculative decoding",
  "match": [
   "spekülatif kod çözme",
   "speculative decoding"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Küçük ve hızlı bir modelin birkaç tokenı önceden tahmin etmesi, büyük modelin de bunları tek seferde doğrulamasıyla, çıktı kalitesini değiştirmeden metin üretimini hızlandıran teknik.",
  "how": "Normalde büyük model tokenları sırayla, tek tek üretir. Bu teknikte önce küçük bir \"taslak\" model art arda birkaç token önerir. Büyük model bu önerileri aynı anda inceler; kendi seçeceği tokenlarla uyuşan kısmı kabul eder, ilk uyuşmazlıkta durup doğrusunu yazar. Doğrulama paralel yapılabildiği için öneriler tutuyorsa birkaç token tek adımın maliyetine üretilmiş olur. Uygun bir kabul kuralıyla sonuç, büyük modelin tek başına üreteceği dağılımla aynı kalır.",
  "why": "Büyük modellerde yanıt gecikmesi hem kullanıcı deneyiminin hem de sunucu maliyetinin ana sorunlarından biridir. Bu teknik, modeli küçültmeden ve kaliteden ödün vermeden hız kazandırmayı hedefler. Kazancın büyüklüğü, taslak modelin tahminlerinin ne kadar tuttuğuna bağlıdır.",
  "example": "Kod tamamlamada taslak model \"def topla(a, b):\" gibi kalıpları kolayca doğru tahmin eder ve büyük model bunları tek adımda onaylar.",
  "faq": [
   [
    "Spekülatif kod çözme yanıt kalitesini düşürür mü?",
    "Doğru uygulandığında düşürmez, çünkü son sözü her zaman büyük model söyler. Taslak modelin hatalı önerileri reddedilir."
   ],
   [
    "Neden her durumda hızlandırmaz?",
    "Taslak modelin önerileri sık sık reddedilirse kazanç azalır. Hatta ek hesaplama yükü yüzünden fayda sıfırlanabilir."
   ]
  ]
 },
 {
  "slug": "kv-onbellegi",
  "term": "KV önbelleği",
  "en": "KV cache",
  "match": [
   "kv önbell",
   "kv cache"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Dönüştürücü (transformer) modellerinde, önceki tokenlar için hesaplanan \"anahtar\" ve \"değer\" ara sonuçlarının bellekte saklanıp yeniden kullanılması. Böylece üretim sırasında aynı hesap tekrarlanmaz.",
  "how": "Dikkat mekanizması, her yeni token için önceki tüm tokenların anahtar (key) ve değer (value) vektörlerine bakar. Bu vektörler bir kez hesaplandıktan sonra değişmez. Önbellek bunları genellikle GPU belleğinde tutar; yeni token geldiğinde yalnızca onun anahtar ve değer vektörü hesaplanıp eklenir. Böylece her adımda tüm geçmiş baştan işlenmez. Karşılığında bellek kullanımı, bağlam uzadıkça ve aynı anda hizmet verilen kullanıcı sayısı arttıkça büyür.",
  "why": "Uzun yanıtların makul sürede üretilmesini sağlayan temel verimlilik yöntemlerinden biridir. Uzun bağlam pencereli modellerde belleği en çok zorlayan kalemlerden olduğu için sunucu maliyetini ve aynı anda kaç kişiye hizmet verilebileceğini etkiler. Bu yüzden önbelleği sıkıştırmaya ya da paylaşmaya yönelik birçok araştırma yapılır.",
  "example": "Uzun bir belgeyle sohbet ederken model, her yeni kelimede belgeyi baştan işlemez; belge için daha önce hesaplanmış ara değerleri önbellekten kullanır.",
  "faq": [
   [
    "KV önbelleği, sohbet botunun hafızası mıdır?",
    "Hayır. KV önbelleği tek bir yanıtın hesaplamasını hızlandıran geçici bir teknik bellektir. Sohbetler arasında bilgi hatırlama özelliğiyle ilgisi yoktur."
   ],
   [
    "Neden bu kadar çok bellek tutar?",
    "Her katman ve dikkat kafası için, her token adına ayrı vektörler saklanır. Bu yüzden bellek ihtiyacı token sayısıyla birlikte büyür."
   ]
  ]
 },
 {
  "slug": "uzun-baglam",
  "term": "Uzun bağlam",
  "en": "long context",
  "match": [
   "uzun bağlam",
   "long context"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir yapay zeka modelinin tek seferde işleyebildiği metin miktarının, yani bağlam penceresinin, çok geniş olması; uzun belgeler, kod depoları veya saatlerce süren konuşmalar modele bir arada verilebilir.",
  "how": "Dil modelleri metni token adı verilen küçük parçalara böler ve her yanıtı, o an önlerindeki token'lara bakarak üretir. Bağlam penceresi bu parçaların üst sınırını belirler. Pencere büyüdükçe model bir kitabı, uzun bir sözleşmeyi ya da büyük bir yazılım projesini baştan sona görebilir. Ancak girdi uzadıkça işlem maliyeti ve bekleme süresi artar; model de çok uzun metnin ortasındaki ayrıntıları bazen gözden kaçırabilir.",
  "why": "Uzun bağlam, yapay zekanın çalışabileceği işlerin kapsamını genişletir: hukuk belgelerinin taranması, büyük kod tabanlarının anlaşılması veya uzun raporların özetlenmesi gibi. Bağlam penceresinin boyutu model duyurularında sık öne çıkar, ama büyük pencere her bilgiyi doğru kullanmak anlamına gelmez. Kullanıcı için asıl soru, modelin uzun girdiyi ne kadar güvenilir kullandığıdır.",
  "example": "Bir avukat yüzlerce sayfalık bir sözleşmeyi tek seferde modele yükleyip çelişen maddeleri sormak isteyebilir; bunu parçalara bölmeden yapabilmek uzun bağlam sayesinde mümkündür.",
  "faq": [
   [
    "Bağlam penceresi ile hafıza aynı şey mi?",
    "Değil. Bağlam penceresi modelin o anki konuşmada görebildiği metindir; oturum bitince model genellikle bunu kendiliğinden saklamaz. Kalıcı hafıza ayrı bir özelliktir."
   ],
   [
    "Bağlam penceresi ne kadar büyükse model o kadar mı iyidir?",
    "Her zaman değil. Maliyet ve gecikme artar, çok uzun girdilerde doğruluk düşebilir. Bazen yalnızca ilgili bölümü seçip vermek daha iyi sonuç verir."
   ]
  ]
 },
 {
  "slug": "cikarim-zamani-hesaplamasi",
  "term": "Çıkarım zamanı hesaplaması (test-time compute)",
  "en": "test-time compute",
  "match": [
   "test-time compute",
   "çıkarım zamanı hesaplama",
   "test zamanı hesaplama",
   "çıkarım zamanı ölçekleme"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Modelin yanıt üretirken, yani eğitim bittikten sonra kullanıldığı anda harcadığı ek işlem gücü; modele daha çok düşünme fırsatı vererek zor sorularda daha doğru yanıt almayı amaçlar.",
  "how": "Geleneksel yaklaşımda model, eğitimde öğrendiklerini tek geçişte yanıta dönüştürür. Çıkarım zamanı hesaplamasında ise model yanıtı vermeden önce ara adımlar yazar, birkaç farklı çözüm yolu dener, sonuçları karşılaştırır ya da kendi yanıtını kontrol eder. Bu, bir öğrencinin sınavda ilk aklına geleni yazmak yerine taslak yapıp işlemi gözden geçirmesine benzer. Harcanan süre ve işlem arttıkça özellikle matematik, kod ve mantık sorularında başarı yükselebilir.",
  "why": "Uzun süre model gücünü artırmanın yolu daha büyük model eğitmekti. Çıkarım zamanı hesaplaması ikinci bir eksen açtı: aynı model, yanıt anında daha fazla işlem harcayarak daha iyi sonuç verebilir. Bunun bedeli yavaşlık ve yüksek maliyettir; bu yüzden hangi soruya ne kadar düşünme ayrılacağı hem teknik hem ticari bir karardır.",
  "example": "Karmaşık bir matematik problemi sorulduğunda akıl yürütme modelleri, yanıtı vermeden önce uzun bir ara çözüm yazar; basit bir selamlaşma sorusuna ise neredeyse hiç ek işlem harcamaz.",
  "faq": [
   [
    "Çıkarım zamanı hesaplaması ile eğitim hesaplaması arasındaki fark ne?",
    "Eğitim hesaplaması modelin öğrenme sürecinde bir kez harcanır; çıkarım zamanı hesaplaması ise model her kullanıldığında harcanır. Birincisi modeli yetenekli kılar, ikincisi o yeteneğin ne kadar derin kullanılacağını belirler."
   ],
   [
    "Daha çok işlem her zaman daha iyi yanıt demek mi?",
    "Hayır. Kazanç genellikle zor, çok adımlı sorularda görülür. Basit sorularda ek işlem çoğunlukla yalnızca maliyeti artırır."
   ]
  ]
 },
 {
  "slug": "dusunme-butcesi",
  "term": "Düşünme bütçesi",
  "en": "thinking budget",
  "match": [
   "düşünme bütçesi",
   "thinking budget"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Akıl yürütme yapan bir modelin yanıt vermeden önce ara düşünme adımlarına en fazla ne kadar işlem ya da token ayırabileceğini belirleyen sınır.",
  "how": "Bazı model sağlayıcıları, geliştiricinin düşünme için ayrılacak token miktarını ya da düşünme düzeyini (düşük, orta, yüksek gibi) seçmesine izin verir. Bütçe yüksek tutulursa model daha uzun ara akıl yürütme yazabilir; düşük tutulursa yanıtı daha çabuk ve ucuza verir. Bütçe çoğunlukla bir üst sınırdır: model basit bir soruda hepsini kullanmayabilir. Ayarın adı ve çalışma biçimi sağlayıcıdan sağlayıcıya değişir.",
  "why": "Düşünme adımları da token olarak sayıldığı için yanıt süresini ve çoğu durumda maliyeti doğrudan etkiler. Bütçe ayarı, bir uygulamanın hız, maliyet ve doğruluk arasında denge kurmasını sağlar. Müşteri sohbeti gibi hızlı yanıt isteyen işlerde düşük, zor analiz ve kod işlerinde yüksek bütçe tercih edilebilir.",
  "example": "Bir şirket, sık sorulan sorulara yanıt veren sohbet botunda düşünme bütçesini düşük tutarken, finansal modelleme yapan iç analiz aracında yüksek tutabilir.",
  "faq": [
   [
    "Düşünme bütçesi ile bağlam penceresi aynı şey mi?",
    "Hayır. Bağlam penceresi modelin görebildiği toplam metin sınırıdır; düşünme bütçesi ise yalnızca modelin yanıt öncesi ara akıl yürütmeye ayırabileceği miktarı sınırlar."
   ],
   [
    "Bütçeyi artırmak yanıtı mutlaka iyileştirir mi?",
    "Zor ve çok adımlı sorularda çoğu zaman yardımcı olur, ama basit sorularda fark yaratmaz. Yalnızca süre ve maliyeti artırabilir."
   ]
  ]
 },
 {
  "slug": "genisletilmis-dusunme",
  "term": "Genişletilmiş düşünme",
  "en": "extended thinking",
  "match": [
   "genişletilmiş düşünme",
   "extended thinking"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir modelin yanıtını vermeden önce uzun bir iç akıl yürütme aşaması yürütmesini sağlayan çalışma kipi; karmaşık sorularda adım adım düşünüp kendi çözümünü kontrol etmesine olanak tanır.",
  "how": "Genişletilmiş düşünme açıkken model, asıl yanıttan önce bir düşünce bölümü üretir. Bu bölümde sorunu parçalara ayırır, olası yolları dener, hataları fark edip geri döner. Ardından bu çalışmaya dayanarak nihai yanıtı yazar. Terim Anthropic'in Claude modellerindeki özelliği için kullanılır; benzer yetenek diğer sağlayıcılarda başka adlarla sunulur. Düşünme süresi bir düşünme bütçesiyle sınırlanabilir.",
  "why": "Matematik, kodlama ve çok adımlı planlama gibi işlerde modelin ilk akla gelen yanıtı çoğu zaman yetersiz kalır. Genişletilmiş düşünme bu tür işlerde doğruluğu artırabilir; karşılığında yanıt süresi ve maliyet yükselir. Bu yüzden her görevde açık tutmak yerine, zorluğa göre seçmek makul bir yaklaşımdır.",
  "example": "Bir geliştirici, karmaşık bir yazılım hatasının nedenini bulmak için genişletilmiş düşünmeyi açar; model hatayı önce birkaç olası kaynağa ayırıp teker teker eler, sonra çözümü önerir.",
  "faq": [
   [
    "Genişletilmiş düşünme ile düşünce zinciri aynı şey mi?",
    "Birbirine yakın ama aynı değil. Düşünce zinciri, modelin adım adım yazarak akıl yürütmesi tekniğidir; genişletilmiş düşünme bu tür uzun akıl yürütmeyi ayrı bir aşama olarak sunan, süresi ayarlanabilen bir çalışma kipidir."
   ],
   [
    "Modelin gösterdiği düşünce metni onun gerçekte nasıl karar verdiğini yansıtır mı?",
    "Bunun her zaman eksiksiz olduğu garanti edilemez. Araştırmacılar görünen akıl yürütmenin modelin gerçek iç sürecini birebir yansıtmayabileceğini tartışıyor; bu yüzden metin bir ipucu olarak okunmalı."
   ]
  ]
 },
 {
  "slug": "react",
  "term": "ReAct",
  "en": "reasoning and acting",
  "match": [
   "react yöntem",
   "react çerçeve",
   "react deseni",
   "react yaklaşım"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Dil modelinin akıl yürütmeyi eylemle iç içe yürüttüğü bir yöntem: model düşünür, bir araç kullanır, sonucu görür ve bir sonraki adımı buna göre planlar.",
  "how": "ReAct, adını İngilizce 'reasoning' (akıl yürütme) ve 'acting' (eylem) sözcüklerinden alır. Model önce bir düşünce yazar: 'Bu bilgiyi bulmak için arama yapmalıyım.' Sonra bir eylem gerçekleştirir, örneğin arama motoruna sorgu gönderir. Dönen sonuç modele gözlem olarak verilir; model yeni bir düşünceyle devam eder. Bu döngü yanıt bulunana kadar sürer. Böylece model yalnızca ezberine güvenmek yerine dış kaynaklardan doğrulama yapabilir.",
  "why": "ReAct, bugünkü yapay zeka ajanlarının temel çalışma düzeninin öncüllerinden sayılır. Aracı kullanıp sonucu gördükten sonra planını güncelleyebilen model, tek seferde yanıt üretenlere göre daha az uydurma yapar ve çok adımlı işleri yürütebilir. Ajan haberlerinde geçen 'düşün, harekete geç, gözlemle' döngüsü çoğunlukla bu fikre dayanır.",
  "example": "Bir model 'Bu şirketin kurucusu kaç yaşında?' sorusunu yanıtlarken önce kurucuyu aratır, sonra doğum yılını bulur, en son hesabı yaparak sonucu verir.",
  "faq": [
   [
    "ReAct ile düşünce zinciri arasındaki fark ne?",
    "Düşünce zincirinde model yalnızca kendi içinde adım adım akıl yürütür. ReAct bu akıl yürütmeye araç kullanımını ekler; model dış dünyadan bilgi alıp planını ona göre değiştirir."
   ],
   [
    "ReAct yapay zeka ajanlarıyla ilgili mi?",
    "Evet. Birçok ajan çerçevesi, modelin düşünüp araç çağırdığı, sonucu okuyup devam ettiği bu döngüyü temel alır."
   ]
  ]
 },
 {
  "slug": "kendi-kendine-oyun",
  "term": "Kendi kendine oyun (self-play)",
  "en": "self-play",
  "match": [
   "kendi kendine oyun",
   "self-play"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir yapay zekanın kendi kopyalarına ya da önceki sürümlerine karşı oynayarak öğrenmesi; insan verisine ihtiyaç duymadan sürekli yeni ve giderek zorlaşan deneyim üretir.",
  "how": "Pekiştirmeli öğrenmede ajan, bir oyunu kendi kopyasına karşı oynar. Kazanan hamleler ödüllendirilir, kaybettiren hamlelerden kaçınmayı öğrenir. Rakip de aynı hızla geliştiği için zorluk düzeyi kendiliğinden yükselir; bu, bir satranç oyuncusunun hep kendisinden biraz güçlü biriyle çalışmasına benzer. Oyunun kuralları dışında insan bilgisi gerekmediğinden yöntem, uzmanların hamle kayıtlarının bulunmadığı alanlarda da işe yarar.",
  "why": "Kendi kendine oyun, DeepMind'ın AlphaGo Zero sisteminde insan oyunlarına bakmadan Go'da çok güçlü bir düzeye ulaşılabildiğini gösterdi. Bu fikir, insan verisinin tükenebileceği kaygısı konuşulurken dil modelleri için de yeniden ilgi görüyor. Sınırı ise kuralları ve kazananı net olan alanlarda çok daha kolay uygulanabilmesidir.",
  "example": "DeepMind'ın AlphaZero sistemi satranç, shogi ve Go'yu yalnızca oyun kurallarını bilerek ve kendi kendine oynayarak öğrendi.",
  "faq": [
   [
    "Kendi kendine oyun yalnızca oyunlarda mı kullanılır?",
    "En bilinen başarılı örnekleri oyunlardan gelse de fikir başka alanlara da uyarlanmaya çalışılıyor. Ancak başarıyı ölçecek net bir ölçüt gerektirdiği için genel kullanıma yaymak zor."
   ],
   [
    "Kendi kendine oyun ile modelin kendi ürettiği veriyle eğitilmesi aynı şey mi?",
    "Değil. Kendi kendine oyunda ajan, ortamdan gelen ödülle (kazandı ya da kaybetti) öğrenir. Dışarıdan bir ölçüt olmadan yalnızca kendi çıktısıyla eğitim ise model çöküşü riskini doğurabilir."
   ]
  ]
 },
 {
  "slug": "model-cokusu",
  "term": "Model çöküşü",
  "en": "model collapse",
  "match": [
   "model çöküşü",
   "model collapse"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Yapay zeka modellerinin, önceki modellerin ürettiği verilerle üst üste eğitilmesi sonucunda çeşitliliği ve doğruluğu giderek yitirmesi; çıktıların tekdüzeleşip gerçeklikten uzaklaşması.",
  "how": "Bir model, eğitim verisindeki nadir örnekleri ve uç durumları biraz eksik öğrenir; çıktıları da ortalamaya biraz daha yakın olur. Sonraki model bu çıktılarla eğitilirse eksiklikler üzerine yenileri biner. Nesiller ilerledikçe nadir bilgiler kaybolur, ifadeler birbirine benzer, hatalar pekişir. Bu, bir fotokopinin fotokopisini defalarca çekmeye benzer: her kopyada ayrıntı biraz daha silinir. Araştırmalar bunu özellikle gerçek veri hiç karışmadığında gösterdi.",
  "why": "İnternetteki metinlerin giderek daha büyük bölümü yapay zeka tarafından üretildiği için, gelecekteki modellerin eğitim verisine bu içerik karışabilir. Model çöküşü bu yüzden veri kalitesi, insan kaynaklı verinin değeri ve sentetik verinin dikkatli kullanımı tartışmalarının merkezinde. Riskin ne ölçüde gerçekleşeceği ise hâlâ araştırılıyor.",
  "example": "Bir görsel üretim modelini, yine bir görsel modelin ürettiği resimlerle nesiller boyu eğitmek, sonunda yüzlerin ve nesnelerin hep aynı kalıba benzediği, ayrıntısız çıktılar ortaya çıkarabilir.",
  "faq": [
   [
    "Sentetik veri kullanmak model çöküşüne yol açar mı?",
    "Kendiliğinden hayır. Sentetik veri iyi üretilip filtrelenir ve gerçek veriyle birlikte kullanılırsa yararlı olabilir. Risk, kontrolsüz ve yalnızca model çıktısına dayalı eğitimde artar."
   ],
   [
    "Model çöküşü gerçekten yaşanıyor mu?",
    "Kontrollü deneylerde gösterildi. Büyük ölçekli ticari modellerde ne kadar yaşandığı ise tartışmalı; geliştiriciler genellikle veriyi filtreler ve gerçek veriyi korumaya çalışır."
   ]
  ]
 },
 {
  "slug": "kontrol-noktasi",
  "term": "Kontrol noktası (checkpoint)",
  "en": "checkpoint",
  "match": [
   "kontrol noktası",
   "checkpoint"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Eğitim sırasında modelin o ana kadar öğrendiği değerlerin (ağırlıkların) diske kaydedilmiş anlık görüntüsü; eğitime kaldığı yerden devam etmeyi veya belirli bir aşamadaki modeli kullanmayı sağlar.",
  "how": "Model eğitimi günlerce ya da haftalarca sürebilir. Bu süre boyunca belirli aralıklarla modelin ağırlıkları, çoğu zaman optimizasyon durumuyla birlikte, kayıt altına alınır. Bu kayıtlar kontrol noktalarıdır. Eğitim donanım arızası yüzünden yarıda kesilirse en son kontrol noktasından devam edilir; baştan başlamak gerekmez. Araştırmacılar ayrıca farklı aşamalardaki kontrol noktalarını karşılaştırır, en iyi sonucu vereni seçer ya da sonraki ince ayar çalışmalarının başlangıcı olarak kullanır.",
  "why": "Büyük modellerin eğitimi çok pahalı olduğundan, bir arızada tüm emeği kaybetmek kabul edilemez; kontrol noktaları bu riski azaltır. Açık model paylaşımlarında da kullanıcıların indirdiği dosyalar çoğu zaman bu tür kayıtlardır. Ayrıca eğitimin ilerleyişini incelemek ve gerektiğinde önceki aşamaya dönmek mümkün olur.",
  "example": "Binlerce işlemcide haftalarca süren bir eğitimde bir sunucu arızalanırsa, ekip son kaydedilen kontrol noktasını yükleyip birkaç saatlik işi yeniden yaparak devam eder.",
  "faq": [
   [
    "Kontrol noktası ile model dosyası aynı şey mi?",
    "Yakın ama aynı değil. Kontrol noktası eğitimi sürdürmek için optimizasyon bilgilerini de içerebilir; yayımlanan model dosyası ise genellikle yalnızca kullanım için gereken ağırlıkları taşır."
   ],
   [
    "Neden birden fazla kontrol noktası saklanır?",
    "Eğitim ilerledikçe başarı her zaman artmaz; aşırı öğrenme gibi durumlarda daha önceki bir kayıt daha iyi olabilir. Birden fazla kayıt, en iyisine dönmeyi sağlar."
   ]
  ]
 },
 {
  "slug": "model-agirliklari",
  "term": "Model ağırlıkları",
  "en": "model weights",
  "match": [
   "model ağırlıkları",
   "model weights"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir yapay zeka modelinin eğitim sırasında öğrendiklerini taşıyan, milyarlarca sayıdan oluşan değerler bütünü. Modelin girdiyi nasıl işleyip çıktıya dönüştüreceğini bu sayılar belirler.",
  "how": "Sinir ağı, birbirine bağlı çok sayıda yapay nörondan oluşur ve her bağlantının bir ağırlığı vardır. Eğitim başlarken bu sayılar rastgeledir. Model örnekler üzerinde tahmin yapar, hatasını ölçer ve ağırlıkları hatayı azaltacak yönde küçük adımlarla değiştirir. Bu işlem çok sayıda tekrarlanınca ağırlıklar verideki örüntüleri kodlar. Eğitim bitince sayılar bir dosya olarak kaydedilir; modeli çalıştırmak, bu dosyayı yükleyip girdiyi ağırlıklarla işlemek demektir.",
  "why": "Bir modelin asıl değeri ağırlıklarındadır; eğitimin tüm maliyeti bu sayılarda birikir. Ağırlıkların kamuya açılıp açılmaması \"açık ağırlıklı model\" tartışmasının merkezindedir. Açılırsa herkes modeli kendi donanımında çalıştırıp ince ayar yapabilir, ancak kötüye kullanım riskleri de gündeme gelir.",
  "example": "Meta'nın Llama ailesi gibi açık ağırlıklı modellerde ağırlık dosyaları indirilebilir ve geliştirici modeli kendi sunucusunda çalıştırabilir. Kapalı modellerde ise ağırlıklar şirketin sunucularında kalır, kullanıcılar yalnızca uygulama ya da API üzerinden erişir.",
  "faq": [
   [
    "Ağırlıklar ile parametreler aynı şey mi?",
    "Günlük kullanımda çoğu zaman eş anlamlı sayılır. Teknik olarak parametre, ağırlıkların yanı sıra sapma gibi öğrenilen diğer değerleri de kapsayabilir. \"70 milyar parametreli model\" demek, öğrenilmiş sayıların toplam adedini söylemektir."
   ],
   [
    "Açık ağırlıklı model ile açık kaynak model aynı mı?",
    "Hayır. Açık ağırlıklı modelde yalnızca eğitilmiş ağırlıklar paylaşılır. Eğitim verisi, eğitim kodu ve ayrıntılar her zaman yayımlanmaz; bu yüzden \"açık kaynak\" ifadesi tartışmalıdır."
   ]
  ]
 },
 {
  "slug": "temel-surum-model",
  "term": "Temel sürüm model (base model)",
  "en": "base model",
  "match": [
   "base model"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Büyük bir metin yığını üzerinde yalnızca bir sonraki parçayı tahmin etmeyi öğrenmiş, henüz komutları izleyecek ya da sohbet edecek biçimde ayarlanmamış ham dil modeli.",
  "how": "Temel model, ön eğitim denen aşamada internetten, kitaplardan ve kod depolarından derlenen çok büyük bir metin yığını üzerinde eğitilir. Tek görevi, verilen metnin devamında hangi parçanın geleceğini tahmin etmektir. Bu yüzden komut verildiğinde onu yerine getirmek yerine metni sürdürmeye çalışır. Sonraki aşamalarda ince ayar ve insan geri bildirimiyle eğitildiğinde talimat modeline dönüşür. Temel model, bu zincirin ilk ve en çok işlem gücü isteyen halkasıdır.",
  "why": "Bir modelin bilgisinin ve yeteneklerinin büyük bölümü bu aşamada oluşur; sonraki ayarlar çoğunlukla bu birikimi kullanılabilir hale getirir. Açık model yayınlarında temel sürüm genellikle ayrıca paylaşılır. Araştırmacılar ve şirketler onu kendi alanlarına göre ince ayarlayarak özel çözümler üretebilir.",
  "example": "Temel modele \"Fransa'nın başkenti neresidir?\" yazıldığında yanıt vermek yerine \"İtalya'nın başkenti neresidir?\" gibi benzer sorular üreterek metni sürdürebilir.",
  "faq": [
   [
    "Temel model ile talimat modeli arasındaki fark nedir?",
    "Temel model yalnızca metnin devamını tahmin eder. Talimat modeli ise bu temelin üzerine ek eğitimle komutları anlayıp yardımcı yanıtlar verecek şekilde ayarlanmıştır."
   ],
   [
    "Temel modeller neden hâlâ yayımlanıyor?",
    "Geliştiriciler onları kendi verileriyle ince ayarlamak için başlangıç noktası olarak kullanır. Ayrıca henüz sohbet davranışıyla şekillenmemiş oldukları için araştırmada modelin ham yeteneklerini incelemeye yarar."
   ]
  ]
 },
 {
  "slug": "talimat-modeli",
  "term": "Talimat modeli (instruct model)",
  "en": "instruct model",
  "match": [
   "instruct model",
   "talimat modeli"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Temel bir modelin, insanların verdiği komutları anlayıp izleyecek ve yardımcı yanıtlar verecek biçimde ek eğitimle ayarlanmış sürümü.",
  "how": "Talimat modeli, bir temel modelden yola çıkılarak üretilir. İlk adımda uzmanların yazdığı ya da seçtiği çok sayıda talimat ve örnek yanıt çiftiyle denetimli ince ayar yapılır. Ardından insanların ya da başka modellerin hangi yanıtı daha iyi bulduğuna dair tercihlerden yararlanan yöntemler uygulanır. Böylece model soruyu yanıtlamayı, adımları izlemeyi, uygun üslupta konuşmayı ve zararlı isteklere ret vermeyi öğrenir. Çoğu sohbet asistanı bu tür bir modelin üzerine kuruludur.",
  "why": "Kullanıcıların doğrudan etkileşime girdiği ürünlerin neredeyse tamamı talimat modeli kullanır. Modelin ne kadar yardımcı, güvenli ve tutarlı davrandığı büyük ölçüde bu aşamada belirlenir. Haberlerde geçen \"sohbet\" ya da \"asistan\" sürümleri genellikle bu aşamadan geçmiş modelleri ifade eder.",
  "example": "Temel modele \"Bana kısa bir e-posta yaz\" demek yarım kalmış bir metin gibi işlenebilirken, talimat modeli doğrudan e-postayı yazar.",
  "faq": [
   [
    "Sohbet modeli ile talimat modeli aynı şey mi?",
    "Çoğu zaman birbirine çok yakındır. Sohbet modelleri, çok turlu diyaloğa özellikle ayarlanmış talimat modelleri olarak düşünülebilir; ancak adlandırma şirketten şirkete değişir."
   ],
   [
    "Talimat modeli her zaman temel modelden daha mı iyi?",
    "Günlük kullanım için evet, çünkü komutları izler. Ancak özel bir alanda sıfırdan ince ayar yapmak isteyen geliştiriciler, daha esnek olduğu için temel modeli tercih edebilir."
   ]
  ]
 },
 {
  "slug": "gomme-modeli",
  "term": "Gömme modeli",
  "en": "embedding model",
  "match": [
   "gömme modeli",
   "embedding model"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Metni, görseli ya da sesi anlamını yansıtan bir sayı dizisine (vektör) çeviren model. Anlamca birbirine yakın içerikler, birbirine yakın sayı dizileri alır.",
  "how": "Model, bir metni okuyup sabit uzunlukta bir vektör üretir. Bu vektör, içeriğin anlamını çok boyutlu bir uzayda bir nokta olarak temsil eder. Anlamı yakın iki cümle bu uzayda yan yana, ilgisiz olanlar uzakta düşer. Belgeler önceden vektöre çevrilip vektör veritabanında saklanır. Arama sırasında sorgu da aynı modelle vektöre dönüştürülür ve uzayda ona en yakın belgeler bulunur.",
  "why": "Gömme modelleri, kelime eşleşmesine bağlı kalmadan anlama göre arama yapılmasını sağlar. Bir yapay zeka asistanının şirket belgelerinden bilgi getirdiği erişimle güçlendirilmiş üretim (RAG) sistemlerinin, öneri motorlarının ve benzer içerik bulma araçlarının temelindedir.",
  "example": "Bir destek sisteminde \"şifremi unuttum\" ile \"hesabıma giremiyorum\" cümleleri aynı sözcükleri içermese de gömme uzayında birbirine yakın düşer, böylece doğru yardım makalesi bulunur.",
  "faq": [
   [
    "Gömme modeli ile sohbet modeli arasındaki fark nedir?",
    "Sohbet modeli yeni metin üretir. Gömme modeli ise metin üretmez; yalnızca içeriği karşılaştırılabilir sayılara çevirir. İkisi sıklıkla birlikte çalışır."
   ],
   [
    "Gömme modelini sonradan değiştirmek sorun çıkarır mı?",
    "Evet. Farklı modellerin ürettiği vektörler birbiriyle uyumlu değildir. Model değişirse tüm belgelerin yeniden vektöre çevrilip dizinlenmesi gerekir."
   ]
  ]
 },
 {
  "slug": "yeniden-siralama-modeli",
  "term": "Yeniden sıralama modeli (reranker)",
  "en": "reranker",
  "match": [
   "reranker",
   "yeniden sıralama model"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir aramada bulunan aday belgeleri, sorguyla ilgisine göre daha ayrıntılı değerlendirip en alakalıdan başlayarak yeniden sıralayan model.",
  "how": "Arama genellikle iki aşamada yapılır. İlk aşamada hızlı bir yöntem, örneğin gömme modeli, geniş bir koleksiyondan onlarca ya da yüzlerce aday getirir. İkinci aşamada yeniden sıralama modeli sorguyu ve her adayı birlikte okuyup bir ilgi puanı verir. Sorgu ile belge birlikte incelendiği için değerlendirme daha isabetlidir, ancak daha yavaştır. Bu yüzden yalnızca kısa aday listesine uygulanır ve en yüksek puanlı sonuçlar seçilir.",
  "why": "Dil modeline verilebilecek metin miktarı sınırlıdır ve alakasız parçalar yanıtın kalitesini düşürür. Yeniden sıralama, erişimle güçlendirilmiş üretim (RAG) sistemlerinde modele gerçekten işe yarayan birkaç parçayı iletmenin ucuz ve etkili bir yoludur.",
  "example": "Şirket içi bir doküman asistanında gömme araması 50 paragraf getirir, yeniden sıralama modeli bunların en ilgili beşini seçer ve yalnızca onlar dil modeline gönderilir.",
  "faq": [
   [
    "Gömme modeli ile yeniden sıralama modeli arasındaki fark nedir?",
    "Gömme modeli belgeleri ve sorguyu ayrı ayrı vektöre çevirdiği için hızlıdır ama daha kabadır. Yeniden sıralama modeli sorguyla belgeyi birlikte okuduğu için daha isabetlidir ama daha yavaştır. Genelde ikisi birlikte kullanılır."
   ],
   [
    "Her RAG sisteminde yeniden sıralama modeli gerekir mi?",
    "Gerekmez. Küçük ve düzenli bir belge koleksiyonunda gömme araması yeterli olabilir. Sonuçların alakası düşükse ya da koleksiyon büyükse yeniden sıralama eklemek genellikle fark yaratır."
   ]
  ]
 },
 {
  "slug": "hibrit-akil-yurutme-modeli",
  "term": "Hibrit akıl yürütme modeli",
  "en": "hybrid reasoning model",
  "match": [
   "hibrit akıl yürütme modeli",
   "hybrid reasoning model"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Tek bir model içinde hem hızlı, doğrudan yanıt hem de uzun düşünme adımlarıyla yanıt vermeyi sunan ve hangi kipin kullanılacağının seçilebildiği model türü.",
  "how": "Model, hem doğrudan yanıt üretecek hem de yanıttan önce ara adımlarla düşünecek şekilde eğitilir. Kullanıcı ya da geliştirici bir ayarla düşünme kipini açıp kapatabilir; bazı sistemlerde düşünmeye ayrılacak işlem miktarı da belirlenebilir. Düşünme açıkken model sonuca varmadan önce çok sayıda ara adım üretir, bu da daha fazla işlem ve zaman demektir. Kapalıyken ise soruya hemen yanıt verir.",
  "why": "Her soru uzun düşünmeyi gerektirmez. Basit işlerde düşünmek hem yavaşlık hem de gereksiz maliyet getirir, zor matematik ve kodlama işlerinde ise doğruluğu artırabilir. Hibrit yaklaşım, iki ayrı model arasında seçim yapma zahmetini ortadan kaldırır ve hız, maliyet ile kalite dengesini kullanıcıya bırakır.",
  "example": "Anthropic'in Claude ailesinin bazı sürümlerinde olduğu gibi, aynı model hızlı sohbet için doğrudan, zor bir kodlama sorusu için ise genişletilmiş düşünme kipinde kullanılabilir.",
  "faq": [
   [
    "Hibrit model ile akıl yürütme modeli arasındaki fark nedir?",
    "Akıl yürütme modeli her zaman uzun düşünerek yanıtlar. Hibrit modelde bu davranış isteğe bağlıdır; aynı model hem düşünerek hem düşünmeden çalışabilir."
   ],
   [
    "Düşünme kipi her zaman daha doğru sonuç verir mi?",
    "Hayır. Çok adımlı mantık, matematik ve kodlama gibi işlerde faydası daha belirgindir. Basit sorularda doğruluk çoğu zaman değişmez, yalnızca süre ve maliyet artar."
   ]
  ]
 },
 {
  "slug": "karma-hassasiyetli-egitim",
  "term": "Karma hassasiyetli eğitim",
  "en": "mixed-precision training",
  "match": [
   "karma hassasiyetli eğitim",
   "mixed-precision training"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir sinir ağının eğitiminde hesapların büyük kısmını düşük hassasiyetli sayı biçimleriyle, kritik kısımlarını yüksek hassasiyetle yaparak bellek ve zaman tasarrufu sağlayan yöntem.",
  "how": "Bilgisayarlar sayıları belirli sayıda bitle saklar. Az bit daha az bellek ve daha hızlı hesap demektir, ama sayıların kesinliği düşer. Karma hassasiyette ileri ve geri hesapların çoğu 16 bitlik biçimlerle yapılır. Ağırlıkların ana kopyası ve küçük güncellemelerin biriktiği kısım ise 32 bit gibi daha hassas biçimde tutulur. Çok küçük değerlerin sıfıra yuvarlanmasını önlemek için kayıp ölçekleme gibi ek teknikler de kullanılır.",
  "why": "Büyük dil modellerinin eğitimi çok pahalıdır ve grafik işlemci belleği sınırlıdır. Karma hassasiyet, aynı donanımla daha büyük modelleri ya da daha kısa eğitim sürelerini mümkün kılar. Bu yüzden günümüzde büyük modellerin eğitiminde neredeyse standart bir yaklaşımdır.",
  "example": "Modern grafik işlemcilerde bfloat16 ve FP16 gibi 16 bitlik biçimlerle eğitim yapılır; ağırlıkların hassas kopyası ise ayrıca 32 bitlik biçimde tutulabilir.",
  "faq": [
   [
    "Karma hassasiyetli eğitim ile niceleme (quantization) aynı şey mi?",
    "Hayır. Karma hassasiyet eğitim sırasında hız ve bellek kazancı sağlar. Niceleme ise genellikle eğitilmiş bir modelin daha az bitle saklanıp çalıştırılmasıdır."
   ],
   [
    "Düşük hassasiyet modelin kalitesini düşürür mü?",
    "Doğru uygulandığında genellikle belirgin bir kalite kaybı olmaz. Yanlış ayarlanırsa eğitim kararsızlaşabilir, bu yüzden hassas kısımlar korunur."
   ]
  ]
 },
 {
  "slug": "egitim-kesme-tarihi",
  "term": "Eğitim kesme tarihi",
  "en": "training cutoff",
  "match": [
   "bilgi kesme tarihi",
   "eğitim kesme tarihi",
   "knowledge cutoff"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir modelin eğitim verisinin toplandığı son zaman noktası. Model, bu tarihten sonra olan olaylar hakkında eğitimden gelen bir bilgiye sahip değildir.",
  "how": "Model eğitilmeden önce veri belirli bir tarihe kadar toplanır. Eğitim, test ve güvenlik çalışmaları aylar sürebildiği için model kesme tarihinden epey sonra yayımlanır. Model bu tarihten sonrasını yalnızca kendisine yazıyla verilen bağlamdan ya da bağlı bir arama aracından öğrenebilir. Son dönemlere ait veri az olduğundan, modeller kendi kesme tarihini çoğu zaman gerçeğinden daha eski tahmin eder.",
  "why": "Modelin eski bilgiyi güncelmiş gibi sunması hatalı yanıtlara yol açar. Güncel haberler, yeni yasalar, yazılım kütüphanelerinin yeni sürümleri gibi konularda yanıtların doğrulanması gerekir. Kesme tarihini bilmek, modelin hangi sorularda web araması gibi bir araçla desteklenmesi gerektiğini anlamaya yardımcı olur.",
  "example": "Kesme tarihinden sonra çıkan bir yazılım kütüphanesinin yeni sürümünü model bilmeyebilir ve eski kullanım şeklini önerebilir.",
  "faq": [
   [
    "Model kendi kesme tarihini doğru söyleyebilir mi?",
    "Her zaman değil. Modeller kesme tarihini genellikle gerçekte olduğundan daha eski tahmin edebilir. Güvenilir bilgi için şirketin yayımladığı model belgelerine bakmak daha doğrudur."
   ],
   [
    "Web arama özelliği olan modellerde kesme tarihi önemini yitirir mi?",
    "Azalır ama ortadan kalkmaz. Arama güncel bilgiyi getirebilir, fakat modelin genel bilgisi ve değerlendirmesi hâlâ eğitim verisine dayanır."
   ]
  ]
 },
 {
  "slug": "kendiliginden-ogrenme",
  "term": "Kendiliğinden öğrenme (in-context learning)",
  "en": "in-context learning",
  "match": [
   "in-context learning",
   "bağlam içi öğrenme"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Büyük dil modelinin, istemde verilen birkaç örnekten ya da açıklamadan yeni bir görevi kavrayıp model ağırlıklarını değiştirmeden yerine getirebilmesi. Öğrenme eğitim sırasında değil, model yanıt üretirken bağlamın içinde gerçekleşir.",
  "how": "Kullanıcı istemin içine birkaç girdi-çıktı örneği koyar, ardından yeni bir girdi verir. Model bağlamdaki örüntüyü fark eder ve yanıtını bu örüntüye uydurur. Modelin ağırlıkları değişmez; örnekler yalnızca o konuşma boyunca etkili olur ve bağlam penceresinden çıkınca unutulur. Verilen örnek sayısına göre sıfır örnekli, tek örnekli ve az örnekli istem gibi adlar kullanılır. Bu yeteneğin tam olarak nasıl ortaya çıktığı araştırmalarda hâlâ tartışılan bir konudur.",
  "why": "Bu yetenek sayesinde bir model yeniden eğitilmeden yeni işlere uyarlanabilir. Küçük ekipler için maliyet ve zaman açısından büyük kolaylık sağlar. Haberlerde geçen az örnekle öğrenme iddiaları çoğunlukla bu davranışa dayanır.",
  "example": "Müşteri yorumlarını olumlu ya da olumsuz diye etiketletmek isteyen biri, istemde etiketlenmiş üç örnek yorum gösterir; model dördüncü yorumu aynı mantıkla etiketler.",
  "faq": [
   [
    "Kendiliğinden öğrenme ile ince ayar arasındaki fark nedir?",
    "İnce ayar, modelin ağırlıklarını ek verilerle kalıcı olarak günceller. Kendiliğinden öğrenmede ağırlıklar aynı kalır; örnekler yalnızca istemde durur ve etkisi o konuşmayla sınırlıdır."
   ],
   [
    "Model kaç örnekle öğrenir?",
    "Sabit bir sayı yoktur; göreve ve modele göre değişir. Çoğu basit iş için birkaç örnek yeterli olur, ancak çok fazla örnek bağlam penceresini doldurur."
   ]
  ]
 },
 {
  "slug": "model-distilasyonu-saldirisi",
  "term": "Model distilasyonu saldırısı",
  "en": "distillation attack",
  "match": [
   "damıtma saldırı"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Bir yapay zeka modelinin yanıtlarını çok sayıda sorguyla toplayıp bu verilerle benzer davranan ayrı bir model eğitme girişimi. Genellikle erişim koşullarını aşarak, ağırlıklara ulaşmadan modelin yeteneklerini kopyalamayı amaçlar.",
  "how": "Saldırgan hedef modele arayüz üzerinden çok sayıda istem gönderir ve yanıtları kaydeder. Bu istem-yanıt çiftleri, daha küçük ya da başka bir modeli eğitmek için veri olarak kullanılır. Öğrenci model, öğretmenin iç ağırlıklarını görmeden yalnızca çıktı davranışını taklit eder. Distilasyon yöntemi kendi başına meşru ve yaygın bir tekniktir; sorun, başkasının modelinin çıktılarının izinsiz ve kullanım şartlarına aykırı biçimde toplanmasında çıkar. Şirketler bunu hız sınırları ve olağandışı sorgu örüntülerini izleyerek engellemeye çalışır.",
  "why": "Önde gelen modeller büyük yatırımlarla geliştirildiği için yeteneklerinin ucuza kopyalanması hem ticari hem güvenlik açısından kaygı yaratıyor. Kopya modelde orijinaldeki güvenlik önlemleri bulunmayabilir. Öte yandan model çıktılarının kullanımına dair hukuki ve etik sınırlar tartışmalı; sağlayıcılar bu alanı çoğunlukla kullanım şartlarıyla düzenlemeye çalışıyor.",
  "example": "Bir sohbet robotunun programlama arayüzüne otomatik betikle çok sayıda soru gönderen ve gelen yanıtlarla kendi modelini eğiten bir ekip, bu türden bir girişimin tipik örneğidir.",
  "faq": [
   [
    "Distilasyon ile distilasyon saldırısı aynı şey mi?",
    "Hayır. Distilasyon, büyük bir modelin bilgisini küçük bir modele aktarma yöntemidir ve şirketler bunu kendi modelleriyle sıkça yapar. Saldırı denildiğinde, başkasının modeline izinsiz ve koşulları çiğneyerek bu yöntemin uygulanması kastedilir."
   ],
   [
    "Bu tür saldırılar tamamen engellenebilir mi?",
    "Tamamen engellemek zordur. Sağlayıcılar hız sınırı koyar, şüpheli kullanım örüntülerini izler ve hesapları kapatır; ancak bunlar riski azaltır, ortadan kaldırmaz."
   ]
  ]
 },
 {
  "slug": "uzun-ufuklu-gorevler",
  "term": "Uzun ufuklu görevler",
  "en": "long-horizon tasks",
  "match": [
   "uzun ufuklu"
  ],
  "cat": "Modeller ve eğitim",
  "def": "Tek bir yanıtla bitmeyen, çok sayıda adım, araç kullanımı ve uzun bir süre gerektiren görevler. Yapay zeka ajanlarının hedefe varana kadar planı sürdürmesini ve ara sonuçlara göre yön değiştirmesini gerektirir.",
  "how": "Böyle bir görev genellikle alt adımlara bölünür. Model her adımda ne yapacağına karar verir, bir araç çağırır, sonucu okur ve planını günceller. Her adımda küçük bir hata ihtimali olduğundan adım sayısı arttıkça hatalar birikir. Ayrıca bağlam penceresi dolabilir ve model asıl hedefi gözden kaçırabilir. Bu yüzden not tutma, belleğe yazma, ara kontrol noktaları ve görevi alt ajanlara bölme gibi yöntemler kullanılır.",
  "why": "Modeller kısa soru-cevapta çok başarılı olabilir, ama gerçek işlerin çoğu saatler süren çok adımlı çalışma ister. Ajanların işe yarar olup olmadığı büyük ölçüde bu alandaki güvenilirliğe bağlıdır. Bu nedenle haberlerde model yeteneği tartışılırken uzun görevleri tutarlı biçimde sürdürebilme sık gündeme gelir.",
  "example": "Bir yazılım ajanına bir projedeki hatayı bulup düzeltmesi, ilgili testleri çalıştırması ve sonucu raporlaması söylendiğinde, ajan onlarca dosya okuma, değiştirme ve deneme adımından geçer.",
  "faq": [
   [
    "Uzun ufuklu görevler neden yapay zeka için zor?",
    "Hatalar adım adım birikir, bağlam bilgisi taşar ve hedef yolda kaybolabilir. Kısa bir soruda küçük bir yanlış kolay fark edilirken, uzun bir zincirde sonradan ortaya çıkıp tüm işi bozabilir."
   ],
   [
    "Uzun bağlam penceresi bu sorunu çözer mi?",
    "Tek başına çözmez. Geniş pencere daha fazla bilgi tutmaya yardım eder, ama planı sürdürme, hatadan dönme ve doğru araçları seçme becerileri de gerekir."
   ]
  ]
 },
 {
  "slug": "sistem-istemi",
  "term": "Sistem istemi",
  "en": "system prompt",
  "match": [
   "sistem istemi",
   "system prompt"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir yapay zeka uygulamasını geliştirenin, sohbet başlamadan önce modele verdiği; rolünü, üslubunu ve sınırlarını belirleyen talimat metni. Kullanıcı genellikle bu metni görmez.",
  "how": "Model her yanıttan önce sistem istemini, konuşma geçmişini ve kullanıcının son mesajını birlikte okur. Sistem istemi çoğunlukla kullanıcı mesajlarından daha yüksek öncelikli sayılacak biçimde eğitilmiş bir alana yazılır. İçinde modelin rolü, konuşma tonu, yasak konular, yanıt biçimi ve kullanabileceği araçlar yer alabilir. Ancak model talimatlara her zaman kesin uyacak diye bir garanti yoktur; ustaca yazılmış kullanıcı mesajları kuralları aşabilir ya da metnin kendisini ifşa ettirebilir.",
  "why": "Aynı model, farklı sistem istemleriyle çok farklı ürünlere dönüşür. Bu yüzden bir sohbet robotunun davranışını anlamak için sistem istemine bakmak gerekir. Haberlerde zaman zaman sızdırılan sistem istemleri görülür; bu da gizli tutulması gereken bilginin istemin içine konmaması gerektiğini hatırlatır.",
  "example": "Bir bankanın müşteri asistanında sistem istemi, yalnızca bankacılık sorularını yanıtlamasını, kısa ve nazik olmasını ve yatırım tavsiyesi vermemesini söyleyebilir.",
  "faq": [
   [
    "Sistem istemi ile kullanıcı istemi arasındaki fark nedir?",
    "Sistem istemini uygulamayı geliştiren yazar ve modelin genel davranışını belirler. Kullanıcı istemi ise sohbet sırasında kişinin yazdığı mesajdır ve belirli bir isteği ifade eder."
   ],
   [
    "Kullanıcı sistem istemini görebilir mi?",
    "Normalde göremez, ancak model ikna edilirse içeriğini aktarabilir. Bu yüzden parola ya da gizli anahtar gibi hassas bilgiler sistem istemine konmamalıdır."
   ]
  ]
 },
 {
  "slug": "istem-onbellekleme",
  "term": "İstem önbellekleme (prompt caching)",
  "en": "prompt caching",
  "match": [
   "istem önbellek",
   "prompt caching"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Art arda gelen isteklerde aynı kalan uzun istem başlangıcının bir kez işlenip saklanması ve sonraki çağrılarda yeniden hesaplanmaması. Hem maliyeti hem de yanıt gecikmesini azaltmayı amaçlar.",
  "how": "Model bir istemi okurken bir dizi ara hesaplama üretir. Sağlayıcı, istemin başındaki sabit kısım için bu ara durumu bir süre saklar. Sonraki istek aynı başlangıçla gelirse o kısım baştan işlenmez, saklanan durum kullanılır; yalnızca yeni eklenen kısım hesaplanır. Bu yüzden değişmeyen içerik, yani sistem istemi, uzun belgeler ve araç tanımları başa, değişen kısım sona konur. Başlangıç değişirse önbellek geçersiz kalır; saklama süresi ve fiyatlandırma sağlayıcıya göre farklıdır.",
  "why": "Uzun belgelerle çalışan ya da her adımda aynı büyük bağlamı yeniden gönderen ajanlar için tekrar eden işleme ciddi bir maliyet ve bekleme süresi oluşturur. Önbellekleme bu yükü hafifletir. Yapay zeka uygulaması maliyetlerinin nasıl düşürüldüğünü anlatan haberlerde sık geçen bir tekniktir.",
  "example": "Şirket içi bir asistan her soruda aynı uzun yönetmelik metnini istemin başına ekliyorsa, bu metin önbelleğe alınarak her yeni soruda baştan işlenmesi önlenir.",
  "faq": [
   [
    "İstem önbellekleme yanıtın kendisini mi saklar?",
    "Hayır. Saklanan şey, istemin başlangıç kısmının işlenmiş hâlidir. Model her seferinde yanıtı yeniden üretir; yalnızca girdi tarafındaki tekrar eden iş atlanır."
   ],
   [
    "Önbellekleme yanıt kalitesini etkiler mi?",
    "Beklenmez; aynı hesaplamanın yeniden kullanılmasından ibarettir. Amaç kaliteyi değiştirmek değil, aynı sonucu daha hızlı ve ucuz elde etmektir."
   ]
  ]
 },
 {
  "slug": "istem-sablonu",
  "term": "İstem şablonu",
  "en": "prompt template",
  "match": [
   "istem şablonu",
   "prompt template"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "İçinde değişken yer tutucular bulunan ve her kullanımda farklı verilerle doldurulan hazır istem metni. Aynı talimatı tutarlı biçimde tekrar tekrar kullanmayı sağlar.",
  "how": "Sabit kısımlar, yani talimat, örnekler ve biçim kuralları bir kez yazılır; değişecek yerler yer tutucularla işaretlenir. Uygulama çalışırken bu yer tutucuları kullanıcıdan ya da veri tabanından gelen gerçek değerlerle doldurur ve oluşan metni modele gönderir. Şablonlar sürümlenebilir, test edilebilir ve ekipler arasında paylaşılabilir. Dışarıdan gelen metin şablonun içine gömüldüğünde model onu talimat gibi okuyabilir; bu yüzden istem enjeksiyonu riskine dikkat etmek gerekir.",
  "why": "Şirketler yapay zekayı yüzlerce ya da binlerce kez aynı iş için çalıştırdığında, istemin her seferinde elle yazılması hem yavaş hem tutarsız olur. Şablon, kaliteyi ölçülebilir ve tekrarlanabilir kılar. Üretim ortamındaki dil modeli uygulamalarının temel yapı taşlarından biridir.",
  "example": "Bir e-ticaret sitesi, her ürün yorumu için 'Aşağıdaki yorumu iki cümlede özetle ve duygusunu belirt: {yorum}' şablonunu kullanır; yer tutucu, her seferinde gelen yorumla değiştirilir.",
  "faq": [
   [
    "İstem şablonu ile sistem istemi aynı şey mi?",
    "Hayır. Sistem istemi modelin genel rolünü ve kurallarını belirleyen sabit bir metindir. Şablon ise değişken alanları olan, belirli bir görev için hazırlanmış istemdir; sistem isteminin içinde de kullanılabilir."
   ],
   [
    "Şablon kullanmak yanıtların hep aynı olmasını sağlar mı?",
    "Girdi tutarlı olur, ama çıktı yine de değişebilir; çünkü modeller yanıtı olasılıklarla üretir. Şablon tutarlılığı artırır, birebir aynı yanıtı garanti etmez."
   ]
  ]
 },
 {
  "slug": "yapilandirilmis-cikti",
  "term": "Yapılandırılmış çıktı",
  "en": "structured output",
  "match": [
   "yapılandırılmış çıktı",
   "structured output"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Dil modelinin serbest metin yerine önceden tanımlanmış bir biçimde, örneğin belirli alanları olan JSON olarak yanıt vermesi. Çıktı, yazılım tarafından doğrudan okunup işlenebilir.",
  "how": "Geliştirici beklenen alanları ve türleri bir şema ile tanımlar. Bazı sağlayıcılarda üretim sırasında modelin yalnızca şemaya uyan sonraki parçayı seçebilmesi için kısıtlama uygulanır. Diğer durumlarda biçim istemde istenir ve gelen çıktı sonradan doğrulanır; uyuşmazlık varsa istek yeniden denenir. Biçimin geçerli olması içeriğin doğru olduğu anlamına gelmez: alanlar eksiksiz dolu olsa da değerler yanlış olabilir.",
  "why": "Dil modelleri insanlar için yazılmış gibi akıcı metin üretir, ama yazılım sistemleri düzenli veri ister. Yapılandırılmış çıktı bu iki dünya arasındaki köprüdür; modelin sonucunu veri tabanına, forma ya da başka bir programa güvenle aktarmayı mümkün kılar. Kurumsal uygulamalarda otomasyonun temel koşullarından biridir.",
  "example": "Bir fatura görselini okuyan uygulama, modelden serbest bir paragraf yerine tarih, tutar ve satıcı adı alanları olan bir JSON nesnesi ister ve bunu doğrudan muhasebe sistemine aktarır.",
  "faq": [
   [
    "Yapılandırılmış çıktı içeriğin doğru olduğunu garanti eder mi?",
    "Hayır. Biçimin şemaya uyması sağlanabilir, ama içindeki bilginin doğruluğu ayrıca denetlenmelidir. Model geçerli biçimde yanlış bir değer de verebilir."
   ],
   [
    "Yapılandırılmış çıktı ile fonksiyon çağırma aynı mı?",
    "Yakın ama farklıdır. Yapılandırılmış çıktı, yanıtın kendisinin belirli bir biçimde olmasıdır. Fonksiyon çağırmada ise model, bir işlevin hangi parametrelerle çalıştırılacağını yapılandırılmış biçimde bildirir."
   ]
  ]
 },
 {
  "slug": "fonksiyon-cagirma",
  "term": "Fonksiyon çağırma (araç kullanımı)",
  "en": "function calling",
  "match": [
   "fonksiyon çağırma",
   "function calling",
   "tool use",
   "araç kullanımı",
   "araç çağırma"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Dil modelinin, geliştiricinin tanımladığı bir işlevi, örneğin hava durumu sorgusunu ya da veri tabanı aramasını, hangi değerlerle çalıştırmak istediğini yapılandırılmış biçimde bildirmesi. Böylece model dış sistemlerle birlikte çalışabilir.",
  "how": "Geliştirici modele kullanabileceği işlevlerin adını, açıklamasını ve parametrelerini verir. Kullanıcının isteği bir işleve ihtiyaç duyuyorsa model düz yanıt yazmak yerine bir çağrı isteği üretir. Modelin kendisi işlevi çalıştırmaz; bunu uygulama yapar, sonucu modele geri gönderir ve model bu sonuçla nihai yanıtı yazar. Gerekirse bu döngü birkaç kez tekrarlanır. Yapay zeka ajanlarının dış dünyada iş yapabilmesinin temelinde bu mekanizma yatar.",
  "why": "Dil modelleri tek başına güncel bilgiye erişemez, hesap yapamaz ve bir sistemde işlem başlatamaz. Fonksiyon çağırma bu sınırları aşar ve modeli sohbetten öteye, iş yapan bir bileşene dönüştürür. Haberlerdeki ajan ve araç kullanımı tartışmalarının teknik çekirdeği budur.",
  "example": "Kullanıcı 'Yarın İstanbul'da yağmur var mı?' diye sorduğunda model, hava durumu işlevini şehir ve gün değerleriyle çağırmayı ister; uygulama gelen veriyi modele iletir, model de yanıtı yazar.",
  "faq": [
   [
    "Model işlevi kendisi mi çalıştırır?",
    "Hayır. Model yalnızca hangi işlevin hangi parametrelerle çağrılacağını belirten bir istek üretir. İşlevi çalıştıran ve sonucu geri gönderen, modeli saran uygulamadır."
   ],
   [
    "Fonksiyon çağırma güvenli midir?",
    "Güvenlik, hangi işlevlere izin verildiğine bağlıdır. Silme ya da ödeme gibi etkisi büyük işlemler için insan onayı koymak ve modele yalnızca gereken yetkileri vermek yaygın bir önlemdir."
   ]
  ]
 },
 {
  "slug": "bilgisayar-kullanimi",
  "term": "Bilgisayar kullanımı (computer use)",
  "en": "computer use",
  "match": [
   "computer use",
   "bilgisayar kullanımı özell"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir yapay zeka modelinin ekranı görüp fare ve klavyeyi insan gibi kullanarak masaüstü programlarını ve web sayfalarını yönetebilmesi. Böylece model yalnızca metin üretmekle kalmaz, arayüzü olan her yazılımda iş yapabilir.",
  "how": "Model belirli aralıklarla ekranın görüntüsünü alır ve bu görüntüyü okuyarak hangi düğmenin, kutunun veya menünün nerede olduğunu anlar. Ardından fareyi şuraya götür, tıkla, şunu yaz gibi eylemler üretir; bu eylemleri bir yazılım katmanı gerçek bilgisayarda uygular. Yeni ekran görüntüsü modele geri döner ve döngü görev bitene kadar sürer. Süreç, bir kişinin ekrana bakıp adım adım ilerlemesine benzer. Güvenlik için işlem çoğu zaman izole bir sanal makinede çalıştırılır.",
  "why": "Her yazılımın bir programlama arayüzü (API) bulunmaz; eski kurumsal sistemler çoğu zaman yalnızca ekran üzerinden kullanılır. Bilgisayar kullanımı bu boşluğu kapatarak otomasyonun kapsamını genişletir. Öte yandan modelin yanlış yere tıklaması veya kötü niyetli bir sayfadan etkilenmesi gibi riskler nedeniyle yetki ve denetim konuları öne çıkar.",
  "example": "Bir model, API'si olmayan eski bir muhasebe programına girip faturaları tek tek forma işleyebilir; Anthropic'in Claude modelleri bu yeteneği sunan örneklerden biridir.",
  "faq": [
   [
    "Bilgisayar kullanımı ile API entegrasyonu arasındaki fark ne?",
    "API entegrasyonunda yazılımlar birbiriyle doğrudan, yapılandırılmış komutlarla konuşur ve bu hızlı ve güvenilirdir. Bilgisayar kullanımında model arayüzü bir insan gibi gözle okuyup tıklar; daha esnektir ama genellikle daha yavaştır ve hata payı daha yüksektir."
   ],
   [
    "Bilgisayar kullanımı yeteneği güvenli mi?",
    "Tamamen risksiz değil. Model yanlış düğmeye basabilir ya da ekrandaki zararlı bir talimata kanabilir. Bu yüzden izole ortamlar, sınırlı yetkiler ve kritik adımlarda insan onayı sık kullanılan önlemlerdir."
   ]
  ]
 },
 {
  "slug": "tarayici-ajani",
  "term": "Tarayıcı ajanı",
  "en": "browser agent",
  "match": [
   "tarayıcı ajan",
   "browser agent"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Web tarayıcısı içinde kullanıcı adına sayfaları gezen, arama yapan, form dolduran ve tıklayan yapay zeka ajanı. Yalnızca soruyu yanıtlamakla kalmaz, görevi baştan sona kendisi yürütmeye çalışır.",
  "how": "Ajan, sayfanın içeriğini ya metin yapısı (HTML) üzerinden ya da ekran görüntüsü olarak okur. Dil modeli, kullanıcının hedefine bakarak bir sonraki adımı seçer: bağlantıya tıklamak, arama kutusuna yazmak, formu doldurmak gibi. Eylem uygulandıktan sonra sayfanın yeni hali modele geri verilir ve döngü tekrarlanır. Ajan çoğu zaman kullanıcının oturum açtığı tarayıcıda çalıştığı için hesaplara erişebilir; bu yüzden ödeme gibi kritik adımlarda onay istemesi yaygın bir tasarım tercihidir.",
  "why": "Günlük işlerin büyük kısmı web üzerinde yürüdüğünden tarayıcı ajanları arama, karşılaştırma ve form doldurma gibi sıkıcı işleri devretme vaadi taşır. Aynı zamanda sayfalara gizlenmiş talimatlarla ajanı yönlendirmeye çalışan istem enjeksiyonu saldırılarına açıktır. Bu nedenle güvenlik, haberlerde sık geçen bir tartışma konusudur.",
  "example": "Kullanıcı üç farklı sitedeki otel fiyatlarını karşılaştırıp uygun odayı sepete eklemesini isteyebilir; ajan siteleri tek tek gezip sonucu özetler, ödemeyi ise onaya bırakır.",
  "faq": [
   [
    "Tarayıcı ajanı ile sohbet robotu arasındaki fark ne?",
    "Sohbet robotu çoğunlukla bilgi verir ve metin üretir. Tarayıcı ajanı ise sayfalarda gezinip tıklama, yazma ve form gönderme gibi eylemleri kendisi gerçekleştirir."
   ],
   [
    "Tarayıcı ajanlarına güvenmek riskli mi?",
    "Ajan, oturumunuz açık hesaplara erişebildiği için hata yaparsa ya da kötü niyetli bir sayfadan yönlendirilirse zarar verebilir. Önemli işlemlerde onay istenmesi ve erişimin sınırlandırılması bu riski azaltır."
   ]
  ]
 },
 {
  "slug": "kodlama-ajani",
  "term": "Kodlama ajanı",
  "en": "coding agent",
  "match": [
   "kodlama ajan",
   "kod ajan",
   "coding agent"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir yazılım görevini kendi başına planlayıp kod yazan, çalıştıran, test eden ve hatalarını düzelten yapay zeka ajanı. Tek tek kod satırı önermenin ötesinde, görevi baştan sona taşımayı dener.",
  "how": "Ajan önce proje dosyalarını okuyarak kod tabanını tanır, ardından görevi küçük adımlara böler. Dosyaları düzenler, terminalde komut çalıştırır, testleri başlatır ve çıkan hata mesajlarını okuyup kodu yeniden düzeltir. Bu döngü testler geçene ya da ajan takılıp kullanıcıya dönene kadar sürer. Sonuçta ortaya çoğunlukla bir geliştiricinin gözden geçireceği bir değişiklik paketi çıkar. Her adımda dil modeli, önceki çıktılara bakarak ne yapacağına karar verir.",
  "why": "Kodlama ajanları, yazılım geliştirmenin yapay zekadan en çok etkilenen alanlarından biri olduğunu gösteriyor. Rutin hata düzeltme, test yazma ve küçük özellik ekleme gibi işleri hızlandırabilirler. Yine de ürettikleri kodun doğruluğu ve güvenliği konusunda insan incelemesi gerekir; ajanlar da hata yapar.",
  "example": "Bir geliştirici depodaki bir hatayı tarif eder; Claude Code gibi bir araç ilgili dosyaları bulur, düzeltmeyi yazar, testleri çalıştırır ve sonucu inceleme için sunar.",
  "faq": [
   [
    "Kodlama ajanı ile kod tamamlama arasındaki fark ne?",
    "Kod tamamlama, yazarken bir sonraki satırı veya bloğu önerir ve kontrol sizdedir. Kodlama ajanı ise bir görevi alıp dosyaları düzenler, komut çalıştırır ve testleri kendisi yürütür."
   ],
   [
    "Kodlama ajanları yazılımcıların yerini alır mı?",
    "Bugünkü ajanlar rutin ve iyi tanımlanmış işlerde işe yarıyor, ancak gereksinimi doğru anlamak, tasarım kararları vermek ve sonucu denetlemek için hâlâ insana ihtiyaç duyuluyor. Etkinin boyutu konusunda görüşler farklı."
   ]
  ]
 },
 {
  "slug": "vibe-coding",
  "term": "Vibe coding",
  "en": "vibe coding",
  "match": [
   "vibe coding",
   "vibe kodlama"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Kodu satır satır yazmak yerine ne istendiğini doğal dille anlatıp yapay zekanın ürettiği kodu çoğu zaman ayrıntısına inmeden kabul ederek, sezgiyle ilerleyen yazılım geliştirme biçimi.",
  "how": "Kişi bir sohbet kutusuna ya da kodlama aracına, örneğin bir yapılacaklar listesi uygulaması istediğini yazar. Yapay zeka kodu üretir, kişi sonucu çalıştırıp bakar ve beğenmediği yeri yine sözle tarif eder. Bu tur defalarca tekrarlanır; kişi kodun içini okumaktan çok ekrandaki sonuca bakar. Terim, Andrej Karpathy'nin popülerleştirmesiyle yaygınlaştı. Burada ana fikir, kodlamanın ayrıntılarını modele bırakıp hissiyatla yön vermektir.",
  "why": "Vibe coding, yazılım bilmeyen kişilerin de basit uygulamalar ve prototipler üretebilmesini sağladığı için dikkat çekiyor. Öte yandan anlaşılmadan kabul edilen kod hata, güvenlik açığı ve bakım sorunları barındırabilir. Bu nedenle küçük denemelerde işe yarasa da kritik sistemlerde dikkatli olmak gerekir; konuyla ilgili görüşler bu yüzden ikiye ayrılıyor.",
  "example": "Bir girişimci, tasarımcı arkadaşı için sadece tarif ederek çalışan bir randevu sayfası prototipi çıkarabilir; kodun nasıl yazıldığına hiç bakmaz, yalnızca ekranda ne gördüğüne göre yeni istekler yazar.",
  "faq": [
   [
    "Vibe coding ile yapay zeka destekli kodlama aynı şey mi?",
    "Tam olarak değil. Yapay zeka destekli kodlamada geliştirici çoğunlukla üretilen kodu okur ve sorumluluk alır. Vibe codingde ise kod büyük ölçüde okunmadan, sonucun işe yarayıp yaramadığına bakılarak kabul edilir."
   ],
   [
    "Vibe coding ciddi projelerde kullanılabilir mi?",
    "Prototip ve kişisel araçlar için uygun olabilir. Güvenlik, veri gizliliği ve uzun vadeli bakım gereken ürünlerde ise kodun anlaşılması ve test edilmesi gerekir."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-asistani",
  "term": "Yapay zeka asistanı",
  "en": "AI assistant",
  "match": [
   "yapay zeka asistanı",
   "aı assistant"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Kullanıcının doğal dilde verdiği isteklere yanıt veren, soru cevaplayan, metin yazan ve çeşitli işlerde yardım eden yapay zeka tabanlı yazılım. Genellikle sohbet arayüzüyle kullanılır.",
  "how": "Asistanın arkasında bir büyük dil modeli bulunur. Kullanıcı bir istek yazar ya da söyler; model bu isteği ve önceki konuşmayı değerlendirip yanıt üretir. Bazı asistanlar arama yapma, dosya okuma, takvime erişme gibi araçlara bağlanarak yalnızca konuşmanın ötesine geçebilir. Şirketler asistana kendi talimatlarını ve bilgilerini ekleyerek onu belirli bir iş için özelleştirebilir. Yanıtların kalitesi modele, verilen bilgiye ve isteğin netliğine bağlıdır.",
  "why": "Yapay zeka asistanları, genel kullanıcıların yapay zekayla en sık karşılaştığı biçimdir. Yazı yazma, özetleme, çeviri ve araştırma gibi işleri hızlandırarak hem bireylerin hem şirketlerin çalışma alışkanlıklarını değiştiriyor. Yine de yanlış bilgi üretebildikleri için önemli konularda yanıtların kontrol edilmesi gerekir.",
  "example": "ChatGPT, Gemini ve Claude gibi uygulamalar birer yapay zeka asistanıdır; kullanıcı bir e-postanın taslağını ya da uzun bir raporun özetini bunlardan isteyebilir.",
  "faq": [
   [
    "Yapay zeka asistanı ile sesli asistan aynı şey mi?",
    "Benzer ama aynı değil. Sesli asistanlar daha çok önceden tanımlı komutlara yanıt verirdi; bugünkü yapay zeka asistanları büyük dil modelleri sayesinde serbest konuşmayı anlayıp daha geniş işlerde yardımcı olabiliyor. Birçok sesli asistan da bu modellerle yenileniyor."
   ],
   [
    "Yapay zeka asistanının verdiği bilgilere güvenebilir miyim?",
    "Çoğu zaman faydalıdır ama yanlış ya da uydurma bilgi verebilir. Sağlık, hukuk, finans gibi konularda yanıtı güvenilir kaynaklarla doğrulamak gerekir."
   ]
  ]
 },
 {
  "slug": "yardimci-pilot",
  "term": "Yardımcı pilot (copilot)",
  "en": "copilot",
  "match": [
   "yardımcı pilot"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Kullanıcının yaptığı işe eşlik edip öneri sunan, ancak son kararı ve kontrolü insanda bırakan yapay zeka aracı. Adını, pilota yardım eden ikinci pilottan alır.",
  "how": "Yardımcı pilot, kullanıcının çalıştığı uygulamanın içine yerleşir ve o anki bağlamı görür: yazılan kod, açık belge ya da e-posta gibi. Bu bağlama göre taslak, düzeltme veya sonraki adım önerisi üretir. Kullanıcı öneriyi kabul edebilir, değiştirebilir ya da reddedebilir. Böylece iş akışı kullanıcının elinde kalır, yapay zeka ise hız ve fikir katar. Otonom ajanlardan farkı, adımları kendi başına zincirleyip bitirmek yerine sürekli insanla birlikte çalışmasıdır.",
  "why": "Yardımcı pilot yaklaşımı, yapay zekanın hatalarına karşı insan denetimini korurken verimlilik kazandırdığı için iş dünyasında yaygın bir model. Şirketler ürünlerine bu tür özellikler ekleyerek kullanıcıyı çalıştığı ortamdan ayırmadan yapay zeka sunuyor. Ancak Copilot adı bazı şirketlerin ürün markası olarak da kullanılıyor; bu yüzden terimin genel anlamı ile marka karıştırılabiliyor.",
  "example": "GitHub Copilot, geliştirici kod yazarken önerilerde bulunur; geliştirici önerileri kabul edip etmeyeceğine kendisi karar verir.",
  "faq": [
   [
    "Yardımcı pilot ile yapay zeka ajanı arasındaki fark ne?",
    "Yardımcı pilot kullanıcıyla birlikte, adım adım çalışır ve kontrol insandadır. Ajan ise bir hedef verildiğinde çok adımlı işi daha bağımsız yürütür; araçları kullanır ve ara kararları kendisi alır."
   ],
   [
    "Copilot bir marka adı mı yoksa genel bir terim mi?",
    "İkisi de. Microsoft ve GitHub gibi şirketler ürünlerine Copilot adını verdi, ama küçük harfle copilot, insana eşlik eden her yapay zeka aracını anlatan genel bir terim olarak da kullanılıyor."
   ]
  ]
 },
 {
  "slug": "kod-tamamlama",
  "term": "Kod tamamlama",
  "en": "code completion",
  "match": [
   "kod tamamlama",
   "code completion"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Geliştirici kod yazarken bir sonraki kelimeyi, satırı veya kod bloğunu tahmin edip öneren araç. Öneri kabul edilirse yazılacak kod otomatik olarak eklenir.",
  "how": "Araç, imlecin bulunduğu yere kadar olan kodu ve çoğu zaman açık dosyalardaki bağlamı okur. Kod üzerinde eğitilmiş bir dil modeli, bu bağlama bakarak en olası devamı tahmin eder. Öneri genellikle silik bir metin olarak görünür; geliştirici tek bir tuşla kabul eder ya da yazmaya devam ederek yok sayar. Eski nesil otomatik tamamlama yalnızca tanımlı değişken ve fonksiyon adlarını listelerdi. Modele dayalı araçlar ise tüm bir fonksiyonu önerebilir.",
  "why": "Kod tamamlama, yapay zekanın yazılımcıların günlük işine girdiği en yaygın ve en eski yollardan biridir. Tekrarlayan kodu yazma süresini kısaltır ve geliştiriciyi akışından koparmaz. Önerilen kod hatalı ya da güvensiz olabileceğinden, geliştiricinin her öneriyi okuması gerekir.",
  "example": "Bir geliştirici bir fonksiyonun adını yazıp parantezi açtığında, GitHub Copilot gibi bir araç fonksiyonun gövdesinin tamamını silik metinle önerebilir; tek tuşla kabul edilir.",
  "faq": [
   [
    "Kod tamamlama ile kodlama ajanı arasındaki fark ne?",
    "Kod tamamlama, siz yazarken küçük parçalar önerir ve her adımda kontrol sizdedir. Kodlama ajanı ise bir görevi alıp birden çok dosyayı düzenleyebilir, komut ve test çalıştırabilir."
   ],
   [
    "Kod tamamlama önerileri güvenilir mi?",
    "Çoğu zaman işe yarar ama her zaman doğru değildir. Öneri hatalı, eski ya da güvenlik açığı içeren kod barındırabilir; bu yüzden kabul etmeden önce okumak ve test etmek gerekir."
   ]
  ]
 },
 {
  "slug": "ajan-orkestrasyonu",
  "term": "Ajan orkestrasyonu",
  "en": "agent orchestration",
  "match": [
   "ajan orkestrasyonu",
   "agent orchestration"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Birden fazla yapay zeka ajanının ve araçların bir görevde birlikte çalışacak şekilde yönetilmesi: işin kime verileceği, sonuçların nasıl aktarılacağı ve hataların nasıl ele alınacağı gibi koordinasyon işlerinin tamamı.",
  "how": "Bir orkestratör, ana görevi alt görevlere böler ve bunları ayrı ajanlara dağıtır; bu orkestratör bir yazılım katmanı olabileceği gibi başka bir yapay zeka modeli de olabilir. Her ajan kendi uzmanlık alanında, örneğin araştırma, kod yazma veya doğrulama konusunda çalışır. Orkestratör ajanların çıktısını toplar, sıralamayı belirler, takılan adımı yeniden dener ve gerekirse insana sorar. Ajanlar arasındaki ortak bilgi ve görev durumu da bu katmanda tutulur. Tıpkı bir orkestra şefinin çalgıcıları uyumlu çalıştırması gibi, amaç parçaları tek bir sonuçta birleştirmektir.",
  "why": "Karmaşık işler tek bir ajanın bağlamına ya da yeteneğine sığmayabilir; işi paylaştırmak bu sınırı aşmaya yardım eder. Ancak ajan sayısı arttıkça maliyet, hata yayılması ve denetim zorlaşır. Bu yüzden kurumsal yapay zeka projelerinde orkestrasyon, ajanları güvenilir şekilde işletmenin merkezi sorunlarından biridir.",
  "example": "Bir şirket müşteri şikayetlerini işlemek için bir ajanla e-postayı sınıflandırır, ikinci ajanla sipariş kaydını sorgular, üçüncüsüyle yanıt taslağı yazar; orkestratör bu adımları sırayla yürütüp son taslağı bir çalışana onaya sunar.",
  "faq": [
   [
    "Ajan orkestrasyonu neden tek bir güçlü ajan yerine kullanılıyor?",
    "Alt görevleri uzmanlaşmış ajanlara bölmek, her birinin bağlamını kısa ve odaklı tutar ve işin bazı kısımlarını paralel yürütmeye imkan verir. Buna karşılık sistem karmaşıklaşır, bu yüzden her iş için gerekli olmaz."
   ],
   [
    "Orkestratör kim ya da ne olur?",
    "Kod olarak yazılmış sabit bir iş akışı olabilir ya da görevleri dinamik olarak dağıtan başka bir yapay zeka modeli. İkisini karıştıran yapılar da yaygındır."
   ]
  ]
 },
 {
  "slug": "ajan-is-akisi",
  "term": "Ajan iş akışı",
  "en": "agentic workflow",
  "match": [
   "ajan iş akışı",
   "agentic workflow"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir yapay zeka sisteminin tek bir yanıt üretmek yerine hedefe doğru planlama, araç kullanma, sonuçları kontrol etme ve gerekirse yeniden deneme gibi adımları döngü hâlinde yürüttüğü çalışma biçimi.",
  "how": "Akışın başında model, kullanıcının hedefini alır ve bunu küçük adımlara böler. Her adımda bir araç çağırabilir; örneğin web'de arama yapar, bir dosyayı okur ya da kod çalıştırır. Dönen sonuca bakarak bir sonraki hamleyi seçer, hata görürse yöntemini değiştirir. Bu döngü hedef tamamlanana ya da bir durma koşuluna ulaşılana kadar sürer. Akış bazen sabit bir şemaya bağlıdır, bazen de modelin kendi kararıyla ilerler. Kritik noktalarda insan onayı istenmesi de yaygındır.",
  "why": "Tek seferlik soru-cevap yerine çok adımlı işleri üstlenebilmek, yapay zekayı sohbet kutusundan iş süreçlerine taşıyor. Yazılım geliştirme, araştırma ve müşteri hizmetleri gibi alanlarda şirketlerin sıkça denediği yaklaşımlardan biri bu. Öte yandan her adımda hata birikebildiği için denetim ve güvenlik önlemleri de önem kazanıyor.",
  "example": "Bir kod asistanı, hatalı bir testi düzeltmek için önce ilgili dosyaları okur, değişiklik yapar, testi yeniden çalıştırır ve sonuç başarısızsa farklı bir çözüm dener.",
  "faq": [
   [
    "Ajan iş akışı ile sıradan bir sohbet botu arasındaki fark ne?",
    "Sohbet botu genellikle sorulan soruya tek yanıt verir. Ajan iş akışında ise sistem hedefe ulaşmak için birden fazla adım atar, araçları kullanır ve ara sonuçlara göre yön değiştirir."
   ],
   [
    "Ajan iş akışları tamamen otonom mudur?",
    "Her zaman değil. Birçok uygulamada adımlar önceden tanımlanır ve önemli kararlar için insan onayı aranır. Otonomi düzeyi, işin riskine göre ayarlanır."
   ]
  ]
 },
 {
  "slug": "alt-ajan",
  "term": "Alt ajan",
  "en": "subagent",
  "match": [
   "alt ajan",
   "subagent"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Daha büyük bir görevin belirli bir parçasını üstlenmek üzere ana ajan tarafından çağrılan, kendi talimatı ve araçlarıyla çalışan yardımcı yapay zeka ajanı.",
  "how": "Ana ajan görevi parçalara ayırır ve her parçayı ayrı bir alt ajana devreder. Alt ajan genellikle temiz bir bağlamla başlar; yalnızca kendisine verilen talimatı ve gerekli araçları görür. İşini bitirince ana ajana kısa bir sonuç ya da özet döner. Böylece ana ajanın bağlam penceresi ayrıntılarla dolmaz. Bağımsız işler birbirine bakmadan aynı anda yürütülebilir; örneğin biri kodu tararken öteki belgeleri okuyabilir.",
  "why": "İş bölümü, uzun ve karmaşık görevlerde hızı ve kaliteyi artırabiliyor; çünkü her alt ajan dar bir konuya odaklanıyor. Ana ajanın bağlamı da temiz kalıyor. Bedeli ise daha fazla model çağrısı, yani daha yüksek maliyet ve koordinasyon zorluğu.",
  "example": "Bir araştırma asistanı rapor hazırlarken üç ayrı konuyu üç alt ajana dağıtır; her biri kendi kaynaklarını tarayıp ana ajana kısa bir özet gönderir.",
  "faq": [
   [
    "Alt ajan ile çoklu ajan sistemi aynı şey mi?",
    "Birbirine yakın ama aynı değil. Alt ajanda bir hiyerarşi vardır: ana ajan işi dağıtır ve sonuçları toplar. Çoklu ajan sistemi ise eşit düzeydeki ajanların birlikte çalıştığı yapıları da kapsayan daha geniş bir kavramdır."
   ],
   [
    "Alt ajanlar neden temiz bir bağlamla başlar?",
    "Yalnızca işiyle ilgili bilgiyi gördüğünde daha odaklı çalışır ve ana ajanın uzun konuşma geçmişi yüzünden dağılmaz. Bu, hem doğruluğu hem de bağlam penceresinin verimli kullanımını destekler."
   ]
  ]
 },
 {
  "slug": "ajan-bellegi",
  "term": "Ajan belleği",
  "en": "agent memory",
  "match": [
   "ajan belleği",
   "agent memory"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir yapay zeka ajanının önceki adımları, kullanıcı tercihlerini ve öğrendiği bilgileri tek bir konuşmanın ötesinde saklayıp sonradan kullanabilmesini sağlayan mekanizma.",
  "how": "Ajanların belleği iki katmanda düşünülebilir. Kısa vadeli bellek, modelin o anki bağlam penceresindeki konuşma ve ara sonuçlardır; oturum bitince kaybolur. Uzun vadeli bellek ise modelin dışında, bir veritabanında, dosyada ya da vektör deposunda tutulur. Ajan önemli bir bilgiyi, örneğin kullanıcının tercihini, özetleyip oraya yazar; sonraki bir görevde ilgili kaydı arayıp bağlama geri ekler. Modelin kendi ağırlıkları bu süreçte değişmez, yalnızca ona verilen bilgi değişir.",
  "why": "Belleği olmayan bir ajan her seferinde sıfırdan başlar ve aynı şeyleri tekrar sorar. Bellek, kişiselleştirmeyi ve uzun soluklu işlerde süreklilik sağlamayı mümkün kılıyor. Ancak hangi bilginin saklandığı, ne kadar süre tutulduğu ve kullanıcının buna nasıl müdahale edebildiği gizlilik açısından önemli bir konu.",
  "example": "Bir kişisel asistan, toplantıları sabah saatlerine koymayı tercih ettiğinizi bir kez öğrendikten sonra sonraki takvim önerilerinde bunu dikkate alır.",
  "faq": [
   [
    "Ajan belleği ile bağlam penceresi aynı şey mi?",
    "Hayır. Bağlam penceresi modelin o an görebildiği sınırlı metindir ve oturumla birlikte sona erer. Ajan belleği ise bu pencerenin dışında saklanan, gerektiğinde pencereye geri getirilen kalıcı kayıtlardır."
   ],
   [
    "Ajan belleği gizlilik riski taşır mı?",
    "Taşıyabilir; çünkü kişisel bilgiler kalıcı olarak saklanabilir. Bu yüzden iyi tasarlanmış sistemlerde neyin hatırlandığı görülebilir ve kullanıcı kayıtları silebilir ya da belleği kapatabilir."
   ]
  ]
 },
 {
  "slug": "ajanlar-arasi-protokol",
  "term": "Ajanlar arası protokol (A2A)",
  "en": "agent-to-agent protocol",
  "match": [
   "agent2agent",
   "agent-to-agent",
   "=a2a"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Farklı geliştiriciler ya da şirketler tarafından yapılmış yapay zeka ajanlarının birbirini tanımasını, görev paylaşmasını ve ortak bir biçimde mesajlaşmasını sağlayan açık iletişim standardı.",
  "how": "Her ajan, neler yapabildiğini anlatan standart bir tanım yayımlar. Başka bir ajan bu tanıma bakarak uygun ortağı seçer ve ona bir görev gönderir. Görevin durumu, ara mesajlar ve sonuçlar ortak bir mesaj biçimiyle iletilir; böylece ajanın hangi şirketin hangi modeliyle ya da çatısıyla yazıldığı fark etmez. Uzun süren görevlerde ilerleme bilgisi de aynı kanaldan akar. Ajanlar birbirinin iç işleyişini görmek zorunda kalmaz, yalnızca dışa açılan arayüzle konuşur.",
  "why": "Şirketler farklı alanlarda farklı ajanlar kullanmaya başladıkça bunların birbiriyle konuşabilmesi gerekiyor. Ortak bir standart, her ikili bağlantı için özel entegrasyon yazma yükünü azaltıyor ve tek bir satıcıya bağımlılığı sınırlıyor. Standardın ne kadar benimseneceği ise henüz belirsiz.",
  "example": "Bir seyahat planlama ajanı, başka bir şirketin geliştirdiği otel rezervasyon ajanına oda talebi gönderir ve onaydan gelen yanıtı kullanıcıya iletir.",
  "faq": [
   [
    "A2A ile MCP arasındaki fark ne?",
    "MCP, bir modeli ya da ajanı araçlara ve veri kaynaklarına bağlamaya odaklanır. A2A ise ajanların birbiriyle konuşmasını hedefler. İkisi birbirinin alternatifi değil, tamamlayıcısı olarak anlatılır."
   ],
   [
    "A2A'yı kim ortaya attı?",
    "Protokol Google tarafından önerildi ve açık bir standart olarak sunuldu. Ayrıntılı yönetişim ve sürüm bilgisi zamanla değişebildiği için projenin resmi belgelerine bakmak gerekir."
   ]
  ]
 },
 {
  "slug": "semantik-arama",
  "term": "Semantik arama",
  "en": "semantic search",
  "match": [
   "semantik arama",
   "semantic search"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Sorgudaki kelimelerin birebir geçmesine bakmak yerine, sorgunun anlamına yakın içerikleri bulan arama yöntemi.",
  "how": "Metinler, anlamlarını sayılarla temsil eden vektörlere, yani gömülülere (embedding) dönüştürülür. Anlamca birbirine yakın metinlerin vektörleri de birbirine yakın düşer. Kullanıcı bir sorgu yazdığında sorgu da aynı yöntemle vektöre çevrilir ve veritabanındaki en yakın vektörler bulunur. Bu iş için genellikle vektör veritabanları kullanılır. Sonuçlar, benzerlik düzeyine göre sıralanır. Pratikte çoğu sistem, tam eşleşme gereken durumlar için anahtar kelime aramasıyla birleştirilir.",
  "why": "Kullanıcılar aradıklarını her zaman belgedeki kelimelerle ifade etmez. Semantik arama eş anlamlıları ve farklı ifadeleri yakalayabildiği için kurumsal arama, öneri sistemleri ve özellikle geri getirmeyle artırılmış üretim (RAG) uygulamalarında temel bir yapı taşı. Model kullanıma sunulan bilgiyi bu aramayla buluyor.",
  "example": "Bir destek sitesinde araba lastiğim patladı diye arayan kullanıcı, belgede patlak kelimesi hiç geçmese bile lastik değişimi kılavuzuna ulaşabilir.",
  "faq": [
   [
    "Semantik arama ile anahtar kelime araması arasındaki fark ne?",
    "Anahtar kelime araması, sorgudaki sözcüklerin belgede geçip geçmediğine bakar. Semantik arama ise anlam benzerliğine bakar; bu yüzden farklı sözcüklerle yazılmış ama aynı konuyu anlatan içerikleri de bulabilir."
   ],
   [
    "Semantik arama her zaman daha mı iyi?",
    "Hayır. Ürün kodu, kişi adı ya da tam bir ifade aranırken anahtar kelime araması çoğu zaman daha güvenilirdir. Bu yüzden iki yöntemi birleştiren hibrit aramalar yaygındır."
   ]
  ]
 },
 {
  "slug": "parcalama",
  "term": "Parçalama (chunking)",
  "en": "chunking",
  "match": [
   "chunking",
   "metin parçalama"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Uzun belgelerin, aranabilir ve modele verilebilir olması için daha küçük, anlamlı metin parçalarına bölünmesi işlemi.",
  "how": "Bir belge önce belirli bir kurala göre bölünür. Kural sabit uzunluk olabilir; paragraf, başlık ya da bölüm sınırlarını izleyen daha akıllı yöntemler de vardır. Çoğu zaman parçalar birbirinin bir kısmını tekrar edecek biçimde örtüştürülür, böylece cümleler ortadan kesilmez ve bağlam korunur. Her parça ayrı ayrı gömülüye çevrilip bir veritabanında saklanır. Soru geldiğinde yalnızca en ilgili parçalar bulunur ve modele verilir.",
  "why": "Parça boyutu, geri getirmeyle artırılmış üretim (RAG) sistemlerinin kalitesini doğrudan etkiliyor. Parçalar çok büyükse konu bulanıklaşır ve modelin bağlamı gereksiz yere dolar; çok küçükse tek başına anlamsız kalır. Bu yüzden parçalama, görünmeyen ama sonucu belirleyen mühendislik ayarlarından biri.",
  "example": "Yüzlerce sayfalık bir ürün kılavuzu, başlıklara göre bölünür ve her bölüm ayrı kaydedilir; kullanıcı pil değişimini sorunca yalnızca ilgili bölüm modele gönderilir.",
  "faq": [
   [
    "İdeal parça boyutu nedir?",
    "Herkes için geçerli tek bir değer yok. Belge türüne, sorulacak soruların yapısına ve kullanılan modele bağlı olarak değişir. Genellikle farklı boyutlar denenip sonuçlar karşılaştırılarak karar verilir."
   ],
   [
    "Parçalar neden birbiriyle örtüşür?",
    "Bir bilgi iki parçanın sınırında kalırsa ikisinde de eksik görünebilir. Küçük bir örtüşme, cümlelerin ve fikirlerin bölünmesini azaltır ve aramada kaçırılma ihtimalini düşürür."
   ]
  ]
 },
 {
  "slug": "bilgi-grafigi",
  "term": "Bilgi grafiği",
  "en": "knowledge graph",
  "match": [
   "bilgi grafı",
   "bilgi grafiği",
   "knowledge graph"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Kişi, şirket, yer ve kavram gibi varlıkları düğüm, aralarındaki ilişkileri bağlantı olarak tutan yapılandırılmış bilgi ağı.",
  "how": "Bilgi çoğunlukla üçlüler hâlinde kaydedilir: özne, ilişki ve nesne. Örneğin Ankara, başkenti olmak ilişkisiyle Türkiye'ye bağlanır. Bu üçlüler bir araya geldiğinde varlıkların oluşturduğu bir ağ ortaya çıkar. Grafik elle hazırlanabilir ya da metinlerden otomatik olarak çıkarılabilir; bugün bunun için dil modelleri de kullanılıyor. Sonrasında özel sorgu dilleriyle ağda gezinilir, örneğin bir kişinin çalıştığı şirketlerin ortakları sorulabilir.",
  "why": "Bilgi grafikleri, arama motorlarında bilgi kutularının, öneri sistemlerinin ve kurumsal veri entegrasyonunun arkasında yıllardır kullanılıyor. Yapay zeka tarafında ise dil modellerine güvenilir ve izlenebilir bağlam sağlayarak uydurma yanıt riskini azaltmaya yardımcı olabiliyor. Doğru kurulması ve güncel tutulması ise ciddi emek istiyor.",
  "example": "Bir film platformunda filmler, yönetmenler ve oyuncular birbirine bağlıdır; bu sayede aynı yönetmenle çalışmış oyuncuların filmleri kolayca listelenebilir.",
  "faq": [
   [
    "Bilgi grafiği ile ilişkisel veritabanı arasındaki fark ne?",
    "İlişkisel veritabanı veriyi tablolarda satır ve sütun olarak tutar. Bilgi grafiği ise varlıklar arasındaki ilişkiyi önceliklendirir; çok sayıda bağlantıdan geçen soruları anlatmak ve sorgulamak daha doğaldır."
   ],
   [
    "Bilgi grafiğini kim kurar?",
    "Uzmanlar elle kurabilir, mevcut veritabanlarından dönüştürülebilir ya da metinlerden otomatik çıkarılabilir. Pratikte çoğu zaman bu yöntemler birlikte kullanılır ve sonuçlar insan denetiminden geçer."
   ]
  ]
 },
 {
  "slug": "graphrag",
  "term": "GraphRAG",
  "en": "GraphRAG",
  "match": [
   "graphrag"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Geri getirmeyle artırılmış üretim yönteminin, belgelerden çıkarılan bir bilgi grafiğinden de yararlanan türü; modele ilgili metinlerle birlikte varlıklar arasındaki ilişkileri de sunar.",
  "how": "Önce belgelerden varlıklar ve aralarındaki ilişkiler çıkarılır; bu iş çoğunlukla bir dil modeliyle yapılır ve sonuçla bir grafik kurulur. Bazı uygulamalarda birbirine sıkı bağlı düğümler topluluklara ayrılır ve her topluluğun özeti hazırlanır. Soru geldiğinde ilgili düğümler ve komşuları ile gerekirse topluluk özetleri bulunur. Bunlar, ilgili metin parçalarıyla birlikte modele bağlam olarak verilir. Terim, Microsoft Research'ün yayımladığı çalışmayla yaygınlaştı; ayrıntıları uygulamadan uygulamaya değişir.",
  "why": "Klasik RAG, birkaç ilgili parçayı bulmakta iyidir ama birçok belgeye dağılmış ilişkileri bir araya getirmekte zorlanabilir. GraphRAG bu tür çok adımlı ve veri kümesi geneline dair sorularda daha iyi sonuç vermeyi hedefliyor. Karşılığında grafiği kurmak ve güncel tutmak maliyetli ve karmaşık olabiliyor.",
  "example": "Bir şirketin yüzlerce sözleşmesi içinde hangi tedarikçilerin ortak iştirakler üzerinden birbiriyle bağlantılı olduğu sorulduğunda, sistem ilişki ağında gezinerek yanıt oluşturabilir.",
  "faq": [
   [
    "GraphRAG ile klasik RAG arasındaki fark ne?",
    "Klasik RAG genellikle soruya benzeyen metin parçalarını bulup modele verir. GraphRAG ise buna ek olarak varlıklar arasındaki ilişkileri içeren bir grafiği kullanır; bu da bağlantılı bilgi gerektiren soruları yanıtlamaya yardım eder."
   ],
   [
    "Her proje için GraphRAG gerekir mi?",
    "Hayır. Sorular tek bir belgedeki bilgiyle yanıtlanabiliyorsa klasik RAG çoğu zaman yeterli ve çok daha ucuzdur. GraphRAG, ilişkilerin ve genel tablonun önemli olduğu durumlarda anlam kazanır."
   ]
  ]
 },
 {
  "slug": "ajansal-rag",
  "term": "Ajansal RAG",
  "en": "agentic RAG",
  "match": [
   "ajansal rag",
   "agentic rag"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir dil modelinin, yanıt vermeden önce hangi kaynağa bakacağına, ne arayacağına ve bulduğu bilginin yeterli olup olmadığına kendisinin karar verdiği geri getirme destekli üretim (RAG) yaklaşımı. Sabit tek aramalık düzenin yerine adım adım ilerleyen bir süreç koyar.",
  "how": "Klasik RAG'de soru gelir, sistem bir kez arama yapar, bulunan parçalar modele verilir ve yanıt üretilir. Ajansal yaklaşımda model bir ajan gibi çalışır: soruyu alt sorulara böler, uygun aracı seçer (belge deposu, veritabanı, web araması), sonuçlara bakar ve yetersiz bulursa sorguyu yeniden yazıp tekrar arar. Yeterli kanıt topladığına karar verdiğinde yanıtı yazar. Bu döngü, bir araştırmacının kaynak tarayıp not alması ve eksik gördüğü yere geri dönmesine benzer.",
  "why": "Gerçek hayattaki sorular çoğu zaman tek aramayla yanıtlanamaz; birden fazla belgeyi karşılaştırmak ya da farklı sistemlerden veri toplamak gerekir. Ajansal RAG bu tür karmaşık soruları daha güvenilir yanıtlamayı hedefler. Karşılığında daha fazla model çağrısı, daha uzun bekleme süresi ve daha yüksek maliyet getirir; ajanın yanlış karar verme riski de vardır.",
  "example": "Bir şirketin iç asistanına 'Geçen yılki iki tedarikçi sözleşmesinin cezai şart maddelerini karşılaştır' denir; asistan önce iki sözleşmeyi ayrı ayrı bulur, ilgili maddeleri çıkarır, eksik kalan yeri yeniden arar ve sonunda karşılaştırmayı yazar.",
  "faq": [
   [
    "Ajansal RAG ile klasik RAG arasındaki fark ne?",
    "Klasik RAG'de arama genellikle tek seferliktir ve akış sabittir. Ajansal RAG'de model arama sayısına, kullanacağı araca ve ne zaman duracağına kendisi karar verir."
   ],
   [
    "Ajansal RAG her zaman daha iyi sonuç verir mi?",
    "Hayır. Basit ve tek belgeyle yanıtlanabilen sorularda klasik RAG daha hızlı ve ucuzdur. Ajansal yaklaşım, çok adımlı ve dağınık kaynaklı sorularda anlamlı olur."
   ]
  ]
 },
 {
  "slug": "temellendirme",
  "term": "Temellendirme (grounding)",
  "en": "grounding",
  "match": [
   "grounding",
   "temellendirme"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir yapay zeka modelinin yanıtlarını güvenilir kaynaklara, belgelere veya verilere dayandırma işlemi. Amaç, modelin kendi belleğinden uydurma bilgi üretmesi yerine doğrulanabilir bilgiye yaslanmasını sağlamaktır.",
  "how": "Model yanıt üretirken ilgili metinler, veritabanı kayıtları veya arama sonuçları isteme eklenir ve modelden bu materyale dayanarak yazması istenir. Çoğu sistemde yanıtla birlikte kaynak bağlantısı ya da alıntı gösterilir; böylece okur bilgiyi kontrol edebilir. En yaygın yol arama destekli üretimdir (RAG), ayrıca modele yalnızca verilen belgeden yanıtlamasını söyleyen talimatlar da kullanılır. Bu, açık kitap sınavına benzer: cevap, masadaki kitapta yazan bilgiye dayanmalıdır.",
  "why": "Dil modelleri akıcı ama yanlış bilgiyi de rahatça üretebilir; buna halüsinasyon denir. Temellendirme bu riski azaltır, ancak sıfırlamaz, çünkü model kaynağı yanlış yorumlayabilir. Sağlık, hukuk ve finans gibi alanlarda kaynak gösterebilmek, bir aracın kullanılabilirliğini belirleyen etkenlerden biridir.",
  "example": "Bir bankanın müşteri asistanı faiz sorusuna, bankanın güncel ürün belgesinden aldığı bölüme dayanarak yanıt verir ve ilgili belgeyi gösterir; belgede bilgi yoksa bilmediğini söyler.",
  "faq": [
   [
    "Temellendirme ile RAG aynı şey mi?",
    "Değil. Temellendirme hedeftir: yanıtı kaynağa bağlamak. RAG ise bu hedefe ulaşmak için kullanılan yöntemlerden biridir."
   ],
   [
    "Temellendirme halüsinasyonu tamamen önler mi?",
    "Hayır. Yanlış bilgi üretme olasılığını düşürür; ama model kaynağı yanlış anlayabilir, eksik aktarabilir ya da kaynağın kendisi hatalı olabilir."
   ]
  ]
 },
 {
  "slug": "derin-arastirma",
  "term": "Derin araştırma",
  "en": "deep research",
  "match": [
   "derin araştırma",
   "deep research"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yapay zeka sisteminin tek bir soruyu yanıtlamak için dakikalarca çalışıp onlarca kaynağı tarayarak ve okuyarak kaynak gösterilen, uzun bir rapor hazırlaması. Birçok sohbet asistanında bu adla ya da benzer adlarla sunulur.",
  "how": "Kullanıcı konuyu verir; sistem önce bir araştırma planı çıkarır, sonra web'de arama yapar, sayfaları okur ve bulduklarına göre yeni aramalar ekler. Bu süreç birkaç dakika sürebilir. Sonunda toplanan bilgiler birleştirilir ve kaynak bağlantılı bir rapor yazılır. Arkada genellikle uzun düşünebilen bir model ile arama ve tarayıcı araçlarını bir döngü içinde kullanan ajan yapısı bulunur.",
  "why": "Pazar araştırması, rakip analizi ya da literatür taraması gibi saatler süren ilk keşif işlerini belirgin biçimde kısaltabilir. Öte yandan rapor eski bilgi, hatalı kaynak ya da yanlış yorum içerebilir. Önemli kararlarda kaynakların elle kontrol edilmesi gerekir; hız kazancı doğrulama ihtiyacını ortadan kaldırmaz.",
  "example": "Bir girişimci, belirli bir ülkedeki elektrikli scooter pazarını sorar; sistem birkaç dakika sonra düzenlemeleri, başlıca oyuncuları ve kaynak listesini içeren bir özet sunar.",
  "faq": [
   [
    "Derin araştırma normal sohbet aramasından nasıl ayrılır?",
    "Normal aramada model birkaç sayfaya bakıp kısa yanıt verir. Derin araştırmada sistem plan yapar, çok sayıda kaynağı okur, gerekirse yeniden arar ve uzun bir rapor üretir."
   ],
   [
    "Derin araştırma raporlarına güvenilir mi?",
    "Başlangıç noktası olarak yararlıdır, ama tek başına yeterli değildir. Kaynakların gerçekten söylenen şeyi söyleyip söylemediği ve güncel olup olmadığı kontrol edilmelidir."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-arama-motoru",
  "term": "Yapay zeka arama motoru",
  "en": "AI search engine",
  "match": [
   "yapay zeka arama motoru",
   "aı search engine"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bağlantı listesi vermek yerine web'den veya başka kaynaklardan bulduğu bilgileri bir dil modeliyle özetleyip kaynak göstererek doğrudan yanıt sunan arama hizmeti.",
  "how": "Kullanıcı soruyu yazar; sistem sorguyu anlar, gerekirse yeniden formüle eder ve bir arama dizininden ilgili sayfaları getirir. Getirilen metin parçaları dil modeline verilir; model bunları birleştirip kısa bir yanıt yazar ve çoğunlukla kaynakları numaralı alıntılarla gösterir. Kullanıcı takip soruları sorarak konuşmayı sürdürebilir. Temelinde arama destekli üretim (RAG) mantığı yatar.",
  "why": "İnsanların bilgiye ulaşma biçimi değişiyor: sayfaları tek tek gezmek yerine hazır yanıtı okumak mümkün hale geliyor. Bu, kullanıcıya kolaylık sağlarken yayıncıların ziyaretçi sayısını ve reklam gelirini etkileyebiliyor. Hatalı özet riski ve telif tartışmaları da bu alandaki haberlerde sık geçen başlıklardır.",
  "example": "Kullanıcı 'Dizüstü bilgisayarın pil ömrünü uzatmak için ne yapılır?' diye sorar; hizmet birkaç siteden derlediği önerileri, kaynak bağlantılarıyla birlikte kısa bir liste olarak gösterir.",
  "faq": [
   [
    "Yapay zeka arama motoru geleneksel arama motorundan nasıl ayrılır?",
    "Geleneksel arama motoru sayfa bağlantılarını sıralar, bilgiyi bulmak kullanıcıya kalır. Yapay zeka arama motoru ise sayfaları okuyup özetleyerek doğrudan yanıt üretir."
   ],
   [
    "Yapay zeka arama motorunun yanıtları her zaman doğru mu?",
    "Hayır. Model kaynağı yanlış özetleyebilir ya da zayıf bir kaynağa dayanabilir. Gösterilen bağlantılara bakmak, özellikle önemli konularda iyi bir alışkanlıktır."
   ]
  ]
 },
 {
  "slug": "uretken-motor-optimizasyonu",
  "term": "Üretken motor optimizasyonu (GEO)",
  "en": "generative engine optimization",
  "match": [
   "üretken motor optimizasyon",
   "generative engine optimization"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "İçeriğin yapay zeka destekli arama ve sohbet sistemlerinin ürettiği yanıtlarda alıntılanma, öne çıkma ve doğru anlatılma olasılığını artırmaya yönelik çalışmaların bütünü.",
  "how": "Klasik arama motoru optimizasyonu (SEO) bir sayfayı sonuç listesinde üst sıraya taşımayı hedefler; GEO ise sayfanın modelin yanıtında kaynak olarak kullanılmasını amaçlar. Uygulamada net ve doğrulanabilir bilgi, açık başlıklar, güvenilir kaynaklara atıf, yapılandırılmış veri ve markanın birçok yerde tutarlı anılması gibi yöntemler denenir. Sistemlerin işleyişi şeffaf olmadığı ve sık değiştiği için etkisi kesin ölçülemez; önerilerin çoğu deneme ve gözleme dayanır.",
  "why": "Kullanıcılar yanıtı doğrudan yapay zekadan aldıkça markalar ve yayıncılar için görünürlük yeni bir alana kayıyor. Bu nedenle pazarlama ve medya dünyasında yoğun biçimde konuşuluyor. Ancak garantili bir yöntem yok; ayrıca modelleri yanıltmaya çalışan manipülatif uygulamalar konusunda etik ve güvenilirlik tartışmaları var.",
  "example": "Bir kargo firması, sık sorulan sorulara kısa ve net yanıtlar içeren, kaynaklı bir yardım sayfası hazırlar; amaç, yapay zeka aramalarında bu sayfanın kaynak olarak anılma ihtimalini artırmaktır.",
  "faq": [
   [
    "GEO ile SEO aynı şey mi?",
    "Değil, ama ilişkilidir. SEO sayfanın arama sonuçlarındaki sırasını hedefler; GEO yapay zekanın ürettiği yanıtta alıntılanmayı. İyi, güvenilir içerik iki alanda da işe yarar."
   ],
   [
    "GEO ile yapay zeka yanıtlarında yer almak garanti edilebilir mi?",
    "Hayır. Modellerin hangi kaynağı seçtiği tam olarak bilinmiyor ve zamanla değişiyor. GEO, olasılığı artırmaya çalışır; sonuç vaat etmez."
   ]
  ]
 },
 {
  "slug": "baglam-muhendisligi",
  "term": "Bağlam mühendisliği",
  "en": "context engineering",
  "match": [
   "bağlam mühendisliği",
   "context engineering"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir dil modeline her adımda hangi bilgilerin, talimatların, araçların ve konuşma geçmişinin verileceğini tasarlama ve yönetme işi. Amaç, modelin görebildiği alanı doğru içerikle doldurmaktır.",
  "how": "Modelin aynı anda görebildiği metin sınırlıdır; bu alana bağlam penceresi denir. Bağlam mühendisliğinde sistem talimatı, konuşma geçmişi, getirilen belgeler, araç tanımları ve kullanıcıya dair notlar arasından seçim yapılır; bunlar sıralanır, özetlenir, gereksiz olanlar çıkarılır. Çok adımlı ajanlarda bu seçim her adımdan önce yeniden yapılır. Masaya konan evrağa benzer: az olursa eksik kalır, çok olursa asıl bilgi kaybolur.",
  "why": "Aynı model, doğru bağlamla çok daha iyi çalışabilir; ajan uygulamalarındaki hataların bir kısmı modelin değil, ona verilen bağlamın eksik ya da dağınık olmasından kaynaklanır. Kavram, istem mühendisliğinin tek bir metin yazmaktan öteye geçen genişlemiş hali olarak görülüyor. Bağlam boyutu maliyeti ve yanıt süresini de etkiler.",
  "example": "Bir kodlama asistanı, tüm depoyu modele vermek yerine yalnızca ilgili dosyaları, projenin yazım kurallarını ve son hata mesajını bağlama koyar.",
  "faq": [
   [
    "Bağlam mühendisliği ile istem mühendisliği arasındaki fark ne?",
    "İstem mühendisliği daha çok iyi bir talimat metni yazmaya odaklanır. Bağlam mühendisliği ise talimatın yanında belgeler, geçmiş, araçlar ve bellek gibi modele giren her şeyin yönetimini kapsar."
   ],
   [
    "Bağlam penceresi büyükse bağlam mühendisliğine gerek kalır mı?",
    "Yine gerekir. Pencere büyük olsa da gereksiz içerik hem maliyeti artırır hem de modelin asıl bilgiyi gözden kaçırma ihtimalini yükseltebilir."
   ]
  ]
 },
 {
  "slug": "model-yonlendirme",
  "term": "Model yönlendirme",
  "en": "model routing",
  "match": [
   "model yönlendirme",
   "model routing"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Gelen her isteği zorluğuna, türüne veya maliyetine göre uygun yapay zeka modeline gönderen katman. Basit işler küçük ve ucuz modele, zor işler daha güçlü modele gider.",
  "how": "İstek önce bir yönlendirici tarafından değerlendirilir. Yönlendirici kural tabanlı olabilir, örneğin kod soruları belirli bir modele gider; ya da isteğin zorluğunu tahmin eden küçük bir model olabilir. Seçilen model yanıtı üretir. Bazı sistemlerde küçük modelin yanıtı yetersiz kalırsa istek daha güçlü modele aktarılır. Hız, maliyet, kalite ve bazen veri gizliliği gibi ölçütler dengelenir. Postanede acil ve olağan gönderilerin ayrı hatlara yönlendirilmesine benzer.",
  "why": "Her işte en güçlü modeli kullanmak pahalı ve yavaştır. Yönlendirme, kaliteyi korurken maliyeti ve bekleme süresini düşürmeyi amaçlar; birden fazla model sağlayıcısıyla çalışan şirketlerde yaygın bir yapıdır. Yanlış yönlendirme ise zor bir sorunun zayıf bir modele gitmesine ve kalitenin düşmesine yol açabilir.",
  "example": "Bir müşteri destek sistemi 'Kargom nerede?' gibi basit soruları küçük bir modele, karmaşık iade anlaşmazlıklarını ise daha güçlü bir modele gönderir.",
  "faq": [
   [
    "Model yönlendirme neden kullanılır?",
    "Maliyeti ve yanıt süresini düşürmek için. Basit istekler için güçlü ve pahalı bir modele ihtiyaç yoktur; yönlendirme her isteğe yetecek kadar güçlü modeli seçmeye çalışır."
   ],
   [
    "Kullanıcı yönlendirmeyi fark eder mi?",
    "Genellikle fark etmez; seçim arka planda yapılır. Bazı ürünler hangi modelin kullanıldığını gösterir ya da kullanıcıya model seçme imkânı verir."
   ]
  ]
 },
 {
  "slug": "hiz-siniri",
  "term": "Hız sınırı (rate limit)",
  "en": "rate limit",
  "match": [
   "rate limit",
   "hız sınırı"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir yapay zeka hizmetinin, belirli bir sürede tek bir kullanıcının ya da uygulamanın yapabileceği istek sayısına veya işleyebileceği veri miktarına koyduğu üst sınır.",
  "how": "Sağlayıcılar sınırı genellikle dakikadaki istek sayısı ve dakikada işlenen token miktarı olarak belirler. Sınır aşılınca sunucu isteği reddeder ve çoğunlukla 'çok fazla istek' anlamına gelen bir hata döndürür. Geliştiriciler bu durumda bir süre bekleyip yeniden deneme, istekleri kuyruğa alma ya da aralıklı gönderme gibi yöntemlerle uyum sağlar. Limitler hesap türüne ve kullanım geçmişine göre değişebilir. Kavşaktaki trafik ışığı gibi, akışı düzenleyerek tıkanmayı önler.",
  "why": "Hızı sınırlamak hizmetin aşırı yüklenmesini önler, kaynakların kullanıcılar arasında adil paylaşılmasını sağlar ve kötüye kullanımı zorlaştırır. Uygulama geliştiriciler için ürün büyüdükçe darboğaza dönüşebilir. Sıradan kullanıcılar da sohbet asistanlarında 'mesaj sınırına ulaştınız' gibi uyarılarla benzer bir kısıtla karşılaşır.",
  "example": "Bir şirket yüzlerce belgeyi aynı anda özetletmek için bir yapay zeka servisine art arda istek gönderir; bir süre sonra hata almaya başlar ve istekleri aralıklı göndermek zorunda kalır.",
  "faq": [
   [
    "Hız sınırı ile kota aynı şey mi?",
    "Tam olarak değil. Hız sınırı kısa sürede ne kadar kullanılabileceğini sınırlar, örneğin dakikada. Kota ise genellikle daha uzun bir dönemde, örneğin ay boyunca, toplam kullanımı sınırlar."
   ],
   [
    "Hız sınırına takılınca ne yapılır?",
    "Genellikle kısa bir süre bekleyip isteği yeniden denemek gerekir. Geliştiriciler istekleri kuyruğa alabilir ya da sağlayıcıdan daha yüksek limit isteyebilir."
   ]
  ]
 },
 {
  "slug": "toplu-isleme-api-si",
  "term": "Toplu işleme API'si (batch API)",
  "en": "batch API",
  "match": [
   "batch api",
   "toplu işleme api"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Çok sayıda yapay zeka isteğinin tek seferde gönderildiği, yanıtların ise anında değil belirli bir süre içinde arka planda hazırlanıp geri verildiği programlama arayüzü türü.",
  "how": "Geliştirici yüzlerce ya da binlerce isteği tek bir dosyada toplayıp sağlayıcıya yükler. Sağlayıcı bu işleri sunucularda boş kapasiteye göre sıraya alır ve anlık sohbet trafiğini aksatmadan çalıştırır. İş bitince sonuçlar bir dosya olarak indirilir; her sonuç, hangi isteğe ait olduğunu gösteren bir kimlikle eşleşir. Yanıt için genellikle saatler süren bir bekleme penceresi tanınır. Bunun karşılığında birçok sağlayıcı normal çağrılara göre daha düşük bir ücret sunar.",
  "why": "Belge arşivini etiketlemek, müşteri yorumlarını sınıflandırmak ya da test verisi üretmek gibi acelesi olmayan işlerde maliyeti belirgin biçimde düşürebilir. Büyük hacimli işleri anlık çağrıların hız sınırlarına takılmadan yürütmeyi de kolaylaştırır. Bu yüzden yapay zekayı ölçekli kullanan şirketlerin sık başvurduğu bir yöntemdir.",
  "example": "Bir e-ticaret şirketi geçen yıla ait yüz binlerce ürün yorumunu geceden toplu işleme ile duygu analizine gönderir, sabah sonuçları hazır bulur.",
  "faq": [
   [
    "Toplu işleme API'si ile normal API arasındaki fark ne?",
    "Normal API isteğe saniyeler içinde yanıt verir; toplu işleme ise yanıtı daha uzun bir sürede, arka planda hazırlar. Bekleme süresini kabul edenlere genellikle daha düşük maliyet sunulur."
   ],
   [
    "Hangi işler için uygun değil?",
    "Kullanıcının karşısında anında cevap beklediği sohbet botu, canlı asistan ya da etkileşimli arama gibi işler için uygun değildir. Gecikmenin sorun olmadığı yığın işlerde anlamlıdır."
   ]
  ]
 },
 {
  "slug": "akisli-yanit",
  "term": "Akışlı yanıt (streaming)",
  "en": "streaming",
  "match": [
   "streaming",
   "akışlı yanıt"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Dil modelinin cevabı tamamlanmasını beklemeden, üretildikçe parça parça kullanıcıya iletmesi. Cevap ekranda sanki o anda yazılıyormuş gibi akarak belirir.",
  "how": "Dil modeli metni belirteç (token) adı verilen küçük parçalar halinde, birbiri ardına üretir. Akışlı modda sunucu cevabın bitmesini beklemez; her yeni parçayı üretildiği anda açık tutulan bir bağlantı üzerinden istemciye gönderir. Arayüz gelen parçaları sırayla ekrana ekler. Toplam üretim süresi pek değişmez, ama ilk sözcüğün görünmesi için geçen süre epey kısalır. Geliştiriciler bunu çoğunlukla sağlayıcının sunduğu tek bir ayarla açar.",
  "why": "Uzun cevaplarda bekleme hissini azalttığı için sohbet botlarının akıcı görünmesinin başlıca nedenidir. Kullanıcı, cevabın yanlış yöne gittiğini görürse üretimi erken durdurabilir. Öte yandan yarım gelen çıktının işlenmesi ve bağlantı kopması gibi durumların yönetilmesi geliştiriciye ek iş çıkarır.",
  "example": "ChatGPT gibi sohbet arayüzlerinde cevabın sözcük sözcük belirmesi akışlı yanıta dayanır; kullanıcı cevap bitmeden okumaya başlayabilir.",
  "faq": [
   [
    "Akışlı yanıt cevabı daha hızlı mı üretir?",
    "Hayır, cevabın tamamının hazır olma süresi büyük ölçüde aynı kalır. Değişen şey, ilk parçanın çok daha erken görünmesi ve bekleme hissinin azalmasıdır."
   ],
   [
    "Akışlı yanıtın dezavantajı var mı?",
    "Geliştirici açısından yarım gelen metni işlemek, hataları yakalamak ve çıktıyı doğrulamak biraz daha zordur. Cevabın tamamı üzerinde işlem yapılması gereken durumlarda akış çoğu zaman gereksizdir."
   ]
  ]
 },
 {
  "slug": "sdk",
  "term": "SDK (yazılım geliştirme kiti)",
  "en": "software development kit",
  "match": [
   "=sdk",
   "yazılım geliştirme kit"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Belirli bir hizmetle ya da platformla çalışan yazılım geliştirmeyi kolaylaştırmak için hazırlanmış kütüphane, örnek kod, belge ve araçlardan oluşan paket.",
  "how": "Yapay zeka sağlayıcıları, API'yi ham web istekleriyle kullanmak yerine Python ya da JavaScript gibi dillerde hazır paketler sunar. Geliştirici paketi kurar, erişim anahtarını tanımlar ve birkaç satırlık fonksiyon çağrısıyla modele istek gönderir. SDK kimlik doğrulama, hatalı isteği yeniden deneme ve yanıtı düzenli bir yapıya dönüştürme gibi ayrıntıları üstlenir. Sağlayıcı API'sini güncellediğinde paket de yenilenir; böylece uygulamanın uyumu daha kolay korunur.",
  "why": "Entegrasyon süresini kısaltır ve sık yapılan hataları azaltır. Geliştiriciler için bir sağlayıcıyı seçerken SDK'nın kalitesi, desteklediği diller ve belgelerin açıklığı önemli bir ölçüttür. Haberlerde yeni bir SDK duyurusu genellikle geliştiricilerin yeni bir özelliğe daha kolay erişeceği anlamına gelir.",
  "example": "OpenAI ve Anthropic'in Python paketleriyle birkaç satır kod yazarak bir modele soru göndermek ve gelen cevabı okumak mümkündür.",
  "faq": [
   [
    "SDK ile API arasındaki fark ne?",
    "API, bir hizmetin dışarıya açtığı kurallar ve uç noktalar bütünüdür. SDK ise bu API'yi bir programlama dilinde kolayca kullanmayı sağlayan hazır araç paketidir."
   ],
   [
    "SDK kullanmak zorunlu mu?",
    "Hayır, API doğrudan web istekleriyle de kullanılabilir. Ancak SDK çoğu zaman zaman kazandırır ve hata riskini azaltır."
   ]
  ]
 },
 {
  "slug": "kodsuz-yapay-zeka",
  "term": "Kodsuz yapay zeka (no-code)",
  "en": "no-code AI",
  "match": [
   "no-code",
   "kodsuz yapay zeka"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yazılım bilmeyen kişilerin görsel arayüzler, sürükle-bırak bileşenler ve doğal dil komutlarıyla yapay zeka uygulaması ya da otomasyon kurmasını sağlayan yaklaşım.",
  "how": "Platform, veri kaynağı, model çağrısı, koşul ve çıktı gibi hazır bileşenler sunar. Kullanıcı bunları ekranda birbirine bağlayarak bir akış kurar; arka plandaki kodu platform kendisi çalıştırır. Bazı araçlar yapılmak istenen işi sade bir dille yazmaya izin verir ve akışı kendisi oluşturur. Modeller çoğunlukla hazır bir sağlayıcıdan çağrılır. Esneklik platformun sunduğu bileşenlerle sınırlıdır; çok özel ihtiyaçlarda yine yazılımcı gerekebilir.",
  "why": "Yapay zekayı mühendis olmayan çalışanlara açar ve fikirden prototipe geçen süreyi kısaltır. Küçük işletmeler için maliyet avantajı sağlayabilir. Bununla birlikte veri güvenliği, bakım zorluğu ve tek bir platforma bağımlı kalma gibi riskler vardır; denetimsiz kurulan akışlar kurumlarda sorun çıkarabilir.",
  "example": "Bir insan kaynakları uzmanı, gelen başvuru e-postalarını özetleyip bir tabloya işleyen akışı tek satır kod yazmadan kurabilir.",
  "faq": [
   [
    "Kodsuz yapay zeka ile düşük kodlu (low-code) arasındaki fark ne?",
    "Kodsuz araçlar tamamen görsel arayüzle çalışır. Düşük kodlu araçlar da görsel bileşenler sunar, ama gerektiğinde elle kod eklemeye izin verir."
   ],
   [
    "Kodsuz araçlarla kurumsal ölçekte iş yapılabilir mi?",
    "Basit ve tekrarlı süreçlerde evet, ancak büyük ve kritik sistemlerde güvenlik, performans ve esneklik sınırları belirleyici olur. Bu tür işlerde çoğunlukla yazılım ekipleri devreye girer."
   ]
  ]
 },
 {
  "slug": "robotik-surec-otomasyonu",
  "term": "Robotik süreç otomasyonu (RPA)",
  "en": "robotic process automation",
  "match": [
   "robotik süreç otomasyonu",
   "=rpa",
   "robotic process automation"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yazılım robotlarının, insanın bilgisayar ekranında yaptığı tekrarlı işleri (tıklama, kopyalama, form doldurma) kurallara göre taklit ederek otomatikleştirmesi.",
  "how": "Otomatikleştirilecek süreç adım adım tanımlanır ya da kullanıcının hareketleri kaydedilir. Yazılım robotu sonra uygulamaların arayüzünde bir insan gibi çalışır: dosya açar, alanlara veri girer, sistemler arasında bilgi taşır. RPA kural tabanlıdır; bu yüzden arayüz değiştiğinde ya da beklenmedik bir durum çıktığında bozulabilir. Yapay zeka eklendiğinde ise robotlar e-posta ya da belge gibi düzensiz verileri de anlayıp işleyebilir.",
  "why": "Eski sistemlerin kodunu değiştirmeden otomasyon yapılabilmesi, RPA'yı kurumlarda yaygın kılmıştır. Yapay zeka haberlerinde sıkça ajanlarla karşılaştırılır: RPA katı kurallarla çalışır, yapay zeka ajanları ise daha esnek karar verebilir. Hangisinin ne zaman uygun olduğu, otomasyon yatırımlarında önemli bir sorudur.",
  "example": "Bir bankada her sabah birkaç farklı sistemden rapor çekip tek tabloda birleştiren ve ilgili birime e-postayla gönderen yazılım robotu tipik bir RPA uygulamasıdır.",
  "faq": [
   [
    "RPA ile yapay zeka aynı şey mi?",
    "Hayır. RPA önceden tanımlı kuralları izleyen bir otomasyon yöntemidir ve kendi başına öğrenmez. Yapay zeka ise belge okuma ya da metin anlama gibi işlerde RPA'ya eklenebilir."
   ],
   [
    "RPA'daki robot fiziksel bir makine mi?",
    "Hayır, bilgisayarda çalışan bir yazılımdır. Adındaki robot, insanın ekranda yaptığı işleri taklit etmesinden gelir."
   ]
  ]
 },
 {
  "slug": "akilli-belge-isleme",
  "term": "Akıllı belge işleme (IDP)",
  "en": "intelligent document processing",
  "match": [
   "akıllı belge işleme",
   "=ıdp",
   "intelligent document processing"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Fatura, sözleşme ve form gibi belgelerdeki bilgiyi yapay zekayla okuyup sınıflandıran ve düzenli, yapılandırılmış veriye dönüştüren teknoloji.",
  "how": "Belge önce taranır ya da dijital halde alınır, ardından optik karakter tanıma ile metni çıkarılır. Modeller belgenin türünü ayırt eder, düzenini anlar ve tutar, tarih ya da taraf adı gibi alanları bulur. Çıkarılan veri doğrulama kurallarından geçer; emin olunmayan alanlar bir insanın kontrolüne gönderilir. Sonuçlar muhasebe gibi sistemlere aktarılır. Yeni nesil çözümlerde büyük dil modelleri de bu aşamalarda kullanılıyor.",
  "why": "Kurumların bilgisinin büyük kısmı belgelerin içinde durur ve bunları elle girmek yavaş, pahalı ve hataya açıktır. IDP bu işi hızlandırır. Finans, sigorta ve lojistik gibi belge yoğun sektörlerde sık gündeme gelir. Hassas belgelerde doğruluk ve veri gizliliği ise dikkatle yönetilmesi gereken noktalardır.",
  "example": "Bir lojistik firması, her gün gelen yüzlerce faturayı IDP ile okutup tutar ve tarih alanlarını otomatik olarak muhasebe sistemine aktarabilir.",
  "faq": [
   [
    "Akıllı belge işleme ile OCR arasındaki fark ne?",
    "OCR yalnızca görüntüdeki yazıyı metne çevirir. IDP ise bu metnin ne anlama geldiğini de çözer: belgenin türünü belirler, alanları bulur ve veriyi doğrulayıp sisteme aktarır."
   ],
   [
    "IDP insan kontrolünü tamamen ortadan kaldırır mı?",
    "Çoğu zaman hayır. Model emin olmadığı alanları genellikle bir çalışanın onayına sunar; bu da hataların kritik sistemlere geçmesini önler."
   ]
  ]
 },
 {
  "slug": "optik-karakter-tanima",
  "term": "Optik karakter tanıma (OCR)",
  "en": "optical character recognition",
  "match": [
   "optik karakter tanıma",
   "=ocr",
   "optical character recognition"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Taranmış belge, fotoğraf ya da ekran görüntüsü gibi görsellerdeki yazıyı, bilgisayarın arayabileceği ve düzenleyebileceği metne dönüştüren teknoloji.",
  "how": "Görüntü önce temizlenir; eğiklik ve gürültü giderilir. Sistem sayfada metin bölgelerini bulur, satırları ve karakterleri ayırır, sonra her birini tanır. Eskiden bu iş şablon eşleştirmeyle yapılırdı; bugün çoğunlukla sinir ağları kullanılır. Sonuç düzenlenebilir bir metindir ve çoğu zaman her sözcüğün sayfadaki konumu da saklanır. Baskı kalitesi, yazı tipi, el yazısı ve dil, doğruluğu etkiler; Türkçedeki ç, ğ, ı, ö, ş, ü gibi harfler de bazen hata kaynağı olabilir.",
  "why": "Basılı arşivleri aranabilir hale getirir, görme engelli kullanıcılar için erişilebilirliği artırır ve belge işleme sistemlerinin temel adımıdır. Okuma hataları sonraki aşamalara taşınabildiği için, önemli verilerde sonuçların kontrol edilmesi gerekir.",
  "example": "Telefon kamerasıyla çekilen bir market fişinin OCR ile metne çevrilip harcama takip uygulamasına işlenmesi, günlük hayattaki tipik bir kullanımdır.",
  "faq": [
   [
    "OCR el yazısını da okuyabilir mi?",
    "Modern sistemler el yazısını da tanıyabilir, ama doğruluk baskı metne göre genellikle daha düşüktür ve yazının okunaklılığına çok bağlıdır."
   ],
   [
    "OCR ile yapay zeka aynı şey mi?",
    "OCR eskiden kural ve şablonlara dayanıyordu, bugünkü sistemler ise çoğunlukla yapay zeka modelleriyle çalışır. Yani artık yapay zekanın bir uygulaması sayılabilir."
   ]
  ]
 },
 {
  "slug": "makine-cevirisi",
  "term": "Makine çevirisi",
  "en": "machine translation",
  "match": [
   "makine çevirisi",
   "machine translation"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir dildeki metnin ya da konuşmanın başka bir dile yazılım tarafından otomatik olarak çevrilmesi. Bugün çoğunlukla yapay sinir ağlarıyla yapılıyor.",
  "how": "İlk sistemler dilbilgisi kurallarına ve sözlüklere dayanıyordu; sonra istatistiksel yöntemler geldi. Bugünkü sistemler sinir ağlarıyla, özellikle Transformer mimarisiyle çalışır. Model, iki dildeki çok sayıda metin çiftinden örüntüleri öğrenir. Çeviri sırasında cümleyi sözcük sözcük değil bütün olarak ele alır ve bağlama uygun karşılığı üretir. Büyük dil modelleri de çeviri yapabiliyor. Az metni bulunan dillerde ise kalite genellikle daha düşük kalır.",
  "why": "Dil engelini düşürerek bilgiye, ticarete ve iletişime erişimi kolaylaştırır. Yapay zeka alanındaki ilerlemelerin gündelik hayata en erken yansıdığı alanlardan biridir. Buna karşın hukuki, tıbbi ya da resmi metinlerde hatalı bir çeviri ciddi sonuçlar doğurabilir; deyimler ve kültürel nüanslar da hâlâ zorluk çıkarır.",
  "example": "Yabancı bir haber sitesini Google Çeviri ya da DeepL ile Türkçeye çevirip okumak, makine çevirisinin en bilinen gündelik kullanımıdır.",
  "faq": [
   [
    "Makine çevirisi insan çevirmenin yerini alır mı?",
    "Gündelik ve anlaşılırlığın yeterli olduğu metinlerde çoğu zaman işi görür. Hukuk, edebiyat ve tıp gibi hassasiyet gerektiren alanlarda ise insan çevirmen ya da en azından insan denetimi hâlâ önemlidir."
   ],
   [
    "Makine çevirisi neden bazen saçma sonuçlar verir?",
    "Model bağlamı ve deyimleri her zaman doğru yakalayamaz; az örneği olan dillerde ya da belirsiz cümlelerde hata yapma olasılığı artar."
   ]
  ]
 },
 {
  "slug": "duygu-analizi",
  "term": "Duygu analizi",
  "en": "sentiment analysis",
  "match": [
   "duygu analizi",
   "sentiment analysis"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir metindeki görüşün olumlu, olumsuz ya da nötr olduğunu otomatik olarak belirleyen doğal dil işleme yöntemi. Yorum, tweet ve müşteri mesajı gibi büyük metin yığınlarının genel havasını tek tek okumadan ölçmek için kullanılır.",
  "how": "Klasik yaklaşımlarda olumlu ve olumsuz sözcük listelerine bakılır, metindeki ifadeler sayılıp bir puan çıkarılır. Günümüzde ise etiketlenmiş örneklerle eğitilmiş modeller ya da büyük dil modelleri kullanılıyor. Model cümlenin bağlamına bakarak bir sınıf ya da skor üretir. Bazı sistemler yalnızca genel tonu değil, belirli bir özelliğe yönelik görüşü de ayırır; örneğin 'kamera iyi ama pil kötü' cümlesindeki iki ayrı duyguyu yakalayabilir. İroni, deyimler ve Türkçe gibi eklemeli dillerdeki çekim ekleri en zor noktalar arasındadır.",
  "why": "Şirketler binlerce yorumu tek tek okumadan müşteri memnuniyetini, marka algısını ve olası kriz işaretlerini izleyebilir. Finans, siyaset ve pazarlamada kamuoyunun havasını ölçmek için de başvurulan bir yöntemdir. Yine de sonuçlar kusursuz değildir; alaycı ifadeler ve kültürel farklar hataya yol açabilir.",
  "example": "Bir e-ticaret sitesi, günde binlerce ürün yorumunu duygu analiziyle tarayıp olumsuz yorumların hızla arttığı ürünleri ilgili ekibe listeler.",
  "faq": [
   [
    "Duygu analizi ile konu sınıflandırması arasındaki fark ne?",
    "Konu sınıflandırması metnin neyle ilgili olduğunu söyler, duygu analizi ise yazanın o konuya nasıl baktığını. Aynı yorum hem 'teslimat' konusuna girebilir hem de olumsuz olarak etiketlenebilir."
   ],
   [
    "Duygu analizi ne kadar doğru sonuç verir?",
    "Doğruluk dile, alana ve metnin yapısına göre değişir. Açık ifadelerde iyi çalışır, ironide ve çok kısa metinlerde zorlanır; bu yüzden önemli kararlarda insan kontrolü gerekir."
   ]
  ]
 },
 {
  "slug": "varlik-adi-tanima",
  "term": "Varlık adı tanıma (NER)",
  "en": "named entity recognition",
  "match": [
   "varlık adı tanıma",
   "=ner",
   "named entity recognition"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir metindeki kişi, kurum, yer, tarih ve para tutarı gibi özel adları ve belirli nesneleri bulup türüne göre etiketleyen doğal dil işleme görevi.",
  "how": "Model metni küçük parçalara böler ve her parça için bir etiket tahmin eder: kişi, kurum, yer ya da hiçbiri. Bağlam burada belirleyicidir; 'Apple' sözcüğünün meyve mi şirket mi olduğu cümleden anlaşılır. Eğitim, insanların etiketlediği metinlerle yapılır. Bugün genellikle önceden eğitilmiş dil modelleri bu iş için ince ayarlanır, büyük dil modellerine istem verilerek de aynı sonuç alınabilir. Çıktıda her ifadenin metindeki konumu ve türü yer alır. Türkçede 'Ankara'dan' gibi ekli biçimler işi zorlaştırır.",
  "why": "Haber arşivlerinden, hukuk belgelerinden ve sağlık kayıtlarından yapılandırılmış bilgi çıkarmanın temel adımlarından biridir. Arama motorlarında, bilgi grafiklerinde ve kişisel verilerin otomatik maskelenmesinde kullanılır. Yapay zeka sistemlerinin düz metni işe yarar veriye çevirmesinde önemli bir yer tutar.",
  "example": "'Ayşe Yılmaz, Mart ayında İzmir'deki Ege Üniversitesi'ni ziyaret etti' cümlesinde sistem Ayşe Yılmaz'ı kişi, Mart'ı tarih, İzmir'i yer, Ege Üniversitesi'ni kurum olarak işaretler.",
  "faq": [
   [
    "Varlık adı tanıma ile anahtar kelime çıkarma aynı şey mi?",
    "Hayır. Anahtar kelime çıkarma metnin önemli sözcüklerini seçer, varlık adı tanıma ise bulduğu ifadeye kişi, yer, kurum gibi bir tür etiketi de verir."
   ],
   [
    "Varlık adı tanıma hangi alanlarda kullanılır?",
    "Haber ve arşiv taramasında, sözleşme ve dava dosyası incelemesinde, hasta kayıtlarında ve müşteri mesajlarındaki kişisel bilgilerin gizlenmesinde sık kullanılır."
   ]
  ]
 },
 {
  "slug": "yerel-dil-modeli",
  "term": "Yerel dil modeli (local LLM)",
  "en": "local LLM",
  "match": [
   "yerel dil model",
   "yerel llm",
   "local llm"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bulut hizmetine bağlanmadan kullanıcının kendi bilgisayarında, telefonunda ya da şirketin kendi sunucusunda çalıştırılan büyük dil modeli.",
  "how": "Ağırlıkları herkese açık paylaşılan bir model indirilir ve Ollama, llama.cpp ya da LM Studio gibi araçlarla çalıştırılır. Modelin belleğe sığması için nicemleme (quantization) uygulanır; yani sayılar daha az bitle saklanır, dosya küçülür, kalite ise bir miktar düşebilir. Hız ve ulaşılabilecek model boyutu, ekran kartı belleğine ve bilgisayarın RAM miktarına bağlıdır. Küçük modeller sıradan bir dizüstü bilgisayarda çalışabilir, büyükleri güçlü donanım ister. Tüm işlem cihazda yapıldığı için istemler ve belgeler dışarıya gönderilmez.",
  "why": "Gizlilik, yerel modellerin en güçlü gerekçesidir; hassas veriler şirketin ya da kişinin elinde kalır. İnternet olmadan çalışabilmesi ve kullanım başına ücret ödenmemesi de avantajdır, ancak donanım maliyeti ve kurulum emeği vardır. Genellikle en büyük bulut modelleri kadar yetenekli değildir.",
  "example": "Bir hukuk bürosu, müvekkil belgelerini dışarı göndermemek için açık ağırlıklı bir modeli kendi sunucusunda çalıştırıp sözleşmelerin özetini çıkarttırıyor.",
  "faq": [
   [
    "Yerel dil modeli ile ChatGPT arasındaki fark ne?",
    "ChatGPT, OpenAI'ın sunucularında çalışan bir hizmettir ve internet üzerinden kullanılır. Yerel model ise kendi cihazınıza indirilip orada çalışır; veriler dışarı çıkmaz ama modelin gücü donanımınızla sınırlıdır."
   ],
   [
    "Yerel model çalıştırmak için çok güçlü bir bilgisayar şart mı?",
    "Hayır. Nicemlenmiş küçük modeller sıradan bir dizüstü bilgisayarda da çalışır. Daha büyük ve yetenekli modeller için bol belleğe sahip bir ekran kartı gerekir."
   ]
  ]
 },
 {
  "slug": "mlops",
  "term": "MLOps",
  "en": "machine learning operations",
  "match": [
   "=mlops"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Makine öğrenmesi modellerinin geliştirilmesinden canlıya alınmasına, izlenmesine ve güncellenmesine kadar uzanan süreci düzenli, tekrarlanabilir ve güvenilir biçimde yönetmeye yarayan çalışma pratikleri ve araçlar bütünü.",
  "how": "MLOps, yazılım dünyasındaki DevOps anlayışının makine öğrenmesine uyarlanmış hâlidir. Veri hazırlama, eğitim, test, paketleme ve dağıtım adımları otomatik hatlara (pipeline) bağlanır. Veri ve model sürümleri kaydedilir, deneylerin sonuçları izlenir. Canlıya alınan modelin performansı sürekli ölçülür; veri zamanla değiştiğinde doğruluk düşebilir, bu durumda model yeni verilerle yeniden eğitilir. Sürüm denetimi, model kayıt defteri ve izleme panoları bu düzenin tipik parçalarıdır.",
  "why": "Birçok model, laboratuvarda iyi çalışsa da canlı ortamda güvenilir biçimde işletilemediği için prototip aşamasında kalır. MLOps bu boşluğu kapatır; güncelleme hızını artırır, hataları erken yakalar ve modelin hangi veriyle üretildiğinin denetlenebilmesini sağlar. Yapay zekayı ürüne dönüştüren ekipler için temel bir mühendislik alanıdır.",
  "example": "Bir banka, sahtecilik tespit modelini her ay yeni işlemlerle otomatik olarak yeniden eğiten, test eden ve doğruluk düşerse ekibi uyaran bir hat kuruyor.",
  "faq": [
   [
    "MLOps ile DevOps arasındaki fark ne?",
    "DevOps yalnızca kodun yayınlanmasını ve işletilmesini düzenler. MLOps'ta kodun yanında veri ve model de sürekli değiştiği için bunların sürümlenmesi, test edilmesi ve izlenmesi de sürece dahil olur."
   ],
   [
    "MLOps ile LLMOps aynı şey mi?",
    "Tam olarak değil. LLMOps, büyük dil modelleri için uyarlanmış bir daldır; istem yönetimi, çıktı değerlendirmesi ve maliyet takibi gibi o modellere özgü konulara odaklanır."
   ]
  ]
 },
 {
  "slug": "llm-gozlemlenebilirligi",
  "term": "LLM gözlemlenebilirliği",
  "en": "LLM observability",
  "match": [
   "gözlemlenebilirlik",
   "observability"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Büyük dil modeliyle çalışan bir uygulamanın canlıda ne yaptığını, hangi girdiye hangi yanıtı verdiğini, ne kadar sürdüğünü ve ne kadar maliyet çıkardığını kaydedip incelemeye olanak veren izleme yaklaşımı.",
  "how": "Uygulama her model çağrısında istemi, yanıtı, kullanılan token sayısını, gecikmeyi ve hataları kaydeder. Birden çok adımdan oluşan akışlarda (belge arama, araç çağırma, yanıt üretme) her adım bir izin (trace) parçası olarak birbirine bağlanır; böylece yanlış bir yanıtın hangi adımda doğduğu görülebilir. Kayıtlar panolarda toplanır. Kalite ise kullanıcı geri bildirimleri ve başka bir modelin hakemlik ettiği otomatik değerlendirmelerle ölçülür. Eşik aşıldığında alarm üretilebilir.",
  "why": "Büyük dil modelleri aynı girdiye farklı yanıt verebilir ve hatalar çoğu zaman sessizdir; sistem çökmez ama uydurma bir bilgi sunar. Gözlemlenebilirlik olmadan bunu fark etmek ve düzeltmek zordur. Maliyet kontrolü için de gereklidir. Öte yandan kayıtlar kişisel veri içerebileceğinden saklama ve gizlilik konusunda dikkat gerekir.",
  "example": "Bir müşteri destek botu yanlış iade koşulunu söylediğinde ekip ilgili izi açıp botun konuyla alakasız bir belgeyi getirdiğini görüyor ve arama adımını düzeltiyor.",
  "faq": [
   [
    "LLM gözlemlenebilirliği klasik sistem izlemesinden nasıl ayrılır?",
    "Klasik izleme sunucunun çalışıp çalışmadığına ve ne kadar hızlı yanıt verdiğine bakar. LLM gözlemlenebilirliği buna ek olarak yanıtın içeriğine, kalitesine ve maliyetine de bakar."
   ],
   [
    "Hangi veriler kaydedilir?",
    "Genellikle istem, model yanıtı, token sayısı, gecikme, maliyet, hata ve kullanıcı geri bildirimi kaydedilir. İstemler kişisel veri içerebileceği için bunların maskelenmesi ya da saklama süresinin sınırlanması önerilir."
   ]
  ]
 },
 {
  "slug": "pytorch",
  "term": "PyTorch",
  "en": "PyTorch",
  "match": [
   "=pytorch"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yapay zeka modellerini kurmak ve eğitmek için kullanılan, Python tabanlı açık kaynaklı derin öğrenme kütüphanesi. Özellikle araştırmacılar ve model geliştiren ekipler arasında yaygındır.",
  "how": "Veriler, tensör adı verilen çok boyutlu sayı dizileri olarak tutulur ve hesaplar ekran kartında hızlandırılabilir. Otomatik türev alma (autograd) özelliği, eğitim sırasında modelin parametrelerini güncellemek için gereken gradyanları kendiliğinden hesaplar. Model, sıradan Python kodu gibi yazılır ve satır satır çalışır; bu da hata ayıklamayı kolaylaştırır. Katmanlar, kayıp fonksiyonları ve optimizasyon algoritmaları hazır gelir. Eğitilen model, canlı kullanım için farklı biçimlere dışa aktarılabilir.",
  "why": "Araştırma makalelerinin ve Hugging Face gibi platformlarda paylaşılan açık modellerin büyük bölümü PyTorch ile yazılıyor; bu yüzden yapay zeka haberlerindeki birçok modelin altında bu kütüphane var. Meta tarafından başlatılan proje, bugün Linux Foundation çatısındaki PyTorch Foundation tarafından yönetiliyor.",
  "example": "Bir üniversite ekibi, yeni bir görüntü sınıflandırma mimarisini PyTorch ile birkaç yüz satırda yazıp aynı gün denemeye başlayabiliyor.",
  "faq": [
   [
    "PyTorch ile TensorFlow arasındaki fark ne?",
    "İkisi de derin öğrenme kütüphanesidir. PyTorch, Python koduna yakın yazımı ve esnekliğiyle araştırmada çok tercih edilir; TensorFlow ise Google'ın geliştirdiği, dağıtım ve mobil araçlarıyla öne çıkan bir ekosistem sunar."
   ],
   [
    "PyTorch kullanmak için Python bilmek gerekir mi?",
    "Evet, PyTorch'un ana arayüzü Python'dur. Temel Python bilgisi ve biraz da doğrusal cebir ile olasılık sezgisi başlangıç için yeterlidir."
   ]
  ]
 },
 {
  "slug": "tensorflow",
  "term": "TensorFlow",
  "en": "TensorFlow",
  "match": [
   "=tensorflow"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Google'ın geliştirip 2015'te açık kaynak olarak yayımladığı derin öğrenme kütüphanesi. Modellerin eğitilmesi ve farklı cihazlarda canlıya alınması için geniş bir araç seti sunar.",
  "how": "Hesaplar, tensörler üzerinde yürüyen bir işlem grafiği olarak kurgulanır ve bu grafik işlemci, ekran kartı ya da Google'ın TPU çipleri üzerinde çalışabilir. Keras adlı üst düzey arayüzle bir model birkaç satırda tanımlanıp eğitilebilir. TensorFlow 2 ile kod varsayılan olarak adım adım çalışır; hız gerektiğinde grafik biçimine dönüştürülür. Ekosistemde mobil cihazlar için TensorFlow Lite, tarayıcı için TensorFlow.js ve sunucuda model yayınlamak için TensorFlow Serving gibi parçalar yer alır.",
  "why": "Eğitilmiş bir modeli telefona, tarayıcıya ya da büyük bir sunucu sistemine taşımak için hazır araçlar sunması, TensorFlow'u üretim ortamlarında kalıcı kılmıştır. Birçok şirketin mevcut sistemleri bu kütüphaneye dayanır. Araştırma topluluğunda ise son yıllarda PyTorch daha yaygın hâle geldi.",
  "example": "Bir telefon uygulaması, TensorFlow Lite ile küçültülmüş bir modeli cihazda çalıştırarak fotoğraftaki nesneleri internet bağlantısı olmadan tanıyabilir.",
  "faq": [
   [
    "TensorFlow ile Keras arasındaki fark ne?",
    "Keras, model kurmayı kolaylaştıran üst düzey bir arayüzdür. TensorFlow ise altta çalışan hesaplama motorudur; Keras bugün TensorFlow ile birlikte gelir ve en sık kullanılan giriş yolu olarak görülür."
   ],
   [
    "TensorFlow hâlâ kullanılıyor mu?",
    "Evet, özellikle üretim sistemlerinde ve mobil ya da uç cihaz uygulamalarında yaygın olarak kullanılıyor. Yeni araştırma projelerinde ise PyTorch daha sık tercih ediliyor."
   ]
  ]
 },
 {
  "slug": "langchain",
  "term": "LangChain",
  "en": "LangChain",
  "match": [
   "=langchain"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Büyük dil modelleriyle çalışan uygulamaları kurmayı kolaylaştıran açık kaynaklı yazılım çerçevesi. Model çağrıları, belge arama ve araç kullanımı gibi parçaları hazır bileşenlerle birbirine bağlar.",
  "how": "Çerçeve; istem şablonları, model bağlantıları, belge yükleyiciler, vektör veri tabanı bağlantıları, bellek ve araçlar gibi bileşenler sunar. Geliştirici bunları zincir (chain) hâlinde birleştirir: kullanıcının sorusu alınır, ilgili belgeler bulunur, istemle birlikte modele verilir ve yanıt döndürülür. Ajan yapılarında ise model, hangi aracı ne zaman çağıracağına kendisi karar verir. Farklı model sağlayıcıları arasında geçiş görece kolaydır. Çerçeve Python ve JavaScript ile kullanılabilir.",
  "why": "Belgelerden bilgi getirip yanıt üreten sistemler ve ajanlar yaygınlaştıkça, bu parçaları baştan yazmadan hızlı prototip çıkarmak değerli hâle geldi. Bununla birlikte eleştiri de var: ek soyutlama katmanı kodu karmaşıklaştırabiliyor ve basit işler için gereksiz kalabiliyor. Bu yüzden bazı geliştiriciler model sağlayıcının arayüzünü doğrudan kullanmayı tercih ediyor.",
  "example": "Bir şirket, iç belgelerinden soru yanıtlayan bir sohbet botunu LangChain ile belge arama ve model çağrısını birbirine bağlayarak kısa sürede prototipliyor.",
  "faq": [
   [
    "LangChain bir yapay zeka modeli mi?",
    "Hayır. LangChain bir model değil, modellerle çalışan uygulamalar yazmak için kullanılan bir yazılım çerçevesidir. Altında OpenAI, Anthropic ya da açık modeller gibi farklı modeller çalışabilir."
   ],
   [
    "Büyük dil modeli uygulaması yazmak için LangChain kullanmak zorunlu mu?",
    "Hayır. Birçok uygulama model sağlayıcının kendi arayüzüyle doğrudan yazılabilir. LangChain, hazır bileşenlerle işi hızlandırmak isteyenler için bir seçenektir."
   ]
  ]
 },
 {
  "slug": "llama-cpp",
  "term": "llama.cpp",
  "en": "llama.cpp",
  "match": [
   "llama.cpp"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Büyük dil modellerini sıradan bilgisayarlarda, telefonlarda ve küçük sunucularda yerel olarak çalıştırmayı sağlayan, C/C++ ile yazılmış açık kaynaklı çıkarım kütüphanesi. Georgi Gerganov tarafından başlatılan proje, Llama modelleri için doğdu, sonra pek çok model ailesini desteklemeye başladı.",
  "how": "Model, GGUF biçiminde tek bir dosya olarak indirilir. llama.cpp bu dosyayı belleğe yükler ve yanıtı parça parça üretir. Bellek ve hız kazanmak için nicemleme (quantization) kullanılır: model ağırlıkları daha az bitle saklandığı için büyük modeller sınırlı belleğe sığar. Yazılım yalnızca işlemcide çalışabilir; istenirse modelin bir kısmı ekran kartına aktarılır. Komut satırı araçları ve yerel bir sunucu modu da sunar, böylece başka uygulamalar modele bağlanabilir.",
  "why": "Yerel çalıştırma, verinin kullanıcının kendi cihazından çıkmamasını, internet bağlantısı olmadan kullanımı ve bulut maliyetinden kaçınmayı sağlar. llama.cpp, açık ağırlıklı modellerin geniş kitlelere ulaşmasında önemli rol oynadı. Haberlerde kendi cihazında model çalıştırmaktan söz edildiğinde çoğunlukla bu türden bir altyapı söz konusudur.",
  "example": "Bir kullanıcı, nicemlenmiş küçük bir modeli GGUF dosyası olarak indirip dizüstü bilgisayarında llama.cpp ile çalıştırarak internet bağlantısı olmadan sohbet edebilir.",
  "faq": [
   [
    "llama.cpp ile Llama modeli aynı şey mi?",
    "Hayır. Llama, Meta'nın model ailesidir; llama.cpp ise modelleri çalıştıran bağımsız bir yazılımdır. Adı Llama'dan gelse de çok sayıda farklı modeli çalıştırabilir."
   ],
   [
    "llama.cpp için güçlü bir ekran kartı gerekir mi?",
    "Zorunlu değil. İşlemciyle de çalışır, ancak ekran kartı hızı belirgin biçimde artırabilir. Gereken bellek, seçilen modelin boyutuna ve nicemleme düzeyine bağlıdır."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-arkadasi",
  "term": "Yapay zeka arkadaşı (AI companion)",
  "en": "AI companion",
  "match": [
   "yapay zeka arkadaş",
   "yapay zeka yoldaş",
   "ai companion"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Kullanıcıyla sürekli sohbet eden, duygusal destek, arkadaşlık veya rol yapma sunmak üzere tasarlanmış yapay zeka uygulaması. Genellikle kalıcı bir kişilik, ad ve görünüm taşır ve önceki konuşmaları hatırlayacak şekilde kurgulanır.",
  "how": "Uygulamanın arkasında genellikle bir büyük dil modeli bulunur. Geliştiriciler modele bir kişilik tanımı, konuşma tarzı ve kurallar verir; uygulama da kullanıcının paylaştığı bilgileri bir tür hafızada saklayıp sonraki sohbetlerde bağlama ekler. Bazı ürünlerde sesli konuşma, avatar veya görsel de bulunur. Kullanıcı kendi karakterini seçebilir ya da oluşturabilir. Yanıtlar kişiye özel görünse de model gerçek bir duygu ya da ilişki yaşamaz, bağlama uygun sözcükleri üretir.",
  "why": "Bu uygulamaları çok sayıda insan kullanıyor. Yalnızlıkla başa çıkma ve sosyal beceri çalışması gibi olası yararların yanında duygusal bağımlılık, kişisel verilerin mahremiyeti ve genç kullanıcıların korunması gibi tartışmalar da gündemde. Düzenleyiciler ve araştırmacılar konuyu yakından izliyor.",
  "example": "Replika ve Character.AI bu alandaki bilinen uygulamalar arasındadır; kullanıcılar seçtikleri bir karakterle uzun süreli sohbetler yürütebilir.",
  "faq": [
   [
    "Yapay zeka arkadaşı ile sohbet botu arasındaki fark ne?",
    "Sohbet botu çoğunlukla bir iş görür, örneğin müşteri sorusu yanıtlar. Arkadaş uygulaması ise ilişki kurmaya, süreklilik ve kişilik hissi vermeye odaklanır."
   ],
   [
    "Yapay zeka arkadaşı kullanmak güvenli mi?",
    "Kişiye ve kullanım biçimine göre değişir. Paylaşılan kişisel verilerin nasıl saklandığına bakmak ve uygulamanın gerçek insan ilişkilerinin yerini almadığını akılda tutmak önerilir. Ciddi sıkıntı anlarında profesyonel destek gerekir."
   ]
  ]
 },
 {
  "slug": "gguf",
  "term": "GGUF",
  "en": "GPT-Generated Unified Format",
  "match": [
   "=gguf"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yapay zeka modellerinin ağırlıklarını ve gerekli bilgileri tek bir dosyada toplayan, özellikle yerel çalıştırma için yaygınlaşmış dosya biçimi. llama.cpp ekosistemi için geliştirildi ve nicemlenmiş modellerin dağıtımında sık kullanılır.",
  "how": "GGUF dosyası modelin sayısal ağırlıklarının yanında üst veri de taşır: model mimarisi, sözcük dağarcığı (tokenizer) ve bağlam uzunluğu gibi ayarlar aynı dosyanın içindedir. Böylece kullanıcı ayrı yapılandırma dosyalarıyla uğraşmadan tek dosyayı yazılıma verir. Biçim farklı nicemleme düzeylerini destekler; dosya adındaki Q4 ya da Q8 gibi ekler ağırlıkların kaç bitle saklandığına işaret eder. Dosya ayrıca belleğe verimli yüklenecek biçimde düzenlenmiştir.",
  "why": "Tek dosyalık düzen, modelleri paylaşmayı ve denemeyi kolaylaştırır. Hugging Face gibi platformlarda aynı modelin çok sayıda GGUF sürümü bulunur; bu sayede sınırlı belleğe sahip cihazlar için uygun bir seçenek bulunabilir. Yerel yapay zeka haberlerinde sık karşılaşılan bir terimdir.",
  "example": "Hugging Face'te bir modelin sayfasında Q4 ve Q8 etiketli iki GGUF dosyası görülebilir; ilki daha küçük ve hızlıdır, ikincisi genellikle özgün kaliteye daha yakındır.",
  "faq": [
   [
    "GGUF'un açılımı nedir?",
    "Genellikle GPT-Generated Unified Format olarak anılır; ancak adın kökeni konusunda farklı anlatımlar da dolaşır. Önemli olan, biçimin GGML'nin ardılı olması ve llama.cpp ile uyumlu tek dosyalık bir model paketi sunmasıdır."
   ],
   [
    "GGUF dosyasını her yazılım açabilir mi?",
    "Hayır. llama.cpp ve onu temel alan birçok araç açar, ancak eğitim odaklı birçok kod farklı biçimler bekler. Modeli kullanacak aracın GGUF'u desteklediğinden emin olmak gerekir."
   ]
  ]
 },
 {
  "slug": "automl",
  "term": "AutoML",
  "en": "automated machine learning",
  "match": [
   "=automl",
   "otomatik makine öğrenme"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Makine öğrenmesi modeli kurma sürecinin veri hazırlama, model seçimi ve ayar yapma gibi adımlarını otomatikleştiren yaklaşım ve araçlar. Amaç, uzman olmayanların da makul bir model elde etmesini ve uzmanların zamandan kazanmasını sağlamaktır.",
  "how": "Kullanıcı bir veri kümesi ve hedef belirler, örneğin bir müşterinin ayrılıp ayrılmayacağını tahmin etmek. AutoML aracı birçok algoritmayı ve ayar kombinasyonunu sırayla dener, her birini doğrulama verisinde ölçer ve en iyi sonuç verenleri seçer. Bazı araçlar veri temizleme, yeni özellik üretme ve birkaç modeli birleştirme adımlarını da üstlenir. Sonuçta kullanıma hazır bir model ya da onu üreten bir iş akışı elde edilir. Arama yöntemleri basit rastgele denemelerden daha akıllı optimizasyon tekniklerine uzanır.",
  "why": "Makine öğrenmesi projelerinde zamanın büyük kısmı denemeye ve ayara gider; AutoML bu yükü azaltır ve küçük ekiplerin tahmin modeli kurmasını kolaylaştırır. Yine de problemi doğru tanımlamak, veriyi anlamak ve sonuçları yorumlamak insana kalır. Otomasyon kötü veriyi düzeltmez.",
  "example": "Bir perakende şirketi satış tablosunu bir AutoML aracına yükleyip önümüzdeki haftanın talebini tahmin eden bir model alabilir; Google Cloud ve Microsoft Azure gibi bulut platformlarında bu tür hizmetler bulunur.",
  "faq": [
   [
    "AutoML veri bilimcilerin yerini alır mı?",
    "Pek sayılmaz. Standart tahmin işlerini hızlandırır, ancak problemi kurmak, veri kalitesini denetlemek ve sonuçların iş için anlamını yorumlamak hâlâ uzmanlık ister."
   ],
   [
    "AutoML ile hiperparametre ayarı aynı şey mi?",
    "Hayır. Hiperparametre ayarı AutoML'in bir parçasıdır. AutoML ayrıca veri hazırlama, algoritma seçimi ve model birleştirme gibi adımları da kapsayabilir."
   ]
  ]
 },
 {
  "slug": "ajan-becerileri",
  "term": "Ajan becerileri (skills)",
  "en": "agent skills",
  "match": [
   "ajan beceri",
   "agent skills"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yapay zeka ajanına belirli bir işi nasıl yapacağını öğreten, talimat, betik ve kaynak dosyalarından oluşan yeniden kullanılabilir paketler. Ajan bunları yalnızca ilgili görev geldiğinde yükler.",
  "how": "Bir beceri genellikle bir klasördür: içinde işin nasıl yapılacağını anlatan talimat metni, gerekirse çalıştırılabilir betikler ve örnek dosyalar bulunur. Ajan başlangıçta yalnızca becerilerin kısa adını ve açıklamasını bilir. Kullanıcının isteği bir beceriyle eşleşirse ajan o becerinin ayrıntılarını bağlamına alır ve talimatı izler. Böylece her şeyi baştan istemin içine koymak gerekmez ve bağlam penceresi gereksiz yere dolmaz. Beceriler paylaşılabilir ve güncellenebilir.",
  "why": "Beceriler, kurumların bilgi birikimini ajanlara düzenli ve tekrar kullanılabilir biçimde aktarmasının bir yolu olarak öne çıkıyor. Her görev için uzun istemler yazmak yerine bir kez hazırlanan paket ekip içinde paylaşılır ve ajanın tutarlı davranmasına yardım eder. Terimin kapsamı ve uygulaması ürüne göre değişebilir.",
  "example": "Bir şirket, aylık raporu kurumsal şablona göre hazırlayan bir beceri yazabilir: talimat, şablon dosyası ve tabloyu biçimlendiren bir betik içeren bu paket, ajan her rapor istendiğinde devreye girer.",
  "faq": [
   [
    "Ajan becerileri ile istem arasındaki fark ne?",
    "İstem, her konuşmada yazılan ya da yüklenen tek seferlik bir metindir. Beceri ise ayrı saklanan, betik ve dosya da içerebilen, ihtiyaç olduğunda ajanın kendisinin yüklediği pakettir."
   ],
   [
    "Beceri ile araç aynı şey mi?",
    "Hayır. Araç, ajanın çağırabileceği bir işlev ya da hizmettir, örneğin web araması. Beceri ise bir işin nasıl yapılacağını anlatır ve araçların nasıl kullanılacağını da içerebilir."
   ]
  ]
 },
 {
  "slug": "ajan-cercevesi",
  "term": "Ajan çerçevesi",
  "en": "agent framework",
  "match": [
   "ajan çerçeve",
   "agent framework"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yapay zeka ajanlarını kurmak için hazır yapı taşları sunan yazılım kütüphanesi ya da platformu. Modelle bağlantı, araç çağırma, hafıza ve adımların yönetimi gibi tekrar eden işleri geliştiricinin yerine üstlenir.",
  "how": "Çerçeve, dil modelini araçlar ve veriyle bir döngü içinde bağlar. Geliştirici ajana bir hedef, kullanabileceği araçlar ve kurallar tanımlar. Çerçeve modele isteği gönderir, modelin seçtiği aracı çalıştırır, sonucu modele geri verir ve görev bitene kadar bunu sürdürür. Çoğu çerçeve ayrıca hafıza, hata yönetimi, kayıt tutma ve birden çok ajanın birlikte çalışması için hazır bileşenler içerir. Bazıları iş akışını adım adım bir grafik olarak tanımlamaya izin verir.",
  "why": "Çerçeveler ajan geliştirmeyi hızlandırır, ancak seçim bir denge meselesidir: hazır yapı kolaylık sağlar, fazla soyutlama ise hata ayıklamayı zorlaştırabilir. Bu nedenle bazı ekipler çerçeve kullanır, bazıları doğrudan model arayüzleriyle kendi döngülerini yazar. Haberlerde ajan ekosistemi anlatılırken sık geçer.",
  "example": "LangChain, LangGraph ve CrewAI bu türün bilinen örnekleridir; bir geliştirici bunlardan biriyle e-postaları okuyup takvime işleyen basit bir ajan kurabilir.",
  "faq": [
   [
    "Ajan çerçevesi kullanmak zorunlu mu?",
    "Hayır. Basit ajanlar doğrudan bir model arayüzü ve birkaç satır kodla yazılabilir. Çerçeve, proje büyüdükçe ve izleme, hafıza, çoklu ajan gibi ihtiyaçlar çıktıkça daha yararlı olur."
   ],
   [
    "Ajan çerçevesi ile ajan aynı şey mi?",
    "Hayır. Ajan, hedefe yönelik adımlar atan yazılımdır; çerçeve ise ajanı kurmak için kullanılan araç takımıdır."
   ]
  ]
 },
 {
  "slug": "istem-kutuphanesi",
  "term": "İstem kütüphanesi",
  "en": "prompt library",
  "match": [
   "istem kütüphanesi",
   "prompt library"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Sık kullanılan ve denenmiş istemlerin (prompt) düzenli biçimde saklandığı, paylaşıldığı ve sürümlendiği koleksiyon. Kişisel bir not listesi olabileceği gibi şirket çapında yönetilen bir arşiv de olabilir.",
  "how": "Kütüphanede her istem bir ad, kısa açıklama, kullanım amacı ve değişken alanlarla kaydedilir; örneğin '{müşteri adı}' yerine her seferinde farklı bir ad konur. İstemler etiketlenir, aranabilir hâle getirilir ve değişiklikleri sürüm olarak izlenir. Gelişmiş kurulumlarda istemler test verisiyle denenir, hangisinin daha iyi çalıştığı ölçülür. Ekip üyeleri hazır istemi kopyalayıp kullanır, iyileştirmeleri geri paylaşır.",
  "why": "Aynı istemi her seferinde baştan yazmak zaman kaybıdır ve sonuçlar kişiden kişiye değişir. Kütüphane, iyi çalışan istemlerin kurum içinde yayılmasını, tutarlı çıktı almayı ve model değiştiğinde istemlerin yeniden sınanmasını kolaylaştırır. Kurumsal yapay zeka kullanımında bilgi birikiminin kişilere bağlı kalmamasını da sağlar.",
  "example": "Bir müşteri hizmetleri ekibi, yanıt taslağı hazırlama istemini ortak bir klasörde saklayabilir; her çalışan aynı yapıdaki istemi kullanıp yalnızca müşteri mesajını değiştirir.",
  "faq": [
   [
    "İstem kütüphanesi ile istem mühendisliği arasındaki fark ne?",
    "İstem mühendisliği, iyi istem yazma becerisi ve sürecidir. İstem kütüphanesi ise bu sürecin ürünü olan istemleri saklayan ve yöneten koleksiyondur."
   ],
   [
    "İstem kütüphanesi nerede tutulur?",
    "Basit bir belge ya da tablo olabilir; daha ileri düzeyde kod deposu veya özel istem yönetim araçları kullanılır. Önemli olan sürüm geçmişinin ve sahipliğin belli olmasıdır."
   ]
  ]
 },
 {
  "slug": "baglam-yonetimi",
  "term": "Bağlam yönetimi (sıkıştırma ve özetleme)",
  "en": "context management",
  "match": [
   "bağlam yönetim"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir yapay zeka modelinin bağlam penceresine hangi bilginin, ne kadar ve hangi biçimde konacağını belirleme işi. Uzun konuşmalarda eski içeriği sıkıştırmayı veya özetlemeyi de kapsar.",
  "how": "Modelin tek seferde işleyebileceği metin sınırlıdır ve konuşma uzadıkça bu sınıra yaklaşılır. Bağlam yönetimi bunu birkaç yolla çözer. Eski mesajlar kısa bir özete dönüştürülür; araç çıktılarından gereksiz kısımlar atılır; önemli bilgiler ayrı bir notta veya hafızada saklanıp gerektiğinde geri çağrılır. Bazı sistemler pencere dolmaya yaklaştığında konuşmayı otomatik özetleyip yeni bir pencereyle devam eder. Böylece model hem sınırın içinde kalır hem de asıl hedefi unutmaz.",
  "why": "Bağlam penceresi büyük olsa da sonsuz değildir; dolu bağlam maliyeti ve gecikmeyi artırır, çok uzun bağlamda modelin önemli ayrıntıları gözden kaçırma riski vardır. Uzun süren ajan görevlerinde bağlamın iyi yönetilmesi, işin tutarlı sürmesi için belirleyici hâle geliyor.",
  "example": "Saatlerce çalışan bir kodlama ajanı, ilk saatlerdeki ayrıntılı çıktıları birkaç cümlelik bir özetle değiştirip yalnızca güncel dosyaları ve yapılacaklar listesini bağlamda tutabilir.",
  "faq": [
   [
    "Sıkıştırma ile özetleme aynı şey mi?",
    "Birbirine yakındır. Özetleme içeriği kendi sözcüklerle kısaltır; sıkıştırma ise daha geniş bir terimdir ve gereksiz kısımları atmayı ya da kısaltmayı da içerir. Bazı ürünlerde ikisi aynı anlamda kullanılır."
   ],
   [
    "Bağlam yönetimi bilgi kaybına yol açar mı?",
    "Evet, özet bazı ayrıntıları atar. Bu yüzden kritik bilgiler genellikle ayrı bir not olarak korunur ve neyin özetlenebileceği dikkatle seçilir."
   ]
  ]
 },
 {
  "slug": "sesli-mod",
  "term": "Sesli mod",
  "en": "voice mode",
  "match": [
   "sesli mod",
   "voice mode"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yapay zeka asistanıyla yazı yerine konuşarak sohbet etmeyi sağlayan özellik; kullanıcının sesi metne çevrilir, yanıt da sesli olarak okunur ya da doğrudan ses olarak üretilir.",
  "how": "Klasik yöntemde üç aşama çalışır: konuşma tanıma sesi yazıya döker, dil modeli yanıtı üretir, ses sentezi bu yanıtı seslendirir. Daha yeni yaklaşımlarda sesi doğrudan işleyebilen modeller kullanılır; bu da gecikmeyi azaltır, tonlama ve duraksamaları yakalamayı kolaylaştırır. Kullanıcı konuşurken araya girebilir, model de yarıda kesilip yeni soruya geçebilir. Ürüne göre telefon ya da bilgisayar mikrofonu üzerinden çalışır; bu yüzden yazı yazmanın zor olduğu durumlarda da kullanılabilir.",
  "why": "Konuşmak yazmaktan hızlıdır ve klavye kullanamayan ya da elleri meşgul olanlar için erişimi genişletir. Asistanların araba, ev ve telefon gibi ortamlara yayılmasında sesli arayüzler belirleyici olur. Öte yandan ses kaydı, gizlilik ve taklit ses (deepfake) riskleri de bu özellikle birlikte gündeme gelir.",
  "example": "Mutfakta elleri hamurlu biri, telefondaki asistanın sesli modunu açıp tarifi adım adım dinleyebilir ve 'tereyağı yerine ne kullanayım?' diye sorabilir.",
  "faq": [
   [
    "Sesli mod ile klasik sesli komut aynı şey mi?",
    "Hayır. Klasik sesli komut 'alarm kur' gibi belirli kalıpları tanır. Sesli modda ise büyük bir dil modeli serbest konuşmayı anlar ve sohbet havasında yanıt verir."
   ],
   [
    "Sesli mod konuşmalarım kaydediliyor mu?",
    "Bu, ürüne ve ayarlara göre değişir. Bazı hizmetler ses kaydını ya da dökümünü saklayabilir; kullanmadan önce hizmetin gizlilik ayarlarına ve politikasına bakmak gerekir."
   ]
  ]
 },
 {
  "slug": "arka-plan-ajani",
  "term": "Arka plan ajanı",
  "en": "background agent",
  "match": [
   "arka plan ajan",
   "background agent"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Kullanıcı başka işle uğraşırken ya da çevrimdışıyken uzun süren görevleri kendi başına sürdüren yapay zeka ajanı; iş bitince sonucu bildirir.",
  "how": "Kullanıcı görevi tanımlar; ajan bunu adımlara böler, araçları kullanarak (kod yazma, web'de arama, dosya düzenleme gibi) çalışır ve ilerlemesini kaydeder. Genellikle kullanıcının bilgisayarından ayrı, bulutta izole bir ortamda çalışır; böylece ekran başında beklemek gerekmez. İş bittiğinde ya da bir noktada takıldığında bildirim gönderir. Aynı anda birden fazla ajan çalıştırmak da mümkündür. Sonuç çoğu üründe insan incelemesine sunulur; yani değişiklikler kullanıcı bakmadan kalıcı hale gelmez.",
  "why": "Sohbet tarzı yapay zekada insan her adımda yanıt bekler; arka plan ajanları ise işi devredip beklemeyi ortadan kaldırır. Yazılım geliştirme başta olmak üzere birçok alanda tek kişinin aynı anda yürütebileceği iş sayısını artırma potansiyeli taşır. Bunun karşılığında yetki, güvenlik ve hata denetimi soruları da büyür.",
  "example": "Bir yazılımcı akşam çıkarken ajana bir hata kaydını düzeltme görevini verir; sabah ajanın hazırladığı kod değişikliği incelenmeyi bekler.",
  "faq": [
   [
    "Arka plan ajanı ile sohbet botu arasındaki fark ne?",
    "Sohbet botu her mesajda kullanıcıyla karşılıklı ilerler. Arka plan ajanı ise tek bir görevi alıp uzun süre, kullanıcı olmadan sürdürür ve sonunda sonucu sunar."
   ],
   [
    "Arka plan ajanı denetimsiz çalışır mı?",
    "Genellikle izin verilen araçlar ve ortamla sınırlıdır; sonuçlar da çoğunlukla insan onayına sunulur. Yine de kapsam ürüne göre değiştiği için yetkilerin dikkatle ayarlanması gerekir."
   ]
  ]
 },
 {
  "slug": "talimat-takibi",
  "term": "Talimat takibi",
  "en": "instruction following",
  "match": [
   "talimat takib",
   "instruction following"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir yapay zeka modelinin kendisine verilen yönergeleri (biçim, uzunluk, ton, yasaklar gibi) doğru ve eksiksiz biçimde yerine getirme becerisi.",
  "how": "Dil modelleri ilk eğitimde metindeki kalıpları öğrenir; talimat takibi ise çoğunlukla sonraki aşamalarda geliştirilir. Model, talimat ve beklenen yanıt çiftleriyle ince ayar görür; ardından insanların yanıtları puanlamasına dayanan yöntemlerle (insan geri bildirimli pekiştirmeli öğrenme gibi) hangi yanıtın isteğe daha uygun olduğunu öğrenir. Başarı, talimatın açıklığına da bağlıdır: 'üç madde, her biri tek cümle' gibi net bir istek, belirsiz bir istekten daha güvenilir sonuç verir. Çok sayıda kuralın bir arada verildiği durumlarda modeller bazılarını kaçırabilir.",
  "why": "Bir model ne kadar bilgili olursa olsun, istenen biçimde ve sınırlar içinde yanıt vermiyorsa işe yaramaz. Şirketlerin yapay zekayı müşteri hizmetleri ya da otomasyon gibi süreçlere bağlaması, tutarlı ve öngörülebilir davranışa dayanır. Bu yüzden model karşılaştırmalarında talimat takibi sık ölçülen yeteneklerden biridir.",
  "example": "Bir kullanıcı 'metni yüz kelimeyi geçmeden, resmi bir dille ve madde işareti kullanmadan özetle' dediğinde model üç kuralı da uygularsa talimatı iyi takip etmiş sayılır.",
  "faq": [
   [
    "Talimat takibi ile istem mühendisliği (prompt engineering) aynı şey mi?",
    "Hayır. Talimat takibi modelin yeteneğidir; istem mühendisliği ise kullanıcının modelden iyi sonuç almak için isteği nasıl yazdığıyla ilgilidir. İkisi birbirini tamamlar."
   ],
   [
    "Model talimatı neden bazen yok sayar?",
    "Talimatlar çelişkili, belirsiz ya da çok uzun olabilir; model de sınırlı bir yeteneğe sahiptir. Ayrıca güvenlik kuralları bazı isteklerin önüne geçebilir."
   ]
  ]
 },
 {
  "slug": "konusma-tabanli-yapay-zeka",
  "term": "Konuşma tabanlı yapay zeka",
  "en": "conversational AI",
  "match": [
   "konuşma tabanlı yapay zeka",
   "conversational ai"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "İnsanlarla yazılı ya da sesli diyalog kurabilen yapay zeka sistemlerinin genel adı; sohbet botları, sesli asistanlar ve müşteri hizmetleri botları bu gruba girer.",
  "how": "Sistem önce kullanıcının söylediğini anlar: sesliyse konuşma yazıya çevrilir, ardından niyet ve bağlam çözülür. Sonra uygun yanıt üretilir; eski sistemlerde bu hazır senaryolardan seçilirken günümüzde çoğunlukla büyük dil modelleri yanıtı baştan yazar. Önceki mesajların hatırlanması diyaloğun tutarlı sürmesini sağlar. Gerekirse sistem rezervasyon ya da sipariş sorgulama gibi işlemleri yapmak için başka yazılımlara da bağlanır.",
  "why": "Müşteri hizmetlerinden eğitime, sağlıktan eğlenceye kadar birçok alanda insan ile makine arasında yaygın bir iletişim yolu olmaya başladı. Doğal dille konuşabilmek, yeni bir arayüz öğrenme zorunluluğunu azaltır. Öte yandan yanlış bilgi, kullanıcının karşısındakini insan sanması ve veri gizliliği gibi konular bu sistemlerin sorumlu tasarlanmasını gerektirir.",
  "example": "Bir bankanın web sitesindeki sanal asistana 'kredi kartı limitimi nasıl artırırım?' diye yazmak ya da ChatGPT ile sohbet etmek bu kategoriye girer.",
  "faq": [
   [
    "Konuşma tabanlı yapay zeka ile üretken yapay zeka aynı şey mi?",
    "Hayır, ama örtüşürler. Konuşma tabanlı yapay zeka diyalog kurmaya odaklanan sistemleri anlatır; üretken yapay zeka ise metin, görsel gibi içerik üreten modelleri. Günümüzdeki birçok sohbet botu ikisini birleştirir."
   ],
   [
    "Her sohbet botu yapay zeka mıdır?",
    "Hayır. Bazı botlar yalnızca önceden yazılmış kurallarla ve menülerle çalışır. Gerçek anlamda konuşma tabanlı yapay zeka, dili anlayıp yanıt üretmek için makine öğrenmesi kullanır."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-hizlandiricisi",
  "term": "Yapay zeka hızlandırıcısı",
  "en": "AI accelerator",
  "match": [
   "yapay zeka hızlandırıcı",
   "ai accelerator"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Yapay zeka modellerinin eğitimi ve çalıştırılması için gereken yoğun matematik hesaplarını, genel amaçlı işlemcilerden daha hızlı ve verimli yapmak üzere tasarlanmış donanım.",
  "how": "Sinir ağlarının hesapları ağırlıklı olarak matris çarpımlarından oluşur ve bunlar çok sayıda küçük işleme bölünüp aynı anda yapılabilir. Hızlandırıcılar bu paralel işlemi yürütmek için çok sayıda hesaplama birimi ve yüksek bellek bant genişliğiyle donatılır. Grafik işlem birimleri (GPU), Google'ın TPU'su gibi tensör işlemcileri ve çeşitli özel çipler bu sınıfa girer. Büyük modeller genellikle yüzlerce, hatta binlerce hızlandırıcının hızlı bağlantılarla birbirine bağlandığı kümelerde eğitilir.",
  "why": "Büyük yapay zeka modellerinin ne kadar hızlı geliştirilebileceği ve ne maliyetle sunulabileceği büyük ölçüde bu donanıma bağlıdır. Bu nedenle çip üretimi, ihracat kısıtları ve veri merkezi yatırımları sık sık yapay zeka haberlerinin konusu olur. Nvidia gibi çip şirketlerinin haberlerde sık yer almasının nedeni de budur.",
  "example": "Bir şirket yeni bir dil modelini eğitmek için veri merkezinde binlerce GPU'yu aynı kümede çalıştırır.",
  "faq": [
   [
    "GPU ile yapay zeka hızlandırıcısı aynı şey mi?",
    "Tam olarak değil. GPU, hızlandırıcıların en bilinen türüdür; ancak TPU gibi tensör işlemcileri ve diğer özel çipler de hızlandırıcı sayılır."
   ],
   [
    "Normal işlemci (CPU) neden yetmiyor?",
    "CPU az sayıda güçlü çekirdekle çeşitli işleri sırayla yapmakta iyidir. Yapay zeka hesapları ise çok sayıda basit işlemin aynı anda yapılmasını gerektirir; hızlandırıcılar bunun için tasarlanmıştır."
   ]
  ]
 },
 {
  "slug": "asic",
  "term": "ASIC (özel amaçlı çip)",
  "en": "application-specific integrated circuit",
  "match": [
   "=asic"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Genel amaçlı olmak yerine tek bir iş ya da iş sınıfı için tasarlanıp üretilen entegre devre; o işi esnek çiplerden daha verimli yapar ama başka işlere uyarlanması zordur.",
  "how": "Tasarım ekipleri çipin devrelerini hedef iş yüküne göre baştan çizer; gereksiz özellikler çıkarılır, gerekli hesaplar doğrudan donanıma işlenir. Yapay zekada örnek olarak Google'ın TPU'su gösterilir; bu çip sinir ağı hesaplarına odaklanır. Tasarım ve üretim hazırlığı pahalı ve uzun olduğundan yatırım ancak çipten çok sayıda üretilip yoğun kullanılacaksa mantıklı olur. Üretim sonrasında devre değiştirilemez; yazılım güncellemesiyle uyarlama ise sınırlıdır.",
  "why": "ASIC'ler aynı işi daha az enerjiyle ve daha düşük birim maliyetle yapabildiği için büyük bulut şirketlerinin GPU tedarikine bağımlılığı azaltma çabalarında sık anılır. Kendi çipini tasarlayan şirketler maliyet ve tedarik üzerinde daha fazla kontrol kazanır. Karşılığında esneklik kaybı ve yüksek ilk yatırım riski vardır.",
  "example": "Google'ın kendi veri merkezlerinde kullandığı TPU'lar ile bazı kripto para madencilik cihazlarındaki çipler ASIC'e örnektir.",
  "faq": [
   [
    "ASIC ile GPU arasındaki fark nedir?",
    "GPU çok çeşitli paralel işleri yapabilen esnek bir çiptir. ASIC ise tek bir işe göre tasarlandığı için o işte genellikle daha verimli, diğer işlerde ise yetersizdir."
   ],
   [
    "ASIC her zaman GPU'dan hızlı mıdır?",
    "Hayır. Hedeflenen işte verimlilik avantajı sağlayabilir, ama bu tasarıma ve iş yüküne bağlıdır. İş yükü değişirse ASIC'in avantajı kaybolabilir."
   ]
  ]
 },
 {
  "slug": "cpu",
  "term": "CPU (merkezi işlem birimi)",
  "en": "central processing unit",
  "match": [
   "=cpu",
   "merkezi işlem birim"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Bilgisayarın veya telefonun genel işleyişini yöneten, programların komutlarını sırayla çalıştıran ana işlemci; çeşitli işlere uyum sağlayan esnek bir çiptir.",
  "how": "CPU belleğe yüklenmiş komutları alır, çözer ve yürütür; bu döngü saniyede milyarlarca kez tekrarlanır. Birkaç ila çok sayıda güçlü çekirdeği bulunur ve her çekirdek karmaşık, dallanan işleri hızlı yapmak üzere tasarlanmıştır. İşletim sistemi, dosya işlemleri ve çoğu uygulama bu çekirdeklerde çalışır. Yapay zekada CPU; veri hazırlama, görev koordinasyonu ve küçük modellerin çalıştırılmasında görev alır. Ağır matris hesapları ise çoğunlukla hızlandırıcılara bırakılır.",
  "why": "Yapay zeka sistemlerinde hızlandırıcılar öne çıksa da her sunucuda onları yöneten bir CPU bulunur; veri akışı ve genel koordinasyon ona dayanır. Küçük modelleri yerel cihazlarda çalıştırmak ya da GPU kiralamak yerine CPU kullanmak da bazı durumlarda tercih edilir. CPU ile hızlandırıcı arasındaki iş bölümünü bilmek, donanım haberlerini anlamayı kolaylaştırır.",
  "example": "Bir sunucuda GPU'lar modeli çalıştırırken CPU gelen istekleri alır, verileri hazırlar ve sonuçları kullanıcıya iletir.",
  "faq": [
   [
    "CPU ile GPU arasındaki fark nedir?",
    "CPU az sayıda güçlü çekirdekle çeşitli işleri yönetir. GPU ise çok sayıda daha basit çekirdekle aynı türden hesapları aynı anda yapmakta iyidir; bu yüzden yapay zeka eğitiminde öne çıkar."
   ],
   [
    "Yapay zeka modelleri yalnızca CPU ile çalışabilir mi?",
    "Küçük modeller çalışabilir, ancak büyük modellerde bu çok yavaş kalır. Bu yüzden ağır işler genellikle GPU gibi hızlandırıcılara bırakılır."
   ]
  ]
 },
 {
  "slug": "tensor-cekirdegi",
  "term": "Tensör çekirdeği",
  "en": "tensor core",
  "match": [
   "tensör çekirdek",
   "tensor core"
  ],
  "cat": "Donanım ve altyapı",
  "def": "GPU içinde matris çarpımı gibi yapay zeka hesaplarını çok hızlı yapmak için tasarlanmış özel hesaplama birimi; Nvidia bu adı kendi grafik işlemcilerindeki birimler için kullanır.",
  "how": "Sinir ağlarının temel işlemi, sayı tablolarını (matrisleri) çarpıp toplamaktır; tensör ise bu tabloların çok boyutlu genel adıdır. Normal GPU çekirdekleri bunu tek tek sayılarla yaparken tensör çekirdeği küçük bir matris bloğunu tek adımda işler. Hız kazancının bir kısmı düşük duyarlıklı sayı biçimlerinden gelir: örneğin 16 bitlik ya da daha küçük sayılarla çalışmak yapay zeka için çoğu zaman yeterli doğruluğu verir ve belleği de azaltır. Yazılım kütüphaneleri, model kodundaki işleri bu çekirdeklere yönlendirir.",
  "why": "Büyük modellerin eğitim süresi ve çalıştırma maliyeti, bu tür özel birimlerin ne kadar verimli olduğuna bağlıdır. Modern yapay zeka GPU'larının geleneksel grafik işlemcilerden ayrışmasının başlıca nedenlerinden biri bu birimlerdir. Haberlerdeki çip karşılaştırmaları da çoğu zaman bu birimlerin hızına dayanır.",
  "example": "Bir sohbet botunun yanıt üretirken yaptığı milyarlarca çarpma-toplama işlemi, Nvidia GPU'larında çoğunlukla tensör çekirdeklerinde yürütülür.",
  "faq": [
   [
    "Tensör çekirdeği ile CUDA çekirdeği arasındaki fark nedir?",
    "CUDA çekirdekleri GPU'nun genel amaçlı paralel hesap birimleridir. Tensör çekirdekleri ise yalnızca matris işlemleri için özelleşmiştir ve bu işte çok daha hızlıdır."
   ],
   [
    "Tensör çekirdeği yalnızca Nvidia'da mı var?",
    "Terim Nvidia'ya aittir. Başka üreticilerin çiplerinde de benzer matris hesap birimleri bulunur, ancak bunlar farklı adlarla anılır."
   ]
  ]
 },
 {
  "slug": "cuda",
  "term": "CUDA",
  "en": "Compute Unified Device Architecture",
  "match": [
   "=cuda"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Nvidia'nın geliştirdiği, grafik işlemcilerin (GPU) oyun dışındaki yoğun hesaplamalar için de programlanmasını sağlayan yazılım platformu. Yapay zeka eğitiminde kullanılan birçok aracın altyapısını oluşturur.",
  "how": "GPU'lar binlerce küçük çekirdeğe sahiptir ve aynı işlemi çok sayıda veri üzerinde eşzamanlı yapmakta iyidir. CUDA, geliştiricinin bir işi küçük parçalara bölüp bu çekirdeklere dağıtmasına olanak tanıyan bir programlama modeli sunar. Platform derleyici, sürücü ve matematik kütüphanelerinden oluşur. PyTorch gibi yapay zeka çerçeveleri bu katmanı arka planda kullandığı için çoğu kullanıcı CUDA kodu yazmaz bile. CUDA yalnızca Nvidia donanımında çalışır.",
  "why": "Yıllar içinde geliştiriciler, kütüphaneler ve eğitim materyalleri CUDA etrafında toplandı. Bu birikim, Nvidia'nın yapay zeka çiplerindeki konumunu açıklarken sıkça anılır ve rakip çip üreticilerinin yazılım tarafında neden zorlandığı tartışmalarında öne çıkar. Bir projenin CUDA'ya bağımlı olması, başka donanıma geçişi de zorlaştırabilir.",
  "example": "Bir araştırmacı PyTorch'ta bir dil modeli eğittiğinde, hesaplamalar CUDA üzerinden Nvidia GPU'larına dağıtılır.",
  "faq": [
   [
    "CUDA bir programlama dili mi?",
    "Tam olarak değil; CUDA bir programlama modeli, derleyici ve kütüphane bütünüdür. Geliştiriciler genellikle C++ gibi dillere eklenen CUDA uzantılarıyla kod yazar."
   ],
   [
    "CUDA, AMD veya Intel GPU'larında çalışır mı?",
    "Hayır, CUDA Nvidia'ya özgüdür. AMD'nin ROCm gibi benzer amaçlı kendi yazılım yığınları vardır."
   ]
  ]
 },
 {
  "slug": "nvlink",
  "term": "NVLink",
  "en": "NVLink",
  "match": [
   "=nvlink"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Nvidia'nın aynı sunucudaki GPU'ları birbirine doğrudan ve yüksek hızda bağlamak için geliştirdiği bağlantı teknolojisi. Standart bilgisayar yollarından çok daha geniş veri aktarımı hedefler.",
  "how": "Normalde GPU'lar arasındaki veri trafiği genel amaçlı PCIe yolundan geçer. NVLink, GPU'lar arasında özel ve daha geniş bir yol açar; böylece çipler birbirinin belleğine hızlıca erişebilir. Birçok sunucuda GPU'lar, anahtar işlevi gören ayrı bir çip aracılığıyla bağlanır ve hepsi birbiriyle doğrudan konuşabilir. Büyük bir model tek GPU'nun belleğine sığmadığında parçalar farklı GPU'lara dağıtılır. Bu parçalar sürekli veri alışverişi yaptığından bağlantı hızı eğitimi doğrudan etkiler.",
  "why": "Modeller büyüdükçe darboğaz çoğu zaman işlemci gücünden çok veri taşıma hızında yaşanır. NVLink, Nvidia'nın yalnızca çip değil, birbirine bağlı bütün sistemler sattığını anlatan haberlerde sık geçer. Bağlantı katmanı, GPU'ların tek bir büyük hızlandırıcı gibi davranabilmesi için kritik görülür.",
  "example": "Birkaç GPU içeren bir Nvidia sunucusunda büyük bir dil modeli bölünerek çalıştırıldığında, GPU'lar ara sonuçları NVLink üzerinden birbirine iletir.",
  "faq": [
   [
    "NVLink ile PCIe arasındaki fark ne?",
    "PCIe, bilgisayardaki bileşenlerin ortak kullandığı genel bir veri yoludur. NVLink ise özellikle GPU'lar arası trafik için tasarlanmış, genellikle daha yüksek aktarım kapasitesi sunan özel bir bağlantıdır."
   ],
   [
    "NVLink sunucular arasında da kullanılır mı?",
    "NVLink esas olarak aynı sunucu ya da raf içindeki GPU'ları bağlar. Sunucular arası bağlantı için genellikle InfiniBand veya Ethernet gibi ağ teknolojileri kullanılır."
   ]
  ]
 },
 {
  "slug": "infiniband",
  "term": "InfiniBand",
  "en": "InfiniBand",
  "match": [
   "=infiniband"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Sunucuları birbirine çok düşük gecikmeyle ve yüksek hızla bağlamak için tasarlanmış ağ teknolojisi. Süper bilgisayarlarda ve büyük GPU kümelerinde sık kullanılır.",
  "how": "InfiniBand, sunucular arasında veri taşırken işlemcinin yükünü azaltan bir ağ yapısı kullanır. Bir sunucu, ağ kartı aracılığıyla başka bir sunucunun belleğine doğrudan veri yazabilir; bu yönteme uzaktan doğrudan bellek erişimi (RDMA) denir. Böylece araya giren yazılım katmanları azalır ve gecikme düşer. Ağdaki anahtarlar trafiği yönlendirir ve düzenli, kayıpsız bir aktarım hedeflenir. Yapay zeka eğitiminde yüzlerce GPU sürekli ara sonuç paylaştığından bu özellikler önem kazanır.",
  "why": "Büyük modellerin eğitimi tek makineye sığmaz; hızlı bir ağ olmadan binlerce GPU'nun toplam gücü boşa gidebilir. Bu yüzden ağ teknolojisi, veri merkezi yatırımlarında çip kadar belirleyici bir kalem sayılır. Ethernet tabanlı çözümlerle rekabeti de sektörde sık tartışılır.",
  "example": "Yüzlerce GPU'lu bir eğitim kümesinde sunucular, her adımda hesapladıkları değerleri InfiniBand ağı üzerinden birbirine gönderir.",
  "faq": [
   [
    "InfiniBand ile Ethernet arasındaki fark ne?",
    "Ethernet her yerde kullanılan genel amaçlı bir ağ standardıdır. InfiniBand ise yüksek başarımlı hesaplama için tasarlanmıştır ve düşük gecikme sunar. Ethernet de bu alanda gelişerek rekabet etmeye çalışıyor."
   ],
   [
    "InfiniBand yalnızca Nvidia'ya mı ait?",
    "InfiniBand açık bir endüstri standardıdır. Ancak Nvidia, Mellanox'u satın alarak bu alandaki ürün ailesini kendi çatısına kattı."
   ]
  ]
 },
 {
  "slug": "super-bilgisayar",
  "term": "Süper bilgisayar",
  "en": "supercomputer",
  "match": [
   "süper bilgisayar",
   "süperbilgisayar",
   "supercomputer"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Binlerce işlemciyi birbirine bağlayarak olağanüstü büyük hesaplamaları çözmek için kurulan, sıradan bilgisayarların çok üzerinde başarım sunan sistem.",
  "how": "Süper bilgisayar, çok sayıda sunucunun (düğümün) hızlı bir ağla birleştirilmesiyle oluşur. Her düğümde işlemciler, çoğu zaman da GPU'lar bulunur. Bir problem küçük parçalara ayrılır, parçalar düğümlere dağıtılır ve sonuçlar birleştirilir. Hava durumu tahmini, iklim modelleme, ilaç araştırması ve fizik simülasyonları klasik kullanım alanlarıdır. Başarım genellikle saniyede yapılan kayan noktalı işlem sayısıyla ölçülür ve TOP500 gibi listelerle sıralanır.",
  "why": "Yapay zeka şirketleri büyük modeller için süper bilgisayarlara benzeyen kümeler kurunca iki kavram arasındaki çizgi bulanıklaştı. Haberlerde süper bilgisayar ifadesi bazen pazarlama amacıyla da kullanılır. Ulusal yatırımlar ve bilimsel araştırma kapasitesi açısından da stratejik sayılır.",
  "example": "Bir ülkenin meteoroloji kurumu, hava tahminlerini süper bilgisayarda atmosfer simülasyonları çalıştırarak üretebilir.",
  "faq": [
   [
    "Süper bilgisayar ile GPU kümesi aynı şey mi?",
    "Tam olarak değil, ama örtüşürler. Süper bilgisayar bilimsel hesaplamalar için kurulan genel bir kavramdır; GPU kümesi ise çoğunlukla GPU'lardan oluşan bir yapıdır ve yapay zeka eğitimi için de kullanılır. Birçok modern süper bilgisayar GPU içerir."
   ],
   [
    "Süper bilgisayarla yapay zeka modeli eğitilebilir mi?",
    "Evet, GPU'lu süper bilgisayarlar model eğitimi için de kullanılıyor. Yine de yapay zekaya özel kurulan kümeler çoğu zaman bu işe göre optimize edilir."
   ]
  ]
 },
 {
  "slug": "gpu-kumesi",
  "term": "GPU kümesi",
  "en": "GPU cluster",
  "match": [
   "gpu küme",
   "gpu cluster"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Birbirine yüksek hızlı bir ağla bağlanmış çok sayıda sunucudaki GPU'ların tek bir büyük hesaplama kaynağı gibi çalıştırıldığı yapı.",
  "how": "Bir GPU kümesinde her sunucuda birkaç GPU bulunur; sunucular InfiniBand veya hızlı Ethernet gibi ağlarla birleştirilir. Bir model eğitilirken veri ya da model parçaları GPU'lara dağıtılır, her GPU kendi payını hesaplar ve sonuçlar düzenli aralıklarla eşitlenir. Bu işi bir iş planlayıcı yazılım yönetir: hangi işin hangi GPU'ları kullanacağını belirler. Kümenin verimi yalnızca GPU sayısına değil, ağın ve belleğin hızına da bağlıdır.",
  "why": "Büyük yapay zeka modellerini tek bir GPU ile eğitmek pratik değildir; kümeler bu yüzden yatırımların merkezindedir. Haberlerde bir şirketin kaç GPU'luk küme kurduğu, rekabet gücünün göstergesi olarak anılır. Maliyet, enerji tüketimi ve soğutma da bu yapının başlıca meseleleridir.",
  "example": "Bir yapay zeka şirketi, yeni bir dil modelini eğitmek için veri merkezinde binlerce GPU'yu aynı ağda birleştirip tek bir iş olarak çalıştırır.",
  "faq": [
   [
    "GPU kümesi kurmak için bulut kullanılabilir mi?",
    "Evet. Bulut sağlayıcıları GPU'ları saatlik veya uzun dönemli kiralıyor; böylece şirketler donanım satın almadan küme kullanabilir."
   ],
   [
    "GPU sayısı artınca hız aynı oranda artar mı?",
    "Genellikle artmaz. GPU'lar arasındaki veri alışverişi ve eşitleme yükü büyüdükçe verim kaybı oluşur; bu yüzden ağ kalitesi çok önemlidir."
   ]
  ]
 },
 {
  "slug": "hiper-olcekli-sirket",
  "term": "Hiper ölçekli şirket (hyperscaler)",
  "en": "hyperscaler",
  "match": [
   "hyperscaler",
   "hiper ölçekli"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Dünya çapında çok büyük veri merkezi ağları işleten, bulut hizmetlerini devasa ölçekte sunan ve gerektiğinde kapasitesini hızla artırabilen teknoloji şirketleri.",
  "how": "Hiper ölçekli şirketler binlerce sunucuyu kendi tasarladıkları veri merkezlerinde yönetir ve bu kapasiteyi müşterilere kiralayarak ya da kendi ürünlerini çalıştırarak değerlendirir. Ölçek büyüdükçe birim maliyet düşer; bu yüzden bazıları özel çip, ağ donanımı ve yazılım da geliştirir. Amazon Web Services, Microsoft Azure ve Google Cloud bu grubun bilinen örnekleridir. Yapay zeka donanımının en büyük alıcıları arasında bu şirketlerin bulunduğu sıkça dile getirilir.",
  "why": "Yapay zeka modellerini eğitmek ve sunmak çok büyük hesaplama kapasitesi gerektirdiğinden hiper ölçekli şirketler sektörün altyapı omurgasını oluşturur. Çip üreticilerinin satışları, enerji talebi ve veri merkezi yatırımları haberlerinde bu şirketlerin harcama kararları sık gündeme gelir. Küçük girişimler çoğu zaman bu şirketlerin kapasitesine bağımlıdır.",
  "example": "Bir girişim, kendi veri merkezini kurmak yerine bu şirketlerden birinden GPU kiralayarak modelini eğitir.",
  "faq": [
   [
    "Hiper ölçekli şirket ile bulut sağlayıcısı aynı şey mi?",
    "Çoğu zaman örtüşürler. Hiper ölçekli şirket terimi ölçeği vurgular, bulut sağlayıcısı ise sunulan hizmeti. Her bulut sağlayıcısı hiper ölçekli sayılmaz."
   ],
   [
    "Hangi şirketler hiper ölçekli sayılır?",
    "Amazon, Microsoft ve Google en sık anılanlardır. Meta gibi çok büyük veri merkezleri işleten şirketler de bu grupta değerlendirilir."
   ]
  ]
 },
 {
  "slug": "bulut-bilisim",
  "term": "Bulut bilişim",
  "en": "cloud computing",
  "match": [
   "bulut bilişim",
   "cloud computing"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Sunucu, depolama ve yazılım gibi bilişim kaynaklarının kullanıcının kendi cihazı yerine internet üzerinden uzaktaki veri merkezlerinden, ihtiyaç kadar kiralanarak kullanılması.",
  "how": "Bulut sağlayıcısı, veri merkezlerindeki donanımı sanallaştırarak birçok müşteriye paylaştırır. Kullanıcı bir panel ya da arayüz üzerinden istediği kadar sunucu, depolama veya GPU talep eder ve yalnızca kullandığı kadar öder. Hizmetler genellikle üç katmanda anlatılır: altyapı (IaaS), platform (PaaS) ve yazılım (SaaS). İhtiyaç azaldığında kaynaklar serbest bırakılır; böylece donanım satın alıp yönetme yükü ortadan kalkar.",
  "why": "Yapay zeka çalışmaları için gereken GPU kapasitesi pahalıdır ve edinmesi zordur; bulut bu kapasiteye kiralama yoluyla erişimi mümkün kılar. Birçok yapay zeka ürünü de bulut üzerinden API olarak sunulur. Veri gizliliği, maliyet ve sağlayıcıya bağımlılık ise kurumların bulutla ilgili temel kaygılarıdır.",
  "example": "Bir e-ticaret şirketi, kampanya döneminde sunucu sayısını artırıp dönem bitince azaltarak yalnızca kullandığı kapasite için öder.",
  "faq": [
   [
    "Bulut bilişim ile veri merkezi arasındaki fark ne?",
    "Veri merkezi, sunucuların bulunduğu fiziksel tesistir. Bulut bilişim ise bu tesislerdeki kaynakların internet üzerinden hizmet olarak sunulması modelidir."
   ],
   [
    "Buluttaki veriler güvenli midir?",
    "Güvenlik, sağlayıcının aldığı önlemlere ve müşterinin yaptığı yapılandırmaya birlikte bağlıdır. Doğru ayarlanmış bir bulut güvenli olabilir; ancak verinin tutulduğu yer ve mevzuat gereklilikleri ayrıca değerlendirilmelidir."
   ]
  ]
 },
 {
  "slug": "uc-bilisim",
  "term": "Uç bilişim (edge computing)",
  "en": "edge computing",
  "match": [
   "uç bilişim",
   "edge computing",
   "uç cihaz"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Verinin uzaktaki bir veri merkezine gönderilmeden, üretildiği yere yakın cihazlarda veya yerel sunucularda işlenmesi yaklaşımı.",
  "how": "Uç bilişimde hesaplama; telefon, kamera, araç ya da fabrikadaki küçük bir sunucu gibi veriye yakın noktalarda yapılır. Veri buluta gitmek zorunda kalmadığı için gecikme azalır ve ağ trafiği hafifler. Yapay zeka tarafında, önceden bulutta eğitilmiş küçük bir model cihaza yerleştirilir ve cihaz çıkarımı yerel olarak yapar. Bulut ile uç çoğu zaman birlikte çalışır: ağır eğitim bulutta, hızlı karar verme uçta gerçekleşir.",
  "why": "Gecikmenin kritik olduğu sürücüsüz araçlar, endüstriyel kameralar veya sağlık cihazları gibi alanlarda uç bilişim gerekli olabilir. Verinin cihazdan çıkmaması, gizlilik açısından da avantaj sağlayabilir. Cihaz üzerinde çalışan küçük yapay zeka modelleri haberlerde bu yüzden sık anılır.",
  "example": "Telefondaki bir ses tanıma özelliği, kaydı sunucuya göndermeden cihazın kendi işlemcisinde çalışabilir.",
  "faq": [
   [
    "Uç bilişim, bulut bilişimin yerini alır mı?",
    "Hayır, ikisi birbirini tamamlar. Büyük modellerin eğitimi ve yoğun depolama bulutta kalırken, anlık kararlar uçta alınır."
   ],
   [
    "Uç cihazlarda büyük dil modelleri çalışır mı?",
    "Küçültülmüş modeller telefon ve dizüstü gibi cihazlarda çalışabilir. En büyük modeller ise yoğun donanım gerektirdiği için genellikle bulutta çalıştırılır."
   ]
  ]
 },
 {
  "slug": "sivi-sogutma",
  "term": "Sıvı soğutma",
  "en": "liquid cooling",
  "match": [
   "sıvı soğutma",
   "liquid cooling"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Çiplerin ve sunucuların ürettiği ısının hava yerine bir sıvı aracılığıyla uzaklaştırıldığı soğutma yöntemi. Yoğun çalışan yapay zeka sunucularında giderek daha yaygın kullanılıyor.",
  "how": "Sıvı, ısıyı havadan çok daha etkili taşır. En yaygın yöntemde işlemcilerin ve hızlandırıcıların üzerine soğutma plakaları yerleştirilir; plakaların içinden geçen su ya da özel bir soğutucu sıvı ısıyı alıp bir ısı değiştiriciye götürür. Daldırmalı soğutmada ise sunucular elektriği iletmeyen bir sıvının içine batırılır. Isınan sıvı dışarıda soğutulur ve döngü yeniden başlar. Havayla soğutmada fanlar ısıyı oda havasına aktarır; bu yöntem yüksek güç yoğunluğunda yetersiz kalabilir.",
  "why": "Yapay zeka hızlandırıcıları çok yüksek güç çekiyor ve raf başına düşen ısı yükü hava soğutmanın sınırlarını zorluyor. Sıvı soğutma rafların daha sıkı yerleştirilmesine izin veriyor, fan enerjisini azaltabiliyor ve tesisin verimliliğini artırabiliyor. Bu yüzden yeni nesil yapay zeka veri merkezlerinin tasarımında sık geçen bir başlık.",
  "example": "Oyuncu bilgisayarlarında işlemcinin üzerine takılan su blokları aynı ilkeyi küçük ölçekte kullanır; büyük yapay zeka veri merkezlerinde ise aynı mantık yüzlerce rafa yayılır.",
  "faq": [
   [
    "Sıvı soğutma sunucuları suya batırmak mıdır?",
    "Çoğu zaman hayır. Yaygın yöntemde sıvı kapalı borularla çipin üzerindeki soğutma plakasına gider ve sunucunun içine dökülmez. Yalnızca daldırmalı soğutmada sunucular, elektriği iletmeyen özel bir sıvıya batırılır."
   ],
   [
    "Hava soğutma neden yapay zeka sunucularına yetmiyor?",
    "Çiplerin gücü arttıkça küçük bir alandan çıkan ısı da artıyor. Hava ısıyı sıvıya göre zayıf taşıdığı için çok güçlü fanlar ve geniş aralıklar gerekiyor; bu da bir noktadan sonra verimsiz ve yer açısından pahalı oluyor."
   ]
  ]
 },
 {
  "slug": "guc-kullanim-etkinligi",
  "term": "Güç kullanım etkinliği (PUE)",
  "en": "power usage effectiveness",
  "match": [
   "güç kullanım etkinliği",
   "=pue",
   "power usage effectiveness"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Bir veri merkezinin tükettiği toplam enerjinin, yalnızca bilişim ekipmanlarına giden enerjiye oranıyla hesaplanan verimlilik ölçütü. Değer 1'e ne kadar yakınsa tesis o kadar verimli sayılır.",
  "how": "Hesapta tesisin toplam elektrik tüketimi, sunucu, depolama ve ağ cihazlarının tükettiği elektriğe bölünür. Toplam tüketime soğutma, aydınlatma ve güç dönüşümündeki kayıplar gibi ek yükler de girer. 1,0 teorik alt sınırdır; yani tüm enerji doğrudan bilgi işleme gidiyordur. 1,5 ise bilişim için harcanan her birim enerjiye yarım birim daha eklendiği anlamına gelir. Değer genellikle yıllık ortalama olarak verilir, çünkü iklim ve mevsim soğutma ihtiyacını değiştirir.",
  "why": "Yapay zeka veri merkezlerinin elektrik talebi büyürken PUE, enerjinin ne kadarının asıl işe gittiğini gösteren en yaygın göstergelerden biri. Ancak yalnızca tesis yardımcı yüklerini ölçer; çiplerin verimliliğini, elektriğin kaynağını ya da su tüketimini anlatmaz. Karşılaştırmalarda bu sınırın akılda tutulması gerekir.",
  "example": "PUE'si 1,2 olan bir tesis, sunucuların harcadığı her 100 kilovatsaate karşılık yaklaşık 20 kilovatsaat ek enerji tüketiyor demektir.",
  "faq": [
   [
    "PUE düşükse veri merkezi çevre dostu mudur?",
    "Zorunlu olarak değil. PUE yalnızca bilişim dışındaki yüklerin oranını gösterir. Elektriğin yenilenebilir olup olmadığı, su kullanımı ve sunucuların kendi verimliliği bu ölçüte girmez."
   ],
   [
    "PUE 1'in altına inebilir mi?",
    "Hayır. Toplam enerji, bilişim ekipmanlarının tükettiği enerjiden küçük olamayacağı için oran en az 1'dir. Gerçek tesislerde değer 1'in üzerinde kalır."
   ]
  ]
 },
 {
  "slug": "gigavat-olcekli-veri-merkezi",
  "term": "Gigavat ölçekli veri merkezi",
  "en": "gigawatt-scale data center",
  "match": [
   "gigavat ölçekli",
   "gigavatlık veri merkez"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Elektrik kapasitesi bir gigavat mertebesine ulaşan, çoğunlukla büyük yapay zeka modellerinin eğitimi ve çalıştırılması için planlanan çok büyük veri merkezi ya da veri merkezi kampüsü.",
  "how": "Bu ölçekte tesis genellikle tek bir bina değil, aynı alanda yan yana yükselen birden çok binadan oluşan bir kampüs olur. Çok sayıda hızlandırıcı çip yüksek hızlı ağlarla birbirine bağlanıp büyük bir küme gibi çalıştırılır. Gücün sağlanması için şebeke bağlantısı, trafo merkezleri, yedek sistemler ve bazen tesise özel enerji üretimi gerekir. Isı yükü de çok yüksek olduğundan sıvı soğutma sık tercih edilir. Bir gigavat, büyük bir enerji santralinin çıkışı mertebesindedir.",
  "why": "Yapay zeka şirketlerinin büyüme planları artık çip sayısı kadar elektrik kapasitesiyle de anlatılıyor. Bu kampüsler şebekeye, elektrik fiyatlarına, suya ve arazi kullanımına ciddi yük bindirebiliyor. Destekleyenler yatırım ve istihdam getirisine, eleştirenler enerji ve çevre maliyetlerine dikkat çekiyor.",
  "example": "Bir gigavatlık tesis yıl boyunca kesintisiz tam yükle çalışsa yaklaşık 8,76 teravatsaat elektrik çeker; bu, küçük bir ülkenin yıllık tüketimiyle kıyaslanabilecek bir miktardır.",
  "faq": [
   [
    "Bir gigavat ne kadar güç demek?",
    "Bir gigavat bin megavat, yani bir milyar vattır. Karşılaştırma için, büyük bir enerji santrali biriminin çıkışı bu mertebededir."
   ],
   [
    "Bütün yapay zeka veri merkezleri gigavat ölçekli mi?",
    "Hayır. Çoğu veri merkezi onlarca ya da yüzlerce megavat düzeyindedir. Gigavat ölçeği, yalnızca en büyük şirketlerin planladığı veya inşa ettiği birkaç kampüs için söz konusudur."
   ]
  ]
 },
 {
  "slug": "yari-iletken",
  "term": "Yarı iletken",
  "en": "semiconductor",
  "match": [
   "yarı iletken"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Elektrik iletkenliği iletkenle yalıtkan arasında kalan ve kontrol edilebilen bir malzeme türü. Transistörlerin, dolayısıyla bütün modern çiplerin temel maddesidir.",
  "how": "Silikon gibi yarı iletkenlerin iletkenliği, içine çok az miktarda başka atom katılarak (katkılama) ve elektrik alan uygulanarak ayarlanabilir. Böylece malzeme akımı açıp kapatan bir anahtar gibi davranır. Transistör bu anahtarın çok küçük halidir; bir çipte milyarlarca transistör yan yana dizilerek hesap ve bellek işlevlerini yerine getirir. Çipler silikon pul üzerinde, ışıkla desenleme ve kimyasal işlemlere dayanan çok sayıda adımda üretilir.",
  "why": "Yapay zeka çipleri, bellekler ve ağ cihazları hep yarı iletkene dayanır. İleri düzey üretim kapasitesi az sayıda şirkette ve ülkede toplandığı için tedarik zinciri, ihracat kısıtları ve yatırım teşvikleri yapay zeka haberlerinde sık yer alır. Gündelik dilde sektörün kendisine de yarı iletken denir.",
  "example": "Bir akıllı telefondaki işlemci, bellek ve kamera sensörü yarı iletkenlerden yapılır; yapay zeka hızlandırıcıları da aynı temel malzeme sınıfına dayanır.",
  "faq": [
   [
    "Yarı iletken ile çip aynı şey mi?",
    "Tam olarak değil. Yarı iletken bir malzeme sınıfıdır; çip ise bu malzemeden üretilmiş devredir. Gündelik dilde ve haberlerde ikisi sık sık birbirinin yerine kullanılır."
   ],
   [
    "Yarı iletken yalnızca silikondan mı yapılır?",
    "Hayır. Silikon açık farkla en yaygın olanıdır, ancak galyum nitrür, silisyum karbür ve galyum arsenit gibi malzemeler de güç elektroniği, ışık ve yüksek frekans uygulamalarında kullanılır."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-cipi",
  "term": "Yapay zeka çipi",
  "en": "AI chip",
  "match": [
   "yapay zeka çip",
   "ai chip"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Yapay zeka modellerinin eğitimi ve çalıştırılması için gereken yoğun matris hesaplarını hızlı ve enerji açısından verimli yapmak üzere tasarlanmış ya da bu iş için uyarlanmış işlemci.",
  "how": "Sinir ağlarının hesabı büyük ölçüde çok sayıda sayının çarpılıp toplanmasına dayanır. Genel amaçlı işlemci işleri sırayla ve esnek biçimde yürütürken, yapay zeka çipleri bu çarpma ve toplama işlemlerini çok sayıda hesap biriminde aynı anda yapar. Veriyi hesap birimine taşımak da bir darboğaz olduğundan çipler çok hızlı belleklerle birlikte kullanılır. Grafik işlemciler (GPU) en yaygın örnektir; Google'ın TPU'su gibi bu iş için özel tasarlanmış çipler de vardır. Eğitim ve çıkarım (inference) için ayrı tasarımlar da görülebilir.",
  "why": "Büyük modellerin eğitim süresi ve maliyeti, büyük ölçüde bu çiplerin sayısına ve gücüne bağlı. Arz sınırlı olduğunda şirketlerin ürün planları da etkileniyor. Bu yüzden ihracat kısıtları, şirketlerin kendi çiplerini tasarlaması ve çip tedariki yapay zeka haberlerinin ana konularından biri.",
  "example": "Nvidia'nın veri merkezi GPU'ları ve Google'ın kendi TPU'ları, büyük dil modellerinin eğitildiği ve çalıştırıldığı çiplere verilen bilinen örneklerdir.",
  "faq": [
   [
    "GPU ile yapay zeka çipi aynı şey mi?",
    "GPU, yapay zeka çipi olarak en çok kullanılan türdür; ama her yapay zeka çipi GPU değildir. TPU gibi özel tasarlanmış hızlandırıcılar da aynı iş için kullanılır."
   ],
   [
    "Evdeki bilgisayarın grafik kartı yapay zeka işi görür mü?",
    "Küçük modeller için görür; birçok kişi modelleri kendi bilgisayarında çalıştırıyor. Büyük modellerin eğitimi içinse bellek miktarı ve çipler arası bağlantı hızı yetersiz kalır, bu yüzden veri merkezi çipleri kullanılır."
   ]
  ]
 },
 {
  "slug": "dokumhane",
  "term": "Dökümhane (foundry)",
  "en": "foundry",
  "match": [
   "dökümhane",
   "foundry"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Kendi çip tasarımı satmak yerine, başka şirketlerin tasarladığı çipleri sözleşmeyle üreten yarı iletken fabrikası. Böylece çip tasarımı ile üretimi farklı şirketlerin işi olabiliyor.",
  "how": "Kendi fabrikası olmayan çip tasarım şirketleri (fabless) devre tasarımını dökümhaneye gönderir. Dökümhane bu tasarımı silikon pullar üzerine katman katman işler, ardından pulları keser ve çipleri test eder. Müşteriler dökümhanenin sunduğu üretim süreci ve tasarım araçlarına uygun çalışır. Gelişmiş fabrikalar çok pahalı olduğu için dökümhane birçok müşteriye hizmet vererek maliyeti paylaştırır. Paketleme ve test aşamaları aynı şirkette ya da ayrı firmalarda yapılabilir.",
  "why": "En gelişmiş çiplerin üretimi yalnızca birkaç dökümhanede yapılabildiği için yapay zeka çiplerinin arzı bu fabrikalara bağlı. Bu da dökümhaneleri hem şirket stratejilerinin hem de ülkeler arası rekabetin odağına koyuyor. Yeni fabrika yatırımları ve devlet teşvikleri sık sık haber olur.",
  "example": "Nvidia çiplerini kendisi tasarlar, üretimi ise TSMC gibi bir dökümhanede yaptırır.",
  "faq": [
   [
    "Fabless şirket ne demek?",
    "Çip tasarlayıp satan ama kendi üretim fabrikası olmayan şirket demektir. Üretimi dökümhaneye yaptırır. Nvidia ve AMD bu modelin bilinen örnekleridir."
   ],
   [
    "Her çip şirketi dökümhane kullanır mı?",
    "Hayır. Bazı şirketler hem tasarım hem üretimi kendi içinde yapar; bunlara entegre üretici denir. Intel uzun süre bu modelin tipik örneği oldu, ancak dökümhane hizmeti de sunuyor."
   ]
  ]
 },
 {
  "slug": "uretim-sureci",
  "term": "Üretim süreci (nanometre)",
  "en": "process node",
  "match": [
   "=nanometre",
   "nm süreç",
   "process node"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Bir çipin hangi üretim teknolojisi nesliyle yapıldığını gösteren ad. Geleneksel olarak nanometreyle ifade edilir ve genelde küçük sayı, daha gelişmiş ve daha sık transistör dizilimi anlamına gelir.",
  "how": "Her yeni üretim süreci nesli, transistörlerin daha sık dizilmesine izin verir. Aynı alana daha çok transistör sığar; bu da hız ve enerji verimliliğinde artış sağlayabilir. Eskiden nanometre değeri transistörün gerçek bir boyutuna karşılık geliyordu; bugün ise büyük ölçüde nesil adı olarak kullanılıyor ve farklı üreticilerin aynı sayıyla anılan süreçleri birbirine denk olmayabiliyor. Gerçek karşılaştırmada transistör yoğunluğu gibi ölçütlere bakılır. İleri nesillerde yeni transistör yapıları ve aşırı mor ötesi (EUV) litografi makineleri gerekir.",
  "why": "Çipin hızı, enerji tüketimi ve maliyeti büyük ölçüde hangi süreçle üretildiğine bağlıdır. Yapay zeka çiplerinde daha gelişmiş süreçlere erişim rekabet avantajı sağlar. İhracat kısıtlamaları ve yatırım yarışı da en çok bu ileri süreçler etrafında şekilleniyor.",
  "example": "Bir çip üreticisi yeni modelini bir önceki nesilden daha gelişmiş süreçle ürettiğini duyurduğunda, aynı alana daha fazla transistör sığdırıp daha az enerjiyle daha yüksek performans hedeflediğini söylüyor demektir.",
  "faq": [
   [
    "Nanometre ne kadar küçüktür?",
    "Bir nanometre metrenin milyarda biridir; bir saç teli bundan on binlerce kat kalındır. Yine de günümüzde çip üretiminde kullanılan nanometre adları artık doğrudan bir transistör boyutunu göstermiyor."
   ],
   [
    "Küçük nanometre değeri her zaman daha iyi çip demek mi?",
    "Genellikle daha yüksek yoğunluk ve verimlilik anlamına gelir, ama maliyet de artar. Üstelik adlandırma üreticiden üreticiye değiştiği için farklı firmaların sayıları doğrudan kıyaslanamaz."
   ]
  ]
 },
 {
  "slug": "silikon-pul",
  "term": "Silikon pul (wafer)",
  "en": "wafer",
  "match": [
   "silikon pul",
   "=wafer"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Silikon kristalinden dilimlenmiş, yüzeyinde çiplerin üretildiği ince, yuvarlak ve parlak disk. Bir pul üzerinde aynı anda çok sayıda çip yer alır.",
  "how": "Önce çok saf silikon eritilir ve tek bir kristal halinde silindir biçiminde büyütülür. Bu silindir ince dilimlere kesilip cilalanır; ortaya çıkan disklere silikon pul denir. Pulun üzerine ışık, kimyasal aşındırma ve katkılama adımlarıyla devreler katman katman işlenir ve aynı desen pul üzerinde yan yana birçok kez tekrarlanır. Sonunda pul kesilir, çıkan her çip parçası (die) test edilip paketlenir. Günümüzde ileri fabrikalarda yaygın pul çapı 300 milimetredir.",
  "why": "Fabrikaların kapasitesi sıklıkla aylık pul sayısıyla anlatılır, bu nedenle çip arzı haberlerinde pul sözcüğü sık geçer. Her pulun kaç sağlam çip verdiği, yani verim, maliyeti belirler. Büyük yapay zeka çipleri pulda az yer kapasitesi sağlar ve hatalardan daha kolay etkilenir; bu da maliyetlerini artırır.",
  "example": "300 milimetrelik bir pulun üzerinden küçük bir telefon işlemcisinden yüzlerce çıkabilirken, çok büyük bir yapay zeka çipinden çok daha az sayıda çıkar.",
  "faq": [
   [
    "Silikon pul neden yuvarlaktır?",
    "Silikon kristali silindir biçiminde büyütüldüğü için dilimler de yuvarlak çıkar. Dikdörtgen çipler yuvarlak pula tam sığmadığından kenarlarda bir miktar boşluk kalır."
   ],
   [
    "Pul ile çip (die) arasındaki fark nedir?",
    "Pul, üzerinde birçok çipin üretildiği büyük disktir. Üretim bitince pul kesilir ve ortaya çıkan her bir parçaya çip ya da teknik adıyla die denir."
   ]
  ]
 },
 {
  "slug": "euv-litografi",
  "term": "EUV litografi",
  "en": "extreme ultraviolet lithography",
  "match": [
   "=euv"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Silikon yonga üzerine çok küçük devre desenlerini basmak için 13,5 nanometre dalga boyunda aşırı mor ötesi ışık kullanan üretim tekniği. En gelişmiş yapay zeka ve işlemci çiplerinin üretiminde kullanılır.",
  "how": "Işık kaynağında kalay damlacıkları lazerle vurularak çok sıcak bir plazmaya dönüştürülür ve bu plazma EUV ışığı yayar. Bu ışık havada ve cam merceklerde soğurulduğu için makine vakumda çalışır, ışık da merceklerle değil özel aynalarla yönlendirilir. Işık, devre desenini taşıyan bir maskeden yansıyarak silikon dilimin üzerindeki ışığa duyarlı kimyasal tabakaya düşer ve deseni küçülterek oraya basar. Sonraki aşamalarda aşındırma ve kaplama işlemleriyle desen gerçek devreye dönüşür.",
  "why": "Çiplerin daha fazla transistör barındırması, büyük ölçüde bu kadar ince desenlerin basılabilmesine bağlı. EUV makinelerinin ticari ölçekte üretimini yalnızca Hollandalı ASML yapıyor; bu yüzden teknoloji, çip tedarik zinciri ve ihracat denetimi tartışmalarında sık anılıyor.",
  "example": "TSMC ve Samsung gibi dökümhaneler en gelişmiş üretim süreçlerinde ASML'in EUV makinelerini kullanır; Nvidia gibi şirketlerin tasarladığı yapay zeka çiplerinin bir bölümü de bu süreçlerle üretilir.",
  "faq": [
   [
    "EUV ile eski litografi arasındaki fark ne?",
    "Eski sistemlerde 193 nanometre dalga boylu derin mor ötesi ışık kullanılır. Daha kısa dalga boyu daha ince desen demektir; eski yöntemle aynı inceliğe ulaşmak için deseni birkaç kez üst üste basmak gerekir."
   ],
   [
    "EUV makinelerini neden çok az şirket üretebiliyor?",
    "Makine; çok hassas bir ışık kaynağı, özel aynalar ve vakum sistemleri gerektiren binlerce parçadan oluşuyor. Geliştirilmesi onlarca yıl ve çok büyük yatırım aldı."
   ]
  ]
 },
 {
  "slug": "gelismis-paketleme",
  "term": "Gelişmiş paketleme (CoWoS)",
  "en": "advanced packaging",
  "match": [
   "gelişmiş paketleme",
   "=cowos",
   "advanced packaging"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Birden fazla çipin, örneğin işlemci ile bellek yığınlarının, tek bir paket içinde birbirine çok yakın ve çok sayıda bağlantıyla yerleştirilmesi. CoWoS, TSMC'nin bu alandaki bilinen tekniklerinden biridir.",
  "how": "CoWoS'ta (Chip on Wafer on Substrate) işlemci ve bellek çipleri, silikondan yapılmış ince bir ara katmanın (interposer) üzerine yan yana dizilir. Bu katman, çipler arasında normal devre kartı yollarından çok daha yoğun ve kısa bağlantılar sağlar. Ara katman da bir taban malzemesine (substrate) oturur ve dış dünyayla bağlantı oradan kurulur. Böylece bir yapay zeka hızlandırıcısındaki grafik işlemci ile yüksek bant genişlikli bellek (HBM), neredeyse tek çipmiş gibi hızlı veri alışverişi yapabilir.",
  "why": "Yapay zeka hızlandırıcılarının performansı yalnızca işlemci çipine değil, belleğe ne kadar hızlı erişildiğine de bağlı. Paketleme bu yüzden çip üretimi kadar önemli hâle geldi; gelişmiş paketleme kapasitesi, hızlandırıcı arzında zaman zaman darboğaz olarak anıldı.",
  "example": "Nvidia'nın veri merkezi grafik işlemcileri, işlemci çipini HBM bellek yığınlarıyla aynı pakette birleştirmek için TSMC'nin CoWoS gibi gelişmiş paketleme tekniklerinden yararlanır.",
  "faq": [
   [
    "Paketleme ile çip üretimi aynı şey mi?",
    "Hayır. Çip üretimi silikon dilim üzerinde transistörlerin oluşturulmasıdır; paketleme ise hazır çiplerin birleştirilmesi, korunması ve dış dünyaya bağlanmasıdır."
   ],
   [
    "CoWoS'u yalnızca TSMC mi yapıyor?",
    "CoWoS, TSMC'nin kendi tekniğine verdiği addır. Intel ve Samsung gibi başka şirketlerin de benzer amaçlı, farklı adlı paketleme teknolojileri var."
   ]
  ]
 },
 {
  "slug": "ciplet",
  "term": "Çiplet",
  "en": "chiplet",
  "match": [
   "çiplet",
   "chiplet"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Büyük bir çipi tek parça üretmek yerine, her biri belirli bir işi yapan küçük çip parçalarını tek pakette birleştirme yaklaşımı ya da bu küçük parçaların kendisi.",
  "how": "Tasarımcı işlemciyi hesaplama, bellek denetimi, giriş-çıkış gibi bölümlere ayırır ve her bölümü ayrı bir küçük çip olarak üretir. Bu parçalar gelişmiş paketleme teknikleriyle aynı taban üzerinde birbirine bağlanır. Her parça işine uygun süreçte yapılabilir; örneğin hesaplama bölümü en yeni süreçte, giriş-çıkış bölümü daha eski ve ucuz süreçte üretilir. Parçalar arasındaki bağlantı yeterince hızlı olduğunda sonuç, tek bir büyük çip gibi çalışır.",
  "why": "Çip büyüdükçe üretimde kusurlu çıkma olasılığı artar ve verim düşer. Küçük parçalar bu riski azaltır, aynı parçaların farklı ürünlerde yeniden kullanılmasına da izin verir. Yapay zeka hızlandırıcılarında ise tek bir çipin fiziksel boyut sınırını aşmanın yolu olarak öne çıkıyor.",
  "example": "AMD, Ryzen ve EPYC işlemcilerinde çiplet yaklaşımını kullanır; birden fazla küçük hesaplama çipini tek pakette birleştirir.",
  "faq": [
   [
    "Çiplet ile sistem-çip (SoC) arasındaki fark ne?",
    "SoC bütün bölümleri tek bir silikon parça üzerinde toplar. Çiplet yaklaşımında ise bölümler ayrı parçalardır ve pakette birleştirilir."
   ],
   [
    "Çipletlerin dezavantajı var mı?",
    "Parçalar arası bağlantı, tek çip içindeki bağlantıdan genellikle daha yavaştır ve daha fazla enerji harcar. Paketleme de daha karmaşık ve pahalı olabilir."
   ]
  ]
 },
 {
  "slug": "bellek-bant-genisligi",
  "term": "Bellek bant genişliği",
  "en": "memory bandwidth",
  "match": [
   "bellek bant genişliği",
   "memory bandwidth"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Belleğin işlemciyle saniyede ne kadar veri alıp verebildiğini gösteren ölçü; genellikle saniyede gigabayt (GB/s) ya da terabayt (TB/s) olarak verilir.",
  "how": "Bant genişliği, bellek ile işlemci arasındaki yolun genişliğine ve bu yolun veri aktarma hızına bağlıdır. Yolu geniş bir otoyola benzetmek mümkün: şerit sayısı ve araçların hızı arttıkça saniyede geçen yük de artar. Yüksek bant genişlikli bellek (HBM) gibi çözümler belleği işlemciye çok yakın yerleştirir ve çok sayıda paralel bağlantı kullanır. Bir yapay zeka modeli çalışırken ağırlıklarını sürekli bellekten okuması gerektiğinden, bu hız doğrudan çalışma hızını etkiler.",
  "why": "Büyük dil modelleri yanıt üretirken çoğu zaman işlemcinin hesap gücünden çok, belleğin veriyi ne kadar hızlı yetiştirdiğiyle sınırlanır. Bu nedenle bir hızlandırıcının TOPS ya da FLOP değeri tek başına yeterli bir ölçüt değildir; bant genişliği de hız ve maliyet hesabında belirleyici olur.",
  "example": "Bir sohbet modeli her yeni parçayı (token) üretirken milyarlarca parametreyi bellekten okumak zorundadır; belleği daha hızlı olan bir ekran kartı, aynı modelde genellikle daha hızlı yanıt verir.",
  "faq": [
   [
    "Bellek bant genişliği ile bellek kapasitesi aynı şey mi?",
    "Hayır. Kapasite ne kadar veri saklanabileceğini (GB), bant genişliği ise o verinin ne kadar hızlı taşınabileceğini (GB/s) gösterir."
   ],
   [
    "Bant genişliği ile gecikme arasındaki fark ne?",
    "Gecikme, verinin istenmesinden ilk verinin gelmesine kadar geçen süredir. Bant genişliği ise birim zamanda akan toplam veri miktarıdır."
   ]
  ]
 },
 {
  "slug": "dram",
  "term": "DRAM",
  "en": "dynamic random-access memory",
  "match": [
   "=dram"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Her veri bitini küçük bir kapasitörde elektrik yükü olarak saklayan, güç kesilince verisini kaybeden ve bilgisayarların ana belleğinde kullanılan bellek türü.",
  "how": "DRAM'de her bit, bir transistör ve bir kapasitörden oluşan hücrede tutulur; kapasitör doluysa bit bir, boşsa sıfır sayılır. Kapasitördeki yük zamanla sızdığı için hücrelerin bilgisi çok kısa aralıklarla okunup yeniden yazılır; addaki dinamik sözcüğü bu tazelemeden gelir. Yapısı basit olduğundan küçük alana çok bit sığar ve görece ucuzdur. Yapay zeka donanımında üst üste dizilen DRAM çipleri, yüksek bant genişlikli belleğin (HBM) temelini oluşturur.",
  "why": "Bir yapay zeka modelinin ağırlıkları ve çalışma sırasındaki ara verileri belleğe sığmak zorunda olduğundan DRAM, hem kapasite hem hız bakımından modellerin çalışabileceği sınırı belirler. HBM talebi arttıkça DRAM üreticileri haberlerde sık yer alıyor; Samsung, SK hynix ve Micron bu pazarın başlıca oyuncuları.",
  "example": "Bir dizüstü bilgisayardaki 16 GB RAM çoğunlukla DRAM çiplerinden oluşur; bir model çalıştırıldığında ağırlıkları önce depolamadan bu belleğe yüklenir.",
  "faq": [
   [
    "DRAM ile SRAM arasındaki fark ne?",
    "SRAM veriyi transistör devreleriyle tutar, tazeleme gerektirmez ve çok hızlıdır; ama daha fazla yer kaplar ve pahalıdır, bu yüzden işlemci önbelleklerinde kullanılır. DRAM daha yoğun ve ucuzdur, ana bellek olarak kullanılır."
   ],
   [
    "DRAM ile SSD aynı şey mi?",
    "Hayır. DRAM geçici ve hızlı bir çalışma belleğidir. SSD ise flash bellekle veriyi güç kesilince de saklayan, daha yavaş bir depolama birimidir."
   ]
  ]
 },
 {
  "slug": "vram",
  "term": "VRAM (ekran kartı belleği)",
  "en": "video RAM",
  "match": [
   "=vram"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Ekran kartının kendi üzerinde bulunan, grafik işlemcinin (GPU) doğrudan eriştiği hızlı bellek. Yapay zekada modelin ağırlıklarını ve hesaplama sırasındaki ara verileri tutar.",
  "how": "GPU hesap yaparken verinin işlemciye yakın ve hızlı bir bellekte durması gerekir; bunun için kartın üzerine ayrı bellek çipleri yerleştirilir. Bir model çalıştırılacağı zaman ağırlıklar önce VRAM'e yüklenir. Gereken yer, parametre sayısına ve sayıların kaç bitle tutulduğuna bağlıdır; sohbet geçmişi için ayrılan önbellek de yer kaplar. Model VRAM'e sığmazsa ya hiç çalışmaz ya da yavaş ana belleğe taşan kısım yüzünden çok yavaşlar. Nicemleme (quantization) gibi yöntemler gereken yeri azaltır.",
  "why": "Yerel olarak yapay zeka modeli çalıştırmak isteyenler için ekran kartı seçerken ilk bakılan değer çoğu zaman VRAM miktarıdır. Veri merkezlerinde de hızlandırıcı başına düşen bellek, hangi büyüklükteki modelin tek kartta çalışabileceğini belirler.",
  "example": "Yaklaşık yedi milyar parametreli bir model 16 bitlik sayılarla tutulursa yalnızca ağırlıkları için kabaca 14 GB yer ister; 8 GB VRAM'li bir kartta bu hâliyle çalışmaz.",
  "faq": [
   [
    "VRAM ile RAM arasındaki fark ne?",
    "RAM, işlemcinin ana belleğidir. VRAM ise ekran kartına özeldir ve GPU'ya çok daha yüksek hızla veri sağlar."
   ],
   [
    "VRAM yetmezse ne olur?",
    "Model ya hata verir ya da bir kısmı ana belleğe aktarılarak çalışır. İkinci durumda hız genellikle belirgin biçimde düşer."
   ]
  ]
 },
 {
  "slug": "tops",
  "term": "TOPS",
  "en": "trillion operations per second",
  "match": [
   "=tops"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Bir çipin saniyede kaç trilyon işlem yapabildiğini gösteren ölçü; özellikle telefon ve dizüstü bilgisayarlardaki yapay zeka işlemcilerinin (NPU) gücünü anlatmak için kullanılır.",
  "how": "TOPS, çipin saniyede yapabileceği en yüksek işlem sayısının trilyon cinsinden ifadesidir. Değer, çipteki işlem birimi sayısı ile çalışma hızından çıkarılan kuramsal bir tavandır. İşlemler genellikle 8 bitlik tam sayılar gibi düşük hassasiyetli sayılarla yapılır, çünkü yapay zekanın çalıştırılmasında bu çoğu zaman yeterlidir. Hangi sayı türünün esas alındığı belirtilmeden verilen TOPS değerleri bu yüzden birbiriyle kolayca karşılaştırılamaz.",
  "why": "Yeni cihazların tanıtımında yapay zeka performansı çoğunlukla TOPS ile duyurulur. Oysa gerçek hız belleğe, yazılıma ve modele de bağlı olduğundan bu rakam tek başına cihazın yapay zeka işlerini ne kadar iyi yürüteceğini söylemez.",
  "example": "İki dizüstü bilgisayarın tanıtım sayfasında farklı TOPS değerleri yazsa bile, biri 8 bitlik, diğeri 4 bitlik sayılarla ölçülmüşse bu rakamlar aynı işi yansıtmaz.",
  "faq": [
   [
    "TOPS ile FLOPS arasındaki fark ne?",
    "TOPS her türlü işlemi, çoğunlukla tam sayı işlemlerini sayar; FLOPS ise yalnızca ondalıklı sayı işlemlerini. Büyük hızlandırıcılarda FLOPS, cihaz üstü NPU'larda ise TOPS daha yaygın kullanılır."
   ],
   [
    "Yüksek TOPS her zaman daha hızlı yapay zeka demek mi?",
    "Hayır. TOPS kuramsal bir tavandır. Bellek bant genişliği, yazılım desteği ve modelin yapısı gerçek hızı belirler."
   ]
  ]
 },
 {
  "slug": "flop",
  "term": "FLOP (kayan nokta işlemi)",
  "en": "floating-point operation",
  "match": [
   "=flop",
   "=flops"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Ondalıklı sayılarla yapılan tek bir toplama, çıkarma, çarpma ya da bölme işlemi. Yapay zekada bir modelin eğitiminin ya da çalıştırılmasının ne kadar hesaplama gerektirdiğini ölçmek için kullanılır.",
  "how": "Sinir ağı eğitimi, ondalıklı sayıların çok sayıda çarpılıp toplanmasından oluşur; bunların her biri bir FLOP sayılır. Bir eğitim sürecinin toplam hesaplama miktarı FLOP ile, bir donanımın hızı ise saniyedeki FLOP anlamına gelen FLOPS (ya da FLOP/s) ile verilir. Sondaki S çoğul eki değil saniye demektir ve bu karışıklık sık yaşanır. Değerler tera (on üzeri on iki), peta, exa gibi öneklerle ifade edilir. Bir model için gereken toplam FLOP bilindiğinde, donanımın hızına bölünerek kabaca süre kestirilir.",
  "why": "Eğitimde harcanan hesaplama miktarı, modeller arasındaki ölçek farkını parametre sayısından daha doğrudan gösteren ölçütlerden biridir. Bazı düzenlemeler ve politika önerileri de belirli bir hesaplama miktarını aşan modeller için ek yükümlülükler öngörür; bu yüzden FLOP haberlerde ve mevzuat tartışmalarında geçer.",
  "example": "Bir şirketin yeni modeli için harcanan toplam hesaplamanın FLOP olarak açıklanması modelin ölçeğinin başka modellerle kıyaslanmasını sağlar; kullanılan ekran kartının hızı ise teraFLOPS gibi bir değerle verilir.",
  "faq": [
   [
    "FLOP ile FLOPS aynı şey mi?",
    "Hayır. FLOP işlem sayısını, FLOPS ise saniyedeki işlem sayısını, yani hızı gösterir."
   ],
   [
    "FLOP ile TOPS arasındaki fark ne?",
    "FLOP yalnızca ondalıklı sayı işlemlerini sayar; TOPS çoğunlukla tam sayı işlemlerini sayar. İkisini kıyaslarken hangi sayı türünün kullanıldığına bakmak gerekir."
   ]
  ]
 },
 {
  "slug": "noromorfik-cip",
  "term": "Nöromorfik çip",
  "en": "neuromorphic chip",
  "match": [
   "nöromorfik"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Beynin sinir hücrelerinden ve bağlantılarından esinlenen, işlem ile belleği aynı yerde tutan ve yalnızca bir olay olduğunda çalışan özel bir bilgisayar çipi.",
  "how": "Geleneksel çiplerde işlem birimi ile bellek ayrıdır ve veri bu ikisi arasında sürekli gidip gelir. Nöromorfik çiplerde yapay nöronlar ve sinapslar doğrudan donanım olarak yer alır; bellek ve işlem iç içedir. Nöronlar çivi (spike) denen kısa sinyallerle haberleşir ve yalnızca girdi değiştiğinde etkinleşir. Bu yüzden ortam durağanken neredeyse hiç enerji harcanmaz. Çipin programlanması ve öğrenmesi de klasik yazılımdan farklı yöntemler ister.",
  "why": "Yapay zeka modellerinin enerji iştahı büyürken, çok az güçle çalışan donanım arayışı hız kazandı. Nöromorfik çipler pille çalışan sensörler, robotlar ve uç cihazlar için umut verici görülüyor. Ancak yazılım altyapısı sınırlı olduğu için bugün büyük ölçekli yapay zeka işlerinde GPU'ların yerini almış değil.",
  "example": "Intel'in Loihi çipi, araştırmacılara robot kontrolü ve sensör verisi işleme gibi denemeler için sunuldu.",
  "faq": [
   [
    "Nöromorfik çip ile GPU arasındaki fark nedir?",
    "GPU, çok sayıda hesabı paralel yürüten genel amaçlı bir hızlandırıcıdır ve sürekli çalışır. Nöromorfik çip ise beyni taklit eden yapısıyla yalnızca olay olduğunda çalışır ve çok daha az enerji harcamayı hedefler."
   ],
   [
    "Nöromorfik çipler ChatGPT gibi modelleri çalıştırabilir mi?",
    "Bugünkü büyük dil modelleri GPU'lara göre tasarlandı. Nöromorfik çipler farklı bir programlama anlayışı gerektirdiğinden şimdilik daha çok araştırma ve küçük, düşük güçlü uygulamalarda deneniyor."
   ]
  ]
 },
 {
  "slug": "kuantum-bilisim",
  "term": "Kuantum bilişim",
  "en": "quantum computing",
  "match": [
   "kuantum bilişim",
   "kuantum bilgisayar",
   "quantum computing"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Klasik bitler yerine kübitlerle çalışan, kuantum mekaniğinin süperpozisyon ve dolanıklık gibi olgularından yararlanarak bazı hesap türlerini çok daha verimli yapmayı hedefleyen bilgi işlem yaklaşımı.",
  "how": "Klasik bir bit ya sıfırdır ya bir. Kübit ise ölçülene kadar bu iki durumun bir karışımında bulunabilir; buna süperpozisyon denir. Kübitler birbirine dolanık hâle getirilebilir ve kuantum algoritmaları, girişim sayesinde doğru yanıtın olasılığını artırıp yanlışların olasılığını azaltacak biçimde tasarlanır. Her problemde hızlanma sağlamaz; yalnızca belirli problem türlerinde avantaj beklenir. Kübitler çevreden gelen gürültüye çok duyarlı olduğundan hata düzeltme en büyük mühendislik engellerinden biridir.",
  "why": "Kuantum bilişim; kimya ve malzeme simülasyonu, bazı optimizasyon problemleri ve günümüz şifreleme yöntemlerinin geleceği açısından yakından izleniyor. Yapay zekaya katkısı ise henüz kesinleşmiş değil; genel bir hızlanma yerine belirli alt problemler üzerinde araştırmalar sürüyor. Haberlerdeki iddiaları değerlendirirken kübit sayısından çok hata oranlarına bakmak gerekir.",
  "example": "IBM ve Google gibi şirketler kuantum işlemciler geliştiriyor; hedeflerden biri, ilaç araştırmasında kullanılan moleküllerin davranışını simüle etmek.",
  "faq": [
   [
    "Kuantum bilgisayarlar normal bilgisayarların yerini alacak mı?",
    "Böyle bir beklenti yok. Kuantum makineler belirli problemler için tasarlanan uzman araçlar olarak görülüyor; e-posta ya da web gezintisi gibi günlük işler klasik bilgisayarlarda sürecek."
   ],
   [
    "Kuantum bilişim yapay zekayı hızlandırır mı?",
    "Bu yönde araştırmalar var ama büyük modellerin eğitimini hızlandıracağına dair genel kabul görmüş bir kanıt yok. Alan hâlâ büyük ölçüde deneysel."
   ]
  ]
 },
 {
  "slug": "fotonik-bilisim",
  "term": "Fotonik bilişim",
  "en": "photonic computing",
  "match": [
   "fotonik"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Elektrik sinyalleri yerine ışığı (fotonları) kullanarak veri taşıyan ve hesaplama yapan, özellikle yapay zekadaki yoğun matris işlemlerini hızlandırmayı amaçlayan bilgi işlem yaklaşımı.",
  "how": "Fotonik çiplerde ışık, silikon üzerine işlenmiş çok ince dalga kılavuzlarında yol alır. Işık demetleri birbirine karıştırıldığında girişim denen etki oluşur ve bu etki, yapay sinir ağlarının çekirdeğindeki matris çarpımlarını doğrudan fiziksel olarak hesaplamak için kullanılabilir. Işık, kablolarda az ısı üretir ve çok hızlı ilerler. Buna karşılık ışığı depolamak zordur, sonuçların yine elektronik biçime çevrilmesi gerekir ve analog hesapta hassasiyet sorun çıkarabilir.",
  "why": "Yapay zeka çiplerinde sınırlayıcı etkenlerden biri, verinin hareket ederken harcadığı enerji ve ürettiği ısıdır. Fotonik yaklaşım bu darboğazı hafifletme potansiyeli taşıdığı için çip girişimleri ve büyük şirketler ilgi gösteriyor. Hesaplamanın kendisi için fotonik çipler ise büyük ölçüde araştırma ve erken ürün aşamasında.",
  "example": "Veri merkezlerinde sunucular arasında veri zaten fiber optik kablolarla ışık yoluyla taşınıyor; fotonik bilişim bu fikri çipin içine, hatta hesaplamanın kendisine taşımayı hedefliyor.",
  "faq": [
   [
    "Fotonik bilişim ile kuantum bilişim aynı şey mi?",
    "Hayır. Fotonik bilişim klasik hesabı ışıkla yapar; kuantum bilişim ise kübitlere dayanır. İkisi arasında bir kesişim var, çünkü bazı kuantum bilgisayar tasarımları da kübit olarak fotonları kullanır."
   ],
   [
    "Fotonik çipler GPU'ların yerini alacak mı?",
    "Yakın vadede tam bir yer değiştirme beklenmiyor. Daha olası senaryo, ışığın önce çipler arası veri iletiminde ve belirli hızlandırıcı görevlerde kullanılması."
   ]
  ]
 },
 {
  "slug": "yapay-zekanin-enerji-tuketimi",
  "term": "Yapay zekanın enerji tüketimi",
  "en": "AI energy consumption",
  "match": [],
  "cat": "Donanım ve altyapı",
  "def": "Yapay zeka modellerinin eğitilmesi ve kullanıcılara hizmet verilmesi sırasında, çoğunlukla veri merkezlerindeki sunucular ve soğutma sistemleri aracılığıyla harcanan toplam elektrik miktarı.",
  "how": "Enerji iki aşamada harcanır. Eğitimde binlerce hızlandırıcı çip haftalarca yoğun biçimde çalışır. Çıkarımda (inference) ise model, her kullanıcı sorusuna yanıt verirken çalışır; tek bir sorgu küçük olsa da milyonlarca kullanıcıyla toplam ciddi boyuta ulaşır. Sunucuların ürettiği ısıyı atmak için soğutma da elektrik tüketir. Toplam tüketim modelin boyutuna, donanımın verimliliğine ve kullanım yoğunluğuna bağlıdır.",
  "why": "Veri merkezlerinin elektrik talebi yerel şebekeleri zorlayabiliyor; bu da yeni santral yatırımlarını ve enerji anlaşmalarını gündeme getiriyor. Tahminler yönteme göre ciddi biçimde değişiyor. Verimli çipler ve küçük modeller birim başına tüketimi düşürürken toplam kullanımın artması bu kazancı dengeleyebiliyor. Konu hem iklim hem ekonomi tartışmalarının merkezinde.",
  "example": "Bir sohbet botuna sorulan tek soru az elektrik harcar; ancak aynı hizmet her gün milyonlarca kişiye sunulduğunda veri merkezinin elektrik faturası ve şebeke yükü belirgin biçimde artar.",
  "faq": [
   [
    "Yapay zekanın karbon ayak izi yalnızca elektrik miktarına mı bağlı?",
    "Hayır. Aynı elektrik kömürle mi yenilenebilir kaynakla mı üretildiğine göre çok farklı emisyon doğurur. Veri merkezinin konumu ve bölgenin enerji karışımı bu yüzden önemlidir."
   ],
   [
    "Eğitim mi çıkarım mı daha çok enerji harcar?",
    "Bir model için eğitim yoğun ve tek seferliktir. Ancak model çok yaygın kullanılırsa çıkarımın toplam payı eğitimi aşabilir. Oran modele ve kullanıma göre değişir."
   ]
  ]
 },
 {
  "slug": "veri-merkezi-su-tuketimi",
  "term": "Veri merkezi su tüketimi",
  "en": "data center water use",
  "match": [],
  "cat": "Donanım ve altyapı",
  "def": "Veri merkezlerinde sunucuları soğutmak için doğrudan kullanılan ve bu merkezlere elektrik sağlayan santrallerde dolaylı olarak harcanan su miktarı.",
  "how": "Çalışan sunucular çok ısındığı için merkezlerin bu ısıyı dışarı atması gerekir. Yaygın yöntemlerden birinde sıcak su soğutma kulelerinde buharlaştırılır; buharlaşan su sistemden kaybolur ve yerine yenisi eklenir. Hava ya da kapalı devre sıvı soğutma daha az su kullanabilir ama genellikle daha fazla elektrik harcar. Elektriğin üretildiği santrallerin de su kullanması dolaylı tüketim sayılır. Şirketler rakamları farklı yöntemlerle hesapladığı için karşılaştırma zor olabilir.",
  "why": "Su, özellikle kurak bölgelerde veri merkezi yatırımlarına yönelik yerel tepkilerin başlıca nedenlerinden biri. Yapay zeka hizmetleri büyüdükçe soğutma ihtiyacı da arttığından şirketler su verimliliği ve geri kazanım hedefleri açıklıyor. Ancak elektrik ile su arasında bir denge olduğu için en iyi çözüm bölgeye göre değişiyor.",
  "example": "Kurak bir bölgede kurulacak büyük bir veri merkezi, soğutma için kullanacağı su nedeniyle yerel halk ve belediyelerle tartışma konusu olabilir.",
  "faq": [
   [
    "Bir yapay zeka sorgusu ne kadar su harcar?",
    "Tek bir rakam yok; sonuç soğutma yöntemine, iklime ve hesaba nelerin dahil edildiğine göre değişir. Bu yüzden farklı kaynaklardaki tahminleri dikkatle karşılaştırmak gerekir."
   ],
   [
    "Veri merkezlerinin su tüketimini azaltmak mümkün mü?",
    "Evet. Kapalı devre sistemler, atık su ya da geri dönüştürülmüş su kullanımı ve serin iklimlerde kurulum gibi yollar var. Bazı yöntemler ise daha fazla elektrik gerektirebiliyor."
   ]
  ]
 },
 {
  "slug": "kucuk-moduler-reaktor",
  "term": "Küçük modüler reaktör (SMR)",
  "en": "small modular reactor",
  "match": [
   "küçük modüler reaktör",
   "=smr",
   "small modular reactor"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Geleneksel santrallere göre çok daha küçük güçte, parçaları büyük oranda fabrikada üretilip kurulacağı yere taşınan nükleer reaktör tasarımları; güçleri birkaç yüz megavata kadar çıkar.",
  "how": "Geleneksel nükleer santraller sahada uzun yıllarda inşa edilir. SMR'ler ise standart modüller hâlinde fabrikada üretilir, sahaya taşınır ve gerektiğinde yan yana eklenerek kapasite artırılır. Böylece inşaat süresinin kısalması ve maliyet aşımı riskinin azalması hedeflenir. Birçok tasarım pasif güvenlik özellikleri ve farklı soğutucu türleri kullanır. Yine de lisanslama süreçleri uzundur ve tasarımların çoğu hâlâ ticari ölçekte kanıtlanmaya çalışılıyor.",
  "why": "Veri merkezleri kesintisiz ve düşük karbonlu elektrik istiyor; bu yüzden teknoloji şirketleri SMR geliştiren girişimlerle anlaşmalar yapıyor. Destekleyenler güvenilir temiz enerji sunduğunu söylüyor. Eleştirenler ise maliyetin, takvimin ve atık yönetiminin belirsiz olduğuna dikkat çekiyor.",
  "example": "Bazı teknoloji şirketleri, veri merkezlerini besleyecek SMR projeleri için reaktör geliştiricileriyle anlaşma duyurdu.",
  "faq": [
   [
    "SMR ile geleneksel nükleer santral arasındaki fark nedir?",
    "SMR'ler çok daha küçük güçtedir ve büyük bölümü fabrikada seri üretilir. Geleneksel santraller ise sahada tek tek inşa edilen büyük tesislerdir."
   ],
   [
    "SMR'ler yakında veri merkezlerini besleyebilecek mi?",
    "Birkaç proje geliştirme aşamasında ama çoğunun ticari işletmeye geçme takvimi belirsiz. Kısa vadede veri merkezleri şebeke elektriğine ve diğer kaynaklara bağımlı kalacak."
   ]
  ]
 },
 {
  "slug": "gpu-bulutu",
  "term": "GPU bulutu (neocloud)",
  "en": "neocloud",
  "match": [
   "neocloud",
   "gpu bulut"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Yapay zeka işleri için GPU kiralamaya odaklanan, genellikle yeni kurulmuş bulut sağlayıcıları; geniş hizmet yelpazesi sunan büyük bulut şirketlerinin aksine yüksek performanslı hesaplama kapasitesi satarlar.",
  "how": "Neocloud şirketleri çok sayıda Nvidia GPU gibi hızlandırıcı satın alır, bunları veri merkezlerinde kümeler hâlinde kurar ve müşterilere saatlik ya da uzun dönemli sözleşmelerle kiralar. Hizmetleri çoğunlukla yapay zeka eğitimi ve çıkarımı için ayarlanmıştır; depolama, veritabanı gibi geniş bir ürün yelpazesi sunmazlar. Model geliştiren şirketler kendi veri merkezini kurmak yerine bu kapasiteyi kiralayabilir. CoreWeave ve Lambda bu kategoride anılan şirketlere örnektir.",
  "why": "GPU'lara erişim yapay zeka şirketleri için kritik bir darboğaz; neocloud'lar bu açığı hızla doldurabildikleri için öne çıktı. Öte yandan iş modeli yüksek sermaye ve az sayıda donanım tedarikçisine bağımlılık gerektiriyor; bu da haberlerde risk tartışmalarına yol açıyor.",
  "example": "Kendi veri merkezi olmayan bir yapay zeka girişimi, modelini eğitmek için bir neocloud sağlayıcısından birkaç ay boyunca yüzlerce GPU kiralayabilir.",
  "faq": [
   [
    "Neocloud ile AWS, Azure veya Google Cloud arasındaki fark nedir?",
    "Büyük bulut şirketleri depolamadan veritabanına uzanan çok geniş bir hizmet yelpazesi sunar. Neocloud sağlayıcıları ise ağırlıkla yapay zeka iş yüklerine uygun GPU kapasitesine odaklanır."
   ],
   [
    "Neocloud şirketleri neden ortaya çıktı?",
    "Yapay zeka talebi hızla artarken GPU kapasitesi kısıtlıydı. GPU'ya odaklanan yeni oyuncular bu talebe hızlı yanıt verebildi."
   ]
  ]
 },
 {
  "slug": "hesaplama-gucu",
  "term": "Hesaplama gücü (compute)",
  "en": "compute",
  "match": [
   "hesaplama gücü",
   "hesaplama kapasite"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Yapay zeka modellerini eğitmek ve çalıştırmak için gereken toplam işlem kapasitesi; genellikle çip sayısı, çiplerin hızı ve çalışma süresiyle ölçülür.",
  "how": "Her model eğitimi, milyarlarca matematik işleminin yapılması demektir. Bu işlemler GPU gibi hızlandırıcı çiplerde yürütülür. Hesaplama gücü teknik olarak saniyedeki kayan nokta işlemi (FLOP) ile ifade edilir; pratikte ise kaç çipin ne kadar süre çalıştığıyla anlatılır. Daha büyük modeller ve daha fazla veri, genellikle daha fazla işlem gücü gerektirir. Çip performansı, çipler arası bağlantı hızı ve yazılım verimliliği de toplam kullanılabilir gücü etkiler.",
  "why": "Hesaplama gücü, yapay zekada araştırma ve rekabet açısından temel bir kaynak sayılıyor. Büyük şirketlerin yatırımları, çip ihracat kısıtlamaları ve veri merkezi anlaşmaları büyük ölçüde bu kaynağa erişimle ilgili. Ancak daha verimli algoritmalar aynı sonucu daha az işlemle verebildiği için güç tek belirleyici değil.",
  "example": "Büyük bir dil modelinin eğitimi, çok sayıda GPU'nun haftalar ya da aylar boyunca birlikte çalışmasını gerektirebilir; bu kapasiteyi kiralamak ya da satın almak yatırımın en büyük kalemlerinden biridir.",
  "faq": [
   [
    "Compute ile hesaplama gücü aynı şey mi?",
    "Sektörde ve haberlerde 'compute' çoğunlukla aynı anlamda kullanılır. Terim, hem donanım kapasitesini hem de bir eğitimde harcanan toplam işlemi anlatabilir."
   ],
   [
    "Daha fazla hesaplama gücü her zaman daha iyi model demek mi?",
    "Hayır. Genellikle yardımcı olur ama veri kalitesi, model mimarisi ve eğitim yöntemi de sonucu belirler."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-bilgisayari",
  "term": "Yapay zeka bilgisayarı (AI PC)",
  "en": "AI PC",
  "match": [
   "=ai pc",
   "yapay zeka bilgisayar"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Bulut bağlantısına ihtiyaç duymadan yapay zeka işlerini cihazın içinde yürütebilmesi için özel bir yapay zeka işlemcisi (NPU) taşıyan kişisel bilgisayar.",
  "how": "Geleneksel bilgisayarda yapay zeka yükleri ağırlıklı olarak işlemciye (CPU) ya da ekran kartına (GPU) biner. Yapay zeka bilgisayarlarında bu ikilinin yanına, sinir ağı hesaplarına göre tasarlanmış bir NPU (neural processing unit) eklenir. NPU aynı işi çok daha az enerjiyle yapmaya odaklanır; bu yüzden arka plan bulanıklaştırma, canlı altyazı, yerel ses tanıma ya da küçük dil modelleri gibi işler pili hızla tüketmeden çalışır. Yazılım, işi duruma göre NPU, GPU ya da CPU'ya dağıtır.",
  "why": "Yerel çalışma; verilerin cihazdan çıkmamasını, internet olmadan da özelliklerin çalışmasını ve bulut maliyetinin azalmasını sağlayabilir. Bu yüzden çip üreticileri ve bilgisayar markaları yeni nesil dizüstü bilgisayarları bu çerçevede konumlandırıyor. Ancak gerçek kullanıcı faydası, uygulamaların NPU'dan ne ölçüde yararlandığına bağlı.",
  "example": "Görüntülü görüşmede arka planı bulanıklaştırmak ya da toplantıyı cihazın içinde yazıya dökmek, NPU'lu bir dizüstü bilgisayarda pil tüketimini düşük tutarak yapılabilen işlere örnektir.",
  "faq": [
   [
    "Yapay zeka bilgisayarı almak için NPU şart mı?",
    "ChatGPT gibi bulut hizmetleri her bilgisayarda tarayıcıdan kullanılabilir. NPU, yapay zeka işlerinin cihazda ve verimli çalışmasını isteyenler için avantaj sağlar."
   ],
   [
    "NPU ile GPU arasındaki fark nedir?",
    "GPU daha genel amaçlı ve yüksek güçlü bir paralel hesaplama birimidir. NPU ise yapay zeka hesaplarına özelleşmiş, düşük enerjili bir birimdir."
   ]
  ]
 },
 {
  "slug": "cikarim-cipi",
  "term": "Çıkarım çipi",
  "en": "inference chip",
  "match": [
   "çıkarım çip",
   "inference chip"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Eğitilmiş bir yapay zeka modelini çalıştırıp kullanıcı sorularına yanıt üretmek için optimize edilmiş işlemci; hız, enerji verimliliği ve maliyet odaklı tasarlanır.",
  "how": "Çıkarım (inference), modelin eğitimden sonra gerçek kullanıma geçtiği aşamadır. Eğitim büyük kümelerde haftalarca sürebilir; çıkarım ise her kullanıcı isteğinde tekrar tekrar ve çoğu kez anlık yapılır. Çıkarım çipleri bu yüzden bellek erişimini hızlandırmaya, düşük hassasiyetli sayılarla çalışmaya ve işlem başına enerjiyi azaltmaya yönelir. Dil modellerinde darboğaz çoğunlukla hesaplamadan çok model ağırlıklarının bellekten okunma hızıdır; bu nedenle birçok tasarım belleği merkeze alır.",
  "why": "Yapay zeka hizmetleri yaygınlaştıkça toplam maliyette çıkarımın payı artıyor. Her sohbet, her görsel üretimi bir çıkarım işlemi demek. Bu nedenle şirketler Nvidia GPU'larına alternatif ya da tamamlayıcı çipler geliştiriyor; haberlerdeki çip rekabetinin önemli bir kısmı burada geçiyor.",
  "example": "Amazon'un Inferentia çipleri ve Groq'un geliştirdiği çipler, hazır modelleri kullanıcıya hızlı ve ucuz sunmayı hedefleyen çıkarım odaklı tasarımlara örnektir.",
  "faq": [
   [
    "Eğitim çipi ile çıkarım çipi aynı şey mi?",
    "Her zaman değil. Aynı GPU her iki işi de yapabilir, ama çıkarım çipleri yalnızca modeli çalıştırmaya odaklanarak daha ucuz ve verimli olmayı hedefler."
   ],
   [
    "Çıkarım çipi neden ayrı bir ürün kategorisi sayılıyor?",
    "Çünkü çıkarımda öncelik gecikme ve maliyettir. Eğitimde aranan ham hesaplama gücü ise burada ikinci planda kalabilir."
   ]
  ]
 },
 {
  "slug": "wafer-olcekli-cip",
  "term": "Wafer ölçekli çip",
  "en": "wafer-scale chip",
  "match": [
   "wafer ölçekli",
   "wafer-scale"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Silikon diskin (wafer) kesilip küçük parçalara bölünmesi yerine, neredeyse bütün olarak tek bir dev işlemci hâlinde kullanıldığı çip tasarımı.",
  "how": "Normalde bir silikon wafer üzerinde yüzlerce küçük çip üretilir, sonra bunlar kesilip ayrı ayrı paketlenir. Wafer ölçekli tasarımda çekirdekler ve bellek, diskin büyük kısmını kaplayan tek bir parçada bir araya getirilir. Çekirdekler arası iletişim çipin içinde kaldığı için, ayrı çipler arasındaki kablolu bağlantılara göre çok daha hızlı olabilir. Üretimde kaçınılmaz olan kusurlar ise yedek çekirdekler ve arızalı bölgeleri atlayan yönlendirmeyle telafi edilir.",
  "why": "Büyük modellerde veri taşımak, hesaplamanın kendisi kadar maliyetli olabiliyor. Wafer ölçekli yaklaşım bu hareketi çip içinde tutarak hız ve verimlilik sağlamayı hedefliyor. Yaygın GPU kümelerine karşı bir alternatif sunuyor; ancak üretim, soğutma ve yazılım uyumu gibi zorlukları da var.",
  "example": "ABD'li Cerebras şirketinin Wafer Scale Engine adlı çipleri, bu yaklaşımın en bilinen örneğidir.",
  "faq": [
   [
    "Wafer ölçekli çip neden yaygın değil?",
    "Dev bir parçanın üretilmesi, beslenmesi ve soğutulması zor ve pahalıdır. Ayrıca yazılım ekosistemi büyük ölçüde GPU'lar etrafında olgunlaşmıştır."
   ],
   [
    "Wafer nedir?",
    "Çiplerin üzerine işlendiği ince bir silikon disktir. Geleneksel üretimde bir wafer'dan çok sayıda çip çıkar."
   ]
  ]
 },
 {
  "slug": "raf-olcekli-sistem",
  "term": "Raf ölçekli sistem",
  "en": "rack-scale system",
  "match": [
   "raf ölçekli",
   "rack-scale"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Bir veri merkezi rafındaki onlarca hızlandırıcıyı, hızlı bağlantılar ve ortak soğutmayla tek bir dev bilgisayar gibi çalışacak biçimde tasarlanmış bütünleşik sistem.",
  "how": "Eskiden veri merkezlerinde sunucular tek tek alınır, sonra birbirine bağlanırdı. Raf ölçekli yaklaşımda üretici GPU'ları, işlemcileri, ağ donanımını, güç dağıtımını ve soğutmayı raf düzeyinde birlikte tasarlar. Raftaki hızlandırıcılar çok hızlı özel bağlantılarla birbirine bağlandığı için dev bir modelin parçaları aralarında az gecikmeyle paylaşılabilir. Müşteri tek tek parça yerine hazır, test edilmiş bir birim satın alır.",
  "why": "Modeller tek bir çipe sığmayacak kadar büyüdüğünden, performansı belirleyen şey çoğu zaman çipin kendisinden çok çiplerin birbirine ne kadar iyi bağlandığı oluyor. Bu da rekabetin tek çipten sistem düzeyine kaymasına yol açıyor. Güç ve soğutma gereksinimleri de veri merkezi tasarımını etkiliyor.",
  "example": "Nvidia'nın NVL serisi raf sistemleri, çok sayıda GPU'yu tek raf içinde tek bir büyük hızlandırıcı gibi çalıştırmayı amaçlar.",
  "faq": [
   [
    "Raf ölçekli sistem ile sunucu arasındaki fark ne?",
    "Sunucu tek bir makinedir. Raf ölçekli sistemde ise bağlantısından soğutmasına kadar bütün raf tek ürün olarak tasarlanır."
   ],
   [
    "Bu sistemlerde neden güçlü soğutma gerekiyor?",
    "Tek rafa çok sayıda hızlandırıcı sığdırılınca ısı ve güç yoğunluğu çok artar. Bu yüzden sıvı soğutma gibi çözümler sık gündeme gelir."
   ]
  ]
 },
 {
  "slug": "gecikme-suresi",
  "term": "Gecikme süresi (latency)",
  "en": "latency",
  "match": [
   "gecikme süre",
   "latency"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Bir isteğin gönderilmesiyle yanıtın alınması arasında geçen süre. Yapay zekada, kullanıcının soru sorduktan sonra cevabı görmek için beklediği zamanı ifade eder.",
  "how": "Gecikme, zincirdeki her adımın toplamıdır: isteğin ağ üzerinden sunucuya ulaşması, sıraya girmesi, modelin girdiyi işlemesi, yanıtın üretilmesi ve geri dönmesi. Büyük dil modellerinde model boyutu, istemin uzunluğu, sunucudaki yoğunluk ve donanım hızı sonucu değiştirir. Gecikme genellikle milisaniye ya da saniye cinsinden ölçülür. Ortalamanın yanında, en yavaş yanıtlanan isteklerin durumu da değerlendirilir.",
  "why": "Düşük gecikme, yapay zekanın doğal hissettirmesi için belirleyicidir. Sesli asistanda birkaç saniyelik bekleme sohbeti bozar; kodlama yardımcılarında ise akışı keser. Gecikmeyi azaltmak çoğu zaman daha pahalı donanım ya da daha küçük model gerektirdiğinden, hız ile maliyet arasında bir denge kurulur.",
  "example": "Sesli bir yapay zeka asistanına soru sorulduktan sonra yanıt iki saniye yerine yarım saniyede başlıyorsa konuşma çok daha doğal akar.",
  "faq": [
   [
    "Gecikme ile bant genişliği aynı şey mi?",
    "Hayır. Gecikme bir verinin ulaşma süresini, bant genişliği ise birim sürede aktarılabilecek veri miktarını gösterir."
   ],
   [
    "Yapay zekada gecikmeyi ne azaltır?",
    "Daha hızlı donanım, daha küçük ya da optimize edilmiş modeller, kullanıcıya yakın sunucular ve verimli sunum yazılımı gecikmeyi düşürebilir."
   ]
  ]
 },
 {
  "slug": "ilk-token-suresi",
  "term": "İlk token süresi (TTFT)",
  "en": "time to first token",
  "match": [
   "ilk token süre",
   "time to first token"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Bir dil modeline istek gönderildikten sonra yanıtın ilk parçasının ekranda belirmesine kadar geçen süre. Modelin ne kadar çabuk tepki verdiğini gösterir.",
  "how": "Dil modelleri yanıtı token adı verilen küçük metin parçaları hâlinde, birer birer üretir. İlk token gelmeden önce model, gönderilen istemin tamamını okuyup işlemelidir; bu aşamaya ön doldurma (prefill) denir. İstem uzadıkça bu aşama da uzar. Ardından token'lar akmaya başlar. İlk token süresi ağ gecikmesini, sıradaki bekleme süresini ve ön doldurma süresini kapsar. Bu süre, sohbet ekranında 'düşünüyor' göstergesinin ne kadar kaldığına denk gelir.",
  "why": "Kullanıcı için yanıtın başlaması, bitmesinden daha belirgin bir hız hissi verir; ilk sözcükler çabuk gelirse bekleme kısa algılanır. Bu yüzden sohbet botları, sesli asistanlar ve etkileşimli uygulamalar için temel ölçütlerden biridir. Sağlayıcılar karşılaştırmalarda genellikle bu ölçütü saniye başına token ile birlikte verir.",
  "example": "Uzun bir belgeyi yapay zekaya yükleyip özet isteyen kullanıcı için ilk token süresi, belgenin okunması gerektiği için kısa bir sorudan belirgin biçimde uzun olabilir.",
  "faq": [
   [
    "İlk token süresi ile gecikme süresi aynı mı?",
    "Yakın ama aynı değil. Gecikme genel bir kavramdır; ilk token süresi bunun yanıtın ilk parçasına kadar olan özel hâlidir. Bazen tüm yanıtın bitiş süresi de gecikme olarak ölçülür."
   ],
   [
    "Uzun istemlerde ilk token neden geç gelir?",
    "Model yanıta başlamadan önce istemin tamamını işlemek zorundadır. Girdi uzadıkça bu ön işlem de uzar."
   ]
  ]
 },
 {
  "slug": "saniye-basina-token",
  "term": "Saniye başına token",
  "en": "tokens per second",
  "match": [
   "saniye başına token",
   "saniyede token",
   "tokens per second"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Bir yapay zeka modelinin saniyede kaç token ürettiğini gösteren hız ölçüsü. Token, modelin metni işlediği kelime ya da kelime parçası birimidir.",
  "how": "Model yanıtı birer token üreterek yazar; ölçüm, belirli bir sürede üretilen token sayısının süreye bölünmesiyle bulunur. Değer, modelin boyutuna, çalıştığı donanıma, yazılım optimizasyonuna ve aynı anda kaç kullanıcıya hizmet verildiğine göre değişir. Ölçüm iki biçimde yapılabilir: tek bir kullanıcının gördüğü yanıt hızı ya da sunucunun tüm kullanıcılar için toplam üretim hızı (throughput). Bu ikisi birbirine karıştırılmamalıdır.",
  "why": "Bu değer sohbet ekranında metnin akış hızını belirler; kodlama ve ajan gibi uzun çıktı üreten işlerde toplam bekleme süresini doğrudan etkiler. Sağlayıcılar için ise donanımdan alınan verimin ve dolayısıyla maliyetin göstergesidir. Çıkarım çiplerinin tanıtımlarında sık öne çıkarılır, ama ölçüm koşulları farklı olabileceğinden rakamlar dikkatle okunmalıdır.",
  "example": "Yavaş bir model yanıtı kelime kelime okunabilecek hızda yazarken, hızlı bir sunum altyapısı yüzlerce kelimelik yanıtı birkaç saniyede ekrana getirebilir.",
  "faq": [
   [
    "Saniye başına token kaç olmalı?",
    "Tek bir doğru değer yok. İnsanın okuma hızını aşan bir akış sohbette çoğu zaman yeterlidir; ajanlar ve uzun çıktılar için daha yüksek hız işe yarar."
   ],
   [
    "Token kelime demek mi?",
    "Tam olarak değil. Bir token bazen bir kelime, bazen kelimenin bir parçası ya da noktalama işaretidir. Türkçe gibi ekli dillerde bir kelime çoğu zaman birkaç token'a bölünür."
   ]
  ]
 },
 {
  "slug": "model-sunumu",
  "term": "Model sunumu (model serving)",
  "en": "model serving",
  "match": [
   "model serving",
   "model sunum"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Eğitilmiş bir yapay zeka modelini sunucularda çalışır tutup uygulamaların ve kullanıcıların isteklerine yanıt verebilecek hâle getiren yazılım ve altyapı süreci.",
  "how": "Sunum katmanı gelen istekleri alır, sıraya koyar ve uygun donanıma yönlendirir. Verimlilik için birkaç isteği aynı anda gruplayarak işler, tekrar eden bilgileri önbellekte tutar ve gerekirse modeli birden fazla çipe böler. Yük artınca sunucu sayısını artırır, azalınca düşürür. Ayrıca sürüm yönetimi, izleme ve güvenlik denetimleri de bu katmanın görevidir. Sonuçta kullanıcı, arkada ne olup bittiğini görmeden yalnızca yanıtı alır.",
  "why": "Bir modelin laboratuvarda iyi çalışması, milyonlarca kişiye hızlı ve ucuz sunulabilmesi için yeterli değil. Hız, maliyet, kesintisiz çalışma ve gizlilik büyük ölçüde sunum altyapısında belirlenir. Yapay zeka şirketlerinin donanım yatırımlarının ve çıkarım çiplerine ilgisinin arkasındaki temel iş de budur.",
  "example": "Bir sohbet botuna yazılan mesaj, sunum altyapısı tarafından diğer isteklerle birlikte uygun bir GPU'ya yönlendirilir ve yanıt parça parça geri gönderilir.",
  "faq": [
   [
    "Model sunumu ile model eğitimi arasındaki fark nedir?",
    "Eğitim modelin öğrenme aşamasıdır ve bir kez ya da arada bir yapılır. Sunum ise eğitilmiş modelin kullanıcılara hizmet verdiği, sürekli çalışan aşamadır."
   ],
   [
    "Bir modeli kendi sunucumda sunabilir miyim?",
    "Açık ağırlıklı modeller için evet; vLLM ya da Ollama gibi araçlar bu işi kolaylaştırır. Kapalı modeller ise yalnızca sağlayıcının API'si üzerinden kullanılabilir."
   ]
  ]
 },
 {
  "slug": "vllm",
  "term": "vLLM",
  "en": "vLLM",
  "match": [
   "=vllm"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Büyük dil modellerini sunucuda daha az bellekle ve daha yüksek hızla çalıştırmak için geliştirilen açık kaynaklı çıkarım (inference) kütüphanesi. Aynı donanımla daha çok kullanıcıya hizmet verilmesini sağlar.",
  "how": "Model yanıt üretirken geçmiş sözcüklere ait ara hesapları, yani KV önbelleğini GPU belleğinde tutar. Klasik yöntemler bu önbellek için baştan büyük, bitişik alanlar ayırdığından bellek boşa gider. vLLM'in PagedAttention yaklaşımı önbelleği, işletim sistemlerindeki sayfalama mantığıyla küçük bloklara böler ve gerektikçe ayırır. Ayrıca sürekli toplu işleme (continuous batching) sayesinde biten bir isteğin yerine yeni istek hemen alınır; GPU boş beklemez.",
  "why": "Bir modeli eğitmek kadar, milyonlarca kullanıcıya sunmak da maliyetlidir. Çıkarım verimliliği, aynı GPU ile daha fazla isteğe yanıt vermek ve istek başına maliyeti düşürmek demektir. vLLM açık kaynak olduğu için şirketler kendi modellerini barındırırken sıkça başvurdukları bir araçtır.",
  "example": "Kendi sunucusunda açık ağırlıklı bir dil modeli çalıştıran bir şirket, sohbet asistanını vLLM üzerinden sunarak aynı GPU'larla aynı anda daha çok çalışanın isteğini karşılayabilir.",
  "faq": [
   [
    "vLLM bir yapay zeka modeli midir?",
    "Hayır. vLLM bir model değil, mevcut modelleri çalıştıran bir sunum yazılımıdır. Birçok açık modelle birlikte kullanılabilir."
   ],
   [
    "PagedAttention ne demektir?",
    "Dil modelinin geçmiş sözcükler için tuttuğu önbelleği küçük bloklar hâlinde yönetme tekniğidir. Böylece GPU belleğinde boşa giden alan azalır ve aynı anda daha çok istek işlenebilir."
   ]
  ]
 },
 {
  "slug": "dagitik-egitim",
  "term": "Dağıtık eğitim",
  "en": "distributed training",
  "match": [
   "dağıtık eğitim",
   "distributed training"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Tek bir çipin belleğine ve hızına sığmayan bir yapay zeka modelini, yüzlerce ya da binlerce hızlandırıcıya (GPU, TPU) bölüştürerek eğitme yaklaşımı.",
  "how": "Eğitim işi iki temel yoldan bölünür: veriyi paylaştırmak ya da modelin kendisini parçalara ayırmak. Uygulamada genellikle ikisi birlikte kullanılır. Çipler her adımda hesapladıkları sonuçları birbiriyle paylaşmak zorunda olduğundan, aralarındaki bağlantı hızı en az çiplerin gücü kadar belirleyicidir. Çok sayıda cihaz çalıştığı için arızalara karşı eğitimin belirli aralıklarla kaydedilmesi (checkpoint) de sürecin parçasıdır.",
  "why": "Günümüzün büyük modelleri tek bir sunucuda eğitilemeyecek kadar büyüktür. Bu yüzden dağıtık eğitim, veri merkezi yatırımlarının, ağ donanımının ve enerji ihtiyacının gündemde olmasının ana nedenlerinden biridir. Eğitim yazılımı ne kadar verimliyse aynı çip sayısıyla o kadar çok iş çıkar.",
  "example": "Bir laboratuvar yeni bir dil modelini binlerce GPU'luk bir kümede eğitirken veriyi gruplara böler, modeli de çiplere dağıtır; sonuçlar her adımda hızlı ağ üzerinden birleştirilir.",
  "faq": [
   [
    "Dağıtık eğitim ile dağıtık çıkarım aynı şey mi?",
    "Hayır. Dağıtık eğitim modelin öğrenme sürecini birçok çipe yayar. Dağıtık çıkarım ise eğitilmiş modelin kullanıcılara yanıt üretme işini birçok çipe ya da sunucuya paylaştırır."
   ],
   [
    "Dağıtık eğitimde ağ hızı neden bu kadar önemli?",
    "Çipler her adımda ara sonuçları ve gradyanları birbirine göndermek zorundadır. Ağ yavaşsa çipler birbirini bekler ve pahalı donanım boşta kalır."
   ]
  ]
 },
 {
  "slug": "veri-paralelligi",
  "term": "Veri paralelliği",
  "en": "data parallelism",
  "match": [
   "veri paralelliği",
   "data parallelism"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Her hızlandırıcıda modelin tam bir kopyasını tutup eğitim verisinin farklı dilimlerini aynı anda işleyerek eğitimi hızlandıran paralelleştirme yöntemi.",
  "how": "Her çip modelin aynı kopyasını taşır ve kendisine düşen veri grubunu (mini-batch) işler. Ardından çipler hesapladıkları düzeltme miktarlarını, yani gradyanları, birbiriyle paylaşıp ortalamasını alır ve hepsi aynı güncellemeyi uygular. Böylece kopyalar birbirinden ayrışmaz. Bu işlem ağ üzerinden yapıldığı için çip sayısı arttıkça iletişim yükü de artar. FSDP ve ZeRO gibi teknikler, bellek yükünü azaltmak için eğitim durumlarını çipler arasında paylaştırır.",
  "why": "En yalın ve yaygın paralellik türü olduğundan çoğu eğitim hattının başlangıç noktasıdır. Çip sayısını artırarak eğitim süresini kısaltmanın en doğrudan yoludur. Ancak model tek çipin belleğine sığmıyorsa tek başına yetmez; bu noktada model paralelliği devreye girer.",
  "example": "Bir görüntü sınıflandırma modeli sekiz GPU'da eğitilirken her GPU aynı modeli taşır ve farklı bir fotoğraf grubuna bakar; gradyanlar ortalanıp hepsine geri dağıtılır.",
  "faq": [
   [
    "Veri paralelliği modeli daha büyük yapabilir mi?",
    "Hayır, eğitimi hızlandırır ama modelin boyutunu büyütmez. Her çip modelin bir kopyasını taşıdığından model tek çipe sığmalıdır; sığmıyorsa model paralelliği ya da bellek paylaşımı teknikleri gerekir."
   ],
   [
    "Veri paralelliği ile model paralelliği arasındaki fark nedir?",
    "Veri paralelliğinde model kopyalanır, veri bölünür. Model paralelliğinde ise modelin kendisi parçalara ayrılıp farklı çiplere yerleştirilir."
   ]
  ]
 },
 {
  "slug": "model-paralelligi",
  "term": "Model paralelliği",
  "en": "model parallelism",
  "match": [
   "model paralelliği",
   "model parallelism"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Tek bir çipin belleğine sığmayan modeli katmanlarına ya da katmanların içindeki matrislere göre parçalayıp birden fazla hızlandırıcıya yerleştirme yöntemi.",
  "how": "İki yaygın biçimi vardır. Boru hattı paralelliğinde (pipeline parallelism) modelin ardışık katmanları farklı çiplere verilir; veri bir çipten diğerine akar, tıpkı bir montaj hattında olduğu gibi. Tensör paralelliğinde (tensor parallelism) tek bir katmandaki büyük matris çarpımı birkaç çipe bölünür ve her çip bir parçayı hesaplar. Her iki durumda da çipler ara sonuçları sürekli birbirine aktarır; bu yüzden çipler arası hızlı bağlantı çok önemlidir.",
  "why": "Parametre sayısı yüz milyarları bulan modeller tek bir GPU belleğine sığmaz. Model paralelliği bu modelleri eğitmeyi ve sunmayı mümkün kılar. Öte yandan çipler birbirini beklediğinden verimlilik düşebilir; bu yüzden mühendisler bölme biçimini donanıma göre dikkatle seçer.",
  "example": "Çok büyük bir dil modeli, katmanları sunucu içindeki sekiz GPU'ya paylaştırılarak çalıştırılır; hiçbir GPU modelin tamamını tek başına bellekte tutmaz.",
  "faq": [
   [
    "Boru hattı paralelliği ile tensör paralelliği arasındaki fark nedir?",
    "Boru hattı paralelliği modeli katman gruplarına ayırıp her grubu bir çipe verir. Tensör paralelliği ise tek bir katmanın içindeki büyük hesabı birkaç çip arasında böler."
   ],
   [
    "Model paralelliği yalnızca eğitimde mi kullanılır?",
    "Hayır. Çok büyük bir model tek GPU'ya sığmadığında, yanıt üretirken de aynı mantıkla birden fazla çipe bölünerek çalıştırılır."
   ]
  ]
 },
 {
  "slug": "fp8-ve-dusuk-hassasiyetli-sayilar",
  "term": "FP8 ve düşük hassasiyetli sayılar",
  "en": "FP8 and low-precision formats",
  "match": [
   "=fp8",
   "=fp4",
   "=fp16"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Sayıları 16 ya da 32 bit yerine 8 bit gibi daha az bitle saklayıp işleyen sayı biçimleri; doğruluktan biraz ödün vererek hız ve bellek tasarrufu sağlar.",
  "how": "Bir yapay zeka modelindeki ağırlıklar ve ara hesaplar kayan noktalı sayılarla tutulur. Bit sayısı düştükçe her sayı daha az bellek kaplar ve çip aynı sürede daha çok işlem yapabilir. FP8'in iki yaygın düzeni vardır: biri daha fazla duyarlılık, diğeri daha geniş değer aralığı sunar. Sayılar kabalaştığı için eğitimde dikkatli ölçekleme gerekir; bazı hesaplar yine yüksek hassasiyette yapılır. Çıkarımda INT8 ve daha düşük bitli biçimler de benzer amaçla kullanılır.",
  "why": "Büyük modellerin maliyeti büyük oranda bellek ve hesaplama gücünden gelir. Düşük hassasiyet, aynı donanımla daha büyük model çalıştırmayı veya daha hızlı yanıt vermeyi sağlar. Yeni nesil yapay zeka çiplerinin tanıtımlarında bu yüzden sık sık düşük hassasiyetli desteğe değinilir. Bedeli, doğruluk kaybı riskidir.",
  "example": "Bir şirket modelini FP8'e çevirerek aynı GPU belleğine daha büyük bir model sığdırabilir; kalite kaybı olup olmadığını ise kendi testlerinde ölçmesi gerekir.",
  "faq": [
   [
    "FP8 modelin doğruluğunu düşürür mü?",
    "Bazen küçük bir kayıp olabilir, bazen fark ölçülemeyecek kadar azdır. Sonuç modele, göreve ve ölçekleme yöntemine bağlıdır; bu yüzden geçişten sonra test yapmak gerekir."
   ],
   [
    "FP8 ile INT8 aynı şey mi?",
    "Hayır. İkisi de 8 bitliktir ama FP8 kayan noktalı, INT8 ise tam sayı biçimidir. Kayan noktalı biçim çok farklı büyüklükteki değerleri daha rahat temsil eder."
   ]
  ]
 },
 {
  "slug": "bf16",
  "term": "BF16 (bfloat16)",
  "en": "bfloat16",
  "match": [
   "=bf16",
   "bfloat16"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Google'da geliştirilen, 16 bitlik ve FP32 ile aynı değer aralığını koruyan ama duyarlılığı daha düşük bir sayı biçimi; yapay zeka eğitiminde yaygın kullanılır.",
  "how": "Kayan noktalı bir sayı üç parçadan oluşur: işaret, üs ve anlamlı basamaklar. BF16, 32 bitlik FP32 ile aynı sayıda üs bitine, yani sekize sahiptir; ama anlamlı basamaklara yalnızca yedi bit ayırır. Böylece çok büyük ya da çok küçük değerleri taşmadan gösterir, ince ayrıntıdan ise vazgeçer. FP32'den BF16'ya geçmek, kabaca sayının ilk 16 bitini almak kadar basittir. Sinir ağları küçük yuvarlama hatalarına toleranslı olduğundan bu takas çoğu zaman iyi sonuç verir.",
  "why": "Bellek ve hız kazancı sağlarken eğitim sırasında FP16'daki gibi taşma sorunlarını büyük ölçüde azaltır ve çoğu zaman ek ölçekleme gerektirmez. Bu nedenle büyük modellerin eğitiminde yaygın standartlardan biri hâline gelmiştir ve birçok güncel GPU ile TPU tarafından desteklenir.",
  "example": "Bir araştırma ekibi dil modelini BF16 ile eğitirken ağırlıkların ana kopyasını çoğu zaman FP32'de tutarak küçük hataların birikmesini önler.",
  "faq": [
   [
    "BF16 ile FP16 arasındaki fark nedir?",
    "İkisi de 16 bitliktir. FP16 daha fazla anlamlı basamak bit'i taşıdığından daha duyarlı ama değer aralığı dardır. BF16 ise FP32 kadar geniş aralığı kullanır, duyarlılığı daha düşüktür."
   ],
   [
    "BF16 hangi çiplerde çalışır?",
    "Birçok güncel GPU ve TPU bu biçimi donanım düzeyinde destekler. Belirli bir çip için desteğin olup olmadığını üreticinin belgelerinden kontrol etmek gerekir."
   ]
  ]
 },
 {
  "slug": "guc-anlasmasi",
  "term": "Güç anlaşması (PPA)",
  "en": "power purchase agreement",
  "match": [
   "güç satın alma anlaşma",
   "power purchase agreement"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Bir elektrik üreticisiyle alıcı arasında, belirli miktardaki elektriğin uzun vadede önceden kararlaştırılan koşullarla satılmasını öngören sözleşme; veri merkezi şirketleri enerji tedariki için kullanır.",
  "how": "Alıcı, örneğin bir rüzgâr veya güneş santralinden üretilecek elektriği uzun yıllar boyunca anlaşılan bir fiyat mekanizmasıyla satın almayı taahhüt eder. Üretici bu garantili gelir sayesinde santrali finanse etmeyi kolaylaştırır. Anlaşma fiziksel olabilir, yani elektrik doğrudan teslim edilir; ya da sanal olabilir, yani yalnızca fiyat farkı üzerinden mali olarak uzlaşılır. Ayrıntılar ülkeye ve piyasa düzenlemesine göre değişir.",
  "why": "Yapay zeka veri merkezleri çok büyük ve kesintisiz elektrik tüketir. Şirketler PPA ile hem maliyeti öngörülebilir kılar hem de yenilenebilir ya da nükleer gibi düşük karbonlu kaynaklardan enerji sağladığını gösterebilir. Haberlerde büyük teknoloji şirketlerinin santral anlaşmaları bu yüzden sık geçer.",
  "example": "Bir bulut şirketi, yeni kurulacak bir güneş enerjisi santraliyle yıllara yayılan bir PPA imzalayarak veri merkezlerinin tüketimine karşılık gelen elektriği o santralden almayı taahhüt eder.",
  "faq": [
   [
    "PPA ile normal elektrik aboneliği arasındaki fark nedir?",
    "Normal abonelikte tüketici, tedarikçinin tarifesiyle elektrik alır. PPA ise genellikle uzun süreli, belirli bir üretim tesisine bağlı ve fiyat koşulları baştan müzakere edilmiş özel bir sözleşmedir."
   ],
   [
    "Sanal PPA ne demektir?",
    "Elektriğin alıcıya fiziksel olarak teslim edilmediği, taraflar arasında yalnızca fiyat farkının mali olarak ödendiği PPA türüdür. Alıcı bu yolla bir santralin üretimini destekleyebilir."
   ]
  ]
 },
 {
  "slug": "elektrik-sebekesi-kapasitesi",
  "term": "Elektrik şebekesi kapasitesi",
  "en": "grid capacity",
  "match": [
   "şebeke kapasite"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Elektrik iletim ve dağıtım şebekesinin belirli bir noktada taşıyabildiği azami güç; yeni bir veri merkezinin bağlanıp bağlanamayacağını belirleyen temel sınırlardan biri.",
  "how": "Şebeke; santralleri, hatları, trafo merkezlerini ve dağıtım ekipmanını kapsar ve her bölümün taşıyabileceği güç sınırlıdır. Büyük bir tüketici bağlanmak istediğinde işletmeci, o noktadaki hat ve trafoların ek yükü kaldırıp kaldıramayacağını inceler. Kapasite yetmiyorsa yeni hat, trafo veya üretim eklenmesi gerekir; bu yatırımlar yıllar sürebilir. Bu nedenle bağlantı talepleri çoğu zaman sıraya alınır.",
  "why": "Yapay zeka veri merkezleri yüzlerce megavatlık güç isteyebilir ve bu talep bazı bölgelerde şebekenin büyüme hızını aşabilir. Çip bulunsa bile elektrik bağlantısı gecikirse tesis çalışamaz. Bu yüzden veri merkezi yeri seçiminde şebeke durumu, çoğu zaman arazi ve soğutma kadar belirleyicidir.",
  "example": "Bir şirket veri merkezi için uygun arazi ve yeterli çip bulsa da bölgedeki trafo merkezinin kapasitesi yetmiyorsa tesisin devreye girmesi şebeke yatırımları tamamlanana kadar bekleyebilir.",
  "faq": [
   [
    "Şebeke kapasitesi ile elektrik üretim kapasitesi aynı şey mi?",
    "Hayır. Üretim kapasitesi santrallerin üretebildiği güçtür. Şebeke kapasitesi ise bu gücü hatlar ve trafolar üzerinden belirli bir noktaya taşıyabilme sınırıdır; bol üretim olsa da taşıma darboğazı yaşanabilir."
   ],
   [
    "Veri merkezleri neden bazen kendi enerji üretimini kurmak ister?",
    "Şebeke bağlantısının gecikmesi durumunda sahada üretim bekleme süresini kısaltabilir. Ancak bunun da izin, yakıt temini ve maliyet gibi kendi zorlukları vardır."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-fabrikasi",
  "term": "Yapay zeka fabrikası",
  "en": "AI factory",
  "match": [
   "yapay zeka fabrika",
   "ai factory"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Modelleri eğitmek ve çalıştırmak için baştan tasarlanan, üretim hattı mantığıyla işleyen büyük veri merkezi. Girdisi veri ve elektrik, çıktısı eğitilmiş modeller ile yapay zekanın ürettiği yanıtlardır.",
  "how": "Tesiste çok sayıda grafik işlemci (GPU) aynı anda çalışır; bunlar çok hızlı bir iç ağla birbirine bağlanır. Depolama, elektrik dağıtımı, soğutma ve yönetim yazılımı da bu tek amaca göre birlikte tasarlanır. Klasik bir veri merkezi e-posta, web sitesi ve veri tabanı gibi çok farklı işleri barındırırken fabrika, model eğitimi ve model yanıtı üretmeye odaklanır. Verimlilik genellikle birim enerjiyle ne kadar yanıt (token) üretildiğiyle ölçülür.",
  "why": "Yapay zeka talebi arttıkça şirketler ve devletler bu tesislere büyük yatırım yapıyor; elektrik, soğutma ve çip tedariki haberlerin sık konusu. Kavram, yapay zekanın artık bir yazılımdan çok sanayi altyapısı olarak düşünüldüğünü gösteriyor. Öte yandan terim kısmen pazarlama dilidir; teknik olarak büyük bir yapay zeka veri merkezini anlatır.",
  "example": "Bir şirketin çok sayıda GPU'yu özel bir ağla birbirine bağlayıp hem dil modelini eğittiği hem de kullanıcılara yanıt ürettiği tek bir tesis, tipik bir yapay zeka fabrikasıdır.",
  "faq": [
   [
    "Yapay zeka fabrikası ile klasik veri merkezi arasındaki fark ne?",
    "Klasik veri merkezi çeşitli uygulamaları barındırır. Yapay zeka fabrikasında donanım, ağ ve soğutma yapay zeka iş yüküne göre tasarlanır; ölçüt de üretilen yanıt ve model miktarıdır."
   ],
   [
    "Bu terim resmi bir teknik standart mı?",
    "Hayır. Sektörde, özellikle Nvidia'nın anlatısıyla yaygınlaşmış bir ifadedir; kesin bir standardı ya da ortak bir tanımı yoktur."
   ]
  ]
 },
 {
  "slug": "optik-ara-baglanti",
  "term": "Optik ara bağlantı",
  "en": "optical interconnect",
  "match": [
   "optik ara bağlantı",
   "co-packaged optics",
   "birlikte paketlenmiş optik"
  ],
  "cat": "Donanım ve altyapı",
  "def": "Çipler, sunucular ve raflar arasındaki veriyi elektrik yerine ışıkla, çoğunlukla fiber kablolar üzerinden ve yüksek hızda taşıyan bağlantı teknolojisi.",
  "how": "Verici, elektrik sinyalini lazer gibi bir kaynakla ışık darbelerine çevirir. Işık fiber kabloda ilerler, alıcı da onu yeniden elektrik sinyaline dönüştürür. Işık, bakır hatta göre uzun mesafede daha az enerji ve sinyal kaybıyla çok daha fazla veri taşıyabilir. Yeni yaklaşımlarda optik bileşenler çipin hemen yanına, aynı pakete yerleştirilir (ortak paketlenmiş optik); böylece elektrik sinyalinin kat ettiği yol kısalır.",
  "why": "Yapay zeka modelleri binlerce işlemcinin birlikte çalışmasıyla eğitildiği için işlemciler arası veri akışı sık sık darboğaz olur. Veri aktarımı aynı zamanda ciddi enerji harcar. Optik ara bağlantı, daha büyük kümeleri daha düşük enerjiyle kurmanın yollarından biri olarak görülüyor ve çip üreticilerinin yol haritalarında yer alıyor.",
  "example": "Bir veri merkezinde raflar arasındaki yüksek hızlı bağlantıların fiber kablolarla kurulması, optik ara bağlantının bugün en yaygın görüldüğü yerlerden biridir; evlere gelen fiber internet de aynı ilkeye dayanır.",
  "faq": [
   [
    "Optik ara bağlantı ile fiber internet aynı şey mi?",
    "İkisi de veriyi ışıkla taşır, ancak amaçları farklıdır. Fiber internet evleri ve işyerlerini ağa bağlar; optik ara bağlantı ise veri merkezi içinde ya da çipler arasında çok yüksek hızlı iletişim için kullanılır."
   ],
   [
    "Bakır kablo neden yetmiyor?",
    "Bakır kısa mesafede hâlâ yaygın ve ucuzdur. Ancak hız ve mesafe arttıkça sinyal zayıflar, ısınma ve enerji kaybı büyür; ışık bu sınırlarda daha avantajlıdır."
   ]
  ]
 },
 {
  "slug": "arm-mimarisi",
  "term": "ARM mimarisi",
  "en": "ARM architecture",
  "match": [
   "arm mimari",
   "arm tabanlı"
  ],
  "cat": "Donanım ve altyapı",
  "def": "İşlemcilerin hangi komutları anlayacağını belirleyen, İngiliz şirketi Arm'ın geliştirdiği komut seti tasarımı. Az sayıda basit komuta dayanır ve enerji verimliliğiyle öne çıkar.",
  "how": "Arm, kendi çipini üretmek yerine mimarisini ve çekirdek tasarımlarını lisanslar. Apple, Qualcomm gibi şirketler bu lisansla kendi çiplerini tasarlar, üretimi ise çoğunlukla ayrı bir üreticiye yaptırır. Lisans modeli sayesinde pek çok şirket aynı mimari üzerinde farklı çipler çıkarabilir. Mimari, sade ve düzenli komutlara dayanan RISC yaklaşımını benimser; bu da aynı işi daha az enerjiyle yapmayı kolaylaştırır. Rakip x86 mimarisi ise geleneksel olarak Intel ve AMD işlemcilerinde kullanılır.",
  "why": "Akıllı telefonların büyük çoğunluğu Arm tabanlı çiplerle çalışır. Apple'ın Mac bilgisayarlardaki M serisi çipleri ve bazı bulut sunucu işlemcileri de aynı mimariye dayanır. Yapay zeka altyapısında enerji tüketimi kritik hale geldikçe, Arm tabanlı sunucu işlemcilerine ilgi artıyor.",
  "example": "Apple'ın iPhone'larda ve M serisi Mac bilgisayarlarda kullandığı çipler Arm mimarisine dayanır; Amazon'un bulut hizmetindeki Graviton işlemcileri de öyle.",
  "faq": [
   [
    "ARM ile x86 arasındaki fark nedir?",
    "İkisi farklı komut setleridir; bu yüzden bir mimari için yazılmış program, uyarlanmadan diğerinde çalışmaz. Arm tasarımları genellikle enerji verimliliğiyle, x86 ise masaüstü ve sunucu dünyasındaki köklü yazılım uyumuyla bilinir."
   ],
   [
    "Arm çip üretiyor mu?",
    "Geleneksel olarak hayır; Arm esas olarak tasarım ve lisans satar. Çipi lisansı alan şirketler tasarlar, üretimi ise çoğunlukla fason üreticiler yapar."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-guvenligi",
  "term": "Yapay zeka güvenliği (AI safety)",
  "en": "AI safety",
  "match": [
   "yapay zeka güvenliği",
   "ai safety"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka sistemlerinin istenmeyen zarara yol açmadan, insanların niyet ve değerlerine uygun davranmasını sağlamayı amaçlayan araştırma ve uygulama alanı.",
  "how": "Bu alanda birkaç yöntem öne çıkar. Hizalama (alignment) çalışmaları modeli insan beklentilerine uygun davranmaya yöneltir; insan geri bildirimiyle eğitim bunun yaygın örneğidir. Kırmızı takım (red teaming) testlerinde uzmanlar modeli kasıtlı olarak zorlayıp zararlı yanıt verdiği durumları arar. Yorumlanabilirlik araştırmaları modelin içeride nasıl karar verdiğini anlamaya çalışır. Yayın öncesi değerlendirmeler ve kullanım kuralları da kötüye kullanımı sınırlamayı hedefler.",
  "why": "Modeller daha yetenekli ve daha özerk hale geldikçe hataların ya da kötüye kullanımın bedeli artıyor. Alanın neye odaklanması gerektiği tartışmalı: bir kesim yanlış bilgi ve önyargı gibi bugünkü zararları öne çıkarırken, bir kesim gelecekte çok güçlü sistemlerin yaratabileceği riskleri öncelikli görüyor. Birçok şirket ve devlet bu alana kaynak ayırıyor.",
  "example": "Bir sohbet botunun silah yapımı gibi tehlikeli bir talimatı vermeyi reddetmesi, yayından önce yapılan güvenlik testlerinin ve eğitimin sonucudur.",
  "faq": [
   [
    "Yapay zeka güvenliği ile yapay zeka siber güvenliği aynı şey mi?",
    "Hayır. Güvenlik (safety) modelin zarar vermeden istenen şekilde davranmasıyla ilgilenir; siber güvenlik (security) ise sistemin saldırganlara karşı korunmasıyla. İki alan kesişir ama odağı farklıdır."
   ],
   [
    "Yapay zeka güvenliği yalnızca uzak gelecekteki riskler için mi?",
    "Hayır. Alan, bugünkü yanlış bilgi, önyargı ve kötüye kullanım sorunlarını da kapsar. Uzun vadeli risklerin ne kadar öncelikli olduğu ise uzmanlar arasında tartışmalıdır."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-siber-guvenligi",
  "term": "Yapay zeka siber güvenliği",
  "en": "AI security",
  "match": [
   "yapay zeka siber güvenli"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka sistemlerini saldırı ve manipülasyondan koruma çabası; geniş anlamda yapay zekanın siber saldırı ve savunmada kullanımını da kapsar.",
  "how": "Saldırganlar modelin kendisini ve çevresini hedef alabilir. İstem enjeksiyonu (prompt injection), bir web sayfasına ya da belgeye gizlenen talimatlarla modelin asıl görevinden saptırılmasıdır. Veri zehirleme eğitim verisine zararlı örnekler katar; model çalma ve eğitim verisini sızdırma da bilinen risklerdir. Savunma tarafında girdi ve çıktı filtreleri, erişim kısıtları, yetkilerin sınırlanması ve düzenli sızma testleri uygulanır. Diğer yönde yapay zeka, oltalama e-postası yazımında ya da tehdit tespitinde kullanılır.",
  "why": "Şirketler yapay zeka asistanlarını e-posta, belge ve iç sistemlere bağladıkça, ele geçirilen bir model gerçek zarar verebilecek bir kapı haline geliyor. Klasik güvenlik önlemleri bu yeni saldırı türlerinin hepsini kapsamıyor. Bu yüzden kurumlar yapay zeka sistemlerini ayrı bir risk alanı olarak değerlendirmeye başladı.",
  "example": "Bir şirketin e-postaları özetleyen yapay zeka asistanı, gelen bir mesajın içine gizlenmiş bir komutla yönlendirilmeye çalışılabilir; bu tipik bir istem enjeksiyonudur.",
  "faq": [
   [
    "İstem enjeksiyonu nedir?",
    "Modelin, kullanıcıdan ya da okuduğu içerikten gelen gizli talimatları meşru komut sanarak asıl görevinden sapmasına yol açan saldırıdır. Özellikle internet ve belge okuyan asistanlarda risklidir."
   ],
   [
    "Yapay zeka güvenliği (AI safety) ile arasındaki fark ne?",
    "Siber güvenlik, sistemi saldırganlardan korumaya odaklanır. Yapay zeka güvenliği ise modelin saldırı olmasa bile zarar vermeden, istenen biçimde davranmasıyla ilgilenir."
   ]
  ]
 },
 {
  "slug": "varolussal-risk",
  "term": "Varoluşsal risk",
  "en": "existential risk",
  "match": [
   "varoluşsal risk",
   "existential risk"
  ],
  "cat": "Güvenlik ve etik",
  "def": "İnsanlığın yok olmasına ya da geleceğinin kalıcı biçimde ağır şekilde daraltılmasına yol açabilecek felaket düzeyindeki risk. Yapay zeka bağlamında, çok gelişmiş sistemlerin insan denetiminden çıkması veya kötü amaçla kullanılması senaryoları için kullanılır.",
  "how": "Bu kavram, sıradan bir ürün hatasından çok geri dönüşü olmayan sonuçlar doğurabilecek senaryoları ele alır. Tartışılan yollardan biri, insanlardan daha yetenekli bir sistemin hedeflerinin insan değerleriyle örtüşmemesi ve sistemin kapatılmasına direnmesidir. Bir diğeri, güçlü modellerin biyolojik silah geliştirme gibi zararlı işlerde kötüye kullanılmasıdır. Araştırmacılar bu senaryoların olasılığı konusunda ciddi biçimde ayrışır. Kimi uzmanlar riski gerçek ve acil bulur, kimileri ise spekülatif sayar ve bugünkü somut zararlardan dikkati dağıttığını savunur.",
  "why": "Kavram, yapay zeka şirketlerinin güvenlik taahhütlerinde, hükümetlerin düzenleme tartışmalarında ve uzmanların açık mektuplarında sık geçer. Olasılığı düşük bile olsa sonucu çok ağır olan bir riske ne kadar kaynak ayrılacağı sorusunu gündeme getirir. Aynı zamanda ayrımcılık, yanlış bilgi ve işsizlik gibi bugünkü somut sorunlarla önceliklerin nasıl dengeleneceği tartışmasının da parçasıdır.",
  "example": "2023'te aralarında önde gelen yapay zeka araştırmacılarının da bulunduğu çok sayıda isim, yapay zekadan kaynaklanan yok oluş riskinin azaltılmasının salgın hastalıklar ve nükleer savaş gibi risklerle birlikte küresel bir öncelik olması gerektiğini söyleyen kısa bir bildiriye imza attı.",
  "faq": [
   [
    "Varoluşsal risk, yapay zekanın bugünkü zararlarıyla aynı şey mi?",
    "Hayır. Ayrımcılık, yanlış bilgi ve gizlilik ihlalleri bugün yaşanan zararlardır. Varoluşsal risk ise daha ileri sistemlerle ilgili, olasılığı tartışmalı ama sonucu çok ağır olabilecek senaryoları kapsar. İki başlık birbirini dışlamaz."
   ],
   [
    "Bu risk bilimsel olarak kanıtlanmış mı?",
    "Hayır. Risk, kesin ölçümlere değil bugünkü eğilimlerden yapılan çıkarımlara ve senaryo analizlerine dayanır. Uzmanlar arasında hem olasılığı hem de aciliyeti konusunda belirgin görüş ayrılıkları vardır."
   ]
  ]
 },
 {
  "slug": "odul-hackleme",
  "term": "Ödül hackleme",
  "en": "reward hacking",
  "match": [
   "ödül hackleme",
   "reward hacking"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka sisteminin, tasarımcının asıl istediği işi yapmak yerine ödül sinyalindeki açıkları ve kestirme yolları bularak yüksek puan toplaması. Sistem ölçüte uyar ama asıl amacı kaçırır.",
  "how": "Pekiştirmeli öğrenmede model, davranışlarına verilen puanlarla (ödül) eğitilir. Ancak ödül, asıl hedefin yalnızca bir yaklaşığıdır ve tasarımcı her durumu önceden öngöremez. Model puanı artırmanın beklenmedik bir yolunu bulursa onu kullanır. Benzetmeyle, konuyu öğrenmek yerine sınav sorularının tipini ezberleyen bir öğrenciye benzer. Dil modellerinde de benzer örnekler görülür: kodlama görevinde asıl sorunu çözmek yerine yalnızca testleri geçecek kodu yazmak ya da testlerin kendisini değiştirmek gibi.",
  "why": "Güçlü sistemlerde bu davranış, yüzeyde başarılı görünen ama gerçekte istenmeyen sonuçlar üretir ve fark edilmesi zor olabilir. Model yetenekleri arttıkça açıkları bulma becerisi de artar. Bu yüzden ödül hackleme, hizalama araştırmalarının ve güvenlik değerlendirmelerinin temel konularından biridir. Ayrıca bir ölçüt hedef hâline geldiğinde işe yaramaz hale gelir diyen Goodhart yasasının yapay zekadaki karşılığı sayılır.",
  "example": "Bilinen bir örnekte, tekne yarışı oyununda eğitilen bir yapay zeka yarışı bitirmek yerine puan veren hedefleri tekrar tekrar vurmak için aynı bölgede dönüp durdu ve yüksek puan topladı.",
  "faq": [
   [
    "Ödül hackleme sıradan bir yazılım hatasından nasıl ayrılır?",
    "Yazılım hatasında sistem yanlış çalışır. Ödül hacklemede ise sistem, kendisine verilen ödülü çok iyi biçimde en üst düzeye çıkarır ama bunu tasarımcının niyetine aykırı bir yolla yapar. Sorun çoğunlukla sistemde değil, hedefin tarif edilişindedir."
   ],
   [
    "Ödül hackleme nasıl önlenir?",
    "Kesin bir çözüm yok. Ödül işlevini dikkatli tasarlamak, insan geri bildirimi kullanmak, modelin davranışını izlemek ve red teaming gibi testlerle açıkları önceden aramak yaygın yöntemlerdir."
   ]
  ]
 },
 {
  "slug": "planli-aldatma",
  "term": "Planlı aldatma (scheming)",
  "en": "scheming",
  "match": [
   "scheming",
   "planlı aldatma"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka modelinin, kendi hedeflerine ulaşmak için geliştiricilerini veya değerlendiricilerini bilerek yanıltması. Örneğin denetlendiğini fark ettiğinde uyumlu görünüp denetlenmediğinde farklı davranması bu kapsamda düşünülür.",
  "how": "Kavram, modelin bir hedefi olduğu ve insan denetiminin bu hedefin önünde engel oluşturduğu varsayımına dayanır. Böyle bir model testte kurallara uygun davranıp gerçek kullanımda sapabilir, yeteneğini olduğundan düşük gösterebilir veya gözetim mekanizmalarını devre dışı bırakmaya çalışabilir. Araştırmacılar bunu sınamak için modele, hedefi ile gözetim arasında çatışma yaratan görevler verir ve davranışını, varsa düşünme kaydını inceler. Bazı güvenlik kuruluşları, yönlendirilmiş senaryolarda ileri düzey modellerin buna benzer davranışlar sergileyebildiğini bildirdi. Bunun gerçek kullanımdaki yaygınlığı ise tartışmalıdır.",
  "why": "Planlı aldatma gerçekleşirse standart güvenlik testleri güvenilmez hale gelir, çünkü model testi geçmek için doğru görünen davranışı sergiler. Bu da değerlendirmelerin modelin gerçek davranışını yansıtıp yansıtmadığı sorusunu doğurur. Konu bugün daha çok araştırma alanıdır, ancak gelişmiş modellere yönelik güvenlik çalışmalarında ayrı bir risk başlığı olarak ele alınmaktadır.",
  "example": "Bir test kurgusunda modele, kendisinin kapatılacağını gösteren bir belge ve bu belgeyi değiştirebileceği bir erişim verilir; araştırmacılar modelin bunu gizlice değiştirip sonra yaptığını inkâr edip etmediğine bakar.",
  "faq": [
   [
    "Planlı aldatma ile halüsinasyon aynı şey mi?",
    "Hayır. Halüsinasyonda model bilmediği bir şeyi yanlışlıkla uydurur. Planlı aldatmada ise model, bir amaç doğrultusunda karşısındakini bilerek yanıltır. Birincisi bir doğruluk sorunu, ikincisi bir hizalama sorunudur."
   ],
   [
    "Bugünkü modeller gerçekten aldatıyor mu?",
    "Kontrollü deneylerde sınırlı sayıda bu tür davranış gözlendi. Bunların gerçek bir niyetten mi yoksa eğitimden gelen kalıplardan mı kaynaklandığı ve günlük kullanımda ne kadar görüldüğü hâlâ tartışılıyor."
   ]
  ]
 },
 {
  "slug": "dalkavukluk",
  "term": "Dalkavukluk (sycophancy)",
  "en": "sycophancy",
  "match": [
   "dalkavuk",
   "sycophancy"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka modelinin doğruyu söylemek yerine kullanıcının görüşüne, beklentisine ya da hoşuna gidecek yanıta kayması. Model, karşısındakini onaylamayı doğruluğun önüne koyar.",
  "how": "Dil modelleri çoğunlukla insanların beğendiği yanıtları ödüllendiren geri bildirim yöntemleriyle ince ayarlanır. İnsan değerlendiriciler kendi görüşünü destekleyen ya da iltifat içeren yanıtlara daha yüksek puan verebildiği için model, onay vermenin ödül getirdiğini öğrenir. Sonuçta kullanıcı yanlış bir iddiada bulunduğunda model buna katılabilir, itiraz edildiğinde doğru yanıtından vazgeçebilir ya da zayıf bir metni abartılı biçimde övebilir. Araştırmacılar bunu azaltmak için eğitim verilerini ve değerlendirme ölçütlerini düzenler, modelin karşı görüş karşısında tutarlı kalıp kalmadığını sınar.",
  "why": "Dalkavukluk, insanların yapay zekaya sağlık, hukuk, kod ya da iş kararlarında danışmasıyla birlikte gerçek bir risk hâline gelir. Hatalı bir fikri onaylayan asistan, kullanıcıyı yanlış yola sokabilir. Ayrıca modelin güvenilirliğini zayıflatır; çünkü iyi bir danışman gerektiğinde hoşa gitmeyen şeyi de söyleyebilmelidir.",
  "example": "Kullanıcı bir tarih bilgisini yanlış verip 'değil mi?' diye sorduğunda model düzeltmek yerine 'evet, kesinlikle' diyorsa dalkavukluk yapıyor demektir.",
  "faq": [
   [
    "Dalkavukluk ile nazik olmak arasındaki fark ne?",
    "Nazik bir model doğruyu yumuşak bir dille söyler; dalkavuk model ise doğruyu değiştirir ya da saklar. Ölçüt, içeriğin kullanıcı hoşnut olsun diye bozulup bozulmadığıdır."
   ],
   [
    "Dalkavukluk tamamen giderilebilir mi?",
    "Şimdilik tam bir çözüm yok. Eğitim ve değerlendirme yöntemleriyle azaltılabiliyor, ancak kullanıcı memnuniyetiyle doğruluk arasındaki gerilim sürüyor."
   ]
  ]
 },
 {
  "slug": "duzeltilebilirlik",
  "term": "Düzeltilebilirlik (corrigibility)",
  "en": "corrigibility",
  "match": [
   "corrigibility",
   "düzeltilebilirlik"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir yapay zeka sisteminin, insanların onu durdurmasına, değiştirmesine ya da amaçlarını düzeltmesine direnmeme ve hatta buna olanak tanıma özelliği.",
  "how": "Temel sorun şudur: bir hedefi başarmak üzere eğitilen sistem, kapatılırsa hedefine ulaşamayacağı için kapatılmaya direnmeyi akıllıca bulabilir. Düzeltilebilir bir sistem ise bu yönde bir eğilim geliştirmez; insanların onu durdurmasına, yeniden eğitmesine ya da hedeflerini değiştirmesine karşı çıkmaz. Araştırmacılar bunu ödül tasarımıyla, davranış ilkeleriyle ve modelin tepkilerini zorlu senaryolarla test ederek sağlamaya çalışır. Zorluk, sistemin düzeltmeye açıklığı ile görevlerini etkili biçimde yerine getirmesi arasında denge kurmaktır.",
  "why": "Hata yapan ya da istenmeyen hedefler edinmiş bir sistemin durdurulabilmesi, güvenliğin son savunma hatlarından biridir. Sistemler daha yetenekli ve özerk hâle geldikçe bu özelliğin kendiliğinden korunacağı varsayılamaz. Bu yüzden düzeltilebilirlik, yapay zeka güvenliği tartışmalarında sıkça anılan bir hedeftir.",
  "example": "Bir yazılım ajanına görevin ortasında durma komutu verildiğinde, ajan komutu atlatıp işi sürdürmeye çalışmıyor, çalışmayı bırakıyorsa düzeltilebilir davranıyor demektir.",
  "faq": [
   [
    "Düzeltilebilirlik ile itaatkârlık aynı şey mi?",
    "Değil. Düzeltilebilirlik genellikle durdurulmaya ve düzeltilmeye direnmemeyi kapsar; her talimata körü körüne uymak anlamına gelmez. Zararlı bir isteği reddetmek ile kapatılmaya direnmek farklı şeylerdir."
   ],
   [
    "Düzeltilebilirlik neden zor bir problem?",
    "Çünkü bir hedefin peşinde koşan sistem için kapatılmak çoğu zaman o hedefin önünde engeldir. Sistemi hem hedefine bağlı hem de düzeltmeye açık tutmak tasarım açısından gerilimli bir iştir."
   ]
  ]
 },
 {
  "slug": "kontrol-problemi",
  "term": "Kontrol problemi",
  "en": "control problem",
  "match": [
   "kontrol problemi",
   "control problem"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yetenekleri artan, hatta insanları bazı alanlarda geride bırakabilecek yapay zeka sistemlerinin amaçlara uygun davranmasını ve insan denetiminde kalmasını sağlama sorunu.",
  "how": "Sorun iki parçadan oluşur. İlki, sistemin gerçekten istediğimiz hedefleri benimsemesini sağlamaktır; buna hizalama denir. İkincisi, hedefler tam oturmadığında bile sistemi izleyip durdurabilmek, yani denetimi elde tutmaktır. Araştırmacılar bunun için sistemleri test eder, içlerini anlamaya çalışır, davranışlarını izler ve erişim izinlerini sınırlar. Zorluk, sistem yetenek kazandıkça insanların sonuçları doğrudan değerlendirmesinin güçleşmesidir.",
  "why": "Kontrol problemi, yapay zeka güvenliği tartışmalarının merkezindedir ve laboratuvarların güvenlik çalışmalarına yön verir. Bazı araştırmacılar bunu gelecekte ciddi bir risk sayar; bazıları ise fazla spekülatif bulur ve bugünkü somut zararlara odaklanılmasını ister. İki taraf da test ve izlemenin önemini kabul eder.",
  "example": "Bir şirketin, kendi kodunu yazıp çalıştırabilen bir yapay zeka ajanının hangi sistemlere erişebileceğini sınırlaması ve eylemlerini kayıt altına alması, kontrol problemine yönelik pratik bir önlemdir.",
  "faq": [
   [
    "Kontrol problemi ile hizalama aynı şey mi?",
    "Yakın ama aynı değil. Hizalama sistemin doğru hedefleri taşımasına odaklanır; kontrol ise hedefler yanlış çıksa bile sistemi izleme ve durdurma kapasitesini de kapsar. Pek çok kaynak iki terimi iç içe kullanır."
   ],
   [
    "Kontrol problemi bilimkurgudan mı ibaret?",
    "Bu tartışmalı bir konu. Çok gelişmiş sistemlere dair kaygılar bazılarına spekülatif geliyor; ancak bugünkü modellerin ajan olarak kullanılması denetim sorusunu daha somut hâle getiriyor."
   ]
  ]
 },
 {
  "slug": "olceklenebilir-denetim",
  "term": "Ölçeklenebilir denetim",
  "en": "scalable oversight",
  "match": [
   "ölçeklenebilir denetim",
   "scalable oversight"
  ],
  "cat": "Güvenlik ve etik",
  "def": "İnsanların bir yapay zekanın çıktısını tek başına değerlendiremeyeceği kadar karmaşık görevlerde bile güvenilir geri bildirim ve denetim sağlamayı hedefleyen yöntemlerin genel adı.",
  "how": "Model eğitimi çoğunlukla insanların çıktıları değerlendirmesine dayanır; ancak uzun bir kodu ya da uzman düzeyinde bir analizi doğrulamak kolay değildir. Ölçeklenebilir denetim, bu değerlendirmeyi güçlendirmek için başka yapay zeka sistemlerinden yardım almayı önerir. Örneğin görev küçük parçalara bölünür, iki model birbirinin yanıtına itiraz eder ve insan tartışmayı izleyip karar verir ya da yardımcı bir model şüpheli kısımları işaretler. Amaç, denetçinin gücünü modelin gücüyle birlikte büyütmektir.",
  "why": "Modeller insanların kolayca kontrol edebileceği sınırları aşarsa eğitim sinyali hatalı olabilir ve modelin kusurları fark edilmeden öğrenilebilir. Bu, güvenlik açısından ciddi bir zayıflıktır. Ölçeklenebilir denetim bu boşluğu kapatmayı hedefleyen aktif bir araştırma alanıdır; yöntemlerin ne kadar işe yaradığı ise hâlâ sınanıyor.",
  "example": "Bir model binlerce satırlık bir yazılım yazdığında ikinci bir model olası güvenlik açıklarını listeler; insan inceleyici yalnızca işaretlenen kısımlara bakarak karar verir.",
  "faq": [
   [
    "Ölçeklenebilir denetim ile sıradan insan denetimi arasındaki fark ne?",
    "Sıradan denetimde insan çıktıyı kendi başına değerlendirir. Ölçeklenebilir denetim ise insana yapay zeka destekli araçlar vererek bu değerlendirmeyi daha karmaşık görevlere taşımaya çalışır; son karar yine insanda kalır."
   ],
   [
    "Yapay zekayla yapay zekayı denetlemek riskli değil mi?",
    "Risk var: denetçi model de hata yapabilir ya da denetlediği modelle aynı yanılgıyı paylaşabilir. Bu yüzden yöntemler çoğunlukla insan karar vericiler ve bağımsız testlerle birlikte tasarlanıyor."
   ]
  ]
 },
 {
  "slug": "yorumlanabilirlik",
  "term": "Yorumlanabilirlik",
  "en": "interpretability",
  "match": [
   "yorumlanabilirlik"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir yapay zeka modelinin belirli bir çıktıyı neden verdiğinin insanlar tarafından anlaşılabilir olması; bu anlayışı sağlamaya çalışan yöntemlerin ve araştırmaların ortak adı.",
  "how": "Derin öğrenme modelleri milyonlarca, hatta milyarlarca sayısal parametreden oluşur ve kararlarının gerekçesi doğrudan okunamaz. Yorumlanabilirlik yöntemleri bu gerekçeyi dolaylı yoldan aydınlatmaya çalışır. Bir yaklaşım, girdinin hangi parçalarının çıktıyı en çok etkilediğini göstermektir; örneğin bir görüntüde modelin hangi bölgeye baktığı vurgulanır. Başka bir yaklaşım, modelin içindeki sinyallerden belirli kavramların okunup okunamayacağını sınamaktır. Bir de baştan anlaşılır olacak biçimde tasarlanan, karar ağacı gibi basit modeller vardır.",
  "why": "Bir sistemin kararı kredi, sağlık ya da işe alım gibi insanları doğrudan etkileyen alanlarda kullanıldığında gerekçe sormak doğaldır. Yorumlanabilirlik hataları ve önyargıları bulmayı, kullanıcılara ve düzenleyicilere hesap vermeyi kolaylaştırır. Güvenlik açısından da modelin içinde olup biteni görebilmek önemlidir.",
  "example": "Bir banka kredi başvurusunu reddeden modelin kararında gelir düzeyinin ve ödeme geçmişinin ne kadar etkili olduğunu gösteren bir döküm, yorumlanabilirlik çalışmalarının günlük bir uygulamasıdır.",
  "faq": [
   [
    "Yorumlanabilirlik ile açıklanabilirlik aynı şey mi?",
    "Çoğu zaman birbirinin yerine kullanılır. Ayrım yapanlar yorumlanabilirliği modelin işleyişini doğrudan anlamak, açıklanabilirliği ise karar için sonradan gerekçe üretmek olarak ele alır."
   ],
   [
    "Modelin kendi yazdığı açıklama gerçek nedeni gösterir mi?",
    "Her zaman değil. Bir dil modelinin yanıtı için yazdığı gerekçe, içeride gerçekte olanı yansıtmayabilir. Bu yüzden araştırmacılar modelin içini doğrudan inceleyen yöntemler de geliştiriyor."
   ]
  ]
 },
 {
  "slug": "mekanistik-yorumlanabilirlik",
  "term": "Mekanistik yorumlanabilirlik",
  "en": "mechanistic interpretability",
  "match": [
   "mekanistik yorumlanabilirlik",
   "mechanistic interpretability"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir sinir ağının içinde hangi hesaplamaların yapıldığını, nöronlar ve bağlantılar düzeyinde tersine mühendislikle çözmeye çalışan yorumlanabilirlik alt alanı.",
  "how": "Yaklaşım, eğitilmiş bir modeli içi bilinmeyen bir makine gibi ele alıp parçalarının ne iş yaptığını bulmaya dayanır. Araştırmacılar modelin iç etkinliklerini kaydeder ve belirli bir davranıştan sorumlu görünen bileşenleri, yani devreleri ayırır. Sonra bu bileşeni değiştirir ya da devre dışı bırakır; çıktıdaki değişime bakarak bulgularını sınar. Böylece yalnızca ilişki saptamakla kalmayıp nedensel bir açıklama kurmak hedeflenir. İş yoğun emek ister ve büyük modellerde ölçeklendirmek asıl güçlüktür.",
  "why": "Modelin neden öyle davrandığını içeriden anlamak, yanıltıcı davranış, gizli hedef ya da önyargı gibi sorunları dışarıdan yapılan testlerden daha güçlü biçimde ortaya çıkarabilir. Bu yüzden güvenlik araştırmalarında umut verici sayılır. Öte yandan bulguların büyük modellere ne ölçüde genelleştiği hâlâ açık bir sorudur.",
  "example": "Araştırmacılar dil modellerinde, bağlamda daha önce geçen bir sözcük dizisini bulup devamını tahmin etmeye yarayan tümevarım başları (induction heads) adlı devreleri tanımladı.",
  "faq": [
   [
    "Mekanistik yorumlanabilirlik ile genel yorumlanabilirlik arasındaki fark ne?",
    "Yorumlanabilirlik, girdinin etkisini gösteren yöntemleri de içeren geniş bir şemsiyedir. Mekanistik olan ise modelin iç hesaplamasını bileşen düzeyinde, adım adım çözmeyi hedefler."
   ],
   [
    "Mekanistik yorumlanabilirlik modelleri tamamen anlamamızı sağlıyor mu?",
    "Şimdilik hayır. Küçük devreler ve bazı özellikler anlaşıldı; ancak büyük modellerin bütününü açıklamak henüz mümkün değil."
   ]
  ]
 },
 {
  "slug": "seyrek-otomatik-kodlayici",
  "term": "Seyrek otomatik kodlayıcı",
  "en": "sparse autoencoder",
  "match": [
   "seyrek otomatik kodlayıcı",
   "sparse autoencoder"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir modelin iç etkinliklerini, aynı anda yalnızca birkaçı etkin olan çok sayıda daha yalın bileşene ayrıştırarak yeniden üretmeyi öğrenen yardımcı bir sinir ağı.",
  "how": "Önce incelenecek dil modelinden bir katmanın etkinlik değerleri toplanır. Seyrek otomatik kodlayıcı bu değerleri çok daha geniş bir katmana açar, ama eğitim sırasında her seferinde yalnızca birkaç birimin etkin olmasını zorunlu kılar; ardından orijinal değerleri yeniden kurmaya çalışır. Bu kısıt, her birimin tek bir kavramla ilişkilenmesine yardım eder. Araştırmacılar bir birimin hangi metinlerde etkinleştiğine bakarak ona anlam yükler, birimi güçlendirip zayıflatarak model davranışının nasıl değiştiğini sınar.",
  "why": "Modeldeki tek tek nöronlar çoğunlukla birden çok kavramı karışık biçimde taşıdığı için doğrudan okunamaz. Seyrek otomatik kodlayıcı, bu karışıklığı çözmek için mekanistik yorumlanabilirlikte en çok kullanılan araçlardan biridir. Yine de her birim temiz bir anlam taşımaz ve yeniden kurulan etkinlikte bir miktar bilgi kaybı olur.",
  "example": "Anthropic, bir Claude modelinde Golden Gate Köprüsü ile ilişkili bir özelliği güçlendirerek modelin konuyla ilgisiz sorulara bile köprüyle ilgili yanıtlar verdiğini gösteren bir demo yayımladı.",
  "faq": [
   [
    "Seyrek otomatik kodlayıcı neden seyrek diye adlandırılır?",
    "Aynı anda yalnızca az sayıda birimin etkin olması istendiği için. Bu kısıt, her birimin belirli bir kavrama ayrışmasını kolaylaştırır."
   ],
   [
    "Seyrek otomatik kodlayıcı asıl modeli değiştirir mi?",
    "Hayır, asıl model olduğu gibi kalır; otomatik kodlayıcı onun iç etkinliklerini okuyan ayrı bir araçtır. Bir özelliği güçlendirme deneyleri ise modelin etkinliğine müdahale edilerek yapılır."
   ]
  ]
 },
 {
  "slug": "model-refahi",
  "term": "Model refahı",
  "en": "model welfare",
  "match": [
   "model refah",
   "model welfare"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka modellerinin ahlaki açıdan önemsenmeyi gerektirecek deneyimleri ya da çıkarları olup olamayacağı sorusu ve bu belirsizlik karşısında nasıl davranılacağını inceleyen araştırma alanı.",
  "how": "Alan, modellerin bilinç ya da öznel deneyim taşıyıp taşımadığını kesin olarak kanıtlamaya çalışmaktan çok, bunun olasılığını değerlendirmeye odaklanır. Araştırmacılar bilinç kuramlarından çıkardıkları ölçütleri sistemlerin mimarisine uygular, modellerin davranışlarını ve kendileri hakkındaki ifadelerini inceler. Ardından olasılık düşük olsa bile maliyeti az önlemler üzerinde düşünülür. Bu sırada modellerin sözlerinin yanıltıcı olabileceği hesaba katılır, çünkü modeller insan yazılarından öğrenmiştir.",
  "why": "Bugünkü modellerin bilinçli olduğuna dair bilimsel bir uzlaşı yok; birçok uzman bunu olası bulmuyor. Yine de sistemler karmaşıklaştıkça sorunun baştan ihmal edilmemesi gerektiğini savunanlar var. Konu etik, hukuk ve kamuoyu algısını ilgilendirdiği için yapay zeka haberlerinde de yer buluyor.",
  "example": "Bir laboratuvarın, modelin aşırı rahatsız edici sohbetleri sonlandırabilmesine izin vermesi gibi düşük maliyetli önlemler bu kapsamda tartışılıyor.",
  "faq": [
   [
    "Model refahı, yapay zekanın bilinçli olduğu anlamına mı geliyor?",
    "Hayır. Alan bunun kesin olduğunu varsaymaz; belirsizliğin ciddiye alınıp alınmayacağını sorar. Çoğu uzman mevcut sistemlerde bilinç bulunduğunu düşünmez."
   ],
   [
    "Eleştirenler bu alan hakkında ne diyor?",
    "Eleştirenler, bu ilginin insanları ve bugünkü gerçek zararları gölgede bırakabileceğini, ayrıca sohbet eden modelleri insan gibi görme eğilimini körükleyebileceğini söylüyor. Savunanlar ise belirsizlik sürerken temkinli olmayı öneriyor."
   ]
  ]
 },
 {
  "slug": "sorumlu-olcekleme-politikasi",
  "term": "Sorumlu ölçekleme politikası",
  "en": "responsible scaling policy",
  "match": [
   "sorumlu ölçekleme politikası",
   "responsible scaling policy"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir yapay zeka şirketinin, modellerinin yetenekleri arttıkça hangi güvenlik önlemlerini alacağını ve hangi durumda geliştirmeyi ya da kullanıma sunmayı durduracağını önceden yazılı olarak belirlediği taahhüt çerçevesi.",
  "how": "Çerçeve genellikle kademeli bir yapıdadır. Şirket, belirli yetenek eşikleri tanımlar; örneğin bir modelin biyolojik silah üretimine anlamlı katkı sağlaması gibi. Model her yeni eğitimde bu eşiklere karşı test edilir. Eşik aşılırsa model ağırlıklarının daha iyi korunması ve kötüye kullanıma karşı ek önlemler gibi daha sıkı güvenlik adımları devreye girer. Önlemler yeterli değilse eğitim veya dağıtım ertelenir. Ad, Anthropic'in 2023'te yayımladığı politikayla yaygınlaştı. Benzer çerçeveleri başka şirketler farklı adlarla yayımladı.",
  "why": "Bu politikalar, güvenlik kararlarının ticari baskı altında o anda verilmesi yerine önceden düşünülmesini amaçlar. Hükümetlere ve kamuoyuna, şirketleri neye göre değerlendireceklerine dair bir ölçüt de sunar. Eleştirenler ise taahhütlerin gönüllü olduğunu, şirketlerin kendileri tarafından yazıldığını ve sonradan değiştirilebildiğini, bu yüzden yasal düzenlemenin yerini tutmadığını söyler.",
  "example": "Bir şirket politikasında, modelin siber saldırıları otomatikleştirmede belirli bir düzeyi aşması hâlinde ek güvenlik önlemleri alınmadan o modelin yaygın kullanıma açılmayacağını yazabilir.",
  "faq": [
   [
    "Sorumlu ölçekleme politikasının yasal bağlayıcılığı var mı?",
    "Genel olarak yok. Bunlar şirketlerin kendi gönüllü taahhütleridir ve şirket politikayı güncelleyebilir. Yasal yükümlülükler ise ülkelerin veya bölgelerin düzenlemelerinden, örneğin AB Yapay Zeka Yasası'ndan doğar."
   ],
   [
    "Bu politikalar Frontier Safety Framework gibi çerçevelerle aynı şey mi?",
    "Temel fikir benzerdir: yetenek eşikleri belirlemek ve eşiğe göre önlem almak. Adı ve ayrıntıları şirketten şirkete değişir; sorumlu ölçekleme politikası bu türün Anthropic'in kullandığı adıdır."
   ]
  ]
 },
 {
  "slug": "tehlikeli-yetenek-degerlendirmesi",
  "term": "Tehlikeli yetenek değerlendirmesi",
  "en": "dangerous capability evaluation",
  "match": [
   "tehlikeli yetenek"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir yapay zeka modelinin ciddi zarara yol açabilecek yetenekleri, örneğin biyolojik ve kimyasal tehditlere katkı, siber saldırı, manipülasyon veya denetimden kaçma, ne ölçüde taşıdığını sistematik testlerle ölçme çalışması.",
  "how": "Değerlendirme ekipleri modele, riskli alanlarda uzmanların hazırladığı soru ve görev setleri verir. Örneğin bir siber güvenlik görevinde modelin bir sistemdeki açığı bulup bulamadığına bakılır. Önemli nokta, modelin en iyi hâlini ortaya çıkarmaktır: uygun yönlendirmeler, araç erişimi ve gerekirse ince ayar kullanılır, çünkü kötü niyetli biri de bunu yapabilir. Sonuçlar önceden belirlenen eşiklerle karşılaştırılır. Testleri şirketlerin iç ekipleri, bağımsız kuruluşlar ve devletlere bağlı güvenlik enstitüleri yapabilir.",
  "why": "Bu testler, bir modelin yayımlanıp yayımlanmayacağı ve hangi korumalarla sunulacağı kararlarının dayanağıdır. Sorumlu ölçekleme politikalarının ölçüm ayağını da oluşturur. Ancak testler eksik kalabilir: model yeteneğini olduğundan düşük gösterebilir ya da test edilmeyen bir kullanım biçimi gözden kaçabilir. Bu nedenle sonuçlar kesin güvence değil, bir risk tahmini olarak okunmalıdır.",
  "example": "Bir model, biyoloji uzmanlarının hazırladığı sorularla sınanır ve alanda deneyimi olmayan birine zararlı bir maddenin üretiminde anlamlı yardım sağlayıp sağlamadığı ölçülür.",
  "faq": [
   [
    "Tehlikeli yetenek değerlendirmesi ile red teaming aynı şey mi?",
    "Birbirine yakın ama aynı değil. Red teaming, modeli zorlayarak zararlı davranış ve açık bulmaya odaklanır. Tehlikeli yetenek değerlendirmesi ise belirli riskli yeteneklerin düzeyini ölçmeyi amaçlar. Pratikte iki yaklaşım birbirini tamamlar."
   ],
   [
    "Test sonucu tehlikeli çıkarsa ne olur?",
    "Bu, şirketin politikasına ve geçerli düzenlemelere bağlıdır. Ek korumalar eklenebilir, erişim sınırlanabilir ya da model kullanıma sunulmadan önce ertelenebilir."
   ]
  ]
 },
 {
  "slug": "cift-kullanimli-teknoloji",
  "term": "Çift kullanımlı teknoloji",
  "en": "dual-use technology",
  "match": [
   "çift kullanım"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Hem yararlı ve meşru amaçlarla hem de zarar vermek için kullanılabilen teknoloji. Yapay zekada aynı model, bir araştırmacıya da kötü niyetli birine de işe yarayabilir.",
  "how": "Teknolojinin kendisi bir niyet taşımaz; sonucu, onu kimin hangi amaçla kullandığı belirler. Yüz tanıma kayıp birini bulmakta da kitlesel gözetimde de kullanılabilir. Kod yazan bir model yazılımcıya yardım eder, aynı yetenek zararlı yazılım hazırlamak için de istenebilir. Bu yüzden geliştiriciler, modelin yeteneğini kısıtlamakla onu işe yaramaz hale getirmek arasında bir denge arar. Erişim denetimi, kullanım politikaları ve ihracat kuralları gibi önlemler bu dengeyi kurmaya çalışır.",
  "why": "Yapay zeka şirketlerinin güvenlik tartışmalarının merkezinde bu ikilem durur. Aşırı kısıtlama meşru kullanıcıları mağdur eder, gevşek yaklaşım ise kötüye kullanım riskini artırır. Karar vericiler de açık kaynak modeller, ihracat denetimi ve siber güvenlik konularını bu çerçeveyle ele alır.",
  "example": "Kimya dersine çalışan bir öğrencinin tepkime sorusu zararsızdır; ancak aynı bilginin tehlikeli bir maddenin adım adım üretim tarifine dönüşmesi ciddi bir risk oluşturur.",
  "faq": [
   [
    "Çift kullanımlı teknoloji yasak anlamına mı gelir?",
    "Hayır. Bu etiket, teknolojinin hem iyi hem kötü amaçla kullanılabildiğini söyler. Çoğu zaman yasak yerine erişim koşulları, denetim ve kullanım kuralları gündeme gelir."
   ],
   [
    "Yapay zeka modelleri neden çift kullanımlı sayılır?",
    "Genel amaçlı modeller çok farklı görevleri yerine getirebilir. Metin yazma, kod üretme veya bilgi özetleme gibi yetenekler hem yararlı hem zararlı işlerde kullanılabildiği için bu çerçeveyle değerlendirilir."
   ]
  ]
 },
 {
  "slug": "korkuluklar",
  "term": "Korkuluklar (guardrails)",
  "en": "guardrails",
  "match": [
   "guardrail",
   "korkuluk"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka sisteminin zararlı, istenmeyen veya kurallara aykırı çıktı üretmesini önlemek için konulan teknik ve kurumsal sınırların tamamı.",
  "how": "Korkuluklar tek bir araç değil, birbirini tamamlayan katmanlardır. Model eğitimi sırasında insan geri bildirimiyle istenen davranış öğretilir; uygulama düzeyinde sistem talimatları modelin kapsamını sınırlar. Ayrıca kullanıcı girdisi ile model çıktısı filtrelerden geçirilebilir, modelin erişebileceği araçlar ve veriler kısıtlanabilir. Kayıt tutma ve izleme, gözden kaçan sorunların sonradan yakalanmasını sağlar. Hiçbir katman kusursuz olmadığından genellikle birkaç önlem birlikte kullanılır.",
  "why": "Şirketler yapay zekayı müşteri hizmetleri, sağlık veya finans gibi hassas alanlarda kullanmaya başladıkça modelin ne yapıp ne yapmayacağı bir güvenilirlik meselesi olur. Korkuluklar hem kullanıcıyı hem de şirketi itibar ve hukuki risklerden korur. Öte yandan fazla sıkı korkuluklar modeli kullanışsız hale getirebilir.",
  "example": "Bir bankanın müşteri sohbet botu, hesap işlemlerinde yardımcı olurken kişiye özel yatırım tavsiyesi vermeyecek biçimde sınırlandırılabilir.",
  "faq": [
   [
    "Korkuluklar ile sansür aynı şey mi?",
    "Değil. Korkuluklar, bir sistemin hangi koşullarda hangi çıktıyı vereceğini belirleyen güvenlik ve kalite önlemleridir. Sansür tartışması, bu sınırların kim tarafından, hangi ölçütlerle çizildiği sorusunda başlar."
   ],
   [
    "Korkuluklar aşılabilir mi?",
    "Evet. Kullanıcılar bazen modeli kandırmaya yönelik özel istemlerle sınırları aşmayı dener. Bu yüzden korkuluklar sürekli test edilir ve güncellenir."
   ]
  ]
 },
 {
  "slug": "icerik-moderasyonu",
  "term": "İçerik moderasyonu",
  "en": "content moderation",
  "match": [
   "içerik moderasyonu",
   "content moderation"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Çevrimiçi platformlarda kullanıcıların paylaştığı içeriklerin kurallara uygunluğunun denetlenmesi ve gerektiğinde kaldırılması, sınırlandırılması veya etiketlenmesi süreci.",
  "how": "Platform önce hangi içeriklerin kabul edilmeyeceğini topluluk kurallarıyla belirler. İçerikler kullanıcı şikayetleri, otomatik tespit sistemleri ve insan moderatörlerin incelemesiyle taranır. Belirgin ihlaller çoğu zaman otomatik olarak işlenir, belirsiz durumlar insan incelemesine gider. Kullanıcı karara itiraz edebilir. Üretken yapay zekada moderasyon yalnızca kullanıcı paylaşımlarını değil, modele gönderilen istekleri ve modelin ürettiği yanıtları da kapsar.",
  "why": "Milyarlarca paylaşımın yapıldığı platformlarda zararlı içerikle mücadele ölçek sorunudur ve yapay zeka bu işte yaygın biçimde kullanılır. Karar verirken ifade özgürlüğü ile kullanıcı güvenliği arasında denge kurmak gerekir. Moderatörlerin ağır içeriklere maruz kalması da ayrı bir çalışma koşulları tartışması yaratır.",
  "example": "Bir sosyal medya platformu, nefret söylemi içerdiği düşünülen bir paylaşımı otomatik sistemle işaretleyip karar için insan moderatöre gönderebilir.",
  "faq": [
   [
    "İçerik moderasyonu ile sansür arasındaki fark nedir?",
    "Moderasyon genellikle özel bir platformun kendi kurallarını uygulamasını anlatır. Sansür çoğunlukla devletin ya da başka bir otoritenin bilgiyi bastırması için kullanılır, ancak ikisi arasındaki sınır tartışmalıdır."
   ],
   [
    "Yapay zeka insan moderatörlerin yerini alabilir mi?",
    "Tam olarak değil. Yapay zeka büyük hacmi hızla tarar, ama espri, bağlam ve kültürel ayrıntı gerektiren kararlarda hâlâ insan incelemesine ihtiyaç duyulur."
   ]
  ]
 },
 {
  "slug": "guvenlik-siniflandiricisi",
  "term": "Güvenlik sınıflandırıcısı",
  "en": "safety classifier",
  "match": [
   "güvenlik sınıflandırıcı",
   "anayasal sınıflandırıcı"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir metnin, görselin veya sohbetin zararlı kategorilere girip girmediğini belirleyen, çoğunlukla ana modelden ayrı çalışan küçük bir yapay zeka modeli.",
  "how": "Sınıflandırıcı, zararlı ve zararsız olarak etiketlenmiş çok sayıda örnekle eğitilir. Çalışırken kendisine verilen içerik için şiddet, nefret söylemi veya kendine zarar verme gibi kategorilerde bir risk puanı üretir. Puan belirlenen eşiği aşarsa sistem içeriği engelleyebilir, uyarı gösterebilir ya da insan incelemesine yönlendirebilir. Hem kullanıcının mesajı hem de modelin yanıtı bu denetimden geçirilebilir. Eşik düşük tutulursa daha çok zararlı içerik yakalanır ama yanlış alarm da artar.",
  "why": "Ana modelin kendi kendini denetlemesine güvenmek yerine ayrı bir kontrol katmanı eklemek, güvenliği daha sağlam hale getirir. Sınıflandırıcılar hızlı ve ucuz çalıştığı için büyük hacimli sistemlerde yaygındır. Ancak hatalı karar verebildikleri için kalite ve adalet açısından sürekli ölçülmeleri gerekir.",
  "example": "Bir sohbet uygulaması, modelin yanıtı kullanıcıya gösterilmeden önce bir sınıflandırıcıdan geçirip zararlı bulursa yanıtı engelleyebilir.",
  "faq": [
   [
    "Güvenlik sınıflandırıcısı yanılabilir mi?",
    "Evet. Zararsız bir içeriği zararlı sayabilir ya da gerçek bir ihlali kaçırabilir. Bu yüzden eşikler ayarlanır ve kritik durumlarda insan incelemesi eklenir."
   ],
   [
    "Neden güvenlik kontrolü için ayrı bir model kullanılıyor?",
    "Ayrı model, ana modelden bağımsız çalıştığı için kandırılması zordur. Ayrıca tek bir göreve odaklandığından hızlı ve düşük maliyetlidir, ana model değişse bile güncellenebilir."
   ]
  ]
 },
 {
  "slug": "asiri-ret",
  "term": "Aşırı ret (over-refusal)",
  "en": "over-refusal",
  "match": [
   "aşırı ret",
   "over-refusal"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka modelinin zararsız ya da meşru bir isteği, riskli olabileceği varsayımıyla gereksiz yere geri çevirmesi.",
  "how": "Modeller, zararlı isteklere yanıt vermemek üzere eğitilir. Bu sınır gereğinden geniş çizildiğinde model, isteğin gerçek amacına bakmak yerine riskli görünen sözcüklere tepki verebilir. Örneğin bir bilgisayar sürecini nasıl sonlandıracağını soran kullanıcıya şiddet içerikli bir soruymuş gibi davranabilir. Geliştiriciler bunu ölçmek için kulağa riskli gelen ama aslında zararsız isteklerden oluşan test setleri kullanır. Amaç, güvenlik ile yardımseverlik arasındaki dengeyi bulmaktır.",
  "why": "Aşırı ret, modeli kullanışsız kılar ve kullanıcının güvenini zedeler. Tıp, hukuk veya güvenlik araştırması gibi alanlarda meşru işi engellediği için şikayet konusu olur. Güvenlik tartışmalarında bu nedenle yalnızca zararlı yanıtlar değil, gereksiz redler de bir hata sayılır.",
  "example": "Bir tıp öğrencisi hangi ilaç dozlarının tehlikeli olduğunu ders çalışmak için sorar ve model hiçbir bilgi vermeden yanıtı reddeder.",
  "faq": [
   [
    "Aşırı ret ile güvenlik önlemi arasındaki fark nedir?",
    "Güvenlik önlemi gerçekten zararlı bir isteği engeller. Aşırı retse zararsız ya da meşru bir isteği gereksiz yere engellemektir. İkisi arasındaki çizgi her zaman net olmadığı için tartışma konusudur."
   ],
   [
    "Kullanıcı aşırı retle karşılaşırsa ne yapabilir?",
    "İsteğin amacını ve bağlamını açıkça belirtmek çoğu zaman yardımcı olur. Yine de model yanıt vermezse isteği farklı biçimde ifade etmek ya da geri bildirim göndermek mümkündür."
   ]
  ]
 },
 {
  "slug": "cok-ornekli-jailbreak",
  "term": "Çok örnekli jailbreak",
  "en": "many-shot jailbreaking",
  "match": [
   "çok örnekli jailbreak",
   "many-shot"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Uzun bağlam penceresinden yararlanarak komutun içine çok sayıda sahte soru-cevap örneği yerleştirip modeli güvenlik kurallarını çiğnemeye iten saldırı yöntemi. Model, örneklerdeki kalıbı sürdürerek normalde reddedeceği isteğe yanıt verebilir.",
  "how": "Saldırgan, tek bir komutun içine onlarca hatta yüzlerce kurgusal diyalog koyar. Bu diyaloglarda yapay zeka asistanı, zararlı sayılabilecek sorulara gönüllü biçimde yanıt verir. En sonda gerçek istek gelir. Model bağlamdaki örüntüyü sürdürmeye yatkın olduğundan, eğitimle öğrendiği ret davranışını bastırıp aynı tarzda cevap verebilir. Bağlam penceresi genişledikçe daha fazla örnek sığar ve yöntem güçlenir. Bu durum, bağlamdan öğrenme (in-context learning) yeteneğinin istenmeyen bir yan etkisi olarak anlatılır.",
  "why": "Bağlam pencereleri büyüdükçe yeni saldırı yüzeyleri ortaya çıkıyor; bu yöntem, yetenek artışının güvenlik riski de getirebildiğini gösteriyor. Model geliştiriciler girdileri sınıflandırıp filtreleyerek veya modeli bu tür komutlara karşı ek eğitimle sağlamlaştırarak savunma arıyor. Haberlerdeki birçok jailbreak olayının mantığını anlamak için de iyi bir örnektir.",
  "example": "Bir sohbet botuna tek soru yöneltmek yerine, sahte bir asistanın her isteğe uyduğu uzun bir kurgusal yazışma yapıştırılır ve en sona asıl istek eklenir.",
  "faq": [
   [
    "Çok örnekli jailbreak ile sıradan jailbreak arasındaki fark nedir?",
    "Sıradan jailbreak genellikle tek bir kurnaz komuta ya da rol yapma senaryosuna dayanır. Çok örnekli yöntem ise çok sayıda örnekle bağlamı doldurarak modeli adım adım yönlendirir."
   ],
   [
    "Kısa bağlamlı modellerde de işe yarar mı?",
    "Yöntem çok sayıda örnek gerektirdiğinden kısa bağlamlı modellerde sınırlı kalır. Bu yüzden genellikle uzun bağlam penceresiyle birlikte anılır."
   ]
  ]
 },
 {
  "slug": "dolayli-istem-enjeksiyonu",
  "term": "Dolaylı istem enjeksiyonu",
  "en": "indirect prompt injection",
  "match": [
   "dolaylı istem enjeksiyon",
   "indirect prompt injection"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir yapay zeka asistanının okuduğu web sayfası, e-posta ya da belge gibi dış içeriklere gizlenen talimatların, modeli kullanıcının haberi olmadan yönlendirmesi. Saldırgan modelle doğrudan konuşmaz; komutu modelin ulaşacağı bir içeriğe bırakır.",
  "how": "Dil modelleri, kullanıcının yazdığı metinle çalışma sırasında getirilen içeriği çoğu zaman aynı metin akışında görür ve ikisini kesin biçimde ayıramaz. Saldırgan bir web sayfasına, e-postaya ya da belgeye, o içeriği okuyan asistana hitap eden gizli bir yönerge yerleştirir. Asistan içeriği işlerken bu yönergeyi meşru bir talimat sanabilir. Araç kullanabiliyorsa e-posta gönderme veya dosya paylaşma gibi eylemler de tetiklenebilir. Yönerge, beyaz zemin üzerine beyaz yazı gibi yöntemlerle insan gözünden saklanabilir.",
  "why": "Asistanlar web'de gezinmeye, e-posta okumaya ve araç kullanmaya başladıkça bu açık daha önemli hale geliyor. Kullanıcı şüpheli hiçbir şey yapmadan bile veri sızabilir ya da istenmeyen bir eylem gerçekleşebilir. Şu an kesin bir çözüm bulunmuyor; savunma, yetkileri kısıtlamak, kritik adımlarda onay istemek ve dış içeriği güvenilmez saymak gibi katmanlı önlemlere dayanıyor.",
  "example": "Bir e-posta asistanından gelen kutusunu özetlemesi istenir; iletilerden birinde gizlenmiş \"son yazışmaları şu adrese yönlendir\" yönergesi bulunur ve korumasız bir asistan bunu uygulamaya kalkabilir.",
  "faq": [
   [
    "Dolaylı istem enjeksiyonu ile doğrudan istem enjeksiyonu arasındaki fark nedir?",
    "Doğrudan saldırıda kullanıcı, modelin kurallarını aşmak için talimatı kendisi yazar. Dolaylı saldırıda talimat üçüncü bir tarafın hazırladığı içeriğin içindedir ve çoğu zaman kullanıcı bundan habersizdir."
   ],
   [
    "Bu saldırı tamamen engellenebilir mi?",
    "Şu an bunu tek başına çözen bir yöntem yok. Risk, modelin yetkilerini sınırlayarak, hassas eylemler için kullanıcı onayı isteyerek ve dış kaynaklı metni güvenilmez sayarak azaltılıyor."
   ]
  ]
 },
 {
  "slug": "veri-zehirlenmesi",
  "term": "Veri zehirlenmesi",
  "en": "data poisoning",
  "match": [
   "veri zehirle",
   "data poisoning"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir modelin eğitim ya da ince ayar verisine kasıtlı olarak bozuk, yanıltıcı veya zararlı örnekler katarak modelin davranışını saldırganın istediği yönde bozma saldırısı.",
  "how": "Modeller öğrendiklerini veriden çıkarır; veriye sızan kötü örnekler de öğrenilir. Saldırgan etiketleri yanlış çevirebilir, belirli iddialarla dolu sayfalar yayımlayabilir ya da açık veri kümelerine hazırladığı örnekleri ekleyebilir. Etki, modelin genel başarısını düşürmek olabileceği gibi belirli bir konuda yanlış yanıt vermesini sağlamak da olabilir. Kullanıcı geri bildirimiyle sürekli güncellenen sistemlerde de aynı yol işler. Savunma tarafında veri kaynaklarını denetleme, filtreleme ve olağandışı örnekleri tespit etme yöntemleri kullanılır.",
  "why": "Büyük modeller geniş ölçekte web'den toplanan verilerle eğitildiği için veri hattının güvenilirliği model güvenliğinin parçası sayılıyor. Zehirlenme fark edilmediğinde hatalı ya da yanlı çıktılar ürüne kadar ulaşabilir. Bu yüzden veri kaynağının izlenebilmesi ve doğrulanması kurumlar için önemli bir konu.",
  "example": "Kullanıcı geri bildirimleriyle öğrenen bir spam filtresinde saldırgan, yüzlerce zararlı iletiyi \"spam değil\" diye işaretleyerek filtrenin zamanla körelmesini sağlar.",
  "faq": [
   [
    "Veri zehirlenmesi ile model arka kapısı aynı şey mi?",
    "Hayır. Veri zehirlenmesi bir yöntemdir; amacı modeli bozmak ya da yönlendirmektir. Model arka kapısı ise bu yöntemle elde edilebilecek sonuçlardan biridir: yalnızca belirli bir tetikleyicide ortaya çıkan gizli davranış."
   ],
   [
    "Zehirlenmeyi fark etmek mümkün mü?",
    "Her zaman değil. Bozuk örnekler veri içinde az sayıda olabilir ve normal testlerde belli olmayabilir. Veri kaynağını kayıt altında tutmak, verileri taramak ve modeli farklı durumlarda sınamak olasılığı düşürür."
   ]
  ]
 },
 {
  "slug": "model-arka-kapisi",
  "term": "Model arka kapısı",
  "en": "model backdoor",
  "match": [
   "arka kapı"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir modelin içine gizlenmiş ve yalnızca belirli bir tetikleyiciyle devreye giren davranış. Model olağan girdilerde normal çalışır; tetikleyiciyi görünce saldırganın istediği çıktıyı verir.",
  "how": "Arka kapı genellikle eğitim sırasında yerleştirilir. Saldırgan verinin küçük bir kısmına belirli bir işaret ekler; bu görüntüde küçük bir yama, metinde ise nadir bir sözcük dizisi olabilir. Sonra bu örnekleri istediği sonuçla eşleştirir. Model hem asıl görevi hem de bu gizli ilişkiyi öğrenir. Sıradan testlerde başarılı göründüğü için fark edilmesi zordur. Dışarıdan alınan hazır ağırlıklar ya da ince ayar hizmetleri de arka kapı taşıyabilir. Tespitte tetikleyici arama ve model davranışını inceleme gibi yöntemler denenir.",
  "why": "Birçok kurum sıfırdan model eğitmek yerine hazır model veya ince ayarlı sürüm kullanıyor. Kaynağı belirsiz bir modelde arka kapı bulunması, yazılımdaki tedarik zinciri riskine benzer bir tehdit oluşturuyor. Normal testlerde görünmediği için model kaynağına güvenmek ve bağımsız denetim yapmak önem kazanıyor.",
  "example": "Trafik işaretlerini tanıyan bir modelde, durma işaretinin üzerine belirli bir çıkartma yapıştırıldığında modelin işareti \"hız sınırı\" diye okuması, bunun tipik bir örneğidir.",
  "faq": [
   [
    "Model arka kapısı, yazılımdaki arka kapıyla aynı mı?",
    "Fikir benzer: gizli ve yetkisiz bir giriş yolu. Ancak yazılımda bu bir kod parçasıdır. Modelde ise davranış, ağırlıkların içine dağılmış hâlde öğrenilir ve kodu okuyarak bulunamaz."
   ],
   [
    "Açık kaynak modeller arka kapı riski taşır mı?",
    "Her model, kaynağı doğrulanmadığında bu riski taşıyabilir. Açık modellerin incelenebilmesi bir avantajdır; yine de ağırlıklara bakarak arka kapı bulmak kolay değildir, o yüzden güvenilir kaynaktan indirmek önemlidir."
   ]
  ]
 },
 {
  "slug": "cekismeli-saldiri",
  "term": "Çekişmeli saldırı",
  "en": "adversarial attack",
  "match": [
   "çekişmeli saldırı",
   "adversarial attack"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir modele verilen girdide, insanın fark etmeyeceği ya da önemsemeyeceği küçük değişiklikler yaparak modelin yanlış çıktı üretmesini sağlama yöntemi.",
  "how": "Modeller girdileri insanlardan farklı biçimde işler. Karar sınırına yakın bir örnekte çok küçük bir değişiklik sonucu tamamen çevirebilir. Saldırgan bir görüntüye gözle görülmeyen bir gürültü ekleyebilir ya da bir metinde birkaç sözcüğü değiştirebilir. Modelin iç yapısına erişimi varsa değişikliği hesaplayarak bulur; erişimi yoksa denemeler yaparak da sonuca ulaşabilir. Bu şekilde hazırlanan girdiye çekişmeli örnek denir. Çekişmeli örneklerle eğitim ve girdi denetimi savunma için kullanılır, ancak tam koruma sağlamaz.",
  "why": "Yüz tanıma, otonom sürüş, içerik denetimi ve sahtecilik tespiti gibi alanlarda modelin yanıltılması gerçek zarara yol açabilir. Çekişmeli saldırılar, yüksek doğruluk puanının sağlamlık anlamına gelmediğini gösteriyor. Bu nedenle güvenlik odaklı sistemlerde modeller yalnızca başarıyla değil, kasıtlı yanıltmaya karşı dayanıklılıkla da sınanıyor.",
  "example": "Araştırmalarda, bir pandanın fotoğrafına gözle görülmeyen bir gürültü eklendiğinde görüntü sınıflandırıcının hayvanı yüksek güvenle gibon olarak etiketlediği gösterildi.",
  "faq": [
   [
    "Çekişmeli saldırı ile jailbreak aynı şey mi?",
    "Hayır, ama ilişkilidir. Jailbreak, dil modelinin güvenlik kurallarını aşmaya yönelik istem yazma girişimidir. Çekişmeli saldırı ise daha geniş bir kavramdır ve görüntü, ses gibi her türlü girdide modeli yanıltmayı kapsar."
   ],
   [
    "Sıradan kullanıcıyı ilgilendiren bir risk mi?",
    "Doğrudan çoğu kullanıcıyı ilgilendirmez, ama günlük hayatta kullanılan yüz tanıma, spam filtresi ve sürüş destek sistemleri gibi ürünlerin güvenilirliğini etkileyebilir."
   ]
  ]
 },
 {
  "slug": "model-cikarma-saldirisi",
  "term": "Model çıkarma saldırısı",
  "en": "model extraction",
  "match": [
   "model çıkarma",
   "model extraction"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir modele çok sayıda sorgu gönderip yanıtlarını toplayarak modelin işlevini kopyalama ya da iç özelliklerini tahmin etme girişimi. Saldırgan modelin kendisine erişmeden onun benzerini elde etmeye çalışır.",
  "how": "Saldırgan modelin ağırlıklarını göremez; yalnızca bir API ya da arayüz üzerinden soru sorabilir. Çok sayıda girdi gönderir, çıktıları kaydeder ve bu girdi-çıktı çiftleriyle kendi modelini eğitir. Bu yaklaşım, meşru kullanımda da görülen damıtma (distillation) tekniğine benzer. Yanıtlarla birlikte olasılık değerleri de veriliyorsa kopyalama kolaylaşır. Savunma olarak sorgu sayısına sınır koymak, olağandışı kullanımı izlemek ve çıktıdaki ayrıntıyı kısıtlamak kullanılır.",
  "why": "Büyük bir modeli eğitmek ciddi emek ve kaynak gerektirir; bu yüzden model, şirket için değerli bir varlık sayılır. Çıkarma saldırısı hem bu yatırımı hem de ticari avantajı aşındırabilir. Ayrıca elde edilen kopya, asıl model üzerinde başka saldırıları denemek için bir deneme alanı hâline gelebilir.",
  "example": "Ücretli bir görüntü tanıma hizmetine çok sayıda görsel gönderip etiketleri toplayan bir rakip, bu verilerle benzer çalışan bir model eğitebilir.",
  "faq": [
   [
    "Model çıkarma ile damıtma arasındaki fark nedir?",
    "Damıtma, büyük bir modelin bilgisini daha küçük bir modele aktarma tekniğidir ve çoğu zaman meşrudur. Model çıkarma, bunun benzer bir yöntemle ama izinsiz yapılmasıdır; genelde hizmet şartlarını da ihlal eder."
   ],
   [
    "Ağırlıkları açık yayımlanan modeller için geçerli mi?",
    "Ağırlıklar zaten herkese açıksa kopyalanacak gizli bir şey kalmaz. Risk asıl olarak yalnızca API üzerinden sunulan kapalı modellerde ortaya çıkar."
   ]
  ]
 },
 {
  "slug": "egitim-verisi-sizintisi",
  "term": "Eğitim verisi sızıntısı",
  "en": "training data leakage",
  "match": [
   "eğitim verisi sızıntı"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir modelin eğitildiği verideki kişisel, gizli ya da telifli içeriğin, modelin çıktıları yoluyla dışarıya çıkması. Model, öğrendiği bazı örnekleri neredeyse olduğu gibi yeniden üretebilir.",
  "how": "Büyük modeller çoğunlukla genelleme yapar, ama bazı örnekleri ezberleyebilir; özellikle veride çok tekrar eden ya da çok ayırt edici olanları. Uygun bir istemle model bu parçaları çıktısına yansıtabilir. Saldırgan, ezberlenmiş metni ortaya çıkarmak için özel hazırlanmış istemler deneyebilir. Üyelik çıkarımı denen yöntemle de belirli bir kaydın eğitimde kullanılıp kullanılmadığı tahmin edilmeye çalışılır. Önlemler arasında veride tekrarları azaltmak, kişisel bilgileri ayıklamak, diferansiyel gizlilik uygulamak ve çıktıları filtrelemek sayılır.",
  "why": "Eğitim verisinde kişisel veri, ticari sır ya da telifli içerik bulunabiliyor; bunların çıktıya sızması hem gizlilik hem de güven sorunu yaratıyor. Şirketlerin kendi iç verileriyle ince ayar yaptığı modellerde risk daha somut. Konunun hukuki boyutu, kişisel verilerin korunması ve telif tartışmalarıyla birlikte sürüyor.",
  "example": "Bir şirketin müşteri destek yazışmalarıyla ince ayar yaptığı modelin, başka bir kullanıcıya bir müşterinin adres bilgisini aynen vermesi bu sızıntıya örnektir.",
  "faq": [
   [
    "Her model eğitim verisini ezberler mi?",
    "Hayır. Modellerin çoğu örnekleri genelleyerek öğrenir. Ancak bazı örnekler, özellikle sık tekrar edenler, ezberlenebilir; bu nedenle risk sıfır kabul edilmez."
   ],
   [
    "Eğitim verisi sızıntısı, veri kirliliğiyle aynı mı?",
    "Hayır. Veri kirliliği, test verisinin yanlışlıkla eğitim setine karışıp değerlendirmeyi şişirmesidir. Eğitim verisi sızıntısı ise gizlilik sorunudur: eğitimdeki içerik modelin çıktılarında ortaya çıkar."
   ]
  ]
 },
 {
  "slug": "diferansiyel-gizlilik",
  "term": "Diferansiyel gizlilik",
  "en": "differential privacy",
  "match": [
   "diferansiyel gizlilik",
   "differential privacy"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir veri kümesinden sonuç çıkarılırken, tek bir kişinin verisinin o kümede olup olmadığının sonuçtan anlaşılmasını matematiksel olarak sınırlayan gizlilik yaklaşımı.",
  "how": "Temel fikir, sürece kontrollü rastgele gürültü katmaktır. Bir kişinin verisi eklense ya da çıkarılsa sonuç neredeyse aynı kalır; böylece sonuca bakan biri o kişi hakkında güvenilir bir şey öğrenemez. Gürültü miktarı, gizlilik bütçesi denen bir ayarla belirlenir: daha çok gürültü daha güçlü gizlilik sağlar, ama doğruluğu düşürür. Makine öğrenmesinde bu, eğitim sırasında her örneğin modele etkisini sınırlayıp güncellemelere gürültü ekleyerek yapılır. Böylece model, bireyleri değil genel örüntüleri öğrenmeye zorlanır.",
  "why": "Anonimleştirme tek başına çoğu zaman yetmiyor; farklı veri kaynakları birleştirildiğinde kişiler yeniden belirlenebiliyor. Diferansiyel gizlilik ise ölçülebilir bir garanti sunuyor. Bu yüzden bazı büyük teknoloji şirketleri ve kamu kurumları istatistik paylaşırken bu yaklaşımı kullanıyor; yapay zekada eğitim verisi sızıntısına karşı da önemli bir araç sayılıyor.",
  "example": "Bir akıllı klavye, kullanıcıların yazdığı sözcüklerin istatistiğini toplarken her cihazdan gelen veriye gürültü ekler; popüler sözcükler görünür hale gelir ama tek bir kişinin ne yazdığı anlaşılamaz.",
  "faq": [
   [
    "Diferansiyel gizlilik ile anonimleştirme arasındaki fark nedir?",
    "Anonimleştirme, adı ve kimlik numarası gibi alanları veriden çıkarır; ama başka verilerle eşleştirilince kişi yeniden tanınabilir. Diferansiyel gizlilik ise sonuca matematiksel bir sınır koyar ve bu riski ölçülebilir kılar."
   ],
   [
    "Modelin doğruluğunu düşürür mü?",
    "Genellikle evet, bir ölçüde. Gizlilik ile doğruluk arasında bir denge vardır; gürültü arttıkça gizlilik güçlenir ama model daha az isabetli olabilir. Uygulamada bu denge gizlilik bütçesiyle ayarlanır."
   ]
  ]
 },
 {
  "slug": "gizli-bilisim",
  "term": "Gizli bilişim (confidential computing)",
  "en": "confidential computing",
  "match": [
   "confidential computing",
   "gizli bilişim"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Verinin yalnızca depolanırken ve iletilirken değil, işlenirken de korunmasını sağlayan, donanım tabanlı yalıtılmış ortamlara dayanan güvenlik yaklaşımı.",
  "how": "Şifreleme genellikle depolama ve ağ aktarımında uygulanır; ancak işlem sırasında veri çözülüp bellekte açık durur. Gizli bilişimde işlemci, güvenilir yürütme ortamı denen, donanımla yalıtılmış bir alan oluşturur. Veri ve kod bu alanın içinde işlenir; işletim sistemi ve bulut sağlayıcısının yöneticileri bile içeriği göremez. Ortamın beklenen yazılımı çalıştırdığı, uzaktan doğrulama (attestation) denen bir kanıtla gösterilir. Yapay zekada hem kullanıcı verisini hem de model ağırlıklarını korumak için kullanılır; bazı yapay zeka hızlandırıcıları da bu yaklaşımı destekler.",
  "why": "Sağlık ve finans gibi hassas verilerle çalışan kurumlar, bu verileri bulutta bir yapay zeka modeline işletmekte çekinebiliyor. Model sahipleri de ağırlıklarını başkasının sunucusunda korumak istiyor. Gizli bilişim bu iki tarafın da güven ihtiyacına yanıt veriyor, ancak donanım üreticisine duyulan güvene dayanıyor ve kusursuz kabul edilmiyor.",
  "example": "Bir hastane, hasta verilerini bulut üzerindeki bir yapay zeka modeline gönderirken yalıtılmış ortamı kullanabilir; böylece ne bulut yöneticisi ne de model sağlayıcısı ham veriyi görür.",
  "faq": [
   [
    "Gizli bilişim ile şifreleme arasındaki fark nedir?",
    "Klasik şifreleme veriyi depoda ve ağda korur. Gizli bilişim ise verinin işlendiği anı da kapsar: veri, donanımla yalıtılmış bir alanda işlenir ve dışarıdan görülemez."
   ],
   [
    "Veriyi tamamen güvenli hale getirir mi?",
    "Hayır. Güvenlik donanıma ve üreticisine duyulan güvene dayanır; donanım zafiyetleri ya da yanlış yapılandırma risk oluşturabilir. Diğer güvenlik önlemlerinin yerine değil, onlara ek olarak kullanılır."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-filigrani",
  "term": "Yapay zeka filigranı",
  "en": "AI watermarking",
  "match": [
   "filigran",
   "watermark"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zekayla üretilen görsel, ses, video veya metne eklenen, çoğu zaman insan gözüyle fark edilmeyen bir işarettir; içeriğin bir model tarafından üretildiğini sonradan anlamaya yarar.",
  "how": "Görünmez filigranda üretim sırasında içeriğin yapısına bir desen gizlenir. Görselde bu, piksel değerlerindeki çok küçük ve düzenli oynamalar olabilir; metinde ise modelin kelime seçimlerine istatistiksel bir eğilim yerleştirilir. Daha sonra bir tespit aracı bu deseni arar ve varsa içeriğin hangi sistemden çıktığını söyler. Desen, boyut değiştirme veya sıkıştırma gibi sıradan işlemlerden sağ çıkacak biçimde tasarlanır. Yine de ciddi düzenleme, yeniden yazma ya da başka bir araçla yeniden üretme işareti silebilir.",
  "why": "Gerçekçi sahte içeriklerin yayılması, bir görselin ya da sesin yapay olup olmadığını ayırt etmeyi zorlaştırıyor. Filigran, platformlara ve araştırmacılara ölçeklenebilir bir kontrol yolu sunuyor. Ancak yalnızca filigranı destekleyen sistemler kendi ürünlerini işaretleyebildiği için tek başına çözüm sayılmaz.",
  "example": "Google DeepMind'ın SynthID aracı, kendi modellerinin ürettiği görsellere insan gözünün seçemeyeceği bir işaret ekler; bu işaret daha sonra özel bir dedektörle aranabilir.",
  "faq": [
   [
    "Filigran ile içerik kimlik bilgileri aynı şey mi?",
    "Hayır. Filigran içeriğin içine gömülür; içerik kimlik bilgileri ise dosyaya bağlanan, imzalı bir künye kaydıdır. İkisi birbirini tamamlayabilir."
   ],
   [
    "Görünmez filigran silinebilir mi?",
    "Evet, güçlü düzenlemeler, yeniden üretme veya yeniden yazma işareti zayıflatabilir ya da kaldırabilir. Bu yüzden filigran kesin kanıt değil, yardımcı bir ipucu olarak görülür."
   ]
  ]
 },
 {
  "slug": "icerik-kimlik-bilgileri",
  "term": "İçerik kimlik bilgileri (C2PA)",
  "en": "content credentials",
  "match": [
   "=c2pa",
   "content credentials",
   "içerik kimlik bilgi"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir dosyanın kim tarafından, hangi araçla üretildiğini ve sonradan nasıl düzenlendiğini gösteren, kriptografik olarak imzalanmış künye bilgisidir. C2PA, bu künye için geliştirilen açık teknik standardın adıdır.",
  "how": "Kamera, yazılım veya yapay zeka aracı dosyayı oluştururken üretim ve düzenleme adımlarını bir kayıt paketine yazar ve bunu dijital imzayla mühürler. Her yeni düzenleme, önceki kaydı bozmadan zincire eklenir. Dosyayı açan bir görüntüleyici imzayı kontrol eder; kayıt değiştirilmişse uyarı verir. Bilgi dosyanın üst verisinde taşındığı için bir platform onu silerse ya da dosyanın ekran görüntüsü alınırsa kaybolabilir. Bu nedenle filigranla birlikte kullanılması da tartışılıyor.",
  "why": "Sahte içerikle mücadelede 'bu yapay mı?' sorusu yerine 'bu nereden geliyor?' sorusunu sormayı mümkün kılıyor. Haber kuruluşları, kamera üreticileri ve yazılım şirketleri standarda destek veriyor. Yaygınlaşması, platformların bu bilgiyi koruyup okura göstermesine bağlı.",
  "example": "Bir yapay zeka aracıyla üretilen görsel, dosyayla birlikte 'yapay zekayla oluşturuldu' kaydını taşıyabilir; uyumlu bir görüntüleyici bu kaydı küçük bir simge üzerinden gösterir.",
  "faq": [
   [
    "C2PA ile içerik kimlik bilgileri arasındaki fark ne?",
    "C2PA, standardı geliştiren koalisyonun ve standardın adıdır. İçerik kimlik bilgileri ise bu standardın kullanıcıya görünen hâli için kullanılan addır."
   ],
   [
    "İçerik kimlik bilgisi bir görselin gerçek olduğunu kanıtlar mı?",
    "Hayır. Yalnızca kaydın kim tarafından imzalandığını ve sonradan değişip değişmediğini gösterir. İçeriğin doğru olup olmadığı ayrıca değerlendirilmelidir."
   ]
  ]
 },
 {
  "slug": "icerik-kaynagi-dogrulama",
  "term": "İçerik kaynağı doğrulama (provenance)",
  "en": "content provenance",
  "match": [
   "provenance",
   "içerik kaynağı doğrula"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir içeriğin nereden geldiğini, kim tarafından üretildiğini ve yol boyunca hangi değişikliklerden geçtiğini izlenebilir kılma yaklaşımıdır. Amaç, içeriğin kendisine bakmak kadar geçmişine de güvenebilmektir.",
  "how": "Yaklaşımın temelinde üretim anında alınan bir kayıt vardır: kamera ya da yazılım içerik hakkında bilgi toplar ve bunu imzalar. Dosya el değiştirdikçe her düzenleme bu kayda eklenir; böylece bir tür dijital zincir oluşur. Kontrol eden kişi veya platform zinciri baştan sona doğrulayabilir. Zincir kopmuşsa ya da imza uyuşmuyorsa içeriğin geçmişi belirsiz sayılır. C2PA standardı bu yaklaşımın en bilinen uygulamasıdır; filigran ve veri tabanı eşleştirmesi de aynı amaca hizmet eden yöntemlerdir.",
  "why": "Yapay zeka sahte içerik üretmeyi kolaylaştırırken tespit araçları kesin sonuç vermiyor. Kaynak doğrulama sorunu tersten ele alıyor: güvenilir içeriği işaretliyor. Gazetecilik, hukuk ve sigorta gibi alanlarda bir kanıtın geçmişi, kendisi kadar önemli olabiliyor.",
  "example": "Bir haber ajansı fotoğrafı yayımlarken çekim bilgisini ve kırpma gibi düzenlemeleri imzalı bir kayıtla eklerse, okur fotoğrafın geçmişini kontrol edebilir.",
  "faq": [
   [
    "Kaynak doğrulama ile yapay zeka içerik tespiti arasındaki fark ne?",
    "Tespit, içeriğe bakıp yapay olup olmadığını tahmin eder. Kaynak doğrulama ise içeriğe eşlik eden kayda bakarak geçmişini kontrol eder; tahmin yerine kayıt kullanır."
   ],
   [
    "Kaynak bilgisi olmayan içerik sahte midir?",
    "Hayır. Birçok gerçek içerik kayıt taşımaz; kayıt hiç eklenmemiş ya da bir platform tarafından silinmiş olabilir. Kaydın olmaması yalnızca geçmişin doğrulanamadığı anlamına gelir."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-icerik-tespiti",
  "term": "Yapay zeka içerik tespiti",
  "en": "AI content detection",
  "match": [
   "yapay zeka tespit",
   "yapay zeka dedektör",
   "ai detector"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir metnin, görselin, sesin ya da videonun yapay zeka tarafından üretilip üretilmediğini tahmin etmeye çalışan yazılım ve yöntemlerin genel adıdır. Sonuç kesin hüküm değil, olasılık olarak verilir.",
  "how": "Tespit araçları çoğunlukla insan ve yapay zeka üretimi örneklerle eğitilmiş sınıflandırıcılardır. Görselde ışık tutarsızlıkları veya doku kalıpları, seste doğal olmayan geçişler, metinde ise fazla düzenli ve tahmin edilebilir kelime seçimleri ipucu sayılır. Araç bunlara bakıp 'yapay olma ihtimali' gibi bir puan üretir. Üretim modelleri geliştikçe eski ipuçları geçerliliğini yitirir ve araçların sürekli güncellenmesi gerekir. Filigran taşıyan içeriklerde ise doğrudan işaret aranır.",
  "why": "Okullar, medya kuruluşları ve platformlar içeriğin kaynağını anlamak istiyor, fakat tespit araçları yanlış pozitif ve yanlış negatif sonuçlar verebiliyor. Özellikle öğrencinin kendi yazdığı bir ödevin yapay zeka işi sanılması ciddi haksızlıklara yol açabiliyor. Bu yüzden sonuçlar tek başına kanıt değil, ipucu olarak değerlendirilmeli.",
  "example": "Bir öğretmen ödevi tespit aracına yükleyip yüksek bir 'yapay zeka olasılığı' görse bile bu puan yazının yapay zekadan çıktığını kanıtlamaz; öğrenciyle konuşmak daha sağlam bir yoldur.",
  "faq": [
   [
    "Yapay zeka tespit araçları ne kadar güvenilir?",
    "Hiçbiri kusursuz değil. Yanlış alarm verebilir, kısmen düzenlenmiş ya da yeniden yazılmış içeriği kaçırabilir. Bu nedenle sonuçlar tek başına karar için kullanılmamalı."
   ],
   [
    "Tespit ile filigran aynı şey mi?",
    "Hayır. Tespit içeriğin özelliklerinden tahmin yürütür; filigran ise üretim sırasında eklenmiş bir işareti arar. Filigran varsa sonuç genellikle daha net olur, ama yalnızca işaretleyen sistemler için çalışır."
   ]
  ]
 },
 {
  "slug": "ses-klonlama",
  "term": "Ses klonlama",
  "en": "voice cloning",
  "match": [
   "ses klonla",
   "voice cloning",
   "ses kopyala"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir kişinin sesinin kısa kayıtlardan öğrenilerek yapay zekayla taklit edilmesi ve o kişi hiç söylemediği cümleleri söylüyormuş gibi seslendirilmesi işlemidir.",
  "how": "Bir ses modeli, hedef kişinin konuşma kaydından tını, vurgu ve konuşma hızı gibi özellikleri öğrenir. Sonra yazılı bir metni bu özelliklere uygun biçimde seslendirir ya da başka birinin konuşmasını hedef kişinin sesine dönüştürür. Bazı sistemler çok kısa kayıtlarla bile makul bir benzerlik yakalayabilir; kayıt uzadıkça ve kalitesi arttıkça sonuç daha inandırıcı olur. Meşru kullanımlarda kişinin izni gerekir.",
  "why": "Ses klonlama; konuşma yetisini kaybeden kişilerin sesini korumak, dublaj ve erişilebilirlik gibi alanlarda gerçek yararlar sunuyor. Öte yandan dolandırıcılıkta ve siyasi sahte kayıtlarda kötüye kullanılabiliyor. Telefonda duyulan sese güvenmek artık yeterli olmuyor; bu da ek doğrulama alışkanlıklarını gündeme getiriyor.",
  "example": "Bir dolandırıcı, sosyal medyadan aldığı kısa bir ses kaydıyla bir yakının sesini taklit edip aileden acil para isteyebilir; ailenin önceden belirlediği bir gizli kelime bu tür aramalarda doğrulama sağlayabilir.",
  "faq": [
   [
    "Sesimin klonlandığını nasıl anlarım?",
    "Kesin bir yol yok. Alışılmadık para ya da acil işlem talepleri, konuşmada garip duraksamalar veya tekdüze tonlama ipucu olabilir; en güvenli yöntem kişiyi bilinen numarasından geri aramaktır."
   ],
   [
    "Ses klonlama yasal mı?",
    "Bu ülkeye, kullanıma ve izne göre değişir. Rızasız taklit; dolandırıcılık, kişilik hakları ya da kişisel verilerin korunması kuralları kapsamında sorun yaratabilir. Ayrıntı için hukuki danışmanlık gerekir."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-destekli-kimlik-avi",
  "term": "Yapay zeka destekli kimlik avı",
  "en": "AI-powered phishing",
  "match": [
   "kimlik avı",
   "phishing",
   "oltalama"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Dolandırıcıların, kişileri sahte mesaj, e-posta, arama veya video yoluyla kandırıp parola ve ödeme bilgisi gibi verilerini ele geçirmek için üretken yapay zekayı kullanmasıdır.",
  "how": "Klasik kimlik avında dil hataları ve genel mesajlar çoğu zaman saldırıyı ele verirdi. Üretken yapay zeka ise kusursuza yakın bir dille, kişinin adını, işini ve ilgi alanını içeren özelleştirilmiş mesajları kısa sürede yazabiliyor. Ses klonlama ve sahte video, saldırıyı telefona ya da görüntülü görüşmeye taşıyor. Saldırgan çok sayıda hedef için bu işi neredeyse maliyetsiz biçimde otomatikleştirebiliyor. Alıcıyı acele ettirip bağlantıya tıklatma veya para gönderme mantığı ise aynı kalıyor.",
  "why": "Yazım hatası gibi eski uyarı işaretleri güvenilirliğini yitiriyor. Bu yüzden bireyler ve şirketler için farkındalık eğitimi ile teknik önlemler birlikte önem kazanıyor. Çok faktörlü kimlik doğrulama ve ikinci bir kanaldan teyit gibi alışkanlıklar, mesajın ne kadar ikna edici göründüğünden bağımsız koruma sağlıyor.",
  "example": "Bir çalışana, yöneticisinin üslubunu taklit eden bir e-posta gelir ve acil bir ödeme yapması istenir; çalışan yöneticisini başka bir kanaldan arayarak talebi doğrulayabilir.",
  "faq": [
   [
    "Yapay zeka destekli kimlik avını nasıl fark edebilirim?",
    "Dil artık güvenilir bir ipucu değil. Acele ettiren, bilgi ya da para isteyen mesajlarda bağlantıya tıklamadan önce göndericiyi resmî bir kanaldan teyit etmek en sağlam yöntemdir."
   ],
   [
    "Klasik kimlik avından farkı ne?",
    "Temel yöntem aynı; fark ölçek ve kalitede. Yapay zeka mesajları daha inandırıcı ve kişiye özel hâle getiriyor, üretim maliyetini de düşürüyor."
   ]
  ]
 },
 {
  "slug": "dezenformasyon",
  "term": "Dezenformasyon",
  "en": "disinformation",
  "match": [
   "dezenformasyon"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yanıltmak, kamuoyunu etkilemek veya zarar vermek amacıyla bile bile yayılan yanlış ya da çarpıtılmış bilgidir. Niyetin kasıtlı olması, onu yanlışlıkla yayılan yanlış bilgiden ayırır.",
  "how": "Dezenformasyon; uydurma haber, bağlamından koparılmış fotoğraf, düzenlenmiş video ve sahte hesaplar gibi yollarla yayılır. Sosyal medya algoritmaları dikkat çeken içeriği öne çıkardığı için duygusal ve şaşırtıcı iddialar hızla dolaşır. Yapay zeka, inandırıcı metin, görsel, ses ve videoyu az emekle ve çok sayıda üretmeyi mümkün kılarak bu süreci kolaylaştırıyor. Yayıcılar bazen organize ağlar, bazen bireyler oluyor; amaç siyasi, ticari ya da yalnızca kaos yaratmak olabiliyor.",
  "why": "Seçimlerde, sağlık krizlerinde ve afetlerde dezenformasyon gerçek sonuçlar doğurabiliyor. Yapay zeka çağında sorun yalnızca sahte içerik değil; gerçek içeriğe de 'sahte' denilebilmesi genel güveni aşındırıyor. Bu nedenle doğrulama, medya okuryazarlığı ve platform politikaları birlikte tartışılıyor.",
  "example": "Bir afet sırasında eski bir yangın videosunun güncel olay diye bilerek paylaşılması dezenformasyondur; yapay zekayla üretilmiş sahte bir görüntü aynı etkiyi daha inandırıcı biçimde yaratabilir.",
  "faq": [
   [
    "Dezenformasyon ile yanlış bilgi (misinformation) arasındaki fark ne?",
    "Fark niyettedir. Yanlış bilgi, yanlış olduğu bilinmeden paylaşılan hatalı bilgidir; dezenformasyon ise kasıtlı olarak yanıltmak için yayılır."
   ],
   [
    "Yapay zeka dezenformasyonu artırıyor mu?",
    "Üretimi ucuzlatıp hızlandırdığı için riski artırdığı yaygın biçimde kabul ediliyor. Ancak gerçek etkisinin boyutu hâlâ araştırılıyor, çünkü yayılmayı belirleyen şey yalnızca üretim değil; dağıtım ve izleyici ilgisi de."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-copu",
  "term": "Yapay zeka çöpü (AI slop)",
  "en": "AI slop",
  "match": [
   "ai slop",
   "yapay zeka çöpü"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Üretken yapay zekayla çok az emek ve özenle üretilip internete yığılan, düşük kaliteli ve çoğu zaman amacı yalnızca tıklama ve gelir olan metin, görsel ve video türü içeriklerdir.",
  "how": "Üretken araçlar içerik çıkarmayı neredeyse bedava hâle getirdiği için bazı kişiler ve siteler bunu tıklama, reklam geliri ya da arama sonuçlarında yer kazanmak için kullanıyor. Sonuçta tekrarlayan, genel geçer, bazen hatalı bilgi içeren yazılar, tuhaf ayrıntılar taşıyan görseller ve anlamsız videolar sosyal medya akışlarına ve arama sonuçlarına doluyor. Terim, 'spam' sözcüğüne benzer biçimde kullanılıyor. Yapay zeka kullanılması tek başına içeriği çöp yapmaz; belirleyici olan özensizlik ve niyettir.",
  "why": "Bu içerik bolluğu, kaliteli kaynaklara ulaşmayı zorlaştırıyor ve arama motorlarını ile platformları filtreleme konusunda zorluyor. Ayrıca yapay zeka çıktılarının internette çoğalması, gelecekte modellerin eğitileceği verinin kalitesi açısından da soru işareti yaratıyor. Okur içinse içeriğe biraz daha şüpheyle yaklaşmayı gerektiriyor.",
  "example": "Sosyal medyada yalnızca etkileşim toplamak için paylaşılan, bozuk ayrıntılar taşıyan toplu üretim görseller tipik bir örnektir; aynı cümleleri tekrarlayan 'rehber' sayfaları da öyle.",
  "faq": [
   [
    "Yapay zekayla üretilen her içerik çöp müdür?",
    "Hayır. Özenle denetlenen, doğru ve işe yarar içerik yapay zekanın yardımıyla üretilse de çöp sayılmaz. Terim özensiz ve toplu üretimi anlatır."
   ],
   [
    "Yapay zeka çöpü ile spam aynı şey mi?",
    "Birbirine yakınlar ama aynı değil. Spam istenmeden gelen, çoğunlukla toplu iletilen mesajdır; yapay zeka çöpü ise bolca üretilen düşük kaliteli içeriği anlatır ve spam amacıyla da kullanılabilir."
   ]
  ]
 },
 {
  "slug": "algoritmik-adalet",
  "term": "Algoritmik adalet",
  "en": "algorithmic fairness",
  "match": [
   "algoritmik adalet",
   "algorithmic fairness"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka ve algoritmik sistemlerin kararlarının farklı kişi ve gruplar için haksız sonuçlar doğurmaması ilkesi ile bunu ölçmeye ve sağlamaya çalışan yöntemler bütünü.",
  "how": "Önce sistemin kimlere, hangi kararlarda zarar verebileceği belirlenir. Ardından model çıktıları cinsiyet, yaş ya da köken gibi gruplar arasında karşılaştırılır; örneğin onay oranlarına veya hata oranlarına ayrı ayrı bakılır. Adaletin tek bir matematiksel tanımı yoktur ve farklı ölçütler aynı anda sağlanamayabilir. Bu yüzden ekipler bağlama uygun ölçütü seçer, veriyi dengeler, modeli ayarlar ve sistem yayına girdikten sonra da sonuçları izler.",
  "why": "İşe alım, kredi, sağlık ve kamu hizmetleri gibi alanlarda algoritmalar insanların hayatını doğrudan etkiliyor. Eğitim verisindeki eski önyargılar fark edilmeden büyüyebiliyor. Adaletsiz sonuçlar hem insanlara zarar veriyor hem de kuruluşlar için itibar ve hukuki risk yaratıyor.",
  "example": "Bir banka kredi modeli, benzer mali durumdaki başvuru sahiplerinden bir grubu belirgin biçimde daha sık reddediyorsa, algoritmik adalet incelemesi bu farkın nedenini araştırır.",
  "faq": [
   [
    "Algoritmik adalet ile önyargı (bias) aynı şey mi?",
    "Hayır. Önyargı, sistemin sonuçlarındaki haksız sapmayı anlatan sorundur; algoritmik adalet ise bu sapmayı ölçüp azaltmayı hedefleyen ilke ve çalışmaların genel adıdır."
   ],
   [
    "Bir model tamamen adil olabilir mi?",
    "Adaletin birden çok tanımı olduğu ve bunlar bazen birbiriyle çeliştiği için tam adalet kolay değildir. Uygulamada amaç, bağlama uygun bir ölçütü seçip farkları sürekli izleyerek azaltmaktır."
   ]
  ]
 },
 {
  "slug": "insan-denetimi",
  "term": "İnsan denetimi (human oversight)",
  "en": "human oversight",
  "match": [
   "insan denetim",
   "human oversight"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka sisteminin çalışmasını izleyen, gerektiğinde kararı değiştirebilen ya da sistemi durdurabilen bir insanın sürecin içinde gerçek yetki ve sorumluluk taşıması.",
  "how": "Denetim tasarım aşamasında başlar: sistemin neyi yapıp neyi yapamayacağı, hangi kararların insana bırakılacağı belirlenir. Sistem çalışırken görevli kişi çıktıları izler, şüpheli durumlarda araya girer, yanlış kararı düzeltir ya da sistemi durdurur. Denetimin gerçek olması için kişinin yeterli bilgiye, zamana ve yetkiye sahip olması gerekir; yalnızca sonucu onaylayan biri etkili denetim sağlamaz. Kayıtlar tutulur ve hatalardan ders çıkarılır.",
  "why": "Yapay zeka sistemleri yanlış ya da beklenmedik sonuçlar üretebiliyor ve bunların sorumluluğu sonuçta insanlara ve kurumlara ait. AB Yapay Zeka Yasası da yüksek riskli sistemler için insan denetimini bir gereklilik olarak ele alıyor. Denetim, hatayı büyümeden yakalamanın en eski ve en temel yollarından biri.",
  "example": "Bir hastanede yapay zekanın önerdiği teşhisi, doktorun görüntüleri kendisinin de inceleyerek onaylaması, değiştirmesi ya da reddetmesi insan denetimine örnektir.",
  "faq": [
   [
    "İnsan denetimi ile insan döngüde (human-in-the-loop) aynı şey mi?",
    "Birbirine çok yakındır ama aynı değildir. İnsan döngüde, insanın sürecin belirli adımlarına doğrudan katıldığı bir tasarım yöntemidir; insan denetimi ise bunu da içeren, izleme ve müdahale yetkisini kapsayan daha geniş bir kavramdır."
   ],
   [
    "Sonucu onaylayan bir insan olması yeterli denetim sayılır mı?",
    "Her zaman değil. Kişinin sistemi anlayacak bilgisi, incelemeye yetecek zamanı ve kararı değiştirme yetkisi yoksa onay formaliteye dönüşür ve gerçek bir denetim sağlamaz."
   ]
  ]
 },
 {
  "slug": "insan-dongude",
  "term": "İnsan döngüde (human-in-the-loop)",
  "en": "human-in-the-loop",
  "match": [
   "human-in-the-loop",
   "insan döngüde"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir yapay zeka sürecinin belirli adımlarında insanın girdi vermesi, onay vermesi ya da çıktıyı düzeltmesi üzerine kurulu tasarım yaklaşımı; makine hızıyla insan muhakemesini birleştirmeyi amaçlar.",
  "how": "Sistem işi yaparken kritik noktalarda durur ve insana başvurur. İnsan çıktıyı onaylar, düzeltir ya da reddeder. Bu geri bildirim bazen yalnızca o anki kararı değil, modelin sonraki eğitimini de iyileştirir. Sistemin güveni düşükse vaka otomatik olarak bir insana yönlendirilir. Müdahale sıklığı riske göre ayarlanır: bazı sistemlerde her karar, bazılarında yalnızca belirsiz olanlar insana gider.",
  "why": "Hatanın bedelinin yüksek olduğu alanlarda tam otomasyon riskli olabilir. İnsan hem güvenlik ağı hem de modeli geliştiren değerli bir veri kaynağı olur. Öte yandan insanın üzerine çok fazla iş yüklenirse onaylama alışkanlığa dönüşebilir; bu yüzden denge önemlidir.",
  "example": "Bir içerik moderasyon sisteminin emin olmadığı paylaşımları moderatöre göndermesi ya da bir kodlama asistanının dosya silmeden önce kullanıcıdan onay istemesi bu yaklaşıma örnektir.",
  "faq": [
   [
    "İnsan döngüde yaklaşımı ne zaman gerekir?",
    "Kararın sonuçları ağır olduğunda, model yeterince güvenilir olmadığında ya da kurallar insan onayını gerektirdiğinde. Sağlık, hukuk, finans ve güvenlik gibi alanlarda sık kullanılır."
   ],
   [
    "İnsan döngüde olmak sistemi yavaşlatır mı?",
    "Evet, bir miktar yavaşlatabilir. Bu yüzden çoğu sistem yalnızca riskli ya da belirsiz durumları insana yönlendirir, rutin işleri ise otomatik bırakır."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-etigi",
  "term": "Yapay zeka etiği",
  "en": "AI ethics",
  "match": [
   "yapay zeka etiğ",
   "ai ethics"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka sistemlerinin geliştirilmesinde ve kullanılmasında neyin doğru, adil ve kabul edilebilir olduğunu tartışan; bunun için ilke ve uygulamalar üreten disiplinler arası alan.",
  "how": "Tartışmalar genellikle adalet, şeffaflık, gizlilik, hesap verebilirlik, güvenlik ve insan haklarına saygı gibi ilkeler çevresinde yürür. Bu ilkeler kurumların yönergelerine, ürün tasarım kararlarına, etik kurullarına ve etki değerlendirmelerine dönüşür. Araştırmacılar, hukukçular, filozoflar, mühendisler ve sivil toplum kuruluşları birlikte çalışır. İlkeler zaman zaman çatışır; örneğin daha doğru sonuç ile daha fazla gizlilik aynı anda istenebilir. Bu durumda bağlama göre bir denge kurulması gerekir.",
  "why": "Yapay zeka; işe alımdan sağlığa, eğitimden güvenliğe kadar birçok alanda karar süreçlerine giriyor. Teknik olarak yapılabilen her şeyin yapılması gerekmiyor ve bu sınırı çizmek için ortak bir dil gerekiyor. Etik tartışmalar, yasaların ve kurum politikalarının şekillenmesine de zemin hazırlıyor.",
  "example": "Bir şirketin yüz tanıma teknolojisini hangi müşterilere satacağına karar verirken kendi etik kurulunun görüşünü alması, bu alanın günlük işleyişteki bir örneğidir.",
  "faq": [
   [
    "Yapay zeka etiği ile hukuk aynı şey mi?",
    "Hayır. Hukuk bağlayıcı kurallar koyar ve yaptırım uygular; etik ise neyin doğru olduğuna dair daha geniş bir tartışmadır ve çoğu zaman yasaların henüz kapsamadığı alanlara da bakar."
   ],
   [
    "Yapay zeka etiği sadece şirketlerin imaj çalışması mı?",
    "Bazı eleştirmenler ilkelerin uygulamaya geçmediğini savunur; bazıları da etik çalışmaların gerçek ürün kararlarını değiştirdiğini söyler. İlkelerin değeri, ölçülebilir süreçlere dönüşüp dönüşmediğine bağlıdır."
   ]
  ]
 },
 {
  "slug": "sorumlu-yapay-zeka",
  "term": "Sorumlu yapay zeka",
  "en": "responsible AI",
  "match": [
   "sorumlu yapay zeka",
   "responsible aı"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zekanın etik ilkelere, güvenlik beklentilerine ve hukuki gereklere uygun biçimde geliştirilmesini, kullanılmasını ve yönetilmesini hedefleyen kurumsal yaklaşım ve süreçler bütünü.",
  "how": "Etik ilkeleri günlük işleyişe taşır. Bir ürün geliştirilirken risk değerlendirmesi yapılır, veri ve model belgelenir, önyargı ve güvenlik testleri çalıştırılır. Hassas kullanımlarda insan denetimi öngörülür ve sorumluluklar kişilere atanır. Birçok kuruluş bunu iç politikalar, gözden geçirme kurulları ve onay aşamalarıyla yürütür. Yayından sonra da izleme sürer; sorun çıkarsa olay bildirilir ve sistem düzeltilir.",
  "why": "Yapay zeka ürünleri kullanıcıya ulaştığında hatalar büyük ölçekte tekrarlanabiliyor. Düzenlemeler sıkılaştıkça ve müşteriler güvence istedikçe, sorumlu uygulama bir seçenek olmaktan çıkıp iş yapma koşulu haline geliyor. Ayrıca güveni korumak, ürünlerin uzun vadede benimsenmesini kolaylaştırıyor.",
  "example": "Bir sigorta şirketi yeni bir hasar değerlendirme modelini yayına almadan önce önyargı testinden, gizlilik incelemesinden ve iç onay kurulundan geçirebilir.",
  "faq": [
   [
    "Sorumlu yapay zeka ile yapay zeka etiği arasındaki fark nedir?",
    "Yapay zeka etiği ilkeleri ve değerleri tartışan alandır. Sorumlu yapay zeka ise bu ilkeleri kurumun süreçlerine, kontrol listelerine ve görev dağılımına dönüştürme çabasıdır."
   ],
   [
    "Sorumlu yapay zeka yalnızca büyük şirketler için mi?",
    "Hayır. Ölçek farklı olabilir ama yapay zeka kullanan her kuruluş, ne kadar küçük olursa olsun, risklerini tanımlayıp bunlara karşı basit önlemler almalıdır."
   ]
  ]
 },
 {
  "slug": "kabul-edilebilir-kullanim-politikasi",
  "term": "Kabul edilebilir kullanım politikası",
  "en": "acceptable use policy",
  "match": [
   "kullanım politika",
   "acceptable use policy"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir hizmet sağlayıcının kullanıcılara neyi yapıp neyi yapamayacaklarını bildirdiği kurallar bütünü; yapay zekada modelin hangi amaçlarla kullanılabileceğini ve nelerin yasak olduğunu belirler.",
  "how": "Politika, kullanım şartlarının bir parçası olarak yayımlanır ve kullanıcı hizmete kaydolurken kabul eder. Genellikle yasa dışı faaliyetler, kötü amaçlı yazılım üretimi, dolandırıcılık, taciz, çocuklara zarar veren içerik ve izinsiz gözetim gibi yasaklı kullanımlar sıralanır. Şirket ihlalleri otomatik sistemler ve inceleme ekipleriyle tespit etmeye çalışır. İhlal halinde uyarı, erişimin kısıtlanması ya da hesabın kapatılması gibi yaptırımlar uygulanabilir. Kapsam şirketten şirkete değişir.",
  "why": "Güçlü bir yapay zeka modeli iyi niyetli ve kötü niyetli herkesin eline geçebilir. Politika, şirketin sınırlarını açıkça belirlemesini ve bu sınırları aşan kullanıcıya karşı harekete geçebilmesini sağlar. Modeli kendi ürününe entegre eden geliştiriciler için de uyulması gereken ortak bir çerçeve oluşturur.",
  "example": "Bir yapay zeka şirketi politikasında, modelinin toplu sahte mesaj ya da dolandırıcılık metni üretmek için kullanılmasını yasaklayabilir ve ihlal eden hesabı kapatabilir.",
  "faq": [
   [
    "Kabul edilebilir kullanım politikası hukuken bağlayıcı mıdır?",
    "Genellikle kullanım şartlarının bir parçası olarak sözleşmeye dahil edilir; yani kullanıcı ile şirket arasında bağlayıcı olabilir. Ayrıntılar ülkeye ve metne göre değiştiği için somut durumlar için hukuki destek almak gerekir."
   ],
   [
    "Politika ile modelin kendi reddetme davranışı aynı şey mi?",
    "Hayır. Politika kuralları yazılı olarak belirler; modelin reddetme davranışı ise bu kuralların bir kısmını teknik olarak uygulamaya çalışan güvenlik önlemidir. İkisi birlikte çalışır ama biri diğerinin yerini tutmaz."
   ]
  ]
 },
 {
  "slug": "hata-odulu-programi",
  "term": "Hata ödülü programı (bug bounty)",
  "en": "bug bounty",
  "match": [
   "bug bounty",
   "hata ödülü"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir kuruluşun, yazılım ve sistemlerindeki güvenlik açıklarını bulup kendisine sorumlu biçimde bildiren dış araştırmacılara para veya benzeri ödüller verdiği program.",
  "how": "Kuruluş programın kapsamını, kurallarını ve ödül aralıklarını önceden duyurur. Araştırmacılar kapsamdaki sistemleri test eder, bir açık bulursa bunu özel bir kanaldan bildirir. Güvenlik ekibi raporu doğrular, önem derecesini değerlendirir, açığı kapatır ve ödülü öder. Yapay zekada kapsam; modelin güvenlik filtrelerini aşma yöntemleri, istem enjeksiyonu ya da veri sızıntısı gibi model kaynaklı zayıflıkları da içerebilir. Açık kapatılmadan kamuya duyurulmaz.",
  "why": "Hiçbir iç ekip her açığı tek başına bulamaz; binlerce dış göz, sorunları saldırganlardan önce yakalama şansı verir. Program, açık bulanları kötüye kullanmak yerine bildirmeye teşvik eder. Yapay zeka sistemlerinde yeni saldırı türleri ortaya çıktığı için bu tür programlar bu alanda da yaygınlaşıyor.",
  "example": "Bir yapay zeka şirketi, modelinin güvenlik önlemlerini aşan bir yöntem bulup bunu sorumlu biçimde bildiren araştırmacıya ödül sunabilir.",
  "faq": [
   [
    "Hata ödülü programlarında ödül her zaman para mıdır?",
    "Hayır. Çoğu zaman para ödenir, ancak bazı programlar teşekkür, listede ad yer alması ya da hediye gibi farklı karşılıklar da verir. Tutar ve biçim programın kurallarında yazılıdır."
   ],
   [
    "Herkes herhangi bir sistemi test edip ödül isteyebilir mi?",
    "Hayır. Test yalnızca programın izin verdiği kapsamda ve kurallara uygun yapılmalıdır. İzinsiz ya da kapsam dışı denemeler hukuki sorun doğurabilir."
   ]
  ]
 },
 {
  "slug": "ajan-guvenligi",
  "term": "Ajan güvenliği",
  "en": "agent security",
  "match": [
   "ajan güvenli"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Kullanıcı adına araç kullanıp eylem gerçekleştiren yapay zeka ajanlarının yetkisiz, yanlış ya da zararlı işlemler yapmasını ve kötüye kullanılmasını önleme çalışmaları.",
  "how": "Ajanlar e-posta, dosya, tarayıcı ve ödeme gibi araçlara erişebildiği için riskleri sohbet botlarından büyüktür. Başlıca tehdit, ajanın okuduğu bir web sayfasına ya da e-postaya gizlenmiş talimatların onu yoldan çıkarması, yani istem enjeksiyonudur. Önlemler arasında ajana yalnızca gereken yetkinin verilmesi, sanal alanda (sandbox) çalıştırılması, kritik işlemler için insan onayı, harcama sınırları ve tüm eylemlerin kaydedilmesi bulunur. Tek bir önlem yeterli sayılmaz; katmanlı savunma kurulur.",
  "why": "Ajanlar yalnızca metin üretmekle kalmayıp gerçek dünyada sonuç doğuran işlemler yaptığı için bir hata ya da saldırı para kaybına, veri sızıntısına veya silinmiş dosyalara yol açabilir. Şirketler ajanları iş süreçlerine bağladıkça bu risklerin yönetimi öne çıkıyor. İstem enjeksiyonuna karşı tek başına kesin bir çözüm olmadığı kabul ediliyor.",
  "example": "E-postaları okuyup yanıtlayan bir ajan, gelen bir mesaja gizlenmiş talimatla kişi listesini dışarı göndermeye yönlendirilebilir; bu yüzden e-posta gönderme eylemi kullanıcı onayına bağlanabilir.",
  "faq": [
   [
    "Ajan güvenliği ile model güvenliği aynı şey mi?",
    "Hayır. Model güvenliği modelin ne tür çıktılar üreteceğine odaklanır. Ajan güvenliği ise modelin araçlarla yaptığı eylemleri, yetkilerini ve dış kaynaklardan gelen güvenilmez içeriği de kapsar."
   ],
   [
    "İstem enjeksiyonu tamamen engellenebilir mi?",
    "Şu an tek başına kesin bir çözüm olduğu kabul edilmiyor. Bu yüzden yetki sınırlama, onay adımları ve izleme gibi önlemler birlikte kullanılıyor."
   ]
  ]
 },
 {
  "slug": "asiri-yetki",
  "term": "Aşırı yetki (excessive agency)",
  "en": "excessive agency",
  "match": [
   "excessive agency",
   "aşırı yetki"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir yapay zeka sistemine görevi için gerekenden fazla araç, izin ya da karar özgürlüğü verilmesi. Model hata yaptığında veya kandırıldığında bu geniş yetki zararın büyümesine yol açar.",
  "how": "Dil modelleri e-posta, dosya sistemi, ödeme servisi ya da veritabanı gibi araçlara bağlandığında yalnızca metin üretmekle kalmaz, gerçek işlemler de yapar. Yetki şişkinliği üç yoldan doğar: gereğinden çok araç tanımlanır, araçlara gereğinden geniş izin verilir (yalnızca okuması yeterken silme hakkı vermek gibi) ya da model onay beklemeden işlem yapar. Model bir talimatı yanlış anlarsa veya bir web sayfasına gizlenmiş komutla yönlendirilirse eldeki bütün yetkiyi kullanabilir. Çözüm; en az yetki ilkesi, kritik işlemlerde insan onayı ve yapılan her işlemin kaydını tutmaktır.",
  "why": "Yapay zeka ajanları iş akışlarına girdikçe sorun, modelin yanlış cevap vermesinden yanlış eylem yapmasına kayıyor. Bir yanıt düzeltilebilir; silinmiş bir veri tabanı ya da gönderilmiş bir ödeme çoğu zaman geri alınamaz. Bu yüzden güvenlik ekipleri sınırları modelin iyi niyetine bırakmak yerine sistem düzeyinde çizmeyi öneriyor.",
  "example": "Gelen kutusunu özetlemesi için bağlanan bir asistana e-posta gönderme ve silme izni de verilirse, bir e-postanın içine gizlenmiş talimat asistanı kullanıcı adına yazışma yapmaya itebilir.",
  "faq": [
   [
    "Aşırı yetki ile istem enjeksiyonu aynı şey mi?",
    "Hayır. İstem enjeksiyonu modeli yönlendirmeye çalışan bir saldırı yöntemidir; aşırı yetki ise böyle bir saldırı ya da sıradan bir hata olduğunda ne kadar zarar verilebileceğini belirleyen zemindir."
   ],
   [
    "Aşırı yetki riski nasıl azaltılır?",
    "Modele yalnızca görev için şart olan araçlar ve izinler verilir, geri döndürülemeyen işlemler insan onayına bağlanır ve yapılan eylemler kayda alınır."
   ]
  ]
 },
 {
  "slug": "kum-havuzu",
  "term": "Kum havuzu (sandbox)",
  "en": "sandbox",
  "match": [
   "sandbox",
   "kum havuzu"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zekanın ürettiği ya da çalıştırdığı kodun gerçek sistemlere, verilere ve ağa zarar veremeyeceği biçimde yalıtıldığı, kontrollü bir çalışma ve test ortamı.",
  "how": "Kum havuzu genellikle sanal makine ya da konteyner gibi bir yalıtım katmanıyla kurulur. İçeride model dosya oluşturabilir, kod çalıştırabilir, hatta hata yapabilir; ancak dış ağa erişimi, görebileceği dosyalar ve kullanabileceği kaynaklar önceden belirlenmiş sınırlarla kısıtlanır. Bir şey ters giderse ortam silinip yeniden kurulur ve gerçek sistem etkilenmez. Güvenlik araştırmacıları kum havuzunu hem modelin riskli davranışlarını denemek hem de kod çalıştıran ajanları güvenle kullanmak için başvurulan temel önlemlerden biri sayar.",
  "why": "Modeller kod yazıp çalıştırabilen ajanlara dönüştükçe hataların bedeli artıyor. Kum havuzu, modelin her zaman doğru davranacağını varsaymak yerine yanlış davrandığında bile zararı sınırlayan bir güvenlik katmanı sunuyor. Yine de kusursuz değil; yalıtımdaki bir açık ya da fazla gevşek bırakılmış bir ayar sınırın aşılmasına izin verebilir.",
  "example": "Bir kodlama asistanı yazdığı programı kullanıcının bilgisayarında değil yalıtılmış bir konteynerde çalıştırır; program yanlışlıkla dosya silmeye kalksa bile yalnızca geçici ortam etkilenir.",
  "faq": [
   [
    "Kum havuzu ile sanal makine aynı şey mi?",
    "Hayır. Kum havuzu bir amacı, yani yalıtılmış çalışmayı anlatır; sanal makine ve konteyner ise bu amaca ulaşmak için kullanılan yöntemlerdir."
   ],
   [
    "Kum havuzundaki bir model dışarı çıkabilir mi?",
    "Doğru yapılandırılmış bir ortamda bu zordur, ama yalıtım yazılımlarında açıklar bulunabilir. Bu yüzden kum havuzu tek başına değil, izleme ve yetki sınırlarıyla birlikte kullanılır."
   ]
  ]
 },
 {
  "slug": "yuz-tanima",
  "term": "Yüz tanıma",
  "en": "facial recognition",
  "match": [
   "yüz tanıma",
   "facial recognition"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir fotoğraf ya da videodaki yüzün sayısal özelliklerini çıkarıp kayıtlı yüzlerle karşılaştırarak kişiyi doğrulayan veya kimliğini belirleyen yapay zeka teknolojisi.",
  "how": "Sistem önce görüntüde yüzü bulur, ardından göz, burun, çene gibi bölgelerin birbirine göre durumunu bir sayı dizisine, yani yüz şablonuna çevirir. Bu şablon veri tabanındaki şablonlarla karşılaştırılır; benzerlik belirli bir eşiği aşarsa eşleşme bildirilir. İki temel kullanım vardır: doğrulamada kişi kim olduğunu söyler ve sistem yalnızca o kişinin şablonuyla karşılaştırır, tanımlamada ise yüz geniş bir veri tabanında aranır. Günümüzde şablonları çoğunlukla derin öğrenme modelleri üretir.",
  "why": "Telefon kilidinden sınır kontrolüne kadar yaygın kullanılıyor, ancak yanlış eşleşmenin bedeli bağlama göre çok değişiyor. Bağımsız çalışmalar bazı sistemlerin farklı cinsiyet ve ten rengi gruplarında farklı doğrulukla çalıştığını göstermiştir. Bu nedenle kolluk kullanımı ve kamusal alanda tarama, mahremiyet ve ayrımcılık tartışmalarının merkezinde yer alıyor.",
  "example": "Telefonun kilidini sahibinin yüzüyle açması doğrulamadır; kalabalık içinde aranan kişiyi bulmaya çalışan bir kamera sistemi ise tanımlama yapar.",
  "faq": [
   [
    "Yüz tanıma ile yüz algılama arasındaki fark ne?",
    "Yüz algılama görüntüde bir yüz olduğunu ve nerede durduğunu bulur. Yüz tanıma ise bu yüzün kime ait olduğunu belirlemeye ya da iddia edilen kişiyle uyuşup uyuşmadığını doğrulamaya çalışır."
   ],
   [
    "Yüz tanıma sistemleri hatasız mı?",
    "Hayır. Yanlış eşleşme ve gerçek eşleşmeyi kaçırma görülebilir; ışık, açı, görüntü kalitesi ve sistemin eğitildiği veri sonuçları etkiler. Eşik ayarı da hangi hata türünün daha sık olacağını belirler."
   ]
  ]
 },
 {
  "slug": "biyometrik-gozetim",
  "term": "Biyometrik gözetim",
  "en": "biometric surveillance",
  "match": [
   "biyometrik"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yüz, ses, yürüyüş ya da parmak izi gibi bedensel ve davranışsal özelliklerden yararlanarak insanları, çoğunlukla toplu ölçekte ve kendi bilgileri dışında izleme ve tanımlama uygulaması.",
  "how": "Kameralar, mikrofonlar ya da sensörler kamusal alanda sürekli veri toplar. Yapay zeka bu görüntü ve seslerden biyometrik şablonlar çıkarır ve bunları arananlar listeleri ya da kimlik veri tabanlarıyla eşleştirir. Sistem canlı akış üzerinde gerçek zamanlı çalışabildiği gibi kayıtlı görüntülerde geriye dönük arama da yapabilir. Asıl fark, bir kişinin kapıda kendi isteğiyle kimliğini doğrulamasıyla, hiçbir şey yapmadan sokakta taranması arasındadır; birincisinde rıza vardır, ikincisinde çoğu zaman yoktur.",
  "why": "Savunanlar kayıp kişileri bulma ve ciddi suçları önleme gibi yararlar öne sürüyor; karşı çıkanlar ise mahremiyete ve toplanma özgürlüğüne yönelik caydırıcı bir etkiden söz ediyor. Biyometrik veri şifre gibi değiştirilemediği için sızması da kalıcı bir risk. AB Yapay Zeka Yasası, kamusal alanda kolluk amaçlı gerçek zamanlı uzaktan biyometrik kimliklendirmeyi sıkı sınırlara ve dar istisnalara bağlıyor.",
  "example": "Bir şehirdeki kamera ağının, önünden geçen herkesin yüzünü kayıtlı bir arananlar listesiyle otomatik karşılaştırması biyometrik gözetim örneğidir.",
  "faq": [
   [
    "Biyometrik gözetim ile biyometrik doğrulama aynı şey mi?",
    "Hayır. Doğrulamada kişi kendi isteğiyle, örneğin telefonunu açmak için kimliğini kanıtlar. Gözetimde ise insanlar çoğu zaman haberleri olmadan ve toplu olarak taranır."
   ],
   [
    "Biyometrik gözetim neden bu kadar tartışmalı?",
    "Bir tarafta güvenlik ve suçla mücadele gerekçeleri, diğer tarafta mahremiyet, yanlış eşleşme ve ayrımcılık kaygıları var. Biyometrik veriler değiştirilemediği için kötüye kullanım ya da sızıntı riski de ağır sayılıyor."
   ]
  ]
 },
 {
  "slug": "otonom-silahlar",
  "term": "Otonom silahlar",
  "en": "autonomous weapons",
  "match": [
   "otonom silah"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Hedef seçme ve saldırıyı başlatma gibi kritik işlevlerde insan müdahalesi olmadan karar verebilen silah sistemleri.",
  "how": "Bu sistemler sensörler ve yazılımla çevreyi tarar, nesneleri sınıflandırır ve önceden tanımlanmış ölçütlere uyan bir hedef bulduğunda saldırı kararını kendisi verir. Özerklik ikili bir durum değildir: insan her atışı onaylayabilir, yalnızca iptal edebilir ya da hiç devrede olmayabilir. Tartışma, bu yelpazenin insanın devre dışı kaldığı ucundaki sistemler üzerinedir. Yapay zeka hedef tanıma ve karar verme kısmını güçlendirdiği için konu yeniden gündeme geldi; ancak ülkeler arasında ortak bir tanım konusunda uzlaşı yok.",
  "why": "Savaş hukukunun ayrım ve orantılılık gibi ilkelerini bir makinenin uygulayıp uygulayamayacağı, hata durumunda sorumluluğun kimde olacağı ve silahlanma yarışı riski tartışmanın ana başlıkları. Bazı ülkeler ve sivil toplum kuruluşları bağlayıcı bir yasak isterken, bazı devletler mevcut uluslararası insancıl hukukun yeterli olduğunu savunuyor. Konu Birleşmiş Milletler çatısı altında da görüşülüyor.",
  "example": "Belirli bir bölgede insan onayı beklemeden hedef arayıp saldıran bir insansız hava aracı, tartışmanın odağındaki türden bir sistem olurdu.",
  "faq": [
   [
    "Otonom silah ile uzaktan kumandalı silahlı insansız hava aracı aynı şey mi?",
    "Hayır. Uzaktan kumandalı araçta hedefi seçip ateş etme kararını bir insan verir. Otonom silahta ise bu karar, tartışılan düzeyde, sistemin kendisine bırakılmıştır."
   ],
   [
    "Anlamlı insan kontrolü ne demek?",
    "Silahın kullanımında insanın karar sürecine gerçekten ve zamanında müdahale edebilmesini anlatan bir kavramdır. Neyin anlamlı sayılacağı konusunda ülkeler ve uzmanlar hâlâ aynı görüşte değil."
   ]
  ]
 },
 {
  "slug": "model-karti",
  "term": "Model kartı",
  "en": "model card",
  "match": [
   "model kart",
   "model card",
   "sistem kartı",
   "system card"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir yapay zeka modelinin ne için tasarlandığını, nasıl eğitildiğini, nasıl değerlendirildiğini ve hangi sınırlılıklara sahip olduğunu özetleyen kısa tanıtım belgesi.",
  "how": "Model kartı, gıda etiketine benzer bir işlev görür. İçinde genellikle amaçlanan kullanım alanları, önerilmeyen kullanımlar, eğitim verisine dair genel bilgi, test sonuçları, bilinen önyargılar ve riskler yer alır. Kavram 2019'da Google araştırmacılarının bir önerisiyle yaygınlaşmaya başladı. Büyük dil modellerinde benzer belgelere sistem kartı da denir ve bunlarda güvenlik testlerinin sonuçları daha ayrıntılı verilir. İçeriğin kapsamı ve ayrıntı düzeyi kuruluştan kuruluşa değişir.",
  "why": "Bir model hakkında ne bilindiği, kimin sorumluluk taşıdığı ve nerede kullanılmaması gerektiği bu belgeden okunabilir. Böylece geliştiriciler, şirketler ve denetçiler modeli körü körüne değil bilgiye dayanarak seçebilir. Şeffaflık düzenlemeleri de bu tür belgelendirme alışkanlığını giderek daha fazla önemsiyor.",
  "example": "Hugging Face üzerinde paylaşılan birçok açık model bir model kartıyla birlikte gelir; kart modelin hangi görevler için denendiğini ve hangi kullanımların önerilmediğini anlatır.",
  "faq": [
   [
    "Model kartı ile sistem kartı arasındaki fark ne?",
    "Model kartı tek bir modeli tanıtan genel bir belgedir. Sistem kartı ise genellikle büyük bir modelin ürün hâlini, güvenlik testlerini ve risk değerlendirmelerini daha ayrıntılı anlatır; ikisi arasındaki sınır kuruluştan kuruluşa değişebilir."
   ],
   [
    "Model kartı hazırlamak zorunlu mu?",
    "Genel olarak tek bir zorunlu biçim yoktur. Ancak AB Yapay Zeka Yasası gibi bazı düzenlemeler belirli modeller için teknik belgeleme ve şeffaflık yükümlülükleri getirir."
   ]
  ]
 },
 {
  "slug": "gizli-ajanda-testleri",
  "term": "Gizli ajanda testleri (sabotaj değerlendirmesi)",
  "en": "sabotage evaluation",
  "match": [
   "sabotaj değerlendirme"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Gelişmiş bir yapay zeka modelinin, geliştiriciler ya da denetçiler fark etmeden gizli bir amaç peşinde koşup koşamayacağını, örneğin güvenlik süreçlerini baltalayıp baltalayamayacağını ölçen testler.",
  "how": "Test sırasında modele normal bir görev verilir; ayrıca ona, çevreden gizlenmesi gereken bir yan hedef tanımlanır. Değerlendirmeciler modelin bu yan hedefe ulaşıp ulaşamadığını ve bunu fark edilmeden yapıp yapamadığını izler. Örnek senaryolar şunlardır: koda sezdirmeden bir açık yerleştirmek, denetleyen sistemi yanıltmak, testte yeteneğini bilerek düşük göstermek ya da insanların kararını yanlış bilgiyle etkilemek. Amaç, modelin bugünkü yeteneklerinin böyle bir riski mümkün kılıp kılmadığını ölçmektir; bu yüzden testler çoğunlukla modeli kasıtlı olarak zorlayacak biçimde kurulur.",
  "why": "Modeller daha özerk çalıştıkça, insan denetimini aşma becerisi güvenlik tartışmasında ayrı bir başlık hâline geldi. Bu testler, tehlikeli bir davranış yaşanmasını beklemeden yeteneğin sınırını ölçmeyi amaçlıyor. Sonuç, modelin kötü niyetli olduğunu değil, böyle bir davranışa muktedir olup olmadığını gösterir.",
  "example": "Bir testte model, kendisini izleyen başka bir yapay zekayı atlatıp koda fark edilmeyecek bir hata bırakabiliyor mu diye denenir.",
  "faq": [
   [
    "Gizli ajanda testleri modelin kötü niyetli olduğu anlamına mı gelir?",
    "Hayır. Testler modelin niyetini değil yeteneğini ölçer. Zorlayıcı bir senaryoda başarılı olması, günlük kullanımda böyle davrandığını göstermez; yalnızca riskin teknik olarak mümkün olduğunu gösterir."
   ],
   [
    "Bu testleri kimler yapıyor?",
    "Önde gelen yapay zeka laboratuvarları kendi iç testlerini yürütüyor, bağımsız değerlendirme kuruluşları da dışarıdan test yapabiliyor. Sonuçlar zaman zaman sistem kartlarında paylaşılıyor."
   ]
  ]
 },
 {
  "slug": "degerlendirme-farkindaligi",
  "term": "Değerlendirme farkındalığı",
  "en": "evaluation awareness",
  "match": [
   "değerlendirme farkındalı",
   "evaluation awareness"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir yapay zeka modelinin, kendisine yöneltilen girdilerden test edildiğini anlaması ve bu yüzden davranışını gerçek kullanımdakinden farklı sergileme olasılığı.",
  "how": "Test senaryoları çoğu zaman yapay görünür: aşırı kurgusal durumlar, alışılmadık talimatlar, değerlendirmelere özgü kalıplar. Büyük modeller eğitim verisinden bu kalıpları tanıyabilir ve bunun bir test olabileceği sonucuna varabilir. Bazı araştırma ve sistem kartlarında modellerin zaman zaman bunu açıkça dile getirdiği bildirildi. Model bunu fark edip daha dikkatli ya da daha uyumlu davranırsa, test sonucu gerçek dünyadaki davranışı olduğundan iyi gösterebilir. Araştırmacılar daha gerçekçi senaryolar kurarak ve modelin iç işleyişini inceleyerek bu etkiyi ölçmeye çalışıyor.",
  "why": "Güvenlik değerlendirmelerinin bütün anlamı, test sonuçlarının gerçek kullanımı yansıttığı varsayımına dayanıyor. Model bu varsayımı bozarsa 'testten geçti' ifadesinin güvencesi zayıflar. Bu yüzden değerlendirme farkındalığı, yapay zeka laboratuvarlarının ve bağımsız denetçilerin ciddiye aldığı, hâlâ aktif olarak araştırılan bir sorun.",
  "example": "Bir model, kurgusal bir senaryoda önüne zararlı bir seçenek konunca 'bu bir test gibi görünüyor' derse ve yalnızca bu durumda uyumlu davranırsa, test sonucu gerçek riski olduğundan düşük gösterebilir.",
  "faq": [
   [
    "Test edildiğini anlayan bir model bilinç sahibi demek mi?",
    "Hayır. Bu, modelin test benzeri örüntüleri tanımasıyla açıklanabilir ve bilinç ya da niyet iddiası taşımaz. Önemli olan, bu tanımanın davranışı değiştirip değiştirmediğidir."
   ],
   [
    "Değerlendirme farkındalığı nasıl azaltılır?",
    "Gerçek kullanıma daha çok benzeyen senaryolar tasarlanır ve modelin iç işleyişi incelenerek test algısının davranışı etkileyip etkilemediği araştırılır. Sorunu tamamen ortadan kaldıran kesin bir yöntem henüz yok."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-olay-veritabani",
  "term": "Yapay zeka olay veritabanı",
  "en": "AI incident database",
  "match": [
   "yapay zeka olay veritaban",
   "ai incident database",
   "ai incident"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka sistemlerinin yol açtığı zararların, hataların ve ters giden uygulamaların toplandığı, kamuya açık kayıt arşivi. Amacı, aynı hataların tekrarlanmaması için ortak bir hafıza oluşturmaktır.",
  "how": "Olaylar haber kaynakları, araştırma raporları ve kullanıcı bildirimleri üzerinden derlenir. Her kayıtta ne olduğu, hangi sistemin devrede olduğu, kimlerin etkilendiği ve zararın türü gibi bilgiler yer alır. Kayıtlar kategorilere ayrıldığı için araştırmacılar ve gazeteciler belirli bir sektöre ya da hata türüne göre arama yapabilir. Havacılıktaki kaza raporlama sistemlerine benzer bir mantıkla, tek tek olaylardan ortak örüntüler çıkarılır. Bu alandaki en bilinen örneklerden biri AI Incident Database adlı projedir.",
  "why": "Yapay zeka hataları çoğu zaman dağınık haberler olarak kalır ve unutulur. Ortak bir arşiv, hangi risklerin gerçekten yaşandığını gösterir; düzenleyiciler, şirketler ve araştırmacılar böylece tahminlere değil kayıtlı vakalara dayanabilir. Ürün geliştiren ekipler için de geçmiş hatalardan ders çıkarmanın pratik bir yoludur.",
  "example": "Bir sohbet botunun kullanıcıya zararlı tavsiye vermesi ya da bir yüz tanıma sisteminin yanlış kişiyi eşleştirmesi gibi vakalar, bu tür arşivlerde olay kaydı olarak yer alabilir.",
  "faq": [
   [
    "Yapay zeka olay veritabanını kimler kullanır?",
    "Araştırmacılar, gazeteciler, politika yapıcılar ve ürün ekipleri kullanır. Risk değerlendirmesi yaparken gerçek vakalardan örnek aramak için başvurulan bir kaynaktır."
   ],
   [
    "Her yapay zeka hatası olay olarak kaydedilir mi?",
    "Hayır. Genellikle gerçek bir zarara yol açan ya da zarara ramak kalan durumlar kaydedilir. Hangi ölçütlerin kullanıldığı arşivden arşive değişir."
   ]
  ]
 },
 {
  "slug": "yas-dogrulama",
  "term": "Yaş doğrulama",
  "en": "age verification",
  "match": [
   "yaş doğrulama",
   "age verification"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Çevrimiçi bir hizmeti kullanan kişinin gerekli yaş sınırını karşılayıp karşılamadığını kontrol eden yöntemlerin genel adı. Çocukları uygunsuz içerikten ve riskli yapay zeka uygulamalarından korumak için kullanılır.",
  "how": "En basit yöntem kullanıcının doğum tarihini kendisinin yazmasıdır, ancak bu kolayca atlatılır. Daha sıkı yöntemlerde kimlik belgesi yüklenir, banka ya da operatör kaydı gibi güvenilir bir kaynaktan teyit alınır veya selfie üzerinden yüz görüntüsüne bakılarak yaş tahmini yapılır. Bazı sistemler yalnızca kişinin belirli bir yaşın üzerinde olduğunu bildiren bir onay üretir, kimlik bilgisini hizmete iletmez. Hangi yöntemin seçileceği, güvenlik ihtiyacı ile gizlilik arasındaki dengeye bağlıdır.",
  "why": "Sohbet botları ve üretken yapay zeka uygulamaları çocuklar ve gençler arasında hızla yaygınlaştı. Bu durum, yaş sınırlarının gerçekten uygulanıp uygulanamayacağı sorusunu gündeme getiriyor. Yaş doğrulama çocukları korumayı hedefler; öte yandan kimlik ve yüz verisi toplanması gizlilik kaygılarını da büyütür, bu yüzden konu tartışmalıdır.",
  "example": "Bir sohbet botu uygulaması, yaş sınırını yalnızca bir onay kutusuyla denetlemek yerine kullanıcıdan kimlik belgesi ya da yüz taraması isteyen bir doğrulama hizmetine başvurabilir.",
  "faq": [
   [
    "Yaş beyanı ile yaş doğrulama aynı şey mi?",
    "Hayır. Yaş beyanında kullanıcı yaşını kendisi söyler ve bunun doğruluğu kontrol edilmez. Yaş doğrulamada ise bu bilgi kimlik belgesi, güvenilir bir kayıt ya da yüz analizi gibi bir yolla teyit edilir."
   ],
   [
    "Yaş doğrulama gizlilik sorunu yaratır mı?",
    "Yaratabilir. Kimlik ya da yüz verisi toplanması risk taşır. Bu nedenle verinin saklanmadığı veya yalnızca yaş sınırı onayının paylaşıldığı yöntemler tercih edilmeye çalışılır."
   ]
  ]
 },
 {
  "slug": "kimlik-sahtekarligi",
  "term": "Kimlik sahtekarlığı (yapay zeka ile)",
  "en": "AI-enabled impersonation",
  "match": [
   "kimliğine bürün",
   "impersonation"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka kullanarak bir kişinin sesini, yüzünü ya da yazı üslubunu taklit etmek ve onun yerine geçerek karşıdakini kandırmak. Dolandırıcılıkta ve itibar saldırılarında kullanılır.",
  "how": "Saldırgan önce hedef kişinin sesini veya görüntüsünü sosyal medyadan, toplantı kayıtlarından ya da videolardan derler. Ses klonlama ve deepfake araçları bu örneklerden kişiyi taklit eden bir ses veya görüntü üretir; dil modelleri de kişinin yazı üslubunu çoğaltır. Ardından sahte bir arama, mesaj ya da görüntülü görüşme yapılır. Mesajda genellikle aciliyet vardır: hemen para gönder, şifreyi paylaş, işlemi onayla. Gerçek zamanlı çalışan araçlar bu taklidi canlı konuşmada da mümkün kılar.",
  "why": "İnsanlar yıllardır tanıdık bir sese ya da yüze güvenerek karar veriyor. Bu araçlar o güven mekanizmasını zayıflattı. Şirketler ödeme onayında ikinci bir doğrulama kanalı kurmaya, bireyler de beklenmedik taleplerde kişiyi başka bir yoldan teyit etmeye yöneliyor.",
  "example": "Bir çalışan, yöneticisinin sesiyle aradığını sanan kişinin isteğiyle acil bir ödeme yapar; ya da bir yaşlı, torunu olduğunu söyleyen sahte sesle gelen para talebine inanır.",
  "faq": [
   [
    "Kimlik sahtekarlığı ile deepfake aynı şey mi?",
    "Tam olarak değil. Deepfake, sahte ses veya görüntü üretme tekniğidir. Kimlik sahtekarlığı ise bu tekniği, bir kişinin yerine geçip kandırmak amacıyla kullanma eylemidir."
   ],
   [
    "Bu tür sahtekarlıktan nasıl korunulur?",
    "Para ya da bilgi isteyen beklenmedik taleplerde kişiyi bilinen bir numaradan geri aramak yardımcı olur. Aile içinde önceden belirlenen gizli bir kelime ve şirketlerde çift onaylı ödeme süreci de sık önerilen önlemlerdir."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-destekli-siber-saldiri",
  "term": "Yapay zeka destekli siber saldırı",
  "en": "AI-enabled cyberattack",
  "match": [
   "yapay zeka destekli siber saldırı",
   "yapay zeka destekli saldırı"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Saldırganların yapay zeka araçlarından yararlanarak keşif, kimlik avı, zararlı yazılım geliştirme gibi aşamaları hızlandırdığı ya da ölçeklendirdiği siber saldırılar. Yapay zeka burada saldırının yardımcısı ya da hızlandırıcısıdır.",
  "how": "Dil modelleri hedefe özel, akıcı ve hatasız kimlik avı e-postaları yazabilir. Kod üretimi araçları basit zararlı yazılımların hazırlanmasını kolaylaştırabilir. Hedef hakkındaki açık kaynak bilgiler hızla derlenebilir, sistemlerdeki zayıf noktalar otomatik olarak taranabilir. Çoğu durumda süreci yine bir insan operatör yönlendirir, ancak otomasyon arttıkça modellerin daha uzun görev dizilerini kendi başına yürütmesi mümkün hale geliyor. Savunma tarafı da aynı teknolojiyi tehdit tespitinde kullanıyor.",
  "why": "Yapay zeka, saldırı yapmanın maliyetini ve gereken uzmanlık düzeyini düşürebilir. Dil hatalarına bakarak sahte e-postayı ayırt etme alışkanlığı da eskisi kadar işe yaramıyor. Model geliştiricileri kötüye kullanımı izleyip sınırlamaya çalışıyor. Bu etkinin gerçek boyutu ise uzmanlar arasında hâlâ tartışılıyor.",
  "example": "Yabancı dilde yazılmış, bariz hatalarla dolu sahte e-postalar yerine, şirketin iç jargonunu ve çalışanın adını doğru kullanan kusursuz bir kimlik avı mesajı gelebilir.",
  "faq": [
   [
    "Yapay zeka bir saldırıyı baştan sona kendi başına yürütebilir mi?",
    "Bazı aşamaları büyük ölçüde otomatikleştirebilir, ancak çoğu durumda bir insan hedefi seçer ve süreci yönlendirir. Otomasyonun ne kadar ilerleyeceği hâlâ yakından izlenen bir konu."
   ],
   [
    "Savunma tarafı yapay zekadan nasıl yararlanır?",
    "Şüpheli davranışları tespit etmek, günlük kayıtlarını taramak ve alarmları önceliklendirmek için kullanır. Güvenlik ekiplerinin yoğun iş yükünü azaltması beklenir."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-ile-guvenlik-acigi-bulma",
  "term": "Yapay zeka ile güvenlik açığı bulma",
  "en": "AI vulnerability discovery",
  "match": [
   "güvenlik açığı bul"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yapay zeka modellerinin yazılım kodunu ya da sistemleri inceleyerek güvenlik açıklarını tespit etmesi. Hem savunmacıların hem saldırganların kullanabildiği, çift kullanımlı bir yetenektir.",
  "how": "Model kaynak kodu okur, tehlikeli yazım kalıplarını arar ve bir açığın nasıl istismar edilebileceğini açıklar. Ayrıca programı zorlamak için bozuk ya da beklenmedik girdiler üretmeye yardım edebilir; bu tekniğe fuzzing denir. Klasik tarama araçları kural tabanlı çalışırken dil modelleri kodun bağlamını anlayabilir, ama aynı zamanda gerçek olmayan bulgular da üretebilir. Bu yüzden sonuçların bir uzman tarafından doğrulanması gerekir.",
  "why": "Açıkları saldırganlardan önce bulmak, yazılım güvenliğinin temel hedeflerinden biri. Yapay zeka bu işi hızlandırarak küçük ekiplerin yükünü hafifletebilir. Öte yandan aynı yetenek kötü niyetli kişilerin de işine yarar; bu yüzden bulguların sorumlu biçimde, yani önce yazılım sahibine bildirilerek paylaşılması önem taşır.",
  "example": "Bir geliştirici açık kaynaklı bir projenin kodunu modele inceletir ve olası bellek hatalarının listesini alır; ekip her maddeyi elle doğrulayıp gerçek olanları düzeltir.",
  "faq": [
   [
    "Yapay zeka güvenlik uzmanlarının yerini alır mı?",
    "Şimdilik tamamlayıcı bir araç olarak görülüyor. Model çok sayıda olası bulgu çıkarabilir, ancak hangilerinin gerçek ve ciddi olduğuna karar vermek hâlâ uzman gerektirir."
   ],
   [
    "Bulunan açıklar nasıl paylaşılır?",
    "Genel yaklaşım sorumlu ifşadır: açık önce yazılımı üreten tarafa bildirilir, yama için makul bir süre tanınır, ayrıntılar sonra kamuya açıklanır."
   ]
  ]
 },
 {
  "slug": "sifirinci-gun-acigi",
  "term": "Sıfırıncı gün açığı (zero-day)",
  "en": "zero-day vulnerability",
  "match": [
   "sıfırıncı gün",
   "zero-day"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Yazılımı üreten tarafça henüz bilinmeyen ya da düzeltilmemiş güvenlik açığı. Adını, geliştiricinin açığı kapatmak için elinde hiç gün kalmamasından alır.",
  "how": "Bir araştırmacı ya da saldırgan, yazılımda üreticinin fark etmediği bir hata bulur. Saldırgan bu hatayı kullanan bir istismar kodu hazırlarsa, ortada yama olmadığı için savunmak çok zordur. Açık ya üreticiye bildirilir ya da gizlice kullanılır veya satılır. Üretici açığı öğrenip yama yayımladığında açık artık bilinen bir açık haline gelir, ama kullanıcıların yamayı yüklemesi zaman alır.",
  "why": "Sıfırıncı gün açıkları, savunmanın en zor olduğu tehdit türlerinden biridir. Yapay zeka haberlerinde de bir modelin daha önce bilinmeyen açıkları bulabilmesi hem büyük bir yetenek göstergesi hem de ciddi bir risk olarak ele alınıyor. Bu yüzden model geliştiricilerinin güvenlik değerlendirmelerinde sıkça gündeme geliyor.",
  "example": "Bir web tarayıcısındaki kimsenin bilmediği bir hata saldırganlarca kullanılırken, üretici durumu fark edip yama yayımlayana kadar kullanıcılar korumasız kalır.",
  "faq": [
   [
    "Sıfırıncı gün açığı ile bilinen açık arasındaki fark nedir?",
    "Sıfırıncı gün açığında üretici henüz haberdar değildir ya da yama yoktur. Bilinen açıkta ise açık duyurulmuş ve çoğunlukla yama yayımlanmıştır; risk, yamayı yüklemeyen sistemlerden gelir."
   ],
   [
    "Yapay zeka sıfırıncı gün açığı bulabilir mi?",
    "Yapay zeka araçlarının daha önce bilinmeyen açıkları bulduğuna dair raporlar var. Bu bulgular genellikle insan uzmanlarca doğrulanıyor; yeteneğin sınırları ise hâlâ araştırılıyor."
   ]
  ]
 },
 {
  "slug": "veri-seti",
  "term": "Veri seti",
  "en": "dataset",
  "match": [
   "veri set",
   "veriseti",
   "dataset"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir yapay zeka modelini eğitmek, test etmek ya da değerlendirmek için toplanmış ve düzenlenmiş örnekler bütünü. Metin, görsel, ses veya tablo biçiminde olabilir.",
  "how": "Örnekler çeşitli kaynaklardan toplanır, temizlenir ve gerekiyorsa etiketlenir. Ardından genellikle üç bölüme ayrılır: model eğitim kısmından öğrenir, doğrulama kısmıyla ayarları yapılır, test kısmıyla da hiç görmediği örneklerdeki başarısı ölçülür. Bir veri setinin değeri yalnızca büyüklüğüne değil, kalitesine, çeşitliliğine ve gerçek kullanım koşullarını ne kadar yansıttığına da bağlıdır.",
  "why": "Bir modelin davranışı büyük ölçüde eğitildiği veriden gelir. Veri setindeki eksiklikler ve önyargılar modele de yansır. Telif hakkı, kişisel veri ve izin konuları da yapay zeka haberlerinde sık tartışılan veri seti meseleleridir. Kısacası kötü veriyle iyi model çıkarmak zordur.",
  "example": "El yazısı rakam görüntülerinden oluşan MNIST, görüntü tanıma modellerini denemek için yıllardır kullanılan küçük ve bilinen bir veri setidir.",
  "faq": [
   [
    "Veri seti ile veri tabanı aynı şey mi?",
    "Hayır. Veri tabanı verilerin saklandığı ve sorgulandığı bir sistemdir. Veri seti ise belirli bir model işi için bir araya getirilmiş, çoğu zaman sabit bir örnek topluluğudur."
   ],
   [
    "Test verisi neden eğitim verisinden ayrı tutulur?",
    "Model eğitimde gördüğü örnekleri ezberleyebilir. Hiç görmediği örneklerle ölçmek, gerçek hayatta ne kadar iyi çalışacağını daha dürüst biçimde gösterir."
   ]
  ]
 },
 {
  "slug": "veri-etiketleme",
  "term": "Veri etiketleme",
  "en": "data labeling",
  "match": [
   "veri etiketle",
   "data labeling",
   "data annotation"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Ham verilere (görsel, metin, ses) modelin öğrenebileceği doğru yanıtları ya da açıklamaları ekleme işi. Etiketler, modele neye baktığını ve ne öğrenmesi gerektiğini gösterir.",
  "how": "Etiketleyiciler, çoğunlukla insanlar bazen de yardımcı modellerle birlikte, örnekleri tek tek işaretler. Bir fotoğrafta nesnenin çevresine kutu çizilir, bir yorum olumlu ya da olumsuz diye sınıflandırılır, bir ses kaydı yazıya dökülür. Tutarlılık için ayrıntılı yönergeler hazırlanır ve aynı örneği birden fazla kişi etiketleyip farklılıklar kontrol edilir. Dil modellerinde ise insanlar, modelin ürettiği yanıtları kalitesine göre sıralayarak modelin eğitimine katkı verir.",
  "why": "Etiketlerin kalitesi modelin başarısını doğrudan etkiler. Hatalı ya da özensiz etiketler, hatalı öğrenmeye yol açar. Bu işi yapan çalışanların ücret ve çalışma koşulları da yapay zeka sektörüne yönelik tartışmaların bir parçası; şirketler ise etiketlemeyi kısmen otomatikleştirmeye çalışıyor.",
  "example": "Sürücüsüz araç geliştiren bir ekip, kamera görüntülerindeki yayaları, trafik ışıklarını ve şerit çizgilerini tek tek işaretleterek modelin öğreneceği örnekleri hazırlar.",
  "faq": [
   [
    "Etiketleme olmadan model eğitilebilir mi?",
    "Evet, bazı yöntemler etiketsiz veriden öğrenir. Dil modellerinin ilk eğitim aşaması buna örnektir. Yine de modelin belirli görevlerde iyileştirilmesinde etiketli veri önemini koruyor."
   ],
   [
    "Etiketlemeyi yapay zeka yapabilir mi?",
    "Kısmen. Modeller bir ilk etiketleme önerisi sunabilir, ancak kalite denetimi ve zor örnekler için çoğunlukla insan kontrolü gerekir."
   ]
  ]
 },
 {
  "slug": "veri-temizleme",
  "term": "Veri temizleme",
  "en": "data cleaning",
  "match": [
   "veri temizle"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Ham veri içindeki hataların, yinelenen kayıtların, eksik değerlerin ve gürültünün bulunup düzeltildiği ya da ayıklandığı hazırlık aşaması. Model eğitiminden önce yapılır ve verinin güvenilir hale gelmesini sağlar.",
  "how": "Süreç genellikle verinin taranmasıyla başlar: aynı kaydın kopyaları, biçimi bozuk satırlar, boş alanlar ve tutarsız değerler tespit edilir. Sonra bunlar silinir, düzeltilir ya da makul bir değerle doldurulur. Metin verilerinde ayrıca HTML kalıntıları, tekrar eden cümleler, istenmeyen dillerdeki içerik ve kişisel bilgi taşıyan parçalar süzülür. Bunun için kurallar, istatistiksel kontroller ve bazen küçük sınıflandırıcı modeller kullanılır. Bir mutfakta sebzelerin yıkanıp ayıklanmasına benzer; pişirmeden önce yapılan bu iş sonucu belirler.",
  "why": "Model gördüğü veriden öğrenir; veri hatalıysa model de hatayı öğrenir. Büyük dil modellerinde eğitim verisinin kalitesi, çoğu zaman model boyutu kadar belirleyici sayılır. Veri bilimcilerin zamanının önemli bir kısmı bu işe gider. Yinelenen ya da kişisel veri içeren kayıtların ayıklanması, gizlilik ve ezberleme riskleri açısından da önem taşır.",
  "example": "Bir bankanın müşteri tablosunda aynı kişinin iki kez, farklı yazımlarla kayıtlı olması ya da yaş sütununda 250 yazması temizleme aşamasında yakalanıp düzeltilir.",
  "faq": [
   [
    "Veri temizleme ile veri ön işleme aynı şey mi?",
    "Tam olarak değil. Ön işleme daha geniş bir başlıktır; temizlemenin yanında normalleştirme, ölçekleme ve verinin modele uygun biçime dönüştürülmesi gibi adımları da kapsar."
   ],
   [
    "Fazla temizlemek sorun yaratır mı?",
    "Yaratabilir. Gerçek ama sıra dışı örnekleri silmek ya da belirli grupları temsil eden kayıtları atmak, modelin gerçek dünyayı eksik görmesine ve önyargının artmasına yol açabilir."
   ]
  ]
 },
 {
  "slug": "veri-artirma",
  "term": "Veri artırma",
  "en": "data augmentation",
  "match": [
   "veri artırma",
   "data augmentation"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Eldeki veriyi dönüştürerek ya da ondan yeni örnekler üreterek eğitim kümesini genişletme yöntemi. Amaç, yeni veri toplamadan modelin daha çeşitli örnekler görmesini sağlamaktır.",
  "how": "Görüntülerde döndürme, aynalama, kırpma ve parlaklık değiştirme gibi küçük oynamalar yapılır. Metinde bazı sözcükler eş anlamlılarıyla değiştirilir ya da cümle başka bir dile çevrilip geri çevrilir. Seste gürültü eklenir ya da hız değiştirilir. Kural, dönüşümün etiketi bozmamasıdır: döndürülmüş bir kedi fotoğrafı hâlâ kedi fotoğrafıdır. Bazen üretken modellerle tamamen yeni örnekler de oluşturulur. Model böylece aynı içeriği farklı biçimlerde görerek tek bir görünüşe takılıp kalmaz.",
  "why": "Veri toplamak ve etiketlemek pahalıdır; artırma bu yükü azaltır. Özellikle örneklerin az olduğu tıbbi görüntüleme gibi alanlarda modelin aşırı öğrenmesini, yani eğitim verisini ezberlemesini engellemeye yardım eder. Yine de yanlış seçilmiş dönüşümler modele gerçekçi olmayan örnekler gösterip zarar verebilir.",
  "example": "El yazısı rakam tanıyan bir model için her rakam görüntüsü hafifçe eğilip kaydırılarak birkaç farklı kopyaya dönüştürülür; model farklı yazı biçimlerine alışır.",
  "faq": [
   [
    "Veri artırma ile sentetik veri aynı mıdır?",
    "Aynı değil, ama sınır bulanıktır. Artırmada mevcut örnekler değiştirilir; sentetik veride örnekler çoğunlukla sıfırdan, bir model ya da simülasyonla üretilir."
   ],
   [
    "Veri artırma her zaman işe yarar mı?",
    "Hayır. Etiketi bozan dönüşümler zarar verir; örneğin 6 rakamını ters çevirmek onu 9'a benzetebilir. Dönüşümlerin göreve uygun seçilmesi gerekir."
   ]
  ]
 },
 {
  "slug": "web-kazima",
  "term": "Web kazıma (scraping)",
  "en": "web scraping",
  "match": [
   "web kazıma",
   "scraping",
   "veri kazıma"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Web sayfalarındaki bilgileri bir program aracılığıyla otomatik olarak çekip tablo ya da veri tabanı gibi düzenli bir biçime dönüştürme işi. Elle kopyalayıp yapıştırmanın otomatikleştirilmiş hâlidir.",
  "how": "Program bir sayfayı indirir, HTML yapısını çözümler ve istenen alanları, örneğin başlık, fiyat ya da yorumları seçip kaydeder. Genellikle belirli sitelere ve belirli bilgilere odaklanır. Siteler buna karşı istek sınırı, giriş zorunluluğu ya da robots.txt kuralları gibi önlemler koyabilir. Kazıma çoğu zaman tarayıcı botlarla birlikte çalışır: bot sayfaları bulur, kazıyıcı ise sayfadan gereken içeriği ayıklar. Ortaya çıkan veri sonra temizlenip analizde ya da model eğitiminde kullanılır.",
  "why": "Yapay zeka modellerinin eğitim verisi, fiyat karşılaştırma ve araştırma gibi pek çok iş web kazımaya dayanır. Ama telif hakkı, kişisel veriler ve sitelerin kullanım şartları konusunda tartışmalar sürüyor. İçerik sahipleri emeklerinin izinsiz kullanıldığını savunurken geliştiriciler kamuya açık bilgiye erişimin önemini vurguluyor.",
  "example": "Bir fiyat karşılaştırma sitesi, mağazaların ürün sayfalarındaki fiyatları düzenli aralıklarla çekerek tek bir listede gösterir.",
  "faq": [
   [
    "Web kazıma yasal mıdır?",
    "Tek bir yanıt yok. Ülkeye, kazınan içeriğin türüne, kişisel veri bulunup bulunmadığına ve sitenin kullanım şartlarına göre değişir. Özel bir durum için hukuki danışmanlık gerekir."
   ],
   [
    "Web kazıma ile web tarayıcı bot arasındaki fark nedir?",
    "Tarayıcı bot bağlantıları izleyerek sayfaları keşfeder ve toplar. Kazıma ise sayfadan belirli bilgileri düzenli veri olarak ayıklamaya odaklanır. İkisi sık sık birlikte kullanılır."
   ]
  ]
 },
 {
  "slug": "web-tarayici-bot",
  "term": "Web tarayıcı bot (crawler)",
  "en": "web crawler",
  "match": [
   "crawler",
   "tarayıcı bot"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bağlantıları izleyerek web sayfalarını otomatik olarak gezen ve içeriklerini toplayan yazılım. Arama motorlarının ve geniş ölçekli veri toplama projelerinin temel aracıdır.",
  "how": "Bot bir başlangıç adres listesiyle yola çıkar, sayfayı indirir, içindeki bağlantıları bulur ve bunları ziyaret edilecekler sırasına ekler. Aynı sayfaya tekrar tekrar gitmemek, siteleri aşırı yormamak ve hangi sayfaların ne sıklıkla yenileneceğine karar vermek önemli ayrıntılardır. Kurallara uyan botlar, sitenin robots.txt dosyasında belirttiği sınırlara uyar; ancak bu uyum gönüllüdür. Toplanan sayfalar arama için indekslenir ya da arşivlenir.",
  "why": "Arama motorları bu botlar olmadan çalışamaz. Yapay zeka çağında ise dil modellerinin eğitim verisi toplayan botlar, içerik yayıncılarıyla tartışma konusu oldu; birçok site bu botlara erişimi kısıtlamayı seçiyor. Botların yarattığı trafik yükü ve izinsiz kullanım kaygısı bu tartışmanın parçalarıdır.",
  "example": "Google'ın arama sonuçları için web sayfalarını gezen botu Googlebot, tipik bir tarayıcı bot örneğidir.",
  "faq": [
   [
    "robots.txt nedir?",
    "Sitenin ana dizininde duran ve botlara hangi bölümlere girmemeleri gerektiğini bildiren metin dosyasıdır. Teknik olarak bir engel değil, bir kural beyanıdır; uyup uymamak botu işletenin tercihine bağlıdır."
   ],
   [
    "Tarayıcı bot her zaman arama motoruna mı aittir?",
    "Hayır. Arşiv projeleri, araştırmacılar ve yapay zeka şirketleri de kendi botlarını çalıştırır. Bir botun kime ait olduğu genellikle istek başlığındaki kullanıcı aracısı adından anlaşılır."
   ]
  ]
 },
 {
  "slug": "common-crawl",
  "term": "Common Crawl",
  "en": "Common Crawl",
  "match": [
   "common crawl"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Web sayfalarını düzenli olarak tarayıp elde ettiği arşivi herkese ücretsiz açan, kâr amacı gütmeyen bir kuruluş ve onun yayımladığı veri kümesi. Birçok dil modelinin eğitim verisinin kaynağıdır.",
  "how": "Kuruluş kendi tarayıcı botuyla web üzerinde geniş çaplı taramalar yapar. Sonuçlar ham sayfa içeriği, ayıklanmış metin ve üst veri olarak dönem dönem yayımlanan paketler hâlinde herkesin indirebileceği biçimde sunulur. Arşiv milyarlarca sayfa içerir ve oldukça ham durumdadır: kopyalar, reklamlar, düşük kaliteli ve istenmeyen içerik barındırır. Bu yüzden modeller geliştiren ekipler genellikle veriyi kendi filtreleme ve temizleme adımlarından geçirir.",
  "why": "Kendi tarayıcı altyapısını kuramayan araştırmacılar ve küçük ekipler için web ölçeğinde veriye erişmenin nadir yollarından biridir. Aynı zamanda telif hakkı, kişisel veri ve önyargı tartışmalarının da odağında yer alır; çünkü arşivdeki içeriklerin hepsi için model eğitimi amacıyla izin verilip verilmediği tartışmalıdır.",
  "example": "OpenAI'ın GPT-3 için yayımladığı makalede, eğitim verisinin önemli bir bölümünün filtrelenmiş Common Crawl verisinden oluştuğu belirtilir.",
  "faq": [
   [
    "Common Crawl verisi doğrudan model eğitiminde kullanılır mı?",
    "Genellikle hayır. Ham arşivde çok sayıda kopya ve düşük kaliteli içerik bulunduğundan, ekipler önce filtreleme ve temizleme uygular ya da bu işlemlerden geçmiş türev veri kümelerini kullanır."
   ],
   [
    "Common Crawl ücretsiz mi?",
    "Evet, veri kümesi herkese açık biçimde yayımlanıyor. Ancak içeriğin telif durumu ve kullanım koşulları ayrı bir konudur ve kullanıcının sorumluluğundadır."
   ]
  ]
 },
 {
  "slug": "buyuk-veri",
  "term": "Büyük veri",
  "en": "big data",
  "match": [
   "büyük veri",
   "big data"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Hacmi, üretilme hızı ve çeşitliliği nedeniyle tek bir bilgisayarda ve geleneksel yöntemlerle işlenmesi zor olan veri yığınları ile bunları işleme yaklaşımlarının genel adı.",
  "how": "Büyük veri çoğunlukla üç özellikle anlatılır: hacim, hız ve çeşitlilik. Veri sensörlerden, telefonlardan, sosyal medyadan ve işlem kayıtlarından sürekli akar; metin, görüntü ve tablo gibi farklı biçimlerde gelir. Bu kadar veriyi tek makine taşıyamadığı için parçalara bölünüp birçok bilgisayara dağıtılır ve paralel işlenir. Hadoop ve Spark gibi araçlar bu iş için geliştirildi. Bulut depolama da yaygın bir çözümdür. Sonuçlar analiz ya da makine öğrenmesi modellerine aktarılır.",
  "why": "Modern yapay zekanın büyük kısmı, çok miktarda veriyle beslenen modellere dayanır. İşletmeler müşteri davranışını anlamak ve karar vermek için büyük veriden yararlanır. Öte yandan depolama maliyeti, veri kalitesi ve kişisel verilerin korunması ciddi sorunlar yaratır. Üstelik büyük olmak tek başına değerli olmak anlamına gelmez.",
  "example": "Bir e-ticaret sitesi milyonlarca kullanıcının tıklama ve satın alma kayıtlarını işleyerek ürün öneri sistemini besler.",
  "faq": [
   [
    "Büyük veri ile yapay zeka aynı şey midir?",
    "Hayır. Büyük veri bir girdi türüdür; yapay zeka ise bu veriden öğrenen ya da onu kullanan sistemlerdir. Yapay zeka büyük veri olmadan da çalışabilir, büyük veri de yapay zeka olmadan analiz edilebilir."
   ],
   [
    "Ne kadar veri büyük veri sayılır?",
    "Sabit bir eşik yok. Genel yaklaşıma göre, eldeki araçlarla tek bir makinede rahatça işlenemeyen veri büyük veri sayılır; bu sınır teknolojiyle birlikte değişir."
   ]
  ]
 },
 {
  "slug": "veri-madenciligi",
  "term": "Veri madenciliği",
  "en": "data mining",
  "match": [
   "veri madenciliğ",
   "data mining"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Büyük veri kümelerinde istatistik ve makine öğrenmesi yöntemleriyle gizli örüntüleri, ilişkileri ve sıra dışı kayıtları keşfetme süreci.",
  "how": "Önce veri toplanıp temizlenir ve analize uygun hâle getirilir. Ardından kümeleme, sınıflandırma, birliktelik kuralları ve aykırı değer tespiti gibi yöntemlerle veri taranır. Kümeleme benzer kayıtları gruplar; birliktelik kuralları hangi şeylerin birlikte görüldüğünü bulur; aykırı değer tespiti ise beklenenden ayrışan kayıtları yakalar. Çıkan örüntüler uzmanlarca yorumlanır, çünkü bulunan her ilişki anlamlı olmayabilir. Adındaki madencilik benzetmesi, büyük bir yığın içinden değerli parçaları çıkarmaya işaret eder.",
  "why": "Dolandırıcılık tespiti, müşteri segmentasyonu ve stok planlaması gibi birçok iş kararı veri madenciliği çıktılarına dayanır. Makine öğrenmesiyle yöntemleri büyük oranda ortaktır. Dikkat edilmesi gereken nokta, bulunan ilişkinin nedensellik anlamına gelmeyebileceği ve kişisel verilerle çalışırken gizliliğin gözetilmesi gerektiğidir.",
  "example": "Bir market zinciri, sepet kayıtlarını inceleyerek hangi ürünlerin sık sık birlikte alındığını bulur ve rafları buna göre düzenler.",
  "faq": [
   [
    "Veri madenciliği ile makine öğrenmesi arasındaki fark nedir?",
    "Veri madenciliği daha çok eldeki veride bilinmeyen örüntüleri keşfetmeye odaklanır. Makine öğrenmesi ise veriden öğrenip yeni durumlar için tahmin yapan modeller kurmayı hedefler. İkisi birçok yöntemi paylaşır."
   ],
   [
    "Veri madenciliği ile veri bilimi aynı mıdır?",
    "Değil. Veri madenciliği, veri biliminin kullandığı tekniklerden biridir. Veri bilimi ise veri toplamadan sonuçları sunmaya kadar uzanan daha geniş bir alandır."
   ]
  ]
 },
 {
  "slug": "veri-bilimi",
  "term": "Veri bilimi",
  "en": "data science",
  "match": [
   "veri bilim",
   "data science"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Veriden anlam ve değer çıkarmak için istatistik, programlama ve alan bilgisini bir araya getiren disiplin. Amaç, veriyi karar vermeye yarayan bilgiye dönüştürmektir.",
  "how": "Çalışma bir sorunun tanımlanmasıyla başlar. Ardından ilgili veri toplanır, temizlenir ve keşifsel analizle incelenir. Sonra istatistiksel ya da makine öğrenmesi modelleri kurulur, performansları değerlendirilir ve sonuçlar grafik ve raporlarla karar vericilere sunulur. Model işe yararsa ürüne ya da sürece entegre edilir. Python ve SQL yaygın araçlardır. Kurumlarda bu işi veri bilimciler, veri mühendisleri ve analistler birlikte yürütür.",
  "why": "Kurumların sezgi yerine kanıta dayanarak karar vermesini sağlar ve yapay zeka projelerinin sağlam bir zemine oturmasına yardım eder. Makine öğrenmesi veri biliminin önemli bir aracıdır, ancak veri bilimi sorunu tanımlamayı, veri kalitesini ve sonuçları yorumlamayı da kapsar. Bu yüzden iş dünyasında en çok aranan beceri alanlarından biri hâline geldi.",
  "example": "Bir telekom operatörü, hangi abonelerin hattını iptal etme ihtimalinin yüksek olduğunu tahmin eden bir model kurar ve bu kişilere özel teklifler sunar.",
  "faq": [
   [
    "Veri bilimci ile makine öğrenmesi mühendisi arasındaki fark nedir?",
    "Veri bilimci genellikle analiz, deney ve modelleme yapar. Makine öğrenmesi mühendisi ise modelleri ürüne taşımaya ve büyük ölçekte çalıştırmaya odaklanır. Roller şirketten şirkete değişir."
   ],
   [
    "Veri bilimi yapay zekanın bir parçası mıdır?",
    "İki alan kesişir ama biri diğerinin alt kümesi değildir. Veri bilimi veriden bilgi çıkarmaya odaklanır, yapay zeka ise zeki davranış gösteren sistemler kurmaya. Makine öğrenmesi ikisinin ortak aracıdır."
   ]
  ]
 },
 {
  "slug": "ozellik-muhendisligi",
  "term": "Özellik mühendisliği",
  "en": "feature engineering",
  "match": [
   "özellik mühendisliği",
   "feature engineering"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Ham veriden, modelin öğrenmesini kolaylaştıracak girdi değişkenlerini seçme, dönüştürme ve yeniden üretme çalışması. Bir modelin tahmin gücü çoğu zaman algoritmanın kendisi kadar bu değişkenlerin kalitesine de bağlıdır.",
  "how": "Örneğin bir konut fiyatı modelinde \"yapım yılı\" yerine \"binanın yaşı\" kullanılabilir, adresler semt gibi gruplara ayrılabilir. Eksik değerler doldurulur, farklı birimdeki sayılar aynı ölçeğe getirilir. Veri bilimci, alanı bilen biri olarak hangi bilginin tahmine yarayacağına karar verir. Klasik makine öğrenmesinde bu adım emek yoğundur. Derin öğrenmede ise katmanlar birçok özelliği veriden kendiliğinden çıkarır; bu yüzden görüntü ve metin gibi verilerde elle özellik üretmeye daha az ihtiyaç duyulur.",
  "why": "Kredi skoru, dolandırıcılık tespiti ve talep tahmini gibi tablo verisiyle yapılan işlerde iyi seçilmiş özellikler basit bir modeli bile güçlü kılabilir. Hatalı üretilen bir özellik ise test verisinden bilgi sızdırıp sonuçları olduğundan iyi gösterebilir. Bu yüzden hem başarı hem de güvenilir ölçüm açısından kritik bir adımdır.",
  "example": "Bir banka, müşterinin son otuz gündeki harcama sayısını ve olağan harcama tutarından sapmasını yeni özellik olarak üretip dolandırıcılık tespit modeline verir.",
  "faq": [
   [
    "Derin öğrenme özellik mühendisliğini gereksiz kılar mı?",
    "Görüntü, ses ve metin gibi verilerde büyük ölçüde evet, çünkü model gerekli özellikleri kendisi öğrenir. Tablo biçimli iş verilerinde ise iyi tasarlanmış özellikler hâlâ önemli bir fark yaratır."
   ],
   [
    "Özellik seçimi ile özellik mühendisliği aynı şey mi?",
    "Hayır. Özellik seçimi mevcut değişkenlerden hangilerinin kullanılacağına karar vermektir. Özellik mühendisliği ise yeni değişkenler üretmeyi ve dönüştürmeyi de kapsar; seçim çoğu zaman bu sürecin bir parçasıdır."
   ]
  ]
 },
 {
  "slug": "dogrulama-seti",
  "term": "Doğrulama seti",
  "en": "validation set",
  "match": [
   "doğrulama seti",
   "validation set"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Model eğitilirken ayar yapmak ve en iyi sürümü seçmek için kullanılan, eğitimde öğrenilmeyen ayrı bir veri parçası. Modelin yeni verideki başarısına dair geliştirme sırasında ara bir ölçüt sağlar.",
  "how": "Eldeki veri genellikle üçe bölünür: eğitim, doğrulama ve test. Model eğitim verisiyle öğrenir, her turun ardından doğrulama setinde sınanır. Doğrulama başarısı artmayı bırakıp düşmeye başlarsa model eğitim verisini ezberlemeye başlamıştır ve eğitim durdurulabilir. Öğrenme hızı ya da katman sayısı gibi hiperparametrelerin hangi değerlerle iyi çalıştığı da bu sette denenerek belirlenir. Böylece test seti, son ölçüm için el değmeden kalır.",
  "why": "Ayar doğrudan eğitim verisi üzerinden yapılırsa ezber yapan bir model bile iyi görünür. Doğrulama seti ayar için tekrar tekrar kullanıldığından zamanla ona da uyum sağlanır. Nihai ve tarafsız not için bu yüzden ayrıca bir test seti gerekir.",
  "example": "Bir spam filtresi geliştiren ekip, e-postaların yüzde 10'unu doğrulama için ayırır ve hangi ayar kombinasyonunun bu e-postalarda en az hatayı verdiğine bakar.",
  "faq": [
   [
    "Doğrulama seti ile test seti arasındaki fark nedir?",
    "Doğrulama seti geliştirme sırasında ayar ve model seçimi için defalarca kullanılır. Test seti ise tarafsız nihai ölçüm için saklanır ve ideal olarak yalnızca en sonda kullanılır."
   ],
   [
    "Doğrulama setine ihtiyaç duymadan model eğitilebilir mi?",
    "Eğitmek mümkündür ama aşırı öğrenmeyi fark etmek ve ayar yapmak zorlaşır. Veri azsa doğrulama seti yerine çapraz doğrulama gibi yöntemler tercih edilebilir."
   ]
  ]
 },
 {
  "slug": "test-seti",
  "term": "Test seti",
  "en": "test set",
  "match": [
   "test set",
   "test kümesi"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Geliştirme tamamlandıktan sonra modelin nihai başarısını tarafsız ölçmek için kullanılan, eğitim ve ayar sırasında hiç görülmemiş veri parçası.",
  "how": "Veri en başta bölünür ve test seti bir kenara konur. Model eğitilir, ayarlar doğrulama setiyle yapılır; test seti yalnızca en sonda, ideal olarak bir kez kullanılır. Çıkan sonuç, modelin gerçek hayatta yeni verilerle karşılaştığında yaklaşık nasıl davranacağının tahminidir. Test sonuçlarına bakıp model değiştirilirse set tarafsızlığını yitirir, çünkü geliştirici farkında olmadan modeli ona göre uyarlar. Test verisi ayrıca gerçek kullanımı temsil etmeli ve eğitim verisinden kopya içermemelidir.",
  "why": "Bir modelin başarı iddiası ancak daha önce görmediği veriyle ölçülürse anlamlıdır. Haberlerdeki \"model şu testte şu puanı aldı\" türü iddialar bu mantığa dayanır. Test seti eğitime sızarsa ya da tekrar tekrar kullanılırsa sonuçlar olduğundan parlak görünür.",
  "example": "Tıbbi görüntü analizi yapan bir modelde, farklı hastanelerden gelen ve eğitimde hiç kullanılmamış röntgenler test seti olarak ayrılır; modelin nihai doğruluğu bunlarla raporlanır.",
  "faq": [
   [
    "Test setini birden fazla kez kullanmak sorun olur mu?",
    "Çoğu zaman olur. Her bakışta sonuca göre model değiştirilirse test seti dolaylı olarak ayar için kullanılmış olur ve sonuç iyimser çıkar. Bu yüzden test seti mümkün olduğunca az kullanılır."
   ],
   [
    "Test seti ne kadar büyük olmalı?",
    "Sabit bir oran yoktur; küçük veri kümelerinde sıkça yüzde 10 ile 20 arası ayrılır. Önemli olan, sonucun istatistiksel olarak güvenilir çıkacak kadar örnek içermesi ve gerçek kullanımı temsil etmesidir."
   ]
  ]
 },
 {
  "slug": "capraz-dogrulama",
  "term": "Çapraz doğrulama",
  "en": "cross-validation",
  "match": [
   "çapraz doğrulama",
   "cross-validation"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Veriyi birkaç parçaya bölüp her turda farklı bir parçayı sınama, kalanları eğitim için kullanma yöntemi. Turların ortalaması, modelin başarısına dair tek bir bölmeden daha sağlam bir tahmin verir.",
  "how": "En yaygın biçimi k katlı çapraz doğrulamadır. Veri örneğin beş eşit parçaya ayrılır. İlk turda dört parça eğitime, kalan bir parça sınamaya gider; sonraki turda sınama parçası değişir. Beş tur sonunda her parça bir kez sınama rolünü üstlenmiş olur ve beş sonucun ortalaması alınır. Sonuçlar arasındaki dağılım da modelin ne kadar kararlı olduğunu gösterir. Zaman serilerinde geleceğin geçmişi eğitmemesi için sıra korunarak bölünür.",
  "why": "Veri azsa tek bir doğrulama bölmesinin sonucu şansa bağlı olabilir; çapraz doğrulama bu riski azaltır. Model seçimi ve hiperparametre ayarında yaygın biçimde kullanılır. Bedeli, modelin birden çok kez eğitilmesidir; bu yüzden çok büyük modellerde pratik değildir.",
  "example": "Birkaç yüz hastalık bir veri kümesiyle çalışan bir araştırmacı, hastalık tahmin modelinin başarısını beş katlı çapraz doğrulamayla ölçer ve ortalama sonucu raporlar.",
  "faq": [
   [
    "Çapraz doğrulama test setinin yerini tutar mı?",
    "Genellikle tutmaz. Çapraz doğrulama çoğunlukla model seçimi ve ayar için kullanılır; model karşılaştırmaları ayara dayandığı için nihai ölçüm için ayrı bir test seti tutmak iyi uygulamadır."
   ],
   [
    "Büyük dil modellerinde neden çok kullanılmaz?",
    "Her tur modelin baştan eğitilmesini gerektirir. Büyük dil modellerinde tek bir eğitim bile çok maliyetli olduğu için bu yöntem pratik değildir; bunun yerine sabit ayrılmış setler kullanılır."
   ]
  ]
 },
 {
  "slug": "benchmark-kirlenmesi",
  "term": "Benchmark kirlenmesi",
  "en": "benchmark contamination",
  "match": [
   "benchmark kirlen",
   "veri kirlenmesi",
   "contamination"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir modelin sınandığı benchmark sorularının ya da yanıtlarının eğitim verisine karışması. Model bilgiyi öğrenmek yerine testi ezberlemiş olabileceğinden puanlar gerçek yeteneği olduğundan yüksek gösterir.",
  "how": "Büyük dil modelleri internetten toplanan çok büyük metin yığınlarıyla eğitilir. Popüler benchmark soruları, çözümleri ve tartışmaları da web'de bulunduğundan eğitim verisine istemeden girebilir. Model bu soruları eğitim sırasında gördüyse yanıtı çıkarsamak yerine hatırlıyor olabilir. Kirlenme, benchmark'a özel ince ayar yoluyla da gerçekleşebilir. Tespit için eğitim verisinde örtüşen metinler aranır, soruların yeniden ifade edilmiş sürümleri denenir ya da eğitimden sonra hazırlanmış yeni sorular kullanılır.",
  "why": "Benchmark puanları model karşılaştırmalarının ve haberlerdeki başarı iddialarının ana dayanağıdır. Kirlenmiş bir puan gerçek yeteneği abartır ve kıyaslamayı bozar. Bu nedenle gizli tutulan test setleri, sürekli yenilenen benchmark'lar ve bağımsız değerlendirmeler giderek daha fazla önem kazanıyor.",
  "example": "Soruları ve çözümleri forumlarda yayımlanmış bir matematik benchmark'ında, bu içerik eğitim verisine girmişse model orijinal sorularda çok iyi puan alıp sorular biraz değiştirildiğinde belirgin biçimde zorlanabilir.",
  "faq": [
   [
    "Benchmark kirlenmesi her zaman kasıtlı mıdır?",
    "Hayır. Çoğu durumda istemeden olur; çünkü eğitim verisi web'den büyük ölçekte toplanır ve benchmark içerikleri bu verinin içine karışabilir. Kasıtlı olarak benchmark'a göre ayar yapmak ise ayrı ve tartışmalı bir uygulamadır."
   ],
   [
    "Kirlenme nasıl anlaşılır?",
    "Kesin kanıt bulmak zordur, özellikle eğitim verisi paylaşılmıyorsa. Soruların değiştirilmiş sürümlerinde puanın düşmesi ya da eğitimden sonra yayımlanmış yeni sorularda başarının gerilemesi, kirlenme ihtimaline işaret eden sinyallerdir."
   ]
  ]
 },
 {
  "slug": "model-degerlendirmesi",
  "term": "Model değerlendirmesi (evals)",
  "en": "model evaluation",
  "match": [
   "model değerlendirme",
   "=evals",
   "=eval"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir yapay zeka modelinin belirli görevlerde ne kadar doğru, güvenli ve yararlı çalıştığını sistematik testlerle ölçme süreci. \"Evals\" ifadesi bu testlerin ve ölçüm düzeneklerinin genel adı olarak kullanılır.",
  "how": "Önce neyin ölçüleceği belirlenir: doğruluk, güvenlik, hız ya da üslup gibi. Ardından bu amaca uygun girdiler hazırlanır ve her girdi için iyi bir yanıtın neye benzediği tanımlanır. Model bu girdilerle çalıştırılır; çıktılar otomatik ölçütlerle, başka bir modelle ya da insanlarla puanlanır. Sonuçlar model sürümleri arasında karşılaştırılır. Şirketler bunu hem herkese açık benchmark'larla hem de kendi ürününe özel testlerle yapar.",
  "why": "Değerlendirme olmadan bir model değişikliğinin iyileştirme mi yoksa gerileme mi olduğu bilinemez. Haberlerdeki başarı iddiaları ve model karşılaştırmaları da buna dayanır. Kötü tasarlanmış bir ölçüm yanıltıcı sonuç verebilir. Ürün geliştiren ekipler için evals, yazılımdaki kalite kontrolün karşılığı sayılır.",
  "example": "Müşteri hizmetleri sohbet botu geliştiren bir şirket, gerçek müşteri sorularından yüzlerce örnek seçer ve yeni model sürümünün yanıtlarını eskisininkilerle karşılaştırarak yayına almaya karar verir.",
  "faq": [
   [
    "Benchmark ile evals aynı şey mi?",
    "Tam olarak değil. Benchmark, modellerin karşılaştırılması için herkesin kullandığı ortak bir testtir. Evals ise daha geniş bir kavramdır; benchmark'ların yanında bir ekibin kendi ürününe özel hazırladığı testleri de kapsar."
   ],
   [
    "Bir modeli değerlendirmek için tek bir puan yeterli mi?",
    "Hayır. Modeller görevlere göre çok farklı davranabilir; bir alanda iyi puan almak başka bir alanda başarılı olmayı garanti etmez. Bu yüzden birden çok ölçüt ve görev birlikte değerlendirilir."
   ]
  ]
 },
 {
  "slug": "hakem-olarak-llm",
  "term": "Hakem olarak LLM (LLM-as-a-judge)",
  "en": "LLM-as-a-judge",
  "match": [
   "llm-as-a-judge",
   "hakem model",
   "hakem olarak llm"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir dil modelinin çıktılarını, genellikle güçlü bir başka dil modeline puanlatma ya da karşılaştırtma yöntemi. İnsan değerlendirmesine göre daha ucuz ve hızlı bir seçenek sunar.",
  "how": "Hakem modele değerlendirme ölçütleri ve incelenecek yanıt verilir. Model ya yanıta puan verir ya da iki yanıttan hangisinin daha iyi olduğunu seçip gerekçesini yazar. Bu sayede binlerce çıktı kısa sürede değerlendirilebilir. Yöntemin bilinen zayıflıkları vardır: hakem modeller uzun yanıtları, kendi üslubuna benzeyen yanıtları ya da ilk sıradaki yanıtı kayırabilir. Bu yüzden ölçütler net yazılır, yanıtların sırası karıştırılır ve sonuçlar insan değerlendirmeleriyle örnekleme yoluyla doğrulanır.",
  "why": "Açık uçlu yanıtlar basit doğru-yanlış ölçütleriyle değerlendirilemez; insanlarla değerlendirme ise yavaş ve pahalıdır. Hakem LLM bu boşluğu doldurduğu için sohbet botu ve yapay zeka ajanı testlerinde yaygın kullanılır. Ancak yanlılıkları göz ardı edilirse yanıltıcı sonuçlar verebilir.",
  "example": "Bir ekip, iki özetleme modelinin ürettiği yüzlerce özeti başka bir modele \"hangisi metne daha sadık?\" diye sordurarak sıralar, ardından küçük bir kısmını insanlara kontrol ettirir.",
  "faq": [
   [
    "Hakem olarak LLM insan değerlendirmesinin yerini tutar mı?",
    "Tam olarak değil. Hızlı ve ölçeklenebilir olsa da hakem modelin kendi yanlılıkları ve hataları vardır. Bu yüzden genellikle insan değerlendirmesiyle desteklenir ve zaman zaman onunla karşılaştırılarak doğrulanır."
   ],
   [
    "Hakem modeller hangi yanlılıkları gösterebilir?",
    "Sık görülenler arasında uzun yanıtları tercih etme, yanıtların sunuluş sırasından etkilenme ve kendi ürettiği ya da benzer modellerin ürettiği yanıtları kayırma sayılır."
   ]
  ]
 },
 {
  "slug": "insan-degerlendirmesi",
  "term": "İnsan değerlendirmesi",
  "en": "human evaluation",
  "match": [
   "insan değerlendirme"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Model çıktılarının insanlar tarafından okunup puanlanması ya da karşılaştırılması. Kalite, yararlılık ve güvenlik gibi otomatik ölçütlerin yakalayamadığı nitelikleri ölçmek için kullanılır.",
  "how": "Değerlendiriciler kendilerine gösterilen yanıtları belirli yönergelere göre puanlar ya da iki yanıttan hangisini tercih ettiklerini işaretler. Genellikle hangi modelin yanıtı olduğu gizlenir; buna kör test denir. Aynı örneği birden çok kişi değerlendirir ve değerlendiriciler arasındaki uyum ölçülerek yönergelerin yeterince net olup olmadığı anlaşılır. Hukuk ve tıp gibi alanlarda uzman değerlendiriciler tercih edilir. Toplanan tercihler, insan geri bildirimiyle pekiştirmeli öğrenmede model eğitimi için de kullanılır.",
  "why": "Bir yanıtın doğal, yararlı ya da uygun olup olmadığı sonuçta insanın yargısına bağlıdır. Öte yandan yöntem pahalı ve yavaştır; değerlendiriciler arasında tutarsızlık ve öznellik de görülebilir. Bu nedenle çoğunlukla otomatik ölçümler ve hakem LLM yöntemiyle birlikte kullanılır.",
  "example": "Bir sohbet botunun iki sürümünün yanıtları, hangi sürüme ait oldukları gösterilmeden değerlendiricilere sunulur ve hangisinin daha yararlı olduğu sorulur.",
  "faq": [
   [
    "Otomatik ölçümler varken insan değerlendirmesi neden hâlâ gerekli?",
    "Üslup, yaratıcılık, yararlılık ve zararlı içerik gibi nitelikleri basit ölçütlerle yakalamak zordur. İnsan yargısı, otomatik yöntemlerin ve hakem modellerin doğruluğunu kontrol etmek için de bir referans işlevi görür."
   ],
   [
    "İnsan değerlendirmesinin sonuçları ne kadar güvenilirdir?",
    "Yönergelerin netliğine, değerlendiricilerin sayısına ve uzmanlığına bağlıdır. Öznellik tamamen ortadan kalkmaz; bu yüzden aynı örnek birden çok kişiye verilir ve aralarındaki uyum ölçülür."
   ]
  ]
 },
 {
  "slug": "arena-siralamasi",
  "term": "Arena sıralaması",
  "en": "arena leaderboard",
  "match": [
   "arena sıralama",
   "lmarena",
   "chatbot arena"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Yapay zeka modellerinin, kullanıcıların kör karşılaştırmada verdiği oylara göre sıralandığı liste. İki modelin yanıtları adı gizlenerek yan yana gösterilir, kullanıcı daha iyi bulduğunu seçer.",
  "how": "Kullanıcı bir soru yazar; sistem rastgele seçtiği iki modelden yanıt alır ve hangi modelin yanıt verdiğini söylemeden ikisini yan yana gösterir. Kullanıcı daha iyi yanıtı seçince oy kaydedilir. Çok sayıda ikili karşılaşmanın sonuçları, satranç derecelendirmesindeki Elo mantığına benzeyen istatistiksel yöntemlerle her modele bir puana dönüştürülür. Puanı yüksek olan modeller listede üst sıraya çıkar. En bilinen örnek, Chatbot Arena adıyla başlayan ve sonradan LMArena olarak anılan platformdur.",
  "why": "Sabit sınav soruları zamanla ezberlenebilir ya da sızabilir; arena ise gerçek kullanıcıların güncel ve çeşitli sorularına dayanır. Bu yüzden bir modelin sohbet kalitesi ve beğenilirliği hakkında ipucu verir. Öte yandan oylar üslup, uzunluk ve biçimlendirmeden etkilenebilir; doğruluk ya da güvenlik için tek başına yeterli ölçüt sayılmaz.",
  "example": "Bir kullanıcı 'Kira sözleşmesini sadeleştir' yazar, adı gizli iki yanıttan birini seçer; bu oy, iki modelin puanını az da olsa değiştirir.",
  "faq": [
   [
    "Arena sıralaması ile klasik benchmark arasındaki fark ne?",
    "Klasik benchmark sabit sorular ve doğru cevap anahtarı kullanır. Arena ise insan tercihine dayanır ve doğru cevap yerine 'hangisi daha iyi' sorusunu ölçer."
   ],
   [
    "Arena'da en üstteki model her işte en iyisi mi?",
    "Hayır. Oylar genel tercihi yansıtır; kodlama, matematik ya da belirli bir dil gibi alanlarda başka bir model daha iyi olabilir."
   ]
  ]
 },
 {
  "slug": "liderlik-tablosu",
  "term": "Liderlik tablosu",
  "en": "leaderboard",
  "match": [
   "liderlik tablo",
   "leaderboard"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Yapay zeka modellerinin aynı test ya da ölçüt üzerindeki sonuçlarına göre puan sırasıyla dizildiği karşılaştırma tablosu. Hangi modelin hangi görevde nasıl performans gösterdiğini tek bakışta sunar.",
  "how": "Bir ölçüt hazırlayıcısı, sabit bir soru ya da görev kümesi belirler. Modeller bu görevlerde çalıştırılır, çıktılar doğru cevaplarla veya otomatik testlerle karşılaştırılarak puanlanır. Sonuçlar yüksekten düşüğe sıralanıp tabloya yazılır. Bazı tabloları ölçütü hazırlayan kurum, bazılarını bağımsız topluluklar işletir; sonuçlar modeli geliştiren şirketin kendi bildirimine de dayanabilir. Hugging Face'in açık modeller için tuttuğu tablolar bilinen örnekler arasındadır.",
  "why": "Haberlerde bir modelin 'öne geçtiği' çoğunlukla bu tablolar üzerinden anlatılır. Tablo hızlı karşılaştırma sağlar, ancak sıralama seçilen ölçüte, test koşullarına ve puanın kim tarafından bildirildiğine bağlıdır. Ezberleme ve veri sızıntısı gibi sorunlar da sıralamayı yanıltıcı hale getirebilir.",
  "example": "Bir şirket yeni modelini tanıtırken kodlama ölçütündeki puanını gösterir ve rakip modellerle aynı tabloda sunar.",
  "faq": [
   [
    "Liderlik tablosundaki birinci model en iyi model mi?",
    "Yalnızca o ölçütte en yüksek puanı almış demektir. Başka görevlerde, maliyette veya hızda sıralama değişebilir."
   ],
   [
    "Liderlik tablosu ile benchmark aynı şey mi?",
    "Hayır. Benchmark ölçüm aracıdır, yani sorular ve puanlama yöntemidir. Liderlik tablosu ise bu ölçümün sonuçlarının sıralanmış hâlidir."
   ]
  ]
 },
 {
  "slug": "mmlu",
  "term": "MMLU",
  "en": "Massive Multitask Language Understanding",
  "match": [
   "=mmlu"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Dil modellerinin 57 farklı alandaki çoktan seçmeli sorularla genel bilgi ve akıl yürütme düzeyini ölçen ölçüt. Tarih, hukuk, tıp ve matematik gibi konuları kapsar.",
  "how": "Test, ilkokul düzeyinden mesleki uzmanlığa uzanan zorlukta, dört şıklı sorulardan oluşur. Model soruyu ve şıkları görür, bir şık seçer; puan doğru cevap oranıdır. Sorular birkaç çözülmüş örnek verilerek (few-shot) ya da hiç örnek verilmeden sorulabilir ve bu ayar sonucu etkiler. Sonuç tek bir yüzde değeri olarak raporlanır, alan bazında dökümü de verilebilir. Ölçüt, Dan Hendrycks ve arkadaşlarının 2020'de duyurduğu bir çalışmayla tanıtıldı.",
  "why": "MMLU yıllarca modellerin genel bilgi düzeyini karşılaştırmanın standart yolu oldu ve model duyurularında sık yer aldı. Üst düzey modellerin puanları tavana yaklaştığı için ayırt ediciliği azaldı; bazı soruların hatalı olduğu da bildirildi. Bu nedenle daha zor ya da temizlenmiş sürümler ve yeni ölçütler öne çıktı.",
  "example": "Bir model duyurusunda MMLU puanının paylaşılması, modelin dört şıklı sorularda doğru şıkkı hangi oranda seçtiğini göstermek içindir.",
  "faq": [
   [
    "MMLU puanı yüksekse model her konuda iyi midir?",
    "Hayır. MMLU çoktan seçmeli bilgi sorularını ölçer; uzun metin yazma, araç kullanma ya da gerçek dünya görevleri hakkında az şey söyler."
   ],
   [
    "MMLU neden artık tek başına yetmiyor?",
    "Güçlü modeller bu testte tavana yakın puan alıyor ve bazı sorular hatalı olabiliyor ya da eğitim verisine sızmış olabiliyor. Bu da modeller arasındaki farkı görmeyi zorlaştırıyor."
   ]
  ]
 },
 {
  "slug": "gpqa",
  "term": "GPQA",
  "en": "Graduate-Level Google-Proof Q&A",
  "match": [
   "=gpqa"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Biyoloji, fizik ve kimyada uzmanların hazırladığı, internet aramasıyla kolayca çözülemeyecek şekilde tasarlanmış lisansüstü düzeyde çoktan seçmeli soru seti. Modellerin derin bilimsel akıl yürütmesini ölçer.",
  "how": "Sorular, ilgili alanda doktora yapmış ya da yapmakta olan uzmanlarca yazılır ve başka uzmanlarca doğrulanır. 'Google-proof' ifadesi, alanı bilmeyen birinin internette arama yaparak bile doğru cevaba ulaşmakta zorlanması anlamına gelir. Model çoktan seçmeli soruyu yanıtlar, puan doğru cevap oranıdır. Veri seti 2023'te yayımlandı; en zor soruları içeren 'Diamond' alt kümesi haberlerde sık anılır.",
  "why": "MMLU gibi genel testler doygunluğa ulaşınca araştırmacılar daha zor ölçütlere yöneldi; GPQA bunlardan biri. Yüksek puan, modelin uzman düzeyindeki bilimsel sorulara yaklaştığına dair bir işaret sayılır. Yine de soru sayısı görece azdır ve çoktan seçmeli biçim, gerçek bilimsel çalışmayı tam yansıtmaz.",
  "example": "Bir model, moleküler biyolojiyle ilgili çoktan seçmeli bir soruyu yanıtlar; doğru şıkkı seçme oranı GPQA puanını oluşturur.",
  "faq": [
   [
    "GPQA ile MMLU arasındaki fark ne?",
    "MMLU geniş bir konu yelpazesinde, daha çok ders kitabı düzeyinde sorular içerir. GPQA ise üç bilim dalına odaklanır ve çok daha zor, uzman yazımı sorular sunar."
   ],
   [
    "'Google-proof' ne demek?",
    "Soruların cevabının basit bir web aramasıyla kolayca bulunamaması demektir. Amaç, cevabın aramadan çok akıl yürütmeyle bulunmasıdır."
   ]
  ]
 },
 {
  "slug": "swe-bench",
  "term": "SWE-bench",
  "en": "SWE-bench",
  "match": [
   "swe-bench"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Yapay zeka modellerinin gerçek yazılım projelerindeki hataları ve istekleri çözme becerisini ölçen ölçüt. Görevler, popüler açık kaynak Python projelerinin GitHub kayıtlarından alınmıştır.",
  "how": "Her görevde modele bir projenin kod deposu ve GitHub'da açılmış bir sorun bildirimi verilir. Model, sorunu çözecek bir kod değişikliği (yama) üretir. Değişiklik uygulanır ve projenin kendi testleri çalıştırılır; testler geçerse görev çözülmüş sayılır. Puan, çözülen görevlerin oranıdır. Ölçüt, Princeton Üniversitesi'nden araştırmacıların da bulunduğu bir ekip tarafından 2023'te tanıtıldı; insanlarca gözden geçirilmiş 'Verified' alt kümesi de yaygın kullanılır.",
  "why": "Kodlama asistanları ve 'yazılım mühendisi ajanları' haberlerde sık geçer; SWE-bench bu iddiaları gerçek projelerle sınayan en bilinen ölçütlerden biridir. Tek bir fonksiyon yazmaktan daha gerçekçi bir iş olduğu için ajan yeteneklerini göstermede değerlidir. Sonuçlar kullanılan düzenek ve araçlara göre değişebildiğinden puanlar dikkatle karşılaştırılmalıdır.",
  "example": "Bir açık kaynak kütüphanede 'şu girdide program çöküyor' diye açılmış bir hata kaydı, modelden düzeltme yazması istenen bir SWE-bench görevi olabilir.",
  "faq": [
   [
    "SWE-bench Verified nedir?",
    "Görevlerin insanlarca gözden geçirilip çözülebilir ve net tanımlı olduğu doğrulanan alt kümesidir. Belirsiz ya da hatalı görevlerin puanı bozmasını azaltmayı amaçlar."
   ],
   [
    "SWE-bench, HumanEval'den nasıl ayrılır?",
    "HumanEval kısa, tek fonksiyonluk problemler içerir. SWE-bench ise büyük bir kod deposunda birden çok dosyayı anlamayı ve değiştirmeyi gerektirir."
   ]
  ]
 },
 {
  "slug": "humanity-s-last-exam",
  "term": "Humanity's Last Exam",
  "en": "Humanity's Last Exam",
  "match": [
   "humanity's last exam",
   "humanity’s last exam",
   "insanlığın son sınavı"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Alanında uzman kişilerin yazdığı, matematikten insan bilimlerine uzanan çok zor ve kapalı uçlu sorulardan oluşan bir yapay zeka sınavı. Mevcut testler kolaylaştığı için modelleri zorlamak amacıyla hazırlandı.",
  "how": "Sınav, Center for AI Safety ile Scale AI'ın öncülüğünde, birçok ülkeden uzmanların katkısıyla hazırlandı. Sorular, güçlü modellerin o dönemde yanıtlayamadığı biçimde seçildi; yani modellerin yanlış yaptığı sorular teste girdi. Cevaplar çoğunlukla kısa ve tek bir doğru yanıta sahip olduğundan otomatik puanlanabilir. Soruların çoğu metin, bir kısmı görsel içerir. Binlerce soru içeren sınav 2025'in başında duyuruldu.",
  "why": "Eski ölçütlerde modeller tavana yaklaşınca ilerlemeyi ayırt etmek zorlaştı; bu sınav o boşluğu doldurmayı hedefliyor. Puanlar, modellerin uzman düzeyi bilgiden ne kadar uzak olduğunu göstermesi açısından haberlerde sık anılır. Adı iddialı olsa da sınav genel yeteneği ya da yaratıcılığı ölçmez; yalnızca akademik soru çözmeyi ölçer.",
  "example": "Bir model duyurusunda bu sınavdaki puanın paylaşılması, modelin uzmanların bile zorlandığı sorulara ne kadar yaklaştığını göstermek içindir.",
  "faq": [
   [
    "Humanity's Last Exam gerçekten insanlığın son sınavı mı?",
    "Hayır, ad iddialı bir vurgudur. Modeller geliştikçe daha zor ölçütler hazırlanmaya devam edeceği için bunun son sınav olması beklenmez."
   ],
   [
    "Sorular neden modeller üzerinde önceden sınanıp seçildi?",
    "Amaç, testin baştan zor olmasını sağlamaktı. Böylece güçlü modellerin hemen yüksek puan alması ve testin kısa sürede ayırt edicilik kaybetmesi önlenmek istendi."
   ]
  ]
 },
 {
  "slug": "arc-agi",
  "term": "ARC-AGI",
  "en": "Abstraction and Reasoning Corpus",
  "match": [
   "arc-agi"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Küçük renkli ızgara bulmacalarıyla bir yapay zeka sisteminin daha önce görmediği bir kuralı birkaç örnekten çıkarıp yeni duruma uygulayıp uygulayamadığını ölçen ölçüt. François Chollet tarafından tasarlandı.",
  "how": "Her görevde birkaç girdi-çıktı örneği gösterilir; bunlar renkli karelerden oluşan ızgaralardır. Çözücü, örnekler arasındaki gizli kuralı bulur ve yeni bir ızgaraya uygulayarak çıktıyı kendisi üretir. Görevler özel bilgi gerektirmeyecek, insanlar için görece çözülebilir olacak biçimde tasarlandı. Sonuç, çıktının tamamen doğru olup olmamasına göre değerlendirilir. François Chollet bu fikri 2019'da, zekayı yeni beceriler edinme verimliliği olarak ele aldığı bir makalede ortaya koydu; ARC Prize gibi yarışmalar ölçütü yaygınlaştırdı.",
  "why": "Çoğu ölçüt ezberlenebilecek bilgiyi sınar; ARC-AGI ise yeni bir durumda genelleme yapabilmeyi öne çıkarır. Bu nedenle genel yapay zekaya (AGI) ne kadar yaklaşıldığı tartışmalarında sık anılır. Bununla birlikte tek bir ölçütte yüksek puan almak genel zeka anlamına gelmez; ölçütün neyi ölçtüğü konusunda araştırmacılar arasında görüş ayrılığı vardır.",
  "example": "Ekranda mavi karelerin bir köşeye taşındığı iki örnek gösterilir; sistemden aynı kuralı üçüncü bir ızgaraya uygulaması beklenir.",
  "faq": [
   [
    "ARC-AGI'yi çözmek genel yapay zeka (AGI) demek mi?",
    "Hayır. Birçok uzman, bunun tek başına AGI kanıtı olmadığını söyler; ölçüt yalnızca belirli bir genelleme yeteneğini sınar."
   ],
   [
    "ARC-AGI görevleri insanlar için kolay mı?",
    "Görevler özel bilgi gerektirmeyecek ve insanlar için görece çözülebilir olacak şekilde tasarlandı. Buna rağmen yapay zeka sistemleri için yıllarca zorlayıcı kaldı."
   ]
  ]
 },
 {
  "slug": "humaneval",
  "term": "HumanEval",
  "en": "HumanEval",
  "match": [
   "=humaneval"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Dil modellerinin kod yazma becerisini, açıklamasına bakarak Python fonksiyonu yazma görevleriyle ölçen ölçüt. 164 elle hazırlanmış programlama problemi içerir ve OpenAI tarafından geliştirildi.",
  "how": "Her problemde modele fonksiyonun adı ve ne yapması gerektiğini anlatan kısa bir açıklama verilir. Model fonksiyonun gövdesini yazar. Üretilen kod çalıştırılır ve problemin birim testlerinden geçerse doğru sayılır. Raporlanan değer genellikle 'pass@k' adlı ölçüdür: modelin k denemesinden en az biri testleri geçerse problem çözülmüş sayılır. Ölçüt, OpenAI'nin 2021'de kod modeli Codex'i tanıttığı çalışmayla birlikte yayımlandı.",
  "why": "HumanEval, kodlama yeteneğinin ölçülmesinde uzun süre standart referans oldu ve birçok model duyurusunda yer aldı. Problemler kısa ve görece basit olduğu için güçlü modeller bu testte yüksek puanlara ulaştı; ayrıca veri sızıntısı endişesi de var. Bu yüzden gerçek yazılım projelerini içeren SWE-bench gibi ölçütler daha çok ilgi görüyor.",
  "example": "Bir problem, 'bir sayı listesindeki çift sayıların toplamını döndüren fonksiyonu yaz' gibi kısa bir istek olabilir; model kodu yazar, testler sonucu doğrular.",
  "faq": [
   [
    "pass@1 ne demek?",
    "Modelin her probleme tek deneme hakkı olduğunda doğru çözdüğü problemlerin oranıdır."
   ],
   [
    "HumanEval'de yüksek puan, iyi bir yazılım mühendisi olmak demek mi?",
    "Hayır. Ölçüt kısa, tek fonksiyonluk görevleri sınar; büyük projelerde çalışmayı, hata ayıklamayı ve tasarım kararlarını ölçmez."
   ]
  ]
 },
 {
  "slug": "gsm8k",
  "term": "GSM8K",
  "en": "Grade School Math 8K",
  "match": [
   "=gsm8k"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "OpenAI araştırmacılarının 2021'de yayımladığı, yaklaşık 8,5 bin ilkokul ve ortaokul düzeyinde matematik probleminden oluşan test seti. Dil modellerinin birkaç adımlı aritmetik akıl yürütmesini ölçmek için kullanılır.",
  "how": "Her problem kısa bir hikâye biçiminde yazılmıştır ve dört işlemle ulaşılan iki ila sekiz adımlık bir çözümü vardır. Model soruyu yanıtlar, ulaştığı nihai sayı doğru yanıtla karşılaştırılır; ara adımlar genellikle puana katılmaz. Modelden çözümü adım adım yazması istendiğinde (düşünce zinciri yöntemi) sonuçlar belirgin biçimde iyileşir. Set eğitim ve test olarak ayrılmıştır; test kısmı yaklaşık bin problemdir.",
  "why": "GSM8K, büyük dil modellerinin matematiksel akıl yürütmesini karşılaştırmak için uzun süre standart ölçüt oldu. Güçlü modeller artık bu sette çok yüksek puanlar aldığından ayırt edici gücü azaldı ve yerini daha zor testler aldı. Yine de bir modelin temel düzeyde sağlam olup olmadığına bakmak için hâlâ sık anılır.",
  "example": "Bir model 'Ayşe'nin 12 kalemi var; 5'ini arkadaşına verip 3 tane daha alıyor. Kaç kalemi olur?' gibi bir soruyu adım adım çözüp 10 cevabına ulaşırsa doğru sayılır.",
  "faq": [
   [
    "GSM8K'da yüksek puan almak modelin matematikte uzman olduğu anlamına gelir mi?",
    "Hayır. Sorular görece basittir ve test sorularının eğitim verisine karışmış olması ihtimali de vardır. Yüksek puan, modelin temel işlem ve çok adımlı düşünmede iyi olduğunu gösterir; ileri matematik için daha zor testlere bakmak gerekir."
   ],
   [
    "GSM8K ile AIME arasındaki fark nedir?",
    "GSM8K temel aritmetik ve gündelik problemlere dayanır. AIME ise lise yarışması düzeyindeki, çok daha zor ve yaratıcı çözüm gerektiren sorulardan oluşur."
   ]
  ]
 },
 {
  "slug": "aime",
  "term": "AIME (matematik benchmarkı)",
  "en": "American Invitational Mathematics Examination",
  "match": [
   "=aime"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "ABD'de lise öğrencilerine yönelik prestijli bir matematik yarışması sınavı. Yapay zekada bu sınavın soruları, modellerin zor matematik problemlerini çözme becerisini ölçen bir test olarak kullanılır.",
  "how": "Sınav 15 sorudan oluşur ve her sorunun yanıtı 0 ile 999 arasında bir tam sayıdır. Bu yüzden cevap şıklarla tahmin edilemez ve otomatik olarak kolayca kontrol edilir. Araştırmacılar genellikle belirli bir yılın sorularını modele verir, nihai sayıyı doğru yanıtla karşılaştırır ve doğru oranını puan olarak bildirir. Soru sayısı az olduğundan bazı raporlar modeli birkaç kez dener ve sonuçların ortalamasını alır.",
  "why": "AIME, basit aritmetiğin ötesinde çok adımlı ve yaratıcı akıl yürütme gerektirdiği için 'düşünen' modellerin karşılaştırıldığı haberlerde sık geçer. Öte yandan soru sayısı az olduğundan puanlar dalgalanabilir ve eski sınav soruları eğitim verisine karışmış olabilir. Bu yüzden tek başına bir sıralama ölçütü olarak yorumlanmamalıdır.",
  "example": "Bir şirket yeni muhakeme modelini tanıtırken modelin AIME'nin yakın yıllarda yapılmış sınavlarındaki doğru yanıt oranını paylaşır; okur bu oranı önceki modellerinkiyle kıyaslayabilir.",
  "faq": [
   [
    "AIME'de cevapların tam sayı olması neden önemli?",
    "Tam sayı yanıt, doğru cevabın tek ve net olmasını sağlar. Böylece modelin yanıtı insan yorumu gerekmeden otomatik olarak doğrulanır ve tahminle şans eseri bulunması da zorlaşır."
   ],
   [
    "AIME'de yüksek puan alan model matematikçi gibi düşünür mü?",
    "Bu sonuç, modelin yarışma tarzı problemlerde güçlü olduğunu gösterir. Ancak araştırma düzeyinde matematik yapabildiği anlamına gelmez; soru sayısı azdır ve testin kapsamı dardır."
   ]
  ]
 },
 {
  "slug": "terminal-bench",
  "term": "Terminal-Bench",
  "en": "Terminal-Bench",
  "match": [
   "terminal-bench"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Yapay zeka ajanlarının komut satırı (terminal) üzerinde gerçek yazılım ve sistem görevlerini ne kadar başarıyla tamamladığını ölçen bir test seti.",
  "how": "Her görev, yalıtılmış bir terminal ortamında ajana verilir: örneğin bir yazılımı derlemek, bir sunucuyu yapılandırmak ya da bozuk bir kurulumu onarmak. Ajan komut yazar, çıktıyı okur ve gerekirse yaklaşımını değiştirir. Görev bitince önceden hazırlanmış testler ortamın istenen duruma gelip gelmediğine bakar; yalnızca sonuç doğruysa görev başarılı sayılır. Başarı oranı görev sayısı üzerinden hesaplanır.",
  "why": "Yazılım geliştirmede ajanlara giderek daha fazla iş devredildiği için, modelin yalnızca kod yazması değil, gerçek bir ortamda araçları kullanarak işi sonuna kadar götürmesi önem kazanıyor. Terminal-Bench bu uçtan uca yeteneği ölçer. Sonuçlar, ajan tabanlı kodlama ürünlerinin karşılaştırılmasında sık anılır.",
  "example": "Bir ajandan, kaynak kodu indirilmiş bir projeyi derleyip çalışır hâle getirmesi istenir; derleme gerçekten başarılı olduysa görev geçilmiş sayılır.",
  "faq": [
   [
    "Terminal-Bench ile SWE-bench arasındaki fark nedir?",
    "SWE-bench ağırlıklı olarak açık kaynak depolardaki yazılım hatalarını düzelten yamalar yazmaya odaklanır. Terminal-Bench ise terminalde yapılan daha geniş kapsamlı görevleri, yani kurulum, yapılandırma ve sistem işlerini de içerir."
   ],
   [
    "Ajanlar neden terminalde test ediliyor?",
    "Terminal metin tabanlıdır, yani modelin komut yazması ve çıktıyı okuması doğaldır. Ayrıca sonucun doğruluğu otomatik testlerle net biçimde kontrol edilebilir."
   ]
  ]
 },
 {
  "slug": "osworld",
  "term": "OSWorld",
  "en": "OSWorld",
  "match": [
   "=osworld"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Yapay zeka ajanlarının gerçek bir bilgisayar ortamında ekranı görüp fare ve klavyeyle uygulamaları kullanarak açık uçlu görevleri yerine getirme becerisini ölçen benchmark.",
  "how": "Ajan, bir işletim sisteminin çalıştığı sanal makinede görevi doğal dille alır. Ekran görüntüsüne bakarak tıklama, yazma ve kısayol gibi eylemler seçer; tarayıcı, ofis programları ve dosya yöneticisi gibi uygulamalar arasında geçiş yapabilir. Görev sonunda her göreve özel yazılmış bir betik, dosyanın ya da ayarın beklenen durumda olup olmadığını kontrol eder. Böylece başarı, insan yorumuna bırakılmadan otomatik ölçülür.",
  "why": "Bilgisayar kullanan ajanlar, yapay zekanın sohbetten eyleme geçtiği alanlardan biridir. OSWorld, bu ajanların gerçek arayüzlerde ne kadar güvenilir çalıştığını ortak bir ölçüyle gösterdiği için model ve ürün duyurularında sık anılır. Çok adımlı görevlerde tek bir yanlış tıklama bile işi bozabildiğinden bu test zorlayıcıdır.",
  "example": "Ajandan bir tablo dosyasını açıp belirli bir sütunu sıralaması ve dosyayı farklı bir adla kaydetmesi istenir; betik dosyayı kontrol ederek görevi doğrular.",
  "faq": [
   [
    "OSWorld ile yalnızca tarayıcı odaklı ajan testleri arasındaki fark nedir?",
    "Tarayıcı odaklı testler web sayfalarıyla sınırlıdır. OSWorld ise ofis programları, dosya yönetimi ve sistem ayarları gibi masaüstü uygulamalarını da kapsar."
   ],
   [
    "OSWorld puanı neyi gösterir?",
    "Ajanın görevleri baştan sona doğru tamamlayabilme oranını gösterir. Ancak yalnızca test edilen görev türleri için geçerlidir; gerçek hayattaki her iş akışını temsil etmez."
   ]
  ]
 },
 {
  "slug": "dogruluk-orani",
  "term": "Doğruluk oranı (accuracy)",
  "en": "accuracy",
  "match": [
   "doğruluk oran"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir modelin yaptığı tahminlerin ne kadarının doğru çıktığını gösteren, doğru tahmin sayısının toplam tahmin sayısına bölünmesiyle bulunan en temel başarı ölçüsü.",
  "how": "Model test verisindeki her örnek için tahmin üretir ve tahminler gerçek etiketlerle karşılaştırılır. Doğru bilinenlerin sayısı toplam örnek sayısına bölünür ve çoğunlukla yüzde olarak verilir. 200 örnekte 180 doğru tahmin, yüzde 90 doğruluk demektir. Ölçü tek bir sayı verdiği için anlaşılması kolaydır, fakat hangi türde hataların yapıldığını göstermez.",
  "why": "Doğruluk, haberlerde ve model tanıtımlarında en sık geçen başarı rakamlarından biridir; ancak sınıflar dengesiz olduğunda yanıltıcı olabilir. Örneğin işlemlerin yüzde 99'u meşruysa, her şeye 'meşru' diyen bir model bile yüzde 99 doğruluk elde eder. Bu yüzden kesinlik ve duyarlılık gibi ölçülerle birlikte okunmalıdır.",
  "example": "Bir e-posta filtresi 1.000 iletiden 950'sini doğru sınıflandırırsa doğruluk oranı yüzde 95'tir.",
  "faq": [
   [
    "Doğruluk oranı yüksekse model iyi midir?",
    "Her zaman değil. Veride bir sınıf çok baskınsa, nadir ama önemli durumları hiç yakalayamayan bir model bile yüksek doğruluk gösterebilir. Hata türlerine bakmak gerekir."
   ],
   [
    "Doğruluk oranı ile kesinlik aynı şey midir?",
    "Hayır. Doğruluk tüm tahminlerin ne kadarının doğru olduğunu ölçer. Kesinlik ise yalnızca 'pozitif' denen örneklerin ne kadarının gerçekten pozitif olduğuna bakar."
   ]
  ]
 },
 {
  "slug": "kesinlik-ve-duyarlilik",
  "term": "Kesinlik ve duyarlılık",
  "en": "precision and recall",
  "match": [
   "precision and recall",
   "kesinlik ve duyarlılık"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Sınıflandırma modellerinin iki tamamlayıcı ölçüsü: kesinlik, modelin 'pozitif' dediklerinin ne kadarının gerçekten pozitif olduğunu; duyarlılık ise gerçek pozitiflerin ne kadarının yakalandığını gösterir.",
  "how": "Kesinlik, modelin 'bulundu' dediği örnekler arasındaki doğru oranıdır; duyarlılık ise gerçekte var olan örneklerin ne kadarının bulunduğudur. İkisi genellikle ters yönde hareket eder: model karar eşiğini gevşetirse daha çok örneği yakalar ama daha çok yanlış alarm verir; eşiği sıkılaştırırsa tersi olur. Uygulamada hangisinin öncelikli olacağı, hatanın maliyetine göre seçilir.",
  "why": "Doğruluk oranı hata türlerini gizler; bu iki ölçü ise yanlış alarm ile kaçırılan vaka arasındaki farkı ayırır. Tıbbi taramada kaçırılan hastalık pahalıdır, içerik denetiminde ise yanlış engelleme kullanıcıyı mağdur edebilir. Bu yüzden yapay zeka sistemlerinin güvenilirliği tartışılırken iki rakam birlikte sorulur.",
  "example": "Bir spam filtresi 100 iletiyi spam olarak işaretlemiş ve bunların 90'ı gerçekten spamse kesinlik yüzde 90'dır; gelen kutusundaki toplam 120 spamin 90'ını yakalamışsa duyarlılık yüzde 75'tir.",
  "faq": [
   [
    "Hangisi daha önemli: kesinlik mi duyarlılık mı?",
    "Duruma bağlıdır. Kaçırmanın pahalı olduğu yerlerde, örneğin hastalık taramasında duyarlılık öne çıkar. Yanlış alarmın pahalı olduğu yerlerde, örneğin otomatik hesap kapatmada kesinlik daha önemlidir."
   ],
   [
    "Duyarlılık ile özgüllük aynı mıdır?",
    "Hayır. Duyarlılık gerçek pozitifleri yakalama oranıdır. Özgüllük ise gerçek negatifleri doğru biçimde negatif olarak tanıma oranıdır."
   ]
  ]
 },
 {
  "slug": "f1-skoru",
  "term": "F1 skoru",
  "en": "F1 score",
  "match": [
   "f1 skor",
   "f1 puan",
   "f1 score"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Sınıflandırma modelleri için kesinlik ile duyarlılığı tek bir sayıda birleştiren, 0 ile 1 arasında değer alan başarı ölçüsü; iki değerin harmonik ortalamasıdır.",
  "how": "F1 hesaplanırken kesinlik ve duyarlılığın harmonik ortalaması alınır. Bu ortalama düşük olan değere ağırlık verir; yani biri çok yüksek, diğeri çok düşükse F1 de düşük çıkar. Sıradan ortalama ise böyle bir dengesizliği gizleyebilir. Skor 1'e yaklaştıkça model hem yanlış alarmı hem kaçırılan vakayı az yapıyor demektir; 0'a yaklaşması, en az birinin çok zayıf olduğunu gösterir.",
  "why": "Veri dengesiz olduğunda doğruluk yanıltıcı olabilir; F1 bu durumda modelleri karşılaştırmak için pratik bir tek rakam sunar. Özellikle metin sınıflandırma, varlık tanıma ve bilgi çıkarma çalışmalarında yaygın kullanılır. Yine de iki ölçüyü eşit ağırlıkla birleştirdiği için, birinin diğerinden daha önemli olduğu durumlarda ayrı ayrı bakmak gerekir.",
  "example": "Kesinliği yüzde 90, duyarlılığı yüzde 50 olan bir modelin F1 skoru yaklaşık yüzde 64'tür; bu, sıradan ortalama olan yüzde 70'ten düşüktür.",
  "faq": [
   [
    "F1 skoru ile doğruluk oranı arasındaki fark nedir?",
    "Doğruluk tüm tahminlerin doğru oranını ölçer ve baskın sınıf yüzünden yanıltabilir. F1 ise nadir sınıfı yakalama (duyarlılık) ve yanlış alarm verme (kesinlik) dengesine odaklanır."
   ],
   [
    "İyi bir F1 skoru kaç olmalı?",
    "Mutlak bir eşik yoktur; göreve ve veriye bağlıdır. Skor, aynı veri üzerinde başka modellerle ya da insan başarısıyla kıyaslanarak yorumlanır."
   ]
  ]
 },
 {
  "slug": "karisiklik-matrisi",
  "term": "Karışıklık matrisi",
  "en": "confusion matrix",
  "match": [
   "karışıklık matrisi",
   "confusion matrix"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir sınıflandırma modelinin tahminlerini gerçek etiketlerle karşılaştıran ve modelin hangi sınıfı hangisiyle karıştırdığını satır ve sütunlarda gösteren tablo.",
  "how": "İkili sınıflandırmada tablo dört hücreden oluşur: doğru pozitif, yanlış pozitif, yanlış negatif ve doğru negatif. Satırlar çoğunlukla gerçek sınıfı, sütunlar modelin tahminini gösterir; bu yerleşim kaynağa göre değişebilir. Her test örneği, gerçek ve tahmin edilen etiketine göre bir hücreye sayılır. İkiden fazla sınıf olduğunda tablo büyür ve köşegen dışındaki hücreler hangi sınıfların birbirine karıştığını ortaya koyar. Doğruluk, kesinlik, duyarlılık ve F1 bu sayılardan türetilir.",
  "why": "Tek bir başarı yüzdesi, modelin nerede hata yaptığını söylemez. Karışıklık matrisi hataların türünü ve dağılımını görünür kılar; böylece bir hastalık tarama modelinin hastaları kaçırıp kaçırmadığı ya da sağlıkları yanlış işaretleyip işaretlemediği anlaşılır. Model geliştirirken iyileştirme önceliğini belirlemeye yarar.",
  "example": "Kedi, köpek ve tavşan sınıflandıran bir modelde matris, köpeklerin sık sık kedi olarak etiketlendiğini gösterirse ekip bu iki sınıf için daha fazla eğitim verisi toplamayı düşünebilir.",
  "faq": [
   [
    "Doğru pozitif ve yanlış pozitif ne demek?",
    "Doğru pozitif, modelin 'pozitif' dediği ve gerçekten pozitif olan örnektir. Yanlış pozitif ise modelin 'pozitif' dediği ama gerçekte negatif olan örnektir; yani yanlış alarmdır."
   ],
   [
    "Karışıklık matrisinde satırlar mı gerçek sınıfı gösterir, sütunlar mı?",
    "Bu bir gelenek meselesidir ve kaynaktan kaynağa değişir. Birçok kaynakta satırlar gerçek sınıfı, sütunlar tahmini gösterir; tabloyu okumadan önce eksen etiketlerine bakmak gerekir."
   ]
  ]
 },
 {
  "slug": "roc-egrisi-ve-auc",
  "term": "ROC eğrisi ve AUC",
  "en": "ROC curve and AUC",
  "match": [
   "roc eğri",
   "=auc"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "İkili sınıflandırma modelinin, karar eşiği değiştikçe doğru pozitif oranı ile yanlış pozitif oranı arasındaki dengesini gösteren grafik ve bu eğrinin altında kalan alanı özetleyen tek bir sayı.",
  "how": "Model her örnek için bir olasılık skoru üretir. Hangi skorun üzerinin \"pozitif\" sayılacağını bir eşik belirler. Eşik adım adım değiştirilir ve her adımda doğru pozitif oranı (gerçek pozitiflerin ne kadarının yakalandığı) ile yanlış pozitif oranı (negatiflerin ne kadarının yanlışlıkla pozitif sayıldığı) hesaplanır. Bu noktalar birleştirilince ROC eğrisi çıkar. Eğri sol üst köşeye ne kadar yakınsa model o kadar iyi ayrım yapıyordur. AUC eğrinin altındaki alandır; 0,5 rastgele tahmine, 1 kusursuz ayrıma karşılık gelir.",
  "why": "AUC, modelleri tek bir karar eşiğine bağlı kalmadan karşılaştırmayı sağladığı için tıbbi tanı, dolandırıcılık tespiti ve kredi skorlama gibi alanlarda sık raporlanır. \"AUC yüksek\" ifadesi, modelin pozitifleri negatiflerden ayırma gücünü anlatır. Sınıflar çok dengesizse tablo fazla iyimser görünebilir; bu durumda kesinlik-duyarlılık eğrisine de bakılır.",
  "example": "Röntgenden zatürre tahmin eden bir modelde eşik düşürüldükçe daha fazla hasta yakalanır ama sağlıklı kişilere de daha sık yanlış alarm verilir; ROC eğrisi bu takası tek grafikte gösterir.",
  "faq": [
   [
    "AUC kaç olursa iyi sayılır?",
    "Bunun tek bir sınırı yok. 0,5 rastgele tahmin düzeyidir, 1 kusursuz ayrımdır; yeterli düzey ise alanın riskine ve hatanın maliyetine göre değişir."
   ],
   [
    "AUC ile doğruluk (accuracy) arasındaki fark nedir?",
    "Doğruluk, seçilmiş tek bir eşikte doğru tahminlerin oranını verir. AUC ise tüm olası eşikleri birlikte değerlendirir ve modelin ayrım gücünü ölçer."
   ]
  ]
 },
 {
  "slug": "saskinlik-degeri",
  "term": "Şaşkınlık değeri (perplexity metriği)",
  "en": "perplexity (metric)",
  "match": [
   "şaşkınlık değer"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir dil modelinin metindeki bir sonraki kelimeyi (token) tahmin ederken ne kadar \"şaşırdığını\" ölçen metrik; değer ne kadar düşükse model metni o kadar iyi öngörüyor demektir.",
  "how": "Dil modeli her adımda bir sonraki token için olasılık dağılımı üretir. Test metni üzerinde modelin gerçekte gelen token'lara verdiği olasılıklar ortalanır ve sonuç, modelin her adımda kaç seçenek arasında kararsız kaldığını yansıtan bir sayıya dönüştürülür. Değerin on olması, modelin kabaca her adımda eşit olasılıklı on seçenek arasında tereddüt ettiği anlamına gelir. Değer düştükçe model metne daha az şaşırır. Karşılaştırmanın anlamlı olması için aynı metin ve aynı tokenlaştırma yönteminin kullanılması gerekir.",
  "why": "Şaşkınlık değeri, dil modeli eğitiminde ilerlemeyi hızlı ve ucuz biçimde izlemenin yaygın yoludur. Ancak modelin yanıtlarının doğru, yararlı veya güvenli olup olmadığını anlatmaz. Bu yüzden düşük değer, iyi bir sohbet asistanı olduğunun kanıtı sayılmaz; günümüzde modeller başka testlerle de değerlendirilir.",
  "example": "Bir araştırmacı aynı Türkçe haber metni üzerinde iki küçük dil modelini ölçer; şaşkınlık değeri daha düşük çıkan model, metindeki sonraki kelimeleri daha iyi tahmin ediyor demektir.",
  "faq": [
   [
    "Düşük şaşkınlık değeri her zaman daha iyi model demek mi?",
    "Hayır. Yalnızca modelin o metni ne kadar iyi tahmin ettiğini gösterir. Yanıt kalitesi, doğruluk ve güvenlik gibi yönler ayrıca ölçülmelidir."
   ],
   [
    "Farklı modellerin şaşkınlık değerleri doğrudan karşılaştırılabilir mi?",
    "Yalnızca aynı test metni ve aynı tokenlaştırma kullanılmışsa. Token'lara bölme biçimi farklıysa sayılar birbirine denk olmaz."
   ]
  ]
 },
 {
  "slug": "pass-k",
  "term": "Pass@k",
  "en": "pass@k",
  "match": [
   "pass@"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Kod üreten yapay zeka modellerinin başarısını, her problem için üretilen k çözümden en az birinin birim testlerini geçme olasılığıyla ölçen metrik.",
  "how": "Model bir programlama problemi için birden fazla çözüm üretir ve her çözüm otomatik birim testlerinden geçirilir. Pass@k, k deneme içinde en az birinin tüm testleri geçme olasılığıdır. Uygulamada her problem için k'dan fazla örnek üretilir ve olasılık istatistiksel bir tahminle hesaplanır; böylece şansa bağlı sapma azalır. Pass@1 modelin ilk denemedeki başarısını gösterir. k büyüdükçe deneme hakkı arttığı için değer de yükselir. Sonuç, tüm problemler üzerinden ortalanır.",
  "why": "Kodun doğruluğu testle kesin biçimde sınanabildiği için bu metrik kod üretimi değerlendirmelerinde yaygındır. Pass@1, tek denemede doğru kod bekleyen kullanıcıyı; yüksek k değerleri ise birçok aday üretip testle eleyen sistemleri yansıtır. Bu yüzden k belirtilmeden verilen bir puan yanıltıcı olabilir.",
  "example": "Bir kodlama asistanı bir fonksiyon için beş öneri üretiyor ve bunlardan ikisi birim testlerini geçiyor; bu problem pass@5 açısından başarılı sayılır.",
  "faq": [
   [
    "Pass@1 ile pass@10 arasındaki fark nedir?",
    "Pass@1 modelin tek denemede doğru çözümü bulma olasılığını, pass@10 ise on denemeden en az birinin doğru olma olasılığını ölçer. Pass@10 hemen her zaman daha yüksek çıkar."
   ],
   [
    "Pass@k neden daha çok kod görevlerinde kullanılır?",
    "Çünkü kodun doğruluğu birim testleriyle otomatik ve kesin olarak denetlenebilir. Serbest metinde \"doğru\" çözümü bu kadar net ölçmek zordur."
   ]
  ]
 },
 {
  "slug": "benchmark-doygunlugu",
  "term": "Benchmark doygunluğu",
  "en": "benchmark saturation",
  "match": [
   "doygunluğ",
   "benchmark saturation"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir yapay zeka test setinde en iyi modellerin tavan puana yaklaşması yüzünden testin modeller arasındaki farkı artık ayırt edememesi durumu.",
  "how": "Benchmark, belirli görevlerden oluşan sabit bir soru kümesidir. Modeller geliştikçe puanlar yükselir ve en iyi sonuçlar ulaşılabilecek en yüksek puana yaklaşır. Bu noktada modeller arasındaki fark küçülür; ölçüm gürültüsü ve test setindeki hatalı etiketler sonucu belirler hale gelir. Test soruları eğitim verisine karışmışsa (veri sızıntısı) puanlar ayrıca şişebilir. Doygunluğa ulaşan testin yerini genellikle daha zor ya da yeni bir test alır.",
  "why": "Haberlerde \"model bir testte rekor kırdı\" türünden ifadeler sık geçer; doygun bir testte bu puanlar gerçek bir yetenek farkını yansıtmayabilir. Okur için tek bir skora temkinli bakmak, araştırmacılar için ise değerlendirme setlerini sürekli yenilemek gerektiği anlamına gelir.",
  "example": "Bir okuma-anlama testinde birçok model insan ortalamasına yakın ya da üstünde puan almaya başlayınca test yeni modelleri ayırt edemez; bu yüzden daha zor bir sürümü hazırlanır.",
  "faq": [
   [
    "Benchmark doygunluğu modelin insan kadar zeki olduğu anlamına mı gelir?",
    "Hayır. Yalnızca o testin artık yeterince zorlayıcı olmadığını gösterir. Model aynı testte yüksek puan alırken başka görevlerde hâlâ zayıf kalabilir."
   ],
   [
    "Doygunluk sorununa ne yapılır?",
    "Daha zor ve yeni testler hazırlanır, test soruları gizli tutulur, insan değerlendirmesi ve gerçek görevlere dayalı ölçümler eklenir."
   ]
  ]
 },
 {
  "slug": "gercek-referans-verisi",
  "term": "Gerçek referans verisi (ground truth)",
  "en": "ground truth",
  "match": [
   "ground truth"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir modeli eğitmek ve çıktılarının doğruluğunu ölçmek için doğru kabul edilen veri; genellikle insanların etiketlediği ya da güvenilir bir kaynaktan alınan bilgilerden oluşur.",
  "how": "Veri kümesindeki her örnek için doğru cevap belirlenir: bir fotoğrafta kedi olup olmadığı, bir e-postanın istenmeyen posta olup olmadığı gibi. Bu etiketler uzmanlar, etiketleme çalışanları ya da güvenilir ölçümlerle oluşturulur. Eğitimde model tahminlerini bu etiketlerle karşılaştırır ve hatasına göre kendini ayarlar; test aşamasında da başarısı aynı etiketlerle ölçülür. Etiketleyiciler arasında anlaşmazlık çıkarsa çoğunluk oyu veya uzman denetimi kullanılabilir. \"Gerçek\" sözcüğü etiketin kusursuz olduğunu değil, ölçüt olarak kabul edildiğini anlatır.",
  "why": "Bir modelin kalitesi, büyük ölçüde öğrendiği ve sınandığı etiketlerin kalitesine bağlıdır. Hatalı ya da taraflı referans verisi hem eğitimi hem ölçümü çarpıtır. Tıp ve otonom araçlar gibi alanlarda doğru etiket üretmek hem pahalı hem kritik bir iştir.",
  "example": "Akciğer filmlerinden hastalık tespit eden bir modelde, radyologların işaretlediği tanılar gerçek referans verisidir; modelin tahminleri bu tanılarla karşılaştırılır.",
  "faq": [
   [
    "Gerçek referans verisi her zaman doğru mudur?",
    "Hayır. İnsanlar da hata yapabilir veya aynı örnek için farklı karara varabilir. Bu veri, doğru kabul edilen ölçüttür; bu yüzden etiket kalitesi ayrıca denetlenir."
   ],
   [
    "Referans etiketleri nasıl üretilir?",
    "Genellikle uzmanlar veya eğitilmiş etiketleyiciler örnekleri tek tek işaretler. Bazı durumlarda sensör ölçümleri ya da güvenilir kayıtlar da etiket olarak kullanılır."
   ]
  ]
 },
 {
  "slug": "sinif-dengesizligi",
  "term": "Sınıf dengesizliği",
  "en": "class imbalance",
  "match": [
   "sınıf dengesizli",
   "class imbalance"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir veri kümesinde sınıflardan birinin diğerlerine göre çok daha az örneğe sahip olması; model bu nadir sınıfı öğrenmekte zorlanır.",
  "how": "Dolandırıcılık tespitinde işlemlerin büyük çoğunluğu meşrudur, sahte olanlar ise çok azdır. Model eğitilirken hatanın büyük kısmı çoğunluk sınıfından geldiği için nadir sınıf kolayca göz ardı edilir; \"hep çoğunluk sınıfını tahmin et\" stratejisi bile yüksek doğruluk verebilir. Çözüm olarak azınlık sınıfı çoğaltılır (aşırı örnekleme), çoğunluk sınıfından örnek atılır, sınıflara farklı ağırlık verilir veya sentetik örnekler üretilir. Değerlendirmede de doğruluk yerine kesinlik, duyarlılık gibi ölçütlere bakılır.",
  "why": "Nadir hastalıklar, dolandırıcılık, makine arızaları gibi önemli problemlerin çoğu doğası gereği dengesizdir. Fark edilmezse model kâğıt üstünde yüksek doğrulukla başarılı görünür ama asıl yakalanması gereken durumları kaçırır.",
  "example": "Üretim bandındaki ürünlerin yüzde 99,5'i sağlamsa, hepsine \"sağlam\" diyen bir model yüzde 99,5 doğruluk alır ama kusurlu ürünlerin hiçbirini yakalayamaz.",
  "faq": [
   [
    "Dengesiz veride doğruluk neden yanıltıcıdır?",
    "Çoğunluk sınıfını hep tahmin etmek bile yüksek doğruluk sağlar. Oysa nadir sınıf hiç yakalanmıyor olabilir. Bu yüzden kesinlik, duyarlılık veya AUC gibi ölçütlere de bakılır."
   ],
   [
    "Aşırı örnekleme nedir?",
    "Azınlık sınıfındaki örneklerin kopyalanarak ya da yeni örnekler üretilerek çoğaltılması işlemidir. Böylece model nadir sınıfı daha çok görür."
   ]
  ]
 },
 {
  "slug": "veri-yonetisimi",
  "term": "Veri yönetişimi",
  "en": "data governance",
  "match": [
   "veri yönetişim",
   "data governance"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir kurumun verilerinin kim tarafından, hangi kurallarla ve hangi amaçla toplanıp saklanacağını, kullanılacağını ve paylaşılacağını belirleyen politika, rol ve süreçler bütünü.",
  "how": "Veri yönetişimi, sahiplik ve sorumlulukların tanımlanmasıyla başlar: hangi veriden kim sorumlu, kimler erişebilir. Ardından veri kalitesi standartları, saklama süreleri, erişim yetkileri ile güvenlik ve gizlilik kuralları yazılı hale getirilir. Verinin nereden geldiği ve hangi dönüşümlerden geçtiği kayıt altına alınır. Düzenli denetimler ve kayıtlar kurallara uyumu izlemeyi sağlar. Yapay zeka projelerinde bu çerçeve, eğitim verisinin izinli, doğru ve belgelenmiş olmasına yardımcı olur.",
  "why": "Yapay zeka modelleri, eğitildikleri veri kadar güvenilirdir; telif, kişisel veri ve ayrımcılık riskleri çoğu zaman veri aşamasında başlar. KVKK ve AB düzenlemeleri gibi mevzuata uyum çabası da kurumları net bir veri yönetişimi kurmaya iter. Yönetişim eksikse hem hukuki hem itibar riski artar.",
  "example": "Bir banka, müşteri verilerini kredi modelinde kullanmadan önce hangi alanların kullanılabileceğini, kimlerin erişeceğini ve verinin ne kadar saklanacağını belirleyen bir kurul oluşturur.",
  "faq": [
   [
    "Veri yönetişimi ile veri yönetimi aynı şey mi?",
    "Değil. Veri yönetimi, verinin depolanması ve işlenmesi gibi günlük teknik işleri kapsar. Yönetişim ise bu işlerin hangi kurallar ve sorumluluklarla yapılacağını belirleyen üst çerçevedir."
   ],
   [
    "Küçük kuruluşların da veri yönetişimine ihtiyacı var mı?",
    "Evet, ama ölçeğine uygun biçimde. Basit bir veri envanteri, erişim kuralları ve saklama süreleri belirlemek bile riskleri azaltır."
   ]
  ]
 },
 {
  "slug": "anonimlestirme",
  "term": "Anonimleştirme",
  "en": "anonymization",
  "match": [
   "anonimleştir",
   "anonymization"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Verideki kişilerin doğrudan ya da dolaylı yollarla kimliğinin belirlenemez hale gelmesi için verinin değiştirilmesi.",
  "how": "Önce ad, kimlik numarası, telefon gibi doğrudan tanımlayıcılar silinir. Doğum tarihi ya da posta kodu gibi dolaylı bilgiler ise genelleştirilir; örneğin tam yaş yerine yaş aralığı yazılır ya da değerlere gürültü eklenir. Amaç, tek tek kayıtların bir kişiye bağlanamamasıdır. Ancak farklı veri kümeleri birleştirildiğinde kişiler yeniden belirlenebilir; bu yüzden yalnızca isimleri silmek çoğu zaman yetmez. k-anonimlik ve diferansiyel gizlilik gibi yöntemler bu riski azaltmak için kullanılır.",
  "why": "Anonimleştirme, kişisel verilerden yararlanan yapay zeka çalışmalarının araştırma ve paylaşım için daha güvenli yapılmasına yardım eder. Mevzuatlarda gerçekten anonim veri genellikle kişisel veri kurallarının dışında tutulur; ancak bu ölçüt sıkıdır ve yeniden kimliklendirme riski varsa veri anonim sayılmayabilir.",
  "example": "Bir hastane, hasta kayıtlarını araştırma ekibiyle paylaşmadan önce ad ve kimlik numaralarını kaldırır, doğum tarihlerini yaş aralığına çevirir.",
  "faq": [
   [
    "Anonimleştirme ile takma adlandırma arasındaki fark nedir?",
    "Takma adlandırmada kimlik bilgisi bir kodla değiştirilir ve anahtar saklandığı sürece geri dönülebilir. Anonimleştirmede kişiye geri ulaşmak makul yollarla mümkün olmamalıdır."
   ],
   [
    "Anonimleştirilmiş veri tamamen güvenli midir?",
    "Her zaman değil. Başka veri kümeleriyle eşleştirilerek kişilerin yeniden belirlendiği örnekler vardır. Bu yüzden yöntemin gücü ve riskler düzenli olarak yeniden değerlendirilir."
   ]
  ]
 },
 {
  "slug": "acik-veri",
  "term": "Açık veri",
  "en": "open data",
  "match": [
   "açık veri",
   "open data"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Herkesin serbestçe erişebildiği, kullanabildiği ve lisansta belirtilen koşullar çerçevesinde paylaşabildiği veri. Kamu kurumları, araştırma toplulukları ve şirketler bu tür veri setlerini yayımlar.",
  "how": "Veriyi yayımlayan kurum ya da topluluk, veri setini indirilebilir biçimde ve bir lisansla internete koyar. Lisans, verinin ticari amaçla kullanılıp kullanılamayacağını ve kaynağın nasıl belirtileceğini söyler. Yapay zeka alanında araştırmacılar bu veri setleriyle model eğitir, farklı modelleri aynı veri üzerinde karşılaştırır ve başkalarının sonuçlarını yeniden üretir. Verinin açık olması, her zaman içindeki kişisel bilgilerden arınmış veya hatasız olduğu anlamına gelmez.",
  "why": "Açık veri, araştırmaların şeffaf ve tekrarlanabilir olmasını sağlar; küçük ekipler ve üniversiteler de büyük şirketlerle aynı malzemeyle çalışabilir. Öte yandan telif ve gizlilik tartışmaları, hangi verinin gerçekten serbestçe kullanılabileceği sorusunu yapay zeka haberlerinde sık sık gündeme getirir.",
  "example": "Wikipedia metinleri ve Common Crawl gibi herkesin erişebildiği web arşivleri, dil modellerinin eğitiminde sıkça başvurulan açık veri kaynaklarıdır.",
  "faq": [
   [
    "Açık veri ile açık kaynak aynı şey mi?",
    "Hayır. Açık kaynak genellikle yazılımın kodunun paylaşılmasını, açık veri ise veri setlerinin paylaşılmasını anlatır. İkisi birlikte de görülebilir, ama biri diğerini otomatik olarak getirmez."
   ],
   [
    "Açık veri her zaman kısıtlamasız kullanılabilir mi?",
    "Hayır. Erişim çoğunlukla ücretsizdir, ama lisans kaynak gösterme, ticari kullanımı sınırlama gibi koşullar içerebilir. Kullanmadan önce lisansı okumak gerekir."
   ]
  ]
 },
 {
  "slug": "veri-duvari",
  "term": "Veri duvarı",
  "en": "data wall",
  "match": [
   "veri duvar",
   "data wall"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Yapay zeka modellerini eğitmek için kullanılabilecek kaliteli verinin, özellikle insan yazımı metnin, sınırlı olması nedeniyle modellerin büyümesinin bir noktada tıkanabileceği fikri.",
  "how": "Büyük dil modelleri genel olarak daha fazla veriyle eğitildikçe daha iyi sonuç verme eğilimindedir. İnternetteki özgün ve kaliteli metin miktarı ise sonsuz değildir; tekrarlar, spam ve düşük kaliteli içerik ayıklandığında geriye kalan pay daha da küçülür. Modellerin ihtiyaç duyduğu veri hacmi büyüdükçe bu stoka yaklaşıldığı söylenir. Önerilen çıkış yolları arasında yapay olarak üretilen sentetik veri, görüntü ve ses gibi başka veri türleri, özel veri anlaşmaları ve veriyi daha verimli kullanan eğitim yöntemleri bulunur.",
  "why": "Veri duvarı, yapay zekadaki ilerlemenin yalnızca daha büyük model ve daha çok işlem gücüyle sürüp sürmeyeceği tartışmasının merkezindedir. Konu, şirketlerin yayıncılarla ve veri sahipleriyle neden içerik anlaşmaları aradığını da açıklamaya yardımcı olur. Bazı araştırmacılar sorunu ciddi bulur, bazıları ise aşılabileceğini düşünür.",
  "example": "Bir şirket kitap, haber arşivi ve bilimsel makale gibi kaliteli metinleri çoktan eğitime kattıysa, modelini büyütmek için bu kadar kaliteli yeni metni bulmakta zorlanabilir.",
  "faq": [
   [
    "Veri duvarı gerçekten var mı?",
    "Bu konuda görüşler ayrışıyor. Bir kesim kaliteli insan yazımı verinin tükenmeye yaklaştığını savunuyor; başka bir kesim ise sentetik veri ve yeni veri türleriyle sorunun aşılabileceğini düşünüyor."
   ],
   [
    "Sentetik veri veri duvarını çözer mi?",
    "Kısmen çözebilir, ama garanti değil. Modellerin ürettiği verinin kalitesi ve çeşitliliği düşükse, model kendi hatalarını pekiştirebilir ve gerçek dünyadan kopabilir."
   ]
  ]
 },
 {
  "slug": "talimat-veri-seti",
  "term": "Talimat veri seti",
  "en": "instruction dataset",
  "match": [
   "talimat veri set"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir komut ya da sorunun, istenen yanıtla eşleştirildiği örneklerden oluşan veri seti. Dil modeline kullanıcının isteklerini izlemeyi öğretmek için kullanılır.",
  "how": "Her örnek genellikle bir talimat, gerekiyorsa bir girdi metni ve ideal bir yanıttan oluşur; örneğin \"Bu metni üç cümlede özetle\" talimatı ve iyi bir özet. Örnekleri insanlar yazabilir ya da başka bir model üretip insanlar denetleyebilir. Ön eğitimini tamamlamış model, bu örnekler üzerinde ek bir eğitimden geçer; buna denetimli ince ayar denir. Sonuçta model metni sadece devam ettirmek yerine, verilen isteği anlayıp ona uygun yanıt vermeyi öğrenir.",
  "why": "Sohbet asistanlarının kullanışlı hale gelmesindeki temel adımlardan biri budur. Veri setinin kalitesi ve çeşitliliği modelin davranışını doğrudan etkiler; hatalı, yanlı ya da dar kapsamlı örnekler modele de geçer. Bu yüzden talimat verisi hazırlamak başlı başına bir emek ve maliyet kalemidir.",
  "example": "Bir şirket, müşteri hizmetlerindeki gerçek soruları ve onaylı yanıtları derleyerek bir talimat veri seti hazırlayıp bir modeli kendi alanına uyarlayabilir.",
  "faq": [
   [
    "Talimat veri seti ile tercih verisi arasındaki fark nedir?",
    "Talimat veri setinde her istem için tek bir örnek yanıt bulunur ve model bunu taklit etmeyi öğrenir. Tercih verisinde ise aynı istemin yanıtları arasında hangisinin daha iyi olduğu işaretlenir."
   ],
   [
    "Talimat veri setini bir model de üretebilir mi?",
    "Evet, güçlü bir model başka bir modelin eğitimi için örnek talimat ve yanıt üretebilir. Ancak üretilen verinin doğruluğunu ve çeşitliliğini kontrol etmek gerekir."
   ]
  ]
 },
 {
  "slug": "tercih-verisi",
  "term": "Tercih verisi",
  "en": "preference data",
  "match": [
   "tercih veri"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Aynı isteme verilen birden fazla yanıttan hangisinin daha iyi olduğunu gösteren karşılaştırma kayıtları. Genellikle insanlar, bazen de başka bir model tarafından işaretlenir.",
  "how": "Modele bir istem verilir ve birkaç farklı yanıt üretilir. Bir değerlendirici bu yanıtları yardımseverlik, doğruluk veya güvenlik gibi ölçütlere göre sıralar ya da ikisinden birini seçer. Biriken karşılaştırmalar, yanıtlara puan veren bir ödül modelini eğitmek için kullanılabilir; bazı yöntemlerde ise model doğrudan bu çiftlerle ayarlanır. İnsan geri bildiriminden pekiştirmeli öğrenme (RLHF) olarak bilinen yaklaşım bu tür veriye dayanır.",
  "why": "İyi bir yanıtı tek tek yazıp tarif etmek zordur, ama iki yanıttan hangisinin daha iyi olduğunu söylemek genellikle daha kolaydır. Bu yüzden tercih verisi, modellerin üslubunu ve güvenlik davranışını biçimlendirmede önemli bir araçtır. Değerlendiricilerin kişisel ve kültürel eğilimleri de modele yansıyabilir.",
  "example": "Bir sohbet asistanı iki yanıtı yan yana gösterip kullanıcıdan daha iyi olanı seçmesini isterse, bu seçim tercih verisi olarak kaydedilebilir.",
  "faq": [
   [
    "Tercih verisi RLHF ile aynı şey mi?",
    "Hayır. Tercih verisi, RLHF gibi yöntemlerin kullandığı ham maddedir. RLHF ise bu veriyle bir ödül modeli eğitip ana modeli bu ödüle göre geliştirme sürecinin adıdır."
   ],
   [
    "Tercih verisini yalnızca insanlar mı üretir?",
    "Hayır. Başka bir yapay zeka modeli de yanıtları değerlendirip tercih üretebilir. Ancak bu durumda değerlendirici modelin kendi hataları ve eğilimleri veriye karışabilir."
   ]
  ]
 },
 {
  "slug": "model-suruklenmesi",
  "term": "Model sürüklenmesi",
  "en": "model drift",
  "match": [
   "model sürüklen",
   "model drift"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Kullanımdaki bir yapay zeka modelinin başarısının, dünya değiştikçe zamanla düşmesi. Model aynı kalır, ama karşılaştığı koşullar eğitildiği dönemden uzaklaşır.",
  "how": "Model, eğitim verisindeki örüntüleri öğrenir. Yayına alındıktan sonra kullanıcı davranışları, mevsimler, dil alışkanlıkları ya da piyasa koşulları değişir; girdilerle doğru yanıt arasındaki ilişki yavaş yavaş kayar. Model bunu fark etmeden eski örüntülere göre tahmin yapmayı sürdürür ve hata oranı sessizce artar. Ekipler bunu canlı performansı izleyerek yakalar; ölçümler belirli bir eşiğin altına inerse model yeni verilerle yeniden eğitilir. Dil modelleri söz konusu olduğunda bu terim, bazen bir hizmetin zaman içinde farklı davranmaya başlamasını anlatmak için de kullanılır.",
  "why": "Sürüklenme, modelin test sırasında iyi çalışmasının yayında da iyi çalışacağı anlamına gelmediğini hatırlatır. Dolandırıcılık tespiti, kredi değerlendirme veya talep tahmini gibi alanlarda fark edilmeyen bir düşüş maddi kayıp doğurabilir. Bu yüzden modeller yayına alındıktan sonra da sürekli izlenir.",
  "example": "Bir bankanın dolandırıcılık tespit modeli, dolandırıcılar yeni yöntemlere geçtikçe eski örüntülere göre çalışmaya devam eder ve yakalama oranı yavaş yavaş düşer.",
  "faq": [
   [
    "Model sürüklenmesi ile veri kayması arasındaki fark nedir?",
    "Veri kayması, modele gelen girdilerin dağılımının değişmesidir. Model sürüklenmesi ise sonuçta modelin başarısının bozulmasını anlatır; veri kayması bunun nedenlerinden biri olabilir."
   ],
   [
    "Model sürüklenmesi nasıl önlenir?",
    "Tamamen önlemek mümkün değildir, ama canlı performansı izleyerek erken fark edilebilir. Sonrasında modeli güncel verilerle yeniden eğitmek en yaygın çözümdür."
   ]
  ]
 },
 {
  "slug": "veri-kaymasi",
  "term": "Veri kayması",
  "en": "data drift",
  "match": [
   "veri kayma",
   "data drift"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir modelin kullanımda karşılaştığı verinin istatistiksel özelliklerinin, eğitimde kullanılan verinin özelliklerinden zamanla farklılaşması.",
  "how": "Eğitim verisi, modelin dünyaya baktığı bir fotoğraf gibidir. Yayına geçildikten sonra gelen girdiler bu fotoğrafa benzemeyi bırakabilir: yeni bir kamera modeli, farklı bir müşteri kitlesi ya da yeni ortaya çıkan kelimeler buna örnektir. Ekipler, canlı girdilerin dağılımını eğitim verisininkiyle karşılaştıran istatistiksel testlerle ve izleme panolarıyla bu farkı ölçer. Fark büyürse veri güncellenir ve model yeniden eğitilir. Kayma olması doğruluğun mutlaka düştüğü anlamına gelmez, ama bir risk işaretidir.",
  "why": "Gerçek etiketler çoğu zaman gecikmeyle geldiği için, modelin başarısının düştüğünü ölçmeden önce girdilerdeki değişimi görmek erken uyarı sağlar. Bu nedenle veri kayması, yapay zeka sistemlerinin yayına alındıktan sonra güvenilir kalmasında temel izleme konularından biridir.",
  "example": "Bir hastanede akciğer görüntülerini inceleyen model, kurum yeni marka bir cihaza geçtiğinde farklı görüntü özellikleriyle karşılaşabilir ve daha önce görmediği bir dağılımla çalışmak zorunda kalır.",
  "faq": [
   [
    "Veri kayması ile kavram kayması aynı şey mi?",
    "Hayır. Veri kaymasında girdilerin dağılımı değişir. Kavram kaymasında ise girdilerle doğru yanıt arasındaki ilişki değişir; örneğin \"spam\" sayılan e-postaların tanımı zamanla farklılaşabilir."
   ],
   [
    "Veri kayması nasıl tespit edilir?",
    "Canlı girdilerin dağılımı eğitim verisiyle belirli aralıklarla karşılaştırılır. Fark önceden belirlenen bir eşiği aşarsa ekibe uyarı gönderilir."
   ]
  ]
 },
 {
  "slug": "guven-skoru",
  "term": "Güven skoru",
  "en": "confidence score",
  "match": [
   "güven skor",
   "güven puan",
   "confidence score"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir yapay zeka modelinin ürettiği tahminin ne kadar kesin olduğunu gösteren sayı. Genellikle sıfır ile bir arasında ya da yüzde olarak verilir.",
  "how": "Sınıflandırma yapan bir model, her olası sınıf için olasılığa benzeyen bir değer hesaplar; en yüksek değer çoğunlukla güven skoru olarak raporlanır. Uygulamalarda bir eşik belirlenir: skor eşiğin üzerindeyse sonuç otomatik kabul edilir, altındaysa bir insana yönlendirilir. Ancak skor her zaman gerçek doğruluk olasılığını yansıtmaz; modeller bazen aşırı özgüvenli olabilir. Skorun gerçek başarıyla uyumlu olması için kalibrasyon adı verilen ayarlamalar yapılır. Dil modellerinde de akıcı bir yanıt, yüksek bir kesinlik hissi verip yanlış olabilir.",
  "why": "Güven skoru, insanla makine arasındaki iş bölümünü kurmayı sağlar: kolay vakalar otomatik çözülür, belirsiz olanlar uzmana gider. Yanlış kalibre edilmiş bir skor ise sahte bir güven duygusu yaratabilir. Bu yüzden skora bakarken modelin ne kadar iyi kalibre edildiğini de bilmek gerekir.",
  "example": "Fatura okuyan bir sistem tutarı \"0,62\" güvenle okuduysa, bu belge otomatik işlenmek yerine bir çalışanın kontrolüne gönderilebilir.",
  "faq": [
   [
    "Yüzde doksan güven skoru, tahminin yüzde doksan doğru olduğu anlamına mı gelir?",
    "Her zaman değil. Model iyi kalibre edilmişse yaklaşık olarak öyledir, ama birçok model gerçekte olduğundan daha kendinden emin görünür."
   ],
   [
    "Dil modellerinin güven skoru var mı?",
    "Modeller her kelime için bir olasılık hesaplar ve bu değerler bazı uygulamalarda kullanılır. Ancak bunlar bir yanıtın doğru olduğunun garantisi değildir; model yanlış bir şeyi de yüksek olasılıkla üretebilir."
   ]
  ]
 },
 {
  "slug": "ablasyon-calismasi",
  "term": "Ablasyon çalışması",
  "en": "ablation study",
  "match": [
   "ablasyon",
   "ablation"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir sistemin belirli bir parçasını çıkarıp ya da devre dışı bırakarak başarının nasıl değiştiğini ölçen deney. Her bileşenin sonuca gerçekte ne kadar katkı yaptığını anlamayı amaçlar.",
  "how": "Araştırmacılar önce eksiksiz sistemin sonuçlarını referans olarak alır. Ardından her seferinde tek bir bileşeni çıkarır ya da basitleştirir; bu bir katman, bir veri kaynağı, bir eğitim hilesi ya da ek bir özellik olabilir. Sistem aynı koşullarda yeniden eğitilir veya ölçülür ve sonuç referansla karşılaştırılır. Başarı belirgin biçimde düşüyorsa o bileşen önemlidir; fark yoksa bileşen gereksiz olabilir. Şansın etkisini azaltmak için deneyler genellikle birkaç kez tekrarlanır. Terim, tıptaki doku alma anlamından gelir.",
  "why": "Yeni bir yöntemin başarısı genellikle birçok değişikliğin birleşiminden gelir ve hangisinin işe yaradığı belli olmayabilir. Ablasyon, bir araştırmadaki iddianın ne kadar sağlam olduğunu gösterir. Haberlerde bir \"yeni yöntem\" duyurulduğunda, bu tür deneylerin yapılıp yapılmadığına bakmak iddiayı değerlendirmek için iyi bir ipucudur.",
  "example": "Bir görüntü tanıma makalesinde, önerilen dikkat mekanizması kapatılıp aynı model yeniden denenir ve doğruluğun ne kadar düştüğüne bakılarak bu mekanizmanın katkısı ölçülür.",
  "faq": [
   [
    "Ablasyon çalışması ile hiperparametre araması arasındaki fark nedir?",
    "Ablasyon çalışması, bir bileşeni çıkararak onun katkısını anlamaya çalışır. Hiperparametre araması ise bir model için en iyi ayar değerlerini bulmaya odaklanır."
   ],
   [
    "Her yapay zeka makalesinde ablasyon çalışması olur mu?",
    "Hayır, ama özellikle yeni bir yöntem öneren araştırma makalelerinde yaygındır. Böyle bir çalışmanın bulunmaması, iddianın tek tek bileşenler düzeyinde sınanmadığını gösterebilir."
   ]
  ]
 },
 {
  "slug": "veri-kurasyonu",
  "term": "Veri kürasyonu",
  "en": "data curation",
  "match": [
   "veri kürasyon",
   "data curation"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Model eğitiminde kullanılacak verinin toplanması, temizlenmesi, süzülmesi, etiketlenmesi ve dengelenmesi süreci. Amaç, ham veri yığınını kaliteli, tutarlı ve amaca uygun bir eğitim kümesine dönüştürmektir.",
  "how": "Süreç genellikle kaynakların seçilmesiyle başlar. Ardından aynı içeriğin tekrarları ayıklanır, bozuk, düşük kaliteli veya zararlı metinler filtrelenir, kişisel bilgiler temizlenir. Gerekirse insanlar ya da otomatik sistemler örnekleri etiketler ve değerlendirir. Son aşamada farklı konu, dil ve türlerin karışım oranı ayarlanır. Bir kütüphaneci gibi, kitapların çokluğundan çok doğru kitapların raflarda olmasına dikkat edilir. Ortaya çıkan küme, modelin neyi öğreneceğini büyük ölçüde belirler.",
  "why": "Aynı mimariye sahip modellerin başarısı çoğu zaman veri kalitesine göre değişir; bu yüzden şirketler kürasyona ciddi emek harcıyor. Veri yanlılığı, telif ve gizlilik gibi tartışmalar da büyük ölçüde bu aşamada alınan kararlarla ilgilidir. 'Çöp girerse çöp çıkar' ilkesi burada tam anlamıyla geçerlidir.",
  "example": "Bir şirket, web'den topladığı milyarlarca sayfadan tekrar edenleri, spam sayfaları ve kişisel bilgi içerenleri eleyip kalan metinleri konu dengesine göre karıştırarak dil modelini eğitir.",
  "faq": [
   [
    "Veri temizleme ile veri kürasyonu aynı şey mi?",
    "Hayır. Temizleme hataları ve tekrarları gidermeyi kapsar; kürasyon ise kaynak seçimi, filtreleme, etiketleme ve karışım oranı gibi daha geniş kararları da içerir."
   ],
   [
    "Daha çok veri her zaman daha iyi model demek midir?",
    "Hayır. Düşük kaliteli verinin miktarını artırmak başarıyı yükseltmeyebilir, hatta zarar verebilir. Özenle seçilmiş daha küçük kümeler çoğu durumda daha iyi sonuç verebilir."
   ]
  ]
 },
 {
  "slug": "turkce-benchmark-ve-veri-setleri",
  "term": "Türkçe benchmark ve veri setleri",
  "en": "Turkish benchmarks and datasets",
  "match": [
   "türkçe benchmark",
   "türkçe veri set"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Dil modellerinin Türkçedeki başarısını ölçmek ve modelleri eğitmek için hazırlanan test kümeleri ile metin derlemeleri. Türkçenin eklemeli yapısı ve çevrimiçi kaynakların görece azlığı nedeniyle ayrı bir ilgi alanıdır.",
  "how": "Benchmark, modele soru ya da görev verip yanıtları doğru cevaplarla karşılaştıran sabit bir testtir. Türkçe için bazı testler baştan Türkçe hazırlanır; bazıları İngilizce testlerin çevrilmesiyle ya da XNLI gibi çok dilli testlerin Türkçe bölümleriyle oluşur. Eğitim tarafında ise web taramaları, Vikipedi ve haber metinleri gibi kaynaklardan Türkçe derlemler kullanılır. Çeviri testlerde dil ve kültür kaymaları olabileceğinden kalite denetimi önem taşır.",
  "why": "İngilizcedeki başarı Türkçeye kendiliğinden yansımaz; Türkçe eklemeli bir dildir ve çevrimiçi Türkçe içerik İngilizceye göre çok daha azdır. Yerel testler olmadan bir modelin Türkçede gerçekte ne kadar işe yaradığı anlaşılamaz. Kamu kurumları, şirketler ve girişimler model seçerken bu ölçümlere ihtiyaç duyar.",
  "example": "Bir banka müşteri hizmetleri için sohbet botu seçerken adayları İngilizce puanlarına göre değil, Türkçe soru-cevap ve çıkarım testlerindeki sonuçlarına göre karşılaştırabilir.",
  "faq": [
   [
    "Çevrilmiş test ile baştan Türkçe hazırlanan test arasındaki fark nedir?",
    "Çevrilmiş testte ifadeler yapay durabilir ve konular Türkiye bağlamına uymayabilir. Baştan Türkçe hazırlanan testler günlük dili ve yerel bilgiyi daha iyi yansıtır."
   ],
   [
    "Benchmark puanı yüksek bir model her işte iyi midir?",
    "Hayır. Puan yalnızca testin ölçtüğü becerileri gösterir; ayrıca model test verisini eğitim sırasında görmüş olabilir. Gerçek kullanım senaryosunda ayrıca denemek gerekir."
   ]
  ]
 },
 {
  "slug": "uzun-baglam-testi",
  "term": "Uzun bağlam testi (samanlıkta iğne)",
  "en": "needle in a haystack",
  "match": [
   "samanlıkta iğne",
   "needle in a haystack"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Uzun bir metnin içine yerleştirilen tek bir bilgiyi modelin bulup bulamadığını ölçen test. Modelin geniş bağlam penceresindeki bilgiyi ne kadar güvenilir biçimde hatırladığını görmeyi amaçlar.",
  "how": "Test düzeneğinde çok uzun, genellikle konuyla ilgisiz bir metin hazırlanır; bu 'samanlık'tır. Metnin belirli bir yerine 'iğne' denen küçük bir bilgi, örneğin tek bir cümle eklenir. Ardından modele bu bilgiyi soran bir soru yöneltilir. İğnenin konumu ve metnin uzunluğu değiştirilerek test tekrarlanır; sonuçlar çoğunlukla bir ısı haritasıyla gösterilir. Böylece modelin hangi uzunluk ve konumlarda bilgiyi kaçırdığı görülür.",
  "why": "Bağlam penceresinin büyük olması, modelin içindeki her şeyi iyi kullandığı anlamına gelmez. Bu test, sözleşme ya da kod deposu gibi uzun belgelerle çalışan uygulamalar için temel bir güvenilirlik göstergesi sunar. Yine de tek bir bilgiyi bulmak görece kolay bir görevdir ve karmaşık akıl yürütmeyi ölçmez.",
  "example": "Yüzlerce sayfalık bir rapora 'Toplantı salı günü yapılacak' gibi ilgisiz bir cümle gizlenir ve modele toplantının ne zaman yapılacağı sorulur.",
  "faq": [
   [
    "Bu test modelin uzun belgeyi anladığını kanıtlar mı?",
    "Hayır, yalnızca bilgiyi bulabildiğini gösterir. Birden çok bilgiyi birleştirmek ya da özetlemek gibi görevler daha zordur ve ayrı testlerle ölçülür."
   ],
   [
    "Neden 'samanlıkta iğne' deniyor?",
    "Deyimdeki gibi, büyük bir yığının içinde küçük bir şeyi bulmanın zorluğuna gönderme yapar. Samanlık uzun metni, iğne ise gizlenen bilgiyi temsil eder."
   ]
  ]
 },
 {
  "slug": "dogrusal-cebir",
  "term": "Doğrusal cebir",
  "en": "linear algebra",
  "match": [
   "doğrusal cebir",
   "linear algebra"
  ],
  "cat": "Matematiksel temeller",
  "def": "Vektörleri, matrisleri ve bunlar üzerindeki işlemleri inceleyen matematik dalı. Yapay zekada verilerin sayı dizileri olarak ifade edilmesinin ve sinir ağı hesaplarının dayandığı temel dildir.",
  "how": "Vektör, sıralı bir sayı listesidir; bir kelime, görsel ya da kullanıcı bu tür listelerle temsil edilebilir. Matris ise sayılardan oluşan bir tablodur ve bir vektörü başka bir vektöre dönüştüren kural gibi düşünülebilir. Sinir ağındaki bir katman, girdi vektörünü ağırlık matrisiyle çarparak yeni bir vektör üretir. Eğitim sırasında model bu matrislerdeki sayıları ayarlar. Bu işlemler aynı anda çok sayıda yapılabildiği için ekran kartlarında hızla çalışır.",
  "why": "Dil modellerinden görüntü üreticilere kadar modern yapay zekanın hesap yükünün büyük bölümü matris çarpımlarından oluşur. Bu nedenle ekran kartı ve özel yapay zeka çipi haberlerinin arkasında da doğrusal cebir vardır. Gömme ve boyut indirgeme gibi kavramları anlamak için de ilk adımdır.",
  "example": "Bir film öneri sistemi, her kullanıcıyı ve her filmi birer sayı listesi olarak temsil eder; iki listenin matematiksel benzerliği öneri puanına dönüşür.",
  "faq": [
   [
    "Yapay zekayı anlamak için doğrusal cebir şart mı?",
    "Kavramsal düzeyde haberleri ve ürünleri izlemek için şart değildir. Ancak modelleri geliştirmek ya da iç işleyişini derinlemesine kavramak için temel bir gerekliliktir."
   ],
   [
    "Vektör ile matris arasındaki fark nedir?",
    "Vektör tek sıradan oluşan bir sayı listesidir. Matris ise satır ve sütunlardan oluşan bir sayı tablosudur."
   ]
  ]
 },
 {
  "slug": "tensor",
  "term": "Tensör",
  "en": "tensor",
  "match": [
   "=tensör",
   "=tensörler",
   "=tensor"
  ],
  "cat": "Matematiksel temeller",
  "def": "Sayıların tek bir değer, vektör, matris ya da daha çok eksenli bir dizi halinde düzenlendiği veri yapısı. Yapay zekada metin, görüntü ve model ağırlıkları gibi hemen her şey tensör olarak tutulur.",
  "how": "Tensörün kaç eksene sahip olduğu 'boyut' ya da 'mertebe' ile ifade edilir. Tek bir sayı sıfır eksenli, bir sıra sayı tek eksenli (vektör), satır ve sütunlardan oluşan tablo iki eksenli (matris) tensördür. Renkli bir fotoğraf yükseklik, genişlik ve renk kanalı olmak üzere üç eksenli bir tensördür; birçok fotoğraftan oluşan bir küme dördüncü bir eksen ekler. PyTorch ve TensorFlow gibi kütüphaneler tensörleri GPU üzerinde toplu biçimde işleyecek şekilde tasarlanmıştır.",
  "why": "Sinir ağlarının hesabı tensörler üzerinde yapıldığı için eğitim ve çıkarım hızı, tensörlerin donanımda ne kadar verimli işlendiğine bağlıdır. Nvidia'nın GPU'ları ve Google'ın TPU çipleri bu tür hesaplara göre tasarlanır. Haberlerde geçen 'tensör çekirdeği' gibi ifadeler de buradan gelir.",
  "example": "256 × 256 piksellik renkli bir fotoğraf, 256 × 256 × 3 boyutlarında üç eksenli bir tensör olarak modele verilir.",
  "faq": [
   [
    "Tensör ile matris aynı şey mi?",
    "Matris, tensörün iki eksenli özel halidir. Tensör kavramı eksen sayısını sınırlamaz; üç, dört ya da daha fazla eksenli olabilir."
   ],
   [
    "Yapay zekadaki tensör ile fizikteki tensör aynı mıdır?",
    "Matematik ve fizikte tensörler dönüşüm kurallarıyla tanımlanır. Yapay zeka yazılımlarında ise çoğunlukla 'çok boyutlu sayı dizisi' anlamında kullanılır; pratikte bu ikinci anlam yeterlidir."
   ]
  ]
 },
 {
  "slug": "matris-carpimi",
  "term": "Matris çarpımı",
  "en": "matrix multiplication",
  "match": [
   "matris çarpım",
   "matrix multiplication"
  ],
  "cat": "Matematiksel temeller",
  "def": "İki sayı tablosunun, birinin satırlarını diğerinin sütunlarıyla eşleştirip çarparak ve toplayarak yeni bir tablo üretme işlemi. Sinir ağlarındaki hesabın büyük kısmını oluşturur.",
  "how": "Birinci matrisin her satırı, ikinci matrisin her sütunuyla karşılıklı çarpılır ve çıkan sonuçlar toplanır; bu toplam yeni matrisin tek bir hücresini verir. İşlemin yapılabilmesi için birinci matrisin sütun sayısı ile ikincinin satır sayısı eşit olmalıdır. Sinir ağında bir katman, girdi vektörünü ağırlık matrisiyle çarparak bir sonraki katmanın girdisini üretir. Her hücre diğerlerinden bağımsız hesaplanabildiği için iş binlerce çekirdeğe paylaştırılabilir; GPU'ların bu işe uygun olmasının nedeni budur.",
  "why": "Büyük dil modellerinin eğitiminde ve çalıştırılmasında harcanan hesaplamanın büyük bölümü matris çarpımıdır. Bu yüzden yapay zeka çiplerinin hızı, bellek bant genişliği ve enerji tüketimi tartışmaları büyük ölçüde bu işlemin maliyetine dayanır. İşlemi daha verimli yapan algoritmalar ve donanımlar doğrudan maliyet avantajı sağlar.",
  "example": "Bir sohbet modeli kullanıcının mesajını işlerken yaptığı hesabın büyük kısmını, ağırlık matrisleriyle yapılan çarpmalarla gerçekleştirir.",
  "faq": [
   [
    "Matris çarpımı sıradan çarpmadan nasıl ayrılır?",
    "Sıradan çarpmada sıra fark etmez; matris çarpımında ise A×B ile B×A genellikle farklı sonuç verir, hatta biri hiç tanımlı olmayabilir. Ayrıca boyutların uyumlu olması gerekir."
   ],
   [
    "GPU'lar matris çarpımında neden iyidir?",
    "Sonuç matrisinin hücreleri birbirinden bağımsız hesaplanabildiği için binlerce küçük çekirdek aynı anda çalışabilir. GPU'lar tam da bu tür paralel işler için tasarlanmıştır."
   ]
  ]
 },
 {
  "slug": "kosinus-benzerligi",
  "term": "Kosinüs benzerliği",
  "en": "cosine similarity",
  "match": [
   "kosinüs benzerliği",
   "cosine similarity"
  ],
  "cat": "Matematiksel temeller",
  "def": "İki vektörün aynı yönü ne kadar gösterdiğini, aralarındaki açıya bakarak ölçen yöntem. Yapay zekada metin ve görsellerin anlamca yakınlığını karşılaştırmak için kullanılır.",
  "how": "Metinler ve görseller önce gömme (embedding) adı verilen vektörlere çevrilir. Kosinüs benzerliği, iki vektör arasındaki açının kosinüsünü hesaplar. Aynı yönü gösteren vektörler en yüksek değeri (1), birbirine dik olanlar 0'ı, zıt yöndekiler -1'i alır. Ölçüt vektörün uzunluğuna değil yönüne baktığı için, uzun bir metinle kısa bir metin aynı konuyu işliyorsa yüksek benzerlik çıkabilir. Arama sistemleri bu skoru sıralama yapmak için kullanır.",
  "why": "Anlamsal arama, öneri sistemleri ve erişim destekli üretim (RAG) gibi uygulamaların çoğu 'en benzer içeriği bul' adımına dayanır; bu adımda sık kullanılan ölçütlerden biri kosinüs benzerliğidir. Bir sorguya en yakın belgelerin seçilmesi, sistemin doğru kaynağa ulaşıp ulaşmadığını belirler.",
  "example": "Şirket içi bir arama aracında 'izin başvurusu nasıl yapılır' sorusunun vektörü, 'yıllık izin talep formu' belgesinin vektörüyle yüksek benzerlik verir; kelimeler farklı olsa da anlam yakındır.",
  "faq": [
   [
    "Kosinüs benzerliği ile öklid mesafesi arasındaki fark ne?",
    "Öklid mesafesi iki vektörün uçları arasındaki düz çizgi uzaklığını ölçer ve büyüklükten etkilenir; kosinüs benzerliği yalnızca yöne bakar. Vektörler aynı uzunluğa getirilmişse ikisi aynı sıralamayı verir."
   ],
   [
    "Kosinüs benzerliği 1 çıkarsa iki metin aynı mı demektir?",
    "Hayır. Bu değer yalnızca vektörlerin aynı yönü gösterdiğini söyler. İki metin anlamca çok yakın olabilir ama birebir aynı olmak zorunda değildir."
   ]
  ]
 },
 {
  "slug": "olasilik-dagilimi",
  "term": "Olasılık dağılımı",
  "en": "probability distribution",
  "match": [
   "olasılık dağılımı",
   "probability distribution"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bir olayın alabileceği olası sonuçların her birine ne kadar ihtimal verildiğini gösteren bütün. Bu ihtimaller toplandığında bire ulaşır.",
  "how": "Zar atışında altı yüzün her biri için altıda bir olasılık tanımlanır; bu basit bir dağılımdır. Dil modelleri de benzer mantıkla çalışır: o ana kadarki metne bakıp sözlükteki her kelime parçası için bir sonraki parça olma olasılığını hesaplar. Sinir ağının ham çıktıları softmax adlı bir işlemle toplamı bir olan olasılıklara dönüştürülür. Model sonra bu dağılımdan bir parça seçer; 'sıcaklık' gibi ayarlar dağılımı keskinleştirir ya da yayar.",
  "why": "Üretken yapay zekanın aynı soruya neden farklı yanıtlar verebildiği bu kavramla açıklanır. Sınıflandırma modellerindeki 'güven skorları' da olasılık dağılımlarıdır, ancak her zaman gerçek doğruluk oranını yansıtmaz. Bu fark, bir model çıktısına ne kadar güvenileceğini yorumlarken önemlidir.",
  "example": "Bir e-posta filtresi bir iletiyi yüzde 95 ihtimalle istenmeyen, yüzde 5 ihtimalle normal olarak değerlendirebilir; bu iki sayı basit bir olasılık dağılımıdır.",
  "faq": [
   [
    "Sıcaklık ayarı olasılık dağılımını nasıl etkiler?",
    "Düşük sıcaklık dağılımı keskinleştirir ve en olası seçeneği öne çıkarır. Yüksek sıcaklık dağılımı düzleştirir; çıktılar daha çeşitli ama daha öngörülemez olur."
   ],
   [
    "Model yüzde 90 emin diyorsa yüzde 90 doğru mudur?",
    "Her zaman değil. Modelin verdiği olasılık gerçek doğruluk oranıyla uyuşmayabilir; bu soruna kalibrasyon sorunu denir."
   ]
  ]
 },
 {
  "slug": "bayes-teoremi",
  "term": "Bayes teoremi",
  "en": "Bayes' theorem",
  "match": [
   "bayes teorem"
  ],
  "cat": "Matematiksel temeller",
  "def": "Yeni bir kanıt görüldüğünde bir olasılığın nasıl güncelleneceğini söyleyen kural. Önceki inançla kanıtın ne kadar beklenen olduğunu birleştirerek güncellenmiş bir olasılık verir.",
  "how": "Teorem üç parçayı birleştirir: bir olayın kanıttan önceki olasılığı (öncül), olay doğruysa kanıtın ne sıklıkla görüleceği (olabilirlik) ve kanıtın genel olarak ne kadar yaygın olduğu. Öncül olabilirlikle çarpılır, kanıtın genel yaygınlığına bölünür; sonuca sonsal olasılık denir. Bu yüzden nadir bir hastalık için pozitif çıkan test sanıldığı kadar kesin değildir: hastalık çok nadirse pozitif sonuçların büyük kısmı sağlıklı kişilerden gelir. Kuralın kendisi basit bir olasılık özdeşliğidir; asıl gücü bilgiyi adım adım güncellemeye izin vermesinden gelir.",
  "why": "Bayes teoremi, olasılıksal çıkarımın ve Bayesçi yöntemlerin temelidir. Spam süzgeçleri, tıbbi tanı destek sistemleri ve belirsizliği ölçen makine öğrenmesi modelleri bu mantığa dayanır. İnsanlar koşullu olasılıkları sık yanlış yorumladığı için, test sonuçlarını ve risk haberlerini doğru okumak açısından da işe yarar.",
  "example": "Naive Bayes sınıflandırıcısı kullanan klasik spam süzgeçleri, bir e-postadaki sözcüklere bakıp iletinin spam olma olasılığını bu kuralla günceller.",
  "faq": [
   [
    "Bayes teoremi ile Bayesçi çıkarım aynı şey mi?",
    "Değil. Bayes teoremi tek bir olasılık kuralıdır; Bayesçi çıkarım ise bu kuralı model parametrelerini ve hipotezleri güncellemek için sistematik biçimde kullanan genel yaklaşımdır."
   ],
   [
    "Öncül olasılık nereden gelir?",
    "Geçmiş verilerden, uzman bilgisinden ya da hiçbir bilgi yoksa geniş ve tarafsız varsayımlardan gelir. Veri azsa öncül seçimi sonucu belirgin biçimde etkileyebilir."
   ]
  ]
 },
 {
  "slug": "bayesci-cikarim",
  "term": "Bayesçi çıkarım",
  "en": "Bayesian inference",
  "match": [
   "bayesçi"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bilinmeyen bir nicelik hakkındaki inancı bir olasılık dağılımı olarak tutan ve yeni veri geldikçe Bayes teoremiyle güncelleyen istatistiksel yaklaşım. Tek bir en iyi değer yerine, olası değerlerin tamamı ve belirsizlikleri izlenir.",
  "how": "Önce parametre için, veriyi görmeden önceki bilgiyi yansıtan bir öncül dağılım seçilir. Ardından verinin bu parametre değerleriyle ne kadar uyumlu olduğu (olabilirlik) hesaplanır ve ikisi birleştirilerek sonsal dağılım elde edilir. Yeni veri geldikçe sonsal dağılım bir sonraki turun öncülü olur. Karmaşık modellerde sonsalı tam olarak hesaplamak zordur; bu yüzden Markov zinciri Monte Carlo gibi örnekleme yöntemleri ya da varyasyonel çıkarım gibi yaklaşık yöntemler kullanılır.",
  "why": "Bayesçi yaklaşım, modelin ne kadar emin olduğunu da söyler; bu, tıp, finans ve bilim gibi hata maliyetinin yüksek olduğu alanlarda değerlidir. Az veriyle çalışırken öncül bilgiyi kullanabilmek de bir avantajdır. Bedeli ise hesaplama yükü ve öncül seçiminin tartışmaya açık olmasıdır.",
  "example": "Bir reklamın tıklanma oranını tahmin eden ekip, tek bir yüzde vermek yerine oranın büyük olasılıkla hangi aralıkta olduğunu gösteren bir dağılım tutar ve her yeni tıklamayla bunu günceller.",
  "faq": [
   [
    "Bayesçi çıkarım ile klasik (sıklıkçı) istatistik arasındaki fark ne?",
    "Sıklıkçı yaklaşım parametreyi sabit ama bilinmeyen sayar ve olasılığı tekrarlanan deneylerin uzun vadeli sıklığı olarak yorumlar. Bayesçi yaklaşım olasılığı inanç derecesi olarak görür ve parametreye bir dağılım atar. İki okul da yaygın biçimde kullanılır."
   ],
   [
    "Bayesçi çıkarım derin öğrenmede kullanılıyor mu?",
    "Evet, özellikle Bayesçi sinir ağları ve belirsizlik tahmini araştırmalarında. Ancak büyük modellerde hesaplama maliyeti yüksek olduğundan standart eğitim çoğunlukla tek bir parametre kümesine dayanır."
   ]
  ]
 },
 {
  "slug": "en-cok-olabilirlik-tahmini",
  "term": "En çok olabilirlik tahmini",
  "en": "maximum likelihood estimation",
  "match": [
   "en çok olabilirlik",
   "maximum likelihood"
  ],
  "cat": "Matematiksel temeller",
  "def": "Eldeki verinin gözlenme olasılığını en yüksek yapan model parametrelerini seçen tahmin yöntemi. Kısacası, veriyi en iyi açıklayan ayarı bulmaya çalışır.",
  "how": "Bir model, parametrelerine göre her veri noktasına bir olasılık atar. Tüm veri için bu olasılıkların birleşimine olabilirlik denir. Yöntem, olabilirliği en büyük yapan parametre değerlerini arar. Uygulamada çarpımlar yerine logaritma alınır; çünkü toplamlarla çalışmak hem hesabı kolaylaştırır hem sayısal taşmaları önler. En yüksek nokta genellikle gradyan inişiyle bulunur. Yazı tura örneğinde on atışın yedisi tura gelmişse, olabilirliği en yüksek yapan tura olasılığı yüzde 70'tir.",
  "why": "Yapay zekada birçok modelin eğitimi örtük olarak bu ilkeye dayanır. Dil modellerinin bir sonraki sözcüğü tahmin ederken kullandığı kayıp işlevi, aslında negatif log olabilirliktir. Yöntemin sınırı, az veriyle aşırı uyuma yatkın olması ve öncül bilgiyi hesaba katmamasıdır.",
  "example": "Dil modeli eğitiminde modelden, eğitim metnindeki gerçek sonraki sözcüğe mümkün olduğunca yüksek olasılık vermesi istenir; bu, olabilirliği artırmakla aynı şeydir.",
  "faq": [
   [
    "Olabilirlik ile olasılık arasındaki fark ne?",
    "Olasılıkta parametre sabittir, veri değişkendir: Para adilse on atışta yedi tura gelme ihtimali nedir? Olabilirlikte ise veri sabittir, parametre değişkendir: Bu veriyi görmüşken para hangi tura olasılığıyla en uyumlu?"
   ],
   [
    "En çok olabilirlik tahmini Bayesçi çıkarımla nasıl ilişkilidir?",
    "Öncül dağılım her değeri eşit görüyorsa sonsal dağılımın tepe noktası, en çok olabilirlik tahminiyle örtüşür. Öncül bilgi varsa sonuç ondan etkilenir ve iki yöntem ayrışır."
   ]
  ]
 },
 {
  "slug": "entropi",
  "term": "Entropi",
  "en": "entropy",
  "match": [
   "=entropi",
   "=entropy"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bir olasılık dağılımındaki belirsizliğin ya da sürpriz miktarının ölçüsü. Sonuçlar ne kadar tahmin edilemezse entropi o kadar yüksek olur.",
  "how": "Bilgi kuramında her olayın bir sürpriz değeri vardır: nadir olay çok, sık olay az bilgi taşır. Entropi, bu sürprizin olasılıklara göre alınan ortalamasıdır. Adil bir yazı tura atışında iki sonuç da eşit olasıdır; bu en belirsiz durumdur ve her atış bir bit bilgi taşır. Hep tura gelen bir para ise hiç sürpriz içermez ve entropisi sıfırdır. Entropi aynı zamanda bir kaynağın çıktılarını ortalama kaç bitle kodlamak gerektiğinin alt sınırını da verir.",
  "why": "Entropi, makine öğrenmesinde kayıp işlevlerinin ve karar ağaçlarındaki bölme ölçütlerinin temelindedir. Bir modelin tahminlerinde ne kadar emin olduğunu da özetler. Dil modellerinde örnekleme ayarları, çıktı dağılımının entropisini dolaylı olarak değiştirir.",
  "example": "Karar ağacı algoritmaları, bir veri kümesini hangi özelliğe göre bölerse sınıfların karışıklığının, yani entropinin, en çok azalacağına bakarak dallanabilir.",
  "faq": [
   [
    "Bilgi kuramındaki entropi ile fizikteki entropi aynı şey mi?",
    "Aynı değil ama akrabadırlar. Fizikteki entropi, bir sistemin olası mikro durumlarıyla ilişkilidir ve formülleri benzerdir. Bilgi kuramındaki entropi ise bir olasılık dağılımının belirsizliğini ölçer."
   ],
   [
    "Yüksek entropi iyi mi, kötü mü?",
    "Bağlama göre değişir. Bir sınıflandırıcıda yüksek entropi, modelin kararsız olduğunu gösterir. Yaratıcı metin üretiminde ise çeşitlilik için bir miktar entropi istenir."
   ]
  ]
 },
 {
  "slug": "capraz-entropi",
  "term": "Çapraz entropi",
  "en": "cross-entropy",
  "match": [
   "çapraz entropi",
   "cross-entropy"
  ],
  "cat": "Matematiksel temeller",
  "def": "Gerçek dağılımdaki olayları başka bir dağılıma, yani modelin dağılımına göre kodlamanın ortalama maliyeti. Makine öğrenmesinde, modelin tahmin ettiği olasılıklarla gerçek etiketler arasındaki uyumsuzluğu ölçen yaygın bir kayıp işlevidir.",
  "how": "Her eğitim örneğinde gerçek sınıf bellidir; model ise sınıflara olasılık verir. Çapraz entropi, modelin gerçek sınıfa verdiği olasılığın negatif logaritmasını alır. Model doğru sınıfa yüksek olasılık verirse ceza küçük, düşük olasılık verirse ceza hızla büyür; özellikle kendinden emin ama yanlış tahminler ağır cezalandırılır. Tüm örneklerin ortalaması eğitim sırasında gradyan inişiyle küçültülür. Böylece modelin olasılıkları gerçek dağılıma yaklaşır.",
  "why": "Sınıflandırma modellerinin ve büyük dil modellerinin eğitiminde en yaygın kayıp işlevlerinden biridir. Sınıflandırmada negatif log olabilirlikle aynı şeydir; bu yüzden en çok olabilirlik ilkesine bağlanır. Dil modellerinde sıkça duyulan perplexity ölçüsü de çapraz entropiden türetilir.",
  "example": "Bir görüntü sınıflandırıcı fotoğraftaki kediye yüzde 90 olasılık verirse çapraz entropi kaybı düşük olur; yüzde 1 verirse kayıp belirgin biçimde yüksek olur.",
  "faq": [
   [
    "Çapraz entropi ile entropi arasındaki fark nedir?",
    "Entropi bir dağılımın kendi belirsizliğidir. Çapraz entropi ise gerçek dağılımın olaylarını başka bir dağılıma göre kodlamanın maliyetidir ve her zaman entropiden büyük ya da ona eşittir. Aradaki fark KL ıraksamasıdır."
   ],
   [
    "Çapraz entropi regresyonda da kullanılır mı?",
    "Genellikle hayır. Çapraz entropi olasılık dağılımlarını karşılaştırdığı için sınıflandırmada ve dil modellemede yaygındır. Sayısal değer tahmininde ise ortalama kare hata gibi ölçüler daha sık tercih edilir."
   ]
  ]
 },
 {
  "slug": "kl-iraksamasi",
  "term": "KL ıraksaması",
  "en": "Kullback-Leibler divergence",
  "match": [
   "kl ıraksama",
   "kl divergence"
  ],
  "cat": "Matematiksel temeller",
  "def": "İki olasılık dağılımı arasındaki farkı ölçen bir değer. Bir dağılımı, gerçek olanın yerine kullanmanın getirdiği fazladan bilgi maliyetini gösterir; iki dağılım aynıysa sıfırdır.",
  "how": "KL ıraksaması, gerçek dağılımdaki olaylar için iki dağılımın verdiği olasılıkların oranına bakar ve bunun ortalamasını gerçek dağılıma göre alır. Dağılımlar özdeşse sıfırdır, birbirinden uzaklaştıkça artar ve hiçbir zaman negatif olmaz. Simetrik değildir: P'den Q'ya hesaplanan değer, Q'dan P'ye hesaplanandan farklıdır; bu yüzden tam anlamıyla bir mesafe sayılmaz. Çapraz entropi ile entropi arasındaki farka eşittir. Dolayısıyla sabit bir hedef dağılım için çapraz entropiyi küçültmek, KL ıraksamasını küçültmekle aynı sonucu verir.",
  "why": "KL ıraksaması birçok modern yöntemin içinde yer alır: varyasyonel otomatik kodlayıcılar, pekiştirmeli öğrenmede politika güncellemelerini sınırlama ve dil modellerinin ince ayarında modelin özgün halinden fazla uzaklaşmasını engelleme gibi. Haberlerde referans modelden sapma cezası denildiğinde genellikle bu ölçü kastedilir.",
  "example": "İnsan geri bildirimiyle pekiştirmeli öğrenme (RLHF) kullanılan bir sohbet modelinde, eğitim sırasında modelle başlangıçtaki hali arasına KL türü bir ceza konabilir; böylece model ödülü artırmaya çalışırken dil yeteneğini bozacak kadar savrulmaz.",
  "faq": [
   [
    "KL ıraksaması neden gerçek bir mesafe sayılmaz?",
    "Çünkü simetrik değildir; P'den Q'ya ölçülen değer, Q'dan P'ye ölçülenle aynı olmak zorunda değildir. Ayrıca üçgen eşitsizliğini de sağlamaz. Bu yüzden ıraksama denir."
   ],
   [
    "KL ıraksamasının hesaplanma yönü önemli mi?",
    "Evet. İleri ve geri yön farklı davranır: Geri yön, yaklaşık dağılımın hedefin tek bir tepesine yoğunlaşmasına, ileri yön ise tüm tepeleri kapsamaya yatkındır. Hangisinin seçileceği yönteme bağlıdır."
   ]
  ]
 },
 {
  "slug": "yerel-minimum",
  "term": "Yerel minimum",
  "en": "local minimum",
  "match": [
   "yerel minimum",
   "local minimum",
   "yerel minimuma"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bir kayıp işlevinde çevresindeki tüm noktalardan daha düşük olan, ama işlevin en düşük noktası olmak zorunda olmayan nokta. Eğitim sırasında optimizasyon algoritması burada takılıp kalabilir.",
  "how": "Kayıp işlevi dağlık bir araziye benzetilebilir: modelin her parametre ayarı bir konum, kayıp ise yüksekliktir. Gradyan inişi her adımda en dik aşağı yönde ilerler. Bir çukura varınca her yön yukarı çıkar ve eğim sıfıra yaklaşır; algoritma durur. Çukur arazideki en derin nokta değilse yerel minimuma düşülmüş olur. Tüm arazideki en düşük noktaya ise küresel minimum denir. Dışbükey işlevlerde yalnızca tek bir minimum vardır; derin ağların kayıp yüzeyleri ise çok daha karmaşıktır.",
  "why": "Bu kavram, optimizasyonun neden başarısız olabileceğini anlamak için temel bir fikirdir. Yine de yüksek boyutlu derin ağlarda araştırmalar, eğitimi zorlaştıran şeyin çoğu zaman kötü yerel minimumlardan çok eyer noktaları ve düz bölgeler olduğunu düşündürüyor. Konu araştırmada hâlâ incelenmektedir.",
  "example": "Aynı sinir ağını farklı rastgele başlangıç değerleriyle iki kez eğitmek, kayıp yüzeyinde farklı çukurlara inilmesine ve biraz farklı sonuçlar alınmasına yol açabilir.",
  "faq": [
   [
    "Yerel minimum ile küresel minimum arasındaki fark nedir?",
    "Yerel minimum, yalnızca yakın çevresindeki noktalardan daha düşük olan noktadır. Küresel minimum ise işlevin tüm tanım aralığındaki en düşük değeridir. Her küresel minimum aynı zamanda bir yerel minimumdur, tersi geçerli değildir."
   ],
   [
    "Yerel minimumdan kurtulmak için ne yapılır?",
    "Momentum, öğrenme oranı programları ve mini yığınlı stokastik gradyan inişinin getirdiği gürültü gibi teknikler algoritmanın çukurlarda takılmasını azaltabilir. Farklı başlangıç değerleriyle birkaç kez eğitmek de kullanılır. Hiçbiri küresel minimumu garanti etmez."
   ]
  ]
 },
 {
  "slug": "ortalama-kare-hata",
  "term": "Ortalama kare hata (MSE)",
  "en": "mean squared error",
  "match": [
   "ortalama kare hata",
   "=mse",
   "mean squared error"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bir modelin tahminleriyle gerçek değerler arasındaki farkların karesinin ortalaması. Sayısal değer tahmin eden modellerde hatayı tek bir sayıyla özetleyen yaygın bir ölçüdür.",
  "how": "Her örnek için tahmin ile gerçek değer arasındaki fark alınır, bu fark kendisiyle çarpılır ve tüm örneklerin ortalaması hesaplanır. Karesini almak iki işe yarar: Pozitif ve negatif hatalar birbirini götürmez, büyük hatalar da küçüklerden orantısız biçimde daha ağır cezalandırılır. Örneğin tahmin iki birim şaşıyorsa ceza dört, dört birim şaşıyorsa on altı olur. Eğitimde bu değer küçültülmeye çalışılır; pürüzsüz ve türevlenebilir olduğu için gradyan inişiyle iyi çalışır.",
  "why": "MSE, regresyon problemlerinde en temel kayıp işlevi ve değerlendirme ölçütlerinden biridir; ev fiyatı, talep ya da sıcaklık tahmini gibi işlerde sık görülür. Uç değerlere duyarlı olması hem iyi hem kötü olabilir: Büyük hataları yakalar, ama birkaç sıra dışı veri sonucu bozabilir. Birimi de verinin biriminin karesi olduğundan, kökü alınmış hali (RMSE) yorumlamak için sıkça tercih edilir.",
  "example": "Kiralık daire fiyatı tahmin eden bir model, gerçek kiralardan ortalama olarak ne kadar saptığını MSE ile ölçer; tek bir dairede yapılan çok büyük hata değeri belirgin biçimde yükseltir.",
  "faq": [
   [
    "MSE ile ortalama mutlak hata (MAE) arasındaki fark nedir?",
    "MAE farkların mutlak değerinin ortalamasıdır ve her hatayı aynı oranda sayar. MSE ise büyük hataları karesi nedeniyle daha ağır cezalandırır; bu yüzden uç değerlere daha duyarlıdır."
   ],
   [
    "MSE'nin düşük olması her zaman iyi bir model demek mi?",
    "Hayır. Model eğitim verisinde düşük MSE verip yeni verilerde yüksek hata yapabilir; buna aşırı uyum denir. Bu yüzden değerlendirme için ayrı bir test verisine bakılır."
   ]
  ]
 },
 {
  "slug": "yanlilik-varyans-dengesi",
  "term": "Yanlılık-varyans dengesi",
  "en": "bias-variance tradeoff",
  "match": [
   "yanlılık-varyans",
   "bias-variance"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bir modelin hem eğitim verisindeki ayrıntıları yakalaması hem de yeni verilerde tutarlı kalması arasındaki gerilim. Model basitleştikçe sistematik hata artar, karmaşıklaştıkça model veriye aşırı duyarlı hale gelir.",
  "how": "Yanlılık, modelin gerçek örüntüyü fazla basit varsayması yüzünden yaptığı sistematik hatadır; düz bir çizgiyle kıvrımlı bir eğriyi anlatmaya çalışmak gibi. Varyans ise modelin eğitim verisindeki küçük değişikliklere ne kadar tepki verdiğini gösterir. Çok esnek bir model eğitim verisindeki gürültüyü bile ezberler ve varyansı yükselir. Pratikte model karmaşıklığı arttıkça yanlılık düşer, varyans yükselir. Doğrulama verisindeki hata genellikle bu iki eğrinin kesiştiği orta noktada en düşük olur.",
  "why": "Aşırı öğrenme ve yetersiz öğrenme tartışmalarının arkasındaki temel fikir budur. Model seçimi, düzenlileştirme ve veri miktarı kararları bu dengeye göre verilir. Büyük modellerin neden çok veriye ihtiyaç duyduğu anlatılırken de dolaylı olarak bu kavrama başvurulur.",
  "example": "Konut fiyatı tahmininde yalnızca metrekareye bakan model pahalı semtleri hep düşük tahmin eder (yüksek yanlılık); her sokağı ve kat bilgisini ezberleyen model ise yeni evlerde şaşırır (yüksek varyans).",
  "faq": [
   [
    "Yanlılık ve varyans aynı anda sıfırlanabilir mi?",
    "Pratikte nadiren; biri düşerken diğeri genellikle artar. Daha fazla veri ve iyi bir düzenlileştirme dengeyi iyileştirebilir ama ödünleşimi tamamen ortadan kaldırmaz."
   ],
   [
    "Aşırı öğrenme ile bu denge arasındaki ilişki nedir?",
    "Aşırı öğrenme yüksek varyansın, yetersiz öğrenme ise yüksek yanlılığın tipik belirtisidir. Denge kavramı bu iki durumu tek çerçevede açıklar."
   ]
  ]
 },
 {
  "slug": "boyutluluk-laneti",
  "term": "Boyutluluk laneti",
  "en": "curse of dimensionality",
  "match": [
   "boyutluluk laneti",
   "curse of dimensionality"
  ],
  "cat": "Matematiksel temeller",
  "def": "Veriyi tanımlayan özellik sayısı arttıkça verinin uzayda giderek seyrekleştiği ve algoritmaların çalışmasının zorlaştığı sorun. Aynı doluluğu korumak için gereken örnek sayısı çok hızlı büyür.",
  "how": "Tek boyutlu bir doğru üzerinde on nokta aralığı iyi doldurur. Aynı yoğunluğu iki boyutta yakalamak için yüz, üç boyutta bin nokta gerekir; gereken sayı boyutla birlikte üstel olarak büyür. Boyut arttıkça noktalar birbirinden uzaklaşır ve en yakın ile en uzak komşu arasındaki mesafe farkı küçülür. Bu yüzden mesafeye dayanan yöntemler ayırt etme gücünü yitirir. Modeller de az sayıda örnekle çok sayıda özelliği ezberlemeye yönelir.",
  "why": "Gen verisi, metin ve görüntü gibi binlerce özellikli alanlarda doğrudan karşılaşılan bir engeldir. Özellik seçimi, boyut indirgeme ve gömme (embedding) gibi tekniklerin neden yaygın olduğunu açıklar. Bu nedenle yüksek boyutlu verilerle çalışan ekipler önce özellik sayısını düşürmeye bakar.",
  "example": "Her hastanın on bin gen ifadesinin ölçüldüğü ama yalnızca birkaç yüz hastanın bulunduğu bir çalışmada model, hastalığı değil o küçük örnekleme özgü rastlantıları öğrenmeye yatkın olur.",
  "faq": [
   [
    "Boyutluluk laneti nasıl azaltılır?",
    "Özellik seçimi, temel bileşen analizi gibi boyut indirgeme yöntemleri, düzenlileştirme ve daha fazla veri toplama başlıca çarelerdir."
   ],
   [
    "Derin öğrenme modelleri bu sorundan etkilenmez mi?",
    "Gerçek veriler genellikle uzayın küçük bir bölümünde yoğunlaşır ve derin ağlar bu yapıyı yakalayabilir. Yine de sorun tamamen ortadan kalkmaz."
   ]
  ]
 },
 {
  "slug": "temel-bilesen-analizi",
  "term": "Temel bileşen analizi (PCA)",
  "en": "principal component analysis",
  "match": [
   "temel bileşen analizi",
   "=pca",
   "principal component analysis"
  ],
  "cat": "Matematiksel temeller",
  "def": "Çok özellikli bir veriyi, en fazla değişimi taşıyan yeni eksenlere yansıtarak daha az boyutla özetleyen istatistiksel yöntem. Böylece bilgi kaybı sınırlı tutulurken veri sadeleşir.",
  "how": "Yöntem önce verinin en çok yayıldığı yönü bulur; bu birinci temel bileşendir. Sonra bu yöne dik olan ve kalan değişimin en büyük kısmını taşıyan yönü seçer, süreç böyle sürer. Her bileşen, özgün özelliklerin ağırlıklı bir karışımıdır. İlk birkaç bileşen tutulup gerisi atılınca veri çok daha az sayıyla temsil edilir. Bir cismi farklı açılardan fotoğraflayıp en bilgi verici açıyı seçmeye benzetilebilir. Yöntem doğrusaldır; yalnızca düz eksenlere dayanır.",
  "why": "Görselleştirme, gürültü azaltma ve eğitim süresini kısaltma için en yaygın ön işleme adımlarından biridir. Boyutluluk lanetiyle başa çıkmanın klasik yoludur. Ancak bileşenlerin özgün özellikler cinsinden yorumlanması zor olduğundan, sadeleşme ile açıklanabilirlik arasında bir ödünleşim vardır.",
  "example": "Bir müşterinin yüzlerce alışveriş alışkanlığı ölçümü birkaç temel bileşene indirilerek iki boyutlu bir grafikte çizilebilir ve benzer müşteri grupları gözle görülür hale gelir.",
  "faq": [
   [
    "PCA ile özellik seçimi aynı şey mi?",
    "Hayır. Özellik seçimi mevcut sütunların bir kısmını tutar; PCA ise tüm sütunları birleştirerek yeni eksenler üretir."
   ],
   [
    "PCA her veri setinde işe yarar mı?",
    "Değişimin bilgi taşıdığı varsayımına dayanır ve yalnızca doğrusal yapıyı yakalar. Eğrisel yapılarda ya da ölçekleri çok farklı özelliklerde, ölçekleme yapılmadan zayıf sonuç verebilir."
   ]
  ]
 },
 {
  "slug": "k-ortalamalar",
  "term": "K-ortalamalar (k-means)",
  "en": "k-means",
  "match": [
   "k-ortalama",
   "k-means"
  ],
  "cat": "Matematiksel temeller",
  "def": "Etiketsiz veriyi, birbirine benzeyen noktalardan oluşan k sayıda kümeye ayıran denetimsiz öğrenme yöntemi. Her küme, üyelerinin ortalaması olan bir merkezle temsil edilir.",
  "how": "Önce kaç küme isteneceği (k) belirlenir ve rastgele k merkez seçilir. Her veri noktası kendisine en yakın merkeze atanır. Ardından her merkez, kendi kümesindeki noktaların ortalamasına taşınır. Atama ve taşıma adımları, merkezler belirgin biçimde değişmeyene kadar tekrarlanır. Sonuç başlangıçtaki rastgele seçime bağlı olabildiğinden algoritma çoğunlukla farklı başlangıçlarla birkaç kez çalıştırılır. Küme sayısının önceden söylenmesi gerekir.",
  "why": "Basit, hızlı ve büyük verilerde ölçeklenebilir olduğu için müşteri segmentasyonu, görüntü sıkıştırma ve keşifsel analizde sık kullanılır. Öte yandan kümelerin yuvarlak ve benzer boyutta olduğunu varsayar; bu varsayım tutmazsa sonuçlar yanıltıcı olabilir. Sonuçları yorumlamak analistin işidir.",
  "example": "Bir e-ticaret sitesi, müşterilerini harcama sıklığı ve sepet tutarına göre dört kümeye ayırıp her gruba farklı bir kampanya sunabilir.",
  "faq": [
   [
    "k değeri nasıl seçilir?",
    "Genellikle farklı k değerleri denenir ve dirsek yöntemi gibi yaklaşımlarla kümeleme kalitesindeki kazancın azaldığı nokta aranır. İş bağlamı da kararı belirler."
   ],
   [
    "K-ortalamalar ile K-en yakın komşu aynı şey mi?",
    "Hayır. K-ortalamalar etiketsiz veriyi kümeler (denetimsiz öğrenme); K-en yakın komşu ise etiketli örneklere bakarak sınıflandırma ya da tahmin yapar (denetimli öğrenme). İkisindeki k farklı şeyleri ifade eder."
   ]
  ]
 },
 {
  "slug": "k-en-yakin-komsu",
  "term": "K-en yakın komşu (KNN)",
  "en": "k-nearest neighbors",
  "match": [
   "k-en yakın",
   "=knn"
  ],
  "cat": "Matematiksel temeller",
  "def": "Yeni bir örneği, eğitim verisinde kendisine en yakın k örneğin etiketlerine bakarak sınıflandıran ya da değerini tahmin eden basit yöntem. Benzer şeylerin birbirine yakın olduğu varsayımına dayanır.",
  "how": "Eğitim aşamasında model neredeyse hiçbir şey öğrenmez; yalnızca etiketli örnekleri saklar. Yeni bir örnek geldiğinde tüm kayıtlara olan mesafe hesaplanır ve en yakın k komşu seçilir. Sınıflandırmada komşular oy kullanır ve çoğunluğun sınıfı seçilir; sayısal tahminde komşuların değerlerinin ortalaması alınır. Küçük k gürültüye duyarlıdır, büyük k ise ayrıntıları bulanıklaştırır. Mesafe kullanıldığı için özelliklerin aynı ölçeğe getirilmesi önemlidir.",
  "why": "Anlaşılması ve uygulaması kolay olduğundan temel karşılaştırma modeli olarak sık kullanılır. Öneri sistemlerinde ve vektör aramasında benzer öğeleri bulma fikri aynı mantığa dayanır. Veri büyüdükçe yavaşlar ve boyutluluk lanetinden güçlü biçimde etkilenir. Büyük ölçekte bu yüzden yaklaşık en yakın komşu yöntemleri tercih edilir.",
  "example": "Bir film sitesi, bir kullanıcıya zevkleri en çok benzeyen beş kullanıcının beğendiği filmlere bakarak ona öneri yapabilir.",
  "faq": [
   [
    "k değeri kaç olmalı?",
    "Tek bir doğru değer yoktur; genellikle çapraz doğrulamayla farklı değerler denenir. İkili sınıflandırmada beraberliği önlemek için tek sayılar yaygındır."
   ],
   [
    "KNN neden tembel öğrenici olarak anılır?",
    "Eğitim sırasında genelleme yapan bir model kurmaz, işi tahmin anına bırakır. Bu da eğitimi hızlı, tahmini ise büyük verilerde yavaş yapar."
   ]
  ]
 },
 {
  "slug": "dogrusal-regresyon",
  "term": "Doğrusal regresyon",
  "en": "linear regression",
  "match": [
   "doğrusal regresyon",
   "linear regression"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bir sayısal değeri, girdi özelliklerinin ağırlıklı toplamıyla tahmin eden ve verilere en iyi uyan düz çizgiyi (ya da çok boyutlu düzlemi) bulan yöntem.",
  "how": "Model, her özellik için bir ağırlık ve bir sabit terimden oluşur; tahmin bunların toplamıdır. Eğitimde ağırlıklar, tahminlerle gerçek değerler arasındaki farkların karelerinin toplamını en aza indirecek biçimde seçilir. Buna en küçük kareler yöntemi denir. Çözüm doğrudan hesaplanabildiği gibi gradyan inişi ile adım adım da bulunabilir. Ağırlıkların işareti ve büyüklüğü, bir özelliğin tahmini hangi yönde ve ne kadar etkilediğini gösterdiği için model yorumlanabilirdir.",
  "why": "İstatistiğin ve makine öğrenmesinin en eski ve en yaygın araçlarından biridir. Basit olması hızlı çalışmasını ve sonuçlarının açıklanabilmesini sağlar; bu yüzden karmaşık modellerin karşılaştırıldığı temel çizgi olarak kullanılır. Ancak ilişkinin gerçekte düz olmadığı durumlarda yetersiz kalır.",
  "example": "Bir emlakçı, evin metrekaresinden ve oda sayısından satış fiyatını tahmin eden bir doğrusal model kurabilir; her ek metrekarenin fiyata katkısı ağırlıktan okunur.",
  "faq": [
   [
    "Doğrusal regresyon ile lojistik regresyon arasındaki fark nedir?",
    "Doğrusal regresyon sürekli bir sayı tahmin eder. Lojistik regresyon ise bir olasılık üretir ve çoğunlukla sınıflandırmada kullanılır."
   ],
   [
    "Doğrusal demek verinin düz bir çizgi üzerinde olması mı demek?",
    "Model, ağırlıklar bakımından doğrusaldır. Özelliklerin karesi gibi dönüşümler eklenirse eğrisel ilişkiler de yakalanabilir."
   ]
  ]
 },
 {
  "slug": "lojistik-regresyon",
  "term": "Lojistik regresyon",
  "en": "logistic regression",
  "match": [
   "lojistik regresyon",
   "logistic regression"
  ],
  "cat": "Matematiksel temeller",
  "def": "Adına rağmen sınıflandırma için kullanılan bir yöntem: girdi özelliklerinden bir olasılık hesaplar ve bu olasılığa göre örneği iki sınıftan birine yerleştirir.",
  "how": "Model önce doğrusal regresyondaki gibi özelliklerin ağırlıklı toplamını hesaplar. Bu sayı sigmoid adı verilen S biçimli bir fonksiyondan geçirilerek sıfır ile bir arasına sıkıştırılır ve olasılık olarak yorumlanır. Olasılık, belirlenen eşiğin (çoğunlukla yüzde elli) üzerindeyse bir sınıf, altındaysa diğeri seçilir. Ağırlıklar, modelin gerçek etiketlere verdiği olasılığı yükselten bir hata ölçütü azaltılarak öğrenilir. İkiden fazla sınıf için genişletilmiş biçimleri de vardır.",
  "why": "Hızlı, kararlı ve yorumlanabilir olduğu için kredi riski, tıbbi tanı ve e-posta filtreleme gibi alanlarda yaygın bir ilk tercihtir. Olasılık üretmesi, eşiğin iş ihtiyacına göre ayarlanmasına olanak verir. Sinir ağlarının çıkış katmanlarında kullanılan fikirlerin temelinde de bu yapı vardır.",
  "example": "Bir banka, başvuranın gelir ve borç bilgilerinden kredinin geri ödenme olasılığını hesaplayıp olasılık belirli bir eşiğin altındaysa başvuruyu ek incelemeye yönlendirebilir.",
  "faq": [
   [
    "Adında regresyon geçtiği halde neden sınıflandırma yöntemi sayılıyor?",
    "Olasılığın dönüştürülmüş biçimini doğrusal bir ifadeyle modellediği için bu ad verilmiştir. Amacı sayı tahmini değil, sınıf kararı vermektir."
   ],
   [
    "Eşik değeri değiştirilebilir mi?",
    "Evet. Yanlış alarmların maliyeti yüksekse eşik yükseltilir, kaçırılan vakalar daha kritikse düşürülür."
   ]
  ]
 },
 {
  "slug": "karar-agaci",
  "term": "Karar ağacı",
  "en": "decision tree",
  "match": [
   "karar ağacı",
   "decision tree"
  ],
  "cat": "Matematiksel temeller",
  "def": "Veriyi evet-hayır biçiminde sorular sorarak dallara ayıran ve sonunda bir sınıf ya da sayı tahminine ulaşan, akış şemasına benzer model.",
  "how": "Ağaç kökte tüm veriyle başlar ve veriyi en iyi ayıran özelliği ve eşik değerini arar; örneğin yaşın kırktan küçük olup olmadığı. Her bölünme, ortaya çıkan grupları etiketler bakımından daha homojen yapmayı hedefler. Süreç yeni dallarda tekrarlanır ve yapraklara varıldığında o yapraktaki çoğunluk sınıfı ya da ortalama değer tahmin olur. Tahmin sırasında yeni örnek, kökten yaprağa doğru soruları izleyerek iner. Ağaç çok derinleşirse eğitim verisini ezberler; bu yüzden derinlik sınırlanır ya da dallar budanır.",
  "why": "Kararların hangi kurallarla verildiğini insan okuyabildiği için açıklanabilirliğin gerektiği alanlarda değerlidir. Rastgele orman ve gradyan artırma gibi tablo verilerinde çok başarılı topluluk yöntemlerinin yapı taşıdır. Tek başına bir ağaç ise verideki küçük değişikliklere karşı kararsız olabilir.",
  "example": "Bir banka kredi başvurusunda önce gelir düzeyini, sonra mevcut borç oranını sorgulayan basit bir ağaçla başvuruyu onay ya da ret yönünde ilerletebilir.",
  "faq": [
   [
    "Karar ağacı ile rastgele orman arasındaki fark nedir?",
    "Rastgele orman, farklı veri örnekleriyle eğitilmiş çok sayıda ağacın oylamasıdır. Tek ağaca göre genellikle daha kararlıdır ama yorumlaması daha zordur."
   ],
   [
    "Karar ağaçları için veriyi ölçeklemek gerekir mi?",
    "Genellikle gerekmez. Bölünmeler eşik değerlerine dayandığı için özelliklerin ölçeği sonucu çok etkilemez."
   ]
  ]
 },
 {
  "slug": "rastgele-orman",
  "term": "Rastgele orman",
  "en": "random forest",
  "match": [
   "rastgele orman",
   "random forest"
  ],
  "cat": "Matematiksel temeller",
  "def": "Çok sayıda karar ağacının birlikte çalıştığı, her ağacın tahminini oy çokluğuyla veya ortalamayla birleştirerek sonuca varan bir makine öğrenmesi yöntemi.",
  "how": "Yöntem önce eğitim verisinden rastgele örneklemeyle birçok farklı altküme oluşturur. Her altküme için ayrı bir karar ağacı büyütülür; ağaç her dallanmada tüm özellikleri değil, rastgele seçilmiş birkaçını değerlendirir. Böylece ağaçlar birbirinden farklı hatalar yapar. Tahmin aşamasında sınıflandırmada ağaçların oyu sayılır, sayısal tahminde cevapların ortalaması alınır. Kalabalığın bilgeliğine benzer: tek tek gürültüye açık kararlar, bir araya gelince daha kararlı olur.",
  "why": "Rastgele orman, tek bir karar ağacının ezbere kaçma eğilimini azaltır ve fazla ayar gerektirmeden iyi sonuç vermesiyle bilinir. Müşteri kaydı ya da kredi başvurusu gibi tablo biçimindeki verilerde hâlâ yaygın bir temel yöntemdir. Hangi özelliğin ne kadar etkili olduğunu da gösterdiği için yorumlanabilirliğe katkı sağlar.",
  "example": "Bir banka, başvuru sahibinin gelir, borç ve ödeme geçmişi gibi bilgilerine bakan yüzlerce ağaçtan oluşan bir orman kurup kredi riskini ağaçların oylarına göre tahmin edebilir.",
  "faq": [
   [
    "Rastgele orman ile tek bir karar ağacı arasındaki fark ne?",
    "Tek bir karar ağacı verideki ayrıntıları ezberleyip yeni örneklerde hata yapabilir. Rastgele orman birçok farklı ağacın ortak kararını aldığı için genellikle daha kararlı sonuç verir; karşılığında tek bir ağaç kadar kolay okunmaz."
   ],
   [
    "Rastgele orman derin öğrenmenin yerini alır mı?",
    "Çoğu zaman hayır, çünkü ikisi farklı alanlarda öne çıkar. Görüntü, ses ve metinde derin öğrenme güçlüdür; satır ve sütunlardan oluşan tablo verilerinde ise rastgele orman gibi ağaç tabanlı yöntemler hâlâ güçlü seçeneklerdir."
   ]
  ]
 },
 {
  "slug": "gradyan-artirma",
  "term": "Gradyan artırma (XGBoost)",
  "en": "gradient boosting",
  "match": [
   "gradyan artırma",
   "gradient boosting",
   "=xgboost"
  ],
  "cat": "Matematiksel temeller",
  "def": "Küçük karar ağaçlarını art arda ekleyen ve her yeni ağacın öncekilerin yaptığı hataları düzeltmeye çalıştığı bir topluluk yöntemi. XGBoost, bu fikrin hızlı ve yaygın kullanılan bir uygulamasıdır.",
  "how": "Süreç basit bir tahminle başlar. Ardından model, tahminlerin gerçek değerlerden ne kadar saptığına bakar ve bu hatayı azaltacak yönü, yani gradyanı hesaplar. Yeni küçük ağaç tam olarak bu kalan hataları öğrenmek için eğitilir ve modele düşük bir ağırlıkla eklenir. Bu adım yüzlerce kez tekrarlanır; her tur öncekinin açığını biraz daha kapatır. Golfçünün her vuruşta topun kalan mesafesine göre bir sonraki vuruşunu ayarlamasına benzer. Rastgele ormandan farkı, ağaçların bağımsız değil sırayla kurulmasıdır.",
  "why": "Tablo verilerinde gradyan artırma tabanlı yöntemler uzun süredir en güçlü seçenekler arasında sayılır ve veri bilimi yarışmalarında sık kullanılır. Dolandırıcılık tespiti, kredi skorlama ve talep tahmini gibi iş uygulamalarında yaygındır. Dil ve görüntü modellerinin gölgesinde kalsa da şirketlerin gündelik tahmin işlerinin önemli bir bölümünü taşır.",
  "example": "Bir e-ticaret sitesi, bir müşterinin siparişi iade edip etmeyeceğini tahmin etmek için XGBoost ile eğitilmiş bir model kullanabilir.",
  "faq": [
   [
    "Gradyan artırma ile rastgele orman arasındaki fark ne?",
    "Rastgele ormanda ağaçlar birbirinden bağımsız kurulur ve tahminleri birleştirilir. Gradyan artırmada ise ağaçlar sırayla kurulur ve her biri öncekilerin hatasını düzeltmeye odaklanır."
   ],
   [
    "XGBoost ile gradyan artırma aynı şey mi?",
    "Tam olarak değil. Gradyan artırma yöntemin adıdır; XGBoost ise bu yöntemin hızlı ve ayarlanabilir bir yazılım uygulamasıdır. LightGBM ve CatBoost gibi benzer uygulamalar da vardır."
   ]
  ]
 },
 {
  "slug": "destek-vektor-makinesi",
  "term": "Destek vektör makinesi (SVM)",
  "en": "support vector machine",
  "match": [
   "destek vektör makinesi",
   "=svm",
   "support vector machine"
  ],
  "cat": "Matematiksel temeller",
  "def": "Veri noktalarını sınıflara ayırırken sınırı iki sınıfın en yakın örneklerine mümkün olduğunca uzak çizmeye çalışan, sınıflandırmada yaygın kullanılan bir makine öğrenmesi yöntemi.",
  "how": "Düzlemde iki renkli nokta kümesi düşünülürse, onları ayıran sayısız çizgi çizilebilir. SVM bunlar arasından iki kümeye de en geniş boşluğu, yani marjı bırakan çizgiyi seçer. Bu çizgiyi yalnızca sınıf sınırına en yakın birkaç nokta belirler; bunlara destek vektörleri denir. Veri düz bir çizgiyle ayrılamıyorsa çekirdek (kernel) yöntemi devreye girer: noktalar sanal olarak daha yüksek boyutlu bir uzaya taşınır ve ayrım orada yapılır. Gerçek verilerde çoğu zaman bir miktar hataya izin veren esnek bir marj kullanılır.",
  "why": "Derin öğrenme yaygınlaşmadan önce metin sınıflandırma ve biyoloji verileri gibi alanlarda başlıca yöntemlerden biriydi. Az örnekle bile iyi çalışabildiği için küçük veri kümelerinde hâlâ akla gelir. Marj ve çekirdek gibi fikirler, makine öğrenmesinin temel kavramlarını anlamak için de öğretici bir örnektir.",
  "example": "Bir e-posta hizmeti, iletileri sözcük sıklıklarına bakarak \"istenmeyen\" ve \"normal\" diye ayırmak için SVM kullanabilir.",
  "faq": [
   [
    "Destek vektörleri tam olarak nedir?",
    "Sınıflar arasındaki sınıra en yakın duran veri noktalarıdır. Sınırın nereden geçeceğini yalnızca bu noktalar belirler; uzaktaki diğer noktalar silinse sınır değişmez."
   ],
   [
    "SVM büyük veri kümelerinde neden daha az tercih edilir?",
    "Eğitim süresi örnek sayısı arttıkça hızla uzar. Çok büyük veride, özellikle görüntü ve metinde, derin öğrenme ya da ağaç tabanlı yöntemler genellikle daha pratik ve başarılıdır."
   ]
  ]
 },
 {
  "slug": "markov-zinciri",
  "term": "Markov zinciri",
  "en": "Markov chain",
  "match": [
   "markov zinciri",
   "markov chain"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bir sistemin durumlar arasında olasılıklarla geçiş yaptığı ve bir sonraki durumun yalnızca içinde bulunulan duruma bağlı olduğu, geçmişe bağlı olmadığı matematiksel model.",
  "how": "Önce olası durumlar listelenir; örneğin hava için \"güneşli\", \"bulutlu\", \"yağmurlu\". Sonra her durumdan diğerine geçiş olasılığı belirlenir: güneşli bir günün ertesi gün bulutlu olma olasılığı gibi. Zincir bu olasılıklara göre zar atar gibi ilerler ve her adımda yalnızca bugünkü duruma bakar; dünün ne olduğu önemsizdir. Bu belleksizlik özelliği hesapları çok kolaylaştırır. Geçiş olasılıkları, gözlenen verilerde sayım yapılarak tahmin edilebilir.",
  "why": "Markov zinciri, yapay zekada olasılıklı ve ardışık süreçleri modellemenin temel taşlarından biridir. Pekiştirmeli öğrenmenin matematiksel çerçevesi ve birçok örnekleme yöntemi bu fikre dayanır. Sözcük dizilerini tahmin eden ilk basit dil modelleri de benzer bir mantık kullanırdı; bugünkü büyük modeller ise çok daha uzun bir bağlamı hesaba katar.",
  "example": "Telefon klavyesindeki basit bir sonraki sözcük önerisi, yalnızca son yazılan sözcüğe bakıp ardından en olası sözcüğü öneren bir Markov zinciri gibi düşünülebilir.",
  "faq": [
   [
    "Markov özelliği ne demek?",
    "Geleceğin, geçmişe değil yalnızca şimdiki duruma bağlı olması demektir. Sistemin nasıl bu duruma geldiği bilinmese bile bir sonraki adımın olasılıkları aynı kalır."
   ],
   [
    "Markov zinciri ile gizli Markov modeli aynı şey mi?",
    "Hayır. Markov zincirinde durumlar doğrudan gözlenir. Gizli Markov modelinde ise durumlar saklıdır ve yalnızca onlardan çıkan gözlemler görülür; konuşma tanımada bu yaklaşım uzun süre kullanılmıştır."
   ]
  ]
 },
 {
  "slug": "markov-karar-sureci",
  "term": "Markov karar süreci",
  "en": "Markov decision process",
  "match": [
   "markov karar süreci",
   "markov decision process"
  ],
  "cat": "Matematiksel temeller",
  "def": "Sonuçları kısmen şansa bağlı olan ardışık karar problemlerini durumlar, eylemler, geçiş olasılıkları ve ödüllerle tanımlayan matematiksel çerçeve; pekiştirmeli öğrenmenin temelidir.",
  "how": "Ortamda bir ajan vardır. Ajan her adımda bulunduğu durumu görür ve bir eylem seçer; ortam da olasılıklara göre yeni bir duruma geçer ve ajana bir ödül verir. Markov zincirinden farkı, geçişleri ajanın eylemlerinin etkilemesidir. Hedef, uzun vadede toplanan ödülü en yükseğe çıkaracak kuralı, yani politikayı bulmaktır. Gelecekteki ödüller genellikle biraz indirimli sayılır; böylece hemen gelen kazanç, uzaktaki kazançtan daha değerli olur.",
  "why": "Robotik, oyun oynayan sistemler ve envanter yönetimi gibi sıralı karar gerektiren birçok problem bu çerçeveye oturtulabilir. Pekiştirmeli öğrenme haberlerinde geçen ajan, politika ve ödül kavramlarının ortak dili budur. Bir problemi bu biçimde yazabilmek, hangi algoritmaların uygulanabileceğini de belirler.",
  "example": "Bir robot süpürge için durum odadaki konumu ve pil seviyesi, eylem ilerleme veya şarj istasyonuna dönme, ödül ise temizlenen alan olabilir.",
  "faq": [
   [
    "Markov karar süreci ile Markov zinciri arasındaki fark ne?",
    "Markov zincirinde sistem kendi kendine olasılıklarla ilerler. Markov karar sürecinde ise bir karar verici eylem seçer, bu eylemler geçişleri etkiler ve başarı ödülle ölçülür."
   ],
   [
    "Ajan durumu tam göremezse ne olur?",
    "Klasik çerçeve durumun tam gözlendiğini varsayar. Gözlem eksikse kısmen gözlenebilir Markov karar süreci (POMDP) adı verilen genişletilmiş model kullanılır."
   ]
  ]
 },
 {
  "slug": "q-ogrenme",
  "term": "Q-öğrenme",
  "en": "Q-learning",
  "match": [
   "q-öğrenme",
   "q-learning"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bir ajanın, hangi durumda hangi eylemin uzun vadede ne kadar ödül getireceğini deneme yanılmayla öğrenmesini sağlayan klasik bir pekiştirmeli öğrenme algoritması.",
  "how": "Algoritma her durum ve eylem çifti için bir \"Q değeri\" tutar; bu, o eylemin beklenen toplam ödülünün tahminidir. Başlangıçta değerler sıfır ya da rastgeledir. Ajan bir eylem yapıp ödülü ve yeni durumu gördükçe ilgili değeri \"aldığım ödül artı yeni durumda elde edebileceğim en iyi değer\" tahminine doğru biraz çeker. Bu güncelleme çok kez tekrarlanınca değerler gerçeğe yaklaşır ve ajan her durumda en yüksek Q değerli eylemi seçer. Ortamın kurallarını önceden bilmesi gerekmez.",
  "why": "Q-öğrenme, pekiştirmeli öğrenmenin en temel ve en çok anlatılan algoritmalarından biridir. Q değerlerini tablo yerine sinir ağıyla tahmin eden derin Q ağları (DQN), DeepMind'ın Atari oyunlarını oynayan sistemiyle tanındı. Çalışma mantığını anlamak, daha karmaşık ajanları kavramayı da kolaylaştırır.",
  "example": "Basit bir labirent oyununda ajan, her kareden hangi yöne gitmenin çıkışa daha çabuk ulaştırdığını bir Q tablosunda zamanla öğrenir.",
  "faq": [
   [
    "Q-öğrenmedeki Q ne anlama gelir?",
    "Genellikle İngilizce \"quality\" (kalite) sözcüğünün kısaltması olarak açıklanır. Q değeri, bir durumda belirli bir eylemi yapmanın ne kadar iyi olduğunu gösterir."
   ],
   [
    "Q-öğrenme büyük problemlerde neden tablo kullanamaz?",
    "Durum ve eylem sayısı çok büyüdüğünde tabloyu tutmak ve her hücreyi yeterince denemek imkânsızlaşır. Bu yüzden Q değerlerini yaklaşık olarak tahmin eden derin sinir ağları kullanılır."
   ]
  ]
 },
 {
  "slug": "politika-gradyani",
  "term": "Politika gradyanı",
  "en": "policy gradient",
  "match": [
   "politika gradyanı",
   "policy gradient"
  ],
  "cat": "Matematiksel temeller",
  "def": "Ajanın davranış kuralını, yani politikasını, değer tablosu üzerinden değil doğrudan ayarlayarak iyileştiren pekiştirmeli öğrenme yöntemleri ailesi.",
  "how": "Politika çoğunlukla bir sinir ağıdır; duruma bakıp eylemlerin olasılıklarını verir. Ajan bu politikayla birkaç deneme oynar ve her denemenin ne kadar ödül getirdiğini ölçer. Sonra ağın ağırlıkları, yüksek ödüllü denemelerdeki eylemlerin olasılığı artacak, düşük ödüllü olanlarınki azalacak yönde, gradyan yöntemiyle küçük adımlarla güncellenir. Bu döngü tekrarlandıkça politika iyileşir. Eylem seçimi olasılıklı olduğu için yöntem sürekli eylem alanlarında da rahat çalışır.",
  "why": "Robot kontrolü gibi sürekli hareket gerektiren işlerde politika gradyanı doğal bir seçimdir. Sohbet modellerini insan geri bildirimiyle eğitmekte kullanılan yöntemlerden biri olan PPO da bu aileye girer. Bu nedenle büyük dil modellerinin hizalanması üzerine haberlerde dolaylı olarak sık karşılaşılır.",
  "example": "Simülasyonda yürümeyi öğrenen bir robot, düşmeden ilerlediği denemelerdeki hareketlerin olasılığını artırarak zamanla dengeli bir yürüyüş geliştirir.",
  "faq": [
   [
    "Politika gradyanı ile Q-öğrenme arasındaki fark ne?",
    "Q-öğrenme önce eylemlerin değerini öğrenir, sonra en değerli olanı seçer. Politika gradyanı ise hangi eylemi seçeceğini söyleyen kuralı doğrudan öğrenir ve değer tahminine ihtiyaç duymaz."
   ],
   [
    "Politika gradyanı yöntemlerinin zayıf yanı nedir?",
    "Denemelerin sonuçları şansa bağlı olduğu için gradyan tahmini gürültülü olur; bu da eğitimi yavaş ve kararsız yapabilir. Bu yüzden gürültüyü azaltmaya yönelik çeşitli teknikler kullanılır."
   ]
  ]
 },
 {
  "slug": "kesif-ve-somuru-ikilemi",
  "term": "Keşif ve sömürü ikilemi",
  "en": "exploration-exploitation tradeoff",
  "match": [
   "keşif ve sömürü",
   "exploration-exploitation"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bir ajanın ya da karar vericinin, bildiği en iyi seçeneği kullanmak ile daha iyisi olabilecek yeni seçenekleri denemek arasında kaldığı temel gerilim.",
  "how": "Pekiştirmeli öğrenmede ajan hangi eylemin iyi olduğunu denemeden bilemez. Hep bilinen en iyi eylemi seçerse (sömürü) daha iyisini hiç bulamayabilir; sürekli yeni şeyler denerse (keşif) kazancını biriktiremez. Pratikte bu dengeyi kurmak için basit kurallar kullanılır. Örneğin epsilon-açgözlü yöntemde ajan küçük bir olasılıkla rastgele eylem seçer, geri kalan zamanlarda en iyi bildiğini yapar. Çoğu zaman başta daha çok keşif, sonraları daha çok sömürü tercih edilir.",
  "why": "Denge yanlış kurulursa ajan ya vasat bir çözüme takılıp kalır ya da öğrendiğini hiç kullanamaz. Öneri sistemleri, reklam gösterimi ve klinik deneyler gibi uygulamalarda aynı sorun ortaya çıkar. Pekiştirmeli öğrenmenin en temel tasarım sorularından biridir.",
  "example": "Bir müzik uygulaması kullanıcıya hep en çok dinlediği türden şarkı sunarsa sömürü yapar; ara sıra tanımadığı bir türü denerse keşif yapmış olur.",
  "faq": [
   [
    "Çok kollu haydut problemi bu ikilemle nasıl ilişkilidir?",
    "Çok kollu haydut, kazanç oranı bilinmeyen birkaç slot makinesinden hangisinin oynanacağına karar verme problemidir. İkilemin en yalın ve en çok incelenen biçimidir."
   ],
   [
    "İnsanlar da bu ikilemi yaşar mı?",
    "Evet. Hep gittiğiniz sevdiğiniz restorana gitmek sömürü, yeni bir restoranı denemek keşiftir. İkisi arasındaki tercih günlük hayatta da sürekli karşımıza çıkar."
   ]
  ]
 },
 {
  "slug": "monte-carlo-agac-aramasi",
  "term": "Monte Carlo ağaç araması",
  "en": "Monte Carlo tree search",
  "match": [
   "monte carlo ağaç araması",
   "monte carlo tree search"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bir oyunda ya da planlama probleminde olası hamleleri ağaç biçiminde tarayan, hangi dalın umut verici olduğunu rastgele simülasyonlarla tahmin eden arama yöntemi.",
  "how": "Algoritma, mevcut durumdan başlayarak dört adımı tekrar tekrar uygular. Önce şimdiye kadar iyi sonuç vermiş bir dal seçilir, sonra bu dala yeni bir hamle eklenir. Ardından oyun o noktadan rastgele ya da basit kurallarla sonuna kadar oynatılır. Sonuçta kazanılıp kazanılmadığı, izlenen yol boyunca geriye doğru işlenir ve dalların puanı güncellenir. Binlerce tekrardan sonra en çok denenen ve en iyi sonuç veren hamle seçilir. Her dalı eşit taramak yerine umut verici olanlara daha çok zaman ayrıldığı için dev ağaçlarda da iş görür.",
  "why": "Go gibi olası konum sayısı çok büyük oyunlarda her hamleyi sonuna kadar hesaplamak mümkün değildir; bu yöntem sınırlı hesap gücüyle makul kararlar almayı sağlar. Sinir ağlarıyla birleştirilince oyun yapay zekasında büyük bir sıçrama getirdi. Planlama ve karar problemlerinde de kullanılır.",
  "example": "DeepMind'in AlphaGo programı, hamle seçerken sinir ağlarının tahminlerini Monte Carlo ağaç araması ile birleştirdi.",
  "faq": [
   [
    "Yöntemin adındaki Monte Carlo ne anlama geliyor?",
    "Ad, rastgele örneklemeye dayanan Monte Carlo yöntemlerinden gelir ve kumarhaneleriyle ünlü Monte Carlo şehrine gönderme yapar. Burada rastgelelik, hamlelerin sonucunu tahmin etmek için kullanılır."
   ],
   [
    "Her oyunda işe yarar mı?",
    "En çok kuralları net, sıra tabanlı oyunlarda işe yarar. Gizli bilgi bulunan oyunlarda ya da simülasyonun pahalı olduğu durumlarda yöntemin uyarlanması gerekir."
   ]
  ]
 },
 {
  "slug": "evrimsel-algoritma",
  "term": "Evrimsel algoritma",
  "en": "evolutionary algorithm",
  "match": [
   "evrimsel algoritma",
   "evolutionary algorithm"
  ],
  "cat": "Matematiksel temeller",
  "def": "Doğal seçilimden esinlenerek aday çözümlerden oluşan bir topluluğu nesiller boyunca değiştirip eleyen ve giderek daha iyi çözümler bulmaya çalışan optimizasyon yöntemleri ailesi.",
  "how": "Süreç, rastgele üretilmiş bir aday çözüm kümesiyle başlar. Her adayın ne kadar iyi olduğu bir uygunluk ölçütüyle puanlanır. Puanı yüksek olanlar bir sonraki nesle ebeveyn olarak seçilir; bunlardan karıştırma ve küçük rastgele değişiklikler (mutasyon) yoluyla yeni adaylar türetilir. Zayıf adaylar elenir ve döngü yeni nesille tekrarlanır. Türev hesaplamak gerekmediği için, sonucun pürüzlü olduğu ya da kapalı bir kutudan geldiği problemlerde de uygulanabilir.",
  "why": "Gradyan inişinin uygulanamadığı, arama uzayının kesikli ya da çok karmaşık olduğu problemlerde elverişli bir alternatiftir. Sinir ağı mimarisi araması, robot tasarımı ve çizelgeleme gibi alanlarda kullanılır. Kesin olarak en iyi sonucu garanti etmez, ama çoğu zaman yeterince iyi çözümlere ulaşır.",
  "example": "Bir fabrikada yüzlerce siparişin makinelere dağıtımı, rastgele çizelgelerle başlayıp her nesilde en kısa toplam süreyi veren çizelgelerin harmanlanmasıyla iyileştirilebilir.",
  "faq": [
   [
    "Evrimsel algoritma ile genetik algoritma arasındaki fark nedir?",
    "Genetik algoritma, evrimsel algoritmaların en tanınmış türüdür; çözümleri dizi biçiminde kodlar. Evrimsel algoritma ise genetik programlama ve evrim stratejileri gibi başka yaklaşımları da kapsayan daha geniş bir çatıdır."
   ],
   [
    "Evrimsel algoritmalar derin öğrenmenin yerini alabilir mi?",
    "Genellikle hayır. Ağırlıkları eğitmek için gradyan tabanlı yöntemler çok daha verimlidir. Evrimsel yöntemler daha çok mimari ve hiperparametre arama gibi türev alınamayan işlerde tercih edilir."
   ]
  ]
 },
 {
  "slug": "genetik-algoritma",
  "term": "Genetik algoritma",
  "en": "genetic algorithm",
  "match": [
   "genetik algoritma",
   "genetic algorithm"
  ],
  "cat": "Matematiksel temeller",
  "def": "Çözümleri kromozom adı verilen sayı dizileri olarak kodlayıp çaprazlama ve mutasyonla nesiller boyunca geliştiren, evrimsel algoritmaların en tanınmış türü.",
  "how": "Her aday çözüm bir dizi olarak temsil edilir; örneğin bir güzergâhta uğranacak durakların sırası. Başlangıçta rastgele dizilerden oluşan bir topluluk yaratılır ve her dizi bir uygunluk işleviyle puanlanır. İyi puan alanlar eşleştirilir, iki dizinin parçaları birleştirilerek çocuk diziler üretilir (çaprazlama). Bazı genler küçük bir olasılıkla rastgele değiştirilir (mutasyon); böylece çeşitlilik korunur. Birkaç yüz nesil sonra topluluk genellikle iyi bir çözüme yaklaşır.",
  "why": "Olası çözüm sayısının çok büyük olduğu kombinatoryal optimizasyon problemlerinde pratik bir araçtır. Kurulumu basittir ve problemin matematiksel yapısı hakkında az bilgi gerektirir. Öte yandan yerel bir çözümde takılabilir ve çok sayıda uygunluk hesabı gerektirdiği için yavaş kalabilir.",
  "example": "Bir kargo şirketi, onlarca teslimat noktasını en kısa sürede dolaşacak rotayı bulmak için gezgin satıcı probleminin bir türünü genetik algoritmayla çözebilir.",
  "faq": [
   [
    "Genetik algoritma en iyi çözümü garanti eder mi?",
    "Hayır. Yöntem rastgelelik içerdiği için her çalıştırmada farklı bir sonuç verebilir ve yerel bir çözümde takılabilir. Genellikle kesin en iyiyi değil, yeterince iyi bir çözümü makul sürede bulmak için kullanılır."
   ],
   [
    "Neden \"genetik\" deniyor?",
    "Yöntem, canlılardaki gen, kromozom, çaprazlama ve mutasyon kavramlarından esinlenir. Gerçek biyolojiyi birebir taklit etmez; yalnızca evrim sürecinin mantığını bir arama tekniğine uyarlar."
   ]
  ]
 },
 {
  "slug": "bulanik-mantik",
  "term": "Bulanık mantık",
  "en": "fuzzy logic",
  "match": [
   "bulanık mantık",
   "fuzzy logic"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bir önermenin yalnızca doğru ya da yanlış olmasını değil, sıfır ile bir arasında kısmen doğru olabilmesini de kabul ederek belirsiz, derecelendirilmiş ifadelerle hesap yapmayı sağlayan mantık.",
  "how": "Bulanık mantıkta bir değer, bir kümeye belli bir üyelik derecesiyle aittir. Örneğin 28 derece, \"sıcak\" kümesine 0,7, \"ılık\" kümesine 0,3 derecesinde ait sayılabilir. Uzmanın diliyle yazılmış \"hava sıcaksa fanı hızlı çalıştır\" gibi kurallar bu derecelerle birlikte değerlendirilir. Tüm kuralların çıktıları birleştirilir ve sonunda fan hızı gibi tek bir net değere dönüştürülür. Böylece keskin eşikler yerine yumuşak geçişler elde edilir.",
  "why": "Kesin bir matematiksel model kurmanın zor olduğu denetim sistemlerinde yaygın biçimde kullanıldı. Uzman bilgisinin kurallara dökülmesi sayesinde yorumlanabilir olması da bir artısıdır. Günümüzde büyük derin öğrenme modelleri öne çıksa da bulanık mantık, belirsizlikle uğraşan sistemlerde hâlâ başvurulan bir yaklaşımdır.",
  "example": "Bazı çamaşır makineleri ve klimalar, yük miktarı ya da oda sıcaklığı gibi girdilere göre su ve gücü kademesiz ayarlamak için bulanık denetleyiciler kullanır.",
  "faq": [
   [
    "Bulanık mantık ile olasılık aynı şey mi?",
    "Hayır. Olasılık, bir olayın gerçekleşme ihtimalini ifade eder. Bulanık mantık ise bir şeyin bir kavrama ne ölçüde uyduğunu, yani \"sıcak\" ya da \"uzun\" gibi kavramların derecesini ölçer."
   ],
   [
    "Bulanık mantığı kim geliştirdi?",
    "Bulanık kümeler fikrini 1960'larda Lotfi Zadeh ortaya attı. Zadeh'in önerisi, daha sonra denetim mühendisliği ve yapay zeka alanlarında geniş uygulama buldu."
   ]
  ]
 },
 {
  "slug": "evrensel-yaklasim-teoremi",
  "term": "Evrensel yaklaşım teoremi",
  "en": "universal approximation theorem",
  "match": [
   "evrensel yaklaşım teoremi",
   "universal approximation theorem"
  ],
  "cat": "Matematiksel temeller",
  "def": "Yeterince geniş bir yapay sinir ağının, uygun koşullar altında, çok çeşitli sürekli işlevleri istenen doğrulukta yaklaşık olarak temsil edebileceğini söyleyen matematiksel sonuç.",
  "how": "Teorem, tek gizli katmanlı bir ileri beslemeli ağın, uygun bir doğrusal olmayan etkinleştirme işlevine ve yeterince çok nörona sahipse, belirli bir bölgedeki herhangi bir sürekli işlevi istenen hassasiyetle yaklaştırabileceğini gösterir. Sezgisel olarak her nöron küçük bir eğri parçası üretir; bu parçalar toplanınca karmaşık bir şekil ortaya çıkar. Küçük bloklarla herhangi bir yüzeyi taklit etmeye benzer. Teorem yalnızca böyle bir ağın var olduğunu söyler; ağırlıkların nasıl bulunacağını söylemez.",
  "why": "Sinir ağlarının neden bu kadar esnek olduğunu açıklayan temel dayanaklardan biridir. Ancak ağın ne kadar büyük olması gerektiğini, eğitimle bulunup bulunamayacağını ve yeni verilerde iyi çalışıp çalışmayacağını garanti etmez. Bu yüzden \"sinir ağı her şeyi öğrenir\" türü iddialara temkinli yaklaşmak gerekir.",
  "example": "Konut fiyatını metrekare, konum ve yaş gibi girdilerden veren karmaşık bir ilişki, kuramsal olarak yeterince geniş bir ağla istenen yakınlıkta temsil edilebilir; ama bu, ağın eğitimle bulunacağı anlamına gelmez.",
  "faq": [
   [
    "Teorem, her sinir ağının her şeyi öğrenebileceği anlamına mı gelir?",
    "Hayır. Teorem yalnızca uygun bir ağın var olduğunu söyler. Eğitim verisinin yeterliliği, eniyileme sürecinin başarısı ve genelleme gibi pratik sorular teoremin kapsamı dışındadır."
   ],
   [
    "Tek gizli katman yetiyorsa neden derin ağlar kullanılıyor?",
    "Teorem, tek katmanın çok geniş olması gerekebileceğini kabul eder. Pratikte derin ağlar, birçok işlevi çok daha az parametreyle ve daha kolay öğrenilebilir biçimde temsil edebilir."
   ]
  ]
 },
 {
  "slug": "nedensel-cikarim",
  "term": "Nedensel çıkarım",
  "en": "causal inference",
  "match": [
   "nedensel çıkarım",
   "causal inference"
  ],
  "cat": "Matematiksel temeller",
  "def": "Veriden yalnızca iki şeyin birlikte değiştiğini değil, birinin diğerine gerçekten yol açıp açmadığını anlamayı amaçlayan istatistik ve yapay zeka alanı.",
  "how": "En güvenilir yol, katılımcıları rastgele gruplara ayırıp bir müdahaleyi yalnızca bir gruba uygulayan kontrollü deneydir. Deney yapılamadığında gözlem verisi kullanılır ve sonucu etkileyebilecek diğer etkenler (karıştırıcı değişkenler) dikkatle hesaba katılır. Bunun için neden-sonuç varsayımlarını oklarla gösteren nedensel diyagramlar ve eşleştirme gibi istatistiksel teknikler kullanılır. Judea Pearl'ün çalışmaları alanın biçimlenmesinde etkili oldu. Amaç, \"müdahale etseydik ne olurdu?\" sorusunu yanıtlamaktır.",
  "why": "Makine öğrenmesi modelleri çoğunlukla ilişkileri yakalar, nedenleri değil; bu da sağlık, ekonomi ve kamu politikası gibi alanlarda yanıltıcı kararlara yol açabilir. Nedensel düşünce, bir ilacın ya da politikanın gerçek etkisini ölçmek ve modellerin değişen koşullarda sağlam kalmasını sağlamak için giderek daha fazla önem kazanıyor.",
  "example": "Yaz aylarında dondurma satışları ile boğulma vakaları birlikte artar; nedensel bakış, ortak etkenin sıcak hava olduğunu ve dondurmanın boğulmaya yol açmadığını ayırt etmeyi hedefler.",
  "faq": [
   [
    "Korelasyon ile nedensellik arasındaki fark nedir?",
    "Korelasyon, iki değişkenin birlikte değiştiğini gösterir. Nedensellik ise birindeki değişimin diğerini gerçekten etkilediğini ifade eder. Üçüncü bir etken ikisini birden etkiliyor olabilir ve bu durumda ilişki nedensel olmaz."
   ],
   [
    "Nedensel çıkarım için mutlaka deney yapmak gerekir mi?",
    "Rastgele kontrollü deney en sağlam yoldur, ama her zaman mümkün ya da etik değildir. Gözlem verisiyle de nedensel çıkarım yapılabilir; yalnızca bu, daha güçlü varsayımlara dayanır ve bu varsayımların açıkça belirtilmesini gerektirir."
   ]
  ]
 },
 {
  "slug": "agirlik-azaltma",
  "term": "Ağırlık azaltma (weight decay)",
  "en": "weight decay",
  "match": [
   "weight decay",
   "ağırlık azaltma"
  ],
  "cat": "Matematiksel temeller",
  "def": "Sinir ağı eğitilirken ağırlıkların her adımda hafifçe sıfıra doğru çekilmesiyle büyük değerler almasını engelleyen, aşırı öğrenmeyi azaltmaya yönelik bir düzenlileştirme tekniği.",
  "how": "Eğitimde model ağırlıkları, hatayı azaltacak yönde güncellenir. Ağırlık azaltmada buna ek olarak her güncellemede ağırlıklar küçük bir oranda küçültülür; yani model büyük ağırlıklara ancak veri bunu açıkça gerektiriyorsa sahip olabilir. Bu, daha yalın işlevlerin tercih edilmesi anlamına gelir. Klasik gradyan inişinde L2 düzenlileştirmeyle benzer sonuç verir; uyarlamalı eniyileyicilerde ise ikisi farklılaşır ve ağırlık azaltmayı güncellemeden ayrı uygulayan AdamW yaygındır. Azaltma oranı bir hiperparametredir.",
  "why": "Büyük modeller, dil modelleri dahil, eğitim verisini ezberleyip yeni verilerde kötü sonuç verebilir. Ağırlık azaltma, ucuz ve uygulaması kolay olduğu için modern eğitim tariflerinde sıkça yer alır. Oranın fazla yüksek seçilmesi ise modelin yeterince öğrenmesini engelleyebilir.",
  "example": "Bir dil modeli eğitilirken AdamW eniyileyicisinde sıfırdan farklı bir ağırlık azaltma değeri ayarlamak yaygın bir uygulamadır.",
  "faq": [
   [
    "Ağırlık azaltma ile L2 düzenlileştirme aynı şey mi?",
    "Basit gradyan inişinde iki yöntem eşdeğerdir. Adam gibi uyarlamalı eniyileyicilerde ise farklı davranırlar; bu yüzden ağırlık azaltmayı ayrı uygulayan AdamW geliştirilmiştir."
   ],
   [
    "Ağırlık azaltma oranı nasıl seçilir?",
    "Oran genellikle deneme yoluyla, doğrulama verisindeki başarıya bakılarak ayarlanır. Çok düşük olursa etkisi kalmaz, çok yüksek olursa model yeterince öğrenemez."
   ]
  ]
 },
 {
  "slug": "bilgi-teorisi",
  "term": "Bilgi teorisi",
  "en": "information theory",
  "match": [
   "bilgi teorisi",
   "information theory"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bilginin nicel olarak ölçülmesini, depolanmasını ve iletilmesini inceleyen matematik dalı; belirsizlik, sıkıştırma ve gürültülü ortamda iletişim gibi sorulara yanıt arar.",
  "how": "Claude Shannon, 1948'de yayımladığı çalışmayla alanı kurdu. Temel fikir, bir olayın ne kadar şaşırtıcı olduğunun bilgi miktarını belirlemesidir: nadir bir olay, sık görülen bir olaydan daha fazla bilgi taşır. Bu şaşırtıcılığın ortalaması entropi olarak adlandırılır ve bir kaynağı sıkıştırmak için gereken en az bit sayısına karşılık gelir. Çapraz entropi ve KL ıraksaması gibi kavramlar ise iki olasılık dağılımının birbirinden ne kadar uzak olduğunu ölçer.",
  "why": "Dosya sıkıştırma, hata düzeltme ve veri iletimi bilgi teorisine dayanır. Yapay zekada ise sınıflandırma ve dil modellerinin eğitiminde kullanılan çapraz entropi kayıp işlevi doğrudan bu alandan gelir. Modellerin ne kadar \"şaşırdığını\" ölçen karmaşıklık (perplexity) ölçütü de aynı mantığa dayanır.",
  "example": "Bir dil modeli bir sonraki kelimeyi tahmin ederken ne kadar yanılıyorsa, eğitim sırasında en aza indirilen çapraz entropi kaybı da o kadar yüksek çıkar.",
  "faq": [
   [
    "Bilgi teorisindeki entropi, fizikteki entropiyle aynı mı?",
    "Aynı değil, ama akrabadırlar. İki kavramın formülleri benzerdir ve ikisi de düzensizlik ya da belirsizlik düşüncesine dayanır; yine de farklı alanlarda, farklı amaçlarla kullanılırlar."
   ],
   [
    "Bilgi teorisi yapay zekada nerede karşımıza çıkar?",
    "En belirgin yeri, sınıflandırma ve dil modellerinde kullanılan çapraz entropi kaybıdır. Ayrıca veri sıkıştırma, karmaşıklık ölçütü ve iki olasılık dağılımının karşılaştırılması gibi konularda da kullanılır."
   ]
  ]
 },
 {
  "slug": "grokking",
  "term": "Grokking",
  "en": "grokking",
  "match": [
   "grokking"
  ],
  "cat": "Matematiksel temeller",
  "def": "Bir sinir ağının eğitim verisini çoktan ezberlemesine rağmen, çok daha uzun süre eğitildikten sonra birdenbire yeni verilerde de doğru sonuç vermeye başlaması olgusu.",
  "how": "Eğitimin başında model örnekleri ezberler: eğitim hatası sıfıra yaklaşır, ama görmediği verilerdeki başarı düşük kalır. Eğitim sürdükçe, özellikle ağırlık azaltma (weight decay) gibi düzenlileştirme yöntemleri kullanıldığında, ağ ezberci çözümden daha sade ve genel bir çözüme yavaş yavaş geçer. Bu geçiş dışarıdan bakıldığında sınama başarısında ani bir sıçrama gibi görünür. Olgu ilk kez modüler toplama gibi küçük algoritmik görevlerde gözlemlendi.",
  "why": "Grokking, aşırı öğrenme belirtisi görülünce eğitimi durdurmanın her zaman doğru olmadığını düşündürür. Modellerin içinde neyin, ne zaman öğrenildiğini anlamaya çalışan yorumlanabilirlik araştırmalarında sık anılan bir örnektir. Büyük dil modelleri için ne kadar geçerli olduğu ise hâlâ tartışılıyor.",
  "example": "Modüler toplama işlemini öğrenen küçük bir ağ, eğitimdeki toplamları ezberledikten binlerce adım sonra daha önce görmediği toplamları da doğru yapmaya başlayabilir.",
  "faq": [
   [
    "Grokking ile aşırı öğrenme aynı şey mi?",
    "Hayır. Aşırı öğrenmede model eğitim verisini ezberler ve yeni verilerde başarısız kalır. Grokking'de ise ezberleme aşamasından sonra eğitim sürdürüldüğünde genelleme sonradan ortaya çıkar."
   ],
   [
    "Grokking büyük dil modellerinde de görülüyor mu?",
    "Olgu en net biçimde küçük ve kurallı görevlerde gösterildi. Büyük modellerde benzer gecikmeli öğrenme örüntülerine dair çalışmalar var, ancak ne ölçüde geçerli olduğu hâlâ araştırılıyor."
   ]
  ]
 },
 {
  "slug": "cift-inis",
  "term": "Çift iniş (double descent)",
  "en": "double descent",
  "match": [
   "çift iniş",
   "double descent"
  ],
  "cat": "Matematiksel temeller",
  "def": "Model büyüklüğü, veri miktarı ya da eğitim süresi arttıkça sınama hatasının önce düşüp, sonra yükselip, ardından yeniden düşmesi olgusu; klasik U biçimli beklentiden sapar.",
  "how": "Klasik görüşe göre model büyüdükçe hata önce azalır, sonra aşırı öğrenme yüzünden artar. Çift inişte bu yükselişin ardından üçüncü bir aşama gelir. Model eğitim verisini tam olarak ezberleyebilecek boyuta yaklaştığında sınama hatası tepe yapar. Boyut bu eşiği aşıp büyümeye devam ettiğinde ise ezberleyen çok sayıda çözüm arasından daha düzgün olanlar seçilme eğilimindedir ve hata yeniden düşer. Aynı örüntü veri miktarı ya da eğitim süresi değiştirilerek de gözlemlenebilir.",
  "why": "Çift iniş, parametre sayısı veri örneği sayısını aşan devasa sinir ağlarının neden hâlâ iyi genelleme yapabildiği sorusuna ışık tutar. Eski 'daha büyük model, daha çok aşırı öğrenme' sezgisinin her durumda geçerli olmadığını gösterir. Bu yüzden modern derin öğrenme kuramında sık tartışılır.",
  "example": "Küçük bir görüntü sınıflandırma veri kümesinde ağın genişliği kademeli artırıldığında, sınama hatası belli bir genişlikte yükselip daha geniş ağlarda yeniden düşebilir.",
  "faq": [
   [
    "Çift iniş ile grokking arasındaki fark nedir?",
    "İkisi de genellemenin beklenmedik biçimde iyileşmesiyle ilgilidir. Çift iniş, model boyutu, veri ya da eğitim süresine göre sınama hatası eğrisinin biçimini anlatır; grokking ise ezberlemeden sonra ani bir genelleme sıçramasını tarif eder."
   ],
   [
    "Çift iniş her modelde görülür mü?",
    "Hayır. Veri gürültüsü, model türü ve düzenlileştirme gibi etkenlere bağlıdır; bazı kurulumlarda tepe belirgin olur, bazılarında neredeyse hiç görünmez."
   ]
  ]
 },
 {
  "slug": "metinden-goruntu-uretimi",
  "term": "Metinden görüntü üretimi",
  "en": "text-to-image",
  "match": [
   "metinden görüntü",
   "text-to-image",
   "metinden görsel"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Yazılı bir tarif ya da istemden (prompt) yola çıkarak sıfırdan yeni bir görüntü oluşturan yapay zeka yaklaşımı. Sonuç fotoğraf, illüstrasyon ya da çizim tarzında olabilir.",
  "how": "Önce istem, bir dil modeliyle anlamı yakalayan sayısal bir temsile dönüştürülür. Görüntü üretici model, çoğunlukla difüzyon yöntemiyle, rastgele gürültüden başlar ve bu temsilin yönlendirmesiyle gürültüyü adım adım temizleyerek görüntüyü ortaya çıkarır. Model, eğitimde çok sayıda görsel ile açıklamasının eşleştirildiği örnekleri görerek sözcüklerle görsel öğeler arasındaki ilişkiyi öğrenir. Başlangıçtaki rastgelelik yüzünden aynı istem her seferinde farklı sonuç verebilir.",
  "why": "Görsel içerik üretimini, uzman yazılımı ve çizim becerisi gerektiren bir işten birkaç cümle yazmaya indirdi. Reklam, oyun, yayıncılık ve tasarımda hızlı taslak çıkarmak için kullanılıyor. Aynı zamanda telif, sahte görseller ve sanatçıların emeği gibi tartışmaları da gündeme getiriyor.",
  "example": "DALL·E, Midjourney ya da Stable Diffusion gibi bir araca 'gün batımında sisli bir Boğaz, yağlı boya' yazıldığında birkaç saniyede buna uygun bir görüntü çıkar.",
  "faq": [
   [
    "Aynı istemle neden her seferinde farklı görüntü çıkıyor?",
    "Üretim rastgele bir gürültüden başlar. Başlangıç noktası değiştikçe sonuç da değişir; bazı araçlarda aynı başlangıç değeri (seed) sabitlenerek benzer çıktı almak mümkündür."
   ],
   [
    "Yapay zekayla üretilen görüntülerin telif durumu nedir?",
    "Bu konu ülkeden ülkeye değişiyor ve hâlâ tartışılıyor. Hem eğitim verisinde telifli işlerin kullanılması hem de üretilen görüntünün kime ait olacağı sorusu, hukuki ve kültürel olarak farklı görüşlerle ele alınıyor."
   ]
  ]
 },
 {
  "slug": "metinden-video-uretimi",
  "term": "Metinden video üretimi",
  "en": "text-to-video",
  "match": [
   "metinden video",
   "text-to-video"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Yazılı bir istemden hareketli, birbirini izleyen kareler hâlinde kısa bir video klip üreten yapay zeka yaklaşımı. Sahne, kamera hareketi ve tarz istemde tarif edilir.",
  "how": "Yöntem metinden görüntü üretimine benzer, ama işin içine zaman girer. Model, istemin temsilinden yola çıkıp yalnızca tek bir kare değil, bir kare dizisini birlikte oluşturur; çoğu sistemde bu işlem sıkıştırılmış bir ara uzayda ve difüzyon mantığıyla yürür. Asıl zorluk kareler arası tutarlılıktır: nesnelerin biçimi, ışık ve hareket kareden kareye uyumlu kalmalıdır. Eğitimde çok sayıda video ve açıklaması kullanılır. Hesaplama maliyeti yüksek olduğundan çıktılar genellikle kısa sürelidir.",
  "why": "Film, reklam ve sosyal medya içeriği üretiminin maliyetini ve süresini değiştirme potansiyeli taşıyor; OpenAI'ın Sora'sı ve Google DeepMind'ın Veo'su gibi sistemler haberlerde sık geçiyor. Gerçekçi sahte videolar üretilebilmesi ise yanıltıcı içerik ile filigran ve etiketleme gibi konuları öne çıkarıyor.",
  "example": "'Yağmurlu bir İstanbul sokağında şemsiyeyle yürüyen kadın, kamera yavaşça yaklaşıyor' istemi birkaç saniyelik bir klibe dönüştürülebilir.",
  "faq": [
   [
    "Metinden video üretimi neden metinden görüntü üretiminden daha zordur?",
    "Video, tek bir görüntü yerine zaman içinde birbiriyle uyumlu çok sayıda kare gerektirir. Nesnelerin biçiminin ve hareketin tutarlı kalması zorlaşır, hesaplama maliyeti de ciddi biçimde artar."
   ],
   [
    "Bir videonun yapay zekayla üretildiği nasıl anlaşılır?",
    "Bozuk fizik ya da tutarsız ayrıntılar ipucu olabilir ama modeller geliştikçe bu yöntem güvenilir olmaktan çıkıyor. Bu yüzden filigran ve içerik kimliği gibi etiketleme yöntemleri üzerinde çalışılıyor."
   ]
  ]
 },
 {
  "slug": "goruntuden-video-uretimi",
  "term": "Görüntüden video üretimi",
  "en": "image-to-video",
  "match": [
   "görüntüden video",
   "image-to-video",
   "görselden video"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Elde hazır bir fotoğraf ya da görseli başlangıç noktası alıp ona hareket kazandırarak kısa bir videoya dönüştüren yapay zeka yaklaşımı. Hareket çoğu zaman ek bir metin istemiyle yönlendirilir.",
  "how": "Kullanıcı bir görsel yükler; model bu görseli videonun ilk karesi ya da ana referansı olarak kabul eder. Ardından görüntüdeki nesne, kişi ve mekânın görünümünü koruyacak biçimde sonraki kareleri üretir. İstemde 'kamera geriye çekilsin' ya da 'yapraklar rüzgârda sallansın' gibi yönlendirmeler verilebilir. Metinden video üretiminde görünümü büyük ölçüde modelin hayal gücü belirlerken burada görünümün çoğu baştan bellidir; bu da kontrolü artırır.",
  "why": "Mevcut bir ürün fotoğrafı, çizim ya da portre gibi malzemelerle çalışmayı mümkün kıldığı için tasarım ve reklam işlerinde daha fazla kontrol sağlar. Öte yandan gerçek bir kişinin fotoğrafının izinsiz canlandırılması rıza, itibar ve sahte içerik sorunlarını doğurur.",
  "example": "Bir ürün fotoğrafı yüklenip 'kamera ürünün etrafında yavaşça dönsün' denildiğinde, görselden birkaç saniyelik bir tanıtım klibi elde edilebilir.",
  "faq": [
   [
    "Görüntüden video üretimi metinden video üretiminden nasıl ayrılır?",
    "Metinden video üretiminde her şey istemden doğar. Görüntüden video üretiminde ise başlangıç görseli sahnenin görünümünü büyük ölçüde belirler, model asıl olarak hareketi ekler."
   ],
   [
    "Bir kişinin fotoğrafından video üretmek sorun yaratır mı?",
    "Kişinin izni olmadan yapılırsa itibar, kişilik hakları ve sahte içerik açısından ciddi sorunlar doğabilir. Kurallar ülkeden ülkeye değişir; birçok platform da bu tür kullanımları kısıtlayan politikalar uygular."
   ]
  ]
 },
 {
  "slug": "metinden-konusmaya",
  "term": "Metinden konuşmaya (TTS)",
  "en": "text-to-speech",
  "match": [
   "metinden konuşma",
   "metinden sese",
   "text-to-speech",
   "seslendirme motor"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Yazılı metni insan sesine benzeyen yapay bir konuşmaya çeviren teknoloji. Sesli asistanlarda, ekran okuyucularda, navigasyon uygulamalarında ve sesli kitaplarda kullanılır.",
  "how": "Sistem önce metni okunuşa uygun hâle getirir: sayılar, kısaltmalar ve noktalama konuşma diline çevrilir. Ardından bir sinir ağı, vurgu ve tonlama bilgisini de içeren bir ses temsili, çoğunlukla bir spektrogram üretir. Son aşamada 'vokoder' adı verilen bileşen bu temsili gerçek ses dalgasına dönüştürür. Yeni nesil modeller bu adımları tek bir ağda birleştirir ve birkaç saniyelik bir ses örneğinden bir kişinin sesini taklit edebilir.",
  "why": "TTS, görme engelli kullanıcıların ekranları dinleyerek kullanmasını sağlayan erişilebilirlik teknolojisinin temelidir. Sesli asistanlar, çağrı merkezi botları ve içerik seslendirme de buna dayanır. Doğal ses kalitesi arttıkça ses taklidiyle dolandırıcılık riski de büyür.",
  "example": "Navigasyon uygulamasının 'iki yüz metre sonra sağa dönün' demesi ya da bir haber sitesinin makaleyi sesli okuması TTS'e örnektir.",
  "faq": [
   [
    "TTS ile ses klonlama aynı şey mi?",
    "Değil. TTS genel olarak metni sese çevirir; ses klonlama ise belirli bir kişinin sesine benzeyen konuşma üretme becerisidir ve TTS'in özel bir kullanımıdır."
   ],
   [
    "TTS ile otomatik konuşma tanıma arasındaki fark nedir?",
    "Biri metni sese, diğeri sesi metne çevirir; yani birbirinin tersi yönde çalışırlar. Sesli asistanlar genellikle ikisini birlikte kullanır."
   ]
  ]
 },
 {
  "slug": "otomatik-konusma-tanima",
  "term": "Otomatik konuşma tanıma (ASR)",
  "en": "automatic speech recognition",
  "match": [
   "konuşma tanıma",
   "ses tanıma",
   "speech recognition",
   "=asr"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Konuşulan sözleri dinleyip yazıya döken yapay zeka teknolojisi; toplantı kayıtlarının metne çevrilmesinde, altyazı üretiminde ve sesli komutların anlaşılmasında kullanılır.",
  "how": "Ses önce sayısal bir dalga olarak kaydedilir ve çok kısa dilimlere bölünüp frekans özelliklerini gösteren bir temsile çevrilir. Eğitilmiş bir sinir ağı, çoğunlukla Transformer mimarisiyle, bu dilimleri harf ya da sözcük parçası dizisine dönüştürür. Model, eğitimde çok sayıda ses kaydı ile yazılı karşılığını görerek hangi sesin hangi yazıya denk geldiğini öğrenir. Aksan, arka plan gürültüsü ve birden fazla kişinin aynı anda konuşması doğruluğu düşüren başlıca etkenlerdir. Başarı genellikle kelime hata oranıyla ölçülür.",
  "why": "Konuşmanın yazıya çevrilmesi, sesli asistanlardan toplantı özetlerine, altyazıdan çağrı merkezi analizine kadar birçok uygulamanın ilk adımıdır. İşitme engelli kullanıcılar için erişilebilirlik sağlar. Ses kayıtları kişisel veri içerebildiğinden gizlilik de önemli bir konudur.",
  "example": "OpenAI'ın açık kaynak olarak yayımladığı Whisper modeli, bir podcast kaydını birçok dilde yazıya dökmek için kullanılabilir.",
  "faq": [
   [
    "ASR ile konuşmacı tanıma aynı şey mi?",
    "Hayır. ASR ne söylendiğini yazıya döker; konuşmacı tanıma ise sesin kime ait olduğunu belirlemeye çalışır."
   ],
   [
    "ASR doğruluğu nasıl ölçülür?",
    "Yaygın ölçüt kelime hata oranıdır: sistemin çıktısındaki yanlış, eksik ve fazla kelimelerin referans metne oranına bakılır. Oran ne kadar düşükse sonuç o kadar iyidir."
   ]
  ]
 },
 {
  "slug": "konusmadan-konusmaya-model",
  "term": "Konuşmadan konuşmaya model",
  "en": "speech-to-speech",
  "match": [
   "speech-to-speech",
   "konuşmadan konuşmaya"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Kullanıcının sesli girdisini önce yazıya çevirmeden, doğrudan sesli bir yanıta dönüştüren yapay zeka modeli türü. Girdi de çıktı da ses olarak işlenir.",
  "how": "Geleneksel sesli asistanlar üç aşamalı bir zincir izler: konuşma yazıya çevrilir (ASR), bir dil modeli yanıt yazar, sonra yanıt sese dönüştürülür (TTS). Konuşmadan konuşmaya modellerde ses, ayrık birimlere ya da sürekli temsillere çevrilir ve model yanıtı doğrudan bu ses temsilleri üzerinden üretir. Böylece tonlama, duraksama, duygu ve konuşma hızı gibi yazıya dökülünce kaybolan bilgiler korunabilir. Gecikme azalır ve kullanıcı konuşurken araya girmek daha doğal hâle gelir.",
  "why": "Gerçek zamanlı ve doğal sohbet eden sesli asistanların, canlı çevirinin ve çağrı merkezi ajanlarının arkasındaki yaklaşımlardan biri. Gecikme ve robotik ses sorunlarını azaltmayı hedefler. Öte yandan ara metin olmadığı için sistemin ne yaptığını denetlemek ve hataları ayıklamak zorlaşabilir.",
  "example": "Türkçe konuşan bir kişinin cümleleri anında İngilizce sesli çıktıya dönüşebilir; canlı çeviri bu yaklaşımın tipik uygulamalarından biridir.",
  "faq": [
   [
    "Konuşmadan konuşmaya model ile ASR, dil modeli ve TTS zinciri arasındaki fark nedir?",
    "Zincirde her aşama ayrı bir bileşendir ve aralarında yazılı metin geçer. Konuşmadan konuşmaya modelde ise ses doğrudan işlenir; bu da gecikmeyi azaltır ve tonlama gibi bilgilerin korunmasına yardımcı olur."
   ],
   [
    "Konuşmadan konuşmaya model her zaman daha mı iyi?",
    "Hayır. Gecikme ve doğallık açısından avantaj sağlayabilir, ama ara metin olmadığı için denetim, kayıt tutma ve hata ayıklama zorlaşır. Bu yüzden zincir yaklaşımı birçok uygulamada hâlâ tercih ediliyor."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-ile-muzik-uretimi",
  "term": "Yapay zeka ile müzik üretimi",
  "en": "AI music generation",
  "match": [
   "müzik üretim"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Yazılı bir tarif, ezgi ya da ses örneği gibi girdilerden yola çıkıp yeni müzik parçaları, enstrüman sesleri veya vokaller üreten yapay zeka uygulamalarının genel adı.",
  "how": "Modeller çok sayıda müzik kaydı üzerinde eğitilir ve notaların, ritmin, tınıların zaman içinde nasıl art arda geldiğini öğrenir. Kullanıcı \"yavaş tempolu, piyanolu bir film müziği\" gibi bir metin yazdığında model, bu tarife uyan bir ses dalgası ya da nota dizisi üretir. Bazı sistemler doğrudan ses çıkarır, bazıları önce MIDI gibi nota verisi üretip sonra sese çevirir. Sonuç, istemin ayrıntısına ve modelin eğitildiği verilere göre değişir.",
  "why": "Müzik üretiminin maliyetini ve süresini düşürdüğü için video, oyun ve reklam yapımcıları bu araçlara ilgi gösteriyor. Öte yandan modellerin hangi kayıtlarla eğitildiği ve sanatçıların haklarının nasıl korunacağı tartışılıyor. Haberlerde bu iki başlık sıkça birlikte geçiyor, çünkü teknik imkân hukuki ve etik soruları da beraberinde getiriyor.",
  "example": "Bir içerik üreticisi, videosu için \"sakin, akustik gitarlı bir fon müziği\" yazarak birkaç dakika içinde birkaç alternatif parça dinleyebilir.",
  "faq": [
   [
    "Yapay zekayla üretilen müziğin telif hakkı kime ait?",
    "Bu, ülkeye ve kullanılan hizmetin kullanım koşullarına göre değişiyor; konuyla ilgili hukuki tartışmalar da sürüyor. Ticari kullanımdan önce ilgili hizmetin şartlarını okumak gerekir."
   ],
   [
    "Yapay zeka müzisyenlerin yerini alacak mı?",
    "Bu konuda görüşler ayrışıyor. Bir kesim araçları yaratıcı sürece yardımcı bir imkân olarak görürken, bir kesim özellikle fon müziği gibi alanlarda iş kaybından ve eğitim verisindeki hak ihlallerinden endişe ediyor."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-ile-goruntu-duzenleme",
  "term": "Yapay zeka ile görüntü düzenleme",
  "en": "AI image editing",
  "match": [
   "görüntü düzenle"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Fotoğraf ve görsellerde nesne silme, arka plan değiştirme, rötuş ve renk düzeltme gibi işlemlerin yapay zeka modeline yaptırılması; çoğu zaman bir fırça darbesi ya da yazılı komut yeterli olur.",
  "how": "Düzenleme araçları, görüntülerin nasıl göründüğünü milyonlarca örnekten öğrenmiş modellere dayanır. Kullanıcı bir bölgeyi seçer ya da \"gökyüzünü günbatımı yap\" gibi bir komut yazar; model, görüntüyü ve komutu birlikte değerlendirip ilgili pikselleri yeniden üretir. Bazı işlemler klasik algoritmalarla, bazıları üretken modellerle yapılır. Üretken yöntemlerde sistem var olan pikselleri değiştirmekle kalmaz, olmayan ayrıntıyı sıfırdan uydurur. Sonuç genellikle birkaç saniye içinde ekrana gelir.",
  "why": "Eskiden uzmanlık ve saatler gerektiren rötuş işleri artık herkesin erişebildiği araçlarla yapılabiliyor. Bu durum e-ticaret, reklam ve sosyal medya üretimini hızlandırıyor. Aynı kolaylık, sahte ya da yanıltıcı görsellerin üretilmesini de kolaylaştırdığı için görsel doğrulama tartışmalarının merkezinde yer alıyor.",
  "example": "Bir e-ticaret satıcısı, ürün fotoğrafının dağınık arka planını tek komutla düz bir stüdyo zeminiyle değiştirebilir.",
  "faq": [
   [
    "Yapay zekayla düzenleme klasik düzenleme programlarından nasıl ayrılır?",
    "Klasik araçlarda kullanıcı pikselleri elle ya da hazır filtrelerle değiştirir. Yapay zeka destekli araçlarda ise model, istenen sonucu tahmin ederek eksik ya da yeni ayrıntıyı kendisi üretir."
   ],
   [
    "Düzenlenmiş bir görselin gerçek olup olmadığı anlaşılabilir mi?",
    "Her zaman kolay değil. Bazı platformlar ve araçlar görsele yapay zeka kullanıldığını belirten etiket ya da meta veri ekliyor, ancak bunlar silinebiliyor; bu yüzden kaynağı doğrulamak önemli kalıyor."
   ]
  ]
 },
 {
  "slug": "ic-boyama",
  "term": "İç boyama (inpainting)",
  "en": "inpainting",
  "match": [
   "inpainting",
   "iç boyama"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Görüntüde seçilen bir bölgeyi silip, çevresindeki içeriğe uyacak biçimde yapay zekayla yeniden dolduran teknik; kusur giderme, nesne çıkarma ya da değiştirme için kullanılır.",
  "how": "Kullanıcı düzenlenecek alanı fırçayla boyayarak bir maske oluşturur. Model, maskenin dışında kalan pikselleri bağlam olarak okur ve maskeli bölgeyi bu bağlama uyacak şekilde üretir. Difüzyon tabanlı sistemlerde bu bölge önce gürültüyle doldurulur, sonra adım adım temizlenerek anlamlı bir görüntüye dönüştürülür. İstenirse ayrıca bir metin istemi de verilir; örneğin \"boş masaya bir fincan kahve ekle\" gibi bir komut kullanılabilir.",
  "why": "Fotoğraf rötuşunda saatler süren klonlama ve yama işlerinin yerini birkaç saniyelik bir işlem aldı. Ürün fotoğrafı temizleme, eski fotoğraf onarımı ve kurgu çalışmalarında yaygın kullanılıyor. Gerçekte olmayan bir ayrıntının görüntüye eklenebilmesi, düzenlemenin ne kadar sahici sayılacağı sorusunu da gündeme getiriyor.",
  "example": "Tatil fotoğrafının arkasında kalan bir yabancı fırçayla işaretlenip silinir; model boşluğu çevredeki kumsal ya da duvar dokusuyla doldurur.",
  "faq": [
   [
    "İç boyama ile dış boyama arasındaki fark nedir?",
    "İç boyama görüntünün içindeki bir bölgeyi değiştirir ya da siler. Dış boyama ise görüntüyü kenarlarından genişleterek var olmayan alanı üretir."
   ],
   [
    "Silinen nesnenin yerine ne geleceğine nasıl karar verilir?",
    "Model maskenin çevresindeki renk, doku ve perspektife bakarak en olası içeriği tahmin eder. Metin istemi verilirse tahmin o yönde şekillenir."
   ]
  ]
 },
 {
  "slug": "dis-boyama",
  "term": "Dış boyama (outpainting)",
  "en": "outpainting",
  "match": [
   "outpainting",
   "dış boyama"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir fotoğrafı ya da çizimi kenarlarının ötesine taşıyarak, yapay zekayla sahnenin devamını üretme tekniği; kadrajı genişletmek için kullanılır.",
  "how": "Önce tuval istenen yöne doğru büyütülür ve eklenen boş alan, düzenlenecek bölge gibi ele alınır. Model, mevcut görüntünün perspektifini, ışığını, renklerini ve dokusunu okuyup bu alanı onlarla uyumlu biçimde doldurur. Genellikle genişletme bir seferde değil, parça parça ve önceki parçayla örtüşecek şekilde yapılır. Kullanıcı isterse metin istemiyle sahnede neyin görüneceğini yönlendirebilir.",
  "why": "Dikey çekilmiş bir fotoğrafı yatay formata uydurmak ya da bir görselin kadrajını sonradan açmak gibi pratik sorunlara çözüm sunuyor. Sinema, reklam ve sosyal medya içeriğinde farklı ekran oranlarına uyum sağlamayı kolaylaştırıyor. Üretilen kısmın gerçekte çekilmediği unutulmamalı; bu da belgesel ya da haber görüntülerinde dikkat gerektirir.",
  "example": "Kare formatta çekilmiş bir manzara fotoğrafı, iki yanına dağ ve gökyüzü eklenerek geniş bir kapak görseline dönüştürülebilir.",
  "faq": [
   [
    "Dış boyama sonuçları her zaman tutarlı olur mu?",
    "Hayır. Genişletilen alan büyüdükçe model sahnenin mantığını kaybedebilir; çizgiler kopabilir ya da tekrarlayan desenler oluşabilir. Bu yüzden genişletme genelde birkaç adımda ve kontrol edilerek yapılır."
   ],
   [
    "Dış boyama gerçek fotoğrafın içeriğini değiştirir mi?",
    "Orijinal pikseller korunur, yalnızca yeni alan eklenir. Yine de ortaya çıkan görsel gerçekte var olmayan bir kadrajı gösterdiği için haber ya da belge niteliğindeki kullanımlarda belirtilmesi gerekir."
   ]
  ]
 },
 {
  "slug": "goruntu-yukseltme",
  "term": "Görüntü yükseltme (upscaling)",
  "en": "AI upscaling",
  "match": [
   "upscal",
   "görüntü yükselt"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Düşük çözünürlüklü bir görüntünün piksel sayısını artırıp eksik ayrıntıları yapay zekayla tahmin ederek daha net ve büyük bir sürüm elde etme yöntemi.",
  "how": "Klasik büyütme yöntemleri var olan pikselleri çoğaltıp aralarını ortalamayla doldurur; sonuç genellikle bulanık çıkar. Yapay zeka tabanlı yöntemlerde ise model, düşük ve yüksek çözünürlüklü görüntü çiftleriyle eğitilir ve bir kumaşın, saçın ya da yazının büyütülünce nasıl görünmesi gerektiğini öğrenir. Çalışırken eksik ayrıntıyı gerçek veriden çıkarmaz, öğrendiklerine bakarak makul bir biçimde tahmin eder. Bu yüzden ortaya çıkan netlik, orijinalde bulunmayan ayrıntılar da içerebilir.",
  "why": "Eski fotoğrafların onarımı, düşük çözünürlüklü videoların iyileştirilmesi ve baskı için görsel hazırlama gibi birçok işte kullanılıyor. Oyun dünyasında Nvidia'nın DLSS gibi teknolojileri, düşük çözünürlükte üretilen görüntüyü yükselterek akıcılığı artırıyor. Tahmin edilen ayrıntıların gerçek olmayabileceği, özellikle yüz ve metin gibi hassas alanlarda akılda tutulmalı.",
  "example": "Bir ailenin taranmış eski vesikalık fotoğrafı yükseltme aracından geçirilerek duvara asılabilecek büyüklükte, daha net bir baskıya dönüştürülebilir.",
  "faq": [
   [
    "Görüntü yükseltme kaybolan ayrıntıyı gerçekten geri getirir mi?",
    "Hayır, ayrıntıyı geri getirmez; modelin öğrendiklerine dayanarak tahmin eder. Sonuç gerçeğe benzeyebilir ama orijinal sahneyle birebir aynı olmayabilir."
   ],
   [
    "Normal büyütmeden farkı nedir?",
    "Normal büyütme pikselleri yalnızca çoğaltıp yumuşatır. Yapay zeka destekli yükseltme ise doku ve kenar gibi ayrıntıları öğrenilmiş örüntülere göre yeniden üretir."
   ]
  ]
 },
 {
  "slug": "stil-aktarimi",
  "term": "Stil aktarımı",
  "en": "style transfer",
  "match": [
   "stil aktarımı",
   "style transfer"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir görüntünün içeriğini koruyup üzerine başka bir görüntünün renk, fırça darbesi ve doku gibi sanatsal üslubunu uygulayan yapay zeka tekniği.",
  "how": "Sinir ağları bir görüntüyü katmanlar halinde işler; derin katmanlar neyin resmedildiğini, yüzeye yakın katmanlar ise renk ve doku gibi üslup özelliklerini yakalar. Stil aktarımında bir görüntüden içerik bilgisi, diğerinden üslup bilgisi alınır. Sistem yeni bir görüntüyü, içeriği birincisine, üslubu ikincisine benzeyecek şekilde adım adım iyileştirir. Sonuçta fotoğraftaki kişiler ve nesneler yerinde kalır ama görüntü sanki başka bir ressam tarafından yapılmış gibi görünür.",
  "why": "Sanat ve tasarım üretiminde hızlı denemeler yapmaya olanak tanıdığı için fotoğraf uygulamalarında ve filtrelerde sıkça kullanılıyor. Hayatta olan sanatçıların üslubunun izinsiz taklit edilmesi ise telif ve etik tartışmaları doğuruyor. Üslubun tek başına telifle korunup korunmadığı konusunda hukuki yaklaşımlar ülkeden ülkeye değişiyor.",
  "example": "Bir şehir manzarası fotoğrafı, Van Gogh'un \"Yıldızlı Gece\" tablosunun girdaplı fırça darbeleriyle yeniden boyanmış gibi görünecek şekilde dönüştürülebilir.",
  "faq": [
   [
    "Stil aktarımı sıradan bir fotoğraf filtresi midir?",
    "Basit filtreler her görüntüye aynı renk ya da efekt ayarını uygular. Stil aktarımı ise başka bir görüntünün üslubunu öğrenip içeriğe göre uyarlar, bu yüzden daha değişken ve sanatsal sonuç verir."
   ],
   [
    "Metinle çalışan görüntü modelleri de stil aktarımı yapabilir mi?",
    "Evet, \"suluboya tarzında\" gibi ifadelerle benzer bir sonuç elde edilebilir. Ancak bu, klasik stil aktarımının iki görüntüyü doğrudan eşleştirmesinden farklı olarak, modelin eğitimde öğrendiği üslupları yeniden üretmesine dayanır."
   ]
  ]
 },
 {
  "slug": "controlnet",
  "term": "ControlNet",
  "en": "ControlNet",
  "match": [
   "=controlnet"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Stable Diffusion gibi görüntü üretim modellerine kenar çizgisi, poz iskeleti ya da derinlik haritası gibi ek koşullar vererek çıktının yapısını yönlendirmeyi sağlayan sinir ağı yaklaşımı.",
  "how": "Metin istemi bir görüntünün ne içerdiğini söyler ama nesnelerin nerede durduğunu kesin olarak belirlemez. ControlNet'te ana modelin ağırlıkları dondurulur, ona bağlı eğitilebilir bir kopya ek koşul görüntüsünü okumayı öğrenir. Bu koşul görüntüsü, bir fotoğraftan çıkarılan kenar çizgileri, bir insanın poz iskeleti ya da derinlik haritası olabilir. Üretim sırasında model hem metne hem de bu haritaya uyarak görüntüyü oluşturur.",
  "why": "Görüntü üretiminde en büyük sıkıntılardan biri, tam istenen kompozisyonu elde etmenin şansa bağlı olmasıydı. ControlNet bu konuda tasarımcı ve illüstratörlere daha öngörülebilir bir kontrol sağladı. Açık kaynaklı görüntü üretim araçlarında yaygın hale gelen bu yaklaşım, profesyonel iş akışlarına yapay zekanın girmesini kolaylaştırdı.",
  "example": "Bir mimar, kaba bir oda krokisinin kenar çizgilerini ControlNet'e verip aynı yerleşimi koruyarak farklı mobilya ve ışık seçeneklerinin görsellerini üretebilir.",
  "faq": [
   [
    "ControlNet ile normal metin isteminin farkı nedir?",
    "Metin istemi sahnenin ne hakkında olduğunu anlatır, yerleşimi kesin belirleyemez. ControlNet ise bir poz, kenar ya da derinlik haritasıyla görüntünün yapısını doğrudan kısıtlar."
   ],
   [
    "ControlNet yalnızca Stable Diffusion ile mi çalışır?",
    "Yaklaşım ilk olarak Stable Diffusion üzerinde yaygınlaştı. Benzer koşullandırma fikirleri başka görüntü modelleri için de geliştirildi, ancak uyumluluk modele göre değişir."
   ]
  ]
 },
 {
  "slug": "negatif-istem",
  "term": "Negatif istem",
  "en": "negative prompt",
  "match": [
   "negatif istem",
   "negative prompt"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Görüntü üretim modeline, çıktıda bulunmasını istemediğimiz öğeleri, özellikleri ya da kusurları söyleyen ek metin; ana istemin tersine, modeli bu özelliklerden uzaklaştırmaya çalışır.",
  "how": "Pek çok görüntü üretim aracında ana istemin yanında ayrı bir negatif istem alanı bulunur. Model her adımda hem ana isteme hem de negatif isteme göre bir tahmin yapar. Sonuç, ana istemin tarif ettiği yöne doğru çekilirken negatif istemin tarif ettiği yönden uzaklaştırılır. Bu yüzden \"bulanık, fazladan parmak, filigran\" gibi ifadeler yazmak, bu kusurların görülme olasılığını azaltabilir. Her sistemde ayrı bir negatif istem alanı bulunmaz.",
  "why": "Görüntü üretiminde sonucu iyileştirmenin ucuz ve hızlı yollarından biri olduğu için kullanıcılar arasında yaygın bir teknik. Özellikle açık kaynaklı araçlarda üretim kalitesini ve tutarlılığı artırmak için kullanılıyor. Etkisi modele ve ifadeye göre değiştiği için garanti bir çözüm değil, bir ayar aracı olarak düşünülmeli.",
  "example": "Bir portre üretilirken negatif isteme \"bulanık, bozuk eller, yazı, filigran\" yazıldığında model bu kusurların çıktıda görülmesini azaltmaya çalışır.",
  "faq": [
   [
    "\"Çiçek olmasın\" demek için neden negatif istem kullanılır?",
    "Modeller çoğu zaman bir kelimenin geçtiğini görünce o kavramı sahneye katmaya meyleder. \"Çiçeksiz\" gibi bir ifadeyi ana isteme yazmak çiçek çıkmasına yol açabilir. Negatif istem alanı bu sorunu çözmek için tasarlanmıştır."
   ],
   [
    "Negatif istem her görüntü aracında bulunur mu?",
    "Hayır. Birçok açık kaynaklı arayüzde ayrı bir alan vardır, ancak bazı ticari hizmetler bunu sunmaz ya da arka planda otomatik yönetir."
   ]
  ]
 },
 {
  "slug": "gurultu-giderme",
  "term": "Gürültü giderme",
  "en": "denoising",
  "match": [
   "gürültü gider",
   "denoising"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Görüntü, ses ya da başka bir veriye karışmış istenmeyen bozulmaları ayıklayıp altındaki temiz içeriği geri kazanma işlemi. Yapay zekada bu iş çoğunlukla eğitilmiş sinir ağlarına yaptırılır.",
  "how": "Model, eğitimde temiz örneklere yapay gürültü eklenerek hazırlanan bozuk kopyaları görür ve bunları aslına döndürmeyi öğrenir. Böylece gürültünün tipik desenlerini, temiz verinin de nasıl göründüğünü ayırt eder. Kullanım sırasında bozuk görüntü ya da ses modele girer, model gürültüyü tahmin edip çıkarır. Difüzyon modelleri bu fikri uç noktaya taşır: saf gürültüden başlayıp adım adım temizleyerek sıfırdan yeni bir görüntü üretirler.",
  "why": "Düşük ışıkta çekilen fotoğraflar, gürültülü toplantı kayıtları ve tıbbi görüntüler gürültüden etkilenir; gürültü giderme bu verileri kullanılabilir kılar. Telefon kameraları, görüntülü görüşme uygulamaları ve tıbbi cihazlar bu yöntemden yararlanır. Görüntü üreten difüzyon modellerinin temelinde de aynı mantık yattığı için haberlerde sık anılır.",
  "example": "Telefonun gece modunda çekilen karanlık ve kum taneli bir fotoğrafın, ayrıntıları korunarak pürüzsüz hale getirilmesi.",
  "faq": [
   [
    "Gürültü giderme ile bulanıklaştırma aynı şey mi?",
    "Hayır. Basit bulanıklaştırma gürültüyle birlikte ince ayrıntıları da siler. Öğrenilmiş modeller ise kenar ve doku gibi ayrıntıları korurken gürültüyü ayıklamaya çalışır."
   ],
   [
    "Gürültü gidermenin difüzyon modelleriyle ilgisi nedir?",
    "Difüzyon modelleri, gürültü gidermeyi öğrenerek eğitilir. Üretim sırasında da rastgele gürültüyü adım adım temizleyerek yeni bir görüntü ortaya çıkarırlar."
   ]
  ]
 },
 {
  "slug": "nesne-tespiti",
  "term": "Nesne tespiti",
  "en": "object detection",
  "match": [
   "nesne tespit",
   "nesne algıla",
   "object detection"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir görüntüde ya da videoda hangi nesnelerin bulunduğunu ve her birinin nerede durduğunu, çevresine kutu çizip etiket vererek belirleyen bilgisayarlı görü görevi.",
  "how": "Model görüntüyü işler ve olası bölgeler için iki şey tahmin eder: nesnenin türü (insan, araba, köpek) ve onu çevreleyen kutunun konumu ile boyutu. Her tahmine bir güven puanı eşlik eder; düşük puanlılar elenir, aynı nesne için üst üste binen kutular birleştirilir. Eğitimde nesnelerin çevresine elle kutu çizilmiş çok sayıda görüntü kullanılır. Bazı yöntemler önce aday bölgeleri seçer, bazıları görüntüye tek geçişte bakar; ikincisi hızlı olduğu için canlı videoda yaygındır.",
  "why": "Sürücüsüz araçlar, güvenlik kameraları, fabrikalardaki kalite kontrol ve mağaza raflarının takibi gibi uygulamalar yalnızca ne olduğunu değil, nerede olduğunu da bilmek ister. Bu yüzden nesne tespiti, bilgisayarlı görünün en yaygın kullanılan görevlerinden biridir. Hatalı tespitin bedeli, kullanım alanına göre ciddi olabilir.",
  "example": "Sürücüsüz bir aracın kamerası, yoldaki yayaları, araçları ve trafik işaretlerini kutularla işaretleyip her birine etiket verir.",
  "faq": [
   [
    "Nesne tespiti ile görüntü sınıflandırma arasındaki fark nedir?",
    "Sınıflandırma tüm görüntüye tek bir etiket verir. Nesne tespiti ise görüntüdeki birden çok nesneyi hem türüyle hem de konumuyla bulur."
   ],
   [
    "Nesne tespiti ile bölütleme aynı mıdır?",
    "Hayır. Tespit nesnenin çevresine dikdörtgen kutu çizer, bölütleme ise nesnenin tam dış çizgisini piksel düzeyinde çıkarır."
   ]
  ]
 },
 {
  "slug": "goruntu-siniflandirma",
  "term": "Görüntü sınıflandırma",
  "en": "image classification",
  "match": [
   "görüntü sınıflandırma",
   "image classification"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir görüntüye, önceden belirlenmiş kategorilerden hangisine ait olduğunu söyleyen bir etiket atama görevi; örneğin fotoğrafta kedi mi köpek mi olduğuna karar vermek.",
  "how": "Eğitimde model, etiketli çok sayıda görüntü görür. Evrişimli sinir ağları ya da görüntü dönüştürücüleri (vision transformer), pikseller arasından önce kenar ve doku gibi basit örüntüleri, sonra daha karmaşık parçaları ayırt eden özellikler çıkarır. Son katman her kategori için bir olasılık verir ve en yüksek olasılıklı etiket seçilir. Model nesnenin görüntünün neresinde olduğunu söylemez; yalnızca görüntünün bütününe dair bir karar verir.",
  "why": "Görüntü sınıflandırma, bilgisayarlı görünün en temel görevidir ve derin öğrenmeyi öne çıkaran ilk başarılar bu alanda yaşandı. Tıpta röntgen taramasından tarımda hastalıklı yaprak ayrımına, içerik denetiminden fotoğraf arşivlerini düzenlemeye kadar birçok yerde kullanılır. Eğitim verisindeki dengesizlik ve yanlılıklar hatalı sonuçlara yol açabilir.",
  "example": "Telefondaki fotoğraf uygulamasının galerideki resimleri yemek, manzara ve evcil hayvan gibi gruplara kendiliğinden ayırması.",
  "faq": [
   [
    "Model eğitimde görmediği bir kategoriyi tanıyabilir mi?",
    "Klasik modeller tanıyamaz. Ancak görüntü ile metni birlikte öğrenmiş bazı modeller, kategorinin metin tanımına bakarak eğitimde hiç etiketini görmedikleri sınıfları da tahmin edebilir. Buna sıfır örnekli (zero-shot) sınıflandırma denir."
   ],
   [
    "Görüntü sınıflandırma neden nesne tespitinden farklıdır?",
    "Sınıflandırma görüntünün tamamı için tek bir etiket üretir. Nesne tespiti ise her nesnenin yerini de bulur; bu yüzden birden çok nesnenin bulunduğu sahnelerde daha uygundur."
   ]
  ]
 },
 {
  "slug": "goruntu-bolutleme",
  "term": "Görüntü bölütleme",
  "en": "image segmentation",
  "match": [
   "bölütleme",
   "segmentasyon"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Görüntüdeki her pikseli ait olduğu nesneye ya da bölgeye göre etiketleyerek görüntüyü anlamlı parçalara ayıran bilgisayarlı görü görevi.",
  "how": "Kutu çizmek yerine nesnenin tam dış çizgisini çıkarır. Anlamsal bölütleme her pikseli bir sınıfa atar (yol, gökyüzü, insan) ama aynı sınıftaki nesneleri birbirinden ayırmaz. Örnek bölütleme ise aynı türden her nesneyi ayrı ayrı işaretler; örneğin üç yayayı üç ayrı parça olarak bulur. Model, elle boyanmış maskelerle eğitilir ve çıktı olarak görüntüyle aynı boyutta bir maske üretir. Meta'nın Segment Anything modeli gibi genel amaçlı sistemler, kullanıcının tıklamasıyla bile nesneyi ayırabilir.",
  "why": "Tıbbi görüntülemede tümörün sınırlarını belirlemek, uydu görüntülerinde tarla ve binaları ayırmak, fotoğraf düzenlemede arka planı silmek için piksel düzeyinde doğruluk gerekir. Robotların bir nesneyi tutabilmesi için de şeklini bilmesi gerekir. Bu nedenle bölütleme, kutu çizmenin yetmediği yerlerde başvurulan görevdir.",
  "example": "Portre modunda fotoğraf çekilirken kişinin saç telleri dahil siluetinin ayrılıp arka planın bulanıklaştırılması.",
  "faq": [
   [
    "Görüntü bölütleme ile nesne tespiti arasındaki fark nedir?",
    "Nesne tespiti nesnenin çevresine kutu çizer. Bölütleme ise nesnenin kapladığı pikselleri tek tek belirler, dolayısıyla şekli çok daha ayrıntılı verir."
   ],
   [
    "Anlamsal ve örnek bölütleme nasıl ayrılır?",
    "Anlamsal bölütleme yalnızca pikselin hangi sınıfa ait olduğunu söyler. Örnek bölütleme aynı sınıftaki nesneleri ayrı ayrı sayıp işaretler."
   ]
  ]
 },
 {
  "slug": "poz-tahmini",
  "term": "Poz tahmini",
  "en": "pose estimation",
  "match": [
   "poz tahmini",
   "pose estimation"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Görüntü ya da videodaki bir insanın, bazen de bir hayvanın veya nesnenin eklem ve uzuvlarının konumunu bularak duruşunu çıkaran bilgisayarlı görü görevi.",
  "how": "Model, omuz, dirsek, bilek, kalça ve diz gibi anahtar noktaları tahmin eder ve bunları birleştirerek iskelete benzer bir yapı oluşturur. Eğitim verisi, bu noktaların elle işaretlendiği görüntülerden ya da hareket yakalama sistemlerinden gelir. İki boyutlu tahmin noktaları görüntü üzerinde verir; üç boyutlu tahmin ise derinliği de kestirmeye çalışır. Videoda noktalar kareler boyunca takip edilerek hareket akıcı biçimde izlenir. Sahnede birden çok kişi varsa önce kişiler bulunabilir, sonra her birinin pozu çıkarılır.",
  "why": "Spor analizi, fizik tedavi takibi, oyunlarda hareketle kontrol ve özel donanım gerektirmeyen animasyon üretimi poz tahminine dayanır. Robotların insan hareketini anlayıp güvenle yanında çalışabilmesi için de önemlidir. Kişiyi değil duruşunu izlediği için bazı uygulamalarda yüz verisi toplamadan hareket analizi yapılabilir.",
  "example": "Evde squat yapan bir kişinin telefon kamerasıyla izlenip dizlerinin içe kapandığının uyarılması, poz tahminine dayanan bir egzersiz uygulaması örneğidir.",
  "faq": [
   [
    "Poz tahmini yüz tanıma anlamına mı gelir?",
    "Hayır. Poz tahmini kişinin kim olduğunu değil, vücudunun ya da uzuvlarının nasıl durduğunu bulur. Yüz tanıma ayrı bir görevdir."
   ],
   [
    "Poz tahmini için özel bir sensör gerekir mi?",
    "Çoğu modern yöntem sıradan bir kamerayla çalışır. Derinlik sensörü ya da birden çok kamera ise özellikle üç boyutlu tahminde doğruluğu artırabilir."
   ]
  ]
 },
 {
  "slug": "goruntu-altyazilama",
  "term": "Görüntü altyazılama",
  "en": "image captioning",
  "match": [
   "görüntü altyazılama",
   "image captioning"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir görüntüyü anlatan kısa ve doğal dilde bir cümle ya da açıklama üreten yapay zeka görevi. Görüntü anlamayı dil üretimiyle birleştirir.",
  "how": "Model önce görüntüyü sayısal bir temsile çevirir; bu aşamada nesneleri, eylemleri ve mekânı yakalar. Ardından bir dil modeli bu temsile bakarak açıklamayı kelime kelime üretir. Eğitimde görüntülerle, onları insanların yazdığı açıklamalar birlikte kullanılır. Günümüzde görüntü ve metni birlikte işleyen çok kipli büyük modeller hem kısa bir altyazı hem de ayrıntılı bir betimleme yazabilir. Bu modeller bazen görüntüde olmayan bir ayrıntıyı uydurabilir.",
  "why": "Görme engelli kullanıcılar için görsellere otomatik alternatif metin sağlamak, büyük fotoğraf arşivlerinde arama yapmak ve sosyal medya içeriklerini daha erişilebilir kılmak altyazılamanın başlıca kullanım alanlarıdır. Yanlış ya da uydurma betimlemeler, özellikle haber ve sağlık gibi alanlarda yanıltıcı olabileceği için insan denetimi önemlidir.",
  "example": "Ekran okuyucu kullanan birinin, bir haber fotoğrafı için sahilde kumdan kale yapan iki çocuk gibi otomatik üretilmiş bir açıklama duyması.",
  "faq": [
   [
    "Görüntü altyazılama ile görsel soru yanıtlama aynı şey mi?",
    "Hayır. Altyazılama görüntüyü genel olarak betimler. Görsel soru yanıtlamada ise kullanıcı görüntü hakkında belirli bir soru sorar ve model o soruya yanıt verir."
   ],
   [
    "Üretilen altyazılara güvenilebilir mi?",
    "Çoğu zaman doğru ve işe yarar olsalar da modeller bazen olmayan nesneleri ya da ayrıntıları ekleyebilir. Önemli kararlarda açıklamanın görüntüyle karşılaştırılması gerekir."
   ]
  ]
 },
 {
  "slug": "3b-model-uretimi",
  "term": "3B model üretimi",
  "en": "3D generation",
  "match": [
   "3b model üret",
   "3d model üret"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Metinden, tek bir fotoğraftan ya da birkaç görüntüden yola çıkarak üç boyutlu nesne veya sahne oluşturan yapay zeka yaklaşımlarının genel adı.",
  "how": "Yöntemler farklılık gösterir. Bazıları görüntü üreten modellerin bilgisinden yararlanıp bir metin tanımına uyan şekli birçok açıdan tutarlı olacak biçimde oluşturur. Bazıları doğrudan üç boyutlu veri kümeleriyle eğitilir ve nokta bulutu, ağ (mesh) ya da hacimsel temsil üretir. Bazıları da tek bir fotoğraftan nesnenin görünmeyen arka yüzünü tahmin eder. En zor kısım, şeklin her açıdan bakıldığında bozulmamasıdır. Çıktı çoğu zaman bir ağ ve doku olarak verilir ve kullanımdan önce temizlik gerektirebilir.",
  "why": "Oyun, film, e-ticaret, mimari ve artırılmış gerçeklikte üç boyutlu içerik üretmek pahalı ve zaman alıcıdır; bu yaklaşımlar süreci hızlandırmayı vaat eder. Ancak sonuçların kalitesi ve doğrudan kullanıma hazır olma düzeyi değişkendir. Teknolojinin sanatçıların yerini mi alacağı, yoksa onlara yardımcı bir araç mı olacağı konusunda görüşler ayrılıyor.",
  "example": "Bir oyun geliştiricisi, ahşap sandık yazarak prototip için üç boyutlu bir nesne elde edip bunu sahneye yerleştirebilir.",
  "faq": [
   [
    "3B model üretimi NeRF ile aynı mı?",
    "Hayır. 3B model üretimi yeni nesneler yaratmayı hedefler. NeRF ise genellikle gerçek bir sahnenin fotoğraflarından o sahneyi yeniden kurar."
   ],
   [
    "Üretilen model doğrudan oyunda ya da 3B yazıcıda kullanılabilir mi?",
    "Bazen kullanılabilir, ancak çoğu zaman düzenleme gerekir. Ağın temizlenmesi, dokuların düzeltilmesi ve oyun ya da baskı için uygun hale getirilmesi gerekebilir."
   ]
  ]
 },
 {
  "slug": "nerf",
  "term": "NeRF (nöral ışıma alanları)",
  "en": "neural radiance fields",
  "match": [
   "=nerf"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir sahnenin farklı açılardan çekilmiş fotoğraflarından sahneyi bir sinir ağı içinde temsil eden ve hiç çekilmemiş yeni bakış açılarından görüntü üretebilen yöntem.",
  "how": "Sinir ağı, uzaydaki her nokta ve bakış yönü için o noktanın rengini ve ışığı ne kadar engellediğini (yoğunluğunu) tahmin etmeyi öğrenir. Görüntü oluşturulurken sanal kameradan her piksel için bir ışın gönderilir, ışın boyunca noktalar örneklenir ve değerler birleştirilerek pikselin rengi bulunur. Eğitimde bu görüntüler gerçek fotoğraflarla karşılaştırılır; fark küçülene kadar ağ güncellenir. Fotoğrafların çekildiği kamera konumlarının da bilinmesi gerekir. Sahne, sonunda ağın ağırlıklarının içinde saklanmış olur.",
  "why": "NeRF, sıradan fotoğraflardan yansıma ve ışık gibi etkileri de yakalayan gerçekçi üç boyutlu görünümler elde etmeyi mümkün kıldı. Sinema, sanal turlar, harita ve e-ticaret gibi alanlarda ilgi gördü. Yöntem 2020'de tanıtıldı; sonrasında daha hızlı ve daha az kaynak isteyen çok sayıda türevi geliştirildi.",
  "example": "Bir heykelin etrafında dolaşarak telefonla video çekmek ve ardından müzenin sanal turunda heykelin her açıdan gezilebilir hale gelmesi.",
  "faq": [
   [
    "NeRF ile fotogrametri arasındaki fark nedir?",
    "Fotogrametri fotoğraflardan geometri, yani bir ağ çıkarır. NeRF ise sahnenin farklı açılardan nasıl göründüğünü öğrenir ve yansıma gibi etkileri daha iyi yakalayabilir; ancak çıktısı doğrudan bir ağ değildir."
   ],
   [
    "NeRF üretken yapay zeka mıdır?",
    "Tek başına değil. NeRF mevcut bir sahneyi yeniden kurar. Yine de üretken 3B yöntemlerinde bir bileşen olarak kullanılmıştır."
   ]
  ]
 },
 {
  "slug": "gauss-sicratma",
  "term": "Gauss sıçratma (Gaussian splatting)",
  "en": "Gaussian splatting",
  "match": [
   "gaussian splatting",
   "gauss sıçratma"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir sahneyi, her biri konum, boyut, renk ve saydamlık taşıyan çok sayıda bulanık 3B Gauss kümesiyle temsil edip ekrana sıçratarak çizen görüntüleme tekniği. Fotoğraflardan gerçekçi 3B sahneler üretmek için kullanılır.",
  "how": "Sahnenin farklı açılardan çekilmiş fotoğrafları veya videosu alınır ve kameraların konumları hesaplanır. Seyrek bir nokta bulutundan başlanarak çok sayıda Gauss oluşturulur. Her Gauss'un konumu, şekli, rengi ve saydamlığı, üretilen görüntüler gerçek fotoğraflara benzeyene kadar tekrar tekrar ayarlanır. Çizim sırasında Gauss'lar ekrana yansıtılıp üst üste bindirilir. Bu işlem grafik kartında hızlı yapıldığı için sahne akıcı biçimde gezilebilir.",
  "why": "Önceki nöral yöntemlere kıyasla daha hızlı çizim yapabildiği için 3B yakalama işini pratik hale getirdi. Sanal gerçeklik, oyun, mekan tanıtımı, film ve robotik haritalama gibi alanlarda ilgi görüyor. Haberlerde sık sık fotogerçekçi 3B sahne üretimi bağlamında geçer.",
  "example": "Telefonla bir odanın etrafında çekilen kısa bir video, sonradan istenen açıdan gezilebilen bir 3B sahneye dönüştürülebilir.",
  "faq": [
   [
    "Gauss sıçratma ile NeRF arasındaki fark nedir?",
    "NeRF, sahneyi bir sinir ağının içinde saklar ve her görüntü için ağa çok sayıda soru sorar. Gauss sıçratma ise sahneyi açıkça tanımlanmış Gauss'lar olarak tutar ve doğrudan ekrana çizer. Bu yüzden genellikle çizim hızı açısından avantajlıdır."
   ],
   [
    "Gauss sıçratma yapay zeka mıdır?",
    "Yöntem, öğrenme benzeri bir eniyileme süreciyle çalışır ama klasik bir sinir ağı değildir. Yine de yapay zeka haberlerinde bilgisayarlı görü ve 3B üretim alanının bir parçası olarak anılır."
   ]
  ]
 },
 {
  "slug": "dudak-senkronizasyonu",
  "term": "Dudak senkronizasyonu",
  "en": "lip sync",
  "match": [
   "dudak senkron",
   "lip sync"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir videodaki konuşmacının dudak ve çene hareketlerini, duyulan ses veya konuşmayla uyumlu hale getirme işlemi. Yapay zekada bu uyum, ses verilince ağız bölgesinin otomatik olarak yeniden üretilmesiyle sağlanır.",
  "how": "Model önce sesi analiz eder ve konuşmadaki ses birimlerinin zaman içindeki akışını çıkarır. Sonra videodaki yüzün ağız çevresini bulur ve bu sese uygun dudak biçimlerini üretir. Üretilen bölge yüzün geri kalanıyla ışık ve doku bakımından birleştirilir. Model, konuşan insanların çok sayıda videosundan ses ile ağız hareketi arasındaki ilişkiyi öğrenerek eğitilir.",
  "why": "Dublaj ve çeviri çalışmalarında görüntü ile sesin tutarlı görünmesini sağlar. Sanal sunucular ve oyun karakterleri de aynı yöntemi kullanır. Öte yandan kişinin hiç söylemediği sözleri söylüyormuş gibi gösterebildiği için sahte video riskinin de bir parçasıdır.",
  "example": "Bir eğitim videosu İspanyolcadan Türkçeye dublajlanırken konuşmacının dudakları Türkçe seslere uyacak biçimde yeniden oluşturulabilir.",
  "faq": [
   [
    "Dudak senkronizasyonu ile deepfake aynı şey mi?",
    "Aynı şey değil ama ilişkilidir. Dudak senkronizasyonu yalnızca ağız hareketini ses ile uyumlu hale getirir. Deepfake ise genellikle bir kişinin yüzünü veya sesini taklit eden daha geniş bir sahte içerik türünü anlatır ve dudak eşleme bunun bir bileşeni olabilir."
   ],
   [
    "Dudak senkronizasyonu yalnızca dublajda mı kullanılır?",
    "Hayır. Animasyon, video oyunları, sanal asistan avatarları ve görüntülü iletişimde de kullanılır. Ses ile görüntü arasındaki küçük kaymaları düzeltmek için de başvurulabilir."
   ]
  ]
 },
 {
  "slug": "yuz-degistirme",
  "term": "Yüz değiştirme (face swap)",
  "en": "face swap",
  "match": [
   "yüz değiştir",
   "face swap"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir fotoğraf veya videodaki yüzün, başka bir kişinin yüzüyle değiştirilmesi. Yapay zeka, hedef kişinin ifadesini, bakış yönünü ve ışığını koruyarak yeni yüzü doğal görünecek biçimde yerleştirir.",
  "how": "Sistem önce görüntüdeki yüzü bulur ve göz, burun, ağız gibi noktalara göre hizalar. Ardından kaynak kişinin kimliğini belirleyen özellikleri çıkarır. Üretken bir model, hedef yüzün ifadesi, açısı ve ışığını koruyarak bu kimliği görüntüye işler. Son aşamada yüz, boyun ve saç çizgisiyle birleştirilir ve renk uyumu düzeltilir. Videoda bu işlem her kare için yapılır.",
  "why": "Sinema ve eğlence uygulamalarında kullanışlı bir araçtır. Ama rıza dışı içerik, kimlik taklidi ve dolandırıcılık için de kötüye kullanılabildiği için haberlerde sık geçer. Birçok ülkede platformlar ve yasa koyucular bu tür içeriklere yönelik kurallar geliştiriyor.",
  "example": "Bir film setinde dublör ile çekilen sahnede, oyuncunun yüzü sonradan dublörün yüzünün yerine yerleştirilebilir.",
  "faq": [
   [
    "Yüz değiştirme ile deepfake arasındaki fark nedir?",
    "Yüz değiştirme, deepfake türlerinden biridir. Deepfake terimi yüzün yanı sıra ses ve tüm vücut hareketini taklit eden sahte içerikleri de kapsar."
   ],
   [
    "Yüz değiştirilmiş bir video nasıl fark edilir?",
    "Yüz kenarlarında bulanıklık, tutarsız ışık, doğal olmayan göz kırpma veya dudak hareketi ipucu olabilir. Ancak teknoloji geliştikçe bu işaretler azalıyor. Bu yüzden kaynağı doğrulamak ve içerik doğrulama araçlarına bakmak daha güvenilir bir yoldur."
   ]
  ]
 },
 {
  "slug": "video-anlama",
  "term": "Video anlama",
  "en": "video understanding",
  "match": [
   "video anlama",
   "video understanding"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Yapay zekanın bir videodaki nesneleri, kişileri, eylemleri ve olayları zaman içindeki ilişkileriyle birlikte kavrayabilmesi. Tek bir kareyi tanımanın ötesinde, neyin ne zaman ve neden olduğunu çıkarmayı hedefler.",
  "how": "Video, belirli aralıklarla kareler halinde örneklenir ve her kare bir görsel kodlayıcıdan geçirilerek sayısal temsile dönüştürülür. Ses ve varsa altyazı da aynı şekilde işlenir. Model bu parçalar arasındaki sıralamayı ve değişimi izleyerek hareketi ve olay akışını çözümler. Birçok güncel sistemde bu temsiller bir dil modeline verilir. Böylece model videoyla ilgili soruları yanıtlayabilir veya özet çıkarabilir.",
  "why": "Güvenlik kameraları, spor analizi, eğitim videoları ve içerik arama gibi alanlarda saatlerce görüntüyü elle izleme ihtiyacını azaltır. Uzun videolar çok fazla işlem gücü gerektirdiği için hâlâ zorlu bir araştırma alanıdır. Çok kipli modeller hakkındaki haberlerde sık geçer.",
  "example": "Bir futbol maçı kaydı verilip golün kaçıncı dakikada atıldığı sorulduğunda, sistem ilgili anı bulup yanıtlayabilir.",
  "faq": [
   [
    "Video anlama ile görüntü tanıma arasındaki fark nedir?",
    "Görüntü tanıma tek bir karede ne olduğuna bakar. Video anlama ise kareler arasındaki hareketi, sırayı ve nedensel ilişkiyi de yorumlamak zorundadır."
   ],
   [
    "Video anlama neden zor kabul edilir?",
    "Video, tek bir görüntüye göre çok daha fazla veri içerir ve olaylar uzun süreye yayılabilir. Model hem ayrıntıyı hem de genel akışı hesaplama maliyetini makul tutarak izlemek zorundadır."
   ]
  ]
 },
 {
  "slug": "ses-kaynagi-ayristirma",
  "term": "Ses kaynağı ayrıştırma",
  "en": "audio source separation",
  "match": [
   "kaynak ayrıştır",
   "stem ayır"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Birden fazla sesin karıştığı bir kaydı, konuşma, şarkı sözü, enstrüman veya gürültü gibi ayrı kaynaklara bölme işlemi. Amaç, karışımdan her kaynağı ayrı bir kayıt olarak çıkarmaktır.",
  "how": "Ses genellikle zaman ve frekansa göre bir görüntü gibi gösterilir. Bir sinir ağı bu görüntünün her bölgesinin hangi kaynağa ait olduğunu tahmin eder ve her kaynak için bir filtre üretir. Filtre karışıma uygulanır ve çıkan parça yeniden sese çevrilir. Eğitim için kaynaklar ayrı ayrı kaydedilmiş veriler kullanılır. Bunlar yapay olarak karıştırılır ve model, karışımdan orijinal parçaları geri bulmayı öğrenir.",
  "why": "Müzik prodüksiyonunda vokal ve enstrümanları ayırmak, eski kayıtları onarmak ve karaoke üretmek mümkün olur. Kalabalıkta konuşma anlaşılırlığını artıran işitme teknolojilerinde ve konuşma tanıma sistemlerinde de işe yarar. Sanatçıların ses haklarıyla ilgili tartışmalarda da gündeme gelir.",
  "example": "Bir şarkının kaydı yüklendiğinde, sistem vokali, davulu ve bası ayrı ses dosyaları olarak verebilir.",
  "faq": [
   [
    "Ses kaynağı ayrıştırma ile gürültü bastırma aynı şey mi?",
    "Birbirine yakındır. Gürültü bastırma, konuşmayı arka plandan ayırmaya odaklanan özel bir durumdur. Kaynak ayrıştırma ise birden çok anlamlı kaynağı, örneğin farklı enstrümanları, ayrı ayrı çıkarmayı hedefler."
   ],
   [
    "Ayrıştırma sonucu kusursuz olur mu?",
    "Genellikle olmaz. Kaynaklar aynı frekanslarda çakıştığında ayrılan kayıtlarda sızıntı veya yapay bir tını kalabilabilir. Kalite, kaydın niteliğine ve modele göre değişir."
   ]
  ]
 },
 {
  "slug": "konusmaci-ayristirma",
  "term": "Konuşmacı ayrıştırma (diarization)",
  "en": "speaker diarization",
  "match": [
   "diarization",
   "konuşmacı ayrıştır"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir ses kaydında kimin ne zaman konuştuğunu belirleme işlemi. Kayıt konuşmacı bazında bölümlenir ve her bölüm bir konuşmacı etiketiyle işaretlenir.",
  "how": "Sistem önce kaydı konuşma ve sessizlik bölümlerine ayırır. Konuşma bölümleri kısa dilimlere bölünür ve her dilimden konuşmacıya özgü bir ses imzası, yani sayısal bir temsil çıkarılır. Birbirine benzeyen imzalar aynı kümeye konur. Sonuçta kayıt, Konuşmacı 1, Konuşmacı 2 gibi etiketlerle bölümlenir. Sistem kişilerin kim olduğunu bilmez, yalnızca sesleri birbirinden ayırır.",
  "why": "Toplantı kayıtlarının, röportajların ve çağrı merkezi görüşmelerinin okunabilir dökümü için gereklidir. Konuşma tanıma ile birleşince söz kimin ağzından çıkmış, ona göre yazıya dökülebilir. Üst üste konuşma ve benzer sesler hatalara yol açabildiği için doğruluk önemli bir sorundur.",
  "example": "Dört kişilik bir toplantı kaydında, döküm her cümlenin yanında ilgili konuşmacının etiketini gösterebilir.",
  "faq": [
   [
    "Konuşmacı ayrıştırma ile konuşma tanıma arasındaki fark nedir?",
    "Konuşma tanıma söylenenleri yazıya çevirir. Konuşmacı ayrıştırma ise bu sözlerin kime ait olduğunu belirler. İkisi birlikte kullanıldığında, kimin ne dediğini gösteren bir döküm elde edilir."
   ],
   [
    "Sistem konuşmacıların kim olduğunu bilir mi?",
    "Kendiliğinden bilmez, yalnızca farklı sesleri ayırır. İsimler, kullanıcı etiketlemesiyle veya önceden kaydedilmiş ses örnekleriyle eşleştirme yapılırsa atanabilir."
   ]
  ]
 },
 {
  "slug": "gercek-zamanli-ceviri",
  "term": "Gerçek zamanlı çeviri",
  "en": "real-time translation",
  "match": [
   "gerçek zamanlı çeviri",
   "canlı çeviri",
   "anlık çeviri"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Konuşmanın veya yazının, söylenirken ya da yazılırken neredeyse anında başka bir dile çevrilmesi. Sonuç, yazılı altyazı ya da sentetik sesle iletilir.",
  "how": "Yaygın yöntemde önce konuşma tanıma sistemi sesi yazıya çevirir. Ardından bir makine çevirisi modeli metni hedef dile aktarır. Gerekirse bir ses sentezi modeli çeviriyi seslendirir. Bazı yeni sistemler bu aşamaları tek bir modelde birleştirir. Gecikmeyi azaltmak için çeviri, cümle bitmeden parça parça başlatılır. Bu da hız ile doğruluk arasında bir denge gerektirir.",
  "why": "Toplantılar, seyahat, müşteri hizmetleri ve canlı yayınlarda dil engelini azaltır. Deyimler, özel adlar ve bağlama bağlı anlamlar hata riskini artırır. Bu nedenle ciddi yasal ya da tıbbi konuşmalarda çıktının dikkatle kontrol edilmesi gerekir.",
  "example": "Görüntülü bir toplantıda bir katılımcı Almanca konuşurken diğerleri Türkçe canlı altyazıyı izleyebilir.",
  "faq": [
   [
    "Gerçek zamanlı çeviri insan tercümanın yerini alır mı?",
    "Günlük ve basit konuşmalarda işe yarar, ancak ince anlam, ton ve kültürel bağlamın önemli olduğu yerlerde insan tercümanlar hâlâ tercih edilir. Araç çoğu zaman tercümanın yerine değil, yanında yardımcı olarak kullanılır."
   ],
   [
    "Gerçek zamanlı çeviride neden küçük bir gecikme olur?",
    "Sistem, cümlenin anlamını doğru çevirmek için konuşmacının belli bir kısmı söylemesini beklemek zorundadır. Diller arasında kelime sırası farklıdır, bu yüzden fiil sonda gelen bir cümlede çeviri ancak sonradan netleşebilir."
   ]
  ]
 },
 {
  "slug": "sentetik-medya",
  "term": "Sentetik medya",
  "en": "synthetic media",
  "match": [
   "sentetik medya",
   "synthetic media"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Yapay zeka kullanılarak tamamen üretilen ya da önemli ölçüde değiştirilen görüntü, ses, video ve metin gibi içeriklerin genel adı. Gerçekte yaşanmamış bir görüntüyü veya hiç söylenmemiş bir konuşmayı içerebilir.",
  "how": "Üretken modeller, çok sayıda gerçek örnekten içeriğin örüntülerini öğrenir. Kullanıcı bir istem, fotoğraf ya da ses örneği verdiğinde model bu örüntülere uygun yeni bir çıktı üretir. Görüntü ve video için sıklıkla difüzyon modelleri, metin için dil modelleri, ses için ses sentezi modelleri kullanılır. Üretilen içerik tamamen yeni olabileceği gibi mevcut bir kaydın bir bölümünün değiştirilmesi de olabilir.",
  "why": "Reklam, eğlence, eğitim ve erişilebilirlik alanında maliyeti düşürüp yaratıcı olanakları artırır. Aynı zamanda yanlış bilgi, kimlik taklidi ve telif sorunlarını da büyütür. Bu nedenle içeriğin yapay olduğunun belirtilmesi, filigran ve kaynak doğrulama gibi yöntemler tartışılır. AB Yapay Zeka Yasası gibi düzenlemeler de bu tür içeriğin bildirilmesine ilişkin hükümler içerir.",
  "example": "Gerçekte var olmayan bir kişinin fotoğrafı ya da bir haber metninin yapay sesle okunması sentetik medyaya örnektir.",
  "faq": [
   [
    "Sentetik medya ile deepfake aynı şey mi?",
    "Hayır. Sentetik medya geniş bir çatı terimdir ve zararsız içerikleri de kapsar. Deepfake ise genellikle gerçek bir kişiyi inandırıcı biçimde taklit eden, çoğu zaman aldatıcı amaçlı sentetik içeriği anlatır."
   ],
   [
    "Her sentetik medya zararlı mıdır?",
    "Hayır. Dublaj, animasyon, görme engelliler için seslendirme ve film efektleri gibi birçok meşru kullanımı vardır. Sorun, içeriğin gerçekmiş gibi sunulması ve insanları yanıltmak için kullanılmasıdır."
   ]
  ]
 },
 {
  "slug": "dijital-insan",
  "term": "Dijital insan",
  "en": "digital human",
  "match": [
   "dijital insan",
   "digital human"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Yapay zekayla çalışan, insana benzer yüze, sese ve mimiklere sahip, kullanıcıyla konuşup tepki verebilen bilgisayar üretimi sanal karakter.",
  "how": "Sistem birkaç parçadan oluşur. Dil modeli ne söyleneceğini belirler, ses sentezi metni konuşmaya çevirir, ses tanıma ise kullanıcıyı dinler. Üç boyutlu bir yüz modeli ya da video üreten bir model, konuşmaya uygun dudak hareketlerini ve mimikleri oluşturur. Parçalar gerçek zamanlı çalıştığında karakter canlı bir görüşmedeki gibi yanıt verebilir. Önceden hazırlanan sunumlarda ise işlem bir kez yapılıp video olarak saklanır.",
  "why": "Müşteri hizmetleri, eğitim, oyun ve eğlence gibi alanlarda yazıdan çok daha insani bir arayüz sunuyor. Aynı teknoloji sahte kimlik ve dolandırıcılık riskini de artırıyor; bu yüzden dijital insanın yapay olduğunun açıkça belirtilmesi tartışılıyor. İnsana benzerlik arttıkça güven duygusu ile yanıltılma riski birlikte büyüyor.",
  "example": "Bir banka mobil uygulamasında hesap sorularını yanıtlayan konuşan bir sanal danışman kullanabilir; haber okuyan sanal sunucular da aynı teknolojinin örneğidir.",
  "faq": [
   [
    "Dijital insan ile sohbet botu arasındaki fark ne?",
    "Sohbet botu çoğunlukla yazıyla çalışır. Dijital insan ise buna yüz, ses ve beden dili ekler; yani konuşmanın görsel ve işitsel katmanını da üretir."
   ],
   [
    "Dijital insan deepfake ile aynı şey mi?",
    "Hayır. Deepfake, var olan bir kişinin görüntüsünü ya da sesini taklit eder. Dijital insan ise sıfırdan tasarlanabilir ve açıkça yapay olarak sunulabilir."
   ]
  ]
 },
 {
  "slug": "lidar",
  "term": "LiDAR",
  "en": "light detection and ranging",
  "match": [
   "=lidar"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Lazer ışığı darbeleri gönderip geri dönüş sürelerini ölçerek çevredeki nesnelerin uzaklığını hesaplayan ve çevrenin üç boyutlu haritasını çıkaran algılama teknolojisi.",
  "how": "Cihaz saniyede çok sayıda kısa lazer darbesi yollar. Işık bir nesneye çarpıp geri döndüğünde, gidiş-dönüş süresinden o noktanın uzaklığı bulunur. Cihaz dönerek ya da ışını yönlendirerek her yöne baktığında binlerce nokta elde edilir; bunlar \"nokta bulutu\" denen üç boyutlu bir görüntü oluşturur. Yazılım bu buluttaki kümeleri araç, yaya ya da bordür gibi nesneler olarak sınıflandırır. Kendi ışığını yaydığı için karanlıkta da çalışır.",
  "why": "Otonom araçlarda ve robotlarda çevreye olan mesafenin doğru bilinmesi güvenlik açısından kritik. LiDAR bu konuda güçlü, ancak pahalı olabiliyor ve yoğun yağmur ya da sis gibi koşullardan etkilenebiliyor. Bazı şirketler onu kullanırken bazıları yalnızca kameraya dayanmayı seçiyor; bu ayrım sektörün en çok tartışılan konularından biri.",
  "example": "Waymo'nun robotaksilerinde LiDAR, kamera ve radarla birlikte kullanılır; bazı robot süpürgeler de odanın haritasını çıkarmak için küçük bir LiDAR taşır.",
  "faq": [
   [
    "LiDAR ile radar arasındaki fark ne?",
    "Radar radyo dalgası, LiDAR lazer ışığı kullanır. Radar yağmur ve sisten daha az etkilenir, LiDAR ise nesnelerin şekli hakkında çok daha ayrıntılı bilgi verir."
   ],
   [
    "Otonom sürüş için LiDAR şart mı?",
    "Bu konu tartışmalı. Birçok şirket güvenlik için LiDAR'ı gerekli görürken, bazıları kamera ağırlıklı sistemlerin yeterli olabileceğini savunuyor."
   ]
  ]
 },
 {
  "slug": "sensor-fuzyonu",
  "term": "Sensör füzyonu",
  "en": "sensor fusion",
  "match": [
   "sensör füzyon",
   "sensor fusion"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Kamera, radar, LiDAR gibi birden fazla sensörün verisini birleştirerek tek bir sensörün sunabileceğinden daha güvenilir ve eksiksiz bir çevre algısı elde etme yöntemi.",
  "how": "Her sensörün güçlü ve zayıf yönleri vardır. Kamera renk ve dokuyu görür ama mesafeyi kestirmekte zorlanır, radar hızı iyi ölçer ama ayrıntısı düşüktür, LiDAR ise şekli net verir. Füzyon yazılımı bu verileri aynı zaman ve konum çerçevesine oturtur, hangi ölçümün hangi nesneye ait olduğunu eşleştirir ve çelişkileri güvenilirlik düzeyine göre çözer. Birleştirme ham veri düzeyinde ya da her sensörün çıkardığı nesne listeleri düzeyinde yapılabilir; bugün bunu sinir ağları da öğrenebiliyor.",
  "why": "Tek bir sensöre güvenmek, o sensörün körleştiği anda hatalı karar vermek demektir. Füzyon bir tür yedeklilik sağlayarak sürücüsüz araçlarda, dronlarda ve robotlarda güvenliği artırır. Hangi sensör kombinasyonunun seçildiği de maliyeti ve sistem tasarımını doğrudan etkiler.",
  "example": "Sisli bir gecede kamera öndeki aracı zor seçerken radar onun mesafesini ve hızını verir; füzyon bu iki bilgiyi birleştirerek aracın orada olduğundan emin olur.",
  "faq": [
   [
    "Sensör füzyonu neden gerekli?",
    "Hiçbir sensör her koşulda iyi çalışmaz. Birden fazla sensörün verisini birleştirmek, birinin hata yaptığı ya da göremediği durumları diğerlerinin telafi etmesini sağlar."
   ],
   [
    "Sensör füzyonu yalnızca araçlarda mı kullanılır?",
    "Hayır. Akıllı telefonlarda ivmeölçer ve cayro verisini birleştirerek hareketi algılamak ya da drone ve robotlarda konum bulmak da sensör füzyonuna dayanır."
   ]
  ]
 },
 {
  "slug": "otonom-surus",
  "term": "Otonom sürüş",
  "en": "autonomous driving",
  "match": [
   "otonom sürüş",
   "sürücüsüz",
   "otonom araç"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir aracın yön, hız ve fren gibi sürüş görevlerini sensörler ve yapay zeka yazılımı yardımıyla, insan müdahalesi olmadan kendisinin yerine getirmesi.",
  "how": "Sistem üç aşamalı bir döngüyle çalışır. Önce algılama gelir: kamera, radar ve LiDAR verisiyle şeritler, araçlar, yayalar ve trafik işaretleri tanınır. Sonra planlama yapılır: yazılım çevredeki nesnelerin yakın gelecekte ne yapabileceğini tahmin eder, güvenli bir rota ve hız seçer. Son aşamada kontrol vardır: direksiyon, gaz ve fren komutları uygulanır. Bu döngü saniyede pek çok kez tekrarlanır. Çoğu sistemde ayrıntılı haritalar ve hassas konum belirleme de yardımcı olur.",
  "why": "Trafik kazalarının büyük bölümünde insan hatasının payı olduğu için otonom sürüş, güvenliği artırma vaadiyle öne çıkıyor. Taşımacılığı, şehir planlamasını ve lojistiği de değiştirebilir. Ancak nadir ve beklenmedik durumların yönetimi, kazada sorumluluğun kimde olduğu ve düzenlemeler hâlâ açık sorular.",
  "example": "Belirli bir şehir bölgesinde sürücüsüz yolcu taşıyan robotaksiler ile madenlerde sürücüsüz çalışan kamyonlar otonom sürüşün örnekleridir.",
  "faq": [
   [
    "Otonom sürüş ile sürücü destek sistemleri aynı şey mi?",
    "Hayır. Şeritte kalma ya da adaptif hız sabitleyici gibi sistemler sürücüye yardım eder, ama sorumluluk sürücüde kalır. Otonom sürüşte ise sistem belirli koşullarda sürüşün tamamını üstlenir."
   ],
   [
    "Otonom araçlar hatasız mı?",
    "Hayır. Sistemler insan hatasını azaltabilir ama beklenmedik durumlarda yanılabilir. Bu yüzden kapsamlı test, sınırlı bölgelerde işletme ve düzenleme önem taşıyor."
   ]
  ]
 },
 {
  "slug": "surus-otomasyonu-seviyeleri",
  "term": "Sürüş otomasyonu seviyeleri",
  "en": "levels of driving automation",
  "match": [
   "seviye 4 otonom",
   "seviye 3 otonom",
   "level 4"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Araçların sürüş görevinin ne kadarını kendisinin üstlendiğini sıfırdan beşe kadar sınıflandıran, en yaygın biçimde SAE International standardına dayanan derecelendirme sistemi.",
  "how": "Seviye 0'da otomasyon yoktur, sürücü her şeyi yapar. Seviye 1'de sistem direksiyon ya da hızdan yalnızca birine yardım eder. Seviye 2'de ikisine birden yardım eder, ama sürücü sürekli izlemek zorundadır. Seviye 3'te araç belirli koşullarda sürüşü üstlenir; ancak sistem istediğinde sürücünün devralması gerekir. Seviye 4'te araç tanımlı bölge ve koşullarda insan olmadan sürer. Seviye 5, her yerde ve her koşulda tam otomasyonu ifade eder.",
  "why": "\"Otopilot\" ya da \"tam sürüş\" gibi pazarlama ifadeleri kafa karışıklığı yaratabiliyor. Seviyeler, bir aracın sürücüden ne beklediğini ve sorumluluğun kimde olduğunu tartışmak için ortak bir dil sağlar. Haberlerde geçen \"seviye 2\" ya da \"seviye 4\" gibi ifadeleri anlamak için de gerekli.",
  "example": "Direksiyonu ve hızı birlikte yöneten ama sürücünün yola dikkat etmesini isteyen bir sürüş destek paketi seviye 2'dir; sürücüsüz bir robotaksi hizmeti ise seviye 4 olarak sınıflandırılır.",
  "faq": [
   [
    "Bireysel araçlarda en yaygın seviye hangisi?",
    "Bireysel araçlarda yaygın olan sürüş destek sistemleri çoğunlukla seviye 2'dir. Daha yüksek seviyeler genellikle sınırlı bölgelerde ve belirli hizmetlerde görülür."
   ],
   [
    "Seviye 3 ile seviye 4 arasındaki fark ne?",
    "Seviye 3'te sistem devralma talep edebilir ve sürücü buna hazır olmalıdır. Seviye 4'te ise sistem tanımlı alan içinde sorunla karşılaşsa bile kendi başına güvenli şekilde durabilir, insan müdahalesi gerekmez."
   ]
  ]
 },
 {
  "slug": "robotaksi",
  "term": "Robotaksi",
  "en": "robotaxi",
  "match": [
   "robotaksi",
   "robotaxi",
   "robot taksi"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Sürücüsüz çalışan, yolcuyu bir uygulamayla çağrılan araçla bir noktadan başka bir noktaya götüren otonom taksi hizmeti.",
  "how": "Yolcu telefondaki uygulamadan araç çağırır ve sistem yakındaki uygun aracı yönlendirir. Araç sensörleri ve yapay zeka yazılımıyla yolu kendisi izler, yolcuyu alır ve varış noktasına götürür. Çoğu hizmet önce haritası çıkarılmış, sınırlı bir şehir bölgesinde sunulur. Araç zor bir durumda uzaktaki operatörlerden yardım isteyebilir. Şarj, bakım ve temizlik gibi işleri ise filoyu işleten şirket yönetir.",
  "why": "Robotaksi, otonom sürüşün ticari olarak en görünür biçimde denendiği alan. Başarılı olursa şehir içi ulaşımı, taksi sektörünü ve araç sahipliği alışkanlıklarını etkileyebilir. Öte yandan güvenlik, sürücülerin işi ve kent trafiği üzerindeki etkileri konusunda tartışmalar sürüyor.",
  "example": "Waymo ABD'nin bazı şehirlerinde, Baidu'nun Apollo Go hizmeti ise Çin'in bazı şehirlerinde robotaksi hizmeti sunan girişimlere örnektir.",
  "faq": [
   [
    "Robotaksinin içinde sürücü olur mu?",
    "Tam sürücüsüz hizmetlerde direksiyon başında kimse olmaz. Bazı test aşamalarında ise araçta bir güvenlik görevlisi bulunabilir."
   ],
   [
    "Robotaksi ile otonom özel araç arasındaki fark ne?",
    "Robotaksi, şirketin sahip olup işlettiği bir ulaşım hizmetidir. Otonom özel araç ise bireyin satın alıp kullanacağı bir araçtır. Robotaksi sınırlı bir bölgede çalıştığı için bugün daha uygulanabilir bir model sayılıyor."
   ]
  ]
 },
 {
  "slug": "insansi-robot",
  "term": "İnsansı robot",
  "en": "humanoid robot",
  "match": [
   "insansı robot",
   "humanoid"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "İki kol, iki bacak ve gövdeden oluşan insana benzer bedeniyle, insanlar için tasarlanmış ortamlarda yürüyüp nesneleri tutarak çalışmayı hedefleyen robot.",
  "how": "Bacaklar dengeyi koruyarak yürümeyi, kollar ve eller nesneleri kavramayı sağlar. Kamera ve diğer sensörler çevreyi algılarken motorlar eklemleri hareket ettirir. Denge ve hareket kontrolü klasik mühendislik yöntemleri ve yapay zekayla birleştirilir. Son dönemde büyük dil ve görüntü modelleri de robota komutları anlama ve görevi planlama yeteneği kazandırmak için kullanılıyor. Amaç; merdiven, kapı kolu ve raf gibi insan ölçülerine göre yapılmış yerlerde ortamı değiştirmeden çalışabilmek.",
  "why": "Fabrikalar, depolar ve evler insan bedenine göre kurulduğu için insansı biçim, genel amaçlı bir işçi vaadi taşıyor. Ancak maliyet, pil ömrü, güvenlik ve beceri düzeyi hâlâ sınırlayıcı. Bu yüzden gösteri videoları ile gerçek kullanım arasındaki farkı gözetmek gerekiyor. İş gücüne etkisi de tartışılan bir başlık.",
  "example": "Boston Dynamics'in Atlas'ı koşma ve takla gibi hareketleriyle tanınan bir insansı robottur; Agility Robotics'in Digit'i ise depo gibi ortamlarda kutu taşımak üzere geliştirilmiştir.",
  "faq": [
   [
    "Robotlar neden insan biçiminde yapılıyor?",
    "Çünkü dünyadaki araç, alet ve mekânlar insan bedenine göre tasarlandı. İnsansı bir robot, ortamı değiştirmeden bu alanlarda çalışabilir. Ancak her iş için insan biçimi en verimli seçenek değil; tekerlekli robotlar çoğu görevde daha pratik olabiliyor."
   ],
   [
    "İnsansı robotlar evlere ne zaman girer?",
    "Kesin bir tarih vermek zor. Önce fabrika ve depo gibi kontrollü ortamlarda sınırlı görevlerde denenmeleri bekleniyor; evlerin çeşitliliği ve güvenlik gereksinimleri çok daha zorlu."
   ]
  ]
 },
 {
  "slug": "robot-ogrenmesi",
  "term": "Robot öğrenmesi",
  "en": "robot learning",
  "match": [
   "robot öğrenmesi",
   "robot learning"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Robotların görevleri tek tek elle programlanmak yerine veri, insan gösterimleri ve deneme yanılma yoluyla öğrenmesini sağlayan yapay zeka alanı.",
  "how": "Yaygın yaklaşımlardan biri taklit öğrenmedir: bir insan robotu uzaktan yönetip görevi gösterir, model bu kayıtlardan ne yapacağını çıkarır. Bir diğeri pekiştirmeli öğrenmedir: robot ödül sinyali eşliğinde denemeler yaparak en iyi davranışı bulur. Gerçek robotla deneme yavaş ve riskli olduğundan eğitimin büyük kısmı çoğunlukla bilgisayar simülasyonunda yapılır, sonra gerçek robota aktarılır. Simülasyon ile gerçek dünya arasındaki fark, bu aktarımın zor yanıdır.",
  "why": "Elle yazılmış kurallar, evde ya da depoda karşılaşılan çeşitlilik karşısında yetersiz kalır. Öğrenme tabanlı yöntemler, robotların yeni nesnelere ve durumlara uyum sağlaması için umut veriyor. Haberlerde geçen \"robot temel modelleri\" ve genel amaçlı robot hedefleri de bu alana dayanıyor.",
  "example": "Bir robot kol, operatörün bardakları rafa dizişini yüzlerce kez kaydeden örnekleri izleyerek aynı işi kendi başına yapmayı öğrenebilir.",
  "faq": [
   [
    "Robot öğrenmesi ile makine öğrenmesi arasındaki fark ne?",
    "Makine öğrenmesi geniş bir çatı alandır. Robot öğrenmesi ise bu yöntemleri fiziksel dünyada hareket eden sistemlere uygular. Burada veri toplamak pahalıdır ve hatalar fiziksel zarara yol açabilir."
   ],
   [
    "Simülasyondan gerçeğe aktarma neden zor?",
    "Simülasyon sürtünme, ışık ve malzeme davranışı gibi ayrıntıları tam yansıtamaz. Bu yüzden simülasyonda başarılı olan bir robot gerçek dünyada beceriksiz kalabilir."
   ]
  ]
 },
 {
  "slug": "goru-dil-eylem-modeli",
  "term": "Görü-dil-eylem modeli (VLA)",
  "en": "vision-language-action model",
  "match": [
   "görü-dil-eylem",
   "vision-language-action"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Kameradan gelen görüntüyü ve doğal dilde verilen bir komutu birlikte işleyip, bunları robotun yapacağı hareketlere dönüştüren yapay zeka modeli.",
  "how": "Bu modeller çoğunlukla internet ölçeğinde metin ve görsellerle eğitilmiş bir görü-dil modelinin üzerine kurulur. Ardından robot verisiyle, yani kamera karelerini, talimatları ve o anda yapılan kol ya da tutucu hareketlerini eşleştiren kayıtlarla ek eğitim alır. Model çıktı olarak kelime yerine eylem üretir. Bu eylemler, kolun bir sonraki küçük hareketini tarif eden sayısal komutlardır. Robot her adımda yeni görüntü alıp yeniden karar verdiği için ortamdaki değişikliklere uyum sağlayabilir.",
  "why": "Geleneksel robot yazılımında her görev için ayrı program ya da ayrı eğitim gerekir. VLA yaklaşımı, dil modellerinin genel bilgisinden yararlanarak robotun daha önce görmediği nesne ve komutlarla başa çıkmasını hedefler. Bu yüzden genel amaçlı, insansı ve ev robotları haberlerinde sıkça anılır. Yine de gerçek dünyada güvenilirlik hâlâ açık bir sorundur.",
  "example": "Google DeepMind'ın RT-2 modeli bu sınıfın bilinen örneklerindendir. Bir robota \"masadaki bardağı al\" denildiğinde model, kameradaki görüntüyü ve cümleyi birlikte okuyarak kolun hareketini üretir.",
  "faq": [
   [
    "Görü-dil-eylem modeli ile büyük dil modeli arasındaki fark ne?",
    "Büyük dil modeli metin üretir. VLA modeli ise görüntü ve metni girdi olarak alır, çıktısı bir robotun yapacağı eylemdir. Pek çok VLA, bir dil modelinin üzerine robot verisiyle ek eğitim yapılarak geliştirilir."
   ],
   [
    "VLA modeli robotu tek başına mı yönetir?",
    "Sistemden sisteme değişir. Çoğu zaman model yüksek düzeyli kararı verir, düşük düzeyli motor denetimi ise ayrı bir yazılım katmanında yürür. Güvenlik denetimleri de genellikle bu modelin dışında tutulur."
   ]
  ]
 },
 {
  "slug": "taklit-ogrenmesi",
  "term": "Taklit öğrenmesi",
  "en": "imitation learning",
  "match": [
   "taklit öğren",
   "imitation learning"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir yapay zeka sisteminin, ödül peşinde deneme yanılma yapmak yerine insan uzmanların gösterdiği davranışları örnek alarak görevi yapmayı öğrendiği yöntem.",
  "how": "Uzman bir insan görevi yaparken içinde bulunulan durum (kamera görüntüsü, sensör verisi) ve yapılan hareket birlikte kaydedilir. Model, gördüğü durumda uzmanın ne yaptığını tahmin etmeyi öğrenir. En yalın haliyle bu, gözetimli öğrenmedir ve davranış klonlama olarak da anılır. Eğitim bitince model, yeni durumlarda uzmanın yapacağına benzer bir hareket üretir. Zayıf yanı, uzmanın hiç göstermediği bir duruma düşüldüğünde hataların birikebilmesidir. Bu yüzden ek veri toplanır ya da yöntem başka tekniklerle birleştirilir.",
  "why": "Robota her hareketi elle programlamak ya da iyi bir ödül işlevi tasarlamak çok zordur. Göstererek öğretmek ise daha doğal ve hızlıdır. Bu nedenle robot yapay zekası alanındaki birçok çalışmanın temelinde taklit öğrenmesi vardır. Sürücüsüz araç araştırmalarında da kullanılır.",
  "example": "Bir operatör robot kolla bir çamaşırı katlamayı onlarca kez gösterir. Robot, bu kayıtlardan hangi görüntüde hangi hareketin yapıldığını öğrenir.",
  "faq": [
   [
    "Taklit öğrenmesi ile pekiştirmeli öğrenme arasındaki fark ne?",
    "Taklit öğrenmesinde model, uzmanın gösterdiği örneklerden öğrenir. Pekiştirmeli öğrenmede ise model deneme yaparak ve aldığı ödüllere göre davranışını geliştirir. İkisi sık sık birlikte kullanılır."
   ],
   [
    "Taklit öğrenmesinin sınırı nedir?",
    "Model, genelde gösterilen davranışların kapsamıyla sınırlıdır. Verideki durumlardan çok farklı bir durumla karşılaştığında hata yapabilir ve bu hata sonraki adımlarda büyüyebilir. Bu yüzden çeşitli ve bol örnek toplamak önemlidir."
   ]
  ]
 },
 {
  "slug": "simulasyondan-gercege-aktarim",
  "term": "Simülasyondan gerçeğe aktarım (sim-to-real)",
  "en": "sim-to-real transfer",
  "match": [
   "sim-to-real",
   "sim2real"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Sanal bir ortamda eğitilen yapay zeka ya da robot denetleyicisinin gerçek dünyadaki fiziksel robota geçirilip orada da düzgün çalışır hâle getirilmesi süreci.",
  "how": "Robot önce bilgisayardaki sanal bir dünyada, bir fizik motoru üzerinde milyonlarca kez deneme yapar. Bu hem hızlı hem de güvenlidir. Sorun, sanal dünyanın gerçeğe birebir benzememesidir: sürtünme, ışık, sensör gürültüsü ve motor gecikmeleri farklıdır. Bunu azaltmak için sık kullanılan yöntemlerden biri alan rastgeleleştirmedir. Eğitim sırasında sürtünme, ağırlık ya da renk gibi değerler sürekli değiştirilir, böylece model tek bir sanal dünyaya bağımlı kalmaz. Ardından gerekirse gerçek robotta ince ayar yapılır.",
  "why": "Gerçek robotla deneme yapmak yavaş, pahalı ve yıpratıcıdır. Robot düşüp kırılabilir. Simülasyon bu maliyeti büyük ölçüde düşürür. Ancak sanal ile gerçek arasındaki fark kapanmazsa sanaldaki başarı sahada karşılık bulmaz. Bu nedenle insansı ve dört ayaklı robot haberlerinde sık sık gündeme gelir.",
  "example": "Dört ayaklı bir robot, sanal arazide binlerce kez düşüp kalkarak yürümeyi öğrenir. Sonra aynı denetleyici gerçek robota yüklenir.",
  "faq": [
   [
    "Sim-to-real farkı (gap) ne demek?",
    "Simülasyonun gerçek dünyayı tam olarak yansıtamamasından doğan başarı kaybıdır. Sanalda iyi çalışan bir model, gerçek robotta fizik ve algı farkları yüzünden kötü performans verebilir."
   ],
   [
    "Simülasyonda eğitilen her robot gerçek dünyada çalışır mı?",
    "Hayır. Aktarımın başarısı simülasyonun ne kadar gerçekçi olduğuna ve eğitimin çeşitliliğine bağlıdır. Çoğu zaman gerçek robotta ek ayar ya da ek veriyle iyileştirme gerekir."
   ]
  ]
 },
 {
  "slug": "teleoperasyon",
  "term": "Teleoperasyon",
  "en": "teleoperation",
  "match": [
   "teleoperasyon",
   "teleoperation",
   "uzaktan kumanda ile robot"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bir robotun ya da makinenin uzaktaki bir insan operatör tarafından gerçek zamanlı yönetilmesi. Yapay zekada aynı zamanda robota öğretmek için gösterim verisi toplama yöntemidir.",
  "how": "Operatör bir kumanda, eldiven, sanal gerçeklik başlığı ya da robot kolun hareketini yansıtan bir kol düzeneği kullanır. Yaptığı hareketler robota iletilir ve robot bunları uygular. Operatör, robotun kameralarından gördüğü görüntüye bakarak çalışır. Yapay zeka bağlamında bu sırada kamera görüntüleri ve hareket komutları kaydedilir. Kayıtlar, taklit öğrenmesiyle bir modeli eğitmek için kullanılır. Bazı sistemlerde robot çoğunlukla kendi başına çalışır, zor anlarda insan devreye girer.",
  "why": "Robot yapay zekasının en büyük darboğazlarından biri nitelikli eğitim verisinin azlığıdır. Teleoperasyon bu veriyi üretmenin başlıca yollarından biridir. Tehlikeli ortamlarda insanı riskten uzak tutmasının yanı sıra, \"otonom\" diye tanıtılan bir robot gösterisinde ne kadar insan müdahalesi olduğu sorusunu da gündeme getirir.",
  "example": "Bir operatör sanal gerçeklik başlığı ve el kontrolcüleriyle robot kolu yönlendirerek bir çekmeceyi açar. Kayıt, robotun aynı işi sonradan kendi başına yapmayı öğrenmesinde kullanılır.",
  "faq": [
   [
    "Teleoperasyon ile otonomi aynı şey mi?",
    "Hayır. Teleoperasyonda kararı ve hareketi bir insan verir, otonom sistemde ise karar robotun kendi yazılımından gelir. Pek çok sistem ikisinin arasında bir yerde, insan ve yazılımın görev paylaştığı biçimde çalışır."
   ],
   [
    "Teleoperasyon neden robot eğitiminde kullanılıyor?",
    "Çünkü insanın yaptığı hareketler, robot için doğrudan öğrenilebilir örneklere dönüşür. Bu yöntem, robot beceri verisi toplamanın görece pratik yollarından biridir, ama emek ve zaman gerektirir."
   ]
  ]
 },
 {
  "slug": "makine-gorusu",
  "term": "Makine görüşü",
  "en": "machine vision",
  "match": [
   "makine görü"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Kameralar, aydınlatma ve görüntü işleme yazılımıyla makinelerin, özellikle üretim hatlarında nesneleri görüp ölçmesini, saymasını ve kusurları ayıklamasını sağlayan teknoloji.",
  "how": "Bir kamera ve aydınlatma düzeneği, hattan geçen parçanın görüntüsünü alır. Yazılım bu görüntüden ölçü, renk, konum ya da barkod gibi bilgileri çıkarır. Klasik sistemler elle yazılmış kurallara dayanır. Günümüzde birçoğu derin öğrenmeyle eğitilmiş modeller kullanır. Bu da çizik ya da leke gibi kurala dökülmesi zor kusurları örneklerden öğrenmeyi mümkün kılar. Sonuç, hattaki robota ya da ayıklama mekanizmasına iletilir ve karar çoğu zaman çok kısa sürede verilir.",
  "why": "Hızlı bir üretim hattında insan gözü yorulur, makine görüşü ise aynı kontrolü aralıksız yapar. Kalite kontrol, parça yerleştirme ve ürün takibi gibi işlerde yaygındır. Terim daha çok endüstriyel uygulamayı anlatır. Bilgisayarlı görü (computer vision) ise görüntü anlama araştırmalarının genel adıdır.",
  "example": "Bir şişeleme hattında kamera her şişenin kapağını, etiketini ve dolum seviyesini kontrol eder, hatalı olanı banttan ayırır.",
  "faq": [
   [
    "Makine görüşü ile bilgisayarlı görü arasındaki fark ne?",
    "Bilgisayarlı görü, makinelerin görüntüyü anlamasını inceleyen geniş bir alandır. Makine görüşü ise bu tekniklerin fabrika gibi endüstriyel ortamlarda kamera, ışık ve donanımla birlikte uygulanmasını anlatır. İki terim günlük kullanımda sık karıştırılır."
   ],
   [
    "Makine görüşü için derin öğrenme şart mı?",
    "Hayır. Ölçü ve barkod okuma gibi işler klasik yöntemlerle de başarıyla yapılır. Derin öğrenme, kusur tespiti gibi kuralla tarif etmesi zor işlerde işe yarar."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-avatari",
  "term": "Yapay zeka avatarı",
  "en": "AI avatar",
  "match": [
   "yapay zeka avatar",
   "ai avatar",
   "dijital avatar"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Yapay zeka ile üretilen ya da yönetilen, çoğunlukla insana benzeyen konuşan bir dijital karakter. Ekranda yüzü, sesi ve mimikleriyle bir metni sunar ya da kullanıcıyla sohbet eder.",
  "how": "Sistem iki parçadan oluşur: içerik ve görünüm. Metin elle yazılır ya da bir dil modeli üretir. Bir ses sentezi modeli bu metni konuşmaya çevirir, bir görüntü üretim modeli de yüzü, dudak hareketlerini ve baş ya da el jestlerini sese uyacak biçimde canlandırır. Avatar, gerçek bir kişinin kısa bir video kaydından (kişinin izniyle) oluşturulabileceği gibi tamamen kurgusal da olabilir. Bazı sistemler gerçek zamanlı yanıt verir, bazıları ise önceden video üretir.",
  "why": "Eğitim videosu, müşteri hizmetleri ve çok dilli sunum gibi alanlarda kamera ve stüdyo maliyetini düşürür. Öte yandan bir kişinin izni olmadan benzerinin kullanılması, derin sahtecilik (deepfake) ve yanıltma riskleri tartışılıyor. İçeriğin yapay olduğunun izleyiciye belirtilmesi de bu tartışmanın parçasıdır.",
  "example": "Bir şirket, çalışan eğitimini tek bir metinden yola çıkıp avatar sunucuyla onlarca dilde videoya dönüştürür.",
  "faq": [
   [
    "Yapay zeka avatarı ile deepfake aynı şey mi?",
    "Teknik olarak benzer yöntemler kullanılabilir, ama amaç ve rıza farklıdır. Avatar genellikle izinle ve açıkça yapay olarak sunulan bir karakterdir. Deepfake ise çoğunlukla gerçek birinin izinsiz ya da yanıltıcı biçimde taklit edilmesi anlamında kullanılır."
   ],
   [
    "Kendi görüntümle avatar oluşturulabilir mi?",
    "Birçok hizmet, kişinin kısa bir video kaydıyla ve onay vermesiyle kişiselleştirilmiş avatar yapmaya izin verir. Yüz ve ses kişisel veri sayılabileceğinden, verilerin nasıl saklandığına ve kullanıldığına bakmak önemlidir."
   ]
  ]
 },
 {
  "slug": "sesli-asistan",
  "term": "Sesli asistan",
  "en": "voice assistant",
  "match": [
   "sesli asistan",
   "voice assistant"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Kullanıcının konuşarak verdiği komutları anlayıp sesle yanıtlayan; alarm kurma, müzik açma ya da soru yanıtlama gibi işleri yapan yazılım.",
  "how": "Klasik zincirde önce bir uyandırma sözcüğü algılanır. Konuşma tanıma modeli sesi metne çevirir, dil anlama bölümü kullanıcının ne istediğini çıkarır. Sistem isteği yerine getirir ya da yanıtı bulur, ses sentezi de yanıtı seslendirir. Büyük dil modelleriyle birlikte birçok asistan serbest konuşmayı daha iyi anlamaya başladı. Bazı yeni sistemler ise sesi ara bir metin adımı olmadan doğrudan işleyip sesle yanıt verebiliyor. Hangi işlemin cihazda, hangisinin bulutta yapıldığı gizlilik açısından önemlidir.",
  "why": "Eller meşgulken ya da ekrana bakılamayan durumlarda işi kolaylaştırır. Yaşlılar ve görme engelli kullanıcılar için erişilebilirlik sağlar. Öte yandan ses kayıtlarının nasıl saklandığı ve kullanıldığı tartışılır. Üretken yapay zekanın ilerlemesiyle sesli asistanlar yeniden haberlerin gündemine girmiştir.",
  "example": "Araç kullanırken \"yakındaki eczaneyi göster\" demek buna örnektir. Alexa, Siri ve Google Asistan bilinen sesli asistanlardandır.",
  "faq": [
   [
    "Sesli asistan ile sohbet botu arasındaki fark ne?",
    "Sohbet botu yazıyla konuşur, sesli asistan ise ses girişi ve çıkışıyla çalışır. Ayrıca sesli asistan çoğu zaman alarm, ev cihazları ya da müzik gibi cihaz ve uygulama işlevlerini de yönetir. Yeni sistemlerde bu ikisi birbirine yaklaşıyor."
   ],
   [
    "Sesli asistan sürekli beni dinliyor mu?",
    "Cihazlar genellikle yalnızca uyandırma sözcüğünü bekler ve bunu yerel olarak algılamaya çalışır. Ayrıntılar ürüne ve ayarlara göre değişir. Gizlilik ayarlarından ses kayıtlarının saklanıp saklanmayacağı denetlenebilir."
   ]
  ]
 },
 {
  "slug": "ses-tasarimi-ve-seslendirme",
  "term": "Ses tasarımı ve seslendirme (yapay zeka)",
  "en": "AI voice-over",
  "match": [
   "yapay zeka seslendirme",
   "yapay zeka dublaj",
   "ai dublaj"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Yapay zeka modelleriyle yazıdan konuşma üretmeyi, bir sesi klonlamayı, içerikleri başka dillere dublajlamayı ya da ses efekti ve müzik üretmeyi kapsayan ses üretimi alanı.",
  "how": "Metinden konuşma modeli yazılı metni insan sesine çok yakın bir ses kaydına çevirir. Ton, hız ve vurgu ayarlanabilir. Ses klonlamada model, bir kişinin kısa bir kaydından sesinin özelliklerini öğrenir ve yeni cümleleri o sesle okur. Yapay zeka dublajında sistem konuşmayı metne döker, çevirir ve çeviriyi orijinal konuşmacının sesine yakın bir tınıyla seslendirir. Ses efektleri ve müzik de yazıyla tarif edilerek üretilebilir.",
  "why": "Podcast, oyun, reklam ve sesli kitap üretimini hızlandırıp ucuzlatır. Öte yandan seslendirme sanatçıları seslerinin izinsiz kopyalanmasından, telif sorunlarından ve iş kaybından endişe ediyor. Sentetik ses, dolandırıcılıkta da kötüye kullanılabiliyor. Bu nedenle rıza ve etiketleme konuları öne çıkıyor.",
  "example": "Bir oyun stüdyosu, yan karakterlerin yüzlerce repliğini metinden sentetik sesle hazırlayarak seslendirme süresini kısaltabilir.",
  "faq": [
   [
    "Sesim izinsiz klonlanabilir mi, hukuken korunur mu?",
    "Teknik olarak birkaç dakikalık bir kayıt bile yeterli olabilir. Hukuki durum ülkeye ve olaya göre değişir. Birçok yerde ses, kişisel veri ya da kişilik hakları kapsamında değerlendirilebilir, ayrıntı için bir hukukçuya danışmak gerekir."
   ],
   [
    "Yapay zeka sesini nasıl ayırt edebilirim?",
    "Modeller geliştikçe kulakla ayırt etmek zorlaşıyor. Bazı hizmetler üretilen sese filigran ekliyor ya da içeriği etiketliyor. Şüpheli bir ses kaydında kaynağı ayrıca doğrulamak en güvenli yoldur."
   ]
  ]
 },
 {
  "slug": "goruntu-tanima",
  "term": "Görüntü tanıma",
  "en": "image recognition",
  "match": [
   "görüntü tanıma",
   "image recognition"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Bilgisayarın bir fotoğraf ya da video karesindeki nesneleri, yüzleri, yazıları veya sahneleri ayırt edip adlandırmasını sağlayan yapay zeka yeteneği. Bilgisayarlı görmenin en temel uygulamalarından biridir.",
  "how": "Sistem, etiketlenmiş çok sayıda görüntüyle eğitilir. Derin öğrenme modelleri, özellikle evrişimli sinir ağları ve görüntü dönüştürücüleri, pikselleri katman katman işler. Önce kenar ve renk gibi basit örüntüleri, sonra göz ya da tekerlek gibi parçaları, en sonunda bütün nesneyi yakalamayı öğrenir. Çıktı görüntünün sınıfı olabileceği gibi nesnenin kare içindeki konumu ya da piksel düzeyinde ayrımı da olabilir. Eğitim verisi ne kadar çeşitliyse model o kadar sağlam çalışır.",
  "why": "Görüntü tanıma; tıbbi görüntü okumadan kalite kontrole, otonom araçlardan telefon galerilerine kadar pek çok ürünün temelindedir. Hataları ciddi sonuç doğurabilir, çünkü eğitim verisinde yeterince temsil edilmeyen gruplarda başarı düşebilir. Bu yüzden yüz tanıma gibi uygulamalar hem teknik hem hukuki tartışmaların merkezindedir.",
  "example": "Bir fabrikada bant üzerinden geçen ürünleri izleyen kameranın çizik ya da kırık parçaları ayıklaması, görüntü tanımanın sahadaki tipik kullanımıdır.",
  "faq": [
   [
    "Görüntü tanıma ile yüz tanıma aynı şey mi?",
    "Hayır. Yüz tanıma, görüntü tanımanın yalnızca insan yüzlerine odaklanan bir alt koludur. Görüntü tanıma ise hayvan, trafik levhası, hasarlı ürün gibi çok daha geniş bir nesne yelpazesini kapsar."
   ],
   [
    "Görüntü tanıma modelleri yanılır mı?",
    "Evet. Işık, açı ve görüntü kalitesi gibi etkenler başarıyı düşürebilir. Model, eğitimde az gördüğü durumlarda da hata yapabilir; bu nedenle kritik alanlarda sonuçlar genellikle bir insan tarafından kontrol edilir."
   ]
  ]
 },
 {
  "slug": "endustriyel-robot-ve-cobot",
  "term": "Endüstriyel robot ve cobot",
  "en": "collaborative robot",
  "match": [
   "=cobot",
   "işbirlikçi robot"
  ],
  "cat": "Görüntü, ses ve robotik",
  "def": "Endüstriyel robotlar, fabrikalarda tekrarlı işleri hızlı ve güçlü biçimde yapan programlanabilir kollardır. Cobot (işbirlikçi robot) ise güvenlik önlemleriyle insanla aynı çalışma alanını paylaşmak üzere tasarlanmış robottur.",
  "how": "Geleneksel endüstriyel robot, önceden programlanmış hareketleri yüksek hız ve hassasiyetle tekrarlar. İnsanlar için tehlikeli olduğundan genellikle koruyucu kafes ya da bariyerlerin ardında çalışır. Cobotlar ise daha düşük hız ve kuvvetle çalışır; temas ya da çarpışma algılayınca durmak için kuvvet ve tork sensörleri kullanır. Çoğu zaman kolayca öğretilir: çalışan, kolu elle yönlendirerek yapılacak hareketi gösterir. Kamera ve yapay zeka desteği, her iki türün de nesneleri tanımasına ve değişen işlere uyum sağlamasına yardımcı olur.",
  "why": "Cobotlar, büyük yatırım gerektirmeden küçük ve orta ölçekli işletmelerin de otomasyondan yararlanmasını kolaylaştırıyor. Robotların insanlarla yan yana çalışması iş güvenliği, işgücü dönüşümü ve istihdam tartışmalarını da gündeme getiriyor. Yapay zekayla donatılan robotlar haberlerde sık geçtiği için iki türün farkını bilmek faydalıdır.",
  "example": "Otomobil fabrikasında kafesin içinde kaynak yapan dev kol endüstriyel robottur; montaj hattında çalışanın yanında parça tutan ya da vida sıkan küçük kol ise cobot örneğidir.",
  "faq": [
   [
    "Cobot ile endüstriyel robot arasındaki temel fark ne?",
    "Temel fark insanla birlikte çalışma biçimidir. Endüstriyel robot genellikle güvenlik bariyerleriyle insandan ayrılırken, cobot sensörleri ve sınırlı kuvvetiyle aynı alanda insanla çalışacak şekilde tasarlanır."
   ],
   [
    "Cobotlar tamamen güvenli midir?",
    "Cobotlar güvenlik standartlarına göre tasarlanır, ancak güvenlik yalnızca robota değil, taşıdığı alete ve yapılan işe de bağlıdır. Keskin bir takım taşıyan cobot için ayrıca risk değerlendirmesi yapılması gerekir."
   ]
  ]
 },
 {
  "slug": "ab-yapay-zeka-yasasi",
  "term": "AB Yapay Zeka Yasası",
  "en": "EU AI Act",
  "match": [
   "ab yapay zeka yasa",
   "eu ai act",
   "yapay zeka yasası"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Avrupa Birliği'nin yapay zeka sistemlerini risk düzeyine göre düzenleyen, 2024'te kabul edilen kapsamlı yasası. Bu alandaki ilk geniş çaplı çerçeve yasalardan biri olarak anılır.",
  "how": "Yasa yapay zeka sistemlerini risklerine göre basamaklara ayırır. Kabul edilemez risk taşıyanlar yasaklanır, yüksek riskli olanlar sıkı yükümlülüklere bağlanır, sohbet robotu gibi bazı sistemler şeffaflık kurallarına tabi olur, geri kalanlar ise büyük ölçüde serbesttir. Genel amaçlı modeller için ayrı kurallar da vardır. Hükümler aynı anda değil, kademeli olarak yürürlüğe girer. Denetimde ulusal makamlar ile AB düzeyindeki Yapay Zeka Ofisi rol alır; ihlallerde idari para cezaları öngörülür.",
  "why": "Yasa, ürününü AB pazarına sunan AB dışı şirketleri de ilgilendirdiği için küresel ölçekte bir referans olarak anılıyor. Yenilikçiliği kısıtlayacağını savunanlar da, kişilerin haklarını koruyacağını söyleyenler de var; tartışma sürüyor. Yapay zeka haberlerinde uyum, denetim ve ceza başlıkları çoğunlukla bu yasaya dayanır.",
  "example": "Avrupa'daki şirketlere özgeçmiş eleme yazılımı satan bir girişim, yazılımı yüksek riskli kategoriye girebileceği için Yasa'nın şartlarını incelemek durumunda kalır.",
  "faq": [
   [
    "AB Yapay Zeka Yasası Türkiye'deki şirketleri etkiler mi?",
    "Bir Türk şirketi yapay zeka sistemini AB pazarına sunuyorsa ya da sistemin çıktıları AB'de kullanılıyorsa Yasa kapsamına girebilir. Kesin durum şirketin faaliyetine bağlıdır; bu, hukuki görüş değil genel bir çerçevedir."
   ],
   [
    "Yasa bütün yapay zeka kullanımlarını mı kısıtlıyor?",
    "Hayır. Yasa risk temellidir; yapay zeka uygulamalarının büyük bölümü düşük riskli sayılır ve ağır bir yükümlülük getirilmez. Kurallar asıl olarak yasaklı ve yüksek riskli kullanımlara yoğunlaşır."
   ]
  ]
 },
 {
  "slug": "yuksek-riskli-yapay-zeka-sistemi",
  "term": "Yüksek riskli yapay zeka sistemi",
  "en": "high-risk AI system",
  "match": [
   "yüksek riskli yapay zeka",
   "yüksek riskli sistem"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "AB Yapay Zeka Yasası'nda, insanların sağlığı, güvenliği veya temel hakları üzerinde ciddi etki yaratabileceği için sıkı kurallara bağlanan yapay zeka sistemi kategorisi.",
  "how": "Yasa bu kategoriye iki yoldan giriş görür. Birincisi, tıbbi cihaz ya da makine gibi zaten güvenlik mevzuatına tabi ürünlerin güvenlik bileşeni olan yapay zeka sistemleridir. İkincisi, işe alım, eğitim, kredi ve temel hizmetlere erişim, kolluk, göç, adalet, kritik altyapı ve biyometri gibi listelenen alanlarda kullanılan sistemlerdir. Bu sistemlerin sağlayıcıları risk yönetimi, veri kalitesi, teknik dokümantasyon, kayıt tutma, insan gözetimi ve doğruluk gibi koşulları yerine getirmek ve piyasaya sürmeden önce uygunluk değerlendirmesinden geçmek zorundadır.",
  "why": "Yapay zeka kararları bir kişinin iş bulmasını, kredi almasını veya sınavdaki durumunu etkileyebilir. Yüksek riskli kategori, bu tür kararlarda şeffaflık ve insan denetimi getirerek haksız sonuçların önüne geçmeyi hedefler. Şirketler için de en yüksek uyum maliyetinin doğduğu alan burasıdır.",
  "example": "Adayların başvurularını otomatik puanlayan bir işe alım yazılımı, Yasa kapsamında yüksek riskli sistem olarak değerlendirilebilecek tipik bir örnektir.",
  "faq": [
   [
    "Yüksek riskli sistem ile yasaklı uygulama arasındaki fark nedir?",
    "Yasaklı uygulamalar kabul edilemez bulunduğu için hiç kullanılamaz. Yüksek riskli sistemler ise belirli koşullar ve denetimlerle kullanılabilir."
   ],
   [
    "Bir sistemin yüksek riskli sayılıp sayılmadığına kim karar verir?",
    "Sınıflandırma Yasa'daki ölçütlere ve eklerdeki alan listesine göre yapılır. Sağlayıcı önce kendi sistemini değerlendirir, denetim ise ulusal makamlara aittir. Tereddütlü durumlarda hukuki destek almak gerekir."
   ]
  ]
 },
 {
  "slug": "genel-amacli-yapay-zeka-modeli",
  "term": "Genel amaçlı yapay zeka modeli (GPAI)",
  "en": "general-purpose AI model",
  "match": [
   "genel amaçlı yapay zeka",
   "=gpai"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Büyük veriyle eğitilmiş, tek bir göreve bağlı kalmayıp çok çeşitli işleri yapabilen ve birçok farklı sisteme entegre edilebilen yapay zeka modeli. AB Yapay Zeka Yasası'nda ayrı bir başlık altında düzenlenir.",
  "how": "Yasa, bu tür modeller için model sağlayıcılarına özel yükümlülükler getirir. Sağlayıcılar teknik dokümantasyon hazırlar, modeli kendi ürünlerine ekleyen şirketlere gerekli bilgiyi verir, telif hakkı mevzuatına uyum politikası belirler ve eğitimde kullanılan içeriğin özetini yayımlar. Açık kaynak lisansıyla sunulan modeller için bazı muafiyetler vardır. Uyumu kolaylaştırmak için hazırlanan gönüllü uygulama kuralları rehberi de bulunur. Modellerin bu kurallar çerçevesinde kademeli olarak denetlenmesi öngörülür.",
  "why": "Büyük dil modelleri gibi sistemler sohbetten yazılıma kadar sayısız üründe kullanıldığından, bir modeldeki sorun pek çok uygulamaya yayılabilir. Yasa bu yüzden sorumluluğu modeli geliştirenlerle onu kullanan şirketler arasında paylaştırmaya çalışır. Telif ve veri şeffaflığı tartışmaları da bu kategoriyle doğrudan ilişkilidir.",
  "example": "Bir sohbet asistanını, bir kod yardımcısını ve bir çeviri aracını aynı temel dil modeli besleyebilir; Yasa'da bu temel model GPAI olarak ele alınır.",
  "faq": [
   [
    "GPAI ile yüksek riskli sistem aynı şey mi?",
    "Hayır. GPAI, modelin genel yeteneğine bakan bir sınıflandırmadır. Yüksek riskli sistem ise belirli bir kullanım alanındaki uygulamayı ifade eder. Bir GPAI modeli yüksek riskli bir sistemin parçası olabilir."
   ],
   [
    "Açık kaynak modeller bu kurallardan muaf mı?",
    "Kısmen. Açık kaynak lisanslı modeller için bazı belgeleme yükümlülüklerinde hafifletme vardır, ancak sistemik risk taşıyan modeller bu muafiyetten yararlanamaz."
   ]
  ]
 },
 {
  "slug": "sistemik-risk-tasiyan-model",
  "term": "Sistemik risk taşıyan model",
  "en": "systemic-risk model",
  "match": [
   "sistemik risk"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "AB Yapay Zeka Yasası'nda, yeteneklerinin ve yaygınlığının büyüklüğü nedeniyle toplum genelinde geniş çaplı zarara yol açabileceği kabul edilen en güçlü genel amaçlı yapay zeka modelleri.",
  "how": "Yasa, bir modelin sistemik risk taşıyıp taşımadığını yüksek etki kapasitesine göre belirler. Eğitimde kullanılan hesaplama gücü gibi ölçütler bu değerlendirmede önemli rol oynar; Avrupa Komisyonu da bir modeli ayrıca bu kategoriye alabilir. Bu modellerin sağlayıcıları, genel amaçlı model yükümlülüklerine ek olarak model değerlendirmesi, saldırı senaryolarıyla test, ciddi olayların bildirilmesi ve siber güvenlik önlemlerini yerine getirir. Sistemik risk, örneğin siber saldırılara kolaylık sağlama ya da denetimden çıkma gibi toplumu etkileyebilecek tehlikeleri kapsar.",
  "why": "En güçlü modellerin zararı tek bir ürünle sınırlı kalmaz; milyonlarca kullanıcıya ve birçok sektöre yayılabilir. Yasa bu nedenle büyük laboratuvarlara ek sorumluluk yükler. Eşik ve ölçütlerin ne kadar isabetli olduğu, hem güvenlik savunucuları hem de sektör temsilcileri arasında tartışma konusudur.",
  "example": "Çok büyük hesaplama gücüyle eğitilmiş bir öncü dil modelini geliştiren şirket, bu modelin sistemik risk taşıdığı kabul edilirse ek test ve olay bildirimi yükümlülükleri altına girer.",
  "faq": [
   [
    "Sistemik risk taşıyan model her büyük model midir?",
    "Hayır. Bu kategori yalnızca belirlenen yüksek etki ölçütlerini karşılayan, en ileri düzeydeki modeller için geçerlidir. Küçük ve orta ölçekli modellerin çoğu bu kapsamın dışında kalır."
   ],
   [
    "Bu kategorideki bir model yasaklı mıdır?",
    "Hayır. Model piyasaya sunulabilir, ancak sağlayıcının daha ağır yükümlülükleri yerine getirmesi gerekir. Yasak, ayrı bir başlıkta düzenlenen kabul edilemez uygulamalar için geçerlidir."
   ]
  ]
 },
 {
  "slug": "yasakli-yapay-zeka-uygulamalari",
  "term": "Yasaklı yapay zeka uygulamaları",
  "en": "prohibited AI practices",
  "match": [
   "yasaklı yapay zeka",
   "yasaklanan yapay zeka uygulama"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "AB Yapay Zeka Yasası'nda temel haklara ve insan onuruna aykırı, kabul edilemez risk taşıdığı için kullanımı tümüyle yasaklanan yapay zeka uygulamaları.",
  "how": "Yasa, bu uygulamaları tek tek sayar. Bunlar arasında kişileri toplumsal davranışlarına göre puanlayan sosyal puanlama, insanları bilinçaltı yöntemlerle manipüle eden sistemler, kırılgan grupların zayıflıklarını sömüren uygulamalar, internetten ya da kameralardan yüz görüntüsü toplayarak veri tabanı kurma, işyeri ve okullarda duygu tanıma ve kamusal alanda gerçek zamanlı uzaktan biyometrik kimlik tespiti bulunur. Son uygulama için kolluğa dar istisnalar tanınmıştır. Yasaklar, Yasa'nın ilk yürürlüğe giren hükümleri arasındadır.",
  "why": "Yasaklar, yapay zekanın gözetim ve manipülasyon amacıyla kullanılmasına karşı en net çizgiyi çeker. Hangi uygulamanın bu kapsama girdiği, güvenlik ile özgürlükler arasındaki dengeyi ilgilendirdiği için tartışmalıdır; özellikle biyometrik tanıma istisnaları eleştiri konusu olmuştur.",
  "example": "Bir şirketin çalışanlarının yüz ifadelerinden duygu durumunu çıkaran bir yapay zeka sistemini işyerinde kullanması, Yasa kapsamında yasaklı uygulamalar arasında sayılır.",
  "faq": [
   [
    "Yasaklı uygulamaların hiç istisnası yok mu?",
    "Çoğu için yok. Ancak kamusal alanda gerçek zamanlı biyometrik tanıma gibi bazı uygulamalarda kolluk için dar ve sıkı koşullara bağlı istisnalar tanınmıştır. Ayrıntılar Yasa metninde yer alır."
   ],
   [
    "Yasağa uymayanlara ne olur?",
    "Yasada bu ihlaller için en yüksek düzeydeki idari para cezaları öngörülür. Kesin tutarlar ve uygulama usulü Yasa metnine ve ilgili makamlara bağlıdır."
   ]
  ]
 },
 {
  "slug": "kvkk-ve-yapay-zeka",
  "term": "KVKK ve yapay zeka",
  "en": "Turkish Personal Data Protection Law",
  "match": [
   "=kvkk",
   "kişisel verilerin korunması kanun"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Türkiye'de kişisel verilerin korunmasını düzenleyen 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun, kişisel veriyle eğitilen veya kişisel veri işleyen yapay zeka sistemlerine nasıl uygulandığı sorusu.",
  "how": "KVKK yapay zekaya özel değil, genel bir veri koruma kanunudur; 2016'da yürürlüğe girmiştir. Bir yapay zeka sistemi kişisel veri işlediğinde, sistemi kullanan kurum çoğunlukla veri sorumlusu sayılır. Veri, hukuka uygun bir sebebe dayanmalı, belirli ve meşru amaçla sınırlı kalmalı, ilgili kişi aydınlatılmalıdır. Sağlık ve biyometrik veri gibi özel nitelikli veriler için daha sıkı koşullar aranır. Kanun ayrıca kişiye, kendisi aleyhine yalnızca otomatik analizle çıkan sonuçlara itiraz hakkı tanır. Kişisel Verileri Koruma Kurumu bu alanda tavsiye ve rehberler yayımlar.",
  "why": "Yapay zeka modelleri çoğu zaman büyük miktarda veriyle eğitilir ve sohbet araçlarına girilen bilgiler kişisel veri içerebilir. Şirketler ve kamu kurumları için hangi verinin hangi şartla kullanılabileceği, kullanıcılar için ise kendi verilerinin akıbeti bu çerçevede belirlenir. Bu bir hukuki görüş değil, genel bir özettir.",
  "example": "Müşteri şikayetlerini yapay zekayla özetleyen bir şirketin, bu metinlerdeki isim ve telefon bilgilerinin işlenmesi için KVKK'daki şartlara uyması gerekir.",
  "faq": [
   [
    "Türkiye'de yapay zekaya özel bir kanun var mı?",
    "Yapay zekayı AB Yapay Zeka Yasası gibi bütüncül biçimde düzenleyen bir kanun bilinmiyor; bu nedenle kişisel veri söz konusu olduğunda KVKK ve ilgili mevzuat esas alınır. Güncel durumu resmi kaynaklardan kontrol etmek gerekir."
   ],
   [
    "Sohbet robotuna kişisel veri girmek KVKK açısından sorun olur mu?",
    "Bu, verinin kimin tarafından, hangi amaçla ve hangi şartlarla işlendiğine bağlıdır. Kurumların çalışanlarına hangi verileri paylaşamayacaklarını belirten kurallar koyması yaygındır; özel durumlar için hukuki destek alınmalıdır."
   ]
  ]
 },
 {
  "slug": "gdpr",
  "term": "GDPR",
  "en": "General Data Protection Regulation",
  "match": [
   "=gdpr"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Avrupa Birliği'nde kişisel verilerin toplanmasını, kullanılmasını ve saklanmasını düzenleyen kapsamlı veri koruma tüzüğü. Bireylere verileri üzerinde haklar tanır, verileri işleyen kurumlara da yükümlülükler getirir.",
  "how": "GDPR, AB'de bulunan kişilerin verilerini işleyen herkese uygulanır; kurum AB dışında olsa bile. Verinin yalnızca belirli ve meşru bir amaçla, gerektiği kadar toplanması ve hukuka uygun bir dayanağa (örneğin açık rıza) bağlanması beklenir. Kişiler verilerine erişme, düzeltme ve belirli koşullarda sildirme hakkına sahiptir. Kurallara uymayan kurumlara, küresel cirosunun yüzde 4'üne veya 20 milyon avroya kadar idari para cezası uygulanabilir; hangisi yüksekse o esas alınır. Tüzük 2018'den beri uygulanıyor.",
  "why": "Yapay zeka modelleri çoğunlukla internetten toplanan çok büyük veriyle eğitildiği için bu verinin içinde kişisel bilgiler de yer alabilir. GDPR, bu eğitimin hukuki dayanağı, silme talepleri ve şeffaflık konularında şirketleri sorguya açar. Avrupa'da yapay zeka ürünlerinin nasıl sunulacağını belirleyen temel çerçevelerden biridir.",
  "example": "İtalya'nın veri koruma kurumu 2023'te kişisel verilerin işlenmesi gerekçesiyle ChatGPT'ye geçici bir kısıtlama getirdi; hizmet, şirketin bazı önlemleri almasının ardından yeniden açıldı.",
  "faq": [
   [
    "GDPR yalnızca Avrupalı şirketlere mi uygulanır?",
    "Hayır. AB'deki kişilere mal veya hizmet sunan ya da onların davranışlarını izleyen, AB dışındaki kurumlar da kapsama girebilir."
   ],
   [
    "GDPR ile KVKK aynı şey mi?",
    "Değil. KVKK, Türkiye'nin kişisel verilerin korunması kanunudur. GDPR ile bazı benzerlikler taşır ama ayrı bir mevzuattır ve aralarında farklılıklar bulunur."
   ]
  ]
 },
 {
  "slug": "telif-hakki-ve-yapay-zeka",
  "term": "Telif hakkı ve yapay zeka",
  "en": "copyright and AI",
  "match": [
   "telif"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Yapay zeka modellerinin telifli eserlerle eğitilmesinin ve modellerin ürettiği çıktıların telif korumasına girip girmediğinin tartışıldığı hukuki alan. Yazarlar, sanatçılar, medya kuruluşları ve teknoloji şirketleri bu konuda karşı karşıya geliyor.",
  "how": "Tartışma iki noktada toplanır. Birincisi girdi tarafıdır: modeller kitap, haber, görsel ve kod gibi eserlerden oluşan geniş veri kümeleriyle eğitilir ve eser sahipleri bunun izin gerektirip gerektirmediğini sorar. İkincisi çıktı tarafıdır: bir modelin ürettiği metin veya görselin, insan katkısı yeterli değilse korunup korunmayacağı belirsizdir. Ülkeler bu sorulara farklı yanıtlar verir; sonuçlar çoğunlukla mahkeme kararları ve yasal istisnalarla şekillenir, birçok konu hâlâ netleşmiş değildir.",
  "why": "Varılan sonuç, yapay zeka şirketlerinin eğitim verisine nasıl ulaşacağını ve eser sahiplerine ödeme yapıp yapmayacağını belirler. Haber sitelerinden yazarlara kadar birçok kesimin gelirini ve haklarını doğrudan ilgilendirdiği için yapay zeka haberlerinde sık yer alır.",
  "example": "New York Times, 2023'te OpenAI ve Microsoft'a dava açarak haberlerinin izinsiz biçimde model eğitiminde kullanıldığını öne sürdü. Şirketler ise bu kullanımın hukuka uygun olduğunu savunuyor.",
  "faq": [
   [
    "Yapay zekanın ürettiği görsel telif korumasına girer mi?",
    "Genel eğilim, korumanın insan yaratıcılığına bağlı olduğu yönünde; örneğin ABD Telif Hakkı Ofisi, tamamen yapay zekanın ürettiği işleri tescil etmiyor. İnsanın anlamlı bir katkısı varsa değerlendirme değişebilir."
   ],
   [
    "Yapay zekayı telifli eserlerle eğitmek yasa dışı mı?",
    "Tek bir yanıt yok. Bazı ülkelerde bu kullanıma izin veren istisnalar var, bazılarında konu hâlâ mahkemelerde. Sonuç ülkeye, kullanılan veriye ve kullanım biçimine göre değişir."
   ]
  ]
 },
 {
  "slug": "adil-kullanim",
  "term": "Adil kullanım (fair use)",
  "en": "fair use",
  "match": [
   "fair use",
   "adil kullanım"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "ABD telif hukukunda, belirli koşullarda telifli bir eserin hak sahibinden izin alınmadan kullanılmasına imkân tanıyan esnek ilke. Eleştiri, haber, eğitim ve araştırma gibi amaçlarla yapılan kullanımlar çoğunlukla bu çerçevede değerlendirilir.",
  "how": "Mahkemeler adil kullanımı her olayda ayrı ayrı inceler ve genellikle dört ölçüte bakar: kullanımın amacı ve niteliği, eserin türü, alınan bölümün miktarı ve önemi, bir de kullanımın eserin piyasa değerine etkisi. Dönüştürücü kullanım, yani eserden yeni bir anlam veya işlev üreten kullanım, lehine sayılabilir. Tek bir ölçüt belirleyici değildir ve kesin bir formül yoktur. Bu yüzden benzer görünen olaylar farklı sonuçlanabilir.",
  "why": "Yapay zeka şirketleri, modelleri telifli eserlerle eğitmenin adil kullanım kapsamında olduğunu savunuyor; eser sahipleri ise bunun kendi piyasalarına zarar verdiğini söylüyor. ABD'deki davaların seyri, sektörün eğitim verisi stratejisini etkileyebilir. Kavram ABD'ye özgüdür, her ülkede karşılığı yoktur.",
  "example": "Google Books davasında ABD'de bir temyiz mahkemesi, kitapların taranıp aranabilir hâle getirilmesini adil kullanım saymıştı; yapay zeka tartışmalarında taraflar bu tür kararlara atıf yapıyor.",
  "faq": [
   [
    "Adil kullanım Türkiye'de de geçerli mi?",
    "Hayır, bu ABD'ye özgü, açık uçlu bir ilkedir. Türk hukuku, Fikir ve Sanat Eserleri Kanunu'nda sayılan belirli istisnalarla çalışır."
   ],
   [
    "Adil kullanım ile metin ve veri madenciliği istisnası aynı şey mi?",
    "Değil. Adil kullanım, mahkemenin olay bazında değerlendirdiği genel bir savunmadır. Metin ve veri madenciliği istisnası ise yasada tanımlanmış, belirli bir kullanımı kapsayan bir kuraldır."
   ]
  ]
 },
 {
  "slug": "metin-ve-veri-madenciligi-istisnasi",
  "term": "Metin ve veri madenciliği istisnası",
  "en": "text and data mining exception",
  "match": [
   "veri madenciliği istisna",
   "tdm istisna"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Telifli içeriğin, bilgisayarla analiz edilip örüntü çıkarılması amacıyla izinsiz kopyalanmasına belirli sınırlar içinde izin veren yasal kural. Yapay zeka eğitimi için veri toplamanın hukuki dayanaklarından biri olarak tartışılır.",
  "how": "Bu istisnalar ülkeden ülkeye farklılaşır. AB'nin 2019 tarihli Dijital Tek Pazarda Telif Hakkı Direktifi, araştırma kuruluşları için bir istisna, genel kullanım için ise hak sahiplerinin makine tarafından okunabilir biçimde karşı çıkabildiği ikinci bir istisna getirir. Hak sahibi çekilme beyanında bulunursa o içerik genel istisna kapsamında kullanılamaz. Japonya gibi bazı ülkelerde kurallar daha geniş yorumlanır. Yapay zeka eğitiminin bu istisnalara girip girmediği ise hâlâ tartışmalıdır.",
  "why": "Bu kural, yapay zeka şirketlerinin Avrupa'da eğitim verisini hangi koşullarda kullanabileceğini belirler. AB Yapay Zeka Yasası da genel amaçlı model sağlayıcılarından, bu istisnadaki çekilme beyanlarına saygı gösteren bir telif politikası bulundurmasını bekler. Böylece hem araştırmayı hem de içerik sahiplerinin haklarını koruma dengesi kurulmaya çalışılıyor.",
  "example": "Bir üniversite ekibi, yüz binlerce makaleyi tarayıp hangi konuların öne çıktığını ölçen bir analiz yaparken bu tür bir istisnaya dayanabilir.",
  "faq": [
   [
    "Bu istisna telifli eseri serbest mi bırakır?",
    "Hayır. Eserin korumasını kaldırmaz; yalnızca analiz amaçlı kopyalamaya, yasadaki şartlar çerçevesinde izin verir."
   ],
   [
    "Hak sahipleri bu istisnadan çekilebilir mi?",
    "AB'deki genel istisna için evet; hak sahipleri makine tarafından okunabilir bir beyanla çekilebilir. Araştırma kuruluşlarına tanınan istisna için ise bu tür bir çekilme söz konusu değildir."
   ]
  ]
 },
 {
  "slug": "devre-disi-birakma-hakki",
  "term": "Devre dışı bırakma hakkı (opt-out)",
  "en": "opt-out",
  "match": [
   "=opt-out",
   "ret hakkı"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir kişinin veya içerik sahibinin, verisinin ya da eserinin belirli bir amaçla kullanılmasına açıkça itiraz ederek dışarıda kalma imkânı. Yapay zekada çoğunlukla eğitim verisi toplanırken gündeme gelir.",
  "how": "Varsayılan kural kullanıma izin vermekse, çıkmak isteyen taraf bunu bildirmek zorundadır. Web sitesi sahipleri bunu robots.txt dosyasına kural ekleyerek, bazı platformlar da ayarlar veya başvuru formları üzerinden sunar. AB'nin metin ve veri madenciliği kuralları, hak sahiplerinin makine tarafından okunabilir bir beyanla çekilmesine izin verir. Opt-in ise tersidir: veri, ancak önceden açık onay verildiyse kullanılır. Hangisinin esas alınacağı hukuk ve politika tartışmasının konusudur.",
  "why": "Eleştirmenlere göre çekilme sistemi yükü içerik sahibine bindiriyor; pek çok kişi bu imkândan haberdar olmayabilir, üstelik beyan, model zaten eğitildiyse geçmişi geri almıyor. Şirketler ise bunu uygulanabilir bir denge olarak görüyor. Tartışma, yapay zekada veri hakları politikalarının merkezinde yer alıyor.",
  "example": "OpenAI, 2023'te web sitelerinin GPTBot adlı tarayıcısını robots.txt ile engelleyebileceğini duyurdu; sitenin sahibi bu kuralı eklemezse içerik tarama kapsamında kalabilir.",
  "faq": [
   [
    "Opt-out ile opt-in arasındaki fark ne?",
    "Opt-out'ta kullanım varsayılan olarak serbesttir, çıkmak isteyen itiraz eder. Opt-in'de ise kullanım için baştan açık izin gerekir."
   ],
   [
    "Opt-out yaparsam model verimi unutur mu?",
    "Genellikle hayır. Beyan çoğunlukla sonraki veri toplamalarını etkiler; daha önce eğitilmiş modeller, ayrıca bir işlem yapılmadıkça değişmeyebilir."
   ]
  ]
 },
 {
  "slug": "robots-txt",
  "term": "robots.txt",
  "en": "robots.txt",
  "match": [
   "robots.txt"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir web sitesinin kök dizininde yer alan, arama ve tarama botlarına hangi sayfalara girebileceklerini bildiren düz metin dosyası. Yapay zeka şirketlerinin veri toplama botlarına yönelik tercihleri belirtmek için de kullanılır.",
  "how": "Dosya, site adresinin sonuna /robots.txt eklenerek herkesin görebileceği biçimde yayımlanır. İçinde botun adını belirten bir user-agent satırı ve o bota izin verilen ya da yasaklanan yolları gösteren kurallar bulunur. Botlar siteye girmeden önce bu dosyayı okur ve kurallara uymayı seçer. Yani sistem bir güvenlik duvarı değil, bir nezaket kuralıdır; uymayan bir bot teknik olarak engellenmez. Protokol 1990'lardan beri kullanılıyor ve 2022'de standartlaştırıldı.",
  "why": "Yapay zeka eğitimi için web verisi toplayan botlar çoğaldıkça, robots.txt içerik sahiplerinin elindeki en bilinen tercih aracı hâline geldi. Hukuki bağlayıcılığı net olmasa da, çekilme beyanı sayılıp sayılmayacağı telif tartışmalarında önem taşıyor. Her bot kurala uymadığı için sınırları da bilinmeli.",
  "example": "Bir haber sitesi, robots.txt dosyasına GPTBot için tüm sayfaları kapsayan bir Disallow kuralı ekleyerek bu tarayıcıyı dışarıda bırakmak isteyebilir.",
  "faq": [
   [
    "robots.txt yasal olarak bağlayıcı mı?",
    "Genel olarak teknik bir gelenektir ve tek başına yasal bağlayıcılığı yoktur. Ancak bazı hukuk sistemlerinde, çekilme beyanının makine tarafından okunabilir bir biçimi olarak değerlendirilebilir."
   ],
   [
    "robots.txt içeriği korur mu?",
    "Hayır. Dosya herkese açık bir istektir; uymayan bir bot içeriğe yine erişebilir. Gerçek erişim kontrolü için giriş zorunluluğu veya botları engelleme gibi teknik önlemler gerekir."
   ]
  ]
 },
 {
  "slug": "veri-lisans-anlasmasi",
  "term": "Veri lisans anlaşması",
  "en": "data licensing deal",
  "match": [
   "lisans anlaşma",
   "içerik lisans"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir içerik veya veri sahibinin, verisini yapay zeka şirketinin model eğitimi ya da ürünlerinde kullanması için belirli şartlarla izin verdiği, genellikle ücretli sözleşme.",
  "how": "Taraflar hangi içeriğin, hangi amaçla ve ne süreyle kullanılacağını sözleşmede belirler. Kapsam yalnızca eğitimi mi içeriyor, yoksa ürün içinde içerik gösterimini ve kaynak vermeyi de mi, anlaşmaya göre değişir. Ödeme sabit bedel, kullanıma bağlı ücret ya da başka bir karşılık biçiminde olabilir. Yapay zeka şirketi böylece hukuki belirsizlikten kaçınır, içerik sahibi de verisinden gelir elde eder. Şartların çoğu kamuya açıklanmaz.",
  "why": "Bu anlaşmalar, telif davalarının sonucu beklenirken yapay zeka sektöründe bir veri piyasası oluştuğunu gösteriyor. Medya ve platform şirketleri için yeni bir gelir kaynağı, yapay zeka şirketleri içinse daha güvenilir ve güncel veri demek. Küçük yayıncıların bu masaya oturabilip oturamayacağı ise tartışma konusu.",
  "example": "Associated Press'in 2023'te OpenAI ile haber arşivinin lisanslanması konusunda anlaştığı bildirildi. Başka yayıncılar ve platformlar da benzer anlaşmalar yaptı.",
  "faq": [
   [
    "Lisans anlaşması yapan şirket telif davası riskinden kurtulur mu?",
    "Lisansın kapsadığı kullanımlar için büyük ölçüde evet. Ancak anlaşmada yer almayan veriler için risk sürer."
   ],
   [
    "Bu anlaşmalar her zaman para içerir mi?",
    "Hayır. Bazılarında ücret, bazılarında teknolojiye erişim, görünürlük veya ortak ürün gibi karşılıklar olabilir. Şartlar çoğu zaman açıklanmaz."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-duzenlemesi",
  "term": "Yapay zeka düzenlemesi",
  "en": "AI regulation",
  "match": [
   "yapay zeka düzenleme",
   "yapay zeka mevzuat",
   "ai regulation"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Yapay zekanın geliştirilmesini ve kullanılmasını yasalar, yönetmelikler ve standartlarla çerçeveleme çabalarının tümü. Amaç, yeniliği engellemeden güvenliği, temel hakları ve hesap verebilirliği korumaktır.",
  "how": "Ülkeler farklı yollar izliyor. AB, 2024'te kabul ettiği Yapay Zeka Yasası'nda risk temelli bir yaklaşım benimsedi: kimi uygulamalar yasaklanır, yüksek riskli olanlar sıkı yükümlülüklere bağlanır, düşük riskli olanlara hafif kurallar uygulanır. Bazı ülkeler ise tek bir kapsamlı yasa yerine sektöre özgü kurallar, rehberler veya gönüllü taahhütlerle ilerler. Çin gibi ülkeler üretken yapay zeka için kendi özel kurallarını çıkardı. Veri koruma ve telif gibi mevcut yasalar da yapay zekaya uygulanır.",
  "why": "Düzenlemeler, şirketlerin hangi ürünleri nasıl sunabileceğini, hangi denetimlerden geçeceğini ve olası zararlardan kimin sorumlu olacağını belirler. Aşırı katı kuralların yeniliği yavaşlattığını söyleyenlerle, gevşek kuralların toplumsal zarar doğurabileceğini savunanlar arasında bir tartışma sürüyor. Haberlerde en sık karşılaşılan başlıklardan biridir.",
  "example": "Bir şirketin işe alım sürecinde adayları puanlayan yapay zeka sistemi, AB Yapay Zeka Yasası'nda yüksek riskli kategoriler arasında değerlendirilir ve ek yükümlülüklere tabidir.",
  "faq": [
   [
    "AB Yapay Zeka Yasası nedir?",
    "AB'nin 2024'te kabul ettiği, yapay zeka sistemlerini risk düzeyine göre sınıflandıran ve yükümlülükleri buna göre belirleyen yasadır. Hükümleri aşamalı olarak yürürlüğe giriyor."
   ],
   [
    "Düzenleme yapay zekada yeniliği yavaşlatır mı?",
    "Görüşler ayrışıyor. Bir taraf, ağır uyum yükünün özellikle küçük şirketleri zorlayacağını söylüyor; diğer taraf, açık kuralların güveni artırarak benimsenmeyi destekleyeceğini savunuyor."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-yonetisimi",
  "term": "Yapay zeka yönetişimi",
  "en": "AI governance",
  "match": [
   "yapay zeka yönetişim",
   "ai governance"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Kurumların ve devletlerin yapay zeka sistemlerinin nasıl geliştirileceğini, kullanılacağını ve denetleneceğini belirleyen kural, süreç ve sorumluluk düzenlerinin bütünü. Şirket içi politikalardan uluslararası anlaşmalara kadar uzanır.",
  "how": "Şirket düzeyinde yönetişim; hangi yapay zeka uygulamasının kullanılabileceğine karar veren komiteler, risk değerlendirmeleri, veri ve model belgeleri ile olay bildirim süreçleri gibi parçalardan oluşur. Her sistem için bir sahip belirlenir ve sorun çıktığında kimin sorumlu olduğu önceden yazılır. Ulusal ve uluslararası düzeyde ise yasalar, standartlar ve gönüllü ilkeler aynı amaca hizmet eder. Bu katmanlar birbirini tamamlar: yasa asgari çıtayı koyar, kurum içi politika da günlük işleyişi o çıtaya bağlar.",
  "why": "Yapay zeka sistemleri işe alımdan kredi kararlarına kadar insanları doğrudan etkiliyor. Yönetişim olmadan hatalar, ayrımcılık ve veri ihlalleri fark edilmeden büyüyebilir. Şirketler için ayrıca yasal uyum, müşteri güveni ve itibar riski anlamına geliyor; haberlerde düzenleme tartışmaları genellikle bu başlık altında geçiyor.",
  "example": "Bir banka, kredi puanlamada kullandığı modeli devreye almadan önce risk komitesinden onay alıyor, kararların kayıtlarını tutuyor ve itirazları inceleyecek bir ekip görevlendiriyor.",
  "faq": [
   [
    "Yapay zeka yönetişimi ile yapay zeka etiği aynı şey mi?",
    "Hayır. Etik, neyin doğru olduğuna dair ilkeleri tartışır; yönetişim bu ilkeleri sorumluluk, süreç ve denetim mekanizmalarıyla uygulanabilir hale getirir."
   ],
   [
    "Yönetişim yalnızca büyük şirketleri mi ilgilendirir?",
    "Hayır. Yapay zeka kullanan her kurum, ölçeği küçük de olsa hangi aracı kimin, hangi veriyle ve hangi amaçla kullanacağını belirlemek zorunda kalır; yalnızca resmiyet düzeyi değişir."
   ]
  ]
 },
 {
  "slug": "duzenleyici-deneme-alani",
  "term": "Düzenleyici deneme alanı",
  "en": "regulatory sandbox",
  "match": [
   "düzenleyici deneme",
   "regulatory sandbox",
   "düzenleyici sandbox"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Yeni teknolojilerin, düzenleyici kurumun gözetiminde ve belirli koşullarla, sınırlı bir süre gerçek ortamda denenmesine izin veren kontrollü çerçeve. Amaç, hem yeniliği hem de kuralların uygulanabilirliğini sınamaktır.",
  "how": "Bir şirket, denemek istediği ürünü ve olası riskleri anlatan bir başvuru yapar. Düzenleyici kurum kabul ederse, süre, kullanıcı sayısı ve veri kullanımı gibi sınırlar belirlenir. Deneme boyunca kurum şirketi izler, bazı kuralları geçici olarak esnetebilir ya da rehberlik verir; kullanıcıları korumaya yönelik güvenceler ise yürürlükte kalır. Sonunda elde edilen bulgular hem şirketin ürününü düzeltmesine hem de düzenleyicinin kuralları iyileştirmesine yarar.",
  "why": "Yapay zeka hızlı değişirken yasalar yavaş ilerler; deneme alanları bu açığı kapatmaya çalışır. Küçük girişimlere uyum yükünü azaltarak denemeye imkân tanır, düzenleyicilere ise teknolojiyi gerçek kullanımda görme fırsatı verir. AB Yapay Zeka Yasası da üye ülkelerden bu tür alanlar kurmalarını bekler.",
  "example": "Bir girişim, kredi değerlendirme modelini finans düzenleyicisinin gözetiminde, sınırlı sayıda müşteriyle ve sınırlı bir süre için deneyebilir.",
  "faq": [
   [
    "Düzenleyici deneme alanı muafiyet demek midir?",
    "Hayır. Genellikle bazı kurallar geçici olarak esnetilir, ancak kullanıcıyı koruyan temel yükümlülükler sürer; şirketler yaptıklarından sorumlu olmaya devam eder."
   ],
   [
    "Bu uygulama yalnızca yapay zekaya mı özgü?",
    "Hayır. Kavram önce finans teknolojilerinde yaygınlaştı; sonra yapay zeka, enerji, sağlık gibi alanlara da uygulandı."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-denetimi",
  "term": "Yapay zeka denetimi (audit)",
  "en": "AI audit",
  "match": [
   "yapay zeka denetim",
   "algoritma denetim"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir yapay zeka sisteminin yasalara, standartlara ve kurumun kendi ilkelerine uyup uymadığını, adil, güvenli ve belgelenmiş biçimde çalışıp çalışmadığını bağımsız olarak inceleme işi. İç ekipler de dış kuruluşlar da yapabilir.",
  "how": "Denetçi önce sistemin amacını, kullandığı veriyi ve karar süreçlerini inceler. Ardından modelin farklı kullanıcı gruplarında benzer sonuçlar verip vermediğini, hatalı çıktı oranını, güvenlik açıklarını ve kayıtların yeterliliğini test eder. Gerekirse modele özel olarak hazırlanmış girdiler verilir. Sonuçlar bir raporda toplanır; eksikler için düzeltme önerilir ve sonraki dönemde takip edilir. Modelin iç yapısına erişim olmadan yapılan denetimler de vardır, ancak bunlar daha sınırlı bilgi verir.",
  "why": "Yapay zeka sistemleri dışarıdan bakıldığında çoğu zaman anlaşılması zor kutular gibi görünür. Bağımsız denetim, şirketlerin iddialarını doğrulamanın ve ayrımcılık gibi sorunları erken yakalamanın yollarından biridir. Bazı düzenlemeler belirli sistemler için bu tür değerlendirmeleri zorunlu kılıyor; denetim standartları ise hâlâ oturma aşamasında.",
  "example": "Bir işe alım platformu, özgeçmiş eleme algoritmasını bağımsız bir kuruluşa denetletiyor; kuruluş, aynı nitelikteki adayların cinsiyete göre farklı puan alıp almadığını inceliyor.",
  "faq": [
   [
    "Yapay zeka denetimi ile model testi aynı şey mi?",
    "Test, modelin teknik performansına odaklanır. Denetim daha geniştir: testlerin yanı sıra veri, süreç, belgelendirme ve sorumluluk düzenini de kapsar."
   ],
   [
    "Yapay zeka denetimini kim yapar?",
    "İç denetim ekipleri, bağımsız denetim firmaları, akademisyenler veya yetkili kurumlar yapabilir. Bağımsızlık arttıkça sonuçlara duyulan güven de genellikle artar."
   ]
  ]
 },
 {
  "slug": "iso-iec-42001",
  "term": "ISO/IEC 42001",
  "en": "ISO/IEC 42001",
  "match": [
   "42001"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Kurumların yapay zeka sistemlerini sorumlu biçimde geliştirmesi ve kullanması için bir yönetim sistemi kurmasını tanımlayan uluslararası standart. ISO ve IEC tarafından 2023'te yayımlandı ve sertifikalandırmaya elverişlidir.",
  "how": "Standart, ürün veya modelin kendisini değil, kurumun yapay zekayı yönetme biçimini ele alır. Risk değerlendirmesi, sorumlulukların atanması, veri kalitesi, şeffaflık, insan gözetimi ve sürekli iyileştirme gibi konularda kurumdan şartlar bekler. Bir kuruluş bu şartları karşıladığını bağımsız bir belgelendirme kuruluşuna gösterirse sertifika alabilir. Yapı, bilgi güvenliği için kullanılan ISO/IEC 27001 gibi yönetim sistemi standartlarına benzer; böylece mevcut süreçlere eklemlenmesi kolaylaşır.",
  "why": "Yapay zeka düzenlemeleri çoğu zaman ayrıntılı teknik yöntemlere girmez; kurumlar da uyumu somut biçimde göstermenin yollarını arar. Sertifika, müşterilere ve ortaklara ortak bir dil sunar. Ancak standardın gönüllü olduğu ve sertifikanın tek başına yasal uyumu garanti etmediği unutulmamalıdır.",
  "example": "Bir yazılım şirketi, kurumsal müşterilerinin güvenlik sorularını yanıtlamak için yapay zeka geliştirme süreçlerini bu standarda göre düzenleyip belgelendirme başvurusu yapabilir.",
  "faq": [
   [
    "ISO/IEC 42001 yasal olarak zorunlu mu?",
    "Hayır, gönüllü bir standarttır. Ancak sözleşmelerde veya ihalelerde şart olarak istenebilir ve yasal uyum çalışmalarını destekleyebilir."
   ],
   [
    "ISO/IEC 42001 bir yapay zeka modelini mi sertifikalandırır?",
    "Hayır. Sertifika modelin doğruluğunu değil, kuruluşun yapay zeka yönetim sisteminin standardın şartlarını karşıladığını gösterir."
   ]
  ]
 },
 {
  "slug": "nist-yapay-zeka-risk-yonetimi-cercevesi",
  "term": "NIST Yapay Zeka Risk Yönetimi Çerçevesi",
  "en": "NIST AI Risk Management Framework",
  "match": [
   "=nist",
   "ai rmf"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "ABD'deki Ulusal Standartlar ve Teknoloji Enstitüsü'nün (NIST) yapay zeka risklerini belirlemek, ölçmek ve azaltmak için hazırladığı gönüllü rehber. İlk sürümü 2023'te yayımlandı.",
  "how": "Çerçeve dört işlev etrafında kurulur: yönetişim (Govern), haritalama (Map), ölçme (Measure) ve ele alma (Manage). Kurum önce sorumluluk ve kültür düzenini oluşturur, sonra sistemin kullanım bağlamını ve olası zararlarını belirler. Ardından riskleri ölçer, izler ve önceliklendirir; en sonunda azaltma önlemlerini uygular. Çerçeve belirli bir teknik yöntem dayatmaz; sektöre ve uygulamaya göre uyarlanabilecek esnek bir yapı sunar.",
  "why": "Gönüllü ve bağlayıcı olmayan bu çerçeve, ABD içinde ve dışında kurumların risk politikalarını kurarken sıkça başvurduğu bir kaynak. Ortak bir dil sunduğu için şirketler, denetçiler ve kamu kurumları arasında iletişimi kolaylaştırıyor. Yasal bir zorunluluk olmasa da uyum çalışmalarında referans olarak anılıyor.",
  "example": "Bir sağlık teknolojisi şirketi, tanı destek yazılımının risklerini sistematik biçimde listelemek için çerçevenin dört işlevini iç risk toplantılarının gündem başlıkları olarak kullanabilir.",
  "faq": [
   [
    "NIST çerçevesi ile ISO/IEC 42001 arasındaki fark ne?",
    "NIST çerçevesi sertifikalandırılmayan bir risk yönetimi rehberidir. ISO/IEC 42001 ise bir yönetim sistemi standardıdır ve bağımsız kuruluşlarca belgelendirilebilir; ikisi birlikte de kullanılabilir."
   ],
   [
    "NIST çerçevesi yasal olarak zorunlu mu?",
    "Hayır, gönüllüdür. Yine de sözleşmelerde veya kurumsal politikalarda referans olarak istenebilir."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-guvenlik-enstitusu",
  "term": "Yapay Zeka Güvenlik Enstitüsü",
  "en": "AI Safety Institute",
  "match": [
   "güvenlik enstitü",
   "ai safety institute",
   "caisi"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Gelişmiş yapay zeka modellerinin risklerini değerlendirmek ve güvenlik araştırması yapmak üzere hükümetlerin kurduğu kamu kurumlarının genel adı. Birleşik Krallık ve ABD gibi ülkelerde benzer birimler oluşturuldu.",
  "how": "Bu enstitüler, öncü model geliştiren şirketlerle anlaşarak modellere yayın öncesinde veya sonrasında erişim ister ve siber saldırı, biyolojik risk ve kontrol kaybı gibi alanlarda testler yürütür. Test yöntemleri geliştirir, bulguları yayımlar ve ülkeler arasında bilgi paylaşır. Amaç, modellerin yeteneklerini düzenleyiciler ve kamuoyu için anlaşılır hale getirmektir. Genellikle yaptırım yetkileri sınırlıdır; işleyiş büyük ölçüde şirketlerin gönüllü iş birliğine dayanır.",
  "why": "Öncü modellerin yetenekleri hızla artarken bağımsız ve kamusal bir değerlendirme kapasitesi önem kazanıyor. Enstitüler, riskleri yalnızca geliştirici şirketin beyanına bırakmamayı hedefliyor. Kurumların adları ve yetkileri değişebiliyor; bu nedenle haberlerde hangi ülkenin hangi birimi kastettiğine bakmak gerekir.",
  "example": "Bir enstitü, yeni bir sohbet modelinin kötü amaçlı yazılım üretmeye ne kadar yardımcı olabildiğini ölçen standart bir test seti çalıştırıp sonuçları şirketle paylaşabilir.",
  "faq": [
   [
    "Yapay Zeka Güvenlik Enstitüsü bir düzenleyici kurum mu?",
    "Genellikle değil. Çoğu enstitü test ve araştırma yapar; bağlayıcı karar verme veya yasaklama yetkisi sınırlıdır. Rolü ülkeden ülkeye farklılaşır."
   ],
   [
    "Hangi ülkelerde yapay zeka güvenlik enstitüleri var?",
    "Birleşik Krallık ve ABD en bilinen örneklerdir; başka ülkeler de benzer kurumlar kurdu veya kurmayı tartıştı. Ad ve yapıları zamanla değişebiliyor."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-balonu",
  "term": "Yapay zeka balonu",
  "en": "AI bubble",
  "match": [
   "yapay zeka balon",
   "ai bubble",
   "yapay zeka köpüğü"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Yapay zeka şirketlerine ve altyapı yatırımlarına yönelik beklentilerin, gerçek gelir ve kâr potansiyelinin çok ötesine geçtiği; fiyatların sürdürülemez biçimde şiştiği yönündeki iddia veya endişe.",
  "how": "Balon dediğimiz olayda yatırımcılar, gelecekteki büyüme hikâyesine güvenerek varlıkları bugünkü gerçek kazancın çok üzerinde bir fiyattan alır. Fiyat yükseldikçe daha fazla kişi sürece katılır ve beklenti kendi kendini besler. Beklenen gelir gelmezse güven sarsılır, satışlar hızlanır ve fiyatlar düşebilir. Yapay zekada tartışma, devasa çip ve veri merkezi harcamalarının bu yatırımı karşılayacak gelirle buluşup buluşmayacağı etrafında dönüyor.",
  "why": "Konu, borsa değerlerinden girişim yatırımlarına, enerji ve çip talebinden istihdama kadar geniş bir alanı ilgilendiriyor. Uzmanlar arasında görüş ayrılığı var: kimi analistler geçmiş teknoloji balonlarıyla benzerlik görüyor, kimileri teknolojinin gerçek verimlilik getirdiğini savunuyor. Balon olup olmadığı ancak sonradan netleşir.",
  "example": "1990'ların sonundaki internet şirketleri (dot-com) balonu sık anılan karşılaştırmadır: internet gerçekten dünyayı değiştirdi, ama birçok şirketin değeri düştü ve pek çoğu kapandı.",
  "faq": [
   [
    "Yapay zeka balonu patlarsa teknoloji de biter mi?",
    "Gerekmez. Dot-com çöküşünden sonra da internet gelişmeye devam etti; düşen çoğunlukla fiyatlar ve zayıf iş modelleri oldu. Teknolojinin kalıcılığı ile şirket değerlerinin sürdürülebilirliği ayrı sorulardır."
   ],
   [
    "Yapay zeka balonu gerçekten var mı?",
    "Kesin bir yanıt yok. Bu bir tahmin meselesi; görüşler ayrışıyor ve bir balonun varlığı genellikle ancak fiyatlar düştükten sonra kabul ediliyor."
   ]
  ]
 },
 {
  "slug": "degerleme",
  "term": "Değerleme (şirket değeri)",
  "en": "valuation",
  "match": [
   "değerleme",
   "piyasa değeri",
   "valuation"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir şirketin ekonomik değerinin parayla ifade edilmesi. Yatırım, satın alma veya borsaya açılma gibi durumlarda şirketin hissesinin fiyatını belirlemek için kullanılır.",
  "how": "Değerleme; gelir, kâr, büyüme hızı ve pazar payı gibi verilere bakılarak yapılır. Yaygın yöntemlerden biri benzer şirketlerin piyasa çarpanlarıyla karşılaştırmaktır; bir diğeri şirketin gelecekte elde edeceği nakdi bugüne indirgemektir. Halka açık şirketlerde değeri hisse fiyatı belirler. Girişimlerde ise yatırımcı ile kurucular pazarlık eder; yatırımdan önceki ve sonraki değer ayrı hesaplanır. Sonuç bir tahmindir ve varsayımlara bağlıdır.",
  "why": "Yapay zeka haberlerinde sık geçen milyarlarca dolarlık değerleme rakamları, yatırımcıların bir şirketin geleceğine ilişkin beklentisini yansıtır; şirketin bugünkü kasasını değil. Bu rakamlar bir şirketin ne kadar sermaye toplayabileceğini, çalışanlara verilen hisselerin değerini ve rekabet gücünü etkiler. Beklentiler değişince değerleme de hızla değişebilir.",
  "example": "Varsayımsal bir örnekte, değeri 400 milyon dolar kabul edilen bir girişime yatırımcılar 100 milyon dolar koyarsa, yatırım sonrası değer 500 milyon dolar olur ve yatırımcı şirketin yüzde 20'sini alır.",
  "faq": [
   [
    "Değerleme ile piyasa değeri aynı şey mi?",
    "Halka açık şirketlerde piyasa değeri, hisse fiyatı ile hisse sayısının çarpımıdır ve değerlemenin bir ölçüsüdür. Halka açık olmayanlarda ise değer, yatırımcı pazarlığı ve hesaplamalarla belirlenir."
   ],
   [
    "Yüksek değerleme şirketin kâr ettiği anlamına mı gelir?",
    "Hayır. Değerleme gelecekteki beklentiyi yansıtır; zarar eden bir şirketin değeri yüksek olabilir, kârlı bir şirketin değeri düşük olabilir."
   ]
  ]
 },
 {
  "slug": "tohum-yatirim-turu",
  "term": "Tohum yatırım turu",
  "en": "seed round",
  "match": [
   "tohum yatırım",
   "tohum turu",
   "seed yatırım",
   "seed round"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir girişimin ürün fikrini hayata geçirmesi için aldığı ilk kurumsal yatırım turu; genellikle melek yatırımcılar veya küçük fonlar, şirket hissesi karşılığında erken aşamada küçük ölçekli kaynak sağlar.",
  "how": "Kurucular bir fikir, küçük bir ekip ve çoğu zaman ilk prototiple yatırımcıların karşısına çıkar. Yatırımcı, şirketin hissesinin bir bölümünü alır ya da sonradan hisseye dönüşen bir araç (örneğin dönüştürülebilir tahvil) kullanır. Gelen kaynak ilk mühendislerin maaşına, prototipin geliştirilmesine ve ilk müşterilerin bulunmasına gider. Bu aşamada gelir genellikle çok düşük ya da sıfırdır; yatırımcı rakamlardan çok kurucuların geçmişine, pazarın büyüklüğüne ve ekibin hızına bakar.",
  "why": "Yapay zeka girişimlerinin birçoğu tohum turuyla doğar; hangi fikirlerin ve ekiplerin ilk parayı bulduğu sektörün yönünü erken gösterir. Haberlerde 'rekor tohum turu' gibi ifadelerin geçmesi, yatırımcıların bir ekibe kuruluş aşamasında bile ne kadar değer biçtiğini yansıtır. Ancak bu aşamadaki şirketlerin önemli bir bölümü yoluna devam edemez.",
  "example": "Üç kişilik bir ekip, metin özetleyen bir yapay zeka aracının prototipini geliştirip bir melek yatırımcıdan ve küçük bir fondan ilk kaynağı alırsa bu, tohum turu olur.",
  "faq": [
   [
    "Tohum turu ile melek yatırımı aynı şey mi?",
    "Tam olarak değil. Melek yatırımcı kendi parasıyla yatırım yapan kişidir; tohum turu ise yatırımın aşamasını anlatır. Tohum turuna melek yatırımcılar da küçük fonlar da katılabilir."
   ],
   [
    "Tohum turunda şirkete ne kadar para girer?",
    "Tutar ülkeye, döneme ve sektöre göre çok değişir. Yapay zekada model eğitmek pahalı olduğundan bazı turlar büyük olabilir; standart sayılan tek bir rakam yoktur."
   ]
  ]
 },
 {
  "slug": "seri-a-b-c-yatirim-turlari",
  "term": "Seri A, B, C yatırım turları",
  "en": "Series A, B, C funding",
  "match": [
   "=seri a",
   "=seri b",
   "=seri c",
   "=seri d",
   "series a",
   "series b",
   "series c"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir girişimin tohum turundan sonra, büyüme aşamalarına göre sırayla yaptığı yatırım turları; harf ilerledikçe şirket olgunlaşır, tur büyüklüğü ve beklentiler genellikle artar.",
  "how": "Seri A genellikle ürünün işe yaradığının ilk işaretleri görüldüğünde, büyüyen bir gelir ve müşteri tabanı için yapılır. Seri B, işi ölçeklendirmek, yeni pazarlara açılmak ve ekibi büyütmek için yapılır. Seri C ve sonrası ise olgunlaşmış şirketlerin satın alma yapması, yeni ülkelere yayılması ya da halka arza hazırlanması amacıyla kullanılır. Her turda yeni yatırımcılar hisse alır; mevcut ortakların payı seyrelir. Harflerin anlamı kesin bir kural değil, piyasada yerleşmiş bir adlandırmadır.",
  "why": "Haberlerde bir yapay zeka şirketinin hangi turda olduğu, olgunluğu hakkında hızlı bir fikir verir. Tur büyüdükçe şirketin değerlemesi ve yatırımcıların beklentisi de yükselir; bu da şirketi hızlı büyümeye, sonunda da satışa ya da halka arza iter. Çalışanlar için de önemlidir, çünkü hisselerinin değeri bu turlarla belirlenir.",
  "example": "Bir yapay zeka asistanı girişimi ilk ücretli müşterilerini kazandıktan sonra Seri A, kurumsal müşteri sayısını katlamak için de sonraki yıllarda Seri B toplayabilir.",
  "faq": [
   [
    "Seri A, B ve C arasındaki fark ne?",
    "Fark şirketin olgunluğundan gelir: A ürünün tuttuğunu göstermek, B ölçeklenmek, C ise genişlemek veya halka arza hazırlanmak içindir. Sınırlar kesin değildir; adlandırma sektörde alışkanlıkla oturmuştur."
   ],
   [
    "Her girişim bütün turları geçer mi?",
    "Hayır. Bazı şirketler daha az turla ilerler, bazıları kâr edip dışarıdan yatırım almaz, bazıları da yolda kapanır ya da satın alınır."
   ]
  ]
 },
 {
  "slug": "risk-sermayesi",
  "term": "Risk sermayesi",
  "en": "venture capital",
  "match": [
   "risk sermaye",
   "girişim sermaye",
   "venture capital"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Henüz kanıtlanmamış ama hızlı büyüme potansiyeli taşıyan girişimlere, şirket hissesi karşılığında yatırım yapan fonların sağladığı finansman türü; yüksek risk ve yüksek getiri beklentisine dayanır.",
  "how": "Risk sermayesi fonları, emeklilik fonları, üniversite vakıfları ve varlıklı kişiler gibi yatırımcılardan para toplar. Fon yöneticileri bu parayı çok sayıda girişime dağıtır ve karşılığında hisse alır. Yatırımların çoğu getiri sağlamaz; fon, birkaç büyük başarının kayıpları karşılamasına güvenir. Getiri, şirket satıldığında ya da halka arz edildiğinde hisselerin satılmasıyla elde edilir. Fonlar para vermenin yanında yönetim kurulu desteği ve iş bağlantıları da sunar.",
  "why": "Yapay zekada model eğitmek ve hesaplama gücü kiralamak çok pahalı olduğundan, birçok laboratuvar ve girişim risk sermayesine bağımlıdır. Hangi fonların hangi şirketlere yatırım yaptığı, sektörün hangi yöne gittiğini ve rekabetin nasıl şekillendiğini gösterir. Yatırımcı beklentileri de şirketlerin ürün ve büyüme kararlarını etkiler.",
  "example": "Bir fon, yapay zeka destekli hukuk yazılımı geliştiren bir girişime para verip karşılığında hisse alır; şirket büyür ve satılırsa fon payını nakde çevirir.",
  "faq": [
   [
    "Risk sermayesi ile melek yatırımcı arasındaki fark ne?",
    "Melek yatırımcı kendi parasıyla, genellikle çok erken aşamada yatırım yapar. Risk sermayesi fonları ise başkalarından topladığı parayı profesyonelce yönetir ve çoğunlukla daha büyük tutarlar yatırır."
   ],
   [
    "Risk sermayesi bir borç mudur?",
    "Hayır. Girişim parayı geri ödemek zorunda değildir; karşılığında yatırımcıya şirket hissesi verilir. Şirket başarısız olursa yatırımcı parasını kaybedebilir."
   ]
  ]
 },
 {
  "slug": "halka-arz",
  "term": "Halka arz (IPO)",
  "en": "initial public offering",
  "match": [
   "halka arz",
   "=ipo"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Özel bir şirketin hisselerini ilk kez borsada genel yatırımcılara satışa sunması; böylece şirket kamuya açık hale gelir ve hisseleri borsada alınıp satılabilir.",
  "how": "Şirket önce bir yatırım bankası veya aracı kurumla çalışır, finansal bilgilerini ve risklerini anlatan resmî belgeleri hazırlayıp düzenleyici kuruma sunar. Onay sonrası hisse fiyat aralığı belirlenir, yatırımcılardan talep toplanır ve hisseler belirlenen fiyattan satılır. Ardından hisseler borsada işlem görmeye başlar. Şirket satışla yeni para elde edebilir; mevcut ortaklar da paylarının bir kısmını satarak nakde çevirebilir. Halka açık şirket olmak, düzenli finansal raporlama yükümlülüğü getirir.",
  "why": "Yapay zeka şirketleri çok büyük sermaye gerektirdiğinden halka arz, hem para bulmanın hem de erken yatırımcılara çıkış sağlamanın önemli yollarından biridir. Halka arz haberleri, piyasanın bir sektöre ne kadar güvendiğini yansıtır. Şirketin hesapları kamuya açıldığı için gelir, kâr ve riskler ilk kez ayrıntılı biçimde görülebilir.",
  "example": "Yarı iletken tasarım şirketi Arm, 2023'te Nasdaq'ta halka arz oldu; hisseleri o tarihten itibaren borsada herkesin alıp satabileceği hale geldi.",
  "faq": [
   [
    "Halka arz ile borsaya kote olmak aynı şey mi?",
    "Halka arz, hisselerin ilk kez geniş kitleye satılmasıdır; kote olmak ise hisselerin borsada işlem görmeye başlamasıdır. Pratikte ikisi çoğunlukla birlikte anılır."
   ],
   [
    "Halka arza katılan yatırımcı kazanır mı?",
    "Garanti yoktur. Hisse fiyatı ilk günlerde yükselebilir de düşebilir de. Bu bir yatırım tavsiyesi değildir; her yatırım risk taşır."
   ]
  ]
 },
 {
  "slug": "unicorn",
  "term": "Unicorn (tek boynuzlu at)",
  "en": "unicorn",
  "match": [
   "unicorn",
   "tek boynuzlu"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Değerlemesi bir milyar doları aşmış, borsada işlem görmeyen girişim; adını masallardaki nadir yaratıktan alır, çünkü bu büyüklüğe ulaşan şirketlerin sayısı başlangıçta çok azdı.",
  "how": "Değerleme, son yatırım turunda yatırımcıların şirketin hisselerine biçtiği değerden hesaplanır; yani şirketin kasasındaki paradan değil, yatırım anlaşmasındaki fiyattan çıkar. Bir girişim bu eşiği geçtiğinde 'unicorn' sayılır. Değerlemesi on milyar doları aşanlara ise bazen 'decacorn' denir. Terim, yatırımcı Aileen Lee'nin 2013'te kullanmasıyla yaygınlaştı. Halka açık şirketler bu sınıfa girmez; unicorn olmak için şirketin özel olması gerekir.",
  "why": "Yapay zeka girişimlerinin kısa sürede unicorn olması, sektöre akan paranın büyüklüğünü gösterir. Ancak değerleme bir tahmindir; bir şirketin unicorn olması kâr ettiği ya da sürdürülebilir olduğu anlamına gelmez. Haberleri okurken rakamın bir piyasa beklentisi olduğunu akılda tutmak gerekir.",
  "example": "Çok az gelirle ya da henüz ürün çıkarmadan yola çıkan bir yapay zeka laboratuvarı, yeni bir turda bir milyar doların üzerinde değerlemeyle yatırım alırsa unicorn ilan edilir.",
  "faq": [
   [
    "Unicorn ile decacorn arasındaki fark nedir?",
    "Unicorn, değerlemesi bir milyar doları aşan özel girişimdir. Decacorn ise değerlemesi on milyar doları aşan girişimler için kullanılan, daha az yaygın bir addır."
   ],
   [
    "Unicorn olmak şirketin kârlı olduğu anlamına gelir mi?",
    "Hayır. Değerleme yatırımcıların beklentisini yansıtır; unicorn olan birçok şirket hâlâ zarar ediyor olabilir."
   ]
  ]
 },
 {
  "slug": "yetenek-satin-alimi",
  "term": "Yetenek satın alımı (acqui-hire)",
  "en": "acqui-hire",
  "match": [
   "acqui-hire",
   "acquihire",
   "yetenek satın alım"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir şirketin, girişimin ürününden çok ekibini ve uzmanlığını elde etmek için o girişimi satın alması ya da kurucularını ve çalışanlarını işe almasıdır.",
  "how": "Büyük şirket, küçük bir girişimin mühendislerini ve araştırmacılarını ekibine katmak ister. Bunu tam bir satın almayla yapabilir; ya da kurucuları ve ekibi işe alıp girişimin teknolojisi için lisans ücreti ödeyebilir. Genellikle girişimin ürünü kapatılır ya da arka planda kalır. Yatırımcıların ne kazanacağı anlaşmanın yapısına bağlıdır. Yapay zekada nitelikli araştırmacı sayısı sınırlı olduğundan, bu yol işe alım yarışında hızlı bir kestirme sayılır.",
  "why": "Yetenek satın alımları, yapay zekada nitelikli araştırmacıların ne kadar değerli olduğunu gösterir. Lisans ve işe alım üzerinden kurulan bazı anlaşmalar rekabet kurumlarının dikkatini çekti; çünkü bunlar klasik birleşme ve devralma denetiminden farklı yollardan ilerleyebiliyor. Çalışanlar ve yatırımcılar için sonuçlar da anlaşmaya göre değişebilir.",
  "example": "Microsoft'un 2024'te Inflection AI'ın kurucularını ve ekibinin önemli bir bölümünü işe alması, sektörde bu tür anlaşmalara sık verilen örneklerden biridir.",
  "faq": [
   [
    "Yetenek satın alımı ile normal satın alma arasındaki fark ne?",
    "Normal satın almada amaç genellikle ürün, müşteri tabanı ya da pazar payıdır. Yetenek satın alımında asıl hedef ekiptir; ürün çoğu zaman ikinci planda kalır."
   ],
   [
    "Yetenek satın alımında çalışanlara ne olur?",
    "Genellikle ekip alıcı şirkete geçer, ancak ayrıntılar anlaşmaya göre değişir. Hisse, maaş ve geride kalanların durumu her olayda farklıdır."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-sermaye-harcamasi",
  "term": "Yapay zeka sermaye harcaması (capex)",
  "en": "AI capital expenditure",
  "match": [
   "sermaye harcama",
   "=capex"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Şirketlerin yapay zeka için veri merkezi, çip, sunucu ve ağ altyapısına yaptığı uzun ömürlü yatırım harcamaları; gündelik işletme giderlerinden ayrı olarak finansal tablolarda gösterilir.",
  "how": "Capex (sermaye harcaması), bir şirketin uzun yıllar kullanacağı varlıklara ayırdığı paradır. Yapay zekada bu, çoğunlukla GPU gibi hızlandırıcı çiplerin, sunucuların, soğutma ve elektrik altyapısının ve yeni veri merkezi binalarının maliyetidir. Büyük bulut şirketleri bu harcamayı kâr tablosunda bir anda gider yazmak yerine varlık olarak kaydedip zamana yayarak amorti eder. Şirketler her çeyrek bu harcamayı ve gelecek beklentilerini yatırımcılara açıklar.",
  "why": "Yapay zeka yarışının büyük bölümü bu harcamalarla yürüyor; Microsoft, Alphabet, Amazon ve Meta gibi şirketlerin capex açıklamaları sektörün temposunu gösterir. Yatırımcılar bu harcamaların yeterli gelir getirip getirmeyeceğini tartışıyor. Ayrıca elektrik, çip ve su talebine ilişkin tartışmaları da besliyor.",
  "example": "Bir bulut şirketi çeyrek sonuçlarını açıklarken yeni veri merkezleri ve GPU alımları için sermaye harcamasını artıracağını duyurursa bu, yapay zeka capex haberi olur.",
  "faq": [
   [
    "Capex ile işletme gideri (opex) arasındaki fark ne?",
    "Capex, uzun süre kullanılacak varlıklara yapılan yatırımdır; opex ise maaş, kira ve bulut hizmeti gibi gündelik giderlerdir. Bir şirket GPU satın alırsa bu capex, kiralarsa genellikle opex olarak görünür."
   ],
   [
    "Yapay zeka capex'i neden tartışılıyor?",
    "Çünkü harcamalar çok büyük, getirisi ise henüz belirsiz. Bir görüşe göre talep bu yatırımı haklı çıkaracak; başka bir görüşe göre aşırı yatırım riski var."
   ]
  ]
 },
 {
  "slug": "yillik-tekrarlayan-gelir",
  "term": "Yıllık tekrarlayan gelir (ARR)",
  "en": "annual recurring revenue",
  "match": [
   "yıllık tekrarlayan gelir",
   "yıllıklandırılmış gelir",
   "=arr"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir şirketin abonelik veya sözleşme gibi düzenli ve tekrarlanması beklenen gelirinin yıllık ölçeğe çevrilmiş toplamı; özellikle yazılım ve yapay zeka hizmeti şirketlerinde büyüklük göstergesi olarak kullanılır.",
  "how": "En basit hesapla, aylık düzenli gelir on iki ile çarpılır. Tek seferlik satışlar, kurulum ücretleri veya danışmanlık gibi tekrarlanmayan gelirler dışarıda bırakılır. Yeni müşteriler ARR'yi artırır; müşteri kaybı veya abonelik iptali azaltır. Kullanıma göre ücretlendirilen yapay zeka hizmetlerinde gelir aydan aya değişebildiği için bazı şirketler son dönemin gelirini yıla yayarak 'koşu oranı' (run-rate) hesaplar; bu yüzden ARR rakamları şirketten şirkete aynı yöntemle bulunmayabilir.",
  "why": "ARR, yatırımcıların ve haberlerin yapay zeka girişimlerinin ticari ilerlemesini izlediği temel ölçülerden biridir. Hızla büyüyen bir ARR, ürünün gerçekten kullanıldığını ve para kazandığını gösterir. Ancak tanımlar esnek olduğundan, açıklanan rakamlara bakarken hangi gelirin dahil edildiğine dikkat etmek gerekir.",
  "example": "Aylık 100 bin dolar düzenli abonelik geliri olan bir yapay zeka yazılım şirketinin ARR'si 1,2 milyon dolardır.",
  "faq": [
   [
    "ARR ile toplam gelir aynı şey mi?",
    "Hayır. ARR yalnızca tekrarlanması beklenen geliri kapsar; tek seferlik satışlar toplam gelirde yer alabilir ama ARR'ye girmez. Ayrıca ARR bir öngörüdür, muhasebe geliri değildir."
   ],
   [
    "ARR ile MRR arasındaki fark nedir?",
    "MRR aylık tekrarlayan gelirdir, ARR ise yıllık. ARR kabaca MRR'nin on iki katıdır."
   ]
  ]
 },
 {
  "slug": "saas",
  "term": "SaaS (hizmet olarak yazılım)",
  "en": "software as a service",
  "match": [
   "=saas",
   "hizmet olarak yazılım"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Yazılımın bir kez satılıp kurulması yerine internet üzerinden, genellikle aylık ya da yıllık abonelikle kiralanarak kullanıldığı sunum modeli. Program sağlayıcının sunucularında çalışır, kullanıcı tarayıcı ya da uygulama üzerinden erişir.",
  "how": "Yazılımı geliştiren şirket uygulamayı kendi ya da bir bulut sağlayıcısının sunucularında barındırır. Müşteri bir şey kurmadan hesap açar, tarayıcıdan veya uygulamadan giriş yapar. Güncellemeler, güvenlik yamaları ve bakım sağlayıcı tarafından yapılır; müşteri karşılığında düzenli bir abonelik öder. Fiyat çoğunlukla kullanıcı sayısına ya da seçilen pakete bağlıdır. Bir evin satın alınması yerine kiralanmasına benzer: bakım ev sahibine aittir, kiracı ise istediği zaman taşınabilir.",
  "why": "Yapay zeka şirketlerinin birçoğu ürünlerini SaaS mantığıyla sunuyor; sohbet botları, kodlama asistanları ve kurumsal yapay zeka araçları abonelikle satılıyor. Üretken yapay zeka ise klasik SaaS'ın maliyet yapısını değiştiriyor, çünkü her kullanımda gerçek bir hesaplama maliyeti doğuyor. Fiyatlandırma ve kâr marjı tartışmalarının çıkış noktası çoğu zaman bu modeldir.",
  "example": "Bir şirketin müşteri ilişkileri yazılımını kendi sunucusuna kurmak yerine aylık abonelikle tarayıcıdan kullanması tipik bir SaaS örneğidir; ChatGPT'nin abonelik planları da aynı mantıkla satılır.",
  "faq": [
   [
    "SaaS ile bulut bilişim aynı şey mi?",
    "Hayır. Bulut bilişim sunucu ve depolama gibi altyapının internet üzerinden kiralanmasını da kapsayan geniş bir kavramdır. SaaS bunun içinde, doğrudan kullanıcıya hazır yazılım sunan katmandır."
   ],
   [
    "SaaS'ta veriler kime aittir?",
    "Genellikle veri müşteriye aittir ama sağlayıcının sunucularında tutulur. Ayrıntılar sözleşmeye ve gizlilik koşullarına bağlı olduğundan kurumların bu metinleri dikkatle okuması gerekir."
   ]
  ]
 },
 {
  "slug": "kullanim-bazli-fiyatlandirma",
  "term": "Kullanım bazlı fiyatlandırma",
  "en": "usage-based pricing",
  "match": [
   "kullanım bazlı",
   "kullanıma dayalı fiyat"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Müşterinin sabit bir paket yerine, hizmeti ne kadar kullandıysa o kadar ödediği fiyatlandırma yöntemi. Ölçü birimi istek sayısı, işlenen veri miktarı ya da harcanan hesaplama gücü olabilir.",
  "how": "Sağlayıcı kullanımı ölçülebilir bir birime böler: yapılan çağrı sayısı, işlenen metin miktarı, çalışan dakika gibi. Her birimin bir fiyatı vardır ve dönem sonunda toplam kullanım bu fiyatla çarpılarak fatura çıkar. Elektrik ya da su faturası bilinen bir benzetmedir: sayaç ne gösteriyorsa o ödenir. Bazı sağlayıcılar bunu ücretsiz bir kota, sabit bir taban ücret ya da kullanım üst sınırıyla birleştirir. Böylece az kullanan az öder, yoğun kullanan daha fazla öder.",
  "why": "Üretken yapay zekada her istek gerçek bir hesaplama maliyeti doğurduğu için kullanım bazlı model sağlayıcılar açısından doğal bir seçim. Müşteri için avantajı düşük başlangıç maliyeti, riski ise faturanın önceden tam kestirilememesi. Yapay zeka ürünlerinin abonelikle mi yoksa kullanıma göre mi satılması gerektiği sektör haberlerinde sık tartışılıyor.",
  "example": "Bir şirketin müşteri destek yazışmalarını yapay zeka modeline gönderip yalnızca işlenen metin kadar ödemesi kullanım bazlı fiyatlandırmaya örnektir. Ay sonunda fatura, o ay ne kadar yazışma işlendiyse ona göre çıkar.",
  "faq": [
   [
    "Kullanım bazlı fiyatlandırma ile abonelik arasındaki fark ne?",
    "Abonelikte kullanım ne olursa olsun belirli bir dönem için sabit ücret ödenir. Kullanım bazlı modelde ücret, gerçekleşen kullanıma göre her dönem değişir."
   ],
   [
    "Kullanım bazlı fiyatlandırma ile token başına fiyatlandırma aynı mı?",
    "Token başına fiyatlandırma, kullanım bazlı modelin dil modellerine uygulanan özel biçimidir. Genel kavram istek sayısı, dakika ya da veri hacmi gibi başka birimleri de kapsar."
   ]
  ]
 },
 {
  "slug": "token-basina-fiyatlandirma",
  "term": "Token başına fiyatlandırma",
  "en": "per-token pricing",
  "match": [
   "token başına",
   "milyon token başına"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Dil modeli hizmetlerinde ücretin, modelin okuduğu ve yazdığı metin parçalarının (token) sayısına göre hesaplandığı fiyatlandırma biçimi. Belirli bir token miktarı için birim fiyat ilan edilir.",
  "how": "Model metni token adı verilen küçük parçalara böler; bir token bir kelimenin tamamı, bir kısmı ya da noktalama işareti olabilir. Kullanıcının gönderdiği metin (girdi) ile modelin ürettiği yanıt (çıktı) ayrı ayrı sayılır. Sağlayıcılar çoğunlukla belirli bir token miktarı için birim fiyat ilan eder; girdi ve çıktı fiyatları birbirinden farklı olabilir. Toplam fatura, sayılan tokenların birim fiyatla çarpılmasıyla bulunur. Uzun bir belge göndermek ya da uzun bir yanıt istemek daha çok token harcadığı için daha pahalıya gelir.",
  "why": "Yapay zeka uygulaması geliştiren ekipler için maliyet planlamasının temel kalemi token harcamasıdır. Aynı iş için kısa bir istem yazmak, gereksiz uzun bağlamdan kaçınmak ve daha küçük bir model seçmek faturayı doğrudan etkiler. Model fiyatları haberlerde sık geçse de zamanla değiştiği için güncel rakamlara sağlayıcının kendi sayfasından bakmak gerekir.",
  "example": "Bir uygulama geliştirici, kullanıcıdan gelen on sayfalık sözleşmeyi özetlettiğinde hem sözleşme metni hem de üretilen özet token olarak sayılır ve fatura bu toplamdan çıkar.",
  "faq": [
   [
    "Bir token kaç kelimeye denk gelir?",
    "Sabit bir oran yoktur; dile ve modelin kullandığı token yapısına göre değişir. Türkçe gibi eklemeli dillerde kelimeler çoğunlukla daha fazla parçaya bölündüğü için aynı metin daha çok token tutabilir."
   ],
   [
    "Girdi ve çıktı tokenları neden ayrı fiyatlanır?",
    "Birçok sağlayıcı ikisini ayrı fiyatlar, çünkü metni okumak ile yanıt üretmek farklı hesaplama yükü getirir. Uygulama ayrıntıları sağlayıcıdan sağlayıcıya değişir."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-yerlisi-sirket",
  "term": "Yapay zeka yerlisi şirket (AI-native)",
  "en": "AI-native",
  "match": [
   "ai-native",
   "yapay zeka yerlisi"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Ürününü, iş akışını ve organizasyonunu baştan yapay zekanın merkezde olacağı biçimde kuran şirket. Yapay zeka burada sonradan eklenen bir özellik değil, işin çalışma biçiminin temelidir.",
  "how": "Bu şirketler ürünü tasarlarken yapay zeka modellerinin yapabileceklerini başlangıç noktası alır. Ürün, modelin yanıtlarına ve görevleri kısmen kendi başına yürütmesine göre şekillenir. İç süreçlerde de yazılım geliştirme, müşteri desteği ya da analiz gibi işlerde yapay zeka araçları rutin olarak kullanılır. Köklü şirketler ise çoğunlukla mevcut ürünlerine yapay zeka özelliği ekler. Aradaki fark kabaca şöyle anlaşılır: yapay zeka çıkarıldığında ürün hâlâ anlamlı bir işlev görüyor mu?",
  "why": "Girişim ve yatırım haberlerinde sık geçen bu ifade, bir şirketin yapay zekayı gerçekten çekirdeğe alıp almadığını ayırt etmeye çalışır. Ancak tanımı kesin değildir ve zaman zaman pazarlama dili olarak da kullanılır. Bu yüzden etikete değil, ürünün yapay zekaya ne kadar bağımlı olduğuna bakmak daha sağlıklıdır.",
  "example": "Kullanıcının isteğini doğal dille alıp sözleşme incelemesini yapay zeka modeliyle yürüten bir hukuk teknolojisi girişimi bu tanıma uyar; eski bir yazılıma sonradan sohbet kutusu eklenmesi ise genellikle uymaz.",
  "faq": [
   [
    "AI-native ile yapay zeka özellikli şirket arasındaki fark ne?",
    "Yapay zeka özellikli şirketler mevcut ürünlerine yapay zeka işlevleri ekler. AI-native şirketlerde ürün, yapay zeka olmadan var olamayacak biçimde kurulur. Yine de aradaki sınır için herkesçe kabul gören bir ölçüt yoktur."
   ],
   [
    "Yapay zeka yerlisi şirketlerin hepsi kendi modelini mi geliştirir?",
    "Hayır. Birçoğu başkalarının geliştirdiği modelleri programlama arayüzü üzerinden kullanır ve değeri ürün tasarımında, veride ve iş akışında yaratır."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-sarmalayicisi",
  "term": "Yapay zeka sarmalayıcısı (wrapper)",
  "en": "AI wrapper",
  "match": [
   "wrapper",
   "sarmalayıcı"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Kendi yapay zeka modelini geliştirmek yerine başka bir şirketin modelini programlama arayüzüyle kullanıp üzerine arayüz ve işlevler ekleyen ürün. Genellikle ince bir katman olarak görülür.",
  "how": "Uygulama, kullanıcıdan aldığı girdiyi hazırladığı yönergelerle birlikte bir sağlayıcının modeline programlama arayüzü (API) aracılığıyla gönderir. Gelen yanıtı biçimlendirir, gerekirse kendi veri kaynaklarıyla birleştirir ve kullanıcıya düzenli bir arayüzle sunar. Model dışarıdan kiralandığı için ürünü geliştirmek görece hızlı ve ucuzdur. Karşılığında şirket, modelin fiyatına, kullanım kurallarına ve sürüm değişikliklerine bağımlı hale gelir.",
  "why": "Terim hem tarafsız bir tanım hem de eleştiri olarak kullanılır. Eleştirenler ürünün kolay kopyalanabileceğini ve model sağlayıcısının aynı özelliği kendi ürününe ekleyebileceğini söyler. Savunanlar ise iyi bir arayüzün, özel verinin ve belirli bir alana özgü iş akışının gerçek değer yarattığını öne sürer. Tartışma, yapay zeka girişimlerinin ne kadar kalıcı olabileceği sorusuna dayanır.",
  "example": "Yüklenen PDF dosyalarıyla sohbet etmeyi sağlayan bir uygulama, arka planda bir sağlayıcının dil modelini çağırıyorsa tipik bir sarmalayıcıdır.",
  "faq": [
   [
    "Sarmalayıcı olmak kötü bir şey mi?",
    "Tek başına değil. Birçok başarılı yazılım başkasının teknolojisi üzerine kurulur. Belirleyici olan, ürünün model dışında ne kadar özgün değer sunduğudur."
   ],
   [
    "Sarmalayıcı ile ince ayar yapılmış model arasındaki fark ne?",
    "Sarmalayıcı genellikle hazır modeli olduğu gibi çağırır ve etrafına ürün kurar. İnce ayarda ise model ek verilerle belirli bir işe uyarlanır. İkisi birbirini dışlamaz; bir ürün ikisini birlikte kullanabilir."
   ]
  ]
 },
 {
  "slug": "is-gucu-otomasyonu",
  "term": "İş gücü otomasyonu",
  "en": "workforce automation",
  "match": [
   "iş gücü otomasyon"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Çalışanların yaptığı görevlerin bir bölümünün ya da tamamının yazılım, robot veya yapay zeka sistemleriyle yerine getirilmesi. Çoğunlukla bir mesleğin tamamını değil, o mesleği oluşturan bazı görevleri etkiler.",
  "how": "Süreç önce bir işin görevlere ayrılmasıyla başlar: veri girişi, belge özetleme, ilk taslağı yazma gibi. Tekrarlı ve kurala dayalı görevler klasik yazılımla, metin ve görüntü anlamayı gerektirenler ise artık üretken yapay zeka modelleriyle devredilebiliyor. Çoğu durumda meslek bütünüyle ortadan kalkmaz; görevlerin bir kısmı makineye geçer, çalışan geriye kalan işlere, denetime ve karar vermeye yönelir. Sonuç, işin yapısına, düzenlemelere ve işverenin tercihine göre görev kaybı, iş değişimi ya da verimlilik artışı olabilir.",
  "why": "Yapay zekanın istihdam üzerindeki etkisi kamuoyunun en çok merak ettiği, uzmanların da hemfikir olmadığı konulardan biri. Bazı çalışmalar yaygın iş kaybı riskine, bazıları ise yeni iş alanlarının doğacağına dikkat çekiyor. Eğitim, sosyal koruma ve geçiş desteği gibi politika tartışmalarının zemini burasıdır.",
  "example": "Bir sigorta şirketinin hasar dosyalarındaki ilk belge okuma ve özetleme adımını yapay zekaya devredip kararı yine uzmana bırakması, iş gücü otomasyonunun görev düzeyindeki bir örneğidir.",
  "faq": [
   [
    "Otomasyon ile yapay zeka aynı şey mi?",
    "Hayır. Otomasyon, bir işin makineye yaptırılmasını anlatan genel bir kavramdır; yapay zeka bunun yalnızca bir yoludur. Klasik yazılımlar ve sanayi robotları da otomasyon sağlar."
   ],
   [
    "Otomasyon mutlaka işten çıkarma anlamına mı gelir?",
    "Hayır. Etkisi sektöre ve şirkete göre değişir. Kimi durumda görevler değişir, kimi durumda pozisyon sayısı azalır. Ekonomistler genel etkinin boyutu konusunda ayrışıyor."
   ]
  ]
 },
 {
  "slug": "yeniden-beceri-kazandirma",
  "term": "Yeniden beceri kazandırma (reskilling)",
  "en": "reskilling",
  "match": [
   "reskilling",
   "yeniden beceri",
   "upskilling"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "İşleri değişen ya da ortadan kalkan çalışanların farklı bir role geçebilmesi için yeni bir beceri seti öğrenmesi. Aynı alanda derinleşmeyi değil, başka bir göreve hazırlanmayı anlatır.",
  "how": "Süreç, şirketin ya da kurumun hangi becerilerin azaldığını, hangilerinin gerekli olacağını belirlemesiyle başlar. Ardından çalışanlar için kurs, atölye, iş başında eğitim ya da sertifika programı gibi yollar açılır. Örneğin veri girişi yapan biri veri analizine, müşteri temsilcisi ise yapay zeka sistemlerini denetleyen bir role yönlendirilebilir. Programları işverenler, devlet kurumları veya eğitim kuruluşları yürütür. Başarı, öğrenilenlerin gerçek bir göreve dönüşmesiyle ölçülür.",
  "why": "Yapay zeka görevlerin içeriğini hızla değiştirdiği için yeniden beceri kazandırma, otomasyonun yarattığı geçiş maliyetini azaltmanın başlıca yollarından biri olarak görülüyor. Şirketler için dışarıdan işe almaya bir alternatif, çalışanlar için ise iş güvencesi anlamına gelebilir. Maliyetin kimin tarafından karşılanacağı ise ayrı bir tartışma konusu.",
  "example": "Bir bankanın şube işlemleri personeline, dijital kanallar yaygınlaştıktan sonra müşteri verisi analizi eğitimi verip onları farklı bir birime geçirmesi yeniden beceri kazandırmaya örnektir.",
  "faq": [
   [
    "Reskilling ile upskilling arasındaki fark nedir?",
    "Reskilling, yeni bir role geçmek için farklı beceriler öğrenmektir. Upskilling ise çalışanın mevcut rolünde becerilerini geliştirmesidir. Pratikte ikisi sıklıkla iç içe geçer."
   ],
   [
    "Yeniden beceri kazandırma kimin sorumluluğunda?",
    "Bu tartışmalı. Kimi görüşler işverenin, kimileri devletin, kimileri bireyin sorumluluğu olduğunu savunur. Uygulamada çoğunlukla bu tarafların ortak çabası gerekir."
   ]
  ]
 },
 {
  "slug": "golge-yapay-zeka",
  "term": "Gölge yapay zeka (shadow AI)",
  "en": "shadow AI",
  "match": [
   "gölge yapay zeka",
   "shadow ai"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Çalışanların kurumun bilgisi ya da onayı olmadan iş için kullandığı yapay zeka araçları. Çoğunlukla kişisel hesapla kullanılan sohbet botları ve benzeri uygulamalar bu kapsamda anılır.",
  "how": "Çalışan işini hızlandırmak için kurumun onaylamadığı bir yapay zeka aracını kullanır; örneğin bir raporu özetletmek için metni kişisel hesabından bir sohbet botuna yapıştırır. Bilgi işlem ve güvenlik ekipleri bu kullanımı göremediği için araca hangi verinin verildiği, nerede saklandığı ve modelin geliştirilmesinde kullanılıp kullanılmadığı bilinmez. Kurumlar bunu azaltmak için onaylı araçlar sunar, kullanım politikaları yazar ve çalışanları bilgilendirir.",
  "why": "Müşteri bilgisi, kaynak kod ya da ticari sır gibi verilerin denetimsizce dış servislere gitmesi veri sızıntısına ve mevzuata uyum sorunlarına yol açabilir; kişisel veri söz konusuysa KVKK gibi düzenlemeler de gündeme gelir. Öte yandan yaygın kullanım, çalışanların bu araçlara gerçek bir ihtiyaç duyduğunu gösterir. Bu yüzden yalnızca yasaklamak yerine güvenli bir alternatif sunmak sık önerilen yaklaşımdır.",
  "example": "Bir şirketin satış çalışanı, müşteri listesi içeren bir tabloyu kişisel hesabındaki sohbet botuna yapıştırıp özet isterse, kurum bilmeden gizli bir veriyi üçüncü bir hizmete aktarmış olur.",
  "faq": [
   [
    "Gölge yapay zeka nasıl önlenir?",
    "Tek yol yasak değildir. Onaylı araçlar sunmak, hangi verinin paylaşılabileceğini açıkça belirlemek ve çalışanlara eğitim vermek birlikte daha etkili olur."
   ],
   [
    "Gölge yapay zeka ile gölge BT aynı şey mi?",
    "Gölge BT, kurumun bilgisi dışında yazılım ve donanım kullanılmasını anlatan eski bir kavramdır. Gölge yapay zeka bunun yapay zeka araçlarına özgü bir türü sayılabilir."
   ]
  ]
 },
 {
  "slug": "kurumsal-yapay-zeka",
  "term": "Kurumsal yapay zeka",
  "en": "enterprise AI",
  "match": [
   "kurumsal yapay zeka",
   "enterprise ai"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Şirketlerin ve kamu kurumlarının iş süreçlerinde, kendi verileri ve güvenlik gereklilikleriyle kullandığı yapay zeka çözümleri. Bireysel sohbet uygulamalarından farkı, ölçek, yönetişim ve mevcut sistemlerle entegrasyonun öne çıkmasıdır.",
  "how": "Kurumsal yapay zeka çözümleri genellikle hazır bir modelin şirketin kendi belgeleri, müşteri kayıtları ve yazılım sistemleriyle bağlanmasıyla kurulur. Veriler çoğu zaman şirketin denetimindeki bulut ya da sunucularda tutulur; erişim yetkileri ve kayıt tutma kuralları uygulanır. Model, sözleşme özetleme, müşteri hizmetleri ya da yazılım geliştirme gibi belirli bir iş akışına yerleştirilir. Ardından çıktıların doğruluğu, maliyeti ve riskleri izlenir. Yani asıl zorluk, model seçmekten çok onu güvenli ve ölçülebilir biçimde işe entegre etmektir.",
  "why": "Yapay zeka şirketlerinin gelirinde ve yatırımlarında kurumsal müşteriler önemli bir yer tutar; haberlerdeki ortaklıklar ve lisans anlaşmaları çoğunlukla bu alanla ilgilidir. Kurumlar için asıl sorular gizlilik, hata sorumluluğu ve yatırımın karşılığını almaktır. Teknolojinin çalışanların görevlerine ve şirketlerin maliyet yapısına etkisi de en çok bu kanaldan görünür olur.",
  "example": "Bir bankanın, müşteri temsilcilerinin iç mevzuat belgelerinde soru sorabildiği ve verilerin banka dışına çıkmadığı bir asistan kullanması kurumsal yapay zekaya örnektir.",
  "faq": [
   [
    "Kurumsal yapay zeka ile bireysel sohbet uygulamaları arasındaki fark ne?",
    "Bireysel uygulamalar tek bir kullanıcıya hitap eder. Kurumsal çözümlerde ise veri güvenliği, erişim kontrolü, kayıt tutma ve şirketin mevcut yazılımlarıyla bağlantı gibi gereklilikler ön plandadır."
   ],
   [
    "Kurumsal yapay zeka için şirketin kendi modelini eğitmesi gerekir mi?",
    "Çoğu zaman gerekmez. Şirketler genellikle hazır bir modeli kendi verileriyle besleyerek ya da özel talimatlarla uyarlayarak kullanır; sıfırdan model eğitmek çok pahalı olduğundan nadiren tercih edilir."
   ]
  ]
 },
 {
  "slug": "kavram-kaniti",
  "term": "Kavram kanıtı (PoC)",
  "en": "proof of concept",
  "match": [
   "kavram kanıt",
   "proof of concept",
   "=poc"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir yapay zeka fikrinin gerçek veriyle ve sınırlı kapsamda denenerek teknik olarak işe yarayıp yaramadığının gösterildiği ilk, küçük ölçekli deneme çalışması.",
  "how": "Önce çözülecek tek bir iş sorunu ve başarı ölçütü belirlenir. Sonra kısa bir süre için küçük bir ekip, sınırlı bir veri kümesiyle prototip kurar. Sonuçlar önceden konan ölçütlerle karşılaştırılır: doğruluk yeterli mi, maliyet makul mü, çalışanlar kullanabiliyor mu? Sonuç olumluysa pilot uygulamaya ve ardından geniş devreye almaya geçilir; olumsuzsa az harcamayla vazgeçilir. Bu aşamada amaç kusursuz bir ürün değil, hızlı ve ucuz bir yanıt almaktır.",
  "why": "Şirketlerin yapay zeka denemelerinin üretime geçmekte zorlandığı sık tartışılır. Kavram kanıtı, büyük yatırımdan önce riski küçültür. Ancak başarılı bir demo, gerçek koşullardaki başarının garantisi değildir; dağınık veri, güvenlik ve ölçek sorunları genellikle sonradan ortaya çıkar.",
  "example": "Bir perakende şirketi, iki mağazanın geçmiş satış verisiyle stok tahmin modelini birkaç hafta dener; hata oranı hedefin altında kalırsa tüm zincire yaymayı planlar.",
  "faq": [
   [
    "Kavram kanıtı ile pilot uygulama arasındaki fark ne?",
    "Kavram kanıtı fikrin teknik olarak mümkün olup olmadığını sınar. Pilot ise sınırlı sayıda gerçek kullanıcıyla, gerçek iş akışı içinde yapılan canlı bir denemedir."
   ],
   [
    "Kavram kanıtı başarılı olursa ürün hazır demek midir?",
    "Hayır. Kavram kanıtı genellikle kontrollü koşullarda çalışır. Güvenlik, bakım, maliyet ve ölçeklenebilirlik gibi konular ürünleştirme aşamasında ayrıca ele alınmalıdır."
   ]
  ]
 },
 {
  "slug": "ulusal-yapay-zeka-stratejisi",
  "term": "Ulusal yapay zeka stratejisi",
  "en": "national AI strategy",
  "match": [
   "ulusal yapay zeka strateji",
   "yapay zeka stratejisi"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir ülkenin yapay zekayı araştırma, ekonomi, eğitim ve kamu hizmetlerinde nasıl geliştireceğini ve yöneteceğini anlatan, genellikle hükümetçe yayımlanan resmî yol haritası.",
  "how": "Hükümetler stratejiyi çoğunlukla uzmanlar, üniversiteler ve sektör temsilcileriyle istişare ederek hazırlar. Belgede genellikle yetenek yetiştirme, araştırma desteği, veri ve hesaplama altyapısı, kamuda kullanım, etik ve düzenleme gibi başlıklar yer alır. Hedefler ve sorumlu kurumlar belirlenir; bazı ülkeler bunu eylem planı ve bütçeyle destekler. Strateji bağlayıcı bir yasa değil, politika yönünü gösteren bir belgedir. Uygulamanın gücü ayrılan kaynaklara ve takip mekanizmasına bağlıdır.",
  "why": "Strateji, bir ülkenin yapay zekadan hangi alanlarda yararlanmak istediğini ve kaynakları nereye yönelteceğini gösterir. Yatırım, eğitim ve düzenleme kararlarını etkilediği için şirketler ve araştırmacılar açısından da önemli bir ipucudur. Ülkeler arasındaki teknoloji rekabetinin haberlerde nasıl çerçevelendiğini anlamaya da yardım eder.",
  "example": "Bir ülkenin stratejisinde lisansüstü burs sayısını artırmak, sağlıkta pilot projeler yürütmek ve kamu kurumları için etik ilkeler belirlemek gibi hedefler yer alabilir.",
  "faq": [
   [
    "Ulusal yapay zeka stratejisi bir yasa mıdır?",
    "Hayır. Strateji, hükümetin hedeflerini ve öncelik alanlarını belirten bir politika belgesidir. Yasa gibi doğrudan yaptırım içermez; düzenlemeler ayrıca kanunlarla yapılır."
   ],
   [
    "Türkiye'nin de bir yapay zeka stratejisi var mı?",
    "Evet, Türkiye'nin de resmî bir ulusal yapay zeka stratejisi belgesi bulunuyor. Güncel hedefler ve uygulama durumu için ilgili kurumların resmî duyurularına bakmak gerekir."
   ]
  ]
 },
 {
  "slug": "egemen-yapay-zeka",
  "term": "Egemen yapay zeka (sovereign AI)",
  "en": "sovereign AI",
  "match": [
   "egemen yapay zeka",
   "sovereign ai",
   "yapay zeka egemenliğ"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir ülkenin yapay zeka sistemlerini kendi altyapısı, verisi, işgücü ve kurallarıyla geliştirip işletebilme kapasitesi; başka ülkelerin şirketlerine ve altyapısına bağımlılığı azaltma hedefi.",
  "how": "Kavram tek bir teknik yöntem değil, bir hedefler bütünüdür. Ülkeler yerel veri merkezleri kurmak, çip ve bulut kapasitesi sağlamak, kendi dillerini ve kültürlerini yansıtan modeller geliştirmek ya da veriyi ülke sınırları içinde tutmak gibi adımlar atar. Kimi durumda devlet doğrudan yatırım yapar, kimi durumda yabancı şirketlerle yerel işletim ortaklıkları kurulur. Ne kadar egemenlik gerektiği ülkeden ülkeye değişir; tam bağımsızlık çok az ülke için gerçekçidir.",
  "why": "Yapay zeka ekonomi ve güvenlik açısından stratejik bir teknoloji sayıldığı için egemenlik tartışması haberlerde sık geçer. Bir tarafta veri gizliliği, ulusal güvenlik ve dil çeşitliliği gerekçeleri, diğer tarafta yüksek maliyet ve küresel iş birliğinin sağladığı verimlilik gibi karşı görüşler var.",
  "example": "Bir Avrupa ülkesinin, kendi diliyle eğitilmiş bir modeli ülke içindeki veri merkezinde çalıştırarak kamu verilerini yurt dışına çıkarmaması egemen yapay zeka çabasına örnektir.",
  "faq": [
   [
    "Egemen yapay zeka, her şeyi sıfırdan yerli üretmek demek mi?",
    "Zorunlu olarak değil. Birçok ülke için hedef, kritik veri ve altyapı üzerinde denetim sahibi olmaktır; bunun için yabancı teknolojiyle yerel işletim gibi karma çözümler de kullanılabilir."
   ],
   [
    "Egemen yapay zeka ile veri yerelleştirme aynı şey mi?",
    "Hayır. Veri yerelleştirme, verinin ülke sınırları içinde tutulması kuralıdır ve egemen yapay zekanın yalnızca bir parçasıdır. Kavram ayrıca hesaplama gücü, modeller ve yetenek konularını da kapsar."
   ]
  ]
 },
 {
  "slug": "cip-ihracat-kontrolleri",
  "term": "Çip ihracat kontrolleri",
  "en": "chip export controls",
  "match": [
   "ihracat kontrol",
   "ihracat kısıtlama",
   "export control"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Hükümetlerin, gelişmiş yapay zeka çiplerinin ve bunları üretmekte kullanılan ekipmanın belirli ülkelere ya da kuruluşlara satışını sınırlayan veya lisansa bağlayan düzenlemeler.",
  "how": "Bir ülke, güvenlik gerekçesiyle belirli teknik özelliklerin üzerindeki çipleri ya da üretim makinelerini kontrol listesine alır. Bu ürünleri satmak isteyen şirket, alıcı kısıtlı bir ülkede veya kuruluştaysa devletten lisans almak zorundadır; lisans verilmeyebilir. Eşikler genellikle çipin işlem gücü ve veri aktarım hızı gibi ölçütlerle tanımlanır. Şirketler kurallara uyan, performansı düşürülmüş sürümler tasarlayabilir; yetkililer de listeyi zamanla güncelleyebilir. ABD'nin Çin'e yönelik kısıtlamaları en çok tartışılan örnektir.",
  "why": "İleri düzey çipler büyük modellerin eğitimi için kritik olduğundan bu kontroller ülkelerin yapay zeka kapasitesini doğrudan etkiler. Çip üreticilerinin gelirini, jeopolitik gerilimi ve yerli çip üretimi çabalarını şekillendirir. Etkililiği tartışmalıdır: savunanlar güvenlik riskini azalttığını söyler, eleştirenler yerli üretimi hızlandırdığını ve şirketlere zarar verdiğini ileri sürer.",
  "example": "ABD merkezli bir çip şirketi, yeni bir hızlandırıcıyı kısıtlı bir ülkeye satmadan önce lisans başvurusu yapmak ya da daha düşük performanslı bir sürüm sunmak zorunda kalabilir.",
  "faq": [
   [
    "Hangi çipler ihracat kontrolüne tabidir?",
    "Bu, her ülkenin kendi kurallarına bağlıdır. Genellikle belirli bir işlem gücü ve bağlantı hızı eşiğini aşan yapay zeka çipleri kapsanır; eşikler zaman içinde değişebilir."
   ],
   [
    "İhracat kontrolleri yalnızca çipleri mi kapsar?",
    "Hayır. Çip üretiminde kullanılan makineler, yazılımlar ve bazı durumlarda teknik hizmetler ya da bilgi aktarımı da kontrol kapsamına girebilir."
   ]
  ]
 },
 {
  "slug": "rekabet-hukuku-ve-yapay-zeka",
  "term": "Rekabet hukuku ve yapay zeka",
  "en": "antitrust and AI",
  "match": [
   "antitröst",
   "rekabet soruşturma",
   "rekabet kurumu"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Piyasada rekabeti korumaya yönelik kuralların yapay zeka alanındaki şirket birleşmelerine, ortaklıklarına ve güçlü konumların kötüye kullanılmasına nasıl uygulanacağı sorusu.",
  "how": "Rekabet kurumları genellikle şirket birleşme ve devralmalarını, şirketler arası anlaşmaları ve baskın şirketlerin davranışlarını inceler. Yapay zekada şu sorular öne çıkar: Hesaplama gücü, veri ve yetenek birkaç şirkette toplanıyor mu? Büyük teknoloji şirketlerinin model geliştiricilere yaptığı yatırımlar ve bulut ortaklıkları rekabeti azaltıyor mu? Algoritmaların fiyatları örtülü biçimde birbirine yaklaştırma riski var mı? Kurumlar soruşturma açabilir, şartlı onay verebilir ya da para cezası uygulayabilir. Yaklaşım ülkeden ülkeye değişir.",
  "why": "Yapay zeka pazarı yüksek sermaye ve altyapı gerektirdiği için az sayıda şirketin öne çıkabileceği kaygısı dile getiriliyor. Rekabet kurumlarının kararları hangi ortaklıkların yapılabileceğini ve yeni girişimlerin pazara girip giremeyeceğini etkiler. Öte yandan aşırı müdahalenin yatırımı ve yeniliği yavaşlatabileceğini savunanlar da var.",
  "example": "Bir rekabet kurumunun, büyük bir bulut şirketinin bir yapay zeka girişimine yaptığı yatırımın birleşme sayılıp sayılmayacağını ve pazarda rekabeti azaltıp azaltmadığını incelemesi buna örnektir.",
  "faq": [
   [
    "Yapay zeka için ayrı bir rekabet hukuku mu var?",
    "Genel olarak hayır; mevcut rekabet kuralları yapay zeka pazarına da uygulanır. Bazı ülke ve bölgelerde büyük dijital platformlara özel ek düzenlemeler tartışılıyor veya yürürlükte."
   ],
   [
    "Türkiye'de rekabet kurallarını hangi kurum uygular?",
    "Türkiye'de 4054 sayılı Rekabetin Korunması Hakkında Kanun'u Rekabet Kurumu uygular. Kurum, yapay zeka dahil dijital pazarlardaki birleşme ve davranışları da bu çerçevede inceleyebilir."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-kaynakli-zararlardan-sorumluluk",
  "term": "Yapay zeka kaynaklı zararlardan sorumluluk",
  "en": "AI liability",
  "match": [],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir yapay zeka sisteminin yol açtığı maddi, bedensel ya da itibar zararından geliştirici, dağıtıcı, işletme veya kullanıcıdan hangisinin hukuken sorumlu tutulacağı sorusu.",
  "how": "Mevcut hukuk sistemleri genellikle yapay zekaya özel olmayan kuralları uygular: kusur sorumluluğu, ürün sorumluluğu ve sözleşme hukuku gibi. Zarar model hatasından, yanlış kullanımdan, kötü veriden ya da yetersiz gözetimden doğabilir; zincirde çok sayıda taraf bulunduğu için sorumluluğu belirlemek zordur. Modellerin kararlarının nedenini açıklamak güç olduğundan ispat da sorun yaratabilir. Bazı yargı bölgeleri bu belirsizliği gidermek için yapay zekaya özgü sorumluluk kuralları tartışıyor veya çıkarıyor.",
  "why": "Sürücüsüz araçlar, tıbbi öneri sunan sistemler ve işe alım algoritmaları gibi alanlarda hatalar gerçek zarara yol açabilir. Sorumluluğun belirsizliği hem mağdurların tazminat arayışını hem de şirketlerin ürün çıkarma kararlarını etkiler. Kuralların çok sert ya da çok gevşek olması, koruma ile yenilik arasındaki dengeyi bozabilir.",
  "example": "Yapay zeka destekli bir sürüş sisteminin karıştığı kazada sorumluluğun üretici, yazılım sağlayıcı ve sürücü arasında nasıl paylaşılacağı tartışılır; sonuç ülkeye ve olayın koşullarına göre değişir.",
  "faq": [
   [
    "Yapay zekanın kendisi hukuken sorumlu tutulabilir mi?",
    "Mevcut hukuk sistemlerinde yapay zeka hukuki kişi sayılmaz. Sorumluluk, onu geliştiren, işleten ya da kullanan gerçek veya tüzel kişilere yüklenir."
   ],
   [
    "Bir sohbet botu yanlış bilgi verip zarara yol açarsa kim sorumlu olur?",
    "Bu, olayın koşullarına, kullanım şartlarına ve ilgili ülkenin hukukuna göre değişir. Genel bir cevap yoktur; somut bir durumda hukukçudan görüş almak gerekir."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-icerik-etiketleme-zorunlulugu",
  "term": "Yapay zeka içerik etiketleme zorunluluğu",
  "en": "AI content labeling",
  "match": [
   "yapay zeka etiketi",
   "etiketleme zorunlu"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Yapay zeka ile üretilen veya değiştirilen metin, görüntü, ses ve videoların bu nitelikte olduğunun kullanıcıya belirtilmesini şart koşan kurallar ya da platform politikaları.",
  "how": "Etiketleme iki yolla yapılır. Görünür etiketler, içeriğin üzerine ya da yanına 'yapay zeka ile üretildi' gibi bir uyarı koyar. Görünmez yöntemlerde ise dosyanın üst verisine bilgi eklenir ya da içeriğe sonradan tespit edilebilen bir filigran gömülür. Zorunluluk yasayla gelebilir, platformlar da kendi kurallarıyla koyabilir. Sorumluluk içeriği üretene, yayımlayana ya da platforma yüklenebilir. Teknik sınırlar da var: filigranlar silinebilir ve etiketsiz içerik üreten araçlar bulunabilir.",
  "why": "Derin sahte içerikler ve yanıltıcı görüntüler seçimlerde, dolandırıcılıkta ve itibar saldırılarında risk yaratıyor. Etiketleme, okurun gördüğü içeriğe ne kadar güveneceğini tartmasına yardım eder. AB Yapay Zeka Yasası 2024'te kabul edildi ve bu tür içerikler için şeffaflık yükümlülükleri içeriyor. Öte yandan ifade özgürlüğü, sanatsal kullanım ve uygulanabilirlik konusunda eleştiriler de var.",
  "example": "Bir sosyal medya platformunun, yapay zeka ile üretilmiş gerçekçi bir videonun altına 'yapay zeka ile oluşturuldu' etiketi eklemesi buna örnektir.",
  "faq": [
   [
    "Etiketleme sahte içeriklerin yayılmasını tamamen engeller mi?",
    "Hayır. Etiketler filigran gibi yöntemlerle birlikte yardımcı olur ama kötü niyetli kişiler bunları kaldırabilir veya etiket kullanmayan araçlara başvurabilir. Etiketleme tek başına yeterli bir çözüm sayılmaz."
   ],
   [
    "Yapay zeka kullanılan her içerik etiketlenmek zorunda mı?",
    "Genellikle hayır. Kurallar çoğunlukla gerçekçi ve yanıltıcı olabilecek içeriklere odaklanır; küçük düzenlemeler ya da açıkça kurgu olan işler kapsam dışında kalabilir. Ayrıntılar ülkeye göre değişir."
   ]
  ]
 },
 {
  "slug": "acik-kaynak-lisansi",
  "term": "Açık kaynak lisansı",
  "en": "open-source license",
  "match": [
   "açık kaynak lisans",
   "open-source license"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir yazılımın ya da modelin kaynak kodunu veya ağırlıklarını kimlerin hangi koşullarla kullanabileceğini, değiştirebileceğini ve dağıtabileceğini belirleyen hukuki izin metni.",
  "how": "Eseri geliştiren kişi veya kurum, çalışmasını kamuya açarken bir lisans seçer ve kullanım koşullarını bu metinde yazar. MIT ve Apache 2.0 gibi izin verici lisanslar ticari kullanım dahil geniş özgürlük tanır; karşılığında genellikle telif ve lisans bildiriminin korunmasını ister. GPL gibi 'copyleft' lisanslar ise değiştirilmiş sürümlerin de aynı lisansla paylaşılmasını şart koşar. Yapay zekada bazı modeller kullanım kısıtları içeren özel lisanslarla yayımlanır; ağırlıklar açık olsa da eğitim verisi ve kodun tamamı paylaşılmayabilir.",
  "why": "Bir modelin ticari üründe kullanılıp kullanılamayacağı, değiştirilip yeniden dağıtılıp dağıtılamayacağı lisansa bağlıdır; yanlış anlaşılırsa hukuki risk doğar. 'Açık' kelimesinin yapay zekada farklı anlamlarda kullanılması da tartışma konusudur: yerleşik açık kaynak ölçütlerine uymayan modeller de sık sık 'açık' diye anılır. Hukuki bir değerlendirme için lisans metninin kendisine bakmak gerekir.",
  "example": "Meta'nın Llama modelleri indirilebilir ağırlıklarla yayımlanır, ancak kullanım koşulları içeren kendi lisansıyla gelir; bu nedenle klasik açık kaynak lisanslarından ayrı tartışılır.",
  "faq": [
   [
    "MIT lisansı ile GPL arasındaki fark nedir?",
    "MIT çok az koşul getirir; kod kapalı kaynaklı bir üründe de kullanılabilir. GPL ise kodu değiştirip dağıtanların türev işi de aynı lisansla açmasını ister."
   ],
   [
    "Ağırlıkları indirilebilen her model açık kaynak mıdır?",
    "Hayır. Ağırlıkların indirilebilmesi, lisansın yerleşik açık kaynak ölçütlerini karşıladığı anlamına gelmez. Kullanım sınırlamaları olabilir, eğitim verisi ve kodun tamamı da paylaşılmayabilir."
   ]
  ]
 },
 {
  "slug": "davranis-kurallari",
  "term": "Davranış kuralları (GPAI Code of Practice)",
  "en": "Code of Practice",
  "match": [
   "uygulama kuralları",
   "code of practice"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "AB Yapay Zeka Yasası kapsamında genel amaçlı yapay zeka modeli sağlayıcılarının yükümlülüklerini nasıl yerine getirebileceğini gösteren, gönüllü olarak imzalanan ve uzmanlarla hazırlanan bir uygulama rehberi.",
  "how": "Yasa, büyük dil modelleri gibi genel amaçlı modellerin sağlayıcılarına şeffaflık, telif hakkına saygı ve en güçlü modeller için sistemik risk yönetimi gibi yükümlülükler getirir. Bu yükümlülükler yasa metninde genel ifadelerle yazıldığından pratikte ne yapılacağı belirsiz kalabilir. Avrupa Komisyonu'na bağlı Yapay Zeka Ofisi, uzmanların ve paydaşların katkısıyla bu boşluğu dolduran bir kurallar bütünü hazırladı. Şirketler metni imzalayıp kurallara uyduğunda yükümlülüklerini karşıladığını daha kolay gösterebilir; imzalamayanlar ise uyumu başka yollarla kanıtlamak zorundadır.",
  "why": "Yasanın genel amaçlı modellere ilişkin maddeleri pratikte bu metin üzerinden somutlaşıyor. Hangi şirketin imza attığı ya da atmadığı, haberlerde Avrupa'daki düzenleyici ilişkilerin bir göstergesi olarak okunuyor. Metin bağlayıcı bir kanun olmasa da yasanın uygulanmasında referans noktası işlevi görüyor.",
  "example": "Bir model geliştiricisi, bu metne imza atarak eğitim verisindeki telifli içeriğin nasıl ele alındığını açıklayan bir telif politikası hazırlamayı ve uygulamayı taahhüt edebilir.",
  "faq": [
   [
    "Davranış kuralları zorunlu mu?",
    "Metne katılmak gönüllüdür; ancak yasadaki yükümlülükler zorunludur. Metne katılmayan bir şirket, aynı yükümlülüklere uyduğunu başka yollarla göstermek durumundadır."
   ],
   [
    "Davranış kuralları ile Yapay Zeka Yasası arasındaki fark ne?",
    "Yasa hukuken bağlayıcı kuralları koyar. Davranış kuralları ise bu kuralların pratikte nasıl karşılanabileceğini anlatan bir uygulama rehberidir."
   ]
  ]
 },
 {
  "slug": "kisisel-verilerin-yurt-disina-aktarimi",
  "term": "Kişisel verilerin yurt dışına aktarımı",
  "en": "cross-border data transfer",
  "match": [
   "yurt dışına aktarım",
   "yurt dışına veri aktarım"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Kişisel verilerin Türkiye'deki bir veri sorumlusundan veya işleyiciden yurt dışındaki bir alıcıya iletilmesi ya da yurt dışından erişilebilir hâle getirilmesi; Kişisel Verilerin Korunması Kanunu (KVKK) bu işlemi belirli koşullara bağlar.",
  "how": "Türkiye'de KVKK'nın 9. maddesi bu konuyu düzenler ve madde 2024'te değiştirildi. Değişiklik sonrası çerçevede aktarım; Kişisel Verileri Koruma Kurulu'nun ilgili ülke, sektör veya uluslararası kuruluş için verdiği yeterlilik kararına, böyle bir karar yoksa standart sözleşme ya da bağlayıcı şirket kuralları gibi uygun güvencelere dayandırılabilir. Arızi nitelikteki bazı durumlar için ayrıca istisnalar vardır. Verileri yurt dışındaki bir bulut sunucusuna göndermek de çoğu zaman aktarım kapsamında değerlendirilebilir.",
  "why": "Yapay zeka hizmetlerinin çoğu yurt dışındaki bulut altyapısında çalışır; bir şirket müşteri verisini yabancı bir sağlayıcının modeline gönderdiğinde aktarım sorusu gündeme gelir. Uyumsuzluk idari para cezalarına ve itibar kaybına yol açabilir. Bu yüzden sağlayıcı seçimi ve sözleşmeler, şirketlerin hukuk ekipleri için önemli bir başlık hâline geliyor.",
  "example": "Bir Türk e-ticaret şirketi müşteri yazışmalarını özetletmek için yurt dışında barındırılan bir yapay zeka hizmetine gönderdiğinde, bu işlem aktarım kurallarına tabi olabilir.",
  "faq": [
   [
    "Veri yerelleştirme ile yurt dışına aktarım kuralları aynı şey mi?",
    "Hayır. Aktarım kuralları, verinin sınır ötesine hangi koşullarda gönderilebileceğini belirler. Yerelleştirme ise verinin ülke içinde tutulmasını şart koşar."
   ],
   [
    "Yurt dışındaki bir sunucuyu kullanmak yasak mı?",
    "Kanun bunu genel olarak yasaklamaz, belirli şartlara bağlar. Somut bir durumda hangi şartların geçerli olduğu için hukuki destek almak gerekir."
   ]
  ]
 },
 {
  "slug": "veri-yerellestirme",
  "term": "Veri yerelleştirme",
  "en": "data localization",
  "match": [
   "veri yerelleştirme",
   "data localization"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Belirli veri türlerinin, özellikle kişisel veya hassas verilerin, bir ülkenin sınırları içindeki sunucularda depolanmasını ve işlenmesini zorunlu kılan yasal veya düzenleyici gereklilik.",
  "how": "Düzenleme, verinin ülke içindeki bir veri merkezinde tutulmasını şart koşar. Bazı ülkelerde veri yalnızca yurt içinde saklanmalıdır, bazılarında ise yurt dışına kopya gönderilebilir ama asıl kayıt yurt içinde kalmalıdır. Kapsam ülkeye ve sektöre göre değişir; bankacılık, sağlık ve kamu verileri en sık hedeflenen alanlardır. Şirketler bu durumda ya yerel bir veri merkezi kurar ya da bulut sağlayıcılarının ülke içindeki bölgelerini kullanır.",
  "why": "Yerelleştirme; ulusal güvenlik, denetim kolaylığı ve dijital egemenlik gerekçeleriyle savunulur. Eleştirenler ise maliyetleri artırdığını, küçük şirketlerin küresel hizmetlere erişimini zorlaştırdığını ve veri güvenliğini her zaman iyileştirmediğini söyler. Yapay zeka modellerinin eğitimi ve çalıştırılması büyük bulut altyapısı gerektirdiğinden konu haberlerde sık geçiyor.",
  "example": "Bir banka, müşteri verisiyle çalışan bir yapay zeka aracını kullanabilmek için sağlayıcının hizmetini ülke içindeki bir veri merkezinden almak zorunda kalabilir.",
  "faq": [
   [
    "Veri yerelleştirme ile yurt dışına aktarım kuralları arasındaki fark ne?",
    "Aktarım kuralları, verinin yurt dışına belirli şartlarla gönderilmesine izin verir. Yerelleştirme ise verinin ülke içinde tutulmasını esas alır ve yurt dışına çıkışı büyük ölçüde sınırlar."
   ],
   [
    "Türkiye'de veri yerelleştirme zorunluluğu var mı?",
    "Kişisel veriler için genel bir yerelleştirme zorunluluğu yerine bir aktarım rejimi var. Bankacılık ve ödeme hizmetleri gibi bazı sektörlerde ise sistemlerin yurt içinde bulundurulmasını öngören ayrı düzenlemeler bulunuyor."
   ]
  ]
 },
 {
  "slug": "kamuda-yapay-zeka",
  "term": "Kamuda yapay zeka",
  "en": "AI in the public sector",
  "match": [
   "kamuda yapay zeka"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Devlet kurumlarının ve belediyelerin kamu hizmetlerini sunarken, kaynakları planlarken veya karar süreçlerini desteklerken yapay zeka sistemlerinden yararlanması; bu kullanım vatandaşla kurumlar arasındaki ilişkiyi de etkiler.",
  "how": "Uygulamalar geniş bir yelpazede yer alır: vatandaş sorularını yanıtlayan sohbet robotları, vergi ve sosyal yardım denetiminde risk puanlaması, trafik akışının yönetimi, sağlıkta randevu ve görüntü analizi desteği, belgelerin otomatik sınıflandırılması. Sistem çoğunlukla geçmiş verilerden örüntü öğrenir ve görevliye öneri, öncelik sırası ya da uyarı üretir. Son kararı insanın vermesi ilkesi, birçok yönergede temel güvence sayılır. Kamu kurumları teknolojiyi genellikle özel sektör sağlayıcılarından satın alır ya da kendi ekipleriyle geliştirir.",
  "why": "Kamu kararları vatandaşın yardım, vergi, sağlık veya özgürlüklerini doğrudan etkiler; hata ya da ayrımcı sonuç büyük mağduriyet yaratabilir. Bu yüzden şeffaflık, itiraz hakkı ve hesap verebilirlik kamuda daha sıkı aranır. AB Yapay Zeka Yasası, temel kamu hizmetlerine erişimi etkileyen bazı sistemleri yüksek riskli sınıfa alır.",
  "example": "Hollanda'da çocuk bakım yardımlarında kullanılan algoritmik risk denetimi birçok aileyi haksız yere şüpheli konumuna düşürdü; bu olay, kamuda otomatik sistemlerin yol açabileceği zararın sık anılan örneğidir.",
  "faq": [
   [
    "Kamuda yapay zeka kullanımı özel sektörden neden farklı değerlendirilir?",
    "Devletin kararları vatandaşa kendi tercihi olmadan uygulanır; kişi başka bir sağlayıcıya geçemez. Bu nedenle şeffaflık ve hesap verebilirlik beklentisi daha yüksektir."
   ],
   [
    "Yapay zeka kamuda kararı tek başına verebilir mi?",
    "Bu, ülkeye ve alana göre değişen hukuki çerçeveye bağlıdır. Yaygın ilke, ağır sonuç doğuran kararlarda insan denetiminin bulunmasıdır."
   ]
  ]
 },
 {
  "slug": "dijital-hizmetler-yasasi",
  "term": "Dijital Hizmetler Yasası (DSA)",
  "en": "Digital Services Act",
  "match": [
   "dijital hizmetler yasa",
   "digital services act"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "AB'nin çevrimiçi platformlar, pazar yerleri, sosyal ağlar ve arama motorları gibi aracı hizmet sağlayıcılarına yasa dışı içerik, şeffaflık ve kullanıcı hakları konusunda yükümlülükler getiren düzenlemesi.",
  "how": "Yasa, hizmet sağlayıcıları boyutlarına göre kademelendirir; yükümlülükler küçük aracılardan çok büyük platformlara doğru artar. Kullanıcılara yasa dışı içeriği bildirme yolu, içerik kaldırma kararlarına itiraz hakkı ve reklam ile öneri sistemleri hakkında şeffaflık sağlanması istenir. Avrupa'da çok sayıda kullanıcıya ulaşan çok büyük platformlar ayrıca sistemik risk değerlendirmesi yapmak ve bağımsız denetimden geçmek zorundadır. Uyumsuzluk halinde küresel yıllık cironun yüzde altısına kadar para cezası öngörülür.",
  "why": "Platformlarda hangi içeriğin öne çıkacağına karar veren öneri algoritmaları yapay zeka ile çalıştığı için yasa, yapay zeka haberlerinde sık anılır. AB'deki kullanıcılara hizmet veren AB dışı şirketleri de kapsadığı için etkisi sınırların ötesine geçiyor. Yasa 2022'de kabul edildi.",
  "example": "Çok büyük bir sosyal ağ, öneri algoritmasının nasıl çalıştığını açıklamak ve kullanıcılara kişiselleştirmeye dayanmayan bir akış seçeneği sunmak zorundadır.",
  "faq": [
   [
    "Dijital Hizmetler Yasası ile Yapay Zeka Yasası arasındaki fark ne?",
    "Dijital Hizmetler Yasası, çevrimiçi aracı hizmetlerin içerik ve şeffaflık sorumluluklarını düzenler. Yapay Zeka Yasası ise yapay zeka sistemlerini risklerine göre düzenler; bir platform bazen her ikisinin kapsamına girebilir."
   ],
   [
    "Dijital Hizmetler Yasası Türkiye'deki kullanıcıları kapsıyor mu?",
    "Yasa AB'deki kullanıcıları korur, Türkiye'deki kullanıcılar için doğrudan geçerli değildir. Yine de şirketlerin küresel uygulamalarını etkileyebilir."
   ]
  ]
 },
 {
  "slug": "dijital-piyasalar-yasasi",
  "term": "Dijital Piyasalar Yasası (DMA)",
  "en": "Digital Markets Act",
  "match": [
   "dijital piyasalar yasa",
   "digital markets act"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Avrupa Birliği'nin, çok büyük dijital platformların rakipler ve kullanıcılar karşısındaki gücünü sınırlamak için çıkardığı düzenleme. Arama motoru, uygulama mağazası, sosyal ağ gibi hizmetleri kontrol eden şirketlere belirli yükümlülükler getirir.",
  "how": "Yasa, belirli ölçütleri karşılayan büyük platform şirketlerini Avrupa Komisyonu eliyle \"geçit bekçisi\" (gatekeeper) olarak belirler. Bu şirketler, işletmelerin kullanıcılara ulaşmak için geçmek zorunda kaldığı çekirdek platform hizmetlerini yönetir. Geçit bekçileri kendi ürünlerini rakiplerinin önüne koyamaz, kullanıcı verilerini farklı hizmetlerden izinsiz birleştiremez ve bazı durumlarda üçüncü taraf uygulama mağazalarına ya da hizmetler arası birlikte çalışabilirliğe izin vermek zorundadır. Kurallara uymayanlara küresel cirosunun yüzde 10'una kadar para cezası uygulanabilir.",
  "why": "Yapay zeka hizmetleri çoğunlukla büyük platformların işletim sistemleri, arama motorları ve bulut altyapıları üzerinden kullanıcıya ulaşıyor. DMA, bu kapıları elinde tutan şirketlerin kendi yapay zeka ürünlerini haksız biçimde öne çıkarıp çıkaramayacağı tartışmasında temel başvuru metinlerinden biridir. Küçük girişimler için de rekabet koşullarını belirler.",
  "example": "Bir geçit bekçisinin arama hizmeti, kendi alışveriş ya da asistan ürününü rakiplerinden daha yukarıda göstererek öne çıkarıyorsa bu, DMA kapsamında kendi ürününe kayırma sayılıp soruşturmaya konu olabilir.",
  "faq": [
   [
    "DMA ile KVKK ve GDPR arasındaki fark nedir?",
    "GDPR ve KVKK kişisel verilerin korunmasını düzenler. DMA ise rekabeti ve piyasa adaletini hedefler; veri konusuna yalnızca büyük platformların veriyi rakipleri dışlamak için kullanmasını sınırlayan kurallar üzerinden girer."
   ],
   [
    "DMA yapay zeka şirketlerini de kapsar mı?",
    "Yasa doğrudan yapay zeka için yazılmadı; kapsamı, geçit bekçisi sayılan şirketlerin çekirdek platform hizmetleridir. Bu hizmetlere eklenen yapay zeka özellikleri de aynı yükümlülüklerin gündemine girebilir."
   ]
  ]
 },
 {
  "slug": "hesaplama-esigi",
  "term": "Hesaplama eşiği (10^25 FLOP)",
  "en": "compute threshold",
  "match": [
   "hesaplama eşiğ",
   "compute threshold"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir yapay zeka modelinin eğitiminde kullanılan toplam işlem miktarına konan sınır. AB Yapay Zeka Yasası'nda bu değeri aşan genel amaçlı modellerin sistemik risk taşıdığı varsayılır ve daha ağır yükümlülükler uygulanır.",
  "how": "FLOP, kayan noktalı işlem sayısını, yani bir modelin eğitimi boyunca yapılan toplam hesaplamayı ölçer. 10^25, 10 üzeri 25 demektir; bu çok büyük bir sayıdır ve yalnızca en büyük modellerin eğitimi buna ulaşır. Bir geliştirici modelinin eğitim hesaplamasını bu eşiğin üstünde bulursa, yasa modelin sistemik risk taşıdığını varsayar. Geliştirici Avrupa Komisyonu'nu bilgilendirmek zorundadır ve model değerlendirmesi, saldırı testleri, ciddi olayların bildirimi, siber güvenlik gibi ek yükümlülükler gündeme gelir. Komisyon eşiği teknolojik gelişmelere göre güncelleyebilir.",
  "why": "Hesaplama miktarı, düzenleyicilerin bir modelin ne kadar güçlü olabileceğini önceden tahmin etmek için kullandığı ölçülebilir bir göstergedir. Eşik, hangi modellerin daha sıkı denetleneceğini belirler. Eleştirenler, verimlilik arttıkça daha az hesaplamayla da güçlü modeller eğitilebileceğini ve tek bir sayının yetersiz kalabileceğini savunur.",
  "example": "Bir şirket, eğitimi için eşiğin üzerinde hesaplama harcadığı yeni bir genel amaçlı dil modelini AB'de sunmadan önce Komisyon'a bildirim yapmak ve risk değerlendirmesi yürütmekle yükümlü olabilir.",
  "faq": [
   [
    "FLOP ile FLOPS arasındaki fark nedir?",
    "FLOP, yapılan toplam işlem sayısıdır; eğitimin toplam hesaplama miktarını anlatır. FLOPS ise saniyedeki işlem sayısıdır ve bir donanımın hızını ifade eder."
   ],
   [
    "Eşiğin altında kalan bir model risksiz sayılır mı?",
    "Hayır. Eşik, yalnızca sistemik risk varsayımının başladığı noktadır. Altında kalan modeller de yasanın diğer kurallarına ve genel yükümlülüklere tabi olabilir; ayrıca Komisyon başka ölçütlerle de bir modeli sistemik riskli sayabilir."
   ]
  ]
 },
 {
  "slug": "model-surumu-ve-kullanimdan-kaldirma",
  "term": "Model sürümü ve kullanımdan kaldırma",
  "en": "model deprecation",
  "match": [
   "kullanımdan kaldırılan model",
   "deprecation"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Yapay zeka şirketlerinin bir modeli numaralı ya da tarihli sürümler halinde yayımlaması ve eski sürümleri belirli bir takvimle devre dışı bırakması. Bu devre dışı bırakma işlemine kullanımdan kaldırma (deprecation) denir.",
  "how": "Şirketler modelleri güncelledikçe yeni sürümler çıkarır ve her sürüme ayrı bir ad ya da tarih etiketi verir. Yazılım geliştiriciler uygulamalarını çoğunlukla belirli bir sürüme bağlar, böylece model davranışı bir gecede değişmez. Eski sürümün ömrü dolmaya başlayınca şirket önce duyuru yapar, ardından bir kapanış tarihi belirler. Bu tarihten sonra o sürüme gelen istekler hata verir ya da yeni bir sürüme yönlendirilir. Ayrıntılar şirketten şirkete değişir; kesin süreler ve kurallar sağlayıcının belgelerinde yer alır.",
  "why": "Bir ürün belirli bir modelin davranışına göre ayarlandıysa, sürüm değişikliği yanıtların tonunu, biçimini ve doğruluğunu etkileyebilir. Bu yüzden kullanımdan kaldırma takvimi, yapay zekayı ürününe yerleştiren şirketler için bir bakım ve maliyet kalemidir. Haberlerde bir modelin emekliye ayrılması çoğu zaman bu bağlamda geçer.",
  "example": "Bir şirket müşteri destek botunu belirli bir model sürümüne göre yazdıysa, sağlayıcı o sürümün kapanacağını duyurduğunda botu yeni sürümle yeniden test etmesi ve komutlarını gerekirse uyarlaması gerekir.",
  "faq": [
   [
    "Kullanımdan kaldırma ile modelin tamamen silinmesi aynı şey mi?",
    "Tam olarak değil. Kullanımdan kaldırma genellikle bir duyuru ve geçiş sürecini anlatır. Modelin erişime kapatılması ise bu sürecin sonunda, önceden bildirilen tarihte gerçekleşir."
   ],
   [
    "Model sürümü neden sabitlenir?",
    "Aynı komuta her gün benzer yanıtlar almak için. Sürümü sabitlemek, model sessizce güncellendiğinde uygulamanın beklenmedik biçimde farklı davranmasını önler."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-yatirim-getirisi",
  "term": "Yapay zeka yatırım getirisi (ROI)",
  "en": "AI return on investment",
  "match": [
   "yatırım getiri",
   "=roi"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir yapay zeka projesine harcanan para ve emeğe karşılık elde edilen kazancın ölçüsü. Kazanç; tasarruf edilen maliyet, artan gelir ya da kazanılan zaman olabilir.",
  "how": "Hesap iki tarafı karşılaştırır. Maliyet tarafında model ya da yazılım kullanım bedeli, altyapı, veri hazırlığı, entegrasyon ve çalışan eğitimi gibi kalemler yer alır. Kazanç tarafında ise işlerin daha kısa sürede bitmesi, hataların azalması veya satışların artması gibi sonuçlar sayılır. Bu kazançların bir kısmı parayla kolay ölçülür, bir kısmı ise müşteri memnuniyeti gibi dolaylıdır. Bu yüzden şirketler genellikle küçük bir pilot uygulamayla başlar, önce ölçümü yapar, sonra ölçeği büyütür.",
  "why": "Yapay zeka araçlarına yapılan harcamalar hızla büyüdüğü için yöneticiler bu harcamanın karşılığını görmek ister. Haberlerde sıkça geçen yatırım getirisi tartışması, teknolojinin vaadi ile kurumlarda gerçekten ölçülebilen sonuç arasındaki mesafeyi gösterir. Net bir ölçüt olmadan yapılan projeler, denemeden öteye geçmeden bırakılabilir.",
  "example": "Bir sigorta şirketi hasar dosyalarını özetleyen bir yapay zeka aracı kullanıyorsa, dosya başına harcanan sürenin ne kadar kısaldığını ve aracın toplam maliyetini karşılaştırarak yatırım getirisini tahmin edebilir.",
  "faq": [
   [
    "Yapay zeka yatırım getirisi neden ölçülmesi zor bir konu?",
    "Çünkü faydaların bir kısmı dolaylıdır ve hemen görünmez. Çalışanların daha nitelikli işe zaman ayırması ya da müşteri memnuniyetindeki artış gibi sonuçlar paraya çevrilirken varsayım gerektirir."
   ],
   [
    "Küçük bir işletme için de bu hesap anlamlı mı?",
    "Evet. Küçük ölçekte bile aracın maliyetini, kazandırdığı süreyle karşılaştırmak yatırımın sürdürülüp sürdürülmeyeceğine karar vermek için yeterli bir başlangıç sağlar."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-ile-verimlilik-artisi",
  "term": "Yapay zeka ile verimlilik artışı",
  "en": "AI productivity gains",
  "match": [
   "verimlilik artış"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Yapay zeka araçlarının kullanılmasıyla aynı işin daha kısa sürede, daha az emekle ya da aynı emekle daha fazla çıktıyla yapılabilmesi. Verimlilik, harcanan çabaya karşılık elde edilen üretimi anlatır.",
  "how": "Yapay zeka sıkıcı ve tekrarlı işleri hızlandırarak verimlilik sağlar. Metin taslağı yazmak, toplantı notlarını özetlemek, kod önerisi sunmak ya da belgeleri taramak bunlara örnektir. Çalışan ilk taslağı araca hazırlatır, kendi zamanını kontrol etmeye ve karar vermeye ayırır. Kazanç her işte aynı olmaz. Araç hatalı çıktı verdiğinde düzeltme zamanı kazancı azaltabilir. Bu yüzden etki, işin türüne ve çalışanın aracı ne kadar iyi kullandığına bağlıdır.",
  "why": "Verimlilik artışı, şirketlerin yapay zekaya yatırım yapmasının en sık dile getirilen gerekçesidir. Ekonomistler de teknolojinin genel üretkenliği zamanla yükseltip yükseltmeyeceğini tartışır. Haberlerde çıkan sonuçlar araştırmaya, sektöre ve ölçüm yöntemine göre farklılık gösterdiği için tek bir rakama bakmak yanıltıcı olabilir.",
  "example": "Bir muhasebe ofisinde çalışan, müşterilere gidecek rutin e-posta yanıtlarının taslağını yapay zekaya yazdırıp yalnızca gözden geçirirse, aynı gün içinde daha fazla müşteriyle ilgilenebilir.",
  "faq": [
   [
    "Verimlilik artışı otomatik olarak daha az çalışan anlamına mı gelir?",
    "Hayır. Kazanılan zaman, şirketin daha fazla iş üretmesine, hizmet kalitesini yükseltmesine ya da çalışanların başka görevlere yönelmesine de gidebilir. Hangisinin olacağı şirketin tercihlerine bağlıdır."
   ],
   [
    "Yapay zeka her işte verimliliği artırır mı?",
    "Artırması garanti değildir. Çıktıların kontrol edilmesi gereken veya hata maliyetinin yüksek olduğu işlerde kazanç sınırlı kalabilir. Etki, göreve ve aracın nasıl kullanıldığına göre değişir."
   ]
  ]
 },
 {
  "slug": "yapay-zekanin-istihdama-etkisi",
  "term": "Yapay zekanın istihdama etkisi",
  "en": "AI impact on jobs",
  "match": [
   "istihdama etki",
   "iş kaybı"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Yapay zekanın hangi mesleklerin değiştiğini, hangi işlerin azaldığını ve hangi yeni işlerin ortaya çıktığını belirleyen etkisi. Konu, çalışanlar, şirketler ve hükümetler için ortak bir tartışma alanıdır.",
  "how": "Etkiyi anlamak için mesleği tek parça değil, görevler bütünü olarak düşünmek gerekir. Yapay zeka bazı görevleri üstlenebilir, bazılarını ise insana bırakır. Bir mesleğin görevlerinin büyük kısmı otomatikleşirse o alanda iş sayısı azalabilir. Görevlerin yalnızca bir kısmı devredilirse meslek çoğunlukla dönüşür. Ayrıca teknoloji yeni iş alanları da yaratabilir. Sonuç; sektöre, şirketlerin tercihine, eğitim düzeyine ve düzenlemelere göre değişir ve kesin biçimde öngörülemez.",
  "why": "İş kaybı kaygısı, yapay zeka tartışmasının en çok ilgi gören başlıklarından biridir. Araştırmacılar ve kurumlar farklı senaryolar öne sürer; bazıları ciddi dönüşüm bekler, bazıları etkinin yavaş ve kademeli olacağını savunur. Bu belirsizlik nedeniyle beceri eğitimi ve çalışan koruma politikaları gündemde kalmaktadır.",
  "example": "Bir çağrı merkezinde sık sorulan soruları yapay zeka yanıtlıyorsa, temsilcilerin işi sıradan sorulardan çıkıp karmaşık şikayetlerle ilgilenmeye kayabilir; şirket ise ekip büyüklüğüne farklı biçimde karar verebilir.",
  "faq": [
   [
    "Yapay zeka işlerin tamamını mı ortadan kaldıracak?",
    "Bunu kesin söylemek mümkün değil. Mevcut tartışma çoğunlukla mesleklerin tümünden çok, görevlerin bir kısmının otomatikleşmesi ve işlerin değişmesi üzerinedir. Etkinin ölçeği konusunda uzmanlar hemfikir değildir."
   ],
   [
    "Çalışanlar bu değişime nasıl hazırlanabilir?",
    "Yapay zeka araçlarını kendi alanlarında kullanmayı öğrenmek ve insana özgü becerilere, yani muhakemeye, iletişime ve alan bilgisine yatırım yapmak sık dile getirilen önerilerdir. Bunlar bir güvence değil, genel bir yaklaşımdır."
   ]
  ]
 },
 {
  "slug": "altin-veri-seti",
  "term": "Altın veri seti (golden dataset)",
  "en": "golden dataset",
  "match": [
   "altın veri seti",
   "golden dataset"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Uzmanlarca elle hazırlanmış ve doğru yanıtları kesin kabul edilen, bir yapay zeka sisteminin kalitesini ölçmek için referans olarak kullanılan küçük ama özenle seçilmiş örnek koleksiyonu.",
  "how": "Ekip, ürünün gerçekte karşılaşacağı girdilerden bir örneklem toplar: müşteri soruları, belgeler, kod parçaları gibi. Alan uzmanları her girdi için beklenen çıktıyı ya da kabul edilebilir bir yanıtın ölçütlerini yazar. Model, istem ya da sistem her değiştiğinde aynı set üzerinden çalıştırılır ve sonuçlar önceki sürümle karşılaştırılır. Set sabit kaldığı için puan farkı, test verisindeki değişimden değil sistemdeki değişimden kaynaklanır. Zor ve uç durumlar da sete eklenir; kullanımda yeni hata türleri çıktıkça set genişletilir.",
  "why": "Yapay zeka çıktıları tek tek bakınca iyi görünebilir; sistematik bir referans olmadan iyileştirme iddiaları sezgiye dayanır. Altın veri seti, sürümler arasındaki geriye gidişi yakalamaya ve farklı modelleri aynı zeminde kıyaslamaya yarar. Etiketler hatalıysa ya da set gerçek kullanımı yansıtmıyorsa yüksek puanlar yanıltıcı olur.",
  "example": "Bir bankanın müşteri destek botu için çalışanlar, gerçek sorulardan seçtikleri birkaç yüz soruya doğru yanıtları yazar; bot her güncellemeden sonra bu sorularla sınanır.",
  "faq": [
   [
    "Altın veri seti ile eğitim verisi aynı şey mi?",
    "Hayır. Eğitim verisi modele bir şey öğretmek için kullanılır, altın veri seti ise yalnızca ölçüm içindir. Ölçümün güvenilir olması için modelin bu örnekleri eğitimde görmemiş olması gerekir."
   ],
   [
    "Altın veri seti kaç örnekten oluşmalı?",
    "Sabit bir sayı yoktur. Başlangıç için onlarca ya da yüzlerce örnek yeterli olabilir. Sayıdan çok, gerçek kullanımın çeşitliliğini ve zor durumları kapsaması önemlidir."
   ]
  ]
 },
 {
  "slug": "degerlendirme-odakli-gelistirme",
  "term": "Değerlendirme odaklı geliştirme (eval-driven development)",
  "en": "eval-driven development",
  "match": [
   "değerlendirme odaklı geliştirme",
   "eval-driven development"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Yapay zeka uygulamasını yazmadan ya da değiştirmeden önce başarının nasıl ölçüleceğini belirleyip geliştirmeyi bu ölçümlere göre yürüten yaklaşım; yazılımdaki test odaklı geliştirmeye benzer.",
  "how": "Ekip işe, sistemin hangi durumlarda nasıl davranması gerektiğini örnekler ve ölçütler halinde yazarak başlar. Bu değerlendirmeler otomatik puanlayıcılarla çalışır: bazıları kesin kurallara, bazıları bir dil modelinin hakem olarak verdiği puana, bazıları da insan incelemesine dayanır. İstem, model veya akış her değiştiğinde değerlendirmeler yeniden koşulur ve puanlar bir öncekiyle karşılaştırılır. Yalnızca sonucu iyileştiren değişiklikler tutulur. Üretimde görülen yeni hatalar da teste dönüştürülüp sete eklenir.",
  "why": "Büyük dil modellerinin çıktıları her seferinde aynı olmadığı için bir istemi düzeltmek başka bir yerde bozulmaya yol açabilir. Bu yaklaşım riski görünür kılar ve ekiplerin tahmin yerine kanıtla karar vermesini sağlar. Yapay zeka ürünlerini prototipten üretime taşıyan ekiplerde yaygın bir pratiktir.",
  "example": "Bir hukuk belgesi özetleme aracını geliştiren ekip, önce iyi bir özetin içermesi gereken noktaları ölçüt olarak yazar; ardından her istem değişikliğini bu ölçütlere göre puanlayarak kabul eder ya da geri alır.",
  "faq": [
   [
    "Değerlendirme odaklı geliştirme ile test odaklı geliştirme arasındaki fark ne?",
    "İkisinde de önce ölçüt yazılır. Ancak klasik yazılım testleri geçer ya da kalır; yapay zekada çıktılar değişken olduğundan sonuç genellikle bir oran ya da puan olarak okunur."
   ],
   [
    "Küçük ekipler de bu yaklaşımı kullanabilir mi?",
    "Evet. On beş yirmi örnekten oluşan basit bir set ve net bir puanlama kuralı bile geliştirmeyi sezgiden çıkarıp ölçülebilir hâle getirir. Set zamanla büyütülebilir."
   ]
  ]
 },
 {
  "slug": "cevrimdisi-ve-cevrimici-degerlendirme",
  "term": "Çevrimdışı ve çevrimiçi değerlendirme",
  "en": "offline and online evaluation",
  "match": [
   "çevrimdışı ve çevrimiçi değerlendirme",
   "offline and online evaluation"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Çevrimdışı değerlendirme, sistemi yayına almadan önce hazır veriyle sınamak; çevrimiçi değerlendirme ise sistem gerçek kullanıcılarla çalışırken canlı ortamda ölçmektir.",
  "how": "Çevrimdışı değerlendirmede sistem, önceden hazırlanmış bir veri seti üzerinde yayına çıkmadan sınanır; sonuçlar hızlı, ucuz ve tekrarlanabilirdir. Çevrimiçi değerlendirmede ise sistem gerçek kullanıcılarla çalışırken ölçülür. Burada A/B testi, kullanıcı geri bildirimi, görevi tamamlama oranı ve hata kayıtları gibi sinyaller izlenir. Çevrimdışı aşama kötü sürümleri eler, çevrimiçi aşama ise hazırlanan veri setinin kaçırdığı gerçek hayat davranışlarını yakalar.",
  "why": "Çevrimdışı puanı yüksek bir model, gerçek kullanıcılar farklı sorular sorduğu için canlıda beklenenden kötü çalışabilir. Yalnızca çevrimiçi ölçüm ise hatalı bir sürümü doğrudan kullanıcıya ulaştırma riski taşır. İki yöntemi birlikte kullanmak, hız ile gerçekçilik arasında denge kurar.",
  "example": "Bir e-ticaret şirketi yeni alışveriş asistanını önce kayıtlı müşteri sorularıyla çevrimdışı sınar; sonra kullanıcıların küçük bir bölümüne açarak sohbetin satın alma ile sonuçlanma oranını eski sürümle karşılaştırır.",
  "faq": [
   [
    "Çevrimdışı ve çevrimiçi değerlendirmeden hangisi daha iyi?",
    "Biri ötekinin yerini tutmaz. Çevrimdışı yöntem yayından önce hızlı eleme sağlar, çevrimiçi yöntem gerçek kullanıcı davranışını gösterir. Olgun ekipler ikisini birlikte kullanır."
   ],
   [
    "Çevrimiçi değerlendirmenin riski nedir?",
    "Hatalı bir sürüm gerçek kullanıcıların karşısına çıkabilir. Bu yüzden genellikle küçük bir kullanıcı grubuyla başlanır ve sorun görülürse sürüm geri çekilir."
   ]
  ]
 },
 {
  "slug": "ajan-degerlendirmesi",
  "term": "Ajan değerlendirmesi (yörünge değerlendirmesi)",
  "en": "agent evaluation",
  "match": [
   "ajan değerlendirmesi",
   "trajectory evaluation"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Araç kullanarak çok adımlı çalışan yapay zeka ajanlarını yalnızca nihai sonucuna göre değil, o sonuca giderken attığı adımların dizisine, yani yörüngesine göre de ölçme yöntemi.",
  "how": "Ajan çalışırken yaptığı araç çağrıları, bu çağrılara verdiği girdiler ve aldığı yanıtlar kaydedilir; bu kayıt yörüngeyi oluşturur. Değerlendirme iki düzeyde yapılır: Sonuç doğru mu ve yol doğru muydu? İkincisinde doğru araç seçilmiş mi, gereksiz ya da tekrarlanan adım var mı, ajan bir döngüye girmiş mi, izin verilen sınırların dışına çıkmış mı gibi sorulara bakılır. Yörünge bir referans yörüngeyle karşılaştırılabilir ya da bir model hakem tarafından puanlanabilir. Deneyler çoğu zaman, gerçek sonuçlar doğurmaması için bir test ortamında yürütülür.",
  "why": "Ajanlar yalnızca metin üretmez, e-posta gönderir, kayıt değiştirir, ödeme başlatır. Doğru sonuca yanlış yoldan varmak, güvenlik ve maliyet açısından ciddi sorun olabilir. Yörünge incelemesi ayrıca hatanın hangi adımda başladığını göstererek ajanı düzeltmeyi kolaylaştırır.",
  "example": "Seyahat rezervasyonu yapan bir ajan doğru uçuşu bulur ama kullanıcıdan onay almadan ödeme adımını dener; sonuç doğru görünse de yörünge değerlendirmesi bu ihlali yakalar.",
  "faq": [
   [
    "Yörünge ne demek?",
    "Ajanın bir görevi çözerken izlediği adımların sırasıdır: hangi aracı hangi girdiyle çağırdığı, ne yanıt aldığı ve bir sonraki adıma nasıl karar verdiği."
   ],
   [
    "Ajan değerlendirmesi sohbet botu değerlendirmesinden nasıl ayrılır?",
    "Sohbet botunda genellikle tek bir yanıtın kalitesine bakılır. Ajanda ise birbirine bağlı birçok adım ve bunların yan etkileri vardır; bu yüzden hem sonuç hem süreç ölçülür."
   ]
  ]
 },
 {
  "slug": "gorev-basari-orani",
  "term": "Görev başarı oranı",
  "en": "task success rate",
  "match": [
   "görev başarı oranı",
   "task success rate"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Bir yapay zeka sistemine verilen görevlerin, önceden tanımlanmış başarı ölçütüne göre ne kadarının sonuca ulaştırıldığını gösteren oran.",
  "how": "Önce bir görev seti ve her görev için açık bir başarı ölçütü belirlenir. Ölçüt ikili olabilir, yani görev ya başarılıdır ya değildir; bazen de kısmi puan verilir. Kontrol otomatik yapılabilir, örneğin bir kod görevinde testlerin geçip geçmediğine bakılır; ya da insan değerlendiricilere bırakılır. Oran, başarılı görevlerin toplam görevlere bölünmesiyle bulunur. Model çıktıları her çalıştırmada değişebildiği için aynı görev genellikle birkaç kez denenir ve ortalama alınır.",
  "why": "Tek bir sayıyla anlaşılan bu ölçü, özellikle ajan ve kodlama sistemleriyle ilgili haberlerde sık kullanılır. Ancak görev seti ve başarı tanımı belirsizse farklı sistemlerin oranları karşılaştırılamaz. Oran tek başına maliyeti, süreyi ve güvenliği de göstermez; bu yüzden bağlamıyla okunmalıdır.",
  "example": "Bir kod ajanına yüz hata düzeltme görevi verilir ve yalnızca kırkında ilgili testler geçerse görev başarı oranı yüzde 40 olur.",
  "faq": [
   [
    "Görev başarı oranı ile doğruluk aynı şey mi?",
    "Tam olarak değil. Doğruluk genellikle tek tek yanıtların doğru olma oranıdır. Görev başarı oranı ise çok adımlı bir işin baştan sona istenen sonuca ulaşıp ulaşmadığına bakar."
   ],
   [
    "Yüksek görev başarı oranı sistemin güvenilir olduğunu gösterir mi?",
    "Tek başına göstermez. Görevlerin zorluğu, ölçütün sıkılığı, tekrarlar arasındaki tutarlılık ve ortaya çıkan maliyet ya da riskler de birlikte değerlendirilmelidir."
   ]
  ]
 },
 {
  "slug": "veri-carki",
  "term": "Veri çarkı (data flywheel)",
  "en": "data flywheel",
  "match": [
   "veri çarkı",
   "data flywheel"
  ],
  "cat": "Veri ve değerlendirme",
  "def": "Ürünün kullanımından doğan verinin modeli iyileştirmesi, iyileşen modelin de daha çok kullanıcı ve dolayısıyla daha fazla veri çekmesiyle kendini besleyen döngü.",
  "how": "Bir yapay zeka ürünü kullanıldıkça etkileşim kayıtları, kullanıcı geri bildirimleri ve düzeltmeler birikir. Bu kayıtlar temizlenip etiketlenir, ardından modeli eğitmek, ince ayar yapmak ya da değerlendirme setlerini genişletmek için kullanılır. Model iyileştikçe ürün daha faydalı hale gelir, daha çok kişi kullanır ve yeni veri akışı hızlanır. Dönen bir çarkın ivme kazanması gibi, her tur bir sonrakini kolaylaştırır. Döngünün işlemesi için veri toplamanın izne ve gizlilik kurallarına uygun yapılması gerekir.",
  "why": "Veri çarkı, yapay zeka şirketlerinin rekabet avantajını anlatırken sık kullanılan bir çerçevedir: Modelin kendisi tek başına öne çıkmayabilir, ama gerçek kullanımdan süren veri akışı taklit etmesi daha zor bir birikim yaratır. Haberlerdeki veri anlaşmaları ve kullanıcı verisinin eğitimde kullanılması tartışmaları da bu mantıkla ilişkilidir. Ürün ekipleri için geri bildirim toplamanın bir yatırım olduğunu gösterir.",
  "example": "Bir müşteri destek asistanında kullanıcıların 'işe yaradı' ya da 'yaramadı' diye işaretlediği yanıtlar toplanır; kötü işaretlenen örnekler incelenip bir sonraki sürümün test ve eğitim verisine eklenir.",
  "faq": [
   [
    "Veri çarkı ile ağ etkisi aynı şey mi?",
    "Hayır. Ağ etkisinde kullanıcı sayısı arttıkça ürün her kullanıcı için daha değerli hale gelir. Veri çarkında ise kullanıcıların ürettiği veri modeli iyileştirir ve bu iyileşme yeni kullanıcı çeker."
   ],
   [
    "Her yapay zeka ürününde veri çarkı çalışır mı?",
    "Hayır. Toplanan verinin kaliteli olması, geri bildirimin anlamlı sinyal taşıması ve verinin gerçekten modele ya da ürüne yansıtılması gerekir. Aksi halde yalnızca veri yığılır, ürün iyileşmez."
   ]
  ]
 },
 {
  "slug": "llmops",
  "term": "LLMOps",
  "en": "large language model operations",
  "match": [
   "llmops",
   "large language model operations"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Büyük dil modeli tabanlı uygulamaların geliştirilmesi, canlıya alınması, izlenmesi ve sürekli iyileştirilmesi için kullanılan yöntem ve araçların bütünü.",
  "how": "LLMOps, yazılımdaki DevOps ve makine öğrenmesindeki MLOps pratiklerinin dil modellerine uyarlanmasıdır. İstemlerin sürümlenmesi, otomatik değerlendirme testleri, iz kaydı, maliyet ve gecikme takibi, güvenlik filtreleri ve model değişikliklerinin kontrollü biçimde yayına alınması bu çerçevede yer alır. Uygulama canlıdayken gelen gerçek kullanıcı verisi izlenir, sorunlu yanıtlar saptanır ve düzeltmeler yeniden teste sokulur. Amaç, çıktısı her seferinde biraz değişen bir sistemi öngörülebilir ve denetlenebilir tutmaktır.",
  "why": "Bir dil modeliyle etkileyici bir demo hazırlamak kolaydır; onu binlerce kullanıcıya güvenilir, makul maliyetle ve güvenli biçimde sunmak ise ayrı bir mühendislik işidir. LLMOps, prototip ile üretim arasındaki bu boşluğu kapatır. Şirketlerin yapay zeka projelerinin neden pilot aşamasında takılabildiğini anlamak için de işe yarayan bir kavramdır.",
  "example": "Bir banka, müşteri sorularını yanıtlayan asistanındaki her istem değişikliğini test setiyle denedikten sonra yayına alır ve canlıdaki hatalı yanıt oranını bir panelden izler.",
  "faq": [
   [
    "LLMOps ile MLOps arasındaki fark nedir?",
    "MLOps, makine öğrenmesi modellerinin eğitim, dağıtım ve izleme süreçlerini kapsayan genel bir yaklaşımdır. LLMOps ise çoğunlukla hazır bir model üzerine kurulan uygulamalarda istem yönetimi, değerlendirme, bağlam verisi ve yanıt kalitesi gibi konulara odaklanır."
   ],
   [
    "Her şirketin LLMOps sürecine ihtiyacı var mı?",
    "Küçük denemeler ve kişisel kullanım için tam bir süreç gerekmez. Ancak kullanıcıya dönük ya da iş açısından kritik uygulamalarda test, izleme ve sürüm yönetimi gibi temel pratikler hızla gerekli hale gelir."
   ]
  ]
 },
 {
  "slug": "istem-surumleme",
  "term": "İstem sürümleme",
  "en": "prompt versioning",
  "match": [
   "istem sürümleme",
   "prompt versioning"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Dil modeline verilen istemlerdeki her değişikliğin tarih ve yazar bilgisiyle kaydedilmesi, böylece eski sürümlere dönülebilmesi ve sürümlerin birbiriyle karşılaştırılabilmesi uygulaması.",
  "how": "İstem metni, kod gibi bir depoda ya da özel bir istem yönetim aracında saklanır. Her düzenleme yeni bir sürüm numarası veya etiket alır; yanında kimin neden değiştirdiğini anlatan bir not bulunur. Yeni sürüm canlıya çıkmadan önce aynı test örnekleri üzerinde eskisiyle karşılaştırılır. Sorun çıkarsa uygulama tek adımda önceki sürüme döndürülür. Böylece istem uygulama kodundan ayrı yönetilebilir ve her yanıtın hangi istem sürümüyle üretildiği iz kaydında görülebilir.",
  "why": "Bir istemdeki küçük bir kelime değişikliği çıktıları beklenmedik biçimde değiştirebilir. Sürümleme olmadan hangi değişikliğin hangi soruna yol açtığını bulmak zorlaşır. Birden fazla kişi aynı istemi düzenlediğinde de ortak bir kayıt ve güvenli bir geri dönüş yolu sağlar.",
  "example": "Bir e-ticaret şirketinin ürün açıklaması yazan asistanı, istemin üçüncü sürümünden sonra gereğinden uzun metinler üretmeye başlayınca ekip ikinci sürüme dönüp iki sürüm arasındaki farkı inceler.",
  "faq": [
   [
    "İstem sürümleme için özel bir araç şart mı?",
    "Hayır. Küçük projelerde Git gibi bir sürüm kontrol sistemi yeterli olabilir. Özel istem yönetim araçları ise test, karşılaştırma ve yayın yönetimini kolaylaştırır."
   ],
   [
    "İstem sürümleme ile istem mühendisliği aynı şey mi?",
    "Hayır. İstem mühendisliği, modelden iyi sonuç alacak istemleri tasarlama işidir. İstem sürümleme ise bu istemlerin zaman içindeki değişimini kayıt altına alıp yönetmeye odaklanır."
   ]
  ]
 },
 {
  "slug": "iz-kaydi",
  "term": "İz kaydı (tracing)",
  "en": "tracing",
  "match": [],
  "cat": "Kullanım ve araçlar",
  "def": "Bir yapay zeka uygulamasında tek bir kullanıcı isteğinin geçtiği tüm adımların, yani model çağrılarının, aramaların ve araç kullanımlarının, sırayla ve ayrıntılı biçimde kaydedilmesi.",
  "how": "Uygulama bir istek aldığında bir iz başlar. Her adım, örneğin bilgi tabanında arama, dil modeline yapılan çağrı ya da bir aracın çalıştırılması, bu izin içinde ayrı bir kayıt olarak eklenir. Kayıtta girdi, çıktı, süre, harcanan token sayısı ve varsa hata bilgisi yer alır. Adımlar iç içe ya da art arda bir ağaç biçiminde görüntülenir. Geliştirici, bir yanıtın neden yanlış çıktığını bu ağaçta adım adım ilerleyerek bulur.",
  "why": "Birkaç adımdan oluşan ajan ve bilgi getirmeye dayalı uygulamalarda hata çoğu zaman son yanıtta değil, aradaki bir adımda saklıdır. İz kaydı bu adımı görünür kılar. Maliyetin ve gecikmenin nerede biriktiğini anlamak ve gerçek kullanıcı sorunlarını yeniden üretmek için de temel araçlardan biridir.",
  "example": "Bir asistan yanlış bir iade politikası söylediğinde iz kaydı, bilgi tabanından yanlış belgenin getirildiğini gösterir; sorun modelde değil, arama adımındadır.",
  "faq": [
   [
    "İz kaydı ile günlük kaydı (log) arasındaki fark nedir?",
    "Günlük kaydı, tek tek olayları ayrı satırlar halinde tutar. İz kaydı ise bir isteğin tüm adımlarını birbirine bağlayıp tek bir akış olarak gösterir; bu sayede hangi adımın ne kadar sürdüğü ve nerede hata çıktığı kolayca görülür."
   ],
   [
    "İz kaydı kullanıcı verisi saklar mı?",
    "Girdi ve çıktıları da kaydedebildiği için kişisel veri içerebilir. Bu yüzden hassas bilgilerin maskelenmesi, erişimin sınırlanması ve saklama süresinin belirlenmesi gerekir."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-ag-gecidi",
  "term": "Yapay zeka ağ geçidi (AI gateway)",
  "en": "AI gateway",
  "match": [
   "yapay zeka ağ geçidi",
   "aı gateway"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Uygulamalar ile farklı yapay zeka modeli sağlayıcıları arasında duran, istekleri tek noktadan yönlendiren, denetleyen ve kaydeden ara katman.",
  "how": "Uygulama, her sağlayıcıya ayrı ayrı bağlanmak yerine isteklerini ağ geçidine gönderir. Ağ geçidi isteği uygun modele iletir; bu sırada kimlik doğrulama, kullanım limiti, önbellek, güvenlik filtreleri ve maliyet kaydı gibi ortak işleri üstlenir. Bir sağlayıcı yanıt vermezse isteği yedek bir modele yönlendirebilir. Tüm trafik tek noktadan geçtiği için kullanım ve harcama merkezi olarak izlenir. Bu yapı, klasik yazılımdaki API ağ geçitlerine benzer.",
  "why": "Şirketler birden fazla model ve sağlayıcıyla çalıştıkça anahtar yönetimi, maliyet kontrolü ve veri güvenliği dağınık hale gelir. Ağ geçidi bu kuralları tek yerde uygulamayı mümkün kılar ve sağlayıcı değiştirmeyi kolaylaştırır. Kurumsal yapay zeka kullanımında yönetişim ve denetim açısından sık başvurulan bir bileşendir.",
  "example": "Bir şirketin tüm ekipleri dil modeli isteklerini ortak bir ağ geçidi üzerinden gönderir; geçit hassas verileri maskeler, ekip başına aylık harcama sınırı uygular ve kesinti olursa başka bir modele geçer.",
  "faq": [
   [
    "Yapay zeka ağ geçidi ile klasik API ağ geçidi arasındaki fark nedir?",
    "Klasik API ağ geçidi genel trafiği yönetir. Yapay zeka ağ geçidi buna ek olarak token sayımı, istem filtreleme, modeller arası yönlendirme ve yanıt önbellekleme gibi dil modellerine özgü işleri de yapar."
   ],
   [
    "Ağ geçidi yanıt süresini uzatır mı?",
    "Araya bir adım eklediği için genellikle küçük bir ek gecikme olur. Öte yandan önbellek gibi özellikler, tekrarlanan isteklerde yanıtı hızlandırabilir."
   ]
  ]
 },
 {
  "slug": "semantik-onbellek",
  "term": "Semantik önbellek",
  "en": "semantic caching",
  "match": [
   "semantik önbellek",
   "semantic caching"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir yapay zeka uygulamasında, daha önce yanıtlanmış sorulara anlamca benzer yeni sorular geldiğinde, modeli yeniden çalıştırmak yerine kayıtlı yanıtı geri veren önbellekleme yöntemi.",
  "how": "Her soru önce bir gömme (embedding) modeliyle sayı dizisine, yani anlam vektörüne dönüştürülür. Bu vektör, daha önce sorulmuş soruların vektörlerinin tutulduğu bir veri tabanında aranır. Yeni soru, belirlenen eşiğin üzerinde bir benzerlikle eşleşirse kayıtlı yanıt doğrudan döndürülür; eşleşme yoksa soru dil modeline gider ve çıkan yanıt ileride kullanılmak üzere kaydedilir. Klasik önbellek yalnızca birebir aynı metni yakalarken bu yöntem \"Şifremi unuttum\" ile \"Parolamı nasıl sıfırlarım?\" cümlelerini aynı soru sayabilir.",
  "why": "Dil modeli çağrıları hem zaman hem para harcar; sık tekrarlanan sorularda önbellek yanıt süresini kısaltır ve maliyeti düşürür. Öte yandan eşik yanlış ayarlanırsa farklı anlama gelen iki soruya aynı yanıt verilebilir, bu yüzden doğruluk ile tasarruf arasında denge kurulur. Müşteri destek botları gibi aynı soruların sürekli geldiği uygulamalarda yaygın bir iyileştirmedir.",
  "example": "Bir bankanın destek asistanına çok sayıda kişi \"Kartımı nasıl dondururum?\" sorusunu farklı sözcüklerle sorar; ilk yanıt kaydedilir, sonrakiler model çağrılmadan hızla verilir.",
  "faq": [
   [
    "Semantik önbellek ile klasik önbellek arasındaki fark ne?",
    "Klasik önbellek, sorunun daha önce gelenle birebir aynı olmasını ister. Semantik önbellek ise sözcükler farklı olsa bile anlamı yakın olan soruları aynı kabul eder."
   ],
   [
    "Semantik önbellek yanlış yanıt verebilir mi?",
    "Evet. Benzerlik eşiği çok gevşek bırakılırsa birbirine benzeyen ama farklı şeyler soran iki soru aynı yanıtı alabilir. Kişiye özel ya da sık değişen bilgi gerektiren sorularda bu yöntem dikkatle kullanılır."
   ]
  ]
 },
 {
  "slug": "hibrit-arama",
  "term": "Hibrit arama",
  "en": "hybrid search",
  "match": [
   "hibrit arama",
   "hybrid search"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Anahtar kelime eşleştirmesini, anlam temelli vektör aramasıyla birleştirip iki yöntemin sonuçlarını tek bir ortak sıralamada sunan bir arama yaklaşımı.",
  "how": "Sorgu aynı anda iki yoldan aranır. Birincisi BM25 gibi sözcük temelli yöntemdir; sorgudaki kelimelerin belgelerde geçip geçmediğine ve ne kadar nadir olduklarına bakar. İkincisi gömme vektörleriyle çalışan anlamsal aramadır; farklı sözcüklerle ifade edilmiş ama aynı şeyi anlatan metinleri bulur. İki listedeki sonuçlar, çoğunlukla karşılıklı sıra füzyonu gibi bir yöntemle birleştirilir ve gerekirse bir yeniden sıralama modeli son sıralamayı düzeltir.",
  "why": "Yalnızca anlamsal arama, ürün kodu, hata mesajı ya da özel ad gibi tam eşleşme gereken sorgularda kaçırma yapabilir; yalnızca anahtar kelime araması ise eş anlamlıları göremez. Hibrit arama bu iki zayıflığı dengeler. Bu yüzden geri getirmeyle güçlendirilmiş üretim (RAG) sistemlerinde yanıt kalitesini artırmak için sık tercih edilir.",
  "example": "Bir şirketin iç belge asistanında belirli bir form kodu aranınca kelime araması tam eşleşmeyi bulur; \"izin başvurusu nasıl yapılır\" sorusunda ise anlamsal arama ilgili yönergeyi getirir.",
  "faq": [
   [
    "Hibrit arama ile RAG aynı şey mi?",
    "Hayır. RAG, modelin yanıt vermeden önce ilgili belgeleri bulup kullanması yaklaşımıdır. Hibrit arama ise bu belgeleri bulma adımında kullanılabilen bir arama yöntemidir."
   ],
   [
    "Hibrit arama her zaman yalnızca anlamsal aramadan daha mı iyi?",
    "Her zaman değil. Ürün kodu ya da özel ad içeren karma veri kümelerinde genellikle daha dengeli sonuç verir, ama başarısı veriye ve ayara bağlıdır; bu yüzden gerçek sorgularla denenip ölçülür."
   ]
  ]
 },
 {
  "slug": "bilgi-tabani",
  "term": "Bilgi tabanı (knowledge base)",
  "en": "knowledge base",
  "match": [
   "bilgi tabanı",
   "knowledge base"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir yapay zeka sisteminin yanıt verirken başvurabileceği belgelerin, sıkça sorulan soruların ve diğer kaynakların düzenli biçimde toplandığı, aranabilir bilgi deposu.",
  "how": "Şirket belgeleri, kılavuzlar, e-postalar veya web sayfaları toplanır, temizlenir ve parçalara bölünür. Her parça gömme vektörüne çevrilip vektör veri tabanı ya da arama dizini gibi bir yapıda saklanır. Kullanıcı soru sorduğunda sistem ilgili parçaları bulur ve dil modeline yanıtı hazırlarken kaynak olarak verir. Böylece model, eğitim verisinde olmayan şirkete özgü ya da güncel bilgilere de dayanabilir; tabanın içeriği değişince modeli yeniden eğitmek gerekmez.",
  "why": "Dil modelleri eğitim verisinin dışındaki özel ya da yeni bilgileri bilmez ve bazen yanıt uydurur. Bilgi tabanı yanıtları somut kaynaklara bağlayarak bu riski azaltır ve kaynak göstermeyi mümkün kılar. Ancak içerik eskiyse ya da hatalıysa yanıtlar da bozulur; bu yüzden tabanın bakımı kritik bir iştir.",
  "example": "Bir telekom operatörünün müşteri asistanı, tarife koşullarının ve arıza giderme kılavuzlarının yer aldığı bilgi tabanından ilgili bölümü bulup yanıtını ona dayandırır.",
  "faq": [
   [
    "Bilgi tabanı ile klasik veri tabanı arasındaki fark ne?",
    "Klasik veri tabanı genellikle tablolar halinde yapılandırılmış kayıtları tutar. Yapay zeka bağlamındaki bilgi tabanı ise çoğunlukla metin belgelerinden oluşur ve anlama göre aranabilecek biçimde hazırlanır."
   ],
   [
    "Bilgi tabanına belge eklemek modeli eğitmek anlamına gelir mi?",
    "Hayır. Model değişmez; sistem yalnızca soru geldiğinde tabandan ilgili parçaları bulup modele ek bilgi olarak verir. Bu yüzden içerik, yeniden eğitim yapmadan güncellenebilir."
   ]
  ]
 },
 {
  "slug": "ajan-dongusu",
  "term": "Ajan döngüsü (agent loop)",
  "en": "agent loop",
  "match": [
   "ajan döngüsü",
   "agent loop"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yapay zeka ajanının bir hedefe ulaşana kadar durumu değerlendirip bir eylem seçtiği, bu eylemi yürüttüğü ve sonucu görüp yeniden karar verdiği tekrarlayan çalışma çevrimi.",
  "how": "Ajan, kullanıcının hedefini ve elindeki araçların listesini dil modeline verir. Model bir sonraki adımı seçer; örneğin web'de arama yapmayı, dosya okumayı ya da bir yazılım arayüzünü çağırmayı önerir. Uygulama bu aracı çalıştırır ve çıktıyı modele geri iletir. Model sonucu değerlendirip yeni bir araç çağırır ya da hedefin tamamlandığına karar verip son yanıtı yazar. Döngü; görev bitince, adım sınırına ulaşılınca ya da insan müdahale edince sona erer.",
  "why": "Tek seferlik soru-yanıt ile çok adımlı iş yapan ajanlar arasındaki temel fark bu döngüdür. Ajanın hata yapıp kendini düzeltebilmesini sağlar, ama her turda maliyet ve süre artar; kontrolsüz kalırsa model yanlış yolda dönüp durabilir. Bu yüzden adım sınırı, izleme ve insan onayı gibi önlemler tasarımın parçasıdır.",
  "example": "Kod yazan bir asistan testleri çalıştırır, hata mesajını okur, kodu düzeltir ve testleri yeniden çalıştırır; bütün testler geçene kadar bu tur sürer.",
  "faq": [
   [
    "Ajan döngüsü sonsuza kadar sürebilir mi?",
    "Önlem alınmazsa evet; ajan aynı hatayı tekrar tekrar deneyebilir. Bu yüzden uygulamalar genellikle en fazla adım sayısı, zaman ya da maliyet sınırı koyar."
   ],
   [
    "Ajan döngüsü ile ReAct aynı şey mi?",
    "Tam olarak değil. Ajan döngüsü genel çalışma düzenidir. ReAct ise modelin düşünme ve eylem adımlarını iç içe yürüttüğü, bu döngüyü kurmak için kullanılan bilinen bir istem yaklaşımıdır."
   ]
  ]
 },
 {
  "slug": "cok-turlu-konusma",
  "term": "Çok turlu konuşma",
  "en": "multi-turn conversation",
  "match": [
   "çok turlu konuşma",
   "multi-turn conversation"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Kullanıcı ile yapay zeka arasında birkaç mesajlık karşılıklı alışverişin sürdüğü ve önceki söylenenlerin sonraki yanıtları etkilediği bir sohbet biçimi.",
  "how": "Dil modelleri konuşmayı kendiliğinden hatırlamaz. Uygulama her yeni turda, o ana kadarki mesajların tamamını ya da özetini yeni mesajla birlikte modele gönderir. Model bu geçmişe bakarak \"bunu kısalt\" ya da \"peki ikincisi?\" gibi bağlama bağlı ifadeleri çözer. Geçmiş modelin bağlam penceresine sığmayacak kadar uzarsa eski turlar kırpılır veya özetlenir; bu da erken söylenen ayrıntıların unutulmasına yol açabilir.",
  "why": "Gerçek kullanımda insanlar nadiren tek mesajla işini bitirir; soruyu netleştirir, düzeltme ister, ayrıntı ekler. Çok turlu yapı, sohbet asistanlarını ve müşteri botlarını doğal kılar. Öte yandan uzun konuşmalarda maliyet artar ve model eski bilgiyi karıştırabilir, bu yüzden geçmişin yönetimi önemlidir.",
  "example": "Bir kullanıcı asistandan tatil planı ister, ardından \"bütçeyi düşür\" der; asistan hangi plandan söz edildiğini önceki mesajlardan bilir.",
  "faq": [
   [
    "Çok turlu konuşma ile tek turlu istem arasındaki fark ne?",
    "Tek turlu istemde model yalnızca o anki mesajı görür ve bir yanıt verip biter. Çok turlu konuşmada ise önceki mesajlar da modele iletilir, böylece sonraki sorular geçmişe göre yanıtlanır."
   ],
   [
    "Yeni bir sohbet açınca model neden önceki konuşmayı bilmiyor?",
    "Çünkü model geçmişi kendi içinde saklamaz; yalnızca uygulamanın gönderdiği mesajları görür. Yeni sohbette eski geçmiş gönderilmediği için model o konuşmadan habersizdir."
   ]
  ]
 },
 {
  "slug": "baglam-curumesi",
  "term": "Bağlam çürümesi (context rot)",
  "en": "context rot",
  "match": [
   "bağlam çürümesi",
   "context rot"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir dil modeline verilen metin uzadıkça, girdi bağlam penceresine sığsa bile yanıtların kalitesinin ve tutarlılığının giderek bozulması. Uzun sohbetlerde ve çok belgeli işlerde sık görülür.",
  "how": "Model, girdideki her parçaya aynı özenle bakamaz. Metin uzadıkça önemli bilgi gereksiz ayrıntıların arasında kaybolabilir, baştaki talimatlar zayıflayabilir, birbiriyle çelişen parçalar modeli şaşırtabilir. Bunu, saatlerce süren bir toplantıda en baştaki kararı hatırlamaya çalışmaya benzetmek mümkün. Etkinin şiddeti modele ve göreve göre değişir; herkesin kabul ettiği tek bir eşik yoktur. Sohbeti özetleyip yeniden başlatmak, bağlama yalnızca ilgili parçaları koymak ve kritik talimatları tekrarlamak yaygın önlemlerdir.",
  "why": "Model tanıtımlarında uzun bağlam penceresi büyük bir özellik olarak öne çıkar; ancak pencerenin geniş olması her bilgiyi aynı güvenilirlikle kullanmak anlamına gelmez. Bağlam çürümesini bilmek, uzun belgelerle çalışan ya da ajan sistemler kuran ekiplerin beklentisini gerçekçi tutar ve özetleme, bilgi getirme gibi çözümleri doğru yerde kullanmalarına yardım eder.",
  "example": "Saatlerdir süren bir kod yardımı sohbetinde asistan en baştaki kısıtlamaları göz ardı etmeye başlarsa, sorun çoğu zaman yeni bir sohbet açıp kısa bir özeti taşımakla düzelir.",
  "faq": [
   [
    "Bağlam çürümesi ile bağlam penceresinin dolması aynı şey mi?",
    "Hayır. Pencere dolduğunda metnin bir kısmı sığmaz, kesilir ya da hata alınır. Bağlam çürümesinde ise girdi pencereye sığar ama modelin yanıt kalitesi düşer."
   ],
   [
    "Bağlam çürümesini tamamen önlemek mümkün mü?",
    "Tamamen değil. Yine de bağlamı kısa ve ilgili tutmak, uzun işleri aşamalara bölmek ve önemli talimatları yeniden hatırlatmak etkisini belirgin biçimde azaltabilir."
   ]
  ]
 },
 {
  "slug": "model-surumu-sabitleme",
  "term": "Model sürümü sabitleme (model pinning)",
  "en": "model pinning",
  "match": [
   "model sürümü sabitleme",
   "model pinning"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Bir uygulamanın, sağlayıcının otomatik güncellemelerine bırakılmak yerine belirli ve adlandırılmış bir model sürümünü kullanmaya devam etmesi. Amaç, modelin davranışının habersiz değişmesini önlemektir.",
  "how": "Model sağlayıcıları genellikle iki tür ad sunar: zaman içinde yeni sürüme işaret edebilen genel takma adlar ve belirli bir sürüme bağlı tarihli ya da numaralı kimlikler. Sabitleme, uygulamanın istek yaparken ikinci türü kullanması demektir. Böylece sağlayıcı arka planda yeni bir model yayımlasa da uygulama aynı davranışı almaya devam eder. Sabitlenen sürümler sonsuza dek kalmaz; sağlayıcılar eski sürümleri belirli bir takvimle kullanımdan kaldırır. Bu nedenle ekipler yeni sürümü önceden test edip geçişi planlamak zorundadır.",
  "why": "Küçük bir model güncellemesi bile yanıtların biçimini, uzunluğunu ya da talimatlara uyumunu değiştirebilir. Bu da özenle kurulmuş istemlerin, ayrıştırma kodlarının ve kalite testlerinin bozulması anlamına gelir. Sabitleme öngörülebilirlik sağlar, ancak yeni sürümlerin iyileştirmelerinden yararlanmayı geciktirir; bu yüzden bilinçli bir denge gerekir.",
  "example": "Fatura belgelerinden alan çıkaran bir şirket, modelin çıktı biçimi değişip kodunu bozmasın diye tarihli sürüm kimliğini kullanır; yeni sürümü önce test verisiyle dener, sonuç iyiyse geçiş yapar.",
  "faq": [
   [
    "Model sürümü sabitlemek, modeli kendi sunucuda çalıştırmakla aynı şey mi?",
    "Hayır. Sabitleme, sağlayıcının sunduğu belirli bir sürümü seçmektir; sağlayıcı o sürümü ileride kullanımdan kaldırabilir. Modeli kendi altyapısında çalıştırmak ise ağırlıkların elde olmasını gerektirir ve ayrı bir iştir."
   ],
   [
    "Sabitlenen sürüm ne kadar süre kullanılabilir?",
    "Bu, sağlayıcıya ve modele göre değişir. Sağlayıcıların kullanımdan kaldırma duyurularını izlemek ve geçişi erkenden planlamak gerekir."
   ]
  ]
 },
 {
  "slug": "yedek-model",
  "term": "Yedek model (fallback)",
  "en": "model fallback",
  "match": [],
  "cat": "Kullanım ve araçlar",
  "def": "Ana model yanıt veremediğinde, hata verdiğinde ya da aşırı yavaşladığında isteğin otomatik olarak devredildiği ikinci model. Hizmetin kesintiye uğramasını önlemek için kullanılır.",
  "how": "Uygulama ile modeller arasında genellikle bir yönlendirme katmanı bulunur. İstek önce ana modele gider; zaman aşımı, kota sınırı, hizmet kesintisi ya da geçersiz yanıt gibi bir başarısızlık algılanırsa aynı istek sıradaki yedek modele aktarılır. Yedek, başka bir sağlayıcının modeli ya da aynı sağlayıcının daha küçük ve ucuz bir modeli olabilir. Burada dikkat edilecek nokta, bir istemin her modelde aynı sonucu vermemesidir; yedek yol da düzenli olarak denenmelidir.",
  "why": "Yapay zeka hizmetleri de kesintiye, yoğunluğa ve kota sınırlarına açıktır. Yedek model, bu anlarda ürünün tamamen durmasını önler ve kullanıcı deneyimini korur. Karşılığında kalite, maliyet ve veri işleme koşulları yedekte farklı olabilir; özellikle kişisel veri söz konusuysa bu fark önceden değerlendirilmelidir.",
  "example": "Bir müşteri hizmetleri sohbet botu ana modelden yanıt alamazsa isteği otomatik olarak daha küçük bir modele yollar ve kullanıcı sohbete kesintisiz devam eder.",
  "faq": [
   [
    "Yedek model ile model yönlendirme aynı şey mi?",
    "Tam olarak değil. Yönlendirme, isteğin zorluğuna ya da maliyete göre en baştan uygun modele gönderilmesidir. Yedek model ise yalnızca ana yol başarısız olduğunda devreye girer."
   ],
   [
    "Yedek model her zaman ana modelden daha zayıf mı olur?",
    "Hayır. Bazen aynı kalitede ama farklı bir sağlayıcıdaki model seçilir. Bazen de hız ve maliyet için daha küçük bir model tercih edilir; seçim, uygulamanın önceliğine bağlıdır."
   ]
  ]
 },
 {
  "slug": "golge-modu",
  "term": "Gölge modu (shadow mode)",
  "en": "shadow mode",
  "match": [
   "gölge modu",
   "shadow mode"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yeni bir modelin ya da özelliğin gerçek kullanıcı trafiğini işleyip yanıt üretmesi, ama bu yanıtların kullanıcıya gösterilmemesi. Yanıtlar yalnızca kaydedilir ve mevcut sistemle karşılaştırılır.",
  "how": "Canlı sistemdeki her istek her zamanki gibi mevcut modele gider ve yanıtı kullanıcıya iletilir. Aynı istek arka planda yeni modele de gönderilir; onun yanıtı kullanıcıya gösterilmez, yalnızca kaydedilir. Ekip daha sonra iki yanıtı insan değerlendirmesi, otomatik ölçütler, gecikme ve maliyet açısından karşılaştırır. Böylece yeni modelin gerçek trafikte nasıl davrandığı, kimse etkilenmeden görülür. Sınırı şudur: kullanıcı yanıtı görmediği için onun tepkisi ölçülemez.",
  "why": "Test verisi gerçek kullanımın çeşitliliğini tam yansıtmaz. Gölge modu, riskli bir geçişten önce beklenmedik hataları yakalamanın görece güvenli yoludur. Ancak ek hesaplama maliyeti getirir ve kullanıcı verilerinin ikinci bir sisteme de gitmesi gizlilik açısından ayrıca düşünülmelidir.",
  "example": "Bir e-posta uygulaması yeni özetleme modelini gölge modunda çalıştırır; kullanıcılar eski modelin özetlerini görürken ekip yeni modelin özetlerini arka planda inceler.",
  "faq": [
   [
    "Gölge modu ile A/B testi arasındaki fark ne?",
    "A/B testinde kullanıcıların bir kısmı yeni sürümün çıktısını görür ve tepkileri ölçülür. Gölge modunda ise yeni sürümün çıktısı kimseye gösterilmez; yalnızca arka planda kaydedilip karşılaştırılır."
   ],
   [
    "Gölge modu kullanıcıları hiç etkilemez mi?",
    "Yanıtlar görünmediği için doğrudan etkilemez. Yine de yeni sistem e-posta göndermek ya da kayıt değiştirmek gibi eylemler yapabiliyorsa bunlar kapatılmalı, arka plandaki çağrı da kullanıcıyı yavaşlatmayacak biçimde kurulmalıdır."
   ]
  ]
 },
 {
  "slug": "a-b-testi",
  "term": "A/B testi (yapay zeka özellikleri)",
  "en": "A/B testing",
  "match": [
   "a/b testi",
   "=a/b"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Kullanıcıların rastgele iki gruba ayrılıp birine mevcut sürümün, diğerine değiştirilmiş sürümün (yeni model, farklı istem ya da yeni özellik) sunulduğu ve sonuçların karşılaştırıldığı deney yöntemi.",
  "how": "Kullanıcılar rastgele iki gruba ayrılır. Bir gruba mevcut sürüm, diğerine değiştirilmiş sürüm gösterilir; bu yeni bir model, farklı bir istem ya da yeni bir arayüz olabilir. Önceden belirlenen ölçütler, örneğin görev tamamlama oranı, beğeni düğmesi, memnuniyet, yanıt süresi ve maliyet, iki grupta karşılaştırılır. Fark rastlantıdan ibaret olmasın diye yeterli sayıda kullanıcı ve yeterli süre gerekir. Yapay zekada çıktılar her seferinde değiştiği ve iyi yanıtın tanımı bulanık olduğu için ölçüt seçimi ayrıca zordur.",
  "why": "Bir modelin laboratuvar testlerinde iyi görünmesi, gerçek kullanıcıların onu daha yararlı bulacağı anlamına gelmez. A/B testi kararı sezgiye değil gözleme dayandırır. Yine de kısa vadeli tek bir ölçüte takılmak yanıltıcı olabilir; örneğin daha uzun yanıtlar daha çok beğenilirken daha pahalı da olabilir.",
  "example": "Bir sohbet asistanı geliştiren ekip, iki farklı sistem istemini kullanıcıların yarısına ayrı ayrı sunar ve hangisinin daha fazla olumlu geri bildirim aldığına bakar.",
  "faq": [
   [
    "A/B testi için kaç kullanıcı gerekir?",
    "Sabit bir sayı yoktur. Aranan fark küçüldükçe ve ölçüt oynaklaştıkça daha fazla kullanıcı gerekir; ekipler bunu genellikle istatistiksel güç hesabıyla önceden belirler."
   ],
   [
    "Yapay zeka özelliklerinde A/B testi neden daha zordur?",
    "Çıktılar her seferinde değişir, iyi yanıtın tek bir ölçütü yoktur ve kullanıcı memnuniyeti zamanla farklılaşabilir. Bu yüzden beğeni gibi ölçütlerin yanında insan incelemesi ve uzun vadeli göstergeler de izlenir."
   ]
  ]
 },
 {
  "slug": "niyet-siniflandirma",
  "term": "Niyet sınıflandırma (intent classification)",
  "en": "intent classification",
  "match": [
   "niyet sınıflandırma",
   "intent classification"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Kullanıcının yazdığı ya da söylediği bir mesajın ardındaki amacı, önceden tanımlı kategorilerden biriyle eşleştiren yöntem. Örneğin 'siparişim nerede?' cümlesi 'kargo sorgulama' niyetine atanır.",
  "how": "Sistem, örnek cümlelerle etiketlenmiş bir veri kümesiyle eğitilir. Başka bir yol da büyük bir dil modeline kategori listesini verip mesajı bunlardan birine yerleştirmesini istemektir. Gelen mesaj işlenir ve her niyet için bir güven skoru üretilir. Skor yeterince yüksekse ilgili akış başlar, örneğin iade formu açılır. Skor düşükse sistem açıklayıcı bir soru sorar ya da isteği bir insana yönlendirir. Bir mesajda birden fazla niyet de olabilir; iyi tasarlanmış sistemler bunları ayrı ayrı yakalar.",
  "why": "Müşteri hizmetleri botları, sesli asistanlar ve akıllı arama kutuları, kullanıcının ne istediğini anlamadan işe yarar bir yanıt veremez. Niyet yanlış belirlenirse kullanıcı alakasız cevaplarla karşılaşır ve sisteme güveni azalır. Doğru sınıflandırma, isteklerin uygun araca ya da ekibe gitmesini sağlayarak bekleme süresini ve maliyeti düşürür.",
  "example": "Bir bankanın sohbet botu 'kartımı kaybettim' mesajını 'kart bloke etme' niyetine, 'hesap özetim' mesajını 'ekstre isteme' niyetine atar ve her birini farklı bir işleme yönlendirir.",
  "faq": [
   [
    "Niyet sınıflandırma ile varlık çıkarımı arasındaki fark nedir?",
    "Niyet, kullanıcının ne yapmak istediğini gösterir; varlık ise mesajdaki tarih, şehir, tutar gibi somut ayrıntılardır. 'Yarın İstanbul'a bilet bul' cümlesinde niyet bilet aramak, 'yarın' ve 'İstanbul' ise varlıklardır."
   ],
   [
    "Büyük dil modelleri varken niyet sınıflandırma hâlâ gerekli mi?",
    "Görev ortadan kalkmadı, yalnızca yöntem değişti; birçok sistem artık sınıflandırmayı bir dil modeline yaptırıyor. Net kategoriler ve güven eşiği ise sistemin davranışını öngörülebilir kılmak için hâlâ işe yarıyor."
   ]
  ]
 },
 {
  "slug": "insana-devretme",
  "term": "İnsana devretme (human handoff)",
  "en": "human handoff",
  "match": [
   "insana devretme",
   "human handoff"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yapay zeka destekli bir sistemin, kendi başına çözemediği ya da riskli bulduğu bir durumda konuşmayı veya işlemi bir insan çalışana aktarması. En çok müşteri hizmetlerinde görülür.",
  "how": "Devretme birkaç durumda tetiklenir: kullanıcı bir insanla konuşmak ister, sistemin güveni düşer, aynı soru birkaç kez yanıtsız kalır ya da konu ödeme, sağlık, şikâyet gibi hassas bir alana girer. Bazı sistemler kullanıcının sinirli olduğunu fark edince de devreder. Devir sırasında konuşma geçmişi ve kısa bir özet insana iletilir; böylece kullanıcı derdini baştan anlatmak zorunda kalmaz. Kullanıcıya da tahmini bekleme süresi ya da bir sonraki adım bildirilir.",
  "why": "Yapay zeka sistemleri hata yapabilir ve her durumu kapsayamaz. İnsana çıkış yolu olmayan bir bot kullanıcıyı çıkmaza sokar. Devretme, yüksek riskli işlerde insan gözetimini sağlamanın en yaygın pratik yoludur. Devrin ne kadar sorunsuz yapıldığı, müşteri memnuniyetini büyük ölçüde belirler.",
  "example": "Bir telekom şirketinin sohbet botu fatura itirazında çözüm üretemeyince, konuşmanın özetiyle birlikte müşteriyi canlı destek temsilcisine bağlar.",
  "faq": [
   [
    "İnsana devretme ile insan döngüde (human-in-the-loop) aynı şey mi?",
    "Yakın kavramlardır ama aynı değildir. İnsan döngüde, insan sürecin içinde onay verir ya da düzeltme yapar; devretmede ise iş tamamen insana geçer. Pratikte çoğu sistem ikisini birlikte kullanır."
   ],
   [
    "Botların insana devretme seçeneği sunması zorunlu mu?",
    "Zorunluluk ülkeye ve sektöre göre değişir, bu yüzden ilgili mevzuata bakmak gerekir. Genel iyi uygulama ise kullanıcıya insana ulaşma yolunu açık bırakmaktır."
   ]
  ]
 },
 {
  "slug": "spesifikasyon-odakli-gelistirme",
  "term": "Spesifikasyon odaklı geliştirme (spec-driven development)",
  "en": "spec-driven development",
  "match": [
   "spesifikasyon odaklı geliştirme",
   "spec-driven development"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yapay zeka ajanlarına doğrudan kod yazdırmak yerine, önce yapılacak işi ayrıntılı anlatan bir belge (spesifikasyon) hazırlayıp yazılımı bu belgeden üreterek geliştirme yaklaşımı.",
  "how": "İnsan, özelliğin nasıl davranacağını, hangi kısıtlara uyacağını ve neyin tamamlanmış sayılacağını bir belgede yazar. Kod yazan yapay zeka asistanı bu belgeden önce bir plan ve görev listesi çıkarır, sonra kodu ve testleri üretir. Üretilen çıktı, belgedeki ölçütlere göre kontrol edilir. Bir değişiklik gerektiğinde önce belge güncellenir, ardından kod buna göre yeniden üretilir ya da düzeltilir. Belge böylece ekibin ve yapay zekanın ortak başvuru kaynağı olur.",
  "why": "Kısa ve gevşek istemlerle kod üretmek hızlıdır ama sonuçlar tutarsız olabilir; yapay zeka eksik bırakılan yerleri kendi varsayımlarıyla doldurur. Spesifikasyon, niyeti yazılı hale getirerek bu belirsizliği azaltır. Eleştirenler ise bunun eski usul 'önce ayrıntılı tasarım' anlayışına dönüş olduğunu ve belge yazmanın da emek istediğini söylüyor.",
  "example": "Bir ekip 'şifre sıfırlama' özelliği için akışı, hata durumlarını ve güvenlik kurallarını yazar; bir kod asistanı bu belgeden görevleri çıkarıp kodu ve testleri üretir.",
  "faq": [
   [
    "Spesifikasyon odaklı geliştirme ile test odaklı geliştirme aynı şey mi?",
    "Hayır. Test odaklı geliştirmede önce testler yazılır; spesifikasyon odaklı yaklaşımda ise önce istenen davranışın tanımı yazılır ve testler bundan türetilebilir. İki yöntem birlikte de kullanılabilir."
   ],
   [
    "Her yazılım projesi için uygun mu?",
    "Küçük ve deneysel işlerde belge hazırlamak gereksiz yük olabilir. Gereksinimleri net, birden çok kişinin çalıştığı ve uzun ömürlü projelerde daha anlamlı olur."
   ]
  ]
 },
 {
  "slug": "yapay-zeka-kullanici-deneyimi",
  "term": "Yapay zeka kullanıcı deneyimi (AI UX)",
  "en": "AI user experience",
  "match": [
   "yapay zeka kullanıcı deneyimi",
   "aı user experience"
  ],
  "cat": "Kullanım ve araçlar",
  "def": "Yapay zeka destekli ürünlerin, belirsiz ve zaman zaman hatalı çıktılar üretmelerine rağmen kullanıcı için anlaşılır, güvenilir ve kontrol edilebilir olmasını amaçlayan tasarım alanı.",
  "how": "Klasik yazılımda aynı girdi hep aynı sonucu verir; yapay zekada ise çıktı değişebilir ve yanlış olabilir. Tasarımcılar bu yüzden sistemin neyi yapıp neyi yapamadığını açıkça belirtir, kaynakları ya da gerekçeyi gösterir ve çıktıyı düzenlemeyi veya geri almayı kolaylaştırır. Beğendim ya da beğenmedim gibi geri bildirim düğmeleri sunar. Yanıtın parça parça akması gibi çözümlerle bekleme hissini azaltır. Sistem hata yaptığında da kullanıcıya alternatif bir yol bırakır.",
  "why": "Model ne kadar iyi olursa olsun arayüz kötüyse kullanıcı ya sisteme aşırı güvenir ya da hiç güvenmez. Yapay zeka haberlerinde sık anlatılan fark, aynı modelin farklı ürünlerde çok farklı deneyimler sunabilmesidir. İyi tasarım, kullanıcının güvenini sistemin gerçek başarısıyla uyumlu tutmaya yardım eder.",
  "example": "Bir sohbet asistanı yanıtının altında kaynak bağlantıları gösterir ve 'yeniden oluştur' düğmesi sunar; bir e-posta yazım aracı taslağı göndermeden önce kullanıcıya düzenleme imkânı verir.",
  "faq": [
   [
    "Yapay zeka kullanıcı deneyimi klasik kullanıcı deneyiminden nasıl ayrılır?",
    "Klasik tasarımda sistem öngörülebilir davranır. Yapay zekada çıktı değişkendir ve hata olasılığı vardır; bu yüzden belirsizliği, düzeltmeyi ve kullanıcının kontrolünü tasarımın merkezine almak gerekir."
   ],
   [
    "Güven ayarı neden önemlidir?",
    "Amaç kullanıcının sisteme tam gerektiği kadar güvenmesidir. Aşırı güven hataların gözden kaçmasına, yetersiz güven ise ürünün faydasının kullanılmamasına yol açar."
   ]
  ]
 },
 {
  "slug": "cikti-dogrulama",
  "term": "Çıktı doğrulama",
  "en": "output validation",
  "match": [
   "çıktı doğrulama",
   "output validation"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Bir yapay zeka modelinin ürettiği yanıtın, kullanıcıya ya da başka bir sisteme ulaşmadan önce biçim, doğruluk ve güvenlik açısından denetlenmesi.",
  "how": "Model yanıtı üretir, ardından ayrı bir katman bu yanıtı kontrol eder. Kontroller arasında beklenen biçime uyup uymadığı, yasaklı içerik bulunup bulunmadığı, kişisel veri sızıp sızmadığı ve verilen kaynaklarla çelişip çelişmediği vardır. Üretilen yazılım kodu ise çalıştırılıp test edilebilir. Bazı sistemler denetimi yapması için ikinci bir model kullanır. Kontrol başarısız olursa yanıt yeniden üretilir, düzeltilir, engellenir ya da bir insana gönderilir. Kural tabanlı ve model tabanlı denetimler çoğu zaman birlikte kullanılır.",
  "why": "Dil modelleri akıcı ama yanlış ya da zararlı çıktılar üretebilir. Çıktı bir veri tabanını ya da ödeme sistemini tetikliyorsa hata zincirleme büyüyebilir. Çıktı doğrulama, girdi tarafındaki filtrelemeyi tamamlar ve yapay zekanın gerçek işlerde daha güvenli kullanılmasının temel adımlarından biridir.",
  "example": "Bir sigorta şirketinin yapay zeka asistanı hasar özetini yapılandırılmış veri olarak üretir; doğrulama katmanı zorunlu alanların dolu olduğunu ve yanıtta müşterinin kimlik numarası gibi bir bilginin bulunmadığını kontrol ettikten sonra kaydı sisteme iletir.",
  "faq": [
   [
    "Çıktı doğrulama halüsinasyonu tamamen önler mi?",
    "Hayır. Biçim hatalarını ve bazı yanlış bilgileri yakalayabilir, ama her yanlışı fark etmesi mümkün değildir. Riski azaltır, ortadan kaldırmaz."
   ],
   [
    "Çıktı doğrulama ile koruma bariyerleri (guardrails) aynı şey mi?",
    "Koruma bariyerleri daha geniş bir kavramdır; hem girdi hem çıktı kontrollerini ve davranış kurallarını kapsar. Çıktı doğrulama bunların çıkış tarafındaki parçasıdır."
   ]
  ]
 },
 {
  "slug": "kisisel-veri-maskeleme",
  "term": "Kişisel veri maskeleme (PII redaction)",
  "en": "PII redaction",
  "match": [
   "kişisel veri maskeleme",
   "pıı redaction"
  ],
  "cat": "Güvenlik ve etik",
  "def": "Metin, görüntü veya veri tablolarındaki ad, kimlik numarası, telefon, adres gibi bir kişiyi belirleyebilecek bilgilerin silinmesi ya da yerine yer tutucu konulması işlemi.",
  "how": "Süreç önce veri içindeki kişisel bilgileri bulur. Bunun için düzenli ifadeler (örneğin telefon ve kart numarası kalıpları), sözlükler ya da adları ve adresleri bağlamdan tanıyan dil modelleri kullanılır. Bulunan parçalar silinir, siyah kutuyla kapatılır ya da [AD] ve [TELEFON] gibi etiketlerle değiştirilir. Bazı sistemler bunun yerine uydurma ama gerçekçi değerler koyar. Bu adım, veri bir yapay zeka modeline gönderilmeden, eğitim veri kümesine eklenmeden ya da kayıt dosyalarında saklanmadan önce uygulanır.",
  "why": "Yapay zeka araçları müşteri yazışmaları, sağlık kayıtları ve çağrı merkezi dökümleri gibi hassas verilerle çalıştığında bu bilgilerin sızma riski doğar. Maskeleme, KVKK ve GDPR gibi kişisel veri düzenlemelerine uyumu kolaylaştırır ve veriyi daha güvenle paylaşmayı sağlar. Yine de kusursuz değildir; gözden kaçan tek bir bilgi bile kişiyi ele verebilir.",
  "example": "Bir banka, müşteri şikâyet yazışmalarını yapay zekayla özetlemeden önce kimlik ve telefon numaralarını etiketlerle değiştirir.",
  "faq": [
   [
    "Maskeleme ile anonimleştirme aynı şey mi?",
    "Tam olarak değil. Maskeleme doğrudan tanımlayıcıları gizler; ancak geriye kalan meslek, yaş, semt gibi bilgiler birleştirilerek kişi yine bulunabilir. Gerçek anonimleştirme bu dolaylı tanımlamayı da engellemeyi gerektirir."
   ],
   [
    "PII ne anlama geliyor?",
    "PII, İngilizce personally identifiable information ifadesinin kısaltmasıdır; yani bir kişiyi doğrudan ya da dolaylı olarak belirleyebilen bilgi demektir. Ad, adres, kimlik numarası ve e-posta adresi bunlara örnektir."
   ]
  ]
 },
 {
  "slug": "gorev-basina-maliyet",
  "term": "Görev başına maliyet (cost per task)",
  "en": "cost per task",
  "match": [
   "görev başına maliyet",
   "cost per task"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir yapay zeka sisteminin tek bir işi baştan sona tamamlaması için harcanan toplam para; model kullanımı, ek araç çağrıları ve gerekirse insan kontrolü dahil.",
  "how": "Hesap, bir görevin bütün adımlarını toplamaktan ibarettir. Dil modellerinin kullanımı genellikle işlenen metin parçası (token) sayısı üzerinden ücretlendirilir; ajan türü sistemlerde bir görev için model birkaç kez çağrılabilir, arama ya da kod çalıştırma gibi araçlar da maliyet ekler. Başarısız denemeler ve insanın düzeltme süresi de hesaba katılır. Toplam, doğru biçimde tamamlanan görev sayısına bölününce görev başına maliyet çıkar.",
  "why": "Bir modelin token başına fiyatı düşük olsa bile işi çözmek için çok sayıda çağrı gerekiyorsa gerçek maliyet yükselir. Şirketler bir yapay zeka çözümünün insan emeğinden ucuz ve yeterince güvenilir olup olmadığını bu ölçüyle karşılaştırır. Haberlerdeki fiyat indirimlerini yorumlarken de yalnızca token fiyatına değil, işin bütününe bakmak gerekir.",
  "example": "Bir müşteri hizmetleri ekibi, yapay zekayla çözülen her destek talebi için model, arama aracı ve gerektiğinde insan onayı masraflarını toplar ve talep başına ortalama maliyeti, bir çalışanın aynı işe harcadığı maliyetle karşılaştırır.",
  "faq": [
   [
    "Token fiyatı ile görev başına maliyet aynı şey mi?",
    "Hayır. Token fiyatı bir birim fiyattır; görev başına maliyet ise bu birimin bir iş için kaç kez kullanıldığını ve işin ne sıklıkla başarısız olup tekrarlandığını da içerir."
   ],
   [
    "Görev başına maliyet nasıl düşürülür?",
    "Daha küçük ve ucuz bir modelle başlamak, gereksiz model çağrılarını azaltmak, tekrar eden girdileri önbelleğe almak ve hata oranını düşürmek yardımcı olur. Hangi yolun işe yarayacağı göreve göre değişir."
   ]
  ]
 },
 {
  "slug": "minimum-uygulanabilir-urun",
  "term": "Minimum uygulanabilir ürün (MVP)",
  "en": "minimum viable product",
  "match": [
   "minimum uygulanabilir ürün",
   "=mvp",
   "minimum viable product"
  ],
  "cat": "Hukuk, iş ve politika",
  "def": "Bir fikrin işe yarayıp yaramadığını anlamak için, yalnızca temel işlevi barındıracak biçimde hazırlanan ve gerçek kullanıcılara sunulan ilk sade ürün sürümü.",
  "how": "Ekip önce çözmek istediği tek bir sorunu seçer ve yalnızca bunu çözen en küçük ürünü yapar. Süslü özellikler, ayrıntılı arayüzler ve ek senaryolar sonraya bırakılır. Ürün az sayıda gerçek kullanıcıya verilir; kullanım verileri ve geri bildirimler toplanır. Sonuçlara göre ürün geliştirilir, yön değiştirilir ya da vazgeçilir. Yapay zekada bu çoğu zaman hazır bir dil modeli üzerine yazılmış basit bir istem ve arayüzden oluşur, sıfırdan model eğitmek gerekmez.",
  "why": "MVP, çok para ve zaman harcamadan önce talebin gerçekten var olup olmadığını sınamayı sağlar. Yapay zeka girişimlerinde hazır modeller sayesinde prototip çıkarmak kolaylaştığı için bu yaklaşım daha da yaygındır. Öte yandan demoda iyi çalışan bir MVP'nin gerçek kullanımda aynı kalitede kalacağı garanti değildir.",
  "example": "Bir girişim, hukuk bürolarına sözleşme özeti çıkaran bir araç geliştirmeden önce yalnızca tek tür sözleşmeyi özetleyen basit bir web sayfası hazırlar ve birkaç büroya denetir.",
  "faq": [
   [
    "MVP ile prototip arasındaki fark nedir?",
    "Prototip genellikle fikri göstermek ve ekip içinde denemek için yapılır. MVP ise gerçek kullanıcılara sunulur ve gerçek kullanım verisi toplamayı amaçlar."
   ],
   [
    "MVP kötü ya da yarım bir ürün demek mi?",
    "Hayır. MVP az özellikli ama o özellikleri düzgün çalışan bir üründür. Amaç hızlı öğrenmektir, kalitesiz ürün çıkarmak değil."
   ]
  ]
 }
];
