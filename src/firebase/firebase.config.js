// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMwoeSRIeN6PtN2qrQHlJTgUXO2aHx5h8",
  authDomain: "hotel-blue-pearl.firebaseapp.com",
  projectId: "hotel-blue-pearl",
  storageBucket: "hotel-blue-pearl.firebasestorage.app",
  messagingSenderId: "615101809343",
  appId: "1:615101809343:web:42471134e41d2900ca7c0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;