// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 110;
if (item <= 100) {
  console.log("in budget");
} else {
  console.log("out of budget");
}
// out of budget

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = false;
if (hungry === true) {
  console.log("eat food");
} else {
  console.log("keep coding");
}
// keep coding

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "blue";
if (trafficLight === "green") {
  console.log("go");
} else if (trafficLight === "yellow") {
  console.log("slow down");
} else if (trafficLight === "red") {
  console.log("stop");
} else {
  console.log("Error");
}
// Error

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var num1 = 120;
var num2 = 120;
if (num1 > num2) {
  console.log(num1);
} else if (num1 < num2) {
  console.log(num2);
} else {
  console.log("the numbers are the same");
}
// the numbers are the same

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num3 = 0;
if (num3 % 2 === 0 && num3 > 0) {
  console.log(`${num3} is even`);
} else if (num3 % 2 !== 0) {
  console.log(`${num3} is odd`);
} else {
  console.log(`${num3} is zero`);
}
// 0 is zero

// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var gradePercentage = 0;
if (gradePercentage === 100) {
  console.log("perfect score");
} else if (gradePercentage < 100 && gradePercentage > 89) {
  console.log("A");
} else if (gradePercentage < 90 && gradePercentage > 79) {
  console.log("B");
} else if (gradePercentage < 80 && gradePercentage > 69) {
  console.log("C");
} else if (gradePercentage < 70 && gradePercentage > 59) {
  console.log("D");
} else if (gradePercentage < 60 && gradePercentage > 0) {
  console.log("F");
} else if (gradePercentage === 0) {
  console.log("no grade available");
}
// no grade available

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
var dataTypes = "hello";
console.log(typeof dataTypes); // string

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
var password = "1234!";
if (password.length > 11 && password.includes("!")) {
  console.log("That is a mighty strong password!");
} else if (password.length > 7 || password.includes("!")) {
  console.log("That password is strong enough.");
} else {
  console.log("That is not a valid password.");
}
// That password is strong enough.
