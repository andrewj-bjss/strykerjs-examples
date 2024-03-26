export function isEqual(a: number, b: number | null): number {
    return (a == b && b != null) ? 1 : -1;
}