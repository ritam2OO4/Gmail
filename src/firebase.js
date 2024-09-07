// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3zPbNKEPH3GfBux_6cDqz6YEQ4sdfsC4",
  authDomain: "react-7e402.firebaseapp.com",
  projectId: "react-7e402",
  storageBucket: "react-7e402.appspot.com",
  messagingSenderId: "328581326952",
  appId: "1:328581326952:web:1a344992b8220d622673dd",
  measurementId: "G-XCQDYH7JEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();