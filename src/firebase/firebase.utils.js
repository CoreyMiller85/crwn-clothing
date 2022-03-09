import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB8ZuCMUzwQgpGGnsjRrWTDAydKiO7lo8o',
  authDomain: 'crwn-clothing-fc565.firebaseapp.com',
  projectId: 'crwn-clothing-fc565',
  storageBucket: 'crwn-clothing-fc565.appspot.com',
  messagingSenderId: '791551221070',
  appId: '1:791551221070:web:aa40295144b8b52247521f',
};

firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
