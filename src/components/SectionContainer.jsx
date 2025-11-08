import React from 'react';
import { motion } from 'framer-motion';

const SectionContainer = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full overflow-hidden"
      style={{ backgroundColor: '#f8f5f2' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-28">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionContainer;
