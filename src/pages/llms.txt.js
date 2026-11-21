// /llms.txt: yapay zeka asistanları ve arama motorları için sitenin özet haritası (llmstxt.org biçimi)
import { getCollection } from 'astro:content';
import { SITE, CATEGORIES } from '../lib/site.js';
import { getNews, newsUrl, getDigests, digestUrl } from '../lib/news.js';
import { GLOSSARY } from '../lib/glossary.js';
import { maps, locNewsList, toEn } from '../i18n/index.js';
import { slugOf } from '../lib/news.js';

export async function GET(context) {
  const abs = (p) => new URL(p, context.site).href;
  const news = (await getNews()).slice(0, 30);
  const digests = (await getDigests()).slice(0, 4);
  const guides = await getCollection('rehberler', (g) => !g.data.draft);
  const one = (s) => String(s).replace(/\s+/g, ' ').trim();
  const m = await maps();
  const enNews = locNewsList(news, 'en', m).slice(0, 15);
  const lines = [
    `# ${SITE.name}`, '',
    `> ${SITE.description} Haberler yapay zeka desteğiyle, belirtilen kaynaklardan derlenir ve editoryal kontrolden geçer; her haberin altında kaynak bağlantıları yer alır. Dil: Türkçe.`, '',
    '## Başvuru sayfaları', '',
    `- [Yapay zeka modelleri karşılaştırma](${abs('/modeller-karsilastirma/')}): API fiyatları ve bağlam pencereleri, resmi kaynaklı`,
    `- [Yapay zeka araçları](${abs('/arac/')}): araçların fiyatları (kaynak ve tarihle), ücretsiz planları, Türkçe desteği ve alternatifleri`,
    `- [Araç karşılaştırmaları](${abs('/karsilastir/')})`,
    `- [En iyi yapay zeka uygulamaları (işe göre)](${abs('/en-iyi-yapay-zeka-uygulamalari/')})`,
    `- [Yapay zeka abonelik fiyatları](${abs('/yapay-zeka-abonelikleri/')}): araçların aylık planları, dolar ve yaklaşık TL`,
    `- [API maliyet hesaplayıcı](${abs('/api-maliyet-hesaplayici/')})`,
    `- [Hazır yapay zeka komutları](${abs('/yapay-zeka-komutlari/')}): kategorilere ayrılmış Türkçe komutlar`,
    `- [Yapay zeka eğitimleri](${abs('/yapay-zeka-egitimleri/')}): ücretsiz ve ücretli eğitimler, Türkçe olanlar dahil`,
    `- [Türkiye yapay zeka kullanım payları](${abs('/yapay-zeka-kullanim-paylari/')}): Statcounter verisiyle aylık`,
    `- [Türkiye'de yapay zeka](${abs('/turkiye-yapay-zeka/')}): yerli modeller, girişimler, düzenleme zaman çizelgesi`,
    `- [Yerli yapay zeka modelleri](${abs('/yerli-yapay-zeka/')})`,
    `- [Yatırım takipçisi](${abs('/yatirimlar/')}): yapay zeka yatırımları, satın almalar ve halka arzlar`,
    `- [Etkinlik takvimi](${abs('/etkinlikler/')}): Türkiye'deki yapay zeka zirveleri ve konferansları`,
    `- [Gelişen hikâyeler](${abs('/gelisme/')}): süren olayların zaman çizelgeleri`,
    `- [Terimler sözlüğü](${abs('/sozluk/')}): ${GLOSSARY.length} yapay zeka teriminin Türkçe açıklaması`,
    `- [Yapay zeka raporları](${abs('/raporlar/')}): McKinsey, Stanford AI Index, PwC, BCG, Microsoft ve Türkiye raporlarından öne çıkan bulgular`,
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
    `- [Site haritası](${abs('/sitemap-index.xml')})`, `- [Hakkımızda ve yayın ilkeleri](${abs('/hakkimizda/')})`, `- [Künye](${abs('/kunye/')})`, `- [İş kollarında yapay zeka (hukuk, pazarlama, sağlık, finans, eğitim, e-ticaret, İK, sanayi)](${abs('/sektor/')})`, `- [Düzeltmeler](${abs('/duzeltmeler/')})`, `- [Kullanım koşulları](${abs('/kullanim-kosullari/')})`, '',
    '## English edition', '',
    `An English edition translated from the Turkish stories is available at ${abs('/en/')}.`, '',
    `- [AI news in English](${abs('/en/')})`,
    `- [AI model pricing comparison](${abs('/en/ai-model-pricing/')})`,
    `- [AI tools directory](${abs('/en/tools/')})`,
    `- [AI in Turkey](${abs('/en/ai-in-turkey/')})`,
    `- [Turkish AI models](${abs('/en/turkish-ai-models/')})`,
    `- [AI glossary](${abs('/en/glossary/')})`,
    `- [AI research reports](${abs('/en/ai-reports/')})`,
    `- [AI guides](${abs('/en/guides/')})`,
    '',
    ...enNews.map((n) => `- [${n.data.title}](${abs(toEn(`/haber/${slugOf(n)}/`, m))}): ${one(n.data.spot)}`), '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
