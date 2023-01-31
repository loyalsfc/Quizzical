// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWMmfzqexea-maWkaKJzruxQi6prQLYfI",
  authDomain: "quizzical-f5661.firebaseapp.com",
  projectId: "quizzical-f5661",
  storageBucket: "quizzical-f5661.appspot.com",
  messagingSenderId: "819031117867",
  appId: "1:819031117867:web:aa39612d8e3e27ab3a1a6e",
  measurementId: "G-XM5DY1KDHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const auth = getAuth()

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {auth, provider}
export default db