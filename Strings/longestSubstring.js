// Length of the longest substring without repeating characters

// Given a string str, find the length of the longest substring without repeating characters.
// For “ABDEFGABEF”, the longest substring are “BDEFGA” and “DEFGAB”, with length 6.
// For “BBBB” the longest substring is “B”, with length 1. 


function longestSub(s) {
  let currentArr = [];
  let currentMap = {};
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (!(current in currentMap)) {
      currentArr.push(current);
      currentMap[current] = i;
    } else {
      count = currentArr.length > count ? currentArr.length : count
      i = currentMap[current]
      currentArr = [];
      currentMap = {};
    }
  }
  return count;
}