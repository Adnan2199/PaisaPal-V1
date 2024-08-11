// firebase.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebase = {
  apiKey: "AIzaSyDu2QC2S3yEqXfDtOsFa_B_KHapKsGds6I",
  authDomain: "paisapal333.firebaseapp.com",
  projectId: "paisapal333",
  storageBucket: "paisapal333.appspot.com",
  messagingSenderId: "632959066169",
  appId: "1:632959066169:web:16e4e96be29cbbd2802de8",
  measurementId: "G-7M6KXGV2NR"
};

const app = initializeApp(firebase);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const firestore = getFirestore(app);

export{ auth, firestore };