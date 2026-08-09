"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import ProductVisual from "./ProductVisual";

export default function ProductCard({ product }) {
  const cardRef = useRef(null);
  const shineRef = useRef(null);

  const badgeMap = {
    premium: <span className="product-badge badge-premium">Premium</span>,
    organic: <span className="product-badge badge-organic">Organic</span>,
    bestseller: <span className="product-badge badge-bestseller">Bestseller</span>
  };

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    const shine = shineRef.current;
    if (!card || !shine) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // 3D tilt (max ±8 degrees)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;

    // Move shine overlay
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;
    shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
    shine.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const shine = shineRef.current;
    if (card) card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
    if (shine) shine.style.opacity = "0";
  }, []);

  return (
    <Link
      href={`/products/${product.id}`}
      className="product-card product-card-3d"
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      aria-label={`View ${product.name} details`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <article>
        {/* Glare shine overlay */}
        <div ref={shineRef} className="card-shine-3d" />

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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </div>
        </div>
      </article>

      <style jsx>{`
        .product-card-3d {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s ease,
                      border-color 0.4s ease !important;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .product-card-3d:hover {
          box-shadow: 0 30px 60px rgba(0,0,0,0.6),
                      0 0 40px rgba(223, 183, 108, 0.12) !important;
          border-color: rgba(223, 183, 108, 0.5) !important;
        }

        .card-shine-3d {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          mix-blend-mode: overlay;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
        }
      `}</style>
    </Link>
  );
}
