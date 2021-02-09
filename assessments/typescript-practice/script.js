"use strict";
// Declare a variable named today. It should be of type string 
// and set to the current day of the week.
let today = "Thursday";
// Declare a function named roundWithUnit. 
// It takes two parameters, 1) a number and 2) a string indicating 
// the units. 
// It returns a string. 
// It rounds the number argument and concatenates the unit string 
// onto the end, returning the result.
function roundWithUnit(number, units) {
    return Math.round(number) + units;
}
// Call the function. Store the result in a variable. 
// Then log the variable.
const results = roundWithUnit(52.5, " tons");
console.log(results);
// ● Declare an array called sauces which is an array of type Sauce.
// ● Fill the array with a few sauces of your own choosing, some awesome and some not.
let sauces = [
    { name: "Mad Dog 357 Plutonium No. 9", spiceLevel: 10, awesome: false },
    { name: "Hellfire Detroit Habanero", spiceLevel: 7, awesome: true },
    { name: "Crazy Jerry's Brain Damage", spiceLevel: 5, awesome: false },
    { name: "Pain is Good Batch 218", spiceLevel: 4, awesome: true },
    { name: "Frank's Red Hot", spiceLevel: 1, awesome: false },
];
// Declare a function called getSauceByName. It takes two parameters
// 1) an array of Sauce objects
// 2) a string, which will be the name of one of the sauce objects. 
// The function should return the sauce object from the array that has 
// the given name. (Hint: the return type for this one will need to be 
// Sauce|undefined. This will accommodate the possibility that no matching
// sauce is found.)
function getSauceByName(arrayOfSauces, name) {
    return arrayOfSauces.find(sauce => sauce.name === name);
}
// Call getSauceByName, passing it your sauces array and the name 
// of one of your sauces as arguments.  Log the result.
console.log(getSauceByName(sauces, "Mad Dog"));
// Declare a function called getAwesomeSauces. It takes one parameter, 
// an array of Sauce objects. 
// The function should return an array of all the sauce objects that
// have awesome true.
function getAwesomeSauces(arrayOfSauces) {
    return arrayOfSauces.filter(sauce => sauce.awesome);
}
// Call getAwesomeSauces, passing it your sauces array as an argument. Log the result.
console.log(getAwesomeSauces(sauces));
// Declare a function called gimmeSpicy. It takes two parameters, 1) an array of Sauce
// objects and 2) a number, which will be the desired spice level. The function should
// return an array of all the sauce objects that have spiceLevel at or above the desired
// spice level.
function gimmeSpicy(arrayOfSauces, spiceLevel) {
    return arrayOfSauces.filter(sauce => sauce.spiceLevel >= spiceLevel);
}
// Call gimmeSpicy, passing it your sauces array and a spice level number as arguments.
// Log the result.
console.log(gimmeSpicy(sauces, 5));
// Declare a function called makeAwesomeSauce. It takes two parameters, 1) a string sauce
// name and 2) a number spice level. The function should create a new sauce object with
// the given name and spice level. It should set awesome to true for this sauce. Return the
// newly created sauce. Do not add this new sauce to the array.
function makeAwesomeSauce(name, spiceLevel) {
    return { name, spiceLevel, awesome: true };
}
// Call makeAwesomeSauce, passing it a name and a spice level as arguments.
// Log the result.
console.log(makeAwesomeSauce("Bibigo Gochujang", 5));
