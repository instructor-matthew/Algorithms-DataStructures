// Array: Second-to-Last

// Return the second-to-last element of an array. Given [42,true,4,"Kate",7],
// return "Kate" . If array is too short, return null . 

function secondToLast(arr) {
  if (arr.length < 2) {
    return null;
  }
  return arr[arr.length - 2];
}
