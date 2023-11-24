
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVNa3nOGEmieAm6ZXflN2gAQpJeK6liKQ",
  authDomain: "usermangement-jpck.firebaseapp.com",
  projectId: "usermangement-jpck",
  storageBucket: "usermangement-jpck.appspot.com",
  messagingSenderId: "251507262412",
  appId: "1:251507262412:web:e7ab52f51c62e35e349369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;