# YZ Gündemi iOS uygulaması

Hafif uygulama: site uygulamanın içinde açılır, üstüne telefona özel üç özellik eklenir.

- **Haberler:** yzgundemi.com uygulama içinde açılır. Altta geri, ileri, ana sayfa, kaydet ve paylaş düğmeleri var. Aşağı çekince sayfa yenilenir. Kaynak bağlantıları ve diğer siteler Safari'de açılır.
- **Kaydedilenler:** Haber sayfalarındaki yer işareti düğmesiyle kaydedilen haberler. Yalnızca telefonda saklanır.
- **Bildirimler:** Ayarlar'dan açılır. Uygulama arka planda `/uygulama/son-haberler.json` adresine bakar ve yeni haber varsa bildirim gösterir. Sunucu ya da push anahtarı gerekmez. Kontrol sıklığını iOS belirlediği için bildirimler gecikebilir.

## Gerekenler

- Mac ve Xcode 15 veya üstü (iOS 17 hedefi)
- [XcodeGen](https://github.com/yonaskolb/XcodeGen): `brew install xcodegen`
- App Store için Apple Developer Program üyeliği (yıllık 99 $)

## Çalıştırma

```sh
cd ios
xcodegen                 # project.yml'den YZGundemi.xcodeproj üretir
open YZGundemi.xcodeproj
```

Xcode'da **YZGundemi** hedefinde **Signing & Capabilities** sekmesini açın ve **Team** olarak kendi Apple hesabınızı seçin. Paket kimliği (bundle ID) `com.yzgundemi.app`; alınmışsa bunu `project.yml` dosyasında değiştirin. Ardından bir simülatör ya da bağlı iPhone seçip **Run** (⌘R) ile çalıştırın.

Arka plan bildirimini simülatörde denemek için uygulamayı açın, Ayarlar sekmesinden bildirimleri açın, uygulamayı arka plana alın ve Xcode'da **Debug → Simulate Background Fetch** seçeneğini kullanın.

## App Store'a gönderme

1. App Store Connect'te `com.yzgundemi.app` kimliğiyle yeni bir uygulama oluşturun.
2. Xcode'da **Product → Archive**, ardından **Distribute App → App Store Connect**.
3. **Gizlilik etiketi:** Uygulamanın kendisi veri toplamaz. Ancak site Google Analytics kullanıyor; kullanıcı çerez izni verirse uygulamadaki web görünümünde de ölçüm yapılır. Etiketi buna göre doldurun.
4. **İnceleme notu:** Apple, yalnızca bir siteyi gösteren uygulamaları reddedebiliyor (Yönerge 4.2). İnceleme notunda telefona özel özellikleri belirtin: yerel haber bildirimleri, çevrimdışı okunabilen kaydedilenler listesi ve paylaşım.

## Dosyalar

| Dosya | İçerik |
|---|---|
| `project.yml` | Xcode projesinin tanımı (XcodeGen) |
| `YZGundemi/YZGundemiApp.swift` | Uygulama girişi, sekmeler, bildirime dokununca haberi açma |
| `YZGundemi/NewsTab.swift` | Web görünümü, alt araç çubuğu, bağlantı yönlendirme, bağlantı yok ekranı |
| `YZGundemi/SavedView.swift` | Kaydedilen haberler |
| `YZGundemi/NewsChecker.swift` | Arka plan haber kontrolü ve yerel bildirimler |
| `YZGundemi/SettingsView.swift` | Bildirim anahtarı ve site bağlantıları |
