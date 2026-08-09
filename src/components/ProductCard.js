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
      className="product-card"
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'block'
      }}
      aria-label={`View ${product.name} details`}
    >
      <article
        style={{
          transition: 'none',
          transform: 'none',
          animation: 'none'
        }}
      >
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
            <span
              className="product-btn"
              style={{ transition: 'none' }}
            >
              +
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
