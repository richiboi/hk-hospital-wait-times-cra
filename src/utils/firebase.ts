import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCidiOolWrIRqSMGBlcg8bgUX7J3vGnrH4",
  authDomain: "hospital-wait-times-hk.firebaseapp.com",
  projectId: "hospital-wait-times-hk",
  storageBucket: "hospital-wait-times-hk.appspot.com",
  messagingSenderId: "1059585496809",
  appId: "1:1059585496809:web:549710ae7cf3b1f4ae4278",
  measurementId: "G-Q0JB3T2M00",
};

const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase);
