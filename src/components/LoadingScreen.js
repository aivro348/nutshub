"use client";

import { useState, useEffect } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('loaded');
    }

    const hideLoader = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 180);
    };

    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(hideLoader).catch(hideLoader);
    } else {
      const timer = setTimeout(hideLoader, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-glow" />
      <div className="loader-logo-wrap">
        <img
          src="/images/nutshub.jpg"
          alt="NutsHub"
          width="56"
          height="56"
          style={{ width: "56px", height: "56px" }}
          className="loader-logo-img"
        />
        <h1 className="loader-brand">
          Nuts<span>Hub</span>
        </h1>
      </div>
      <p className="loader-tagline">Premium Dry Fruits & Nuts</p>
      <div className="loader-progress">
        <div className="loader-progress-bar" />
      </div>
    </div>
  );
}
