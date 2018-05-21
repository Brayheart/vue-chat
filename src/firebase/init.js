import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBj2W0xrfl1l8OYZcZnM08hDM-QSqOPIdo",
authDomain: "ninja-chat-5e6b8.firebaseapp.com",
databaseURL: "https://ninja-chat-5e6b8.firebaseio.com",
projectId: "ninja-chat-5e6b8",
storageBucket: "ninja-chat-5e6b8.appspot.com",
messagingSenderId: "556341106999"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()