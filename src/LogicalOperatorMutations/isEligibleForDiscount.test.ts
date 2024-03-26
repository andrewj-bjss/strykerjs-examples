import { isEligibleForDiscount } from "./isEligibleForDiscount";

describe('isEligibleForDiscount', () => {

    it('should return true if the user is a premium member and has a coupon', () => {
        expect(isEligibleForDiscount(true, true)).toBe(true);
      });
          
    it('should return false if the user is not a premium member and does not have a coupon', () => {
        expect(isEligibleForDiscount(false, false)).toBe(false);
      });
  });