"use client";

import React from "react";

const HeroTitle = () => (
  <h1 className="font-cinzel-decorative text-7xl md:text-[9rem] text-white leading-none tracking-tighter mix-blend-overlay opacity-90">
    CINDER
    <br />
    <span className="text-[#ff9900]">& SOL</span>
  </h1>
);

const HeroBox = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-xl bg-[#2a1a0a] border-4 border-[#6f452a] shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden ${className}`}
  >
    {/* Scorched Accent Corner */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#b35900]/20 to-transparent pointer-events-none" />
    <div className="p-8 md:p-10 w-full relative z-10">{children}</div>
  </div>
);

const HeroContent = () => (
  <HeroBox className="max-w-sm w-full mt-4">
    <div className="flex flex-col gap-6">
      <div>
        <p className="font-poppins text-xl text-[#ff9900] font-bold uppercase tracking-widest">
          The World is Ash
        </p>
        <p className="font-poppins text-sm text-[#f0f0f0]/70 mt-2 leading-relaxed">
          Survive a handcrafted world where every decision carves your path
          through the soot and flame.
        </p>
      </div>

      <div className="h-0.5 bg-[#6f452a]/50 w-full" />

      <ul className="grid gap-3">
        {["Branching Narratives", "Tactical Choice", "Hand-crafted Art"].map(
          (item, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#b35900] rotate-45" />
              <span className="font-poppins text-xs uppercase tracking-wider text-[#f0f0f0]/80">
                {item}
              </span>
            </li>
          ),
        )}
      </ul>
    </div>
  </HeroBox>
);

export const HeroOverlay = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="order-2 md:order-1 md:col-span-7 relative">
          <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#b35900] to-transparent hidden md:block" />
          <HeroTitle />
          <p className="mt-8 font-poppins text-lg text-white/80 max-w-lg leading-relaxed">
            A character-first RPG set in a scorched world. Forge your story
            through steel and ash.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
            <a
              href="#play"
              className="px-10 py-4 bg-[#ff9900] text-[#2a1a0a] font-poppins font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#b35900]/20"
            >
              PLAY DEMO
            </a>
            <a
              href="#about"
              className="px-10 py-4 border-2 border-[#ff9900] text-[#ff9900] font-poppins font-bold uppercase tracking-widest hover:bg-[#ff9900] hover:text-[#2a1a0a] transition-all"
            >
              LEARN MORE
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 md:col-span-5 flex md:justify-end">
          <HeroContent />
        </div>
      </div>
    </div>
  );
};
