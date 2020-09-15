/*
Write function avg which calculates average of numbers in given list.
*/

//My Solution
function find_average(array) {
  // your code here
  return array.reduce((acc, cv) => acc + cv, 0) / array.length;
}
