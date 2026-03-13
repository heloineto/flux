export type SingleValueOperator = 'eq' | 'gte' | 'lte' | 'gt' | 'lt';

export type SingleValueQueryObject = {
  operator: SingleValueOperator;
  value: string | number;
};

export type LogicalOperator = 'and';

export type LogicalQueryObject = {
  operator: LogicalOperator;
  value: QueryObject[];
};

export type QueryObject =
  | { operator: 'in'; value: string[] | number[] }
  | LogicalQueryObject
  | SingleValueQueryObject;

export function isSingleValueQuery(
  query: QueryObject
): query is SingleValueQueryObject {
  const SINGLE_VALUE_OPERATORS: SingleValueOperator[] = [
    'eq',
    'gte',
    'lte',
    'gt',
    'lt',
  ];

  return SINGLE_VALUE_OPERATORS.includes(query.operator as SingleValueOperator);
}
