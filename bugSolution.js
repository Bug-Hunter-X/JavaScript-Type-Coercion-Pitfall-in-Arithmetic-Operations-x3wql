function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function bar(a, b) {
  //Explicit type conversion
  a = Number(a);
  b = Number(b);
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(2, '3')); // Output: 10
console.log(bar('abc', 3)); // throws an error