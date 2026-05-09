"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Outlines } from "@react-three/drei";

export const Sun = ({ section }: { section: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  const gradientMap = useMemo(() => {
    const data = new Uint8Array([40, 130, 255]);
    const map = new THREE.DataTexture(data, 3, 1, THREE.RedFormat);
    map.minFilter = THREE.NearestFilter;
    map.magFilter = THREE.NearestFilter;
    map.generateMipmaps = false;
    map.needsUpdate = true;
    return map;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current) return;

    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.z += delta * 0.05;

    // Alternate sides: even sections on left (-3.5), odd sections on right (3.5)
    const isLeft = section % 2 === 0;
    const targetX = isLeft ? -3.5 : 3.5;
    const targetY = 2.0; // Slightly higher for better visibility
    const targetZ = -4; // Slightly deeper
    const targetScale = section === 0 ? 1 : 1.2;

    const speed = 4;
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      delta * speed,
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      delta * speed,
    );
    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      targetZ,
      delta * speed,
    );

    const currentScale = groupRef.current.scale.x;
    const nextScale = THREE.MathUtils.lerp(
      currentScale,
      targetScale,
      delta * speed,
    );
    groupRef.current.scale.setScalar(nextScale);
  });

  return (
    <group ref={groupRef} position={[3, 1.8, -3]}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 16]} />
        <meshToonMaterial color="#ffb700" gradientMap={gradientMap} />
        <Outlines thickness={0.4} color="#000000" />
      </mesh>

      {/* Main Shadow-Casting Light (Follows the Sun) */}
      <directionalLight
        castShadow
        intensity={2.5}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-60}
        shadow-camera-right={60}
        shadow-camera-top={60}
        shadow-camera-bottom={-60}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        color="#fff8dc"
      />

      <ambientLight intensity={0.4} color="#4a1500" />
      <directionalLight position={[4, 5, 3]} intensity={2} color="#ffffff" />
      <directionalLight position={[-4, -3, -4]} intensity={1} color="#ff0033" />
    </group>
  );
};
