export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzNlEY0nFIR2mDrUpai9bAC7ZBbLIr7mY",
  authDomain: "pacsun-app.firebaseapp.com",
  databaseURL: "https://pacsun-app-default-rtdb.firebaseio.com",
  projectId: "pacsun-app",
  storageBucket: "pacsun-app.appspot.com",
  messagingSenderId: "361561235605",
  appId: "1:361561235605:web:4c740d33bfffda041f7b9c",
  measurementId: "G-7Q9YEW93ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);