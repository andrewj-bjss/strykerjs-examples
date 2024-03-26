import { getUsername } from "./getUsername";

describe('getUsername', () => {
    it('should return the name of the user if defined', () => {
        const actual = getUsername({ name: 'John' });

        expect(actual).toBe('John');
    });
});