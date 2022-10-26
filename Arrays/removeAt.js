// Array: Remove At

// Given array and an index into array, remove and return the array value at that index. 
// Do this without using built-in array methods except pop() . Think of popFront(arr) as 
// equivalent to removeAt(arr,0) . 

let arr = [1, 2, 3, 4, 5]

function removeAt(arr, index) {
  const val = arr[index];
  for (let i = index; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log(arr);
  return val;
}

console.log(removeAt(arr, 3));