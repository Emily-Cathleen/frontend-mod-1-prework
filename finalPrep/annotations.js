// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {   // declare a function called buildABear that takes 5 arguments.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`; //  define the variable greeting and interpolate to inject the varaible name directly into the string.
  var demographics = [name, age]; //declare a variable demographics
  var powerSaying = "Did you know that I can " + specialPower + " ?"; // declare a variable powerSaying
  var builtBear = { // declare a variable assigned to an object 
    basicInfo: demographics, //key value pair string
    clothes: clothes, //key value pair string
    exterior: fur, //key value pair string
    cost: 49.99, //key value pair integer
    sayings: [greeting, powerSaying, "Goodnight my friend!"], //key value pair array
    isCuddly: true, //key value pair boolean
  };

  return builtBear // Return the input from the builtBear object
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'); // calls the function buildABear passing the values to the corresponding variables 
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'); // calls the function buildABear passing the values to the corresponding variables



//FizzBuzz
function fizzBuzz(num1, num2, range) { // declare a function called fizzBuzz
  for (var i = 0; i <= range; i++) { // for loop. delcare a variable that states the index number 0, if its less than or equal to a range
    if (i % num1 === 0 && i % num2 === 0) { // if / else statement
      console.log('fizzbuzz'); // logs fizzbuzz to the console
    } else if (i % num1 === 0) { // if i is divisible by num1 with no remainder, log "fizz" to the cconsole
      console.log('fizz'); // log fizz to the console
    } else if (i % num2 === 0) { // if i is divisible by num2 with no remainder, log "buzz" to the cconsole
      console.log('buzz'); //log "buzz" to the console
    } else { // cacth all case for anything that does not meet above 3 criteria
      console.log(i); // logs the value of i to the console
    }
  }
}

fizzBuzz(3, 5, 100); // calls the fizzBuzz function passing the values of 3 to num1, 5 to num2, and 100 to range
fizzbuzz(5, 8, 400); // calls the fizzBuzz function passing the values of 5 to num1, 8 to num2, and 400 to range 
