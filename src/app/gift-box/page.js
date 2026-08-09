import GiftBoxBuilder from "@/components/GiftBoxBuilder";
import PageHeroHeader from "@/components/PageHeroHeader";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Customized Dry Fruit Gift Boxes | NutsHub Bangalore",
  description: "Build custom 2x2, 2x3, and 3x3 grid wooden dry fruit gift boxes for Diwali, weddings, and corporate gifting with instant WhatsApp ordering."
};

export default function GiftBoxPage() {
  const steps = [
    { num: "01", title: "Choose Box Size", desc: "Select 2x2 (4 slots), 2x3 (6 slots), or 3x3 (9 slots) wooden compartment layout." },
    { num: "02", title: "Pick Dry Fruit Mix", desc: "Fill slots with W180 Cashews, Mamra Almonds, Medjool Dates, Pista, or Kishmish." },
    { num: "03", title: "Instant WhatsApp Order", desc: "View real-time weight & price calculation, then submit order via WhatsApp in 1 click." },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--surface-950)", color: "var(--color-text)" }}>
      {/* LUXURY HERO HEADER BANNER */}
      <PageHeroHeader
        breadcrumb="HOME / GIFT BOX"
        subtitle="ARTISAN FESTIVE & CORPORATE GIFTING"
        title="Custom Gift Box Builder"
        bgImage="/images/hero_gift_box.png"
        showFloatingImages={true}
      />

      {/* 3 STEPS VISUAL GUIDE */}
      <section style={{ maxWidth: "1200px", margin: "40px auto 30px", padding: "0 20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{
              background: "rgba(18, 12, 6, 0.8)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(223, 183, 108, 0.3)",
              borderRadius: "var(--radius-lg)",
              padding: "30px 24px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            }}>
              <span style={{
                position: "absolute",
                top: "12px",
                right: "18px",
                fontSize: "2.8rem",
                fontWeight: 900,
                color: "rgba(223, 183, 108, 0.08)",
                fontFamily: "var(--font-display)"
              }}>{step.num}</span>
              <h4 style={{ fontSize: "1.2rem", color: "#dfb76c", margin: "0 0 10px", fontWeight: 700 }}>{step.title}</h4>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE BUILDER COMPONENT */}
      <section className="section" id="builder" style={{ padding: "30px 20px 80px" }}>
        <GiftBoxBuilder products={PRODUCTS} />
      </section>

      {/* CORPORATE BULK ASSISTANCE BANNER */}
      <section style={{ maxWidth: "1000px", margin: "0 auto 80px", padding: "0 20px" }}>
        <div style={{
          background: "rgba(18, 12, 6, 0.85)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(223, 183, 108, 0.35)",
          borderRadius: "var(--radius-lg)",
          padding: "45px",
          textAlign: "center",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        }}>
          <span style={{ fontSize: "3rem" }}>🎁</span>
          <h3 style={{ fontSize: "1.9rem", color: "#fff", margin: "16px 0 10px", fontFamily: "var(--font-display)" }}>
            Need 50+ Bulk Corporate Boxes?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: "1.7", maxWidth: "650px", margin: "0 auto 25px" }}>
            We provide custom logo branding, company message inserts, GST invoicing, and scheduled multi-address shipping across India.
          </p>
          <a
            href="https://wa.me/919901844007?text=Hi%20NutsHub!%20I%20need%20a%20quote%20for%20bulk%20corporate%20gift%20boxes."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "14px 36px", fontSize: "0.95rem", borderRadius: "999px" }}
          >
            WhatsApp Bulk Gifting Quote 💬
          </a>
        </div>
      </section>
    </main>
  );
}