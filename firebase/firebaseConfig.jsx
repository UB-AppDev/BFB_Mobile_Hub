// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMwNlhjtZUZAwOj0tKYnwNCagH5cyuuZc",
  authDomain: "bfb-mobile-hub.firebaseapp.com",
  projectId: "bfb-mobile-hub",
  storageBucket: "bfb-mobile-hub.firebasestorage.app",
  messagingSenderId: "891804868393",
  appId: "1:891804868393:web:65fab1218afb89212f2138",
  measurementId: "G-M8N11XXZVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };