import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1J9tTq6msbFqq_TIF-RWbbeL6CWelxRw",
  authDomain: "web-portfolio-97ddf.firebaseapp.com",
  projectId: "web-portfolio-97ddf",
  storageBucket: "web-portfolio-97ddf.appspot.com",
  messagingSenderId: "215539139274",
  appId: "1:215539139274:web:e00d7f42dad07d2b6a2a33"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
