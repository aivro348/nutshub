"use client";

import { useState, useTransition, useMemo } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [isPending, startTransition] = useTransition();

  const categories = [
    { id: "all", label: "All Products" },
    { id: "premium", label: "Premium Selection" },
    { id: "organic", label: "Organic Fresh" },
    { id: "bestseller", label: "Bestsellers" }
  ];

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
    startTransition(() => {
      setSearchTerm(value);
    });
  };

  const handleCategorySelect = (categoryId) => {
    startTransition(() => {
      setActiveCategory(categoryId);
    });
  };

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 10);

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
            className="search-input-premium"
            aria-label="Search products"
          />
          <span className="search-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          {isPending && (
            <span className="search-loading">
              <span className="search-loading-dot" />
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
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
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
            {displayedProducts.map((p) => (
              <div key={p.id} className="product-card-wrapper revealed">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          
          {filteredProducts.length > 10 && (
            <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
              <button 
                onClick={() => setShowAll(!showAll)}
                className="btn-see-all"
              >
                {showAll ? 'See Less' : `See All ${filteredProducts.length} Products`}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ transition: 'transform 0.3s ease', transform: showAll ? 'rotate(180deg)' : 'none' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
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
          <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</p>
          <p style={{ fontSize: '1.2rem', fontWeight: 300 }}>No products found matching your criteria.</p>
        </div>
      )}

      <style jsx>{`
        .search-input-premium {
          width: 100%;
          padding: 1.1rem 1.5rem 1.1rem 3rem;
          border-radius: var(--radius-lg);
          background: rgba(18, 12, 6, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(223, 183, 108, 0.15);
          color: var(--color-text);
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .search-input-premium:focus {
          border-color: rgba(223, 183, 108, 0.6);
          box-shadow: 0 0 20px rgba(223, 183, 108, 0.1);
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          translate: 0 -50%;
          color: rgba(223, 183, 108, 0.5);
          pointer-events: none;
        }

        .search-loading {
          position: absolute;
          right: 1rem;
          top: 50%;
          translate: 0 -50%;
        }

        .search-loading-dot {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #dfb76c;
          animation: pulse 1s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .category-tab {
          padding: 0.6rem 1.4rem;
          border-radius: 999px;
          background: rgba(18, 12, 6, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .category-tab:hover {
          color: #dfb76c;
          border-color: rgba(223, 183, 108, 0.3);
        }

        .category-tab.active {
          background: linear-gradient(135deg, #b88d3b, #dfb76c);
          color: #0a0704;
          border-color: transparent;
          font-weight: 700;
          box-shadow: 0 4px 14px rgba(223, 183, 108, 0.25);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 25px;
        }

        .product-card-wrapper {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .btn-see-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.9rem 2.2rem;
          border-radius: 999px;
          background: rgba(18, 12, 6, 0.8);
          border: 1px solid rgba(223, 183, 108, 0.3);
          color: #dfb76c;
          font-weight: 600;
          font-size: 0.92rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .btn-see-all:hover {
          background: rgba(223, 183, 108, 0.15);
          border-color: rgba(223, 183, 108, 0.6);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
