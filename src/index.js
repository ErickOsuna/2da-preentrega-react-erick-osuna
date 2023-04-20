import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsefYfkbbZdHyu7C0SsZAJZZTbWejiMTA",
  authDomain: "vga-store-erick-osuna.firebaseapp.com",
  projectId: "vga-store-erick-osuna",
  storageBucket: "vga-store-erick-osuna.appspot.com",
  messagingSenderId: "829809295911",
  appId: "1:829809295911:web:279e836ae334aac83e0402",
  measurementId: "G-8CF4DCT017"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

