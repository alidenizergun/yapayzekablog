// İngilizce sürüm için çevrilecek veri metinleri: { anahtar: Türkçe metin }.
// scripts/translate-en.mjs bu listeyi çevirir ve src/i18n/en/strings.json'a yazar; site de aynı anahtarlarla okur.
import { CATEGORIES, SITE } from '../lib/site.js';
import { GLOSSARY } from '../lib/glossary.js';
import { LONG } from '../lib/glossary-long.js';
import { TOOLS, TASKS, COMPARISONS, TOOL_CATS } from '../lib/tools.js';
import { YERLI_MODELS, TR_POLICY, TR_STATS, TR_ROUNDS } from '../lib/turkiye.js';
import { EVENTS } from '../lib/events.js';
import { MODELS } from '../lib/models.js';
import { ENTITIES } from '../lib/entities.js';
import { STORIES } from '../lib/stories.js';

export function sourceStrings() {
  const out = {};
  const put = (k, v) => { if (typeof v === 'string' && v.trim()) out[k] = v; };
  put('site.description', SITE.description);
  for (const c of CATEGORIES) { put(`cat.${c.slug}.name`, c.name); put(`cat.${c.slug}.intro`, c.intro); (c.links || []).forEach((l, i) => put(`cat.${c.slug}.link.${i}`, l.label)); }
  for (const g of GLOSSARY) {
    put(`gl.${g.slug}.term`, g.term); put(`gl.${g.slug}.def`, g.def);
    const l = LONG[g.slug] || {};
    put(`gl.${g.slug}.how`, l.how); put(`gl.${g.slug}.why`, l.why); put(`gl.${g.slug}.example`, l.example);
    (l.faq || []).forEach(([q, a], i) => { put(`gl.${g.slug}.faq.${i}.q`, q); put(`gl.${g.slug}.faq.${i}.a`, a); });
  }
  for (const c of TOOL_CATS) put(`toolcat.${c.slug}`, c.name);
  for (const t of TOOLS) {
    put(`tool.${t.slug}.desc`, t.desc); put(`tool.${t.slug}.priceNote`, t.priceNote);
    t.good.forEach((x, i) => put(`tool.${t.slug}.good.${i}`, x));
    t.notFor.forEach((x, i) => put(`tool.${t.slug}.notFor.${i}`, x));
    (t.price?.plans || []).forEach(([, , note], i) => put(`tool.${t.slug}.plan.${i}.note`, note));
  }
  for (const k of TASKS) {
    put(`task.${k.slug}.title`, k.title); put(`task.${k.slug}.short`, k.short); put(`task.${k.slug}.intro`, k.intro); put(`task.${k.slug}.q`, k.q);
    k.picks.forEach(([s, note]) => put(`task.${k.slug}.pick.${s}`, note));
  }
  for (const [a, b, ans] of COMPARISONS) put(`cmp.${a}-vs-${b}`, ans);
  for (const m of YERLI_MODELS) { put(`yerli.${m.slug}.about`, m.about); put(`yerli.${m.slug}.access`, m.access); put(`yerli.${m.slug}.dev`, m.dev); }
  TR_POLICY.forEach((p, i) => { put(`policy.${i}.title`, p.title); put(`policy.${i}.note`, p.note); });
  TR_STATS.forEach((p, i) => put(`trstat.${i}.label`, p.label));
  TR_ROUNDS.forEach((r, i) => { put(`round.${i}.what`, r.what); put(`round.${i}.round`, r.round); put(`round.${i}.amount`, r.amount); put(`round.${i}.where`, r.where); });
  EVENTS.forEach((e, i) => { put(`event.${i}.name`, e.name); put(`event.${i}.type`, e.type); put(`event.${i}.venue`, e.venue); put(`event.${i}.city`, e.city); put(`event.${i}.organizer`, e.organizer); put(`event.${i}.approx`, e.approx); put(`event.${i}.note`, e.note); });
  MODELS.forEach((m, i) => put(`model.${i}.note`, m.note));
  for (const e of ENTITIES) put(`entity.${e.slug}.about`, e.about);
  for (const s of STORIES) { put(`story.${s.slug}.title`, s.title); put(`story.${s.slug}.intro`, s.intro); }
  return out;
}
