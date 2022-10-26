// Write a function `power(base, exp)` that takes in two numbers.
// The function should return `base` raised to the `exponent` power.
// For example `power(2, 5)` is 2 * 2 * 2 * 2 * 2 = 32.

function power(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * power(base, exp - 1);
}

console.log(power(5, 2));