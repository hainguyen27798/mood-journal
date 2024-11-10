'use client';

import { Drawer } from 'antd';
import type { DrawerStyles } from 'antd/es/drawer/DrawerPanel';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

import Nav from '@/components/nav/Nav';
import { useNav } from '@/store';

const drawerStyles: DrawerStyles = {
  body: {
    padding: 0,
  },
};

export default function NavMobile() {
  const { isOpen, close } = useNav();
  const screens = useBreakpoint();

  return (
    <Drawer
      placement="left"
      styles={{ ...drawerStyles, wrapper: { width: screens.xs ? '100%' : 'auto' } }}
      closable={true}
      onClose={close}
      open={isOpen}
    >
      <Nav />
    </Drawer>
  );
}
