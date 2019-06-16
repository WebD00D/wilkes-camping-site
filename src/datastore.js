import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDXcwBNoiQkPeju4n7NkZq_qewIn2dZCHo',
  authDomain: 'wilkes-campsite.firebaseapp.com',
  databaseURL: 'https://wilkes-campsite.firebaseio.com',
  projectId: 'wilkes-campsite',
  storageBucket: 'wilkes-campsite.appspot.com',
  messagingSenderId: '551254767914',
  appId: '1:551254767914:web:f456055a251f5fce'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
