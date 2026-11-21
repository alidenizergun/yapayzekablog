// Fotoğraf-içerik uyumu: haberin başlığı ve özetine göre aday fotoğraf açıklamalarından en uygun olanı seçer
// ya da hiçbiri uygun değilse reddeder. Ucuz model (Haiku) kullanılır; fotoğraf başına bir sentin çok altında.
const MODEL = process.env.PHOTO_JUDGE_MODEL || 'claude-haiku-5-5';

const RULES = `Kurallar:
- Fotoğraf haberin ANA konusunu doğrudan çağrıştırmalı (ör. çip haberi → çip/devre kartı; borsa haberi → borsa ekranı/grafik; mahkeme/yasa haberi → adliye, tokmak, yasa kitapları; sağlık → hastane/doktor).
- Yanlış ülke, kurum, şehir ya da marka çağrıştıran fotoğrafı SEÇME (ör. ABD Merkez Bankası haberinde başka bir ülkenin banka tabelası; Türkiye haberinde başka bir ülkenin simgesi; ilgisiz bir şehrin silueti).
- Haberde adı geçen gerçek bir kişi sanılabilecek, yüzü öne çıkan insan fotoğrafını SEÇME.
- "İnsanlar ofiste çalışıyor", "masa başında toplantı", "binanın cephesi" gibi her habere uyabilecek genel fotoğraflar ancak daha iyi aday yoksa ve konuyla gerçekten ilgiliyse seçilir.`;

/** judge(context, candidates) → seçilen adayın sırası ya da -1. candidates: [{ text }] */
export function makeJudge(anthropic, { onUsage } = {}) {
  return async (context, candidates) => {
    if (!candidates.length) return -1;
    const list = candidates.map((c, i) => `${i}. ${c.text || '(açıklama yok)'}`).join('\n');
    const res = await anthropic.messages.create({
      model: MODEL, max_tokens: 1500,
      messages: [{ role: 'user', content: `Bir haber sitesinde haberin üstünde gösterilecek fotoğrafı seçiyorsun.\n\nHaber: ${context}\n\nAday fotoğrafların açıklamaları:\n${list}\n\n${RULES}\n\nYalnızca en uygun adayın numarasını yaz. Hiçbiri haberle açıkça uyumlu değilse -1 yaz.` }],
    });
    onUsage?.(res);
    const raw = ((res.content || []).find((c) => c.type === 'text')?.text || '');
    if (process.env.PHOTO_DEBUG) console.log('[hakem]', JSON.stringify(raw.slice(0, 60)), res.stop_reason);
    const n = Number(raw.match(/-?\d+/)?.[0]);
    return Number.isInteger(n) && n >= 0 && n < candidates.length ? n : -1;
  };
}

/**
 * Mevcut haber fotoğraflarını puanlar. items: [{ key, context, alt }] → Map<key, { score 1-5, queries: string[] }>
 * Puan 1-2: uyumsuz (değiştirilmeli), 3: idare eder, 4-5: uyumlu.
 */
export async function rateFit(anthropic, items, { onUsage } = {}) {
  const out = new Map();
  for (let i = 0; i < items.length; i += 15) {
    const chunk = items.slice(i, i + 15);
    const list = chunk.map((it, j) => `${j}. HABER: ${it.context}\n   FOTOĞRAF: ${it.alt || '(açıklama yok)'}`).join('\n');
    const res = await anthropic.messages.create({
      model: MODEL, max_tokens: 3000,
      messages: [{ role: 'user', content: `Haber sitesindeki fotoğrafların haberle uyumunu değerlendir.\n\n${RULES}\n\nHer satır için 1-5 arası puan ver (1-2 uyumsuz, 3 idare eder, 4-5 uyumlu) ve uyumsuzsa daha iyi bir fotoğraf bulmak için 2 kısa İngilizce stok fotoğraf arama sorgusu öner (somut nesne ya da mekan; kişi adı ya da marka adı yok).\n\n${list}\n\nYalnızca JSON dizisi döndür: [{"i":0,"score":4,"queries":["...","..."]}, ...]` }],
    });
    onUsage?.(res);
    const text = (res.content || []).find((c) => c.type === 'text')?.text || '[]';
    let arr = [];
    try { arr = JSON.parse(text.slice(text.indexOf('['), text.lastIndexOf(']') + 1)); } catch {}
    for (const r of arr) if (chunk[r.i]) out.set(chunk[r.i].key, { score: Number(r.score) || 3, queries: (r.queries || []).filter(Boolean).slice(0, 3) });
  }
  return out;
}
