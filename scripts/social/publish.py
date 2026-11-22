"""Haftalık sosyal medya videosu: paylaşım adımı.

<OUT>/video.mp4 dosyasını plan.json'daki açıklamalarla paylaşır:
  Instagram: Reels (Graph API, dosya doğrudan yüklenir; barındırma gerekmez)
  X:         video gönderisi (X API v2 medya yükleme, linksiz metin)
Anahtarları tanımlı olmayan platform atlanır; bir platformdaki hata diğerini durdurmaz.
Sonuçlar <OUT>/yayin.json dosyasına yazılır (aynı videoyu ikinci kez paylaşmamak için).

Anahtarlar (GitHub secrets; hiçbir yere yazılmaz):
  IG_ACCESS_TOKEN (Instagram ile giriş, App Dashboard > Instagram > API setup with Instagram login > Generate token)
  IG_USER_ID isteğe bağlı (yoksa anahtardan bulunur); IG_API_HOST varsayılan graph.instagram.com
  X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET   (OAuth 1.0a, "Read and write")
Kullanım: python scripts/social/publish.py <OUT> [--dry-run]
"""
import base64
import hashlib
import hmac
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import uuid

OUT = os.path.abspath(sys.argv[1])
DRY = '--dry-run' in sys.argv
plan = json.load(open(os.path.join(OUT, 'plan.json'), encoding='utf8'))


def instagram_caption():
    """Açıklama videodaki haberlerden kurulur (süre için düşülen haber açıklamada da yer almaz)."""
    lines = [f"Yapay zeka gündeminde bu hafta ({plan.get('date_label', '')})", ''] + [f"• {s['caption_line']}" for s in plan.get('stories', [])]
    lines += ['', 'Haberlerin tamamı ve kaynakları: yzgundemi.com (profildeki bağlantı)', '', ' '.join(plan.get('hashtags') or ['#yapayzeka', '#YZGündemi'])]
    return '\n'.join(lines)
VIDEO = os.path.join(OUT, 'video.mp4')
RESULT = os.path.join(OUT, 'yayin.json')
result = json.load(open(RESULT)) if os.path.exists(RESULT) else {}


def log(*a):
    print('[sosyal]', *a, flush=True)


def http(method, url, data=None, headers=None, timeout=120):
    req = urllib.request.Request(url, data=data, method=method, headers=headers or {})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            body = r.read()
            return r.status, (json.loads(body) if body and body[:1] in b'{[' else body)
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors='replace')
        try:
            return e.code, json.loads(body)
        except ValueError:
            return e.code, body[:500]


# ---------------------------------------------------------------- Instagram
def instagram():
    uid, token = os.environ.get('IG_USER_ID', '').strip(), os.environ.get('IG_ACCESS_TOKEN', '').strip()
    if not token:
        log('Instagram anahtarı yok (IG_ACCESS_TOKEN); atlandı.')
        return None
    # Varsayılan: "Instagram ile giriş" API'si (Facebook sayfası gerekmez). Facebook ile giriş için IG_API_HOST=graph.facebook.com
    host = os.environ.get('IG_API_HOST', '').strip() or 'graph.instagram.com'
    ver = os.environ.get('IG_API_VERSION', '').strip() or 'v23.0'
    base = f'https://{host}/{ver}'
    if not uid:  # hesap kimliği anahtardan bulunur
        st, me = http('GET', f'{base}/me?' + urllib.parse.urlencode({'fields': 'user_id,username', 'access_token': token}))
        uid = str((me or {}).get('user_id') or (me or {}).get('id') or '') if isinstance(me, dict) else ''
        if not uid:
            raise RuntimeError(f'Instagram hesap kimliği alınamadı ({st}): {me}')
        log(f"Instagram hesabı: @{me.get('username', '?')}")
    size = os.path.getsize(VIDEO)
    form = urllib.parse.urlencode({'media_type': 'REELS', 'upload_type': 'resumable', 'caption': instagram_caption(),
                                   'share_to_feed': 'true', 'access_token': token}).encode()
    st, res = http('POST', f'{base}/{uid}/media', form)
    if st != 200 or 'id' not in res:
        raise RuntimeError(f'Instagram kapsayıcı oluşturulamadı ({st}): {res}')
    cid = res['id']
    upload_uri = res.get('uri') or f'https://rupload.facebook.com/ig-api-upload/{ver}/{cid}'
    with open(VIDEO, 'rb') as f:
        st, res = http('POST', upload_uri, f.read(), {'Authorization': f'OAuth {token}', 'offset': '0', 'file_size': str(size)}, timeout=600)
    if st != 200:
        raise RuntimeError(f'Instagram video yüklenemedi ({st}): {res}')
    for _ in range(60):  # işleme: en fazla ~10 dk
        st, res = http('GET', f'{base}/{cid}?' + urllib.parse.urlencode({'fields': 'status_code,status', 'access_token': token}))
        code = res.get('status_code') if isinstance(res, dict) else None
        if code == 'FINISHED':
            break
        if code in ('ERROR', 'EXPIRED'):
            raise RuntimeError(f'Instagram videoyu işleyemedi: {res}')
        time.sleep(10)
    else:
        raise RuntimeError('Instagram işleme zaman aşımı')
    st, res = http('POST', f'{base}/{uid}/media_publish', urllib.parse.urlencode({'creation_id': cid, 'access_token': token}).encode())
    if st != 200 or 'id' not in res:
        raise RuntimeError(f'Instagram yayımlanamadı ({st}): {res}')
    log('Instagram Reels yayımlandı:', res['id'])
    return res['id']


# ---------------------------------------------------------------- X
def oauth_header(method, url, keys, query=None):
    enc = lambda s: urllib.parse.quote(str(s), safe='~')
    p = {'oauth_consumer_key': keys['key'], 'oauth_nonce': uuid.uuid4().hex, 'oauth_signature_method': 'HMAC-SHA1',
         'oauth_timestamp': str(int(time.time())), 'oauth_token': keys['token'], 'oauth_version': '1.0'}
    allp = {**p, **(query or {})}
    base = '&'.join([method.upper(), enc(url), enc('&'.join(f'{enc(k)}={enc(v)}' for k, v in sorted(allp.items())))])
    sig = base64.b64encode(hmac.new(f"{enc(keys['secret'])}&{enc(keys['token_secret'])}".encode(), base.encode(), hashlib.sha1).digest()).decode()
    p['oauth_signature'] = sig
    return 'OAuth ' + ', '.join(f'{enc(k)}="{enc(v)}"' for k, v in sorted(p.items()))


def x_post():
    keys = {'key': os.environ.get('X_API_KEY', ''), 'secret': os.environ.get('X_API_SECRET', ''),
            'token': os.environ.get('X_ACCESS_TOKEN', ''), 'token_secret': os.environ.get('X_ACCESS_SECRET', '')}
    if not all(v.strip() for v in keys.values()):
        log('X anahtarları yok (X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET); atlandı.')
        return None
    api = 'https://api.x.com/2/media/upload'
    size = os.path.getsize(VIDEO)
    body = json.dumps({'media_type': 'video/mp4', 'total_bytes': size, 'media_category': 'tweet_video'}).encode()
    u = f'{api}/initialize'
    st, res = http('POST', u, body, {'Authorization': oauth_header('POST', u, keys), 'content-type': 'application/json'})
    mid = (res.get('data') or {}).get('id') if isinstance(res, dict) else None
    if not mid:
        raise RuntimeError(f'X medya başlatılamadı ({st}): {res}')
    chunk = 4 * 1024 * 1024
    with open(VIDEO, 'rb') as f:
        i = 0
        while True:
            part = f.read(chunk)
            if not part:
                break
            bnd = uuid.uuid4().hex
            data = (f'--{bnd}\r\nContent-Disposition: form-data; name="segment_index"\r\n\r\n{i}\r\n'
                    f'--{bnd}\r\nContent-Disposition: form-data; name="media"; filename="video.mp4"\r\nContent-Type: application/octet-stream\r\n\r\n').encode() + part + f'\r\n--{bnd}--\r\n'.encode()
            u = f'{api}/{mid}/append'
            st, res = http('POST', u, data, {'Authorization': oauth_header('POST', u, keys), 'content-type': f'multipart/form-data; boundary={bnd}'}, timeout=300)
            if st not in (200, 201, 204):
                raise RuntimeError(f'X medya parçası yüklenemedi ({st}): {res}')
            i += 1
    u = f'{api}/{mid}/finalize'
    st, res = http('POST', u, b'', {'Authorization': oauth_header('POST', u, keys)})
    if st not in (200, 201):
        raise RuntimeError(f'X medya tamamlanamadı ({st}): {res}')
    info = (res.get('data') or {}).get('processing_info') if isinstance(res, dict) else None
    while info and info.get('state') in ('pending', 'in_progress'):
        time.sleep(max(2, int(info.get('check_after_secs', 5))))
        q = {'command': 'STATUS', 'media_id': mid}
        st, res = http('GET', f'{api}?' + urllib.parse.urlencode(q), None, {'Authorization': oauth_header('GET', api, keys, q)})
        info = (res.get('data') or {}).get('processing_info') if isinstance(res, dict) else None
    if info and info.get('state') == 'failed':
        raise RuntimeError(f'X videoyu işleyemedi: {info}')
    text = plan['caption_x']
    if 'http' in text or '.com' in text:  # linksiz kural: bağlantı ücreti ve otomatik link olmasın
        raise RuntimeError('X metninde bağlantı var; paylaşım durduruldu')
    u = 'https://api.x.com/2/tweets'
    st, res = http('POST', u, json.dumps({'text': text, 'media': {'media_ids': [str(mid)]}}).encode(),
                   {'Authorization': oauth_header('POST', u, keys), 'content-type': 'application/json'})
    tid = (res.get('data') or {}).get('id') if isinstance(res, dict) else None
    if not tid:
        raise RuntimeError(f'X gönderisi atılamadı ({st}): {res}')
    log('X gönderisi atıldı:', tid)
    return tid


def main():
    if plan.get('skip') or not os.path.exists(VIDEO):
        log('Paylaşılacak video yok.')
        return
    if DRY:
        log('Deneme: paylaşım yapılmadı.\n--- Instagram ---\n' + instagram_caption() + '\n--- X ---\n' + plan['caption_x'])
        return
    failed = False
    for name, fn in (('instagram', instagram), ('x', x_post)):
        if result.get(name):
            log(f'{name}: bu video zaten paylaşıldı ({result[name]}); atlandı.')
            continue
        try:
            pid = fn()
            if pid:
                result[name] = pid
        except Exception as e:  # noqa: BLE001
            failed = True
            log(f'{name} HATA:', e)
        json.dump(result, open(RESULT, 'w'), indent=1)
    if failed:
        sys.exit(1)


if __name__ == '__main__':
    main()
