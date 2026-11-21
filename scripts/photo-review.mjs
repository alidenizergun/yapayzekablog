// Fotoğraf denetimi: tüm haberlerin fotoğraflarını (photo, photo2) haberin içeriğiyle uyumuna göre puanlar;
// uyumsuz olanları (puan 1-2) yeni, uyumlu bir fotoğrafla değiştirir. Uygun fotoğraf bulunamazsa uyumsuz
// fotoğraf kaldırılır (site logo, kategori havuzu ya da görselsiz kartla devam eder; illüstrasyon yok).
// Kullanım: node scripts/photo-review.mjs [--dry-run]
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { findPhoto, usedPhotoIds, replacePhotoInFile, readPool, photoDebugState } from './photos.mjs';
import { makeJudge, rateFit } from './photo-judge.mjs';

const DRY = process.argv.includes('--dry-run');
const DIR = 'src/content/haberler';
const EN_DIR = 'src/content/haberler-en';
const log = (...a) => console.log('[foto-denetim]', ...a);
let cost = 0;
const onUsage = (r) => { const u = r?.usage; if (u) cost += ((u.input_tokens ?? 0) * 0.1 + (u.output_tokens ?? 0) * 0.5) / 1e6; };

const { default: Anthropic } = await import('@anthropic-ai/sdk');
if (!process.env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY tanımlı değil.');
const anthropic = new Anthropic({ maxRetries: 4 });
const judge = makeJudge(anthropic, { onUsage });

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.md')).sort().reverse();
const news = files.map((f) => {
  const raw = fs.readFileSync(path.join(DIR, f), 'utf8');
  const fm = parse(raw.split(/^---$/m)[1]);
  return { f, fm, context: `${fm.title} — ${fm.spot}` };
});
const items = [];
for (const n of news) for (const field of ['photo', 'photo2']) if (n.fm[field]) items.push({ key: `${n.f}|${field}`, context: n.context, alt: n.fm[field].alt });
log(`${news.length} haber, ${items.length} fotoğraf puanlanıyor`);
const scores = await rateFit(anthropic, items, { onUsage });

const used = usedPhotoIds(DIR);
for (const list of Object.values(readPool())) for (const p of list) used.add(p.id);
const report = [];
let replaced = 0, removed = 0, errors = '';
for (const n of news) {
  const file = path.join(DIR, n.f);
  for (const field of ['photo', 'photo2']) {
    if (!n.fm[field]) continue;
    const r = scores.get(`${n.f}|${field}`);
    if (!r || r.score >= 3) continue;
    const old = n.fm[field].alt || '(açıklama yok)';
    if (DRY) { report.push(`- ${n.fm.title} [${field}, ${r.score}/5]: "${old}" → aranacak: ${r.queries.join(' / ')}`); continue; }
    let photo = null;
    try {
      photo = await findPhoto([...r.queries, n.fm.imageQuery].filter(Boolean), used, { judge, context: n.context, generic: false });
    } catch (err) { errors = err.message; }
    if (photo) {
      replacePhotoInFile(file, photo, field);
      replaced++;
      report.push(`- ${n.fm.title} [${field}]: "${old}" → "${photo.alt}" (${photo.source || 'unsplash'})`);
      if (field === 'photo') {
        // İngilizce sürümdeki çevrilmiş fotoğraf açıklaması eski fotoğrafa aitti
        const en = path.join(EN_DIR, n.f);
        if (fs.existsSync(en)) fs.writeFileSync(en, fs.readFileSync(en, 'utf8').replace(/^photoAlt:.*\n/m, ''));
      }
    } else {
      // Uyumsuz fotoğrafı bırakmaktansa kaldır
      const s = fs.readFileSync(file, 'utf8');
      fs.writeFileSync(file, s.replace(new RegExp(`^${field}:\\n(?:  .*\\n)+`, 'm'), ''));
      removed++;
      report.push(`- ${n.fm.title} [${field}]: "${old}" kaldırıldı (uygun fotoğraf bulunamadı)`);
      if (field === 'photo') {
        // İkinci fotoğraf uyumluysa ana fotoğraf olur
        const s2 = fs.readFileSync(file, 'utf8');
        const r2 = scores.get(`${n.f}|photo2`);
        if (/^photo2:/m.test(s2) && r2 && r2.score >= 3) fs.writeFileSync(file, s2.replace(/^photo2:/m, 'photo:'));
        const en = path.join(EN_DIR, n.f);
        if (fs.existsSync(en)) fs.writeFileSync(en, fs.readFileSync(en, 'utf8').replace(/^photoAlt:.*\n/m, ''));
      }
    }
  }
}
// Fotoğrafı hiç olmayan haberler (ya da yukarıda kaldırılanlar): içerikle uyumlu yeni fotoğraf ara
let filled = 0;
if (!DRY) for (const n of news) {
  const file = path.join(DIR, n.f);
  if (/^photo:/m.test(fs.readFileSync(file, 'utf8'))) continue;
  const r = [...scores.entries()].find(([k]) => k.startsWith(`${n.f}|`))?.[1];
  try {
    const photo = await findPhoto([...(r?.queries || []), n.fm.imageQuery].filter(Boolean), used, { judge, context: n.context });
    if (photo) { replacePhotoInFile(file, photo, 'photo'); filled++; report.push(`- ${n.fm.title}: yeni fotoğraf "${photo.alt}" (${photo.source || 'unsplash'})`); }
  } catch (err) { errors = err.message; }
}
log('kaynak durumu', JSON.stringify(photoDebugState()), '· boş habere eklenen', filled);
replaced += filled;
const dist = [1, 2, 3, 4, 5].map((k) => `${k}: ${[...scores.values()].filter((v) => v.score === k).length}`).join(', ');
log(`puan dağılımı (${dist}) · değiştirilen ${replaced}, kaldırılan ${removed}${errors ? ' · hata: ' + errors : ''} · model maliyeti ~$${cost.toFixed(3)}`);
for (const l of report) console.log(l);
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `### Fotoğraf denetimi\n\nPuan dağılımı: ${dist}\n\nDeğiştirilen: ${replaced} · kaldırılan: ${removed}\n\n${report.join('\n')}\n`);
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `changed=${replaced + removed}\n`);
