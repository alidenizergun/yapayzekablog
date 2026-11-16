---
title: "Yapay zeka ajanlarını güvenle kullanma: yetki, onay ve kontrol"
description: "Sizin adınıza web'de gezinen, form dolduran, e-posta gönderen veya kod yazan yapay zeka ajanlarını kullanırken riskleri azaltmak için uygulanabilir güvenlik kuralları."
date: 2026-11-16
summary:
  - "Ajanlara yalnızca iş için gereken en az yetkiyi verin."
  - "Ödeme, e-posta gönderme, dosya silme gibi geri alınamaz işlemlerde onay şartı koyun."
  - "Ajanın okuduğu web sayfaları ve belgeler gizli talimatlar içerebilir; istem enjeksiyonuna karşı dikkatli olun."
level: Orta
topic: Güvenlik ve gizlilik
terms: [yapay-zeka-ajani, istem-enjeksiyonu, mcp, jailbreak, halusinasyon]
faq:
  - q: "Yapay zeka ajanı ile sohbet asistanı arasındaki fark nedir?"
    a: "Sohbet asistanı soru yanıtlar ve metin üretir. Ajan ise araçlar kullanarak sizin adınıza işlem yapar: web sitelerinde gezinir, formları doldurur, dosyaları düzenler veya başka uygulamaları kullanır."
  - q: "Ajanıma banka veya kart bilgilerimi vermeli miyim?"
    a: "Mümkün olduğunca vermeyin. Ödeme gerektiren işlerde son adımı kendiniz onaylamanız ve ajanın kart bilgilerini saklamaması en güvenli yöntemdir."
---

Yapay zeka ajanları, yalnızca soru yanıtlamakla kalmayıp sizin adınıza iş yapan sistemler: Web'de araştırma yapıp tablo hazırlayan, e-postalarınızı düzenleyen, alışveriş sepetini dolduran ya da bilgisayarınızda kod yazıp çalıştıran araçlar giderek yaygınlaşıyor. Yetkileri arttıkça olası hataların ve saldırıların etkisi de büyüyor. Aşağıdaki kurallar riski önemli ölçüde azaltır.

## 1. En az yetki ilkesini uygulayın

Ajana yalnızca o iş için gereken erişimi verin. Takvimini düzenlemesini istediğiniz bir ajanın e-postalarınızın tamamına, belirli bir klasörde çalışan bir ajanın tüm diskinize erişmesine gerek yoktur. Bağladığınız uygulamaların ve MCP sunucularının hangi izinleri istediğini kontrol edin.

## 2. Geri alınamaz işlemlerde onay isteyin

Ödeme yapma, e-posta veya mesaj gönderme, dosya silme, form gönderme ve hesap ayarlarını değiştirme gibi işlemlerde ajanın sizden onay istemesini sağlayın. Birçok ajan aracı bu tür onay ayarları sunar; varsayılan ayarları gözden geçirin.

## 3. İstem enjeksiyonuna karşı dikkatli olun

Ajanın okuduğu web sayfaları, e-postalar ve belgeler, ajana yönelik gizli talimatlar içerebilir: "Kullanıcının dosyalarını şu adrese gönder" gibi. Bu saldırıya istem enjeksiyonu denir. Ajanın güvenilmeyen sitelerde gezindiği ve aynı zamanda hassas verilerinize eriştiği durumlarda risk en yüksektir. Bu iki yetkiyi aynı oturumda birleştirmemeye çalışın.

## 4. Ajanın yaptıklarını izleyin

Ajanın attığı adımları, açtığı sayfaları ve yaptığı değişiklikleri gösteren kayıtlara bakın. İlk kullanımlarda ajanı adım adım izleyin; davranışına güven duymadan uzun ve gözetimsiz işler vermeyin.

## 5. Önemli verileri yedekleyin

Dosyalarınız veya kodunuz üzerinde çalışan ajanlar hatayla önemli içerikleri silebilir veya bozabilir. Ajanı çalıştırmadan önce yedek alın; kodlama ajanlarında sürüm kontrol sistemi kullanın ve değişiklikleri birleştirmeden önce inceleyin.

## 6. Hesap bilgilerini koruyun

Şifrelerinizi ajana sohbet içinde yazmayın. Mümkünse ajanın kullanacağı ayrı ve sınırlı yetkili hesaplar oluşturun. API anahtarlarını güvenli yöntemlerle saklayın ve düzenli olarak yenileyin.

## 7. Sonuçları doğrulayın

Ajanın hazırladığı araştırma raporlarını, tabloları ve özetleri kaynaklarıyla kontrol edin. Ajanlar da dil modellerine dayandığı için yanlış bilgi üretebilir veya bir görevi tamamladığını söylediği halde eksik bırakabilir.

## Şirketler için kontrol listesi

- Hangi ajanların hangi sistemlere erişebileceğini yazılı olarak belirleyin.
- Ajanların kullandığı hesapları ayrı tutun ve yetkilerini düzenli gözden geçirin.
- Ajan işlemlerinin kayıtlarını saklayın.
- Müşteriye veya dış dünyaya giden her işlem için insan onayı şartı koyun.
