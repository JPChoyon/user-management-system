import app from "../../src/Firebase/Firebase.config.js";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";


export const AuthContext = createContext(null);
import auth from "../../src/Firebase/Firebase.config.js";
import useAxios from "../Hooks/useAxios.jsx";

const googleProvider = new GoogleAuthProvider();

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure =useAxios()

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const emailSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

 useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser);
     if (currentUser) {
       const userInfo = currentUser.email;
       axiosSecure.post("/jwt", userInfo).then((res) => {
         console.log(res.data);
         localStorage.setItem("access-token", res.data);
         setLoading(false);
       });
     } else {
       localStorage.removeItem("access-token");
       setLoading(false);
     }
   });
   return () => {
     return unSubscribe();
   };
 }, [axiosSecure]);

  const authinfo = {
    emailSignUp,
    emailLogin,
    user,
    logOut,
    loading,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
