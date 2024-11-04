'use client';

import { AnimatePresence } from 'framer-motion';
import React from 'react';

export default function Transition({ children }: { children: React.ReactNode }) {
  return <AnimatePresence mode="sync">{children}</AnimatePresence>;
}
