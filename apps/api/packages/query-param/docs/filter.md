## Horizontal Filtering

You can filter result rows by adding conditions on columns. For instance, to return people aged under 13 years old:

```bash
/people?age=lt.13
```

You can evaluate multiple conditions on columns by adding more query string parameters. For instance, to return people who are 18 or older **and** are students:

```bash
/people?age=gte.18&student=is.true
```

### Operators

These operators are available:

| Abbreviation | In PostgreSQL | Meaning                                                                                                                    |
| ------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| eq           | `=`           | equals                                                                                                                     |
| gt           | `>`           | greater than                                                                                                               |
| gte          | `>=`          | greater than or equal                                                                                                      |
| lt           | `<`           | less than                                                                                                                  |
| lte          | `<=`          | less than or equal                                                                                                         |
| neq          | `<>` or `!=`  | not equal                                                                                                                  |
| like         | `LIKE`        | LIKE operator (use `*` as alias for `%` to avoid [URL encoding](https://en.wikipedia.org/wiki/Percent-encoding))           |
| ilike        | `ILIKE`       | ILIKE operator (use `*` as alias for `%` to avoid URL encoding)                                                            |
| match        | `~`           | regex match (see Pattern Matching)                                                                                         |
| in           | `IN`          | one of a list of values, e.g. `?a=in.(1,2,3)` — also supports commas in quoted strings like `?a=in.("hi,there","yes,you")` |
| is           | `IS`          | exact equality (null, not_null, true, false, unknown)                                                                      |
| cs           | `@>`          | contains, e.g. `?tags=cs.{example, new}`                                                                                   |
| cd           | `<@`          | contained in, e.g. `?values=cd.{1,2,3}`                                                                                    |
| ov           | `&&`          | overlap (e.g. `?period=ov.[2017-01-01,2017-06-30]`; arrays use `?arr=ov.{1,3}`)                                            |
| sl           | `<<`          | strictly left of, e.g. `?range=sl.(1,10)`                                                                                  |
| sr           | `>>`          | strictly right of                                                                                                          |
| nxr          | `&<`          | does not extend to the right of, e.g. `?range=nxr.(1,10)`                                                                  |
| nxl          | `&>`          | does not extend to the left of                                                                                             |
| adj          | `-`           | is adjacent to, e.g. `?range=adj.(1,10)`                                                                                   |
| not          | `NOT`         | negates another operator (see Logical operators)                                                                           |
| or           | `OR`          | logical OR (see Logical operators)                                                                                         |
| and          | `AND`         | logical AND (see Logical operators)                                                                                        |
| all          | `ALL`         | comparison matches all values in list (see Operator Modifiers)                                                             |
| any          | `ANY`         | comparison matches any value in list (see Operator Modifiers)                                                              |

### Logical operators

Multiple conditions on columns are evaluated using `AND` by default, but you can combine them using `OR` with the `or` operator. For example, to return people under 18 **or** over 21:

```bash
/people?or=(age.lt.18,age.gt.21)"
```

To **negate** any operator, prefix it with `not`, e.g. `?a=not.eq.2` or `?not.and=(a.gte.0,a.lte.100)`.

You can also apply complex logic to the conditions:

```bash
# curl "http://localhost:3000/people?grade=gte.90&student=is.true&or=(age.eq.14,not.and(age.gte.11,age.lte.17))"
curl --get "http://localhost:3000/people" \
  -d "grade=gte.90" \
  -d "student=is.true" \
  -d "or=(age.eq.14,not.and(age.gte.11,age.lte.17))"
```

If the filter value has a reserved character, wrap it in double quotes:

```bash
curl -g 'http://localhost:3000/survey?or=(age_range.adj."[18,21)",age_range.cs."[30,35]")'
```

### Operator Modifiers

You may further simplify the logic using the `any/all` modifiers of `eq,like,ilike,gt,gte,lt,lte,match`.

For instance, to avoid repeating the same column for `or`, use `any` to get people with last names that start with O or P:

```bash
curl -g "http://localhost:3000/people?last_name=like(any).{O*,P*}"
```

In a similar way, use `all` to avoid repeating the same column for `and`. To get people with last names that start with O and end with n:

```bash
curl -g "http://localhost:3000/people?last_name=like(all).{O*,*n}"
```
