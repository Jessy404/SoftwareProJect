// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANLV2lWDs-xdskBuBx_eVLGNGk5fOpGcY",
  authDomain: "fire-aa783.firebaseapp.com",
  projectId: "fire-aa783",
  storageBucket: "fire-aa783.appspot.com",
  messagingSenderId: "632319750661",
  appId: "1:632319750661:web:bfde9866ee743ddbce626c",
  measurementId: "G-824KE9Y020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth();
const db = getFirestore();
// const auth = getAuth(app,{presistence : getReactNativePresistence (ReactNativeAsyncStorage)});



export {auth , db};