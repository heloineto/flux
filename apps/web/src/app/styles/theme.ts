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
  defaultRadius: 'sm',
  primaryColor: 'teal',
  colors: {
    teal: [
      '#e1fff3',
      '#c1fbe4',
      '#ade7d0',
      '#94ceb7',
      '#7db7a0',
      '#6ba58e',
      '#5b957e',
      '#4d8770',
      '#3e7861',
      '#316b54',
    ],
    dark: [
      '#c4cbc9',
      '#b3bab8',
      '#7d8482',
      '#646b69',
      '#3d4442',
      '#3a3b3b',
      '#2d2e2e',
      '#232424',
      '#1e1f1f',
      '#131414',
    ],
    gray: [
      '#f8f9f9',
      '#eef5f3',
      '#e7eeec',
      '#dde4e2',
      '#ced5d3',
      '#afb6b4',
      '#888f8d',
      '#4a514f',
      '#343b39',
      '#202725',
    ],
  },
});
