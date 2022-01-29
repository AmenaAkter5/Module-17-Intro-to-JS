// =============================
//          ADD STRING
// =============================


// 1. [Here String sit in line by adding them (we see it in console output)]

var firstName = 'Zarin';
var lastName = 'Subah';

var fullName = firstName + lastName;

console.log(fullName); // output: ZarinSubah


// to make space between this Name we need to add whitespace in string [this is called "empty string"]:

var fullName = firstName + ' ' + lastName;

console.log(fullName); // output: Zarin Subah


// Anything is added in string that will show in output. 

var fullName = firstName + 'M' + lastName;

console.log(fullName); // output: ZarinMSubah

// But we need space between name so we add empty string.


// -------------------------------


// 2. If we keep the 'number' value in quotation mark then JS will understand it as 'string' value. And the addition output of these type of variables is like as 'string' addition output.

var price1 = '10';
var price2 = '20';

var sum = price1 + price2;

console.log(sum); // output: 1020 [String sit in line by adding them]


// If one of them set as 'string' and another one as 'number' then their addition output is like as 'string' addition output too. [Because JS will take the 'number' value as 'string' here for another 'string' value.]


// *** First Example:

var price1 = '10';
var price2 = 20;

var sum = price1 + price2;

console.log(sum); // output: 1020 [String sit in line by adding them]


// *** Second Example:

var price1 = 10;
var price2 = '20';

var sum = price1 + price2;

console.log(sum); // output: 1020 [String sit in line by adding them]



// -----------------------------------



// 3. If 'number' value set as 'string' value then we need to convert it in number by coding.


// There are "TWO" Convert systems-

// 1. Integer (2) [Full Number. Without any fraction.]
// 2. Float (2.5) [Meaning: Fraction. Float is used in programming language for fraction.]



// 1. Integer

price1 = '10';
price2 = '20';

console.log(parseInt(price1)); // output: 10

// [We can declare a variable to convert in integer]

var price1Number = parseInt(price1);

console.log(price1Number); // output: 10



// If price in decimal number and we want to convert in integer then the decimal part will not be shown only integer part is shown here.

var price3 = '55.20';

console.log(parseInt(price3)); // output: 55 [.20 is not shown because we convert in integer]



// 2. Float

price3 = '55.20';

console.log(parseFloat(price3)); // output: 55.20

// [We can declare a variable to convert in float]

var price3Number = parseFloat(price3);

console.log(price3Number); // output: 55.20


// simple Math: [We have price1Number and price3Number]

var totalPrice = price1Number + price3Number;

console.log(totalPrice); // output: 65.20




// **************************

// ********* Shortcut System to convert in number to string ********

var price4 = + '45'; // add an addition sign (+) before string.

console.log(price4); // output: 45 [in Number]

var price5 = + '98';

console.log(price5); // output: 98 [in Number]


// Simple Math: 

var newPrice = price4 + price5;

console.log(newPrice); // output: 143 [if it was run as string then the output would be 4598 But it was converted in number so here it is run as number]





// =======================================
//             Special Edition

//              [From Video-8]
// ========================================



var first = 0.1;
var second = 0.2;

var total = first + second;

console.log(total); // output: 0.30000000000000004 [It is the technichal issue of machine language.]


// To solve this problem we need to fix the decimal point & at that point we want to see the result [decimal point can be defined 1 to 20].

console.log(total.toFixed(1)); // output: 0.3 [But it is shown in string]


// To Fix string to number we need to apply 'parsefloat'

console.log(parseFloat(total.toFixed(1)));


// ============ Different Method =============


// one by one Solving

total = total.toFixed(1); // First need to fix the decimal point

console.log(total); // output: 0.3 [In string value]



//         ****************


total = parseFloat(total); // to change in number value from string

console.log(total); // output: 0.3 [In number]