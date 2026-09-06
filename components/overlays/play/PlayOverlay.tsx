"use client";

import React from "react";

const PlayBox = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-xl bg-[#2a1a0a] border-4 border-[#6f452a] shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden ${className}`}
  >
    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#ff9900]/10 to-transparent pointer-events-none" />
    <div className="p-8 md:p-10 w-full relative z-10">{children}</div>
  </div>
);

export const PlayOverlay = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-4xl text-center">
        <h2 className="font-cinzel-decorative text-5xl md:text-7xl text-white mb-8 uppercase tracking-tighter">
          Tactical <span className="text-[#ff9900]">Intervention</span>
        </h2>

        <p className="font-poppins text-lg text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
          Combat in the Ashlands is not about the strength of your steel, but
          the clarity of your mind. Use the environment to your advantage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlayBox>
            <div className="text-[#ff9900] text-3xl font-bold mb-2">01</div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">
              Positioning
            </h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Use ruins and elevation to avoid the scorching sun.
            </p>
          </PlayBox>
          <PlayBox>
            <div className="text-[#ff9900] text-3xl font-bold mb-2">02</div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">
              The Seed
            </h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Harness the Sol-Seed to activate ancient tech.
            </p>
          </PlayBox>
          <PlayBox>
            <div className="text-[#ff9900] text-3xl font-bold mb-2">03</div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">
              Consequence
            </h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Every tactical move shapes the narrative outcome.
            </p>
          </PlayBox>
        </div>
      </div>
    </div>
  );
};
