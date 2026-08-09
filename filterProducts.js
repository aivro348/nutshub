const fs = require('fs');

const validCodes = new Set([
  "1000", "1001", "1008", "1027", "1023", "1025", 
  "1011", "1012", "1014", "1010", "1009", "1018", 
  "1005", "1004", "1006", "1003", "1040", "1024", 
  "2035", "2005", "2006", "2002", "2004", "3000", 
  "3001", "3005", "3003", "3002", "3004", "3019", 
  "2030", "8025", "4015", "4017", "4009", "8006", 
  "4003", "5008", "8020", "8011", "6000", "2013", 
  "7009", "5005", "8010", "7007", "7019", "8005", 
  "4012"
]);

const filePath = '/Users/hrishi/Desktop/nutshub/src/data/products.js';
const code = fs.readFileSync(filePath, 'utf8');

// Match everything from `export const PRODUCTS = [` to the end.
const arrayMatch = code.match(/export const PRODUCTS = (\[[\s\S]*\]);/);
if (!arrayMatch) {
  console.log("Could not find PRODUCTS array.");
  process.exit(1);
}

// We can evaluate the array to get the JS objects.
let products = [];
try {
  // Using eval to parse the JS array (since it might have unquoted keys etc).
  // A safer way is to use new Function.
  products = new Function('return ' + arrayMatch[1])();
} catch (e) {
  console.error("Error evaluating array:", e);
  process.exit(1);
}

const filtered = products.filter(p => {
  if (validCodes.has(p.code)) return true;
  // Also keep Assorted Dry Fruits Gift Box if it matches
  if (p.name && p.name.includes("Gift Box")) return true;
  return false;
});

console.log(`Original count: ${products.length}`);
console.log(`Filtered count: ${filtered.length}`);

const newCode = `export const PRODUCTS = ${JSON.stringify(filtered, null, 2)};\n`;
fs.writeFileSync(filePath, newCode);
console.log("Updated products.js");
