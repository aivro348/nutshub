"use client";

import { useState } from "react";

export default function ContactSection() {
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="section" id="contact" style={{ padding: "80px 20px" }}>
      <div className="section-header">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Contact Us</h2>
        <div className="gold-line" aria-hidden="true" />
      </div>

      <div className="contact-form-container">
        {/* Glow background effect */}
        <div className="form-glow" />

        {submitted ? (
          <div className="success-message">
            <span className="success-icon">✓</span>
            <h3>Message Sent!</h3>
            <p>We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="premium-form">
            <div className="form-row">
              <div className={`form-group ${focused === 'name' ? 'focused' : ''}`}>
                <label htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  placeholder="Enter your name"
                  required
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
                <div className="input-glow-line" />
              </div>
              <div className={`form-group ${focused === 'email' ? 'focused' : ''}`}>
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="Enter your email"
                  required
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
                <div className="input-glow-line" />
              </div>
            </div>

            <div className={`form-group ${focused === 'phone' ? 'focused' : ''}`}>
              <label htmlFor="contact-phone">Phone / WhatsApp</label>
              <input
                type="tel"
                id="contact-phone"
                placeholder="+91 XXXXX XXXXX"
                onFocus={() => setFocused('phone')}
                onBlur={() => setFocused(null)}
              />
              <div className="input-glow-line" />
            </div>

            <div className={`form-group ${focused === 'message' ? 'focused' : ''}`}>
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                rows="5"
                placeholder="Tell us about your order, inquiry, or feedback..."
                required
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />
              <div className="input-glow-line" />
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        )}
      </div>

      <style jsx>{`
        .contact-form-container {
          max-width: 750px;
          margin: 0 auto;
          position: relative;
          background: rgba(18, 12, 6, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(223, 183, 108, 0.2);
          border-radius: var(--radius-lg);
          padding: 3rem;
          overflow: hidden;
        }

        .form-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          translate: -50% 0;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(223, 183, 108, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .premium-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .form-row {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .form-row .form-group {
          flex: 1 1 200px;
        }

        .form-group {
          position: relative;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .form-group.focused label {
          color: #dfb76c;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.2rem;
          border-radius: var(--radius-md);
          background: rgba(10, 7, 4, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--color-text);
          font-size: 1rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.4s ease, background 0.4s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.25);
        }

        .form-group.focused input,
        .form-group.focused textarea {
          border-color: rgba(223, 183, 108, 0.5);
          background: rgba(10, 7, 4, 0.8);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .input-glow-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #dfb76c, transparent);
          translate: -50% 0;
          transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 2px;
        }

        .form-group.focused .input-glow-line {
          width: 80%;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #b88d3b, #dfb76c);
          color: #0a0704;
          border: none;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          cursor: pointer;
          align-self: flex-start;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          translate: -50% -50%;
          transition: width 0.6s ease, height 0.6s ease;
        }

        .submit-btn:hover {
          translate: 0 -3px;
          box-shadow: 0 12px 30px rgba(223, 183, 108, 0.4);
        }

        .submit-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .submit-btn:active {
          scale: 0.97;
        }

        .success-message {
          text-align: center;
          padding: 3rem;
          animation: successEntry 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        @keyframes successEntry {
          from { opacity: 0; scale: 0.8; }
          to { opacity: 1; scale: 1; }
        }

        .success-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #b88d3b, #dfb76c);
          color: #0a0704;
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 1rem;
          box-shadow: 0 0 30px rgba(223, 183, 108, 0.3);
        }

        .success-message h3 {
          font-family: var(--font-display);
          font-size: 1.8rem;
          color: #dfb76c;
          margin: 0 0 0.5rem;
        }

        .success-message p {
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        @media (max-width: 768px) {
          .contact-form-container {
            padding: 2rem 1.5rem;
          }

          .form-row {
            flex-direction: column;
          }

          .submit-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
