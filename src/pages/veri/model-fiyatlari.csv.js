import { MODELS, MODELS_CHECKED } from '../../lib/models.js';
import { toCsv, csvResponse } from '../../lib/csv.js';

export async function GET() {
  const rows = MODELS.map((m) => [m.company, m.model, m.input, m.output, m.context, MODELS_CHECKED, m.src?.url]);
  return csvResponse(toCsv(['sirket', 'model', 'girdi_usd_milyon_token', 'cikti_usd_milyon_token', 'baglam_penceresi', 'kontrol_tarihi', 'kaynak_url'], rows));
}
