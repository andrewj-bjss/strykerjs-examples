import { logSomething } from "./logSomething";

describe('logSomething', () => {
    it('should be a function', () => {
        expect(typeof logSomething).toBe('function');
    });   

    it('can be called without throwing an error', () => {
        expect(() => logSomething('hello world')).not.toThrow();
    });
});
