'use client';

import { App, Button, Form, Input } from 'antd';
import { motion } from 'framer-motion';
import { Lock, UserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { loginAction } from '@/_action/LoginAction';
import { AnimInfinityText } from '@/lib/motion';

type FieldType = {
  username?: string;
  password?: string;
};

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const { message } = App.useApp();
  const router = useRouter();

  const onLogin = ({ username, password }: FieldType) => {
    setLoading(true);
    loginAction(username!, password!)
      .then((ok) => {
        if (ok) {
          message.success('Login successfully!').then();
          router.push('/');
        } else {
          message.error('Account is invalid').then();
        }
      })
      .finally(() => {
        setLoading(false);
      });
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
        <div className="w-full p-6 md:w-2/5 md:pl-3">
          <Form layout="vertical" onFinish={onLogin}>
            <div className="mb-4 text-center text-xl font-semibold">
              <AnimInfinityText texts={['Welcome to', 'Login to']} delay={1} />{' '}
              <span className="font-bold text-primary">Daily Running</span>
            </div>
            <Form.Item<FieldType>
              name="username"
              label="Username"
              className="w-full"
              rules={[
                { required: true, message: 'Please input your username!' },
                { type: 'email', message: 'Invalid email!' },
              ]}
            >
              <Input prefix={<UserRound size={16} className="mr-1 text-neutral-400" />} placeholder="Username" />
            </Form.Item>
            <Form.Item<FieldType>
              name="password"
              className="w-full"
              rules={[{ required: true, message: 'Please input your password!' }]}
              label="Password"
            >
              <Input.Password prefix={<Lock size={16} className="mr-1 text-neutral-400" />} placeholder="Password" />
            </Form.Item>
            <Button type="primary" className="mt-3 w-full" loading={loading} htmlType="submit">
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </Form>
        </div>
      </motion.div>
    </div>
  );
}
