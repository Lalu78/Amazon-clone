import  firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDUac1Ug5xH-uGNpyf93Ot13fgDOnPkxOc",
    authDomain: "lalu1-7da00.firebaseapp.com",
    projectId: "lalu1-7da00",
    storageBucket: "lalu1-7da00.appspot.com",
    messagingSenderId: "941004155404",
    appId: "1:941004155404:web:f9bbaf328145c71c86dc29"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);  
const db = firebase.firestore();
const auth = firebase.auth();
export default firebaseConfig
export { db, auth };