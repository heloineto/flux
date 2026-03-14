import { createTheme } from '@mantine/core';
import { geistMono, geistSans } from './fonts';

export const theme = createTheme({
  fontFamily: geistSans.style.fontFamily,
  fontFamilyMonospace: geistMono.style.fontFamily,
  components: {
    Checkbox: {
      defaultProps: {
        radius: 'sm',
      },
    },
    Tooltip: {
      defaultProps: {
        withArrow: true,
      },
    },
  },
  defaultRadius: 'md',
  primaryColor: 'blue',
});
