"use client";

import { ThematicBox } from "../common/ThematicBox";

export const CharacterCard = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <ThematicBox bgColor="bg-[#d4a373]" borderColor="border-[#a0522d]">
    <h3 className="font-cinzel-decorative text-4xl text-[#4a2c0f] mb-2 underline decoration-dashed">{name}</h3>
    <p className="font-poppins text-[#6f452a] font-medium text-lg">{children}</p>
  </ThematicBox>
);
