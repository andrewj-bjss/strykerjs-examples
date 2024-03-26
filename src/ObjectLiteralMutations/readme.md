# Object Literal Mutations

These are changes to the structure or values of object literals returned by functions, for example, altering a boolean value or adding/removing properties, which aren't picked up by tests.

## Our Example

Our getConfig returns an object with a 'debug' boolean property. Our test confirms the method returns an object. 100% code coverage!

## How To Fix

We'd want to test the property values, and even test that we don't have unexpected properties in the returned object:

```typescript
    it('should have a debug property set to true', () => {
        const config = getConfig();
        expect(config.debug).toBe(true);
    });

    it('should not contain unexpected properties', () => {
        const config = getConfig();
        const expectedKeys = ['debug'];
        expect(Object.keys(config)).toEqual(expectedKeys);
    });
```

