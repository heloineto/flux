export type OrderObjectValue =
  | 'asc'
  | 'desc'
  | {
      direction?: 'asc' | 'desc';
      nulls?: 'first' | 'last';
    };

export type OrderObject = Record<string, OrderObjectValue>;

function formatOrderPart(column: string, value: OrderObjectValue): string {
  const direction = typeof value === 'string' ? value : value.direction;
  const nulls = typeof value === 'string' ? undefined : value?.nulls;

  const parts: string[] = [column];
  if (direction === 'desc') {
    parts.push('desc');
  }

  if (nulls === 'first') {
    parts.push('nullsfirst');
  } else if (nulls === 'last') {
    parts.push('nullslast');
  }

  return parts.join('.');
}

export function toStringOrder(order: OrderObject) {
  return Object.entries(order)
    .map(([column, value]) => formatOrderPart(column, value))
    .join(',');
}
