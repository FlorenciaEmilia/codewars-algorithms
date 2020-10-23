/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

//My Solution:
function pigIt(str) {
  //Code here
  let myRegex = /\w+/gi;
  return str
    .split(" ")
    .map((x) => (x.match(myRegex) ? x.slice(1) + x.slice(0, 1) + "ay" : x))
    .join(" ");
}
