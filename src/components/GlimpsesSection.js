"use client";

export default function GlimpsesSection() {
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

  return (
    <section className="section" id="glimpses" style={{ padding: "90px 20px", background: "transparent" }}>
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
          <div key={idx} className="glimpse-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "2.8rem" }}>{feature.icon}</span>
              <span style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "#dfb76c",
                background: "rgba(223, 183, 108, 0.12)",
                border: "1px solid rgba(223, 183, 108, 0.3)",
                padding: "4px 12px",
                borderRadius: "999px"
              }}>
                {feature.badge}
              </span>
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px", color: "#fff" }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: "1.65", color: "rgba(255,255,255,0.75)", margin: 0 }}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .glimpse-card {
          background: rgba(18, 12, 6, 0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(223, 183, 108, 0.25);
          border-radius: var(--radius-lg);
          padding: 28px;
          transition: all 0.35s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .glimpse-card:hover {
          transform: translateY(-6px);
          border-color: rgba(223, 183, 108, 0.7);
          box-shadow: 0 20px 45px rgba(223, 183, 108, 0.15);
        }
      `}</style>
    </section>
  );
}
