import { needsRestock } from "./needsRestock";

describe('needsRestock', () => {
    it('should return true if the stock is less than the minimum stock', () => {
        expect(needsRestock(5, 10)).toBe(true);
    });

    it('should return true if the stock is equal to the minimum stock', () => {
        expect(needsRestock(10, 10)).toBe(true);
    });

    it('should return true if the quantity is 0', () => {
        expect(needsRestock(0, 10)).toBe(true);
    });

    it('should return false if the stock is greater than the minimum stock', () => {
        expect(needsRestock(15, 10)).toBe(false);
    });
});