import type { FindOperator } from 'typeorm';
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

const notInMatch = /^not\.in\.\((?<content>.+)\)$/;
const inMatch = /^in\.\((?<content>.+)\)$/;
const andMatch = /^and\.\((?<content>.+)\)$/;
const inValues = /"(?<quoted>[^"]*)"|(?<unquoted>[^,]+)/g;

const eqMatch = /^eq\.(?<content>.+)$/;
const gteMatch = /^gte\.(?<content>.+)$/;
const lteMatch = /^lte\.(?<content>.+)$/;
const gtMatch = /^gt\.(?<content>.+)$/;
const ltMatch = /^lt\.(?<content>.+)$/;

/**
 * Splits a string by commas only at the top level (depth 0).
 * Commas inside parentheses are ignored, so nested structures like
 * `and.(a,b),and.(c,d)` are split into `["and.(a,b)", "and.(c,d)"]`.
 *
 * @param content - The string to split (e.g. content inside `and.(...)`).
 * @returns Trimmed segments between top-level commas.
 */
function splitTopLevelCommas(content: string): string[] {
  const segments: string[] = [];
  let depth = 0;
  let start = 0;

  for (let index = 0; index < content.length; index++) {
    const char = content[index];
    if (char === '(') depth++;
    else if (char === ')') depth--;
    else if (char === ',' && depth === 0) {
      segments.push(content.slice(start, index).trim());
      start = index + 1;
    }
  }

  segments.push(content.slice(start).trim());
  return segments;
}

function parseCommaSeparated(content: string): string[] {
  return [...content.matchAll(inValues)].map((regexMatch) => {
    const { quoted, unquoted } = regexMatch.groups!;

    if (quoted !== undefined) return quoted;

    return unquoted.trim();
  });
}

function getMatch(value: string, match: RegExp) {
  return value.match(match)?.groups?.content;
}

export function toTypeOrmQuery(original: string | undefined) {
  const value = original?.trim();
  if (!value) return;

  const eqContent = getMatch(value, eqMatch);
  if (eqContent) return Equal(eqContent);

  const gteContent = getMatch(value, gteMatch);
  if (gteContent) return MoreThanOrEqual(gteContent);

  const lteContent = getMatch(value, lteMatch);
  if (lteContent) return LessThanOrEqual(lteContent);

  const gtContent = getMatch(value, gtMatch);
  if (gtContent) return MoreThan(gtContent);

  const ltContent = getMatch(value, ltMatch);
  if (ltContent) return LessThan(ltContent);

  const andContent = getMatch(value, andMatch);

  if (andContent) {
    const operators: FindOperator<unknown>[] = splitTopLevelCommas(andContent)
      .map((segment) => toTypeOrmQuery(segment))
      .filter(
        (operator): operator is FindOperator<unknown> => operator !== undefined
      );

    return And(...operators);
  }

  const notInContent = getMatch(value, notInMatch);

  if (notInContent) return Not(In(parseCommaSeparated(notInContent)));

  const inContent = getMatch(value, inMatch);
  if (inContent) return In(parseCommaSeparated(inContent));

  const implicitValues = parseCommaSeparated(value);

  if (implicitValues.length > 1) {
    return In(implicitValues);
  }

  return Equal(implicitValues[0] ?? value);
}
