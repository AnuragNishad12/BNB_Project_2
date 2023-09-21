import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCbIf1HI12qUczVZjuN6rVhVjzbAxeabLg",
    authDomain: "gokqmp.firebaseapp.com",
    projectId: "gokqmp",
    storageBucket: "gokqmp.appspot.com",
    messagingSenderId: "36775330040",
    appId: "1:36775330040:web:a3b065e1570af5de5e3b0d",
    measurementId: "G-TFSD2KJ02T"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);