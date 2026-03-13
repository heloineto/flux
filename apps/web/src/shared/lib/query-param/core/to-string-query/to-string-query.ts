import { type QueryObject, isSingleValueQuery } from './utils/types';

type QueryStringOptions = {
  implicit: boolean;
};

const DEFAULT_QUERY_STRING_OPTIONS: QueryStringOptions = {
  implicit: false,
};

function shouldQuote(value: string | number): boolean {
  return typeof value === 'string' && value.includes(',');
}

function formatValue(value: string | number): string {
  return shouldQuote(value) ? `"${value}"` : String(value);
}

function queryObjectToSegment(
  query: QueryObject,
  options: QueryStringOptions
): string | undefined {
  if (query.operator === 'and') {
    const segments = query.value
      .map((child) =>
        isSingleValueQuery(child) && child.operator === 'eq'
          ? String(child.value)
          : queryObjectToSegment(child, options)
      )
      .filter((segment): segment is string => segment !== undefined);
    if (segments.length === 0) return undefined;
    return `and.(${segments.join(',')})`;
  }

  if (isSingleValueQuery(query)) {
    if (options.implicit && query.operator === 'eq') {
      return String(query.value);
    }
    return `${query.operator}.${formatValue(query.value)}`;
  }

  const values = query.value;
  if (values.length === 0) return undefined;

  if (options.implicit) {
    return values.map((value: string | number) => formatValue(value)).join(',');
  }

  const formatted = values.map(formatValue).join(',');
  return `in.(${formatted})`;
}

export function toStringQuery(
  original: QueryObject[],
  options: QueryStringOptions = DEFAULT_QUERY_STRING_OPTIONS
): string | undefined {
  if (original.length === 0) return;

  const segments = original
    .map((query) => queryObjectToSegment(query, options))
    .filter((segment): segment is string => segment !== undefined);

  if (segments.length === 0) return;

  return segments.join(',');
}
