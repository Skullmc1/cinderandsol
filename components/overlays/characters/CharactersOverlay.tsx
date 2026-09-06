"use client";

import React from "react";

const CharacterBox = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-xl bg-[#2a1a0a] border-4 border-[#6f452a] shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden ${className}`}
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#ff9900]/10 to-transparent pointer-events-none" />
    <div className="p-8 md:p-10 w-full relative z-10">{children}</div>
  </div>
);

export const CharactersOverlay = () => {
  return (
    <div className="w-full">
      <h2 className="font-cinzel-decorative text-5xl md:text-7xl text-white mb-12 uppercase tracking-tighter">
        The <span className="text-[#ff9900]">Seed-Bearers</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <CharacterBox>
          <h3 className="font-poppins text-2xl text-[#ff9900] font-bold uppercase tracking-widest mb-2">
            Ezekiel
          </h3>
          <p className="text-white/60 text-xs uppercase tracking-widest mb-4">
            The Protector
          </p>
          <p className="font-poppins text-sm text-[#f0f0f0]/70 leading-relaxed">
            Raised in the silence of the Vault, Ezekiel took up the spear when
            the rations ran dry. He is the shield for Eris, weathering the heat
            to ensure their mission succeeds.
          </p>
        </CharacterBox>

        <CharacterBox>
          <h3 className="font-poppins text-2xl text-[#ff9900] font-bold uppercase tracking-widest mb-2">
            Eris
          </h3>
          <p className="text-white/60 text-xs uppercase tracking-widest mb-4">
            The Pathfinder
          </p>
          <p className="font-poppins text-sm text-[#f0f0f0]/70 leading-relaxed">
            With a scavenged Sol-Scanner and the legendary Seed on her back,
            Eris is the only one who can navigate the distorted magnetic fields
            of the Ashlands.
          </p>
        </CharacterBox>
      </div>
    </div>
  );
};
