import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyBOEylOChTyrlPIQcSZP0Ff9tqrIuUdtwA",
    authDomain: "racerw-40735.firebaseapp.com",
    projectId: "racerw-40735",
    storageBucket: "racerw-40735.appspot.com",
    messagingSenderId: "894123707151",
    appId: "1:894123707151:web:19856372a7d84a66be4c7a",
    measurementId: "G-GEEPYRDLWG"
  };


  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app)
  const auth = getAuth(app)
  const db = getFirestore(app);
  
  export { db, auth, storage };