// Türkiye yapay zeka etkinlik takvimi (/etkinlikler/). Site her gün yeniden derlendiği için bitiş tarihi geçen
// etkinlik otomatik olarak "Geçmiş etkinlikler" bölümüne iner. Her etkinlik en az bir kaynağa bağlıdır;
// tarih, mekan veya düzenleyen bilgisi kaynakta yoksa alan boş bırakılır. Kesin tarihi olmayanlarda "approx" kullanılır.

export const EVENTS_CHECKED = '2026-11-16';

export const EVENTS = [
  { name: '6. Uluslararası Bilişim ve Yazılım Mühendisliği Konferansı (IISEC 2027)', type: 'Akademik konferans',
    start: '2027-01-28', end: '2027-01-28', city: 'Ankara', venue: 'Orman Genel Müdürlüğü Konferans Salonu', organizer: 'TBD Akademi',
    url: 'https://iisec.tbdakademi.org.tr/', source: { label: 'kongreara', url: 'https://kongreara.com/etkinlik/iisec-2027-6th-international-informatics-and-software-engineering-conference' } },
  { name: 'Akdeniz Örüntü Tanıma ve Yapay Zeka Konferansı (MedPRAI-2027)', type: 'Akademik konferans',
    start: '2027-02-04', end: '2027-02-05', city: 'İstanbul', venue: 'İstinye Üniversitesi', organizer: 'İstinye Üniversitesi',
    url: 'https://medprai.com/', source: { label: 'kongreara', url: 'https://kongreara.com/etkinlik/medprai-2027-mediterranean-conference-on-pattern-recognition-and-artificial-intelligence' } },
  { name: 'Kırşehir Ahi Evran Üniversitesi 2. Yapay Zekâ Günleri', type: 'Üniversite etkinliği',
    start: '2027-03-01', end: '2027-03-31', approx: 'Mart 2027', note: 'Kesin günler henüz açıklanmadı; etkinliğin 3 gün sürmesi planlanıyor.', city: 'Kırşehir (Mucur)', organizer: 'Kırşehir Ahi Evran Üniversitesi',
    url: 'https://ahiaigunleri.ahievran.edu.tr/', source: { label: 'kongreara', url: 'https://kongreara.com/etkinlik/kirsehir-ahi-evran-universitesi-2-yapay-zeka-gunleri' } },
  { name: 'GITEX AI Türkiye 2027', type: 'Fuar ve zirve',
    start: '2027-09-15', end: '2027-09-16', city: 'İstanbul', venue: 'İstanbul Fuar Merkezi (İFM)', organizer: 'inD (Dubai World Trade Centre ve Informa); ev sahibi Cumhurbaşkanlığı Yatırım ve Finans Ofisi',
    url: 'https://www.gitexturkiye.com/', source: { label: 'BERI', url: 'https://www.beri.net/events/gitex-ai-turkiye-2027' } },

  // ------------------------------------------------------------ geçmiş (arşiv)
  { name: 'Türkiye Yapay Zeka Zirvesi 2026: "Ajanlar Aramızda"', type: 'Zirve',
    start: '2026-11-11', end: '2026-11-12', city: 'İstanbul', venue: 'Wyndham Grand İstanbul Levent (11 Kasım fiziksel gün)', organizer: 'Türkiye Yapay Zeka İnisiyatifi',
    url: 'https://zirve.turkiye.ai/', source: { label: 'CHIP Online', url: 'https://www.chip.com.tr/haber/turkiye-yapay-zeka-zirvesi-11-12-kasimda-duzenlenecek-bu-yilin-odaginda-yapay-zeka-ajanlari-var_184449.html' } },
  { name: 'GITEX AI Türkiye 2026', type: 'Fuar ve zirve',
    start: '2026-09-09', end: '2026-09-10', city: 'İstanbul', venue: 'İstanbul Fuar Merkezi', organizer: 'inD (Dubai World Trade Centre ve Informa)',
    url: 'https://www.gitexturkiye.com/', source: { label: 'CNBC-e', url: 'https://www.cnbce.com/yapay-zeka/gitex-ai-turkiye-2026-yapay-zeka-ve-teknoloji-dunyasinin-devleri-istanbulda-bulusuyor-h34903' } },
  { name: 'Türkiye Eğitim Teknolojileri Zirvesi ve Fuarı (TETZ 2026)', type: 'Zirve ve fuar',
    start: '2026-06-26', end: '2026-06-28', city: 'İstanbul', venue: 'Pullman Hotel & Convention Center', organizer: 'Milli Eğitim Bakanlığı himayesinde',
    source: { label: 'ShiftDelete.Net', url: 'https://shiftdelete.net/egitimin-gelecegi-istanbulda-sekilleniyor-tetz-2026-basliyor' } },
  { name: 'TOBB İş Dünyası Yapay Zekâ Zirvesi', type: 'Zirve',
    start: '2026-06-17', end: '2026-06-17', city: 'Ankara', venue: 'Crowne Plaza Ankara', organizer: 'TOBB Türkiye Yazılım Meclisi',
    source: { label: 'ekonomim', url: 'https://www.ekonomim.com/is-dunyasi/tobb-is-dunyasi-yapay-zeka-zirvesi-ankarada-duzenleniyor-haberi-897018' } },
];
