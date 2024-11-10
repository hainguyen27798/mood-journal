'use client';

import { motion } from 'framer-motion';
import type React from 'react';

type AnimLeftRightProps = React.PropsWithChildren & {
  delay?: number;
  className?: string;
  from?: string;
};

export default function AnimRightLeft({ children, className = '', delay = 0, from = '100%' }: AnimLeftRightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
