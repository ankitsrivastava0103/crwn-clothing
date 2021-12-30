/* eslint-disable no-unused-vars */
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC2ghFp12ik2y-j-sKNVHNPRngqfvLwLls',
  authDomain: 'crwn-db-a1867.firebaseapp.com',
  projectId: 'crwn-db-a1867',
  storageBucket: 'crwn-db-a1867.appspot.com',
  messagingSenderId: '417885943885',
  appId: '1:417885943885:web:3928dc79dcf0108dc14404',
  measurementId: 'G-NRKY545Y92',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
