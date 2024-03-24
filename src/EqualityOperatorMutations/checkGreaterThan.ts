// ConditionalExpression Mutation
// EqualityOperator Mutation

export function checkGreaterThan(a: number, b: number): boolean {
    return a > b;

    // Changing the operator to any of these will also pass the test
    // return a >= b; // EqualityOperator Mutation
    // return true; // ConditionalExpression Mutation
}
