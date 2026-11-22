"""Yeni haberler yayına girince WhatsApp'tan bildirim gönderir (CallMeBot, kişisel kullanım).

Kullanım: python3 scripts/whatsapp-notify.py <haber dosyası> [<haber dosyası> ...]
Anahtarlar (GitHub secrets; hiçbir yere yazılmaz):
  CALLMEBOT_PHONE   ülke koduyla telefon numarası (+905…)
  CALLMEBOT_APIKEY  CallMeBot'un WhatsApp'tan gönderdiği anahtar
Anahtarlar tanımlı değilse sessizce çıkar; bildirim hatası turu başarısız saymaz.
"""
import os
import re
import sys
import urllib.parse
import urllib.request

SITE = (os.environ.get('SITE_URL') or 'https://www.yzgundemi.com').rstrip('/').replace('://yzgundemi.com', '://www.yzgundemi.com')
phone = os.environ.get('CALLMEBOT_PHONE', '').strip()
key = os.environ.get('CALLMEBOT_APIKEY', '').strip()
files = [f for f in sys.argv[1:] if f.endswith('.md') and os.path.exists(f)]

if not (phone and key):
    print('WhatsApp anahtarları yok (CALLMEBOT_PHONE, CALLMEBOT_APIKEY); bildirim atlandı.')
    sys.exit(0)
if not files:
    print('Yeni haber yok; bildirim gönderilmedi.')
    sys.exit(0)

items = []
for f in sorted(files):
    m = re.search(r'^title:\s*(.+)$', open(f, encoding='utf8').read(), re.M)
    title = m.group(1).strip().strip('"\'').replace('\\"', '"') if m else os.path.basename(f)
    slug = re.sub(r'^\d{4}-\d{2}-\d{2}-', '', os.path.basename(f)[:-3])
    items.append(f'• {title}\n{SITE}/haber/{slug}/')

text = f'YZ Gündemi: {len(items)} yeni haber yayında\n\n' + '\n\n'.join(items)
url = 'https://api.callmebot.com/whatsapp.php?' + urllib.parse.urlencode({'phone': phone, 'apikey': key, 'text': text})
try:
    with urllib.request.urlopen(url, timeout=60) as r:
        body = r.read().decode(errors='replace')
    # Yanıt, anahtar ya da numara içerebileceği için günlüğe yazılmaz; yalnızca sonuç
    ok = r.status == 200 and 'error' not in body.lower()
    print(f'WhatsApp bildirimi {"gönderildi" if ok else "gönderilemedi"} ({len(items)} haber, HTTP {r.status}).')
except Exception as e:  # noqa: BLE001
    print('WhatsApp bildirimi gönderilemedi:', type(e).__name__)
