import { createArray, getArrayLength } from "./arrays";

describe('createArray', () => {
    it('should create an array', () => {
        const result = createArray();
        expect(Array.isArray(result)).toBe(true);
    });
});

describe('getArrayLength', () => {
    it('should return the length of the array', () => {
        const result = getArrayLength();
        expect(typeof result).toBe('number');
    });
});
