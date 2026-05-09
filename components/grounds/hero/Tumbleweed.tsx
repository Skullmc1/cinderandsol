"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { ThematicMesh } from "@/lib/three-utils";

interface TumbleweedProps {
  startPos: [number, number, number];
  speed: number;
  gradientMap: THREE.Texture;
}

export const Tumbleweed = ({
  startPos,
  speed,
  gradientMap,
}: TumbleweedProps) => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;

    const time = state.clock.getElapsedTime();
    const seed = startPos[0] * 100;

    ref.current.position.x = ((startPos[0] + time * speed + 30) % 60) - 30;
    ref.current.position.z = startPos[2];

    ref.current.position.y = Math.abs(Math.sin(time * 5 + seed)) * 0.4 + 0.3;

    ref.current.rotation.z -= delta * speed * 2;
    ref.current.rotation.y += delta * 1;
  });

  return (
    <group ref={ref}>
      <group rotation={[Math.PI / 4, 0, 0]}>
        <ThematicMesh
          geometry={<torusKnotGeometry args={[0.25, 0.015, 64, 8, 3, 5]} />}
          color="#8d5b4a"
          gradientMap={gradientMap}
        />
      </group>
      <group rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <ThematicMesh
          geometry={<torusKnotGeometry args={[0.26, 0.012, 64, 8, 4, 7]} />}
          color="#6f452a"
          gradientMap={gradientMap}
        />
      </group>
      <group rotation={[Math.PI / 2, Math.PI / 2, 0]}>
        <ThematicMesh
          geometry={<torusKnotGeometry args={[0.24, 0.018, 64, 8, 2, 3]} />}
          color="#7a4b3a"
          gradientMap={gradientMap}
        />
      </group>
      <group rotation={[0, 0, Math.PI / 4]}>
        <ThematicMesh
          geometry={<torusKnotGeometry args={[0.27, 0.01, 64, 8, 5, 8]} />}
          color="#5c3826"
          gradientMap={gradientMap}
        />
      </group>
    </group>
  );
};
