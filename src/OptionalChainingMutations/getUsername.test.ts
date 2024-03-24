import { getUsername } from "./getUsername";

// It's not possible to get 100% test coverage while testing the OptionalChaining mutation
// because 100% test coverage requires the nullish coalescing operator to be tested
// Adding a test for the nullish coalescing operator will give 100% coverage but
// also make the OptionalChaining mutation pass

describe('getUsername', () => {
    it('should return the name of the user if defined', () => {
        const actual = getUsername({ name: 'John' });

        expect(actual).toBe('John');
    });
});