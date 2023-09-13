// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Anatomy

describe("", () => {
  it("", () => {
    expect().toEqual();
  });
});

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("tiredOrNot", () => {
  it("returns a string based on being tired or not", () => {
    expect(tiredOrNot("yes")).toEqual("drink coffee");
    expect(tiredOrNot("no")).toEqual("keep working");
  });
});

// Create the function that will make the test pass.

const tiredOrNot = (str) => {
  if (str === "yes") {
    return "drink coffee";
  } else if (str === "no") {
    return "keep working";
  }
};

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("stressedOrNot", () => {
  it("returns a string based on being stressed or not", () => {
    expect(stressedOrNot("yes")).toEqual("relax");
    expect(stressedOrNot("no")).toEqual("keep going");
  });
});

// Create the function that will make the test pass.

const stressedOrNot = (str) => {
  if (str === "yes") {
    return "relax";
  } else if (str === "no") {
    return "keep going";
  }
};

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("inOrOut", () => {
  it("returns 'in budget' if a price is lower than $300", () => {
    expect(inOrOut(299)).toEqual("in budget");
    expect(inOrOut(300)).toEqual("out of budget");
  });
});

// Create the function that will make the test pass.

const inOrOut = (n) => {
  return n < 300 ? "in budget" : "out of budget";
};

// Write the test for a function that takes in two numbers and returns the smaller number.

describe("smallerNum", () => {
  it("takes in two numbers and returns the smaller number", () => {
    const num1 = 10;
    const num2 = 15;
    expect(smallerNum(num1, num2)).toEqual(10);
  });
});

// Create the function that will make the test pass.

const smallerNum = (n1, n2) => {
  return n1 < n2 ? n1 : n2;
};

// Write the test for a function that takes in one number and returns whether the number is odd.

describe("oddOrNot", () => {
  it("takes in one number and returns whether the number is odd", () => {
    const num1 = 15;
    expect(oddOrNot(num1)).toEqual(true);
    const num2 = 16;
    expect(oddOrNot(num2)).toEqual(false);
  });
});

// Create the function that will make the test pass.

const oddOrNot = (n) => {
  return n % 2 !== 0 ? true : false;
};

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruitColor", () => {
  it("takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape", () => {
    const fruit1 = "banana";
    expect(fruitColor(fruit1)).toEqual("yellow");
    const fruit2 = "apple";
    expect(fruitColor(fruit2)).toEqual("red");
    const fruit3 = "grape";
    expect(fruitColor(fruit3)).toEqual("purple");
  });
});

// Create the function that will make the test pass.

const fruitColor = (fruit) => {
  if (fruit === "banana") {
    return "yellow";
  } else if (fruit === "apple") {
    return "red";
  } else if (fruit === "grape") {
    return "purple";
  }
};

// Write the test for a function called rick that returns "Morty".

describe("", () => {
  it("", () => {
    expect().toEqual();
  });
});

// Create the function that will make the test pass.

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe("greeter", () => {
  it("takes a name and returns a greeting", () => {
    const n = "John";
    expect(greeter(n)).toEqual("Hello John!");
  });
});

// Create the function that will make the test pass.

const greeter = (n) => {
  return `Hello ${n}!`;
};

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe("oddOrEven", () => {
  it("takes a number as an argument and logs whether the number is odd or even", () => {
    const n1 = 8;
    expect(oddOrEven(n1)).toEqual("even");
    const n2 = 7;
    expect(oddOrEven(n2)).toEqual("odd");
  });
});

// Create the function that will make the test pass.

const oddOrEven = (n) => {
  return n % 2 === 0 ? "even" : "odd";
};

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () => {
  it("", () => {
    const n = 1;
    expect(doubler(n)).toEqual(2);
  });
});

// Create the function that will make the test pass.

const doubler = (n) => {
  return n * 2;
};

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe("multiply", () => {
  it("multiplies two numbers", () => {
    const n1 = 2;
    const n2 = 3;
    expect(multiply(n1, n2)).toEqual(6);
  });
});

// Create the function that will make the test pass.

const multiply = (n1, n2) => {
  return n1 * n2;
};

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

describe("divisibleBy", () => {
  it("checks if two numbers are divisible", () => {
    const n1 = 10;
    const n2 = 5;
    expect(divisibleBy(n1, n2)).toEqual("10 is evenly divisible by 5");
  });
});

// Create the function that will make the test pass.

const divisibleBy = (n1, n2) => {
  if (n1 % n2 === 0) {
    return `${n1} is evenly divisible by ${n2}`;
  }
};

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

describe("fizzbuzz", () => {
  it("replaces multiples of 3, 5, and 15 with various strings", () => {
    const n1 = 3;
    expect(fizzbuzz(n1)).toEqual("fizz");
    const n2 = 5;
    expect(fizzbuzz(n2)).toEqual("buzz");
    const n3 = 15;
    expect(fizzbuzz(n3)).toEqual("fizzbuzz");
  });
});

// Create the function that will make the test pass.

const fizzbuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else if (n % 5 === 0) {
    return "buzz";
  }
};
