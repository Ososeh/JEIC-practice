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