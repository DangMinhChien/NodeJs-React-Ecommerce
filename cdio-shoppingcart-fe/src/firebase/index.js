import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCil2gPYhIJ2zd9BnmcAmZk1tTrN5-YRQs",
  authDomain: "ecommerce-9c25f.firebaseapp.com",
  projectId: "ecommerce-9c25f",
  storageBucket: "ecommerce-9c25f.appspot.com",
  messagingSenderId: "81409288688",
  appId: "1:81409288688:web:395fb30e3dabe5cf485535",
  measurementId: "G-3R63R2HSK1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {
  storage, firebase as default
}
