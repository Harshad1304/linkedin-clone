// Import required Firebase services individually
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm-0_SNKxJY_LnQbIw_3JS7Df9weta2Uo",
  authDomain: "linkedin-clone-87db0.firebaseapp.com",
  projectId: "linkedin-clone-87db0",
  storageBucket: "linkedin-clone-87db0.firebasestorage.app",
  messagingSenderId: "608202492719",
  appId: "1:608202492719:web:2c2698cf02c141c38cafda",
  measurementId: "G-ZQLKC8QBN4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
