import { multiply } from "./multiply";

describe('multiply', () => {
    it('should multiply two numbers', () => {

        const result = multiply(5, 1);

        expect(result).toBe(5);
    });
});
