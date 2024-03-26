# Method Expressiom Mutations

Caused by changes in the method calls within a function's implementation, for example, the original method performing a trim() and then later gets modified to trimEnd(), resulting in the leading spaces no longer being trimmed.

## Our Example

Our formatInput method trims spaces and then lowercases the input. Our test gives us 100% coverage, but is only testing that lowercasing is applied.

## How To Fix

Adding a test that the trimming works as expecting will remove this potential mutation:

```typescript
it("should format input by trimming and converting to lowercase", () => {
        expect(formatInput(" Hello World ")).toBe("hello world");
    });
```

