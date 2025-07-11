// Import the functions you need from the SDKs you need
import { initializeApp ,getApp ,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8wtSn2ftGEkFsacFXeEvLhTbJD6bghis",
  authDomain: "prepwise-a3b36.firebaseapp.com",
  projectId: "prepwise-a3b36",
  storageBucket: "prepwise-a3b36.firebasestorage.app",
  messagingSenderId: "517953314135",
  appId: "1:517953314135:web:cdf5c959b18de1b038f212",
  measurementId: "G-WGC1KZ8FWD"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db= getFirestore(app);