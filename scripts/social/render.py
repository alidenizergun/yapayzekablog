"""Haftalık sosyal medya videosu: video adımı.

plan.json ve ses/NN.mp3 dosyalarından dikey (1080x1920, 30 fps) video üretir:
giriş sahnesi, her haber için fotoğraf/logo + metin sahnesi (yavaş yakınlaşma), kapanış sahnesi.
Dış ses her sahnenin başında başlar; sentezlenmiş arka plan müziği konuşmada kısılır; ses -15 LUFS.
Toplam süre 60 saniyeyi geçmez (gerekirse konuşma en fazla yüzde 12 hızlandırılır, yetmezse son haber düşer).

Kullanım: python scripts/social/render.py <OUT>   ->  <OUT>/video.mp4, <OUT>/kapak.jpg
Gerekenler: ffmpeg, Pillow, numpy, playwright (chromium)
"""
import base64
import json
import os
import subprocess
import sys
import urllib.request
import wave

import numpy as np
from PIL import Image, ImageDraw, ImageOps

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = os.path.abspath(sys.argv[1])
W, H, PH, FPS = 1080, 1920, 1150, 30
MAX_TOTAL, PAD, LEAD = 59.5, 0.55, 0.3
ENC = ['-c:v', 'libx264', '-crf', '18', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', '-r', str(FPS)]
plan = json.load(open(os.path.join(OUT, 'plan.json'), encoding='utf8'))
TMP = os.path.join(OUT, 'tmp'); os.makedirs(TMP, exist_ok=True)


def run(*a):
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', *a], check=True)


# ---------------------------------------------------------------- ses süreleri ve uyum
def wav_len(p):
    with wave.open(p) as w:
        return w.getnframes() / w.getframerate()


n_say = 2 + len(plan['stories'])
for i in range(n_say):
    run('-i', os.path.join(OUT, 'ses', f'{i:02d}.mp3'), '-ar', '48000', '-ac', '1', os.path.join(TMP, f'r{i:02d}.wav'))
raw = [wav_len(os.path.join(TMP, f'r{i:02d}.wav')) for i in range(n_say)]


def fit(raw):
    tempo = max(1.0, sum(raw) / (MAX_TOTAL - len(raw) * PAD))
    return tempo


# Süre sığmıyorsa sondan haber düşülür (giriş ve kapanış kalır)
while fit(raw) > 1.12 and len(plan['stories']) > 3:
    drop = len(plan['stories'])  # son haberin ses indeksi
    plan['stories'].pop()
    os.rename(os.path.join(TMP, f'r{n_say - 1:02d}.wav'), os.path.join(TMP, f'r{drop:02d}.wav'))
    raw.pop(drop); n_say -= 1
    print('süre sığmadı, son haber çıkarıldı')
tempo = fit(raw)
for i in range(n_say):
    run('-i', os.path.join(TMP, f'r{i:02d}.wav'), '-af', f'atempo={tempo:.4f}', os.path.join(TMP, f'h{i:02d}.wav'))
spoken = [wav_len(os.path.join(TMP, f'h{i:02d}.wav')) for i in range(n_say)]
durs = [round(max(a + PAD, 4.0), 2) for a in spoken]
print(f"konuşma {sum(raw):.1f} sn, hız {tempo:.3f}, video {sum(durs):.1f} sn")

# ---------------------------------------------------------------- arka plan görselleri
def logo_card(brand):
    im = Image.new('RGB', (1188, int(PH * 1.1)), (241, 238, 232))
    path = os.path.join(ROOT, 'public/logo/marka', f'{brand}.webp') if brand else ''
    m = Image.new('L', (460, 460), 0); ImageDraw.Draw(m).rounded_rectangle((0, 0, 459, 459), radius=100, fill=255)
    if path and os.path.exists(path):
        lg = Image.open(path).convert('RGBA')
        w, h = lg.size  # zemin rengi: kenar ortalarındaki piksellerin ortalaması
        px = [lg.getpixel(q) for q in ((w // 2, 3), (w // 2, h - 4), (3, h // 2), (w - 4, h // 2))]
        c = tuple(sum(p[k] for p in px) // 4 for k in range(4))
        tile = Image.new('RGBA', (460, 460), c if c[3] > 200 else (255, 255, 255, 255))
        lg = lg.resize((250, 250), Image.LANCZOS); tile.paste(lg, (105, 105), lg)
    else:  # sitenin kendi simgesi
        tile = Image.open(os.path.join(ROOT, 'public/icon-512.png')).convert('RGBA').resize((460, 460), Image.LANCZOS)
    im.paste(tile, ((1188 - 460) // 2, (int(PH * 1.1) - 460) // 2 - 40), m)
    return im


def background(img):
    t, src = img['type'], img['src']
    try:
        if t == 'local':
            im = Image.open(os.path.join(ROOT, src)).convert('RGB')
        elif t == 'remote':
            url = src + ('&' if '?' in src else '?') + 'w=1400&q=85' if 'images.unsplash.com' in src else src
            req = urllib.request.Request(url, headers={'user-agent': 'YZGundemiBot/1.0 (+https://www.yzgundemi.com)'})
            with urllib.request.urlopen(req, timeout=30) as r:
                im = Image.open(__import__('io').BytesIO(r.read())).convert('RGB')
        else:
            return logo_card(src)
        return ImageOps.fit(im, (1188, int(PH * 1.1)), Image.LANCZOS)
    except Exception as e:  # görsel alınamazsa logo kartı
        print('görsel alınamadı, logo kullanılıyor:', e)
        return logo_card(img.get('fallback_brand') or '')


for i, s in enumerate(plan['stories'], 1):
    background(s['image']).save(os.path.join(TMP, f'bg{i}.png'))

# ---------------------------------------------------------------- metin katmanları (Playwright)
def font(n):
    return 'data:font/woff2;base64,' + base64.b64encode(open(os.path.join(ROOT, 'src/fonts', n), 'rb').read()).decode()


FACES = ''.join(
    f"@font-face{{font-family:{fam};font-weight:100 900;src:url({font(f)}) format('woff2'){';unicode-range:U+0100-024F' if 'tr-' in f else ''}}}"
    for fam, f in [('I', 'inter-tr-wght.woff2'), ('I', 'inter-latin-wght.woff2'), ('H', 'schibsted-tr-wght.woff2'), ('H', 'schibsted-latin-wght.woff2')])
CSS = FACES + f"""*{{margin:0;box-sizing:border-box}}html,body{{width:{W}px;height:{H}px;background:transparent;font-family:I,sans-serif;color:#fff}}
.wm{{position:absolute;left:64px;top:96px;display:flex;align-items:center;gap:14px;font-family:H;font-weight:800;font-size:40px;text-shadow:0 2px 12px rgba(0,0,0,.5)}}
.b{{background:#CF2E13;color:#fff;border-radius:10px;padding:4px 12px;font-size:32px}}
.bars{{position:absolute;left:64px;right:64px;top:56px;display:flex;gap:10px}}.bars i{{flex:1;height:8px;border-radius:4px;background:rgba(255,255,255,.35)}}.bars i.on{{background:#fff}}
.topfade{{position:absolute;left:0;right:0;top:0;height:300px;background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,0))}}
.fade{{position:absolute;left:0;right:0;top:{PH - 260}px;height:262px;background:linear-gradient(rgba(20,20,20,0),#141414)}}
.txt{{position:absolute;left:64px;right:64px;top:{PH - 40}px}}
.cat{{display:inline-block;background:#CF2E13;font-weight:700;font-size:30px;letter-spacing:.08em;padding:10px 18px;border-radius:8px}}
h1{{font-family:H;font-weight:800;font-size:74px;line-height:1.1;letter-spacing:-.01em;margin-top:30px;text-wrap:balance}}
p{{font-size:40px;line-height:1.38;color:#d9d4cb;margin-top:28px}}
.full{{background:#141414;width:{W}px;height:{H}px;position:absolute;inset:0}}
.big{{position:absolute;left:80px;top:300px;display:flex;align-items:center;gap:22px;font-family:H;font-weight:800;font-size:64px}}.big .b{{font-size:52px;padding:6px 18px}}
.c{{position:absolute;left:80px;right:80px;top:560px}}.k{{font-size:40px;font-weight:700;letter-spacing:.1em;color:#FF7A62}}
.c h1{{font-size:118px;line-height:1.02;margin-top:28px}}.d{{font-size:48px;color:#d9d4cb;margin-top:44px;line-height:1.4}}
.o{{top:600px}}.o h1{{font-size:96px;line-height:1.08}}.u{{display:inline-block;margin-top:70px;background:#CF2E13;font-family:H;font-weight:800;font-size:64px;padding:22px 40px;border-radius:18px}}"""


def esc(t):
    return t.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


from playwright.sync_api import sync_playwright

with sync_playwright() as pw:
    try:  # GitHub sunucusunda kurulu Google Chrome; yoksa Playwright'ın kendi Chromium'u
        br = pw.chromium.launch(channel=os.environ.get('CHROME_CHANNEL', 'chrome'))
    except Exception:
        br = pw.chromium.launch()
    pg = br.new_page(viewport={'width': W, 'height': H})

    def shot(html, path, transparent):
        pg.set_content(f'<style>{CSS}</style>{html}')
        pg.evaluate('document.fonts.ready')
        if not pg.evaluate("document.fonts.check('800 40px H') && document.fonts.check('400 40px I')"):
            raise SystemExit('fontlar yüklenemedi')
        pg.wait_for_timeout(150)
        pg.screenshot(path=path, omit_background=transparent)

    n = len(plan['stories'])
    for i, s in enumerate(plan['stories'], 1):
        bars = ''.join(f'<i class="{"on" if j <= i else ""}"></i>' for j in range(1, n + 1))
        shot(f"""<div class=topfade></div><div class=bars>{bars}</div><div class=wm><span class=b>YZ</span>Gündemi</div><div class=fade></div>
<div class=txt><span class=cat>{i}/{n} · {esc(s['cat'])}</span><h1>{esc(s['headline'])}</h1><p>{esc(s['sub'])}</p></div>""", os.path.join(TMP, f'tx{i}.png'), True)
    shot(f"""<div class=full></div><div class=big><span class=b>YZ</span>Gündemi</div><div class=c><div class=k>HAFTANIN ÖZETİ</div>
<h1>Yapay zeka gündeminde bu hafta</h1><div class=d>{plan['date_label']}</div></div>""", os.path.join(TMP, 'intro.png'), False)
    shot("""<div class=full></div><div class=big><span class=b>YZ</span>Gündemi</div><div class="c o"><h1>Haberlerin tamamı ve kaynakları</h1>
<div class=d>Yapay zeka gelişmeleri<br>Her gün ve Türkçe</div><div class=u>yzgundemi.com</div></div>""", os.path.join(TMP, 'outro.png'), False)
    br.close()

# ---------------------------------------------------------------- sahneler
def still(png, dur, out):
    run('-framerate', str(FPS), '-i', png, '-vf',
        f'format=yuv420p,loop=-1:1,trim=duration={dur},fade=in:st=0:d=0.35,fade=out:st={dur - 0.35:.2f}:d=0.35', *ENC, out + '.part.mp4')
    os.replace(out + '.part.mp4', out)


parts = []
still(os.path.join(TMP, 'intro.png'), durs[0], os.path.join(TMP, 'v0.mp4')); parts.append('v0.mp4')
for i in range(1, len(plan['stories']) + 1):
    T = durs[i]; N = int(T * FPS)
    fc = (f"[0]scale=2376:-1,zoompan=z='1+0.07*on/{N}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={N}:s={W}x{PH}:fps={FPS},"
          f"pad={W}:{H}:0:0:color=0x141414,format=yuv420p[b];"
          f"[1]format=rgba,loop=-1:1,trim=duration={T},fade=in:st=0.2:d=0.45:alpha=1[t];"
          f"[b][t]overlay=0:0:shortest=1,format=yuv420p,fade=in:st=0:d=0.3,fade=out:st={T - 0.3:.2f}:d=0.3")
    out = os.path.join(TMP, f'v{i}.mp4')
    run('-i', os.path.join(TMP, f'bg{i}.png'), '-framerate', str(FPS), '-i', os.path.join(TMP, f'tx{i}.png'),
        '-filter_complex', fc, '-t', str(T), *ENC, out + '.part.mp4')
    os.replace(out + '.part.mp4', out); parts.append(f'v{i}.mp4')
k = len(plan['stories']) + 1
still(os.path.join(TMP, 'outro.png'), durs[k], os.path.join(TMP, f'v{k}.mp4')); parts.append(f'v{k}.mp4')
open(os.path.join(TMP, 'list.txt'), 'w').write(''.join(f"file '{p}'\n" for p in parts))
run('-f', 'concat', '-safe', '0', '-i', os.path.join(TMP, 'list.txt'), '-c', 'copy', os.path.join(TMP, 'sessiz.mp4'))
total = sum(durs)

# ---------------------------------------------------------------- müzik (telifsiz, her gün sentezlenir)
def music(path, dur, seed):
    rng = np.random.default_rng(seed)
    sr = 48000; bpm = 92 + int(rng.integers(0, 9)); beat = 60 / bpm
    t = np.arange(int(sr * dur)) / sr
    note = lambda m: 440 * 2 ** ((m - 69) / 12)
    progs = [[[57, 60, 64, 69], [53, 57, 60, 65], [48, 55, 60, 64], [55, 59, 62, 67]],
             [[50, 57, 62, 65], [46, 53, 58, 62], [53, 57, 60, 65], [48, 55, 60, 64]],
             [[52, 59, 64, 67], [48, 55, 60, 64], [55, 59, 62, 67], [50, 57, 62, 66]]]
    prog = progs[int(rng.integers(0, len(progs)))]
    bar = beat * 8; out = np.zeros_like(t)
    for k in range(int(dur / bar) + 1):
        ch = prog[k % 4]; s = int(k * bar * sr); e = min(len(t), int((k + 1) * bar * sr) + int(sr * 1.5))
        if s >= len(t):
            break
        tt = t[s:e] - t[s]; env = np.minimum(tt / 1.2, 1) * np.exp(-np.maximum(tt - bar, 0) / 0.6)
        for m in ch:
            f = note(m)
            out[s:e] += (np.sin(2 * np.pi * f * tt) + 0.35 * np.sin(2 * np.pi * 2 * f * tt + 0.3) + 0.5 * np.sin(2 * np.pi * f * 1.003 * tt)) * 0.06 * env
        out[s:e] += 0.10 * np.sin(2 * np.pi * note(ch[0] - 12) * tt) * env
    step = beat / 2
    for k in range(int(dur / step)):
        s = int(k * step * sr); e = min(len(t), s + int(sr * 0.9)); ch = prog[int(k * step / bar) % 4]
        m = ch[[0, 1, 2, 3, 2, 1][k % 6]] + 12; tt = t[s:e] - t[s]
        out[s:e] += 0.035 * np.sin(2 * np.pi * note(m) * tt) * np.exp(-tt / 0.35) * np.minimum(tt / 0.01, 1)
    for k in range(int(dur / beat)):
        s = int(k * beat * sr); e = min(len(t), s + int(sr * 0.25)); tt = t[s:e] - t[s]
        out[s:e] += 0.09 * np.sin(2 * np.pi * (55 + 60 * np.exp(-tt * 30)) * tt) * np.exp(-tt / 0.08)
    d = int(sr * 0.28); out[d:] += 0.25 * out[:-d]
    fi, fo = int(sr * 1.0), int(sr * 2.5); out[:fi] *= np.linspace(0, 1, fi); out[-fo:] *= np.linspace(1, 0, fo)
    out = out / np.max(np.abs(out)) * 0.6
    st = np.stack([out, np.roll(out, int(sr * 0.012))], 1)
    with wave.open(path, 'wb') as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(sr); w.writeframes((st * 32767).astype('<i2').tobytes())


music(os.path.join(TMP, 'muzik.wav'), total + 1, seed=plan.get('seed') or 1)

# ---------------------------------------------------------------- dış ses + karışım
ins, parts, t = [], [], 0.0
for i in range(n_say):
    ms = int((t + LEAD) * 1000)
    ins += ['-i', os.path.join(TMP, f'h{i:02d}.wav')]
    parts.append(f'[{i}:a]aresample=48000,aformat=channel_layouts=stereo,adelay={ms}|{ms}[a{i}]')
    t += durs[i]
fc = ';'.join(parts) + ';' + ''.join(f'[a{i}]' for i in range(n_say)) + f'amix=inputs={n_say}:normalize=0,apad,atrim=0:{total:.2f}[v]'
run(*ins, '-filter_complex', fc, '-map', '[v]', '-c:a', 'pcm_s16le', os.path.join(TMP, 'dis_ses.wav'))
run('-i', os.path.join(TMP, 'dis_ses.wav'), '-i', os.path.join(TMP, 'muzik.wav'), '-filter_complex',
    f"[0:a]volume=1.25,asplit=2[vo][sc];[1:a]atrim=0:{total:.2f},volume=0.42,afade=t=out:st={total - 2.5:.2f}:d=2.5[m];"
    "[m][sc]sidechaincompress=threshold=0.03:ratio=8:attack=20:release=400[md];"
    "[vo][md]amix=inputs=2:normalize=0,loudnorm=I=-15:TP=-1.5:LRA=11,aresample=48000[a]",
    '-map', '[a]', '-c:a', 'pcm_s16le', os.path.join(TMP, 'karisim.wav'))
final = os.path.join(OUT, 'video.mp4')
run('-i', os.path.join(TMP, 'sessiz.mp4'), '-i', os.path.join(TMP, 'karisim.wav'), '-map', '0:v', '-map', '1:a',
    '-c:v', 'copy', '-c:a', 'aac', '-b:a', '160k', '-shortest', '-movflags', '+faststart', final + '.part.mp4')
os.replace(final + '.part.mp4', final)
# Kapak: ilk haber sahnesinin ortası
run('-ss', f'{durs[0] + durs[1] / 2:.2f}', '-i', final, '-frames:v', '1', '-q:v', '3', os.path.join(OUT, 'kapak.jpg'))
json.dump(plan, open(os.path.join(OUT, 'plan.json'), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
print(f'video hazır: {total:.1f} sn, {len(plan["stories"])} haber')
