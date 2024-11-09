'use server';

import { cookies } from 'next/headers';

export const logoutAction = async () => {
  cookies().set('isLogin', 'false');
};
