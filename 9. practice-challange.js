// =================================================
//             Module Practice Challenge
// ==================================================



/* প্রাকটিস চ্যালেঞ্জ-1:

নিচের ভেরিয়েবল ডিক্লেয়ার এ কোনটার মধ্যে কি কি সমস্যা আছে। দেখতো বের করতে পারো কিনা?

Var price = 33

var name - Shabana

var boxName = ‘Cocola;

var 88_price = 34;

var enum = -1;

var _$box’78 = ‘Monika’;

var home-address = “kochu khet”; */



// ***********    ANSWER    *********

// 1. Var price = 33  // [Have not semicolone at ending.]

var price = 33;


// 2. var name - Shabana // 

// [Must have equal sign instead of hiphen and there need quotation mark in alphabetic value because this is string. And at last there need to semicolone to end to declare variable.] //

var name = "Shabana";


// 3. var boxName = ‘Cocola; // 

// [one quotation mark is missing at the end side.]

var boxName = 'Cocola';


// 4. var 88_price = 34; // 

// [Number is not applicable in the begining of variable name. It can be applied in ending with underscore (_) or without underscore.]

var price_88 = 34;
var price88 = 34;


// 5. var enum = -1; //

/* 'enum' is not allowed as a variable declaration name. ts(1389)

ts = typescript

Enums

An enum is a special "class" that represents a group of constants (unchangeable variables, like final variables).

To create an enum, use the enum keyword (instead of class or interface), and separate the constants with a comma. Note that they should be in uppercase letters:


Example

enum Level {
  LOW,
  MEDIUM,
  HIGH
}

You can access enum constants with the dot syntax:
Level myVar = Level.MEDIUM; */


var num = -1; // It can be written in this format.


// 6. var _$box’78 = ‘Monika’; // 

// Quation mark is not valid in variable name. Quotation mark is in invalid form here for value.

var_$box78 = 'Monika';


// 7. var home-address = “kochu khet”; // 

// hiphen is not allowed in variable name. Quotation mark is in invalid form here for value.

var home_address = 'kochu khet';
var homeAddress = 'kochu khet'; // [CamelCase can be applied here to write variable name.]




