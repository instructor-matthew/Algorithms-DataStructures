// Push Front

// Given an array and an additional value, insert this value at the beginning of the array. 
// Do this without using any built-in array methods.

function pushFront(arr, val) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = val;
  return arr;
}


// Pop Front

// Given an array, remove and return the value at the beginning of the array.
// Do this without using any built-in array methods except pop().

function popFront(arr) {
  const valBeg = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length -= 1;
  return valBeg;
}


// Insert At

// Given an array, index, and additional value, insert the value into array at given index. 
// Do this without using built-in array methods. You can think of pushFront(arr,val) 
// as equivalent to insertAt(arr,0,val).

function insertAt(arr, idx, val) {
  arr.length += 1;
  for (let i = arr.length - 1; i >= idx; i--) {
    arr[i] = arr[i - 1];
  }
  arr[idx] = val;
  return arr;
}

// Remove At

// Given an array and an index into array, remove and return the array value at that index. 
// Do this without using built-in array methods except pop(). Think of popFront(arr) as 
// equivalent to removeAt(arr,0).

function removeAt(arr, idx) {
  let arrIdxVal = arr[idx];
  for (let i = idx; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length -= 1;
  console.log(arr);
  return arrIdxVal;

}

// Swap Pairs

// Swap positions of successive pairs of values of given array. If length is odd, do not change 
// the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] 
// to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr) {
  let length = arr.length;
  if (arr.length % 2 !== 0) {
    arr.length = arr.length - 1
  }
  for (let i = 0; i < length; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

// Remove Duplicates

// Sara is looking to hire an awesome web developer and has received applications from various sources. 
// Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. 
// Because array elements are already in order, all duplicate values will be grouped together. 
// As with all these array challenges, do this without using any built-in array methods.

// Second: Solve this without using any nested loops.

function removeDupes(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let obj = {};
  let idx = 0;
  counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  console.log(obj);
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] > 1 && arr[i] != arr[i + 1]) {
      idx++;
      console.log(idx);
      arr[idx] = arr[i + 1];
      counter++;
    }
  }
  if (arr[arr.length - 1] === [arr[arr.length - 2]]) {
    arr[idx] = arr[arr.length - 1];
    counter++;
  }

  arr.length -= counter;
  return arr;
}


// let arr = ["Alexis", "Shannon", "Shannon"];
let arr = ["Alexis", "Devon", "Matt", "Raymund", "Raymund", "Shannon", "Shannon"];
// let arr = ["Alexis", "Alexis", "Devon", "Devon", "Matt", "Matt", "Raymund", "Shannon", "Shannon"];
console.log(removeDupes(arr));