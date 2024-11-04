'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
      className="sticky flex h-16 w-full items-center justify-between bg-white px-4 shadow-md"
    ></motion.div>
  );
}
