// Coffee marker: copy the given Coffee class into a text editor

class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase();
    this.cream = cream;
    this.sugar = sugar;
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`;
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`;
    } else {
      return `${this.cream} cream`;
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`;
    } else {
      return `${this.sugar} sugar`;
    }
  }
}

// Write the code that makes a black coffee object

const blackCoffee = new Coffee("black", 0, 0);
console.log(blackCoffee);

// Write the code that outputs the black coffee's profile

console.log(blackCoffee.coffeeProfile()); // A black coffee with 0 cream, 0 sugar

// Write the code that makes a coffee object with 1 cream and 2 sugars

const coffeeMilk = new Coffee("light cream", 1, 2);
console.log(coffeeMilk);

// Write the code that outputs the 1 cream and 2 sugars coffee profile

console.log(coffeeMilk.coffeeProfile()); // A light cream coffee with 1 cream, 2 sugars

// Latte Maker: create a class for Latte

// Write a Latte class that takes a flavor, a milk type, and a number of shots

// Write a method for your Latte class that outputs the latte's profile

class Latte {
  constructor(flavor, milk, shots) {
    this.flavor = flavor.toLowerCase();
    this.milk = milk.toLowerCase();
    this.shots = shots;
  }

  latteProfile() {
    return `A ${this.flavor} latte with ${
      this.milk
    } milk and ${this.numShots()}.`;
  }

  numShots() {
    if (this.shots > 1) {
      return `${this.shots} shots`;
    } else {
      return `${this.shots} shot`;
    }
  }
}

// Write the code that makes a regular, single shot latte

const singleShot = new Latte("regular", "regular", 1);
console.log(singleShot);

// Log the regular, single shot latte's profile

console.log(singleShot.latteProfile()); // A regular latte with regular milk and 1 shot.

// Write the code that makes a double shot, hazelnut latte with almond milk.

const hazelnut = new Latte("hazelnut", "almond", 2);
console.log(hazelnut);

// Log the double shot, hazelnut latte with almond milk's profile.

console.log(hazelnut.latteProfile()); // A hazelnut latte with almond milk and 2 shots.

// Volume of a Cylinder: create a class for Cylinder

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that rounds the volume of the cylinder to four decimal places

class Cylinder {
  constructor(r, h) {
    this.r = r;
    this.h = h;
  }

  volume() {
    return (Math.PI * this.r * 2 * this.h).toFixed(4);
  }
}

// Write the code that creates three unique cylinder objects

const ooga1 = new Cylinder(2, 10);
const ooga2 = new Cylinder(4, 1);
const ooga3 = new Cylinder(10, 30);
