import firebase from "firebase";
import config from "../key/keys";

const firebaseDB = firebase.initializeApp(config).database();

export default firebaseDB;
