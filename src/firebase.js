
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBo886wDVNgk2ojGe0OiWlt2ccG8x-im_Q",
    authDomain: "rpa-de-crm-de-glp.firebaseapp.com",
    databaseURL: "https://rpa-de-crm-de-glp.firebaseio.com",
    projectId: "rpa-de-crm-de-glp",
    storageBucket: "rpa-de-crm-de-glp.appspot.com",
    messagingSenderId: "55214313391",
    appId: "1:55214313391:web:6b298752d94773cc0ea95a"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export  {firebase} 
