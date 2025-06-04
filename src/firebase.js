import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGtv_1JOz2SNZPPFaHN-nkfb7_-FvzkaM",
    authDomain: "mamasafe-24818.firebaseapp.com",
    projectId: "mamasafe-24818",
    storageBucket: "mamasafe-24818.firebasestorage.app",
    messagingSenderId: "448813542852",
    appId: "1:448813542852:web:db0e56ca96990c87f80891",
    measurementId: "G-JR052KGPF4",
  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
