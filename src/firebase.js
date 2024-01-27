// import firebase from 'firebase';

import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAPRoSCQTqI-f9UwKqwWLzByZL1dHxNfbc",
    authDomain: "netflix-build-aa550.firebaseapp.com",
    projectId: "netflix-build-aa550",
    storageBucket: "netflix-build-aa550.appspot.com",
    messagingSenderId: "747447011465",
    appId: "1:747447011465:web:41186b1cf353ebd6a85e58"
  };

const firebaseApp = initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
// const db = firebaseApp.firestore();

const auth = getAuth(firebaseApp);
// const auth = firebase.auth();

export { auth };
export default db;


// commented is firebase version 12 code
