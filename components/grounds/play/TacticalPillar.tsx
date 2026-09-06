"use client";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { ThematicMesh } from "@/lib/three-utils";

interface TacticalPillarProps {
  position: [number, number, number];
  height: number;
  active?: boolean;
  gradientMap: THREE.Texture;
}

export const TacticalPillar = ({ position, height, active = false, gradientMap }: TacticalPillarProps) => {
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!glowRef.current) return;
    if (active) {
      const time = state.clock.getElapsedTime();
      glowRef.current.material.opacity = 0.3 + Math.sin(time * 3) * 0.2;
    } else {
      glowRef.current.material.opacity = 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Stone Pillar */}
      <ThematicMesh
        geometry={<boxGeometry args={[1, height, 1]} />}
        color="#a8a29e" // Warm light grey
        position={[0, height / 2, 0]}
        gradientMap={gradientMap}
      />

      {/* Glowing Rune / Panel */}
      <mesh ref={glowRef} position={[0, height * 0.7, 0.51]}>
        <planeGeometry args={[0.6, 0.6]} />
        <meshBasicMaterial color="#ff9900" transparent opacity={0.5} />
      </mesh>

      {/* Pillar Cap */}
      <ThematicMesh
        geometry={<boxGeometry args={[1.2, 0.2, 1.2]} />}
        color="#8d5b4a"
        position={[0, height, 0]}
        gradientMap={gradientMap}
      />
    </group>
  );
};
