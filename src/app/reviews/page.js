import TestimonialCarousel from "@/components/TestimonialCarousel";
import PageHeroHeader from "@/components/PageHeroHeader";

export const metadata = {
  title: "Customer Reviews & Testimonials | NutsHub Bangalore",
  description: "Read 5,000+ verified customer reviews for NutsHub dry fruits, jumbo cashews, Mamra almonds, and same-day delivery in Bangalore."
};

export default function ReviewsPage() {
  const stats = [
    { value: "4.9★", label: "Average Rating" },
    { value: "5,000+", label: "Happy Customers" },
    { value: "98%", label: "Repeat Orders" },
    { value: "100%", label: "Freshness Guaranteed" }
  ];

  const reviewGrid = [
    {
      stars: "★★★★★",
      quote: "The quality of almonds and cashews from NutsHub is unmatched. They are always fresh, crunchy, and full of flavour. My go-to store for all dry fruits now!",
      author: "Priya Sharma",
      role: "Panathur, Bangalore",
      verified: true
    },
    {
      stars: "★★★★★",
      quote: "Absolutely blown away by the size of the W180 Cashews. They are huge, buttery, and clean. Unlike normal supermarkets, there are no broken parts.",
      author: "Vikram Mehta",
      role: "Koramangala, Bangalore",
      verified: true
    },
    {
      stars: "★★★★★",
      quote: "The Mamra almonds are fantastic! High oil contents are visible when you soak them. Highly recommend for kids' morning diet.",
      author: "Meenakshi Iyer",
      role: "Indiranagar, Bangalore",
      verified: true
    },
    {
      stars: "★★★★★",
      quote: "Excellent packaging! Saffawi dates arrived fresh and chewy. The custom gift box builder made my corporate gifts process incredibly easy.",
      author: "Sanjay Sen",
      role: "Whitefield, Bangalore",
      verified: true
    },
    {
      stars: "★★★★★",
      quote: "Very nice dry fruits. The Pista Iran shell ones are nicely roasted and salted. Fast doorstep delivery inside Bangalore.",
      author: "Rohan Das",
      role: "Bellandur, Bangalore",
      verified: true
    },
    {
      stars: "★★★★★",
      quote: "Been buying pumpkin and flax seeds here for months. Clean, plain, and perfect for health shakes.",
      author: "Dr. K. Srinivas",
      role: "HSR Layout, Bangalore",
      verified: true
    }
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--surface-950)", color: "var(--color-text)" }}>
      {/* LUXURY HERO HEADER BANNER */}
      <PageHeroHeader
        breadcrumb="HOME / REVIEWS"
        subtitle="CUSTOMER STORIES"
        title="Loved Across Bangalore"
        bgImage="/images/hero_products.png"
      />

      {/* STATS COUNT */}
      <section style={{ maxWidth: "1000px", margin: "60px auto 40px", padding: "0 20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
          textAlign: "center"
        }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{
              background: "rgba(18, 12, 6, 0.85)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(223, 183, 108, 0.3)",
              borderRadius: "var(--radius-md)",
              padding: "24px 20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
            }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#dfb76c", marginBottom: "4px" }}>{stat.value}</div>
              <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CAROUSEL */}
      <section style={{ maxWidth: "850px", margin: "60px auto 80px", padding: "0 20px" }}>
        <h3 style={{ fontSize: "1.9rem", textAlign: "center", marginBottom: "30px", color: "#dfb76c", fontFamily: "var(--font-display)" }}>
          Featured Customer Stories
        </h3>
        <TestimonialCarousel />
      </section>

      {/* REVIEW GRID */}
      <section style={{ maxWidth: "1250px", margin: "0 auto 80px", padding: "0 20px" }}>
        <h3 style={{ fontSize: "1.9rem", textAlign: "center", marginBottom: "40px", fontFamily: "var(--font-display)", color: "#fff" }}>
          Verified Customer Ratings
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px"
        }}>
          {reviewGrid.map((review, idx) => (
            <div key={idx} style={{
              background: "rgba(18, 12, 6, 0.85)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(223, 183, 108, 0.35)",
              borderRadius: "var(--radius-lg)",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 15px 40px rgba(0,0,0,0.4)"
            }}>
              <div>
                <div style={{ color: "#dfb76c", fontSize: "1.1rem", marginBottom: "14px", letterSpacing: "2px" }}>{review.stars}</div>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.98rem", lineHeight: "1.65", fontStyle: "italic", marginBottom: "20px" }}>
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "15px" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "#fff" }}>{review.author}</div>
                  <div style={{ fontSize: "0.8rem", color: "#dfb76c" }}>{review.role}</div>
                </div>
                {review.verified && (
                  <span style={{ fontSize: "0.72rem", background: "rgba(223, 183, 108, 0.12)", border: "1px solid rgba(223, 183, 108, 0.3)", color: "#dfb76c", padding: "4px 10px", borderRadius: "999px", fontWeight: 700 }}>
                    ✓ Verified Buyer
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}