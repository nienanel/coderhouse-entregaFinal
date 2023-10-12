import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCK-b36TyeoR1-5vZTuA3350gCQaD6uoZk",

  authDomain: "panzas-ac563.firebaseapp.com",

  projectId: "panzas-ac563",

  storageBucket: "panzas-ac563.appspot.com",

  messagingSenderId: "732326161790",

  appId: "1:732326161790:web:d55d386410873fb772172f",

  measurementId: "G-HCRQDGBKQL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
