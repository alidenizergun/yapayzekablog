# Nöron — Yapay Zeka Haber Sitesi

Webrazzi tarzı, Türkçe yapay zeka haber sitesi. Günde 6 kez kendi kendine yeni haberleri bulur, yazar, kaynaklarını ekler ve yayınlar.

- **Site:** [Astro](https://astro.build) ile üretilen hızlı, statik bir site. Ana sayfa, haber, kategori ve sayfalama sayfaları, RSS, site haritası ve Google için NewsArticle yapılandırılmış verisi hazır.
- **Haberler:** [Claude API](https://platform.claude.com) web aramasıyla gelişmeleri bulur, yayın kurallarına göre Türkçe yazar.
- **Otomasyon:** GitHub Actions günde 6 kez çalışır: İstanbul saatiyle 07:07, 10:07, 13:07, 16:07, 19:07 ve 22:07.
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

Domaininiz yoksa `SITE_URL` = `https://KULLANICI.github.io/noron` ve `BASE_PATH` = `/noron` verin; `CUSTOM_DOMAIN` eklemeyin.

### 5. İlk çalıştırma
1. **Actions › Siteyi yayınla › Run workflow** ile siteyi yayınlayın.
2. **Actions › Haber güncellemesi › Run workflow** ile ilk otomatik haberleri üretin. Çalışma özeti, yazılan ve elenen haberleri gerekçeleriyle gösterir.

Bundan sonra her şey kendiliğinden çalışır.

## Ayarlar

Tüm ayarlar **Settings › Secrets and variables › Actions › Variables** altından, kod değiştirmeden yapılır:

| Değişken | Varsayılan | Açıklama |
|---|---|---|
| `NEWS_MODEL` | `claude-sonnet-5-5` | Haberleri yazan model. Daha ucuz seçenek: `claude-haiku-5-5`. Daha güçlü seçenek: `claude-opus-5-5`. |
| `MAX_ARTICLES` | `4` | Bir çalışmada en fazla kaç haber yayınlansın. |
| `LOOKBACK_HOURS` | `8` | Kaç saat önceye kadarki gelişmelere bakılsın. |
| `MAX_SEARCHES` | `10` | Bir çalışmada en fazla kaç web araması yapılsın. |
| `REQUIRE_REVIEW` | `false` | `true` yapılırsa haberler taslak olarak kaydedilir ve siteye çıkmaz. Yayınlamak için dosyadaki `draft: true` satırını silmeniz yeterli. |
| `NEWSLETTER_ACTION` | yok | Bülten servisinizin (Mailchimp, Brevo vb.) form adresi. |

**Çalışma saatlerini değiştirmek için** `.github/workflows/news.yml` içindeki `cron` satırını düzenleyin. Saatler UTC'dir (İstanbul = UTC+3).

**Yazım dilini ve kuralları değiştirmek için** `scripts/editorial-guidelines.md` dosyasını düzenleyin. Hangi konuların haber olacağı, başlık uzunluğu ve ton gibi kurallar oradadır.

## Tahmini maliyet

Varsayılan ayarlarla bir çalışma yaklaşık 0,30–0,50 dolar tutar: 10 web araması (1.000 arama 10 dolar) ve Claude Sonnet 5.5 token ücreti dahil. Günde 6 çalışmayla **ayda yaklaşık 55–90 dolar** eder. Bu bir tahmindir; gerçek tutar haber yoğunluğuna göre değişir. Gerçek harcamayı Claude Console'dan izleyebilir, bir harcama limiti koyabilirsiniz.

Maliyeti düşürmek için:
- `MAX_SEARCHES` değerini 6'ya indirin.
- `NEWS_MODEL` olarak `claude-haiku-5-5` kullanın.

GitHub Pages ve GitHub Actions, herkese açık repolarda ücretsizdir.

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
.github/workflows/news.yml     Günde 6 kez çalışan otomasyon
.github/workflows/deploy.yml   Siteyi GitHub Pages'e yayınlar
public/img/                    Kategori illüstrasyonları
```
