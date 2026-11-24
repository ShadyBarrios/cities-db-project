// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRoAuQLmeYqqmn8bzQZgf-b_X1oh0JoLQ",
  authDomain: "la-and-nyc.firebaseapp.com",
  projectId: "la-and-nyc",
  storageBucket: "la-and-nyc.firebasestorage.app",
  messagingSenderId: "66685707045",
  appId: "1:66685707045:web:541bb7093497950e5d30cc",
  measurementId: "G-K0HMGF4W6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);