import { isEqual } from "./isEqual";

describe('isEqual', () => {
    it('returns -1 if not equal', () => {
        expect(isEqual(5, 1)).toBe(-1);
    });

    it('returns 1 if equal', () => {
        expect(isEqual(1, 1)).toBe(1);
    });

    it('returns -1 if the first argument is null', () => {
        expect(isEqual(1, null)).toBe(-1);
    });
});