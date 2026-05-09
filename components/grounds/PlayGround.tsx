"use client";

import { useRef, useMemo } from "react";
import * as THREE from "three";
import { ThematicMesh, useToonGradientMap } from "@/lib/three-utils";
import { Outlines } from "@react-three/drei";

const TOON_OUTLINE_COLOR = "#000000"; // Assuming the sun's outline is black
const TOON_OUTLINE_THICKNESS = 0.25; // Re-using from sun for consistency

export const PlayGround = () => {
  const gradientMap = useToonGradientMap();
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshToonMaterial color="#cc7722" gradientMap={gradientMap} />{" "}
        {/* Burnt Sienna */}
      </mesh>
      <group position={[0, 1, -10]}>
        <mesh castShadow>
          <torusGeometry args={[4, 0.6, 32, 100]} />
          <meshToonMaterial
            color="#ffd700"
            emissive="#ffc125"
            emissiveIntensity={0.5}
            gradientMap={gradientMap}
          />{" "}
          {/* Gold */}
          <Outlines thickness={0.3} color={TOON_OUTLINE_COLOR} />
        </mesh>
      </group>
    </>
  );
};
