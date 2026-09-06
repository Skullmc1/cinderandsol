"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Import modular ground components
import { HeroGround } from "./grounds/HeroGround";
import { AboutGround } from "./grounds/AboutGround";
import { CharactersGround } from "./grounds/CharactersGround";
import { PlayGround } from "./grounds/PlayGround";
import { FooterGround } from "./grounds/FooterGround";

const SectionContainer = ({ children, page, currentSection }: any) => {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    const isVisible = page === currentSection;
    const isFuture = page > currentSection;
    const isPast = page < currentSection;

    // Layering logic: each section sits at a unique Z depth based on its index
    // Hero (0) is front, Footer (4) is back.
    const baseZ = page * -10;
    const targetZ = isVisible ? baseZ : isPast ? baseZ + 40 : baseZ - 20;
    const targetY = isVisible ? -0.8 : isFuture ? -1.5 : -10;
    const targetScale = isVisible ? 1 : 0.5;
    const targetRotation = isVisible ? 0 : isPast ? -0.3 : 0.3;

    const speed = 5;
    group.current.position.z = THREE.MathUtils.lerp(
      group.current.position.z,
      targetZ,
      delta * speed,
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      targetY,
      delta * speed,
    );

    const currentScale = group.current.scale.x;
    const nextScale = THREE.MathUtils.lerp(
      currentScale,
      targetScale,
      delta * speed,
    );
    group.current.scale.setScalar(nextScale);

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetRotation,
      delta * speed,
    );
  });

  return <group ref={group}>{children}</group>;
};

export const Ground = ({ section }: { section: number }) => {
  return (
    <group>
      {/* Hero Section */}
      <SectionContainer page={0} currentSection={section}>
        <HeroGround />
      </SectionContainer>

      {/* About Section - Scorched Earth */}
      <SectionContainer page={1} currentSection={section}>
        <AboutGround />
      </SectionContainer>

      {/* Characters Section - Fiery Chasm */}
      <SectionContainer page={2} currentSection={section}>
        <CharactersGround />
      </SectionContainer>

      {/* How to Play Section - Glowing Runes */}
      <SectionContainer page={3} currentSection={section}>
        <PlayGround />
      </SectionContainer>

      {/* Footer Section - Desolate Wasteland */}
      <SectionContainer page={4} currentSection={section}>
        <FooterGround />
      </SectionContainer>
    </group>
  );
};
