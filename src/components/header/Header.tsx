'use client';

import { motion } from 'framer-motion';
import { Logs } from 'lucide-react';

import HeaderTimePicker from '@/components/header/HeaderTimePicker';
import { AnimInText } from '@/lib/motion';
import { useNav } from '@/store';

export default function Header() {
  const { isOpen, open, close } = useNav();

  return (
    <motion.div
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
      className="sticky top-4 z-20 flex w-full flex-wrap items-center justify-between rounded-xl bg-white p-3 shadow-md md:top-6 md:p-4"
    >
      <div className="flex items-center gap-2 font-bold text-neutral-500">
        <Logs className="inline-block text-neutral-500 md:!hidden" size={20} onClick={isOpen ? close : open} />
        <AnimInText text="Overview" delay={1} className="hidden text-lg leading-none sm:block md:text-xl" />
      </div>
      <HeaderTimePicker />
    </motion.div>
  );
}
