/*
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
 */

//My solution:
function validParentheses(parens) {
  //TODO
  let balance = 0;
  for (let i = 0; i < parens.length; i++) {
    if (balance < 0) {
      return false;
    } else if (parens[i] == "(") {
      balance++;
    } else if (parens[i] == ")") {
      balance--;
    }
  }
  return balance == 0;
}
