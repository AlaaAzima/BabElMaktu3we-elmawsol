with open(r'C:\Users\alaaa\.gemini\antigravity\brain\8d3643a0-f9ee-4dfd-b6c9-347f357cfb97\.system_generated\steps\50\content.md', 'r', encoding='utf-8') as f:
    text = f.read()

maqtu = text.split('باب المقطوع والموصول والتاء')[1].split('باب هاء الـتأنيث التي رسمت تاء')[0]
with open('maqtu_raw.txt', 'w', encoding='utf-8') as f:
    f.write(maqtu)
