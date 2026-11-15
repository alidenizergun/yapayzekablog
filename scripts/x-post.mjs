// Yeni haberlerin okunma potansiyeli en yüksek olanlarını X'te paylaşır. Site yayınlandıktan sonra çalışır.
//
// Kuyruk:   data/x-kuyruk.json      (haber hattı yazar: slug, metin, okunma potansiyeli)
// Kayıt:    data/x-paylasilan.json  (paylaşılan her haber: tweet id ve zaman; aynı haber iki kez paylaşılmaz)
// Anahtarlar (GitHub secrets, OAuth 1.0a, uygulama izni "Read and write"):
//   X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET
// Ayarlar:  X_POSTS_PER_RUN (varsayılan 0 = paylaşım kapalı) · SITE_URL · BASE_PATH · --dry-run
//
// Varsayılan: gönderiler LİNKSİZ atılır (X linkli gönderiden ~0,20 $, linksizden ~0,015 $ alıyor).
// Linkli paylaşıma dönmek için repo değişkeni X_WITH_LINK = true.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const QUEUE = path.join(ROOT, 'data/x-kuyruk.json');
const POSTED = path.join(ROOT, 'data/x-paylasilan.json');
const DRY = process.argv.includes('--dry-run');
const PER_RUN = Number(process.env.X_POSTS_PER_RUN ?? 0);
const MAX_AGE_H = 30; // daha eski kuyruk kayıtları paylaşılmadan düşer
const WITH_LINK = /^(1|true|yes|evet)$/i.test(process.env.X_WITH_LINK || '');
const POST_PRICE = WITH_LINK ? 0.2 : 0.015;
const log = (...a) => console.log('[x-paylaşım]', ...a);

const read = (f, d) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return d; } };
const write = (f, v) => { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, JSON.stringify(v, null, 2) + '\n'); };

function siteBase() {
  const site = (process.env.SITE_URL || 'https://yzgundemi.com').replace(/\/$/, '');
  const base = process.env.BASE_PATH || '';
  return site + base.replace(/\/$/, '');
}

// ------------------------------------------------------------ OAuth 1.0a imzası
const enc = (s) => encodeURIComponent(s).replace(/[!'()*]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase());

function authHeader(method, url, keys) {
  const p = {
    oauth_consumer_key: keys.key,
    oauth_nonce: crypto.randomBytes(16).toString('hex'),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: String(Math.floor(Date.now() / 1000)),
    oauth_token: keys.token,
    oauth_version: '1.0',
  };
  const params = Object.keys(p).sort().map((k) => `${enc(k)}=${enc(p[k])}`).join('&');
  const baseStr = [method.toUpperCase(), enc(url), enc(params)].join('&');
  p.oauth_signature = crypto.createHmac('sha1', `${enc(keys.secret)}&${enc(keys.tokenSecret)}`).update(baseStr).digest('base64');
  return 'OAuth ' + Object.keys(p).sort().map((k) => `${enc(k)}="${enc(p[k])}"`).join(', ');
}

async function postTweet(text, keys) {
  const url = 'https://api.x.com/2/tweets';
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: authHeader('POST', url, keys), 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = body.detail || body.title || body.errors?.[0]?.message || JSON.stringify(body).slice(0, 200);
    const err = new Error(`HTTP ${res.status}: ${msg}`);
    err.duplicate = /duplicate/i.test(msg);
    err.status = res.status;
    throw err;
  }
  return body.data;
}

// ------------------------------------------------------------ metin
// Sınır 280 karakter; linkli modda link 23 karakter sayılır.
// Güvenlik (LLM01/LLM06): tweet metni webden derlenen içerikten üretildiği için, bir kaynağa gizlenmiş talimat
// metni değiştirmiş olabilir. Metin haberin başlığıyla konu olarak örtüşmüyorsa veya şüpheli öğe içeriyorsa
// tweet yerine haberin (yayın kurallarından geçmiş) başlığı paylaşılır.
const TR = { ç: 'c', ğ: 'g', ı: 'i', İ: 'i', ö: 'o', ş: 's', ü: 'u' };
const norm = (s) => String(s).toLocaleLowerCase('tr').replace(/[çğıİöşü]/g, (c) => TR[c] || c);
const STOP = new Set('ve ile bir bu da de için olarak yeni icin daha en cok gibi olan oldu ise ama the a of to in for on and'.split(' '));
const words = (s) => new Set(norm(s).split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !STOP.has(w)));
export function safeTweetText(item) {
  const title = String(item.title || '').trim();
  const text = String(item.text || '').replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim();
  if (!text) return { text: title, reason: 'metin yok' };
  const suspicious = /(@\w|www\.|\.(com|net|org|io|ru|xyz)\b|[<>{}]|ignore|talimat|instruction|bitcoin|kripto airdrop|giveaway|çekiliş|tıkla|dm at)/i;
  if (suspicious.test(text)) return { text: title, reason: 'şüpheli öğe' };
  const t = words(title), w = [...words(text)];
  const shared = w.filter((x) => t.has(x)).length;
  if (shared < Math.min(2, t.size)) return { text: title, reason: 'başlıkla örtüşmüyor' };
  return { text, reason: '' };
}

function compose(item, link) {
  const safe = safeTweetText(item);
  if (safe.reason) log(`tweet metni yerine başlık kullanıldı (${safe.reason}): ${item.title}`);
  let text = safe.text;
  const room = WITH_LINK ? 280 - 2 - 23 : 280;
  if ([...text].length > room) text = [...text].slice(0, room - 1).join('').replace(/\s+\S*$/, '') + '…';
  return WITH_LINK ? `${text}\n\n${link}` : text;
}

async function isLive(link) {
  for (let i = 0; i < 6; i++) {
    try {
      const r = await fetch(link, { method: 'GET', redirect: 'follow' });
      if (r.ok) return true;
    } catch {}
    await new Promise((r) => setTimeout(r, 20e3));
  }
  return false;
}

// ------------------------------------------------------------ ana akış
async function main() {
  const queue = read(QUEUE, []);
  const posted = read(POSTED, {});
  const summary = [];
  const keys = {
    key: process.env.X_API_KEY, secret: process.env.X_API_SECRET,
    token: process.env.X_ACCESS_TOKEN, tokenSecret: process.env.X_ACCESS_SECRET,
  };
  const hasKeys = Object.values(keys).every(Boolean);

  const fresh = queue.filter((q) => !posted[q.slug] && Date.now() - new Date(q.date).valueOf() < MAX_AGE_H * 3600e3);
  const picks = [...fresh]
    .sort((a, b) => (b.importance - a.importance) || (b.featured - a.featured) || (new Date(b.date) - new Date(a.date)))
    .slice(0, Math.max(0, PER_RUN));

  if (!queue.length) log('kuyruk boş, paylaşılacak yeni haber yok.');
  else if (PER_RUN <= 0) log('paylaşım kapalı (X_POSTS_PER_RUN = 0).');
  else if (!hasKeys && !DRY) log('X yazma anahtarları yok (X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET); paylaşım atlandı.');

  const base = siteBase();
  let sent = 0;
  const notLive = [];
  if (PER_RUN > 0 && (hasKeys || DRY)) {
    for (const item of picks) {
      const link = `${base}/haber/${item.slug}/`;
      const text = compose(item, link);
      if (DRY) { log(`(deneme) paylaşılacaktı [okunma potansiyeli ${item.importance}]:\n${text}\n`); continue; }
      if (!(await isLive(link))) { notLive.push(item); log(`sayfa henüz yayında değil, sonraki çalışmaya kaldı: ${link}`); summary.push(`- ⏭️ yayında değil: ${item.title}`); continue; }
      try {
        const t = await postTweet(text, keys);
        posted[item.slug] = { id: t.id, at: new Date().toISOString() };
        sent++;
        log(`PAYLAŞILDI [okunma potansiyeli ${item.importance}]: ${item.title} → https://x.com/i/status/${t.id}`);
        summary.push(`- ✅ [${item.title}](https://x.com/i/status/${t.id}) (okunma potansiyeli ${item.importance})`);
      } catch (err) {
        if (err.duplicate) { posted[item.slug] = { id: null, at: new Date().toISOString(), note: 'duplicate' }; continue; }
        log(`HATA: ${item.title} → ${err.message}`);
        summary.push(`- ❌ ${item.title} — ${err.message}`);
        if (err.status === 401 || err.status === 402 || err.status === 403 || err.status === 429) break; // anahtar, kredi veya limit sorunu: diğerlerini deneme
      }
    }
  }

  if (!DRY) {
    // Seçilmeyenler paylaşılmaz: kuyruk her çalışmada temizlenir (yalnızca yayında olmadığı için atlananlar kalır)
    write(QUEUE, notLive);
    write(POSTED, posted);
  }

  const md = [
    '## X paylaşımı',
    `- Kuyrukta: ${fresh.length} yeni haber · seçilen: ${picks.length} · paylaşılan: ${sent}`,
    `- Tahmini maliyet: $${(sent * POST_PRICE).toFixed(3)} (${WITH_LINK ? 'linkli' : 'linksiz'} gönderi başına ~$${POST_PRICE})`,
    ...summary,
  ].join('\n');
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + '\n');
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `sent=${sent}\n`);
}

main().catch((err) => { console.error('[x-paylaşım] HATA:', err?.message || err); process.exit(1); });
