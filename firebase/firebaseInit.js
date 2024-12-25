import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASv1v5d8QUbWF1ikqwsZ-SPzi9Stibx58",
  authDomain: "tjp-x-community.firebaseapp.com",
  projectId: "tjp-x-community",
  storageBucket: "tjp-x-community.firebasestorage.app",
  messagingSenderId: "946252612923",
  appId: "1:946252612923:web:2b91194483622756a0631e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);