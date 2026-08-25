import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://www.youtube.com/results?search_query=' + urllib.parse.quote('متن الجزرية باب المقطوع والموصول أيمن سويد')
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
    ids = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)
    print(ids[0] if ids else 'NOT FOUND')
except Exception as e:
    print('Error:', e)
