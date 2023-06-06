// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhYW7CWTcCHezQUJsr-J7T18pB29vzfpE",
  authDomain: "kraftcamp.firebaseapp.com",
  projectId: "kraftcamp",
  storageBucket: "kraftcamp.appspot.com",
  messagingSenderId: "650270792178",
  appId: "1:650270792178:web:34d598deedf056ae17336b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;