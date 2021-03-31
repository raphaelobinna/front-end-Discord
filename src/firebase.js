import firebase from 'firebase'

const firebaseConfig = {
    // your firebase config
    apiKey: "AIzaSyDUIC6xaBv-oU9ZeuhT1DBtg8SXe-l4Lok",
    authDomain: "discord-clone-d1c62.firebaseapp.com",
    projectId: "discord-clone-d1c62",
    storageBucket: "discord-clone-d1c62.appspot.com",
    messagingSenderId: "152770523640",
    appId: "1:152770523640:web:62ef1c2cd12a456d58660d",
    measurementId: "G-2HLL10YTBX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db