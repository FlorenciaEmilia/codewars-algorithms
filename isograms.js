/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

//My Solution:
function isIsogram(str) {
  //...
  let arrayFromArgument = str.toLowerCase();
  for (let i = 0; i < arrayFromArgument.length; i++) {
    if (
      arrayFromArgument.indexOf(arrayFromArgument[i]) !==
      arrayFromArgument.lastIndexOf(arrayFromArgument[i])
    ) {
      return false;
    }
  }
  return true;
}
