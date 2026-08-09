"use client";

import { useState, useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote: "The quality of almonds and cashews from NutsHub is unmatched. They are always fresh, crunchy, and full of flavour. My go-to store for all dry fruits now!",
    author: "Priya Sharma",
    role: "Regular Customer, Panathur"
  },
  {
    quote: "I've been ordering from NutsHub for months now. Their home delivery service is prompt and the packaging is excellent. The Medjool dates are absolutely divine!",
    author: "Rajesh Kumar",
    role: "Loyal Customer, Whitefield"
  },
  {
    quote: "Best dry fruits store in Bangalore, hands down. The Kashmiri walnuts are incredibly fresh and the prices are very reasonable for the quality they offer.",
    author: "Anita Desai",
    role: "Premium Customer, Koramangala"
  },
  {
    quote: "Ordered custom gift boxes for our company Diwali distribution. The wooden grid box presentation and quality of W180 cashews blew everyone away!",
    author: "Vikram Malhotra",
    role: "Corporate Client, Bellandur"
  },
  {
    quote: "Top-notch sun-dried Afghan kishmish and Mamra almonds. Same day doorstep delivery in Panathur! Highly recommend to all health enthusiasts.",
    author: "Sowmya Reddy",
    role: "Health Enthusiast, Kadubeesanahalli"
  }
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const startX = useRef(0);

  // Auto-play interval: smooth continuous auto-scrolling every 3.5s
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    const diff = startX.current - e.clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      }
    }
  };

  return (
    <div
      className="testimonials-carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      aria-label="Customer testimonials"
    >
      {/* CAROUSEL TRACK */}
      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="testimonial-slide">
              <div className="testimonial-card">
                <div style={{ fontSize: "2rem", color: "#dfb76c", marginBottom: "12px" }}>“</div>
                <p className="testimonial-quote">{t.quote}</p>
                <div style={{ marginTop: "20px", borderTop: "1px solid rgba(223, 183, 108, 0.2)", paddingTop: "14px" }}>
                  <p className="testimonial-author">⭐ ⭐ ⭐ ⭐ ⭐ &nbsp; {t.author}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION CONTROLS */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", marginTop: "25px" }}>
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          aria-label="Previous review"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid rgba(223, 183, 108, 0.4)",
            background: "rgba(13, 9, 5, 0.6)",
            color: "#dfb76c",
            cursor: "pointer",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ‹
        </button>

        {/* DOTS */}
        <div style={{ display: "flex", gap: "8px" }}>
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${currentSlide === idx ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length)}
          aria-label="Next review"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid rgba(223, 183, 108, 0.4)",
            background: "rgba(13, 9, 5, 0.6)",
            color: "#dfb76c",
            cursor: "pointer",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ›
        </button>
      </div>

      <style jsx>{`
        .testimonials-carousel-wrapper {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
        }

        .carousel-window {
          overflow: hidden;
          width: 100%;
          border-radius: var(--radius-lg);
        }

        .carousel-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .testimonial-slide {
          flex: 0 0 100%;
          min-width: 100%;
          box-sizing: border-box;
          padding: 0 10px;
        }

        .testimonial-card {
          background: rgba(18, 12, 6, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(223, 183, 108, 0.35);
          border-radius: var(--radius-lg);
          padding: 36px 30px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0,0,0,0.5);
        }

        .testimonial-quote {
          font-size: 1.1rem;
          line-height: 1.7;
          color: "#fff";
          font-style: italic;
          margin: 0;
        }

        .testimonial-author {
          font-weight: 700;
          font-size: 1.05rem;
          color: #dfb76c;
          margin: 0 0 4px;
        }

        .testimonial-role {
          font-size: 0.85rem;
          color: "rgba(255,255,255,0.65)";
          margin: 0;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid rgba(223, 183, 108, 0.4);
          background: rgba(255, 255, 255, 0.15);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .carousel-dot.active {
          width: 28px;
          border-radius: 999px;
          background: #dfb76c;
          border-color: #dfb76c;
        }
      `}</style>
    </div>
  );
}
