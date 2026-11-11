/**
 * X (Twitter) takibi — resmi X API v2 ile.
 *
 * Takip listesindeki hesapların son çalışmadan bu yana attığı gönderileri çeker
 * (yanıtlar ve yeniden paylaşımlar hariç). Aynı gönderi iki kez çekilmez: her hesabın
 * en son görülen gönderi kimliği data/x-state.json dosyasında tutulur.
 *
 * X_BEARER_TOKEN tanımlı değilse sessizce atlanır.
 * X API kullandıkça öde modelindedir; okunan her gönderi ücretlendirilir.
 */
import fs from 'node:fs';
import path from 'node:path';

const API = 'https://api.x.com/2';

export function loadAccounts(root) {
  const cfg = JSON.parse(fs.readFileSync(path.join(root, 'scripts/x-accounts.json'), 'utf8'));
  const all = [...(cfg.kisiler || []), ...(cfg.kurumlar || []), ...(cfg.turkiye || [])]
    .map((u) => String(u).replace(/^@/, '').trim())
    .filter(Boolean);
  return [...new Set(all.map((u) => u.toLowerCase()))].map((lc) => all.find((u) => u.toLowerCase() === lc));
}

function loadState(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return { ids: {}, since: {} }; }
}

async function xget(token, url) {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (res.status === 429) throw new Error('X API istek sınırına takıldı (429)');
  if (!res.ok) throw new Error(`X API hatası ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return res.json();
}

/**
 * @returns {Promise<{posts: Array, stateChanged: boolean, note: string}>}
 */
export async function fetchXPosts({ root, lookbackHours, maxPerUser = 10, log = console.log }) {
  const token = process.env.X_BEARER_TOKEN;
  if (!token) return { posts: [], stateChanged: false, note: 'X takibi kapalı (X_BEARER_TOKEN yok)' };

  const stateFile = path.join(root, 'data/x-state.json');
  const state = loadState(stateFile);
  state.ids ||= {};
  state.since ||= {};
  const before = JSON.stringify(state);
  const accounts = loadAccounts(root);

  // 1) Kullanıcı adlarını kimliğe çevir (yalnızca ilk kez; sonuç kaydedilir)
  // Bulunamayan hesaplar boş kimlikle kaydedilir; her çalışmada tekrar sorgulanmaz.
  // Yeniden denemek için data/x-state.json içindeki satırını silin.
  const unknown = accounts.filter((u) => !(u.toLowerCase() in state.ids));
  for (let i = 0; i < unknown.length; i += 100) {
    const batch = unknown.slice(i, i + 100);
    const r = await xget(token, `${API}/users/by?usernames=${batch.join(',')}`);
    for (const u of batch) state.ids[u.toLowerCase()] = '';
    for (const u of r.data || []) state.ids[u.username.toLowerCase()] = u.id;
    for (const e of r.errors || []) log(`[x] hesap bulunamadı: ${e.value || e.detail}`);
  }

  // 2) Her hesabın yeni gönderilerini çek
  const startTime = new Date(Date.now() - lookbackHours * 3600e3).toISOString().replace(/\.\d{3}Z$/, 'Z');
  const posts = [];
  let failures = 0;
  for (const username of accounts) {
    const key = username.toLowerCase();
    const id = state.ids[key];
    if (!id) continue;
    const params = new URLSearchParams({
      max_results: String(Math.min(100, Math.max(5, maxPerUser))),
      exclude: 'replies,retweets',
      'tweet.fields': 'created_at,public_metrics,entities,note_tweet',
    });
    if (state.since[key]) params.set('since_id', state.since[key]);
    else params.set('start_time', startTime);
    try {
      const r = await xget(token, `${API}/users/${id}/tweets?${params}`);
      const list = r.data || [];
      if (r.meta?.newest_id) state.since[key] = r.meta.newest_id;
      for (const t of list) {
        const text = t.note_tweet?.text || t.text || '';
        const links = (t.entities?.urls || []).map((u) => u.expanded_url).filter((u) => u && !/^https?:\/\/(x|twitter)\.com\//.test(u));
        posts.push({
          username,
          id: t.id,
          url: `https://x.com/${username}/status/${t.id}`,
          createdAt: t.created_at,
          text,
          links,
          likes: t.public_metrics?.like_count ?? 0,
          reposts: t.public_metrics?.retweet_count ?? 0,
        });
      }
    } catch (err) {
      failures++;
      log(`[x] @${username} okunamadı: ${err.message}`);
      if (/429/.test(err.message)) break;
    }
  }

  const stateChanged = JSON.stringify(state) !== before;
  if (stateChanged) {
    fs.mkdirSync(path.dirname(stateFile), { recursive: true });
    fs.writeFileSync(stateFile, JSON.stringify(state, null, 2) + '\n');
  }
  posts.sort((a, b) => (b.likes + 3 * b.reposts) - (a.likes + 3 * a.reposts));
  return { posts, stateChanged, note: `X: ${accounts.length} hesap, ${posts.length} yeni gönderi${failures ? `, ${failures} hata` : ''}` };
}

/** Araştırma adımına verilecek kısa liste */
export function formatPostsForPrompt(posts, limit = 60) {
  return posts.slice(0, limit).map((p) => {
    const text = p.text.replace(/\s+/g, ' ').slice(0, 600);
    const links = p.links.length ? ` | bağlantılar: ${p.links.slice(0, 3).join(' ')}` : '';
    return `- @${p.username} (${p.createdAt}, ${p.likes} beğeni) ${p.url}\n  "${text}"${links}`;
  }).join('\n');
}
