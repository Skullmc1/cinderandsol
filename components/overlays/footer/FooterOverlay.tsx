"use client";

import { FooterTitle } from "./FooterTitle";
import { FooterContent } from "./FooterContent";

export const FooterOverlay = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <FooterTitle />
        <FooterContent />
      </div>
    </>
  );
};
