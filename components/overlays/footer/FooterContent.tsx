"use client";

import { ThematicBox } from "../common/ThematicBox";

export const FooterContent = () => (
  <>
    <div className="flex flex-wrap gap-8 justify-center pointer-events-auto">
      {['Community', 'Lore', 'Support'].map((link) => (
        <ThematicBox key={link} bgColor="bg-[#d4a373] hover:bg-[#ff9900] transition-colors" borderColor="border-[#a0522d]" className="cursor-pointer">
          <a href="#" className="font-poppins text-2xl text-[#4a2c0f] font-bold px-4">{link}</a>
        </ThematicBox>
      ))}
    </div>
    <ThematicBox bgColor="bg-[#2a1a0a]" borderColor="border-[#4a2c0f]" className="mt-20">
      <p className="font-poppins text-lg text-[#ffdab9] tracking-widest italic">
        © 2026 CINDER AND SOL STUDIOS. BORN FROM THE ASH.
      </p>
    </ThematicBox>
  </>
);
