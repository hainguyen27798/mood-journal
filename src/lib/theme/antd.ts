import type { ThemeConfig } from 'antd';
import colors from 'tailwindcss/colors';

export const themeConfig: ThemeConfig = {
  token: {
    fontFamily: 'var(--font-nunito)',
    colorPrimary: '#8fc0a9',
    colorBorder: colors.neutral[400],
    colorError: colors.rose[400],
  },
  components: {
    Input: {
      // colorBorder: colors.neutral[300],
      controlHeightXS: 32,
      controlHeight: 36,
      fontFamily: 'var(--font-nunito-sans)',
    },
    Button: {
      fontSizeSM: 14,
      fontSize: 16,
      controlHeightSM: 32,
      controlHeight: 36,
      dangerColor: colors.red[400],
    },
    Divider: {
      colorSplit: colors.neutral[200],
    },
    DatePicker: {
      fontFamily: 'var(--font-nunito-sans)',
      colorBorder: colors.neutral[200],
      controlHeightSM: 32,
      controlHeight: 36,
    },
    Radio: {
      controlHeightSM: 32,
      controlHeight: 36,
      colorBorder: colors.neutral[200],
    },
    Form: {
      labelColor: colors.neutral[500],
      verticalLabelPadding: '0 0 5px',
      labelRequiredMarkColor: colors.rose[400],
      itemMarginBottom: 20,
    },
  },
};
