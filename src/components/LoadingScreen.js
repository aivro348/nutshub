"use client";

import { useState, useEffect } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Add loaded class to html to reveal floating images smoothly
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('loaded');
    }

    const hideLoader = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 500);
    };

    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      Promise.all([
        document.fonts.ready,
        new Promise((resolve) => setTimeout(resolve, 600)) // minimum 600ms for logo animation
      ]).then(hideLoader).catch(hideLoader);
    } else {
      const t1 = setTimeout(() => setFadeOut(true), 600);
      const t2 = setTimeout(() => setVisible(false), 1100);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
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
    </div>
  );
}
