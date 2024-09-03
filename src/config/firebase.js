// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz2WrHq11B1vbzsMkh_DbMJcfWXE4GAb0",
  authDomain: "fir-turtorial-3273d.firebaseapp.com",
  projectId: "fir-turtorial-3273d",
  storageBucket: "fir-turtorial-3273d.appspot.com",
  messagingSenderId: "99491518231",
  appId: "1:99491518231:web:d489b5b4f1ae476231c952",
  measurementId: "G-XVJL080NNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();  