// /llms.txt: yapay zeka asistanları ve arama motorları için sitenin özet haritası (llmstxt.org biçimi)
import { getCollection } from 'astro:content';
import { SITE, CATEGORIES } from '../lib/site.js';
import { getNews, newsUrl, getDigests, digestUrl } from '../lib/news.js';
import { GLOSSARY } from '../lib/glossary.js';

export async function GET(context) {
  const abs = (p) => new URL(p, context.site).href;
  const news = (await getNews()).slice(0, 30);
  const digests = (await getDigests()).slice(0, 4);
  const guides = await getCollection('rehberler', (g) => !g.data.draft);
  const one = (s) => String(s).replace(/\s+/g, ' ').trim();
  const lines = [
    `# ${SITE.name}`, '',
    `> ${SITE.description} Haberler yapay zeka desteğiyle, belirtilen kaynaklardan derlenir ve editoryal kontrolden geçer; her haberin altında kaynak bağlantıları yer alır. Dil: Türkçe.`, '',
    '## Başvuru sayfaları', '',
    `- [Yapay zeka modelleri karşılaştırma](${abs('/modeller-karsilastirma/')}): API fiyatları ve bağlam pencereleri, resmi kaynaklı`,
    `- [Yapay zeka araçları](${abs('/arac/')}): araçların fiyatları (kaynak ve tarihle), ücretsiz planları, Türkçe desteği ve alternatifleri`,
    `- [Araç karşılaştırmaları](${abs('/karsilastir/')})`,
    `- [İşe göre en iyi araçlar](${abs('/en-iyi/')})`,
    `- [Türkiye'de yapay zeka](${abs('/turkiye-yapay-zeka/')}): yerli modeller, girişimler, düzenleme zaman çizelgesi`,
    `- [Yerli yapay zeka modelleri](${abs('/yerli-yapay-zeka/')})`,
    `- [Yatırım takipçisi](${abs('/yatirimlar/')}): yapay zeka yatırımları, satın almalar ve halka arzlar`,
    `- [Etkinlik takvimi](${abs('/etkinlikler/')}): Türkiye'deki yapay zeka zirveleri ve konferansları`,
    `- [Gelişen hikâyeler](${abs('/gelisme/')}): süren olayların zaman çizelgeleri`,
    `- [Terimler sözlüğü](${abs('/sozluk/')}): ${GLOSSARY.length} yapay zeka teriminin Türkçe açıklaması`,
    `- [Şirketler ve kişiler](${abs('/konular/')})`,
    `- [Haftalık özet](${abs('/haftalik/')})`, '',
    '## Rehberler', '',
    ...guides.map((g) => `- [${g.data.title}](${abs(`/rehber/${g.id}/`)}): ${one(g.data.description)}`), '',
    '## Kategoriler', '',
    ...CATEGORIES.map((c) => `- [${c.name}](${abs(`/kategori/${c.slug}/`)})${c.intro ? `: ${c.intro}` : ''}`), '',
    '## Son haftalık özetler', '',
    ...digests.map((d) => `- [${d.data.title}](${abs(digestUrl(d))})`), '',
    '## Son haberler', '',
    ...news.map((n) => `- [${n.data.title}](${abs(newsUrl(n))}): ${one(n.data.spot)}`), '',
    '## Optional', '',
    `- [RSS](${abs('/rss.xml')})`, `- [Site haritası](${abs('/sitemap-index.xml')})`, `- [Hakkımızda ve yayın ilkeleri](${abs('/hakkimizda/')})`, '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
