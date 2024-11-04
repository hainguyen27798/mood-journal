'use client';

import { App, Button, Input } from 'antd';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { AnimInfinityText } from '@/lib/motion';

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const { message } = App.useApp();
  const router = useRouter();

  const onLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Login successfully!').then();
      router.push('/');
    }, 2000);
  };

  return (
    <div className="flex size-full min-h-screen items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex w-[320px] max-w-full flex-wrap items-center overflow-auto rounded-2xl bg-white shadow-lg md:w-[800px]"
      >
        <div className="w-full md:w-3/5">
          <img src="/img/login-banner.svg" alt="" />
        </div>
        <div className="flex w-full flex-col items-center gap-4 p-6 md:w-2/5 md:pl-3">
          <div className="mb-2 text-center text-xl font-semibold">
            <AnimInfinityText texts={['Welcome to', 'Login to']} delay={1} />{' '}
            <span className="font-bold text-primary">Daily Running</span>
          </div>
          <div className="w-full">
            <div className="mb-1 text-sm text-neutral-500">Username</div>
            <Input placeholder="Username" />
          </div>
          <div className="w-full">
            <div className="mb-1 text-sm text-neutral-500">Password</div>
            <Input.Password placeholder="Password" />
          </div>
          <Button type="primary" className="mt-4 w-full" loading={loading} onClick={onLogin}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
