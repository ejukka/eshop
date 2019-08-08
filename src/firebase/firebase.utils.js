import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBogXROcqlJzAUepk4_dzH89dHVxStWNhw",
  authDomain: "eshop-db-a93ea.firebaseapp.com",
  databaseURL: "https://eshop-db-a93ea.firebaseio.com",
  projectId: "eshop-db-a93ea",
  storageBucket: "",
  messagingSenderId: "896525334995",
  appId: "1:896525334995:web:866f007458885660"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
