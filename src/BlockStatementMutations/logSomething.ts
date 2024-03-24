// Block Statement mutation
// The body can be replaced and the tests still pass

const _log = console;

export function logSomething(logMessage: string): void {
    _log.info(logMessage);
}
