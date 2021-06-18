import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAqrlBreunt1UxZCrxbt2wlm7e1pqldk4Y",
    authDomain: "library-books-15385.firebaseapp.com",
    projectId: "library-books-15385",
    storageBucket: "library-books-15385.appspot.com",
    messagingSenderId: "1059245344106",
    appId: "1:1059245344106:web:7a2e52ac2938ab61f5d113",
    measurementId: "G-VMKZ4FS6WZ"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();

export const auth = app.auth();

export const storage = app.storage();

export default app;


