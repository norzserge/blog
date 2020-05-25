import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_64avo1d182qFD3AsTx3_5q8Yj8P4Js4",
  authDomain: "react-firebase-blog-7ee85.firebaseapp.com",
  databaseURL: "https://react-firebase-blog-7ee85.firebaseio.com",
  projectId: "react-firebase-blog-7ee85",
  storageBucket: "react-firebase-blog-7ee85.appspot.com",
  messagingSenderId: "367318911590",
  appId: "1:367318911590:web:e36213230f8da6157c3ba7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
