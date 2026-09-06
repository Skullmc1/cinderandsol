"use client";

import { useToonGradientMap } from "@/lib/three-utils";
import { TacticalPillar } from "./play/TacticalPillar";
import * as THREE from "three";

export const PlayGround = () => {
  const gradientMap = useToonGradientMap();

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshToonMaterial color="#d4a373" gradientMap={gradientMap} />
      </mesh>

      {/* Tactical Ritual Circle */}
      <group position={[0, 0, -4]}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 5;
          return (
            <TacticalPillar
              key={i}
              position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
              height={2 + Math.random() * 2}
              active={i % 2 === 0}
              gradientMap={gradientMap}
            />
          );
        })}

        {/* Central Tactical Node */}
        <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0, 3, 32]} />
          <meshBasicMaterial
            color="#ff9900"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* Distant Watchtower Silhouette */}
      <group position={[15, 0, -15]}>
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[2, 10, 2]} />
          <meshToonMaterial color="#8d5b4a" gradientMap={gradientMap} />
        </mesh>
      </group>
    </>
  );
};
