"use client";

import { useState, useTransition, useMemo } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Categories list
  const categories = [
    { id: "all", label: "All Products" },
    { id: "premium", label: "Premium Selection" },
    { id: "organic", label: "Organic Fresh" },
    { id: "bestseller", label: "Bestsellers" }
  ];

  // Search/Filter matching
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
        
      const matchesCategory =
        activeCategory === "all" || p.badge === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, activeCategory]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    // Use useTransition to keep typing instant even with large grids
    startTransition(() => {
      setSearchTerm(value);
    });
  };

  const handleCategorySelect = (categoryId) => {
    startTransition(() => {
      setActiveCategory(categoryId);
    });
  };

  return (
    <div className="product-grid-container">
      {/* Search & Category Filter Header Controls */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto var(--space-2xl)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)'
      }}>
        {/* Search */}
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type="search"
            placeholder="Search walnuts, organic dates, premium cashews..."
            defaultValue={searchTerm}
            onChange={handleSearchChange}
            style={{
              width: '100%',
              padding: '1rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--surface-800)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
            aria-label="Search products"
          />
          {isPending && (
            <span style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              translate: '0 -50%',
              fontSize: '0.85rem',
              color: 'var(--color-accent)'
            }}>
              Filtering...
            </span>
          )}
        </div>

        {/* Categories tabs */}
        <div style={{
          display: 'flex',
          gap: 'var(--space-xs)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }} role="tablist" aria-label="Product categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                border: '1px solid',
                borderColor: activeCategory === cat.id ? 'var(--color-accent)' : 'var(--color-border)',
                background: activeCategory === cat.id ? 'var(--color-accent)' : 'transparent',
                color: activeCategory === cat.id ? 'var(--color-bg)' : 'var(--color-text-muted)',
                transition: 'all 0.3s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display */}
      {filteredProducts.length > 0 ? (
        <>
          <div className="products-grid">
            {(showAll ? filteredProducts : filteredProducts.slice(0, 10)).map((p) => (
              <ProductCard
                key={p.id}
                product={p}
              />
            ))}
          </div>
          
          {filteredProducts.length > 10 && (
            <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
              <button 
                onClick={() => setShowAll(!showAll)}
                className="btn-primary"
                style={{ 
                  padding: '1rem 3rem',
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'transparent',
                  border: '1px solid var(--color-accent)',
                  color: 'var(--color-accent)'
                }}
              >
                {showAll ? 'See Less' : `See All ${filteredProducts.length} Products`}
              </button>
            </div>
          )}
        </>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: 'var(--space-3xl) 0',
          color: 'var(--color-text-muted)'
        }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 300 }}>No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
