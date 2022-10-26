/***********************************************************************
Write a function `reverseString(string)` that takes in a string as a parameter
and returns the string reversed. Do this recursively. You should not use
the array.reverse method.

Examples

reverseString('bootcamp'); // => 'pmactoob'
reverseString(''); // => ''
***********************************************************************/

function reverseString(string) {
  if (string === '') {
    return '';
  }

  return reverseString(string.substr(1)) + string.charAt(0);
}

console.log(reverseString("see how this works"));