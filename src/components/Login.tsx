'use client';

import { Button, Input } from 'antd';
import { useState } from 'react';

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);

  const onLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen w-screen items-center justify-center overflow-auto bg-neutral-100 p-4">
      <div className="flex w-[320px] max-w-full flex-wrap items-center overflow-auto rounded-2xl bg-white shadow-lg md:w-[800px]">
        <div className="w-full md:w-3/5">
          <img src="/img/login-banner.svg" alt="" />
        </div>
        <div className="flex w-full flex-col items-center gap-4 p-6 md:w-2/5 md:pl-3">
          <div className="mb-2 text-center text-xl font-semibold">
            Welcome to <span className="font-bold text-primary">Daily Running</span>
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
      </div>
    </div>
  );
}
