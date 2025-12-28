// Firebase Configuration for CarbonCount
// DO NOT commit this file to public repositories

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDneTh64NJN31bggsUcqX1x6WtW51ZKsrA",
    authDomain: "carboncount-com.firebaseapp.com",
    projectId: "carboncount-com",
    storageBucket: "carboncount-com.firebasestorage.app",
    messagingSenderId: "201588471372",
    appId: "1:201588471372:web:b9feb09fa953194c91e6e9",
    measurementId: "G-HTXSQMMS4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

console.log('✅ Firebase initialized successfully');
console.log('Auth domain:', firebaseConfig.authDomain);

// Export for use in other files
export { app, auth, db, analytics, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, doc, setDoc, getDoc, collection, query, where, getDocs, deleteDoc, updateDoc };
