// src/firebase.js
import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyCfGLbSQy8gOPCRxB5pVDmOxEJznzmvhMM",
  authDomain: "react-fun-6dafc.firebaseapp.com",
  databaseURL: "https://react-fun-6dafc.firebaseio.com",
  projectId: "react-fun-6dafc",
  storageBucket: "",
  messagingSenderId: "674910273023"
};
firebase.initializeApp(config);
export default firebase;