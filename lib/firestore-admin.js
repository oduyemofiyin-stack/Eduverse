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
  try {
    const snap = await firestore.collection(COLLECTION).doc(userId).get();
    return snap.exists ? { id: snap.id, ...snap.data() } : null;
  } catch (e) {
    console.error('Firestore getUserById error:', e);
    return null;
  }
}

export async function getUserByEmail(email) {
  const firestore = getDb();
  if (!firestore) return null;
  try {
    const snap = await firestore.collection(COLLECTION).where('email', '==', email).limit(1).get();
    if (snap.empty) return null;
    const doc = snap.docs[0];
    return { id: doc.id, ...doc.data() };
  } catch (e) {
    console.error('Firestore getUserByEmail error:', e);
    return null;
  }
}

export async function getAllUsers() {
  const firestore = getDb();
  if (!firestore) return [];
  try {
    const snapshot = await firestore.collection(COLLECTION).get();
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.error('Firestore getAllUsers error:', e);
    return [];
  }
}

export async function saveUser(userId, data) {
  const firestore = getDb();
  if (!firestore) return false;
  try {
    await firestore.collection(COLLECTION).doc(userId).set(data, { merge: true });
    return true;
  } catch (e) {
    console.error('Firestore saveUser error:', e);
    return false;
  }
}

export async function deleteUserById(userId) {
  const firestore = getDb();
  if (!firestore) return false;
  try {
    await firestore.collection(COLLECTION).doc(userId).delete();
    return true;
  } catch (e) {
    console.error('Firestore deleteUserById error:', e);
    return false;
  }
}
