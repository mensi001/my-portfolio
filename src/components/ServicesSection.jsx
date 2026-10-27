import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const serviceCards = [
    {
      icon: '✦',
      title: 'AI Video Creation',
      desc: 'AI-generated visuals, storytelling and cinematic concepts.',
    },
    {
      icon: '▶',
      title: 'Brand & Product Ads',
      desc: 'Promotional videos designed to make brands stand out.',
    },
    {
      icon: '▣',
      title: 'Reels & Social',
      desc: 'Short-form videos for social media and digital campaigns.',
    },
    {
      icon: '◈',
      title: 'Motion Graphics',
      desc: 'Animated titles, logo reveals and polished visual effects.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-8 border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="text-[var(--blue)] text-xs font-extrabold tracking-[0.18em] uppercase mb-1">
            What I do
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
            Creative services
          </h2>
          <p className="text-[var(--muted)] text-sm md:text-base">
            From the first idea to the final frame.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {serviceCards.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 rounded-2xl border border-[var(--line)] bg-[var(--panel)] hover:border-[var(--blue)] hover:shadow-md transition-all duration-200"
            >
              <b className="block mb-2 text-[var(--text)] text-base font-bold">
                <span className="text-[var(--blue)] mr-2">{service.icon}</span>
                {service.title}
              </b>
              <span className="text-[var(--muted)] text-xs leading-relaxed block">
                {service.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
