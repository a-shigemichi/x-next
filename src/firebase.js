// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-bbd47.firebaseapp.com",
  projectId: "x-next-bbd47",
  storageBucket: "x-next-bbd47.appspot.com",
  messagingSenderId: "674872052937",
  appId: "1:674872052937:web:686a0e96bc27a846349118",
  measurementId: "G-4BGQPRQH1G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export analytics = getAnalytics(app);