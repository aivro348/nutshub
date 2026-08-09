"use client";

import { useEffect, useRef, useState } from "react";

export default function GlimpsesSection() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  const features = [
    {
      icon: "🌰",
      title: "Grade-A Jumbo Harvest",
      badge: "Handpicked",
      desc: "Each almond, cashew, and pistachio is sorted by kernel diameter (e.g. W180 Cashews, Mamra Almonds) ensuring maximum size, crunch, and rich natural oils."
    },
    {
      icon: "🌿",
      title: "100% Sun-Dried & Organic",
      badge: "Pure Origin",
      desc: "Sourced directly from authentic global orchards in Kashmir, Iran, and California. Zero artificial glazes, sulfites, or chemical preservatives."
    },
    {
      icon: "✨",
      title: "Nitrogen Flush Vacuum Pack",
      badge: "Fresh Locked",
      desc: "Triple-layer nitrogen sealed packaging prevents oxidation, maintaining optimum crispness, moisture control, and extended shelf life up to 12 months."
    },
    {
      icon: "🎁",
      title: "Customized Wooden Gift Boxes",
      badge: "Artisan Gifting",
      desc: "Crafted 2x2, 2x3, and 3x3 grid compartment boxes designed for festive celebrations, wedding favors, and luxury corporate gifting."
    },
    {
      icon: "❤️",
      title: "Scientific Health & Immunity",
      badge: "Nutrient Dense",
      desc: "Packed with essential Omega-3 fatty acids, plant-based protein, dietary fiber, magnesium, and antioxidants for heart health, memory, and energy."
    },
    {
      icon: "🚚",
      title: "Express Doorstep Delivery",
      badge: "Same-Day Bangalore",
      desc: "Fast doorstep delivery across Koramangala, Panathur, Kadubeesanahalli, and Bangalore urban areas, plus pan-India tracked courier shipping."
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = section.querySelectorAll(".glimpse-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="glimpses" style={{ padding: "90px 20px", background: "transparent" }} ref={sectionRef}>
      <div className="section-header" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p className="section-label" style={{ color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "3px", fontSize: "0.85rem", fontWeight: 700 }}>
          The NutsHub Quality Standard
        </p>
        <h2 className="section-title" style={{ fontSize: "2.8rem", marginTop: "0.5rem" }}>
          Purity, Nutrition & Artisan Craftsmanship
        </h2>
        <p style={{ maxWidth: "720px", margin: "12px auto 0", color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", lineHeight: 1.6 }}>
          Discover why thousands of households across Bangalore trust NutsHub for their daily health, festive gifting, and gourmet culinary needs.
        </p>
        <div className="gold-line" aria-hidden="true" style={{ margin: "1.2rem auto", width: "65px", height: "3px", backgroundColor: "var(--color-accent)" }} />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2.2rem",
        maxWidth: "1300px",
        margin: "0 auto"
      }}>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`glimpse-card ${visibleCards.has(String(idx)) ? 'revealed' : ''}`}
            data-idx={idx}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Card number */}
            <span className="card-number">0{idx + 1}</span>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span className="glimpse-icon">{feature.icon}</span>
              <span className="glimpse-badge">
                {feature.badge}
              </span>
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px", color: "#fff" }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: "1.65", color: "rgba(255,255,255,0.75)", margin: 0 }}>
              {feature.desc}
            </p>

            {/* Gold accent line at bottom */}
            <div className="glimpse-accent-line" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .glimpse-card {
          position: relative;
          background: rgba(18, 12, 6, 0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(223, 183, 108, 0.2);
          border-radius: var(--radius-lg);
          padding: 28px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          overflow: hidden;
          opacity: 0;
          translate: 0 40px;
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      translate 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s ease,
                      box-shadow 0.4s ease;
        }

        .glimpse-card.revealed {
          opacity: 1;
          translate: 0 0;
        }

        .glimpse-card:hover {
          transform: translateY(-8px);
          border-color: rgba(223, 183, 108, 0.6);
          box-shadow: 0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(223, 183, 108, 0.1);
        }

        .card-number {
          position: absolute;
          top: 16px;
          right: 20px;
          font-size: 3rem;
          font-weight: 900;
          color: rgba(223, 183, 108, 0.06);
          font-family: var(--font-display);
          line-height: 1;
          pointer-events: none;
          transition: color 0.4s ease;
        }

        .glimpse-card:hover .card-number {
          color: rgba(223, 183, 108, 0.12);
        }

        .glimpse-icon {
          font-size: 2.8rem;
          display: inline-block;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .glimpse-card:hover .glimpse-icon {
          transform: scale(1.2) rotate(-8deg);
        }

        .glimpse-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #dfb76c;
          background: rgba(223, 183, 108, 0.1);
          border: 1px solid rgba(223, 183, 108, 0.25);
          padding: 4px 12px;
          border-radius: 999px;
          transition: all 0.3s ease;
        }

        .glimpse-card:hover .glimpse-badge {
          background: rgba(223, 183, 108, 0.2);
          border-color: rgba(223, 183, 108, 0.5);
          box-shadow: 0 0 12px rgba(223, 183, 108, 0.15);
        }

        .glimpse-accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #b88d3b, #dfb76c, #f0d78c);
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glimpse-card:hover .glimpse-accent-line {
          width: 100%;
        }
      `}</style>
    </section>
  );
}
