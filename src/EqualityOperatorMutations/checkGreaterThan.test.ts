import { checkGreaterThan } from "./checkGreaterThan";

describe('checkGreaterThan', () => {
    it('should return true if a is greater than b', () => {
        expect(checkGreaterThan(5, 3)).toBe(true);
    });
});