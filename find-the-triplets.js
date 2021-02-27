/*
Find the triplets!

Your job is to find matching characters that are in an alphabetical triplet in a string (aaa) NOT (abc).

Then return the sum of the numbers either side of the triplet.

If there are two sets of triplets, the sum of the 4 numbers (two either side) should be returned. If there are three sets of triplets, the sum of the 6 numbers (three either side) should be returned.

And so forth...

Important Points:

• End cases will be considered aaa45454

• You will never get a string like so: ``3aaa6bbb7```

For Example:

•1aaa1 would return 2 (1 + 1 = 2).

•1aaa1552bbb32 would return 7 (1 + 1 + 2 + 3).

•11eee554nnn34543xxx2323 would return 18 (1 + 5 + 4 + 3 + 3 + 2).

Good luck!
*/

//My Solution:
function findtriplet(str) {
  //Code Goes Here! - Good Luck!!
  //“Change course, but don’t give up.” ― Roy T. Bennett,

  let result = 0;
  let matcher = str.match(/(\d+)|([a-z]+)/gi);
  let tester = str.match(/([a-z])\1\1/gi);
  for (let i = 0; i < matcher.length; i++) {
    if (matcher[i].match(/([a-z])\1\1/gi)) {
      result += Number(matcher[i - 1][matcher[i - 1].length - 1]);
      result += Number(matcher[i + 1][0]);
    }
  }

  return result;
}
