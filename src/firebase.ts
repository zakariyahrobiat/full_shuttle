import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTscwQ61rLa3qFZj2ukkc4J-5vOu0fG9U",
  authDomain: "shuttle-dc562.firebaseapp.com",
  projectId: "shuttle-dc562",
  storageBucket: "shuttle-dc562.appspot.com",
  messagingSenderId: "108129170063",
  appId: "1:108129170063:web:35cb2193c542478c07f6fa",
  measurementId: "G-8EC680NE2H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);
export { app, auth, db, database };
const analytics = getAnalytics(app);
