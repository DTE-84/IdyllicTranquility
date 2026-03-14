// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUNiSGmYR94aWBpcYDUNS9Xmh8tkA5Hag",
  authDomain: "idyllictranquility-2d93a.firebaseapp.com",
  projectId: "idyllictranquility-2d93a",
  storageBucket: "idyllictranquility-2d93a.firebasestorage.app",
  messagingSenderId: "257914395852",
  appId: "1:257914395852:web:6fe760d1ca5507302d3669",
  measurementId: "G-470M8F8T42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);