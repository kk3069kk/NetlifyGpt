// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD80ED1LBVKZKIfUIrGj1rL8pDEbr4Q07g",
  authDomain: "netflixgpt-213d6.firebaseapp.com",
  projectId: "netflixgpt-213d6",
  storageBucket: "netflixgpt-213d6.firebasestorage.app",
  messagingSenderId: "749820087030",
  appId: "1:749820087030:web:9947c1869baecb8bb67ad7",
  measurementId: "G-08Q436504R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);