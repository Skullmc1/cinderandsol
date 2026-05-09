"use client";

import { ThematicMesh, useToonGradientMap } from "@/lib/three-utils";

export const FooterGround = () => {
  const gradientMap = useToonGradientMap();
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshToonMaterial color="#4a2c0f" gradientMap={gradientMap} />{" "}
        {/* Very Dark Brown */}
      </mesh>
      <ThematicMesh
        geometry={<sphereGeometry args={[5, 64, 64]} />}
        color="#2a1a0a" /* Even Darker Brown */
        position={[0, 0, -12]}
        gradientMap={gradientMap}
      />
    </>
  );
};
