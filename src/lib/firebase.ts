import type { FirebaseApp } from "firebase/app";
import { initializeApp, getApps } from "firebase/app";

// Firebase configuration provided in the issue description
const firebaseConfig = {
  apiKey: "AIzaSyBa3TeyMBB73kAfcQHvf3eBHHlBIk5V07k",
  authDomain: "advisely-b7db6.firebaseapp.com",
  projectId: "advisely-b7db6",
  storageBucket: "advisely-b7db6.firebasestorage.app",
  messagingSenderId: "247710014096",
  appId: "1:247710014096:web:8024b5f248fa33d47c5615",
  measurementId: "G-S2QWF683SY",
};

let app: FirebaseApp | null = null;

export const getFirebaseApp = (): FirebaseApp | null => {
  if (app) return app;
  if (typeof window === "undefined") return null; // Avoid initializing during SSR
  app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  return app;
};

// Initialize Analytics in a safe, client-only manner.
export const initFirebaseAnalytics = async () => {
  if (typeof window === "undefined") return null;
  const firebaseApp = getFirebaseApp();
  if (!firebaseApp) return null;
  try {
    // Dynamic import to avoid bundling analytics in server builds
    const { isSupported, getAnalytics } = await import("firebase/analytics");
    const supported = await isSupported();
    if (!supported) return null;
    const analytics = getAnalytics(firebaseApp);
    return analytics;
  } catch (err) {
    // Swallow errors to avoid breaking the app if analytics fails
    return null;
  }
};
