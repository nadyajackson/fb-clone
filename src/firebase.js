// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC8cRO5j5M4_68T1-rRgXplsS-hTtHNtCM",
    authDomain: "facebook-clone-cb3e7.firebaseapp.com",
    projectId: "facebook-clone-cb3e7",
    storageBucket: "facebook-clone-cb3e7.appspot.com",
    messagingSenderId: "920839586376",
    appId: "1:920839586376:web:8b48d2d5282fed3d8b8e7d",
    measurementId: "G-XF7VTGQ4YK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider};
  export default db;