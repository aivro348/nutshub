"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 800ms
    const t1 = setTimeout(() => setFadeOut(true), 800);
    // Remove from DOM after fade animation completes
    const t2 = setTimeout(() => setVisible(false), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      {/* Ambient glow */}
      <div className="loader-glow" />

      {/* Logo */}
      <div className="loader-logo-wrap">
        <img
          src="/images/nutshub.jpg"
          alt="NutsHub"
          width="64"
          height="64"
          style={{ width: "64px", height: "64px" }}
          className="loader-logo-img"
        />
        <h1 className="loader-brand">
          Nuts<span>Hub</span>
        </h1>
      </div>

      {/* Tagline */}
      <p className="loader-tagline">Premium Dry Fruits & Nuts</p>

      {/* Progress bar */}
      <div className="loader-progress">
        <div className="loader-progress-bar" />
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: #0a0704;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      visibility 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .loading-screen.fade-out {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .loader-glow {
          position: absolute;
          top: 40%;
          left: 50%;
          translate: -50% -50%;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(223, 183, 108, 0.08) 0%, transparent 70%);
          animation: glowPulse 2s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { scale: 1; opacity: 0.6; }
          50% { scale: 1.3; opacity: 1; }
        }

        .loader-logo-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
          animation: logoReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes logoReveal {
          from { opacity: 0; translate: 0 30px; scale: 0.9; }
          to { opacity: 1; translate: 0 0; scale: 1; }
        }

        .loader-logo-img {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #dfb76c;
          box-shadow: 0 0 30px rgba(223, 183, 108, 0.4);
          animation: logoSpin 1.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes logoSpin {
          from { rotate: -180deg; opacity: 0; scale: 0; }
          to { rotate: 0deg; opacity: 1; scale: 1; }
        }

        .loader-brand {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          letter-spacing: 0.08em;
          background: linear-gradient(135deg, #f0d78c, #b88d3b, #f0d78c);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerGold 2.5s ease-in-out infinite;
          margin: 0;
        }

        .loader-brand span {
          -webkit-text-fill-color: rgba(255, 255, 255, 0.9);
          font-weight: 300;
        }

        @keyframes shimmerGold {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .loader-tagline {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-top: 12px;
          font-weight: 400;
          animation: fadeIn 1s ease 0.5s both;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .loader-progress {
          width: 200px;
          height: 2px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 2px;
          margin-top: 32px;
          overflow: hidden;
          animation: fadeIn 0.5s ease 0.3s both;
        }

        .loader-progress-bar {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #b88d3b, #dfb76c, #f0d78c);
          border-radius: 2px;
          animation: loadProgress 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes loadProgress {
          0% { width: 0%; }
          30% { width: 45%; }
          60% { width: 75%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
