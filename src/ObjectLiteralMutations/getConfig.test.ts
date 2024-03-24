import { getConfig } from "./getConfig";

describe('getConfig', () => {
    it('should return the config object', () => {
        const result = getConfig();
        expect(typeof result).toBe('object');
        expect(result).not.toBeNull();
    });
});
