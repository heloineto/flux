import type { ValueTransformer } from 'typeorm';

/**
 * TypeORM column transformer for numeric columns (int4, int8, etc.) that are
 * exposed as string in the app (per project rule: all ids as string).
 */
export const numericStringTransformer: ValueTransformer = {
  from: (value: number | null | undefined): string | null => {
    if (value === null || value === undefined) {
      return null;
    }

    return String(value);
  },
  to: (value: string | null | undefined): number | null => {
    if (value === null || value === undefined || value === '') {
      return null;
    }

    return Number(value);
  },
};
