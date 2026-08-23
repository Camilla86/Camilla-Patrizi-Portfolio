'use client';

import { motion } from 'framer-motion';

const STATS = [
  { value: '6', label: 'Case study completati' },
  { value: '6', label: 'Aree di competenza' },
  { value: '100%', label: 'Progetti con risultati misurabili' },
];

/** Fascia di statistiche: numeri onesti e verificabili sul lavoro svolto. */
export function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 border-t border-stroke pt-12 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="text-center sm:text-left"
            >
              <p className="font-display text-5xl italic text-text-primary sm:text-6xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
