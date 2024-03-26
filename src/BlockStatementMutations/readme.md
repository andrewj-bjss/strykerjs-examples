# Block Statement Mutations

Block statement mutations refer to changes within the block of code that a function or control structure executes (e.g. a method or an if/loop block). These mutations can drastically alter the function's behavior or side effects without affecting its ability to execute without errors.

## Our Example

In our example, we're just testing that it can be called without error. In the real world, we'd write tests that confirm the method's output, or perhaps that it's internal behaviours are as expected.

## How To Fix

As our method has a void return type, we can't test the result, but we can test that calling this method will pass on the input params to a mocked method.

```typescript
describe('logSomething', () => {
    beforeEach(() => {
        jest.spyOn(console, 'info').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should log the correct message to the console', () => {
        const testMessage = 'hello world';
        logSomething(testMessage);
        expect(console.info).toHaveBeenCalledWith(testMessage);
    });
});
```