import admin from 'firebase-admin';

const COLLECTION = 'eduverse_users';

let db = null;

export function getDb() {
  if (db) return db;
  if (admin.apps.length > 0) {
    db = admin.firestore();
    return db;
  }
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!serviceAccount) return null;
  try {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(serviceAccount)),
    });
    db = admin.firestore();
    return db;
  } catch {
    return null;
  }
}

export function isReady() {
  return getDb() !== null;
}

export async function getUserById(userId) {
  const firestore = getDb();
  if (!firestore) return null;
  const snap = await firestore.collection(COLLECTION).doc(userId).get();
  return snap.exists ? { id: snap.id, ...snap.data() } : null;
}

export async function getUserByEmail(email) {
  const firestore = getDb();
  if (!firestore) return null;
  const snap = await firestore.collection(COLLECTION).where('email', '==', email).limit(1).get();
  if (snap.empty) return null;
  const doc = snap.docs[0];
  return { id: doc.id, ...doc.data() };
}

export async function getAllUsers() {
  const firestore = getDb();
  if (!firestore) return [];
  const snapshot = await firestore.collection(COLLECTION).get();
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function saveUser(userId, data) {
  const firestore = getDb();
  if (!firestore) return false;
  await firestore.collection(COLLECTION).doc(userId).set(data, { merge: true });
  return true;
}

export async function deleteUserById(userId) {
  const firestore = getDb();
  if (!firestore) return false;
  await firestore.collection(COLLECTION).doc(userId).delete();
  return true;
}
