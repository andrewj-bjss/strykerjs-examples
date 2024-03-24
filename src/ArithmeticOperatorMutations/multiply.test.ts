import { multiply } from "./multiply";

// The test suite for the multiply function
// gives us full coverage of the function
// and returns the correct result
// however, the implementation is incorrect.
// mutation testing will help us catch this.

describe('multiply', () => {
    it('should multiply two numbers', () => {
        expect(multiply(5, 1)).toBe(5);
    });
});
