// Türkçe hazır komut (prompt) kütüphanesi (/yapay-zeka-komutlari/).
// Kurallar: Komutlar her genel asistanda (ChatGPT, Gemini, Claude, Copilot) çalışacak biçimde yazılır;
// köşeli parantezli [ALAN] kısımları kullanıcı doldurur. Kişisel veri, sağlık ve hukuk konularında uyarı eklenir.

export const PROMPTS_UPDATED = '2026-11-21';

export const PROMPT_CATS = [
  { slug: 'is', name: 'İş ve e-posta' },
  { slug: 'pazarlama', name: 'Pazarlama ve sosyal medya' },
  { slug: 'egitim', name: 'Eğitim ve ders çalışma' },
  { slug: 'yazi', name: 'Yazı ve düzenleme' },
  { slug: 'analiz', name: 'Analiz ve karar verme' },
  { slug: 'kariyer', name: 'Kariyer ve iş başvurusu' },
  { slug: 'kod', name: 'Kodlama' },
  { slug: 'gorsel', name: 'Görsel üretme' },
];

export const PROMPTS = [
  // ------------------------------------------------------------ iş ve e-posta
  { id: 'eposta-yaz', cat: 'is', title: 'Kibar ama net bir iş e-postası',
    text: 'Aşağıdaki durum için [ALICI ROLÜ] kişisine gönderilecek kısa bir iş e-postası yaz. Ton: kibar, net ve profesyonel. Konu satırı öner. En fazla 150 kelime olsun ve sonunda açık bir sonraki adım iste.\n\nDurum: [DURUMU YAZIN]' },
  { id: 'eposta-yanit', cat: 'is', title: 'Zor bir e-postaya yanıt',
    text: 'Aşağıdaki e-postaya yanıt yazmam gerekiyor. Önce e-postadaki talepleri ve gizli kaygıları madde madde çıkar. Sonra iki farklı yanıt taslağı yaz: biri uzlaşmacı, biri sınırları net koyan. Her ikisi de saygılı ve 120 kelimeyi geçmeyen metinler olsun.\n\nE-posta: [E-POSTAYI YAPIŞTIRIN]' },
  { id: 'toplanti-ozet', cat: 'is', title: 'Toplantı notlarından özet ve görev listesi',
    text: 'Aşağıdaki toplantı notlarını düzenle. Çıktı: 1) 3 cümlelik özet, 2) alınan kararlar, 3) kimin neyi hangi tarihe kadar yapacağını gösteren görev tablosu (Görev | Sorumlu | Tarih), 4) yanıtsız kalan sorular. Notlarda olmayan bilgi ekleme; belirsiz olanı "belirtilmedi" diye yaz.\n\nNotlar: [NOTLARI YAPIŞTIRIN]' },
  { id: 'rapor-ozet', cat: 'is', title: 'Uzun raporu yönetici özetine çevirme',
    text: 'Aşağıdaki raporu meşgul bir yönetici için özetle. En başta tek cümlelik ana mesaj olsun. Sonra en önemli 5 bulgu, rakamlarıyla birlikte. En sonda "Karar gerektiren konular" başlığı altında yöneticiden beklenen kararları yaz. Toplam 250 kelimeyi geçme.\n\nRapor: [METNİ YAPIŞTIRIN veya DOSYAYI YÜKLEYİN]' },
  { id: 'sunum-akisi', cat: 'is', title: 'Sunum akışı ve slayt başlıkları',
    text: '[KONU] hakkında [SÜRE] dakikalık bir sunum hazırlıyorum. Dinleyiciler: [DİNLEYİCİLER]. Amacım: [AMAÇ]. 8-10 slaytlık bir akış öner: her slayt için başlık, 3 madde ve konuşmacı notu yaz. İlk slayt dikkat çekici bir açılış, son slayt net bir çağrı olsun.' },

  // ------------------------------------------------------------ pazarlama ve sosyal medya
  { id: 'instagram-gonderi', cat: 'pazarlama', title: 'Instagram gönderi metni',
    text: '[ÜRÜN/HİZMET] için Instagram gönderi metni yaz. Hedef kitle: [HEDEF KİTLE]. Ton: [samimi / esprili / profesyonel]. 3 farklı seçenek ver; her biri ilk satırda dikkat çeken bir kanca, 2-3 cümlelik gövde ve bir harekete geçirici çağrı içersin. Sonuna 5 ilgili Türkçe hashtag ekle.' },
  { id: 'icerik-takvimi', cat: 'pazarlama', title: 'Aylık sosyal medya içerik takvimi',
    text: '[MARKA] için [PLATFORM] hesabına 4 haftalık içerik takvimi hazırla. Haftada [SAYI] gönderi. Tablo olarak ver: Tarih | İçerik türü (Reels, karusel, hikâye) | Konu | Kanca cümlesi | Amaç (farkındalık, etkileşim, satış). Türkiye\'deki özel günleri ve [SEKTÖR] için mevsimsel fırsatları dikkate al.' },
  { id: 'reels-senaryo', cat: 'pazarlama', title: '30 saniyelik Reels/TikTok senaryosu',
    text: '[KONU] hakkında 30 saniyelik dikey video senaryosu yaz. İlk 3 saniyede izleyiciyi durduracak bir kanca olsun. Sahne sahne ver: Süre | Görüntü | Ekrandaki yazı | Söylenecek metin. Son sahnede [ÇAĞRI: takip et / linke tıkla / yorum yaz] çağrısı yap.' },
  { id: 'reklam-metni', cat: 'pazarlama', title: 'Reklam başlığı ve metin varyasyonları',
    text: '[ÜRÜN] için dijital reklam metni yaz. Öne çıkan fayda: [FAYDA]. Hedef kitle: [KİTLE]. 5 başlık (en fazla 30 karakter) ve 5 açıklama (en fazla 90 karakter) üret. Her birini farklı bir psikolojik tetikleyiciyle yaz (merak, kazanç, kayıp korkusu, sosyal kanıt, kolaylık) ve hangisini kullandığını belirt. Doğrulanamayan iddia ve rakam kullanma.' },
  { id: 'urun-aciklama', cat: 'pazarlama', title: 'E-ticaret ürün açıklaması',
    text: 'Aşağıdaki ürün bilgileriyle e-ticaret sitesi için ürün açıklaması yaz: dikkat çeken bir giriş cümlesi, faydaları anlatan 3 kısa paragraf, madde madde teknik özellikler ve sık sorulan 3 soru-cevap. Arama motoru için doğal biçimde "[ANAHTAR KELİME]" ifadesini kullan. Bilgilerde olmayan özellik uydurma.\n\nÜrün bilgileri: [BİLGİLER]' },

  // ------------------------------------------------------------ eğitim ve ders çalışma
  { id: 'konu-anlatim', cat: 'egitim', title: 'Bir konuyu basitçe anlatma',
    text: '[KONU] konusunu bana [SINIF/SEVİYE] düzeyinde anlat. Önce gündelik hayattan bir benzetmeyle başla, sonra konuyu adım adım açıkla. En sonda anladığımı kontrol etmek için bana 3 soru sor ve cevaplarımı bekle; cevapları hemen verme.' },
  { id: 'calisma-plani', cat: 'egitim', title: 'Sınava çalışma planı',
    text: '[SINAV] sınavına [SÜRE] kaldı. Günde [SAAT] saat çalışabiliyorum. Konular: [KONU LİSTESİ]. Zorlandığım konular: [ZOR KONULAR]. Bana gün gün çalışma planı hazırla; tekrar günlerini ve deneme sınavlarını da ekle. Plan gerçekçi olsun, mola sürelerini de dahil et.' },
  { id: 'soru-uret', cat: 'egitim', title: 'Ders notundan alıştırma soruları',
    text: 'Aşağıdaki ders notundan 10 alıştırma sorusu hazırla: 5 çoktan seçmeli (4 şıklı), 3 kısa cevaplı, 2 yorum sorusu. Cevap anahtarını en sona, kısa açıklamalarıyla ekle. Sorular yalnızca notta geçen bilgilere dayansın.\n\nNot: [NOTU YAPIŞTIRIN]' },
  { id: 'kaynak-ozet', cat: 'egitim', title: 'Makaleyi öğrenci için özetleme',
    text: 'Aşağıdaki makaleyi bir öğrenci için özetle: ana fikir (1 cümle), temel kavramlar ve tanımları, öne sürülen argümanlar, kullanılan kanıtlar ve makalenin zayıf yanları. En sonda bu konuda ödev yazarken sorulabilecek 3 araştırma sorusu öner.\n\nMakale: [METİN]' },
  { id: 'dil-pratik', cat: 'egitim', title: 'Yabancı dil konuşma pratiği',
    text: 'Seninle [DİL] dilinde pratik yapmak istiyorum. Seviyem: [A1-C1]. Konu: [KONU, ör. restoranda sipariş]. Sen [ROL] ol, ben müşteri olayım. Her mesajımdan sonra önce rolüne uygun cevap ver, sonra parantez içinde Türkçe olarak hatalarımı ve daha doğal söyleyiş biçimlerini kısaca düzelt.' },

  // ------------------------------------------------------------ yazı ve düzenleme
  { id: 'metin-duzelt', cat: 'yazi', title: 'Yazım, noktalama ve akıcılık düzeltmesi',
    text: 'Aşağıdaki metni Türk Dil Kurumu yazım kurallarına göre düzelt; anlatım bozukluklarını gider ve akıcılığı artır. Anlamı ve üslubu değiştirme. Önce düzeltilmiş metni ver, sonra yaptığın en önemli 5 değişikliği nedeniyle birlikte listele.\n\nMetin: [METİN]' },
  { id: 'ton-degistir', cat: 'yazi', title: 'Metnin tonunu değiştirme',
    text: 'Aşağıdaki metni [resmî / samimi / ikna edici / sade] bir tona çevir. Hedef okur: [OKUR]. Uzunluğu yaklaşık aynı kalsın, bilgi eklemeden ve çıkarmadan yeniden yaz.\n\nMetin: [METİN]' },
  { id: 'blog-taslak', cat: 'yazi', title: 'Blog yazısı taslağı',
    text: '"[BAŞLIK]" başlıklı bir blog yazısı için taslak hazırla. Okur: [OKUR]. Önce 3 alternatif başlık öner. Sonra giriş paragrafı, H2 ve H3 başlıklarıyla bölüm planı ve her bölümde anlatılacak ana noktaları yaz. Rakam ve istatistik gereken yerleri [KAYNAK GEREKLİ] diye işaretle; uydurma rakam kullanma.' },
  { id: 'kisalt', cat: 'yazi', title: 'Metni kısaltma',
    text: 'Aşağıdaki metni anlamını koruyarak yarı uzunluğa indir. Tekrarları, dolgu ifadeleri ve gereksiz sıfatları çıkar. Önemli rakamları ve isimleri koru.\n\nMetin: [METİN]' },
  { id: 'ceviri-uyarla', cat: 'yazi', title: 'Bağlama uygun çeviri',
    text: 'Aşağıdaki metni [HEDEF DİL] diline çevir. Kelime kelime değil, [HEDEF KİTLE] için doğal okunacak şekilde uyarla. Deyimleri ve kültürel ifadeleri hedef dilde karşılığı olan ifadelerle değiştir; değiştirdiklerini çevirinin altında ayrıca listele.\n\nMetin: [METİN]' },

  // ------------------------------------------------------------ analiz ve karar verme
  { id: 'arti-eksi', cat: 'analiz', title: 'Artı-eksi analizi ve karar matrisi',
    text: '[SEÇENEK A] ile [SEÇENEK B] arasında karar vermeye çalışıyorum. Benim için önemli ölçütler: [ÖLÇÜTLER]. Her seçeneğin artılarını ve eksilerini listele, sonra ölçütlere 1-5 arası puan verdiğin bir karar tablosu hazırla. Kararı benim yerime verme; hangi bilgilerin kararı değiştirebileceğini belirt.' },
  { id: 'tablo-analiz', cat: 'analiz', title: 'Tablodaki veriyi yorumlama',
    text: 'Yüklediğim tabloyu analiz et. 1) Verinin ne içerdiğini kısaca açıkla, 2) en dikkat çekici 5 bulguyu rakamlarıyla yaz, 3) aykırı veya hatalı görünen değerleri işaretle, 4) bu verilerle yapılabilecek 3 grafik öner. Hesapladığın her rakamın nasıl hesaplandığını göster.' },
  { id: 'swot', cat: 'analiz', title: 'SWOT analizi',
    text: '[ŞİRKET/PROJE] için SWOT analizi yap. Bağlam: [SEKTÖR, PAZAR, HEDEF]. Her başlıkta en az 4 madde olsun. Sonra güçlü yanları fırsatlarla eşleştiren 3 strateji ve zayıf yanları tehditlere karşı koruyan 2 önlem öner. Emin olmadığın bilgileri varsayım olarak belirt.' },
  { id: 'ters-sav', cat: 'analiz', title: 'Fikrimi eleştir (şeytanın avukatı)',
    text: 'Aşağıdaki fikri/planı acımasızca ama yapıcı biçimde eleştir. En zayıf 5 noktayı, gözden kaçırdığım riskleri ve bu fikre en güçlü itirazı yap. Sonra her zayıf nokta için bir iyileştirme öner. Beni memnun etmeye çalışma.\n\nFikir: [FİKİR]' },

  // ------------------------------------------------------------ kariyer
  { id: 'cv-uyarla', cat: 'kariyer', title: 'CV\'yi iş ilanına uyarlama',
    text: 'Aşağıda bir iş ilanı ve CV\'m var. İlanın aradığı yetkinlikleri listele ve CV\'mle eşleştir. Eksik kalanları belirt. Ardından CV\'deki deneyim maddelerimi ilana göre, ölçülebilir başarı cümleleri olarak yeniden yaz. Yaşamadığım deneyim ekleme.\n\nİlan: [İLAN]\n\nCV: [CV]' },
  { id: 'on-yazi', cat: 'kariyer', title: 'Ön yazı (cover letter)',
    text: '[ŞİRKET] şirketindeki [POZİSYON] pozisyonu için ön yazı yaz. Öne çıkarmak istediğim 2 deneyim: [DENEYİMLER]. Şirket hakkında bildiğim: [BİLGİ]. En fazla 250 kelime; klişe ifadelerden kaçın, ilk cümlede neden bu şirkete başvurduğumu söyle.' },
  { id: 'mulakat', cat: 'kariyer', title: 'Mülakat provası',
    text: 'Benimle [POZİSYON] pozisyonu için mülakat provası yap. Sen [ŞİRKET TÜRÜ] şirketinde işe alım yöneticisisin. Bana teker teker soru sor; her cevabımdan sonra güçlü ve zayıf yanlarını söyle, daha iyi bir cevap için öneri ver ve sonraki soruya geç. Toplam 8 soru sor; davranışsal ve teknik soruları karıştır.' },
  { id: 'linkedin', cat: 'kariyer', title: 'LinkedIn "Hakkında" bölümü',
    text: 'LinkedIn profilim için "Hakkında" bölümü yaz. Mesleğim: [MESLEK]. Deneyim: [YIL] yıl. Uzmanlık alanlarım: [ALANLAR]. Öne çıkan başarılarım: [BAŞARILAR]. Birinci tekil şahısla, samimi ama profesyonel bir dille, en fazla 200 kelime. Son cümlede nasıl iletişime geçilebileceğini belirt.' },

  // ------------------------------------------------------------ kodlama
  { id: 'kod-acikla', cat: 'kod', title: 'Kodu satır satır açıklama',
    text: 'Aşağıdaki kodun ne yaptığını önce iki cümleyle özetle, sonra bölüm bölüm açıkla. Olası hataları, güvenlik açıklarını ve performans sorunlarını ayrı bir başlıkta listele. Kodu değiştirme; yalnızca açıkla ve öner.\n\nKod: [KOD]' },
  { id: 'hata-ayikla', cat: 'kod', title: 'Hata ayıklama',
    text: 'Bu kodu çalıştırınca aşağıdaki hatayı alıyorum. Hatanın olası nedenlerini olasılık sırasıyla listele, en olası nedeni düzelten kodu ver ve neden işe yaradığını açıkla. Emin değilsen bana hangi bilgiyi vermem gerektiğini sor.\n\nKod: [KOD]\n\nHata mesajı: [HATA]' },
  { id: 'excel-formul', cat: 'kod', title: 'Excel / Google E-Tablolar formülü',
    text: 'Excel\'de şu işi yapan bir formül yaz: [NE YAPMAK İSTEDİĞİNİZ]. Verilerim şu sütunlarda: [SÜTUNLAR]. Türkçe Excel kullanıyorum, formülü Türkçe işlev adlarıyla ve noktalı virgül ayırıcıyla ver. Formülün nasıl çalıştığını adım adım açıkla.' },
  { id: 'test-yaz', cat: 'kod', title: 'Birim testleri yazma',
    text: 'Aşağıdaki fonksiyon için [TEST ÇATISI] ile birim testleri yaz. Normal durumlar, sınır değerler ve hatalı girdiler için ayrı testler olsun. Her testin neyi kontrol ettiğini bir satır yorumla belirt.\n\nFonksiyon: [KOD]' },

  // ------------------------------------------------------------ görsel üretme
  { id: 'gorsel-istem', cat: 'gorsel', title: 'Ayrıntılı görsel istemi oluşturma',
    text: 'Bir görsel üretme aracı için ayrıntılı istem (prompt) yaz. Fikrim: [FİKİR]. İstemde şunları belirt: ana konu, ortam, ışık, kamera açısı ve lens, renk paleti, stil (fotoğraf, illüstrasyon, 3B vb.) ve en-boy oranı. Bana Türkçe ve İngilizce iki sürüm ver; İngilizce sürüm daha ayrıntılı olsun.' },
  { id: 'logo-fikir', cat: 'gorsel', title: 'Logo fikri ve görsel istemi',
    text: '[MARKA ADI] adlı, [SEKTÖR] alanında faaliyet gösteren bir marka için 5 logo fikri öner. Her fikir için konsepti, kullanılacak şekil ve renkleri ve neden bu markaya uyduğunu açıkla. Sonra en güçlü 2 fikir için görsel üretme aracına verilecek istemleri yaz.' },
  { id: 'urun-fotografi', cat: 'gorsel', title: 'Ürün fotoğrafı sahnesi',
    text: '[ÜRÜN] için e-ticaret ve sosyal medyada kullanılacak 4 farklı ürün fotoğrafı sahnesi tasarla: stüdyo (beyaz fon), yaşam tarzı, mevsimsel ve minimalist. Her biri için görsel üretme aracına verilecek İngilizce istemi yaz; ışık, arka plan ve kompozisyonu belirt.' },
];
