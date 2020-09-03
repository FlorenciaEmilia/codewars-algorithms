/*
Roman Numerals Helper

Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000

 */

//My Solution :
let romanToNumber = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const RomanNumerals = {
  toRoman(num) {
    let result = "";

    for (let key in romanToNumber) {
      while (num >= romanToNumber[key]) {
        result += key;
        num -= romanToNumber[key];
      }
    }

    return result;
  },
  fromRoman(num) {
    let result = 0;
    let romanValue = num.split("");
    for (let i = 0; i < romanValue.length; i++) {
      if (romanToNumber[romanValue[i] + romanValue[i + 1]]) {
        result += romanToNumber[romanValue[i] + romanValue[i + 1]];
        i += 2;
      } else {
        result += romanToNumber[romanValue[i]];
      }
    }
    return result;
  },
};
