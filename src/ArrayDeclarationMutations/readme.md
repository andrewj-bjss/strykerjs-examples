# Array Declaration Mutations

Array declaration mutations involve changes in how arrays are declared or initialized within functions. These mutations can affect the array's content, size, or both, potentially leading to undetected bugs if the test suite isn't robust enough.

## Our Example

These tests are a contrived example, you wouldn't ordinarily write tests to confirm the response is an array and the length is a number type. 

## How To Fix

You'd ideally write tests that confirm the number of elements is as expected, and better yet, the actual contents of the array, which will likely mean you don't ever come up against this kind of mutation.

```typescript
describe('createArray', () => {
    it('should create an array with specific elements', () => {
        const result = createArray();
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
});

describe('getArrayLength', () => {
    it('should return the correct length of the array', () => {
        const result = getArrayLength();
        expect(result).toBe(5);
    });
});
```
