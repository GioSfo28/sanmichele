import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBTr4mmIEbD6xf5rWsLGd8SRk2sCYlN_lI",
  authDomain: "sanmichele-1.firebaseapp.com",
  databaseURL: "https://sanmichele-1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sanmichele-1",
  storageBucket: "sanmichele-1.firebasestorage.app",
  messagingSenderId: "873017190427",
  appId: "1:873017190427:web:da017e3055e89807c030be",
  measurementId: "G-Q7Z91PBY1Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app); 

export const googleProvider = new GoogleAuthProvider();