// DATA TYPES
// A value in JavaScript is always a certain type. For example, a string or a number.
// =============================

// Number
// =============================
let n = 123; // integer (sv. heltal)
n = 12.345; // floating point (sv. decimaltal)

alert(23 / "not a number"); // error NaN (Not a number)

// String
// =============================
let str = "Hello";
let str2 = "Single quotes are ok too";

let phrase = `can embed another ${str}, result ${3 + 4}`; // can embed another Hello, result 7

console.log(id + "-" + i); // 1-23
console.log(`${id}-${i}`); // same, 1-23

// Boolean
// Has only two values: true and false
// =============================
let ageFieldChecked = false;
let nameFieldChecked = true;

let isGreater = 4 > 1;

alert(isGreater); // true

// The "null" type
// Special value which represents "nothing", "empty", "value unknown"
// =============================
let age = null; // age is unknown

// The "undefined" value
// =============================
let years;

alert(years); // show "undefined"

// no error
let message = "hello"; // string
message = 1234; // number

// The typeof operator
// returns the type
// =============================
typeof 23; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
