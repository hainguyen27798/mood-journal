import type { ThemeConfig } from 'antd';
import colors from 'tailwindcss/colors';

export const themeConfig: ThemeConfig = {
  token: {
    fontFamily: 'var(--font-nunito)',
    colorPrimary: '#8fc0a9',
    colorBorder: colors.neutral[400],
  },
  components: {
    Input: {
      // colorBorder: colors.neutral[300],
      controlHeight: 36,
      fontFamily: 'var(--font-nunito-sans)',
    },
    Button: {
      fontSize: 16,
      controlHeight: 36,
    },
  },
};
