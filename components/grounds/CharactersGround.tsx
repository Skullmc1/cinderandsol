"use client";

import { useToonGradientMap } from "@/lib/three-utils";
import { Avatar } from "./characters/Avatar";
import { ThematicMesh } from "@/lib/three-utils";

export const CharactersGround = () => {
  const gradientMap = useToonGradientMap();

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshToonMaterial color="#d4a373" gradientMap={gradientMap} />
      </mesh>

      {/* Main Characters: Ezekiel and Eris */}
      <group position={[0, 0, -3]}>
        <Avatar
          gender="male"
          position={[-1.2, 0, 0]}
          rotation={[0, 0.3, 0]}
          gradientMap={gradientMap}
        />
        <Avatar
          gender="female"
          position={[1.2, 0, 0.2]}
          rotation={[0, -0.2, 0]}
          gradientMap={gradientMap}
        />
      </group>

      {/* Small Camp Debris */}
      <ThematicMesh
        geometry={<boxGeometry args={[0.8, 0.4, 0.8]} />}
        color="#555555"
        position={[-3, 0.2, -1]}
        rotation={[0, 0.8, 0]}
        gradientMap={gradientMap}
      />
      <ThematicMesh
        geometry={<cylinderGeometry args={[0.1, 0.1, 1.2, 6]} />}
        color="#4a2c0f"
        position={[3, 0.05, -2]}
        rotation={[0, 0, Math.PI / 2.2]}
        gradientMap={gradientMap}
      />
    </>
  );
};
