// Yeni haberlerin en önemlilerini X'te paylaşır. Site yayınlandıktan sonra çalışır.
//
// Kuyruk:   data/x-kuyruk.json      (haber hattı yazar: slug, metin, önem puanı)
// Kayıt:    data/x-paylasilan.json  (paylaşılan her haber: tweet id ve zaman; aynı haber iki kez paylaşılmaz)
// Anahtarlar (GitHub secrets, OAuth 1.0a, uygulama izni "Read and write"):
//   X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET
// Ayarlar:  X_POSTS_PER_RUN (varsayılan 2; 0 = paylaşım kapalı) · SITE_URL · BASE_PATH · --dry-run
//
// Maliyet: X link içeren her gönderiden ~0,20 $ alıyor (linksiz ~0,015 $). 2 gönderi × 2 çalışma ≈ günde 0,80 $.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const QUEUE = path.join(ROOT, 'data/x-kuyruk.json');
const POSTED = path.join(ROOT, 'data/x-paylasilan.json');
const DRY = process.argv.includes('--dry-run');
const PER_RUN = Number(process.env.X_POSTS_PER_RUN ?? 2);
const MAX_AGE_H = 24; // daha eski kuyruk kayıtları paylaşılmadan düşer
const LINK_PRICE = 0.2;
const log = (...a) => console.log('[x-paylaşım]', ...a);

const read = (f, d) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return d; } };
const write = (f, v) => { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, JSON.stringify(v, null, 2) + '\n'); };

function siteBase() {
  const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');
  const site = (process.env.SITE_URL || (owner ? `https://${owner}.github.io` : '')).replace(/\/$/, '');
  const base = process.env.BASE_PATH || (process.env.SITE_URL || !repo ? '' : `/${repo}`);
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
// X'te her link 23 karakter sayılır; sınır 280.
function compose(item, link) {
  let text = (item.text || item.title).replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim();
  const room = 280 - 2 - 23;
  if ([...text].length > room) text = [...text].slice(0, room - 1).join('').replace(/\s+\S*$/, '') + '…';
  return `${text}\n\n${link}`;
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
    .sort((a, b) => (b.featured - a.featured) || (b.importance - a.importance) || (new Date(b.date) - new Date(a.date)))
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
      if (DRY) { log(`(deneme) paylaşılacaktı [önem ${item.importance}]:\n${text}\n`); continue; }
      if (!(await isLive(link))) { notLive.push(item); log(`sayfa henüz yayında değil, sonraki çalışmaya kaldı: ${link}`); summary.push(`- ⏭️ yayında değil: ${item.title}`); continue; }
      try {
        const t = await postTweet(text, keys);
        posted[item.slug] = { id: t.id, at: new Date().toISOString() };
        sent++;
        log(`PAYLAŞILDI [önem ${item.importance}]: ${item.title} → https://x.com/i/status/${t.id}`);
        summary.push(`- ✅ [${item.title}](https://x.com/i/status/${t.id}) (önem ${item.importance})`);
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
    `- Tahmini maliyet: $${(sent * LINK_PRICE).toFixed(2)} (linkli gönderi başına ~$${LINK_PRICE})`,
    ...summary,
  ].join('\n');
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + '\n');
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `sent=${sent}\n`);
}

main().catch((err) => { console.error('[x-paylaşım] HATA:', err?.message || err); process.exit(1); });
