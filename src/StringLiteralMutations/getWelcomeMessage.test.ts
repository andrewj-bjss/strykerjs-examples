import { getWelcomeMessage } from "./getWelcomeMessage";

describe('getWelcomeMessage', () => {
    it('should return a welcome message', () => {
        const input = 'mutation testing';
        
        const result = getWelcomeMessage(input);

        expect(typeof result).toBe('string');
    });
});

