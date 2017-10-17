
import firebase from 'firebase';

 let DB_CONFIG = {
    apiKey: "AIzaSyAuY0CWq_QVo1qCVofzdWXxEdzvMi76zwA",
    authDomain: "androideat-d5769.firebaseapp.com",
    databaseURL: "https://androideat-d5769.firebaseio.com",
    projectId: "androideat-d5769",
    storageBucket: "androideat-d5769.appspot.com",
    messagingSenderId: "333521413896"
}
export const firebaseApp = firebase.initializeApp(DB_CONFIG);

export const db = firebaseApp.database(); //the real-time database
export const auth = firebaseApp.auth(); //the firebase auth namespace
export const storageKey = 'KEY_FOR_LOCAL_STORAGE';
export const isAuthenticated = () => {
    return !!auth.currentUser || !!localStorage.getItem(storageKey);
}
//export firebase.initializeApp(DB_CONFIG);
