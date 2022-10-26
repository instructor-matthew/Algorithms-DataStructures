const reverse = function (num) {
  let rev = num.toString().split('');
  let newArr = [];
  if (rev[0] === '-') {
    newArr.push(rev[0]);
  }
  for (let i = rev.length - 1; i >= 0; i--) {
    if (rev[i] > 0 || rev[i] === ) {
      newArr.push(rev[i]);
    }
  }
  console.log(rev);
  let numb = newArr.join('');
  return numb;
}

console.log(reverse(901000));