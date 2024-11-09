'use server';

import { cookies } from 'next/headers';

export const loginAction = async (username: string, password: string) => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      if (username === 'admin@test.com' && password === 'admin') {
        cookies().set('isLogin', 'true');
        return resolve(true);
      }
      return resolve(false);
    }, 1000);
  });
};
