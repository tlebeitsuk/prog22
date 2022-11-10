// LOOPS
// ==================================================
// Loops are a way to repeat the same code multiple times

// The "while" loop
// =============================

// while (condition) {
//     // code
//     // so-called "loop body"
// }

// let i = 0;
// while (i < 3) {
//   alert(i); // shows 0, then 1, then 2
//   i++; // i = i + 1
// }

// 0, -0, null, undefined, "", NaN = Falsy values (false)
// true, 42, "0", "false", -42, {}, [] = Truthy values (true)

// let i = 3;
// while (i) {
//     alert(i); // shows 3, then 2, then 1
//     i--; // i = i - 1
// }

// The "do...while" loop
// =============================

// do {
//     // loop body
// } while (condition);

// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 3);

// The "for" loop
// =============================
// for (begin; condition; step) {
//     // loop body
// }

// for (let i = 0; i < 3; i++) {
//     alert(i);
// }

// Breaking the loop

// for (let i = 0; i < 3; i++) {
//     if (i == 2) break;
// }

// Continue to the next iteration

// for (let i = 0; i < 10; i++) {
//     if (i == 6) continue;
//     alert(i); // this will not be run if i is 6
// }
