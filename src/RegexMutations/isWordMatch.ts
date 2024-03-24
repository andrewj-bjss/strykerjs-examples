// Regex mutation

// This is looking for a match of the string 'abc'
// but a mutation could accidently change the regex to
// remove the start anchor, which will then match any word
// that ends with 'abc' instead of the exact match

// or it could remove the end anchor, which will then match
// any word that starts with 'abc' instead of the exact match

export function isWordMatch(input: string): boolean {
  const regex = /^abc$/
  return regex.test(input);
}
