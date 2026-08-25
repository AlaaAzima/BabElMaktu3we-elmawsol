import urllib.request, urllib.parse, re, ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://www.youtube.com/results?search_query=' + urllib.parse.quote('باب المقطوع والموصول أيمن سويد')
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
ids = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)
print("Maqtu:", ids[0:3])

url2 = 'https://www.youtube.com/results?search_query=' + urllib.parse.quote('باب هاء التأنيث أيمن سويد')
req2 = urllib.request.Request(url2, headers={'User-Agent': 'Mozilla/5.0'})
html2 = urllib.request.urlopen(req2, context=ctx).read().decode('utf-8')
ids2 = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html2)
print("Taat:", ids2[0:3])
