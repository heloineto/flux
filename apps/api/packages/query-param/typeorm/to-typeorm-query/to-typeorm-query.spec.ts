import {
  And,
  Equal,
  In,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Not,
} from 'typeorm';
import { toTypeOrmQuery } from './to-typeorm-query';
import { describe, expect, it } from 'vitest';

describe('toTypeOrmQuery', () => {
  describe('Converts a string to TypeORM where filters', () => {
    describe('implicit operators', () => {
      it('parses equals if single value', () => {
        expect(toTypeOrmQuery('hello')).toEqual(Equal('hello'));
      });

      it('parses in if multiple values', () => {
        expect(toTypeOrmQuery('hello,world')).toEqual(In(['hello', 'world']));
        expect(toTypeOrmQuery('"hi,there","yes,you"')).toEqual(
          In(['hi,there', 'yes,you'])
        );
      });
    });

    describe('eq', () => {
      it('parses explicit equality', () => {
        expect(toTypeOrmQuery('eq.hello')).toEqual(Equal('hello'));
        expect(toTypeOrmQuery('eq.1')).toEqual(Equal('1'));
        expect(toTypeOrmQuery('eq.-10')).toEqual(Equal('-10'));
      });
    });

    describe('in', () => {
      it('parses simple strings', () => {
        expect(toTypeOrmQuery('in.(hello,world)')).toEqual(
          In(['hello', 'world'])
        );
      });

      it('parses simple numbers', () => {
        expect(toTypeOrmQuery('in.(1,2,3)')).toEqual(In(['1', '2', '3']));
      });

      it('parses quoted values', () => {
        expect(toTypeOrmQuery('in.("hi,there","yes,you")')).toEqual(
          In(['hi,there', 'yes,you'])
        );
      });
    });

    describe('not.in', () => {
      it('parses simple strings', () => {
        expect(toTypeOrmQuery('not.in.(hello,world)')).toEqual(
          Not(In(['hello', 'world']))
        );
      });

      it('parses simple numbers', () => {
        expect(toTypeOrmQuery('not.in.(1,2,3)')).toEqual(
          Not(In(['1', '2', '3']))
        );
      });

      it('parses quoted values', () => {
        expect(toTypeOrmQuery('not.in.("hi,there","yes,you")')).toEqual(
          Not(In(['hi,there', 'yes,you']))
        );
      });
    });

    describe('gte', () => {
      it('parses simple numbers', () => {
        expect(toTypeOrmQuery('gte.1')).toEqual(MoreThanOrEqual('1'));
        expect(toTypeOrmQuery('gte.10')).toEqual(MoreThanOrEqual('10'));
        expect(toTypeOrmQuery('gte.-10')).toEqual(MoreThanOrEqual('-10'));
      });
    });

    describe('lte', () => {
      it('parses simple numbers', () => {
        expect(toTypeOrmQuery('lte.1')).toEqual(LessThanOrEqual('1'));
        expect(toTypeOrmQuery('lte.10')).toEqual(LessThanOrEqual('10'));
        expect(toTypeOrmQuery('lte.-10')).toEqual(LessThanOrEqual('-10'));
      });
    });

    describe('gt', () => {
      it('parses value as string', () => {
        expect(toTypeOrmQuery('gt.1')).toEqual(MoreThan('1'));
        expect(toTypeOrmQuery('gt.10')).toEqual(MoreThan('10'));
      });
    });

    describe('lt', () => {
      it('parses value as string', () => {
        expect(toTypeOrmQuery('lt.1')).toEqual(LessThan('1'));
        expect(toTypeOrmQuery('lt.10')).toEqual(LessThan('10'));
      });
    });

    describe('and', () => {
      it('gte and lte', () => {
        expect(toTypeOrmQuery('and.(gte.18,lte.30)')).toEqual(
          And(MoreThanOrEqual('18'), LessThanOrEqual('30'))
        );
      });

      it('parses three operands', () => {
        expect(toTypeOrmQuery('and.(gte.0,lte.100,50)')).toEqual(
          And(MoreThanOrEqual('0'), LessThanOrEqual('100'), Equal('50'))
        );
      });

      it('parses nested and', () => {
        expect(toTypeOrmQuery('and.(gte.1,and.(lte.10,5))')).toEqual(
          And(MoreThanOrEqual('1'), And(LessThanOrEqual('10'), Equal('5')))
        );
      });

      it('parses and with in inside', () => {
        expect(toTypeOrmQuery('and.(in.(a,b),gte.0)')).toEqual(
          And(In(['a', 'b']), MoreThanOrEqual('0'))
        );
      });
    });

    describe('edge cases', () => {
      it('returns undefined for empty or whitespace', () => {
        expect(toTypeOrmQuery(undefined)).toBeUndefined();
        expect(toTypeOrmQuery('')).toBeUndefined();
        expect(toTypeOrmQuery('   ')).toBeUndefined();
      });

      it('trims input before parsing', () => {
        expect(toTypeOrmQuery('  gte.5  ')).toEqual(MoreThanOrEqual('5'));
      });
    });
  });
});
