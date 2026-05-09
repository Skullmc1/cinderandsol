"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Sun } from "./Sun";
import { Ground } from "./Ground";

export const Experience = ({ section }: { section: number }) => {
  const sceneRef = useRef<THREE.Group>(null);

  return (
    <group ref={sceneRef}>
      {/* Warm ambient light */}
      <ambientLight intensity={0.7} color="#d4a373" />{" "}
      {/* Earthy orange/brown */}
      {/* Main sun-like directional light */}
      <directionalLight
        position={[10, 20, 10]}
        intensity={2.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
        color="#fff8dc"
      />{" "}
      {/* Creamy white */}
      {/* Secondary fill light for warmth and depth */}
      <directionalLight
        position={[-10, -10, -10]}
        intensity={1.0}
        color="#8d5b4a"
      />{" "}
      {/* Rusty red/brown */}
      <Sun section={section} />
      <Ground section={section} />
    </group>
  );
};
