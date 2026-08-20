"use client";

import Link from "next/link";
import ProductVisual from "./ProductVisual";

export default function ProductCard({ product }) {
  const badgeMap = {
    premium: <span className="product-badge badge-premium">Premium</span>,
    organic: <span className="product-badge badge-organic">Organic</span>,
    bestseller: <span className="product-badge badge-bestseller">Bestseller</span>
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="product-card minimal-card"
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      aria-label={`View ${product.name} details`}
    >
      <article>
        <div className="product-image-wrap">
          <ProductVisual product={product} />
          <div className="product-image-overlay" />
          {badgeMap[product.badge]}
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-desc">{product.desc}</p>
          <div className="product-footer">
            <span className="product-price">
              {product.price} <small>/ {product.unit}</small>
            </span>
            <span className="product-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </div>
        </div>
      </article>

      <style jsx>{`
        .minimal-card {
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.22s ease,
                      border-color 0.22s ease !important;
          will-change: transform;
        }

        .minimal-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4),
                      0 0 20px rgba(223, 183, 108, 0.12) !important;
          border-color: rgba(223, 183, 108, 0.45) !important;
        }

        @media (max-width: 768px) {
          .minimal-card :global(.product-info) {
            padding: 14px 12px;
          }

          .minimal-card :global(.product-name) {
            font-size: 0.95rem;
            margin-bottom: 4px;
          }

          .minimal-card :global(.product-desc) {
            font-size: 0.78rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            line-height: 1.35;
          }

          .minimal-card :global(.product-price) {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </Link>
  );
}
