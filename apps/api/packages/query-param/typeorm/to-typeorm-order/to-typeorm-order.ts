import lodash from 'lodash';
import type { FindOptionsOrder } from 'typeorm';

const ORDER_OPTIONS = new Set(['desc', 'asc', 'nullsfirst', 'nullslast']);

type OrderValue =
  | 'ASC'
  | 'DESC'
  | { direction: 'ASC' | 'DESC'; nulls: 'FIRST' | 'LAST' };

function splitPathAndOptions(part: string): {
  path: string[];
  options: string[];
} {
  const path: string[] = [];
  const options: string[] = [];

  for (const segment of part.split('.')) {
    const lower = segment.toLowerCase();
    if (ORDER_OPTIONS.has(lower)) {
      options.push(lower);
    } else {
      path.push(segment);
    }
  }

  return { path, options };
}

function toOrderValue(options: string[]): OrderValue {
  const direction = options.includes('desc') ? 'DESC' : 'ASC';
  const nulls = options.includes('nullsfirst')
    ? 'FIRST'
    : options.includes('nullslast')
      ? 'LAST'
      : undefined;

  return nulls ? { direction, nulls } : direction;
}

export function toTypeOrmOrder(
  original: string | undefined
): FindOptionsOrder<unknown> | undefined {
  const order = original?.trim();
  if (!order) return;

  const result: Record<string, unknown> = {};

  for (const part of order.split(',')) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    const { path, options } = splitPathAndOptions(trimmed);
    if (path.length === 0) continue;

    lodash.set(result, path, toOrderValue(options));
  }

  return result as FindOptionsOrder<unknown>;
}
