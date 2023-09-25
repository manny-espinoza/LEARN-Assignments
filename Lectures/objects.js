// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
};

// Write the code that accesses the first name of the person object.

console.log(person.firstName); // Arthur

// Write the code that accesses the last name of the person object.

console.log(person.lastName); // Dent

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

person.homePlanet = "Earth";
console.log(person.homePlanet); // Earth

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

person.getData = function () {
  return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`;
};
console.log(person.getData()); // Arthur Dent is from planet Earth

// Consider this variable:

const product = {
  name: "chair",
  price: 24.99,
};

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

const describeProduct = (obj) => {
  return `The product is a ${obj.name}. It costs $${obj.price}.`;
};
console.log(describeProduct(product)); // The product is a chair. It costs $24.99.

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

const totalWithTax = (obj) => {
  let n = obj.price * 1.07;
  return `$${n.toFixed(2)}`;
};
console.log(totalWithTax(product)); // $26.74

// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
};

// Write the code that accesses the ingredients property.

console.log(lunch.ingredients); // [ 'bread', 'peanut butter', 'banana' ]

// Write the code that access the third ingredient of the lunch object.

console.log(lunch.ingredients[2]); // banana

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const sentence1 = (obj) => {
  return `The ingredients for a ${obj.name} ${obj.type} are ${obj.ingredients[0]}, ${obj.ingredients[1]}, and ${obj.ingredients[2]}.`;
};
console.log(sentence1(lunch)); // The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana.

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

lunch.getData = function () {
  return "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana.";
};
console.log(lunch.getData()); // The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana.

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
];

// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

const onlyCats = (arr) => {
  return arr.filter((value) => value.type === "cat");
};
console.log(onlyCats(animals));

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

const onlyNames = (arr) => {
  return arr.map((value) => value.name);
};
console.log(onlyNames(animals)); // [ 'Waffles', 'Fluffy', 'Spelunky', 'Hank' ]

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

const older = (arr) => {
  return arr.filter((value) => value.age > 10).map((value) => value.name);
};
console.log(older(animals)); // [ 'Fluffy', 'Hank' ]

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

const sentence2 = (arr) => {
  return arr.map(
    (value) => `${value.name} is a ${value.age} year old ${value.type}.`
  );
};
console.log(sentence2(animals));

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction",
};

// Write the code that destructures the author object so that the following code snippet will run successfully:

const { name, genre } = author;

console.log(`${name} is a ${genre} author`);

// output: "H. G. Wells is a science fiction author"

// Consider this variable:

const pokeOne = {
  species: "Charmander",
  pokemon_type: "Fire",
};

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water",
};

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

const describePokemon = (obj) => {
  const { species, pokemon_type } = obj;
  return `${species} is a ${pokemon_type} pokemon`;
};

console.log(describePokemon(pokeOne));
// output: "Charmander is a Fire pokemon"

console.log(describePokemon(pokeTwo));
// output: "Magikarp is a Water pokemon"

// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5,
};

// Modify the triangleDimensions object to have a method that returns the area of the triangle.

triangleDimensions.getData = function () {
  return this.base * this.height * 0.5;
};
console.log(triangleDimensions.getData()); // 5

// Write the code that will update the base to be the value of 6.

triangleDimensions.base = 6;
console.log(triangleDimensions); // { base: 6, height: 5, getData: [Function (anonymous)] }

// Consider this variable:

const learn = {
  cohorts: {
    2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"],
  },
};

// Write the code that logs the name of your cohort.

console.log(learn.cohorts[2022][6]); // Golf

// Write the code that uses destructuring to log the name of your cohort.

const { cohorts } = learn;
console.log(cohorts[2022][6]); // Golf

// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.

const learnCohorts = (obj) => {
  return obj[2021].map((value) => `2021 ${value}`);
};

console.log(learnCohorts(cohorts));
