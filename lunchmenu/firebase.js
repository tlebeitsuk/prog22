// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getDatabase,
  ref,
  get,
  update,
  increment,
  onValue,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKwo-qFAZJ4T46tP4DOG4BR5vJOI3esZ4",
  authDomain: "lunchmenu-243c7.firebaseapp.com",
  projectId: "lunchmenu-243c7",
  storageBucket: "lunchmenu-243c7.appspot.com",
  messagingSenderId: "950532371991",
  appId: "1:950532371991:web:80e9adaf1daf3ed7564e52",
  measurementId: "G-LKR0SK00X9",
  databaseURL:
    "https://lunchmenu-243c7-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Listen to DB changes and update data
onValue(ref(db, "/"), (snapshot) => {
  const data = snapshot.val();

  document.querySelector("#monday").innerText = data.monday.text;
  document.querySelector("#tuesday").innerText = data.tuesday.text;
  document.querySelector("#wednesday").innerText = data.wednesday.text;
  document.querySelector("#thursday").innerText = data.thursday.text;
  document.querySelector("#friday").innerText = data.friday.text;

  document.querySelector("#monday-count").innerText = data.monday.count;
  document.querySelector("#tuesday-count").innerText = data.tuesday.count;
  document.querySelector("#wednesday-count").innerText = data.wednesday.count;
  document.querySelector("#thursday-count").innerText = data.thursday.count;
  document.querySelector("#friday-count").innerText = data.friday.count;
});

export async function upVote(index) {
  let day;

  if (index === 0) {
    day = "monday";
  } else if (index === 1) {
    day = "tuesday";
  } else if (index === 2) {
    day = "wednesday";
  } else if (index === 3) {
    day = "thursday";
  } else {
    day = "friday";
  }

  update(ref(db, `/${day}`), { count: increment(1) });
}
