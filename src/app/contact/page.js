import ContactForm from "@/components/ContactForm";
import PageHeroHeader from "@/components/PageHeroHeader";

export const metadata = {
  title: "Contact Us & Store Locations | NutsHub Bangalore",
  description: "Visit NutsHub at our Koramangala and Panathur branches in Bangalore, or contact us for home delivery & custom gift box orders."
};

const BRANCHES = [
  {
    name: "Koramangala Branch",
    tag: "Branch 1",
    address: "36/1, 1st Main Rd, below Seva In Action, S.T. Bed, 4th Block, Koramangala, Bengaluru, Karnataka 560034",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=36%2F1+1st+Main+Rd+below+seva+in+action+ST+Bed+4th+Block+Koramangala+Bengaluru+560034"
  },
  {
    name: "Panathur / Kadubeesanahalli Branch",
    tag: "Branch 2",
    address: "Vaswani Reserve 84/2, Panathur Main Road, Kadubeesanahalli, Bengaluru, Karnataka 560103",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Vaswani+Reserve+84%2F2+Panathur+Main+Road+Kadubeesanahalli+Bengaluru+560103"
  }
];

export default function ContactPage() {
  const contactDetails = [
    {
      icon: "📞",
      title: "Phone & WhatsApp",
      lines: ["+91 94805 17939", "Fast doorstep delivery across Bangalore"]
    },
    {
      icon: "✉️",
      title: "Email Support",
      lines: ["hello@nutshub.online", "corporate@nutshub.online"]
    },
    {
      icon: "🕒",
      title: "Store Timings",
      lines: ["Monday - Sunday", "10:00 AM - 10:00 PM"]
    },
    {
      icon: "🚚",
      title: "Delivery Options",
      lines: ["Same-Day Delivery in Bangalore", "Pan-India Shipping Available"]
    }
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--surface-950)", color: "var(--color-text)" }}>
      {/* LUXURY HERO HEADER BANNER */}
      <PageHeroHeader
        breadcrumb="HOME / CONTACT"
        subtitle="GET IN TOUCH"
        title="Visit Our Stores in Bangalore"
        bgImage="/images/hero_products.png"
      />

      {/* STORE BRANCHES GRID */}
      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <h3 style={{ fontSize: "1.7rem", color: "#dfb76c", marginBottom: "25px", textAlign: "center", fontWeight: 700, fontFamily: "var(--font-display)" }}>
          🏬 Our 2 Official Store Branches
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "25px" }}>
          {BRANCHES.map((branch, idx) => (
            <div key={idx} style={{
              background: "rgba(18, 12, 6, 0.85)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(223, 183, 108, 0.35)",
              borderRadius: "var(--radius-lg)",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            }}>
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "#dfb76c", background: "rgba(223, 183, 108, 0.12)", border: "1px solid rgba(223, 183, 108, 0.3)", padding: "4px 14px", borderRadius: "999px" }}>
                  {branch.tag}
                </span>
                <h4 style={{ fontSize: "1.35rem", color: "#fff", margin: "14px 0 10px", fontWeight: 700 }}>
                  {branch.name}
                </h4>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: "1.6", margin: "0 0 20px" }}>
                  📍 {branch.address}
                </p>
              </div>
              <a
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: "12px 24px",
                  fontSize: "0.88rem",
                  borderRadius: "999px",
                  textDecoration: "none",
                  textAlign: "center"
                }}
              >
                Get Google Maps Directions ➔
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT DETAILS & FORM GRID */}
      <section style={{ maxWidth: "1200px", margin: "0 auto 80px", padding: "0 20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px"
        }}>
          {/* LEFT: Details cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {contactDetails.map((detail, idx) => (
              <div key={idx} style={{
                background: "rgba(18, 12, 6, 0.85)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(223, 183, 108, 0.3)",
                borderRadius: "var(--radius-lg)",
                padding: "25px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
              }}>
                <div style={{ fontSize: "1.8rem" }}>{detail.icon}</div>
                <h3 style={{ fontSize: "1.1rem", color: "#dfb76c", margin: 0, fontWeight: 700 }}>{detail.title}</h3>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                  {detail.lines.map((line, lidx) => <p key={lidx} style={{ margin: 0 }}>{line}</p>)}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Contact form */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}