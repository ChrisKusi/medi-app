// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCzOUDCuRwieuyF3WWDz7rhC_141OVB71E",
    authDomain: "medi-app-63403.firebaseapp.com",
    projectId: "medi-app-63403",
    storageBucket: "medi-app-63403.firebasestorage.app",
    messagingSenderId: "771875544288",
    appId: "1:771875544288:web:bfb3d5aade2aa974e68485",
    measurementId: "G-1KY8HJH5L7"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

