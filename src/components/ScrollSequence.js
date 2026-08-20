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

    // 1. Eagerly preload all 250 frames from 001 to 250 for instant scroll scrubbing
    const loadFrame = (index, isEager = false) => {
      if (frames[index]) return;
      const img = new Image();
      if (!isEager) img.fetchPriority = "low";
      const paddedIndex = String(index + 1).padStart(3, '0');
      img.src = `/ezgif-606e679e899d5166-jpg/ezgif-frame-${paddedIndex}.jpg`;

      img.onload = () => {
        loadedCount++;
        setFramesLoaded(loadedCount);
      };
      frames[index] = img;
    };

    // Stage 1: Load initial 5 frames eagerly
    for (let i = 0; i < 5; i++) loadFrame(i, true);

    // Stage 2: Fast progressive load for all remaining frames
    let currentBatch = 5;
    const loadRemaining = () => {
      if (currentBatch >= totalFrames) return;
      const end = Math.min(currentBatch + 10, totalFrames);
      for (let i = currentBatch; i < end; i++) loadFrame(i, false);
      currentBatch = end;
    };

    const batchInterval = setInterval(loadRemaining, 300);

    const scrollHandler = () => {
      loadRemaining();
      if (currentBatch >= totalFrames) {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
    window.addEventListener("scroll", scrollHandler, { passive: true });

    // 2. Preload Real Dry Fruits PNG Overlay Assets
    const nutImgs = [];
    REAL_NUT_ASSETS.forEach((asset, idx) => {
      const img = new Image();
      img.src = asset.src;
      nutImgs[idx] = img;
    });
    nutImagesRef.current = nutImgs;

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      clearInterval(batchInterval);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    // Define 3D parallax positions for floating real dry fruit objects
    const nutItems = REAL_NUT_ASSETS.map((asset, index) => {
      const angle = (index / REAL_NUT_ASSETS.length) * Math.PI * 2;
      return {
        ...asset,
        baseX: 0.12 + (index % 2 === 0 ? (index * 0.08) : 0.6 + (index * 0.04)),
        baseY: 0.15 + ((index * 0.18) % 0.85),
        depth: 0.6 + (index % 4) * 0.15
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

    let currentFrameFloat = 0;

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

      // Calculate exact 0 to 1 scroll progress across page
      const maxScroll = document.documentElement.scrollHeight - height;
      const scrollY = window.scrollY;
      const scrollProgress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;

      // ----------------------------------------------------
      // LAYER 1: 3D SEQUENCE FRAME CANVAS (ezgif-frame-001.jpg -> ezgif-frame-250.jpg)
      // 1:1 Lerp-Smoothed Frame Scrubbing
      // ----------------------------------------------------
      const targetFrame = scrollProgress * (totalFrames - 1);
      currentFrameFloat += (targetFrame - currentFrameFloat) * 0.2;

      const frameIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.round(currentFrameFloat))
      );

      const frameImg = frameImagesRef.current[frameIndex] || frameImagesRef.current[0];

      if (frameImg && frameImg.complete && frameImg.width > 0) {
        const scale = Math.max(width / frameImg.width, height / frameImg.height);
        const x = (width / 2) - (frameImg.width / 2) * scale;
        const y = (height / 2) - (frameImg.height / 2) * scale;
        ctx.drawImage(frameImg, x, y, frameImg.width * scale, frameImg.height * scale);
      } else {
        const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 100, width / 2, height / 2, Math.max(width, height));
        bgGrad.addColorStop(0, "#160e07");
        bgGrad.addColorStop(1, "#050302");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // ----------------------------------------------------
      // LAYER 2: SPARKLING GOLD DUST PARTICLES OVERLAY
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
      // LAYER 3: 3D FLOATING DRY FRUIT OBJECTS OVERLAY
      // (Almonds, Cashews, Pistachios, Dates, Strawberries)
      // ----------------------------------------------------
      nutItems.forEach((nut, idx) => {
        const img = nutImagesRef.current[idx];
        if (!img || !img.complete || !img.width) return;

        const scrollOffset = (scrollProgress * 1.5) % 1;
        let currentY = ((nut.baseY - scrollProgress * 1.1 + scrollOffset) % 1.2);
        if (currentY < -0.1) currentY += 1.2;

        const x = (nut.baseX * width) + Math.sin(scrollY * 0.0015 + idx) * 30;
        const y = currentY * height;

        const isMobile = width < 768;
        const scale = nut.depth * (isMobile ? 0.45 : 0.95);
        const drawW = nut.size * scale;
        const drawH = nut.size * scale;
        const rotationAngle = (scrollY * 0.002 * (idx % 2 === 0 ? 1 : -1)) + (idx * 0.5);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotationAngle);
        ctx.shadowColor = "rgba(0, 0, 0, 0.75)";
        ctx.shadowBlur = 20;
        ctx.shadowOffsetY = 12;
        ctx.globalAlpha = isMobile ? 0.35 : 0.85;

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
