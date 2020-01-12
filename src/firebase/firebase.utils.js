import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDQji1-8gsUi1fQG59mOnpr31xotlKGL-o",
  authDomain: "spital-darian.firebaseapp.com",
  databaseURL: "https://spital-darian.firebaseio.com",
  projectId: "spital-darian",
  storageBucket: "spital-darian.appspot.com",
  messagingSenderId: "186149567870",
  appId: "1:186149567870:web:268f399e93ae3f0e83472f",
  measurementId: "G-ER3JB9NCT9"
};
const apli = firebase.initializeApp(config);
const base = Rebase.createClass(apli.database());
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export { base };
