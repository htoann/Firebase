import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

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

// Real time collection data
onSnapshot(colRef, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });

  console.log(books);
});

// Adding docs
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  });
  addBookForm.reset();
});

// Deleting docs
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", deleteBookForm.id.value);

  deleteDoc(docRef);
  deleteBookForm.reset();
});
