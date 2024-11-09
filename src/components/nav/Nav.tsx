'use client';

import { Button, Divider } from 'antd';
import { motion } from 'framer-motion';
import { Award, Calendar, LayoutGrid, LogOut, Users } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import { AnimInText } from '@/lib/motion';

type TNavMenuItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
  disabled?: boolean;
};

const navMenu: TNavMenuItem[] = [
  {
    title: 'Overview',
    icon: <LayoutGrid size={20} />,
    href: '/',
  },
  {
    title: 'Rewards',
    icon: <Award size={20} />,
    href: '/rewards',
    disabled: true,
  },
  {
    title: 'Calendar',
    icon: <Calendar size={20} />,
    href: '/rewards',
    disabled: true,
  },
  {
    title: 'Refer a Friend',
    icon: <Users size={20} />,
    href: '/refer-a-friend',
    disabled: true,
  },
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const onLogout = () => {
    router.push('/login');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="z-10 size-full bg-white shadow-md md:border-r"
    >
      <div className="flex h-full flex-col gap-4 px-4 pb-6 pt-3">
        <div className="flex flex-col items-center gap-3">
          <Image src="/img/logic.png" alt="" width={40} height={40} />
          <div className="text-xl font-black">
            <AnimInText text="Daily Running" delay={0.5} />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 overflow-auto pt-6">
          {navMenu.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: '-50%' }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 + index * 0.4 }}
            >
              <Button
                key={item.title}
                type="text"
                className={`w-full !justify-start !gap-3 text-lg !font-semibold ${pathname === item.href ? '!bg-primary !text-white' : ''}`}
                icon={item.icon}
                onClick={() => router.push(item.href)}
                disabled={item.disabled}
              >
                {item.title}
              </Button>
            </motion.div>
          ))}
        </div>
        <Divider className="!m-0" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image height={36} width={36} src="/img/Avatar.svg" alt=""></Image>
            <div className="text-base font-semibold">Hai Nguyen</div>
          </div>
          <Button
            type="dashed"
            className="w-full !justify-start !gap-3"
            icon={<LogOut size={20} />}
            onClick={onLogout}
            danger
          >
            Logout
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
