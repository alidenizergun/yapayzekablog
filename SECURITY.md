# Güvenlik politikası

YZ Gündemi (yzgundemi.com) statik bir haber sitesidir; sunucu tarafında kullanıcı verisi tutulmaz.

## Güvenlik açığı bildirimi
Bir güvenlik açığı bulduysanız lütfen herkese açık bir "issue" açmayın. Bunun yerine
[güvenlik bildirimi formunu](https://github.com/alidenizergun/yapayzekablog/security/advisories/new) kullanın.
Bildirimleri en geç 7 gün içinde yanıtlamayı hedefliyoruz.

## Uygulanan önlemler
- İçerik Güvenlik Politikası (CSP): yalnızca sitenin kendi betikleri ve özeti doğrulanmış satır içi betikler çalışır.
- Haber metinleri yapay zeka ile webden derlendiği için iki aşamada temizlenir: üretimde HTML ve kaynak dışı linkler silinir,
  derlemede güvensiz içerik bulunan haber yayınlanmaz (scripts/content-guard.mjs).
- Yazı tipleri ve görseller dışında üçüncü taraf betik yoktur; ziyaretçi takibi yapılmaz.
- GitHub Actions eylemleri commit özetine sabitlenmiştir; iş akışları en düşük yetkiyle çalışır.
- API anahtarları yalnızca GitHub Secrets'ta tutulur, kodda yer almaz.
