import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG1Nf6P-JkG_10UGgjdz4qIuu815qbmi4",
  authDomain: "fir-9-49c7e.firebaseapp.com",
  projectId: "fir-9-49c7e",
  storageBucket: "fir-9-49c7e.appspot.com",
  messagingSenderId: "24979644426",
  appId: "1:24979644426:web:7ae419c38f84471f023ff3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
const db = getFirestore();

// Collection ref
const colRef = collection(db, "books");

// Get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });

    console.log(books);
  })
  .catch((err) => {
    console.log.error(err);
  });
