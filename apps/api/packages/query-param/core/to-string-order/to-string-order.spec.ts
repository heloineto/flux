import { toStringOrder } from './to-string-order';
import { describe, expect, it } from 'vitest';

describe('toStringOrder', () => {
  it('should return undefined for empty order object', () => {
    expect(toStringOrder({})).toBe(undefined);
  });

  it('should format string shorthand asc (no suffix)', () => {
    expect(toStringOrder({ age: 'asc' })).toBe('age');
  });

  it('should format string shorthand desc', () => {
    expect(toStringOrder({ age: 'desc' })).toBe('age.desc');
  });

  it('should format object with direction asc only', () => {
    expect(toStringOrder({ height: { direction: 'asc' } })).toBe('height');
  });

  it('should format object with direction desc only', () => {
    expect(toStringOrder({ height: { direction: 'desc' } })).toBe(
      'height.desc'
    );
  });

  it('should format object with no direction (undefined)', () => {
    expect(toStringOrder({ height: {} })).toBe('height');
  });

  it('should format object with nulls first only', () => {
    expect(toStringOrder({ height: { nulls: 'first' } })).toBe(
      'height.nullsfirst'
    );
  });

  it('should format object with nulls last only', () => {
    expect(toStringOrder({ height: { nulls: 'last' } })).toBe(
      'height.nullslast'
    );
  });

  it('should format object with direction asc and nulls first', () => {
    expect(
      toStringOrder({ height: { direction: 'asc', nulls: 'first' } })
    ).toBe('height.nullsfirst');
  });

  it('should format object with direction asc and nulls last', () => {
    expect(toStringOrder({ height: { direction: 'asc', nulls: 'last' } })).toBe(
      'height.nullslast'
    );
  });

  it('should format object with direction desc and nulls first', () => {
    expect(
      toStringOrder({ height: { direction: 'desc', nulls: 'first' } })
    ).toBe('height.desc.nullsfirst');
  });

  it('should format object with direction desc and nulls last', () => {
    expect(
      toStringOrder({ height: { direction: 'desc', nulls: 'last' } })
    ).toBe('height.desc.nullslast');
  });

  it('should join multiple columns with comma', () => {
    expect(toStringOrder({ age: 'asc', height: 'desc' })).toBe(
      'age,height.desc'
    );
  });

  it('should format multiple columns with mixed shorthand and object form', () => {
    expect(
      toStringOrder({
        age: 'asc',
        height: { direction: 'desc', nulls: 'first' },
        name: { nulls: 'last' },
      })
    ).toBe('age,height.desc.nullsfirst,name.nullslast');
  });
});
