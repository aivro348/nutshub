"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="premium-footer">
      {/* Gold accent line at top */}
      <div className="footer-accent-line" />

      <div className="footer-main">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <Link href="/" className="footer-logo-link">
            <img src="/images/nutshub.jpg" alt="NutsHub Logo" className="footer-logo-img" />
            <span className="footer-brand-text">Nuts<span className="brand-light">Hub</span></span>
          </Link>
          <p className="footer-description">
            Premium quality dry fruits and nuts handpicked for your health and well-being. Delivered fresh across Bangalore.
          </p>
          {/* Store hours badge */}
          <div className="store-hours-badge">
            <span className="live-dot" />
            <span>Open Daily · 10 AM – 10 PM</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/gift-box">Gift Boxes</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/why-us">Why Us</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Koramangala Branch */}
        <div className="footer-col">
          <h4 className="footer-col-title">📍 Koramangala</h4>
          <p className="footer-address">
            36/1, 1st Main Rd, below Seva In Action, S.T. Bed, 4th Block, Koramangala, Bengaluru, Karnataka 560034
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=36%2F1+1st+Main+Rd+Koramangala+Bengaluru+560034"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-link"
          >
            Get Directions →
          </a>
        </div>

        {/* Panathur Branch */}
        <div className="footer-col">
          <h4 className="footer-col-title">📍 Panathur</h4>
          <p className="footer-address">
            Vaswani Reserve 84/2, Panathur Main Road, Kadubeesanahalli, Bengaluru, Karnataka 560103
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Vaswani+Reserve+Panathur+Bengaluru+560103"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-link"
          >
            Get Directions →
          </a>
        </div>
      </div>

      {/* Social links + copyright */}
      <div className="footer-bottom-bar">
        <p className="footer-copyright">© {new Date().getFullYear()} NutsHub. All rights reserved.</p>
        <div className="footer-social-links">
          <a href="https://www.instagram.com/nutshub.blr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://wa.me/919480517939" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a href="tel:+919480517939" aria-label="Call us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Back to Top */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <style jsx>{`
        .premium-footer {
          position: relative;
          z-index: 1;
          background: rgba(8, 5, 2, 0.95);
          padding: 0 20px 20px;
          margin-top: auto;
        }

        .footer-accent-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(223, 183, 108, 0.5), rgba(223, 183, 108, 0.8), rgba(223, 183, 108, 0.5), transparent);
          margin-bottom: 50px;
        }

        .footer-main {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .footer-logo-img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(223, 183, 108, 0.5);
          box-shadow: 0 0 16px rgba(223, 183, 108, 0.2);
        }

        .footer-brand-text {
          font-family: 'Cinzel Decorative', serif;
          font-size: 1.6rem;
          font-weight: 900;
          background: linear-gradient(135deg, #f0d78c, #b88d3b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-light {
          -webkit-text-fill-color: rgba(255, 255, 255, 0.85);
          font-weight: 300;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
          line-height: 1.7;
          margin: 0;
          max-width: 300px;
        }

        .store-hours-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(223, 183, 108, 0.08);
          border: 1px solid rgba(223, 183, 108, 0.2);
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(223, 183, 108, 0.8);
          width: fit-content;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #25d366;
          box-shadow: 0 0 8px rgba(37, 211, 102, 0.6);
          animation: livePulse 2s ease-in-out infinite;
        }

        @keyframes livePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .footer-col-title {
          color: var(--color-text);
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 18px;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-col ul a {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 300;
          transition: color 0.3s ease, translate 0.3s ease;
          display: inline-block;
        }

        .footer-col ul a:hover {
          color: #dfb76c;
          translate: 4px 0;
        }

        .footer-address {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          line-height: 1.6;
          margin: 0 0 12px;
          font-weight: 300;
        }

        .footer-map-link {
          color: #dfb76c;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-map-link:hover {
          color: #f0d78c;
          letter-spacing: 0.5px;
        }

        .footer-bottom-bar {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 24px;
          border-top: 1px solid rgba(223, 183, 108, 0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.35);
          font-size: 0.82rem;
          font-weight: 300;
          margin: 0;
        }

        .footer-social-links {
          display: flex;
          gap: 12px;
        }

        .footer-social-links a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(223, 183, 108, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .footer-social-links a:hover {
          background: linear-gradient(135deg, #b88d3b, #dfb76c);
          color: #0a0704;
          border-color: transparent;
          translate: 0 -4px;
          box-shadow: 0 8px 20px rgba(223, 183, 108, 0.3);
        }

        .back-to-top {
          position: fixed;
          bottom: 100px;
          right: 28px;
          z-index: 9989;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(18, 12, 6, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(223, 183, 108, 0.3);
          color: #dfb76c;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          translate: 0 20px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .back-to-top.visible {
          opacity: 1;
          translate: 0 0;
          pointer-events: auto;
        }

        .back-to-top:hover {
          background: rgba(223, 183, 108, 0.15);
          border-color: rgba(223, 183, 108, 0.6);
          translate: 0 -4px;
        }

        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-bottom-bar {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }

          .back-to-top {
            bottom: 85px;
            right: 20px;
          }
        }
      `}</style>
    </footer>
  );
}
