// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-491db.firebaseapp.com",
  projectId: "mern-estate-491db",
  storageBucket: "mern-estate-491db.appspot.com",
  messagingSenderId: "498536216643",
  appId: "1:498536216643:web:209e3e61993a78ecab3cf6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);