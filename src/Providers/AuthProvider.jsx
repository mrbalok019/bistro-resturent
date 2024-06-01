import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {


    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true);

const createUser = (email,password)=>{
   setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
     
}

const signInUser= (email,password)=>{
    setLoading(true);
    try {
        return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error signing in:", error);
        setUser(null);
        setLoading(false);

    }
}

const signOutUser = ()=>{
    setLoading(true);
    return signOut(auth);
}

const signInWithGoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
}

 
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
    })

    return ()=>{
        unSubscribe();
    }
},[])

    const authInfo ={
        user , loading,createUser, signInUser , signOutUser,signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;