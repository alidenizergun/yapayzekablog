---
title: "llama.cpp ve ggml 1.0.0 sürümüne ulaştı: uyumluluk için net sürüm kuralları geldi"
spot: "Georgi Gerganov, llama.cpp ve ggml'nin ilk ana sürümünü duyurdu. İki kütüphane artık hangi güncellemenin uyumluluğu bozacağını sürüm numarasından anlaşılır kılan kurallarla ilerleyecek; bu sürümle 35 eski fonksiyon kaldırıldı."
category: araclar
popularity: 30
tags: ["llamacpp", "ggml", "HuggingFace", "AçıkKaynak", "YerelModeller"]
date: 2026-11-13T23:51:50+03:00
image: kod
imageQuery: "terminal code open source"
whyItMatters: "Yerel (cihaz üstü) model çalıştırmanın en yaygın kütüphanesi, uygulama geliştiricilerine ilk kez resmi bir uyumluluk sözü veriyor."
photo:
  id: "ieic5Tq8YMk"
  url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=M3wxMTM0ODE0fDB8MXxzZWFyY2h8MXx8dGVybWluYWwlMjBjb2RlJTIwb3BlbiUyMHNvdXJjZXxlbnwxfDB8fHwxNzk0NzYxODM5fDA&ixlib=rb-4.1.0"
  alt: "a computer screen with a bunch of code on it"
  author: "Chris Ried"
  authorUrl: "https://unsplash.com/@cdr6934"
  link: "https://unsplash.com/photos/a-computer-screen-with-a-bunch-of-code-on-it-ieic5Tq8YMk"
photo2:
  id: "MPKQiDpMyqU"
  url: "https://images.unsplash.com/photo-1608742213509-815b97c30b36?ixid=M3wxMTM0ODE0fDB8MXxzZWFyY2h8MTV8fHRlcm1pbmFsJTIwY29kZSUyMG9wZW4lMjBzb3VyY2V8ZW58MXwwfHx8MTc5NTI5MTc5M3ww&ixlib=rb-4.1.0"
  alt: "Green computer code text scrolling on a dark screen during a software installation"
  author: "Jake Walker"
  authorUrl: "https://unsplash.com/@jakewalker"
  link: "https://unsplash.com/photos/green-computer-code-on-screen-MPKQiDpMyqU"
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

Georgi Gerganov, 13 Kasım'da yayımlanan 1.0.0 sürümünün llama.cpp ve ggml'nin ilk ana sürümü olduğunu duyurdu. Hugging Face CEO'su Clément Delangue da X'te sürümü projenin ilk kararlı sürümü olarak tanıttı.

İki kütüphane de anlamsal sürümleme kurallarına geçti: C API'de geriye dönük uyumu bozan değişiklikler ilk hanedeki (MAJOR), uyumlu yeni özellikler ikinci hanedeki (MINOR), hata düzeltmeleri ise üçüncü hanedeki (PATCH) numarayı artıracak. Sürüm notlarına göre daha önce kullanımdan kaldırılacağı duyurulan 35 fonksiyon bu sürümde silindi.

llama.cpp 150'den fazla mimari varyantını destekliyor. Gerganov'un ekibi Şubat 2026'da Hugging Face'e katılmıştı.
