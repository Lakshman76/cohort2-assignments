/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let singleChar = str.charAt(i);
    if(singleChar == 'A' || singleChar == 'a' || singleChar == 'E' || singleChar == 'e' || singleChar == 'I' || singleChar == 'i' || singleChar == 'O' || singleChar == 'o' || singleChar == 'U' || singleChar == 'u'){
      count++;
    }
  }
  return count;
}

module.exports = countVowels;