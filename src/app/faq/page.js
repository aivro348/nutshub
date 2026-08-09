"use client";

import { useState } from "react";
import FAQAccordion from "@/components/FAQAccordion";
import PageHeroHeader from "@/components/PageHeroHeader";

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All FAQs" },
    { id: "delivery", label: "Orders & Delivery" },
    { id: "quality", label: "Storage & Quality" },
    { id: "gifting", label: "Gifting & Bulk" },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--surface-950)", color: "var(--color-text)" }}>
      {/* LUXURY HERO HEADER BANNER */}
      <PageHeroHeader
        breadcrumb="HOME / FAQ"
        subtitle="HELP CENTER & FREQUENTLY ASKED QUESTIONS"
        title="Everything You Need to Know"
        bgImage="/images/hero_products.png"
        showFloatingImages={true}
      />

      {/* ACCORDION CONTAINER */}
      <section style={{ maxWidth: "850px", margin: "60px auto 80px", padding: "0 20px" }}>
        {/* Category Tabs */}
        <div style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "40px"
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                padding: "8px 22px",
                borderRadius: "999px",
                background: activeTab === cat.id ? "linear-gradient(135deg, #b88d3b, #dfb76c)" : "rgba(18, 12, 6, 0.8)",
                color: activeTab === cat.id ? "#0a0704" : "rgba(255,255,255,0.75)",
                border: activeTab === cat.id ? "none" : "1px solid rgba(223, 183, 108, 0.3)",
                fontWeight: activeTab === cat.id ? 700 : 600,
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: activeTab === cat.id ? "0 4px 16px rgba(223, 183, 108, 0.3)" : "none"
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <FAQAccordion />
      </section>

      {/* ADDITIONAL HELP */}
      <section style={{
        maxWidth: "850px",
        margin: "0 auto 80px",
        padding: "45px",
        background: "rgba(18, 12, 6, 0.85)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(223, 183, 108, 0.35)",
        borderRadius: "var(--radius-lg)",
        textAlign: "center",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
      }}>
        <span style={{ fontSize: "2.8rem" }}>💬</span>
        <h4 style={{ fontSize: "1.5rem", margin: "14px 0 10px", color: "#fff", fontFamily: "var(--font-display)" }}>Still Have Questions?</h4>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.98rem", marginBottom: "24px", lineHeight: 1.6 }}>
          Our store representatives are available daily from 10 AM to 10 PM to help you choose the best dry fruits or coordinate bulk orders.
        </p>
        <a 
          href="https://wa.me/919901844007?text=Hi%20NutsHub!%20I%20have%20a%20question%20about%20my%20order." 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary" 
          style={{
            padding: "14px 34px",
            textDecoration: "none",
            display: "inline-block",
            borderRadius: "999px"
          }}
        >
          Chat with Store Support on WhatsApp 💬
        </a>
      </section>
    </main>
  );
}