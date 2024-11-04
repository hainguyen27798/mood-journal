'use client';

import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useMemo } from 'react';

export interface IAnimInfinityTextProps {
  texts: string[];
  delay: number;
}

export default function AnimInfinityText({ delay, texts }: IAnimInfinityTextProps) {
  const textIndex = useMotionValue(0);
  const baseText = useTransform(textIndex, (latest) => texts[latest] || '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => baseText.get().slice(0, latest));
  const updatedThisRound = useMotionValue(true);

  const maxSize = useMemo(() => Math.max(...texts.map((text) => text.length)), [texts]);

  useEffect(() => {
    const controls = animate(count, maxSize, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 2,
      repeatType: 'reverse',
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    return controls.stop;
  }, [count, delay, maxSize, textIndex, texts.length, updatedThisRound]);

  return <motion.span>{displayText}</motion.span>;
}
