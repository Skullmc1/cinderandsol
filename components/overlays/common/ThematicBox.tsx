"use client";

export const ThematicBox = ({ children, className = "", bgColor = "bg-[#d4a373]", borderColor = "border-[#6f452a]" }: { children: React.ReactNode; className?: string; bgColor?: string; borderColor?: string }) => (
  <div className={`border-4 ${borderColor} shadow-lg shadow-[#2a1a0a] ${bgColor} p-6 ${className}`}>
    {children}
  </div>
);
