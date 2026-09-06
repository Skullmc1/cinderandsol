"use client";

import * as THREE from "three";
import { ThematicMesh } from "@/lib/three-utils";

interface RuinProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  variant?: "pillar" | "wall" | "arch";
  gradientMap: THREE.Texture;
}

export const Ruin = ({
  position,
  rotation = [0, 0, 0],
  scale = 1,
  variant = "pillar",
  gradientMap,
}: RuinProps) => {
  const concreteColor = "#6f6f6f";
  const rebarColor = "#3a200a";

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {variant === "pillar" && (
        <group>
          {/* Main Pillar Body */}
          <ThematicMesh
            geometry={<boxGeometry args={[1.5, 4, 1.5]} />}
            color={concreteColor}
            position={[0, 2, 0]}
            rotation={[0.1, 0.2, -0.05]}
            gradientMap={gradientMap}
          />
          {/* Exposed Rebar */}
          <group position={[0, 4, 0]}>
            <ThematicMesh
              geometry={<cylinderGeometry args={[0.03, 0.03, 1.5, 4]} />}
              color={rebarColor}
              position={[0.2, 0.5, 0.2]}
              rotation={[0.5, 0.5, 0]}
              gradientMap={gradientMap}
            />
            <ThematicMesh
              geometry={<cylinderGeometry args={[0.03, 0.03, 1.2, 4]} />}
              color={rebarColor}
              position={[-0.3, 0.4, -0.1]}
              rotation={[-0.3, 1.2, 0.2]}
              gradientMap={gradientMap}
            />
          </group>
        </group>
      )}

      {variant === "wall" && (
        <group>
          <ThematicMesh
            geometry={<boxGeometry args={[4, 2.5, 0.8]} />}
            color={concreteColor}
            position={[0, 1.25, 0]}
            rotation={[0, 0, 0.05]}
            gradientMap={gradientMap}
          />
          {/* Chunk missing from wall */}
          <group position={[1.5, 2, 0]} rotation={[0, 0, -0.4]}>
             <ThematicMesh
              geometry={<boxGeometry args={[2, 1, 0.9]} />}
              color={rebarColor} // Shadow/Internal
              position={[0, 0, 0]}
              gradientMap={gradientMap}
            />
          </group>
        </group>
      )}

      {variant === "arch" && (
        <group>
          <ThematicMesh
            geometry={<boxGeometry args={[1, 5, 1]} />}
            color={concreteColor}
            position={[-2, 2.5, 0]}
            gradientMap={gradientMap}
          />
          <ThematicMesh
            geometry={<boxGeometry args={[1, 3.5, 1]} />}
            color={concreteColor}
            position={[2, 1.75, 0]}
            gradientMap={gradientMap}
          />
          <ThematicMesh
            geometry={<boxGeometry args={[5, 1, 1.2]} />}
            color={concreteColor}
            position={[0, 4.5, 0]}
            rotation={[0, 0, -0.1]}
            gradientMap={gradientMap}
          />
        </group>
      )}
    </group>
  );
};
