"use client";

import { useToonGradientMap } from "@/lib/three-utils";
import { ThematicMesh } from "@/lib/three-utils";

export const FooterGround = () => {
  const gradientMap = useToonGradientMap();

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshToonMaterial color="#d4a373" gradientMap={gradientMap} />
      </mesh>

      {/* Final Landmark: Collapsed Skyscraper */}
      <group position={[5, 0, -10]} rotation={[0, -0.4, 0.2]}>
        <ThematicMesh
          geometry={<boxGeometry args={[4, 15, 4]} />}
          color="#a8a29e"
          position={[0, 7.5, 0]}
          gradientMap={gradientMap}
        />
        {/* Broken Floor Slabs */}
        {[1, 2, 3, 4].map((i) => (
          <ThematicMesh
            key={i}
            geometry={<boxGeometry args={[5, 0.3, 5]} />}
            color="#8d5b4a"
            position={[0, i * 3, 0]}
            rotation={[0.1, 0, 0]}
            gradientMap={gradientMap}
          />
        ))}
      </group>

      {/* Large Scattered Boulders */}
      <ThematicMesh
        geometry={<icosahedronGeometry args={[3, 0]} />}
        color="#6f452a"
        position={[-12, 1, -5]}
        gradientMap={gradientMap}
      />
      <ThematicMesh
        geometry={<icosahedronGeometry args={[2, 0]} />}
        color="#8d5b4a"
        position={[15, 0.5, 2]}
        gradientMap={gradientMap}
      />
    </>
  );
};
