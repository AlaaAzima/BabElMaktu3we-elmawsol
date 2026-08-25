import json
import re

with open(r'C:\Users\alaaa\.gemini\antigravity\brain\8d3643a0-f9ee-4dfd-b6c9-347f357cfb97\.system_generated\steps\50\content.md', 'r', encoding='utf-8') as f:
    content = f.read()

try:
    maqtu_part = content.split('باب المقطوع والموصول والتاء')[1].split('باب هاء الـتأنيث التي رسمت تاء')[0]
    taat_part = content.split('باب هاء الـتأنيث التي رسمت تاء')[1].split('باب همز الوصل')[0]
    
    def extract_verses(text):
        verses = []
        matches = re.findall(r'<div class="abyat-sdr">(.*?)</div>\s*<div class="abyat-ajz">(.*?)</div>', text)
        for sdr, ajz in matches:
            sdr = re.sub(r'<[^>]+>', '', sdr).strip()
            ajz = re.sub(r'<[^>]+>', '', ajz).strip()
            verses.append({'sdr': sdr, 'ajz': ajz})
        return verses
    
    data = {
        'maqtu': extract_verses(maqtu_part),
        'taat': extract_verses(taat_part)
    }
    
    with open('jazariyyah.json', 'w', encoding='utf-8') as out:
        json.dump(data, out, ensure_ascii=False, indent=2)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
