import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { playgroundExperiments } from '../data/portfolioData';

export default function CreativePlayground() {
  return (
    <section id="playground" className="relative py-20 px-6 md:px-8 border-t border-[var(--line)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="text-[var(--blue)] text-xs font-extrabold tracking-[0.18em] uppercase mb-1">
            Experiments & Research
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
            Creative Lab & Experiments.
          </h2>
          <p className="text-[var(--muted)] text-sm md:text-base max-w-xl">
            Algorithmic video tests, neural concept frames, and generative explorations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {playgroundExperiments.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border border-[var(--line)] bg-[var(--panel)] rounded-2xl overflow-hidden group hover:border-[var(--blue)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--panel-dark)]">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white border border-white/20">
                  {exp.tech}
                </div>
              </div>

              {/* Experiment Details */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-mono text-[var(--blue)] uppercase tracking-wider block mb-1">
                    {exp.type}
                  </span>
                  <h3 className="text-base font-bold text-[var(--text)] group-hover:text-[var(--blue)] transition-colors mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-[var(--muted)] text-xs leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--muted)]">
                    STUDY 0{index + 1}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[var(--panel-dark)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] group-hover:bg-[var(--blue)] group-hover:text-slate-900 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
