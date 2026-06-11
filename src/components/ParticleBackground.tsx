"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any lingering canvases from hot-reloads
    containerRef.current.innerHTML = "";

    // 1. Scene, Camera, and WebGL Renderer Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60, // Lower field of view compresses space for an elegant depth perspective
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 6;

    // powerPreference: "high-performance" hints to laptops/phones to use their dedicated GPU
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Caps performance heavy retina/4K screens
    containerRef.current.appendChild(renderer.domElement);

    // 2. Programmatically Generate a Soft Blur Circle Texture
    const circleCanvas = document.createElement("canvas");
    circleCanvas.width = 64;
    circleCanvas.height = 64;
    const ctx = circleCanvas.getContext("2d");
    if (ctx) {
      // Create a smooth radial gradient to eliminate sharp pixelated edges
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const circleTexture = new THREE.CanvasTexture(circleCanvas);

    // 3. Build the Particle Geometry (Halved density for an elegant minimalist look)
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16; // Wider spread layout
      positions[i + 1] = (Math.random() - 0.5) * 16;
      positions[i + 2] = (Math.random() - 0.5) * 16;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // 4. Material Configuration (Darkened to a sleek, deeper blue shade)
    const material = new THREE.PointsMaterial({
      color: 0x0055cc, // Darker, premium cobalt-blue hue
      size: 0.1, // Elegantly sized particles
      map: circleTexture,
      transparent: true,
      opacity: 0.45, // Subtle transparency for a high-end look
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // 5. High-Performance Hardware-Accelerated Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = Date.now() * 0.00015; // Slow, intentional cinematic pacing

      // Instead of forcing the CPU to loop through array indices, we rotate and shift
      // the system matrix as a whole. This is natively calculated straight on the GPU.
      particleSystem.rotation.y = time;
      particleSystem.rotation.x = time * 0.5;

      // Create an elegant, continuous organic slow sway
      particleSystem.position.y = Math.sin(time * 2) * 0.15;
      particleSystem.position.x = Math.cos(time * 1.5) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Handle Responsive Resizing
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // 7. Complete Memory/Cache Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      geometry.dispose();
      material.dispose();
      circleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none"
      />
      {/* Premium deep gradient background overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#010814] via-[#0b1329] to-black -z-20" />
    </>
  );
}
