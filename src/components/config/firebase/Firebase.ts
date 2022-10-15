import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const FirebaseConfig = {
  apiKey: "AIzaSyClpwFM_IR9W6ufOcSTz_W79V8RnyOWu7k",
  authDomain: "chat-11ffa.firebaseapp.com",
  projectId: "chat-11ffa",
  storageBucket: "chat-11ffa.appspot.com",
  messagingSenderId: "384978628314",
  appId: "1:384978628314:web:c0580ece699f418c6effe3",
};
export const app = initializeApp(FirebaseConfig);
export const auth = getAuth(app);
