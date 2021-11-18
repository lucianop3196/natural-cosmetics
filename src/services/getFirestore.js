import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkghQTxKhzQzjSQh57ATsI-1BHrtfCWIE",
  authDomain: "natural-cosmetics-56970.firebaseapp.com",
  projectId: "natural-cosmetics-56970",
  storageBucket: "natural-cosmetics-56970.appspot.com",
  messagingSenderId: "414395105923",
  appId: "1:414395105923:web:12faaabc07fad957ed91b6",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
