// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCltsHYZLeIsUZgLFc5wo9qXh0oOEQXD3o",
  authDomain: "adana-catering-service.firebaseapp.com",
  projectId: "adana-catering-service",
  storageBucket: "adana-catering-service.appspot.com",
  messagingSenderId: "623327274242",
  appId: "1:623327274242:web:b246d80bebcbfe1aab4e1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;