/* let js = "amazing";
console.log(40 + 8 + 23 + -10);

console.log("Albert");
console.log(23);

let firstName = "Albert";

console.log(firstName);

let MyFirstJob = 'Supervisor'; // descriptive variable
let myCurrentJob = 'Developer'

let job1 = 'supervisor' // not descriptive variable
let job2 = 'programmer'; 


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof JavascriptIsFun); //boolean
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES'; // dynamic typing this is now a string instead of a boolean
console.log(typeof JavascriptIsFun);

let year; // defining variable without a value = undefined

year = 1991; // assigning new value to year (goes from undefined to number)
console.log(typeof year);

console.log(typeof null); // logged as bug - but it's not an object this is a bug due to legacy 
 

 let age = 30; // value can be reassigned aka mutated
 age = 31;

 const birthYear = 1991; // cannot change aka immutable 

 // Math Operators
 const now = 2037; // declare the current year
 const ageAlbert = now - 1992;
 const ageAthena = now - 2018;
 console.log(ageAlbert, ageAthena);

 console.log(ageAlbert * 2, ageAlbert / 10, 2 ** 3);
 // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

 const firstName = 'Albert';
 const lastName = 'Kozak';
 console.log(firstName + ' ' + lastName); // concatenation

 // Assignment Operators
 let x = 10 + 5; //15
 x += 10; // x = x + 10 = 25
 x *= 4; // 25 * 4'
 x++; // 101
 x--; // 100
 console.log(x);

 // Comparison Operators
 console.log(ageAlbert > ageAthena);
 console.log(ageAthena >= 45); // true 45 would return false

 const isFullAge = ageAthena >= 18;

 console.log(now - 1991 > now - 2018); 

 const now = 2037;
 const ageAlbert = now - 1992;
 const ageAthena = now - 2018;

 console.log(now - 1991 > now - 2018);
//  console.log(25 - 10 - 5);

 let x, y;
 x = y = 25-10-5;
 console.log(x, y);

 const averageAge = (ageAlbert + ageAthena) / 2;
 console.log(ageAlbert, ageAthena, averageAge);  */

// const firstName = "Albert";
// const job = "programmer";
// const birthYear = 1992;
// const year = 2020;

// const albert =
//   "I'm " + firstName + " a " + (year - birthYear) + " year old " + job + "!";
// console.log(albert);

// const albertNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;
// console.log(albertNew);

// console.log(`Just a regular string...`);

// console.log("String with \n\
// multiple \n\
// lines");

// console.log(`String
// multiple
// lines`);

// const age = 12;

// if (age >= 18) {
//   console.log("Albert can start driving license ");
// } else;
// {
//   const yearsLeft = 18 - age;
//   console.log(`Albert is too young. Wait Another: ${yearsLeft} years.`);
// }

// const birthYear = 1992;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// Type Conversion
// const inputYear = "1992";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number("Albert")); // returns NaN
// console.log(typeof NaN); // returns invalid number

// console.log(String(23));

// Type Coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");
// console.log("23" > "18");

// let n = "1" + 1; // 11
// n = n - 1;
// console.log(n); // 10

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Albert")); // true
// console.log(Boolean({})); // true

// const money = 0; // returns false boolean since it's 0 (falsy)
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }

// let height;
// if (height) {
//   console.log("YAY! Height is defined!");
// } else {
//   console.log("Height is UNDEFINED...");
// }

// const age = 18;
// if (age === 18) console.log("You just became an adult");

// const favourite = Number(prompt("What's your favourite number?")); // asks user
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 5) {
//   // works since it's loose, use === and it won't work since it's a string
//   console.log("Cool! 5 is an an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is cool as well");
// } else {
//   console.log("Number is not 5 or 7");
// }

// if (favourite !== 23) console.log("Why not 23?");

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Albert is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Albert is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const day = "monday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break; // missing break will continue executing logs til next break
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday": // assigns multiple days to one log
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// const day = "tuesday";

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Not a valid day!");
// }

// // expressions
// 3 + 4;
// 1992;
// true && false && !false;

// // statement
// if (23 > 10) {
//   const str = "23 is bigger";
// }

// console.log(`I'm ${2037 - 1991} years old.`);

// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
