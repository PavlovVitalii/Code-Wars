// Write two functions that convert a roman numeral to and from an integer value.
// Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting
//with the left most digit and skipping any digit with a value of zero.
//In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC;
//resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666
//uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

const romanNumbers = [
  "M",
  "СM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
const arabNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
class RomanNumerals {
  static toRoman(num) {
    let result = "";
    arabNumbers.forEach((element, index) => {
      while (num >= element) {
        num -= element;
        result += romanNumbers[index];
      }
    });
    return result;
  }

  static fromRoman(str) {
    let result = 0;

    for (let i = 0; i < str.length; i++) {
      if (romanNumbers.includes(str[i] + str[i + 1])) {
        result += arabNumbers[romanNumbers.indexOf(str[i] + str[i + 1])];
        i++;
      } else {
        result += arabNumbers[romanNumbers.indexOf(str[i])];
      }
    }
    return result;
  }
}


