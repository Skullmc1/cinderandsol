"use client";

import { CharactersTitle } from "./CharactersTitle";
import { CharacterCard } from "./CharacterCard";

export const CharactersOverlay = () => {
  return (
    <>
      <CharactersTitle />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <CharacterCard name="CINDER">A spirit forged in the heart of a dying star, seeking to reignite the world's lost warmth.</CharacterCard>
        <CharacterCard name="SOL">Guardian of forgotten light, bound to protect the fragile remnants of life.</CharacterCard>
      </div>
    </>
  );
};
