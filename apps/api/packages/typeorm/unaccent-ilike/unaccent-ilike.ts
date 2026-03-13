import { Raw } from 'typeorm';

export function unaccentILike(value: string) {
  return Raw((alias) => `unaccent(${alias}) ILIKE unaccent(:term)`, {
    term: `%${value}%`,
  });
}
