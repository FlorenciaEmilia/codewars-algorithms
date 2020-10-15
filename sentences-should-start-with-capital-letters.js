/*
In English, all words at the begining of a sentence should begin with a capital letter.

You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.

For example,

input:

"hello. my name is inigo montoya. you killed my father. prepare to die."

output:

"Hello. My name is inigo montoya. You killed my father. Prepare to die."

You may assume:

there will be no punctuation besides full stops and spaces

all but the last full stop will be followed by a space and at least one word
*/

//My Solution:
function fix(paragraph) {
  return paragraph
    .split(".")
    .map((x, i) =>
      x[0] !== " "
        ? x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()
        : " " + x.slice(1, 2).toUpperCase() + x.slice(2).toLowerCase()
    )
    .join(".");
}
