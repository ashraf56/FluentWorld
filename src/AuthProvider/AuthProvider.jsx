import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../Authentication/Firebase/firebase.config';

const auth = getAuth(app);
export let AuthService=createContext();
 const Googleprovider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
let [user,setuser]=useState()
let [Loading,setLoading]=useState(true);

let RandonUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
}

let googleSignin=()=>{
    setLoading(true)
    return signInWithPopup(auth, Googleprovider)
}

let updateUser=(name,photo)=>{

    return  updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
        })
  }

  let Signout=()=>{
    return signOut(auth);
}

let Login=(email,password)=>{
    setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
 }

 useEffect(()=>{
    let CancelSubscription=onAuthStateChanged(auth,
        CurrentUser=>{
            setuser(CurrentUser);
            setLoading(false);
          
    
        }
        )
    
        return()=>{
            CancelSubscription();
        }
    
    },[])


 let AuthManager={
    user,Loading,RandonUser,googleSignin,updateUser,Signout,Login
 }
    return (
        <AuthService.Provider value={AuthManager}>
            {children}
        </AuthService.Provider>
    );
};

export default AuthProvider;