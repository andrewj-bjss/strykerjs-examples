// Optional chaining mutation

export function getUsername(user?: { name?: string; }): string {
    return user?.name || 'Guest';
}