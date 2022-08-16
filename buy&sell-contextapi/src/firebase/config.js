import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBYl7iULkn3vPkDlGYys7rdZBrbzj4RHhg",
    authDomain: "project-24fa0.firebaseapp.com",
    projectId: "project-24fa0",
    storageBucket: "project-24fa0.appspot.com",
    messagingSenderId: "759244830620",
    appId: "1:759244830620:web:47350288b5a71a3af97a59",
    measurementId: "G-4ELNR9DJHL"
  };

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export