"use client";

import { ThematicBox } from "../common/ThematicBox";

export const AboutContent = () => (
  <ThematicBox bgColor="bg-[#b35900]" borderColor="border-[#8d5b4a]" className="max-w-xl text-right">
    <h2 className="sr-only">About</h2>
    <p className="font-poppins text-lg md:text-xl text-[#ffdab9] font-medium leading-relaxed">
      "In a land scarred by fire and ash, the last vestiges of hope
      cling to ancient ruins and whispered legends. Discover the
      secrets that shaped this world."
    </p>
  </ThematicBox>
);
