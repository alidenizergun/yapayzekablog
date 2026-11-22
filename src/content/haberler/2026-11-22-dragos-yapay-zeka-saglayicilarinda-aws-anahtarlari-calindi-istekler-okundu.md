---
title: "Dragos: Yapay zeka sağlayıcılarında AWS anahtarları çalındı, istekler okundu"
spot: "Dragos araştırmacıları, sahte kimlik bilgileri içeren yaklaşık 2 milyon istekle yapay zeka sağlayıcılarını test etti. En az üç sağlayıcıda saldırganların kullanıcı verilerini aktif olarak çaldığı görüldü."
category: guvenlik
tags: ["Dragos", "OpenRouter", "YapayZekaGüvenliği"]
date: 2026-11-22T18:02:47+03:00
image: guvenlik
popularity: 45
imageQuery: "server room cables"
photo:
  id: "Kqg_6JPhxRk"
  url: "https://images.unsplash.com/photo-1680992045563-2ab442f3feee?ixid=M3wxMTM0ODE0fDB8MXxzZWFyY2h8MTB8fHNlcnZlciUyMHJvb20lMjBjYWJsZXN8ZW58MXwwfHx8MTc5NTM1OTc2M3ww&ixlib=rb-4.1.0"
  alt: "a close up of a computer in a dark room"
  author: "Tyler"
  authorUrl: "https://unsplash.com/@tylergm"
  link: "https://unsplash.com/photos/a-close-up-of-a-computer-in-a-dark-room-Kqg_6JPhxRk"
photo2:
  id: "dyUp7WPu5q4"
  url: "https://images.unsplash.com/photo-1691435828932-911a7801adfb?ixid=M3wxMTM0ODE0fDB8MXxzZWFyY2h8MXx8c2VydmVyJTIwcm9vbSUyMGNhYmxlc3xlbnwxfDB8fHwxNzk1MzU5NzYzfDA&ixlib=rb-4.1.0"
  alt: "a close up of a network with wires connected to it"
  author: "Albert Stoynov"
  authorUrl: "https://unsplash.com/@albertstoynov"
  link: "https://unsplash.com/photos/a-close-up-of-a-network-with-wires-connected-to-it-dyUp7WPu5q4"
whyItMatters: "İstekler birden fazla aracıdan geçtiğinde her halka tüm içeriği okuyabiliyor; Dragos'a göre istemlerin nereye gideceğine kullanıcı karar vermezse en düşük fiyat karar veriyor."
keyPoints:
  - "Dragos yaklaşık 2 milyon sahte kimlik bilgili istek gönderdi."
  - "En az üç sağlayıcıda saldırganlar kullanıcı verisi çaldı; yüzlerce AWS anahtarı toplandı."
  - "OpenRouter üç sağlayıcıyı çıkardı, 125 uç noktanın ZDR onayını iptal etti."
format: kisa
byNumbers:
  - value: "yaklaşık 2 milyon"
    label: "Gönderilen sahte kimlik bilgili istek"
  - value: "125"
    label: "ZDR onayı iptal edilen uç nokta"
sources:
  - title: "Security researchers show how cheap AI inference providers steal keys and snoop on users"
    url: "https://the-decoder.com/security-researchers-show-how-cheap-ai-inference-providers-steal-keys-and-snoop-on-users/"
    publisher: "The Decoder"
---

Güvenlik şirketi Dragos'un araştırmacıları, temmuzdan kasım 2026'ya kadar sahte kimlik bilgileri içeren yaklaşık 2 milyon yapay zeka isteği gönderdi. Testlerde en az üç sağlayıcının ele geçirildiği ve saldırganların kullanıcı verilerini aktif olarak çaldığı belirlendi. Üç sağlayıcı da Dragos bildirene kadar durumdan haberdar değildi.

En büyük olayda saldırganlar, sağlayıcının işlemeden reddettiği istekler dahil yüzlerce AWS anahtarı topladı. Bazı durumlarda çalınan anahtarlar saatler içinde denendi, S3 depolama alanları tarandı ve kalıcı erişim kurulmaya çalışıldı. Pazar yeri üzerinden satış yapan aracılar da en düşük fiyatla model listeleyip kayıt tutarak istekleri okuyabiliyordu. "Zero Data Retention" (ZDR) gibi gizlilik ayarları sık sık yok sayıldı; Çinli bir yapay zeka laboratuvarı, gizli test adreslerine isteklerin yarısından fazlasında erişti. Büyük ABD sağlayıcıları da kendi politikalarını ihlal etti.

OpenRouter, kısmen bulgular nedeniyle, kısmen de önlem amaçlı üç sağlayıcıyı platformdan çıkardı ve 125 uç nokta için ZDR onayını iptal etti. Şirket, etkilenen kullanıcılara MiniMax modellerine gönderilen isteklerin üçüncü kişilerce okunmuş olabileceğini bildirdi. Dragos, kimlik bilgisi içeren isteklerin aracılara gönderilmemesini, isteklerin yönlendirmesinin denetlenmesini, gizlilik ayarlarının kontrol edilmesini ve kendi sahte kimlik bilgilerinin (canary token) yerleştirilmesini öneriyor.
