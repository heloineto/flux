import { useComputedColorScheme } from '@mantine/core';
import type { Theme } from 'ag-grid-community';
import {
  colorSchemeDark,
  colorSchemeLight,
  themeBalham,
} from 'ag-grid-community';
import { useMemo } from 'react';

export function useAgGridTheme(): Theme {
  const computedColorScheme = useComputedColorScheme();

  return useMemo(() => {
    const isDark = computedColorScheme === 'dark';

    return themeBalham
      .withParams({
        fontFamily: 'var(--mantine-font-family)',
        fontSize: '0.8125rem',

        backgroundColor: 'var(--mantine-color-body)',
        foregroundColor: 'var(--mantine-color-text)',
        accentColor: 'var(--mantine-primary-color-6)',

        borderColor: 'var(--mantine-color-default-border)',
        borderWidth: '1px',
        wrapperBorderRadius: 'var(--mantine-radius-default)',

        headerFontSize: '0.8125rem',
        headerBackgroundColor: 'var(--mantine-color-default)',
        headerTextColor: isDark
          ? 'var(--mantine-color-dark-1)'
          : 'var(--mantine-color-gray-7)',
        headerFontWeight: '500',
        headerHeight: '40px',

        dataBackgroundColor: isDark
          ? 'var(--mantine-color-dark-6)'
          : 'var(--mantine-color-white)',
        oddRowBackgroundColor: isDark
          ? 'var(--mantine-color-dark-7)'
          : 'var(--mantine-color-gray-0)',
        rowHoverColor: 'var(--mantine-color-default-hover)',

        rangeSelectionBackgroundColor: 'var(--mantine-primary-color-light)',
        rangeSelectionBorderColor: 'var(--mantine-primary-color-6)',
        selectedRowBackgroundColor: 'var(--mantine-primary-color-light-hover)',

        inputBackgroundColor: 'var(--mantine-color-body)',

        spacing: 'var(--mantine-spacing-sm)',
        cellHorizontalPadding: 'var(--mantine-spacing-sm)',

        dropdownShadow: 'var(--mantine-shadow-md)',

        chromeBackgroundColor: 'var(--mantine-color-default)',
        panelBackgroundColor: 'var(--mantine-color-body)',

        buttonBackgroundColor: 'var(--mantine-color-default)',
        buttonTextColor: 'var(--mantine-color-text)',
      })
      .withPart(isDark ? colorSchemeDark : colorSchemeLight);
  }, [computedColorScheme]);
}
