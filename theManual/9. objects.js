// OBJECTS
// ============================================
// Storing collections of data
// https://javascript.info/object

let name = "Jonas";
let age = 30;

// Creating an empty object
let user = new Object();
let user = {};

// Creating object with data
let user = {
  name: "Jonas",
  age: 30,
}

// Accessing data in object
alert(user.name); // Jonas
alert(user.age); // 30

// Adding data to object
user.isAdmin = true;
user.lastName = "Mickelson";

// Square brackets for multiword key
user["last name"] = "Mickelson";

user["last name"] // Mickelson

// Remove data from object
delete user.lastName;

// The "for..in" loop
for (key in object) {
  // loop over every key in object
}

for (let key in user) {
  // keys
  console.log(key); // name, age, isAdmin
  // values
  user[key]; // Jonas, 30, true
};

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "2": "USA",
  "1": "Finland",
};

for (let code in codes) {
  alert(code); // 1, 2, 44, 49, 41
};




/*  
  Task:

  Write the code, one line for each action:

  1. Create an empty object user.
  2. Add the property name with the value John.
  3. Add the property surname with the value Smith.
  4. Change the value of the name to Pete.
  5. Remove the property name from the object. 
*/

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/* Task:

We have an object storing salaries of our team: 
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
let sum = 0;

for (let name in salaries) {
  sum = sum + salaries[name]; // 100, 160, 130
  sum += salaries[name]; // 100, 160, 130
};

alert(sum); // 390
