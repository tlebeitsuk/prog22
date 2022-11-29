import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVgdRsYHfY56Tf6Kuuhvs2iYUBYJcZnrI",
  authDomain: "bingo-d993c.firebaseapp.com",
  projectId: "bingo-d993c",
  storageBucket: "bingo-d993c.appspot.com",
  messagingSenderId: "446595450989",
  appId: "1:446595450989:web:c9972403019ca980f69764",
  databaseURL: "https://bingo-d993c-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
const db = getDatabase(app);

// Set ref where in database we are working
const chatRef = ref(db, "/");

// Subscribe to changes on ref (database)
onChildAdded(chatRef, function (data) {
  const numbers = document.querySelector("#numbers")
  const number = document.createElement("div")
  number.classList.add("number")
  number.innerText = data.val()
  numbers.appendChild(number)

  // Check if number exists 
  const hit = document.getElementById(number.innerText)
  if (hit) {
    hit.classList.add("hit")
  }
});

const numbers = []; // Array

function generateNumber() {
  const number = Math.floor(Math.random() * 75) + 1;

  if (numbers.includes(number)) {
    return generateNumber();
  } else {
    numbers.push(number);
    return number;
  }
}

function init() {
  // Generate 25 buttons
  for (let i = 0; i < 25; i++) {
    const button = document.createElement("button"); // <button></button>

    // Check if number 12 and create different button
    if (i == 12) {
      button.innerText = "🤡";
      button.classList.add("hit");
    } else {
      button.innerText = generateNumber();
      button.id = button.innerText;
    }

    // Add button to section
    document.querySelector("section").appendChild(button);
  }
}

init();
