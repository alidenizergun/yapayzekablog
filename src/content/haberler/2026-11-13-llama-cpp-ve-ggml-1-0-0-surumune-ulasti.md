---
title: "llama.cpp ve ggml 1.0.0 sürümüne ulaştı: kırıcı değişiklikler için açık sürümleme kuralları"
spot: "Georgi Gerganov, llama.cpp ve ggml'nin ilk büyük sürümünü duyurdu. İki kütüphane de artık açık sürümleme kurallarıyla ilerleyecek; sürümle birlikte 35 kullanımdan kaldırılmış fonksiyon silindi."
category: araclar
tags: ["llamacpp", "ggml", "HuggingFace", "AçıkKaynak", "YerelModeller"]
date: 2026-11-13T23:51:50+03:00
image: kod
whyItMatters: "Yerel (cihaz üstü) model çalıştırmanın en yaygın kütüphanesi, uygulama geliştiricilerine ilk kez resmi bir uyumluluk sözü veriyor."
sources:
  - title: "Georgi Gerganov on X: llama.cpp v1.0.0 is now available"
    url: "https://x.com/ggerganov/status/2121246103312212124"
    publisher: "X (Georgi Gerganov)"
  - title: "@ClementDelangue X gönderisi"
    url: "https://x.com/ClementDelangue/status/2121260104913768931"
    publisher: "X (Clément Delangue)"
  - title: "llama.cpp Ships v1.0.0 With Semver for libllama and ggml"
    url: "https://aiweekly.co/alerts/llamacpp-ships-v100-with-semver-for-libllama-and-ggml"
    publisher: "AI Weekly"
  - title: "llama.cpp and ggml ship v1.0.0 — semantic versioning comes to the local AI stack"
    url: "https://dev.to/delimitter/llamacpp-and-ggml-ship-v100-semantic-versioning-comes-to-the-local-ai-stack-1ag4"
    publisher: "DEV Community"
---

Georgi Gerganov, 13 Kasım'daki sürümün llama.cpp ve ggml'nin ilk büyük sürümü (1.0.0) olduğunu duyurdu. Hugging Face CEO'su Clément Delangue da X'te sürümü ilk büyük, tam kararlı sürüm olarak duyurdu.

Her iki kütüphane de açık sürümleme kurallarına geçti: kırıcı C API değişiklikleri MAJOR, geriye dönük uyumlu eklemeler MINOR, hata düzeltmeleri ise PATCH artışı getirecek. Sürüm notları, 35 kullanımdan kaldırılmış fonksiyonun silindiğini belirtiyor.

llama.cpp 150'den fazla mimari varyantını destekliyor. Gerganov'un ekibi Şubat 2026'da Hugging Face'e katılmıştı.

Not: Hugging Face'in resmi blog yazısının adresi araştırmada yalnızca ikincil sayfaların metni içinde geçti; sayfanın kendisi görülemedi.
