import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDSsMmAcfRmShf8vYZpHlK8LzempcI5qDc",
    authDomain: "taxitn-ca2c6.firebaseapp.com",
    databaseURL: "https://taxitn-ca2c6.firebaseio.com",
    projectId: "taxitn-ca2c6",
    storageBucket: "taxitn-ca2c6.appspot.com",
    messagingSenderId: "295941309390",
    appId: "1:295941309390:web:adcefbbd03658d0b05219f",
    measurementId: "G-YC4L3MQCND"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
