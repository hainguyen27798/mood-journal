'use client';

import { Badge, Button } from 'antd';
import { motion } from 'framer-motion';
import { BellRing } from 'lucide-react';
import Image from 'next/image';

import { AnimInText } from '@/lib/motion';

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
      className="sticky flex h-16 w-full items-center justify-between bg-white px-6 shadow-md"
    >
      <div className="text-xl font-bold text-neutral-500">
        <AnimInText text="Overview" delay={1} />
      </div>
      <div className="flex items-center gap-8">
        <Badge count={5}>
          <Button icon={<BellRing size={22} className="text-neutral-500" />} type="text"></Button>
        </Badge>
        <Image height={40} width={40} src="/img/Avatar.svg" alt=""></Image>
      </div>
    </motion.div>
  );
}
