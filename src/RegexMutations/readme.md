# Regex mutation



## Our Example

We're looking for a match of the string 'abc' but a mutation could accidently change the regex to remove the start anchor, which will then match any word that ends with 'abc' instead of the exact match.

Or it could remove the end anchor, which will then match any word that starts with 'abc' instead of the exact match.

Our test is explicitly only looking for matches on 'abc'.

## How To Fix

Add more unhappy path testing to identify gaps in our logic, and remove potential regex mutations.

```typescript
    it('should return false where a word ends in abc', () => {
        const input = 'fooabc';
        const result = isWordMatch(input);
        expect(result).toBe(false);
    });

    it('should return false where a word starts with abc', () => {
        const input = 'abcbar';
        const result = isWordMatch(input);
        expect(result).toBe(false);
    });
```