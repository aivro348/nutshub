"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--surface-900)",
      borderTop: "1px solid var(--color-border)",
      padding: "60px 20px 20px",
      marginTop: "auto"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "40px",
        marginBottom: "40px"
      }}>
        {/* Brand Column */}
        <div>
          <Link href="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img src="/images/nutshub.jpg" alt="NutsHub Logo" style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover', marginRight: '10px' }} />
            Nuts<span>Hub</span>
          </Link>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
            Premium quality dry fruits and nuts handpicked for your health and well-being. Delivered fresh across Bangalore.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: "var(--color-text)", marginBottom: "20px", fontSize: "1.1rem" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><Link href="/" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>Home</Link></li>
            <li><Link href="/products" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>Products</Link></li>
            <li><Link href="/gift-box" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>Gift Boxes</Link></li>
            <li><Link href="/about" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>About Us</Link></li>
            <li><Link href="/faq" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>FAQs</Link></li>
          </ul>
        </div>

        {/* Branch 1 - Koramangala */}
        <div>
          <h4 style={{ color: "var(--color-text)", marginBottom: "15px", fontSize: "1.05rem" }}>📍 Koramangala Branch</h4>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>
            36/1, 1st Main Rd, below Seva In Action, S.T. Bed, 4th Block, Koramangala, Bengaluru, Karnataka 560034
          </p>
        </div>

        {/* Branch 2 - Panathur / Kadubeesanahalli */}
        <div>
          <h4 style={{ color: "var(--color-text)", marginBottom: "15px", fontSize: "1.05rem" }}>📍 Panathur Branch</h4>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>
            Vaswani Reserve 84/2, Panathur Main Road, Kadubeesanahalli, Bengaluru, Karnataka 560103
          </p>
        </div>
      </div>
      
      {/* Copyright */}
      <div style={{
        borderTop: "1px solid var(--color-border)",
        paddingTop: "20px",
        textAlign: "center",
        color: "var(--color-text-muted)",
        fontSize: "0.85rem"
      }}>
        <p>&copy; {new Date().getFullYear()} NutsHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
