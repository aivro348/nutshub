import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import PageHeroHeader from "@/components/PageHeroHeader";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Premium Dry Fruits Products | NutsHub Bangalore",
  description: "Explore 100+ jumbo almonds, W180 cashews, Iranian pistachios, Medjool dates, organic seeds, and exotic dried fruits at NutsHub."
};

export default function ProductsPage() {
  const highlights = [
    { icon: "🌰", title: "Grade-A Jumbo Selection", desc: "Handpicked kernel sizes including W180 Cashews & Mamra Almonds." },
    { icon: "🌿", title: "100% Sun-Dried", desc: "No artificial glazes, sulfites, or chemical preservatives." },
    { icon: "📦", title: "Nitrogen Flush Sealed", desc: "Locked crispness, natural oil retention & 12 months shelf life." },
    { icon: "🚚", title: "Same-Day Bangalore Delivery", desc: "Rapid doorstep dispatch across Koramangala & Panathur." },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--surface-950)", color: "var(--color-text)" }}>
      {/* LUXURY HERO HEADER BANNER */}
      <PageHeroHeader
        breadcrumb="HOME / PRODUCTS"
        subtitle="OUR FULL GOURMET COLLECTION"
        title="Premium Dry Fruits & Nuts"
        bgImage="/images/hero_products.png"
        showFloatingImages={true}
      />

      {/* HIGHLIGHT QUALITY PILLARS */}
      <section style={{ maxWidth: "1250px", margin: "40px auto 20px", padding: "0 20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px"
        }}>
          {highlights.map((h, i) => (
            <div key={i} style={{
              background: "rgba(18, 12, 6, 0.75)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(223, 183, 108, 0.25)",
              borderRadius: "var(--radius-lg)",
              padding: "24px 20px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
            }}>
              <span style={{ fontSize: "2.2rem" }}>{h.icon}</span>
              <div>
                <h4 style={{ fontSize: "0.98rem", color: "#fff", margin: "0 0 4px", fontWeight: 700 }}>{h.title}</h4>
                <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.4 }}>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN PRODUCTS GRID */}
      <section className="section" id="products" style={{ padding: "40px 20px 80px" }}>
        <ProductGrid products={PRODUCTS} />
      </section>

      {/* GIFT BOX PROMO CTA */}
      <section style={{ maxWidth: "1200px", margin: "0 auto 80px", padding: "0 20px" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(18, 12, 6, 0.9), rgba(30, 20, 10, 0.85))",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(223, 183, 108, 0.4)",
          borderRadius: "var(--radius-lg)",
          padding: "50px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        }}>
          <div style={{ maxWidth: "600px" }}>
            <span style={{ color: "#dfb76c", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
              LOOKING FOR FESTIVE & CORPORATE GIFTING?
            </span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "#fff", margin: "10px 0 15px", lineHeight: 1.2 }}>
              Build Your Custom Dry Fruit Gift Box
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
              Select custom compartments (2x2, 2x3, or 3x3 grid), choose your dry fruit mix, and calculate pricing with direct WhatsApp ordering.
            </p>
          </div>
          <Link href="/gift-box" className="btn-primary" style={{ padding: "16px 36px", fontSize: "0.95rem", borderRadius: "999px", whiteSpace: "nowrap" }}>
            Build Custom Box 🎁
          </Link>
        </div>
      </section>
    </main>
  );
}