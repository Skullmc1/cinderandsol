"use client";

import { PlayTitle } from "./PlayTitle";
import { PlayContent } from "./PlayContent";
import { ThematicBox } from "../common/ThematicBox";

export const PlayOverlay = () => {
  return (
    <ThematicBox bgColor="bg-[#b35900]" borderColor="border-[#8d5b4a]" className="p-10 rotate-[1deg]">
      <PlayTitle />
      <PlayContent />
    </ThematicBox>
  );
};
