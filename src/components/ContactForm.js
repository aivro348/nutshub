"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        background: "var(--surface-900)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        padding: "40px",
        textAlign: "center",
        boxShadow: "0 4px 30px rgba(0,0,0,0.2)"
      }}>
        <div style={{ fontSize: "3rem", marginBottom: "15px" }}>✅</div>
        <h3 style={{ fontSize: "1.5rem", color: "var(--color-accent)", marginBottom: "10px" }}>Message Sent Successfully!</h3>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>Thank you for reaching out to NutsHub. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div style={{
      background: "var(--surface-900)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-lg)",
      padding: "40px",
      boxShadow: "0 4px 30px rgba(0,0,0,0.2)"
    }}>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "25px", color: "var(--color-text)" }}>Send Inquiry Message</h3>
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="contact-name" style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>Name</label>
          <input type="text" id="contact-name" required placeholder="Your Name" style={{ width: "100%", padding: "12px", borderRadius: "var(--radius-md)", background: "var(--surface-950)", border: "1px solid var(--color-border)", color: "var(--color-text)", outline: "none" }} />
        </div>
        <div>
          <label htmlFor="contact-email" style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>Email Address</label>
          <input type="email" id="contact-email" required placeholder="Your Email" style={{ width: "100%", padding: "12px", borderRadius: "var(--radius-md)", background: "var(--surface-950)", border: "1px solid var(--color-border)", color: "var(--color-text)", outline: "none" }} />
        </div>
        <div>
          <label htmlFor="contact-message" style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>Message / Requirements</label>
          <textarea id="contact-message" rows="4" required placeholder="Mention bulk requirements or delivery questions..." style={{ width: "100%", padding: "12px", borderRadius: "var(--radius-md)", background: "var(--surface-950)", border: "1px solid var(--color-border)", color: "var(--color-text)", outline: "none", resize: "none" }} />
        </div>
        <button className="btn-primary" style={{ padding: "12px 30px", alignSelf: "flex-start", cursor: "pointer" }}>Submit Form</button>
      </form>
    </div>
  );
}
