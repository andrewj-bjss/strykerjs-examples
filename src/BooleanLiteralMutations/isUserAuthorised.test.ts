import { isUserAuthorised } from "./isUserAuthorised";

describe('isUserAuthorised', () => {
    it('should not throw an error if user is admin', () => {
        expect(() => isUserAuthorised('admin')).not.toThrow();
    });   

    it('should return false if user is not admin', () => {
        expect(isUserAuthorised('user')).toBe(false);
    });
});