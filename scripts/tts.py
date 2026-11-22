"""Seslendirme: verilen Türkçe cümleleri Piper (açık kaynak, çevrimdışı) ile WAV dosyalarına çevirir.
Kullanım: METIN='["cümle 1","cümle 2"]' python scripts/tts.py <ses.onnx> <çıktı klasörü> [hız]
Her cümle ayrı dosyaya yazılır: 00.wav, 01.wav, ...
"""
import json, os, sys, wave
from piper import PiperVoice, SynthesisConfig

model, out = sys.argv[1], sys.argv[2]
speed = float(sys.argv[3]) if len(sys.argv) > 3 else 1.0
lines = json.loads(os.environ["METIN"])
if not isinstance(lines, list) or not all(isinstance(x, str) for x in lines) or len(lines) > 40:
    sys.exit("METIN en fazla 40 cümlelik bir JSON dizisi olmalı")
os.makedirs(out, exist_ok=True)
voice = PiperVoice.load(model)
cfg = SynthesisConfig(length_scale=1.0 / speed)
for i, text in enumerate(lines):
    path = os.path.join(out, f"{i:02d}.wav")
    with wave.open(path, "wb") as w:
        voice.synthesize_wav(text[:600], w, syn_config=cfg)
    with wave.open(path) as w:
        print(f"{i:02d}.wav  {w.getnframes() / w.getframerate():.2f} sn  {text[:70]}")
