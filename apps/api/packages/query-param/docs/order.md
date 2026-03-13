# Ordering

The reserved word `order` reorders the response rows. It uses a comma-separated list of columns and directions:

```
/people?order=age.desc,height.asc
```

If no direction is specified it defaults to ascending order:

```
/people?order=age
```

If you care where nulls are sorted, add nullsfirst or nullslast:

```
/people?order=age.nullsfirst
/people?order=age.desc.nullslast
```
