import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

export default function MarqueeBanner() {
  return (
    <div className="relative w-full py-3.5 bg-[var(--panel-dark)] border-y border-[var(--line)] overflow-hidden select-none">
      <div className="flex animate-marquee items-center gap-8 whitespace-nowrap">
        {[...skillsData.marqueeKeywords, ...skillsData.marqueeKeywords].map((word, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="font-bold text-xs md:text-sm tracking-wider uppercase text-[var(--text)] hover:text-[var(--blue)] transition-colors">
              {word}
            </span>
            <span className="text-[var(--blue)] text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
