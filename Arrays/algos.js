// Array: Pop Front

// Given array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop() . 

// let arr = ["abc", 1, 5, 7, 9]; // return 1

// function popFront(arr) {
//   if (arr.length === 0) {
//     return "nothing there"
//   }
//   const val = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr.length = arr.length - 1;
//   console.log(arr);
//   return val;
// }


// console.log(popFront(arr));

// Array: Remove At

// Given array and an index into array, remove and
// return the array value at that index. Do this without using built-in array methods except pop() . Think of popFront(arr) as equivalent to removeAt(arr,0) . 

// let arr = [1, 2, 3, 4, 5]

// function removeAt(arr, index) {
//   const val = arr[index];
//   for (let i = index; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr.length = arr.length - 1;
//   console.log(arr);
//   return val;
// }


// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4] , return [2,1,4,3] . 
// For example, change input ["Brendan",true,42] to [true,"Brendan",42] . As with all array challenges, do this without using any built-in array methods. 

// const arr = ["Brendan", true, 42, false, 34, "hi", 3]

// function swapPairs(arr) {
//   let length = arr.length;
//   if (arr.length % 2 !== 0) {
//     length = arr.length - 1
//   }
//   for (let i = 0; i < length; i += 2) {
//     let temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//   }
//   return arr;
// }

// const arr4 = [1, 2, 3, 4, 5]


// console.log(swapPairs(arr));

// Array: Remove Duplicates

// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized 
// them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, 
// all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// Second: solve this without using any nested loops. 





function removeDupes(arr) {
  var names = {};
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (names[arr[i]] === undefined) {
      names[arr[i]] = arr[i];
    }
  }

  for (k in names) {
    newArr.push(k);
  }
  return newArr;
}



// function removeDupes(arr) {
//   let counter = arr.length - 1;

//   for (let i = counter; i >= 0; i--) {
//     console.log("in the loop" + arr.length);
//     console.log("array of I at the beginning " + arr[i]);
//     if (arr[i] === arr[i - 1]) {
//       console.log(arr[i] + " equals " + arr[i - 1]);
//       console.log("arr length 1: changing at: " + i + " arr length " + arr.length);
//       arr.length = arr.length - 1;
//       counter = counter - 1;
//       console.log(arr.length)
//     } else {
//       console.log("We got to the else")
//       if (arr[i - 1] === arr[i - 2]) {
//         console.log("Previous " + arr[i - 1] + " Previous2 " + arr[i - 2])
//         arr[i - 1] = arr[i]
//         arr.length = arr.length - 1;
//         counter = counter - 1;
//         console.log("this is the array after swap if prev1 and prev2 are equal " + arr);
//       }
//       if (arr[i] === undefined) {
//         break;
//       }
//     }
//   }
//   return (arr);
// }

// var sortedArray = ["Alexis", "Matt", "Matt", "Matt", "Shannon", "Shannon"]

// console.log(removeDupes(sortedArray))


//  Array: Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. Given [4,2,1,3,5] , change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions. 



// let arr = [4, 2, 6, 3, 5, 8, 9, 1];

// function minToFront(arr) {
//   let min = arr[0];
//   let idx = undefined;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       idx = i;
//     }
//   }
//   for (let i = idx; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = min;
//   return arr;
// }

// console.log(minToFront(arr));

//Array: Reverse

// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. 
// Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given . 
// As always, do not use built-in array functions such as splice() . 

// [5, 111, 2, 50, 1, 13, 9]

// let arr = [9, 13, 1, 50, 2, 111, 5, 44, 93, 0];

// function reverseArr(arr) {
//   for (let i = 0; i < arr.length / 2; i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
//   }
//   return arr;
// }

// console.log(reverseArr(arr));

// Array: Rotate

// Implement rotateArr(arr, shiftBy) that accepts array and offset.
// Shift arr ’s values to th e right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, 
// so that no data is lost. Operate in-place: given ([1,2,3],1) , change the array to [3,1,2] . 


// Don’ t use built-in functions . Second: allow negative shiftBy (shift L, not R) . Third: minimize memory usage. 
// With no new array, handle arrays/ shiftBy s in the millions . Fourth: minimize the touches of each element . 


// let arr = [1, 2, 3, 4, 5, 6, 7];

// num = -2

// [6,7,1,2,3,4,5]

// num = 2

// [3,4,5,6,7,1,2]

// function rotateArr(arr, num) {
//   if (num > arr.length) {
//     return arr;
//   }
//   let len = arr.length;
//   if (num < 0) {
//     len = arr.length + num;
//     num = num * -1;
//   }
//   for (let i = 0; i < num; i++) {
//     arr.push(arr[i]);
//   }
//   console.log("first one: ", arr);
//   for (let i = 0; i < len; i++) {
//     arr[i] = arr[num + i];
//   }
//   console.log(arr);
//   arr.length = arr.length - num;
//   return arr;
// }


// console.log(rotateArr(arr, -2));



///////////// CLARITY NEEDED ////////////////////////
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. 
// Given arr and values min and max , retain only the array values between min and max . 
// Work in-place: return the array you are given, with values in original order. No built-in array functions. 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// // 3,4,5

// function filterRange(arr, min, max) {
//   for (let i = min; i < max; i++) {

//   }
// }

// console.log(filterRange(arr, 2, 6))
////////////////////////////////////////////////////

// Replicate JavaScript’s concat() . Create a standalone function that accepts two arrays. 
// Return a new array containing the first array’s elements, followed by the second array’s elements. 
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2] . 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = ["alexis", "Shannon", "matt"]


// function concatinate(arr, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     newArr.push(arr2[i]);
//   }
//   console.log(arr);
//   console.log(arr2);
//   return newArr;

// }

// console.log(concatinate(arr, arr2));


// Array: Second-to-Last

// Return the second-to-last element of an array. Given [42,true,4,"Kate",7] , return "Kate" . If array is too short, return null . 

function secondToLast(arr) {
  if (arr.length < 2) {
    return null;
  }
  return arr[arr.length - 2];
}


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