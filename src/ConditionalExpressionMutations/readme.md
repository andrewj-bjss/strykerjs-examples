# Conditional Expression Mutations

These occur where Greater Than and Less Than conditional checks could be replaced by false or true values, but the tests still pass.

## Our Example

Our isEqual method just takes two values and returns 1 if they are equal or -1 if not, but it's also checking that the second param is not null. This gives us 100% code coverage but we're still seeing a conditional expression mutation being reported.

## How To Fix

There's no meaningful way to introduce a test that will cover the mutation here. What we have here is an example of a junk mutator. Not every surviving mutator is legitimate. Sometimes it might lead us to question the implementation itself, and other times it's just noise, and is probably a combination of another type of mutator that we should focus our attention on. In this case, we don't really need the check to see if b is null, it doesn't change the result from the method, so we could actually remove it and simplify the method itself.

e.g.

```typescript
    return (a == b && b != null) ? 1 : -1;
```

becomes:

```typescript
    return (a == b) ? 1 : -1;
```

This simplifies the method and removes the mutation from the report.

