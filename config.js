import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCz282nkMqE32DuK87bNivzCWnZO3Y-Cjo",
    authDomain: "yuck-aa45d.firebaseapp.com",
    projectId: "yuck-aa45d",
    storageBucket: "yuck-aa45d.appspot.com",
    messagingSenderId: "685620015428",
    appId: "1:685620015428:web:aed368ecf36b5f32ece711",
    measurementId: "G-XEHKQYJM2M"
  };


  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase}