import { doc, setDoc, getDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { getDbInstance } from './firebase';
import { logger } from './logger';

const USER_COLLECTION = 'eduverse_users';

function getFirestore() {
  const instance = getDbInstance();
  if (!instance) return null;
  return instance;
}

export async function saveUserData(userId, data) {
  const firestore = getFirestore();
  if (!firestore) return false;
  try {
    await setDoc(doc(firestore, USER_COLLECTION, userId), data, { merge: true });
    return true;
  } catch (error) {
    logger.error('Firestore', 'save error', { userId, error: error?.message });
    return false;
  }
}

export async function loadUserData(userId) {
  const firestore = getFirestore();
  if (!firestore) return null;
  try {
    const snap = await getDoc(doc(firestore, USER_COLLECTION, userId));
    if (snap.exists()) return snap.data();
    return null;
  } catch (e) {
    logger.warn('Firestore', 'load failed', { userId, error: e?.message });
    return null;
  }
}

export async function getAllUsers() {
  const firestore = getFirestore();
  if (!firestore) return [];
  try {
    const snapshot = await getDocs(collection(firestore, USER_COLLECTION));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    logger.error('Firestore', 'load all error', { error: error?.message });
    return [];
  }
}

export async function deleteUser(userId) {
  const firestore = getFirestore();
  if (!firestore) return false;
  try {
    await deleteDoc(doc(firestore, USER_COLLECTION, userId));
    return true;
  } catch (e) {
    logger.warn('Firestore', 'delete failed', { userId, error: e?.message });
    return false;
  }
}

export async function checkUsername(username) {
  const firestore = getFirestore();
  if (!firestore) return false;
  try {
    const snapshot = await getDocs(collection(firestore, USER_COLLECTION));
    const match = snapshot.docs.find(d => d.data().username === username);
    return !match;
  } catch (e) {
    logger.warn('Firestore', 'checkUsername failed', { username, error: e?.message });
    return false;
  }
}
