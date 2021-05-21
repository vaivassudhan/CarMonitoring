import Firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAGFUMmN8dWXfW8Xf1PPYY9KWheRfxtOdo",
    authDomain: "scms-33eae.firebaseapp.com",
    databaseURL: "https://scms-33eae-default-rtdb.firebaseio.com",
    projectId: "scms-33eae",
    storageBucket: "scms-33eae.appspot.com",
    messagingSenderId: "895253006521",
    appId: "1:895253006521:web:81863c9bb7ab70fc793368",
    measurementId: "G-PHQL139GZ2"
  };
  const app = Firebase.initializeApp(firebaseConfig);
  export const db = app.database();