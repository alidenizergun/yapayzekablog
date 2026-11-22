"""Her haber turu bitince telefona push bildirimi gönderir (ntfy.sh, ücretsiz; telefonda ntfy uygulaması).

Kullanım: python3 scripts/push-notify.py [<yeni haber dosyası> ...]
Ortam:
  NTFY_TOPIC      ntfy kanal adı (GitHub secret; tahmin edilemeyecek bir ad seçin, kanalı bilen herkes okuyabilir)
  GEN_RESULT      haber üretim işinin sonucu (success / failure / cancelled)
  DEPLOY_RESULT   yayın işinin sonucu
  RUN_URL         GitHub'daki tur kaydının adresi (bildirime dokununca açılır)
Kanal tanımlı değilse sessizce çıkar; bildirim hatası turu başarısız saymaz.
"""
import csv
import datetime as dt
import json
import os
import re
import sys
import urllib.request

topic = os.environ.get('NTFY_TOPIC', '').strip()
if not topic:
    print('NTFY_TOPIC yok; push bildirimi atlandı.')
    sys.exit(0)

gen, dep = os.environ.get('GEN_RESULT', ''), os.environ.get('DEPLOY_RESULT', '')
files = [f for f in sys.argv[1:] if f.endswith('.md') and os.path.exists(f)]

# Bu turun maliyeti: maliyet kaydının son satırı (tur kaydı 30 dakikadan eskiyse gösterilmez)
cost = ''
try:
    rows = list(csv.DictReader(open('data/maliyet.csv', encoding='utf8')))
    if rows:
        last = rows[-1]
        age = dt.datetime.now(dt.timezone.utc) - dt.datetime.fromisoformat(last['tarih'])
        if age < dt.timedelta(minutes=30):
            cost = f" · {float(last['toplam_usd']):.2f} $"
except Exception:  # noqa: BLE001
    pass

titles = []
for f in sorted(files):
    m = re.search(r'^title:\s*(.+)$', open(f, encoding='utf8').read(), re.M)
    titles.append('• ' + (m.group(1).strip().strip('"\'').replace('\\"', '"') if m else os.path.basename(f)))

if os.environ.get('PUSH_TEST'):
    title, body, prio, tags = 'YZ Gündemi test bildirimi', 'Bildirimler çalışıyor. Her haber turu bitince buradan haber alacaksınız.', 'default', 'tada'
    gen = dep = 'success'
elif gen != 'success':
    title, body, prio, tags = 'Haber turu başarısız', f'Haber üretimi tamamlanamadı ({gen or "bilinmiyor"}). Ayrıntı için dokunun.', 'high', 'warning'
elif dep != 'success':
    title, body, prio, tags = 'Haberler yayına alınamadı', f'Haberler üretildi ama site güncellenemedi ({dep or "bilinmiyor"}).', 'high', 'warning'
elif titles:
    title = f'{len(titles)} yeni haber yayında{cost}'
    body, prio, tags = '\n'.join(titles), 'default', 'newspaper'
else:
    title, body, prio, tags = f'Tur tamamlandı{cost}', 'Bu turda yeni haber çıkmadı.', 'low', 'white_check_mark'

ok = gen == 'success' and dep == 'success'
run_url = os.environ.get('RUN_URL', '')
click = 'https://www.yzgundemi.com/' if ok and titles else run_url
payload = {'topic': topic, 'title': title, 'message': body, 'priority': {'low': 2, 'default': 3, 'high': 4}[prio], 'tags': [tags]}
if click:
    payload['click'] = click
req = urllib.request.Request('https://ntfy.sh/', data=json.dumps(payload).encode(), method='POST', headers={'Content-Type': 'application/json'})
try:
    with urllib.request.urlopen(req, timeout=30) as r:
        print(f'Push bildirimi gönderildi (HTTP {r.status}): {title}')
except Exception as e:  # noqa: BLE001
    print('Push bildirimi gönderilemedi:', type(e).__name__)
