// Reverse

// Implement reverseString(str) that, given string, returns that string with characters reversed.
// Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

function reverseStr(str) {
  let split = str.split('');
  for (let i = 0; i < split.length / 2; i++) {
    let temp = split[i];
    split[i] = split[split.length - 1 - i];
    split[split.length - 1 - i] = temp;
  }
  return split.join('')
}

// Remove Even-Length Strings

// Build a standalone function to remove strings of even lengths from a given array. For array containing
// ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], change that same 
// array to ["Nope!","Its","Chris","."].

function removeEven(arr) {
  let counter = 0;
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) {
      counter++;
    } else {
      arr[idx++] = arr[i];
    }
  }
  arr.length = arr.length - counter;
  return arr;
}

// Integer to Roman Numerals

// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. 
// In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. 
// Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.

function intToRoman(num) {
  let str = '';

  if (num >= 1000) {
    if (num / 1000 < 2) {
      str += "M";
      num -= 1000;
    } else if (num / 1000 < 3) {
      str += "MM";
      num -= 2000;
    } else if (num / 1000 < 4) {
      str += "MMM"
      num -= 3000;
    }
  }
  if (num >= 900) {
    str += "CM";
    num -= 900;
  }
  if (num >= 500) {
    str += "D";
    num -= 500;
  }
  if (num >= 400) {
    str += "CD";
    num -= 400;
  }
  if (num >= 100) {
    if (num / 100 < 2) {
      str += "C";
      num -= 100;
    } else if (num / 100 < 3) {
      str += "CC";
      num -= 200;
    } else if (num / 100 < 4) {
      str += "CCC"
      num -= 300;
    }
  }
  if (num >= 90) {
    str += "XC";
    num -= 90;
  }
  if (num >= 50) {
    str += "L";
    num -= 50;
  }
  if (num >= 40) {
    str += "XL";
    num -= 40;
  }
  if (num >= 10) {
    if (num / 10 < 2) {
      str += "X";
      num -= 10;
    } else if (num / 100 < 3) {
      str += "XX";
      num -= 20;
    } else if (num / 100 < 4) {
      str += "XXX"
      num -= 30;
    }
  }
  if (num >= 9) {
    str += "IX";
    num -= 9;
  }
  if (num >= 5) {
    str += "V";
    num -= 5;
  }
  if (num >= 4) {
    str += "IV";
    num -= 4;
  }
  if (num >= 1) {
    for (let i = 0; i < num; i++) {
      str += 'I';
    }
  }
  return str;
}

function romanize(num) {
  var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, roman = '', i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      console.log(lookup[i]);
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

console.log(romanize(1961));