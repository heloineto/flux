import { describe, expect, it } from 'vitest';
import { toStringOrder } from './to-string-order';

describe('toStringOrder', () => {
  it('should return the correct order string', () => {
    expect(toStringOrder({ age: 'asc', height: 'desc' })).toBe(
      'age,height.desc'
    );

    expect(toStringOrder({ height: { direction: 'desc' } })).toBe(
      'height.desc'
    );

    expect(
      toStringOrder({
        height: { direction: 'desc', nulls: 'first' },
      })
    ).toBe('height.desc.nullsfirst');

    expect(
      toStringOrder({
        height: { direction: 'asc', nulls: 'last' },
      })
    ).toBe('height.nullslast');
  });
});
