"use client";

export default function ContactSection() {
  return (
    <section className="section" id="contact" style={{ padding: "80px 20px" }}>
      <div className="section-header">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Contact Us</h2>
        <div className="gold-line" aria-hidden="true" />
      </div>

      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        background: "var(--surface-800)",
        padding: "3rem",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--color-border)"
      }}>
        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 200px" }}>
              <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", color: "var(--color-text-muted)" }}>Name</label>
              <input type="text" id="name" placeholder="Your Name" style={{ width: "100%", padding: "1rem", borderRadius: "var(--radius-md)", background: "var(--surface-900)", border: "1px solid var(--color-border)", color: "var(--color-text)", outline: "none" }} />
            </div>
            <div style={{ flex: "1 1 200px" }}>
              <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", color: "var(--color-text-muted)" }}>Email</label>
              <input type="email" id="email" placeholder="Your Email" style={{ width: "100%", padding: "1rem", borderRadius: "var(--radius-md)", background: "var(--surface-900)", border: "1px solid var(--color-border)", color: "var(--color-text)", outline: "none" }} />
            </div>
          </div>
          <div>
            <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", color: "var(--color-text-muted)" }}>Message</label>
            <textarea id="message" rows="5" placeholder="How can we help you?" style={{ width: "100%", padding: "1rem", borderRadius: "var(--radius-md)", background: "var(--surface-900)", border: "1px solid var(--color-border)", color: "var(--color-text)", outline: "none", resize: "vertical" }} />
          </div>
          <button type="submit" className="btn-primary" style={{ padding: "1rem 2rem", alignSelf: "flex-start", cursor: "pointer" }}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
