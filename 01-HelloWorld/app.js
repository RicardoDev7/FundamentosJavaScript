//console.log('Hello world');
let a = 20; // Declare a variable local
var b = 30; // Declare a variable global
const c = 40; // Declare a constant

//c = 50; // This will cause an error because 'c' is a constants

console.table([a, b, c]); // Display values in a table format
a = 'Ricardo';
b = 'Metzger';
console.table([a, b, c]); // Display values in a table format