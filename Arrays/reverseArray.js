//Array: Reverse

// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing elements 
// moved to other indices so that order of elements is reversed. Working ‘in-place’ 
// means that you cannot use a second array – move values within the array that you are given . 
// As always, do not use built-in array functions such as splice() . 

[5, 111, 2, 50, 1, 13, 9]

let arr = [9, 13, 1, 50, 2, 111, 5, 44, 93, 0];

function reverseArr(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArr(arr));