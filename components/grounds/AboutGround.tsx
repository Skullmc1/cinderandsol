"use client";

import { useToonGradientMap } from "@/lib/three-utils";
import { Ruin } from "./about/Ruin";
import { SolCradle } from "./about/SolCradle";
import { ThematicMesh } from "@/lib/three-utils";

export const AboutGround = () => {
  const gradientMap = useToonGradientMap();

  return (
    <>
      {/* Expanded Ground - Consistent with Hero palette */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshToonMaterial color="#d4a373" gradientMap={gradientMap} />
      </mesh>

      {/* The Central Landmark: Sol-Seed Cradle - Moved closer */}
      <SolCradle position={[0, 0, -4]} gradientMap={gradientMap} />

      {/* Rusted Ruins scattered around - Moved closer into view */}
      <Ruin
        variant="pillar"
        position={[-6, 0, 2]}
        rotation={[0, 0.5, 0.1]}
        gradientMap={gradientMap}
      />
      <Ruin
        variant="wall"
        position={[8, 0, -5]}
        rotation={[0, -0.8, 0]}
        gradientMap={gradientMap}
      />
      <Ruin
        variant="arch"
        position={[-10, 0, -12]}
        rotation={[0, 0.3, 0]}
        scale={0.7}
        gradientMap={gradientMap}
      />
      <Ruin
        variant="pillar"
        position={[5, 0, 4]}
        rotation={[0, -0.4, -0.05]}
        scale={0.6}
        gradientMap={gradientMap}
      />

      {/* Background Ruins for Depth */}
      <Ruin
        variant="wall"
        position={[-20, 0, -30]}
        rotation={[0, 1.2, 0]}
        scale={1.5}
        gradientMap={gradientMap}
      />
      <Ruin
        variant="pillar"
        position={[25, 0, -35]}
        rotation={[0, -0.2, 0]}
        scale={2.0}
        gradientMap={gradientMap}
      />

      {/* Small Concrete Debris */}
      <ThematicMesh
        geometry={<boxGeometry args={[1, 0.4, 1]} />}
        color="#555555"
        position={[4, 0.2, 5]}
        rotation={[0.5, 0.8, 0.3]}
        gradientMap={gradientMap}
      />
      <ThematicMesh
        geometry={<boxGeometry args={[0.8, 0.3, 1.2]} />}
        color="#444444"
        position={[-6, 0.15, 0]}
        rotation={[-0.2, 0.4, 0.7]}
        gradientMap={gradientMap}
      />
    </>
  );
};
