"use client";

import { ThematicMesh, useToonGradientMap } from "@/lib/three-utils";

export const AboutGround = () => {
  const gradientMap = useToonGradientMap();
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshToonMaterial color="#a0522d" gradientMap={gradientMap} />{" "}
        {/* Sienna */}
      </mesh>
      <group position={[0, 0, -6]}>
        <ThematicMesh
          geometry={<icosahedronGeometry args={[2, 4]} />}
          color="#d2691e" /* Chocolate */
          position={[0, 1, 0]}
          gradientMap={gradientMap}
        />
      </group>
    </>
  );
};
