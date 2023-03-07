import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ElXfhqQd-6mqM2Z8ahUnCrwGQqmBjdw",
  authDomain: "chatgpt-messenger-e3fcc.firebaseapp.com",
  projectId: "chatgpt-messenger-e3fcc",
  storageBucket: "chatgpt-messenger-e3fcc.appspot.com",
  messagingSenderId: "441256997972",
  appId: "1:441256997972:web:07c6b9ca5de7ce2f4f69c1",
  measurementId: "G-E438HYTLG7",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
