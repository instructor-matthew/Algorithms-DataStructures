// recrusive code. memoization allows us to store the result of a function in an object so it can be recalled later on.
function factorial(n) {
  if (n in memo) return memo[n];
  if (n === 1) return 1;

  memo[n] = n * factorial(n - 1);
  return memo[n]
}

// Time complexity exponential o(2n)
function fib(n) {
  if (n === 1 || n === 2) return 1;

  return fib(n - 1) + fib(n - 2);
}


// Time complexity O(n)
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n]
  if (n === 1 || n === 2) return 1;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fib(45));
