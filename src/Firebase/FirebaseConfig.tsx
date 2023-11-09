// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJmdfnAJ-2eY2YmaNF0wEjISISeWNgscU",
  authDomain: "whatsapp-8d2f7.firebaseapp.com",
  projectId: "whatsapp-8d2f7",
  storageBucket: "whatsapp-8d2f7.appspot.com",
  messagingSenderId: "471632754965",
  appId: "1:471632754965:web:a9334db31ec0f740ff911c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// connect to firebase db
export const db = getFirestore(app);

// connect proj with auth service of firebase
export const auth = getAuth(app);
export default app;

// Firebase storage reference
export const storage = getStorage(app);
