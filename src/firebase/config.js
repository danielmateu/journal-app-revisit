// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers/getEnvironments";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID,
    VITE_APPID,
    VITE_MEASUREMENTID
} = getEnvironments()
// console.log(env);

// console.log(import.meta.env);
// console.log(process.env);

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "",
//     authDomain: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: ""
// };

//testing
// const firebaseConfig = {
//     apiKey: "AIzaSyDlJeyZdvRd4Iask8303pqrBytvXn2Ljuc",
//     authDomain: "cloud-firestore-ccc71.firebaseapp.com",
//     projectId: "cloud-firestore-ccc71",
//     storageBucket: "cloud-firestore-ccc71.appspot.com",
//     messagingSenderId: "31820881864",
//     appId: "1:31820881864:web:42ffc284260b35fee62afd",
//     measurementId: "G-0RGCPSNVMG"
// };

const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
    measurementId: VITE_MEASUREMENTID,
};

// console.log(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FiresbaseDB = getFirestore(FirebaseApp);
