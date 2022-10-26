// Array: Nth-to-Last

// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3) , 
// return 4 . If the array is too short, return null . 

function nthToLast(arr, val) {
  if (arr.length < val) {
    return null;
  }
  return arr[arr.length - val]
}

let arr = [5, 2]
console.log(nthToLast(arr, 3))