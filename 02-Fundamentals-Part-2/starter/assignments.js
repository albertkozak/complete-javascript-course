// Assignment Values and Variables
// let country = 'Canada';
// let continent = 'North America';
// let population = 15000000;

// console.log(country);
// console.log(continent);
// console.log(population);

// Assignment Data Types
// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// Assignment let, const and var
// const language = "English";
// const country = "Canada";
// const continent = "North America";
// let population = 15;
// // language = 'German';
// console.log(language);

// //Assignment Basic Operators
// dividedPopulation = population / 2;
// console.log(dividedPopulation);
// population++;
// console.log(population);

// const populationComparsion = population >= 6;
// console.log(populationComparsion)
// const populationComparsion2 = population >= 33;
// console.log(populationComparsion2)

// const description = country + ' is in ' + continent + ", and its " + population + ' million people speak ' + language;
// console.log(description);

// CODING CHALLENGE #1

// // Exercise 1
// let markWeight = 78;
// let johnWeight = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

// // Exercise 2
// const markBMI = markWeight / markHeight ** 2;
// console.log(markBMI);
// const johnBMI = johnWeight / johnHeight ** 2;
// console.log(johnBMI);

// // Exercise 3
// const markHigherBMI = markBMI >= johnBMI;
// console.log(markHigherBMI);

// Assignment Strings and Template Literals
// const descriptionNew = `${country} is in ${continent}, and its population of ${population} million people speak ${language}!`;
// console.log(descriptionNew);

// CODING CHALLENGE #2
// let higherBMI;
// if (markBMI >= johnBMI) {
//   higherBMI = `Mark's BMI ${markBMI} is higher than John's ${johnBMI}! 💪`;
// } else {
//   higherBMI = `John's BMI is higher ${johnBMI}`;
// }
// console.log(higherBMI);

// Assignment Type Conversion and Coercion
// 1. 4
// 2. 23
// 3. 617
// 4. false
// 5. 1143

// Assignment Equality Operators == VS ===
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No borders.");
// }

// Assignment Logical Operators

// const language = "english";
// const population = 30;
// const isIsland = true;
// const country = "Portugal";

// if (language === "english" && population >= 30 && isIsland) {
//   console.log(`You should live in ${country}`);
// } else {
//   console.log(`${country} does not meet your criteria`);
// }

// CODING CHALLENGE #3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88, 91, 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win!");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("It's a tie!");
// } else {
//   console.log("Koalas win!");
// }

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win!");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win!");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("It's a tie!");
// } else {
//   console.log("No one wins...");
// }

// Assignment Switch Statement

// const language = "";

// switch (language) {
//   case "chinese":
//   case "madarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too!");
// }

// const population = 34;

// console.log(
//   `${
//     population > 33
//       ? "Canada's population is big"
//       : "Canadas population is tiny"
//   }`
// );

// // CLEANER FORMAT
// const country = "Canada";
// const population2 = 34;
// console.log(
//   `${country}'s population is ${population2 > 33 ? "above" : "below"} average`
// );

// CODING CHALLENGE #3

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
