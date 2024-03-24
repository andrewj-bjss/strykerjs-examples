import { calculateAverage } from "./calculateAverage";

describe('calculateAverage', () => {
    // This test gives us full coverage of the function
    // and returns the correct result
    // however, the implementation is incorrect
    // mutation testing will help us catch this
    it('should return the average of two numbers', () => {
        expect(calculateAverage(5, -5)).toBe(0);
    });
});
