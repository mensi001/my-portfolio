import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Palette, Video } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  "Design & Art Direction": Palette,
  "Video & Motion": Video,
  "AI & Emerging Tech": Cpu,
  "Core Software Stack": Terminal,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-14 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-[var(--line)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-10">
          <div className="text-[var(--blue)] text-[11px] sm:text-xs font-extrabold tracking-[0.18em] uppercase mb-1">
            Toolkit & Arsenal
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
            Creative Tooling & Skills.
          </h2>
          <p className="text-[var(--muted)] text-xs sm:text-sm md:text-base max-w-xl">
            A comprehensive matrix of technical video software, creative workflows, and AI generative pipelines.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2.5 mb-6 sm:mb-8 overflow-x-auto pb-1">
          {skillsData.categories.map((cat, idx) => {
            const Icon = categoryIcons[cat.title] || Sparkles;
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-[var(--blue)] text-slate-900 border-[var(--blue)] shadow-sm'
                    : 'bg-[var(--panel)] text-[var(--muted)] border-[var(--line)] hover:border-[var(--blue)] hover:text-[var(--text)]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-900' : 'text-[var(--blue)]'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {skillsData.categories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="p-5 rounded-2xl border border-[var(--line)] bg-[var(--panel)] hover:border-[var(--blue)] hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[var(--blue)] font-bold">
                  0{index + 1}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  PRO SKILL
                </span>
              </div>

              <h3 className="text-base font-bold text-[var(--text)]">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Tools and software */}
        <div className="mt-10 p-6 md:p-8 rounded-2xl border border-[var(--line)] bg-[var(--panel)]">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[var(--blue)]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              Integrated Tools & Software
            </h4>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {[
              "Adobe Premiere Pro",
              "After Effects",
              "Generative AI Video",
              "Midjourney v6",
              "Runway Gen-3",
              "ComfyUI",
              "DaVinci Resolve",
              "Photoshop",
              "Illustrator",
              "Color Grading",
              "Sound Design",
              "Motion Graphics"
            ].map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-lg bg-[var(--panel-dark)] border border-[var(--line)] text-xs text-[var(--text)] hover:text-[var(--blue)] hover:border-[var(--blue)] transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
