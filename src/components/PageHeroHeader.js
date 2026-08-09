"use client";

export default function PageHeroHeader({ 
  subtitle = "OUR COLLECTION", 
  title = "Premium Selections", 
  bgImage = "/images/hero_products.png",
  breadcrumb = "HOME / PRODUCTS"
}) {
  return (
    <section className="page-hero-header" style={{
      position: "relative",
      width: "100%",
      padding: "120px 20px 60px",
      minHeight: "340px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background: `linear-gradient(180deg, rgba(8, 5, 2, 0.65) 0%, rgba(5, 3, 2, 0.92) 100%), url('${bgImage}') center/cover no-repeat`,
      borderBottom: "1px solid rgba(223, 183, 108, 0.3)",
      boxSizing: "border-box",
      overflow: "hidden"
    }}>
      {/* BREADCRUMB & TAG */}
      <div style={{
        fontSize: "0.78rem",
        fontWeight: 700,
        color: "#dfb76c",
        letterSpacing: "3px",
        textTransform: "uppercase",
        marginBottom: "12px",
        background: "rgba(13, 9, 5, 0.65)",
        backdropFilter: "blur(8px)",
        padding: "6px 18px",
        borderRadius: "999px",
        border: "1px solid rgba(223, 183, 108, 0.3)",
        display: "inline-block"
      }}>
        {breadcrumb || subtitle}
      </div>

      {/* MAIN TITLE */}
      <h1 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
        fontWeight: 800,
        color: "#fff",
        margin: "8px 0 0",
        letterSpacing: "0.02em",
        lineHeight: 1.15
      }}>
        {title}
      </h1>

      {/* GOLD UNDERLINE ACCENT */}
      <div style={{
        width: "60px",
        height: "3px",
        background: "linear-gradient(90deg, #dfb76c 0%, #b88d3b 100%)",
        marginTop: "16px",
        borderRadius: "999px",
        boxShadow: "0 0 10px rgba(223, 183, 108, 0.5)"
      }} />
    </section>
  );
}
