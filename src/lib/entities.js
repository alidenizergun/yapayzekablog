// Şirket ve kişi sayfaları (/konu/<slug>/).
// Bir haber şu durumlarda bir konuya bağlanır: haberin "brand" alanı konunun brand anahtarıysa,
// etiketlerinden biri konunun adlarından biriyse ya da başlık/spot metninde adı geçiyorsa.
// Yeni bir şirket veya kişi eklemek için listeye bir satır eklemek yeterli; sayfa, en az bir haberi varsa oluşur.

import { tagSlug } from './slug.js';

export const ENTITIES = [
  // ------------------------------------------------------------ şirketler
  { slug: 'openai', name: 'OpenAI', type: 'company', brand: 'openai', aliases: ['ChatGPT'], url: 'https://openai.com',
    about: "ChatGPT'yi ve GPT model ailesini geliştiren ABD'li yapay zeka şirketi. 2015'te kâr amacı gütmeyen bir araştırma kuruluşu olarak kuruldu; bugün tüketici, geliştirici ve kurumsal ürünler sunuyor." },
  { slug: 'anthropic', name: 'Anthropic', type: 'company', brand: 'anthropic', aliases: ['Claude'], url: 'https://www.anthropic.com',
    about: "Claude model ailesini geliştiren ABD'li yapay zeka şirketi. 2021'de eski OpenAI çalışanları tarafından kuruldu; yapay zeka güvenliği araştırmalarını merkeze alıyor." },
  { slug: 'google', name: 'Google', type: 'company', brand: 'google', aliases: ['Gemini', 'GoogleDeepMind', 'Google DeepMind', 'DeepMind', 'Alphabet'], url: 'https://ai.google',
    about: "Gemini modellerini ve yapay zeka destekli arama, bulut ve verimlilik ürünlerini geliştiren teknoloji şirketi. Yapay zeka araştırmaları Google DeepMind çatısı altında yürütülüyor." },
  { slug: 'nvidia', name: 'Nvidia', type: 'company', brand: 'nvidia', aliases: [], url: 'https://www.nvidia.com',
    about: "Yapay zeka modellerinin eğitiminde ve çalıştırılmasında kullanılan GPU'ların (grafik işlemcilerin) önde gelen üreticisi. Veri merkezi çipleri, yapay zeka altyapısının en kritik parçalarından biri." },
  { slug: 'meta', name: 'Meta', type: 'company', brand: 'meta', aliases: ['Llama', 'Muse'], url: 'https://ai.meta.com',
    about: "Facebook, Instagram ve WhatsApp'ın sahibi şirket. Açık ağırlıklı Llama modelleri ve tüketiciye yönelik yapay zeka asistanlarıyla yapay zeka yarışında yer alıyor." },
  { slug: 'microsoft', name: 'Microsoft', type: 'company', brand: 'microsoft', aliases: ['Copilot', 'Azure'], url: 'https://www.microsoft.com/ai',
    about: "Copilot asistanlarını ve Azure bulut platformunu sunan teknoloji şirketi. OpenAI'ın en büyük ortaklarından ve yatırımcılarından biri." },
  { slug: 'deepseek', name: 'DeepSeek', type: 'company', brand: 'deepseek', aliases: [], url: 'https://www.deepseek.com',
    about: "Çinli yapay zeka şirketi. Düşük maliyetle eğitilen açık ağırlıklı modelleriyle sektörün dikkatini çekti." },
  { slug: 'samsung', name: 'Samsung', type: 'company', brand: 'samsung', aliases: [], url: 'https://www.samsung.com',
    about: "Güney Koreli elektronik ve yarı iletken şirketi. Yapay zeka sunucularında kullanılan yüksek bant genişlikli bellek (HBM) üreticilerinden biri." },
  { slug: 'hugging-face', name: 'Hugging Face', type: 'company', brand: 'huggingface', aliases: ['HuggingFace'], url: 'https://huggingface.co',
    about: "Açık kaynaklı yapay zeka modellerinin, veri setlerinin ve uygulamalarının paylaşıldığı en büyük platform." },
  { slug: 'naver', name: 'Naver', type: 'company', brand: 'naver', aliases: [], url: 'https://www.navercorp.com',
    about: "Güney Kore'nin en büyük internet şirketi. Kendi dil modellerini geliştiriyor ve yapay zeka veri merkezi işine giriyor." },
  { slug: 'lg', name: 'LG', type: 'company', brand: 'lg', aliases: ['LG AI Research', 'EXAONE'], url: 'https://www.lgresearch.ai',
    about: "Güney Koreli teknoloji grubu. Yapay zeka araştırmalarını LG AI Research yürütüyor; EXAONE model ailesini geliştiriyor." },
  { slug: 'cursor', name: 'Cursor', type: 'company', brand: 'cursor', aliases: [], url: 'https://cursor.com',
    about: "Yapay zeka destekli kod editörü. Farklı şirketlerin modelleriyle kod yazma, düzeltme ve açıklama işlerinde kullanılıyor." },
  { slug: 'world-labs', name: 'World Labs', type: 'company', aliases: ['Atlas'], url: 'https://www.worldlabs.ai',
    about: "Fei-Fei Li'nin kurucu ortağı olduğu, üç boyutlu dünyalar üretebilen \"dünya modelleri\" geliştiren yapay zeka şirketi." },
  { slug: 'megaspeed', name: 'Megaspeed', type: 'company', aliases: [],
    about: "Singapur merkezli bulut ve veri merkezi şirketi. Çinli şirketlere Nvidia çipi sağladığı iddialarıyla gündeme geldi." },

  // ------------------------------------------------------------ kişiler
  { slug: 'jensen-huang', name: 'Jensen Huang', type: 'person', aliases: ['JensenHuang'], org: 'Nvidia',
    about: "Nvidia'nın kurucu ortağı. Şirketi 1993'teki kuruluşundan Kasım 2026'daki istifasına kadar CEO olarak yönetti." },
  { slug: 'dario-amodei', name: 'Dario Amodei', type: 'person', aliases: ['Amodei'], org: 'Anthropic',
    about: "Anthropic'in kurucu ortağı ve CEO'su. Daha önce OpenAI'da araştırma başkan yardımcısıydı." },
  { slug: 'sam-altman', name: 'Sam Altman', type: 'person', aliases: ['Altman'], org: 'OpenAI',
    about: "OpenAI'ın CEO'su ve kurucu ortaklarından biri." },
  { slug: 'greg-brockman', name: 'Greg Brockman', type: 'person', aliases: ['Brockman'], org: 'OpenAI',
    about: "OpenAI'ın kurucu ortağı ve başkanı." },
  { slug: 'sundar-pichai', name: 'Sundar Pichai', type: 'person', aliases: ['Pichai'], org: 'Google',
    about: "Google'ın ve ana şirketi Alphabet'in CEO'su." },
  { slug: 'fei-fei-li', name: 'Fei-Fei Li', type: 'person', aliases: [], org: 'World Labs',
    about: "Stanford Üniversitesi'nde bilgisayar bilimleri profesörü, World Labs'in kurucu ortağı. ImageNet veri setiyle görüntü tanıma alanının öncülerinden." },
  { slug: 'alexandr-wang', name: 'Alexandr Wang', type: 'person', aliases: [], org: 'Meta',
    about: "Scale AI'ın kurucusu; Meta'nın yapay zeka çalışmalarına liderlik ediyor." },
  { slug: 'elon-musk', name: 'Elon Musk', type: 'person', aliases: ['Musk'], org: 'xAI',
    about: "Tesla ve SpaceX'in CEO'su, yapay zeka şirketi xAI'ın kurucusu. OpenAI'ın kurucu ortaklarındandı." },
];

const norm = (s) => tagSlug(s).replace(/-/g, '');

/** Bir haberin hangi konulara bağlı olduğunu döndürür */
export function entitiesOf(entry) {
  const d = entry.data;
  const tags = new Set(d.tags.map(norm));
  const text = `${d.title} ${d.spot}`;
  return ENTITIES.filter((e) => {
    if (e.brand && d.brand === e.brand) return true;
    const names = [e.name, ...e.aliases];
    if (names.some((n) => tags.has(norm(n)))) return true;
    // Metinde tam ad (kısa takma adlar yalnızca etiketle eşleşir; "Huang" gibi adlar başka kişileri de kapsayabilir)
    return [e.name, ...e.aliases.filter((a) => a.length > 6 && !/^[A-Z][a-z]+$/.test(a))]
      .some((n) => new RegExp(`(^|[^\\p{L}])${n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'u').test(text));
  });
}

/** slug -> { entity, items } (yalnızca en az bir haberi olan konular) */
export function entityIndex(news) {
  const map = new Map(ENTITIES.map((e) => [e.slug, { entity: e, items: [] }]));
  for (const n of news) for (const e of entitiesOf(n)) map.get(e.slug).items.push(n);
  return new Map([...map].filter(([, v]) => v.items.length > 0));
}
