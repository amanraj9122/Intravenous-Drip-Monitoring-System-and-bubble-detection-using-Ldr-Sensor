
import firebase from "firebase";
//import {getDatabse} from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyD3BmO0Zpi9H99WBejHgNr_LehLW27X4Yk",
  authDomain: "dripmononitotor.firebaseapp.com",
  databaseURL: "https://dripmononitotor-default-rtdb.firebaseio.com",
  projectId: "dripmononitotor",
  storageBucket: "dripmononitotor.appspot.com",
  messagingSenderId: "234308526876",
  appId: "1:234308526876:web:69d5d15d3bb0b9ef8510d9",
  measurementId: "G-HNSQ09QXMZ"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const realdb = firebaseApp.database();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export {realdb};
  export default db;