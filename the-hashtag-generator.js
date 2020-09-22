/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

//My Result:
function generateHashtag(str) {
  str = str.replace(/ +(?= )/g, "").match(/\w+/gi);
  if (!str || str.length > 140) {
    return false;
  } else {
    let result = `#${str
      .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join("")}`;
    return result.length <= 140 ? result : false;
  }
}
