import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppSolidIcon } from './WhatsAppIcon';

export default function ContactSection() {
  const phoneNumber = "9104077683";
  const message = encodeURIComponent("Hello Jigar, I saw your portfolio and would like to discuss a project!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-[var(--line-border)] bg-[var(--panel)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 shadow-xl"
        >
          <div className="max-w-xl">
            <div className="text-[var(--blue)] text-[11px] sm:text-xs font-extrabold tracking-[0.18em] uppercase mb-1.5 sm:mb-2">
              Have a project in mind?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2 sm:mb-3">
              Let's make something great.
            </h2>
            <p className="text-[var(--muted)] text-xs sm:text-sm md:text-base leading-relaxed">
              Share your brief, campaign idea, or video requirements. Let's chat directly on WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* WhatsApp Direct Action Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#25D366]/20 hover:bg-[#20ba59] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex-1 sm:flex-initial"
            >
              <WhatsAppSolidIcon className="w-5 h-5 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--panel-dark)] border border-[var(--line)] text-[var(--text)] font-semibold text-xs sm:text-sm hover:border-[var(--blue)] transition-all duration-200 flex-1 sm:flex-initial"
            >
              <span>Instagram ↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
