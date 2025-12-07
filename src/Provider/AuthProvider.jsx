import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();

// google signin
const GoogleProvider = new GoogleAuthProvider

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

  const registerWithEmailPassword = (email, password) => {
    // setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password)
  };

//   for google login/ signin
  const handleGoogleSignIn = () =>{
     setLoading(true)
     return signInWithPopup(auth, GoogleProvider)
     
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
    })

        return () => {
            unsubscribe();
        }
  },[])


  const authData = {
    registerWithEmailPassword,
    setUser,
    user,
    handleGoogleSignIn,
    loading
  };


  return <AuthContext value={authData}>
     {children}
  </AuthContext>
};

export default AuthProvider;
