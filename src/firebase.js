import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "breezeai-assessment.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENTER_ID,
  appId: process.env.REACT_APP_APP_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app, auth}