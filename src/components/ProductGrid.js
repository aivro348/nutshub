"use client";

import { useState, useTransition, useMemo, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [visibleCards, setVisibleCards] = useState(new Set());
  const gridRef = useRef(null);

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

  // Staggered scroll reveal with Intersection Observer
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.dataset.idx;
            setVisibleCards((prev) => new Set([...prev, idx]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const cards = grid.querySelectorAll(".product-card-wrapper");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProducts, showAll]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    startTransition(() => {
      setSearchTerm(value);
    });
  };

  const handleCategorySelect = (categoryId) => {
    startTransition(() => {
      setActiveCategory(categoryId);
      setVisibleCards(new Set());
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
          <div className="products-grid" ref={gridRef}>
            {(showAll ? filteredProducts : filteredProducts.slice(0, 10)).map((p, idx) => (
              <div
                key={p.id}
                className={`product-card-wrapper ${visibleCards.has(String(idx)) ? 'revealed' : ''}`}
                data-idx={idx}
                style={{ transitionDelay: `${(idx % 5) * 80}ms` }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          
          {filteredProducts.length > 10 && (
            <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
              <button 
                onClick={() => {
                  setShowAll(!showAll);
                  setVisibleCards(new Set());
                }}
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
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .search-input-premium:focus {
          border-color: rgba(223, 183, 108, 0.6);
          box-shadow: 0 0 20px rgba(223, 183, 108, 0.1), 0 0 40px rgba(223, 183, 108, 0.05);
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
          right: 1.5rem;
          top: 50%;
          translate: 0 -50%;
        }

        .search-loading-dot {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-accent);
          animation: searchPulse 0.8s ease-in-out infinite;
        }

        @keyframes searchPulse {
          0%, 100% { scale: 1; opacity: 0.5; }
          50% { scale: 1.5; opacity: 1; }
        }

        .category-tab {
          padding: 0.6rem 1.4rem;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(223, 183, 108, 0.15);
          background: transparent;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .category-tab:hover {
          border-color: rgba(223, 183, 108, 0.5);
          color: var(--color-accent);
          background: rgba(223, 183, 108, 0.06);
        }

        .category-tab.active {
          border-color: var(--color-accent);
          background: linear-gradient(135deg, #b88d3b, #dfb76c);
          color: #0a0704;
          box-shadow: 0 4px 16px rgba(223, 183, 108, 0.25);
        }

        .product-card-wrapper {
          opacity: 0;
          translate: 0 30px;
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      translate 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .product-card-wrapper.revealed {
          opacity: 1;
          translate: 0 0;
        }

        .btn-see-all {
          padding: 1rem 2.5rem;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: transparent;
          border: 1px solid rgba(223, 183, 108, 0.4);
          color: var(--color-accent);
          border-radius: 999px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-see-all:hover {
          background: rgba(223, 183, 108, 0.08);
          border-color: var(--color-accent);
          translate: 0 -2px;
          box-shadow: 0 8px 24px rgba(223, 183, 108, 0.15);
        }
      `}</style>
    </div>
  );
}
