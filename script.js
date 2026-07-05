// Quotes inside a quote
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
console.log(answer1);
console.log(answer2);
console.log(answer3);

// Escape Characters
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text)

// Else if statement
let score = 80;

if (score >= 90) { 
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else if (score >= 50) {
    console.log("Grade: E");
} else {
    console.log("Grade: F");
}

// Quotes
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

console.log(carName1 + " " + carName2);

// Back-Tics Syntax(Template Strings use back-ticks (``) rather than the quotes ("") to define a string)
let text1 = `Hello World!`;
console.log(text1);

// Quotes Inside Strings
let text2 = `He's often called "Johnny"`;
console.log(text2);

//Interpolation
let firstName = "James";
let lastName = "Bond";

let text3 = `Welcome ${firstName}, ${lastName}!`;
console.log(text3);

//Expression Substitution
let price = 10;
let VAT = 0.25;

let total1 = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total1);

// Loops (While Loop)
let text4 = "";

let i = 0;
while (i < 10) {
  text4 += "The number is " + i + "\n";
  i++;
}
console.log(text4);

//Loops (The For Loop)
const cars = 
[
 "BMW", 
 "Volvo",
 "Saab",
 "Ford", 
 "Chevrolet", 
 "Mercedes-Benz", 
 "Toyota", 
 "Pontiac", 
 "Range Rover", 
 "Honda", 
 "Mitsubushi", 
 "Nissan", 
 "Mazda",
 "Peugeot",
 "Kia",
 "Volkswagen",
 "Isuzu",
 "Lexus",
 "",
];
let text5 = "";

for (let ia = 0; ia < cars.length; ia++) {
  text5 += cars[ia] + "\n";
}

console.log(text5);

let ib, x2 = '';
for (ib = 0; ib < 5; ib = ib + 2) {
  x2 += ib;
}
console.log("This is x2", x2);


const prices = [10000, 25000, 50000, 15000];

let total = 0;

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log("Cart total: ₦" + total);

//String Methods (JavaScript String toWellFormed())
let text6 = "Hello world \uD800";
let result1 = text6.toWellFormed();

console.log(result1);

//String Methods (JavaScript String isWellFormed())
let text7 = "Hello World \uD800";
let text8 = "Hello World";
let result2 = text7.isWellFormed();
let result3 = text8.isWellFormed();

console.log(result2);
console.log(result3);

//NaN - Not a Number
/* NaN is a JavaScript reserved word indicating that a number is not a legal number.
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number) */
let x3 = 100 / "Apple";
console.log(x3);

//Hexadecimal
/* JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
This program converts the decimal number 32
into different number bases using the
toString() method.
Example
let x = 0xFF;
 */
let myNumber = 32;

console.table({
  "Base 36 (Hexatrigesimal)": myNumber.toString(36),
  "Base 32 (Duotrigesimal)": myNumber.toString(32),
  "Base 16 (Hexadecimal)": myNumber.toString(16),
  "Base 12 (Duodecimal)": myNumber.toString(12),
  "Base 10 (Decimal)": myNumber.toString(10),
  "Base 8 (Octal)": myNumber.toString(8),
  "Base 2 (Binary)": myNumber.toString(2)
});

//Numbers
/* The toExponential() Method */
let x4 = 9.656;
console.log("This is exponential table");
console.table({
    "Exponential(2)": x4.toExponential(2),
    "Exponential(4)": x4.toExponential(4),
    "Exponential(6)": x4.toExponential(6)
});

//The toFixed() Method
/* toFixed() returns a string, with the number written with a specified number of decimals
 */
let x5 = 9.656;
console.log("This is the toFixed table")
console.table({
    "Fixed(0)": x5.toFixed(0),
    "Fixed(2)": x5.toFixed(2),
    "Fixed(4)": x5.toFixed(4),
    "Fixed(6)": x5.toFixed(6)
});

//The toPrecision() Method
/* toPrecision() returns a string, with a number written with a specified length
 */
let x6 = 9.656;
console.log("This is the precision table");
console.table({
    "Precision(0)": x6.toPrecision(),
    "Precision(2)": x6.toPrecision(2),
    "Precision(4)": x6.toPrecision(4),
    "Precision(6)": x6.toPrecision(6)
});

//JavaScript Bitwise
let a1 = 5;
let b1 = 4;

console.log(a1 & b1);

// Bitwise AND
console.log("5 & 3 =", 5 & 3);

// Bitwise OR
console.log("5 | 3 =", 5 | 3);

// Bitwise XOR
console.log("5 ^ 3 =", 5 ^ 3);

// Bitwise NOT
console.log("~5 =", ~5);

// Left Shift
console.log("5 << 1 =", 5 << 1);

// Right Shift
console.log("8 >> 1 =", 8 >> 1);

//

//
//
//
//
//
//
//
//
