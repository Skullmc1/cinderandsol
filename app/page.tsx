"use client";

import { Canvas } from "@react-three/fiber";
import { Experience } from "@/components/Experience";
import { Overlay } from "@/components/Overlay";
import { Suspense, useState, useRef, useEffect } from "react";

export default function Home() {
  const [section, setSection] = useState(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current) return;

      if (Math.abs(e.deltaY) < 30) return; // Ignore small movements

      if (e.deltaY > 0) {
        setSection((prev) => Math.min(prev + 1, 4));
      } else {
        setSection((prev) => Math.max(prev - 1, 0));
      }

      isAnimating.current = true;
      setTimeout(() => {
        isAnimating.current = false;
      }, 1200); // Slightly longer cooldown to match animations
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isAnimating.current) return;
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) < 50) return;

      if (deltaY > 0) {
        setSection((prev) => Math.min(prev + 1, 4));
      } else {
        setSection((prev) => Math.max(prev - 1, 0));
      }

      isAnimating.current = true;
      setTimeout(() => {
        isAnimating.current = false;
      }, 1200);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <main className="h-screen w-full relative overflow-hidden select-none">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas
            shadows
            camera={{ position: [0, 2, 5], fov: 45 }}
            gl={{ antialias: true }}
            dpr={[1, 2]}
          >
            <Experience section={section} />
          </Canvas>
        </Suspense>
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <Overlay section={section} />
      </div>
    </main>
  );
}
