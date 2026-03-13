'use client';

import { TextInput, type TextInputProps } from '@mantine/core';

export type CurrencyInputProps = Omit<
  TextInputProps,
  'value' | 'defaultValue' | 'onChange'
> & {
  value: number | undefined;
  onChange: (value: number) => void;
  allowNegative?: boolean;
};

const DECIMAL_SCALE = 2;

/**
 * Counts the number of decimal places in a string
 * @param str - The string to count the decimal places of
 * @param decimalSeparator - The decimal separator to use
 * @returns The number of decimal places in the string
 */
function countDecimalPlaces(str: string, decimalSeparator: string): number {
  const decimalIndex = str.indexOf(decimalSeparator);
  return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1;
}

/**
 * Gets the decimal and thousand separators for a given locale
 * @param locale - The locale string (e.g., 'en-US', 'pt-BR', 'de-DE')
 * @returns Object containing decimal and thousand separators
 */
function getLocaleSeparators(locale: string = 'en-US') {
  const formatter = new Intl.NumberFormat(locale);
  const parts = formatter.formatToParts(1234.56);

  const decimalSeparator =
    parts.find((part) => part.type === 'decimal')?.value || '.';
  const thousandSeparator =
    parts.find((part) => part.type === 'group')?.value || ',';

  return { decimalSeparator, thousandSeparator };
}

function parseLocaleFloat(str: string, decimalSeparator: string): number {
  const regex = new RegExp(`[^\\d${decimalSeparator}]`, 'g');
  const parsed = parseFloat(
    str.replace(regex, '').replace(decimalSeparator, '.')
  );

  return parsed;
}

export function CurrencyInput({
  value,
  onChange,
  allowNegative = true,
  ...props
}: CurrencyInputProps) {
  const { decimalSeparator } = getLocaleSeparators('pt-BR');

  const transform = {
    input: (val: number | undefined): string => {
      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: DECIMAL_SCALE,
        minimumFractionDigits: DECIMAL_SCALE,
      });

      function format(val: number): string {
        return formatter.format(val).replace(/R\$\s*/, '');
      }

      if (val === undefined || val === null || Number.isNaN(val)) {
        return format(0);
      }

      return format(val);
    },
    output: (rawValue: string): number => {
      const cleaned = rawValue.replace(
        RegExp(`[^\\d${decimalSeparator}]`, 'g'),
        ''
      );

      if (!cleaned) {
        return 0;
      }

      const decimalPlaces = countDecimalPlaces(cleaned, decimalSeparator);

      let output = parseLocaleFloat(cleaned, decimalSeparator);

      output = isNaN(output) ? 0 : output;

      if (decimalPlaces === DECIMAL_SCALE + 1) {
        output = output * 10;
      }

      if (decimalPlaces === DECIMAL_SCALE - 1) {
        output = output / 10;
      }

      output = Math.round(output * 100) / 100;

      if (!allowNegative) {
        return Math.abs(output);
      }

      const minusCount = rawValue.split('-').length - 1;
      const isNegative = minusCount % 2 === 1;

      if (isNegative) {
        output = -output;
      }

      return output;
    },
  };

  return (
    <TextInput
      value={transform.input(value)}
      onChange={(e) => {
        const output = transform.output(e.currentTarget.value);
        onChange(output);
      }}
      leftSection="R$"
      inputMode="decimal"
      {...props}
    />
  );
}
