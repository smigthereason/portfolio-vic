// src/components/BackgroundVideo.tsx
"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // Half speed for better visibility
    }
  }, []);

  return (
    <>
      {/* Background Video */}
      <video
        preload="auto"
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/210824.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/50 -z-10" />
    </>
  );
}
