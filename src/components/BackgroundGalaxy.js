"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundGalaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const startTime = performance.now();

    // Scene setup
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false, // Optimised performance
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Particle Generation
    const count = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const goldPalette = [
      new THREE.Color(0xdaa54a),
      new THREE.Color(0xe8c07a),
      new THREE.Color(0xc8912e),
      new THREE.Color(0xb07824)
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const angle = (i / count) * Math.PI * 18;
      const radius = 10 + (i / count) * 20;

      positions[i3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 8;
      positions[i3 + 1] = (i / count - 0.5) * 60 + (Math.random() - 0.5) * 8;
      positions[i3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 8;

      const color = goldPalette[Math.floor(Math.random() * goldPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 4 + 1.5;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Custom shader
    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.5) }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;
        uniform float uTime;
        uniform float uPixelRatio;

        void main() {
          vColor = color;
          vec3 pos = position;

          pos.y += sin(uTime * 0.4 + pos.x * 0.05) * 1.5;
          pos.x += cos(uTime * 0.3 + pos.y * 0.05) * 1.5;

          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPos;

          gl_PointSize = size * uPixelRatio * (18.0 / -mvPos.z);
          vOpacity = 0.25 + 0.75 * abs(sin(uTime * 0.8 + pos.x * 0.2));
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;

          float glow = 1.0 - smoothstep(0.0, 0.5, dist);
          glow = pow(glow, 2.0);

          gl_FragColor = vec4(vColor, glow * vOpacity * 0.55);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Animation Loop
    let animationId;
    const animate = () => {
      const elapsed = (performance.now() - startTime) * 0.001;
      particleMaterial.uniforms.uTime.value = elapsed;

      particles.rotation.y = elapsed * 0.015;
      particles.rotation.x = Math.sin(elapsed * 0.01) * 0.05;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      particleMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 1.5);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Clean up resources to prevent memory leaks
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="particles-canvas" aria-hidden="true" />;
}
