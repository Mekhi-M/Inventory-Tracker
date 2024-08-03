// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPJ7lsOEpXyl1aikvQLjaOY3r6k4c7C68",
  authDomain: "inventory-tracker-3d823.firebaseapp.com",
  projectId: "inventory-tracker-3d823",
  storageBucket: "inventory-tracker-3d823.appspot.com",
  messagingSenderId: "1073484172569",
  appId: "1:1073484172569:web:5ce94f7da64cae4f858988",
  measurementId: "G-WL8Y4R6JH4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
