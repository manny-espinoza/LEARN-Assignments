// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// Create a function that takes an array (of numbers) as a parameter.
const multBy3 = (arr) => {
  // Create an empty array that we fill later.
  let newArr = [];
  // Iterating through our given array, we multiply each iteration by 3, and push the answer into our empty array.
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 3);
  }
  // Return the newly populated array.
  return newArr;
};

const testArr1 = [3, 9, 15, 4, 10];
console.log(multBy3(testArr1)); // [ 9, 27, 45, 12, 30 ]
// output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// Create a function that takes in an array (of numbers) as a parameter.
const onlyOdd = (arr) => {
  // Create an empty array that we fill later.
  let newArr = [];
  // Iterating through our given array, we check if each iteration is odd, and if so then we push that value into our empty array.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  // Return the newly populated array.
  return newArr;
};

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13];
console.log(onlyOdd(testArr2)); // [ -7, 3, 5, 13 ]
// output: [-7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

// Create a function that takes in an array (of numbers and letters) as a parameter.
const onlyLetters = (arr) => {
  // Create an empty array that we fill later.
  let newArr = [];
  // Iterating through our given array, we check if each iteration is the data type of string, and if so then we push that value into our empty array.
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      newArr.push(arr[i]);
    }
  }
  // Join the newly populated array into a string, and return it.
  return newArr.join("");
};

const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k",
];
console.log(onlyLetters(comboArr)); // nicework
// // output: "nicework"

// Create a function that takes in an array of numbers and returns the sum.

// Create a function that takes in an array (of numbers) as a parameter.
const sumNums = (arr) => {
  // Utilize the reduce method and properly fill out the elements. Return the result
  return arr.reduce((partialSum, a) => partialSum + a, 0);
};

const addThese1 = [1, 2, 3, 4];
console.log(sumNums(addThese1)); // 10
// output: 10
const addThese2 = [];
console.log(sumNums(addThese2)); // 0
// output: 0

// Create a function that takes in an array of numbers and returns the index of the largest number.

// Create a function that takes in an array (of numbers) as a parameter.
const indexLargestNum = (arr) => {
  // Create a placeholder variable equal to 0.
  let largestNum = 0;
  // Iterating through our given array, we check if the current iteration is greater than the placeholder variable. If so, we reassign it. At the end, the placeholder variable will be the largest number from the array.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  // Check the index of the largest number in the array, and return the result.
  return arr.indexOf(largestNum);
};

const indexHighestNumber = [1, 4, 2, 3];
console.log(indexLargestNum(indexHighestNumber)); // 1
// output: 1

// Create a function that takes in two arrays and returns one array with no duplicate values.

// Create a function that takes in two arrays as parameters.
const noDupes = (arr1, arr2) => {
  // Concatenate the second array onto the first, and save to a variable. Also create an empty array that we fill later.
  let comboArr = arr1.concat(arr2);
  let newArr = [];
  // Iterate through the combined array and check if the current iteration does not exist in the empty array. If it does not, then we push that value into the empty array. This ensures that only unique values may be pushed into the array.
  for (let i = 0; i < comboArr.length; i++) {
    if (!newArr.includes(comboArr[i])) {
      newArr.push(comboArr[i]);
    }
  }
  // Return the newly populated array.
  return newArr;
};

const arr1 = [3, 7, 10, 5, 4, 3, 3];
const arr2 = [7, 8, 2, 3, 1, 5, 4];
console.log(noDupes(arr1, arr2)); // [3, 7, 10, 5, 4, 8, 2, 1]
// output: [3, 7, 10, 5, 4, 8, 2, 1]

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.

// Create a function that takes in two numbers as parameters.
const filledArray = (n1, n2) => {
  // Create an empty array that we fill later.
  let newArr = [];
  // Create a for loop that iterates as many times as the length of the first number. For each iteration, push into the empty array the second number.
  for (let i = 0; i < n1; i++) {
    newArr.push(n2);
  }
  // Return the newly populated array.
  return newArr;
};

const arrayLength1 = 6;
const arrayValue1 = 0;
console.log(filledArray(arrayLength1, arrayValue1)); // [0, 0, 0, 0, 0, 0]
// output: [0, 0, 0, 0, 0, 0]
const arrayLength2 = 4;
const arrayValue2 = 11;
console.log(filledArray(arrayLength2, arrayValue2)); // [11, 11, 11, 11]
// output: [11, 11, 11, 11]

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.

// Create a function that takes a number as a parameter.
const cumulative = (n) => {
  // Create a num variable set to 0. We add upon this.
  let num = 0;
  // Create a for loop that iterates as many times as our given number. Make sure to set the end condition to be less than or equal to the number. Not doing so makes it so that the final result comes up one number short.
  for (let i = 0; i <= n; i++) {
    // For each iteration, add the value to the number.
    num += i;
  }
  // Return the new number.
  return num;
};

const addUp1 = 4;
console.log(cumulative(addUp1)); // 10
// 1 + 2 + 3 + 4 = 10
// output: 10
const addUp2 = 10;
console.log(cumulative(addUp2)); // 55
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// output: 55
const addUp3 = 600;
console.log(cumulative(addUp3)); // 180300
// output: 180300
