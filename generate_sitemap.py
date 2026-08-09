import json
import re

# Read products.js
with open("src/data/products.js", "r", encoding="utf-8") as f:
    content = f.read()

# Extract json array inside PRODUCTS = [...]
match = re.search(r'export const PRODUCTS = (\[.*?\]);', content, re.DOTALL)
if not match:
    print("Could not find PRODUCTS array")
    exit(1)

products_json = match.group(1)

# Parse products
products = json.loads(products_json)

BASE_URL = "https://nutshub.online"

main_pages = [
    ("", "1.0"),
    ("products", "0.9"),
    ("gift-box", "0.9"),
    ("about", "0.8"),
    ("why-us", "0.8"),
    ("reviews", "0.8"),
    ("faq", "0.7"),
    ("contact", "0.8")
]

xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
]

# Add main pages
for page, priority in main_pages:
    url = f"{BASE_URL}/{page}" if page else f"{BASE_URL}/"
    xml_lines.append("  <url>")
    xml_lines.append(f"    <loc>{url}</loc>")
    xml_lines.append("    <changefreq>weekly</changefreq>")
    xml_lines.append(f"    <priority>{priority}</priority>")
    xml_lines.append("  </url>")

# Add product pages
for p in products:
    pid = p["id"]
    url = f"{BASE_URL}/products/{pid}"
    xml_lines.append("  <url>")
    xml_lines.append(f"    <loc>{url}</loc>")
    xml_lines.append("    <changefreq>weekly</changefreq>")
    xml_lines.append("    <priority>0.8</priority>")
    xml_lines.append("  </url>")

xml_lines.append('</urlset>')

sitemap_content = "\n".join(xml_lines)

# Write to public/sitemap.xml
with open("public/sitemap.xml", "w", encoding="utf-8") as f:
    f.write(sitemap_content)

print(f"Successfully generated sitemap.xml with {len(main_pages) + len(products)} URLs!")
