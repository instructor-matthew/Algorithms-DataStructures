// Parens Valid

//  Create a function that, given an input string str, returns a boolean whether parentheses in str are valid.
//  Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. 
//  Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because 
//  the underlined ")" is premature: there is nothing open for it to close.

function validParens(str) {
  let parens = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      parens.push(str[i]);
    } else if (str[i] === ")") {
      let pop = parens.pop();
      if (pop !== "(") {
        return false;
      }
    }
  }
  if (parens.length > 0) {
    return false;
  }
  return true;
}


// Braces Valid

// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example:
// "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.

function bracesValid(str) {
  const obj = {
    "(": ")",
    "{": "}",
    "[": ']',
  }
  let parens = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      parens.push(str[i]);
    } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      let pop = parens.pop();
      if (str[i] !== obj[pop]) {
        return false;
      }
    }
  }
  if (parens.length > 0) {
    return false;
  }
  return true;
}

// Is Palindrome

// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation, 
// and capitalization) the letters are the same when reading from the back to the front.
// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", 
// return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.

// Second: now do ignore white space (spaces, tabs, returns), capitalization and punctuation.

// 1
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// 2
function isPalindrome2(str) {
  let arr = str.toLowerCase().split('');
  let punc = [" ", ".", ",", "!", "?"];
  let counter = 0;
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (punc.indexOf(arr[i]) > -1) {
      counter++;
    } else {
      arr[idx++] = arr[i];
    }
  }
  arr.length = arr.length - counter;
  return isPalindrome(arr.join());
}

console.log(isPalindrome2("r.a,CEc!ar"))

// Longest Palindrome

// For this challenge, we will look not only at the entire string provided but also at the substrings within it. Return the longest palindromic substring. 
// Given "what up, daddy-o?", return "dad". 
// Given "uh... not much", return "u". 
// Include spaces as well (i.e. be strict, as in previous challenge): given "Yikes! my favorite racecar erupted!",
// return "e racecar e". Strings longer or shorter than complete words are OK.

// Second: re-solve the above problem, but ignore spaces, tabs, returns, capitalization and punctuation. Given "Hot puree eruption!", return "tpureeerupt".

// I have no idea