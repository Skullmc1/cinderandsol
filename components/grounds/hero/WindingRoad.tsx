"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { Outlines } from "@react-three/drei";

export const WindingRoad = ({
  gradientMap,
}: {
  gradientMap: THREE.Texture;
}) => {
  const curve = useMemo(() => {
    // Castle is at [6, -0.5, -18] with rotation [0, -Math.PI / 6, 0]
    // Gate is at [0, 0, 1.5] in local space.
    // Calculated world entrance: [5.25, 0, -16.7]
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 15),
      new THREE.Vector3(-6, 0, 5),
      new THREE.Vector3(6, 0, -2),
      new THREE.Vector3(4.25, 0, -14.5), // Alignment approach point
      new THREE.Vector3(5.25, 0, -16.7), // Entrance point
    ]);
  }, []);

  // Create a tapered road geometry manually
  const roadGeometry = useMemo(() => {
    const segments = 100;
    const widthSegments = 1;
    const geometry = new THREE.PlaneGeometry(1, 1, widthSegments, segments);

    const positions = geometry.attributes.position.array as Float32Array;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const point = curve.getPoint(t);
      const tangent = curve.getTangent(t);
      const normal = new THREE.Vector3(0, 1, 0).cross(tangent).normalize();

      // Tapering: 3.5 width at camera (t=0), 0.8 width at castle (t=1)
      const currentWidth = THREE.MathUtils.lerp(3.5, 0.8, t);

      // Update vertices for this segment
      // PlaneGeometry vertices are arranged in rows
      // i * (widthSegments + 1) is the left vertex, +1 is the right
      const leftIdx = i * 2 * 3;
      const rightIdx = (i * 2 + 1) * 3;

      const leftPos = point
        .clone()
        .add(normal.clone().multiplyScalar(currentWidth / 2));
      const rightPos = point
        .clone()
        .add(normal.clone().multiplyScalar(-currentWidth / 2));

      positions[leftIdx] = leftPos.x;
      positions[leftIdx + 1] = 0.02; // Slightly above ground
      positions[leftIdx + 2] = leftPos.z;

      positions[rightIdx] = rightPos.x;
      positions[rightIdx + 1] = 0.02;
      positions[rightIdx + 2] = rightPos.z;
    }

    geometry.computeVertexNormals();
    return geometry;
  }, [curve]);

  return (
    <group>
      <mesh receiveShadow geometry={roadGeometry}>
        <meshToonMaterial
          color="#b35900"
          side={THREE.DoubleSide}
          gradientMap={gradientMap}
        />
        <Outlines thickness={0.15} color="#000000" />
      </mesh>
    </group>
  );
};
