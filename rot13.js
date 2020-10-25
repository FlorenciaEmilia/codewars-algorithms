/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

//My Solution:
function rot13(message) {
  let messageToCharCode = message
    .split("")
    .map((x) => (/[a-z]/gi.test(x) ? x.charCodeAt() : x))
    .map(swifter);
  return messageToCharCode.join("");
}

function swifter(n) {
  if (/\d/.test(n)) {
    if (n >= 65 && n <= 90) {
      if (n + 13 > 90) {
        return String.fromCharCode(12 - (90 - n) + 65);
      } else {
        return String.fromCharCode(n + 13);
      }
    } else {
      if (n + 13 > 122) {
        return String.fromCharCode(12 - (122 - n) + 97);
      } else {
        return String.fromCharCode(n + 13);
      }
    }
  }
  return n;
}
