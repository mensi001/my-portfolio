import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppSolidIcon } from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const phoneNumber = "9104077683";
  const message = encodeURIComponent("Hello Jigar, I came across your portfolio and would like to connect!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:bg-[#20ba59] transition-colors cursor-pointer"
    >
      <WhatsAppSolidIcon className="w-7 h-7 fill-white" />
    </motion.a>
  );
}
