# YZ Gündemi tasarım kuralları

Türkçe yapay zeka haber sitesi. Okur, ne olduğunu hızlıca görmek ve kaynağına güvenmek ister.
Tasarım bir gazete gibi davranır: haber öne çıkar, süs geri planda kalır.

## İlkeler
- **Haber önce.** Başlık, spot ve tarih her zaman görsellerden daha belirgin.
- **Tek vurgu rengi.** Kırmızı yalnızca kategori etiketleri, linkler ve önemli eylemler içindir. Başka renk yalnızca şirket logolarında ve fotoğraflarda görünür.
- **Önem sırası biçimle anlatılır.** Manşet > öne çıkanlar > liste > kategori blokları; her seviye farklı görsel boyutu ve başlık büyüklüğü kullanır.
- **Dürüstlük.** Kaynak her haberde görünür; temsili fotoğraf ve logo olduğu yazılır; çalışmayan form gösterilmez.

## Renkler (src/styles/global.css içindeki değişkenler)
| Değişken | Açık | Koyu | Görev |
|---|---|---|---|
| `--bg` | #FFFFFF | #121212 | Sayfa zemini |
| `--fg` | #141414 | #F2F1EE | Metin, başlık, birincil buton |
| `--muted` | #5A5753 | #A9A6A0 | Spot, tarih, ikincil metin (≥4,5:1) |
| `--soft` | #F4F3F0 | #1D1C1B | Kutular, logo kartı zemini |
| `--line` | #E6E4E0 | #2E2D2B | Ayırıcı çizgiler |
| `--accent` | #CF2E13 | #E5452A | Vurgu (çizgi, ikon, odak halkası) |
| `--accent-text` | #B32610 | #FF7A62 | Vurgu renginde metin |
| `--accent-fill` | #CF2E13 | #C2321A | Üzerinde beyaz yazı olan zemin (≥5:1) |
| `--band` | #141414 | #000000 | Son dakika şeridi, alt bilgi |

## Yazı tipleri
| Rol | Yazı tipi | Kullanım |
|---|---|---|
| Başlık (`--display`) | Schibsted Grotesk 600–800 | Logo, haber başlıkları, bölüm başlıkları. Haber yayıncıları için tasarlandı, Türkçe karakterleri tam. |
| Arayüz (`--body`) | Inter 400–700 | Menü, spot, liste metinleri, form, etiketler |
| Haber metni (`--serif`) | Source Serif 4 400/600 | Yalnızca haber sayfasının gövde metni |

Ölçek (masaüstü): manşet 44, haber sayfası başlığı 46, öne çıkanlar 22, liste 21, kenar listesi 16, spot 18–20, gövde 19, meta 13. Satır uzunluğu en fazla ~70 karakter.

## Boşluk ve köşeler
- 4'ün katları: 8, 12, 16, 20, 24, 28, 32, 48, 64.
- Köşe yarıçapı: görseller ve kutular 6px, etiket/buton 22px (hap).
- Gölge kullanılmaz; ayrım çizgi ve zeminle yapılır.

## Bileşenler
- **Görsel önceliği:** Büyük görsellerde (manşet, haber sayfası) fotoğraf > şirket logosu > illüstrasyon. Küçük görsellerde şirket logosu > fotoğraf > illüstrasyon. Bir bölümde aynı görsel tekrar etmez.
- **Logo kartı:** Nötr `--soft` zemin üzerinde logo kendi marka renginde; marka rengi zeminde okunmuyorsa `--fg`.
- **Kategori etiketi:** 12px, büyük harf, `--accent-text`.
- **Etiket hapı:** Her zaman bir etiket sayfasına link verir; link değilse hap biçimi kullanılmaz.
- **Son dakika şeridi:** Son 6 saatteki haber için "Son dakika", daha eskiyse "Son haber".
- **Dokunma alanı:** Telefonda her link ve buton en az 44px.
- **Paylaşım görseli:** 1200×630 PNG (fotoğraf, logo kartı veya illüstrasyon); SVG kullanılmaz.
