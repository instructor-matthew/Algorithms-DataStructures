// Replicate JavaScript’s concat() . Create a standalone function that accepts two arrays. 
// Return a new array containing the first array’s elements, followed by the second array’s elements. 
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2] . 

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = ["alexis", "Shannon", "matt"]


function concatinate(arr, arr2) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }
  console.log(arr);
  console.log(arr2);
  return newArr;

}

console.log(concatinate(arr, arr2));