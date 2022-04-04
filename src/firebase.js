import {createUserWithEmailAndPassword, deleteUser, getAuth,onAuthStateChanged, signInWithEmailAndPassword, signOut} from  "firebase/auth";
import {initializeApp} from  "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";
 
const firebaseConfigs = {
   apiKey: "AIzaSyCY44NmMaX-1m-ziUHuyOR26D0OJAc927c",
    authDomain: "personal-38ff2.firebaseapp.com",
    databaseURL: "https://personal-38ff2.firebaseio.com",
    projectId: "personal-38ff2",
    storageBucket: "personal-38ff2.appspot.com",
    messagingSenderId: "1052030309142",
    appId: "1:1052030309142:web:c910b04497ce69dd1a3637",
    measurementId: "G-YDW2FCR93G"
  };
  
const app = initializeApp(firebaseConfigs);
const auth = getAuth();

export function signup(email,password) {
  return createUserWithEmailAndPassword(auth,email,password)
}

export function signin(email,password) {
  return signInWithEmailAndPassword(auth,email,password)
  
}

export function signout() {
  return signOut(auth)
}

export function useAuth() {
  const [currentUser,setcurrentUser] = useState();

  useEffect(()=> {
    const unsub = onAuthStateChanged(auth , user => {setcurrentUser(user )});
    return unsub;
  },[])

  return currentUser;
}