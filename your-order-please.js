/*
Your order, please 
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/

//My Solution:
function order(words) {
  let order = words.match(/\d/g).sort((a, b) => a - b);
  let newOrder = [];
  words = words.split(" ");
  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[j].includes(order[i])) {
        newOrder.push(words[j]);
      }
    }
  }
  return newOrder.join(" ");
}

//Alternative answer:
function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}
