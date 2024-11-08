'use client';

import { Button } from 'antd';
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
      className="flex min-h-16 w-full flex-wrap items-center justify-between gap-2 rounded-xl bg-white p-4 shadow-md"
    >
      <div className="flex items-center gap-2 text-xl font-bold text-neutral-500">
        <Button
          className="inline-block md:!hidden"
          icon={<Logs size={24} className="text-neutral-500" />}
          onClick={isOpen ? close : open}
          type="text"
        ></Button>
        <AnimInText text="Overview" delay={1} />
      </div>
      <div>
        <HeaderTimePicker />
      </div>
    </motion.div>
  );
}
