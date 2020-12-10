import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6-rPp7bT9iuCND4DCUNRW-rxWOENox6I",
  authDomain: "facebook-clone-88204.firebaseapp.com",
  projectId: "facebook-clone-88204",
  storageBucket: "facebook-clone-88204.appspot.com",
  messagingSenderId: "398076586185",
  appId: "1:398076586185:web:5b2988ebeaccdf4bbe4518",
  measurementId: "G-KXHBG21W45",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
