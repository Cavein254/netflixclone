import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

//Seed database
const config = {
  apiKey: "AIzaSyBihCiDcfG0S5Ld98rMxyJY9tCq-jG_KnQ",
  authDomain: "netflix-4c350.firebaseapp.com",
  projectId: "netflix-4c350",
  storageBucket: "netflix-4c350.appspot.com",
  messagingSenderId: "1055561272501",
  appId: "1:1055561272501:web:9abe68a458dcbddecd02fc",
};
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
