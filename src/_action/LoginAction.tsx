'use server';

export const loginAction = async (username: string, password: string) => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      if (username === 'admin@test.com' && password === 'admin') {
        return resolve(true);
      }
      return resolve(false);
    }, 1000);
  });
};
