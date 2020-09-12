/*
Reversed sequence
Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]
*/

//My Solution:
const reverseSeq = (n) => {
  let result = [];
  while (n >= 1) {
    result.push(n);
    n--;
  }
  return result;
};
