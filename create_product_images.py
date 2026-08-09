import os
import json
import re
import urllib.request
from PIL import Image, ImageDraw, ImageFont

# Define directory paths
public_images_dir = '/Users/hrishi/Desktop/nutshub/public/images'
products_js_path = '/Users/hrishi/Desktop/nutshub/src/data/products.js'

os.makedirs(public_images_dir, exist_ok=True)

# Unsplash high-resolution food photo mappings for exact product types
FOOD_PHOTOS = {
    "walnut-giri": "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=600&auto=format&fit=crop&q=80",
    "walnut-2": "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=600&auto=format&fit=crop&q=80",
    "pecan-nut": "https://images.unsplash.com/photo-1621996346565-e3d5d626359f?w=600&auto=format&fit=crop&q=80",
    "indian-kishmish": "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=600&auto=format&fit=crop&q=80",
    "black-kishmish-seedless": "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=600&auto=format&fit=crop&q=80",
    "black-kishmish-with-seed": "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=600&auto=format&fit=crop&q=80",
    "munaka": "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=600&auto=format&fit=crop&q=80",
    "afgan-kishmish": "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=600&auto=format&fit=crop&q=80",
    "dry-dates-black": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80",
    "dry-dates-yellow": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80",
    "medjool-dates": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80",
    "ajwa-dates": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80",
    "mabroom-dates": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80",
    "saffawi-dates": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80",
    "al-hasna-dates": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80",
    "black-berry": "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=600&auto=format&fit=crop&q=80",
    "blueberry": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=600&auto=format&fit=crop&q=80",
    "plum-dry": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&auto=format&fit=crop&q=80",
    "cherry-dry": "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&auto=format&fit=crop&q=80",
    "amla-dry": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80",
    "strawberry-dry": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&auto=format&fit=crop&q=80",
    "orange-slice": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&auto=format&fit=crop&q=80",
    "mango-slice": "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=80",
    "pomello-dry": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&auto=format&fit=crop&q=80",
    "amla-honey": "https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=600&auto=format&fit=crop&q=80",
    "amla-chatpat": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80",
    "kiwi-dry": "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=600&auto=format&fit=crop&q=80",
    "pineapple-coin": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&auto=format&fit=crop&q=80",
    "pineapple-ring": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&auto=format&fit=crop&q=80",
    "fruit-mix-2": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&auto=format&fit=crop&q=80",
    "apricot-jardalu": "https://images.unsplash.com/photo-1501199532894-9449c0a85a77?w=600&auto=format&fit=crop&q=80",
    "apricot-dry": "https://images.unsplash.com/photo-1501199532894-9449c0a85a77?w=600&auto=format&fit=crop&q=80",
    "papaya-dry": "https://images.unsplash.com/photo-1517260739337-6799d239ce83?w=600&auto=format&fit=crop&q=80",
    "craneberry": "https://images.unsplash.com/photo-1589134783103-66362d80d2d7?w=600&auto=format&fit=crop&q=80",
    "afghan-fig": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600&auto=format&fit=crop&q=80",
    "turkey-fig": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600&auto=format&fit=crop&q=80",
    "museli-mexican-bites": "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=600&auto=format&fit=crop&q=80",
    "mix-nuts": "https://images.unsplash.com/photo-1536591375315-1b836890327c?w=600&auto=format&fit=crop&q=80",
    "vegetable-mix-masala": "https://images.unsplash.com/photo-1566454825481-4e48f80aa4d7?w=600&auto=format&fit=crop&q=80",
    "kas-kas": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80",
    "sunflower-plain": "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&auto=format&fit=crop&q=80",
    "pumpkin-seed-plain": "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&auto=format&fit=crop&q=80",
    "musk-melon-seed": "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&auto=format&fit=crop&q=80",
    "water-melon-seed": "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&auto=format&fit=crop&q=80",
    "flax-seed-plain": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80",
    "flax-seed-roasted": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80",
    "sabja-seed": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80",
    "chia-seed": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80",
    "mixed-seed": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80",
    "dhaniya-dhal": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
    "black-pepper": "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&auto=format&fit=crop&q=80",
    "srilanka-cinomon-cinomom-ind": "https://images.unsplash.com/photo-1509358271058-acd01cc9386a?w=600&auto=format&fit=crop&q=80",
    "star-seed": "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&auto=format&fit=crop&q=80",
    "clove": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80",
    "laddu-gonth": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80",
    "lucknow-souf-bady-sounf": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
    "kalpasi": "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&auto=format&fit=crop&q=80",
    "badam-gonth": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80",
    "black-cardamom": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
    "marati-moggu": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80",
    "jathipathiri": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
    "ajwain": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
    "shahi-jeera": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
    "nutmeg": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
    "ellam-cardamom": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
    "cane-sugar-jaggery": "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=600&auto=format&fit=crop&q=80",
    "herbal-sugar": "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=600&auto=format&fit=crop&q=80",
    "palm-jaggery": "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=600&auto=format&fit=crop&q=80",
    "makana": "https://images.unsplash.com/photo-1536591375315-1b836890327c?w=600&auto=format&fit=crop&q=80",
    "ginger-candy": "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&auto=format&fit=crop&q=80",
    "mango-candy": "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&auto=format&fit=crop&q=80",
    "rock-sugar-candy": "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=600&auto=format&fit=crop&q=80",
    "sounf-roasted": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
    "stone-chocolate": "https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&auto=format&fit=crop&q=80",
    "gems-chocolate-loose": "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&auto=format&fit=crop&q=80",
    "diamond-sugar": "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=600&auto=format&fit=crop&q=80",
    "mouth-freshner": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
}

print(f"Total photos to download: {len(FOOD_PHOTOS)}")

req_headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
}

downloaded = {}

for pid, url in FOOD_PHOTOS.items():
    filename = f"{pid.replace('-', '_')}.jpg"
    target_path = os.path.join(public_images_dir, filename)
    try:
        req = urllib.request.Request(url, headers=req_headers)
        with urllib.request.urlopen(req) as resp, open(target_path, 'wb') as f:
            f.write(resp.read())
        downloaded[pid] = f"images/{filename}"
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Error downloading {pid}: {e}")

# Read products.js
with open(products_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'export const PRODUCTS = (\[[\s\S]*\]);', content)
if match:
    products = json.loads(match.group(1))
    for p in products:
        if p['id'] in downloaded:
            p['image'] = downloaded[p['id']]
    
    new_js = f"export const PRODUCTS = {json.dumps(products, indent=2)};\n"
    with open(products_js_path, 'w', encoding='utf-8') as f:
        f.write(new_js)
    print("Updated products.js with all product-specific image paths!")
