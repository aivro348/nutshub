"use client";

import { useState } from "react";

export default function ProductVisual({ product, width = "100%", height = "100%", zoomable = true }) {
  const [zoomState, setZoomState] = useState({ isZoomed: false, originX: 50, originY: 50 });

  const src = product?.image 
    ? (product.image.startsWith("/") ? product.image : `/${product.image}`) 
    : "/images/almonds.png";

  const handleMouseMove = (e) => {
    if (!zoomable) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomState({ isZoomed: true, originX: x, originY: y });
  };

  const handleMouseLeave = () => {
    setZoomState({ isZoomed: false, originX: 50, originY: 50 });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setZoomState(prev => ({ ...prev, isZoomed: true }))}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        cursor: zoomable ? 'zoom-in' : 'default',
        borderRadius: 'inherit'
      }}
    >
      <img 
        src={src} 
        alt={product?.name || "NutsHub Dry Fruit"} 
        loading="lazy" 
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transformOrigin: `${zoomState.originX}% ${zoomState.originY}%`,
          transform: zoomState.isZoomed ? 'scale(1.95)' : 'scale(1)',
          transition: zoomState.isZoomed ? 'transform 0.1s ease-out' : 'transform 0.4s ease-in-out'
        }}
      />
      {zoomable && zoomState.isZoomed && (
        <span style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          background: 'rgba(13, 9, 5, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(223, 183, 108, 0.5)',
          color: '#dfb76c',
          padding: '4px 10px',
          borderRadius: '999px',
          fontSize: '0.72rem',
          fontWeight: 700,
          pointerEvents: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          zIndex: 5
        }}>
          🔍 1.95x Zoomed
        </span>
      )}
    </div>
  );
}
