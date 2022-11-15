// FUNCTIONS
// ============================================

// Function Declaration
// function showMessage() {
//   alert("Hello everyone!");
// }

// showMessage(); // call function by its name

// // Local variables
// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   alert(message);
// }

// showMessage();

// alert(message); // <-- Error! The variable is local to the function

// Outer variables
// let userName = "John";

// function showMessage() {
//   userName = "Bob";

//   let message = "Hello " + userName;
//   alert(message);
// }

// alert(userName); // John before the function call

// showMessage();

// alert(userName); // Bob, the value was modified by the function

// Parameters
// function showMessage(from, text) { // parameters: from, text
//     alert(from + ': ' + text);
// }

// showMessage("Ann", "Hello"); // Ann: Hello!
// showMessage("Ann", "What's up?"); // Ann: What's up?

// // Default value
// function showMessage(from, text = "no text given") {
//     alert(from + ': ' + text);
// }

// showMessage("Ann"); // Ann: no text given

// Returning a value

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(1, 3); // 4

// // Multiple returns
// function checkAge(age) {
//   if (isNaN(age)) {
//     // if age is not a number
//     return; // exit function
//   }

//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// checkAge(ab);
