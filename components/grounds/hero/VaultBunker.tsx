"use client";

import * as THREE from "three";
import { ThematicMesh } from "@/lib/three-utils";

interface VaultBunkerProps {
  gradientMap: THREE.Texture;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

export const VaultBunker = ({
  gradientMap,
  position = [6, -0.5, -18],
  rotation = [0, -Math.PI / 6, 0],
  scale = 0.5,
}: VaultBunkerProps) => (
  <group position={position} rotation={rotation} scale={scale}>
    {/* Main Concrete Structure */}
    <ThematicMesh
      geometry={<boxGeometry args={[8, 5, 6]} />}
      color="#6f6f6f" // Concrete Grey
      position={[0, 2.5, 0]}
      gradientMap={gradientMap}
    />

    {/* Reinforced Slanted Sides */}
    <ThematicMesh
      geometry={<boxGeometry args={[2, 6, 6.2]} />}
      color="#555555"
      position={[-4.5, 2.5, 0]}
      rotation={[0, 0, 0.1]}
      gradientMap={gradientMap}
    />
    <ThematicMesh
      geometry={<boxGeometry args={[2, 6, 6.2]} />}
      color="#555555"
      position={[4.5, 2.5, 0]}
      rotation={[0, 0, -0.1]}
      gradientMap={gradientMap}
    />

    {/* The Blast Door Frame */}
    <ThematicMesh
      geometry={<boxGeometry args={[4, 4, 1]} />}
      color="#3a3a3a"
      position={[0, 2, 3]}
      gradientMap={gradientMap}
    />

    {/* The Door (Dark Inset) */}
    <ThematicMesh
      geometry={<boxGeometry args={[3, 3.5, 0.2]} />}
      color="#1a1a1a"
      position={[0, 1.75, 3.5]}
      gradientMap={gradientMap}
    />

    {/* Industrial Details: Rooftop Antenna */}
    <group position={[-2, 5, -1]}>
      <ThematicMesh
        geometry={<cylinderGeometry args={[0.05, 0.05, 4, 4]} />}
        color="#2a1a0a"
        position={[0, 2, 0]}
        gradientMap={gradientMap}
      />
      <ThematicMesh
        geometry={<sphereGeometry args={[0.2, 8, 8]} />}
        color="#ff9900"
        position={[0, 4, 0]}
        gradientMap={gradientMap}
      />
    </group>

    {/* Ventilation Pipes */}
    <group position={[3, 5, 0]}>
       <ThematicMesh
        geometry={<cylinderGeometry args={[0.3, 0.3, 1, 6]} />}
        color="#4a2c0f"
        position={[0, 0.5, 0]}
        gradientMap={gradientMap}
      />
      <ThematicMesh
        geometry={<torusGeometry args={[0.4, 0.2, 8, 12, Math.PI / 2]} />}
        color="#4a2c0f"
        position={[0.4, 1, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        gradientMap={gradientMap}
      />
    </group>

    {/* Heavy Foundation Blocks */}
    <ThematicMesh
      geometry={<boxGeometry args={[12, 1, 10]} />}
      color="#444444"
      position={[0, 0.1, 0]}
      gradientMap={gradientMap}
    />
  </group>
);
