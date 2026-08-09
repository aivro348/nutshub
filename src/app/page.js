"use client";

import Link from "next/link";
import ScrollSequence from "@/components/ScrollSequence";
import GlimpsesSection from "@/components/GlimpsesSection";
import ProductGrid from "@/components/ProductGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import ContactSection from "@/components/ContactSection";
import { PRODUCTS } from "@/data/products";

export default function Home() {
  return (
    <main id="home" style={{ minHeight: "100vh", background: "transparent", color: "var(--color-text)" }}>
      {/* 3D CANVAS SCROLL BACKGROUND ENGINE */}
      <ScrollSequence />

      {/* LUXURY HERO HUD OVERLAY */}
      <section className="hero-section">
        {/* GOLDEN LIGHT RAYS FROM TOP */}
        <div className="hero-light-rays" aria-hidden="true" />

        {/* FLOATING PRODUCT IMAGES — CORNER PARALLAX DRIFTS */}
        <img src="/images/strawberry_dry.png" alt="" className="hero-float-img float-1" aria-hidden="true" loading="eager" fetchPriority="high" decoding="async" />
        <img src="/images/cashews.png" alt="" className="hero-float-img float-2" aria-hidden="true" loading="eager" fetchPriority="high" decoding="async" />
        <img src="/images/dates.png" alt="" className="hero-float-img float-3" aria-hidden="true" loading="eager" fetchPriority="high" decoding="async" />
        <img src="/images/almonds.png" alt="" className="hero-float-img float-4" aria-hidden="true" loading="eager" fetchPriority="high" decoding="async" />
        <img src="/images/pistachios.png" alt="" className="hero-float-img float-5" aria-hidden="true" loading="eager" fetchPriority="high" decoding="async" />

        {/* TOP GLOW BADGE */}
        <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
          <div className="hero-top-badge">
            <span className="badge-dot" />
            <span>THE NUTSHUB STANDARD • PANATHUR & KORAMANGALA</span>
          </div>
        </div>

        {/* HERO TAGLINE */}
        <div className="hero-center-text">
          <h1 className="hero-main-title">
            Premium <span className="gold-shimmer">Dry Fruits</span> & Nuts
          </h1>
          <p className="hero-tagline">Handpicked from world-class orchards · Delivered fresh to your doorstep</p>
        </div>

        {/* BOTTOM HERO HUD CONTROLS & SCROLL PROMPT */}
        <div className="hero-hud-container">
          {/* LEFT FEATURE CARD */}
          <div className="hero-left-card">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <span style={{ fontSize: "1.3rem" }}>✨</span>
              <h4 style={{ margin: 0, fontSize: "0.95rem", color: "#fff", fontWeight: 700 }}>100% Sun-Dried</h4>
            </div>
            <p style={{ margin: 0, fontSize: "0.82rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
              Handpicked grade-A almonds, cashews & organic dates packaged for optimum crunch.
            </p>
          </div>

          {/* CENTER SCROLL PROMPT */}
          <div className="hero-scroll-prompt">
            <span style={{ fontSize: "0.72rem", letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>
              SCROLL TO EXPLORE
            </span>
            <div className="scroll-arrow-pulse">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dfb76c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
          </div>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hero-right-actions">
            <Link href="/products" className="btn-primary hero-btn-shop">
              Shop All Products ➔
            </Link>
            <Link href="/gift-box" className="hero-btn-gift">
              Custom Gift Boxes 🎁
            </Link>
          </div>
        </div>
      </section>

      {/* LUXURY GOLD MARQUEE TICKER */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          <span>👑 W180 JUMBO CASHEWS</span>
          <span>•</span>
          <span>🌰 LUXURY MAMRA ALMONDS</span>
          <span>•</span>
          <span>🍇 GOLDEN KISHMISH</span>
          <span>•</span>
          <span>🌴 MEDJOOL DATES</span>
          <span>•</span>
          <span>🌟 IRANIAN PISTA</span>
          <span>•</span>
          <span>🎁 CUSTOM GIFT BOXES</span>
          <span>•</span>
          <span>🌱 ORGANIC SEEDS</span>
          <span>•</span>
          <span>👑 W180 JUMBO CASHEWS</span>
          <span>•</span>
          <span>🌰 LUXURY MAMRA ALMONDS</span>
          <span>•</span>
          <span>🍇 GOLDEN KISHMISH</span>
        </div>
      </div>

      {/* GLIMPSES / WHAT WE DO */}
      <GlimpsesSection />

      {/* FEATURED PRODUCTS SECTION */}
      <section className="section" id="products" style={{ padding: "80px 20px", background: "transparent" }}>
        <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
          <p className="section-label" style={{ color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "3px", fontSize: "0.85rem", fontWeight: 700 }}>
            Handpicked Bestsellers
          </p>
          <h2 className="section-title" style={{ fontSize: "2.8rem", marginTop: "0.5rem" }}>
            Our Premium Collection
          </h2>
          <div className="gold-line" aria-hidden="true" style={{ margin: "1rem auto", width: "60px", height: "3px", backgroundColor: "var(--color-accent)" }} />
        </div>

        {/* PRODUCT GRID */}
        <ProductGrid products={PRODUCTS} />
        
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/products" className="btn-primary" style={{ padding: "1.1rem 3.5rem", borderRadius: "999px", fontSize: "1rem" }}>
            View Full 100+ Products Collection ➔
          </Link>
        </div>
      </section>

      {/* GIFT BOX PROMOTIONAL BANNER */}
      <section id="gift-box" style={{
        maxWidth: "1200px",
        margin: "40px auto 80px",
        padding: "0 20px"
      }}>
        <div className="promo-gift-card">
          <div style={{ maxWidth: "600px" }}>
            <span style={{ color: "#dfb76c", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
              FESTIVE & CORPORATE GIFTING
            </span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "#fff", margin: "10px 0 15px", lineHeight: 1.2 }}>
              Customized Interactive Gift Boxes
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
              Build your custom 2x2, 2x3, or 3x3 grid gift box with real dry fruit slot assignments, instant price & weight calculator, and WhatsApp ordering.
            </p>
          </div>
          <Link href="/gift-box" className="btn-primary" style={{ padding: "16px 36px", fontSize: "0.95rem", borderRadius: "999px", whiteSpace: "nowrap" }}>
            Build Your Custom Box 🎁
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS / REVIEWS */}
      <section className="section" id="reviews" style={{ padding: "80px 20px", background: "rgba(12, 9, 5, 0.75)", backdropFilter: "blur(12px)" }}>
        <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
          <p className="section-label" style={{ color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "3px", fontSize: "0.85rem", fontWeight: 700 }}>
            Customer Stories
          </p>
          <h2 className="section-title" style={{ fontSize: "2.8rem", marginTop: "0.5rem" }}>
            Loved Across Bangalore
          </h2>
          <div className="gold-line" aria-hidden="true" style={{ margin: "1rem auto", width: "60px", height: "3px", backgroundColor: "var(--color-accent)" }} />
        </div>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQS */}
      <section className="section" id="faq" style={{ padding: "80px 20px", background: "transparent" }}>
        <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
          <p className="section-label" style={{ color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "3px", fontSize: "0.85rem", fontWeight: 700 }}>
            Have Questions?
          </p>
          <h2 className="section-title" style={{ fontSize: "2.8rem", marginTop: "0.5rem" }}>
            Frequently Asked Questions
          </h2>
          <div className="gold-line" aria-hidden="true" style={{ margin: "1rem auto", width: "60px", height: "3px", backgroundColor: "var(--color-accent)" }} />
        </div>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <FAQAccordion />
        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />

      {/* STYLES & MOBILE MEDIA QUERIES */}
      <style jsx>{`
        .hero-section {
          height: 100vh;
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 120px 4% 40px;
          box-sizing: border-box;
          background: transparent;
        }

        .hero-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 24px;
          border-radius: 999px;
          background: rgba(13, 9, 5, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(223, 183, 108, 0.4);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          animation: fadeInDown 1s ease;
          color: #dfb76c;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #dfb76c;
          box-shadow: 0 0 10px #dfb76c;
          flex-shrink: 0;
        }

        .hero-hud-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-left-card {
          background: rgba(13, 9, 5, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(223, 183, 108, 0.3);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          max-width: 320px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.6);
        }

        .hero-scroll-prompt {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .hero-right-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hero-btn-shop {
          padding: 14px 28px;
          font-size: 0.9rem;
          border-radius: 999px;
          box-shadow: 0 10px 25px rgba(223, 183, 108, 0.3);
        }

        .hero-btn-gift {
          padding: 12px 28px;
          font-size: 0.88rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.25);
          text-decoration: none;
          font-weight: 600;
          text-align: center;
        }

        .marquee-wrapper {
          background: rgba(18, 12, 6, 0.85);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(223, 183, 108, 0.3);
          border-bottom: 1px solid rgba(223, 183, 108, 0.3);
          padding: 14px 0;
          overflow: hidden;
          position: relative;
          z-index: 10;
        }

        .marquee-content {
          display: flex;
          gap: 2rem;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
          color: #dfb76c;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 2px;
        }

        .promo-gift-card {
          background: rgba(18, 12, 6, 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(223, 183, 108, 0.4);
          border-radius: var(--radius-lg);
          padding: 60px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 30px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .scroll-arrow-pulse {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(8px); }
          60% { transform: translateY(4px); }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* HERO GOLDEN LIGHT RAYS */
        .hero-light-rays {
          position: absolute;
          top: -80%;
          left: 50%;
          translate: -50% 0;
          width: 140%;
          height: 200%;
          z-index: 1;
          pointer-events: none;
          background: conic-gradient(
            from 90deg at 50% 0%,
            transparent 40%,
            rgba(223, 183, 108, 0.04) 44%,
            transparent 48%,
            transparent 52%,
            rgba(223, 183, 108, 0.04) 56%,
            transparent 60%,
            transparent 69%,
            rgba(223, 183, 108, 0.02) 72%,
            transparent 75%
          );
          animation: raysGlow 6s ease-in-out infinite;
        }

        @keyframes raysGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* FLOATING PRODUCT IMAGES */
        .hero-float-img {
          position: absolute;
          z-index: 2;
          pointer-events: none;
          filter: drop-shadow(0 10px 25px rgba(0,0,0,0.7));
          opacity: 0.75;
          object-fit: contain;
        }

        .float-1 {
          top: 8%;
          right: 3%;
          width: 130px;
          height: 130px;
          animation: floatDrift1 8s ease-in-out infinite;
          transform: rotate(15deg);
        }

        .float-2 {
          top: 15%;
          right: 12%;
          width: 100px;
          height: 100px;
          animation: floatDrift2 10s ease-in-out infinite;
          transform: rotate(-10deg);
        }

        .float-3 {
          bottom: 25%;
          left: 2%;
          width: 110px;
          height: 110px;
          animation: floatDrift3 9s ease-in-out infinite;
          transform: rotate(8deg);
        }

        .float-4 {
          top: 12%;
          left: 5%;
          width: 90px;
          height: 90px;
          animation: floatDrift4 7s ease-in-out infinite;
          transform: rotate(-20deg);
          opacity: 0.6;
        }

        .float-5 {
          bottom: 35%;
          right: 6%;
          width: 85px;
          height: 85px;
          animation: floatDrift2 11s ease-in-out infinite reverse;
          transform: rotate(25deg);
          opacity: 0.55;
        }

        @keyframes floatDrift1 {
          0%, 100% { translate: 0 0; rotate: 15deg; }
          33% { translate: -8px 12px; rotate: 20deg; }
          66% { translate: 5px -8px; rotate: 10deg; }
        }

        @keyframes floatDrift2 {
          0%, 100% { translate: 0 0; rotate: -10deg; }
          50% { translate: 10px 15px; rotate: -5deg; }
        }

        @keyframes floatDrift3 {
          0%, 100% { translate: 0 0; rotate: 8deg; }
          33% { translate: 12px -10px; rotate: 15deg; }
          66% { translate: -6px 8px; rotate: 3deg; }
        }

        @keyframes floatDrift4 {
          0%, 100% { translate: 0 0; rotate: -20deg; }
          50% { translate: -10px -12px; rotate: -15deg; }
        }

        /* HERO CENTER TEXT */
        .hero-center-text {
          text-align: center;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 5;
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
        }

        @keyframes fadeInUp {
          from { opacity: 0; translate: 0 30px; }
          to { opacity: 1; translate: 0 0; }
        }

        .hero-main-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 800;
          color: #fff;
          margin: 0;
          line-height: 1.1;
          text-shadow: 0 4px 40px rgba(0,0,0,0.6);
        }

        .gold-shimmer {
          background: linear-gradient(135deg, #f0d78c, #b88d3b, #f0d78c);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 3s ease-in-out infinite;
        }

        @keyframes shimmerText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero-tagline {
          color: rgba(255, 255, 255, 0.55);
          font-size: clamp(0.85rem, 1.5vw, 1.05rem);
          letter-spacing: 1px;
          margin-top: 14px;
          font-weight: 300;
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
        }

        /* MOBILE OPTIMIZATIONS (max-width: 768px) */
        @media (max-width: 768px) {
          .hero-section {
            padding: 95px 16px 24px;
          }

          .hero-top-badge {
            font-size: 0.7rem;
            letter-spacing: 1.5px;
            padding: 6px 16px;
          }

          .hero-hud-container {
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }

          .hero-left-card {
            display: none;
          }

          .hero-right-actions {
            width: 100%;
            flex-direction: row;
            justify-content: center;
            gap: 10px;
          }

          .hero-btn-shop, .hero-btn-gift {
            flex: 1 1 50%;
            padding: 12px 14px;
            font-size: 0.8rem;
            text-align: center;
          }

          .hero-float-img {
            display: none;
          }

          .hero-main-title {
            font-size: clamp(2rem, 8vw, 3rem);
          }

          .promo-gift-card {
            padding: 35px 24px;
            flex-direction: column;
            text-align: center;
          }

          .promo-gift-card a {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
