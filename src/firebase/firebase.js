// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this line for Firebase Authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo93JU_zpJ-so7TuYrGYgQsBH7GQ-oPgk",
  authDomain: "rental-authentication.firebaseapp.com",
  projectId: "rental-authentication",
  storageBucket: "rental-authentication.appspot.com",
  messagingSenderId: "905878312946",
  appId: "1:905878312946:web:b32c3a963e26f8e5b6bd6b",
  measurementId: "G-5MFN5M8TGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // This will now work after importing getAuth
const analytics = getAnalytics(app);

export { app, auth };
