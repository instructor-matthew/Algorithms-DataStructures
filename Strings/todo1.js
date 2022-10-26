// Remove Blanks

// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(str) {
  let chars = str.split(' ').join('');
  return chars;
}

// Get Digits

// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str) {
  let newStr = '';
  let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for (let i = 0; i < str.length; i++) {
    if (nums.indexOf(str[i]) > -1) {
      newStr += str[i];
    }
  }
  return Number(newStr);
}

//Acronyms

// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronym(str) {
  let newStr = '';
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] !== undefined) {
      newStr += arr[i][0].toUpperCase();
    }
  }
  return newStr;
}

// Count Non-Spaces

// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNon(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      counter++
    }
  }
  return counter;
}

// Remove Shorter Strings

// Given a string array and value (length), remove any strings shorter than the length from the array.

function shortString(arr, val) {
  let idx = 0;
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < val) {
      counter++;
    } else {
      arr[idx++] = arr[i]
    }

  }
  arr.length = arr.length - counter;
  return arr;
}

