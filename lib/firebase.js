import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "REMOVED",
  authDomain: "REMOVED.firebaseapp.com",
  databaseURL: "https://REMOVED-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "REMOVED",
  storageBucket: "REMOVED.firebasestorage.app",
  messagingSenderId: "REMOVED",
  appId: "1:REMOVED:web:REMOVED"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;