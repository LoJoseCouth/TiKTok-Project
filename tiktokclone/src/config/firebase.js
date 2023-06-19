// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_NcECIT7hW9eWDNWrO5c5-ByiFUnbak4",
  authDomain: "tiktok---jornada-9d30b.firebaseapp.com",
  projectId: "tiktok---jornada-9d30b",
  storageBucket: "tiktok---jornada-9d30b.appspot.com",
  messagingSenderId: "804667166752",
  appId: "1:804667166752:web:a400095bd989c76df96c45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;