
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword,  signOut, updateProfile } from 'firebase/auth';
import AuthContext from './AuthContext';
import { app } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const auth = getAuth(app)
    const [error , setError] = useState("")

    const createUser =(email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signInUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email ,password)
    }
  
    useEffect(()=>{
      const unsubCribe =   onAuthStateChanged(auth,(users)=>{
            setUser(users)
            setLoading(false)
        } )
        return()=>{
         unsubCribe()
        } 
    },[auth])

    const signOutUser =()=>{
        signOut(auth)
    }

    const updateUser=(updateData)=>{
        updateProfile(auth.currentUser , updateData)
    }
    const userInforMation ={
        user,
        setUser,
        createUser,
        auth,
        signInUser,
        signOutUser,
        loading,
        updateUser,
        
        setError,
        error

    }
    return (
        <AuthContext value={userInforMation}>
         {children}
        </AuthContext>
    );
};

export default AuthProvider;