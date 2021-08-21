import { boot } from 'quasar/wrappers'
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAFkjycmx6CDswfBcURNa2rF99-7zjgnvo',
  authDomain: 'taller-92505.firebaseapp.com',
  databaseURL: 'https://taller-92505-default-rtdb.firebaseio.com',
  projectId: 'taller-92505',
  storageBucket: 'taller-92505.appspot.com',
  messagingSenderId: '1097333301733',
  appId: '1:1097333301733:web:2c1f25de8d207eb0290f0c',
  measurementId: 'G-2JSBJWJ15T'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, auth, timeStamp};

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
})
