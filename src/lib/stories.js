// Gelişen hikâyeler (/gelisme/<ad>/): birkaç gün süren konuların bütün haberleri tarih sırasıyla tek sayfada.
// Bir haber şu durumlarda hikâyeye bağlanır: haberin "story" alanı hikâyenin slug'ıysa (haber hattı doldurur)
// ya da hikâyenin "match" kuralı haberi kapsıyorsa. Yeni hikâye eklemek için listeye bir kayıt eklemek yeterli.

export const STORIES = [
  {
    slug: 'nvidia-jensen-huang-krizi',
    title: "Nvidia'da Jensen Huang krizi",
    intro: "Nvidia'nın kurucu CEO'su Jensen Huang, Kasım 2026'da görevinden istifa etti. Şirket bir gerekçe açıklamazken basın istifayı Huang hakkındaki iddialarla ilişkilendirdi. Yönetim kurulunun Huang'ı görevden almayı görüştüğü haberleriyle başlayan süreç; geçici CEO atanması, çip ihracatına ilişkin iddialar ve Washington'daki düzenleme tartışmalarıyla sürdü.",
    match: (d) => /Huang|Megaspeed|Nvidia skandal/i.test(`${d.title} ${d.spot}`),
  },
  {
    slug: 'anthropic-halka-arz',
    title: "Anthropic'in halka arzı",
    intro: "Claude modellerinin geliştiricisi Anthropic, Kasım 2026'da Nasdaq'ta halka arz sürecine girdi. Fiyat aralığının açıklanması, yatırımcı tanıtım turu ve halka arza gelen talep bu sayfada tarih sırasıyla yer alıyor.",
    match: (d) => /Anthropic|Amodei/i.test(`${d.title} ${d.spot}`) && /halka arz|IPO/i.test(`${d.title} ${d.spot} ${d.tags.join(' ')}`),
  },
];

export const storyOf = (entry) => STORIES.find((s) => entry.data.story === s.slug || s.match(entry.data));

/** slug -> { story, items (eskiden yeniye) } — yalnızca en az 2 haberi olan hikâyeler */
export function storyIndex(news) {
  const map = new Map(STORIES.map((s) => [s.slug, { story: s, items: [] }]));
  for (const n of news) { const s = storyOf(n); if (s) map.get(s.slug).items.push(n); }
  for (const v of map.values()) v.items.sort((a, b) => a.data.date - b.data.date);
  return new Map([...map].filter(([, v]) => v.items.length >= 2));
}
