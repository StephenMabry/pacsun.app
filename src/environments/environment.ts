// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'pacsun-app',
    appId: '1:361561235605:web:4c740d33bfffda041f7b9c',
    databaseURL: 'https://pacsun-app-default-rtdb.firebaseio.com',
    storageBucket: 'pacsun-app.appspot.com',
    apiKey: 'AIzaSyDzNlEY0nFIR2mDrUpai9bAC7ZBbLIr7mY',
    authDomain: 'pacsun-app.firebaseapp.com',
    messagingSenderId: '361561235605',
    measurementId: 'G-7Q9YEW93ZQ',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

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