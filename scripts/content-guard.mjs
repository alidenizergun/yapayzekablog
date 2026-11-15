// Haber metinleri için derleme öncesi güvenlik kontrolü.
// Haberler yapay zeka tarafından webden derlendiği için metne HTML veya zararlı link sızabilir.
// Haber hattı bunları zaten temizler (scripts/generate-news.mjs › sanitizeBody); bu ikinci savunma hattıdır:
// HTML etiketi, javascript:/data: linki veya kaynak listesinde olmayan link içeren haber varsa derleme durur.
import fs from 'node:fs';
import path from 'node:path';

export function findProblems(md) {
  const [, fm = '', body = ''] = md.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/) || [];
  const problems = [];
  // Kod blokları dışındaki HTML etiketleri
  const text = body.replace(/```[\s\S]*?```/g, '').replace(/`[^`]*`/g, '');
  const tag = text.match(/<\/?[a-z][a-z0-9-]*(\s[^>]*)?>/i);
  if (tag) problems.push(`HTML etiketi: ${tag[0].slice(0, 40)}`);
  if (/\]\(\s*<?\s*(javascript|data|vbscript|file):/i.test(text)) problems.push('tehlikeli link (javascript:/data:)');
  // Metindeki linkler yalnızca haberin kaynaklarına gidebilir
  const sources = new Set([...fm.matchAll(/url:\s*"?([^"\n]+)"?/g)].map((m) => m[1].trim()));
  for (const m of text.matchAll(/\]\(\s*<?([^)\s>]+)/g)) {
    if (/^https?:\/\//i.test(m[1]) && !sources.has(m[1])) problems.push(`kaynak listesinde olmayan link: ${m[1].slice(0, 60)}`);
  }
  return problems;
}

export default function contentGuard() {
  return {
    name: 'content-guard',
    hooks: {
      'astro:config:setup': ({ config, logger }) => {
        const dir = path.join(new URL(config.root).pathname, 'src/content/haberler');
        if (!fs.existsSync(dir)) return;
        const bad = [];
        for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
          const p = findProblems(fs.readFileSync(path.join(dir, f), 'utf8'));
          if (p.length) bad.push(`${f}: ${p.join('; ')}`);
        }
        if (bad.length) throw new Error(`Güvenlik kontrolü: ${bad.length} haber güvensiz içerik barındırıyor:\n${bad.join('\n')}`);
        logger.info('haber metinleri güvenlik kontrolünden geçti');
      },
    },
  };
}
