import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyC5BDwEFmYD5fN-7KTdiNFG4zn8pJIkZE8",
  authDomain: "twitter-30d21.firebaseapp.com",
  projectId: "twitter-30d21",
  storageBucket: "twitter-30d21.appspot.com",
  messagingSenderId: "694430884904",
  appId: "1:694430884904:web:8fe0da685626cae79e011d"
};

const firebaseApp= firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;