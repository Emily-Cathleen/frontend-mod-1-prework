/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog

class dog {
  constructor() {
    name = "Henry";
    breed = "yorkie poodle";
  }
}
var facts = new dog();
console.log(facts);
// Prompt 2: Snack

class snack {
  constructor() {
    type = "cookies";
    isHealthy = false;
  }
}
var facts = new snack();
console.log(facts);
// Prompt 3: Shirt

class shirt {
  constructor() {
    isSleeless = false ;
    color = "blue";
  }
}
var facts = new shirt();
console.log(facts);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class dog {
  constructor() {
    name = "Henry";
    breed = "yorkie poodle";
  }
}
var facts = new dog();
console.log(facts);

class dog {
  constructor(dogName, dogBreed) {
    this.name = dogName;
    this.breed = "dogBreed";
  }
}
var facts = new dog();
console.log(facts);
// Prompt 2: Snack
class snack {
  constructor() {
    this.type = "cookies";
    this.isHealthy = false;
  }
}
var facts = new snack();
console.log(facts);

// Prompt 3: Shirt
class shirt {
  constructor() {
    this.isSleeless = false ;
    this.color = "blue";
  }
}
var facts = new shirt();
console.log(facts);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

// Prompt 2: Snack

// Prompt 3: Shirt
