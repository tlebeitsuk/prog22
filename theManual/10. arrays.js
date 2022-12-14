// ARRAYS
// ============================================
// Storing ORDERED collections of data
// https://javascript.info/array

// Creating an empty array
let arr = new Array();
let arr = [];

// Creating array with data
let fruits = ["Apple", "Orange", "Plum"];

// Accessing data in array
// !! Array elements are numbered, starting with ZERO !!

fruits[0]; // Apple
fruits[1]; // Orange
fruits[2]; // Plum

// Replace an element in the array
fruits[2] = "Pear";

// Add a new one to the array
fruits[3] = "Lemon"; // now ["Apple", "Orange", "Pear", "Lemon"]

// Total count of the elements in the array
fruits.length // 4

// Array with mix of values
let arr = ["Apple", { name: "Jonas" }, ["Plum", ["Orange"]], function () { alert("Hello!") }]

arr[1].name // Jonas

arr[3](); // Hello

// pop
let fruits = ["Apple", "Orange", "Plum"];

alert(fruits.pop()); // remove last item in array "Plum"

alert(fruits); // Apple, Orange

// push
fruits.push("Pear");

alert(fruits); // Apple, Orange, Pear

// shift
fruits.shift() // remove first item in array "Apple"

alert(fruits); // Orange, Pear

// unshift
fruits.unshift("Apple"); // add Apple to the beginning of array

alert(fruits); // Apple, Orange, Pear

// Loops
let fruits = ["Apple", "Orange", "Plum"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Apple, Orange, Plum
};

// for..of
for (let fruit of fruits) {
  console.log(fruit); // Apple, Orange, Plum
};


const items = []

items.push({
  timestamp: "14:35 8.12 2022",
  text: "Hämta barnen från dagis",
  done: false,
});

items.push({
  timestamp: "12:10 7.12 2022",
  text: "Föra ut roskis",
  done: true,
});

[{
  timestamp: "14:35 8.12 2022",
  text: "Hämta barnen från dagis",
  done: false,
},
{
  timestamp: "12:10 7.12 2022",
  text: "Föra ut roskis",
  done: true,
}]
