import { formatInput } from "./formatInput";

describe("formatInput", () => {
    it("should format input", () => {
        expect(formatInput("Hello World")).toBe("hello world");
    });
});