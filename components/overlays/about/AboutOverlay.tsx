"use client";

import React from "react";

const AboutBox = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-xl bg-[#2a1a0a] border-4 border-[#6f452a] shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden ${className}`}
  >
    <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#ff9900]/10 to-transparent pointer-events-none" />
    <div className="p-8 md:p-10 w-full relative z-10">{children}</div>
  </div>
);

export const AboutOverlay = () => {
  return (
    <div className="w-full flex flex-col items-end text-right">
      <div className="max-w-2xl">
        <h2 className="font-cinzel-decorative text-5xl md:text-7xl text-white mb-6 uppercase tracking-tighter">
          The Path <br />
          <span className="text-[#ff9900]">of the Lost</span>
        </h2>

        <p className="font-poppins text-lg text-white/80 leading-relaxed mb-10">
          Decades after the Great Scorching, the world is a graveyard of
          concrete and ash. You follow the markers left by the ones who walked
          before you—the parents and elders who braved the wastes and never
          returned.
        </p>

        <AboutBox className="max-w-xl self-end">
          <h3 className="font-poppins text-xl text-[#ff9900] font-bold uppercase tracking-widest mb-4">
            The Mission
          </h3>
          <p className="font-poppins text-sm text-[#f0f0f0]/70 leading-relaxed mb-6">
            Somewhere in these ruins lies the Sol-Cradle, an ancient lab housing
            the world&apos;s last hope: the bio-generator seed. Ezekiel and Eris
            must secure it before the Keepers of the Citadel reclaim what they
            consider theirs.
          </p>

          <div className="flex justify-end gap-4">
            <div className="px-4 py-2 border border-[#6f452a] text-[#ff9900] font-poppins text-xs uppercase tracking-widest">
              Scavenge
            </div>
            <div className="px-4 py-2 border border-[#6f452a] text-[#ff9900] font-poppins text-xs uppercase tracking-widest">
              Survive
            </div>
          </div>
        </AboutBox>
      </div>
    </div>
  );
};
