/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
*/

//My Solution:
function solution(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}
