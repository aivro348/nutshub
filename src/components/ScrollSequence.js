"use client";

import { useEffect, useRef, useState } from "react";

// REAL DRY FRUITS OVERLAY ASSETS
const REAL_NUT_ASSETS = [
  { name: "Mamra Almond", src: "/images/almonds.png", size: 120 },
  { name: "W180 Cashew", src: "/images/cashews.png", size: 130 },
  { name: "Iranian Pista", src: "/images/pistachios.png", size: 110 },
  { name: "Medjool Date", src: "/images/dates.png", size: 120 },
  { name: "Golden Kishmish", src: "/images/raisins.png", size: 100 },
  { name: "Kashmiri Walnut", src: "/images/walnuts.png", size: 130 },
  { name: "Dried Fig", src: "/images/figs.png", size: 115 },
  { name: "Organic Berries", src: "/images/berries.png", size: 105 },
  { name: "Dried Orange", src: "/images/orange_slice.png", size: 125 },
  { name: "Dried Strawberry", src: "/images/strawberry_dry.png", size: 110 }
];

export default function ScrollSequence() {
  const canvasRef = useRef(null);
  const [framesLoaded, setFramesLoaded] = useState(0);
  const totalFrames = 250;

  // Refs for assets
  const frameImagesRef = useRef([]);
  const nutImagesRef = useRef([]);

  useEffect(() => {
    // 1. Preload 3D Scroll Sequence frames (/ezgif-606e679e899d5166-jpg/)
    let loadedCount = 0;
    const frames = new Array(totalFrames);
    frameImagesRef.current = frames;

    const loadFrame = (index) => {
      if (frames[index]) return;
      const img = new Image();
      const paddedIndex = String(index + 1).padStart(3, '0');
      img.src = `/ezgif-606e679e899d5166-jpg/ezgif-frame-${paddedIndex}.jpg`;

      img.onload = () => {
        loadedCount++;
        setFramesLoaded(loadedCount);
      };
      frames[index] = img;
    };

    // Stage 1: Load initial 10 frames eagerly for instant crisp rendering
    for (let i = 0; i < 10; i++) loadFrame(i);

    // Stage 2: Idle-load keyframes 10..40 after main thread is free
    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
    const idleId = idleCallback(() => {
      for (let i = 10; i < 40; i++) loadFrame(i);
    });

    // Stage 3: On scroll or after 1.5s, progressively load remaining frames in small batches
    let currentBatch = 40;
    const loadRemaining = () => {
      if (currentBatch >= totalFrames) return;
      const end = Math.min(currentBatch + 15, totalFrames);
      for (let i = currentBatch; i < end; i++) loadFrame(i);
      currentBatch = end;
    };

    const scrollHandler = () => {
      loadRemaining();
      if (currentBatch >= totalFrames) {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
    window.addEventListener("scroll", scrollHandler, { passive: true });

    // Fallback timer to finish loading remaining frames in background
    const batchInterval = setInterval(loadRemaining, 250);

    // 2. Preload Real Dry Fruits PNG Overlay Assets
    const nutImgs = [];
    REAL_NUT_ASSETS.forEach((asset, idx) => {
      const img = new Image();
      img.src = asset.src;
      nutImgs[idx] = img;
    });
    nutImagesRef.current = nutImgs;

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      window.removeEventListener("scroll", scrollHandler);
      clearInterval(batchInterval);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    // Define 3D positions for floating real dry fruit objects
    const nutItems = REAL_NUT_ASSETS.map((asset, index) => {
      const angle = (index / REAL_NUT_ASSETS.length) * Math.PI * 2;
      return {
        ...asset,
        baseX: 0.5 + Math.cos(angle) * 0.38,
        baseY: 0.15 + (index * 0.13),
        depth: 0.45 + (index % 5) * 0.15
      };
    });

    // Sparkling gold dust particles
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.2,
      speedY: Math.random() * 0.0006 + 0.0002
    }));

    const updateCanvasDimensions = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };
    updateCanvasDimensions();
    window.addEventListener("resize", updateCanvasDimensions, { passive: true });

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Calculate scroll progress (0 to 1)
      const maxScroll = document.documentElement.scrollHeight - height;
      const scrollY = window.scrollY;
      const scrollProgress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;

      // ----------------------------------------------------
      // LAYER 1: 3D SEQUENCE FRAME CANVAS (ezgif-frame-XXX.jpg)
      // ----------------------------------------------------
      const targetFrameIndex = Math.min(
        totalFrames - 1,
        Math.floor(scrollProgress * totalFrames)
      );
      const frameImg = frameImagesRef.current[targetFrameIndex] || frameImagesRef.current[0];

      if (frameImg && frameImg.complete && frameImg.width > 0) {
        const scale = Math.max(width / frameImg.width, height / frameImg.height);
        const x = (width / 2) - (frameImg.width / 2) * scale;
        const y = (height / 2) - (frameImg.height / 2) * scale;
        ctx.drawImage(frameImg, x, y, frameImg.width * scale, frameImg.height * scale);
      } else {
        // Fallback Dark Background Gradient
        const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 100, width / 2, height / 2, Math.max(width, height));
        bgGrad.addColorStop(0, "#160e07");
        bgGrad.addColorStop(1, "#050302");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // ----------------------------------------------------
      // LAYER 2: SPARKLING GOLD DUST PARTICLES
      // ----------------------------------------------------
      particles.forEach((p) => {
        p.y -= p.speedY;
        if (p.y < 0) p.y = 1;
        const px = p.x * width;
        const py = p.y * height;

        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(223, 183, 108, ${p.alpha})`;
        ctx.shadowColor = "#dfb76c";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // ----------------------------------------------------
      // LAYER 3: FLOATING REAL DRY FRUITS OVERLAY (almonds, cashews, pista, dates)
      // ----------------------------------------------------
      nutItems.forEach((nut, idx) => {
        const img = nutImagesRef.current[idx];
        if (!img || !img.complete) return;

        const scrollOffset = (scrollProgress * 2.2) % 1;
        let currentY = ((nut.baseY - scrollProgress * 1.3 + scrollOffset) % 1.2);
        if (currentY < -0.1) currentY += 1.2;

        const x = (nut.baseX * width) + Math.sin(scrollY * 0.002 + idx) * 25;
        const y = currentY * height;

        const scale = nut.depth * (width < 768 ? 0.65 : 1);
        const drawW = nut.size * scale;
        const drawH = nut.size * scale;
        const rotationAngle = (scrollY * 0.0025 * (idx % 2 === 0 ? 1 : -1)) + (idx * 0.4);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotationAngle);

        ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
        ctx.shadowBlur = 18;
        ctx.shadowOffsetY = 10;

        ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
        ctx.restore();
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="sequence-background" aria-hidden="true">
      <canvas ref={canvasRef} className="sequence-canvas" />

      {/* Dark luxury overlay gradient for readability */}
      <div className="bg-overlay" />

      <style jsx>{`
        .sequence-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          pointer-events: none;
        }

        .sequence-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(13, 9, 5, 0.2) 0%, rgba(5, 3, 2, 0.75) 100%);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
