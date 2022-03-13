// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6qusbuyMS3FMKgc650KW-ThrM6oHt-QU",
  authDomain: "house-marketplace-app-f96e9.firebaseapp.com",
  projectId: "house-marketplace-app-f96e9",
  storageBucket: "house-marketplace-app-f96e9.appspot.com",
  messagingSenderId: "1012523241720",
  appId: "1:1012523241720:web:4fa5d660c0c72a3eb66b0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()