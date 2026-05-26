import { doc, setDoc, getDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { getDbInstance } from './firebase';

const USER_COLLECTION = 'eduverse_users';

function db() {
  return getDbInstance();
}

function isOnline() {
  return typeof navigator !== 'undefined' && navigator.onLine;
}

function firestoreError(e) {
  if (e.code === 'unavailable' || e.code === 'network-error') return 'offline';
  if (e.code === 'permission-denied') return 'denied';
  if (e.code === 'not-found') return 'not_found';
  return 'unknown';
}

export async function saveUserData(userId, data) {
  if (!isOnline()) return false;
  try {
    await setDoc(doc(db(), USER_COLLECTION, userId), {
      ...data,
      updatedAt: new Date().toISOString(),
    }, { merge: true });
    return true;
  } catch (e) {
    const reason = firestoreError(e);
    if (reason !== 'offline') console.warn('Firestore save failed:', reason, e.message);
    return false;
  }
}

export async function loadUserData(userId) {
  if (!isOnline()) return null;
  try {
    const snap = await getDoc(doc(db(), USER_COLLECTION, userId));
    if (snap.exists()) return snap.data();
    return null;
  } catch (e) {
    const reason = firestoreError(e);
    if (reason !== 'offline') console.warn('Firestore load failed:', reason, e.message);
    return null;
  }
}

export async function getAllUsers() {
  if (!isOnline()) return [];
  try {
    const snap = await getDocs(collection(db(), USER_COLLECTION));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    const reason = firestoreError(e);
    if (reason !== 'offline') console.warn('Firestore getAllUsers failed:', reason, e.message);
    return [];
  }
}

export async function deleteUser(userId) {
  if (!isOnline()) return false;
  try {
    await deleteDoc(doc(db(), USER_COLLECTION, userId));
    return true;
  } catch (e) {
    const reason = firestoreError(e);
    if (reason !== 'offline') console.warn('Firestore delete failed:', reason, e.message);
    return false;
  }
}

export function getFirestoreStatus() {
  return isOnline() ? 'online' : 'offline';
}
