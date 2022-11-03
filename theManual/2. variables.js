// VARIABLES
// Variables are used to store information

// LET
// =============================

let message; // declare (sv: deklarera) variable names message

message = "Hello"; // store the string "Hello" in the variable named message

alert(message); // shows the variable content

// combine the declaration and assignment
let name = "Tobias";

// declare multiple variables in one line (not recommended for readability)
// let user = "John", age = 25, city = "Turku";

// longer, but easier to read
let user = "John";
let age = 25;
let city = "Turku";

// Old-school way to declare variable, same (almost) as let
var candy;

// Replace variable value example
/* 
let height;

height = 35;

height = 92; // value changed, old data is removed

alert(height); // 92 
*/

// Copy variable value to another variable example
let height;
let oldHeight;

height = 35;

oldHeight = height; // copy 35 from height into oldHeight

height = 92; // value changed, old data is removed

alert(height); // 92

// CONSTANTS
// declare unchanging variable (read only)
// =============================

const myBirthday = "09.11.1987";

myBirthday = "01.08.1990"; // error, can't reassign the constant!

// Naming constants with uppercase letters is a common practice
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
