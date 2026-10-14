// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-MPybChMRdZO8y__iHWok4Nm7FkEr5YQ",
    authDomain: "react-auth-integration-80a5e.firebaseapp.com",
    projectId: "react-auth-integration-80a5e",
    storageBucket: "react-auth-integration-80a5e.firebasestorage.app",
    messagingSenderId: "976631824480",
    appId: "1:976631824480:web:ce1e4503a75ce8f54b0305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)