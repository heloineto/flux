import { toStringQuery } from './to-string-query';

describe('toStringQuery', () => {
  describe('converts a string to TypeORM where filters', () => {
    describe('implicit operators', () => {
      it('eq', () => {
        expect(
          toStringQuery([{ operator: 'eq', value: 'hello' }], {
            implicit: true,
          })
        ).toEqual('hello');
      });

      it('parses in', () => {
        expect(
          toStringQuery([{ operator: 'in', value: ['hello', 'world'] }], {
            implicit: true,
          })
        ).toEqual('hello,world');
      });

      it('parses quoted values', () => {
        expect(
          toStringQuery([{ operator: 'in', value: ['hi,there', 'yes,you'] }], {
            implicit: true,
          })
        ).toEqual('"hi,there","yes,you"');
      });
    });

    describe('in', () => {
      it('parses simple values', () => {
        expect(toStringQuery([{ operator: 'in', value: [1, 2, 3] }])).toEqual(
          'in.(1,2,3)'
        );
      });

      it('parses quoted values', () => {
        expect(
          toStringQuery([{ operator: 'in', value: ['hi,there', 'yes,you'] }])
        ).toEqual('in.("hi,there","yes,you")');
      });
    });

    describe('eq', () => {
      it('serializes eq to eq', () => {
        expect(toStringQuery([{ operator: 'eq', value: 'hello' }])).toEqual(
          'eq.hello'
        );
        expect(toStringQuery([{ operator: 'eq', value: '1' }])).toEqual('eq.1');
        expect(toStringQuery([{ operator: 'eq', value: '-10' }])).toEqual(
          'eq.-10'
        );
        expect(toStringQuery([{ operator: 'eq', value: 'hi,there' }])).toEqual(
          'eq."hi,there"'
        );
      });
    });

    describe('gte', () => {
      it('parses simple numbers', () => {
        expect(toStringQuery([{ operator: 'gte', value: '1' }])).toEqual(
          'gte.1'
        );
        expect(toStringQuery([{ operator: 'gte', value: '10' }])).toEqual(
          'gte.10'
        );
        expect(toStringQuery([{ operator: 'gte', value: '-10' }])).toEqual(
          'gte.-10'
        );
      });
    });

    describe('lte', () => {
      it('parses simple numbers', () => {
        expect(toStringQuery([{ operator: 'lte', value: '1' }])).toEqual(
          'lte.1'
        );
        expect(toStringQuery([{ operator: 'lte', value: '10' }])).toEqual(
          'lte.10'
        );
        expect(toStringQuery([{ operator: 'lte', value: '-10' }])).toEqual(
          'lte.-10'
        );
      });
    });

    describe('gt', () => {
      it('parses value as string', () => {
        expect(toStringQuery([{ operator: 'gt', value: '1' }])).toEqual('gt.1');
        expect(toStringQuery([{ operator: 'gt', value: '10' }])).toEqual(
          'gt.10'
        );
      });
    });

    describe('lt', () => {
      it('parses value as string', () => {
        expect(toStringQuery([{ operator: 'lt', value: '1' }])).toEqual('lt.1');
        expect(toStringQuery([{ operator: 'lt', value: '10' }])).toEqual(
          'lt.10'
        );
      });
    });

    describe('and', () => {
      it('gte and lte', () => {
        expect(
          toStringQuery([
            {
              operator: 'and',
              value: [
                { operator: 'gte', value: '18' },
                { operator: 'lte', value: '30' },
              ],
            },
          ])
        ).toEqual('and.(gte.18,lte.30)');
      });

      it('parses three operands', () => {
        expect(
          toStringQuery([
            {
              operator: 'and',
              value: [
                { operator: 'gte', value: '0' },
                { operator: 'lte', value: '100' },
                { operator: 'eq', value: '50' },
              ],
            },
          ])
        ).toEqual('and.(gte.0,lte.100,50)');
      });

      it('parses nested and', () => {
        expect(
          toStringQuery([
            {
              operator: 'and',
              value: [
                { operator: 'gte', value: '1' },
                {
                  operator: 'and',
                  value: [
                    { operator: 'lte', value: '10' },
                    { operator: 'eq', value: '5' },
                  ],
                },
              ],
            },
          ])
        ).toEqual('and.(gte.1,and.(lte.10,5))');
      });

      it('parses and with in inside', () => {
        expect(
          toStringQuery([
            {
              operator: 'and',
              value: [
                { operator: 'in', value: ['a', 'b'] },
                { operator: 'gte', value: '0' },
              ],
            },
          ])
        ).toEqual('and.(in.(a,b),gte.0)');
      });
    });

    describe('edge cases', () => {
      it('returns undefined for empty array', () => {
        expect(toStringQuery([])).toBeUndefined();
      });

      it('returns undefined for an in operator with empty array value', () => {
        expect(toStringQuery([{ operator: 'in', value: [] }])).toBeUndefined();
      });
    });
  });
});
