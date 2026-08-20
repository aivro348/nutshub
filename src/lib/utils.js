/**
 * Utility functions for NutsHub application
 */

/**
 * Format currency strings safely
 * @param {number|string} amount
 * @returns {string} Formatted Indian Rupee string
 */
export function formatCurrency(amount) {
  if (typeof amount === "number") {
    return `₹${amount.toLocaleString("en-IN")}`;
  }
  if (typeof amount === "string" && !amount.startsWith("₹")) {
    return `₹${amount.trim()}`;
  }
  return amount;
}

/**
 * Convert string into clean URL-safe slug
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

/**
 * Generate formatted WhatsApp order URL
 * @param {string} phone 10-12 digit phone number without leading +
 * @param {string} message Message text
 * @returns {string} Full wa.me link
 */
export function buildWhatsAppUrl(phone = "919480517939", message = "") {
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMsg}`;
}

/**
 * Filter product list by category slug, search query, and sorting option
 */
export function filterProducts(products = [], { category = "all", searchQuery = "", sortBy = "featured" } = {}) {
  let result = [...products];

  if (category && category !== "all") {
    result = result.filter((p) => p.category === category);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(q))) ||
        (p.desc && p.desc.toLowerCase().includes(q))
    );
  }

  if (sortBy === "price-low") {
    result.sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));
  } else if (sortBy === "price-high") {
    result.sort((a, b) => getNumericPrice(b.price) - getNumericPrice(a.price));
  } else if (sortBy === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  return result;
}

function getNumericPrice(priceStr = "") {
  const match = priceStr.match(/\d+/g);
  return match ? parseInt(match.join(""), 10) : 0;
}
