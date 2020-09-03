import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCkMF1cZ8dbeKq64Yt-Lg_98IRHG353vP8",
  authDomain: "e-clothing-db-6cced.firebaseapp.com",
  databaseURL: "https://e-clothing-db-6cced.firebaseio.com",
  projectId: "e-clothing-db-6cced",
  storageBucket: "e-clothing-db-6cced.appspot.com",
  messagingSenderId: "629107593965",
  appId: "1:629107593965:web:19a4b2ba9e67c9607df2e4",
  measurementId: "G-VXD61HYCNY",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
