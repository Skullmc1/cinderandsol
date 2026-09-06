"use client";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { ThematicMesh } from "@/lib/three-utils";

interface SolCradleProps {
  position: [number, number, number];
  gradientMap: THREE.Texture;
}

export const SolCradle = ({ position, gradientMap }: SolCradleProps) => {
  const coreRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!coreRef.current) return;
    const time = state.clock.getElapsedTime();
    coreRef.current.rotation.y = time * 0.5;
    coreRef.current.position.y = Math.sin(time * 2) * 0.1;
  });

  return (
    <group position={position}>
      {/* Heavy Base Support */}
      <ThematicMesh
        geometry={<cylinderGeometry args={[1.5, 2, 0.8, 8]} />}
        color="#3a3a3a"
        position={[0, 0.4, 0]}
        gradientMap={gradientMap}
      />

      {/* Floating High-Tech Cradle Pod */}
      <group ref={coreRef} position={[0, 1.5, 0]}>
        {/* Outer Frame */}
        <ThematicMesh
          geometry={<icosahedronGeometry args={[0.8, 1]} />}
          color="#555555"
          gradientMap={gradientMap}
        />

        {/* Glowing Sol-Seed Core */}
        <mesh>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshBasicMaterial color="#ff9900" />
        </mesh>

        {/* Orbiting Tech Rings */}
        <group rotation={[Math.PI / 4, 0, 0]}>
          <ThematicMesh
            geometry={<torusGeometry args={[1.2, 0.05, 8, 32]} />}
            color="#ff9900"
            gradientMap={gradientMap}
          />
        </group>
      </group>

      {/* Ground Glow (Fake light effect) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial color="#ff9900" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};
