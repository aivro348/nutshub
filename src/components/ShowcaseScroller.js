"use client";

export default function ShowcaseScroller({ products }) {
  return (
    <div className="showcase-scroller" id="showcaseScroller" role="region" aria-label="Product gallery" tabIndex={0}>
      {products.map((p) => (
        <div key={p.id} className="showcase-item" role="img" aria-label={p.name}>
          <img src={p.image} alt={p.name} loading="lazy" />
          <div className="showcase-label">
            <h4>{p.name}</h4>
            <p>{p.price} / {p.unit}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
