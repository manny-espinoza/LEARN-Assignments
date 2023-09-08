// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

const fruits = (str1, str2) => {
  return str1.length > str2.length ? str1 : str2;
};

// Set one:
const fruit1 = "apple";
const fruit2 = "banana";
console.log(fruits(fruit1, fruit2));
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry";
const fruit4 = "kiwi";
console.log(fruits(fruit3, fruit4));
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:

const temp = (n) => {
  if (n === 212) {
    return `${n} is at boiling point`;
  } else if (n > 212) {
    return `${n} is above boiling point`;
  } else if (n < 212) {
    return `${n} is below boiling point`;
  }
};

const temp1 = 42;
console.log(temp(temp1)); // 42 is below boiling point
// Expected output: "42 is below boiling point"

const temp2 = 350;
console.log(temp(temp2)); // 350 is above boiling point
// Expected output: "350 is above boiling point"

const temp3 = 212;
console.log(temp(temp3)); // 212 is at boiling point
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:

const combineArraysLength = (arr1, arr2) => {
  return arr1.concat(arr2).length;
};

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
const padres1998WorldSeriesRuns = [6, 3, 5, 3];
console.log(
  combineArraysLength(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns)
); // 9
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:

const reverser = (str) => {
  return str.split("").reverse().join("");
};

const currentCohort = "Golf 2022";
console.log(reverser(currentCohort)); // 2202 floG
// Expected output: "2202 floG"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:

const lastIndex = (arr, n) => {
  return arr.lastIndexOf(n);
};

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10];

const givenValue1 = 42;
console.log(lastIndex(myNumbers, givenValue1)); // 7
// Expected output: 7

const givenValue2 = 10;
console.log(lastIndex(myNumbers, givenValue2)); // 8
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:

const sorter = (arr) => {
  return arr.sort((a, b) => b - a);
};

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76];
console.log(sorter(sanDiegoSummerTemperatures));
// [82, 80, 79, 77, 76, 73, 72]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66];
console.log(sorter(sanDiegoWinterTemperatures));
// [68, 67, 66, 66, 62, 59, 59]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
