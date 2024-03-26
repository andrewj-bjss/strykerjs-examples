import { isWordMatch } from "./isWordMatch";

// This test gives us full coverage of the function
// but is not enough to catch the mutation

describe('isWordMatch', () => {
    it('should return true for a valid input string', () => {
        const input = 'abc';
        const result = isWordMatch(input);
        expect(result).toBe(true);
    });
});
