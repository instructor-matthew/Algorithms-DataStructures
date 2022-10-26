// Array: Rotate

// Implement rotateArr(arr, shiftBy) that accepts array and offset.
// Shift arr ’s values to th e right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, 
// so that no data is lost. Operate in-place: given ([1,2,3],1) , change the array to [3,1,2] . 


// Don’ t use built-in functions . Second: allow negative shiftBy (shift L, not R) . Third: minimize memory usage. 
// With no new array, handle arrays/ shiftBy s in the millions . Fourth: minimize the touches of each element . 


let arr = [1, 2, 3, 4, 5, 6, 7];

num = -2

[6, 7, 1, 2, 3, 4, 5]

num = 2

[3, 4, 5, 6, 7, 1, 2]

function rotateArr(arr, num) {
  if (num > arr.length) {
    return arr;
  }
  let len = arr.length;
  if (num < 0) {
    len = arr.length + num;
    num = num * -1;
  }
  for (let i = 0; i < num; i++) {
    arr.push(arr[i]);
  }
  console.log("first one: ", arr);
  for (let i = 0; i < len; i++) {
    arr[i] = arr[num + i];
  }
  console.log(arr);
  arr.length = arr.length - num;
  return arr;
}


console.log(rotateArr(arr, 2));