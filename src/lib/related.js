// İç bağlantı: bir haberden kalıcı sayfalara (sektör merkezi, rehber, karşılaştırma, takipçi) "Daha fazlası" önerileri.
// Yalnızca metinde gerçekten geçen araç ve konulara göre seçer; uygun öneri yoksa boş döner.
import { SECTORS } from './sectors.js';
import { TOOLS, COMPARISONS } from './tools.js';
import { GLOSSARY } from './glossary.js';
import { find } from '../../scripts/glossary-integration.mjs';

const isLetter = (ch) => !!ch && /\p{L}|\p{N}/u.test(ch);
const TOOL_RES = TOOLS.map((t) => ({ t, re: t.match ? new RegExp(t.match.source, t.match.flags.replace('g', '')) : null }));

/** Metinde geçen araçlar (slug) */
export function toolsIn(text) {
  return TOOL_RES.filter(({ re }) => {
    if (!re) return false;
    const m = re.exec(text);
    return m && !isLetter(text[m.index - 1]) && !isLetter(text[m.index + m[0].length]);
  }).map(({ t }) => t.slug);
}

/** Başlık, spot ve etiketlere göre en uygun sektör: en az 2 FARKLI anahtar kelime eşleşmeli */
export function sectorFor(text) {
  let best = null, bestN = 1;
  for (const s of SECTORS) {
    const n = new Set((text.match(new RegExp(s.newsRe.source, 'gi')) || []).map((m) => m.toLocaleLowerCase('tr'))).size;
    if (n > bestN) { best = s; bestN = n; }
  }
  return best;
}

/**
 * @param entry Türkçe haber girdisi (eşleştirme Türkçe metin üzerinden yapılır)
 * @param guides rehber girdileri (Türkçe; sector, terms, title alanlarıyla)
 */
export function moreFor(entry, guides) {
  const d = entry.data;
  const text = `${d.title} ${d.spot} ${(d.tags || []).join(' ')} ${entry.body}`;
  const tools = toolsIn(text);
  const sector = sectorFor(`${d.title} ${d.spot} ${(d.tags || []).join(' ')}`);
  // Çok genel terimler (her haberde geçen) eşleştirmede sayılmaz
  const GENERIC = new Set(['yapay-zeka', 'uretken-yapay-zeka', 'buyuk-dil-modeli', 'sohbet-botu', 'model', 'yapay-zeka-modeli']);
  const terms = GLOSSARY.filter((g) => !GENERIC.has(g.slug) && find(text, g)).map((g) => g.slug);
  const titleTools = (g) => tools.filter((slug) => { const re = TOOL_RES.find((x) => x.t.slug === slug)?.re; return re && re.test(g.data.title); }).length;
  const scored = guides.map((g) => ({
    g, score: (sector && g.data.sector === sector.slug ? 2 : 0) + titleTools(g) * 3 + (g.data.terms || []).filter((t) => terms.includes(t)).length,
  })).filter((x) => x.score >= 3).sort((a, b) => b.score - a.score || a.g.id.localeCompare(b.g.id));
  const comparison = COMPARISONS.find(([a, b]) => tools.includes(a) && tools.includes(b)) || null;
  const report = /\b(rapor|raporu|raporuna|anket|anketi|endeksi)\b|McKinsey|Stanford AI Index|PwC|Deloitte|Gartner|BCG|IDC|Allianz/i.test(d.title);
  return {
    sector,
    guides: scored.slice(0, 2).map((x) => x.g),
    comparison,
    tools: tools.slice(0, 3),
    deal: Boolean(d.deal),
    report,
  };
}
