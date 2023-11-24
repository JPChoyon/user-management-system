import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import auth from "../../src/Firebase/Firebase.config.js";

export const AuthContext = createContext(null);

// google provider
const googleProvider = new GoogleAuthProvider();

// github provider
const githubProvider = new GithubAuthProvider();

// twitter provider
const twitterProvider = new TwitterAuthProvider();

// facebook Provider
const facebookProvider = new FacebookAuthProvider();

const Context = ({ children }) => {
  // google log in popup
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // github login popup
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // twitter login popup
  const twitterLogin = () => {
    return signInWithPopup(auth, twitterProvider);
  };

  // facebook login popup
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // email and password sign up
  const emailSignup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const emailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out user
  const logOut = () => {
    return signOut(auth);
  };

  // hold user in this useEffect section
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const authInfo = {
    googleLogin,
    githubLogin,
    twitterLogin,
    emailLogin,
    emailSignup,
    facebookLogin,
    logOut,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
