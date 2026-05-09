import * as THREE from "three";
import { useMemo } from "react";
import { Outlines } from "@react-three/drei";

export const TOON_OUTLINE_COLOR = "#000000";
export const TOON_OUTLINE_THICKNESS = 0.25;

export const useToonGradientMap = () => {
  return useMemo(() => {
    // Warm gradient for cel-shading
    const data = new Uint8Array([75, 150, 255]); // Darker brown, Mid-orange, Bright yellow
    const map = new THREE.DataTexture(data, 3, 1, THREE.RedFormat);
    map.minFilter = THREE.NearestFilter;
    map.magFilter = THREE.NearestFilter;
    map.generateMipmaps = false;
    map.needsUpdate = true;
    return map;
  }, []);
};

export const ThematicMesh = ({ geometry, color, position, rotation, scale = 1, gradientMap }: any) => (
  <mesh position={position} rotation={rotation} scale={scale} castShadow receiveShadow>
    {geometry}
    <meshToonMaterial color={color} gradientMap={gradientMap} />
    <Outlines thickness={TOON_OUTLINE_THICKNESS} color={TOON_OUTLINE_COLOR} />
  </mesh>
);
