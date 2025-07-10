import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = initializeApp({
    apiKey: import.meta.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.VITE_FIREBASE_AUTHDOMAIN,
    projectId: "caminhodomeio"
});

const db = getFirestore(firebaseConfig)

export {db}