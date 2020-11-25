/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
*/

//My Solution:
function longest(s1, s2) {
  // your code
  return [...new Set((s1 + s2).split("").sort())].join("");
}
