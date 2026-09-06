"use client";

import * as THREE from "three";
import { ThematicMesh } from "@/lib/three-utils";

interface DeadTreeProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  variant?: "gnarled" | "twisted" | "shattered" | "reacher";
  gradientMap: THREE.Texture;
}

const Branch = ({
  args,
  position,
  rotation,
  color,
  gradientMap,
}: {
  args: [number, number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  gradientMap: THREE.Texture;
}) => (
  <group position={position} rotation={rotation}>
    <ThematicMesh
      geometry={<cylinderGeometry args={args} />}
      color={color}
      position={[0, args[2] / 2, 0]}
      gradientMap={gradientMap}
    />
  </group>
);

const Roots = ({
  color,
  gradientMap,
}: {
  color: string;
  gradientMap: THREE.Texture;
}) => (
  <group>
    {[0, 1, 2, 3].map((i) => (
      <group key={i} rotation={[0, (i * Math.PI) / 2 + Math.random() * 0.5, 0]}>
        <ThematicMesh
          geometry={<cylinderGeometry args={[0.05, 0.25, 1.8, 4]} />}
          color={color}
          position={[0.6, 0.05, 0]}
          rotation={[0, 0, Math.PI / 2.1]}
          gradientMap={gradientMap}
        />
      </group>
    ))}
  </group>
);

export const DeadTree = ({
  position,
  rotation = [0, 0, 0],
  scale = 1,
  variant = "gnarled",
  gradientMap,
}: DeadTreeProps) => {
  const mainColor = "#8d5b4a"; // Lighter brown
  const rootColor = "#6f452a"; // Medium brown (replaces dark)

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Roots color={rootColor} gradientMap={gradientMap} />

      {variant === "gnarled" && (
        <group>
          <Branch
            args={[0.25, 0.45, 3.5, 6]}
            position={[0, 0, 0]}
            rotation={[0.1, 0, 0.1]}
            color={mainColor}
            gradientMap={gradientMap}
          />
          <Branch
            args={[0.1, 0.2, 2.2, 5]}
            position={[0, 1.5, 0]}
            rotation={[0.5, 1, 0.8]}
            color={mainColor}
            gradientMap={gradientMap}
          />
          <Branch
            args={[0.08, 0.18, 1.8, 5]}
            position={[0, 2.5, 0]}
            rotation={[-0.4, -1.5, 0.6]}
            color={mainColor}
            gradientMap={gradientMap}
          />
          <Branch
            args={[0.12, 0.22, 2.0, 5]}
            position={[0, 1.0, 0]}
            rotation={[0.2, 3, -0.7]}
            color={mainColor}
            gradientMap={gradientMap}
          />
        </group>
      )}

      {variant === "twisted" && (
        <group>
          <Branch
            args={[0.2, 0.4, 2, 6]}
            position={[0, 0, 0]}
            rotation={[0, 0, 0.3]}
            color={mainColor}
            gradientMap={gradientMap}
          />
          <group position={[-0.3, 1.8, 0]} rotation={[0, 0, 0.6]}>
            <Branch
              args={[0.12, 0.25, 2.5, 5]}
              position={[0, 0, 0]}
              rotation={[0, 0, 0.4]}
              color={mainColor}
              gradientMap={gradientMap}
            />
            <Branch
              args={[0.05, 0.15, 2.0, 4]}
              position={[0, 2.0, 0]}
              rotation={[0.3, 1.2, 0.5]}
              color={mainColor}
              gradientMap={gradientMap}
            />
          </group>
        </group>
      )}

      {variant === "shattered" && (
        <group>
          <ThematicMesh
            geometry={<cylinderGeometry args={[0.35, 0.55, 1.8, 5]} />}
            color={mainColor}
            position={[0, 0.9, 0]}
            gradientMap={gradientMap}
          />
          <Branch
            args={[0.15, 0.3, 3.0, 4]}
            position={[0, 1.2, 0]}
            rotation={[0.8, 1.5, 0]}
            color={mainColor}
            gradientMap={gradientMap}
          />
          <Branch
            args={[0.1, 0.25, 2.2, 4]}
            position={[0, 0.8, 0]}
            rotation={[-0.6, -1.0, -0.4]}
            color={mainColor}
            gradientMap={gradientMap}
          />
        </group>
      )}

      {variant === "reacher" && (
        <group>
          <Branch
            args={[0.15, 0.35, 5.5, 5]}
            position={[0, 0, 0]}
            rotation={[0.15, 0, -0.05]}
            color={mainColor}
            gradientMap={gradientMap}
          />
          <Branch
            args={[0.05, 0.15, 2.5, 4]}
            position={[0, 3.5, 0]}
            rotation={[0.4, 0.8, 0.3]}
            color={mainColor}
            gradientMap={gradientMap}
          />
          <Branch
            args={[0.04, 0.12, 2.2, 4]}
            position={[0, 4.5, 0]}
            rotation={[-0.3, -1.2, -0.4]}
            color={mainColor}
            gradientMap={gradientMap}
          />
        </group>
      )}
    </group>
  );
};
