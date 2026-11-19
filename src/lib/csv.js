// Takipçi verilerinin CSV çıktısı (/veri/*.csv). Excel'in Türkçe karakterleri doğru açması için UTF-8 BOM eklenir.
const cell = (v) => {
  if (v == null) return '';
  const s = Array.isArray(v) ? v.join('; ') : String(v);
  return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
export const toCsv = (header, rows) => '﻿' + [header, ...rows].map((r) => r.map(cell).join(',')).join('\r\n') + '\r\n';
export const csvResponse = (body) => new Response(body, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
