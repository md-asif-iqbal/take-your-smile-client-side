// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgL0rvlpJ6kBjv5NjZO06YKdjjWTiW8d4",
  authDomain: "take-your-smile-2024-update.firebaseapp.com",
  projectId: "take-your-smile-2024-update",
  storageBucket: "take-your-smile-2024-update.firebasestorage.app",
  messagingSenderId: "20505717284",
  appId: "1:20505717284:web:17d5387fc2463f973006b1",
  measurementId: "G-SSFCTW5T3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;