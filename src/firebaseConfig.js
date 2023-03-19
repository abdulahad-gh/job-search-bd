import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey:process.env._REACT_APP_apiKey,
  authDomain:process.env._REACT_APP_authDomain,
  projectId:process.env._REACT_APP_projectId,
  storageBucket:process.env._REACT_APP_storageBucket,
  messagingSenderId:process.env._REACT_APP_messagingSenderId,
  appId:process.env._REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
console.log(app)
export default auth;