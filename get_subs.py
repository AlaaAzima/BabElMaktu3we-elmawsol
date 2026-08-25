import urllib.request, urllib.parse, re, json, ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://www.youtube.com/watch?v=kxWzBARsS0k'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
    match = re.search(r'"captions":(\{.*?\})', html)
    if match:
        captions = json.loads(match.group(1))
        tracks = captions.get('playerCaptionsTracklistRenderer', {}).get('captionTracks', [])
        if tracks:
            vtt_url = tracks[0]['baseUrl'] + '&fmt=vtt'
            vtt = urllib.request.urlopen(vtt_url, context=ctx).read().decode('utf-8')
            lines = vtt.split('\n')
            for i, line in enumerate(lines):
                if 'زخرف' in line or 'ورحمت' in line or 'ورحمة' in line or 'بالتا' in line:
                    print(lines[i-2:i+2])
            print('Subtitles fetched')
    else:
        print('No captions found.')
except Exception as e:
    print('Error:', e)
