# Nöron — Yapay Zeka Haber Sitesi

Webrazzi tarzı, Türkçe yapay zeka haber sitesi. Günde 2 kez, her seferinde en fazla 10 haber olmak üzere kendi kendine yeni haberleri bulur, yazar, kaynaklarını ekler ve yayınlar.

- **Site:** [Astro](https://astro.build) ile üretilen hızlı, statik bir site. Ana sayfa, haber, kategori ve sayfalama sayfaları, RSS, site haritası ve Google için NewsArticle yapılandırılmış verisi hazır.
- **Haberler:** [Claude API](https://platform.claude.com) web aramasıyla gelişmeleri bulur, yayın kurallarına göre Türkçe yazar.
- **X takibi:** Yapay zeka alanındaki önemli kişilerin ve şirketlerin X gönderileri resmi X API ile taranır; haber değeri taşıyanlar habere dönüşür.
- **Otomasyon:** GitHub Actions günde 2 kez çalışır: İstanbul saatiyle 08:07 ve 17:07.
- **Yayın:** GitHub Pages (ücretsiz) + kendi domaininiz.

## Kaynak güvencesi

Her haberde kaynak zorunludur ve bu üç katmanda denetlenir:

1. **Yazım kuralı:** Claude'a yalnızca araştırma sırasında gerçekten gördüğü adresleri kaynak olarak kullanabileceği söylenir.
2. **Doğrulama:** Betik, haberdeki her kaynak adresini aramada gerçekten dönen adreslerle karşılaştırır. Eşleşmeyen adresler silinir; doğrulanmış kaynağı kalmayan haber yayınlanmaz.
3. **Derleme kontrolü:** Site şeması kaynaksız haberi kabul etmez. Derleme hata verirse yeni haberler geri alınır, site bozulmaz.

Haber sayfasında kaynaklar numaralı liste olarak görünür. Altında "yapay zeka desteğiyle derlenmiştir" notu bulunur.

## Yayına alma (bir kerelik, yaklaşık 20 dakika)

### 1. GitHub reposu
1. GitHub'da yeni bir repo açın (örn. `noron`). Herkese açık veya gizli olabilir; gizli repoda GitHub Pages için ücretli plan gerekebilir.
2. Bu klasördeki dosyaları repoya yükleyin (`main` dalı):
   ```bash
   git init && git add . && git commit -m "Nöron ilk sürüm"
   git branch -M main
   git remote add origin https://github.com/KULLANICI/noron.git
   git push -u origin main
   ```

### 2. Claude API anahtarı
1. [platform.claude.com](https://platform.claude.com) üzerinden bir API anahtarı oluşturun ve kredi yükleyin.
2. Repoda **Settings › Secrets and variables › Actions › New repository secret**: `ANTHROPIC_API_KEY` = anahtarınız.

### 3. GitHub Pages
1. **Settings › Pages › Build and deployment › Source:** `GitHub Actions` seçin.
2. **Settings › Actions › General › Workflow permissions:** `Read and write permissions` seçin. Bot yeni haberleri repoya bu izinle kaydeder.

### 4. Domain
1. **Settings › Secrets and variables › Actions › Variables** sekmesinde şu değişkenleri ekleyin:
   - `SITE_URL` = `https://alanadiniz.com`
   - `CUSTOM_DOMAIN` = `alanadiniz.com`
2. Domain sağlayıcınızın DNS ayarlarında:
   - Kök domain için GitHub Pages'in 4 A kaydını ekleyin: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` için CNAME kaydı: `KULLANICI.github.io`
3. **Settings › Pages** altında domaini doğrulayın ve **Enforce HTTPS** seçeneğini açın.

Domaininiz yoksa `SITE_URL` = `https://alidenizergun.github.io/yapayzekablog` ve `BASE_PATH` = `/yapayzekablog` verin; `CUSTOM_DOMAIN` eklemeyin.

### 5. X takibi (isteğe bağlı)
1. [console.x.com](https://console.x.com) üzerinden bir geliştirici hesabı ve uygulama oluşturun, kredi yükleyin.
2. Uygulamanın **Bearer Token** değerini kopyalayın.
3. Repoda **Settings › Secrets and variables › Actions › Secrets** bölümüne `X_BEARER_TOKEN` adıyla ekleyin.
4. X Developer Console'da bir aylık harcama limiti koymanızı öneririm, örneğin 40 dolar.

Takip edilen hesaplar `scripts/x-accounts.json` dosyasındadır. Listeye hesap eklemek veya çıkarmak için bu dosyayı düzenleyin. Türkiye'den hesaplar için `turkiye` listesi boş bırakıldı.

Her hesabın en son okunan gönderisi `data/x-state.json` dosyasında tutulur; aynı gönderi iki kez okunup ücretlendirilmez. `X_BEARER_TOKEN` tanımlı değilse X takibi atlanır, site yalnızca web aramasıyla çalışır.

### 6. Haber fotoğrafları (Unsplash, isteğe bağlı)
Haber görselleri şu sırayla seçilir: haber bir şirketle ilgiliyse şirketin logo kartı, değilse Unsplash'ten konuya uygun bir fotoğraf, ikisi de yoksa illüstrasyon.

1. [unsplash.com/developers](https://unsplash.com/developers) üzerinden bir uygulama oluşturun.
2. Uygulamanın **Access Key** değerini repoda **Settings › Secrets and variables › Actions › Secrets** bölümüne `UNSPLASH_ACCESS_KEY` adıyla ekleyin. **Secret key gerekmez**, hiçbir yere eklemeyin.
3. Bir sonraki haber güncellemesinde yeni haberlere fotoğraf eklenir; fotoğrafı olmayan eski haberlere de her çalışmada en fazla 15 tane olmak üzere fotoğraf eklenir (`PHOTO_BACKFILL` değişkeniyle değiştirilebilir).

Unsplash kuralları gereği fotoğraflar Unsplash sunucusundan gösterilir, fotoğrafçının adı görselin üzerinde ve haber sayfasında bağlantısıyla yazılır, her kullanım Unsplash'e bildirilir. Yeni uygulamalar "demo" modunda saatte 50 istekle sınırlıdır; bu site için yeterlidir.

Şirket logoları [Simple Icons](https://simpleicons.org) setinden (CC0) alınmıştır ve `src/lib/brands.js` dosyasındadır. Logosu bu sette olmayan şirketler (OpenAI, Microsoft, Amazon vb.) marka renginde adlarıyla gösterilir.

### 7. İlk çalıştırma
1. **Actions › Siteyi yayınla › Run workflow** ile siteyi yayınlayın.
2. **Actions › Haber güncellemesi › Run workflow** ile ilk otomatik haberleri üretin. Çalışma özeti, yazılan ve elenen haberleri gerekçeleriyle gösterir.

Bundan sonra her şey kendiliğinden çalışır.

## Ayarlar

Tüm ayarlar **Settings › Secrets and variables › Actions › Variables** altından, kod değiştirmeden yapılır:

| Değişken | Varsayılan | Açıklama |
|---|---|---|
| `NEWS_MODEL` | `claude-sonnet-5-5` | Haberleri yazan model. Daha ucuz seçenek: `claude-haiku-5-5`. Daha güçlü seçenek: `claude-opus-5-5`. |
| `MAX_ARTICLES` | `10` | Bir çalışmada en fazla kaç haber yayınlansın. Yeterince önemli gelişme yoksa daha az yayınlanır; dolgu haber yazılmaz. |
| `LOOKBACK_HOURS` | `15` | Kaç saat önceye kadarki gelişmelere bakılsın. İki çalışma arasındaki en uzun boşluk 15 saattir. |
| `MAX_SEARCHES` | `20` | Hafta içi bir çalışmada en fazla kaç web araması yapılsın. |
| `WEEKEND_SEARCHES` | `MAX_SEARCHES`'ın yarısı (`10`) | Cumartesi ve Pazar günleri en fazla kaç web araması yapılsın. |
| `REQUIRE_REVIEW` | `false` | `true` yapılırsa haberler taslak olarak kaydedilir ve siteye çıkmaz. Yayınlamak için dosyadaki `draft: true` satırını silmeniz yeterli. |
| `NEWSLETTER_ACTION` | yok | Bülten servisinizin (Mailchimp, Brevo vb.) form adresi. |

**Çalışma saatlerini değiştirmek için** `.github/workflows/news.yml` içindeki `cron` satırını düzenleyin. Saatler UTC'dir (İstanbul = UTC+3).

**Yazım dilini ve kuralları değiştirmek için** `scripts/editorial-guidelines.md` dosyasını düzenleyin. Hangi konuların haber olacağı, başlık uzunluğu ve ton gibi kurallar oradadır.

## Tahmini maliyet

Varsayılan ayarlarla (günde 2 çalışma, en fazla 10'ar haber):

| Kalem | Aylık tahmin |
|---|---|
| Claude API (Sonnet 5.5, web araması dahil; 1.000 arama 10 dolar) | ~45–70 $ |
| X API (31 hesap; okunan gönderi başına ~0,005 $) | ~15–30 $ |
| GitHub Pages ve Actions | Herkese açık repoda ücretsiz |
| **Toplam** | **~60–100 $** |

**Her çalışmanın gerçek maliyeti kaydedilir:**
- **Actions özeti:** Her "Haber güncellemesi" çalışmasının özetinde token sayıları, arama sayısı ve dolar maliyeti tablo halinde görünür.
- **`data/maliyet.csv`:** Her çalışma bu dosyaya bir satır ekler. Dosyayı Excel veya Google Sheets'te açıp aylık toplamı görebilirsiniz.
- **Fiyatlar:** Claude tutarı API'nin döndürdüğü gerçek token sayılarından ve `scripts/generate-news.mjs` içindeki fiyat tablosundan hesaplanır. X tutarı okunan gönderi sayısına göre yapılmış bir tahmindir. Kesin fatura Claude Console ve X Developer Console'dadır.

Bunlar tahmindir; gerçek tutar haber yoğunluğuna ve takip edilen hesapların ne sıklıkla paylaşım yaptığına göre değişir. Gerçek harcamayı Claude Console ve X Developer Console'dan izleyebilir, ikisine de harcama limiti koyabilirsiniz.

Maliyeti düşürmek için:
- `MAX_SEARCHES` değerini 12'ye indirin.
- `NEWS_MODEL` olarak `claude-haiku-5-5` kullanın. Claude maliyeti ayda yaklaşık 15–20 dolara düşer, ama Türkçe haber dili zayıflayabilir.
- `scripts/x-accounts.json` dosyasından çok sık paylaşım yapan hesapları çıkarın.

GitHub Pages ve GitHub Actions, herkese açık repolarda ücretsizdir.

## Tasarım

Renkler, yazı tipleri ve bileşen kuralları `DESIGN.md` dosyasındadır.

Paylaşım görselleri (`public/og/`) ve telefon ikonu `scripts/og-images.mjs` ile üretilir. Yeni bir şirket eklerseniz (`src/lib/brands.js`) bu betiği yeniden çalıştırın; nasıl çalıştırılacağı dosyanın başında yazıyor.

**Bülten:** Bülten formu yalnızca bir bülten servisi bağlıysa görünür. Brevo, Mailchimp veya Substack gibi bir servisin form adresini repo değişkeni olarak `NEWSLETTER_ACTION` adıyla ekleyin.

## Elle haber ekleme veya düzeltme

Her haber `src/content/haberler/` altında bir Markdown dosyasıdır. Dosyayı GitHub üzerinden düzenleyip kaydettiğinizde site birkaç dakika içinde güncellenir.

- **Haberi kaldırmak:** dosyayı silin veya `draft: true` satırını ekleyin.
- **Manşete almak:** `featured: true` satırını ekleyin.

## Yerelde çalıştırma

```bash
npm install
npm run dev          # http://localhost:4321
npm run news:dry     # API çağırmadan üretim hattını dener
ANTHROPIC_API_KEY=... npm run news   # gerçek haber üretir
```

## Klasör yapısı

```
src/content/haberler/          Haberler (Markdown, her haber bir dosya)
src/lib/site.js                Kategoriler, görseller, site ayarları
src/pages/                     Ana sayfa, haber, kategori, sayfalama, RSS
scripts/generate-news.mjs      Haber üretim hattı
scripts/editorial-guidelines.md  Yayın kuralları
scripts/x-feed.mjs             X takibi (resmi X API)
scripts/x-accounts.json        X takip listesi
data/x-state.json              X takip durumu (otomatik oluşur)
.github/workflows/news.yml     Günde 2 kez çalışan otomasyon
.github/workflows/deploy.yml   Siteyi GitHub Pages'e yayınlar
public/img/                    Kategori illüstrasyonları
```
