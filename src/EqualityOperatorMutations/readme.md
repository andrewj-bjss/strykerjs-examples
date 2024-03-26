# Equality Operator Mutations

The most likely kind of equality operator mutation is likely to be caused by missing boundary tests. For example, if you have a method that checks if a > b, and you don't explicitly test for what happens when a equals b.

## Our Example

This is exactly what our method canVote has a problem with. We return true if over 17, and false if not. We test that over 17s can vote (returns true) and that under 18s can't vote, (returns false), but we don't test what happens if you are 17 exactly. So if someone accidentally changed ```return age > 17 ? true : false;``` to ```return age >= 17 ? true : false;``` because they meant to do '>= 18', our tests would still pass and not pick up a potential problem that's been introduced.

## How To Fix

We need to add the boundary test:

```typescript
    it ('returns false if age is 17', () => {
        expect(canVote(17)).toBe(false);
    });
```