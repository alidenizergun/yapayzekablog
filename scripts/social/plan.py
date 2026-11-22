"""Günlük sosyal medya videosu: plan adımı.

Son 24 saatin (gerekirse 36 saatin) en önemli haberlerini okunma potansiyeline göre seçer ve
Claude'a ekran metinlerini, dış ses metnini ve paylaşım açıklamalarını yazdırır.

Çıktılar (OUT klasörü):
  plan.json   sahneler, görseller, açıklamalar
  metin.json  seslendirilecek cümleler (giriş, haberler, kapanış)

Kullanım: python scripts/social/plan.py <OUT>   (ANTHROPIC_API_KEY gerekir)
"""
import datetime as dt
import glob
import json
import os
import re
import sys
import urllib.request

import yaml

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = sys.argv[1]
MODEL = os.environ.get('VIDEO_MODEL', 'claude-sonnet-5-5')
MAX_STORIES = int(os.environ.get('VIDEO_MAX_STORIES', '6'))
MIN_STORIES = 3
TZ = dt.timezone(dt.timedelta(hours=3))

INTRO = 'Yapay zeka gündeminde son 24 saatte neler oldu? İşte öne çıkanlar.'
# Kapanış okunuşu kullanıcının kararıdır: "Ye Zegündemi nokta kom"
OUTRO = "Haberlerin tamamı ve kaynakları, Ye Zegündemi nokta kom'da."
MAX_SAY_CHARS = 760  # haber cümlelerinin toplamı; giriş ve kapanışla birlikte ~55-60 sn (render gerekirse hızlandırır)


def tr_upper(t):
    return t.replace('i', 'İ').replace('ı', 'I').upper()


def categories():
    src = open(os.path.join(ROOT, 'src/lib/site.js'), encoding='utf8').read()
    return {m[0]: m[1] for m in re.findall(r"\{ slug: '([^']+)', name: '([^']+)'", src)}


def load_news():
    items = []
    for f in glob.glob(os.path.join(ROOT, 'src/content/haberler/*.md')):
        s = open(f, encoding='utf8').read()
        m = re.match(r'^---\n(.*?)\n---\n(.*)$', s, re.S)
        if not m:
            continue
        fm = yaml.safe_load(m.group(1)) or {}
        if fm.get('draft'):
            continue
        d = fm.get('date')
        if isinstance(d, str):
            d = dt.datetime.fromisoformat(d)
        if isinstance(d, dt.date) and not isinstance(d, dt.datetime):
            d = dt.datetime(d.year, d.month, d.day, tzinfo=TZ)
        if d.tzinfo is None:
            d = d.replace(tzinfo=TZ)
        fm['_date'] = d
        fm['_slug'] = os.path.basename(f)[11:-3]
        fm['_body'] = m.group(2).strip()
        items.append(fm)
    return items


def pick(items, now):
    for hours in (24, 36):
        recent = [x for x in items if now - dt.timedelta(hours=hours) <= x['_date'] <= now]
        if len(recent) >= MIN_STORIES:
            break
    recent.sort(key=lambda x: (-(x.get('popularity') or 0), -x['_date'].timestamp()))
    # Aynı konudan (aynı hikâye / aynı şirket) en fazla bir haber
    out, seen = [], set()
    for x in recent:
        key = x.get('story') or x.get('brand') or x['_slug']
        if key in seen:
            continue
        seen.add(key)
        out.append(x)
        if len(out) == MAX_STORIES:
            break
    return out, hours


def image_for(x):
    p = x.get('photo') or {}
    url = p.get('url') or ''
    if url.startswith('/foto/'):
        return {'type': 'local', 'src': f"public{url}-1280.webp"}
    if url.startswith('http'):
        return {'type': 'remote', 'src': url, 'fallback_brand': x.get('brand') or ''}
    if x.get('brand'):
        return {'type': 'logo', 'src': x['brand']}
    return {'type': 'logo', 'src': ''}


SCHEMA = {
    'type': 'object', 'additionalProperties': False,
    'required': ['stories', 'hashtags', 'caption_x'],
    'properties': {
        'stories': {'type': 'array', 'items': {
            'type': 'object', 'additionalProperties': False,
            'required': ['slug', 'headline', 'sub', 'say', 'caption_line'],
            'properties': {
                'slug': {'type': 'string'},
                'headline': {'type': 'string', 'description': 'Ekran başlığı, en fazla 75 karakter'},
                'sub': {'type': 'string', 'description': 'Ekran alt metni, en fazla 110 karakter'},
                'say': {'type': 'string', 'description': 'Dış ses, en fazla 2 kısa cümle ve 125 karakter'},
                'caption_line': {'type': 'string', 'description': 'Instagram açıklamasında bu haberin tek satırlık özeti'},
            }}},
        'hashtags': {'type': 'array', 'items': {'type': 'string'}, 'description': 'En fazla 5 hashtag, # ile'},
        'caption_x': {'type': 'string'},
    },
}

PROMPT = """Sen YZ Gündemi'nin sosyal medya editörüsün. Aşağıdaki haberlerden dikey bir kısa video (Instagram Reels, X) için metin hazırlayacaksın. Haberlerin sırası değişmez; her haber için bir sahne yaz.

Kurallar:
- Yalnızca haber metninde yazan bilgileri kullan. Rakam, isim ve tarih aynen korunur. İddialar iddia olarak aktarılır ("… kanıtladığını açıkladı", "… iddia ediyor"); kesinleşmemiş bir şeyi olmuş gibi yazma.
- headline (ekranda): en fazla 75 karakter, fiilli, konuyu bilmeyen birinin anlayacağı sade Türkçe. Jargon ve tanınmayan kod adı kullanma. Rakamlar rakamla yazılabilir ("yüzde 63").
- sub (ekranda): en fazla 110 karakter, başlığa bir bilgi ekler; tekrar etmez.
- say (dış ses): en fazla 2 kısa cümle, toplam en fazla 125 karakter; bilgi yoğun ve sade yaz. Seslendirme için yazılır: bütün sayılar YAZIYLA ("yüzde altmış üç", "yüz on beş virgül sekiz milyar dolar"), sürüm numaraları da yazıyla ("GPT altı nokta iki"). Kısaltma kullanma ("ABD" yerine "Amerika" de; "TÜİK" kalabilir). Şirket ve ürün adları özgün yazımıyla kalır (Nvidia, OpenAI, Claude). Türkiye haberlerinde cümleye "Türkiye'de" diye başla.
- Bütün say cümlelerinin toplamı {max_say} karakteri geçmesin.
- caption_line: Instagram açıklamasında bu haberin tek satırlık özeti (en fazla 140 karakter, rakamlar rakamla), emoji yok.
- hashtags: en fazla 5 hashtag; #yapayzeka ve #YZGündemi her zaman olsun.
- caption_x: en fazla 240 karakter, Türkçe, tek paragraf; YALNIZCA listedeki İLK İKİ haberi anlat. İçinde bağlantı, alan adı ("yzgundemi.com") ve @ etiketi OLMAYACAK. En fazla 2 hashtag.
- Abartılı ifade, ünlem ve tık tuzağı yok.

HABERLER:
{news}
"""


def ask_claude(news_text):
    key = os.environ.get('ANTHROPIC_API_KEY')
    if not key:
        sys.exit('ANTHROPIC_API_KEY yok')
    body = {
        'model': MODEL, 'max_tokens': 16000,
        'messages': [{'role': 'user', 'content': PROMPT.replace('{max_say}', str(MAX_SAY_CHARS)).replace('{news}', news_text)}],
        'output_config': {'format': {'type': 'json_schema', 'schema': SCHEMA}, 'effort': 'low'},
    }
    req = urllib.request.Request('https://api.anthropic.com/v1/messages', data=json.dumps(body).encode(), method='POST', headers={
        'x-api-key': key, 'anthropic-version': '2023-06-01', 'content-type': 'application/json'})
    with urllib.request.urlopen(req, timeout=180) as r:
        res = json.load(r)
    text = ''.join(b.get('text', '') for b in res['content'] if b.get('type') == 'text')
    u = res.get('usage', {})
    print(f"Claude: {u.get('input_tokens')} giriş + {u.get('output_tokens')} çıkış token ({MODEL}, {res.get('stop_reason')})")
    if not text.strip():
        sys.exit(f"Claude metin döndürmedi (stop_reason: {res.get('stop_reason')})")
    return json.loads(text)


def main():
    os.makedirs(OUT, exist_ok=True)
    now = dt.datetime.now(TZ)
    chosen, hours = pick(load_news(), now)
    if len(chosen) < MIN_STORIES:
        print(f'Son 36 saatte yalnızca {len(chosen)} haber var; bugün video üretilmeyecek.')
        open(os.path.join(OUT, 'plan.json'), 'w').write(json.dumps({'skip': True}))
        return
    cats = categories()
    news_text = '\n\n'.join(
        f"[{x['_slug']}] {x['title']}\nSpot: {x.get('spot', '')}\nKategori: {cats.get(x.get('category'), '')}\n"
        f"Metin: {x['_body'][:1500]}" for x in chosen)
    res = ask_claude(news_text)
    by_slug = {x['_slug']: x for x in chosen}
    stories = []
    for s in res['stories']:
        x = by_slug.get(s['slug'])
        if not x:
            continue
        name = 'Türkiye' if x.get('category') == 'turkiye' or s['say'].startswith("Türkiye'de") else cats.get(x.get('category'), 'Gündem')
        stories.append({
            'slug': x['_slug'], 'cat': tr_upper(name),
            'headline': s['headline'].strip()[:90], 'sub': s['sub'].strip()[:130], 'say': s['say'].strip(),
            'caption_line': s['caption_line'].strip()[:160],
            'image': image_for(x),
        })
    # Dış ses toplamı sınırı aşarsa sondan haber düşülür
    while len(stories) > MIN_STORIES and sum(len(s['say']) for s in stories) > MAX_SAY_CHARS:
        stories.pop()
    start = (now - dt.timedelta(hours=hours))
    plan = {
        'skip': False, 'created': now.isoformat(timespec='minutes'), 'hours': hours,
        'date_label': now.strftime('%d.%m.%Y'), 'intro': INTRO, 'outro': OUTRO, 'stories': stories,
        'hashtags': [h.strip() for h in res['hashtags'] if h.strip().startswith('#')][:5] or ['#yapayzeka', '#YZGündemi'],
        'caption_x': res['caption_x'].strip()[:270],
    }
    json.dump(plan, open(os.path.join(OUT, 'plan.json'), 'w'), ensure_ascii=False, indent=1)
    json.dump([INTRO] + [s['say'] for s in stories] + [OUTRO], open(os.path.join(OUT, 'metin.json'), 'w'), ensure_ascii=False)
    print(f"{len(stories)} haber seçildi (son {hours} saat):")
    for s in stories:
        print(f"  - [{s['cat']}] {s['headline']}  ·  {s['image']['type']}")


if __name__ == '__main__':
    main()
