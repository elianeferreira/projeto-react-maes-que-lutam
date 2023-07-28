// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import analytics, { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA96Wjl0iXQrmUb1g8CiESycND6QU2Yx8",
  authDomain: "projeto-maes-que-lutam.firebaseapp.com",
  projectId: "projeto-maes-que-lutam",
  storageBucket: "projeto-maes-que-lutam.appspot.com",
  messagingSenderId: "817800894965",
  appId: "1:817800894965:web:d5a9d3e046a98ce9a0a8bc",
  measurementId: "G-6RFSC3L4D1",
  databaseURL: "https://projeto-maes-que-lutam-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getDatabase();
//const analytics = getAnalytics(app);

export default database