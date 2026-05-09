"use client";

import * as THREE from "three";
import { ThematicMesh, useToonGradientMap } from "@/lib/three-utils";

export const CharactersGround = () => {
  const gradientMap = useToonGradientMap();
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshToonMaterial color="#8b0000" gradientMap={gradientMap} />{" "}
        {/* Dark Red */}
      </mesh>
      <group position={[0, 0, -8]}>
        <ThematicMesh
          geometry={<cylinderGeometry args={[0.5, 0.5, 4, 32]} />}
          color="#ff4500" /* Orange Red */
          position={[-3, 2, 0]}
          gradientMap={gradientMap}
        />
        <ThematicMesh
          geometry={<cylinderGeometry args={[0.5, 0.5, 4, 32]} />}
          color="#ff8c00" /* Dark Orange */
          position={[3, 2, 0]}
          gradientMap={gradientMap}
        />
      </group>
    </>
  );
};
