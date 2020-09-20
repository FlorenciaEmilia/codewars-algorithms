/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/

//My Solution:
function expandedForm(num) {
  // Your code here
  let finalForm = [];
  while (num > 0) {
    let numLength = Number(num.toString().length);
    let firstNumber = num.toString()[0];
    let numberDecomposition =
      firstNumber * Number("1" + "0".repeat(numLength - 1));
    finalForm.push(numberDecomposition);
    num -= numberDecomposition;
  }
  return finalForm.join(" + ");
}
