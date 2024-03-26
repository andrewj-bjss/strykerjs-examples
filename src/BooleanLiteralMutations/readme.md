# Boolean Literal Mutations

Boolean literal mutations involve changing the boolean literals (true/false) in the code, potentially altering the logic flow or the outcomes of conditions without necessarily causing errors that tests would detect.

## Our Example

Our isUserAuthorised function returns true if the userRole is 'admin' and false otherwise. The existing tests check two scenarios:

1. That calling isUserAuthorised with 'admin' does not throw an error.
2. That calling isUserAuthorised with any role other than 'admin' returns false.

However, these tests do not verify the function returns true when the userRole is indeed 'admin', leaving a gap for boolean literal mutations. For example, if the mutation changes the return value for an admin user from true to false, the current tests would not catch this error.

## How To Fix

We just need to ensure we're testing for all routes through our method.

```typescript
describe('isUserAuthorised', () => {
    it('should return true if user is admin', () => {
        expect(isUserAuthorised('admin')).toBe(true);
    });
});
```
