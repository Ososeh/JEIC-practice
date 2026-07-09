//Arrays
/* New element can also be added to an array using the length property */
const fruits = ["Banana", "Orange", "Apple", "Mango"];



fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
console.log(fruits); // Banana,Orange,Apple, Mango, Lemon
//WARNING !
/* Adding elements with high indexes can create undefined "holes" in an array */

//JavaScript new Array() constructor
/* JavaScript new Array()
JavaScript has a built-in array constructor new Array().
But you can safely use [] instead.
These two different statements both create a new empty array named points */

//JavaScript Array pop()
/* The pop() method removes the last element from an array
The pop() method returns the value that was "popped out" */

let fruit = fruits.pop();
console.log("The new updated fruit list is:", fruits); // Banana,Orange,Apple

//JavaScript Array unshift()
/* The unshift() method adds a new element to an array (at the beginning) and "unshifts" older elements 
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:*/
fruits.unshift("Lemon"); // Adds "Lemon" to the beginning of the array
console.log("The new updated fruit list is:", fruits); // Lemon,Banana,Orange,Apple

//Array.isArray()
/* The Array.isArray() method returns true if an object is an array, otherwise false. */
let text = "Hello World";
let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Is it an array?", Array.isArray(text)); // false
console.log("Is it an array?", Array.isArray(fruits1)); // true

// JavaScript Array concat()
/* The concat() method creates a new array by merging (concatenating) existing arrays 
The concat() method does not change the existing arrays. It always returns a new array.
The concat() method can take any number of array arguments.*/
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruits3 = ["Lemon", "Grape"];
let allFruits = fruits2.concat(fruits3);
console.log("All fruits:", allFruits); // Banana,Orange,Apple,Mango,Lemon,Grape

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log("My children:", myChildren); // Cecilie,Lone,Emil,Tobias,Linus

//JavaScript Array copyWithin()
/* The copyWithin() method copies array elements to another position in the array, overwriting the existing values.
The copyWithin() method overwrites the original array. 
The copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the array.
The copyWithin() method does not change the length of the array.*/      

const fruits4 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya", "Pineapple"];
console.log("Before copyWithin:", fruits4);

const fruits5 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya", "Pineapple"];
fruits5.copyWithin(3, 0, 3);
console.log("After copyWithin:", fruits5); // Banana,Orange,Banana,Orange,Kiwi

//JavaScript Array flat()
/* The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
The flat() method does not change the original array. */
const myArr = [[1,2],[3,4],[5,6]];
const newList = [[1000,20000,30000], [0.7,0.8,0.9], [20,30,40,45], [11,13,17,21]];
const newArr = myArr.flat();
console.log("The new array is:", newArr); // 1,2,3,4,5,6
console.log("The new list is:", newList.flat()); // 1000,20000,30000,0.7,0.8,0.9,20,30,40,45,11,13,17,21

//JavaScript Array flatMap()
/* The flatMap() method first maps each element using a mapping function, then flattens the result into a new array.
It is identical to a map followed by a flat of depth 1. */
const arr1 = [1, 2, 3, 4];
const arr2 = arr1.flatMap(x => [x * 2]);
console.log("The new array is:", arr2); // 2,4,6,8

// JavaScript Array splice()
/* The splice() method adds and/or removes array elements.
The splice() method overwrites the original array. 
The key idea is:
splice() can add, remove, or replace items in an array.*/  
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.splice(2, 0, "Lemon", "Kiwi");
console.log("The new array is:", fruits6); // Banana,Orange,Lemon,Kiwi,Apple,Mango

const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.splice(1, 3, "Lemon", "Kiwi");
console.log("The replaced array is:",fruits7);

//