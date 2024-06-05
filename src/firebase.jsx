// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzMgKndU0sW9gArMrrNtUP_NiIY6ouC_w",
  authDomain: "car-buying-7cfc9.firebaseapp.com",
  projectId: "car-buying-7cfc9",
  storageBucket: "car-buying-7cfc9.appspot.com",
  messagingSenderId: "688744158769",
  appId: "1:688744158769:web:813a25cc3bfdb44672e710",
  measurementId: "G-NEDRVQX4VZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);


export {auth}