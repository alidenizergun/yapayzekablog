// Saf yardımcılar (astro:content kullanmaz; Node betikleri de içe aktarabilir)
const TR = { ç: 'c', ğ: 'g', ı: 'i', İ: 'i', ö: 'o', ş: 's', ü: 'u', Ç: 'c', Ğ: 'g', Ö: 'o', Ş: 's', Ü: 'u' };
export const tagSlug = (t) =>
  String(t).replace(/[çğıİöşüÇĞÖŞÜ]/g, (c) => TR[c]).toLowerCase()
    .normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
/** Başlıktan adres parçası: en fazla 8 kelime / 70 karakter */
export const titleSlug = (t, words = 8) => tagSlug(String(t).split(/\s+/).slice(0, words).join(' ')).slice(0, 70).replace(/-+$/, '');
