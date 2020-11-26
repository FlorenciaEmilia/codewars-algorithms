/*
Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/

//My Solution:
function oddOrEven(array) {
  //enter code here
  let sumArr = array.reduce((acc, cv) => acc + cv, 0);
  return sumArr % 2 !== 0 ? "odd" : "even";
}
