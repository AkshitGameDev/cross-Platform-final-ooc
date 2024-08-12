// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1egYxqFUNyncjL0WRROgzq_0bcffOW8A",
  authDomain: "exemoron-cli.firebaseapp.com",
  projectId: "exemoron-cli",
  storageBucket: "exemoron-cli.appspot.com",
  messagingSenderId: "238452118770",
  appId: "1:238452118770:web:71d93b86e33250be52ec6b",
  measurementId: "G-X6W0X2MBXM"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth( FIREBASE_APP );