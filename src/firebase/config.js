// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCw3oNORHIWRNNxG_U0OAbT8rawQFD7R8E",
    authDomain: "react-cursos-8bd77.firebaseapp.com",
    projectId: "react-cursos-8bd77",
    storageBucket: "react-cursos-8bd77.appspot.com",
    messagingSenderId: "1067189630477",
    appId: "1:1067189630477:web:c0d65c862373909cb54744"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FiresbaseDB = getFirestore(FirebaseApp);
