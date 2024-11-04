'use client';

import { Drawer } from 'antd';
import type { DrawerStyles } from 'antd/es/drawer/DrawerPanel';

import Nav from '@/components/Nav';
import { useNav } from '@/store';

const drawerStyles: DrawerStyles = {
  body: {
    padding: 0,
  },
};

export default function NavMobile() {
  const { isOpen, close } = useNav();

  return (
    <Drawer className="md:hidden" placement="left" styles={drawerStyles} closable={true} onClose={close} open={isOpen}>
      <Nav />
    </Drawer>
  );
}
