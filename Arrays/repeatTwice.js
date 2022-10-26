function repeatTwice(arr) {

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[2 * i + 1] = arr[i];
    arr[2 * i] = arr[i];
  }

  return arr;
}

console.log(repeatTwice([4, "Ulysses", 42, false]));