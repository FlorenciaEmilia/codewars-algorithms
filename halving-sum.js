/*
Task
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47 
*/

//My Solution:
function halvingSum(n) {
  let finalSum = 0;
  while (n >= 1) {
    finalSum += n;
    n = Math.floor(n / 2);
  }
  return finalSum;
}
