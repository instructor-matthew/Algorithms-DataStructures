function reverseArray(arr) {
  if (arr.length < 2) {
    return arr;
  }

  return reverseArray(arr.slice(1)).concat(arr[0]);
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));