import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDxPFZ0lSEf7CWWEknm3ytxea--0_7xg5g",
    authDomain: "e-library-d21fd.firebaseapp.com",
    projectId: "e-library-d21fd",
    storageBucket: "e-library-d21fd.appspot.com",
    messagingSenderId: "127463002475",
    appId: "1:127463002475:web:9c954dda2431eab3e6fc2e"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;