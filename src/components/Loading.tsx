'use client';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { motion } from 'framer-motion';

type LoadingProps = {
  loading?: boolean;
};

export default function Loading({ loading = false }: LoadingProps) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, display: 'none' },
        animate: { opacity: 1, display: 'flex' },
      }}
      initial="initial"
      animate={loading ? 'animate' : 'initial'}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      className="absolute left-0 top-0 z-10 size-full items-center justify-center bg-white/90"
    >
      <Spin indicator={<LoadingOutlined spin size={30} />} size="large" />
    </motion.div>
  );
}
