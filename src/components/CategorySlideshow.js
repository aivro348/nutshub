"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CATEGORIES = [
  {
    title: "Almonds & Nuts",
    img: "/images/almonds_and_nuts.png",
    slug: "almonds-nuts"
  },
  {
    title: "Premium Cashews",
    img: "/images/cashews_banner.png",
    slug: "cashews"
  },
  {
    title: "Pistachios & Walnuts",
    img: "/images/pista_banner.png",
    slug: "pistachios-walnuts"
  },
  {
    title: "Raisins & Dates",
    img: "/images/dates_banner.png",
    slug: "raisins-dates"
  },
  {
    title: "Dried Fruits & Berries",
    img: "/images/driedfruits_banner.png",
    slug: "dried-fruits-berries"
  },
  {
    title: "Seeds & Mixes",
    img: "/images/seeds.png",
    slug: "seeds-mixes"
  },
  {
    title: "Aromatic Spices",
    img: "/images/spices.png",
    slug: "spices-herbs"
  },
  {
    title: "Sweet Delights",
    img: "/images/sweets.png",
    slug: "sugars-sweets-candies"
  }
];

export default function CategorySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CATEGORIES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clean-slideshow-container">
      {CATEGORIES.map((cat, idx) => {
        const isActive = idx === currentIndex;

        return (
          <Link 
            key={cat.slug} 
            href={`/products?category=${cat.slug}`}
            className={`clean-slide ${isActive ? 'active' : ''}`}
            aria-label={`View ${cat.title}`}
          >
            <div className="clean-slide-img-wrap">
              <img 
                src={cat.img}
                alt={cat.title}
              />
            </div>
          </Link>
        );
      })}

      {/* Navigation Indicators */}
      <div className="slideshow-dots">
        {CATEGORIES.map((cat, idx) => (
          <button 
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      <style jsx>{`
        .clean-slideshow-container {
          position: relative;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          height: 80vh;
          min-height: 500px;
          max-height: 800px;
          overflow: hidden;
          background: #0d0905;
        }

        .clean-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
          pointer-events: none;
          z-index: 0;
          display: block;
          text-decoration: none;
        }

        .clean-slide.active {
          opacity: 1;
          pointer-events: auto;
          z-index: 10;
        }

        .clean-slide-img-wrap {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .clean-slide-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 6s ease-out;
        }

        .clean-slide.active .clean-slide-img-wrap img {
          transform: scale(1.05);
        }

        .slideshow-dots {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.8rem;
          z-index: 15;
          background: rgba(0, 0, 0, 0.4);
          padding: 8px 16px;
          border-radius: 999px;
          backdrop-filter: blur(8px);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.4);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          border-color: #dfb76c;
        }

        .dot.active {
          background: #dfb76c;
          border-color: #dfb76c;
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .clean-slideshow-container {
            height: 60vh;
            min-height: 380px;
          }
        }
      `}</style>
    </div>
  );
}
