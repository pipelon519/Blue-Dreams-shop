
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, connectFirestoreEmulator } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "samuel-a4122",
  appId: "1:714886313543:web:c0e8c0f9d3b13fea852362",
  databaseURL: "https://samuel-a4122-default-rtdb.firebaseio.com",
  storageBucket: "samuel-a4122.firebasestorage.app",
  apiKey: "AIzaSyD64HQ1BkOmD3Dn8iOEMN4EIxfYyrmqo64",
  authDomain: "samuel-a4122.firebaseapp.com",
  messagingSenderId: "714886313543",
  measurementId: "G-KZV5LBH3YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and connect to emulators
const auth = getAuth(app);
connectAuthEmulator(auth, "http://127.0.0.1:9099");

const db = getFirestore(app);
connectFirestoreEmulator(db, "http://127.0.0.1:8080");

// Export the instances to be used in other scripts
export { auth, db };
