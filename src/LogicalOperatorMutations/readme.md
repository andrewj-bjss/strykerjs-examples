# Logical Operator Mutations

A logical operator mutation can be introduced when a logical AND (&&) is accidentally swapped to become a logical OR (||) or vice versa, or null coalescing (??) becomes &&.

# Our Example

We have a method which gives a discount if you're a premium member or you have a coupon. Our tests give 100% coverage.

- When both isPremiumMember and hasCoupon are true, the function returns true.
- When both isPremiumMember and hasCoupon are false, the function returns false.

But the tests don't test the boundary cases where one condition is true and the other is false and as such, we could be exposed to a logical operation mutation.

# How To Fix

```typescript
  it('should return true if the user is a premium member but does not have a coupon', () => {
    expect(isEligibleForDiscount(true, false)).toBe(true);
  });

  it('should return true if the user is not a premium member but has a coupon', () => {
    expect(isEligibleForDiscount(false, true)).toBe(true);
  });
  ```