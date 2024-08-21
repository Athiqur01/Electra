import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext=createContext(null)
const auth=getAuth(app)

const AuthProvider = ({children}) => {


    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const [userStatus, setUserStatus]=useState()
    const [monthValue, setMonthValue]=useState()
    const googleProvider = new GoogleAuthProvider();
    
    
   

    const createUser=(email,password)=>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const createGoogleUser=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log('current user', currentUser)
        });
        return ()=>{
            return unSubscribe()
        }
    },[])

    const authInfo={user,setUser, loading,setLoading, createUser,loginUser,logOut,createGoogleUser}
    // const authInfo={user,setUser, loading,setLoading, createUser, loginUser, logOut,userStatus, setUserStatus,monthValue,setMonthValue,createGoogleUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
   

export default AuthProvider;