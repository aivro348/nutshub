import FAQAccordion from "@/components/FAQAccordion";
import PageHeroHeader from "@/components/PageHeroHeader";

export const metadata = {
  title: "Frequently Asked Questions | NutsHub Support",
  description: "Find answers about NutsHub dry fruits quality, vacuum packaging, same-day delivery in Bangalore, and bulk gifting."
};

export default function FAQPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--surface-950)", color: "var(--color-text)" }}>
      {/* LUXURY HERO HEADER BANNER */}
      <PageHeroHeader
        breadcrumb="HOME / FAQ"
        subtitle="HELP CENTER & ANSWERS"
        title="Frequently Asked Questions"
        bgImage="/images/hero_products.png"
      />

      {/* ACCORDION CONTAINER */}
      <section style={{ maxWidth: "850px", margin: "60px auto 80px", padding: "0 20px" }}>
        <div style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "40px"
        }}>
          <button style={{ padding: "8px 20px", borderRadius: "999px", background: "#dfb76c", color: "#000", border: "none", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" }}>All FAQs</button>
          <button style={{ padding: "8px 20px", borderRadius: "999px", background: "rgba(18, 12, 6, 0.8)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(223, 183, 108, 0.3)", fontWeight: 600, fontSize: "0.85rem" }}>Orders & Delivery</button>
          <button style={{ padding: "8px 20px", borderRadius: "999px", background: "rgba(18, 12, 6, 0.8)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(223, 183, 108, 0.3)", fontWeight: 600, fontSize: "0.85rem" }}>Storage & Quality</button>
          <button style={{ padding: "8px 20px", borderRadius: "999px", background: "rgba(18, 12, 6, 0.8)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(223, 183, 108, 0.3)", fontWeight: 600, fontSize: "0.85rem" }}>Gifting & Bulk</button>
        </div>

        <FAQAccordion />
      </section>

      {/* ADDITIONAL HELP */}
      <section style={{
        maxWidth: "850px",
        margin: "0 auto 80px",
        padding: "40px",
        background: "rgba(18, 12, 6, 0.85)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(223, 183, 108, 0.35)",
        borderRadius: "var(--radius-lg)",
        textAlign: "center"
      }}>
        <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#fff", fontFamily: "var(--font-display)" }}>Still have questions?</h4>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", marginBottom: "24px" }}>
          We&apos;re here to help you choose the best dry fruits or coordinate bulk festival gifting orders.
        </p>
        <a 
          href="/contact" 
          className="btn-primary" 
          style={{
            padding: "12px 32px",
            textDecoration: "none",
            display: "inline-block",
            borderRadius: "999px"
          }}
        >
          Contact Our Store 💬
        </a>
      </section>
    </main>
  );
}