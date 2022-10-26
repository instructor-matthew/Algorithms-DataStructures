// Array: Min to Front

// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it. Do not otherwise change 
// the array’s order. Given [4,2,1,3,5] , change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions. 

let arr = [4, 2, 6, 3, 5, 8, 9, 1];

function minToFront(arr) {
  let min = arr[0];
  let idx = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      idx = i;
    }
  }
  for (let i = idx; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = min;
  return arr;
}

console.log(minToFront(arr));