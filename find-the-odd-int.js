// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

//My Solution:
function findOdd(A) {
  //happy coding!
  let arraylength = {};
  for (let i = 0; i < A.length; i++) {
    if (!arraylength[A[i]]) {
      arraylength[A[i]] = 1;
    } else {
      arraylength[A[i]] += 1;
    }
  }
  for (let val in arraylength) {
    if (arraylength[val] % 2 !== 0) {
      return Number(val);
    }
  }
}
