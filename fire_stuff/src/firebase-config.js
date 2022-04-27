import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCASyPhUmlQuK8nSpVLDbHnvOgadajDL-Y",
  authDomain: "jobs-d7ada.firebaseapp.com",
  projectId: "jobs-d7ada",
  storageBucket: "jobs-d7ada.appspot.com",
  messagingSenderId: "821760284597",
  appId: "1:821760284597:web:a74e07ac386007f39b2bfc",
  measurementId: "G-E1YPPT5M56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

// export co