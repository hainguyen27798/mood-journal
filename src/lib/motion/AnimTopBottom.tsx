'use client';

import { motion } from 'framer-motion';
import type React from 'react';

type AnimLeftRightProps = React.PropsWithChildren & {
  delay?: number;
  className?: string;
};

export default function AnimTopBottom({ children, className = '', delay = 0 }: AnimLeftRightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
