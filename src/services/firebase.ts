import firebase from "firebase/app";

import 'firebase/auth'

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCl9nxsakTCiQ8GDBuShPC2wonwTFnvv28",
    authDomain: "workit-14b06.firebaseapp.com",
    databaseURL: "https://workit-14b06-default-rtdb.firebaseio.com",
    projectId: "workit-14b06",
    storageBucket: "workit-14b06.appspot.com",
    messagingSenderId: "123206268485",
    appId: "1:123206268485:web:965f91cbf2e8674410d52c",
    measurementId: "G-DY6KBS4ELY"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const database = firebase.firestore();

export { firebase, auth, database}



