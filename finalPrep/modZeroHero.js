// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Henry";
var specialAbility = "Being too cute";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Greetings " + heroName;
var catchphrase = `Hello my name is ${heroName} and my superpower is ${specialAbility}.';

// Declare two variables - power AND energy - set to integers

var power = 5;
var energy = 10;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Mr. Cat", "Vaccum", "Swiffer"];
var sideKicks = ["Windy", "Rachel", "Astro"];

// Print the first sidekick to your console
console.log(sideKicks[0])

// Print the last archEnemy to the console
console.log(archEnemy[2]
// Write some code to add a new archEnemy to the archEnemies array
var archEnemies = archEnemies.push("Neighbors Dog")
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies)
// Remove the first sidekick from the sidekicks array
archEnemies.pop
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sideKicks)
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day 
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assesSituation(dangerLevel, saveTheDay, badExcuse) {
dangerLevel: > 50
saveTheDay: "I saved the day!"
badExcuse: "I am afriad!"
}

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

var assesSituation = 7;

if (dangerLevel > 51) {
    console.log(badExcuse);
} else if (dangerLevel <= 50) {
    console.log(saveTheDay);
} else if (dangerLevel < 10) {
    console.log(" Meh. Hard pass. ");
} else {
    console.log("");
};



//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster  = {

name: "Death",
smell: "garbage",
weight: 10,
citiesDestroyed: ["cleavland", "Frederick", "D.C",
luckyNumbers: [5, 10, 15],
address.function(number, street, state, zip){
console.log(number, street, state, zip);
}

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name 
//   - superpower
//   - age 
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50 


class SuperHero {
  constructor(name, superPower, age ) {
    this.name = name;
    this.superPower = superPower;
    this.age = age;
    this.archNemesis = "The Syntax Error;
    this.powerLevel = 100;
    this.enerygLevel = 50;
  }
}



// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

var sayName = new SuperHero("Henry")
console.log(name);

var maximizeEnergy = new SuperHero(1000)
console.log(1000);
var gainPower = new SuperHero(

// I do not know how to do this part... It has taken me much longer than 30 minutes... 



// Reflection
// What parts were most difficult about this exerise?
Creating the class. I really need a tutoring session on this. 
// What parts felt most comfortable to you?
defining variables are second nature now. 
// What skills do you need to continue to practice before starting Mod 1?
classes. if/else statements. I need a lot of practice on this. 
