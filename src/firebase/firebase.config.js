// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyATwkD1a36xsbNqWQDJGzi2hTC3-441oXs",
  authDomain: "simple-firbase-auth-d4dd1.firebaseapp.com",
  projectId: "simple-firbase-auth-d4dd1",
  storageBucket: "simple-firbase-auth-d4dd1.firebasestorage.app",
  messagingSenderId: "970685236514",
  appId: "1:970685236514:web:eef148279fd72add5ed17b"
// apiKey: import.meta.env.VITE_apiKey,
// authDomain: import.meta.env.VITE_authDomain,
// projectId: import.meta.env.VITE_projectId,
// storageBucket: import.meta.env.VITE_storageBucket,
// messagingSenderId:import.meta.env.VITE_messagingSenderId,
// appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);