let app, auth, db, analytics, googleProvider;
let firebaseFailed = false;
let initStarted = false;

async function initFirebase() {
  if (typeof window === 'undefined') return;
  if (app) return;
  if (firebaseFailed) return;
  if (initStarted) return;
  initStarted = true;

  try {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    };

    const { initializeApp, getApps } = await import('firebase/app');
    const { getAuth, GoogleAuthProvider } = await import('firebase/auth');
    const { getFirestore } = await import('firebase/firestore');

    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
    db = getFirestore(app);
    googleProvider = new GoogleAuthProvider();

    import('firebase/analytics').then(({ getAnalytics, isSupported }) => {
      isSupported().then(yes => { if (yes) analytics = getAnalytics(app); }).catch(() => {});
    }).catch(() => {});
  } catch (e) {
    firebaseFailed = true;
    console.error('Firebase init failed:', e);
  }
}

export function getAuthInstance() {
  if (!app && !firebaseFailed && !initStarted) initFirebase();
  return auth;
}

export function getDbInstance() {
  if (!app && !firebaseFailed && !initStarted) initFirebase();
  return db;
}

export function getAnalyticsInstance() {
  if (!app && !firebaseFailed && !initStarted) initFirebase();
  return analytics;
}

export function getGoogleProvider() {
  if (!app && !firebaseFailed && !initStarted) initFirebase();
  return googleProvider;
}

export { app, auth, db, analytics, googleProvider };
export default app;
