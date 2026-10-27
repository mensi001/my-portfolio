import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function FloatingCall() {
  const phoneNumber = "+919876543210";

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      aria-label="Call Now"
      title="Call Now"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--blue)] text-slate-950 shadow-2xl shadow-[var(--blue)]/40 hover:opacity-95 transition-all cursor-pointer border border-[var(--blue)]"
    >
      <Phone className="w-6 h-6 stroke-[2.2] fill-current" />
    </motion.a>
  );
}

