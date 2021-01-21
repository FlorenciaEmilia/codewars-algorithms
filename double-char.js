/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
*/

//My Solution:
function doubleChar(str) {
  // Your code here
  return str
    .split("")
    .map((x) => x.repeat(2))
    .join("");
}
