// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// PUT YOUR OWN FIREBASE CONFIGURATION HERE
var firebaseConfig = {
  apiKey: "AIzaSyAkUKxQFCaH-5A8q274b85w3zf0Upu7HdI",
  authDomain: "chat-4b167.firebaseapp.com",
  databaseURL: "https://chat-4b167.firebaseio.com",
  projectId: "chat-4b167",
  storageBucket: "chat-4b167.appspot.com",
  messagingSenderId: "151929136000",
  appId: "1:151929136000:web:03ed0afe584fc8f0371765"

};


// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();


export { firebaseAuth, firebaseDb }
