const fs = require('fs');
const path = require('path');

const txtPath = '/Users/hrishi/Desktop/nutshub/.txt';
const jsPath = '/Users/hrishi/Desktop/nutshub/src/data/products.js';

// Read existing to keep rich descriptions if they match
const existingCode = fs.readFileSync(jsPath, 'utf8');
const arrayMatch = existingCode.match(/export const PRODUCTS = (\[[\s\S]*\]);/);
let existingProducts = [];
if (arrayMatch) {
  try {
    existingProducts = new Function('return ' + arrayMatch[1])();
  } catch (e) {
    console.error("Eval error", e);
  }
}

const existingMap = new Map();
existingProducts.forEach(p => existingMap.set(p.code, p));

const txtLines = fs.readFileSync(txtPath, 'utf8').split('\n');

const newProducts = [];
let currentCategoryStr = "Uncategorized";
let currentCategorySlug = "uncategorized";
let defaultImage = "images/almonds.png";

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

function getImageForCategory(cat) {
  cat = cat.toLowerCase();
  if (cat.includes('almond') || cat.includes('nut')) return 'images/almonds.png';
  if (cat.includes('cashew')) return 'images/cashews.png';
  if (cat.includes('pista') || cat.includes('walnut')) return 'images/walnuts.png';
  if (cat.includes('raisin') || cat.includes('date')) return 'images/dates.png';
  if (cat.includes('berri') || cat.includes('fruit')) return 'images/berries.png';
  if (cat.includes('seed') || cat.includes('mix')) return 'images/seeds.png';
  if (cat.includes('spice') || cat.includes('herb')) return 'images/spices.png';
  if (cat.includes('sugar') || cat.includes('sweet') || cat.includes('cand')) return 'images/sweets.png';
  return 'images/almonds.png';
}

for (let line of txtLines) {
  line = line.trim();
  if (!line) continue;

  if (!line.includes('(Code:') && !line.includes('Rs.') && !line.includes('MRP:')) {
    currentCategoryStr = line;
    currentCategorySlug = slugify(line);
    defaultImage = getImageForCategory(line);
    continue;
  }

  // Handle gift box specifically if it has no code
  if (line.includes('Gift Box')) {
    const id = "gift-box";
    const existing = existingMap.get('GIFT-1') || {};
    newProducts.push({
      id,
      code: "GIFT-1",
      name: "Assorted Dry Fruits Gift Box",
      category: currentCategorySlug,
      badge: "premium",
      desc: line,
      price: "₹950",
      unit: "430g",
      priceKg: "₹950",
      image: "images/giftbox.png",
      tags: ["Gift Box", "Premium", "Assorted"],
      fullDesc: "Premium assorted dry fruits gift box, perfect for festivals and special occasions.",
      nutrition: { protein: "10g / 100g", calcium: "50mg / 100g", iron: "2mg / 100g" },
      benefits: ["Variety of Nutrients", "Premium Quality", "Festive Joy"],
      medicalUses: "Provides a balanced mix of healthy fats, proteins, and vitamins from various premium dry fruits.",
      eatingAdvice: "Share with family and friends during festive occasions."
    });
    continue;
  }

  // Match: Name (Code: XXXX) – pricing
  const match = line.match(/^(.*?)\s*\(Code:\s*([A-Za-z0-9-]+)\)\s*[–-]\s*(.*)$/);
  if (match) {
    const rawName = match[1].trim();
    const code = match[2].trim();
    const pricingStr = match[3].trim();
    
    // Parse pricing for standard formats like "250gms: Rs. 262.5 | 1 Kg: Rs. 1050"
    let price = "₹0";
    let unit = "250g";
    let priceKg = "₹0";
    
    if (pricingStr.includes('250gms:')) {
       const parts = pricingStr.split('|');
       if (parts[0]) {
           const p1 = parts[0].split('Rs.');
           if (p1[1]) price = "₹" + p1[1].trim();
       }
       if (parts[1]) {
           const p2 = parts[1].split('Rs.');
           if (p2[1]) priceKg = "₹" + p2[1].trim();
       }
    } else if (pricingStr.includes('Price: Rs.')) {
       const p = pricingStr.split('Rs.');
       if (p[1]) {
           price = "₹" + p[1].replace('/ Kg', '').trim();
           priceKg = price;
           unit = "1 Kg";
       }
    } else {
       // fallback
       price = pricingStr;
    }

    const id = slugify(rawName);
    
    const existing = existingMap.get(code);
    
    if (existing) {
      // Update existing item while preserving rich fields
      newProducts.push({
        ...existing,
        id,
        name: rawName,
        code,
        category: currentCategorySlug,
        price,
        unit,
        priceKg,
        image: existing.image || defaultImage
      });
    } else {
      // Create new dummy item
      newProducts.push({
        id,
        code,
        name: rawName,
        category: currentCategorySlug,
        badge: "bestseller",
        desc: `High quality ${rawName} sourced from the best farms.`,
        price,
        unit,
        priceKg,
        image: defaultImage,
        tags: [rawName, currentCategoryStr.split(' ')[0]],
        fullDesc: `Premium ${rawName} offering rich flavors and dense nutritional value. Perfect for daily consumption.`,
        nutrition: { protein: "5g / 100g", calcium: "30mg / 100g", iron: "1mg / 100g" },
        benefits: ["Healthy Snacking", "Daily Nutrition", "Rich Flavor"],
        medicalUses: `Regular consumption of ${rawName} provides essential minerals and vitamins for overall wellness.`,
        eatingAdvice: "Consume directly as a snack or add to your favorite recipes."
      });
    }
  }
}

const finalCode = `export const PRODUCTS = ${JSON.stringify(newProducts, null, 2)};\n`;
fs.writeFileSync(jsPath, finalCode);
console.log(`Successfully merged ${newProducts.length} items to products.js`);
