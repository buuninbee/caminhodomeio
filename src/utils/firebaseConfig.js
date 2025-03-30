import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyAH7acwDSL8vdge-EPA883WrT0xGuvql7g",
    authDomain: "caminhodomeio.firebaseapp.com",
    projectId: "caminhodomeio"
});

const db = getFirestore(firebaseConfig)

export {db, collection, getDocs}