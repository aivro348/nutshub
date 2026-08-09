"use client";

import { useEffect, useRef } from "react";

export default function PageHeroHeader({ 
  subtitle = "OUR COLLECTION", 
  title = "Premium Selections", 
  bgImage = "/images/hero_products.png",
  breadcrumb = "HOME / PRODUCTS",
  showFloatingImages = true
}) {
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const bg = bgRef.current;
      if (!bg) return;
      const scrollY = window.scrollY;
      // Parallax: background moves at 40% of scroll speed
      bg.style.transform = `translateY(${scrollY * 0.4}px) scale(1.1)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="page-hero-cinematic" ref={heroRef}>
      {/* Parallax background */}
      <div className="hero-bg-parallax" ref={bgRef}>
        <img src={bgImage} alt="" loading="eager" />
      </div>

      {/* Multi-layer overlays */}
      <div className="hero-overlay-vignette" />
      <div className="hero-overlay-gradient" />

      {/* Golden light rays from top */}
      <div className="hero-light-rays" />

      {/* Floating dry fruit badges on sides for luxury feel */}
      {showFloatingImages && (
        <>
          <img
            src="/images/cashews.png"
            alt=""
            className="hero-sub-float left-float"
            width="110"
            height="110"
            style={{ width: "110px", height: "110px" }}
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />
          <img
            src="/images/almonds.png"
            alt=""
            className="hero-sub-float right-float"
            width="110"
            height="110"
            style={{ width: "110px", height: "110px" }}
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />
        </>
      )}

      {/* Content */}
      <div className="hero-content-inner">
        <div className="hero-breadcrumb">
          {breadcrumb.split(" / ").map((part, i, arr) => (
            <span key={i}>
              <span className={i === arr.length - 1 ? "breadcrumb-active" : "breadcrumb-muted"}>{part}</span>
              {i < arr.length - 1 && <span className="breadcrumb-dot">•</span>}
            </span>
          ))}
        </div>

        <h1 className="hero-title-cinematic">{title}</h1>

        <div className="hero-gold-accent" />

        {subtitle && (
          <p className="hero-subtitle-text">{subtitle}</p>
        )}
      </div>

      <style jsx>{`
        .page-hero-cinematic {
          position: relative;
          width: 100%;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          padding: 140px 20px 80px;
          box-sizing: border-box;
        }

        .hero-bg-parallax {
          position: absolute;
          inset: -20%;
          z-index: 0;
          will-change: transform;
        }

        .hero-bg-parallax img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.25) saturate(1.2);
        }

        .hero-overlay-vignette {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: radial-gradient(ellipse at center, transparent 30%, rgba(5, 3, 2, 0.8) 100%);
        }

        .hero-overlay-gradient {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(8, 5, 2, 0.5) 0%,
            rgba(5, 3, 2, 0.3) 50%,
            rgba(10, 7, 4, 0.95) 100%
          );
        }

        .hero-light-rays {
          position: absolute;
          top: -60%;
          left: 50%;
          translate: -50% 0;
          width: 120%;
          height: 160%;
          z-index: 3;
          background: conic-gradient(
            from 90deg at 50% 0%,
            transparent 42%,
            rgba(223, 183, 108, 0.04) 45%,
            transparent 48%,
            transparent 52%,
            rgba(223, 183, 108, 0.04) 55%,
            transparent 58%
          );
          pointer-events: none;
          animation: raysPulse 6s ease-in-out infinite;
        }

        @keyframes raysPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .hero-sub-float {
          position: absolute;
          z-index: 4;
          width: 110px;
          height: 110px;
          object-fit: contain;
          pointer-events: none;
          filter: drop-shadow(0 10px 25px rgba(0,0,0,0.7));
          opacity: 0.7;
        }

        .left-float {
          top: 25%;
          left: 4%;
          animation: subFloat1 8s ease-in-out infinite;
          transform: rotate(-12deg);
        }

        .right-float {
          top: 22%;
          right: 4%;
          animation: subFloat2 9s ease-in-out infinite;
          transform: rotate(15deg);
        }

        @keyframes subFloat1 {
          0%, 100% { translate: 0 0; rotate: -12deg; }
          50% { translate: 8px 12px; rotate: -5deg; }
        }

        @keyframes subFloat2 {
          0%, 100% { translate: 0 0; rotate: 15deg; }
          50% { translate: -10px 10px; rotate: 8deg; }
        }

        .hero-content-inner {
          position: relative;
          z-index: 10;
          animation: heroContentEntry 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes heroContentEntry {
          from { opacity: 0; translate: 0 30px; }
          to { opacity: 1; translate: 0 0; }
        }

        .hero-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 999px;
          background: rgba(13, 9, 5, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(223, 183, 108, 0.3);
          margin-bottom: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .breadcrumb-muted {
          color: rgba(223, 183, 108, 0.6);
        }

        .breadcrumb-active {
          color: #dfb76c;
        }

        .breadcrumb-dot {
          color: rgba(223, 183, 108, 0.35);
          margin: 0 2px;
        }

        .hero-title-cinematic {
          font-family: var(--font-display);
          font-size: clamp(2.6rem, 6vw, 4.2rem);
          font-weight: 800;
          color: #fff;
          margin: 0;
          letter-spacing: 0.02em;
          line-height: 1.15;
          text-wrap: balance;
          text-shadow: 0 4px 30px rgba(0,0,0,0.5);
        }

        .hero-gold-accent {
          width: 70px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #dfb76c, transparent);
          margin: 20px auto;
          border-radius: 999px;
          box-shadow: 0 0 15px rgba(223, 183, 108, 0.4);
          animation: accentGlow 3s ease-in-out infinite;
        }

        @keyframes accentGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(223, 183, 108, 0.3); width: 60px; }
          50% { box-shadow: 0 0 25px rgba(223, 183, 108, 0.6); width: 80px; }
        }

        .hero-subtitle-text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 400;
          margin: 0;
        }

        @media (max-width: 768px) {
          .page-hero-cinematic {
            min-height: 280px;
            padding: 110px 16px 50px;
          }

          .hero-sub-float {
            display: none !important;
          }

          .hero-title-cinematic {
            font-size: clamp(1.8rem, 7vw, 2.6rem);
            line-height: 1.2;
          }
        }
      `}</style>
    </section>
  );
}
