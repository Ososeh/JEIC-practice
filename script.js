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
 "Mazda"
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
console.log(x2);

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

//
//
//
//
//
//
//
//
//