import { doc, setDoc, getDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { getDbInstance } from './firebase';

const USER_COLLECTION = 'eduverse_users';

function db() {
  return getDbInstance();
}

export async function saveUserData(userId, data) {
  try {
    await setDoc(doc(db(), 'users', userId), data, { merge: true });
    return true;
  } catch (error) {
    console.error('Firestore save error:', error);
    return false;
  }
}

export async function loadUserData(userId) {
  try {
    const snap = await getDoc(doc(db(), USER_COLLECTION, userId));
    if (snap.exists()) return snap.data();
    return null;
  } catch (e) {
    console.warn('Firestore load failed:', e.message);
    return null;
  }
}

export async function getAllUsers() {
  try {
    const snapshot = await getDocs(collection(db(), 'users'));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Firestore load all error:', error);
    return [];
  }
}

export async function deleteUser(userId) {
  try {
    await deleteDoc(doc(db(), USER_COLLECTION, userId));
    return true;
  } catch (e) {
    console.warn('Firestore delete failed:', e.message);
    return false;
  }
}
