import urllib.request, urllib.parse, re

try:
    query = urllib.parse.quote('متن الجزرية مع الترديد باب المقطوع والموصول السكندري')
    url = f'https://www.youtube.com/results?search_query={query}'
    html = urllib.request.urlopen(url).read().decode('utf-8')
    match = re.search(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)
    if match:
        print(match.group(1))
    else:
        print("NOT_FOUND")
except Exception as e:
    print("ERROR:", e)
