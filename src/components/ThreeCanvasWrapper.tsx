"use client";

import dynamic from "next/dynamic";

// Dynamically import the heavy Three.js canvas component safely on the client side
const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false },
);

export default function ThreeCanvasWrapper() {
  return <ParticleBackground />;
}
