import { toTypeOrmOrder } from './to-typeorm-order';
import { describe, expect, it } from 'vitest';

describe('toTypeOrmOrder', () => {
  it('should return undefined for empty order string', () => {
    expect(toTypeOrmOrder('')).toBeUndefined();
    expect(toTypeOrmOrder(undefined)).toBeUndefined();
  });

  it('should parse string shorthand asc (no suffix)', () => {
    expect(toTypeOrmOrder('age')).toEqual({ age: 'ASC' });
  });

  it('should parse string shorthand desc', () => {
    expect(toTypeOrmOrder('age.desc')).toEqual({ age: 'DESC' });
  });

  it('should parse direction asc only', () => {
    expect(toTypeOrmOrder('height')).toEqual({ height: 'ASC' });
  });

  it('should parse direction desc only', () => {
    expect(toTypeOrmOrder('height.desc')).toEqual({ height: 'DESC' });
  });

  it('should parse part with no direction (defaults to asc)', () => {
    expect(toTypeOrmOrder('height')).toEqual({ height: 'ASC' });
  });

  it('should parse nulls first only', () => {
    expect(toTypeOrmOrder('height.nullsfirst')).toEqual({
      height: { direction: 'ASC', nulls: 'FIRST' },
    });
  });

  it('should parse nulls last only', () => {
    expect(toTypeOrmOrder('height.nullslast')).toEqual({
      height: { direction: 'ASC', nulls: 'LAST' },
    });
  });

  it('should parse direction asc and nulls first', () => {
    expect(toTypeOrmOrder('height.nullsfirst')).toEqual({
      height: { direction: 'ASC', nulls: 'FIRST' },
    });
  });

  it('should parse direction asc and nulls last', () => {
    expect(toTypeOrmOrder('height.nullslast')).toEqual({
      height: { direction: 'ASC', nulls: 'LAST' },
    });
  });

  it('should parse direction desc and nulls first', () => {
    expect(toTypeOrmOrder('height.desc.nullsfirst')).toEqual({
      height: { direction: 'DESC', nulls: 'FIRST' },
    });
  });

  it('should parse direction desc and nulls last', () => {
    expect(toTypeOrmOrder('height.desc.nullslast')).toEqual({
      height: { direction: 'DESC', nulls: 'LAST' },
    });
  });

  it('should parse multiple columns (comma-separated)', () => {
    expect(toTypeOrmOrder('age,height.desc')).toEqual({
      age: 'ASC',
      height: 'DESC',
    });
  });

  it('should parse multiple columns with mixed shorthand and options', () => {
    expect(toTypeOrmOrder('age,height.desc.nullsfirst,name.nullslast')).toEqual(
      {
        age: 'ASC',
        height: { direction: 'DESC', nulls: 'FIRST' },
        name: { direction: 'ASC', nulls: 'LAST' },
      }
    );
  });

  it('handles nested columns (relations)', () => {
    expect(toTypeOrmOrder('municipio.nome')).toEqual({
      municipio: { nome: 'ASC' },
    });

    expect(toTypeOrmOrder('municipio.nome.desc')).toEqual({
      municipio: { nome: 'DESC' },
    });

    expect(
      toTypeOrmOrder('age,height.desc,municipio.nome.desc.nullsfirst')
    ).toEqual({
      age: 'ASC',
      height: 'DESC',
      municipio: { nome: { direction: 'DESC', nulls: 'FIRST' } },
    });
  });
});
