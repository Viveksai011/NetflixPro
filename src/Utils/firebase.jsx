// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO3Qv4Dho6BNsD0TjKEwU43BDqteGBR_A",
  authDomain: "new-netflix-be901.firebaseapp.com",
  projectId: "new-netflix-be901",
  storageBucket: "new-netflix-be901.appspot.com",
  messagingSenderId: "1057831461137",
  appId: "1:1057831461137:web:726347ba116f6d2cddecb0",
  measurementId: "G-CH9XBMJEDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();