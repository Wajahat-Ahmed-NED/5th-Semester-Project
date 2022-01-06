// Import the functions you need from the SDKs you need

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
    getDatabase,
    set,
    get,
    push,
    remove,
    ref,
    onValue,
    onChildAdded,
    child,
} from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBm7fSC-Ke9eLoMfZMNXXQqp2lSesCkHK0",
    authDomain: "ned-semester-project.firebaseapp.com",
    databaseURL: "https://ned-semester-project-default-rtdb.firebaseio.com",
    projectId: "ned-semester-project",
    storageBucket: "ned-semester-project.appspot.com",
    messagingSenderId: "127553456101",
    appId: "1:127553456101:web:1412e9fa4c40b6555a510c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firebase=firebase.auth()
const auth = getAuth()
const db = getDatabase(app)
export {
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    set,
    push,
    remove,
    ref,
    onValue,
    onChildAdded,
    child,
    get,
    provider,
};