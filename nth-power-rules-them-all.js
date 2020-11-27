/*
You are provided with an array of positive integers and an additional integer n (n > 1).

Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

Examples
{1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
{1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30
*/

//My Solution:
function modifiedSum(a, n) {
  // Write your code here
  let powerArray = a.map((x) => x ** n).reduce((acc, cv) => acc + cv, 0);
  let regularArray = a.reduce((acc, cv) => acc + cv, 0);
  return powerArray - regularArray;
}
