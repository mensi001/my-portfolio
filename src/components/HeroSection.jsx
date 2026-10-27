import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Flame } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroScene3D from './HeroScene3D';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[var(--blue)]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-60 sm:w-96 h-60 sm:h-96 bg-[var(--blue)]/5 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center z-10">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[var(--blue)] text-[11px] sm:text-xs font-extrabold tracking-[0.18em] uppercase"
          >
            Creative Portfolio · Rajkot, India
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.05em] leading-[1.05] sm:leading-[1.02] text-[var(--text-primary)]">
              Ideas into<br />
              <span className="text-[var(--blue)]">visual impact.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[var(--muted)] max-w-xl font-normal leading-relaxed"
          >
            I'm Jigar Vachhani — a Creative Video Editor & AI Video Creator. I create scroll-stopping AI videos, brand films, social media reels and motion graphics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[var(--blue)] text-slate-900 font-bold text-xs sm:text-sm border border-[var(--blue)] hover:opacity-90 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Explore My Work ↘</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[var(--panel)] border border-[var(--line)] text-[var(--text)] font-semibold text-xs sm:text-sm hover:border-[var(--blue)] transition-all duration-200"
            >
              <span>Let's Work Together ↗</span>
            </a>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-5 sm:pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-[var(--line)]"
          >
            {personalInfo.stats.map((st, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl font-black text-[var(--text-primary)]">
                  {st.value}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[var(--muted)] mt-0.5">
                  {st.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[300px] sm:min-h-[360px] lg:min-h-[480px] w-full"
        >
          <div className="absolute inset-0 rounded-3xl border border-[var(--line)] bg-[var(--panel)]/40 pointer-events-none" />

          <div className="w-full h-full relative z-10 flex items-center justify-center">
            <HeroScene3D />
          </div>

          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[var(--panel)]/80 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-[var(--line)] text-[9px] sm:text-[10px] text-[var(--blue)] flex items-center gap-1.5 z-20 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] animate-ping" />
            <span>INTERACTIVE 3D WEBGL</span>
          </div>

          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-[var(--panel)]/80 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-[var(--line)] text-[9px] sm:text-[10px] text-[var(--blue)] flex items-center gap-1.5 z-20 pointer-events-none">
            <Flame className="w-3 h-3 text-[var(--blue)]" />
            <span>AI × MOTION</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--muted)] hover:text-[var(--blue)] transition-colors group z-20"
        aria-label="Scroll to projects"
      >
        <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] group-hover:text-[var(--blue)]">
          EXPLORE
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[var(--blue)]" />
      </a>
    </section>
  );
}
