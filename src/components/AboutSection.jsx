import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-14 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-[var(--line)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="text-[var(--blue)] text-xs font-extrabold tracking-[0.18em] uppercase mb-1">
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
            The creative behind the edits.
          </h2>
          <p className="text-[var(--muted)] text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            Based in Rajkot, India, crafting dynamic visual stories and high-conversion video assets for international creators and brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--panel)] group shadow-lg">
              <div className="aspect-[4/5] relative overflow-hidden bg-[var(--panel-dark)]">
                <img
                  src="/myphoto.jpg"
                  alt="Jigar Vachhani - Creative Portrait"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
                  <div className="text-lg sm:text-xl font-bold text-white">Jigar Vachhani</div>
                  <p className="text-[11px] sm:text-xs text-[var(--blue)] mt-0.5">
                    Creative Video Editor & AI Video Creator
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6"
          >
            <div className="border border-[var(--line)] bg-[var(--panel)] p-5 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-2 sm:mb-3">
                Crafting visual rhythm & cinematic aesthetics
              </h3>
              <p className="text-[var(--muted)] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                Specializing in cutting-edge video editing, generative AI video workflows, brand commercial advertisements, and social media reels. With each project, the goal is to capture attention in the first three seconds and maintain high engagement throughout the piece.
              </p>
              <p className="text-[var(--muted)] text-xs sm:text-sm leading-relaxed">
                Whether you need promotional campaigns, motion typography, AI concepts, or high-pace YouTube/Reel edits, I deliver polished, conversion-ready video assets.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              <div className="p-3.5 sm:p-4 rounded-xl border border-[var(--line)] bg-[var(--panel)]">
                <div className="text-[var(--blue)] text-lg sm:text-xl font-bold">100+</div>
                <div className="text-[var(--muted)] text-[11px] sm:text-xs mt-0.5 sm:mt-1">Videos Produced</div>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl border border-[var(--line)] bg-[var(--panel)]">
                <div className="text-[var(--blue)] text-lg sm:text-xl font-bold">10M+</div>
                <div className="text-[var(--muted)] text-[11px] sm:text-xs mt-0.5 sm:mt-1">Social Views Generated</div>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl border border-[var(--line)] bg-[var(--panel)] col-span-2 sm:col-span-1">
                <div className="text-[var(--blue)] text-lg sm:text-xl font-bold">100%</div>
                <div className="text-[var(--muted)] text-[11px] sm:text-xs mt-0.5 sm:mt-1">Dedication to Quality</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
