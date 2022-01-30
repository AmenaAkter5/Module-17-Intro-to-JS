// ===========================================
//           Understand Programming
// ===========================================


/* ১.১: দৈনন্দিন জীবনে যেসব কাজ করস, সেখান থেকে এমন একটা কাজের নাম 
লেখ, যেটা একই পদ্ধতিতে বারবার করা যায়। ভাত খাওয়া, দাঁত ব্রাশ করা রিক্সায় ওঠা বাদ দিয়ে অন্য একটা লিখ।


1. Eating Rice
2. Brush
3. Riding Rickshaw
4. Starting Computer
5. Starting Fan


১.২: ক্রিকেট খেলায় আম্পায়ার যেসব কাজ করে, সেখান থেকে এমন একটা কাজের 
নাম বল যেটা আম্পায়ার একই পদ্ধতিতে বারবার করে।

1. Declare out
2. Declare Boundary
3. Declare Overboundary
4. Declare No ball
5. Declare wide ball
6. Declare Powerplay


১.৩: মোবাইল ফোন দিয়ে একই পদ্ধতিতে বার বার করা যায় এমন আরেকটা কাজের 
নাম লিখ। অবশ্যই কল করা ছাড়া অন্য আরেকটা কাজের নাম লিখবি।

1. Call
2. Text
3. Open App
4. Capture Selfie




// ===========================================
//            Understand Variable
// ===========================================


২.১: এমন একটা জিনিসের নাম লেখ, যেটার মান ভ্যারি করে বা পরিবর্তিত হয়। চালের দাম, ডালের দাম বাদ দিয়ে অন্য আরেকটা লিখ।

1. chalerDam
2. dalerDam
3. dimerDam
4. kolarDam
5. rutirDam


২.২: ক্রিকেট খেলার মধ্যে এমন একটা জিনিস খুঁজে বের কর, যেটার মান ভ্যারি করে বা পরিবর্তিত হয় । যেহেতু মান ভ্যারি করে সেহেতু এটা একটা ভেরিয়েবল হবে। 


1. runInCricket
2. overInTest
3. boundaryOfPlayer
4. strikeRate
5. runOfPlayer


২.৩: এক হালি ডিমের দাম সবসময় এক থাকে না। ভ্যারি করে বা পরিবর্তিত হয়। সেজন্য এক হালি ডিমের দাম একটা ভেরিয়েবল। এখন এক হালি ডিমের দাম জানার জন্য ‘ডিমের দাম’ (dimerDam) নামে একটা ভেরিয়েবল লেখ এবং সেটার মান সেট কর। */

var dimerDam = 38;


/* ২.৪: তোর ওজন সবসময় একই থাকে না। দাওয়াতে গিয়ে গলা পর্যন্ত খেলে ওজন বেড়ে যায়। আবার এক বেলা খাওয়া মিস করলে ওজন কমে যায়। তাই তোর ওজন
একটা ভেরিয়েবল। এখন তোর ওজন কত কেজি সেটা জানার জন্য একটা ভেরিয়েবল 
লেখ। এই ভেরিয়েবলের নাম দে ওজন (weight) তারপর সেটার মান সেট কর। */

var weight = 75;




// ===========================================
//               Variable Declare
// ===========================================


var ricePrice = 28;
var lentilPrice = 35;
var eggPrice = 40;
var dimerDam = 38;
var computerPrice = 40000;
var grandPaAge = 70;
var Weight = 75;
var glassPower = 5.5;
var rainingSpeed = 2.5;
var rainfallMeasurement = 2.5;
var runInCricket = 10;
var overInTest = 200;


// ৩.১: কলার দাম (kolarDam) নামে একটা ভেরিয়েবল ডিক্লেয়ার কর এবং সেটার মান সেট কর।  

var kolarDam = 28;


// ৩.২: পাউরুটির দাম (breadPrice) নামে আরেকটা ভেরিয়েবল ডিক্লেয়ার কর এবং সেটার মান সেট কর।

var breadPrice = 30;




// ==========================
//          "STRING"
//===========================


var name = "akbar";
var bariKoi = "chagol naiya"

console.log(name); // output: akbar
console.log(bariKoi); // output: chagol naiya



name = "Gorib Ullah"

console.log(name); // output: Gorib Ullah [we get the value which is set in last.]



/* ৪.১: গার্লফ্রেন্ডের নাম (girlFriendName) নামে একটা ভেরিয়েবল লিখে তার মান সেট কর। গার্লফ্রেন্ডের নাম অবশ্যই পেন্সিল দিয়ে লিখবি যাতে সাথে সাথে মুছে ফেলতে পারিস। অন্য কেউ দেখে ফেললে তোর আম্মুকে বলে দিবে। */

var boyFriendName = "Manik";



/* ৪.২: প্রিয় খাবার (favoriteFood) নামে একটা ভেরিয়েবল লিখ এবং সেটার মান সেট কর। */

var favoriteFood = "Mango & Milk with Rice";




// ==========================
//          Boolean
//===========================


var classAse = true;
var chaKhabi = true;
var takaSoraichis = false;



/* ৪.৩: কোক খাবি (cokeKhabi) নামে একটা ভেরিয়েবল লিখ এবং সেটার মান সেট কর। */

var cokeKhabi = false;





// ===========================================
//            Mathematical Operation
// ===========================================


// ******   Variable Math   ******* 

// 1. Ques

var chalerDam = 29;
var dalerDam = 20;

console.log(chalerDam + dalerDam); // output: 49


// by declare a variable to set total price:

var totalDam = chalerDam + dalerDam;

console.log(totalDam); // output: 49


// 2. Ques

dalerDam = 25;
console.log(chalerDam + dalerDam); // output: 54 [New value is set for dalerDam]

console.log(totalDam); // output: 54


// ৩.৩: এখন কলার দাম আর পাউরুটির দাম মিলে কত টাকা হয় সেটা console.log
// লিখে আউটপুট হিসেবে দেখা।


kolarDam = 28;
breadPrice = 30;

console.log(kolarDam + breadPrice); // output: 58

// by declare a variable to set total price:

var totalPrice = kolarDam + breadPrice;

console.log(totalPrice);




// ******   String Math   ******* 


var premik = "Manik";
var premika = 'Amena';

console.log(premik + premika);


// by declare a variable to set total price:

var amraDuJon = premik + premika;


console.log(amraDuJon);



