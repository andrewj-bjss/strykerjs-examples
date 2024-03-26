# Optional Chaining Mutations

These are caused by code that might be accidentally changed from ```foo?.bar``` to ```foo.bar``, for example.

## Our Example

It wasn't possible to get 100% code coverage while leaving an Optional Chaining mutation, because 100% test coverage requires the nullish coalescing operator to be tested, which would in turn eradicate the optional chaining mutation.

## How To Fix

Adding a test for the nullish coalescing operator will give 100% coverage and get rid of the possible mutation.

```typescript
    it('should return Guest if user is not defined', () => {
        const actual = getUsername(undefined);

        expect(actual).toBe('Guest');
    });
```

