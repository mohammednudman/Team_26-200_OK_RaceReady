import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBOEylOChTyrlPIQcSZP0Ff9tqrIuUdtwA",
    authDomain: "racerw-40735.firebaseapp.com",
    projectId: "racerw-40735",
    storageBucket: "racerw-40735.appspot.com",
    messagingSenderId: "894123707151",
    appId: "1:894123707151:web:19856372a7d84a66be4c7a",
    measurementId: "G-GEEPYRDLWG"
  };


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app);

export { db, auth, storage };