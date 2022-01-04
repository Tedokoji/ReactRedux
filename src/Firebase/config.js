import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAtuD41vJd45H8tk9YqdvmwzqQegIaeVUc",
  authDomain: "thuctapapi.firebaseapp.com",
  projectId: "thuctapapi",
  });
  
  export const db = getFirestore()
