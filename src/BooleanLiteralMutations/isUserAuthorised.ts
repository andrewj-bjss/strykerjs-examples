// Boolean literal mutation
export function isUserAuthorised(userRole: string): boolean {
    if (userRole == 'admin') {
        return true;
    } else {
        return false;
    }
}
