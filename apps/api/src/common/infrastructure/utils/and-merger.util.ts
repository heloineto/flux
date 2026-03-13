import { And, Equal, FindOperator } from 'typeorm';
import { isPlainObject } from 'lodash';

/**
 * Wraps a raw value in `Equal()` if it isn't already a `FindOperator`.
 *
 * @example
 * ```ts
 * asFindOperator('2024')        // => Equal('2024')
 * asFindOperator(ILike('%abc%')) // => ILike('%abc%')  (returned as-is)
 * ```
 */
function asFindOperator(value: unknown): FindOperator<unknown> {
  if (value instanceof FindOperator) {
    return value;
  }
  return Equal(value);
}

/**
 * Combines two TypeORM `FindOperator` values on the same column into a
 * single `And(...)` operator.
 *
 * When both `baseValue` and `srcValue` are present and are *not* plain
 * objects (i.e. they are primitives or `FindOperator` instances), returns
 * `And(baseValue, srcValue)` so both conditions apply to the same column.
 *
 * Returns `undefined` when either side is `undefined` or when either side
 * is a plain objects (nested where clause).
 *
 * @example
 * ```ts
 * const base = { ano: '2024', situacao: 'PAGO' };
 * const override = { ano: ILike('%2024%') };
 *
 * mergeWith({}, base, override, andMerger);
 * // Result: { ano: And(Equal('2024'), ILike('%2024%')), situacao: 'PAGO' }
 * ```
 */
export function andMerger(baseValue: unknown, srcValue: unknown) {
  if (baseValue === undefined || srcValue === undefined) {
    return;
  }

  if (isPlainObject(baseValue) || isPlainObject(srcValue)) {
    return;
  }

  return And(asFindOperator(baseValue), asFindOperator(srcValue));
}
