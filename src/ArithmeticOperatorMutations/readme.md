# Arithmetic Operator Mutations

An arithmetic operator mutation is where you can change an operator like plus to minus, or multiple to divide, and vice versa, and the tests will still pass.

## Our Example

The test suite for this multiply function gives us full coverage of the function and returns the correct result.

However, the implementation is incorrect.

Mutation testing will help us catch this.

## How To Fix

This was an overly simplified example, we'd likely write a bunch more tests which would likely have caught the mistake and eradicated the possibility of mutation anyway, but this also demonstrates an automated way to catch such issues.

For example:

```typescript
    it('should multiply two numbers', () => {

        const result = multiply(5, 2);

        expect(result).toBe(10);
    });

    it('should return 0 when multiplying by 0', () => {

        const result = multiply(5, 0);

        expect(result).toBe(0);
    });

    it ('should handle negative numbers correctly', () => {
        const result = multiply(-5, 2);

        expect(result).toBe(-10);
    });
```
