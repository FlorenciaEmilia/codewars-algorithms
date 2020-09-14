/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
Happy coding! :)
*/
//My Solution:
function longestRepetition(s) {
  let repetitions = s.match(/(.)\1+/gi) || [s.slice(0, 1)];
  let lengths = repetitions.map((x) => x.length) || 0;
  return !s
    ? ["", 0]
    : [
        repetitions[lengths.indexOf(Math.max(...lengths))][0],
        Math.max(...lengths),
      ];
}
