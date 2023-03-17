import firebase from "firebase/compat/app";
import "firebase/compat/database";

var firebaseConfig = {
  apiKey: "AIzaSyCxiGLS211Bekz7RgT-rmcMcjgvHqT6Wpg",
  authDomain: "nia-cleaners.firebaseapp.com",
  projectId: "nia-cleaners",
  storageBucket: "nia-cleaners.appspot.com",
  messagingSenderId: "740521120588",
  appId: "1:740521120588:web:a2dff8fbf6fd59cc7e75e9",
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
