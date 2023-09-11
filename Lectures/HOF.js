// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

const multBy10 = (arr) => {
  return arr.map((value) => value * 10);
};

const arr1 = [3, 9, 15, 4, 10];
console.log(multBy10(arr1)); // [ 30, 90, 150, 40, 100 ]
// output: [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

const onlyOdd = (arr) => {
  return arr.filter((value) => value % 2 !== 0);
};

const arr2 = [2, 7, 3, 5, 8, 10, 13];
console.log(onlyOdd(arr2)); // [ 7, 3, 5, 13 ]
// output: [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

const onlyLetters = (arr) => {
  return arr.filter((value) => typeof value === "string").join("");
};

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"];
console.log(onlyLetters(comboArr)); // nicework
// output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

const sorter = (arr) => {
  return arr.filter(
    (value) => value !== false && value !== null && value !== 0 && value !== ""
  );
};

const filterArrayValues = [58, "", "abcd", true, null, false, 0];
console.log(sorter(filterArrayValues)); // [ 58, 'abcd', true ]
// output: [58, "abcd", true]

// Create a function that takes in a string and returns a new string with all the vowels removed.

const noVowels = (str) => {
  return str
    .split("")
    .filter(
      (value) =>
        value !== "a" &&
        value !== "e" &&
        value !== "i" &&
        value !== "o" &&
        value !== "u"
    )
    .join("");
};

const str = "javascript is awesome";
console.log(noVowels(str)); // jvscrpt s wsm
// output: "jvscrpt s wsm"
