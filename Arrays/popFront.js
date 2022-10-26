// Array: Pop Front

// Given array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop(). 

let arr = ["abc", 1, 5, 7, 9]; // return 1

function popFront(arr) {
  if (arr.length === 0) {
    return "nothing there"
  }
  const val = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return val;
}


console.log(popFront(arr));