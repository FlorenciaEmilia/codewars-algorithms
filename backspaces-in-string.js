/*Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols. */

//My solution:
function cleanString(s) {
  let resultStr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "#") {
      resultStr.pop();
    } else {
      resultStr.push(s[i]);
    }
  }
  return resultStr.join("");
}
