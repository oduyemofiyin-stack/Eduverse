let app, auth, db, analytics, googleProvider;
let firebaseFailed = false;

function initFirebase() {
  if (typeof window === 'undefined') return;
  if (app) return;
  if (firebaseFailed) return;

  try {
    const { initializeApp, getApps } = require('firebase/app');
    const { getAuth, GoogleAuthProvider } = require('firebase/auth');
    const { getFirestore } = require('firebase/firestore');
    const { getAnalytics, isSupported } = require('firebase/analytics');

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

    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
    db = getFirestore(app);
    googleProvider = new GoogleAuthProvider();

    isSupported().then(yes => { if (yes) analytics = getAnalytics(app); }).catch(() => {});
    googleProvider.setCustomParameters({ prompt: 'select_account' });

    // Initialize App Check
    const appCheckKey = process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_KEY;
    if (appCheckKey) {
      try {
        const { initializeAppCheck, ReCaptchaV3Provider } = require('firebase/app-check');
        initializeAppCheck(app, {
          provider: new ReCaptchaV3Provider(appCheckKey),
          isTokenAutoRefreshEnabled: true,
        });
      } catch (e) {
        console.warn('App Check init failed:', e.message);
      }
    }
  } catch (e) {
    firebaseFailed = true;
    console.error('Firebase init failed:', e);
  }
}

export function getAuthInstance() {
  initFirebase();
  return auth;
}

export function getDbInstance() {
  initFirebase();
  return db;
}

export function getAnalyticsInstance() {
  initFirebase();
  return analytics;
}

export { app, auth, db, analytics, googleProvider };
export default app;