import { Counter } from "./Counter";

describe('toggleState', () => {
    it('should toggle the state of object from true to false and back again', () => {
        const counter = new Counter();
        let result = counter.getState();
        expect(result).toBe(true);

        counter.toggleState();

        result = counter.getState();
        expect(result).toBe(false);

        counter.toggleState();

        result = counter.getState();
        expect(result).toBe(true);

        counter.toggleState();

        result = counter.getState();
        expect(result).toBe(false);

        counter.toggleState();

        result = counter.getState();
        expect(result).toBe(true);
    });
});
