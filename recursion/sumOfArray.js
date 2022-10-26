function sumOfArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray([1, 2, 3]));

function sumOfArrayIt(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}