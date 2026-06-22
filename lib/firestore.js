import { doc, setDoc, getDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { getDbInstance } from './firebase';

const USER_COLLECTION = 'eduverse_users';

function db() {
  const instance = getDbInstance();
  if (!instance) return null;
  return instance;
}

export async function saveUserData(userId, data) {
  const firestore = db();
  if (!firestore) return false;
  try {
    await setDoc(doc(firestore, USER_COLLECTION, userId), data, { merge: true });
    return true;
  } catch (error) {
    console.error('Firestore save error:', error);
    return false;
  }
}

export async function loadUserData(userId) {
  const firestore = db();
  if (!firestore) return null;
  try {
    const snap = await getDoc(doc(firestore, USER_COLLECTION, userId));
    if (snap.exists()) return snap.data();
    return null;
  } catch (e) {
    console.warn('Firestore load failed:', e.message);
    return null;
  }
}

export async function getAllUsers() {
  const firestore = db();
  if (!firestore) return [];
  try {
    const snapshot = await getDocs(collection(firestore, USER_COLLECTION));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Firestore load all error:', error);
    return [];
  }
}

export async function deleteUser(userId) {
  const firestore = db();
  if (!firestore) return false;
  try {
    await deleteDoc(doc(firestore, USER_COLLECTION, userId));
    return true;
  } catch (e) {
    console.warn('Firestore delete failed:', e.message);
    return false;
  }
}

export async function checkUsername(username) {
  const firestore = db();
  if (!firestore) return false;
  try {
    const snapshot = await getDocs(collection(firestore, USER_COLLECTION));
    const match = snapshot.docs.find(d => d.data().username === username);
    return !match;
  } catch (e) {
    console.warn('Firestore checkUsername failed:', e.message);
    return false;
  }
}
