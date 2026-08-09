"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let rafId;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth lerp animation
    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      glow.style.transform = `translate(${currentX - 250}px, ${currentY - 250}px)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow-orb" aria-hidden="true" />
      <style jsx>{`
        .cursor-glow-orb {
          position: fixed;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          background: radial-gradient(circle, rgba(223, 183, 108, 0.06) 0%, rgba(223, 183, 108, 0.02) 30%, transparent 70%);
          mix-blend-mode: screen;
          will-change: transform;
          top: 0;
          left: 0;
        }

        @media (pointer: coarse) {
          .cursor-glow-orb {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
