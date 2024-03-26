# String Literal Mutations

Some example string literal mutations include

- returning an empty string instead of a filled string
- returning a filled string instead of an empty string
- an interpolated string returns an empty string

## Our Example

Here's another contrived example. We have a method ```getWelcomeMessage```, that takes a string parameter and returns an interpolated string result. In our test we just test the response is a string, which gives us 100% code coverage.

## How To Fix

It should be obvious that we should be testing the contents of the string, not the type.

```typescript
    it('should return a welcome message with the correct content', () => {
        const input = 'mutation testing';
        const result = getWelcomeMessage(input);
        expect(result).toBe('Welcome to the world of mutation testing!');
    });
```

