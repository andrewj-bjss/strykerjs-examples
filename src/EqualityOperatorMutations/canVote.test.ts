import { canVote } from './canVote';

describe('canVote', () => {
    it('returns true if age is over 17', () => {
        expect(canVote(18)).toBe(true);
    });

    it('returns false if age is below 18', () => {
        expect(canVote(16)).toBe(false);
    });
});