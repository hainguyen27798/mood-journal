'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export default function Transition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        className="min-h-screen w-screen overflow-auto bg-neutral-100"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
