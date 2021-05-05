import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDNbr1160BnC0ocYX7IozRkyKOojhrjyDA",
  authDomain: "ztm-e-commerce-clothing.firebaseapp.com",
  projectId: "ztm-e-commerce-clothing",
  storageBucket: "ztm-e-commerce-clothing.appspot.com",
  messagingSenderId: "971991900510",
  appId: "1:971991900510:web:863cad4df3cd903932efcf",
  measurementId: "G-E8KNKVTPFP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;