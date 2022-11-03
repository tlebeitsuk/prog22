// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {
  getDatabase,
  ref,
  onChildAdded,
  set,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ1ifqdKfq70CitT24qyjTLRDPzEWwGDI",
  authDomain: "prog22-chat.firebaseapp.com",
  projectId: "prog22-chat",
  storageBucket: "prog22-chat.appspot.com",
  messagingSenderId: "562350332057",
  appId: "1:562350332057:web:3e70876ffd2af745d8c008",
  databaseURL:
    "https://prog22-chat-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

// Create reference, where in the database do we want to work
const chatRef = ref(db, "/chat");

// Listen to database changes
onChildAdded(chatRef, function (data) {
  // Create message element and append to list element
  const message = document.createElement("li");
  message.classList.add("list-group-item", "bg-dark", "text-light", "border");
  message.innerText =
    new Date(parseInt(data.key)).toLocaleTimeString("fi-FI", {
      hour: "2-digit",
      minute: "2-digit",
    }) +
    ": " +
    data.val();
  list.appendChild(message);
});

// Chat
const input = document.querySelector("input");
const list = document.querySelector("#msg");

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    // create "unique" id for message
    const messageId = Date.now();

    // Send to database
    set(ref(db, "chat/" + messageId), input.value);

    // Clear input
    input.value = "";
  }
});
