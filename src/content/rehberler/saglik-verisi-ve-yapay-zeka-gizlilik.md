---
title: "Sağlık verisi ve yapay zeka: gizlilik riskleri ve hastaların hakları"
description: "Sağlık verisi KVKK'da özel nitelikli veridir. Sohbet botlarına tahlil veya rapor yüklemeden önce bilmeniz gereken riskleri, ChatGPT Health'in veri politikasını ve KVKK başvuru yollarını anlatıyoruz."
date: 2026-11-20
summary:
  - "Sağlık verisi KVKK'da özel nitelikli kişisel veridir ve yalnızca kanundaki istisnalarla ya da açık rızayla işlenebilir."
  - "ChatGPT Health yalnızca ABD'de sunuluyor; OpenAI bağlı sağlık kayıtlarını model eğitimi ve reklam için kullanmadığını söylüyor, ancak kayıtlar ABD'de HIPAA kapsamında değil."
  - "Veri sorumlusuna yazılı başvuru, 30 günlük yanıt süresi ve Kurul'a şikayet adımlarını bilmek haklarınızı kullanmanızı kolaylaştırır."
level: Orta
topic: Güvenlik ve gizlilik
terms: [yapay-zeka, sohbet-botu, uretken-yapay-zeka, egitim-verisi]
sector: saglik
faq:
  - q: "Tahlil sonucumu sohbet botuna yüklemek KVKK'ya aykırı mı?"
    a: "Kendi verinizi kendi isteğinizle paylaşmak tek başına yasak değildir; asıl mesele verinin nerede, hangi koşullarla işleneceğidir. Sağlık verisi özel nitelikli olduğu için gizlilik ayarlarını ve şirketin veri politikasını okumadan paylaşmamak daha güvenlidir."
  - q: "ChatGPT Health Türkiye'de kullanılabiliyor mu?"
    a: "Özellik yalnızca ABD'de sunuluyor ve Türkiye için resmi bir tarih açıklanmadı. Türkiye'deki kullanıcılar bağlı tıbbi kayıt özelliğini şimdilik kullanamıyor."
  - q: "Hastane verimi yanlış paylaşırsa nereye başvurmalıyım?"
    a: "Önce veri sorumlusuna, yani hastane veya kliniğe başvurmanız gerekir; bu adım atlanarak Kurul'a şikayet yapılamaz. Yanıt alamazsanız ya da yanıttan memnun kalmazsanız Kişisel Verileri Koruma Kurulu'na şikayet edebilirsiniz."
sources:
  - title: "KVKK: Kişisel Verilerin Korunması Kanunu Hakkında Sıkça Sorulan Sorular"
    url: "https://kvkk.gov.tr/SharedFolderServer/CMSFiles/c148901d-cd7f-43ff-ae9a-978fb78fb43c.pdf"
  - title: "KVKK: Şikayet Modülü Kılavuzu"
    url: "https://kvkk.gov.tr/SharedFolderServer/CMSFiles/1624cbad-5ea1-4d73-8519-4a4835eebdb3.pdf"
  - title: "OpenAI: Launching Health in ChatGPT"
    url: "https://openai.com/index/health-in-chatgpt/"
  - title: "OpenAI Yardım: Health in ChatGPT"
    url: "https://help.openai.com/en/articles/20001036-health-in-chatgpt"
  - title: "Paubox: ChatGPT Health launches nationwide, but medical records not HIPAA protected"
    url: "https://www.paubox.com/blog/chatgpt-health-launches-nationwide-but-medical-records-not-hipaa-protected"
  - title: "Sosyalmedya.org.tr: ChatGPT Health herkese açıldı, iddialar güvenilir mi?"
    url: "https://sosyalmedya.org.tr/makale/chatgpt-health-herkese-acildi-iddialar-ne-kadar-guvenilir"
  - title: "Zumbul Hukuk: KVKK ilgili kişinin hak arama yöntemleri"
    url: "https://www.zumbul.av.tr/tr/duyurular/kvkk-tarafindan-ilgili-kisinin-hak-arama-yontemleri-hakkinda"
  - title: "Zumbul Hukuk: Veri sorumlusuna başvuru ve Kurul'a şikayet"
    url: "https://www.zumbul.av.tr/tr/duyurular/kvkk-kapsaminda-veri-sorumlusuna-basvuru-ve-kurul-a-sikayet"
---

Tahlil sonucunu, reçeteyi ya da taburcu raporunu bir sohbet botuna yapıştırıp "bunu bana sade bir dille açıkla" demek çok kolay. Ama bu bilgiler hayatınızdaki en hassas veri türlerinden biri ve nereye gittiği, kimin elinde kaldığı hukuken de pratikte de önemli. Bu rehber tıbbi tavsiye vermez; sağlık verisinin hukuki statüsünü, sohbet botlarına veri yüklemenin risklerini, ChatGPT Health örneğini ve haklarınızı nasıl kullanabileceğinizi anlatır. Kişisel bir durumda karar vermeden önce hekiminize ya da bir avukata danışın.

## KVKK'da sağlık verisi neden özel nitelikli?

[KVKK'nın sıkça sorulan sorular metnine](https://kvkk.gov.tr/SharedFolderServer/CMSFiles/c148901d-cd7f-43ff-ae9a-978fb78fb43c.pdf) göre kişisel sağlık verileri özel nitelikli kişisel veridir. Bu tür verilerin işlenmesi kural olarak yasaktır; yalnızca kanunda sayılan istisnai hallerde ya da açık rıza varsa işlenebilir.

Kapsam da dar değil. Aynı kaynakta sağlık verisi, kişinin fiziksel ve ruhsal sağlığına ilişkin her türlü bilgi ile sunulan sağlık hizmetine dair bilgiler olarak tanımlanıyor. Tahlil sonuçları, geçirilen hastalıklar ve kullanılan ilaçlar bu kapsama giren örnekler arasında sayılıyor. Yani sohbet botuna yazdığınız bir ilaç listesi ya da yüklediğiniz bir rapor da bu çerçevenin içinde kalıyor.

## Sohbet botuna sağlık verisi yüklemenin riskleri

Genel amaçlı bir [sohbet botu](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/) çoğu zaman bir sağlık kuruluşu gibi çalışmaz. Hastanenin ya da hekimin tabi olduğu gizlilik yükümlülükleri, kendi başına kullandığınız bir uygulamaya otomatik olarak taşınmaz. Hangi koşulların geçerli olduğunu şirketin gizlilik politikası ve ürün ayarları belirler.

Bu yüzden pratik ilkeler şöyle özetlenebilir:

- Mümkünse ad, soyad, TC kimlik numarası, adres, sigorta ve hasta numarası gibi kimliği ortaya çıkaran bilgileri metinden çıkarın.
- Hizmetin sohbet geçmişini model geliştirmede kullanıp kullanmadığını ayarlardan kontrol edin ve gerekiyorsa kapatın.
- Anonimleştirmenin her riski ortadan kaldırmadığını unutmayın; rapor ayrıntıları tek başına kişiyi çağrıştırabilir.
- Sağlık verisinin nereye aktarıldığını ve ne kadar süre saklandığını önceden öğrenin.

Bu adımlar bir güvence değil, riski azaltma yöntemleridir. Uygulama günlük sorularda yararlı olabilir; ancak yanıtları teşhis ya da tedavi kararı yerine koymayın. Konunun tıbbi yanı için [sağlık sorularında yapay zeka kullanımı](/rehber/saglik-sorularinda-yapay-zeka-kullanimi/) rehberine bakabilirsiniz.

## ChatGPT Health: ne sunuyor, veri politikası ne diyor?

[OpenAI'ın duyurusuna](https://openai.com/index/health-in-chatgpt/) göre Health özelliği ABD'de 18 yaş ve üzeri kullanıcılara sunuluyor. Kullanıcılar tıbbi kayıtlarını ve Apple Health verilerini bağlayabiliyor. Varsayılan ayarda [ChatGPT](/arac/chatgpt/), bağlı kayıt ve Apple Health verisini kullanmadan önce izin istiyor; bu ayar Settings > Plugins > Health yolundan değiştirilebiliyor.

[OpenAI'ın yardım sayfası](https://help.openai.com/en/articles/20001036-health-in-chatgpt) veri politikası konusunda şunları söylüyor:

- Bağlı tıbbi kayıtlar ve Apple Health verileri, bu verileri kullanan sohbetler dahil, temel modelleri eğitmek veya reklam hedeflemek için kullanılmıyor.
- Bu kural, sohbet modeli eğitim ayarından bağımsız olarak geçerli.
- Kullanıcı bağlı kayıtları istediği zaman koparabiliyor.
- ChatGPT, sağlayıcının tuttuğu kayıtları veya Apple Health'i değiştiremiyor.

Bunlar şirketin kendi beyanları. Bir ürünün gizlilik taahhüdünü okurken yalnızca bugünkü metne değil, o metnin ne kadar bağlayıcı olduğuna da bakmak gerekir.

## ABD'de HIPAA korumasının dışında kalmak ne demek?

Tıbbi kayıtlar bir hastanenin sisteminden tüketici uygulamasına aktarıldığında ABD'nin sağlık gizliliği yasası HIPAA, bu kopyayı genellikle korumuyor. [Paubox'un aktardığına göre](https://www.paubox.com/blog/chatgpt-health-launches-nationwide-but-medical-records-not-hipaa-protected) ChatGPT Health'in tıbbi kayıtları HIPAA kapsamında değil; koruma, OpenAI'ın kendi koşullarına dayanıyor. Aynı yazıda aktarılan görüşe göre veri koruma kuruluşu EPIC'ten Sara Geoghegan, şirketin düzenleme olmadan koşulları değiştirebileceğini söylüyor.

Bu bir ürünün güvensiz olduğu anlamına gelmez. Ama yasal güvence ile şirket taahhüdü arasındaki farkı gösteriyor: Taahhüt, şirketin kararıyla değişebilir; yasal yükümlülük değişemez.

## Türkiye'deki kullanıcı için durum

Özelliğin Türkiye'deki kullanıcılar için karşılığı şimdilik sınırlı. [Sosyalmedya.org.tr'deki değerlendirmeye](https://sosyalmedya.org.tr/makale/chatgpt-health-herkese-acildi-iddialar-ne-kadar-guvenilir) göre ChatGPT Health yalnızca ABD'de sunuluyor ve Türkiye için resmi bir tarih açıklanmadı. Dolayısıyla Türkiye'deki bir kullanıcı için asıl pratik soru, kayıt bağlamaktan çok, sohbete elle yazdığı ya da yüklediği sağlık bilgisinin ne olacağı.

Öte yandan ChatGPT Health gibi yurt dışı merkezli bir şirkete karşı KVKK yoluyla nasıl başvurulacağı konusunda elimizdeki kaynaklarda net bir bilgi yok. Böyle bir durumda hak arama yolunu bir avukatla netleştirmek en sağlıklı yoldur. Türkiye'deki sağlık uygulamaları için [Türkiye'de sağlıkta yapay zeka](/rehber/turkiyede-saglikta-yapay-zeka/) rehberine de göz atabilirsiniz.

## Hastanın hakları ve KVKK başvuru yolu

Sağlık verinizin hastane, klinik ya da bir uygulama şirketi tarafından hukuka aykırı işlendiğini düşünüyorsanız izlenecek yol şöyle:

1. **Önce veri sorumlusuna başvurun.** [KVKK'nın şikayet modülü kılavuzuna](https://kvkk.gov.tr/SharedFolderServer/CMSFiles/1624cbad-5ea1-4d73-8519-4a4835eebdb3.pdf) göre Kurul'a şikayet, veri sorumlusuna başvuru adımı atlanarak yapılamaz.
2. **Yanıt süresini bekleyin.** Veri sorumlusu başvuruyu en geç 30 gün içinde ve ücretsiz sonuçlandırmak zorunda; ret kararları gerekçeli olmalı. Bu çerçeve kılavuzda ve [bir hukuk bürosunun hak arama yöntemleri özetinde](https://www.zumbul.av.tr/tr/duyurular/kvkk-tarafindan-ilgili-kisinin-hak-arama-yontemleri-hakkinda) de yer alıyor.
3. **Gerekirse Kurul'a şikayet edin.** [Zumbul Hukuk'un özetine](https://www.zumbul.av.tr/tr/duyurular/kvkk-kapsaminda-veri-sorumlusuna-basvuru-ve-kurul-a-sikayet) göre cevabı öğrendiğiniz tarihten itibaren 30 gün, her halde başvurudan itibaren 60 gün içinde şikayet edilmesi gerekiyor. 30 gün içinde cevap gelmezse de 60 günlük sınır işliyor.
4. **Sonucu izleyin.** Aynı kaynaklara göre Kurul 60 gün içinde sonuçlandırmazsa talep reddedilmiş sayılıyor. Kurul hukuka aykırılık tespit ederse veri sorumlusunun yükümlülüğü yerine getirmesi için 30 gün süre var.

Kurul'un şikayet modülü yalnızca ilgili kişinin kendi adına yaptığı başvuruya izin veriyor; vekil, veli veya vasi aracılığıyla başvuru yapılamıyor. Bu ayrıntıyı özellikle çocuğu ya da bakım verdiği yakını adına başvurmak isteyenler bilmeli.

## Başvurmadan önce hazırlanacaklar

Başvuru metninde hangi verinin, hangi kurum tarafından, ne zaman ve nasıl işlendiğini kısaca anlatın; ne talep ettiğinizi de açık yazın: bilgi almak, düzeltme veya silme gibi. Yazışmaları, ekran görüntülerini ve gönderim tarihlerini saklayın, çünkü süreler başvuru ve cevap tarihlerinden işliyor. Bir kuruma yaptığınız başvuruda hangi yöntemin geçerli olduğu kurumun KVKK aydınlatma metninde belirtilir; emin değilseniz oradan kontrol edin.

Şirketlerin ve çalışanların bu konudaki yükümlülükleri için [KVKK ve yapay zeka araçları](/rehber/kvkk-ve-yapay-zeka-araclari/) rehberi de yararlı olabilir.

## Kısa kontrol listesi

- Sağlık verisini paylaşmadan önce gerçekten gerekli olup olmadığını düşünün.
- Kimlik bilgilerini çıkarın; mümkünse yalnızca ilgili sonucu ya da soruyu yazın.
- Gizlilik ayarlarını ve verinin eğitimde kullanılıp kullanılmadığını kontrol edin.
- Şirketin politikasının değişebileceğini, yasal korumanın ise sürekli olduğunu unutmayın.
- Yanıtları teşhis ya da tedavi olarak değil, hekime götüreceğiniz sorular için bir hazırlık olarak kullanın.
- Hakkınızın ihlal edildiğini düşünüyorsanız önce veri sorumlusuna yazılı başvurun, süreleri not edin.
