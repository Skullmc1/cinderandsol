"use client";

import * as THREE from "three";
import { ThematicMesh } from "@/lib/three-utils";

interface AvatarProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  gender: "male" | "female";
  gradientMap: THREE.Texture;
}

export const Avatar = ({ position, rotation = [0, 0, 0], scale = 1, gender, gradientMap }: AvatarProps) => {
  const skinColor = "#d4a373";
  const clothColor = gender === "male" ? "#8d5b4a" : "#6f452a";
  const gearColor = "#555555";
  const highlightColor = "#ff9900";

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Body / Jumpsuit */}
      <ThematicMesh
        geometry={<boxGeometry args={[0.6, 1.2, 0.4]} />}
        color={clothColor}
        position={[0, 0.9, 0]}
        gradientMap={gradientMap}
      />

      {/* Head */}
      <ThematicMesh
        geometry={<boxGeometry args={[0.35, 0.35, 0.35]} />}
        color={skinColor}
        position={[0, 1.6, 0]}
        gradientMap={gradientMap}
      />

      {/* Legs */}
      <ThematicMesh
        geometry={<boxGeometry args={[0.2, 0.8, 0.2]} />}
        color={clothColor}
        position={[-0.15, 0.4, 0]}
        gradientMap={gradientMap}
      />
      <ThematicMesh
        geometry={<boxGeometry args={[0.2, 0.8, 0.2]} />}
        color={clothColor}
        position={[0.15, 0.4, 0]}
        gradientMap={gradientMap}
      />

      {/* Arms & Equipment */}
      {gender === "male" ? (
        <group>
          {/* Ezekiel: Spear */}
          <group position={[0.4, 1.2, 0]} rotation={[0, 0, -0.2]}>
            <ThematicMesh
              geometry={<cylinderGeometry args={[0.03, 0.03, 2.5, 4]} />}
              color={gearColor}
              position={[0, 0.2, 0]}
              gradientMap={gradientMap}
            />
            <ThematicMesh
              geometry={<coneGeometry args={[0.1, 0.4, 4]} />}
              color={highlightColor}
              position={[0, 1.45, 0]}
              gradientMap={gradientMap}
            />
          </group>
          {/* Ezekiel: Shield */}
          <group position={[-0.4, 1.0, 0.2]} rotation={[0, 0.5, 0]}>
            <ThematicMesh
              geometry={<boxGeometry args={[0.5, 0.7, 0.1]} />}
              color={gearColor}
              gradientMap={gradientMap}
            />
          </group>
        </group>
      ) : (
        <group>
          {/* Eris: Sol-Scanner */}
          <group position={[0.4, 1.1, 0.3]} rotation={[0.5, 0, 0]}>
            <ThematicMesh
              geometry={<boxGeometry args={[0.2, 0.3, 0.1]} />}
              color={gearColor}
              gradientMap={gradientMap}
            />
            <ThematicMesh
              geometry={<boxGeometry args={[0.15, 0.2, 0.05]} />}
              color={highlightColor}
              position={[0, 0, 0.05]}
              gradientMap={gradientMap}
            />
          </group>
          {/* Eris: Backpack (carrying Seed) */}
          <group position={[0, 1.0, -0.3]}>
            <ThematicMesh
              geometry={<boxGeometry args={[0.5, 0.6, 0.3]} />}
              color={gearColor}
              gradientMap={gradientMap}
            />
            <ThematicMesh
              geometry={<sphereGeometry args={[0.15, 8, 8]} />}
              color={highlightColor}
              position={[0, 0.1, 0.2]}
              gradientMap={gradientMap}
            />
          </group>
        </group>
      )}
    </group>
  );
};
