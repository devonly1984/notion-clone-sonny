// Import the functions you need from the SDKs you need
import { getApp, initializeApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB82uZx82gxkRex40IjJpXsx3LDKr22Yxo",
  authDomain: "notion-clone-sonny.firebaseapp.com",
  projectId: "notion-clone-sonny",
  storageBucket: "notion-clone-sonny.appspot.com",
  messagingSenderId: "710308496693",
  appId: "1:710308496693:web:97e63f8ca41a02d197f87c"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app)


export {db};