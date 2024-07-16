// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7zOGQr6OL_Xo-4rszdnc8GGVrqVdmqFg",
  authDomain: "blogproject-95622.firebaseapp.com",
  projectId: "blogproject-95622",
  storageBucket: "blogproject-95622.appspot.com",
  messagingSenderId: "1019201967835",
  appId: "1:1019201967835:web:c654a838f439a1251fdefe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();