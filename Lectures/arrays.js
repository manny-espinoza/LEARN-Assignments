// Consider the variable:

var groceryList = ["chips", "dip", "cookies"];

// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda");
console.log(groceryList);
// [ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will add "granola" to the end of array without altering the original array.
console.log(groceryList, "granola");
// [ 'chips', 'dip', 'cookies', 'soda' ] granola

// Write the code that will return a subset of the array containing only "chips" and "dip".
var newGroceryList = groceryList.slice(0, 2);
console.log(newGroceryList);
// [ 'chips', 'dip' ]

// Write the code that will add "beans" to the "chips" and "dip" array.
newGroceryList.push("beans");
console.log(newGroceryList);
// [ 'chips', 'dip', 'beans' ]

// Consider the variable:

var numbers1 = [2, 4, 6, 8, 10];

// Write the code that will add the number 0 to the beginning of the array.
numbers1.unshift(0);
console.log(numbers1);
// [ 0, 2, 4, 6, 8, 10 ]

// Write the code that will add the number 12 to the end of the array.
numbers1.push(12);
console.log(numbers1);
// [
//   0,  2,  4, 6,
//   8, 10, 12
// ]

// Write the code that will remove the first number from the array.
numbers1.shift();
console.log(numbers1);
// [ 2, 4, 6, 8, 10, 12 ]

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
console.log(0, numbers1);
// 0 [ 2, 4, 6, 8, 10, 12 ]

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2];

// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2));
// 0

// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2));
// 5

// Write the code that returns the number at the third index.
console.log(numSet[3]);
// 8

// Consider the variable:

var characters = ["y", "a", "r", "r", "a"];

// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""));
// yarra

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse();
console.log(charsReversed);
// [ 'a', 'r', 'r', 'a', 'y' ]

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"));
// a*r*r*a*y

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""));
// array

// Create two arrays consisting of three first names of your cohort members in each.
var arr1 = ["Billiam", "Gertrude", "Bartholomew"];
var arr2 = ["Zane", "Tyler", "Sinister"];

// Write the code that sorts the names in alphabetical order.
console.log(arr1.sort(), arr2.sort());
// [ 'Bartholomew', 'Billiam', 'Gertrude' ] [ 'Sinister', 'Tyler', 'Zane' ]

// Write the code that sorts the names in reverse alphabetical order.
console.log(arr1.sort().reverse(), arr2.sort().reverse());
// [ 'Gertrude', 'Billiam', 'Bartholomew' ] [ 'Zane', 'Tyler', 'Sinister' ]

// Write the code that sorts all the names in alphabetical order in a single array.
console.log(arr1.concat(arr2).sort());
// [ 'Bartholomew', 'Billiam', 'Gertrude', 'Sinister', 'Tyler', 'Zane' ]

// Consider the variables:

var numbers2 = [42, 221, 71, 7, 18, 87];
var oddIndexes = [];

// Write the code that logs the values from the numbers array that are at odd indexes.
console.log(numbers2[1], numbers2[3], numbers2[5]);
// 221 7 87

// Write the code that adds the values from odd indexes into the oddIndexes array.
oddIndexes = numbers2[1] + numbers2[3] + numbers2[5];
console.log(oddIndexes);
// 315
