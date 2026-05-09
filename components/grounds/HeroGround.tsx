"use client";

import { useToonGradientMap } from "@/lib/three-utils";
import { WindingRoad } from "./hero/WindingRoad";
import { VaultBunker } from "./hero/VaultBunker";
import { DeadTree } from "./hero/DeadTree";
import { Tumbleweed } from "./hero/Tumbleweed";

export const HeroGround = () => {
  const gradientMap = useToonGradientMap();

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshToonMaterial color="#8d5b4a" gradientMap={gradientMap} />
      </mesh>

      <WindingRoad gradientMap={gradientMap} />
      <VaultBunker gradientMap={gradientMap} />
      {/*
          ORGANIC DENSE FOREST
          Using new Limb-recursive trees with roots.
      */}

      {/* Visible Forest - Left side */}
      <DeadTree
        position={[-10, 0, 2]}
        variant="shattered"
        scale={0.8}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[-12, 0, -2]}
        variant="gnarled"
        scale={1.0}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[-8, 0, -6]}
        variant="reacher"
        scale={1.2}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[-14, 0, -10]}
        variant="twisted"
        scale={0.9}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[-10, 0, -14]}
        variant="gnarled"
        scale={1.1}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[-16, 0, -18]}
        variant="reacher"
        scale={1.3}
        gradientMap={gradientMap}
      />

      {/* Visible Forest - Right side */}
      <DeadTree
        position={[10, 0, 3]}
        variant="twisted"
        scale={0.7}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[12, 0, 1]}
        variant="shattered"
        scale={0.9}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[11, 0, -4]}
        variant="reacher"
        scale={1.0}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[14, 0, -8]}
        variant="gnarled"
        scale={0.9}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[13, 0, -12]}
        variant="shattered"
        scale={0.8}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[15, 0, -16]}
        variant="twisted"
        scale={1.2}
        gradientMap={gradientMap}
      />

      {/* Middle Ground Fill */}
      <DeadTree
        position={[0, 0, -10]}
        variant="gnarled"
        scale={0.7}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[-1, 0, -15]}
        variant="shattered"
        scale={0.9}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[1, 0, -4]}
        variant="reacher"
        scale={0.6}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[-2, 0, -8]}
        variant="twisted"
        scale={0.8}
        gradientMap={gradientMap}
      />

      {/* Roadside details */}
      <DeadTree
        position={[-6, 0, 6]}
        variant="shattered"
        rotation={[0, 0.8, 0]}
        scale={0.5}
        gradientMap={gradientMap}
      />
      <DeadTree
        position={[8, 0, -2]}
        variant="gnarled"
        rotation={[0, -0.5, 0]}
        scale={0.6}
        gradientMap={gradientMap}
      />

      {/* Animated Tumbleweeds */}
      <Tumbleweed
        startPos={[-15, 0, 10]}
        speed={2.5}
        gradientMap={gradientMap}
      />
      <Tumbleweed
        startPos={[15, 0, -2]}
        speed={2.0}
        gradientMap={gradientMap}
      />
      <Tumbleweed
        startPos={[-20, 0, -10]}
        speed={3.0}
        gradientMap={gradientMap}
      />
    </>
  );
};
