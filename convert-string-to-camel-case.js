/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

//My Solution:
function toCamelCase(str) {
  let myRegex = /[-|_]/g;
  return str
    .split(myRegex)
    .map(
      (x, i) =>
        (i !== 0 ? x.slice(0, 1).toUpperCase() : x.slice(0, 1)) +
        x.slice(1).toLowerCase()
    )
    .join("");
}
