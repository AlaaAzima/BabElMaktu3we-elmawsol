with open(r'C:\Users\alaaa\.gemini\antigravity\brain\8d3643a0-f9ee-4dfd-b6c9-347f357cfb97\.system_generated\steps\131\content.md', 'r', encoding='utf-8') as f:
    text = f.read()

import re
lines = re.sub(r'<[^>]+>', '\n', text).split('\n')
with open('islamweb_verses.txt', 'w', encoding='utf-8') as f:
    for line in lines:
        if 'اعرف' in line or 'اقطع' in line or 'تعبدوا' in line or 'يقولوا' in line or 'نهوا' in line or 'فصلت' in line or 'الأنعام' in line or 'كل ما' in line or 'خلف' in line or 'ثاني' in line or 'أينما' in line or 'صل' in line or 'حج' in line:
            if len(line.strip()) > 10 and len(line.strip()) < 100:
                f.write(line.strip() + '\n')
