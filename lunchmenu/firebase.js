// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get } from "firebase/database";
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

export async function getMenu() {
  const snapshot = await get(ref(db, "/"));
  return snapshot.val();
}
