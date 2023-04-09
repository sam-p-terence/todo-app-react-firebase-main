// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTHDOMAIN,
//   projectId: YOUR_PROJECTID,
//   storageBucket: YOUR_STORAGEBUCKET,
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
//   appId: YOUR_APPID
// };


/////////////////////// Template


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvccjgSBi3wv7f_zRRX7LxIw6kkK_GU0M",
  authDomain: "todo-69bd3.firebaseapp.com",
  projectId: "todo-69bd3",
  storageBucket: "todo-69bd3.appspot.com",
  messagingSenderId: "990756361604",
  appId: "1:990756361604:web:1b74d72108d229dbbf79d1",
  measurementId: "G-J960MQXPTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)