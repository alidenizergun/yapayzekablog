// Kaynak olarak kullanılmayacak siteler (yayın kararı). Haber hattı bu alan adlarını aramaz, kaynak olarak kabul etmez;
// site sayfaları da bu alan adlarını göstermez. Yeni site eklemek için listeye alan adını yazın (www olmadan).
export const BLOCKED_DOMAINS = ['urfadabugun.com'];
export const isBlockedSource = (u) => { try { const h = new URL(u).hostname.replace(/^www\./, ''); return BLOCKED_DOMAINS.some((d) => h === d || h.endsWith(`.${d}`)); } catch { return false; } };
