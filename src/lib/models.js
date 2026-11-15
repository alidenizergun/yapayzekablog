// Model karşılaştırma tablosu (/modeller-karsilastirma/). Fiyatlar ABD doları, 1 milyon token başına,
// standart katman (önbellek, toplu işlem ve indirimler hariç). Her satır resmi kaynağa ve son kontrol tarihine bağlıdır.
// Güncellerken: yalnızca şirketin resmi fiyat sayfasındaki veya resmi duyurusundaki rakamı yazın; bilinmeyen alanı boş bırakın.

export const MODELS_CHECKED = '2026-11-16';

const SRC = {
  anthropic: { label: 'Claude fiyatlandırma (Anthropic)', url: 'https://platform.claude.com/docs/en/about-claude/pricing' },
  openai: { label: 'API fiyatlandırma (OpenAI)', url: 'https://developers.openai.com/api/docs/pricing' },
  googleH: { label: 'Gemini 4 Hydrogen duyurusu (Google)', url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/' },
  deepseek: { label: 'API fiyatlandırma (DeepSeek)', url: 'https://api-docs.deepseek.com/quick_start/pricing' },
};

export const MODELS = [
  { company: 'Anthropic', entity: 'anthropic', model: 'Claude Fable 5.2', input: 8, output: 40, context: '1M', src: SRC.anthropic },
  { company: 'Anthropic', entity: 'anthropic', model: 'Claude Opus 5.5', input: 4, output: 20, context: '1M', src: SRC.anthropic },
  { company: 'Anthropic', entity: 'anthropic', model: 'Claude Sonnet 5.5', input: 2, output: 10, context: '1M', src: SRC.anthropic },
  { company: 'Anthropic', entity: 'anthropic', model: 'Claude Haiku 5.5', input: 0.1, output: 0.5, src: SRC.anthropic,
    note: '100 bin token\'a kadar istemler için; daha uzun istemlerde girdi 0,50 $, çıktı 2,50 $.' },
  { company: 'OpenAI', entity: 'openai', model: 'gpt-6-astra', input: 10, output: 50, src: SRC.openai },
  { company: 'OpenAI', entity: 'openai', model: 'gpt-6.1-sol', input: 2, output: 10, src: SRC.openai },
  { company: 'OpenAI', entity: 'openai', model: 'gpt-6.1-terra', input: 1, output: 5, src: SRC.openai },
  { company: 'OpenAI', entity: 'openai', model: 'gpt-6-luna', input: 0.1, output: 0.5, src: SRC.openai },
  { company: 'Google', entity: 'google', model: 'Gemini 4 Hydrogen', input: 1.5, output: 7.5, context: '1.048.576', src: SRC.googleH, checked: '2026-11-13' },
  { company: 'DeepSeek', entity: 'deepseek', model: 'deepseek-v4-pro', input: 1.32, output: 3.96, context: '1M', src: SRC.deepseek,
    note: 'Yoğun saat fiyatı; yoğun saat dışında girdi 0,66 $, çıktı 1,98 $.' },
  { company: 'DeepSeek', entity: 'deepseek', model: 'deepseek-flash', input: 0.3, output: 1.2, context: '1M', src: SRC.deepseek,
    note: 'Yoğun saat fiyatı; yoğun saat dışında girdi 0,15 $, çıktı 0,60 $.' },
];

/** Çıktı fiyatına göre fiyat sınıfı (YZ Gündemi sınıflandırması) */
export const priceClass = (m) => (m.output >= 20 ? 'Üst' : m.output >= 5 ? 'Orta' : 'Ekonomik');
