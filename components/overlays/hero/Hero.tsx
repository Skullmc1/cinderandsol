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
    className={`rounded-3xl backdrop-blur-xl bg-white/[0.03] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${className}`}
  >
    <div className="p-8 md:p-10 w-full">{children}</div>
  </div>
);

const HeroContent = () => (
  <HeroBox className="max-w-md w-full mt-4">
    <div className="flex flex-col gap-5">
      <div>
        <p className="font-poppins text-2xl text-white font-medium tracking-tight">
          Your adventure awaits
        </p>
        <p className="font-poppins text-sm text-white/60 mt-2 leading-relaxed">
          Explore handcrafted worlds, meaningful choices, and rich
          storytelling—designed for players who love depth.
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-white/20 to-transparent my-1" />

      <ul className="mt-1 grid gap-4">
        <li className="flex items-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff9900] shadow-[0_0_8px_#ff9900]" />
          <span className="font-poppins text-sm text-white/80">
            Deep branching narratives with real consequences
          </span>
        </li>
        <li className="flex items-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff9900] shadow-[0_0_8px_#ff9900]" />
          <span className="font-poppins text-sm text-white/80">
            Tactical encounters emphasizing choice over grind
          </span>
        </li>
        <li className="flex items-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff9900] shadow-[0_0_8px_#ff9900]" />
          <span className="font-poppins text-sm text-white/80">
            Hand-crafted art direction and atmospheric sound
          </span>
        </li>
      </ul>

      <div className="mt-6 flex gap-3">
        <a
          href="#play"
          className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-poppins text-sm font-medium transition-all backdrop-blur-md border border-white/5"
        >
          Play Demo
        </a>
        <a
          href="#about"
          className="px-6 py-2.5 text-white/60 hover:text-white rounded-full font-poppins text-sm font-medium transition-all"
        >
          Details
        </a>
      </div>
    </div>
  </HeroBox>
);

export const HeroOverlay = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="order-2 md:order-1 md:col-span-7 relative">
          <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ff9900]/50 to-transparent hidden md:block" />
          <HeroTitle />
          <p className="mt-8 font-sans text-lg text-white/80 max-w-xl leading-relaxed">
            A grounded, character-first RPG set in a scorched world. Choices
            matter — craft your story with careful decisions and bold actions.
          </p>

          <div className="mt-12 flex flex-wrap gap-8 uppercase tracking-widest text-sm font-bold">
            <a
              href="#play"
              className="px-8 py-4 bg-white text-black hover:bg-[#ff9900] transition-colors"
            >
              PLAY DEMO
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-white/30 text-white hover:border-[#ff9900] hover:text-[#ff9900] transition-colors"
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
