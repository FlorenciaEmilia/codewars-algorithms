/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

//My Solution:
function scramble(str1, str2) {
  function reducer(allWords, word) {
    if (word in allWords) {
      allWords[word]++;
    } else {
      allWords[word] = 1;
    }
    return allWords;
  }

  let str1Obj = str1.split("").reduce(reducer, {});
  let str2Obj = str2.split("").reduce(reducer, {});

  for (value in str2Obj) {
    if (!str1Obj[value] || str1Obj[value] < str2Obj[value]) {
      return false;
    }
  }

  return true;
}
