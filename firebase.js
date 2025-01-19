// Import yang dibutuhkan
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth"; // Import Authentication dan persistence
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Import Firestore
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuQjJWKG5I3_4AvU6oG2eVZZ654tb0fCU",
  authDomain: "penelitianudang.firebaseapp.com",
  databaseURL:
    "https://penelitianudang-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "penelitianudang",
  storageBucket: "penelitianudang.firebasestorage.app",
  messagingSenderId: "430149120354",
  appId: "1:430149120354:web:a94a7f9e8926fa60fafc3b",
  measurementId: "G-CGN7LE5ZCT",
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
