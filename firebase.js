// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC88eo4MSrunLvdAyZ3vC93GbaLCJuPTQ8",
  authDomain: "react-notes-c173a.firebaseapp.com",
  projectId: "react-notes-c173a",
  storageBucket: "react-notes-c173a.appspot.com",
  messagingSenderId: "287134798384",
  appId: "1:287134798384:web:f3a5a029b6dfb2df5453f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
export const notesCollection=collection(db,"notes")