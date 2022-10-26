function removeVals2(arr, start, end) {

  var offset = end - start + 1;
  for (var i = start; i <= offset; i++) {
    arr[i] = arr[i + offset]; //arr[2] => arr[5]
  }
  // console.log(arr);
  arr.length = arr.length - offset;
  return arr;
}


console.log(removeVals2([20, 30, 50, 60, 70, 40, 50, 60], 2, 4));

// Version 2 With Helper

function removeRange(arr, start, end) {
  for (var i = 0; i < (end - start + 1); i++) {
    removeAt(arr, start);
  }
  return arr;
}

function removeAt(arr, idx) {
  var value = arr[idx];
  for (var i = idx; i < arr.length - 1; i++) {
    var temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  arr.pop();
  return value;
}