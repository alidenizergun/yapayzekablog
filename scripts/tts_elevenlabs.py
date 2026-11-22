"""Seslendirme (ElevenLabs): verilen Türkçe cümleleri ElevenLabs Text to Speech API ile MP3 dosyalarına çevirir.
Anahtar yalnızca ELEVENLABS_API_KEY ortam değişkeninden (GitHub secret) okunur; hiçbir yere yazılmaz.
Kullanım: METIN='["cümle 1","cümle 2"]' python scripts/tts_elevenlabs.py <voice_id> <çıktı klasörü> [model]
"""
import json, os, sys, time, urllib.request, urllib.error

voice, out = sys.argv[1], sys.argv[2]
model = sys.argv[3] if len(sys.argv) > 3 and sys.argv[3] else "eleven_multilingual_v2"
key = os.environ.get("ELEVENLABS_API_KEY", "").strip()
if not key:
    sys.exit("ELEVENLABS_API_KEY tanımlı değil (GitHub > Settings > Secrets and variables > Actions)")
if not voice.isalnum() or len(voice) > 40:
    sys.exit("geçersiz ses kimliği")
lines = json.loads(os.environ["METIN"])
if not isinstance(lines, list) or not all(isinstance(x, str) for x in lines) or len(lines) > 40:
    sys.exit("METIN en fazla 40 cümlelik bir JSON dizisi olmalı")
os.makedirs(out, exist_ok=True)
url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice}?output_format=mp3_44100_128"
chars = 0
for i, text in enumerate(lines):
    body = json.dumps({
        "text": text[:1000],
        "model_id": model,
        "voice_settings": {"stability": 0.55, "similarity_boost": 0.75, "style": 0.15, "use_speaker_boost": True},
    }).encode()
    for attempt in range(3):
        req = urllib.request.Request(url, data=body, method="POST", headers={"xi-api-key": key, "content-type": "application/json", "accept": "audio/mpeg"})
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                data = r.read()
            break
        except urllib.error.HTTPError as e:
            msg = e.read().decode(errors="replace")[:300]
            if e.code in (429, 500, 502, 503) and attempt < 2:
                time.sleep(5 * (attempt + 1)); continue
            sys.exit(f"ElevenLabs hatası {e.code}: {msg}")
    path = os.path.join(out, f"{i:02d}.mp3")
    open(path, "wb").write(data)
    chars += len(text)
    print(f"{i:02d}.mp3  {len(data)//1024} KB  {text[:70]}")
print(f"toplam {chars} karakter · model {model} · ses {voice}")
