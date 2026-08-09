import SnackQuiz from "@/components/SnackQuiz";
import InteractiveCashew from "@/components/InteractiveCashew";
import PageHeroHeader from "@/components/PageHeroHeader";

export const metadata = {
  title: "Why Choose Us | The NutsHub Difference",
  description: "Discover why NutsHub jumbo almonds, W180 cashews, and Kashmiri walnuts are rated Bangalore's best dry fruits store."
};

export default function WhyUsPage() {
  const comparisons = [
    {
      feature: "Sourcing & Origin",
      nutshub: "Direct import from select orchards in Kashmir, Iran, California & Afghanistan",
      others: "Mass wholesale channels, unverified origin mixed batches"
    },
    {
      feature: "Processing & Purity",
      nutshub: "100% natural sun-dried, zero chemical glazes or sulfur treatments",
      others: "Often sulfur-treated to artificially enhance color & shine"
    },
    {
      feature: "Crunch & Freshness",
      nutshub: "Triple-layer nitrogen sealed in small fresh batches",
      others: "Stored in open sacks for months before retail packaging"
    },
    {
      feature: "Kernel Size & Sorting",
      nutshub: "Strict Jumbo grading (e.g. W180 Cashews, Mamra Almonds)",
      others: "Mixed size grades, high percentage of broken pieces"
    }
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--surface-950)", color: "var(--color-text)" }}>
      {/* LUXURY HERO HEADER BANNER */}
      <PageHeroHeader
        breadcrumb="HOME / WHY US"
        subtitle="THE NUTSHUB STANDARD OF EXCELLENCE"
        title="The Premium Difference"
        bgImage="/images/hero_products.png"
        showFloatingImages={true}
      />

      {/* COMPARISON TABLE */}
      <section style={{ maxWidth: "1000px", margin: "60px auto 80px", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <p style={{ color: "#dfb76c", textTransform: "uppercase", letterSpacing: "2.5px", fontSize: "0.85rem", fontWeight: 700, margin: "0 0 6px" }}>
            UNCOMPROMISING QUALITY COMPARISON
          </p>
          <h3 style={{ fontSize: "2.2rem", color: "#fff", fontFamily: "var(--font-display)", margin: 0 }}>
            NutsHub vs. Standard Retailing
          </h3>
          <div className="gold-line" aria-hidden="true" style={{ margin: "1rem auto", width: "60px", height: "3px", backgroundColor: "var(--color-accent)" }} />
        </div>

        <div style={{
          overflowX: "auto",
          background: "rgba(18, 12, 6, 0.85)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(223, 183, 108, 0.35)",
          borderRadius: "var(--radius-lg)",
          padding: "24px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse", color: "var(--color-text-muted)" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(223, 183, 108, 0.4)", color: "#fff" }}>
                <th style={{ padding: "18px", textAlign: "left", fontSize: "1rem" }}>Feature</th>
                <th style={{ padding: "18px", textAlign: "left", color: "#dfb76c", fontSize: "1.05rem" }}>✨ NutsHub Standard</th>
                <th style={{ padding: "18px", textAlign: "left", fontSize: "1rem" }}>Supermarket Average</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", transition: "background 0.3s ease" }}>
                  <td style={{ padding: "18px", fontWeight: "700", color: "#fff" }}>{row.feature}</td>
                  <td style={{ padding: "18px", color: "#fff", fontWeight: 600, background: "rgba(223, 183, 108, 0.04)" }}>✓ {row.nutshub}</td>
                  <td style={{ padding: "18px", fontSize: "0.92rem", color: "rgba(255,255,255,0.6)" }}>✕ {row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* INTERACTIVE CASHEW SECTION */}
      <section style={{
        maxWidth: "1000px",
        margin: "0 auto 80px",
        padding: "45px",
        background: "rgba(18, 12, 6, 0.85)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(223, 183, 108, 0.35)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h3 style={{ fontSize: "1.9rem", color: "#dfb76c", marginBottom: "10px", fontFamily: "var(--font-display)" }}>
            Interactive Cashew Anatomy Guide
          </h3>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem" }}>
            Hover or tap to dissect the kernel structure and health values of a premium cashew.
          </p>
        </div>
        <InteractiveCashew />
      </section>

      {/* SNACK QUIZ */}
      <section style={{
        maxWidth: "1000px",
        margin: "0 auto 80px",
        padding: "45px",
        background: "rgba(18, 12, 6, 0.85)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(223, 183, 108, 0.35)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h3 style={{ fontSize: "1.9rem", color: "#dfb76c", marginBottom: "10px", fontFamily: "var(--font-display)" }}>
            Personalized Snack Finder Quiz
          </h3>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem" }}>
            Answer 3 quick questions to discover your ideal daily dry fruit or nut snack.
          </p>
        </div>
        <SnackQuiz />
      </section>
    </main>
  );
}