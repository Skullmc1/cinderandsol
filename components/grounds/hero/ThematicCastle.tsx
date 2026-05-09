"use client";

import * as THREE from "three";
import { ThematicMesh } from "@/lib/three-utils";

interface CastleTowerProps {
  position: [number, number, number];
  scale?: number;
  height?: number;
  radius?: number;
  gradientMap: THREE.Texture;
}

export const CastleTower = ({
  position,
  scale = 1,
  height = 4,
  radius = 0.8,
  gradientMap,
}: CastleTowerProps) => (
  <group position={position} scale={scale}>
    {/* Tower Base */}
    <ThematicMesh
      geometry={<cylinderGeometry args={[radius, radius * 1.2, height, 8]} />}
      color="#8d5b4a"
      position={[0, height / 2, 0]}
      gradientMap={gradientMap}
    />
    {/* Crenellations (Toothed top) */}
    <ThematicMesh
      geometry={
        <cylinderGeometry args={[radius * 1.1, radius * 1.1, 0.5, 8]} />
      }
      color="#b86b4a"
      position={[0, height + 0.1, 0]}
      gradientMap={gradientMap}
    />
    {/* Tower Roof */}
    <ThematicMesh
      geometry={<coneGeometry args={[radius * 1.3, 2, 8]} />}
      color="#b86b4a"
      position={[0, height + 1.2, 0]}
      gradientMap={gradientMap}
    />
  </group>
);

interface CastleWallProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  length?: number;
  gradientMap: THREE.Texture;
}

export const CastleWall = ({
  position,
  rotation = [0, 0, 0],
  length = 4,
  gradientMap,
}: CastleWallProps) => (
  <group position={position} rotation={rotation}>
    <ThematicMesh
      geometry={<boxGeometry args={[length, 3, 1]} />}
      color="#8d5b4a"
      position={[0, 1.5, 0]}
      gradientMap={gradientMap}
    />
    {/* Walkway/Crenellations */}
    <ThematicMesh
      geometry={<boxGeometry args={[length, 0.5, 1.2]} />}
      color="#b86b4a"
      position={[0, 3.1, 0]}
      gradientMap={gradientMap}
    />
  </group>
);

interface ThematicCastleProps {
  gradientMap: THREE.Texture;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

export const ThematicCastle = ({
  gradientMap,
  position = [6, -0.5, -18],
  rotation = [0, -Math.PI / 6, 0], // Angled toward viewpoint
  scale = 0.4,
}: ThematicCastleProps) => (
  <group position={position} rotation={rotation} scale={scale}>
    {/* Main Gatehouse */}
    <ThematicMesh
      geometry={<boxGeometry args={[3, 4, 3]} />}
      color="#b86b4a"
      position={[0, 2, 0]}
      gradientMap={gradientMap}
    />
    {/* Gate Opening (Dark inset) */}
    <ThematicMesh
      geometry={<boxGeometry args={[1.5, 2.5, 0.2]} />}
      color="#2a1a0a"
      position={[0, 1.25, 1.5]}
      gradientMap={gradientMap}
    />

    {/* Walls */}
    <CastleWall position={[-3.5, 0, 0]} length={4} gradientMap={gradientMap} />
    <CastleWall position={[3.5, 0, 0]} length={4} gradientMap={gradientMap} />
    <CastleWall
      position={[0, 0, -3.5]}
      length={6}
      rotation={[0, 0, 0]}
      gradientMap={gradientMap}
    />
    <CastleWall
      position={[-5.5, 0, -2.5]}
      length={6}
      rotation={[0, Math.PI / 2, 0]}
      gradientMap={gradientMap}
    />
    <CastleWall
      position={[5.5, 0, -2.5]}
      length={6}
      rotation={[0, Math.PI / 2, 0]}
      gradientMap={gradientMap}
    />

    {/* Front Towers */}
    <CastleTower
      position={[-5.5, 0, 0.5]}
      height={5}
      radius={1}
      gradientMap={gradientMap}
    />
    <CastleTower
      position={[5.5, 0, 0.5]}
      height={5}
      radius={1}
      gradientMap={gradientMap}
    />

    {/* Back Towers */}
    <CastleTower
      position={[-5.5, 0, -5.5]}
      height={7}
      radius={1.2}
      gradientMap={gradientMap}
    />
    <CastleTower
      position={[5.5, 0, -5.5]}
      height={7}
      radius={1.2}
      gradientMap={gradientMap}
    />

    {/* Central Keep/Sanctum */}
    <group position={[0, 0, -4]}>
      <ThematicMesh
        geometry={<boxGeometry args={[5, 6, 5]} />}
        color="#8d5b4a"
        position={[0, 3, 0]}
        gradientMap={gradientMap}
      />
      <ThematicMesh
        geometry={<cylinderGeometry args={[1, 1, 8, 8]} />}
        color="#b86b4a"
        position={[0, 4, 0]}
        gradientMap={gradientMap}
      />
      <ThematicMesh
        geometry={<coneGeometry args={[1.5, 3, 8]} />}
        color="#d4a373"
        position={[0, 9, 0]}
        gradientMap={gradientMap}
      />
    </group>
  </group>
);
