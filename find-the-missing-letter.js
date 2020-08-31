/*
Find the missing letter

#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

*/

function findMissingLetter(array) {
  let newArr = array.map((x) => x.charCodeAt());
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] !== newArr[i - 1] + 1) {
      return String.fromCharCode(newArr[i - 1] + 1);
    }
  }
}

findMissingLetter(["a", "b", "c", "d", "f"]);
