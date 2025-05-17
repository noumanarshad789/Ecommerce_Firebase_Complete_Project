// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa768xugJp4Zr4EpasugC5FVLf7gdNPss",
  authDomain: "epakistan-ecommerce.firebaseapp.com",
  projectId: "epakistan-ecommerce",
  storageBucket: "epakistan-ecommerce.firebasestorage.app",
  messagingSenderId: "173232253749",
  appId: "1:173232253749:web:a8e18d5f98771d0db03a7c",
  measurementId: "G-1ZL7BCE6Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;