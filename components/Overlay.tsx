"use client";

import { motion, AnimatePresence } from "framer-motion";

// Import modular overlay components
import { HeroOverlay } from "./overlays/hero/Hero";
import { AboutOverlay } from "./overlays/about/AboutOverlay";
import { CharactersOverlay } from "./overlays/characters/CharactersOverlay";
import { PlayOverlay } from "./overlays/play/PlayOverlay";
import { FooterOverlay } from "./overlays/footer/FooterOverlay";

const Section = ({
  children,
  className = "",
  isVisible,
  fullWidth = false,
}: {
  children: React.ReactNode;
  className?: string;
  isVisible: boolean;
  fullWidth?: boolean;
}) => (
  <motion.section
    initial={{ opacity: 0, x: 100 }}
    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ type: "spring", damping: 15, stiffness: 100 }}
    className={`absolute inset-0 h-screen w-full flex flex-col justify-center px-10 md:px-20 ${className}`}
  >
    <div className={`${fullWidth ? 'w-full' : 'max-w-5xl w-full'} mx-auto`}>{children}</div>
  </motion.section>
);

export const Overlay = ({ section }: { section: number }) => {
  return (
    <div className="w-screen h-screen relative overflow-hidden text-[#f0f0f0]">
      <AnimatePresence mode="wait">
        {section === 0 && (
          <Section key="hero" isVisible={section === 0} className="items-start" fullWidth>
            <HeroOverlay />
          </Section>
        )}

        {section === 1 && (
          <Section
            key="about"
            isVisible={section === 1}
            className="items-end justify-end pb-20 pr-10"
          >
            <AboutOverlay />
          </Section>
        )}

        {section === 2 && (
          <Section
            key="characters"
            isVisible={section === 2}
            className="items-start"
          >
            <CharactersOverlay />
          </Section>
        )}

        {section === 3 && (
          <Section
            key="play"
            isVisible={section === 3}
            className="items-center text-center"
          >
            <PlayOverlay />
          </Section>
        )}

        {section === 4 && (
          <Section
            key="footer"
            isVisible={section === 4}
            className="items-center justify-between pt-20 pb-10 text-center"
          >
            <FooterOverlay />
          </Section>
        )}
      </AnimatePresence>
    </div>
  );
};
