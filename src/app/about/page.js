"use client";

import PageHeroHeader from "@/components/PageHeroHeader";

const STORES = [
  {
    id: "panathur",
    name: "Panathur Flagship Store",
    badge: "Branch 1 • Flagship Showroom",
    image: "/images/store_panathur.png",
    address: "Vaswani Reserve 84/2, Panathur Main Road, Kadubeesanahalli, Bengaluru, Karnataka 560103",
    gstin: "29CPCPD3888Q1Z2",
    timings: "10:00 AM - 10:00 PM (Mon-Sun)",
    desc: "Our spacious Panathur flagship showroom features a wide display of jumbo almonds, W180 cashews, Medjool dates, organic seeds, and customized festive gift boxes.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Vaswani+Reserve+84%2F2+Panathur+Main+Road+Kadubeesanahalli+Bengaluru+560103"
  },
  {
    id: "koramangala",
    name: "Koramangala Branch",
    badge: "Branch 2 • S.T. Bed Outlet",
    image: "/images/store_koramangala.png",
    address: "36/1, 1st Main Rd, below Seva In Action, S.T. Bed, 4th Block, Koramangala, Bengaluru, Karnataka 560034",
    gstin: "29CPCPD3888Q1Z2",
    timings: "10:00 AM - 10:00 PM (Mon-Sun)",
    desc: "Conveniently located in S.T. Bed Koramangala 4th Block, offering fresh handpicked nuts, healthy snacks, spices, dates, imported chocolates, and rapid local delivery.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=36%2F1+1st+Main+Rd+below+seva+in+action+ST+Bed+4th+Block+Koramangala+Bengaluru+560034"
  }
];

export default function AboutPage() {
  const pillars = [
    {
      icon: "🌱",
      title: "Direct Orchard Sourcing",
      desc: "We source directly from premium global orchards in Kashmir, Iran, California, and Afghanistan to ensure natural, unadulterated purity."
    },
    {
      icon: "🔬",
      title: "Grade-A Quality Inspection",
      desc: "Every batch undergoes rigorous quality inspection for kernel diameter size, moisture level, oil retention, and crunch before packaging."
    },
    {
      icon: "📦",
      title: "Nitrogen Sealed Freshness",
      desc: "State-of-the-art nitrogen-flush vacuum sealing keeps natural oils intact, ensuring fresh taste, crunchiness, and long shelf life up to 12 months."
    }
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--surface-950)", color: "var(--color-text)" }}>
      {/* LUXURY HERO HEADER BANNER */}
      <PageHeroHeader
        breadcrumb="HOME / ABOUT"
        subtitle="OUR HERITAGE & VISION"
        title="House of Dry Fruits"
        bgImage="/images/hero_products.png"
        showFloatingImages={true}
      />

      {/* STORY SUBSECTION */}
      <section style={{ maxWidth: "880px", margin: "50px auto 40px", padding: "0 20px", textAlign: "center", fontSize: "1.1rem", lineHeight: "1.8", color: "rgba(255,255,255,0.85)" }}>
        <p style={{ marginBottom: "20px" }}>
          Established in Bangalore, <strong>NutsHub</strong> brings you the world&apos;s finest grade-A dry fruits, nuts, exotic dates, berries, and gourmet spices. Our commitment to purity ensures that every single bite delivers crunch, natural flavor, and rich health benefits.
        </p>
        <p style={{ margin: 0 }}>
          What started as a local retail vision has quickly grown into Bangalore&apos;s trusted brand for health-conscious families, festive gifting, and corporate celebrations.
        </p>
      </section>

      {/* 🏬 OUR 2 OFFICIAL STORE BRANCHES — SIDE-BY-SIDE SIDE-BAR LAYOUT */}
      <section style={{ maxWidth: "1250px", margin: "60px auto 80px", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <p style={{ color: "#dfb76c", textTransform: "uppercase", letterSpacing: "2.5px", fontSize: "0.85rem", fontWeight: 700, margin: "0 0 6px" }}>
            VISIT OUR PHYSICAL STORES IN BANGALORE
          </p>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "#fff", margin: 0 }}>
            Our 2 Retail Branches
          </h3>
          <div className="gold-line" aria-hidden="true" style={{ margin: "1rem auto", width: "60px", height: "3px", backgroundColor: "var(--color-accent)" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "45px" }}>
          {STORES.map((store) => (
            <div key={store.id} className="store-row-card">
              {/* LEFT COLUMN: HIGH-CLARITY STORE PHOTO */}
              <div className="store-image-col">
                <span className="store-badge-pill">{store.badge}</span>
                <img
                  src={store.image}
                  alt={`${store.name} - NutsHub`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.04)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>

              {/* RIGHT COLUMN: STORE DETAILS & ADDRESS */}
              <div className="store-info-col">
                <div>
                  <h4 style={{ fontSize: "1.7rem", color: "#fff", fontWeight: 800, margin: "0 0 16px", fontFamily: "var(--font-display)" }}>
                    {store.name}
                  </h4>
                  
                  <div style={{
                    background: "rgba(223, 183, 108, 0.08)",
                    borderLeft: "4px solid #dfb76c",
                    padding: "16px 20px",
                    borderRadius: "0 12px 12px 0",
                    marginBottom: "20px"
                  }}>
                    <p style={{ color: "#fff", fontSize: "0.98rem", lineHeight: "1.6", margin: "0 0 8px", fontWeight: 600 }}>
                      📍 Address: <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.9)" }}>{store.address}</span>
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", margin: "0 0 6px" }}>
                      🕒 Timings: <span style={{ color: "#dfb76c", fontWeight: 700 }}>{store.timings}</span>
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", margin: 0 }}>
                      📜 GSTIN: <span style={{ color: "#dfb76c", fontWeight: 700 }}>{store.gstin}</span>
                    </p>
                  </div>

                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.7, margin: "0 0 25px" }}>
                    {store.desc}
                  </p>
                </div>

                <a
                  href={store.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    borderRadius: "999px",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    width: "fit-content"
                  }}
                >
                  Get Directions on Google Maps ➔
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUE PILLARS */}
      <section style={{ maxWidth: "1200px", margin: "0 auto 80px", padding: "0 20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px"
        }}>
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card-item">
              <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{pillar.icon}</div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "var(--color-accent)", fontWeight: 700 }}>{pillar.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: "1.65", margin: 0 }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED STORY */}
      <section style={{
        maxWidth: "950px",
        margin: "0 auto 80px",
        padding: "45px",
        background: "rgba(18, 12, 6, 0.85)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(223, 183, 108, 0.35)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
      }}>
        <h3 style={{ fontSize: "1.9rem", color: "#fff", marginBottom: "20px", textAlign: "center", fontFamily: "var(--font-display)" }}>
          Why Choose NutsHub?
        </h3>
        <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.8", fontSize: "1.05rem", marginBottom: "20px" }}>
          In today&apos;s fast-paced world, finding healthy snacks that aren&apos;t loaded with sugar, preservatives, or artificial glazes is a challenge. NutsHub was founded on a simple principle: <strong>Good health begins with pure, unadulterated food</strong>.
        </p>
        <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.8", fontSize: "1.05rem", margin: 0 }}>
          We believe that dry fruits, seeds, and spices are nature&apos;s treasure trove of nutrients. By keeping our processing minimal and our sourcing direct, we bring you snacks that satisfy hunger and fuel your body with vitamins, proteins, and essential minerals in their most organic form.
        </p>
      </section>

      <style jsx>{`
        .store-row-card {
          background: rgba(18, 12, 6, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(223, 183, 108, 0.35);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          display: flex;
          align-items: stretch;
          min-height: 380px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .store-row-card:hover {
          transform: translateY(-6px);
          border-color: rgba(223, 183, 108, 0.6);
          box-shadow: 0 25px 60px rgba(0,0,0,0.6), 0 0 30px rgba(223, 183, 108, 0.15);
        }

        .store-image-col {
          position: relative;
          flex: 0 0 45%;
          min-height: 380px;
          overflow: hidden;
          border-right: 1px solid rgba(223, 183, 108, 0.25);
        }

        .store-badge-pill {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 5;
          background: rgba(13, 9, 5, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid #dfb76c;
          color: #dfb76c;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: 999px;
          letter-spacing: 1.5px;
        }

        .store-info-col {
          padding: 35px 40px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .pillar-card-item {
          background: rgba(18, 12, 6, 0.75);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(223, 183, 108, 0.25);
          border-radius: var(--radius-lg);
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pillar-card-item:hover {
          transform: translateY(-6px);
          border-color: rgba(223, 183, 108, 0.6);
          box-shadow: 0 20px 45px rgba(0,0,0,0.4), 0 0 20px rgba(223, 183, 108, 0.1);
        }

        @media (max-width: 850px) {
          .store-row-card {
            flex-direction: column;
          }

          .store-image-col {
            flex: 0 0 auto;
            height: 260px;
            min-height: 260px;
            border-right: none;
            border-bottom: 1px solid rgba(223, 183, 108, 0.25);
          }

          .store-info-col {
            padding: 25px 20px;
          }

          .store-info-col a {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </main>
  );
}