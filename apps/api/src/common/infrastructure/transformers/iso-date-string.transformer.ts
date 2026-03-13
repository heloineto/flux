import type { ValueTransformer } from 'typeorm';

/**
 * TypeORM column transformer for timestamp columns that are exposed as ISO date
 * strings in the app (per project rule: ids and dates as string).
 */
export const isoDatetimeTransformer: ValueTransformer = {
  from: (value: Date | string | null): string | null => {
    if (value === null || value === undefined) {
      return null;
    }

    if (value instanceof Date) {
      return value.toISOString();
    }

    return typeof value === 'string' ? value : null;
  },
  to: (value: string | Date | null | undefined): Date | null | undefined => {
    if (typeof value !== 'string') {
      return value;
    }

    return new Date(value);
  },
};
