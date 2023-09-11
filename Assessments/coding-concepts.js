// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"];
console.log(colors.push("indigo"));

// a) Your answer: 5
// b) Verify and explain: The output of the .push() method is the length of the array.

// --------------------1) What will this log?

const cohort = "LEARN 2022";
console.log(cohort.length);

// a) Your answer: 10
// b) Verify and explain: The output of .length is the amount of characters in a string.

// --------------------2) What will this log?

const greeting = "Hello World!";
console.log(greeting[4]);

// a) Your answer: o
// b) Verify and explain: Calling an index upon a string will return the character at that index.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"];
const index = 1;
console.log(languages[index]);

// a) Your answer: Ruby
// b) Verify and explain: Calling an index, or in this case the variable index which equals 1, upon an array will return the element at that index.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"];
// console.log(weekendDays.toUpperCase());

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: Initial answer wrong, what actually happened was the terminal ran into an error, saying that .toUpperCase is not a function. After a bit of research, the .toUpperCase() method by itself won't work on arrays, unless used in a higher-order function that allows you to iterate over arrays.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"];
console.log(typeof dataTypes.length);

// a) Your answer: number
// b) Verify and explain: Calling .length upon the variable dataTypes states how many elements are in that array. Then calling typeof upon that number will tell its data type.
// heehee