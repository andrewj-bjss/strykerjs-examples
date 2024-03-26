export function isEligibleForDiscount(isPremiumMember: boolean, hasCoupon: boolean): boolean {
    return isPremiumMember || hasCoupon;
  }