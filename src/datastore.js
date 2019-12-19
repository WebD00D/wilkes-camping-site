import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0o1q1yQM1rk7WnyDYG2hM5iW0g3meJ3M",
  authDomain: "free-campsites.firebaseapp.com",
  databaseURL: "https://free-campsites.firebaseio.com",
  projectId: "free-campsites",
  storageBucket: "free-campsites.appspot.com",
  messagingSenderId: "774799200960",
  appId: "1:774799200960:web:5e5d1425cf6f594fe91325",
  measurementId: "G-59CNXL9V80"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
