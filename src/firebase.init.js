// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBE9iRuumoTbRrEji85NGMVkAn_E2_mPw",
    authDomain: "simple-firebase-amitopu.firebaseapp.com",
    projectId: "simple-firebase-amitopu",
    storageBucket: "simple-firebase-amitopu.appspot.com",
    messagingSenderId: "220464667335",
    appId: "1:220464667335:web:3d1dc0263272e4bac33ce2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
