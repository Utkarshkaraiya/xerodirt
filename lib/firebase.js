// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnhqNv-4maN-xgh6L11Banu3e33vOjQRM",
    authDomain: "xerodirt-472ee.firebaseapp.com",
    projectId: "xerodirt-472ee",
    storageBucket: "xerodirt-472ee.firebasestorage.app",
    messagingSenderId: "565317365687",
    appId: "1:565317365687:web:5aa7d7e20e92ccfd618232",
    measurementId: "G-MDD43C10D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*const analytics = getAnalytics(app);*/
export const db = getFirestore(app);