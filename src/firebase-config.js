import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3-DbZYk6LaH6TsnpocfxCRUredYmdDc4",
  authDomain: "auth-dbe80.firebaseapp.com",
  projectId: "auth-dbe80",
  storageBucket: "auth-dbe80.appspot.com",
  messagingSenderId: "880812787689",
  appId: "1:880812787689:web:afc8370ae468a6e2eead78",
  measurementId: "G-S5TF1ZZ4D1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
