// ==========================================
//           RECAP of Previous Video
// ===========================================


// *** variable declaration:

var price1 = 31;
var price2 = 10;


// *** Some mathematical Operations:

var sum = price1 + price2;
var difference = price1 - price2;
var multiplication = price1 * price2;
var division = price1 / price2;


// *** To see the output run these programs:

console.log(sum); // output: 41
console.log(difference); // output: 21
console.log(multiplication); // output: 310
console.log(division); // output: 3.1



// ===================================
//           Present Video
// ===================================



var doublePrice = price1 * 2;
var newPrice = price1 + 10;


console.log(doublePrice); // output: 62
console.log(newPrice); // output: 41


// To set the new value of previous declared variable then we will not use 'var' again


price1 = price1 + 10;

console.log(price1); // output: 41


// Shorthand System [Common the price name and set '+=' in middle before new value] [Meaning: 10 added with price1]

price1 += 10;

console.log(price1); // output: 51

// 10 Subtracted from price

price1 -= 10;

console.log(price1); // output: 41






// ===================================
//          Overall summaray
// ====================================


var age = 14; // variable declare

console.log(age); // output: 14


age = age + 1; // [Normal System to add]

console.log(age); // output: 15


age += 10; // [Shorthand System to add]
console.log(age); // output: 25




// ***** =================================================== *****  
//         Just add or deduct 1 we can use another shortcut
// ***** ==================================================== *****


age++; // [increase 1 of the previous value]

console.log(age); // output: 26


age--; // decrease 1 of the previous value

console.log(age); // output: 25




// same variable run and deduct

var price = 25;

price = price - 1; // Normal System to deduct
price -= 1; // shortcut system to deduct
price--; // shortcut system to decrease 1


console.log(price); // output: 24 / 23 / 22 [one by one deduction run]

// [Here output will be 22. here deduct 1 by 1 and show total output]