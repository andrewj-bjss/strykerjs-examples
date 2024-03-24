import { formatInput } from "./formatInput";

describe("formatInput", () => {
    // This test gives us 100% test coverage
    // but it does not test the possible MethodExpression mutation
    // where trim() is removed
    it("should format input", () => {
        expect(formatInput("Hello World")).toBe("hello world");
    });
});