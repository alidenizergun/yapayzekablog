---
title: "Yapay zeka modelini kendi bilgisayarınızda çalıştırmak: başlangıç rehberi"
description: "Açık ağırlıklı dil modellerini internete bağlanmadan kendi bilgisayarınızda çalıştırmanın yolları: donanım gereksinimleri, model boyutu ve kuantizasyon, araç seçimi ve güvenlik önerileri."
date: 2026-11-16
summary:
  - "Açık ağırlıklı modeller verilerinizi dışarı göndermeden yerelde çalıştırılabilir."
  - "Çalıştırabileceğiniz model büyüklüğünü en çok bellek (RAM ve ekran kartı belleği) belirler."
  - "Kuantize edilmiş küçük modeller, sıradan bilgisayarlarda bile makul hızda çalışabilir."
level: Orta
topic: Teknik
terms: [acik-agirlikli-model, kuantizasyon, parametre, gpu, cikarim, cihaz-ustu-yapay-zeka]
faq:
  - q: "Yerel model ChatGPT kadar iyi mi?"
    a: "Kişisel bilgisayarda çalışabilen modeller genellikle en büyük bulut modellerinden daha az yeteneklidir. Ancak özetleme, yazım düzeltme, basit kodlama ve belge sorgulama gibi işlerde çoğu zaman yeterli sonuç verir."
  - q: "Yerel model internetsiz çalışır mı?"
    a: "Model bir kez indirildikten sonra internet bağlantısı olmadan çalışabilir. Bu da hassas verilerle çalışırken önemli bir gizlilik avantajı sağlar."
  - q: "Mac'te yerel model çalıştırılabilir mi?"
    a: "Evet. Apple'ın kendi çipli Mac'leri, işlemci ve grafik biriminin ortak belleği kullanması sayesinde yerel modelleri çalıştırmak için oldukça uygundur."
---

ChatGPT, Claude ve Gemini gibi asistanlar bulutta, şirketlerin sunucularında çalışır. Açık ağırlıklı modeller ise indirilip kendi bilgisayarınızda çalıştırılabilir. Bu; gizlilik, internet bağlantısı olmadan çalışma ve kullanım başına ücret ödememe gibi avantajlar sağlar.

## 1. Neden yerel model?

- **Gizlilik:** Verileriniz bilgisayarınızdan çıkmaz.
- **Maliyet:** Model ücretsiz indirilebiliyorsa kullanım başına ödeme yapmazsınız; maliyet donanım ve elektriktir.
- **Çevrimdışı çalışma:** İnternet bağlantısı gerekmez.
- **Deneme ve öğrenme:** Modelleri ve ayarları istediğiniz gibi deneyebilirsiniz.

## 2. Donanımınızı kontrol edin

Çalıştırabileceğiniz modelin büyüklüğünü en çok bellek belirler. Kabaca bir kural olarak, 4 bitlik kuantize edilmiş bir model, parametre sayısının (milyar cinsinden) yaklaşık yarısı kadar gigabayt belleğe ihtiyaç duyar; üzerine çalışma payı eklemek gerekir. Örneğin 8 milyar parametreli bir modelin 4 bitlik sürümü birkaç gigabayt bellekle çalışabilirken, 70 milyar parametreli bir model çok daha güçlü bir sistem gerektirir. Yeterli belleğe sahip bir ekran kartı (GPU) veya Apple çipli bir Mac hızı belirgin biçimde artırır.

## 3. Bir çalıştırma aracı seçin

Yerel model çalıştırmayı kolaylaştıran ücretsiz araçlar var. Ollama ve LM Studio, model indirmeyi ve çalıştırmayı birkaç adıma indiren yaygın seçeneklerdir; llama.cpp ise daha teknik kullanıcılar için açık kaynaklı bir altyapıdır. Araçları yalnızca resmi sitelerinden indirin.

## 4. Uygun modeli seçin

Hugging Face gibi platformlarda binlerce açık ağırlıklı model bulunur. Başlangıç için tanınmış şirketlerin küçük ve orta boy modellerini (birkaç milyar ila birkaç on milyar parametre) tercih edin. Model sayfasında lisansı (ticari kullanıma izin veriyor mu?), desteklenen dilleri ve önerilen kuantizasyon seviyelerini kontrol edin. Türkçe kullanacaksanız modelin çok dilli olduğundan emin olun ve kendi metinlerinizle deneyin.

## 5. Kuantizasyon seviyesini seçin

Model dosyaları genellikle farklı kuantizasyon seviyelerinde sunulur. 8 bit daha kaliteli ama daha büyük, 4 bit daha küçük ve hızlı ama biraz daha az kaliteli sonuç verir. Belleğiniz yetiyorsa önce orta seviyeleri deneyin.

## 6. Test edin ve karşılaştırın

Kendi işlerinizden birkaç örnek seçip modeli deneyin: bir e-postayı özetletin, bir metni düzelttirin, bir kod parçasını açıklatın. Sonuçları bulut modelleriyle karşılaştırarak hangi işlerde yerel modelin yeterli olduğunu görün.

## 7. Güvenliğe dikkat edin

- Modelleri ve araçları yalnızca güvenilir kaynaklardan indirin.
- Yerel modelin sunucusunu internete açık bırakmayın; varsayılan olarak yalnızca kendi bilgisayarınızdan erişilebilir olmalıdır.
- Model lisansının kullanım amacınıza uygun olduğunu kontrol edin.
