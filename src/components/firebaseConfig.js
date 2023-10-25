import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD4AaWpO64gvUZmn-z_AgA9L90tshjnSYo",
  authDomain: "adminpanel-pourya.firebaseapp.com",
  projectId: "adminpanel-pourya",
  storageBucket: "adminpanel-pourya.appspot.com",
  messagingSenderId: "80520081428",
  appId: "1:80520081428:web:403102afb0829a6973b701"
};

// Initialize Firebase
export const appAuth = initializeApp(firebaseConfig);

