// Conditional Operator mutation example


export function needsRestock(quantity: number, threshold: number): boolean {
    return quantity <= threshold || quantity === 0;
    // You could also return false here and the mutation would still pass    
    // return quantity <= threshold || false;
}
