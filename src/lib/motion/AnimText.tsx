'use client';

import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export interface IAnimTextProps {
  text: string;
  delay: number;
  className?: string;
}

export default function AnimInText({ delay, text = '', className }: IAnimTextProps) {
  const textIndex = useMotionValue(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeInOut',
    });
    return controls.stop;
  }, [count, delay, textIndex, text]);

  return <motion.span className={className}>{displayText}</motion.span>;
}
