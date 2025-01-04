// Import yang dibutuhkan
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth"; // Import Authentication dan persistence
import { getFirestore } from "firebase/firestore"; // Import Firestore
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy6TX8esSjQYWih7JsPUKjn38sSVPTnbM",
  authDomain: "innovilage2024.firebaseapp.com",
  projectId: "innovilage2024",
  storageBucket: "innovilage2024.firebasestorage.app",
  messagingSenderId: "601512383274",
  appId: "1:601512383274:web:7fd1f18f2fb9dcd7654453",
  measurementId: "G-V2TX1XSJ6L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics if supported
isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
    console.log("Firebase Analytics berhasil diinisialisasi.");
  } else {
    console.warn("Firebase Analytics tidak didukung di lingkungan ini.");
  }
});

// Initialize Authentication with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage), // Menambahkan AsyncStorage untuk persistensi
});

// Initialize Firestore
const db = getFirestore(app); // Firestore Database

export { app, auth, db };
