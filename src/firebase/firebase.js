// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYrHnj_dFO3_tkWcrUlXXQBD6MErHtJVE",
  authDomain: "warehouse2-225ca.firebaseapp.com",
  projectId: "warehouse2-225ca",
  storageBucket: "warehouse2-225ca.appspot.com",
  messagingSenderId: "993876941305",
  appId: "1:993876941305:web:2c7868d49eee4ca97b0528",
  measurementId: "G-N62ZX4P5J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);