import re
import json

filepath = "/Users/hrishi/Desktop/nutshub/.txt"
with open(filepath, "r") as f:
    lines = f.readlines()

categories = []
current_category = "Uncategorized"
products = []

for line in lines:
    line = line.strip()
    if not line:
        continue
    
    # Check if this is a category header (doesn't contain (Code: ) or Rs.)
    if "(Code:" not in line and "Rs." not in line and "MRP:" not in line and "gms" not in line:
        current_category = line
        continue
        
    # Match standard format: Name (Code: XXXX) – 250gms: Rs. YY | 1 Kg: Rs. ZZ
    match = re.search(r'^(.*?)\s*\(Code:\s*([A-Za-z0-9-]+)\)\s*[–-]\s*(.*)$', line)
    if match:
        name = match.group(1).strip()
        code = match.group(2).strip()
        pricing_str = match.group(3).strip()
        
        products.append({
            "name": name,
            "code": code,
            "category": current_category,
            "pricing": pricing_str
        })
    elif "Assorted Dry Fruits Gift Box" in line:
        products.append({
            "name": "Assorted Dry Fruits Gift Box",
            "code": "GIFT-1",
            "category": current_category,
            "pricing": line
        })
        
print(f"Total parsed: {len(products)}")
with open("parsed_products.json", "w") as out:
    json.dump(products, out, indent=2)

