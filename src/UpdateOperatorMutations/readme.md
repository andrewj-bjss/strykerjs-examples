# Update Operator Mutations

These are mutations where code might accidentally change a++ to a--, or vice versa.

## Our Example

Our Counter class has two methods, getState() and toggleState()

Internally it has a counter that is supposed add 1 to a running count each time toggleState() is called. Current state is calculated by checking if the counter is divisible by two, an even number = true, odds = false.

Our test for toggleState works as expected - we can toggle it multiple times and checking the state each time gives the expected result. We have 100% code coverage.

However, there's clearly a mistake in the implementation.

If we decided to expose the counter value - we'd notice that the counter was actually running backwards and decrementing the counter each time, rather than incrementing. We did counter--, instead of counter++.

A mutation that changes counter-- to counter++ did not cause the test to fail, so we have an Update Operator mutation.

## How To Fix

The mutation report has exposed a problem, and we should fix it, but can we actually prevent mutation here in this scenario, or is it a junk mutation?

Arguably, we could implement getCounter() (If we wanted to expose it) and then thus:

```typescript
    it('should return the correct counter', () => {
        const counter = new Counter();
        counter.toggleState();
        let result = counter.getCounter();
        expect(result).toBe(1);
    });
```

This test would fail until we fixed our toggleState implementation, but now we would have 0 mutation reports with this file.


