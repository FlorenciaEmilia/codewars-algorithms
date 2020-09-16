/*

It is a simple, real world task. You will receive a single string as input. It will have the month (2 digits) and year(2 or 4 digits). These are separated by one character ("-" or "/", maybe some spaces too). For example:

02/21
02 / 21
02 / 2021
02-2021
Assume that all dates are in the XXI century.

Your task is to write a function that returns true or false if the expiry date is not in the past. Note, current month should still return true.

Good luck.
 */

//My Solution:
function checkExpiryValid(date) {
  // write your code here
  let formatChecker = /(\d+)\/(\d+)/g;
  if (date.match(formatChecker)) {
    date = date.split("/");
    return (
      date[0] > 0 &&
      date[0] <= 12 &&
      (date[1].length == 2 ? date[1] >= 20 : date[1] >= 2020)
    );
  }
  return false;
}
