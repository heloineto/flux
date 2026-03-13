## Global

- ALWAYS be extremely concise. Sacrifice grammar for the sake of concision
- IF NEEDED at the end of each plan, give me a list of unresolved questions to answer, if any
- NEVER use em dash "—". use either a dot, comma, space or simple hyphen "-" instead.
- If a failing command and its output is given, if it is a simple command with non destructive actions, re-run after your fix to verify

## Programming

- ALWAYS write clean and elegant code
- NEVER nest code beyond 3 levels deep. Always refactor using:
  - Early return to kill conditions fast, invert guards
  - Extract nested blocks into separate functions
- NEVER use single-character variable names. BAD: `i` GOOD: `index`
- NEVER do ugly/nested ternaries. Use if/else or extract to a function. BAD: a ? b ? c : d : e GOOD: if/else blocks

### Zod

- BAD: `.nullable().optional()` GOOD: `.nullish()`
- BAD: `.strict()` GOOD: `.strictObject()`
- BAD: `.passthrough()` GOOD: `.looseObject()`
