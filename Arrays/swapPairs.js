// Swap Pairs

// Swap positions of successive pairs of values of given array. If length is odd, do not change 
// the final element. For [1,2,3,4] , return [2,1,4,3]. For example, change input ["Brendan",true,42] 
// to [true,"Brendan",42] . As with all array challenges, do this without using any built-in array methods. 

const arr = ["Brendan", true, 42, false, 34, "hi", 3]

function swapPairs(arr) {
  let length = arr.length;
  if (arr.length % 2 !== 0) {
    length = arr.length - 1
  }
  for (let i = 0; i < length; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

const arr4 = [1, 2, 3, 4, 5]


console.log(swapPairs(arr4));