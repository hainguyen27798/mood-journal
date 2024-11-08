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
      dangerColor: colors.red[400],
    },
    Divider: {
      colorSplit: colors.neutral[200],
    },
    DatePicker: {
      fontFamily: 'var(--font-nunito-sans)',
      colorBorder: colors.neutral[200],
      controlHeight: 36,
    },
    Radio: {
      controlHeight: 36,
      colorBorder: colors.neutral[200],
    },
  },
};
